type ButtonProps = {
  title: string,
  color: string,
  backgroundColor: string,
  onClick: () => void,
}

export const Button = ({title, color, backgroundColor, onClick}: ButtonProps) => {
return <button onClick={onClick} className={`${color} ${backgroundColor}`}>{title}</button>
}