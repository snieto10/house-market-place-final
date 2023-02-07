import { Routes, Route, Link } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Profile from './pages/Profile';
import Listings from './pages/Listings';
import ThankYou from './pages/ThankYou';
import CreateAccount from './pages/CreateAccount';
import Category from './pages/Category';

function App() {
  return (
    <>
      <Menu />
      <div style={{ height: '10px' }}></div>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/category/:categoryName' element={<Category />} />
          <Route
            path='/category/:categoryName/:listingId'
            element={<Listings />}
          />
          <Route path='/thank-you' element={<ThankYou />} />
          <Route path='/create-account' element={<CreateAccount />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
