
import { useRef } from 'react'
import EditModal from './EditModal'
import "./styles/todo-list.css"

function TodoList(props) {
    const close = props.closeEditModal
    const submit = props.OnChangeSubmit

    const editValue = props.editValue

  `  const itemWithIdRef = useRef(null);
    function handleGetId(e) {
        console.log(e)
        itemWithIdRef.current.className = 'todo_item_checked'

        console.log(itemWithIdRef.current)
      }
`
    return (
        <div>
            <ul>
                {props.todoValue.map((value) => (
                    <li  ref={itemWithIdRef}  key={value.id}>
                        <span>{value.name}</span>
                        <button onClick={() => props.deleteItemHandler(value.id)}>delete</button>
                        <button onClick={() => props.editItemHandler(value.id)}>Edit</button>
                        <button onClick={handleGetId}>✔</button>
                    </li>

                ))}
            </ul>
            {props.isEditModalOpen
                ? <EditModal
                    submit={submit}
                    editValue={editValue}
                    isEditModalCencel={close} />
                : null}
        </div>
    )
}

export default TodoList