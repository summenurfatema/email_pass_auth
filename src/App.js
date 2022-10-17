
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import RegisterReactBootstrap from "./components/RegisterReactBootstrap";
import Main from './components/layout/Main';
import BootstrapLogin from './components/BootstrapLogin/BootstrapLogin';

const router = createBrowserRouter([
  {
    path: '/', element: <Main></Main>, children: [
      {
        path: '/', element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/signup', element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/login', element: <BootstrapLogin></BootstrapLogin>
      }

    ]
  }
])
function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
