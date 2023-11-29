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
    FaCheck,
} from 'react-icons/fa';
import TagNumberIcon from '@rsuite/icons/TagNumber';
import VisibleIcon from '@rsuite/icons/Visible';
import PropTypes from 'prop-types';
import pageTitle from '../../utils/articleCategories';
import styles from './style.module.scss';

const Articles = props => {
    const {
        articles,
        favoriteArticles,
        path,
        category,
        toggleFavorites,
        icon,
    } = props;

    const navigation = useNavigate();

    const redirectHandler = value => () => {
        navigation(`${path}${category}/${value}`);
    };

    const clickHandler = e => {
        navigation(`${path}${e}`);
    };

    const toggleFavoriteHandler = item => () => {
        const article = {
            title: item.title,
            content: item.content,
            viewed: item.viewed,
            categories: item.categories,
            isFavorite: !item.isFavorite,
            id: item.id,
        };

        const articleInfo = {
            id: article.id,
            body: article,
        };

        toggleFavorites(articleInfo);
    };

    return (
        <Panel bordered shaded>
            <h3>
                {pageTitle[category] === undefined
                    ? 'Articles'
                    : `Articles / ${pageTitle[category]}`}
            </h3>
            <div className={styles.panel__wrap}>
                <PanelGroup
                    className={styles.panel__group}
                    accordion
                    defaultActiveKey={0}
                >
                    {articles &&
                        (category !== 'favorites'
                            ? articles.map((item, index) => (
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
                                                              content={
                                                                  itemCategory
                                                              }
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
                                                      className={
                                                          styles.panel__button
                                                      }
                                                      size="md"
                                                      icon={
                                                          <Icon
                                                              as={
                                                                  item.isFavorite ===
                                                                  false
                                                                      ? FaHeart
                                                                      : FaCheck
                                                              }
                                                              style={{
                                                                  color: 'white',
                                                              }}
                                                          />
                                                      }
                                                      onClick={toggleFavoriteHandler(
                                                          item
                                                      )}
                                                  />
                                                  <Button
                                                      className={
                                                          styles.panel__button
                                                      }
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
                                                                  as={
                                                                      VisibleIcon
                                                                  }
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
                              ))
                            : favoriteArticles.map((favItem, favIndex) => (
                                  <Panel
                                      className={styles.panel}
                                      header={<h5>{favItem.title}</h5>}
                                      eventKey={favIndex}
                                      key={favIndex}
                                  >
                                      <div className={styles.panel__info}>
                                          <p
                                              className={styles.panel__date}
                                          >{`Created: ${favItem.created}`}</p>
                                          <div>
                                              {favItem.categories !== 0 &&
                                                  favItem.categories.map(
                                                      (itemCategory, ind) => (
                                                          <Badge
                                                              className={
                                                                  styles.panel__badge
                                                              }
                                                              content={
                                                                  itemCategory
                                                              }
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
                                                      className={
                                                          styles.panel__button
                                                      }
                                                      size="md"
                                                      icon={
                                                          <Icon
                                                              as={
                                                                  favItem.isFavorite ===
                                                                  false
                                                                      ? FaHeart
                                                                      : FaCheck
                                                              }
                                                              style={{
                                                                  color: 'white',
                                                              }}
                                                          />
                                                      }
                                                      onClick={toggleFavoriteHandler(
                                                          favItem
                                                      )}
                                                  />
                                                  <Button
                                                      className={
                                                          styles.panel__button
                                                      }
                                                      appearance="primary"
                                                      size="md"
                                                      endIcon={<PageNextIcon />}
                                                      onClick={redirectHandler(
                                                          favItem.id
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
                                                                  as={
                                                                      VisibleIcon
                                                                  }
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
                              )))}
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

Articles.propTypes = {
    articles: PropTypes.array,
    favoriteArticles: PropTypes.array,
    path: PropTypes.string,
    category: PropTypes.string,
    toggleFavorites: PropTypes.func,
};

export default Articles;
