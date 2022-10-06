import React, { useRef, useState } from 'react'

const App = () => {

    const [input, setInput] = useState();
    const [boardList, setBoardList] = useState([]);
    const id = useRef(1);
    const inputHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
            date: new Date().toLocaleDateString(),
            id: id.current
        })
    }

    const submitHandler = () => {
        setBoardList([
            ...boardList,
            input
        ])
        id.current++;
        setInput({
            name: "",
            title: "",
            content: "",
        })
    }
    return (
        <div>
            {console.log(id)}
            <ul>
                {
                    boardList.map((it, idx) => {
                        return (
                            <li key={it.id}>
                                <div>{idx + 1}</div>
                                <div>{it.name}</div>
                                <div>{it.title}</div>
                                <div>{it.content}</div>
                                <div>{it.date}</div>
                            </li>
                        )
                    }).reverse()
                }
            </ul>
            {console.log(input)}
            <input name='name' onChange={inputHandler} value={input.value} />
            <input name='title' onChange={inputHandler} />
            <textarea name='content' onChange={inputHandler} />
            <button onClick={submitHandler}>Write</button>



        </div>
    )
}

export default App