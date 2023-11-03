import { useParams } from 'react-router-dom';
import { Loader } from 'rsuite';
import React from 'react';
import DefaultTemplate from '../../../templates/defaultPage';
import Lesson from '../../../components/Lesson';
import {
    useGetJsLessonByIdQuery,
    useGetAddMaterialByJsLessonIdQuery,
    useGetJsHomeworksByLessonIdQuery,
} from '../../../store/api/jsApi';

const JsLesson = () => {
    const index = useParams().lessonId;
    const { data: lesson, isLoading } = useGetJsLessonByIdQuery(index);
    const { data: addMaterials, isLoad } =
        useGetAddMaterialByJsLessonIdQuery(index);
    const { data: homeworks, isLoadHomeworks } =
        useGetJsHomeworksByLessonIdQuery(index);

    return (
        <DefaultTemplate>
            {isLoading ? (
                <Loader center={true} size="lg" speed="slow" />
            ) : (
                <Lesson
                    lesson={lesson}
                    addMaterial={!isLoad && addMaterials}
                    homeworks={!isLoadHomeworks && homeworks}
                />
            )}
        </DefaultTemplate>
    );
};

export default JsLesson;
