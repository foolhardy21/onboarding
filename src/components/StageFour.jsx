import styles from './stagefour.module.css'

const StageFour = () => {

    return (
        <>
            <div className={styles.iconComplete}>
                <span className='material-icons'>
                    done
                </span>
            </div>
            <h1>Congratulations, Eren!</h1>
            <p className={styles.subHeading}>You have completed onboarding, you can start using Eden!</p>
            <button className={styles.btnCreate}>Launch Eden</button>
        </>
    )
}

export default StageFour