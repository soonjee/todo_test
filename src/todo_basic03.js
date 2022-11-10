import React, { useRef, useState } from 'react'

//삭제기능 넣은 게시판 파일
const App = () => {
  const [todo, setTodo] = useState({});
  const [todolist, setTodolist] = useState([]); //배열로 만들어줘야 함 ([])

  const num = useRef(1);
  const handlerInput = (e) => {
    const { name, value } = e.target; // 아래 축약버전
    setTodo({
      ...todo,
      [name]: value,
      id: num.current,
      done: false,
    })
    // setTodo({ ...todo, [e.target.name]: e.target.value })
  }

  const handlerList = () => {
    if (todo.title.length < 5) {
      alert('5자이상 더 입력하세요.')
      return
    }

    setTodolist([...todolist, todo]);
    setTodo({
      title: "",
      content: "",
    });

    num.current++
    //같은 방법, num.current = num.current + 1
  }

  const handlerDelet = (id) => {
    //todolist.filter(it => id === it.id) : todolist를 필터(순회)하면서 it 을 가져오는데 it과 id를 같지않은 놈을 들고와서 반환하겠다~.
    setTodolist(todolist.filter(it => id !== it.id));
  }

  const HandlerModify = (id) => {
    console.log(id);
    setTodolist(todolist.map(it => (
      id === it.id
        ? {
          ...it,
          done: !it.done
        }
        : it
    )))
  }

  return (
    <div style={{ textAlign: "center", }}>
      <ul>
        {
          todolist.map((it, idx) => <li key={it.id} className={it.done ? '' : 'on'}>
            {/* 삭제, 체크했을대 done이 되게끔 */}
            <input type='checkbox' onChange={() => HandlerModify(it.id)} />
            {it.id} {it.title} / {it.content}
            <button onClick={() => handlerDelet(it.id)}>삭제</button>
            {console.log(it.done)}
          </li>)
        }
      </ul>

      <input onChange={handlerInput} name="title" value={todo.title || ''} />
      <input onChange={handlerInput} name="content" value={todo.content || ''} />
      <button onClick={handlerList}>WRITE</button>
      {console.log(todo, num.current)}
      {/* 넘버 1번 나오게 하려면 current 쓰면 됨*/}

      {/*
      <input type="text" onChange={e => setTodo({ [e.target.value]: e.target.value })} name="title" />
      <input type="text" onChange={e => setTodo({ [e.target.value]: e.target.value })} name="content" />
      <button onClick={() => setTodolist([...todolist, todo])}>WRITE</button>
      */}
    </div>
  )
}

export default App