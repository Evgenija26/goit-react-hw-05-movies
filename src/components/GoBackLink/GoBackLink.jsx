import { BsFillReplyAllFill } from 'react-icons/bs';

export const GoBackLink = ({ to, children }) => {
  return (
    <link to={to}>
      <BsFillReplyAllFill size="24" />
      {children}
    </link>
  );
};
