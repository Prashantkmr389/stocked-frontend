import React, {useState} from 'react'
import './../styles/Signup.css'

function Signup() {
    const [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
    })

    const validDateForm = ()=>{
        const errorsCopy = {}
        if(!formData.firstName.trim()){
            errorsCopy.firstName= 'First Name is required'
        }
        if (!formData.lastName.trim()) {
            errorsCopy.lastName = 'Last name is required';
        }
        if (!formData.email.trim()) {
            errorsCopy.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errorsCopy.email = 'Invalid email address';
        }
        if (!formData.password.trim()) {
            errorsCopy.password = 'Password is required';
        } else if (formData.password.length < 6) {
            errorsCopy.password = 'Password must be at least 6 characters';
        }

        if (formData.password !== formData.confirmPassword) {
            errorsCopy.confirmPassword = 'Passwords do not match';
        }
        setErrors(errorsCopy)
        return Object.keys(errorsCopy).length === 0;


    }


    const [errors, setErrors] = useState({})

    const handleInputChange = (e)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(validDateForm()){
            console.log(formData)
            setFormData({
                firstName:'',
                lastName:'',
                email:'',
                password:'',
                confirmPassword:'',
            })
        }
        

    }
  return (
    <div className='signup-container'>
        <form onSubmit={handleSubmit} className='signup-form'>
            <h2>Sign Up</h2>
            <div className='form-group'>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text"
                    name='firstName'
                    placeholder='First Name'
                    value={formData.firstName}
                    onChange={handleInputChange}
                 />
                 {formData.firstName && <span className='error-message'>{errors.firstName}</span>}
            </div>
            <div className='form-group'>
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text"
                    name='lastName'
                    placeholder='Last Name'
                    value={formData.lastName}
                    onChange={handleInputChange}
                 />
                 {formData.firstName && <span className='error-message'>{errors.lastName}</span>}
            </div>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className='form-group'>
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    name='password'
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleInputChange}
                 />
                 {formData.firstName && <span className='error-message'>{errors.password}</span>}
            </div>
            <div className='form-group'>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input 
                    type="password"
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                 />
                 {formData.firstName && <span className='error-message'>{errors.confirmPassword}</span>}
            </div>
            <button type='submit'>Sign Up</button>
        </form>
        <button type='submit'>Google SignUp</button>

    </div>
  )
}

export default Signup