import Header from "./Header";
import Counter from "./Counter";

export default function Display({ count }) {
  return (
    <div className="display">
      <Header />
      <Counter count={count} />
    </div>
  );
}
