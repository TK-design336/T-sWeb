import styles from "./page.module.css";
import WorkCard from "../components/WorkCard";
import { articles } from "../data/articles";

const latestWorks = articles
  .slice()
  .sort((a, b) => b.updated.localeCompare(a.updated))
  .slice(0, 4)
  .map(article => ({
    ...article,
    image: article.images[0],
    title: article.title,
    desc: article.desc,
  }));

export default function Home() {
  return (
    <div className={styles.page}>
      <video
        className={styles.bgVideo}
        src="/TsWebBG.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={styles.bgOverlay} />
      <h1 className={styles.title}>T&#39;s Works</h1>
      <h2 className={styles.latest}>Latest Works</h2>
      <div className={styles.cardGrid}>
        {latestWorks.map(work => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </div>
  );
}
