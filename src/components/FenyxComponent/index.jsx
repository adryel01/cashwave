import './style.css'
import { motion } from "framer-motion"

export function FenyxComponent() {

	const text = "Saiba o que a IG Pagamentos oferece para o seu negócio!";


	const textVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.1, // Adiciona um pequeno atraso entre cada letra
			},
		},
	};


	return (

		<div>
			<div className='FenyxTitle'>
				<h2>As melhores ferramentas seu negócio online</h2>
				{/* <h1>Saiba o que a IG Pagamentos oferece para o seu negócio!</h1> */}
				<motion.h1
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
				>
					{text.split('').map((letter, index) => (
						<motion.span
							key={index}
							variants={textVariants}
						>
							{letter}
						</motion.span>
					))}
				</motion.h1>
			</div>
			<div className='FenyxCardsContainer'>
				<div className='FenyxCard'>
					<div className='BgIcon'>
						<img src="https://static.wixstatic.com/media/9ac527_7ef318bef57749bab4277d00973812c0~mv2.webp" alt="" className='ImgIcon' />
					</div>

					<b>Processamento de Pagamentos</b>
					<p>Com a IG Pagamentos, você conta com os principais métodos de pagamento para o seu empreendimento, eliminando a necessidade de lidar com a integração de distintos gateways, adquirentes e instituições bancárias.</p>
				</div>
				<div className='FenyxCard'>
					<div className='BgIcon'>
						<img src="https://static.wixstatic.com/media/9ac527_8ccd4a69cf5d41d5b45ffcf99a5d2d4a~mv2.webp" alt="" className='ImgIcon' />
					</div>

					<b>Pagamentos Recorrentes</b>
					<p>Administre os pagamentos de suas assinaturas, planos e mensalidades com facilidade. Automatize o processo de cobrança para seus clientes, monitore suas vendas em tempo real e reduza a inadimplência.</p>
				</div>
				<div className='FenyxCard'>
					<div className='BgIcon'>
						<img src="https://static.wixstatic.com/media/9ac527_83bc567cf4c04c57a93614128b8419c7~mv2.webp" alt="" className='ImgIcon' />
					</div>

					<b>Links de Pagamento</b>
					<p>Realize vendas por meio de e-mail, mensagens instantâneas, redes sociais e QR Code. Independentemente de o seu empreendimento ser online ou offline, ofereça o link de pagamento em qualquer lugar onde o seu cliente esteja.</p>
				</div>
			</div>

		</div>
	)
}