import { useState } from 'react'
import Router from 'next/router'
import { useRequest } from '../../hooks/useRequest'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { doRequest, errors } = useRequest({
        url: '/users/signup',
        method: 'post',
        body: {
            email, password
        },
        onSuccess: () => Router.push('/')
    })
    const onSubmit = async (event) => {
        event.preventDefault()

        try {
            await doRequest()
        } catch (error) {
            console.log(error.message)
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
            {  errors}
            <button onSubmit={onSubmit} className="btn btn-primary">Sign Up</button>
        </form>
    )
}

export default SignUp