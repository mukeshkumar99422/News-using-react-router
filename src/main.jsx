import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { BusinessBoard } from './components/NewsBoards/BusinessBoard.jsx';
import { EntertainmentBoard } from './components/NewsBoards/EntertainmentBoard.jsx';
import { GeneralBoard } from './components/NewsBoards/GeneralBoard.jsx';
import { HealthBoard } from './components/NewsBoards/HealthBoard.jsx';
import { SportsBoard } from './components/NewsBoards/SportsBoard.jsx';
import { TechnologyBoard } from './components/NewsBoards/TechnologyBoard.jsx';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<GeneralBoard/>}/>
      <Route path='business' element={<BusinessBoard/>}/>
      <Route path='health' element={<HealthBoard/>}/>
      <Route path='technology' element={<TechnologyBoard/>}/>
      <Route path='sports' element={<SportsBoard/>}/>
      <Route path='entertainment' element={<EntertainmentBoard/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)