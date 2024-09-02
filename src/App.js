import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store';
// import CakeContainer from './Components/cakeContainer';
// import IceCreamContainer from './Components/IceCreamContainer';
// import { UseDispatch } from './Components/UseDispatch';
// import NewCakeContainer from './Components/NewCakeContainer';
// import ItemContainer from './Components/ItemContainer';
import AsyncActions from './Components/AsyncActions';
import SagaAsyncActions from './Components/SagaAsyncActions';
import { Route, Routes } from 'react-router-dom';
import { ConfiguringRoutes } from './React-Router/ConfiguringRoutes';
import { About } from './React-Router/About';
import { Home } from './React-Router/Home';
import { Products } from './React-Router/Products';
import { Featured } from './React-Router/Featured';
import { New } from './React-Router/New';
import { Users } from './React-Router/Users';
import { UserDetails } from './React-Router/UserDetails';
import { Admin } from './React-Router/Admin';
import { UserFilter } from './React-Router/UserFilter';
import { ActiveFilter } from './React-Router/ActiveFilter';
import React from 'react';
import { Profile } from './React-Router/Profile';
import { AuthProvider } from './React-Router/AuthUser';
import { Login } from './React-Router/Login';
import { RequireAuth } from './React-Router/requireAuth';
const LazyLoad = React.lazy(() => import('./React-Router/About'))
function App() {
  console.log(store)
  return (
    <AuthProvider>
      <Provider store={store}>
        <div className="App">
          {/* <ItemContainer cake /> */}
          {/* <AsyncActions /> */}
          {/* <SagaAsyncActions /> */}
          {/* <IceCreamContainer />
        <CakeContainer />
        <UseDispatch />
        <NewCakeContainer />
        <ItemContainer /> */}

          <ConfiguringRoutes />

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<React.Suspense fallback='loading...'><LazyLoad /></React.Suspense>}></Route>
            <Route path='/products' element={<Products />}>
              <Route index element={<Featured />}></Route>
              <Route path='featured' element={<Featured />}></Route>
              <Route path='new' element={<New />}></Route>
            </Route>
            <Route path='/users' element={<Users />}>
              <Route path=':userId' element={<UserDetails />}></Route>
              <Route path='admin' element={<Admin />}>
                <Route path=':admin' element={<Admin />}></Route>
              </Route>
            </Route>
            <Route path='/userfilter' element={<UserFilter />}></Route>
            <Route path='activefilter' element={<ActiveFilter />}></Route>
            <Route path='profile' element={<RequireAuth> <Profile /></RequireAuth>}></Route>
            <Route path='login' element={<Login />}></Route>
          </Routes>
        </div>
      </Provider>
    </AuthProvider>
  );
}
export default App;
