import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import FacebookSquareIcon from '@rsuite/icons/legacy/FacebookSquare';
import GithubAltIcon from '@rsuite/icons/legacy/GithubAlt';
import TelegramIcon from '@rsuite/icons/legacy/Telegram';
import LinkedinIcon from '@rsuite/icons/legacy/Linkedin';
import InstagramIcon from '@rsuite/icons/legacy/Instagram';
import React from 'react';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const chartOptions = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: 'none',
    },
  },
};

const barbBackgroundColors = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(75, 192, 192, 0.2)',
];

const barBorderColors = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(75, 192, 192, 1)',
];

export const doughnutData = {
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

export const icons = [
  {
    id: 1,
    icon: <TelegramIcon />,
    href: 'https://t.me/e_diachenko',
  },
  {
    id: 2,
    icon: <FacebookSquareIcon />,
    href: 'https://www.facebook.com/profile.php?id=100001535963306',
  },
  {
    id: 3,
    icon: <GithubAltIcon />,
    href: 'https://github.com/olena-diachenko',
  },
  {
    id: 4,
    icon: <LinkedinIcon />,
    href: 'https://www.linkedin.com/in/olena-diachenko-2a5784266/',
  },
  {
    id: 5,
    icon: <InstagramIcon />,
    href: 'https://www.instagram.com/elenadiachenko_/',
  },
];
