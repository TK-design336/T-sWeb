import Link from 'next/link';
import styles from './HeaderTabs.module.css';

const tabs = [
  { label: 'Blender Works (Geometry Node Tools)', href: '/blender-tools' },
  { label: 'Blender Works (Models)', href: '/blender-models' },
  { label: 'Movie Works', href: '/movies' },
  { label: 'Other Works', href: '/other-works' },
];

export default function HeaderTabs() {
  return (
    <nav className={styles.headerTabs}>
      {tabs.map(tab => (
        <Link key={tab.href} href={tab.href} className={styles.tab}>
          {tab.label}
        </Link>
      ))}
    </nav>
  );
} 