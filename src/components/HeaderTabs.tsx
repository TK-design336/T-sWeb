'use client';
import Link from 'next/link';
import styles from './HeaderTabs.module.css';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const tabs = [
  { label: 'Blender Works', sub: 'Geometry Node Tools', href: '/blender-tools' },
  { label: 'Blender Works', sub: 'Models', href: '/blender-models' },
  { label: 'Movie Works', href: '/movies' },
  { label: 'Other Works', href: '/others' },
];

export default function HeaderTabs() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className={styles.headerTabs}>
      <Link href="/" className={styles.logoButton} aria-label="トップページ">
        <span className={styles.logoIcon}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 11.5L12 4L21 11.5V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V11.5Z" fill="#222"/>
            <rect x="9" y="15" width="6" height="6" rx="1" fill="#fff"/>
          </svg>
        </span>
      </Link>
      <div className={styles.tabsWrap}>
        {tabs.map(tab => {
          const isActive = pathname === tab.href || pathname.startsWith(tab.href + "/");
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={styles.tab + (isActive ? ' ' + styles.activeTab : '')}
            >
              {tab.label}
              {tab.sub && (
                <span className={styles.tabSub}>(<span>{tab.sub}</span>)</span>
              )}
            </Link>
          );
        })}
      </div>
      <button
        className={styles.menuButton}
        aria-label="メニューを開く"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(v => !v)}
      >
        <span className={styles.hamburger}>
          <span />
          <span />
          <span />
        </span>
      </button>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {tabs.map(tab => (
            <Link
              key={tab.href}
              href={tab.href}
              className={styles.mobileTab}
              onClick={() => setMenuOpen(false)}
            >
              {tab.label}
              {tab.sub && ` (${tab.sub})`}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
} 