import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Login.module.css'; // Import your CSS module

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    // Assuming you have a backend API for authentication
    // Here, you would make a request to your backend to verify credentials

    // For demo purposes, let's just navigate to a welcome page
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login Page v2</h1>
      <form onSubmit={handleLogin} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="username" className={styles.label}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
            name='username'
            autoComplete='username'
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            autoComplete='password'
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>
        <div style={{ color: 'red' }} className={styles.error}>
          {error}
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
