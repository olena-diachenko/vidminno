import { Modal, Button } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PopUp = props => {
  const modal = props.open;
  const navigate = useNavigate();

  const handleClose = () => !modal;

  const handleRedirect = () => {
    navigate(props.path);
    return !modal;
  };

  return (
    <>
      <Modal open={modal} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleRedirect} appearance="primary">
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

PopUp.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  open: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

PopUp.defaultProps = {
  path: '/',
  title: 'Oops!',
  open: false,
  children: 'Sorry, something went wrong',
};

export default PopUp;
