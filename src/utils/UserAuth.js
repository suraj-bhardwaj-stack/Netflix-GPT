import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";
const userAuth = (isLogin , email , password , setFormError, userName ,dispatch) => {
      if(!isLogin){
            createUserWithEmailAndPassword(auth,  email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                    displayName: userName, photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                    const {uid, email, displayName } = user;
                    dispatch(addUser({uid :uid, email:email, displayName:displayName}))
                    }).catch((error) => {
                    setFormError(error)
                    });
                    console.log(user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setFormError(errorCode + " " + errorMessage)
                });
        }else{
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                     setFormError(errorCode + " " + errorMessage)
                });
        }
}


export default userAuth