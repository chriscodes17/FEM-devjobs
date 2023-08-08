export default function Role({ info }) {
  return (
    <div>
      <h3 className="header-text">What You Will Do</h3>
      <p className="body-text">{info.content}</p>
      <ol>
        {info.items.map((item, i) => (
          <li className="body-text" key={i}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
