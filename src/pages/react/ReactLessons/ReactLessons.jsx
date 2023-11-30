import { Loader } from 'rsuite';
import DefaultTemplate from '../../../templates/defaultPage';
import {
    useGetReactLessonsQuery,
    useGetReactHomeworksQuery,
} from '../../../store/api';
import Lessons from '../../../components/Lessons';

const ReactLessons = () => {
    const { data: lessons, isLoading } = useGetReactLessonsQuery();
    const { data: homeworks, isLoading: isLoad } = useGetReactHomeworksQuery();

    return (
        <DefaultTemplate>
            {isLoading ? (
                <Loader center={true} size="lg" speed="slow" />
            ) : (
                <Lessons
                    lessons={lessons}
                    homeworks={isLoad ? [] : homeworks}
                    path="/vidminno/react-course/lessons/"
                    course="React Course"
                />
            )}
        </DefaultTemplate>
    );
};

export default ReactLessons;
