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
    const index = useParams().lessonId;
    const { data: lesson, isLoading } = useGetReactLessonByIdQuery(index);
    const { data: addMaterials, isLoad } =
        useGetAddMaterialByReactLessonIdQuery(index);
    const { data: homeworks, isLoadHomeworks } =
        useGetReactHomeworksByLessonIdQuery(index);

    return (
        <DefaultTemplate>
            {isLoading ? (
                <Loader center={true} size="lg" speed="slow" />
            ) : (
                <Lesson
                    lesson={lesson}
                    addMaterial={!isLoad && addMaterials}
                    homeworks={!isLoadHomeworks && homeworks}
                    hwPath="/vidminno/react-course/homeworks/"
                />
            )}
        </DefaultTemplate>
    );
};

export default ReactLesson;
