import Search from "./components/Search"
import CityWeather from "./components/CityWeather"
import WeatherToday from "./components/WeatherToday"
import Aeriscope from "./components/Aeriscope"

export default function Weather()
{
  return (
    <div className="bg-slate-900 text-white p-4">
      <main>
        <Search />
        <CityWeather />
        <WeatherToday />
        <Aeriscope />
      </main>
      <aside></aside>
    </div>
  )
}
