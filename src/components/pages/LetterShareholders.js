import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import johnImage from '../../images/AR21_shareholders.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import '../../App.css';
import './Pages.css';

export default function LetterShareholders()
{
	const navigate = useNavigate();

	return (
		<Container>
			<div className='contentArea'>
					<Row className='headerRow'>
						<Col data-aos='fade-left' data-aos-duration='500' data-aos-once="true">
							<h1 className='fw-bold'>Letter to Our Shareholders</h1>
							<hr className='mobileHeader' />
						</Col>
					</Row>
					<br/>
					<Row>
						<Col lg={7} data-aos='fade-up' data-aos-duration='500' data-aos-delay='150' data-aos-offset="-5000" data-aos-once="true">
							<h2>To Our Fellow CACI Shareholders,</h2>
							<p>Fiscal Year 2022 was a year of strong financial performance for CACI, even as the world grappled with new COVID variants, war in Europe, inflation, and numerous other challenges. We delivered solid revenue growth, healthy margins, and robust cash flow. Our track record of financial performance continued to enable flexible and opportunistic capital deployment to drive shareholder value, including more than $600 million to make multiple high-value, strategic acquisitions, as well as further internal investment to meet our customers’ critical needs. We also continued to invest in our talented employees, embracing agility and adapting to meet the changing needs of our workforce. Our efforts continue to be recognized by prestigious organizations, such as the Washington Post and Forbes, which again named CACI a “top workplace” and “best employer,” respectively. Finally, we released our inaugural Corporate Responsibility Report, which outlines important and impactful information about our company from an environmental, social, and governance (ESG) perspective. </p>

							<p>In FY22, we won more than $7 billion in awards, with a healthy mix of recompete wins to support our base and new awards to drive future growth. Our robust backlog is in excess of $23 billion and our pipeline of new opportunities is strong.</p>

							<p>We made multiple strategic acquisitions that bring cutting-edge technology in key areas, including open-source intelligence, cyber, satellite communications, photonics, and network security and modernization. These differentiated capabilities complement, enhance, and expand our existing expertise and technology. They enable CACI to address a wider range of critical national security priorities for our customers and position us to drive strong long-term growth, margin expansion, and cash flow generation; all of which put CACI in the position to continue delivering long-term shareholder value. As we look forward, these investments allow us to carry on our legacy of innovation and growth in FY23 and beyond.</p>

							<p>But FY23 is not just another year – it represents CACI’s 60th year in business. In 1962, our two founders started CACI with modest means. What they lacked in resources they made up for in ingenuity, confidence, and sheer tenacity. This spirit is foundational to our culture of character and innovation. Today, we generate more than $6 billion in revenue and support some of the most critical missions that keep our nation and the world safe. Our founders would be proud of what CACI has become, and proud of the positive impact our company has had on countless customers, employees, families, communities, and shareholders over the last six decades.</p>

							<p>As is always the case, we achieved our success because of our employees’ talent, innovation, and commitment to customer missions, our company, and each other. The work we do to support our national security cannot be compromised. We thank our customers for their confidence in us and we thank you, our fellow shareholders, for your continued support of CACI. </p>
						</Col>
						<Col lg={5} data-aos='fade' data-aos-duration='500' data-aos-delay='150' data-aos-offset="-5000" data-aos-once="true">
							<img src={johnImage} alt="John Mengucci, President and Chief Executive Officer, CACI International Inc" width="100%" />
						</Col>
					</Row>
					<br/>
					<div className='chapterArrows text-center'>
						<Row>
							<Col xs={{ span: 2, offset: 4}} className='chapterArrow' onClick={() => navigate('/')}>
									<FontAwesomeIcon icon={faChevronLeft} />
									<br/>
									<span>Previous</span>
							</Col>
							<Col xs={2} className='chapterArrow' onClick={() => navigate('/financialHighlights')}>
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