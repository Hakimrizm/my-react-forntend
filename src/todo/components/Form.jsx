import { useState } from "react"
import { generateId } from "../../utils/helper"

export default function Form({ onAddTask }) {
  const [task, setTask] = useState('')

  const handleTask = (e) => {
    e.preventDefault()

    if (!task) return

    const newTask = { id: generateId(), taskValue: task, checked: false }
    onAddTask(newTask)

    setTask('')
  }

  return (
    <div className='sm:w-96 border mx-auto p-2 rounded-md mt-4 bg-opacity-60 backdrop-filter backdrop-blur-lg bg-white'>
      <form action="" onSubmit={handleTask} className="relative">
        <input 
          type="text"
          className="w-full p-1 rounded"
          placeholder='Add Task...'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="absolute w-6 bg-slate-700 text-white rounded right-1 top-1 hover:bg-slate-800 transition-all duration-300">+</button>
      </form>
    </div>
  )
}
