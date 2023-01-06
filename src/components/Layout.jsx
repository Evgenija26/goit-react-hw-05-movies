import { Outlet } from 'react-router-dom';
import { Box } from './Box';
import { AppBar } from './AppBar';
import { ToastContainer } from 'react-toastify';

export const Layout = () => {
  return (
    <Box display="grid" gridTemplateColumns="200px lfr">
      <AppBar />
      <div>
        <Outlet />
      </div>
      <ToastContainer position="top-center" />
    </Box>
  );
};
