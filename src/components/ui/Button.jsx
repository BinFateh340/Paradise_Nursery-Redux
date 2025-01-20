import React from 'react';

const variantStyles = {
  default: 'bg-blue-500 hover:bg-blue-600 text-white',
  outline: 'bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-700',
  destructive: 'bg-red-500 hover:bg-red-600 text-white',
};

const sizeStyles = {
  default: 'py-2 px-4',
  sm: 'py-1 px-2 text-sm',
  lg: 'py-3 px-6 text-lg',
  icon: 'p-2',
};

export function Button({ 
  children, 
  variant = 'default', 
  size = 'default', 
  className = '', 
  ...props 
}) {
  const variantClass = variantStyles[variant] || variantStyles.default;
  const sizeClass = sizeStyles[size] || sizeStyles.default;

  return (
    <button
      className={`font-medium rounded-md transition-colors duration-200 ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

