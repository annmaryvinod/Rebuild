import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav id="navbar" class="navbar">
                    <ul>
                        <li><a class="nav-link scrollto active" href="index.html#hero">Home</a></li>
                        <li><a class="nav-link scrollto" href="index.html#about">About</a></li>
                        <li><a class="nav-link scrollto" href="index.html#pricing">Register</a></li>
                        <li><a class="nav-link scrollto" href="index.html#faq">FAQs</a></li>
                        <li><a class="nav-link scrollto" href="index.html#clients">Sponsors</a></li>

                        <li><a class="nav-link scrollto" href="index.html#contact">Contact</a></li>

                        <li>
                            <Link to='/login' className ="getstarted scrollto"> Login</Link>
                        </li>
                        
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>
     );
}
 
export default Navbar;