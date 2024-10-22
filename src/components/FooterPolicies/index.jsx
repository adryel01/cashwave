import './style.css'
import {FaInstagram} from 'react-icons/fa6'
import {FiYoutube} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import cashtime from '../../assets/cashtime-vertical-branco.png'
import { Link } from 'react-router-dom'

export function FooterPolicies() {

	return (

		<footer className='FooterPolicies'>
			{/* <div className='Prefooter'>
				<h1>Lucre junto aos melhores do Mercado Digital na Cashtime</h1>
				<p>Lojista, maximize suas vendas com a plataforma mais avançada de conversão, automação e pagamentos. Não precisa continuar procurando, você achou! <b>Basta criar sua conta.</b></p>
			</div> */}
			<hr />
			<nav>
				<div className='LeftFooter'>
					<h2 className='LogoFooter'>
					<h3>Cash<span className='WaveName'>Wave</span></h3>
					</h2>
					<div className='IconsFooter'>
						<FaInstagram color='#fff'/>
						<FiYoutube color='#fff'/>
						<FaTwitter color='#fff'/>
					</div>
				</div>
				<div className='CenterFooter'>
					<h3>
						Fale Conosco
					</h3>
					<p><b>Email:</b> suporte@igpagamentos.com</p>
				</div>
				<div className='RightFooter'>
					<h3>
						Liks Úteis
					</h3>
					<a href='/terms-of-use' className='Links'>Termos de Uso</a>
					<a href='/policies' className='Links'>Políticas de Privacidade</a>
				</div>
			</nav>
			<div className='CopyRight'>
			<span>© Copyright 2024・IG Pagamentos・Todos os direitos reservados.</span>
				<div>
					<p>IG Finanças</p>
					<p>RUA 5 DE JULHO, Nº 764, Q13 L12, ST JARDIM GRAMADO</p>
					<span>CEP 74.583-715, GOIÂNIA-GO</span>
				</div>
				<span>CNPJ: 54.779.980/0001-00</span>
			</div>
		</footer>
	)
}