import { useParams } from 'react-router-dom';
import { useGetTechArticlesByIdQuery } from '../../../store/api';

const TechnicalArticle = () => {
    const index = useParams().articleId;
    const { data: article, isLoading } = useGetTechArticlesByIdQuery(index);

    !isLoading && console.log(article);
};

export default TechnicalArticle;
