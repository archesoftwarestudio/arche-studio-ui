import { Button } from "./components/actions";

export default function App() {
  const actionButton: Button = new Button({
    children: "Buy Now",
    mode: "primary",
    size: "large",
    onClick: () => {
      alert("You bought the shoes!");
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {actionButton.render()}
    </main>
  );
}
