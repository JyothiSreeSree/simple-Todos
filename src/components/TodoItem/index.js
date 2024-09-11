// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoList, onDelete} = props
  const {id, title} = todoList
  const onDeleting = () => {
    onDelete(id)
  }
  console.log(todoList)
  return (
    <li>
      <div className="list">
        <p>{title}</p>
        <div>
          <button className="btn" onClick={onDeleting}>
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoItem
