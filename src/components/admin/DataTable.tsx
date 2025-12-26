import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon, SearchIcon } from 'lucide-react';
interface Column<T> {
  key: keyof T | string;
  label: string;
  render?: (item: T) => React.ReactNode;
  sortable?: boolean;
}
interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T) => void;
  searchable?: boolean;
  searchPlaceholder?: string;
}
export function DataTable<T extends {
  id: string;
}>({
  data,
  columns,
  onRowClick,
  searchable = false,
  searchPlaceholder = 'Search...'
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };
  const filteredData = searchable ? data.filter(item => Object.values(item).some(value => String(value).toLowerCase().includes(searchQuery.toLowerCase()))) : data;
  const sortedData = sortKey ? [...filteredData].sort((a, b) => {
    const aVal = a[sortKey as keyof T];
    const bVal = b[sortKey as keyof T];
    const modifier = sortOrder === 'asc' ? 1 : -1;
    return aVal > bVal ? modifier : -modifier;
  }) : filteredData;
  return <div className="space-y-4">
      {searchable && <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
          <input type="text" placeholder={searchPlaceholder} value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" />
        </div>}

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full">
          <thead className="bg-bg-secondary">
            <tr>
              {columns.map(column => <th key={String(column.key)} className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                  <button onClick={() => column.sortable && handleSort(String(column.key))} className={`flex items-center gap-2 ${column.sortable ? 'hover:text-accent cursor-pointer' : ''}`}>
                    {column.label}
                    {column.sortable && sortKey === column.key && (sortOrder === 'asc' ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />)}
                  </button>
                </th>)}
            </tr>
          </thead>
          <tbody className="bg-card divide-y divide-border">
            {sortedData.map(item => <tr key={item.id} onClick={() => onRowClick?.(item)} className={`${onRowClick ? 'cursor-pointer hover:bg-bg-secondary' : ''} transition-colors`}>
                {columns.map(column => <td key={String(column.key)} className="px-6 py-4 whitespace-nowrap text-sm">
                    {column.render ? column.render(item) : String(item[column.key as keyof T] || '-')}
                  </td>)}
              </tr>)}
          </tbody>
        </table>
        {sortedData.length === 0 && <div className="text-center py-12 text-text-secondary">
            No data found
          </div>}
      </div>
    </div>;
}