import React from 'react'

const TodoWrite = ({ list, word, handlerWord, handlerList, inputContent, inputTtitle }) => {
    return (
        <div>
            <div>{console.log(list)}</div>
            <div><input type="text" onChange={handlerWord} name='title' value={word.title || ''} ref={inputTtitle} /></div>
            <div><input type="text" onChange={handlerWord} name='content' value={word.content || ''} ref={inputContent} /></div>
            <div>
                <button onClick={handlerList}>WRITE</button>
            </div>
        </div>
    )
}

export default TodoWrite