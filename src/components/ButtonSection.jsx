import Button from "./Button";

export default function ButtonSection({ increment, decrement }) {
  return (
    <div className="button-section">
      <Button text="Increment" onClick={increment} />
      <Button text="Decrement" onClick={decrement} />
    </div>
  );
}
