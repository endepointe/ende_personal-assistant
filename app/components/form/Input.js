export default function Input(props) {
  const classes = `${props.className} h-12 w-full`;
  return (
    <input
      id={props.id}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      onClick={props.onClick}
      onChange={props.onChange}
      className={classes} />
  )
}