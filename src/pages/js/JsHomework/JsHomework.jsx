import { useParams } from 'react-router-dom';
import { Loader } from 'rsuite';
import React from 'react';
import DefaultTemplate from '../../../templates/defaultPage';
import {
  useGetJsHomeworksByIdQuery,
  useGetUserByEmailQuery,
  useGetJsHomeworksByUserIdQuery,
  useSaveJsHomeworkByUserIdMutation,
} from '../../../store/api';
import Homework from '../../../components/Homework';
import useAuth from '../../../hooks/useAuth';

const JsHomework = () => {
  const { homeworkId } = useParams();
  const { email } = useAuth();
  const { data: homework, isLoading: isLoad } =
    useGetJsHomeworksByIdQuery(homeworkId);
  const { data: student, isLoading } = useGetUserByEmailQuery(email);
  const studentId = !isLoading && student && student[0]?.id;
  const { data: userHomeworks } = useGetJsHomeworksByUserIdQuery(studentId, {
    skip: !studentId,
  });
  const [saveHomework] = useSaveJsHomeworkByUserIdMutation();

  return (
    <DefaultTemplate>
      {isLoad || isLoading ? (
        <Loader center={true} size="lg" speed="slow" />
      ) : (
        <Homework
          user={student[0].username}
          homework={homework}
          studentId={studentId}
          saveHomework={saveHomework}
          userHomeworks={userHomeworks}
          path="/vidminno/js-course/lessons/"
        />
      )}
    </DefaultTemplate>
  );
};

export default JsHomework;
