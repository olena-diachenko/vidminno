import { Button, FlexboxGrid, Panel, Progress, Divider } from 'rsuite';
import PagePreviousIcon from '@rsuite/icons/PagePrevious';
import { Link } from 'react-router-dom';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './style.module.scss';
import MarkdownEditor from '../MarkdownEditor';
import useRedirectHandler from '../../hooks/useRedirectHandler';

const Homework = props => {
  const { user, homework, userHomeworks, studentId, saveHomework, path } =
    props;

  const redirectHandler = useRedirectHandler();

  const currentHomeworks =
    userHomeworks && userHomeworks.filter(hw => hw.hwId === homework.id);

  const handleSend = content => {
    const hw = {
      hwId: homework.id,
      title: homework.title,
      body: content,
      uploadDate: new Date().toLocaleString().slice(0, 19).replace('T', ' '),
    };
    const hwInfo = {
      studentId,
      hw,
    };
    saveHomework(hwInfo);
  };

  return (
    <>
      <Panel className={styles.panel} bordered shaded>
        <div className={styles.panel__headingWrap}>
          <h3
            className={styles.panel__heading}
          >{`Homework №${homework.id} - ${homework.title} `}</h3>
        </div>
        <div className={styles.panel__infoWrap}>
          <p className={styles.panel__date}>{`Deadline: ${new Date(
            homework.deadline
          ).toLocaleString()}`}</p>
          <div className={styles.panel__complexityWrap}>
            <p className={styles.panel__complexity}>Complexity</p>
            <Progress.Line
              percent={homework.complexity}
              strokeColor="#b0c8d1"
              strokeWidth={8}
            />
          </div>
        </div>
        <div className={styles.panel__linkWrap}>
          <Link
            to={`${path}${homework.lessonId}`}
            className={styles.panel__link}
          >{`Lesson ${homework.lessonId}`}</Link>
        </div>
        <Divider />
        <p>{homework.description}</p>
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
      {currentHomeworks && currentHomeworks.length !== 0 && (
        <Panel className={styles.panel} bordered shaded>
          {currentHomeworks.map((item, index) => (
            <React.Fragment key={uuidv4()}>
              <div className={styles.panel__hwInfo}>
                <p className={styles.panel__subtitle}>{user}</p>
                <p
                  className={styles.panel__date}
                >{`Uploaded: ${item.uploadDate}`}</p>
              </div>
              <ReactMarkdown>{item.body}</ReactMarkdown>
              <Divider />
            </React.Fragment>
          ))}
        </Panel>
      )}
      <Panel className={styles.panel} bordered shaded>
        <p className={styles.panel__subtitle}>Add homework</p>
        <div className={styles.panel__markdownWrap}>
          <MarkdownEditor onSend={handleSend} />
        </div>
      </Panel>
    </>
  );
};

Homework.propTypes = {
  user: PropTypes.string,
  homework: PropTypes.object,
  userHomeworks: PropTypes.array,
  studentId: PropTypes.string,
  saveHomework: PropTypes.func,
  path: PropTypes.string,
};

export default Homework;
