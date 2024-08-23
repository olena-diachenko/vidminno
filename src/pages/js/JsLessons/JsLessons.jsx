import { Loader } from 'rsuite';
import DefaultTemplate from '../../../templates/defaultPage';
import {
  useGetJsLessonsQuery,
  useGetJsHomeworksQuery,
} from '../../../store/api';
import Lessons from '../../../components/Lessons';

const JsLessons = () => {
  const { data: lessons, isLoading } = useGetJsLessonsQuery();
  const { data: homeworks } = useGetJsHomeworksQuery();

  return (
    <DefaultTemplate>
      {isLoading ? (
        <Loader center={true} size="lg" speed="slow" />
      ) : (
        <Lessons
          lessons={lessons}
          homeworks={homeworks || []}
          path="/vidminno/js-course/lessons/"
          course="JS Course"
        />
      )}
    </DefaultTemplate>
  );
};

export default JsLessons;
