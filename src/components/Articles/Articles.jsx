import {
    Badge,
    Button,
    ButtonToolbar,
    ButtonGroup,
    RadioTile,
    RadioTileGroup,
    Panel,
    PanelGroup,
    Divider,
    IconButton,
} from 'rsuite';
import PageNextIcon from '@rsuite/icons/PageNext';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@rsuite/icons';
import {
    FaJsSquare,
    FaReact,
    FaRegNewspaper,
    FaMicrochip,
    FaBug,
    FaHtml5,
    FaHeart,
} from 'react-icons/fa';
import TagNumberIcon from '@rsuite/icons/TagNumber';
import VisibleIcon from '@rsuite/icons/Visible';
import styles from './style.module.scss';

const Articles = props => {
    const { articles, path, category, icon } = props;

    const navigation = useNavigate();

    const redirectHandler = value => () => {
        navigation(`${path}${category}/${value}`);
    };

    const clickHandler = e => {
        navigation(`${path}${e}`);
    };

    return (
        <Panel bordered shaded>
            <h3>{'Articles'}</h3>
            <div className={styles.panel__wrap}>
                <PanelGroup
                    className={styles.panel__group}
                    accordion
                    defaultActiveKey={0}
                >
                    {articles &&
                        articles.map((item, index) => (
                            <Panel
                                className={styles.panel}
                                header={<h5>{item.title}</h5>}
                                eventKey={index}
                                key={index}
                            >
                                <div className={styles.panel__info}>
                                    <p
                                        className={styles.panel__date}
                                    >{`Created: ${item.created}`}</p>
                                    <div>
                                        {item.categories !== 0 &&
                                            item.categories.map(
                                                (itemCategory, ind) => (
                                                    <Badge
                                                        className={
                                                            styles.panel__badge
                                                        }
                                                        content={itemCategory}
                                                        style={{
                                                            background:
                                                                '#ff6384',
                                                            padding: 5,
                                                        }}
                                                        key={ind}
                                                    />
                                                )
                                            )}
                                    </div>
                                </div>
                                <div className={styles.panel__btnGroup}>
                                    <ButtonToolbar>
                                        <ButtonGroup>
                                            <IconButton
                                                className={styles.panel__button}
                                                size="md"
                                                icon={
                                                    <Icon
                                                        as={FaHeart}
                                                        style={{
                                                            color: 'white',
                                                        }}
                                                    />
                                                }
                                            />
                                            <Button
                                                className={styles.panel__button}
                                                appearance="primary"
                                                size="md"
                                                endIcon={<PageNextIcon />}
                                                onClick={redirectHandler(
                                                    item.id
                                                )}
                                            >
                                                Read
                                            </Button>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                    <div>
                                        <ButtonToolbar>
                                            <ButtonGroup>
                                                <IconButton
                                                    className={
                                                        styles.panel__viewButton
                                                    }
                                                    size="md"
                                                    icon={
                                                        <Icon
                                                            as={VisibleIcon}
                                                            style={{
                                                                color: 'white',
                                                            }}
                                                            className={
                                                                styles.panel__viewButton
                                                            }
                                                        />
                                                    }
                                                    style={{
                                                        color: 'white',
                                                        paddingLeft: 40,
                                                    }}
                                                    disabled
                                                >
                                                    Views
                                                </IconButton>
                                            </ButtonGroup>
                                        </ButtonToolbar>
                                    </div>
                                </div>
                            </Panel>
                        ))}
                </PanelGroup>
                <Panel
                    className={styles.panel__categories}
                    header={<h4>{'Categories'}</h4>}
                    bordered
                >
                    <RadioTileGroup
                        defaultValue={`${category}`}
                        aria-label="Visibility Level"
                        className={styles.panel__radioWrap}
                        onChange={clickHandler}
                    >
                        <RadioTile
                            className={styles.panel__radio}
                            icon={
                                <Icon
                                    as={FaRegNewspaper}
                                    className={styles.panel__radioIcon}
                                />
                            }
                            label="All articles"
                            value="all-articles"
                        ></RadioTile>
                        <RadioTile
                            className={styles.panel__radio}
                            icon={
                                <Icon
                                    as={FaHeart}
                                    className={styles.panel__radioIcon}
                                />
                            }
                            label="Favorites"
                            value="favorites"
                        ></RadioTile>
                        <Divider />
                        <RadioTile
                            className={styles.panel__radio}
                            icon={
                                <Icon
                                    as={FaMicrochip}
                                    className={styles.panel__radioIcon}
                                />
                            }
                            label="Architecture"
                            value="architecture"
                        ></RadioTile>
                        <RadioTile
                            className={styles.panel__radio}
                            icon={
                                <Icon
                                    as={TagNumberIcon}
                                    className={styles.panel__radioIcon}
                                />
                            }
                            label="Data Types"
                            value="data-types"
                        ></RadioTile>
                        <RadioTile
                            className={styles.panel__radio}
                            icon={
                                <Icon
                                    as={FaBug}
                                    className={styles.panel__radioIcon}
                                />
                            }
                            label="Front-end testing"
                            value="front-end-testing"
                        ></RadioTile>
                        <RadioTile
                            className={styles.panel__radio}
                            icon={
                                <Icon
                                    as={FaHtml5}
                                    className={styles.panel__radioIcon}
                                />
                            }
                            label="HTML"
                            value="html"
                        ></RadioTile>
                        <RadioTile
                            className={styles.panel__radio}
                            icon={
                                <Icon
                                    as={FaJsSquare}
                                    className={styles.panel__radioIcon}
                                />
                            }
                            label="JavaScript"
                            value="javascript"
                        ></RadioTile>
                        <RadioTile
                            className={styles.panel__radio}
                            icon={
                                <Icon
                                    as={FaReact}
                                    className={styles.panel__radioIcon}
                                />
                            }
                            label="React"
                            value="react"
                        ></RadioTile>
                        <RadioTile
                            className={styles.panel__radio}
                            icon={
                                <Icon
                                    as={icon}
                                    className={styles.panel__radioIcon}
                                />
                            }
                            label="TypeScript"
                            value="typescript"
                        ></RadioTile>
                    </RadioTileGroup>
                </Panel>
            </div>
        </Panel>
    );
};

export default Articles;
