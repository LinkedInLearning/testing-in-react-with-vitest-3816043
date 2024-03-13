import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>
        Sorry the page you are looking for cannot be found, head{' '}
        <Link to="/">Home</Link> and try again
      </h1>
    </div>
  );
}

export default NotFound;
