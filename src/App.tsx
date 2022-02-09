import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

// Components
import Belief from "./components/Belief";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Paper from "./components/Paper";
import Pillars from "./components/Pillars";
import Services from "./components/Services";
import Vision from "./components/Vision";

// Styles
import "./styles/index.scss";

function App() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			offset: 200
		});
	}, []);

	return (
		<main className='main'>
			<div
				className='bg'
				data-aos='zoom-out'
				data-aos-delay={100}
				data-aos-duration={3000}
			/>
			<Navbar />
			<Header />
			<Paper>
				<Vision />
				<Belief />
				<Pillars />
				<Services />
			</Paper>
			<Footer />
		</main>
	);
}

export default App;
