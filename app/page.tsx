import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logo}>
            <h1 className={styles.brandName}>El Bro</h1>
            <p className={styles.tagline}>PA' LAS QUE SEA</p>
          </div>

          <div className={styles.heroInfo}>
            <p className={styles.mainMessage}>
              Compra ahora.<br />
              Paga en cuotas.
            </p>
            <p className={styles.subtitle}>
              Crédito diferente para colombianos
            </p>
          </div>

          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <span className={styles.icon}>⚡</span>
              <span>Aprobación inmediata</span>
            </div>
            <div className={styles.benefit}>
              <span className={styles.icon}>💰</span>
              <span>Cuotas flexibles</span>
            </div>
            <div className={styles.benefit}>
              <span className={styles.icon}>📱</span>
              <span>100% digital</span>
            </div>
          </div>
        </div>

        <div className={styles.decoration}></div>
      </section>

      {/* Coming Soon */}
      <section className={styles.comingSoon}>
        <div className="container">
          <h2>Pronto en Colombia</h2>
          <p>Estamos construyendo algo especial para ti.</p>
        </div>
      </section>
    </main>
  )
}
