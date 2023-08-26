import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Todo from "./todo/Todo"
import Weather from './weather/Weather';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/todo' element={<Todo />}/>
      <Route path='/weather' element={<Weather />}/>
    </Routes>
  )
}

export default App
