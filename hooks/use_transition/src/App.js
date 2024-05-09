import { useState, useTransition } from "react";
import Cover from "./components/cover";
import Reviews from "./components/reviews";
import Writer from "./components/writer";
import { StyledButton } from "./components/styled-elements";

/*
Use Case:
  If you have a process that freezes the application because of some lengthy process when setting a state value. 
  You can define useTransition to allow you to modify that state value even while executing. Updates state without 
  blocking UI
General Pattern: 
	Similar to debounce, and useDeferredValue, but for setting some state
  define an array of two variables like with useState, one for a isPending value, one for the startTransition callback
Overview:
*/
function App() {
	const [section, setSection] = useState("Cover");

	const sectionHandler = (sec) => {
		setSection(sec);
	};
	return (
		<>
			<Button onClick={() => sectionHandler("Cover")}>Cover</Button>
			<Button onClick={() => sectionHandler("Reviews")}>Book Reviews</Button>
			<Button onClick={() => sectionHandler("Writer")}>Book's Writer</Button>

			{section === "Cover" ? (
				<Cover />
			) : section === "Reviews" ? (
				<Reviews />
			) : (
				<Writer />
			)}
		</>
	);
}

const Button = ({ onClick, ...props }) => {
	const [isPending, startTransition] = useTransition();

	return (
		<StyledButton
			onClick={() => {
				startTransition(() => {
					onClick();
				});
			}}
			{...props}
		/>
	);
};

export default App;
