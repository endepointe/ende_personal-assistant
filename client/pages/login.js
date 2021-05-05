import Layout from '../components/Layout';
import styles from '../styles/Login.module.css';
import Link from 'next/link';
import Router from 'next/router';
import { useState } from 'react';
import { useUser } from '../lib/hooks';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [register, setRegister] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useUser({ redirectTo: '/', redirectIfFound: true });

  const toggleRegister = (e) => {
    e.preventDefault();
    setRegister(!register);
  }

  async function handleRegister(e) {
    e.preventDefault()
    console.log('registering user')
    if (errorMsg) setErrorMsg('');
    if (password !== verifyPassword) {
      setErrorMsg('Passwords do not match');
      return;
    }
    let body = {
      username: email,
      password: password,
      verifyPassword: verifyPassword,
    };
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        Router.push('/');
      }
      if (res.status !== 200) {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error(error);
      setErrorMsg(error.message);
    }
  }

  async function handleLogin(e) {
    console.log('logging in')
    e.preventDefault();
    if (errorMsg) setErrorMsg('');

    let body = {
      username: email,
      password: password,
      verifyPassword: verifyPassword,
    };

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        Router.push('/');
      }
      if (res.status !== 200) {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error('Error: ', error);
      setErrorMsg(error.message);
    }
  }

  return (
    <Layout>
      <div className={styles.login}>
        <Link href="/">
          <img
            className={styles.login_logo}
            src="https://via.placeholder.com/1024x800?text=Logo" alt="" />
        </Link>

        <div className={styles.login_container}>
          <h1>Sign-in</h1>

          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)} />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)} />
            {!register ?
              <>
                <h5>Verify Password</h5>
                <input
                  type="password"
                  value={verifyPassword}
                  onChange={e => setVerifyPassword(e.target.value)} /></> : null}

            {register ?
              <button
                onClick={handleLogin}
                className={styles.login_signInButton}
                type="submit">Sign-in</button> : <button
                  onClick={handleRegister}
                  className={styles.login_signInButton}
                  type="submit">Register</button>}

            {register ?
              <button
                className={styles.login_registerButton}
                onClick={toggleRegister}>
                Need an account?
            </button>
              :
              <button
                className={styles.login_registerButton}
                onClick={toggleRegister}>
                Have an account?
            </button>
            }

          </form>

          <p>
            By signing-in, you agree to the [Business Name] Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </p>

          <button
            className={styles.login_google_registerLink}>
            <a href="http://localhost:3000/api/authGoogle">
              Sign-in with Google
            </a>
          </button>

        </div>
      </div>
    </Layout>
  );
}

export default Login;