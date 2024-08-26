import AdventCalendar from './advent-calendar';
import Header from './header';
import styles from '@/app/styles/calendar.module.css';

export default async function CalendarContainer() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <AdventCalendar />
    </div>
  );
}
