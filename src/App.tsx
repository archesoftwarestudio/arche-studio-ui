import { Toast } from "./components/feedback";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Toast color="primary" message="hello" />
    </main>
  );
}
