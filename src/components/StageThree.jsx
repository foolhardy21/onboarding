import { useState } from 'react'
import styles from './stageone.module.css'
import styles2 from './stagethree.module.css'

const StageThree = ({ setPg }) => {
    const [currentOption, setCurrentOption] = useState(1)

    function handleCreateWorkSpace(e) {
        e.preventDefault()
        setPg(4)
    }

    function handleOptionClick(e) {
        e.stopPropagation()
        currentOption === 2 ? setCurrentOption(1) : setCurrentOption(2)
    }

    return (
        <>
            <h1>How are you planning to use Eden</h1>
            <p className={styles.subheading}>We'll streamline your setup experience accordingly</p>
            <div className={styles2.optionsContainer}>
                <div onClick={handleOptionClick} style={{
                    borderColor: currentOption === 1 && '#673ab7'
                }} className={styles2.optionOne}>
                    <p>For myself</p>
                    <p>Write better. Think more clearly. Stay organized.</p>
                </div>
                <div onClick={handleOptionClick} style={{
                    borderColor: currentOption === 2 && '#673ab7'
                }} className={styles2.optionTwo}>
                    <p>With my team</p>
                    <p>Wikis, docs, tasks and projects, all in one place.</p>
                </div>
            </div>
            <button onClick={handleCreateWorkSpace} className={styles2.btnCreate}>Create Workspace</button>
        </>
    )
}

export default StageThree