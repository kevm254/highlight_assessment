import { ProgressPlugin } from 'webpack';
import styles from './Task.module.css';
import { TaskProps } from './Task.props';

const Task = ((props: TaskProps) => {
    return (
        <div className={styles.taskContainer}>
            <div className={styles.taskLeft}>
                <div className={styles.taskName}>
                    {props?.userData?.name || ''}
                </div>
                <div className={styles.taskDate}>
                    {props.userData.timestamp || ''}
                </div>
            </div>

            <div className={styles.taskRight}>
                <div className={styles.taskTime}>{props.userData.name}</div>
                <div className={styles.taskStatus}>{props.userData.status}</div>
            </div>
        </div>
    );
});


export default Task;