import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import './Pages.css';

export default function Achieving()
{
	const navigate = useNavigate();

	return (
			<Container>
				<div className='contentArea'>
					<Row className='headerRow'>
						<Col data-aos='fade-left' data-aos-duration='500' data-aos-once="true">
							<h1 className='fw-bold'>Investing and Innovating for the Future</h1>
							<hr className='mobileHeader' />
						</Col>
					</Row>
					<br/>
					<Row>
						<Col lg={7} data-aos='fade-up' data-aos-duration='500' data-aos-delay='150' data-aos-once="true">

							<p>CACI's solid performance in FY22 benefitted both our customers and our shareholders. We delivered on and exceeded our customer commitments to support and address their most critical national security priorities. We also diligently strived for consistent, high-value outcomes and offered differentiated technologies that are vital to enhancing their enterprise and mission needs.</p>

							<p>For our shareholders, we delivered healthy growth, strong profitability, and robust cash flow, while at the same time continuing to invest across our business to sustain durable, long-term growth and shareholder value creation. We achieved these results despite a challenging macro environment, including the ongoing uncertainty of a global pandemic, supply chain disruptions, the impacts of Russia’s invasion of Ukraine, and global inflation.</p>

							<p>As an industry leader in software development at scale, including the execution of two of the government’s largest Agile programs, we see growing customer interest and pipeline opportunities to leverage <a href="https://www.caci.com/agile-solution-factory" target="_blank" rel="noopener noreferrer">Agile software development</a>, <a href="https://www.caci.com/devsecops" target="_blank" rel="noopener noreferrer">DevSecOps</a>, and open architectures that enable application modernization. From <a href="https://www.caci.com/enterprise-it" target="_blank" rel="noopener noreferrer">network modernization</a> and leading <a href="https://www.caci.com/steelbox-secure-voice-and-text-app" target="_blank" rel="noopener noreferrer">Commercial Solutions for Classified (CSfC)</a> capabilities to <a href="https://www.caci.com/electronic-warfare" target="_blank" rel="noopener noreferrer">electronic warfare (EW)</a> and growth in the increasingly important <a href="https://www.caci.com/space-systems-and-technology" target="_blank" rel="noopener noreferrer">space domain</a>, our offerings provide exceptional value for our customers and strong financial returns for our shareholders.</p>

							<p>During the past year, CACI’s more than 22,000 dedicated employees rose above myriad challenges to support vital customer missions. Because of our strong company culture, we are continuously recognized as the company where talented engineers, scientists, and innovators can build meaningful careers and see their work's impact by helping our customers shape the future of national security and modernization.</p>

							<p>In FY22, <a href="https://investor.caci.com/news/news-details/2022/CACI-Named-a-2022-Top-Workplace-USA/default.aspx" target="_blank" rel="noopener noreferrer">CACI was named a 2022 Top Workplace USA and Top Technology Company</a> for the second year in a row on the national list administered by Energage. CACI was also named <a href="https://investor.caci.com/news/news-details/2022/CACI-Named-a-Fortune-Worlds-Most-Admired-Company/default.aspx" target="_blank" rel="noopener noreferrer">a Fortune World’s Most Admired Company</a>, the 11th time it has appeared on the list. And our national security technologies continue to win awards, <a href="https://investor.caci.com/news/news-details/2022/CACI-Dark-Web-Analytics-Technology-Earns-Prestigious-Gold-Edison-Award/default.aspx" target="_blank" rel="noopener noreferrer">the prestigious Gold Edison Award for the DarkBlue Intelligence Platform</a>.</p>

							<p>This year, we celebrate our 60th year in business. Our unique culture and vision for delivering modern national security technologies and world-class expertise have powered our 60-year evolution, and we will continue to deliver on our commitments, generate value, and invent the future for years to come.</p>
						</Col>
						<Col lg={5}>
							<div className='highlightsColumn'>
								<h4 data-aos='fade' data-aos-duration='500' data-aos-delay='150' data-aos-once="true" data-aos-offset="-5000">FY22 Highlights:</h4>
								<ul data-aos='fade' data-aos-duration='500' data-aos-delay='150' data-aos-once="true" data-aos-offset="-5000">
									<li>Achieved more than <strong>$6.2 billion in revenue</strong>, representing a 2.6% year-over-year increase.</li>
									<li><strong>Won $7.1 billion in contract awards</strong>, with 60% representing new business.</li>
									<li>Generated robust cash flow from operating activities of <strong>more than $745 million</strong>.</li>
									<li>Acquired multiple companies, including <strong>ID Technologies</strong>, <strong>SA Photonics</strong>, and <strong>Bluestone Analytics</strong>, broadening our free-space optical  (FSO) communications expertise and technology; expanding our enterprise modernization and secure communications technologies; and leveraging dark web exploitation and analysis expertise.</li>
								</ul>
							</div>
						</Col>
					</Row>
				<br/>
					<div className='chapterArrows text-center'>
						<Row>
							<Col xs={{ span: 2, offset: 4}} className='chapterArrow' onClick={() => navigate('/financialHighlights')}>
									<FontAwesomeIcon icon={faChevronLeft} />
									<br/>
									<span>Previous</span>
							</Col>
							<Col xs={2} className='chapterArrow' onClick={() => navigate('/expertiseTechnology')}>
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