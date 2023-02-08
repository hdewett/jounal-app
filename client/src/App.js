import { useState } from 'react';
import EntriesTable from './components/EntriesTable';
import TipTap from './components/Tiptap';
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
import EditEntry from './pages/EditEntry'

function App() {

  const [darkModeState, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkModeState);
    console.log(darkModeState);
  }

  const [entryFormData, setEntryFormData] = useState('');

  const AppLayout = () => (
    <section data-theme={darkModeState ? "emerald" : "dark"}>
      <SideNavBar toggleDarkMode={toggleDarkMode}/>
      <Outlet />
    </section>
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
        <Route path="/entry/:id" element={<EditEntry/>} />
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
