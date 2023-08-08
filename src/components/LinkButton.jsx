export default function LinkButton({ link, text, bgColor, color }) {
  const styles = {
    background: bgColor,
    color: color,
  };
  return (
    <a href={link}>
      <button style={styles} className="main-btn">{text}</button>
    </a>
  );
}
