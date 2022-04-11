import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Hessel | Node.js</title>
        <meta name="description" content="Daniel Hessel - Node.js" />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>

      <main className={styles.main}>
        <div className={styles.avatar}>
          <Image
            src="/profile.jpeg"
            alt="Foto de Daniel Hessel"
            width={200}
            height={200}
          />
        </div>

        <h1 className={styles.title}>
          Daniel Hessel
        </h1>

        <p className={styles.description}>
          Desenvolvedor Back-end apaixonado por tecnologia e natação.
          {/* Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code> */}
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/danielhessell" target="_blank" className={styles.card} rel="noreferrer">
            <h2>Github</h2>
            <p>Veja mais de perto e de forma detalhada sobre</p>
          </a>

          <a href="https://www.linkedin.com/in/daniel-hessel-240731176/" target="_blank" className={styles.card} rel="noreferrer">
            <h2>LinkedIn</h2>
            <p>Acesse meu perfil profissional no linkedIn e </p>
          </a>
        </div>

        <div className={styles.line} />

        <a
          href="https://www.youtube.com/watch?v=zNchtTAEhoE"
          target="_blank"
          className={styles.banner}
          rel="noreferrer"
        >
          <h2>Está começando ou deseja iniciar na carreira dev?</h2>
          <p>
            Conheça a Rocketseat, a melhor plataforma para aprender programação e/ou dar um boost na sua carreira como dev.
          </p>
        </a>
      </main>

      <footer className={styles.footer}>
        <p>Desenvolvido por Daniel Hessel | 2022</p>
      </footer>
    </div>
  )
}

export default Home
