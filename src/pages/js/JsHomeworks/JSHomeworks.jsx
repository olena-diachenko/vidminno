import { Loader } from 'rsuite';
import { useSelector } from 'react-redux';
import DefaultTemplate from '../../../templates/defaultPage';
import { useGetJsHomeworksQuery } from '../../../store/api';
import Homeworks from '../../../components/Homeworks';

const JSHomeworks = () => {
    const { data: homeworks, isLoading } = useGetJsHomeworksQuery();
    const user = useSelector(state => state.auth.user);

    return (
        <DefaultTemplate>
            {isLoading ? (
                <Loader center={true} size="lg" speed="slow" />
            ) : (
                <Homeworks
                    homeworks={homeworks}
                    path={'/js-course/homeworks/'}
                    course={'JS Course'}
                    user={user}
                />
            )}
        </DefaultTemplate>
    );
};

export default JSHomeworks;
