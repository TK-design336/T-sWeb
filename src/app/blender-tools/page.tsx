import { articles } from '../../data/articles';
import WorkCard from '../../components/WorkCard';
import styles from '../others/others.module.css';

const toolArticles = articles
  .filter(article => article.tag === 'blender-tools')
  .sort((a, b) => b.updated.localeCompare(a.updated));

export default function BlenderToolsPage() {
  return (
    <div className={styles.othersPage}>
      <div className={styles.othersPageBg} />
      <h1 className={styles.title}>Blender Works<br /><span style={{fontSize:'1rem',fontWeight:400}}>(Geometry Node Tools)</span></h1>
      <div className={toolArticles.length === 1 ? styles.cardCenter : styles.cardGrid}>
        {toolArticles.map(article => (
          <WorkCard key={article.id} work={{ ...article, image: article.images[0] || '' }} />
        ))}
      </div>
    </div>
  );
} 