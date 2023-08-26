import {useState, useEffect} from "react"
import NoTask from "./components/NoTask"
import Form from "./components/Form"
import Status from "./components/Status"
import Tasks from "./components/Tasks"
import Clear from "./components/Clear"

export default function Todo()
{
  const initialValue = [
    {id: 1, taskValue: 'code', checked: false},
    {id: 2, taskValue: 'Make some coffee', checked: true}
  ]

  const [tasks, setTasks] = useState(initialValue)
  const [completedTasks, setCompletedTasks] = useState([])

  useEffect(() => {
    const updatedCheckedTasks = tasks.filter(task => task.checked !== false)
    setCompletedTasks(updatedCheckedTasks)
  }, [tasks])

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const handleDeleteTask = (idTask) => {
    const updatedTasks = tasks.filter(task => task.id !== idTask)
    setTasks(updatedTasks);
  }

  const handleTaskToggle = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, checked: !task.checked } : task
    )

    setTasks(updatedTasks)
  };

  return (
    <div className="bg-emerald-500 h-screen">
     <div className='container mx-auto p-3'>
        <Form onAddTask={handleAddTask} />

        <div className="sm:w-96 border mx-auto p-2 rounded-md mt-4 bg-opacity-60 backdrop-filter backdrop-blur-lg bg-white">
          <div className="mb-4">
            <h2 className="font-normal text-4xl">Todo's</h2>
            <Status tasks={tasks} completedTasks={completedTasks} />
          </div>

          {(tasks.length == 0 ? (
            <NoTask />
          ) : (
            tasks.map(task => (
              <Tasks task={task} key={task.id} onDeleteTask={handleDeleteTask} onHandleTask={handleTaskToggle} />
            ))
          ))}

          <Clear tasks={tasks} onClearTasks={() => setTasks([])}/>
        </div>
      </div>
    </div>
  )
}
