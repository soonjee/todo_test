import { useNavigate } from "react-router-dom"

const Write = ({ input, setInput, setBoardList, boardList, id }) => {

    const GO = useNavigate()
    const InputHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
            date: new Date().toLocaleDateString(),
            id: id.current
        })
    }
    const sumiHandler = () => {
        setBoardList([
            ...boardList,
            input
        ])
        localStorage.setItem('list', JSON.stringify(boardList))

        id.current++;
        setInput({
            name: "",
            title: "",
            content: "",
        })
        GO('/board')
    }
    return (
        <div>
            <input name='name' onChange={InputHandler} value={input.name || ''} />
            <input name='title' onChange={InputHandler} value={input.title || ''} />
            <textarea name='content' onChange={InputHandler} value={input.content || ''} />
            <button onClick={sumiHandler}>글쓰기</button>
            {/* 버튼을 클릭 했을 때, list를 쌓이게 하려면 onClick을 이용해 setboardList를 불러온다. */}
            {/* 그리고 쌓으려는 ...boardList 값을 불러온다. */}
        </div>
    )
}

export default Write