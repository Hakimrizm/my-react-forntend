export default function Status({ tasks, completedTasks })
{
  return <p>{(tasks.length)} {tasks.length <= 1 ? 'item' : 'items'} letf, {completedTasks.length} complete.</p>
}
