import styles from '@/app/styles/calendar.module.css';

export default function Calendar() {
  return (
    <div className={styles.calendarContainer}>
      <header className={styles.calendarHeader}>
        <p className={styles.calendarCurrentDate}></p>
        <div className={styles.calendarNavigation}>
          <span id="calendar-prev" className={styles.materialSymbolsRounded}>
            {'<'}
          </span>
          <span id="calendar-next" className={styles.materialSymbolsRounded}>
            {'>'}
          </span>
        </div>
      </header>

      <div className={styles.calendarBody}>
        <ul className={styles.calendarWeekdays}>
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className={styles.calendarDates}></ul>
      </div>
    </div>
  );
}
