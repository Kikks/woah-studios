const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__container'>
					<figure className='footer__logo-container'>
						<svg
							width='159'
							height='350'
							viewBox='0 0 159 300'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								className='float'
								d='M0.768 0.799995L10.464 68H17.664L25.44 16.64H25.824L33.6 68H40.8L50.496 0.799995H44.736L36.768 59.264H36.288L27.744 0.799995H23.52L15.072 59.264H14.592L6.528 0.799995H0.768Z'
								fill='white'
							/>
							<path
								className='float'
								d='M66.36 54.832V89.872C66.36 92.944 66.808 95.568 67.704 97.744C68.6 99.92 69.784 101.68 71.256 103.024C72.728 104.368 74.456 105.36 76.44 106C78.424 106.64 80.536 106.96 82.776 106.96C84.952 106.96 87.032 106.64 89.016 106C91.064 105.36 92.824 104.368 94.296 103.024C95.768 101.68 96.952 99.92 97.848 97.744C98.744 95.568 99.192 92.944 99.192 89.872V54.832C99.192 51.824 98.744 49.232 97.848 47.056C96.952 44.88 95.768 43.12 94.296 41.776C92.824 40.432 91.064 39.44 89.016 38.8C87.032 38.16 84.952 37.84 82.776 37.84C80.536 37.84 78.424 38.16 76.44 38.8C74.456 39.376 72.728 40.368 71.256 41.776C69.784 43.12 68.6 44.88 67.704 47.056C66.808 49.168 66.36 51.76 66.36 54.832ZM72.12 54.544C72.12 52.368 72.408 50.544 72.984 49.072C73.624 47.536 74.424 46.32 75.384 45.424C76.408 44.528 77.56 43.888 78.84 43.504C80.184 43.056 81.496 42.832 82.776 42.832C84.12 42.832 85.432 43.056 86.712 43.504C87.992 43.888 89.112 44.528 90.072 45.424C91.096 46.32 91.896 47.536 92.472 49.072C93.112 50.544 93.432 52.368 93.432 54.544V90.256C93.432 92.432 93.112 94.288 92.472 95.824C91.896 97.296 91.096 98.48 90.072 99.376C89.112 100.272 87.992 100.912 86.712 101.296C85.432 101.68 84.12 101.872 82.776 101.872C81.496 101.872 80.184 101.68 78.84 101.296C77.56 100.912 76.408 100.272 75.384 99.376C74.424 98.48 73.624 97.296 72.984 95.824C72.408 94.288 72.12 92.432 72.12 90.256V54.544Z'
								fill='white'
							/>
							<path
								className='float'
								d='M81.112 131.8L67.768 199H73.528L85.432 140.152H85.912L97.72 199H103.48L90.328 131.8H81.112ZM94.456 176.632V171.64H76.504V176.632H94.456Z'
								fill='white'
							/>
							<path
								className='float'
								d='M149.128 199.8V230.04H130.504V199.8H124.744V267H130.504V235.032H149.128V267H154.888V199.8H149.128Z'
								fill='white'
							/>
						</svg>
					</figure>

					<div className='footer__content'>
						<h4
							className='heading--4 footer__title'
							data-aos='fade-left'
							data-aos-offset={0}
						>
							hello@woahstudios.net
						</h4>
						<div
							className='footer__paragraph'
							data-aos='fade-left'
							data-aos-offset={0}
							data-aos-delay={200}
						>
							We&apos;re designers who code. We take on projects of all sizes,
							from web design and build, to product, branding and system design.
							We also travel to do workshops and talk at design events,
							internationally. We&apos;re excited to hear about your project.
						</div>

						<div className='footer__address-container'>
							<p
								className='footer__address'
								data-aos='fade-left'
								data-aos-offset={-100}
								data-aos-delay={400}
							>
								WOAH STUDIOS is based in Barcelona & La Paz, and we work
								worldwide.
							</p>
							<span
								className='footer__copyright'
								data-aos='fade-left'
								data-aos-offset={-100}
								data-aos-delay={1000}
							>
								woahstudios. 2021
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
