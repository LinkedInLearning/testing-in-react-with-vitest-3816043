import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';

function NotFound() {
  return (
    <>
      <NavBar />
      <div className="container p-5 mt-4 justify-content-center text-center flex">
        <h1>
          Sorry the page you are looking for cannot be found, head{' '}
          <Link to="/">Home</Link> and try again
        </h1>
      </div>
    </>
  );
}

export default NotFound;
