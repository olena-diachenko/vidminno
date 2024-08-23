import { useParams } from 'react-router-dom';
import { Loader } from 'rsuite';
import React from 'react';
import DefaultTemplate from '../../../templates/defaultPage';
import Lesson from '../../../components/Lesson';
import {
  useGetJsLessonByIdQuery,
  useGetAddMaterialByJsLessonIdQuery,
  useGetJsHomeworksByLessonIdQuery,
} from '../../../store/api';

const JsLesson = () => {
  const { lessonId } = useParams();
  const { data: lesson, isLoading } = useGetJsLessonByIdQuery(lessonId);
  const { data: addMaterials } = useGetAddMaterialByJsLessonIdQuery(lessonId);
  const { data: homeworks } = useGetJsHomeworksByLessonIdQuery(lessonId);

  return (
    <DefaultTemplate>
      {isLoading ? (
        <Loader center={true} size="lg" speed="slow" />
      ) : (
        <Lesson
          lesson={lesson}
          addMaterial={addMaterials || []}
          homeworks={homeworks || []}
          hwPath="/vidminno/js-course/homeworks/"
        />
      )}
    </DefaultTemplate>
  );
};

export default JsLesson;
