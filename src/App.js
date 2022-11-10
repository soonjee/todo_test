import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import List from './board/List';
import View from './board/View';
import Write from './board/Write';
import Modify from './board/Modify';

const App = () => {

  const [input, setInput] = useState({});
  const [boardList, setBoardList] = useState(
    // JSON.parse(localStorage.getItem('list')
  ); //list를 뿌린다면 배열로 해줘야 한다. ([]);
  const id = useRef(1);

  useEffect(() => {
    setInput({
      name: "",
      title: "",
      content: "",
    });
    window.localStorage.setItem("boardList", JSON.stringify(boardList));
  }, [boardList]);

  return (
    <div >

      {/* List 누르면 View가 보이는 구현 */}
      <header>
        <nav>
          <ul>
            <li><NavLink to='/'>HOME</NavLink></li>
            <li><NavLink to='/board'>board</NavLink></li>
            <li><NavLink to='/view'>view</NavLink></li>
            <li><NavLink to='/write'>write</NavLink></li>
          </ul>
        </nav>
        <button onClick={() => localStorage.setItem('list', boardList)}>LocalStorage Write</button>
        <button onClick={() => console.log(localStorage.getItem('list'))}>LocalStorage get</button>
      </header>

      <Routes>
        <Route path='/' element={<div>HOME</div>} />
        <Route path='/board' element={<List boardList={boardList} setBoardList={setBoardList} />} />
        <Route path='/view:id' element={<View boardList={boardList} setBoardList={setBoardList} />} />
        <Route path='/modify:id' element={<Modify boardList={boardList} setBoardList={setBoardList} />} />
        <Route path='/write' element={<Write input={input} setInput={setInput} boardList={boardList} setBoardList={setBoardList} id={id} />} />
      </Routes>

      {console.log(input)}
    </div>
  )
}

export default App