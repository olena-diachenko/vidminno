import DefaultTemplate from '../../templates/defaultPage';
import SignUp from '../auth/signUp';

const HomePage = () => {
    const storage = localStorage.getItem('user');

    return storage ? <DefaultTemplate></DefaultTemplate> : <SignUp />;
};

export default HomePage;
