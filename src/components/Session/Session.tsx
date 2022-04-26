import styles from './Session.module.css';
import { SessionProps } from './Session.props';

const Session = (props: SessionProps) => {
    return (
        <div className={styles.sessionContainer}>
            <div>Next session starting in:</div>
            <div>{props?.userData?.timestamp || ''}</div>
            <button className={styles.startNowBtn}>Start Now</button>
        </div>

    )
}

export default Session;