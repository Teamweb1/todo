
import EditModal from './EditModal'
import "./styles/todo-list.css"

function TodoList(props) {
    const close = props.closeEditModal
    const submit = props.OnChangeSubmit

    const editValue = props.editValue

console.log(props.todoValue)
    return (
        <div>
            <ul>
                {props.todoValue.map((value) => (
                    <li    key={value.id}>
                        <span style={{textDecoration : value.ischecked ? 'line-through' : ''}}>{value.name}</span>
                        <button onClick={() => props.deleteItemHandler(value.id)}>delete</button>
                        <button onClick={() => props.editItemHandler(value.id)}>Edit</button>
                        <button onClick={() => props.onChackedHandler(value.id)}>✔</button>
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