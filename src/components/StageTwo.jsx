import styles from './stageone.module.css'
import styles2 from './stagetwo.module.css'

const StageTwo = ({ setPg }) => {

    function handleCreateWorkSpace(e) {
        e.preventDefault()

        setPg(3)
    }

    return (
        <>
            <h1>Let's setup a home for all your work</h1>
            <p className={styles.subheading}>You can always create another workspace later</p>
            <form onSubmit={handleCreateWorkSpace}>
                <label htmlFor='workspacename'>
                    Workspace name
                </label>
                <input type='text' id='workspacename' placeholder='Eden' />
                <label htmlFor='workspaceurl'>
                    Workspace URL <span>(optional)</span>
                </label>
                <div className={styles2.inputUrl}>
                    <span>www.eden.com/</span>
                    <input type='text' id='workspaceurl' placeholder='Example' />
                </div>
                <button type='submit'>Create Workspace</button>
            </form>
        </>
    )
}

export default StageTwo