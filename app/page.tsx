import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.bg}>
        <Image src="/fondo.svg" alt="" fill priority style={{ objectFit: 'cover' }} />
      </div>

      <div className={styles.top}>
        <div className={styles.logoWrap}>
          <Image src="/logoblanco.svg" alt="El Bro" width={480} height={240} priority />
        </div>
        <h1 className={styles.headline}>
          TUS <span className={styles.highlight}>COMPRAS</span>, TU CONTROL.
        </h1>
        <p className={styles.soon}>PRÓXIMAMENTE</p>

        <div className={styles.storeButtons}>
          <Image src="/appstorebutton.png" alt="App Store" width={200} height={65} />
          <Image src="/playstorebutton.png" alt="Play Store" width={200} height={65} />
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.icons}>
          <div className={styles.iconItem}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <span>APROBACIÓN<br />RÁPIDA</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.iconItem}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
            <span>SEGURO</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.iconItem}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
            <span>A TU MEDIDA</span>
          </div>
        </div>
        <div className={styles.cta}>
          ALGO GRANDE ESTÁ POR LLEGAR
        </div>
      </div>
    </main>
  )
}
