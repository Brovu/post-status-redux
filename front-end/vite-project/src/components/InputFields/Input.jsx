import "../Post/CreatePost.css";
const Input = (props) => {
  // eslint-disable-next-line react/prop-types
  const { inputType, className, label, data, setData } = props;
  return (
    <>
      <label>{label}</label>
      {inputType === "textarea" ? (
        <textarea
          type="text"
          className={className}
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        ></textarea>
      ) : (
        <input
          type="text"
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </>
  );
};

export default Input;
