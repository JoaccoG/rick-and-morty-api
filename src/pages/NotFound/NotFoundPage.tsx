import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFound = () => {
  return (
    <>
      <section className="error__container">
        <div className="error-container__img-container">
          <span>44</span>
        </div>
        <p role={'paragraph'}>
          The page you are trying to reach has been moved to another universe.
        </p>
        <Link className="button" to={'/'}>
          Return to real dimension
        </Link>
      </section>
    </>
  );
};

export default NotFound;
