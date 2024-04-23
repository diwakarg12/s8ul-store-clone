/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Snapbacks from './components/Snapbacks';
import Tshirt from './components/Tshirt';
import LimitedEdition from './components/LimitedEdition';
import PageNotFound from './components/PageNotFound';
import Header from './components/reusableComponents/Header';
import Footer from './components/reusableComponents/Footer';
import Offer from './components/reusableComponents/Offer';
import Subscribe from './components/Home/Subscribe';
import SingleProduct from './components/reusableComponents/SingleProduct';
import Login from './components/reusableComponents/Login';
import Signup from './components/reusableComponents/Signup';
import ShippingPolicy from './components/reusableComponents/ShippingPolicy';

// Custom layout component for normal routes
const DefaultLayout = ({ children }) => {
  return (
    <>
      <Offer />
      <Header />
      {children}
      <Subscribe />
      <Footer />
    </>
  );
};

// Custom layout component for PageNotFound route
const NoLayout = ({ children }) => {
  return <>{children}</>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path='/about'
          element={
            <DefaultLayout>
              <About />
            </DefaultLayout>
          }
        />
        <Route
          path='/contact'
          element={
            <DefaultLayout>
              <Contact />
            </DefaultLayout>
          }
        />
        <Route
          path='/snapbacks'
          element={
            <DefaultLayout>
              <Snapbacks />
            </DefaultLayout>
          }
        />
        <Route
          path='/s8ul-exclusive-merch'
          element={
            <DefaultLayout>
              <Tshirt />
            </DefaultLayout>
          }
        />
        <Route
          path='/limited-edition'
          element={
            <DefaultLayout>
              <LimitedEdition />
            </DefaultLayout>
          }
        />
        <Route
          path='/product/:title'
          element={
            <DefaultLayout>
              <SingleProduct />
            </DefaultLayout>
          }
        />
        <Route
          path='/shipping-policy'
          element={
            <DefaultLayout>
              <ShippingPolicy />
            </DefaultLayout>
          }
        />
        <Route
          path='/login'
          element={
            <NoLayout>
              <Header />
              <Login />
            </NoLayout>
          }
        />
        <Route
          path='/register'
          element={
            <NoLayout>
              <Header />
              <Signup />
            </NoLayout>
          }
        />
        <Route
          path='*'
          element={
            <NoLayout>
              <PageNotFound />
            </NoLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

// export const Layout = ()=>{
//   <>
//   <Header />
//   <Outlet />
//   <Footer />
//   </>
// }

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '/',
//         element: <Home />
//       },
//       {
//         path: '/about',
//         element: <About />
//       },
//       {
//         path: '/contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])

// <RouterProvider router={router} />

export default App;
