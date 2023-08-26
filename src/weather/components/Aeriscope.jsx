export default function Aeriscope() {
  return (
    <div className="bg-slate-800 p-4 rounded-lg text-slate-400 mt-3">
      <h3 className="uppercase">Air Condition</h3>
      <div className="flex justify-between mt-3">
        <div>
          <div className="mb-2">
            <p>Real Feel</p>
            <h4 className="font-bold text-2xl">30</h4>
          </div>
          <div className="mb-2">
            <p>Change of rain</p>
            <h4 className="font-bold text-2xl">0%</h4>
          </div>
        </div>
        <div>
          <div className="mb-2">
            <p>Wind</p>
            <h4 className="font-bold text-2xl">0,2 km/h</h4>
          </div>
          <div className="mb-2">
            <p>UV Index</p>
            <h4 className="font-bold text-2xl">3</h4>
          </div>
        </div>
      </div>
    </div>
  )
}