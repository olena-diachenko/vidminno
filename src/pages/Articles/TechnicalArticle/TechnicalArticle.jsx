import { useParams } from 'react-router-dom';
import { Loader } from 'rsuite';
import React from 'react';
import { useGetTechArticlesByIdQuery } from '../../../store/api';
import Article from '../../../components/Article';
import DefaultTemplate from '../../../templates/defaultPage';

const TechnicalArticle = () => {
  const { articleId } = useParams();
  const { data: article, isLoading } = useGetTechArticlesByIdQuery(articleId);

  return (
    <DefaultTemplate>
      {isLoading ? (
        <Loader center={true} size="lg" speed="slow" />
      ) : (
        <Article article={article} />
      )}
    </DefaultTemplate>
  );
};

export default TechnicalArticle;
