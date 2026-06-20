export default function Button({ children, styleProps, onClickHandler }) {
  return (
    <button
      type="button"
      className={styleProps ? styleProps : ""}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
