import { Badge, Button, Panel, PanelGroup } from 'rsuite';
import PageNextIcon from '@rsuite/icons/PageNext';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

const Lessons = props => {
    const { lessons, homeworks, path, course } = props;
    const navigation = useNavigate();
    const redirectHandler = value => () => {
        navigation(`${path}${value}`);
    };
    const getHomeworksCount = index =>
        homeworks.filter(hw => hw.lessonId === String(index + 1)).length;

    return (
        <Panel bordered shaded>
            <h3>{`${course} / Lessons`}</h3>
            <PanelGroup accordion defaultActiveKey={0}>
                {lessons &&
                    lessons.map((item, index) => (
                        <Panel
                            className={styles.panel}
                            header={
                                <h5>{`Lesson ${index + 1}. ${item.title}`}</h5>
                            }
                            eventKey={index}
                            key={index}
                        >
                            <div className={styles.panel__info}>
                                <p
                                    className={styles.panel__date}
                                >{`Date: ${item.date}`}</p>
                                <Badge
                                    className={styles.panel__badge}
                                    content={
                                        getHomeworksCount(index) === 0
                                            ? 'No homeworks'
                                            : `Homeworks: ${getHomeworksCount(
                                                  index
                                              )}`
                                    }
                                    style={{
                                        background: '#ff6384',
                                        padding: 5,
                                    }}
                                />
                            </div>
                            <div className={styles.panel__desc}>
                                <b style={{ marginRight: 5 }}>Description: </b>
                                <p>{item.description}</p>
                            </div>
                            <Button
                                className={styles.panel__button}
                                appearance="primary"
                                size="md"
                                endIcon={<PageNextIcon />}
                                onClick={redirectHandler(index + 1)}
                            >
                                To the lesson
                            </Button>
                        </Panel>
                    ))}
            </PanelGroup>
            }
        </Panel>
    );
};

Lessons.propTypes = {
    lessons: PropTypes.array,
    homeworks: PropTypes.array,
    path: PropTypes.string,
    course: PropTypes.string,
};

export default Lessons;
