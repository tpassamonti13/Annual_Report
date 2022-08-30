import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ukImage from '../../images/2022_AnnualReport_uk.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import './Pages.css';

export default function UK()
{
	const navigate = useNavigate();

	return (
		<Container>
			<div className='contentArea'>
				<Row className='headerRow'>
					<Col data-aos='fade-left' data-aos-duration='500' data-aos-once="true">
						<h1 className='fw-bold'>UK Summary</h1>
						<hr className='mobileHeader' />
					</Col>
				</Row>
				<br/>
				<Row>
					<Col lg={7} data-aos='fade-up' data-aos-duration='500' data-aos-delay='150' data-aos-once="true">
						<p>CACI’s business in the United Kingdom (UK) generated record revenue and net income in FY22 by focusing on strong operational performance and technology sales with high margins, while continuing to successfully navigate the challenges of the COVID-19 pandemic.</p>

						<p>CACI UK works with government agencies using cloud technology systems to transform the UK's security. The UK Home Office – the UK’s ministerial department responsible for immigration, security, and law enforcement – placed its trust in us to deliver streamlined and automated border security checks.</p>

						<p>For several years, we successfully delivered the censuses for Scotland and the Republic of Ireland. In FY22, we again provided the data collection and processing technology capabilities for both countries. </p>

						<p>Unilever uses our analytics to manage its distribution strategy for Ben and Jerry’s ice cream and has extended its relationship with us to cover numerous international markets. We were able to recommend new locations and deliver sales 34% higher than those identified using Unilever’s previous methods. </p>

						<p>We helped PepsiCo develop their Consumer DNA (cDNA) program, which is the center of their online UK marketing activity, enabling them to make more direct consumer relationships across hundreds of their brands.</p>

						<p>Looking forward, CACI UK is focused on increasing investment in proprietary products, data solutions, and specialist innovation to grow our business further – exploiting our talent, data, and technology.</p>
					</Col>
					<Col lg={5}>
						<img src={ukImage} alt="UK Summary" width="100%" data-aos='fade' data-aos-duration='500' data-aos-delay='150' />
					</Col>
				</Row>
				<br/>
				<div className='chapterArrows text-center'>
					<Row>
						<Col xs={{ span: 2, offset: 4}} className='chapterArrow' onClick={() => navigate('/positioningForTheFuture')}>
								<FontAwesomeIcon icon={faChevronLeft} />
								<br/>
								<span>Previous</span>
						</Col>
						<Col xs={2} className='chapterArrow' onClick={() => navigate('/boardOfDirectors')}>
								<FontAwesomeIcon icon={faChevronRight} />
								<br/>
								<span>Next</span>
						</Col>
					</Row>
				</div>
			</div>
		</Container>

	);
}