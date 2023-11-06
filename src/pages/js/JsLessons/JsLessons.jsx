import { Badge, Button, Loader, Panel, PanelGroup } from 'rsuite';
import React from 'react';
import PageNextIcon from '@rsuite/icons/PageNext';
import { useNavigate } from 'react-router-dom';
import DefaultTemplate from '../../../templates/defaultPage';
import {
    useGetJsLessonsQuery,
    useGetJsHomeworksQuery,
} from '../../../store/api';
import styles from './style.module.scss';

const JsLessons = () => {
    const { data: lessons, isLoading } = useGetJsLessonsQuery();
    const { data: homeworks, isLoading: isLoad } = useGetJsHomeworksQuery();
    const navigation = useNavigate();

    // const getHomework = async lessonId => {
    //     const homeworksArr = await homeworks.filter(
    //         hw => hw.jsLessonId === lessonId
    //     );
    //     return homeworksArr;
    // };

    // console.log(getHomework(1));

    const redirectHandler = value => () => {
        navigation(`/js-course/lessons/${value}`);
    };

    return (
        <DefaultTemplate>
            <Panel bordered shaded>
                <h3>JS Course / Lessons</h3>
                {isLoading ? (
                    <Loader center={true} size="lg" speed="slow" />
                ) : (
                    <PanelGroup accordion defaultActiveKey={0}>
                        {lessons ? (
                            lessons.map((item, index) => (
                                <Panel
                                    className={styles.panel}
                                    header={
                                        <h5>{`${index + 1}. ${item.title}`}</h5>
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
                                            // content="No homeworks"
                                            style={{
                                                background: '#ff6384',
                                                padding: 5,
                                            }}
                                        >
                                            {/* {isLoad ? null : 'no hw'} */}
                                        </Badge>
                                    </div>
                                    <div className={styles.panel__desc}>
                                        <b style={{ marginRight: 5 }}>
                                            Description:{' '}
                                        </b>
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
                            ))
                        ) : (
                            <Loader center={true} size="lg" speed="slow" />
                        )}
                    </PanelGroup>
                )}
            </Panel>
        </DefaultTemplate>
    );
};

export default JsLessons;
