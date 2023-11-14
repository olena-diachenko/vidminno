import { Button, FlexboxGrid, Panel, List, Loader, Progress } from 'rsuite';
import PagePreviousIcon from '@rsuite/icons/PagePrevious';
import PageNextIcon from '@rsuite/icons/PageNext';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import styles from './style.module.scss';

const Lesson = props => {
    const navigation = useNavigate();
    const { lesson } = props;
    const { addMaterial } = props;
    const { homeworks } = props;

    const backHandler = value => () => {
        navigation(value);
    };

    return (
        <>
            <Panel className={styles.panel} bordered shaded>
                <div className={styles.panel__headingWrap}>
                    <h3
                        className={styles.panel__heading}
                    >{`Lesson №${lesson.id} - ${lesson.title} `}</h3>
                    {lesson.date ? (
                        `The lesson was held on ${lesson.date}`
                    ) : (
                        <Button
                            className={styles.panel__button}
                            href={lesson.zoomSrc}
                            appearance="primary"
                        >
                            Join the lesson
                        </Button>
                    )}
                </div>
                <div className={styles.panel__complexityWrap}>
                    <p className={styles.panel__subtitle}>Complexity</p>
                    <Progress.Line
                        percent={lesson.complexity}
                        strokeColor="#b0c8d1"
                    />
                </div>
                <p className={styles.panel__subtitle}>Description</p>
                <p>{lesson.description}</p>
            </Panel>
            <Panel className={styles.panel} bordered shaded>
                <p className={styles.panel__subtitle}>Additional material</p>
                {addMaterial
                    ? addMaterial.length === 0 && (
                          <p className={styles.panel__noContent}>
                              There is no additional material
                          </p>
                      )
                    : null}
                <List size="md" hover>
                    {addMaterial ? (
                        addMaterial.map((item, index) => (
                            <List.Item key={index} index={index}>
                                <a
                                    className={styles.panel__link}
                                    href={item.src}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {item.title}
                                </a>
                            </List.Item>
                        ))
                    ) : (
                        <Loader center={true} size="lg" speed="slow" />
                    )}
                </List>
            </Panel>
            <Panel className={styles.panel} bordered shaded>
                <p className={styles.panel__subtitle}>Homeworks</p>
                {homeworks
                    ? homeworks.length === 0 && (
                          <p className={styles.panel__noContent}>
                              There are no homeworks
                          </p>
                      )
                    : null}
                <List size="md" hover>
                    {homeworks ? (
                        homeworks.map((item, index) => (
                            <List.Item key={index} index={index}>
                                <Link to="" className={styles.panel__link}>
                                    <h6 className={styles.panel__link}>
                                        {`HW ${item.id} - ${item.title}`}
                                    </h6>
                                </Link>
                                <div className={styles.panel__hwContent}>
                                    <p>{`Deadline: ${item.deadline}`}</p>
                                    <div className={styles.panel__hwComplexity}>
                                        <p>Complexity</p>
                                        <Progress.Line
                                            percent={item.complexity}
                                            strokeColor="#b0c8d1"
                                        />
                                    </div>
                                    <Button
                                        className={styles.panel__hwButton}
                                        appearance="primary"
                                        size="lg"
                                        endtIcon={<PageNextIcon />}
                                    >
                                        View
                                    </Button>
                                </div>
                            </List.Item>
                        ))
                    ) : (
                        <Loader center={true} size="lg" speed="slow" />
                    )}
                </List>
            </Panel>
            <Panel className={styles.panel} bordered shaded>
                <p className={styles.panel__subtitle}>Lesson recording</p>
                <iframe
                    className={styles.panel__video}
                    title="Lesson video"
                    src={lesson.src}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </Panel>
            <FlexboxGrid justify="center">
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
        </>
    );
};

export default Lesson;
