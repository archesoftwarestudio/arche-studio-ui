import { Button } from "./components/actions";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button
        mode="primary"
        onClick={() => {
          alert("ArcheUI is a design system!");
        }}
      >
        Primary
      </Button>
    </main>
  );
}
