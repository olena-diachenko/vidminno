import { Loader } from 'rsuite';
import React from 'react';
import { useParams } from 'react-router-dom';
import DefaultTemplate from '../../../templates/defaultPage';
import {
  useGetTechArticlesByCategoryQuery,
  useGetTechArticlesQuery,
  useGetFavoriteTechArticlesQuery,
  useToggleFavoriteArticlesMutation,
} from '../../../store/api';
import Articles from '../../../components/Articles';
import { categoriesValues } from '../../../components/Articles/constants';

const TechnicalArticles = () => {
  const { articleCategory } = useParams();
  const category =
    articleCategory === categoriesValues.favorites ? true : articleCategory;
  const { data: articlesWithCategory, isLoading } =
    useGetTechArticlesByCategoryQuery(category || '');
  const { data: allArticles, isLoading: isLoad } = useGetTechArticlesQuery();
  const { data: favoriteArticles, isLoading: isLoadFavArt } =
    useGetFavoriteTechArticlesQuery();
  const [toggleFavorites] = useToggleFavoriteArticlesMutation();

  return (
    <DefaultTemplate>
      {isLoading ? (
        <Loader size="lg" />
      ) : (
        <Articles
          articles={articlesWithCategory || (!isLoad && allArticles)}
          favoriteArticles={!isLoadFavArt ? favoriteArticles : []}
          path={`/vidminno/technical-articles/`}
          category={articleCategory}
          toggleFavorites={toggleFavorites}
        />
      )}
    </DefaultTemplate>
  );
};

export default TechnicalArticles;
