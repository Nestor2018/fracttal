import "./input.scss";

const Input = ({ value, setValue, placeholder, type }) => {
  return (
    <input
      className="input-container"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={setValue}
    />
  );
};

export default Input;
