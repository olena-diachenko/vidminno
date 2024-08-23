import { Button, Divider, FlexboxGrid, Panel } from 'rsuite';
import React from 'react';
import PagePreviousIcon from '@rsuite/icons/PagePrevious';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './style.module.scss';
import useRedirectHandler from '../../hooks/useRedirectHandler';

const Article = ({ article }) => {
  const redirectHandler = useRedirectHandler();

  return (
    <>
      <Panel className={styles.panel} bordered shaded>
        <div className={styles.panel__headingWrap}>
          <h3 className={styles.panel__heading}>{`${article.title}`}</h3>
        </div>
        <p className={styles.panel__date}>{`Created: ${article.created}`}</p>
        <p className={styles.panel__date}>
          {`Categories: `}
          {article.categories.map(category => (
            <span
              key={uuidv4()}
              className={styles.panel__categories}
            >{`${category} `}</span>
          ))}
        </p>
        <Divider />
        <p>{article.content}</p>
      </Panel>
      <FlexboxGrid justify="center" className={styles.panel__buttonWrap}>
        <Button
          className={styles.panel__button}
          appearance="primary"
          size="lg"
          startIcon={<PagePreviousIcon />}
          onClick={redirectHandler(-1)}
        >
          Go back
        </Button>
      </FlexboxGrid>
    </>
  );
};

Article.propTypes = {
  article: PropTypes.object,
};

export default Article;
