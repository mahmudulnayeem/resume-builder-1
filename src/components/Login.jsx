'use client';
import { AuthContext } from '@/providers/AuthProvider';
import React, { useContext, useState } from 'react';

const Login = () => {
    const { googleLogin, githubLogin } = useContext(AuthContext);
    const [error, setError] = useState('')
    const handleGoogleLogin = () => {
        setError('')
        googleLogin()
            .then((result) => {
                const user = result.user;

                console.log(user)
                alert('login success')


            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                setError(errorMessage)

            });
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then((result) => {
                const user = result.user;
                console.log(user)
                alert('login success')

            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)

            });
    }

    return (
        <div className='bg-gray-100'>
            <div className='flex flex-col gap-3 md:w-1/3 mx-auto py-56 '>
                <button onClick={handleGoogleLogin} type="submit" className="px-5 py-2 bg-gray-600 hover:bg-red-200 hover:text-black text-white rounded-md">Google SignIn</button>
                <button onClick={handleGithubLogin}
                  type="submit" className="px-5 py-2 bg-gray-600 hover:bg-red-200 hover:text-black text-white rounded-md">Github Login</button>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};

export default Login;