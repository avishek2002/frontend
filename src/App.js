import React, { useState } from 'react';

function SignInForm({ onClose, onSwitch }) {
  return (
    <div style={styles.popupOverlay}>
      <div style={styles.popupContent}>
        <div style={styles.header}>
          <h2 style={styles.title}>Sign In</h2>
          <button onClick={onClose} style={styles.closeButton} aria-label="Close popup">&times;</button>
        </div>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="username" style={styles.label}>Username</label>
            <input id="username" type="text" placeholder="Enter your username" style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input id="password" type="password" placeholder="Enter your password" style={styles.input} />
          </div>
          <button type="submit" style={styles.submitButton}>Sign In</button>
          <div style={styles.forgotPassword}>
            <a href="#!" style={styles.link} onClick={() => onSwitch('forgot')}>Forgot password?</a>
          </div>
        </form>
        <div style={styles.footer}>
          <p>
            Don't have an account?{' '}
            <a href="#!" style={styles.link} onClick={() => onSwitch('register')}>
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function ForgotPasswordForm({ onClose, onSwitch }) {
  return (
    <div style={styles.popupOverlay}>
      <div style={styles.popupContent}>
        <div style={styles.header}>
          <h2 style={styles.title}>Forgot Password</h2>
          <button onClick={onClose} style={styles.closeButton} aria-label="Close popup">&times;</button>
        </div>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email Address</label>
            <input id="email" type="email" placeholder="Enter your email" style={styles.input} />
          </div>
          <button type="submit" style={styles.submitButton}>Send Reset Link</button>
        </form>
        <div style={styles.footer}>
          <p>
            Remember your password?{' '}
            <a href="#!" style={styles.link} onClick={() => onSwitch('signin')}>
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function RegisterForm({ onClose, onSwitch }) {
  return (
    <div style={styles.popupOverlay}>
      <div style={styles.popupContent}>
        <div style={styles.header}>
          <h2 style={styles.title}>Register</h2>
          <button onClick={onClose} style={styles.closeButton} aria-label="Close popup">&times;</button>
        </div>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="newUsername" style={styles.label}>Username</label>
            <input id="newUsername" type="text" placeholder="Choose a username" style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input id="email" type="email" placeholder="Enter your email" style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="newPassword" style={styles.label}>Password</label>
            <input id="newPassword" type="password" placeholder="Create a password" style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="newPasswordConfirmation" style={styles.label}>Confirm Password</label>
            <input id="newPasswordConfirmation" type="password" placeholder="Re-enter password" style={styles.input} />
          </div>
          <button type="submit" style={styles.submitButton}>Register</button>
        </form>
        <div style={styles.footer}>
          <p>
            Already have an account?{' '}
            <a href="#!" style={styles.link} onClick={() => onSwitch('signin')}>
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [formVisible, setFormVisible] = useState(null); // 'signin', 'forgot', 'register', or null

  const openForm = (form) => setFormVisible(form);
  const closeForm = () => setFormVisible(null);

  return (
    <div style={styles.app}>
      <h1>Welcome to Workout Logger</h1>
      <button onClick={() => openForm('signin')} style={styles.openButton}>Sign In</button>

      {formVisible === 'signin' && (
        <SignInForm onClose={closeForm} onSwitch={openForm} />
      )}
      {formVisible === 'forgot' && (
        <ForgotPasswordForm onClose={closeForm} onSwitch={openForm} />
      )}
      {formVisible === 'register' && (
        <RegisterForm onClose={closeForm} onSwitch={openForm} />
      )}
    </div>
  );
}

// Use the same styles object from previous code
const styles = {
  app: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f0f2f5',
    minHeight: '100vh',
  },
  openButton: {
    padding: '12px 30px',
    fontSize: '18px',
    backgroundColor: '#4a90e2',
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    boxShadow: '0 6px 12px rgba(74,144,226,0.4)',
    transition: 'background-color 0.3s ease',
  },
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
    padding: '40px 30px 30px 30px',
    borderRadius: '12px',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
    width: '360px',
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
    padding: '0 0px',
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
    padding: '12px 0px',
    borderRadius: '8px',
    border: '1.5px solid #ccc',
    fontSize: '16px',
    transition: 'border-color 0.3s ease',
  },
  submitButton: {
    padding: '12px',
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

export default App;
