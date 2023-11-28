import { Loader } from 'rsuite';
import React from 'react';
import { useSelector } from 'react-redux';
import DefaultTemplate from '../../../templates/defaultPage';
import { useGetTechArticlesQuery } from '../../../store/api';
import Articles from '../../../components/Articles';

const TechnicalArticles = () => {
    const { data: articles, isLoading } = useGetTechArticlesQuery();
    const theme = useSelector(state => state.theme.theme);

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
                <Articles
                    articles={articles}
                    path={'/technical-articles/'}
                    icon={TSIcon}
                />
            )}
        </DefaultTemplate>
    );
};

export default TechnicalArticles;
