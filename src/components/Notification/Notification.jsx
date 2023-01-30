import css from './Notification.module.css';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return <p className={css.message}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
