const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__container'>
					<h1
						className='heading--1 header__heading'
						data-aos='fade-up'
						data-aos-delay={700}
					>
						We design and build
					</h1>
					<h1
						className='heading--1 header__heading'
						data-aos='fade-up'
						data-aos-delay={900}
					>
						beautiful digital products
					</h1>
					<h1
						className='heading--1 header__heading'
						data-aos='fade-up'
						data-aos-delay={1100}
					>
						that make a difference
					</h1>
				</div>
			</div>
		</header>
	);
};

export default Header;
