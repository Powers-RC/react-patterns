import { useState, useDeferredValue } from "react";
import { HeavyComponent } from "./components/heavy-component";

/*
Use Case: 
	When you have some side effect that is time consuming and causes delays to user
General Pattern: 
	Similar to debounce.
	Deplays reading of some state value
	define useDeferredValue hook and pass state value, then use returned value as value in logic
Overview:
	What this does is lower the rendering priority for the element consuming it. So if other element interactions 
	determine the state value that is later used. That value will not be updated until the other higher level interactions
	have finished. 
*/
function App() {
	const [keyword, setKeyword] = useState("");
	const deferredKeyword = useDeferredValue(keyword);
	return (
		<>
			<input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
			<HeavyComponent keyword={deferredKeyword} />
		</>
	);
}

export default App;
