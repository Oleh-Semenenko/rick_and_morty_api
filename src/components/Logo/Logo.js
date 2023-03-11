import logo from "../../media/logo_mobile.png";
import "./Logo.css"

export const Logo = () => {
	return (
		<div className="logo-wrapper">
			<img src={logo} alt='Logo' className='logo' />
		</div>
	);
};
