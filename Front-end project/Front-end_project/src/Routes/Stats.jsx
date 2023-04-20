import { Form } from "react-router-dom";

export default function Stats() {
  const stats = {
    avatar: "https://placekitten.com/g/200/200",
  };

  return (
    <div id="stats">
      <div>
        <img
          key={stats.avatar}
          src={stats.avatar || null}
        />
      </div>
    </div>
  );
}