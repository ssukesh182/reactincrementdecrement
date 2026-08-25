import { useState } from "react";
import Display from "./components/Display";
import ButtonSection from "./components/ButtonSection";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Display count={count} />

      <ButtonSection
        increment={() => setCount(count + 1)}
        decrement={() => setCount(count - 1)}
      />
    </div>
  );
}
