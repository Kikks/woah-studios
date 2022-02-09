const pillars = [
	{
		title: "Strategy, Thinking, Management",
		body: "We guide and collaborate with clients to help them achieve their objectives, starting from the strategy and the management of the project in question."
	},
	{
		title: "Digital Design",
		body: "Comprehensive, functional, and appealing design that follows the strategy co-defined with our clients."
	},
	{
		title: "Positioning",
		body: "Definition of the SEO strategy, management of SEM campaigns, and improvement of conversion rates."
	}
];

const Pillars = () => {
	return (
		<section className='pillars' id='pillars'>
			<div className='container'>
				<div className='pillars__container'>
					<figure className='pillars__image-container' data-aos='flip-down'>
						<img src='/pillars-image.jpeg' alt='' className='pillars__image' />
					</figure>

					<div className='pillars__content'>
						<h3 className='heading--3' data-aos='fade-left'>
							WOAH STUDIOS&apos; PILLARS
						</h3>

						{pillars.map(({ title, body }, index) => (
							<div className='pillars__pillar' key={title}>
								<h4
									className='heading--4 pillars__pillar__heading'
									data-aos='fade-left'
									data-aos-delay={index * 200 + 200}
									data-aos-offset={0}
								>
									{title}
								</h4>
								<p
									className='pillars__pillar__paragraph'
									data-aos='fade-left'
									data-aos-delay={index * 300 + 200}
									data-aos-offset={0}
								>
									{body}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pillars;
