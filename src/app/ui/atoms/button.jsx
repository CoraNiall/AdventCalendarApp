import Link from 'next/link';
import styles from '@/app/styles/calendar.module.css';

export default function Button({ text }) {
  return (
    <div className={styles.buttonContainer}>
      <Link className={styles.button} href="/calendar" prefetch={true}>
        {text}
      </Link>
    </div>
  );
}
