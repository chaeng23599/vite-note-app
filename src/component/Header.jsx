import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <h1>
        <Link to={'/'}>👩 노트</Link>
      </h1>
      <Link to={'/write'}>
        <button>글쓰기</button>
      </Link>
    </header>
  )
}
