'use client';

import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <h2 className="text-lg">Welcome!</h2>
        <h2 className="text-lg font-semibold">Sign in</h2>
        <p>Please enter your credentials to log in.</p>
        <input
            type="text"
            placeholder="Enter your user email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded"
        />
        <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded"
        />
        <div className="flex items-center">
            <input type="checkbox" />
            <label className="ml-2">Remember me</label>
        </div>
        <a className="text-gray-400">Forgot password?</a>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Login
        </button>
        <div className="">
            <p className="text-gray-400">Don't have an account?</p><a className="text-black-400 font-bold">Register</a>
        </div>
    </form>
  );
};

export default LoginForm;