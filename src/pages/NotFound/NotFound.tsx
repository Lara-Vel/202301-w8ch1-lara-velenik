import { Link } from 'react-router-dom';
import { NotFoundStyled } from './NotFoundStyled';

const NotFound = () => {
  return (
    <NotFoundStyled>
      <div className="image">
        <img src="./assets/Darth-vader.png" alt="Mini Darth-Vader" />
      </div>
      <div className="info">
        <h1>404 ERROR</h1>
        <p>You underestimate the power of the dark side</p>
        <Link data-testid="link" to={'/'}>
          GO HOME
        </Link>{' '}
      </div>
    </NotFoundStyled>
  );
};

export default NotFound;
