const Navbar = () => {
	return (
		<nav className='nav'>
			<div className='container'>
				<div className='nav__container'>
					<span className='logo' data-aos='fade-right' data-aos-delay={500}>
						woah studios.
					</span>

					<div className='nav__links'>
						<a
							href='#pillars'
							className='nav__link'
							data-aos='fade-left'
							data-aos-delay={700}
						>
							Our pillars
						</a>
						<a
							href='#services'
							className='nav__link'
							data-aos='fade-left'
							data-aos-delay={900}
						>
							Digital services
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
