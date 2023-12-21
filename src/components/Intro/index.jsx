import './style.css'
import { LinearGradient } from 'react-text-gradients'
import ButtonStart from '../../assets/ButtonStart.png'
import Robot from '../../assets/robotfinal.png'
import waveapp from '../../assets/waveapp.png'
import { motion } from "framer-motion"

export function Intro() {

	

	return (

		<section className='IntroContainer'>
			<div className='HeaderIntro'>
				
				<div className='PreContainerGradientHeader'>
					<div className='ContainerGradientHeader'>
						<p>O Melhor</p>
						<LinearGradient gradient={['to right', '#fff ,#f5df19']} className='GradientTextIntro'>Gateway</LinearGradient>
					</div>
					{/* <img src={ButtonStart} alt="" className='ImageHeaderIntroContainer' /> */}
				</div>
				<p>de Pagamentos</p>
				<span>A solução que você procurava está disponível para aprimorar o seu empreendimento digital. Nossa plataforma apresenta funcionalidades inteligentes destinadas a impulsionar suas vendas por meio da automação, além de um processo de finalização de compra incomparável. Agora, você tem ao seu alcance a resposta definitiva para melhorar o seu negócio.</span>
				<a href='https://api.whatsapp.com/send?phone=5562985914974&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20Cashwave!' target='_blank'><button className='ButtonAccess'>Fale conosco</button></a>
			</div>
			<div className='BackGroundImageIntro'>
				<motion.img src={waveapp} alt="" className='ImageIntroContainer'
					initial={{ opacity: 0, y: -30}}
					whileInView={
						{
							opacity: 1,
							y: 0,
							transition: {
								duration: 1.5,
							},
							visibility: true
						}
					}
				/>
			</div>

		</section>
	)
}