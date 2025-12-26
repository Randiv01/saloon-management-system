import React from 'react';
interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
  name?: string;
}
export function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  className = '',
  name
}: InputProps) {
  return <div className={`flex flex-col gap-2 ${className}`}>
      {label && <label className="text-sm font-medium text-text">
          {label} {required && <span className="text-secondary">*</span>}
        </label>}
      <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} required={required} className="px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 text-text placeholder-text-secondary" />
    </div>;
}