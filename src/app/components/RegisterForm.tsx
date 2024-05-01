"use client";

import React, { useState } from "react";
import { securityQuestions } from "./securityQuestions";
import Link from 'next/link';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [questionAnswer, setQuestionAnswer] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      `Email ${email}, Security Question: ${securityQuestion}, Answer: ${questionAnswer}`
    );
  };

  return (
    <div className="flex justify-center shadow-xl p-8 rounded-lg border border-gray-300 bg-white">
      <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4">
        <h2 className="text-md font-light">Welcome!</h2>
        <h2 className="text-2xl ">Sign up</h2>
        <p className="font-light text-sm ">
          Register to add items to your wishlist and make purchases .
        </p>
        <label className="text-xs">Email</label>
        <input
          type="text"
          placeholder="Enter your user email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-1 border border-gray-300 rounded text-sm"
        />
        <label className="text-xs">Password</label>
        <div className="relative text-sm">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-1 border border-gray-300 rounded w-full pr-12"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-2 flex items-center "
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <label className="text-xs">Repeat password</label>
        <div className="relative text-sm">
          <input
            type={showRepeatPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            className="px-4 py-1 border border-gray-300 rounded w-full pr-12"
          />
          <button
            type="button"
            onClick={() => setShowRepeatPassword(!showRepeatPassword)}
            className="absolute inset-y-0 right-2 flex items-center "
          >
            {showRepeatPassword ? "Hide" : "Show"}
          </button>
        </div>
        <label className="text-xs">Security Question</label>
        <select
          value={securityQuestion}
          onChange={(e) => setSecurityQuestion(e.target.value)}
          className="px-4 py-1 border border-gray-300 rounded text-sm"
        >
          <option value="">Select a security question</option>
          {securityQuestions.map((question, index) => (
            <option key={index} value={question}>
              {question}
            </option>
          ))}
        </select>
        <label className="text-xs">Your answer</label>
        <input
          type="text"
          placeholder="Type the answer of the question"
          value={questionAnswer}
          onChange={(e) => setQuestionAnswer(e.target.value)}
          className="px-4 py-1 border border-gray-300 rounded text-sm"
        />
          <button type="submit" className="px-4 py-2 bg-black text-white rounded text-sm" onSubmit={handleSubmit}>
            Sign up
          </button>
        <div className="flex justify-center font-light text-xs">
          <p className="text-gray-400">Already have an account?</p>
          {/* <Link href="/auth/login"> */}
            <a href="/auth/login" className="text-black-400 font-bold ml-2">Login</a>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
