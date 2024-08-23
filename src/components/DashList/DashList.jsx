import React from 'react';
import { List, FlexboxGrid } from 'rsuite';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import getComplexity from '../../utils/getComplexity';
import {
  styleCenter,
  titleStyle,
  dataStyle,
  lessonDate,
  lessonHeaderName,
  lessonName,
} from './styles';

const DashList = props => {
  const { lessons, endpoint } = props;

  return (
    <>
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={2} style={styleCenter}>
          №
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          colspan={6}
          style={{
            ...styleCenter,
            ...lessonName,
            ...lessonHeaderName,
          }}
        >
          Lesson name
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={6} style={styleCenter}>
          <div style={lessonHeaderName}>Date</div>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={6} style={styleCenter}>
          <div style={lessonHeaderName}>Complexity</div>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={4} style={styleCenter}></FlexboxGrid.Item>
      </FlexboxGrid>
      <List hover>
        {lessons.map((item, index) => (
          <List.Item key={item.title} index={index + 1}>
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={2} style={styleCenter}>
                {index + 1}
              </FlexboxGrid.Item>
              <FlexboxGrid.Item
                colspan={6}
                style={{
                  ...styleCenter,
                  ...lessonName,
                }}
              >
                <div style={titleStyle}>{item.title}</div>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={6} style={styleCenter}>
                <div style={lessonDate}>
                  <div style={dataStyle}>{item.date}</div>
                </div>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={6} style={styleCenter}>
                <div style={lessonDate}>
                  <div style={dataStyle}>{getComplexity(item.complexity)}</div>
                </div>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={4} style={styleCenter}>
                <Link to={`${endpoint}/${index + 1}`}>View</Link>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </List.Item>
        ))}
      </List>
    </>
  );
};

DashList.propTypes = {
  lessons: PropTypes.array,
};

export default DashList;
