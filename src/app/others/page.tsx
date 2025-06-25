'use client';
import styles from './others.module.css';
import { articles } from '../../data/articles';
import WorkCard from '../../components/WorkCard';

const othersArticles = articles
  .filter(article => article.tag === 'others')
  .sort((a, b) => b.updated.localeCompare(a.updated));

export default function OthersPage() {
  return (
    <div className={styles.othersPage}>
      <div className={styles.othersPageBg} />
      <h1 className={styles.title}>Other Works</h1>
      <div className={othersArticles.length === 1 ? styles.cardCenter : styles.cardGrid}>
        {othersArticles.map(article => (
          <WorkCard key={article.id} work={{ ...article, image: article.images[0] }} />
        ))}
      </div>
    </div>
  );
} 