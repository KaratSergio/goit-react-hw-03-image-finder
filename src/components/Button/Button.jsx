import { LoadBtn } from './Button.module';

export const Button = ({ onClick }) => {
  return (
    <LoadBtn type="button" onClick={onClick}>
      Load More
    </LoadBtn>
  );
};

export default Button;
