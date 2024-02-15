import styles from '@/app/styles/calendar.module.css';

export default function Calendar() {
  return (
    <div class={styles.calendarContainer}>
      <header class={styles.calendarHeader}>
        <p class={styles.calendarCurrentDate}></p>
        <div class={styles.calendarNavigation}>
          <span id="calendar-prev" class={styles.materialSymbolsRounded}>
            chevron_left
          </span>
          <span id="calendar-next" class={styles.materialSymbolsRounded}>
            chevron_right
          </span>
        </div>
      </header>

      <div class={styles.calendarBody}>
        <ul class={styles.calendarWeekdays}>
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul class={styles.calendarDates}></ul>
      </div>
    </div>
  );
}
