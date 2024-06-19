import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
]);

root.render(
	<React.StrictMode>
		<div className="md:grid md:grid-cols-3 text-sky-100 font-body min-h-screen">
			<header className="flex flex-col justify-between bg-stone-950 text-gray-200 shadow-sm shadow-slate-600 px-16 py-8">
				<Navbar />

				<div className="mt-8">
					<h1 className="text-5xl font-black tracking-widest text-yellow-300 uppercase">
						Star Wars&trade;
					</h1>
					<h2 className="text-xl">Character Game</h2>
				</div>
			</header>

			<main className="flex flex-col gap-4 justify-evenly col-span-2 px-16 py-8">
				<RouterProvider router={router} />
			</main>
		</div>
	</React.StrictMode>
);
