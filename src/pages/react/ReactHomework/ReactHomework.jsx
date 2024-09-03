import { useParams } from 'react-router-dom';
import { Loader } from 'rsuite';
import DefaultTemplate from '../../../templates/defaultPage';
import {
  useGetReactHomeworksByIdQuery,
  useGetReactHomeworksByUserIdQuery,
  useSaveReactHomeworkByUserIdMutation,
  useGetUserByEmailQuery,
} from '../../../store/api';
import Homework from '../../../components/Homework';
import useAuth from '../../../hooks/useAuth';

const ReactHomework = () => {
  const { homeworkId } = useParams();
  const { email } = useAuth();
  const { data: homework, isLoading: isLoad } =
    useGetReactHomeworksByIdQuery(homeworkId);
  const { data: student, isLoading } = useGetUserByEmailQuery(email);
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
          user={student.username}
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
