import styles from '../styles/Key.module.css';

const Key = (props) => {
    let vals = props.children.split(' ');
    let className = props.class;

    return (
        <div className={className} id={styles.key}>
            <p style={{ margin: '0px' }}>{vals[0]}</p>
            <p style={{ margin: '0px' }}>{vals[1]}</p>
        </div>
    );
}

export default Key;