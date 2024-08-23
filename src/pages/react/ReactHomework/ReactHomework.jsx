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
  const { homeworkId } = useParams();
  const user = useSelector(state => state.auth.user);
  const { data: homework, isLoading: isLoad } =
    useGetReactHomeworksByIdQuery(homeworkId);
  const { data: student, isLoading } = useGetUserByNameQuery(user);
  const studentId = !isLoading && student && student[0]?.id;
  const { data: userHomeworks } = useGetReactHomeworksByUserIdQuery(studentId, {
    skip: !studentId,
  });
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
          userHomeworks={userHomeworks}
          path="/vidminno/react-course/lessons/"
        />
      )}
    </DefaultTemplate>
  );
};

export default ReactHomework;
