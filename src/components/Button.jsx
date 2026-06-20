export default function Button({ children, className, onClickHandler }) {
  return (
    <button
      type="button"
      className={className ? className : ""}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
