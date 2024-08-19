import { Checkbox } from "./components/data-input";

export default function App() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Checkbox
        checkboxSize="md"
        checked
        color="primary"
        containerWidth="w-full"
        label="Remember me"
      />
      <Checkbox
        checkboxSize="md"
        checked
        color="primary"
        containerWidth="w-full"
        label="Remember me"
      />
      <Checkbox
        checkboxSize="md"
        checked
        color="primary"
        containerWidth="w-full"
        label="Remember me"
      />
    </main>
  );
}
