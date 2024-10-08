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
import { Bar, Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import {
  useGetStudentsByGradeQuery,
  useGetUsefulVideosQuery,
  useGetLimitJsLessonsQuery,
  useGetLimitReactLessonsQuery,
} from '../../store/api';
import SignUp from '../auth/SignUp';
import DefaultTemplate from '../../templates/defaultPage';
import DashList from '../../components/DashList';
import Slider from '../../components/Slider';
import { chartOptions, doughnutData, icons } from './constants';
import styles from './style.module.scss';
import useAuth from '../../hooks/useAuth';

const HomePage = () => {
  const { isAuth } = useAuth();
  const { data: users, isLoading } = useGetStudentsByGradeQuery();
  const { data: jsLessons, isLoading: isLoad } = useGetLimitJsLessonsQuery(5);
  const { data: reactLessons, isLoading: isLoadLessons } =
    useGetLimitReactLessonsQuery(5);
  const { data: videos, isLoading: isLoadVideos } = useGetUsefulVideosQuery();

  const barData = {
    labels: !isLoading && users.map(userData => userData.username),
    datasets: [
      {
        label: 'Average course grade',
        data: !isLoading && users.map(userData => userData.averageGrade),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return isAuth ? (
    <DefaultTemplate>
      <div className={styles.dashboard}>
        <FlexboxGrid
          justify="space-between"
          align="middle"
          className={styles.dashboard__socials}
        >
          <p>Follow us on social media</p>
          <Stack divider={<Divider vertical />}>
            {icons.map(icon => (
              <IconButton
                key={icon.id}
                icon={icon.icon}
                as="a"
                href={icon.href}
                target="_blank"
                className={styles.dashboard__icon}
              />
            ))}
          </Stack>
        </FlexboxGrid>
        <h3 className={styles.dashboard__heading}>Dashboard</h3>
        <Grid fluid>
          <Row className="show-grid" gutter={20} style={{ marginBottom: 30 }}>
            <Col sm={24} md={24} lg={8}>
              <Panel
                shaded
                bordered
                bodyFill
                className={styles.dashboard__chart}
                header="Scores"
              >
                <Doughnut
                  data={doughnutData}
                  options={{ maintainAspectRatio: false }}
                />
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
                  <Bar options={chartOptions} data={barData} />
                )}
              </Panel>
            </Col>
          </Row>
          <Row className="show-grid" gutter={20} style={{ marginBottom: 30 }}>
            <Col sm={24} md={24} lg={24}>
              <Panel
                shaded
                bordered
                bodyFill
                className={styles.dashboard__section}
              >
                <h3 className={styles.dashboard__courseHeading}>
                  <Link
                    to="/vidminno/js-course/lessons"
                    className={styles.dashboard__headingLink}
                  >
                    JS Course
                  </Link>
                </h3>
                {!isLoad && (
                  <DashList
                    lessons={jsLessons}
                    endpoint="/vidminno/js-course/lessons"
                  />
                )}
              </Panel>
            </Col>
          </Row>
          <Row className="show-grid" gutter={20} style={{ marginBottom: 30 }}>
            <Col sm={24} md={24} lg={24}>
              <Panel
                shaded
                bordered
                bodyFill
                className={styles.dashboard__section}
              >
                <h3 className={styles.dashboard__courseHeading}>
                  <Link
                    to="/vidminno/react-course/lessons"
                    className={styles.dashboard__headingLink}
                  >
                    React Course
                  </Link>
                </h3>
                {!isLoadLessons && (
                  <DashList
                    lessons={reactLessons}
                    endpoint="/vidminno/react-course/lessons"
                  />
                )}
              </Panel>
            </Col>
          </Row>
          <Row className="show-grid" gutter={20} style={{ marginBottom: 30 }}>
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
