import type { FC } from "react";

interface ListItemProps {
  children?: string | React.ReactNode | React.ReactNode[],
  style?: React.CSSProperties,
}

const ListItem: FC<ListItemProps> = ({ children, style }) => {

  return (
    <div
      style={{
        background: '#cdcdcd',
        ...style
      }}
    >
      {children}
    </div>
  )
}

export default ListItem