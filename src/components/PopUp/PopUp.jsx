import { Modal, Button } from 'rsuite';
import PropTypes from 'prop-types';

const PopUp = ({ isOpen, onClose, onClick, children }) => (
  <>
    <Modal open={isOpen} onClose={onClose}>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button onClick={onClick} appearance="primary">
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);

PopUp.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

PopUp.defaultProps = {
  isOpen: false,
  children: 'Sorry, something went wrong',
};

export default PopUp;
