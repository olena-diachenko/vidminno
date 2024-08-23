import { useParams } from 'react-router-dom';
import { Loader } from 'rsuite';
import React from 'react';
import DefaultTemplate from '../../../templates/defaultPage';
import Lesson from '../../../components/Lesson';
import {
  useGetReactLessonByIdQuery,
  useGetAddMaterialByReactLessonIdQuery,
  useGetReactHomeworksByLessonIdQuery,
} from '../../../store/api';

const ReactLesson = () => {
  const { lessonId } = useParams();
  const { data: lesson, isLoading } = useGetReactLessonByIdQuery(lessonId);
  const { data: addMaterials } =
    useGetAddMaterialByReactLessonIdQuery(lessonId);
  const { data: homeworks } = useGetReactHomeworksByLessonIdQuery(lessonId);

  return (
    <DefaultTemplate>
      {isLoading ? (
        <Loader center={true} size="lg" speed="slow" />
      ) : (
        <Lesson
          lesson={lesson}
          addMaterial={addMaterials || []}
          homeworks={homeworks || []}
          hwPath="/vidminno/react-course/homeworks/"
        />
      )}
    </DefaultTemplate>
  );
};

export default ReactLesson;
