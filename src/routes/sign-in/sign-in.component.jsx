import {signInWithGooglePopup,creatUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'



const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await creatUserDocumentFromAuth(user);
      };

    return (
        <div>
            <h1></h1>
            <button onClick={logGoogleUser}>
                Add Poppup
            </button>
        </div>
    )
}

export default SignIn