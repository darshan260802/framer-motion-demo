import { useEffect, useState } from "react";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";

function App() {
	const [show, setShow] = useState(true);



	return (
    <>
		<div>
			<AnimatePresence>
				{show && (
					<motion.h1
						animate={{ x: 0 }}
						exit={{ x: 100 }}
						initial={{ x: -100 }}
						transition={{ duration: 2 }}>
						Hello
					</motion.h1>
				)}
			</AnimatePresence>
		</div>
    <button onClick={() => setShow(!show)} > Click</button>
    </>
	);
}

export default App;

