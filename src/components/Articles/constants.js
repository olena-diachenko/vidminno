import {
  FaBug,
  FaHeart,
  FaHtml5,
  FaJsSquare,
  FaMicrochip,
  FaReact,
  FaRegNewspaper,
} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import TagNumberIcon from '@rsuite/icons/TagNumber';

export const categoriesOfArticles = {
  favorites: 'Favorites',
  architecture: 'Architecture',
  html: 'HTML',
  javascript: 'JavaScript',
  react: 'React',
  typescript: 'TypeScript',
  'data-types': 'Data Types',
  'front-end-testing': 'Front-end testing',
};

export const categoriesValues = {
  allArticles: 'all-articles',
  favorites: 'favorites',
  architecture: 'architecture',
  html: 'html',
  javascript: 'javascript',
  react: 'react',
  typescript: 'typescript',
  dataTypes: 'data-types',
  frontEndTesting: 'front-end-testing',
};

export const categoriesList = [
  {
    id: 1,
    label: 'All articles',
    value: 'all-articles',
    icon: FaRegNewspaper,
  },
  {
    id: 2,
    label: 'Favorites',
    value: 'favorites',
    icon: FaHeart,
  },
  {
    id: 3,
    label: 'Architecture',
    value: 'architecture',
    icon: FaMicrochip,
  },
  {
    id: 4,
    label: 'Data Types',
    value: 'data-types',
    icon: TagNumberIcon,
  },
  {
    id: 5,
    label: 'Front-end testing',
    value: 'front-end-testing',
    icon: FaBug,
  },
  {
    id: 6,
    label: 'HTML',
    value: 'html',
    icon: FaHtml5,
  },
  {
    id: 7,
    label: 'JavaScript',
    value: 'javascript',
    icon: FaJsSquare,
  },
  {
    id: 8,
    label: 'React',
    value: 'react',
    icon: FaReact,
  },
  {
    id: 9,
    label: 'TypeScript',
    value: 'typescript',
    icon: SiTypescript,
  },
];
