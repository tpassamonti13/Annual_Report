import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import nationalSecurityImage from '../../images/PositioningForFuture.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import './Pages.css';

export default function NationalSecurity()
{
	const navigate = useNavigate();

	return (
		<Container>
			<div className='contentArea'>
				<Row className='headerRow'>
					<Col data-aos='fade-left' data-aos-duration='500' data-aos-once="true">
						<h1 className='fw-bold'>Positioning for the Future</h1>
						<hr className='mobileHeader' />
					</Col>
				</Row>
				<br/>
				<Row>
					<Col lg={7} data-aos='fade-up' data-aos-duration='500' data-aos-delay='150' data-aos-once="true">
						<p>CACI is poised to continue investing ahead of need in the coming fiscal year. Externally, we believe conditions are very favorable for growth and opportunity. Demand is strong, and we continue to see bipartisan support for national security priorities, including key addressable areas such as digital solutions, enterprise IT, and C4ISR, cyber, and space. We are confident in our ability to drive long-term growth, margin expansion, robust cash flow, and additional shareholder value.</p>

						<p>CACI continues to lead in network modernization and CSfC solutions that improve cyber defense, support remote work, and consolidate legacy networks for efficiency. Modernization efforts like joint all-domain command and control (JADC2) won’t be possible without multi-domain, integrated data and communications infrastructure. Our differentiated capabilities and past performance address such challenges and our continuous investment in new technologies enable the federal government to modernize critical network infrastructure and architectures.</p>

						<p>In C4ISR and cyber, the electromagnetic spectrum is critical for intelligence collection and modern warfare and remains a key investment area as it has for more than a decade. SIGINT, EW, C-UAS, and secure communications remain critical national security priorities. Given the global threat environment, these technologies are crucial for detecting signals used by near-peer adversaries, determining location, and protecting our own use of the electromagnetic spectrum.</p>

						<p>CACI continues to lean forward in the space domain to position ourselves in areas where we see opportunities for long-term, technology-driven growth. We’re very excited about our continued expansion in photonics and optical communications.</p>

						<p>We are also confident in our exceptional leaders and employees, who continue to receive recognition for their ability to deliver unique, differentiated solutions to our customers. </p>

						<p>Lt. Gen. Michael Nagata, U.S. Army (Ret.), Corporate Strategic Advisor and Senior Vice President, <a href="https://investor.caci.com/news/news-details/2021/CACIs-Lt.-Gen.-Michael-Nagata-U.S.-Army-Ret.-Receives-Prestigious-NDIA-DeProspero-Lifetime-Achievement-Award/default.aspx" target="_blank" rel="noopener noreferrer">received the National Defense Industrial Association's (NDIA) Special Operations/Low-Intensity Conflict (SO/LIC) DeProspero Lifetime Achievement Award</a>. Mr. Nagata leads corporate efforts to advance CACI’s presence in national security, support its corporate strategy, and develop key customer relationships. This award is presented to those with sustained, distinguished service, who have specifically made contributions to the areas of special operations, low-intensity conflict, or irregular warfare. Mr. Nagata’s more than three decades in top posts with the U.S. Special Operations Forces, the intelligence and counterterrorism communities, and diplomatic efforts abroad deliver increased value to CACI’s ability to support our customers’ missions.</p>
						
						<p>DeEtte Gray, President of Business and Information Technology Solutions, was the recipient of multiple prestigious awards for her service to the broader industry. Ms. Gray was recognized with <a href="https://investor.caci.com/news/news-details/2022/CACI-Sector-President-DeEtte-Gray-Receives-AFCEA-International-Womens-Appreciation-Award/default.aspx" target="_blank" rel="noopener noreferrer">the AFCEA International Women’s Appreciation Award</a>, which honors AFCEA members who go above and beyond to further the careers of women in science, technology, engineering, and math (STEM). Ms. Gray was also <a href="https://investor.caci.com/news/news-details/2022/FCW-Names-CACIs-DeEtte-Gray-a-Federal-100-Winner/default.aspx" target="_blank" rel="noopener noreferrer">named an FCW Federal 100 Award winner</a> for her role in leading major government transformation efforts, including digital transformation and modernization processes. AFCEA is a nonprofit association serving the military, government, industry, and academia for collaboration and development in the communications, IT, intelligence, and security fields.</p>

						<p>Command Sgt. Maj. William “Bill” Thetford, U.S. Army (Ret.), Special Operations Forces project manager, has been <a href="https://investor.caci.com/news/news-details/2022/CACI-Employee-Receives-U.S.-Army-Distinguished-Service-Cross/default.aspx" target="_blank" rel="noopener noreferrer">awarded the U.S. Army’s Distinguished Service Cross</a>, the second highest military decoration, for his heroism in combat with an armed enemy force during the 1993 Battle of Mogadishu. CACI congratulates Mr. Thetford for receiving this prestigious recognition. Mr. Thetford joins a unique group of CACI professionals who have received prestigious honors in the past. In 2018, two CACI employees were awarded the Office of the Secretary of the Defense Medal for Valor, the highest civilian honor given by the Department of Defense, for their heroism and sacrifice, with voluntary risk to their safety in the face of danger. </p>

						<p>These recognitions demonstrate the character of those who work for CACI, not only in their professional lives but also in their personal lives. CACI is proud of all of our employees and their dedication to our customers and our national security mission.</p>

						<p>As we look to the future, we are confident CACI’s differentiated business portfolio of expertise and technology will generate value for customers and shareholders.</p>
					</Col>
					<Col lg={5}>
						<img src={nationalSecurityImage} alt="Positioned for the Future of National Security" width="100%" data-aos='fade' data-aos-duration='500' data-aos-delay='150' />
					</Col>
				</Row>
				<br/>
				<div className='chapterArrows text-center'>
					<Row>
						<Col xs={{ span: 2, offset: 4}} className='chapterArrow' onClick={() => navigate('/expertiseTechnology')}>
								<FontAwesomeIcon icon={faChevronLeft} />
								<br/>
								<span>Previous</span>
						</Col>
						<Col xs={2} className='chapterArrow' onClick={() => navigate('/ukSummary')}>
								<FontAwesomeIcon icon={faChevronRight} />
								<br/>
								<span>Next</span>
						</Col>
					</Row>
				</div>
			</div>
			<br/>
		</Container>

	);
}