import { useState } from 'react';
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

import Dashboard from "./pages/Dashboard";
import EntriesFeed from "./pages/EntriesFeed";
import Entries from './pages/Entries';
import NewEntry from './pages/NewEntry';
import Stats from './pages/Stats';
import SideNavBar from './components/SideNavBar';
import CalendarSmall from './components/CalendarSmall'
import ViewEntry from './pages/ViewEntry';


function App() {

  const [darkModeState, setDarkMode] = useState("emerald");

  const toggleDarkMode = () => {
    !darkModeState ? setDarkMode("dark") : setDarkMode("emerald");
  }

  const AppLayout = () => (
    <>
      <SideNavBar onClick={toggleDarkMode}/>

    </>
  );
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Entries" element={<Entries />} />
        <Route path="/newEntry" element={<NewEntry />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/entriesfeed" element={<EntriesFeed />} />
        <Route path="/calendar" element={<CalendarSmall/>} />
        <Route path="/viewentry/:id" element={<ViewEntry/>} />
      </Route>
      
    )
  );

      return (
       <div data-theme={darkModeState}>
          <RouterProvider router={router} />
        </div>
      );
    }

export default App;
