import logo from "../../media/logo.png";
import "./Logo.css";

export const Logo = () => {
	return (
		<div className='logo-wrapper'>
			<img src={logo} alt='Logo' className='logo' />
		</div>
	);
};
