import FormInputs from "../form-inputs/form-inputs.component";
import { useState, useContext} from "react"
import { createAuthUserWithSignInandPassword, creatUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import '../sign-up-form/sign-up-form.styles.scss'
import Button from "../button/button.component";


const defaultformfields = {
    displayName: '',
    email: '',
    password: '',
    confirmpassword: ''
}


const SignUpForm = () => {

    const [formfields, setformfields] = useState(defaultformfields);
    const { displayName, password, email, confirmpassword } = formfields;

    // const val = useContext(UserContext)

    console.log("Hiting")

    const handleChange = (event) => {
        const { name, value } = event.target;
        setformfields({ ...formfields, [name]: value })
    }

    const resetFormFields = () =>{
        setformfields(defaultformfields)
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(password != confirmpassword){
            alert("Password Did not match")
            return;
        }
        try {
            const {user} =  await createAuthUserWithSignInandPassword(
                email,
                password
                );
               
             await creatUserDocumentFromAuth(user,{displayName})
             resetFormFields()  
        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                alert("Cannot create a user, Email is already resgistered")
            }
            console.log("Something Went Wrong",error)
        }
    }

    return (
        <div className="sign-up-container">
            <h1>Don't have an Account</h1>
            <span> Sign Up using Email</span>
            <form onSubmit={handleSubmit}>
            <FormInputs
                label='User Name'
                inputOptions={{
                type:'text', 
                required :true,
                onChange:handleChange ,
                name:'displayName', 
                value:displayName,
            }}
            />
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
                label='Enter a new Password'
                inputOptions={{
                    type:'password', 
                    required :true,
                    onChange:handleChange ,
                    name:'password', 
                    value:password,
                }}
            />
            <FormInputs
                label='Confirm Password'
                inputOptions={{
                    type:'password', 
                    required :true,
                    onChange:handleChange ,
                    name:'confirmpassword', 
                    value:confirmpassword,
                }}
            />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm