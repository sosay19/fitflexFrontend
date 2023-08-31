//src\pages\signup.tsx
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { registerSuccess } from '../store/auth/authSlice';

const SignupPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();
    const dispatch = useDispatch();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Implement signup logic here
        if (password === confirmPassword) {
            console.log(`Signing up with email: ${email} and password: ${password}`);
            try {
                const response = await axios.post('https://localhost:32768/api/auth/register', {
                    email: email,
                    password: password,
                    role: 'member', // Set the role here
                });

                if (response.status === 200) {
                    console.log('User registered successfully');
                    dispatch(registerSuccess(response.data.token)); // Dispatch signupSuccess with the token
                    router.push('/member/dashboard');

                }
            } catch (error) {
                // Handle error, such as email already exists
                console.error("failed");
                console.error(error);
                // console.error(error.response.data);
            }
        } else {
            console.log("Passwords do not match");
        }
    };

    return (
        <div className="flex h-screen justify-center items-center bg-gray-100">
            <div className="bg-white shadow-md rounded-md p-8 w-full md:w-1/3">
                <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
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
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-600 mb-1">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-full w-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-gray-600 text-sm mt-4">
                    Already have an account?{' '}
                    <Link href="/login">
                        <div className="text-blue-500 hover:underline">Log in</div>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
