import { Button } from '@mui/material';
import React from 'react';
import { signInWithGoogle } from './firebase.js';
import "./Login.css";

function Login() {
  return (
    <div className='login'>
      <div className="login__logo">
          <img src="https://res.cloudinary.com/drqgfjtni/image/upload/v1643153023/a6f14cbf944bdc77e55f4503b812e7dc_wk7fb0.png"
          alt="" 
          />
      </div>

      <Button onClick={signInWithGoogle}>Sign in</Button>
    </div>
  );
}

export default Login;
