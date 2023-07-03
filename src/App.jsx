import './App.css'
import { db } from "./firebase"

export default function App() {
  console.log(db)

  return(
    <div className='App'>
      <header>
        <h1>📖 노트</h1>
        <button>글쓰기</button>
      </header>

      <ul className="list">
        <li>
          <h2>파이어스토어</h2>
          <p>안녕하세요</p>
          <div className="extra">
            <p>2023-12-30</p>
            <div className="btns">
              <span>수정</span>
              <span>삭제</span>
            </div>
          </div>
        </li>
        <li>
          <h2>파이어스토어</h2>
          <p>안녕하세요</p>
          <div className="extra">
            <p>2023-12-30</p>
            <div className="btns">
              <span>수정</span>
              <span>삭제</span>
            </div>
          </div>
        </li>
        <li>
          <h2>파이어스토어</h2>
          <p>안녕하세요</p>
          <div className="extra">
            <p>2023-12-30</p>
            <div className="btns">
              <span>수정</span>
              <span>삭제</span>
            </div>
          </div>
        </li>
        <li>
          <h2>파이어스토어</h2>
          <p>안녕하세요</p>
          <div className="extra">
            <p>2023-12-30</p>
            <div className="btns">
              <span>수정</span>
              <span>삭제</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}