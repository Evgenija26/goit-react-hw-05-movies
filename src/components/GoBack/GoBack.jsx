import { HiArrowLeftOnRectangle } from 'react-icons/hi';

export const GoBackLink = ({ to, children }) => {
  return (
    <link to={to}>
      <HiArrowLeftOnRectangle size="24" />
      {children}
    </link>
  );
};
