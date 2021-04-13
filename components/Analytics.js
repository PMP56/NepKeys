import styles from '../styles/Analytics.module.css';

const Analytics = () => {
    return (
        <div className={styles.analytics}>
            <canvas className={styles.chart} id='acc_chart' width='600' height='400'></canvas>
        </div>
    );
}

export default Analytics;