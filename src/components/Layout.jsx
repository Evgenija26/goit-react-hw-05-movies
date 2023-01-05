import { Box } from './Box';
import { AppBar } from './AppBar';

export const Layout = () => {
  return (
    <Box display="grid" gridTemplateColumns="200px lfr">
      <AppBar />
      <div>Content</div>
    </Box>
  );
};
