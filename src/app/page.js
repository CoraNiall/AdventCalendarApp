import styles from './styles/globals.css';
import Button from '@/app/ui/atoms/button';

export default function Home() {
  return (
    <main className={styles.body}>
      <Button text="View Calendar"></Button>
    </main>
  );
}
