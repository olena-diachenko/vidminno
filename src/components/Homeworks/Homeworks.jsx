import { Badge, Button, Panel, PanelGroup, Progress } from 'rsuite';
import PageNextIcon from '@rsuite/icons/PageNext';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

const Homeworks = props => {
    const { homeworks, path, course, userHomeworks } = props;
    const navigation = useNavigate();
    const redirectHandler = value => () => {
        navigation(`${path}${value}`);
    };

    return (
        <Panel bordered shaded>
            <h3>{`${course} / Homeworks`}</h3>
            <PanelGroup accordion defaultActiveKey={0}>
                {homeworks &&
                    homeworks.map((item, index) => (
                        <Panel
                            className={styles.panel}
                            header={
                                <h5>{`Homework ${index + 1}. ${
                                    item.title
                                }`}</h5>
                            }
                            eventKey={index}
                            key={index}
                        >
                            <div className={styles.panel__info}>
                                <p
                                    className={styles.panel__date}
                                >{`Due by: ${item.deadline}`}</p>
                                <Badge
                                    className={styles.panel__badge}
                                    content={
                                        userHomeworks &&
                                        userHomeworks.some(
                                            hw => hw.hwId === item.id
                                        )
                                            ? 'Completed'
                                            : 'Not completed'
                                    }
                                    style={{
                                        background: '#ff6384',
                                        padding: 5,
                                    }}
                                />
                            </div>
                            <div className={styles.panel__complexityWrap}>
                                <p className={styles.panel__subtitle}>
                                    <b>Complexity:</b>
                                </p>
                                <Progress.Line
                                    percent={item.complexity}
                                    strokeColor="#b0c8d1"
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
                                To the homework
                            </Button>
                        </Panel>
                    ))}
            </PanelGroup>
            }
        </Panel>
    );
};

Homeworks.propTypes = {
    homeworks: PropTypes.array,
    path: PropTypes.string,
    course: PropTypes.string,
    userHomeworks: PropTypes.array,
};

export default Homeworks;
