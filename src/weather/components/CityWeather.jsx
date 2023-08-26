import sunny from './../../assets/img/weather/clear.png'

export default function CityWeather() {
  return (
    <div className="mt-1 text-slate-300 flex items-center justify-between">
      <div className="city">
        <h1 className="text-4xl">Bern</h1>
        <p>Sunny</p>
        <h1 className="text-4xl font-bold mt-5">18 C</h1>
      </div>
      <div className="temp">
        <img src={sunny} alt="Sunny" />
      </div>
    </div>
  )
}
