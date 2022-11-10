import React, { useRef, useState } from 'react'

//삭제기능 넣기 전 게시판 파일
const App = () => {
  const [todo, setTodo] = useState({});
  const [todolist, setTodolist] = useState([]); //배열로 만들어줘야 뜬다! ([])

  const num = useRef(1);
  const handlerInput = (e) => {
    const { name, value } = e.target // 아래 축약버전
    setTodo({
      ...todo,
      [name]: value,
      id: num.current
    })
    // setTodo({ ...todo, [e.target.name]: e.target.value })
  }

  const handlerList = () => {
    if (it.title.length < 5) {
      alert('5자이상 더 입력하세요.')
      return
    }

    setTodolist([...todolist, todo]);
    setTodo({
      title: "",
      content: "",
    });

    num.current = num.current + 1
    //같은 방법, num.current++ 
  }

  return (
    <div style={{ textAlign: "center", }}>
      <ul>
        {
          todolist.map((it, idx) => <li key={it.id}>{it.id}{it.title} / {it.content}</li>)
        }
      </ul>

      <input type="text" onChange={handlerInput} name="title" value={todo.title || ''} />
      <input type="text" onChange={handlerInput} name="content" value={todo.content || ''} />
      <button onClick={handlerList}>WRITE</button>

      {/*
      <input type="text" onChange={e => setTodo({ [e.target.value]: e.target.value })} name="title" />
      <input type="text" onChange={e => setTodo({ [e.target.value]: e.target.value })} name="content" />
      <button onClick={() => setTodolist([...todolist, todo])}>WRITE</button>
      */}


      {console.log(todo, num.current)}
      {/* 넘버 1번 나오게 하려면 current 쓰면 됨*/}
    </div>
  )
}

export default App