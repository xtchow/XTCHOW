import Image from 'next/image';
import styles from './login.module.css';

export default function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.logo}>
        amity
        <Image
          priority
          src="/images/amity/logo.png"
          className={styles.icon}
          height={64}
          width={75}
          alt="Amity logo"
        />
      </div>
      <button className={styles.loginBtn} onClick={() => window.location.href = '/'}>
        continue with Google
      </button>
    </div>
  );
}