import { useState, useEffect } from 'react'
import Router from 'next/router'
import { useRequest } from '../hooks/useRequest'
import axios from 'axios'

const LandingPage = ({ currentuser, error }) => {
    // const [isSignedin, setIsSignin] = useState(false)

    console.log(error)


    return currentuser && !error ? <h1>You are signed in</h1> : <h1>You are NOT signed in</h1>
}

export async function getServerSideProps({ req }) {
    let data = null, error = null

    try {
        const response = await axios.get('http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/users/currentuser', {
            headers: req.headers
        })
        data = response.data
    } catch (err) {
        console.error(err.message)
        error = {
            statusCode: err.response.status,
            message: err.response.statusText
        }
    }

    return {
        props: {
            currentuser: data,
            error: error
        },
    }
}

export default LandingPage