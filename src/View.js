import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const View = ({ boardList, setBoardList }) => {

    const GO = useNavigate();
    const { id } = useParams();
    const v = boardList.find(it => String(it.id) === id);
    const deleteHandler = () => {
        const newList = boardList.filter(it => it.id !== v.id)
        setBoardList(newList)
        GO('/board')
    }
    const modifyHandler = () => {

    }

    return (
        <div>
            <div>{v.name}</div>
            <div>{v.title}</div>
            <div>{v.content}</div>
            <div>{v.date}</div>
            <button></button>
        </div>
    )
}

export default View