import React from "react"

interface DarkBackgroundProps {
  children?: React.ReactNode
}

export const DarkBackground = ({ children }: DarkBackgroundProps) => {
  return <div className="bg-background-dark">{children}</div>
}
