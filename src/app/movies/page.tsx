import { articles } from '../../data/articles';
import WorkCard from '../../components/WorkCard';
import styles from '../others/others.module.css';

function getYoutubeThumbnail(url: string) {
  // より汎用的なYouTube動画ID抽出
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/|youtube\.com\/shorts\/)([\w-]{11})/);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : '';
}

const movieArticles = articles
  .filter(article => article.tag === 'movies')
  .sort((a, b) => b.updated.localeCompare(a.updated));

export default function MoviesPage() {
  return (
    <div className={styles.othersPage}>
      <div className={styles.othersPageBg} />
      <h1 className={styles.title}>Movie Works</h1>
      <div className={movieArticles.length === 1 ? styles.cardCenter : styles.cardGrid}>
        {movieArticles.map(article => {
          let image = article.images[0] || '';
          if ((!image || image === '') && article.href.includes('youtu')) {
            image = getYoutubeThumbnail(article.href);
          }
          return <WorkCard key={article.id} work={{ ...article, image }} />;
        })}
      </div>
    </div>
  );
} 