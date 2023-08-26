import image1 from './../../assets/img/todo/image1.png'

export default function NoTask() {
  return (
    <div className="noTask">
      <figure>
        <img src={image1} alt="Error icons created by Freepik - Flaticon" />
        <figcaption>
          <a href="https://www.flaticon.com/free-icons/error" title="error icons">Error icons created by Freepik - Flaticon</a>
        </figcaption>
      </figure>
      <p>No task yet. Add task for your life more better</p>
    </div>
  )
}
