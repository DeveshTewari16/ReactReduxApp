import  Auth  from '../src/components/Auth';
import  Header  from '../src/components/Header';
import  Counter  from './components/Counter';
import  UserProfile  from './components/UserProfile';
import React from 'react';
import {useSelector} from 'react-redux';

function App() {
  const isAuthenticated =useSelector(state=>state.auth.isAuth)
  return (
    <React.Fragment>
      <Header />
      {!isAuthenticated && <Auth/>}
      {isAuthenticated && <UserProfile/>}
      <Counter />
    </React.Fragment>
  )
}

export default App;
