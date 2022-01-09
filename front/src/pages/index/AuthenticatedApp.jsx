import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import KudoProvider from '../../contexts/KudoContext';
import Home from '../home/Home';
import Profile from '../profile/Profile';

export default function AuthenticatedApp() {
  return (
    <KudoProvider>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </KudoProvider>
  );
}
