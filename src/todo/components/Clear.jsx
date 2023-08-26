export default function Clear({ tasks, onClearTasks })
{
  const onHandleClearTask = () => {
    onClearTasks()
  }

  return (
    <>
      {(tasks.length == 0 ? '' : (
        <button type="button" className='bg-red-700 text-white px-2 p-1 rounded hover:bg-red-800 transition-all duration-300' onClick={onHandleClearTask}>Clear</button>
      ))}
    </>
  )
}
