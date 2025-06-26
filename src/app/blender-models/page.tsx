import { articles } from '../../data/articles';
import WorkCard from '../../components/WorkCard';
import styles from '../others/others.module.css';

const modelArticles = articles
  .filter(article => article.tag === 'blender-models')
  .sort((a, b) => b.updated.localeCompare(a.updated));

export default function BlenderModelsPage() {
  return (
    <div className={styles.othersPage}>
      <div className={styles.othersPageBg} />
      <h1 className={styles.title}>Blender Works<br /><span style={{fontSize:'1rem',fontWeight:400}}>(Models)</span></h1>
      <div className={modelArticles.length === 1 ? styles.cardCenter : styles.cardGrid}>
        {modelArticles.map(article => (
          <WorkCard key={article.id} work={{ ...article, image: article.images[0] || '' }} />
        ))}
      </div>
    </div>
  );
} 