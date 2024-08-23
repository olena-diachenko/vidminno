import { useNavigate } from 'react-router-dom';

const useRedirectHandler = () => {
  const navigate = useNavigate();

  return value => () => {
    navigate(value);
  };
};

export default useRedirectHandler;
