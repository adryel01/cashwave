import whats from '../../assets/whats.png'
import './style.css'

export function Whatsapp(){

	return (

		<div className='Whatscontainer'>
			<a href='https://api.whatsapp.com/send?phone=5562985914974&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20Cashwave!' target='_blank'><img src={whats} alt="" className='Whatsicon'/></a>
		</div>
	)
}