import EntriesTable from './components/EntriesTable';
import './App.css';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  Outlet,
  ReactDOM,
  createRoutesFromElements,
  BrowserRouter

} from "react-router-dom";

import SideNav from "./components/SideNav";
import Dashboard from "./pages/Dashboard";
import NewTask from "./pages/NewTask";
import Entries from './pages/Entries';
import NewEntry from './pages/NewEntry';
import Stats from './pages/Stats';

function App() {

  const AppLayout = () => (
    <>
      <SideNav />
      <Outlet />
    </>
  );
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Entries" element={<Entries />} />
        <Route path="/newEntry" element={<NewEntry />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/newTask" element={<NewTask />} />
      </Route>
      
    )
  );

      return (
       <>
          <RouterProvider router={router} />
      </>
      );
    }

export default App;
