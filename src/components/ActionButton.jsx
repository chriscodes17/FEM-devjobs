export default function ActionButton({ actionHandler, bgColor, text, name = "" }) {
  const styles = {
    backgroundColor: bgColor,
    color: "white",
  };

  return (
    <button style={styles} className={`main-btn ${name}`} onClick={actionHandler}>
      {text}
    </button>
  );
}
