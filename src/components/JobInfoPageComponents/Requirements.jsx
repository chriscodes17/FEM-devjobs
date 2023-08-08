export default function Requirements({ info }) {
  return (
    <div>
      <h3 className="header-text">Requirements </h3>
      <p className="body-text">{info.content}</p>
      <ul>
        {info.items.map((item, i) => (
          <li className="body-text" key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
