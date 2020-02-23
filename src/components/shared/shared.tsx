import React from "react"

interface DarkBackgroundProps {
  className?: string
  children?: React.ReactNode
}

export const DarkBackground = ({
  className,
  children,
}: DarkBackgroundProps) => {
  return (
    <div className={`bg-background-dark ${className ? className : ""}`}>
      {children}
    </div>
  )
}
