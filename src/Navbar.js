import './Navbar.css';
import iconcat from './component/pics/catIcon.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={iconcat} alt="Cat Icon" className="navbar-icon" />
            <h1 className="navbar-title">喵喵喵，你是哪种流浪猫？</h1>
        </nav>
    );
};

export default Navbar;
