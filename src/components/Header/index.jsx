import './style.css'
import { LinearGradient } from 'react-text-gradients'
import cashtime from '../../assets/cashtime-horizontal-branco.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'


export function HeaderContainer() {

	

	return (
		<div className="HeaderContainer">
			<Link to={'/'} className='LogoHeader'>
				<h3>Cash<span className='WaveName'>Wave</span></h3>
			</Link>
			<nav className="NavHeader">
				
				{/* <a href='https://app.cashtimepayments.com.br/' target='_blank'><button className='SignUpButtonHeader'>Acessar Checkout</button></a> */}
			</nav>
		</div>
	)
}