import React from 'react';
import { List, FlexboxGrid } from 'rsuite';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import getComplexity from '../../utils/complexity';

const DashList = props => {
    const { lessons } = props;
    const { endpoint } = props;

    const styleCenter = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60px',
    };

    const titleStyle = {
        fontSize: '1.2em',
        fontWeight: 500,
    };

    const dataStyle = {
        paddingBottom: 5,
        whiteSpace: 'nowrap',
        fontWeight: 500,
    };

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
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        overflow: 'hidden',
                        fontWeight: 'bold',
                        fontSize: 16,
                    }}
                >
                    Lesson name
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={6} style={styleCenter}>
                    <div
                        style={{
                            textAlign: 'right',
                            fontWeight: 'bold',
                            fontSize: 16,
                        }}
                    >
                        Date
                    </div>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={6} style={styleCenter}>
                    <div
                        style={{
                            textAlign: 'right',
                            fontWeight: 'bold',
                            fontSize: 16,
                        }}
                    >
                        Complexity
                    </div>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item
                    colspan={4}
                    style={{
                        ...styleCenter,
                    }}
                ></FlexboxGrid.Item>
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
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    overflow: 'hidden',
                                }}
                            >
                                <div style={titleStyle}>{item.title}</div>
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item colspan={6} style={styleCenter}>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={dataStyle}>{item.date}</div>
                                </div>
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item colspan={6} style={styleCenter}>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={dataStyle}>
                                        {getComplexity(item.complexity)}
                                    </div>
                                </div>
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item
                                colspan={4}
                                style={{
                                    ...styleCenter,
                                }}
                            >
                                <Link to={`${endpoint}/${index + 1}`}>
                                    View
                                </Link>
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

DashList.defaultProps = {
    lessons: [
        { title: 'Lesson', date: 'Date', complexity: 'There is no info' },
    ],
};

export default DashList;
