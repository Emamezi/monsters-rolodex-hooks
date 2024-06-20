import "./search-box.styles.css";

const SearchBox = ({ onChangeHandler, placeHolder, className }) => {
  return (
    <div>
      <input
        className={` search-box ${className}`}
        type="text"
        placeholder={placeHolder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
