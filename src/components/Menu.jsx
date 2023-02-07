import { Link } from 'react-router-dom';

function Menu() {
  return (
    <>
      <nav className='container menu'>
        <div className='menu_title'>
          <Link to='/'>
            <h3 className='menu_title'>HOUSE MARKET PLACE</h3>
          </Link>
        </div>
        <div className='menu_login'>
          <Link to='Login'>
            <button className='btn btn-orange'>Log In</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Menu;
