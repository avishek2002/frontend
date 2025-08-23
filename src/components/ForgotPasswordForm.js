import React, { useState } from 'react';
import axios from 'axios';

function ForgotPasswordForm({ onClose, onSuccess, onSwitch }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Send credentials to backend
      const response = await axios.post('http://localhost:8080/api/auth/forgotPassword', {
        username,
        email,
      });
      // Handle success - you might want to store a token or redirect
      if (onSuccess) onSuccess(response.data);
      onClose();
    } catch (err) {
      setError('Verification failed. Either your account does not exist or your credentials are wrong.');
    }
  };

  return (
    <div style={styles.popupOverlay}>
      <div style={styles.popupContent}>
        <div style={styles.header}>
          <h2 style={styles.title}>Change Password</h2>
          <button onClick={onClose} style={styles.closeButton}>&times;</button>
        </div>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <input
              style={styles.input}
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              placeholder="Enter your username"
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              style={styles.input}
              type="text"
              value={password}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
          <button type="submit" style={styles.submitButton}>Send email</button>
          <div style={styles.forgotPassword}>
            <a href="#!" style={styles.link} onClick={() => onSwitch('forgot')}>Forgot password?</a>
          </div>
        </form>
        <div style={styles.footer}>
          <p>
            Don't have an account?{' '}
            <a href="#!" style={styles.link} onClick={() => onSwitch('register')}>Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  popupOverlay: {
    position: 'fixed',
    top: 0, 
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  popupContent: {
    backgroundColor: '#fff',
    padding: '50px 40px 40px 40px',
    borderRadius: '12px',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
    width: '400px',
    maxWidth: '90vw',
    position: 'relative',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '25px',
  },
  title: {
    margin: 0,
    fontWeight: '700',
    color: '#333',
    fontSize: '26px',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '30px',
    color: '#888',
    cursor: 'pointer',
    lineHeight: '1',
    padding: '0 5px',
    transition: 'color 0.3s ease',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    color: '#666',
    fontWeight: '600',
    marginBottom: '6px',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '8px',
    border: '1.5px solid #ccc',
    fontSize: '16px',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box',
  },
  submitButton: {
    padding: '14px',
    fontSize: '18px',
    borderRadius: '30px',
    border: 'none',
    backgroundColor: '#4a90e2',
    color: 'white',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 6px 12px rgba(74,144,226,0.4)',
    transition: 'background-color 0.3s ease',
  },
  forgotPassword: {
    marginTop: '12px',
    textAlign: 'right',
  },
  link: {
    color: '#4a90e2',
    textDecoration: 'none',
    fontWeight: '600',
    cursor: 'pointer',
  },
  footer: {
    marginTop: '30px',
    fontSize: '14px',
    color: '#777',
    textAlign: 'center',
  },
};

export default ForgotPasswordForm;
