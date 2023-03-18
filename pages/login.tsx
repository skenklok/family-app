// pages/login.tsx
import { useState, FormEvent } from 'react';
import { signIn } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (response?.error) {
      setMessage('Invalid email or password!');
    } else {
      setMessage('Logged in successfully!');
      // Redirect to the homepage or a protected route after successful login
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
