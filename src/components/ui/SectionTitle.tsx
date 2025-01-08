import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  theme?: 'dark' | 'light';
}

export function SectionTitle({ title, subtitle, theme = 'dark' }: SectionTitleProps) {
  return (
    <div className="text-center">
      <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-luxury-cream' : 'text-gray-900'}`}>
        {title}
      </h2>
      <p className={`mt-4 text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
        {subtitle}
      </p>
    </div>
  );
}
