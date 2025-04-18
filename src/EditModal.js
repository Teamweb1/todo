import { useState } from "react"


function EditModal(props) {

    const [changeValue, setChangeValue] = useState(props.editValue.name)

    return (
        <div className='modal'>
            <input type="text" value={changeValue} onChange={(e) =>
                setChangeValue(e.target.value)} />
            <button onClick={() => props.isEditModalCencel()}>cancel</button>
            <button onClick={() => props.submit(changeValue, props.editValue.id)}>Submit</button>
        </div>
    )
}

export default EditModal