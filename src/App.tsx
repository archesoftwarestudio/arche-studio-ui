import { TextInput } from "./components/data-input";

export default function App() {
  return (
    <main className="flex flex-col items-center justify-between">
      <TextInput
        badgeText="Optional"
        bordered
        color="primary"
        placeholder="Type here"
        inputSize="md"
        withBadge
      />
    </main>
  );
}
