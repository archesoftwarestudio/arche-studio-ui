import { Card } from "./components/data-display";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card
        title="Nikes on my feet"
        body="Make my style feel complete"
        imageUrl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        imageAlt="Shoes"
        primaryAction={{
          text: "Buy Now",
          onClick: () => {
            alert("You bought the shoes!");
          },
        }}
      />
    </main>
  );
}
