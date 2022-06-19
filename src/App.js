import { useEffect, useRef, useState } from "react";
import styles from './app.module.css'
import logo from './assets/logo.png'

function App() {
  const [progress, setProgress] = useState(25)
  const progressBarRef = useRef(null)

  useEffect(() => {
    progressBarRef.current.style.width = `${progress}%`
  }, [progress])

  return (
    <main className={styles.main}>
      <section>
        <div className={styles.headingDiv}>
          <img srcSet={logo} alt='eden logo' />
          <p>eden</p>
        </div>
        <div className={styles.progressContainer}>
          <div className={styles.progress} ref={progressBarRef}></div>
          <div className={styles.milestonesContainer}>
            <span style={{
              background: progress >= 25 ? '#673ab7' : '#ffffff',
              color: progress >= 25 ? '#ffffff' : '#000000',
              border: progress >= 25 ? '' : 'solid thin #c5c4c6'
            }} className={styles.milestone}>1</span>
            <span style={{
              background: progress >= 50 ? '#673ab7' : '#ffffff',
              color: progress >= 50 ? '#ffffff' : '#000000',
              border: progress >= 50 ? '' : 'solid thin #c5c4c6'
            }} className={styles.milestone}>2</span>
            <span style={{
              background: progress >= 75 ? '#673ab7' : '#ffffff',
              color: progress >= 75 ? '#ffffff' : '#000000',
              border: progress >= 75 ? '' : 'solid thin #c5c4c6'
            }} className={styles.milestone}>3</span>
            <span style={{
              background: progress >= 100 ? '#673ab7' : '#ffffff',
              color: progress >= 100 ? '#ffffff' : '#000000',
              border: progress >= 100 ? '' : 'solid thin #c5c4c6'
            }} className={styles.milestone}>4</span>
          </div>
        </div>
      </section>
      <button onClick={() => setProgress(p => p + 25)}>click</button>
    </main>
  );
}

export default App;
