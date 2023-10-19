import {
    Divider,
    FlexboxGrid,
    IconButton,
    Stack,
    Panel,
    Grid,
    Row,
    Col,
} from 'rsuite';
import FacebookSquareIcon from '@rsuite/icons/legacy/FacebookSquare';
import GithubAltIcon from '@rsuite/icons/legacy/GithubAlt';
import TelegramIcon from '@rsuite/icons/legacy/Telegram';
import LinkedinIcon from '@rsuite/icons/legacy/Linkedin';
import InstagramIcon from '@rsuite/icons/legacy/Instagram';
import { useSelector } from 'react-redux';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import SignUp from '../auth/signUp';
import DefaultTemplate from '../../templates/defaultPage';
import styles from './style.module.scss';

const HomePage = () => {
    const user = useSelector(state => state.auth.user);

    ChartJS.register(
        ArcElement,
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const donatData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'none',
            },
        },
    };

    const labels = [
        'Olena',
        'Petro',
        'Volodymyr',
        'Oksana',
        'Alisa',
        'Mykyta',
        'Oleksandra',
        'Viktoriia',
        'Oleh',
        'Maksym',
        'Alina',
        'Yuliia',
    ];

    const barData = {
        labels,
        datasets: [
            {
                label: 'Average course grade',
                data: [99, 70, 85, 80, 95, 98],
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
                            style={{ fontSize: 40 }}
                        ></IconButton>
                        <IconButton
                            icon={<FacebookSquareIcon />}
                            as="a"
                            href="https://www.facebook.com/profile.php?id=100001535963306"
                            target="_blank"
                            style={{ fontSize: 40 }}
                        ></IconButton>
                        <IconButton
                            icon={<GithubAltIcon />}
                            as="a"
                            href="https://github.com/olena-diachenko"
                            target="_blank"
                            style={{ fontSize: 40 }}
                        ></IconButton>
                        <IconButton
                            icon={<LinkedinIcon />}
                            as="a"
                            href="https://www.linkedin.com/in/olena-diachenko-2a5784266/"
                            target="_blank"
                            style={{ fontSize: 40 }}
                        ></IconButton>
                        <IconButton
                            icon={<InstagramIcon />}
                            as="a"
                            href="https://www.instagram.com/elenadiachenko_/"
                            target="_blank"
                            style={{ fontSize: 40 }}
                        ></IconButton>
                    </Stack>
                </FlexboxGrid>
                <h3 className={styles.dashboard__heading}>Dashboard</h3>
                <Grid fluid>
                    <Row className="show-grid" gutter={20}>
                        <Col sm={24} md={24} lg={8}>
                            <Panel
                                shaded
                                bordered
                                bodyFill
                                style={{ height: '430px' }}
                            >
                                <Panel
                                    header="Scores"
                                    style={{ textAlign: 'center' }}
                                >
                                    <Doughnut data={donatData} />
                                </Panel>
                            </Panel>
                        </Col>
                        <Col sm={24} md={24} lg={16}>
                            <Panel
                                shaded
                                bordered
                                bodyFill
                                style={{ height: '430px' }}
                            >
                                <Panel
                                    header="Course rating"
                                    style={{ textAlign: 'center' }}
                                >
                                    <Bar options={options} data={barData} />
                                </Panel>
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
