import { Button } from "./components/actions";

export default function App() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Button
				mode="primary"
				block
				onClick={() => {
					alert("chupala");
				}}
			>
				Primary
			</Button>
		</main>
	);
}
