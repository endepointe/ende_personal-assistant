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
export default function Box({ children }) {
  return (
    <div className="flex flex-col items-center select-none">
      <div className="flex flex-col w-11/12 min-h-screen">
        {children}
      </div>
    </div>
  )
}