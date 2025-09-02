import React from 'react';

type PillProps = { children: React.ReactNode; intent?: 'default' | 'primary' | 'danger'; };

export default function Pill({ children, intent = 'default' }: PillProps) {
  return (
    <span className={
      'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ' +
      (intent === 'primary' ? 'bg-blue-600 text-white' : intent === 'danger' ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-700')
    }>
      {children}
    </span>
  );
}