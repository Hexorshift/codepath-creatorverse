import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <Link to="/">
        <h1>💫 Creatorverse</h1>
      </Link>
      {children}
    </div>
  );
};

export default Layout;
