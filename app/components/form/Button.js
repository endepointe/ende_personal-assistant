export default function Button(props) {
  const classes = `${props.className} h-12 w-full`;
  return (
    <button
      id={props.id}
      onClick={props.onClick}
      className={classes}
    >{props.children}</button>
  )
}