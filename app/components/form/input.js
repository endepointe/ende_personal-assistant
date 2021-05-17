/*
  props:
    - name
    - value
    - for
    - id
    - type
    - placeholder
    - aria-label

            <input
              id="lname"
              onChange={setData}
              type="text" name="lname" placeholder="Gren"
              className="w-full h-12" />
        </div>
*/
export default function input(props) {
  return (
    <div className="flex flex-row items-center bg-white shadow-md border-gray-200 border-solid">
      <div className="flex justify-end w-32 mr-4 ml-2">
        <div className="max-w-max">
          <label htmlFor={props.for} aria-label={props.aria}>{props.labelValue}</label>
        </div>
      </div>
      <input
        id={props.id}
        onChange={props.fn}
        type={props.type} lname={props.name} placeholder={props.placeholder}
        className="w-full h-12" />
    </div>
  )
}