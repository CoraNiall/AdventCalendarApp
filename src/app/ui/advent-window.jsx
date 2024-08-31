import Image from 'next/image';
import styles from '@/app/styles/advent-window.module.css';

export default function AdventWindow({ image }) {
  return (
    <section id={image.id} className={styles.adventWindowSection}>
      <div className={styles.adventWindowCard}>
        <div className={styles.adventWindowInner}>
          <div className={styles.adventWindowFront}>
            <h2>{image.id}</h2>
          </div>
          <div className={styles.adventWindowBack}>
            <Image
              className={styles.adventWindowImg}
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
