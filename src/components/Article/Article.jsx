import { Divider, Panel } from 'rsuite';
import React from 'react';
import styles from './style.module.scss';

const Article = props => {
    const { article } = props;

    return (
        <Panel className={styles.panel} bordered shaded>
            <div className={styles.panel__headingWrap}>
                <h3 className={styles.panel__heading}>{`${article.title}`}</h3>
            </div>
            <p
                className={styles.panel__date}
            >{`Created: ${article.created}`}</p>
            <p className={styles.panel__date}>
                {`Categories: `}
                {article.categories.map(category => (
                    <span
                        className={styles.panel__categories}
                    >{`${category} `}</span>
                ))}
            </p>
            <Divider />
            <p className={styles.panel__descWrap}>{article.content}</p>
        </Panel>
    );
};

export default Article;
