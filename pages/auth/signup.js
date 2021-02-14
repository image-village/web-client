import { useState } from 'react'
import axios from 'axios'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post(`/users/signup`, {
                email,
                password
            })
            console.log(response.data)
        } catch (error) {
            setErrors([...errors, error.response.data])
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <h1> Sign Up </h1>
            <div className="form-group">
                <label>Email Address</label>
                <input className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="alert alert-danger">
                <h4>Errors</h4>
                <ul>
                    {errors.map(err => (<li key={err.message}>{err.message}</li>))}
                </ul>

            </div>
            <button onSubmit={onSubmit} className="btn btn-primary">Sign Up</button>
        </form>
    )
}

export default SignUp