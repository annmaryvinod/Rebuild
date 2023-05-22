const About = () => {
    return (

        <div>
            <section id="about" class="about">

                <div class="container" data-aos="fade-up">
                    <div class="row gx-0">

                        <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                            <div class="content"  style={{height: "460px"}}>
                                <h3>About</h3>
                                <h2>GDSC MACE</h2>
                                <p>
                                    GDSC MACE, is the college chapter of the Google Developer Student Club of Mar Athanasius College of Engineering. Formed in the year 2020, it has since become an active medium to put forward creative initiatives to enhance the potential abilities in students.
                                </p>
                                <div class="text-center text-lg-start">
                                    <a href="https://gdsc.community.dev/mar-athanasius-college-of-engineering-kothamangalam/" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                        <span>Know More</span>
                                        <i class="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                            <img src="assets/img/mace.png" class="img-fluid" alt="" style={{height: "300px"}} />
                        </div>

                    </div>
                </div>

            </section>

            <section id="about" class="about">

                <div class="container" data-aos="fade-up">
                    <div class="row gx-0">
                        <div class="col-lg-6 d-flex align-items-center text-center girl" data-aos="zoom-out" data-aos-delay="200">
                            <img height="350" width="350" src="assets/img/girl.jpg" class="img-fluid" alt=""/>
                        </div>

                        <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                            <div class="content" style={{height: "460px"}}>
                                <h3>About</h3>
                                <h2>Girlathon</h2>
                                <p>
                                    Girlathon is a beginner friendly hackathon exclusively for those who identify as woman. The flagship event of Google Developers Student Club MACE is driven by the vision to advance and excel women in the field of technology. The multiple round hackathon is aimed to be one among plenty of initiatives undertaken around the globe for propagating and endorsing women participation in STEM field,by encouraging to incorporate innovation with technology in their domain of interest with proficient mentorship, guidance and support.
                                </p>

                            </div>
                        </div>

                        <br /><br />



                    </div>
                </div>

            </section>
        </div>

    );
}

export default About;