import { Loader } from 'rsuite';
import { useSelector } from 'react-redux';
import DefaultTemplate from '../../../templates/defaultPage';
import {
    useGetReactHomeworksByUserIdQuery,
    useGetReactHomeworksQuery,
    useGetUserByNameQuery,
} from '../../../store/api';
import Homeworks from '../../../components/Homeworks';

const ReactHomeworks = () => {
    const { data: homeworks, isLoading } = useGetReactHomeworksQuery();
    const user = useSelector(state => state.auth.user);
    const { data: student, isLoading: isLoad } = useGetUserByNameQuery(user);
    const studentId = !isLoad && student[0].id;
    const { data: userHomeworks, isLoading: isLoadHw } =
        useGetReactHomeworksByUserIdQuery(studentId);

    return (
        <DefaultTemplate>
            {isLoading ? (
                <Loader center={true} size="lg" speed="slow" />
            ) : (
                <Homeworks
                    homeworks={homeworks}
                    path={'/react-course/homeworks/'}
                    course={'React Course'}
                    userHomeworks={!isLoadHw && userHomeworks}
                />
            )}
        </DefaultTemplate>
    );
};

export default ReactHomeworks;
