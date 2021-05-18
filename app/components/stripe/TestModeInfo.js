import InfoIcon from '@material-ui/icons/Info';

export default function TestModeInfo() {
  return (

    <div className="flex flex-row justify-around items-center bg-yellow-50 w-full text-xs opacity-80 shadow border border-grey-100">
      <p className="font-bold">
        <span
          className="">
          <InfoIcon
            className="text-red-500 mx-3"
            fontSize="small" />
        </span>
        You're currently in test mode.
      </p>
      <button
        className="bg-white shadow-sm border font-bold m-2 p-1">Use test account</button>
    </div>
  )
}