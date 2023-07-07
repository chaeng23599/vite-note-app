import { useRef } from 'react'
import { db } from '../firebase'
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export default function Write() {
  const navigate = useNavigate()
  const titleRef = useRef()
  const contentRef = useRef()

  async function writeNote(e) {
    e.preventDefault()

    const docRef = doc(collection(db, 'notes'))
    const data = {
      id: docRef.id,
      title: titleRef.current.value,
      content: contentRef.current.value,
      date: serverTimestamp(),
    }
    await setDoc(docRef, data)
    navigate('/')
  }

  return (
    <div className='container'>
      <h2>글쓰기</h2>
      <form className='form'>
        <label>제목</label>
        <input type='text' ref={titleRef} />
        <label htmlFor=''>내용</label>
        <textarea name='' id='' cols='30' rows='10' ref={contentRef}></textarea>
        <button onClick={writeNote}>쓰기</button>
      </form>
    </div>
  )
}
