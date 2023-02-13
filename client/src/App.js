import { useState } from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import EntriesFeed from "./pages/EntriesFeed";
import Entries from './pages/Entries';
import Stats from './pages/Stats';
import SideNavBar from './components/SideNavBar';
import CalendarSmall from './components/CalendarSmall'
import ViewEntry from './pages/ViewEntry';
import EditEntry from './pages/EditEntry'
import EntryForm2 from './components/EntryForm2';
import UserFeed from './pages/UserFeed';
import HomePage from './pages/HomePage';

function App() {

  const [darkModeState, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkModeState);
    console.log(darkModeState);
  }

  const AppLayout = () => (
    <section data-theme={darkModeState ? "emerald" : "dark"}>
      <SideNavBar toggleDarkMode={toggleDarkMode} darkModeState={darkModeState}/>
    </section>
  );
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/entries" element={<EntriesFeed />} />
          <Route path="/entry/new" element={<EntryForm2 />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/entriesfeed" element={<Entries />} />
          <Route path="/calendar" element={<CalendarSmall/>} />
          <Route path="/viewentry/:id" element={<ViewEntry/>} />
          <Route path="/entry/:id" element={<EditEntry/>} />
          <Route path="/userfeed" element={<UserFeed />} />
        </Route>
        <Route path="/welcome" element={<HomePage />} />
      </>
      
    )
  );

      return (
       <div data-theme={darkModeState}>
          <RouterProvider router={router} />
        </div>
      );
    }

export default App;
