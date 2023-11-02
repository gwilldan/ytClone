import { useEffect } from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
	const [searchInput, setSearchInput] = useState("");
	const [search, setSearch] = useState("");

	useEffect(() => {
		console.log("SEARCH", search);
	}, [search]);

	return (
		<div className=" p-10 grid place-content-center h-screen w-screen">
			<div className=" w-[1000px] h-[800px] ">
				<div className=" flex justify-center items-center">
					<input
						type="text"
						className=" border border-black h-10 w-[400px] px-3"
						onChange={(e) => setSearchInput(e.target.value)}
					/>
					<button
						className=" bg-slate-800 text-white h-10 px-3"
						onClick={() => setSearch(searchInput)}>
						SEARCH
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
