import * as React from "react"
import { Button } from "react-bootstrap"

type ButtonTypes = "button" | "submit" | "reset"

interface IButtonProps {
  title: string
  onClick?: VoidFunction
  classes?: string
  type?: ButtonTypes
}

const ThemeButton = ({ title, onClick, classes, type }: IButtonProps) => {
  let className = "py-1 px-4 font-weight-bold rounded-sm"
  if (classes) {
    className = classes + " " + className
  }
  return (
    <Button
      className={className}
      onClick={onClick}
      type={type ? type : "button"}
    >
      {title}
    </Button>
  )
}

export default ThemeButton
