import {
    Badge,
    Button,
    ButtonToolbar,
    ButtonGroup,
    RadioTile,
    RadioTileGroup,
    Loader,
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
import { useSelector } from 'react-redux';
import DefaultTemplate from '../../../templates/defaultPage';
import { useGetTechArticlesQuery } from '../../../store/api';
import styles from './style.module.scss';

const TechnicalArticles = () => {
    const { data: articles, isLoading } = useGetTechArticlesQuery();
    const navigation = useNavigate();
    const theme = useSelector(state => state.theme.theme);
    const redirectHandler = value => () => {
        navigation(`/technical-articles/${value}`);
    };

    const clickHandler = e => {
        console.log(e);
    };

    const TSIcon = React.forwardRef((props, ref) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            fill={theme === 'dark' ? 'white' : '#575757'}
            viewBox="0 0 50 50"
        >
            <path d="M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4	V26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026	c0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096	c0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z"></path>
        </svg>
    ));

    return (
        <DefaultTemplate>
            {isLoading ? (
                <Loader size="lg" />
            ) : (
                <Panel bordered shaded>
                    <h3>{'Articles'}</h3>
                    <div className={styles.panel__wrap}>
                        <PanelGroup
                            className={styles.panel__group}
                            accordion
                            defaultActiveKey={0}
                        >
                            {articles.map((item, index) => (
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
                                                    (category, ind) => (
                                                        <Badge
                                                            className={
                                                                styles.panel__badge
                                                            }
                                                            content={category}
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
                                                    index + 1
                                                )}
                                            >
                                                Read
                                            </Button>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                </Panel>
                            ))}
                        </PanelGroup>
                        <Panel
                            className={styles.panel__categories}
                            header={<h4>{'Categories'}</h4>}
                            bordered
                        >
                            <RadioTileGroup
                                defaultValue="all-articles"
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
                                            as={TSIcon}
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
            )}
        </DefaultTemplate>
    );
};

export default TechnicalArticles;
