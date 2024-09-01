'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from '@/app/styles/advent-window.module.css';

export default function AdventWindow({ image }) {
  const [flip, setFlip] = useState(false);

  return (
    <section id={image.id} className={styles.adventWindowSection}>
      <div className={styles.adventWindowCard}>
        <div
          className={`${
            flip
              ? `${styles.adventWindowInnerFlip}`
              : `${styles.adventWindowInner}`
          }`}
        >
          <div
            className={styles.adventWindowFront}
            key={image.id}
            onClick={() => {
              setFlip(!flip);
            }}
          >
            <h2 className={styles.adventWindowCardHeader}>{image.id}</h2>
          </div>
          <div
            className={styles.adventWindowBack}
            key={image.src}
            onClick={() => {
              setFlip(!flip);
            }}
          >
            <Image
              className={styles.adventWindowImg}
              key={image.id}
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
