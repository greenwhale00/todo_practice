import React from 'react'

const TodoList = ({ list }) => {


    return (
        <div>
            <h2>list</h2>


            <ul>
                {
                    list.map((li, idx) => <li key={idx}>{li.title} {li.content}</li>)
                }
            </ul>

            <hr />
        </div>
    )
}

export default TodoList