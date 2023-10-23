import React from 'react';
import { List, FlexboxGrid } from 'rsuite';
import FilmIcon from '@rsuite/icons/legacy/Film';
import PropTypes from 'prop-types';

const DashList = props => {
    const data = props.lessons;

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
                <FlexboxGrid.Item
                    colspan={2}
                    style={styleCenter}
                ></FlexboxGrid.Item>
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
                {data.map((item, index) => (
                    <List.Item key={item.title} index={index + 1}>
                        <FlexboxGrid>
                            <FlexboxGrid.Item colspan={2} style={styleCenter}>
                                {React.cloneElement(<FilmIcon />, {
                                    style: {
                                        color: 'darkgrey',
                                        fontSize: '1.5em',
                                    },
                                })}
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
                                        {item.complexity}
                                    </div>
                                </div>
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item
                                colspan={4}
                                style={{
                                    ...styleCenter,
                                }}
                            >
                                <a href="#">View</a>
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
