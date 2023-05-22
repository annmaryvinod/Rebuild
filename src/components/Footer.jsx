

const Footer = () => {
    return (
        <footer id="footer" class="footer">

            <div class="footer-top">
                <div class="container">
                    <div class="row gy-4 text-center">
                        <div class="col-lg-12 col-md-12 footer-info">
                            <a href="index.html" class="logo d-flex align-items-center text-center">
                                <img src="assets/img/favicon.png" alt=""/>
                                    <span> GDSC MACE</span>
                            </a>
                            <p>Connect with us</p>
                            <div class="social-links mt-3">
                                <a href="https://twitter.com/gdsc_mace" target="_" class="twitter"><i class="bi bi-twitter"></i></a>
                                <a href="https://instagram.com/gdsc_mace" target="_" class="instagram"><i class="bi bi-instagram"></i></a>
                                <a href="https://www.linkedin.com/company/gdsc-mace/" target="_" class="linkedin"><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div class="container">
                <div class="copyright">
                    &copy; Copyright <strong><span>GDSC MACE</span></strong>. All Rights Reserved
                </div>
                <div class="credits">

                    Designed by <a href="#">Team Girlathon</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;