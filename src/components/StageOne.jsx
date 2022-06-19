import styles from './stageone.module.css'

const StageOne = ({ setPg }) => {

    function handleCreateWorkSpace(e) {
        e.preventDefault()

        setPg(2)
    }

    return (
        <>
            <h1>Welcome! First things first...</h1>
            <p className={styles.subheading}>You can always change them later</p>
            <form onSubmit={handleCreateWorkSpace}>
                <label htmlFor='fullname'>
                    Full name
                </label>
                <input type='text' id='fullname' placeholder='Steve jobs' />
                <label htmlFor='displayname'>
                    Display name
                </label>
                <input type='text' id='displayname' placeholder='Steve' />
                <button type='submit'>Create Workspace</button>
            </form>
        </>
    )
}

export default StageOne