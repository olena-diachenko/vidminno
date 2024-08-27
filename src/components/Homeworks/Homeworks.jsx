import { Badge, Button, Panel, PanelGroup, Progress } from 'rsuite';
import PageNextIcon from '@rsuite/icons/PageNext';
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './style.module.scss';
import useRedirectHandler from '../../hooks/useRedirectHandler';

const Homeworks = props => {
  const { homeworks, path, course, userHomeworks } = props;
  const redirectHandler = useRedirectHandler();

  return (
    <Panel bordered shaded>
      <h3>{`${course} / Homeworks`}</h3>
      <PanelGroup accordion defaultActiveKey={0}>
        {homeworks &&
          homeworks.map((item, index) => (
            <Panel
              className={styles.panel}
              header={<h5>{`Homework ${index + 1}. ${item.title}`}</h5>}
              eventKey={uuidv4()}
              key={uuidv4()}
            >
              <div className={styles.panel__info}>
                <p className={styles.panel__date}>{`Due by: ${new Date(
                  item.deadline
                ).toLocaleString()}`}</p>
                <Badge
                  className={styles.panel__badge}
                  content={
                    userHomeworks &&
                    userHomeworks.some(hw => hw.hwId === item.id)
                      ? 'Completed'
                      : 'Not completed'
                  }
                />
              </div>
              <div className={styles.panel__complexityWrap}>
                <p className={styles.panel__subtitle}>
                  <b>Complexity:</b>
                </p>
                <Progress.Line
                  percent={item.complexity}
                  strokeColor="#b0c8d1"
                />
              </div>
              <div className={styles.panel__desc}>
                <b style={{ marginRight: 5 }}>Description: </b>
                <p>{item.description}</p>
              </div>
              <Button
                className={styles.panel__button}
                appearance="primary"
                size="md"
                endIcon={<PageNextIcon />}
                onClick={redirectHandler(`${path}${index + 1}`)}
              >
                To the homework
              </Button>
            </Panel>
          ))}
      </PanelGroup>
      }
    </Panel>
  );
};

Homeworks.propTypes = {
  homeworks: PropTypes.array,
  path: PropTypes.string,
  course: PropTypes.string,
  userHomeworks: PropTypes.array,
};

export default Homeworks;
