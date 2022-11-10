import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const List = ({ boardList, setBoardList }) => {
    // const LocalList = JSON.parse(localStorage.getItem('list'));

    return (
        // ul 은 게시판 기능, 밑 input과 버튼은 글쓰기 버튼 기능역할
        <ul>
            {
                boardList.map((it, idx) => {
                    return (
                        <li key={idx}>
                            <div>{idx + 1} </div>
                            <div>{it.name} </div>
                            <div>
                                <Link to={'/view/' + it.id}>
                                    {it.title}
                                </Link>
                            </div>
                            <div>{it.content} </div>
                            <div>{it.date} </div>
                        </li>
                    )
                }).reverse()
            }
        </ul>
    )
}
export default List

