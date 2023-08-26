import { useState } from "react"

export default function Tasks({ task, onDeleteTask, onHandleTask })
{
  const handleDeleteTask = (taskId) => {
    onDeleteTask(taskId)
  }

  const handleTaskToggle = (taskId) => {
    onHandleTask(taskId)
  }

  return (
    <div className="flex justify-between mb-4">
      <div>
        <input 
          type="checkbox"
          id={task.id}
          value={task.taskValue}
          checked={task.checked}
          onChange={() => handleTaskToggle(task.id)}
          className="mr-2"
        />
        <label htmlFor={task.id} className={(task.checked ? 'line-through capitalize' : 'capitalize')}>{ task.taskValue }</label>
      </div>
      <button type="button" onClick={() => handleDeleteTask(task.id)} className="bg-red-600 w-6 rounded text-white hover:bg-red-700 transition-all duration-300">X</button>
    </div>
  )
}