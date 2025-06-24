import styles from "./page.module.css";
import WorkCard from "../components/WorkCard";

const works = [
  {
    id: "tool-1",
    title: "Geometry Node Tool 1",
    desc: "Blenderのジオメトリノードツールのサンプルです。",
    image: "/sample1.jpg",
    href: "/work/tool-1"
  },
  {
    id: "model-1",
    title: "Blender Model 1",
    desc: "Blenderモデル作品のサンプルです。",
    image: "/sample2.jpg",
    href: "/work/model-1"
  },
  {
    id: "movie-1",
    title: "Movie Work 1",
    desc: "映像作品のサンプルです。",
    image: "/sample3.jpg",
    href: "https://youtube.com/"
  },
  {
    id: "other-1",
    title: "Other Work 1",
    desc: "その他作品のサンプルです。",
    image: "/sample4.jpg",
    href: "/work/other-1"
  },
];

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
      <h1 className={styles.title}>T's Works</h1>
      <h2 className={styles.latest}>Latest Works</h2>
      <div className={styles.cardGrid}>
        {works.map(work => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </div>
  );
}
