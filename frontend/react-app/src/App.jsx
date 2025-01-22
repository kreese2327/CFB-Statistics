import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlayerBiosPage from './pages/PlayerBiosPage'
import PlayerStatsPage from './pages/PlayerStatsPage';
import ComparisonToolPage from './pages/ComparisonToolPage';
import NotFoundPage from './pages/NotFoundPage';
import MainLayout from './layouts/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <MainLayout /> } >
      <Route index element={ <HomePage /> } />
      <Route path='/player-bios' element={ <PlayerBiosPage /> } />
      <Route path='/player-stats' element={ <PlayerStatsPage /> } />
      <Route path='/comparison-tool' element={ <ComparisonToolPage /> } />
      <Route path='*' element={ <NotFoundPage /> } />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;