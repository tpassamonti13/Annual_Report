import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutubeSquare} from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare} from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from "react-router-dom";
import './Pages.css';


export default function AdditionalInformation()
{
	const navigate = useNavigate();

	return (
			<Container>
				<div className='contentArea'>
					<Row className='headerRow'>
						<Col data-aos='fade-left' data-aos-duration='500' data-aos-once="true">
							<h1 className='fw-bold'>Additional Information</h1>
							<hr className='mobileHeader' />
						</Col>
					</Row>
					<br/>
					<Row>
						<Col lg={6} data-aos='fade-up' data-aos-duration='500' data-aos-delay='150' data-aos-once="true" className='leftColumn additionalInformationColumn'>
							<ul data-aos='fade' data-aos-duration='500' data-aos-delay='150' data-aos-once="true">
								<li><a href="https://d18rn0p25nwr6d.cloudfront.net/CIK-0000016058/86357b3d-af41-4344-acfc-2d011391bdae.pdf" target="_blank" rel="noopener noreferrer">FY 2022 10-K</a></li>
								<li><a href="#" target="_blank" rel="noopener noreferrer">Proxy Statement</a></li>
								<li><a href="https://s21.q4cdn.com/708811725/files/doc_financials/2022/q4/CACI-International-Q4-FY22-Earnings-Release-(8.10.22)-FINAL.pdf" target="_blank" rel="noopener noreferrer">FY 2022 Q4 and Full Year Earnings Release</a></li>
							</ul>
						</Col>
						<Col lg={6}>
							<div className='highlightsColumn'>
								<Row data-aos='fade' data-aos-duration='500' data-aos-delay='150' data-aos-once="true" data-aos-offset="-5000">
									<Col>
										<p>CACI’s approximately 22,000 talented employees are vigilant in providing the unique expertise and distinctive technology that address our customers’ greatest enterprise and mission challenges. Our culture of good character, innovation, and excellence drives our success and earns us recognition as a Fortune World's Most Admired Company. As a member of the Fortune 1000 Largest Companies, the Russell 1000 Index, and the S&P MidCap 400 Index, we consistently deliver strong shareholder value. Visit us at <a href="https://www.caci.com" target="_blank" rel="noopener noreferrer">www.caci.com</a>.</p>
									</Col>
								</Row>
								<br/>
								<Row data-aos='fade' data-aos-duration='500' data-aos-delay='150' data-aos-once="true" data-aos-offset="-5000">
									<Col lg={6}>
										<p><strong>Corporate Headquarters</strong>
										<br/>
										CACI International Inc
										<br/>
										12021 Sunset Hills Road
										<br/>
										Reston, VA 20190
										<br/>
										(703) 841-7800
										<br/>
										<a href="https://www.caci.com" target="_blank" rel="noopener noreferrer">www.caci.com</a>
										</p>
									</Col>
									<Col lg={6}>
										<p><strong>European Headquarters</strong>
										<br/>
										CACI House – Kensington Village
										<br/>
										Avonmore Road
										<br/>
										London, England W14 8TS
										<br/>
										(01144207) 602-6000
										<br/>
										<a href="https://www.caci.co.uk/" target="_blank" rel="noopener noreferrer">www.caci.co.uk</a>
										</p>
									</Col>
								</Row>
								<br/>
								<Row className='text-center' data-aos='fade' data-aos-duration='500' data-aos-delay='150' data-aos-once="true" data-aos-offset="-5000">
									<Col>
										<p><strong>Find career opportunities at:</strong><br/>
										<a href="https://careers.caci.com" target="_blank" rel="noopener noreferrer">careers.caci.com</a></p>
									</Col>
								</Row>
								<br/>
								<Row className='text-center' data-aos='fade' data-aos-duration='500' data-aos-delay='150' data-aos-once="true" data-aos-offset="-5000"> 
									<Col>
										<p><strong>Connect with us through social media:</strong><br/>
										<a className="socialLink" href="https://www.facebook.com/CACIIntl/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} size="2x" /></a>&nbsp;
										<a className="socialLink" href="https://twitter.com/CACIIntl" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitterSquare} size="2x" /></a>&nbsp;
										<a className="socialLink" href="https://www.linkedin.com/company/caci-international-inc/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>&nbsp;
										<a className="socialLink" href="https://www.youtube.com/user/CACIInternational" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutubeSquare} size="2x" /></a>&nbsp;
										<a className="socialLink" href="https://www.instagram.com/caciintl/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagramSquare}size="2x" /></a></p>
									</Col>
								</Row>
								<br/>
								<Row>
									<Col>
										<p className="notes">CACI and CACI Ever Vigilant are registered trademarks of CACI. ©2022 CACI International Inc. All rights reserved.</p>
									</Col>
								</Row>
							</div>
						</Col>
					</Row>
					<br/>
				</div>
				<br/>
				<div className='chapterArrows text-center'>
					<Row>
						<Col xs={{ span: 2, offset: 4}} className='chapterArrow' onClick={() => navigate('/boardOfDirectors')}>
							<FontAwesomeIcon icon={faChevronLeft} />
								<br/>
								<span>Previous</span>
						</Col>
						<Col xs={2} className='chapterArrow'>
						</Col>
					</Row>
				</div>
				<br/>
			</Container>
	);
}