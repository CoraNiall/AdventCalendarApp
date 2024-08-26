import AdventWindow from './advent-window.jsx';
import styles from '@/app/styles/calendar.module.css';
import images from '../api/images.json';

export default async function AdventCalendar() {
  return (
    <>
      <div className={styles.calendarContainer}>
        {images.map(image => {
          return <AdventWindow image={image} key={image} />;
        })}
      </div>
    </>
  );
}
