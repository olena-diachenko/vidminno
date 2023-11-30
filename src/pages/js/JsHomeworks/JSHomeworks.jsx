import { Loader } from 'rsuite';
import { useSelector } from 'react-redux';
import DefaultTemplate from '../../../templates/defaultPage';
import {
    useGetJsHomeworksByUserIdQuery,
    useGetJsHomeworksQuery,
    useGetUserByNameQuery,
} from '../../../store/api';
import Homeworks from '../../../components/Homeworks';

const JSHomeworks = () => {
    const { data: homeworks, isLoading } = useGetJsHomeworksQuery();
    const user = useSelector(state => state.auth.user);
    const { data: student, isLoading: isLoad } = useGetUserByNameQuery(user);
    const studentId = !isLoad && student[0].id;
    const { data: userHomeworks, isLoading: isLoadHw } =
        useGetJsHomeworksByUserIdQuery(studentId);

    return (
        <DefaultTemplate>
            {isLoading ? (
                <Loader center={true} size="lg" speed="slow" />
            ) : (
                <Homeworks
                    homeworks={homeworks}
                    path="/vidminno/js-course/homeworks/"
                    course="JS Course"
                    userHomeworks={!isLoadHw && userHomeworks}
                />
            )}
        </DefaultTemplate>
    );
};

export default JSHomeworks;
