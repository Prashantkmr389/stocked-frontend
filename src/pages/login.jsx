import React, {useState} from 'react'
import './../styles/Login.css'

function Login() {
    const [formData, setFormData] = useState({
        username:'',
        password:'',
    });
    const handleInputChange = (e)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const [errors, setErrors] = useState({
        username:'',
        password:'',
    })

    const validate = ()=>{
        let isValid = true;
        const errorsCopy = {...errors}

        if(!formData.username){
            errorsCopy.username = "Please enter phone number or email.!";
            isValid = false;
        } else {
            const phoneRegex = /^[0-9]{10}$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!phoneRegex.test(formData.username) && !emailRegex.test(formData.username)){
                errorsCopy.username = 'Please enter a valid phone number or email'
                isValid = false;
            }
            else{
                errorsCopy.username = '';
            }

            if(!formData.password){
                errorsCopy.password = 'Please enter your password.';
                isValid = false;
            } else {
                errorsCopy.password = '';
            }
            setErrors(errorsCopy)
            return isValid
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)
        if(validate()){
            setFormData({
                username:'',
                password:''
            })
        }
        
    }


  return (
    <div className='login-container'>
        
        <form onSubmit={handleSubmit} className='login-Form'>
            <h2>Login</h2>
            <div className='form-group'>
                <label htmlFor="userName">Phone or Email:</label>
                <input 
                    type="text"
                    id='username'
                    name='username'
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number or email"
                    required
                />
                {errors.username && <span className='error-message'>{errors.username}</span>}

            </div>
            <div className='form-group'>
                <label htmlFor="password">
                    Password:
                </label>
                <input 
                    type="password"     
                    id='password'
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    required
                />
                {errors.password && <span className='error-message'>{errors.password}</span>}

            </div>
            <button type='submit' className='loginBtn'>Login</button>
        </form>
        <button type='submit' className='googleSignBtn'>Google Sign in</button>
    </div>
    
  )
}

export default Login