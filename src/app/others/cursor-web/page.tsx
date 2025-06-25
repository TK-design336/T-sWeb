'use client';
import styles from './cursor-web.module.css';
import othersStyles from '../others.module.css';
import { useState } from 'react';

const images = [
  '/Cursor1.png',
  '/Cursor2.png',
  // 画像がなければ空配列に
];

export default function CursorWebPage() {
  const [imgIndex, setImgIndex] = useState(0);
  return (
    <div className={styles.detailRoot}>
      <div className={othersStyles.othersBg} />
      <div className={styles.detailBox}>
        <h1 className={styles.title}>Cursorを用いたWebページ制作と実装</h1>
        <div className={styles.editDate}>最終編集日: 2024-06-25</div>
        {images.length > 0 && (
          <div className={styles.imageArea}>
            {/* メイン画像 */}
            <img
              src={images[imgIndex]}
              alt={`メイン画像${imgIndex+1}`}
              className={styles.mainImage}
            />
            {/* サムネイル横スクロール（全画像分） */}
            <div className={styles.thumbScroll}>
              {images.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`サムネイル${i+1}`}
                  className={styles.thumbImage + (imgIndex === i ? ' ' + styles.activeThumb : '')}
                  onClick={() => setImgIndex(i)}
                />
              ))}
            </div>
          </div>
        )}
        <div className={styles.body}>
          <p>
            AIコーディングアシスタント「Cursor」を活用して本Webページを作成、GitHubとNetlifyでデプロイしました。<br />
            ReactもNode.jsもまだほとんど理解しておりませんが、ほぼAIアシスタントへの仕様指示のみでここまでの実装にこぎつけました。<br />
            以下が大まかなステップです
          </p>
          <ul>
            <li>Cursorをインストール (お好みで月額20$のプランにも加入)</li>
            <li>Cursor内部のAI Paneで要求するページの基本設計を伝える</li>
            <li>要求された必要なものを追加でインストール (今回はNode.js)</li>
            <li>細かな指示を出しつつコードを生成させ、ローカルで納得いくまでページをシェイプアップ (ローカルで状態を確認する方法などもアシスタントに聞いて教えてもらう)</li>
            <li>GitHubに登録</li>
            <li>ホスティングサービス (今回はNetlify) に登録、ついでにNetlifyとGitHubも連携</li>
            <li>GitHubでサイト用のレポジトリを作成</li>
            <li>AIの指示に従ってWindows PowerShellでコマンドを実行、GitHubのレポジトリにwebページのデータをアップロード</li>
            <li>NetlifyからGitHubのレポジトリを指定してデプロイ</li>
          </ul>
          <p>
            これからコード内容の解読に入りますが、AIアシスタントの力を借りればコード理解0でもここまで行けるというのはかなりの驚きでした。<br />
            またスマホ表示への対応なども簡単な指示で快適に行えました。<br />
            個人サイトを作るだけならWixなどのノーコードサイトビルダーでも十分ですが、コード学習などと並行して行いたい人やより細かな設定をいじりたい人にはおすすめの方法です。<br />
          </p>
        </div>
      </div>
    </div>
  );
} 