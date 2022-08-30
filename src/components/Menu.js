import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import caciLogo from '../images/cacilogo.png';
import annualReportPDF from '../documents/CACI_Annual_Report_2022.pdf'
import { useNavigate } from "react-router-dom";
import './Menu.css';

export default function Menu() 
{
	const navigate = useNavigate();

	/*
	 * Collapses mobile menu and scrolls page to the top when a menu item is selected
	 */
	function removeShow()
	{
		if (window.innerWidth < 992)
		{
			document.getElementById('navbarToggler').click();
			window.scrollTo({ top:-100, left:0, behavior: "instant"});
		}
	}

	return (
			<Navbar collapseOnSelect expand='lg' variant='custom' fixed='top'>
				<Container fluid>
					<span className='navbarTitle'><strong>2022</strong> <span className='smallFont'>ANNUAL REPORT</span><br/><strong>INVESTING</strong> <span className='smallFont'>AND</span> <strong>INNOVATING</strong> <span className='smallFont'>FOR THE</span> <strong>FUTURE</strong></span>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" id="navbarToggler">
						<span></span>
						<span></span>
						<span></span>
					</Navbar.Toggle>
					<Navbar.Collapse id='responsive-navbar-nav'>
						<div className='nav-link print navImg'>
							<div className='nav-link-inner'>
					    		<img className='menuLogo' src={caciLogo} width="65%" alt="CACI Logo" onClick={() => window.open("https://www.caci.com", "_blank")} />
					    	</div>
					    </div>
						<div className='nav-link'>
							<div className='nav-link-inner' onClick={() => { removeShow(); navigate('/');}} onTouchStart={() => document.getElementsByClassName('nav-link-inner')[1].classList.add('touchActive')} onTouchEnd={() => document.getElementsByClassName('nav-link-inner')[1].classList.remove('touchActive')}>
			            	 	Home
					        </div>
					    </div>
						<div className='nav-link' onClick={() => { removeShow(); navigate('/letterToOurShareholders');}} onTouchStart={() => document.getElementsByClassName('nav-link-inner')[2].classList.add('touchActive')} onTouchEnd={() => document.getElementsByClassName('nav-link-inner')[2].classList.remove('touchActive')}>
							<div className='nav-link-inner'>
			            	 	Letter to <br/>Our Shareholders
					        </div>
					    </div>
					    <div className='nav-link' onClick={() => { removeShow(); navigate('/financialHighlights');}} onTouchStart={() => document.getElementsByClassName('nav-link-inner')[3].classList.add('touchActive')} onTouchEnd={() => document.getElementsByClassName('nav-link-inner')[3].classList.remove('touchActive')}>
							<div className='nav-link-inner'>
			            	 	FY22 Financial Highlights
					        </div>
					    </div>
					    <div className='nav-link' onClick={() => { removeShow(); navigate('/investingAndInnovatingForTheFuture');}} onTouchStart={() => document.getElementsByClassName('nav-link-inner')[4].classList.add('touchActive')} onTouchEnd={() => document.getElementsByClassName('nav-link-inner')[4].classList.remove('touchActive')}>
							<div className='nav-link-inner'>
			            	 	Investing and <br/>Innovating <br/>for the Future
					        </div>
					    </div>
					    <div className='nav-link' onClick={() => { removeShow(); navigate('/expertiseTechnology');}} onTouchStart={() => document.getElementsByClassName('nav-link-inner')[5].classList.add('touchActive')} onTouchEnd={() => document.getElementsByClassName('nav-link-inner')[5].classList.remove('touchActive')}>
							<div className='nav-link-inner'>
			            	 	Expertise and Technology <br/>for Mission and Enterprise <br/>Customers
					        </div>
					    </div>
					    <div className='nav-link' onClick={() => { removeShow(); navigate('/positioningForTheFuture');}} onTouchStart={() => document.getElementsByClassName('nav-link-inner')[6].classList.add('touchActive')} onTouchEnd={() => document.getElementsByClassName('nav-link-inner')[6].classList.remove('touchActive')}>
							<div className='nav-link-inner'>
			            	 	Positioning for <br/>the Future
					        </div>
					    </div>
					    <div className='nav-link' onClick={() => { removeShow(); navigate('/ukSummary');}} onTouchStart={() => document.getElementsByClassName('nav-link-inner')[7].classList.add('touchActive')} onTouchEnd={() => document.getElementsByClassName('nav-link-inner')[7].classList.remove('touchActive')}>
							<div className='nav-link-inner'>
			            	 	UK Summary
					        </div>
					    </div>
					    <div className='nav-link' onClick={() => { removeShow(); navigate('/boardOfDirectors');}} onTouchStart={() => document.getElementsByClassName('nav-link-inner')[8].classList.add('touchActive')} onTouchEnd={() => document.getElementsByClassName('nav-link-inner')[8].classList.remove('touchActive')}>
							<div className='nav-link-inner'>
			            	 	Board of Directors
					        </div>
					    </div>
					    <div className='nav-link' onClick={() => { removeShow(); navigate('/additionalInformation');}} onTouchStart={() => document.getElementsByClassName('nav-link-inner')[9].classList.add('touchActive')} onTouchEnd={() => document.getElementsByClassName('nav-link-inner')[9].classList.remove('touchActive')}>
							<div className='nav-link-inner'>
			            	 	Additional Information
					        </div>
					    </div>
					    <div className='nav-link print'>
							<div className='nav-link-inner'>
			            	 	<a href={annualReportPDF}><button className='printPDFButton'>PRINT PDF</button></a>
					        </div>
					    </div>
					</Navbar.Collapse>
				</Container>
			</Navbar>
	);
}