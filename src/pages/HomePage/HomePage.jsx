import React from 'react';
import {
    Divider,
    FlexboxGrid,
    IconButton,
    Stack,
    Panel,
    Grid,
    Row,
    Col,
    Loader,
} from 'rsuite';
import FacebookSquareIcon from '@rsuite/icons/legacy/FacebookSquare';
import GithubAltIcon from '@rsuite/icons/legacy/GithubAlt';
import TelegramIcon from '@rsuite/icons/legacy/Telegram';
import LinkedinIcon from '@rsuite/icons/legacy/Linkedin';
import InstagramIcon from '@rsuite/icons/legacy/Instagram';
import { useSelector } from 'react-redux';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { useGetStudentsByGradeQuery } from '../../store/api/usersApi';
import { useGetJsLessonsQuery } from '../../store/api/jsLessonsApi';
import { useGetReactLessonsQuery } from '../../store/api/reactLessonsApi';
import { useGetUsefulVideosQuery } from '../../store/api/usefulVideosApi';
import SignUp from '../auth/SignUp';
import DefaultTemplate from '../../templates/defaultPage';
import DashList from '../../components/DashList';
import Slider from '../../components/Slider';
import {
    options,
    barbBackgroundColors,
    barBorderColors,
} from '../../utils/charts';
import styles from './style.module.scss';

const HomePage = () => {
    const user = useSelector(state => state.auth.user);
    const { data: users, isLoading } = useGetStudentsByGradeQuery();
    const { data: jsLessons, isLoading: isLoad } = useGetJsLessonsQuery(5);
    const { data: reactLessons, isLoading: isLoadLessons } =
        useGetReactLessonsQuery(5);
    const { data: videos, isLoading: isLoadVideos } = useGetUsefulVideosQuery();

    const donatData = {
        labels: ['0-50 points', '50-75 points', '75-100 points'],
        datasets: [
            {
                label: '%',
                data: [4, 10, 86],
                backgroundColor: barbBackgroundColors,
                borderColor: barBorderColors,
                borderWidth: 1,
            },
        ],
    };

    const barData = {
        labels: !isLoading && users.map(userData => userData.username),
        datasets: [
            {
                label: 'Average course grade',
                data:
                    !isLoading && users.map(userData => userData.averageGrade),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return user ? (
        <DefaultTemplate>
            <div className={styles.dashboard}>
                <FlexboxGrid
                    justify="space-between"
                    align="middle"
                    className={styles.dashboard__socials}
                >
                    <p>Follow us on social media</p>
                    <Stack divider={<Divider vertical />}>
                        <IconButton
                            icon={<TelegramIcon />}
                            as="a"
                            href="https://t.me/e_diachenko"
                            target="_blank"
                            className={styles.dashboard__icon}
                        ></IconButton>
                        <IconButton
                            icon={<FacebookSquareIcon />}
                            as="a"
                            href="https://www.facebook.com/profile.php?id=100001535963306"
                            target="_blank"
                            className={styles.dashboard__icon}
                        ></IconButton>
                        <IconButton
                            icon={<GithubAltIcon />}
                            as="a"
                            href="https://github.com/olena-diachenko"
                            target="_blank"
                            className={styles.dashboard__icon}
                        ></IconButton>
                        <IconButton
                            icon={<LinkedinIcon />}
                            as="a"
                            href="https://www.linkedin.com/in/olena-diachenko-2a5784266/"
                            target="_blank"
                            className={styles.dashboard__icon}
                        ></IconButton>
                        <IconButton
                            icon={<InstagramIcon />}
                            as="a"
                            href="https://www.instagram.com/elenadiachenko_/"
                            target="_blank"
                            className={styles.dashboard__icon}
                        ></IconButton>
                    </Stack>
                </FlexboxGrid>
                <h3 className={styles.dashboard__heading}>Dashboard</h3>
                <Grid fluid>
                    <Row
                        className="show-grid"
                        gutter={20}
                        style={{ marginBottom: 30 }}
                    >
                        <Col sm={24} md={24} lg={8}>
                            <Panel
                                shaded
                                bordered
                                bodyFill
                                className={styles.dashboard__chart}
                                header="Scores"
                            >
                                <Doughnut data={donatData} />
                            </Panel>
                        </Col>
                        <Col sm={24} md={24} lg={16}>
                            <Panel
                                shaded
                                bordered
                                bodyFill
                                className={styles.dashboard__chart}
                                header="Course rating"
                            >
                                {isLoading ? (
                                    <Loader size="lg" />
                                ) : (
                                    <Bar options={options} data={barData} />
                                )}
                            </Panel>
                        </Col>
                    </Row>
                    <Row
                        className="show-grid"
                        gutter={20}
                        style={{ marginBottom: 30 }}
                    >
                        <Col sm={24} md={24} lg={24}>
                            <Panel
                                shaded
                                bordered
                                bodyFill
                                className={styles.dashboard__section}
                            >
                                <h3 className={styles.dashboard__courseHeading}>
                                    <Link
                                        to="/js-course/lessons"
                                        className={
                                            styles.dashboard__headingLink
                                        }
                                    >
                                        JS Course
                                    </Link>
                                </h3>
                                {!isLoad && <DashList lessons={jsLessons} />}
                            </Panel>
                        </Col>
                    </Row>
                    <Row
                        className="show-grid"
                        gutter={20}
                        style={{ marginBottom: 30 }}
                    >
                        <Col sm={24} md={24} lg={24}>
                            <Panel
                                shaded
                                bordered
                                bodyFill
                                className={styles.dashboard__section}
                            >
                                <h3 className={styles.dashboard__courseHeading}>
                                    <Link
                                        to="/react-course/lessons"
                                        className={
                                            styles.dashboard__headingLink
                                        }
                                    >
                                        React Course
                                    </Link>
                                </h3>
                                {!isLoadLessons && (
                                    <DashList lessons={reactLessons} />
                                )}
                            </Panel>
                        </Col>
                    </Row>
                    <Row
                        className="show-grid"
                        gutter={20}
                        style={{ marginBottom: 30 }}
                    >
                        <Col sm={24} md={24} lg={24}>
                            <Panel
                                shaded
                                bordered
                                bodyFill
                                className={styles.dashboard__section}
                            >
                                <h3 className={styles.dashboard__courseHeading}>
                                    Useful videos
                                </h3>
                                {!isLoadVideos && <Slider videos={videos} />}
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </DefaultTemplate>
    ) : (
        <SignUp />
    );
};

export default HomePage;
