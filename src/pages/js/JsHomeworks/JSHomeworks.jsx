import { Loader } from 'rsuite';
import DefaultTemplate from '../../../templates/defaultPage';
import {
  useGetJsHomeworksByUserIdQuery,
  useGetJsHomeworksQuery,
  useGetUserByEmailQuery,
} from '../../../store/api';
import Homeworks from '../../../components/Homeworks';
import useAuth from '../../../hooks/useAuth';

const JSHomeworks = () => {
  const { data: homeworks, isLoading } = useGetJsHomeworksQuery();
  const { email } = useAuth();
  const { data: student, isLoading: isLoad } = useGetUserByEmailQuery(email);
  const studentId = !isLoad && student && student[0].id;
  const { data: userHomeworks } = useGetJsHomeworksByUserIdQuery(studentId, {
    skip: !studentId,
  });

  return (
    <DefaultTemplate>
      {isLoading ? (
        <Loader center={true} size="lg" speed="slow" />
      ) : (
        <Homeworks
          homeworks={homeworks}
          path="/vidminno/js-course/homeworks/"
          course="JS Course"
          userHomeworks={userHomeworks}
        />
      )}
    </DefaultTemplate>
  );
};

export default JSHomeworks;
