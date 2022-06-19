import styles from './stageone.module.css'

const StageOne = ({ setPg }) => {

    function handleCreateWorkSpace(e) {
        e.preventDefault()

        setPg(pg => pg + 1)
    }

    return (
        <>
            <h1>Welcome! First things first...</h1>
            <p className={styles.subheading}>You can always change them later</p>
            <form onSubmit={handleCreateWorkSpace}>
                <label>
                    Full name<br />
                    <input type='text' placeholder='Steve jobs' />
                </label>
                <label>
                    Display name<br />
                    <input type='text' placeholder='Steve' />
                </label>
                <button type='submit'>Create Workspace</button>
            </form>
        </>
    )
}

export default StageOne