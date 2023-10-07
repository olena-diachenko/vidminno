import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { closePopUp } from '../../store/slices/popUp';

const PopUp = props => {
    const modal = useSelector(state => state.popUp.modal);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClose = () => {
        dispatch(closePopUp());
    };

    const handleRedirect = () => {
        dispatch(closePopUp());
        navigate(props.path);
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
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

PopUp.defaultProps = {
    path: '/',
    title: 'Oops!',
    children: 'Sorry, something went wrong',
};

export default PopUp;
