import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";
const userAuth = (isLogin , email , password , setFormError) => {
      if(!isLogin){
            createUserWithEmailAndPassword(auth,  email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
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