import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from '../../images/ar21_mdaniels.jpeg';
import image2 from '../../images/ar21_jmengucci.jpeg';
import image3 from '../../images/ar21_ldisbrow.jpeg';
import image4 from '../../images/ar21_sgordon.jpeg';
import image5 from '../../images/ar21_bjews.jpeg';
import image6 from '../../images/ar21_gjohnson.jpeg';
import image7 from '../../images/ar21_rmccarthy.jpeg';
import image8 from '../../images/ar21_pnolan.jpeg';
import image9 from '../../images/ar21_jpavitt.jpeg';
import image10 from '../../images/ar21_dplunkett.jpeg';
import image11 from '../../images/ar21_wwallace.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import './Pages.css';

export default function BoardOfDirectors()
{
	const navigate = useNavigate();

	return (
		<Container>
			<div className='contentArea'>
				<Row className='headerRow'>
					<Col data-aos='fade-left' data-aos-duration='500' data-aos-once="true">
						<h1 className='fw-bold'>Board of Directors</h1>
						<hr className='mobileHeader' />
					</Col>
				</Row>
				<br/>
				<div className='text-center'>
					<Row id="modalRow">
						<Col lg={3} data-aos='fade' data-aos-duration='500' data-aos-delay='150' data-aos-offset="-5000" data-aos-once="true">
							<a href="https://www.caci.com/leadership-governance" target="_blank" rel="noopener noreferrer"><div className='boardPane'><img src={image1} alt="Michael A. Daniels" width="100%" /></div></a>
							<h6 className='boardHeader'>Michael A. Daniels</h6>
						</Col>
						<Col lg={3} data-aos='fade' data-aos-duration='500' data-aos-delay='300' data-aos-offset="-5000" data-aos-once="true">	
							<a href="https://www.caci.com/leadership-governance" target="_blank" rel="noopener noreferrer"><div className='boardPane'><img src={image2} alt="John S. Mengucci" width="100%" /></div></a>
							<h6 className='boardHeader'>John S. Mengucci</h6>
						</Col>
						<Col lg={3} data-aos='fade' data-aos-duration='500' data-aos-delay='450' data-aos-offset="-5000" data-aos-once="true">
							<a href="https://www.caci.com/leadership-governance" target="_blank" rel="noopener noreferrer"><div className='boardPane'><img src={image3} alt="Lisa S. Disbrow" width="100%" /></div></a>
							<h6 className='boardHeader'>Lisa S. Disbrow</h6>
						</Col>
						<Col lg={3} data-aos='fade' data-aos-duration='500' data-aos-delay='600' data-aos-offset="-5000" data-aos-once="true">
							<a href="https://www.caci.com/leadership-governance" target="_blank" rel="noopener noreferrer"><div className='boardPane'><img src={image4} alt="Susan M. Gordon" width="100%" /></div></a>
							<h6 className='boardHeader'>Susan M. Gordon</h6>
						</Col>
					</Row>
					<br/>
					<Row id="modalRow">
						<Col lg={3} data-aos='fade' data-aos-duration='500' data-aos-delay='750' data-aos-offset="-5000" data-aos-once="true">
							<a href="https://www.caci.com/leadership-governance" target="_blank" rel="noopener noreferrer"><div className='boardPane'><img src={image5} alt="William L. Jews" width="100%" /></div></a>
							<h6 className='boardHeader'>William L. Jews</h6>
						</Col>
						<Col lg={3} data-aos='fade' data-aos-duration='500' data-aos-delay='900' data-aos-offset="-5000" data-aos-once="true">	
							<a href="https://www.caci.com/leadership-governance" target="_blank" rel="noopener noreferrer"><div className='boardPane'>
							<img src={image6} alt="Admiral Gregory G. Johnson, U.S. Navy (Ret.)" width="100%" /></div></a>
							<h6 className='boardHeader'>Admiral Gregory G. Johnson, <br/>U.S. Navy (Ret.)</h6>
						</Col>
						<Col lg={3} data-aos='fade' data-aos-duration='500' data-aos-delay='1050' data-aos-offset="-5000" data-aos-once="true">
							<a href="https://www.caci.com/leadership-governance" target="_blank" rel="noopener noreferrer"><div className='boardPane'>
							<img src={image7} alt="Ryan D. McCarthy" width="100%" /></div></a>
							<h6 className='boardHeader'>Ryan D. McCarthy</h6>
						</Col>
						<Col lg={3} data-aos='fade' data-aos-duration='500' data-aos-delay='1200' data-aos-offset="-5000" data-aos-once="true">
							<a href="https://www.caci.com/leadership-governance" target="_blank" rel="noopener noreferrer"><div className='boardPane'>
							<img src={image8} alt="Philip O. Nolan" width="100%" /></div></a>
							<h6 className='boardHeader'>Philip O. Nolan</h6>
						</Col>
					</Row>
					<br/>
					<Row id="modalRow">
						<Col lg={3} data-aos='fade' data-aos-duration='500' data-aos-delay='1350' data-aos-offset="-5000" data-aos-once="true">
							<a href="https://www.caci.com/leadership-governance" target="_blank" rel="noopener noreferrer"><div className='boardPane'>
							<img src={image9} alt="James L. Pavitt" width="100%" /></div></a>
							<h6 className='boardHeader'>James L. Pavitt</h6>
						</Col>
						<Col lg={3} data-aos='fade' data-aos-duration='500' data-aos-delay='1500' data-aos-offset="-5000" data-aos-once="true">	
							<a href="https://www.caci.com/leadership-governance" target="_blank" rel="noopener noreferrer"><div className='boardPane'>
							<img src={image10} alt="Debora A. Plunkett" width="100%" /></div></a>
							<h6 className='boardHeader'>Debora A. Plunkett</h6>
						</Col>
						<Col lg={3} data-aos='fade' data-aos-duration='500' data-aos-delay='1750' data-aos-offset="-5000" data-aos-once="true">
							<a href="https://www.caci.com/leadership-governance" target="_blank" rel="noopener noreferrer"><div className='boardPane'>
							<img src={image11} alt="General William Scott Wallace, U.S. Army (Ret.)" width="100%" /></div></a>
							<h6 className='boardHeader'>General William Scott Wallace, <br/>U.S. Army (Ret.)</h6>
						</Col>
					</Row>
				</div>
				<br/>
				<Row>
					<Col>
						<p className="notes">Board member information and bios can be found at <a href="https://www.caci.com/leadership-governance" target="_blank" rel="noopener noreferrer">https://www.caci.com/leadership-governance</a></p>
					</Col>
				</Row>
				<br/>
				<div className='chapterArrows text-center'>
					<Row>
						<Col xs={{ span: 2, offset: 4}} className='chapterArrow' onClick={() => navigate('/ukSummary')}>
								<FontAwesomeIcon icon={faChevronLeft} />
								<br/>
								<span>Previous</span>
						</Col>
						<Col xs={2} className='chapterArrow' onClick={() => navigate('/additionalInformation')}>
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