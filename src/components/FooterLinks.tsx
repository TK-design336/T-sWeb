import styles from './FooterLinks.module.css';
import Image from 'next/image';

const links = [
  { label: 'X', href: 'https://x.com/doeleastasset/', icon: '/icons/x.logo.svg', size: 32 },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCVc5-50o1o32fLOmrI9HA7A/', icon: '/icons/youtube.logo.png', size: 40 },
  { label: 'Gumroad', href: 'https://gumroad.com/', icon: '/icons/gumroad.logo.svg', size: 40 },
  { label: 'Mail', href: 'mailto:tk12.dev@gmail.com', icon: '/icons/mail.logo.svg', size: 40 },
];

export default function FooterLinks() {
  return (
    <footer className={styles.footerLinks}>
      {links.map(link => (
        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
          <span className={styles.icon}>
            <Image src={link.icon} alt={link.label} width={link.size} height={link.size} />
          </span>
        </a>
      ))}
    </footer>
  );
} 