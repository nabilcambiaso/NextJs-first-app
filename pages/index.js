import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <Navbar/>
   <h1>Homepage</h1>
   <Footer/>
    </div>
  )
}
