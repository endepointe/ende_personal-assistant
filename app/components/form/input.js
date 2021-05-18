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
export default function Input(props) {
  return (
    <div className="flex flex-row items-center bg-white shadow-md border-gray-200 border-solid">
      <div className="flex justify-end mr-4 ml-2">
        <div className="w-32">
          <label htmlFor={props.for} aria-label={props.aria}>{props.labelValue}</label>
        </div>
      </div>
      {/* only the input has dimensions */}
      <input
        id={props.id}
        onChange={props.fn}
        type={props.type} lname={props.name} placeholder={props.placeholder}
        className="w-full h-12" />
    </div>
  )
}