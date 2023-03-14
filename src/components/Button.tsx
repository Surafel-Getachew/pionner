interface ButtonProps {
  placeholder: string;
  disabled?: boolean;
  onClick: () => void;
}
const Button = ({ placeholder, onClick, disabled }: ButtonProps) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {placeholder}
    </button>
  );
};

export default Button;
