import FormInputs from "../form-inputs/form-inputs.component";
import { useState ,useContext} from "react"
import { signInWithGooglePopup, 
         creatUserDocumentFromAuth,
         signInAuthUserWithSignInandPassword} from "../../utils/firebase/firebase.utils";
import '../sign-in-form/sign-in-form.styles.scss'
import Button from "../button/button.component";
import { UserContext } from "../contexts/user.context";



const defaultformfields = {
    email: '',
    password: ''
}


const SignInForm = () => {
    console.log("Hit")
    const [formfields, setformfields] = useState(defaultformfields);
    const {  password, email } = formfields;

    const {setCurrentState} = useContext(UserContext)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setformfields({ ...formfields, [name]: value })
    }

    const resetFormFields = () =>{
        setformfields(defaultformfields)
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithSignInandPassword(email,password)
            console.log(user);
            setCurrentState(user)

        resetFormFields()
        } catch (error) {
            switch(error.code){
                case 'auth/wrong-password':
                alert("Incorrect Password");
                break;
                case 'auth/user-not-found':
                alert("Email is not registered"); 
                break;
                default:
                console.log("Something Went Wrong",error);
                break;
            }
        }
    }

    const SignInWithGoogle = async () => {
        debugger
        const { user } = await signInWithGooglePopup();
        console.log(user);
        await creatUserDocumentFromAuth(user);
    };

    return (
        <div className="sign-up-container">
            <h1>Already have an Account</h1>
            <span> Sign In using Email</span>
            <form onSubmit={handleSubmit}>
            <FormInputs
                label='Email'
                inputOptions={{
                    type:'email', 
                    required :true,
                    onChange:handleChange ,
                    name:'email', 
                    value:email,
                }}
            />
             <FormInputs
                label='Enter your Password'
                inputOptions={{
                    type:'password', 
                    required :true,
                    onChange:handleChange ,
                    name:'password', 
                    value:password,
                }}
            />
                <div className="buttons-container">
                <Button type="submit">Sign In</Button>
                <Button type='button' onClick={SignInWithGoogle} buttonType='google'>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm