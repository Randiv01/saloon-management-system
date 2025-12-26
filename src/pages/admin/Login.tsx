import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScissorsIcon, LockIcon, MailIcon } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {
    login
  } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const success = login(email, password);
    if (success) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials. Try: admin@luxesalon.com / admin123');
    }
  };
  return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-secondary/20 to-black p-4">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-accent/10 border-2 border-accent">
              <ScissorsIcon className="w-12 h-12 text-accent" />
            </div>
          </div>
          <h1 className="text-4xl font-serif font-bold text-white mb-2">
            Admin Panel
          </h1>
          <p className="text-gray-400">Sign in to manage your salon</p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <MailIcon className="absolute left-3 top-11 w-5 h-5 text-accent" />
              <Input label="Email" type="email" placeholder="admin@luxesalon.com" value={email} onChange={e => setEmail(e.target.value)} required className="pl-10" />
            </div>

            <div className="relative">
              <LockIcon className="absolute left-3 top-11 w-5 h-5 text-accent" />
              <Input label="Password" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required className="pl-10" />
            </div>

            {error && <div className="p-3 rounded-lg bg-secondary/10 border border-secondary text-secondary text-sm">
                {error}
              </div>}

            <Button type="submit" size="lg" className="w-full">
              Sign In
            </Button>
          </form>

          <div className="mt-6 p-4 rounded-lg bg-bg-secondary border border-border">
            <p className="text-sm text-text-secondary text-center">
              <strong className="text-accent">Demo Credentials:</strong>
              <br />
              Email: admin@luxesalon.com
              <br />
              Password: admin123
            </p>
          </div>
        </div>
      </motion.div>
    </div>;
}