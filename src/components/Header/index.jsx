import './style.css'
import { LinearGradient } from 'react-text-gradients'
import cashtime from '../../assets/cashtime-horizontal-branco.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'


export function HeaderContainer() {

	

	return (
		<div className="HeaderContainer">
			<Link to={'/'} className='LogoHeader'>
				<h3>IG<span className='WaveName'> Pagamentos</span></h3>
			</Link>
			<nav className="NavHeader">
				{/* <a href="https://app.gateway.cashtimepay.com.br/register" className='LinkAcessHeader' target='_blank' >Acessar Gateway</a> */}
				{/* <a href='https://app.cashtimepayments.com.br/register' target='_blank'><button className='SignUpButtonHeader'>Acessar Checkout</button></a> */}
			</nav>
		</div>
	)
}