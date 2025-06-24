'use client';
import Image from 'next/image';
import styles from './WorkCard.module.css';
import { useState } from 'react';

type Work = {
  id: string;
  title: string;
  desc: string;
  image: string;
  href: string;
};

export default function WorkCard({ work }: { work: Work }) {
  const isExternal = work.href.startsWith('http');
  const [imgError, setImgError] = useState(false);
  return (
    <a
      className={styles.card}
      href={work.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      <div className={styles.imageWrap}>
        {!imgError ? (
          <Image 
            src={work.image} 
            alt={work.title} 
            width={320} 
            height={180} 
            className={styles.image} 
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={styles.noImage}>No Image</div>
        )}
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{work.title}</h2>
        <p className={styles.desc}>{work.desc}</p>
      </div>
    </a>
  );
} 