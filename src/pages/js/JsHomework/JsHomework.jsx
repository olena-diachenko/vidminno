import { useParams } from 'react-router-dom';
import { Loader } from 'rsuite';
import React from 'react';
import { useSelector } from 'react-redux';
import DefaultTemplate from '../../../templates/defaultPage';
import {
    useGetJsHomeworksByIdQuery,
    useGetUserByNameQuery,
    useGetJsHomeworksByUserIdQuery,
    useSaveJsHomeworkByUserIdMutation,
} from '../../../store/api';
import Homework from '../../../components/Homework';

const JsHomework = () => {
    const index = useParams().homeworkId;
    const user = useSelector(state => state.auth.user);
    const { data: homework, isLoading: isLoad } =
        useGetJsHomeworksByIdQuery(index);
    const { data: student, isLoading } = useGetUserByNameQuery(user);
    const studentId = !isLoading && student[0].id;
    const { data: userHomeworks, isLoading: isLoadHw } =
        useGetJsHomeworksByUserIdQuery(studentId);
    const [saveHomework] = useSaveJsHomeworkByUserIdMutation();

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
                    userHomeworks={!isLoadHw && userHomeworks}
                    path="/js-course/lessons/"
                />
            )}
        </DefaultTemplate>
    );
};

export default JsHomework;
