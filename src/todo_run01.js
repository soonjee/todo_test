import React, { useState } from 'react'

// Todo 리스트 올리는 기능 
const App = () => {
    const [word, setWord] = useState('What?');
    const [list, setList] = useState([]); //배열이 아니면 오류뿜뿜
    return (
        <div>
            <h2>list</h2>
            <ul>
                {
                    list.map(li => <div>{li}</div>)
                }
            </ul>
            <hr />
            <div>{word}</div>
            <div><input type="text" onChange={e => setWord(e.target.value)} /></div>
            <div>
                <button onClick={() => setList([...list, word])}>WRITE</button>
                {/* setList자리에 배열 word를 대체. 그리고 입력한 값들을 나란히 나열하려면 ...list */}
            </div>
        </div>
    )
}

export default App