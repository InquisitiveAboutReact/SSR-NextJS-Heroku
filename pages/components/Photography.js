import Link from 'next/link'
import Head from 'next/head'
import styles from './photography.module.css'


export default function Photography() {
    return (
        <div className={styles.container}>
        <Head><title>First Post</title></Head>
        <p className={styles.para}>My Sample photography</p>
        <h2>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </h2>
      
      </div>
    
    ) 
}