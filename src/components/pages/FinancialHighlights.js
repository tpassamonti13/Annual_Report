import React from 'react';
import './Pages.css';
import RevenueChart from '../RevenueChart';
import NetIncomeChart from '../NetIncomeChart';
import DilutedEPSChart from '../DilutedEPSChart';
import ShareholdersEquityChart from '../ShareholdersEquityChart';
import CountUp from 'react-countup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

export default function FinancialHighlights()
{
	const navigate = useNavigate();

	return (
		<Container>
			<div className='contentArea'>
				<Row className='headerRow'>
					<Col data-aos='fade-left' data-aos-duration='500' data-aos-once="true" data-aos-offset="-5000">
						<h1 className='fw-bold'>FY22 Financial Highlights</h1>
						<hr className='mobileHeader' />
					</Col>
				</Row>
				<br/>
				<div>
					<div data-aos='fade' data-aos-duration='500' data-aos-delay='150' data-aos-once="true" data-aos-offset="-5000">
						<Row>
							<Col lg={3} className='text-center chartColumn'>
								<h4 data-aos='fade' data-aos-duration='500' data-aos-delay='150' data-aos-once="true" data-aos-offset="-5000">Revenue</h4>
								<hr/>
								<span>($M)</span>
								<RevenueChart />
							</Col>
							<Col lg={3} className='text-center chartColumn'>
								<h4 data-aos='fade' data-aos-duration='500' data-aos-delay='150' data-aos-once="true" data-aos-offset="-5000">Net Income*</h4>
								<hr/>
								<span>($M)</span>
								<NetIncomeChart />
							</Col>
							<Col lg={3} className='text-center chartColumn'>
								<h4 data-aos='fade' data-aos-duration='500' data-aos-delay='150' data-aos-once="true" data-aos-offset="-5000">Diluted EPS*</h4>
								<hr/>
								<span>($)</span>
								<DilutedEPSChart />
							</Col>
							<Col lg={3} className='text-center chartColumn'>
								<h4 data-aos='fade' data-aos-duration='500' data-aos-delay='150' data-aos-once="true" data-aos-offset="-5000">Shareholders' Equity*</h4>
								<hr/>
								<span>($M)</span>
								<ShareholdersEquityChart />
							</Col>
						</Row>
						<br/>
						<Row className='tableRow'>
							<Col lg={6}>
								<h4 className='text-center' data-aos='fade' data-aos-duration='500' data-aos-delay='150' data-aos-once="true" data-aos-offset="-5000">Income Statement Data</h4>
								<p className='text-center notes headerNote'>(in thousands, except per share data and percentages)</p>
								<hr/>
								<table className="table">
								  <tbody>
								    <tr className='fw-bold'>
								      <td>Year ended June 30</td>
								      <td className="tableBorderTop text-center">2022</td>
								      <td className='text-center'>% Change</td>
								      <td className='text-center'>2021</td>
								    </tr>
								    <tr>
								      <td>Revenue</td>
								      <td className="tableBorderSide fw-bold"><CountUp duration={1.5} end={6202917} separator="," prefix="$"/></td>
								      <td><CountUp duration={1.5} end={2.6} separator="," suffix="%" decimals={1}/></td>
								      <td><CountUp duration={1.5} end={6044135} separator="," prefix="$"/></td>
								    </tr>
								    <tr>
								      <td>Operating Income</td>
								      <td className="tableBorderSide fw-bold"><CountUp duration={1.5} end={496329} separator="," prefix="$"/></td>
								      <td><CountUp duration={1.5} end={-8} separator="," suffix="%" decimals={1}/></td>
								      <td><CountUp duration={1.5} end={539451} separator="," prefix="$"/></td>
								    </tr>
								    <tr>
								      <td>Net Income</td>
								      <td className="tableBorderSide fw-bold"><CountUp duration={1.5} end={366794} separator="," prefix="$"/></td>
								      <td><CountUp duration={1.5} end={-19.8} separator="," suffix="%" decimals={1}/></td>
								      <td><CountUp duration={1.5} end={457443} separator="," prefix="$"/></td>
								    </tr>
								    <tr>
								      <td>Diluted Earnings per Share</td>
								      <td className="tableBorderSide fw-bold"><CountUp duration={1.5} end={15.49} separator="," prefix="$" decimals={2}/></td>
								      <td><CountUp duration={1.5} end={-15.4} separator="," suffix="%" decimals={1}/></td>
								      <td><CountUp duration={1.5} end={18.30} separator="," prefix="$" decimals={2}/></td>
								    </tr>
								    <tr>
								      <td>Weighted-average Diluted Shares</td>
								      <td className="tableBorderBottom fw-bold"><CountUp duration={1.5} end={23677} separator=","/></td>
								      <td></td>
								      <td><CountUp duration={1.5} end={24992} separator=","/></td>
								    </tr>
								  </tbody>
								</table>
							</Col>
							<Col lg={6}>
								<h4 className='text-center' data-aos='fade' data-aos-duration='500' data-aos-delay='150' data-aos-once="true" data-aos-offset="-5000">Balance Sheet Data</h4>
								<p className='text-center notes headerNote'>(in thousands, except percentages)</p>
								<hr/>
								<table className="table">
								  <tbody>
								    <tr className='fw-bold'>
								      <td>Year ended June 30</td>
								      <td className="tableBorderTop text-center">2022</td>
								      <td className='text-center'>% Change</td>
								      <td className='text-center'>2021</td>
								    </tr>
								    <tr>
								      <td >Total Assets</td>
								      <td className="tableBorderSide fw-bold"><CountUp duration={1.5} end={6629431} separator="," prefix="$"/></td>
								      <td><CountUp duration={1.5} end={7.4} separator="," suffix="%" decimals={1}/></td>
								      <td><CountUp duration={1.5} end={6172372} separator="," prefix="$"/></td>
								    </tr>
								    <tr>
								      <td>Working Capital</td>
								      <td className="tableBorderSide fw-bold"><CountUp duration={1.5} end={182277} separator="," prefix="$"/></td>
								      <td><CountUp duration={1.5} end={-59.2} separator="," suffix="%" decimals={1}/></td>
								      <td><CountUp duration={1.5} end={446375} separator="," prefix="$"/></td>
								    </tr>
								    <tr>
								      <td>Shareholders' Equity</td>
								      <td className="tableBorderBottom fw-bold"><CountUp duration={1.5} end={3053543} separator="," prefix="$"/></td>
								      <td><CountUp duration={1.5} end={14.6} separator="," suffix="%" decimals={1}/></td>
								      <td><CountUp duration={1.5} end={2665278} separator="," prefix="$"/></td>
								    </tr>
								  </tbody>
								</table>
							</Col>
							<br/>
							<Col>
								<span className='notes'>* Net income for FY18 benefitted from a net reduction to income taxes of $103.3 million, or $4.09 per diluted share, related to the enactment of the Tax Cuts and Jobs Act in December 2017. Net income for FY21 benefited from a net reduction to income taxes of $56.2 million, or $2.25 per diluted share, related to certain accounting method changes made by CACI.</span>
								<br />
								<span className='notes'>There are statements made herein which reflect our intent, belief, or current expectations and do not address historical facts. Such statements could be interpreted to be forward-looking statements within the meaning of federal securities laws. Please refer to CACI's Annual Report on Form 10-K as well as other filings with the SEC, for a description of the substantial risks and uncertainties related to the forward-looking statements included herein.</span>
								<br />
								<br />
							</Col>
						</Row>
					</div>
				</div>
				<br/>
					<div className='chapterArrows text-center'>
					<Row>
						<Col xs={{ span: 2, offset: 4}} className='chapterArrow' onClick={() => navigate('/letterToOurShareholders')}>
								<FontAwesomeIcon icon={faChevronLeft} />
								<br/>
								<span>Previous</span>
						</Col>
						<Col xs={2} className='chapterArrow' onClick={() => navigate('/investingAndInnovatingForTheFuture')}>
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