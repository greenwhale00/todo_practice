import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Modify = ({ boardList, setBoardList }) => {
    const GO = useNavigate();
    const { id } = useParams();
    const v = boardList.find(it => String(it.id) === id);
    const modifyHandler = () => {
        GO('/view/' + v.id)
    }


    const [input, setInput] = useState();

    const inputHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
            date: new Date().toLocaleDateString(),
            id: id.current
        })
    }

    return (
        <div>
            <input name='name' value={v.name} />
            <input name='title' value={v.title} />
            <textarea name='content' value={v.content} />
            <button onClick={modifyHandler}>MODIFY</button>
        </div>
    )
}

export default Modify