import AdventWindow from './advent-window.jsx';
import styles from '@/app/styles/calendar.module.css';
import images from '../api/images.json';

const shuffle = images => {
  images.sort(() => {
    return Math.round(Math.random()) - 0.5;
  });
};

export default async function AdventCalendar() {
  return (
    <>
      <div className={styles.adventCalendar}>
        {shuffle(images)}
        {images.map(image => {
          return <AdventWindow image={image} key={image.id} />;
        })}
      </div>
    </>
  );
}
