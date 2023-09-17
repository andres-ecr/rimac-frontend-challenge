import Image from 'next/image';

// - Styles
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        className={styles.footer__logo}
        alt="Rimac Seguros y Reaseguros"
        src="/assets/imgs/LogoWhite.png"
        width={85}
        height={42}
      />
      <hr className={styles.footer__separator} />
      <div className={styles.footer__copy}>
        <span>© 2023 RIMAC Seguros y Reaseguros.</span>
      </div>
    </footer>
  );
}
