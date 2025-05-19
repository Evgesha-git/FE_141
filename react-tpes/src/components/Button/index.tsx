import type { FC } from "react";

interface ButtonProps {
  loding: boolean,
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  error: boolean,
  label: string,
  style?: React.CSSProperties,
}

const Button: FC<ButtonProps> = ({
  error,
  label,
  loding,
  onClick,
  style
}) => {

  return (
    <button
      onClick={(e) => onClick(e)}
      style={{
        border: error ? '1px solid rgb(255, 47, 47)' : '1px solid #efefef',
        borderRadius: '4px',
        background: error ? 'rgb(255, 110, 110)' : '#efefef',
        ...style
      }}
      disabled={loding}
    >{label}</button>
  )
}

export default Button