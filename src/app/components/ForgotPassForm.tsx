"use client";

import React, { useState } from "react";
import { securityQuestions } from "./securityQuestions";

const ForgotPassForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [questionAnswer, setQuestionAnswer] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Email ${email}, Security Question: ${securityQuestion}, Answer: ${questionAnswer}`);
  };

  return (
    <div className="flex justify-center shadow-xl p-8 rounded-lg border border-gray-300 bg-white">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col space-y-4"
      >
        <h2 className="text-lg font-light">Welcome!</h2>
        <h2 className="text-2xl pt-2">Forgot your password?</h2>
        <p className="font-light text-sm pb-6">Please Enter the email you use to log in and your recovery information.</p>
        <label className="text-sm">Email</label>
        <input
          type="text"
          placeholder="Enter your user email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded text-md"
        />
        <label className="text-sm">Security Question</label>
        <select
          value={securityQuestion}
          onChange={(e) => setSecurityQuestion(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded text-md"
        >
          <option value="">Select a security question</option>
          {securityQuestions.map((question, index) => (
            <option key={index} value={question}>
              {question}
            </option>
          ))}
        </select>
        <label className="text-sm">Question answer</label>
        <input
          type="text"
          placeholder="Type the answer of the question"
          value={questionAnswer}
          onChange={(e) => setQuestionAnswer(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded text-md"
        />
        <button type="submit" className="px-4 py-2 bg-black text-white rounded text-sm">
          Reset
        </button>
        <div className="flex justify-center font-light text-xs pt-6">
          <p className="text-gray-400">Don&apos;t have an account?</p>
          <a className="text-black-400 font-bold ml-2">Register</a>
        </div>
        <a className="flex justify-center text-black-400 font-bold ml-2 text-xs">Back to login</a>
      </form>
    </div>
  );
};

export default ForgotPassForm;