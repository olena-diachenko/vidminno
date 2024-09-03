import { Loader } from 'rsuite';
import DefaultTemplate from '../../../templates/defaultPage';
import {
  useGetReactHomeworksByUserIdQuery,
  useGetReactHomeworksQuery,
  useGetUserByEmailQuery,
} from '../../../store/api';
import Homeworks from '../../../components/Homeworks';
import useAuth from '../../../hooks/useAuth';

const ReactHomeworks = () => {
  const { data: homeworks, isLoading } = useGetReactHomeworksQuery();
  const { email } = useAuth();
  const { data: student, isLoading: isLoad } = useGetUserByEmailQuery(email);
  const studentId = !isLoad && student && student[0].id;
  const { data: userHomeworks } = useGetReactHomeworksByUserIdQuery(studentId, {
    skip: !studentId,
  });

  return (
    <DefaultTemplate>
      {isLoading ? (
        <Loader center={true} size="lg" speed="slow" />
      ) : (
        <Homeworks
          homeworks={homeworks}
          path="/vidminno/react-course/homeworks/"
          course="React Course"
          userHomeworks={userHomeworks}
        />
      )}
    </DefaultTemplate>
  );
};

export default ReactHomeworks;
