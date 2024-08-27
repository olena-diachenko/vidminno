import {
  Badge,
  Button,
  ButtonToolbar,
  ButtonGroup,
  RadioTile,
  RadioTileGroup,
  Panel,
  PanelGroup,
  IconButton,
} from 'rsuite';
import PageNextIcon from '@rsuite/icons/PageNext';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@rsuite/icons';
import { FaHeart, FaCheck } from 'react-icons/fa';
import VisibleIcon from '@rsuite/icons/Visible';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import {
  categoriesList,
  categoriesOfArticles,
  categoriesValues,
} from './constants';
import styles from './style.module.scss';

const Articles = ({
  articles,
  favoriteArticles,
  path,
  category,
  toggleFavorites,
}) => {
  const navigate = useNavigate();

  const redirectHandler = value => () => {
    navigate(`${path}${category}/${value}`);
  };

  const clickHandler = e => {
    e === categoriesValues.allArticles
      ? navigate(`${path}`)
      : navigate(`${path}${e}`);
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
      <h2>
        {categoriesOfArticles[category]
          ? `Articles / ${categoriesOfArticles[category]}`
          : 'Articles'}
      </h2>
      <div className={styles.panel__wrap}>
        <PanelGroup
          className={styles.panel__group}
          accordion
          defaultActiveKey={0}
        >
          {articles &&
            (category !== categoriesValues.favorites
              ? articles.map(item => (
                  <Panel
                    className={styles.panel}
                    header={<h5>{item.title}</h5>}
                    eventKey={uuidv4()}
                    key={uuidv4()}
                  >
                    <div className={styles.panel__info}>
                      <p className={styles.panel__date}>{`Created: ${new Date(
                        item.created
                      ).toLocaleString()}`}</p>
                      <div>
                        {item.categories &&
                          item.categories.map(itemCategory => (
                            <Badge
                              className={styles.panel__badge}
                              content={itemCategory}
                              key={uuidv4()}
                            />
                          ))}
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
                                as={!item.isFavorite ? FaHeart : FaCheck}
                                style={{
                                  color: '#fff',
                                }}
                              />
                            }
                            onClick={toggleFavoriteHandler(item)}
                          />
                          <Button
                            className={styles.panel__button}
                            appearance="primary"
                            size="md"
                            endIcon={<PageNextIcon />}
                            onClick={redirectHandler(item.id)}
                          >
                            Read
                          </Button>
                        </ButtonGroup>
                      </ButtonToolbar>
                      <div>
                        <ButtonToolbar>
                          <ButtonGroup>
                            <IconButton
                              className={styles.panel__viewButton}
                              size="md"
                              icon={
                                <Icon
                                  as={VisibleIcon}
                                  style={{
                                    color: '#fff',
                                  }}
                                  className={styles.panel__viewButton}
                                />
                              }
                              style={{
                                color: '#fff',
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
              : favoriteArticles.map(favItem => (
                  <Panel
                    className={styles.panel}
                    header={<h5>{favItem.title}</h5>}
                    eventKey={uuidv4()}
                    key={uuidv4()}
                  >
                    <div className={styles.panel__info}>
                      <p className={styles.panel__date}>{`Created: ${new Date(
                        favItem.created
                      ).toLocaleString()}`}</p>
                      <div>
                        {favItem.categories &&
                          favItem.categories.map(itemCategory => (
                            <Badge
                              className={styles.panel__badge}
                              content={itemCategory}
                              style={{
                                background: '#ff6384',
                                padding: 5,
                              }}
                              key={uuidv4()}
                            />
                          ))}
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
                                as={!favItem.isFavorite ? FaHeart : FaCheck}
                                style={{
                                  color: '#fff',
                                }}
                              />
                            }
                            onClick={toggleFavoriteHandler(favItem)}
                          />
                          <Button
                            className={styles.panel__button}
                            appearance="primary"
                            size="md"
                            endIcon={<PageNextIcon />}
                            onClick={redirectHandler(favItem.id)}
                          >
                            Read
                          </Button>
                        </ButtonGroup>
                      </ButtonToolbar>
                      <div>
                        <ButtonToolbar>
                          <ButtonGroup>
                            <IconButton
                              className={styles.panel__viewButton}
                              size="md"
                              icon={
                                <Icon
                                  as={VisibleIcon}
                                  style={{
                                    color: '#fff',
                                  }}
                                  className={styles.panel__viewButton}
                                />
                              }
                              style={{
                                color: '#fff',
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
          header={
            <p className={styles.panel__categories_heading}>{'Categories'}</p>
          }
          bordered
        >
          <RadioTileGroup
            defaultValue={`${category}`}
            aria-label="Visibility Level"
            className={styles.panel__radioWrap}
            onChange={clickHandler}
          >
            {categoriesList.map(categoryItem => (
              <RadioTile
                key={categoryItem.id}
                className={
                  categoryItem.value === categoriesValues.favorites
                    ? styles.panel__radioFav
                    : styles.panel__radio
                }
                icon={
                  <Icon
                    as={categoryItem.icon}
                    className={styles.panel__radioIcon}
                  />
                }
                label={categoryItem.label}
                value={categoryItem.value}
              />
            ))}
          </RadioTileGroup>
        </Panel>
      </div>
    </Panel>
  );
};

Articles.propTypes = {
  articles: PropTypes.array || false,
  favoriteArticles: PropTypes.array,
  path: PropTypes.string,
  category: PropTypes.string,
  toggleFavorites: PropTypes.func,
};

export default Articles;
