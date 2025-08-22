import React, { useState } from 'react';
import SignInForm from './components/SignInForm';

function App() {
  const [formVisible, setFormVisible] = useState(false);

  const handleSignInSuccess = (data) => {
    // Handle successful login (save user/token, redirect, show message, etc.)
    console.log('Sign in successful:', data);
  };

  const handleSwitch = (formType) => {
    // Extend logic to show other forms (register, forgot) as needed
    alert(`${formType} form coming soon!`);
  };

  return (
    <div style={styles.app}>
      <h1>Welcome to Workout Logger</h1>
      <button onClick={() => setFormVisible(true)} style={styles.openButton}>Sign In</button>
      {formVisible && (
        <SignInForm
          onClose={() => setFormVisible(false)}
          onSuccess={handleSignInSuccess}
          onSwitch={handleSwitch}
        />
      )}
    </div>
  );
}

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
};

export default App;
