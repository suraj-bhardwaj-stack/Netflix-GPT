import './App.css';
import Body from './components/Body'
import { onAuthStateChanged} from 'firebase/auth';
import { auth } from './utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser , removeUser} from './utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName } = user;
        dispatch(addUser({uid :uid, email:email, displayName:displayName}))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });
 },[])
  return (
    <div className="App">
        <Body/>
    </div>
  );
}

export default App;
