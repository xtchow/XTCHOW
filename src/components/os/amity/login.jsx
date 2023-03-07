

// import React from 'react';
import Image from 'next/image';
import { login, logo, icon, loginBtn } from './login.module.css';

export default function Login() {
  return (
    <div className={login}>
      <div className={logo}>amity
        <Image
          priority
          src="/images/amity/logo.png"
          className={icon}
          height='64'
          width='75'
          alt="Amity logo"
        />
      </div>
      <button className={loginBtn} onClick={() => window.location.href='/'}>
        continue with Google
      </button>
    </div>
  );
};