type ButtonProps = {
  title: string,
  color?: string,
  disabled?: boolean,
  onClick: () => void,
}

export const Button = ({title, color, disabled, onClick}: ButtonProps) => {
return <button disabled={disabled} onClick={onClick} className={`${color} border-1 border-solid rounded-md px-6 py-1 disabled:text-gray-500`}>{title}</button>
}