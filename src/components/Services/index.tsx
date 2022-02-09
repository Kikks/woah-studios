const Services = () => {
	return (
		<section className='services' id='services'>
			<div className='container'>
				<div className='services__container'>
					<span className='services__title' data-aos='fade-right'>
						Digital Services
					</span>
					<p
						className='services__paragraph'
						data-aos='fade-right'
						data-aos-delay={200}
					>
						Our digital design and development teams work together hand-in-hand
						to ensure we produce a seamless digital brand experience across all
						devices and touch-points. This collaborative approach combines
						strength and experience in all areas of the digital process,
						resulting in creatively unique and technically brilliant digital
						solutions.
					</p>

					<div className='services__list'>
						<span
							className='services__service'
							data-aos='flip-up'
							data-aos-offset={50}
							data-aos-delay={400}
						>
							Web design
						</span>
						<span
							className='services__service'
							data-aos='flip-up'
							data-aos-offset={50}
							data-aos-delay={500}
						>
							Website development
						</span>
						<span
							className='services__service'
							data-aos='flip-up'
							data-aos-offset={50}
							data-aos-delay={600}
						>
							User Experience design
						</span>
						<span
							className='services__service'
							data-aos='flip-up'
							data-aos-offset={50}
							data-aos-delay={700}
						>
							Data analytics & report
						</span>
						<span
							className='services__service'
							data-aos='flip-up'
							data-aos-offset={50}
							data-aos-delay={800}
						>
							Wordpress development
						</span>
						<span
							className='services__service'
							data-aos='flip-up'
							data-aos-offset={50}
							data-aos-delay={900}
						>
							Search optimisation (SEO)
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
