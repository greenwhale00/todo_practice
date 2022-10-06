import React, { useState } from 'react'

const App = () => {

    const [input, setInput] = useState();
    const [boardList, setBoardList] = useState([]);
    return (
        <div>
            {input}
            <input name='name' onChange={e => setInput(e.target.value)} value={input} />
            <button>Write</button>



        </div>
    )
}

export default App