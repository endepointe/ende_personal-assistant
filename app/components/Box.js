export default function Box({ children }) {
  return (
    <div className="flex flex-col items-center select-none">
      <div className="flex flex-col w-11/12 min-h-screen">
        {children}
      </div>
    </div>
  )
}