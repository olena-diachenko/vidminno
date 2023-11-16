import { Button, FlexboxGrid, Panel, Progress, Divider } from 'rsuite';
import PagePreviousIcon from '@rsuite/icons/PagePrevious';
import { Link, useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
import MarkdownEditor from '../MarkdownEditor';

const Homework = props => {
    const navigation = useNavigate();
    const { user, homework, userHomeworks, studentId, saveHomework, path } =
        props;

    const currentHomeworks =
        userHomeworks && userHomeworks.filter(hw => hw.hwId === homework.id);

    const backHandler = value => () => {
        navigation(value);
    };

    const handleSend = content => {
        const hw = {
            hwId: homework.id,
            title: homework.title,
            body: content,
            uploadDate: new Date()
                .toLocaleString()
                .slice(0, 19)
                .replace('T', ' '),
        };
        const hwInfo = {
            studentId,
            hw,
        };
        saveHomework(hwInfo);
    };

    return (
        <>
            <Panel className={styles.panel} bordered shaded>
                <div className={styles.panel__headingWrap}>
                    <h3
                        className={styles.panel__heading}
                    >{`Homework №${homework.id} - ${homework.title} `}</h3>
                </div>
                <div className={styles.panel__infoWrap}>
                    <p
                        className={styles.panel__date}
                    >{`Deadline: ${homework.deadline}`}</p>
                    <div className={styles.panel__complexityWrap}>
                        <p className={styles.panel__complexity}>Complexity</p>
                        <Progress.Line
                            percent={homework.complexity}
                            strokeColor="#b0c8d1"
                            strokeWidth={8}
                        />
                    </div>
                </div>
                <div className={styles.panel__linkWrap}>
                    <Link
                        to={`${path}${homework.lessonId}`}
                        className={styles.panel__link}
                    >{`Lesson ${homework.lessonId}`}</Link>
                </div>
                <Divider />
                <p className={styles.panel__descWrap}>{homework.description}</p>
            </Panel>
            <FlexboxGrid justify="center" className={styles.panel__buttonWrap}>
                <Button
                    className={styles.panel__button}
                    appearance="primary"
                    size="lg"
                    startIcon={<PagePreviousIcon />}
                    onClick={backHandler(-1)}
                >
                    Go back
                </Button>
            </FlexboxGrid>
            {currentHomeworks && currentHomeworks.length !== 0 && (
                <Panel className={styles.panel} bordered shaded>
                    {currentHomeworks.map(item => (
                        <>
                            <div className={styles.panel__hwInfo}>
                                <p className={styles.panel__subtitle}>{user}</p>
                                <p
                                    className={styles.panel__date}
                                >{`Uploaded: ${item.uploadDate}`}</p>
                            </div>
                            <p>{item.body}</p>
                            <Divider />
                        </>
                    ))}
                </Panel>
            )}
            <Panel className={styles.panel} bordered shaded>
                <p className={styles.panel__subtitle}>Add homework</p>
                <div className={styles.panel__markdownWrap}>
                    <MarkdownEditor onSend={handleSend} />
                </div>
            </Panel>
        </>
    );
};

export default Homework;
