import React, { useRef, useState } from 'react'

// Todo 리스트 올리는 기능
// 여러가지 값을 받아오고 같이 입력되는 기능, 여러가지 = 객체 { key:value }
// 핸들이라는 변수를 만들어 코드 단축하기
// 입력창 입력 후 비우기 기능

const App = () => {
  const [word, setWord] = useState({});
  const [list, setList] = useState([]); //배열이 아니면 오류뿜뿜

  const num = useRef(1); //useRef를 불러올때 num은 current라는 프로퍼티가 있음

  const handlerWord = (e) => {
    const { name, value } = e.target;
    setWord({
      ...word,
      [name]: value,
      id: num.current
      // done: false,
    })
  }

  const handlerList = () => {
    if (word.tit.length < 5) {
      alert('더 적어');
      //1. 입력창을 비운다 2.그 입력창에 포커스를 준다.
      setWord({
        title: ""
      });
      inputTitle.current.focus();
      return
    }
    setList([...list, word]);
    setWord({
      tit: "",
      con: "",
    })
    num.current++ // num.current = num.current + 1 이렇게 쓰기도 가능
  }

  return (
    <div>
      <h2>list</h2>
      <ul>
        {
          list.map((li, idx) => <li key={idx}>{li.tit}{li.con}</li>)
          //id가 없으면 idx를 사용하자
        }
      </ul>
      <hr />
      <div>{console.log(console.log(word))}</div>
      <div><input type="text" onChange={handlerWord} name="tit" value={word.tit} ref={inputTitle} /></div>
      <div><input type="text" onChange={handlerWord} name="con" value={word.con} /></div>
      <div>
        <button onClick={handlerList}>WRITE</button>
        {/* setList자리에 배열 word를 대체. 그리고 입력한 값들을 나란히 나열하려면 ...list */}
      </div>
    </div>
  )
}

export default App