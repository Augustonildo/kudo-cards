import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../login/Login';

export default function UnautheticatedApp() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Navigate to="login" replace />} />
    </Routes>
  );
}
