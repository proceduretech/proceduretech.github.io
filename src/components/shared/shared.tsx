import React from "react"
import { Button } from "react-bootstrap"

export interface IntrinsicProps {
  className?: string
  children?: React.ReactNode
}

export const DarkBackground = ({ className, children }: IntrinsicProps) => {
  return (
    <div className={`bg-background-dark ${className ? className : ""}`}>
      {children}
    </div>
  )
}

type ButtonTypes = "button" | "submit" | "reset"

interface ButtonProps {
  onClick?: VoidFunction
  type?: ButtonTypes
}

export const PrimaryThemeButton = ({
  className,
  children,
  onClick,
  type,
}: IntrinsicProps & ButtonProps) => {
  return (
    <Button
      className={`btn-secondary py-1 px-4 font-weight-bold rounded-sm ${
        className ? className : ""
      }`}
      onClick={onClick}
      type={type ? type : "button"}
    >
      {children}
    </Button>
  )
}

export const SecondaryThemeButton = ({
  className,
  children,
  onClick,
  type,
}: IntrinsicProps & ButtonProps) => {
  return (
    <Button
      className={`btn-secondary py-1 px-4 font-weight-bold rounded-sm bg-transparent text-accent ${
        className ? className : ""
      }`}
      onClick={onClick}
      type={type ? type : "button"}
    >
      {children}
    </Button>
  )
}
