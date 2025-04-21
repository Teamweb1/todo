import { useState } from "react"
import TodoList from "./TodoList"
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [editValue, setEditValue] = useState('')
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [values, setValues] = useState([])
  const [checked, setChecked] = useState(true)


  const formHandler = (e) => {
    e.preventDefault()
  }
  // Create
  const clickFormBtnHandler = () => {
    if (inputValue == '') {
      alert("Bo'sh maydonni to'ldiring")
    }
    else {
      const newData = {
        name: inputValue,
        id: uuidv4(),
        ischecked: false
      }

      setValues([...values, newData])

      setInputValue('')
    }
  }
  // delete
  const deleteItemHandler = (id) => {
    const newValues = values.filter((value) => {
      return value.id !== id
    })
    setValues(newValues)
  }

  // isOpen
  const editItemHandler = (id) => {
    const newEditValues = values.filter((value) => {
      return value.id == id
    })

    const editValueItem = newEditValues[0]
    setEditValue(editValueItem)
    setIsEditModalOpen(true)
  }

  // close 
  const closeEditModal = () => {
    setIsEditModalOpen(false)
  }

  // Edit 
  const OnChangeSubmit = (submitValue, id) => {
    const newValues = values.filter((value) => {
      if (value.id == id) {
        value.name = submitValue

      }
      return values
    })
    setValues(newValues)
    closeEditModal()
  }

  const onChackedHandler = (id) => {
    const newValues = values.filter((value) => {
      setChecked(!checked)
      if (value.id == id) {
       value.ischecked = checked
      }
      return values
    })
    setValues(newValues)
  }

  return (
    <>
      <form onSubmit={formHandler}>
        <label>
          Name:
          <br />
          <input
            type="text"
            name="name"
            value={inputValue}
            onChange={(e) =>
              setInputValue(e.target.value)} />
        </label>
        <br /> <br />
        <button
          onClick={clickFormBtnHandler}>Submit
        </button>
      </form>

      <TodoList
        todoValue={values}
        deleteItemHandler={deleteItemHandler}
        editItemHandler={editItemHandler}
        isEditModalOpen={isEditModalOpen}
        closeEditModal={closeEditModal}
        editValue={editValue}
        OnChangeSubmit={OnChangeSubmit}
        onChackedHandler={onChackedHandler}
        checked={checked}
      />
    </>
  )
}

export default App