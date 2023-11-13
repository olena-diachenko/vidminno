import { Loader } from 'rsuite';
import { useSelector } from 'react-redux';
import DefaultTemplate from '../../../templates/defaultPage';
import { useGetReactHomeworksQuery } from '../../../store/api';
import Homeworks from '../../../components/Homeworks';

const ReactHomeworks = () => {
    const { data: homeworks, isLoading } = useGetReactHomeworksQuery();
    const user = useSelector(state => state.auth.user);

    return (
        <DefaultTemplate>
            {isLoading ? (
                <Loader center={true} size="lg" speed="slow" />
            ) : (
                <Homeworks
                    homeworks={homeworks}
                    path={'/react-course/homeworks/'}
                    course={'React Course'}
                    user={user}
                />
            )}
        </DefaultTemplate>
    );
};

export default ReactHomeworks;
