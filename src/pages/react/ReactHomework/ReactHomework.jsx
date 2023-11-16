import { useParams } from 'react-router-dom';
import { Loader } from 'rsuite';
import { useSelector } from 'react-redux';
import DefaultTemplate from '../../../templates/defaultPage';
import {
    useGetReactHomeworksByIdQuery,
    useGetUserByNameQuery,
    useGetReactHomeworksByUserIdQuery,
    useSaveReactHomeworkByUserIdMutation,
} from '../../../store/api';
import Homework from '../../../components/Homework';

const ReactHomework = () => {
    const index = useParams().homeworkId;
    const user = useSelector(state => state.auth.user);
    const { data: homework, isLoading: isLoad } =
        useGetReactHomeworksByIdQuery(index);
    const { data: student, isLoading } = useGetUserByNameQuery(user);
    const studentId = !isLoading && student[0].id;
    const { data: userHomeworks, isLoading: isLoadHw } =
        useGetReactHomeworksByUserIdQuery(studentId);
    const [saveHomework] = useSaveReactHomeworkByUserIdMutation();

    return (
        <DefaultTemplate>
            {isLoad ? (
                <Loader center={true} size="lg" speed="slow" />
            ) : (
                <Homework
                    user={user}
                    homework={homework}
                    studentId={studentId}
                    saveHomework={saveHomework}
                    userHomeworks={!isLoadHw && userHomeworks}
                    path="/react-course/lessons/"
                />
            )}
        </DefaultTemplate>
    );
};

export default ReactHomework;
