import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header bg-yellow-50 dark:bg-gray-800">
				<img src={logo} className="App-logo" alt="logo" />
				<p className=" text-gray-500">
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
