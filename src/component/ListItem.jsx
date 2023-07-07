import moment from "moment";
import 'moment/locale/ko';
import { db } from '../firebase'
import { doc, deleteDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';

export default function Listitem({ note }) {
    const navigate = useNavigate()

    async function removeNote(id){
        if(confirm('삭제하시겠습니까?')) {
          await deleteDoc(doc(db, "notes", id))
        }
      }

  function editTodo(){
    navigate('/edit',{state:note})
  }

  return (
    <li>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
        <div className="extra">
            {/* <div className="date">{note.date.toDate().toLocaleString()}</div> */}
            <div className="date">
                {moment(note.date.toDate()).format('YYYY-MM-DD dddd, hh:mm:ss')}
            </div>
            <div className="btns">
                <span onClick={editTodo}>수정</span>
                <span onClick={() => removeNote(note.id)}>삭제</span>
            </div>
        </div>
     </li>
  )
}
