import React from 'react';
import homeVideo from '../../videos/2022_AnnualReport_header.mp4';
import './Pages.css';

export default function Home()
{
	return (
		<div className='mainSection' data-aos='fade' data-aos-duration='500' data-aos-delay='150' data-aos-offset="-5000" data-aos-once="true">
			<div className='row h-100'>
				<div className='col-md-12 text-center my-auto'>
					<video width="100%" height="100%" playsInline autoPlay muted>
						<source src={homeVideo} type="video/mp4" />
					</video>
				</div>
			</div>
		</div>

	);
}