import React from 'react'

const TodoList = ({ list, setList }) => {

    const handlerRemove = (id) => {
        setList(list.filter(it => id !== it.id))
    }
    return (
        <div>
            <h2>list</h2>
            <ul>
                {
                    list.map((li, idx) => <li key={li.id}>{li.title} {li.content}  <button
                        onClick={() => handlerRemove(li.id)}
                    >DEL</button></li>)
                }
            </ul>
            <hr />
        </div>
    )
}

export default TodoList