import { Progress } from "./components/feedback";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Progress color="primary" size="md" value={70} />
    </main>
  );
}
