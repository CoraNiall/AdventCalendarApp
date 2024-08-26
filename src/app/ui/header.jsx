import styles from '@/app/styles/calendar.module.css';
import { merienda } from '@/app/ui/fonts';

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <header className={merienda.className}>Advent Calendar</header>
    </div>
  );
}
