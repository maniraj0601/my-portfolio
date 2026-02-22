export function Container({ children, className = '', size = 'default', ...props }) {
  const sizes = {
    sm: 'max-w-2xl',
    default: 'max-w-5xl',
    lg: 'max-w-7xl',
    full: 'max-w-full',
  }

  return (
    <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`} {...props}>
      {children}
    </div>
  )
}
