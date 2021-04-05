import styles from '../styles/Score.module.css'

const Score = () => {

    const Button = (props) => {
        return (
            <div className={styles.buttonBox}>
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>{props.value}</button>
                </div>
                <h3 className={styles.buttonName}>{props.name}</h3>
            </div>
        )
    }

    return (
        <div className={styles.scoreBox}>
            <Button name={'WPM'} value={0} />
            <Button name={'Accuracy'} value={0} />
            <Button name={'Total Words'} value={0} />
        </div>
    );
}

export default Score;