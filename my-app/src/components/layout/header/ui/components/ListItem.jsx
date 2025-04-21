const ListItem = ({ title = '', onClick, children, ...props }) => {

  return (
    <li onClick={onClick} style={{ ...props.style }}>
      {!!title && <p>{title}</p>}
      {children}
    </li>
  )
}

export default ListItem