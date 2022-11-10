import React, { useState } from "react";

function App() {
  const [input, setInput] = useState(); //그냥 변수로는 안 들어가기 때문에 useState 사용
  const [list, setList] = useState([]); // 변수로 들어가기때문에 이름은 마음대로다!

  return (

    <div style={{ textAlign: "center", padding: "100px 0" }}>
      {/* {input} */}
      <ul>
        {
          list.map((it, idx) => <li key={idx}>{it}</li>)
        }
      </ul>
      <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
      <button onClick={() => setList([...list, input])}>입력</button>


    </div>

  );
}

export default App;
