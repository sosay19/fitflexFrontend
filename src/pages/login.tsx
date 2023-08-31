import Link from 'next/link';
import Layout from '@/components/Layout';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/auth/authSlice';
import { login } from './api/auth';
import { useRouter } from 'next/router';
import jwtDecode from 'jwt-decode'; // Library to decode JWT tokens


const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const [loggedIn, setLoggedIn] = useState(false);

    const [error, setError] = useState<string | null>(null); // State for holding login error message

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await login(email, password);
            dispatch(loginSuccess(token));

            // Decode the token to get user information including role
            const decodedToken: any = jwtDecode(token);
            const userRole = decodedToken.role;

            // Redirect to the appropriate dashboard based on the user's role
            if (userRole === 'admin') {
                router.push('/admin/dashboard');
            } else if (userRole === 'member') {
                router.push('/member/dashboard');
            } else {
                // Handle other cases or show a login page
            }
        } catch (error) {
            setError('Invalid email or password'); // Set the error message

        }
    };

    return (
        <div className="flex h-screen justify-center items-center bg-gray-100">
            <div className="bg-white shadow-md rounded-md p-8 w-full md:w-1/3">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-600 mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-full w-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                    >
                        Login
                    </button>
                </form>
                {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
                <p className="text-gray-600 text-sm mt-4">
                    Don't have an account?{' '}
                    <Link href="/signup">
                        <div className="text-blue-500 hover:underline">Sign up</div>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
