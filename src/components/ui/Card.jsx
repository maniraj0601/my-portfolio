export function Card({ children, className = '', as: Component = 'div', ...props }) {
  return (
    <Component
      className={`bg-surface rounded-xl border border-border shadow-sm ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={`px-4 py-3 sm:px-6 sm:py-4 border-b border-border ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardBody({ children, className = '', ...props }) {
  return (
    <div className={`px-4 py-4 sm:px-6 sm:py-5 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = '', ...props }) {
  return (
    <div className={`px-4 py-3 sm:px-6 sm:py-4 border-t border-border ${className}`} {...props}>
      {children}
    </div>
  )
}
