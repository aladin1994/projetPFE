import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Naviagtion from './Components/Naviagtion';
import Footer from './Components/Footer';
import Menu from './Components/Menu';
import './Components/Style/Globale.css'
import HomeApp from './pages/HomeApp';
function App() {
  const Layout = () => {
    return (
      <div className="mainApp">
        <Naviagtion />
        <div className="containerApp">
          <div className="mainContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />

      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomeApp />
        }
      ],
    },
    {
      path: '/login',
      element: <Login />
    }
  ])
  return <RouterProvider router={router} />;
}

export default App;
