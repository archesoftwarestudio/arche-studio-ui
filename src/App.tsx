import { RatingInput } from "./components/data-input";

export default function App() {
  return (
    <main className="flex flex-col items-center justify-between">
      <RatingInput
        color="primary"
        half
        max={5}
        shape="star"
        size="md"
        value={2.5}
      />
    </main>
  );
}
