const Pricing = () => {
    return (<section id="pricing" class="pricing">

        <div class="container" data-aos="fade-up">

            <header class="section-header">
                <h2>Register Now</h2>
                <p>Register Now</p>
            </header>

            <div class="row gy-4" data-aos="fade-left" style={{display: "flex" ,justifyContent: "space-around"}}>



                <div class="col-lg-6 col-md-6" data-aos="zoom-in" data-aos-delay="400" style={{height :"900px"}}>
                    <div class="box">
                        <h3 style={{color: "#ff0071"}}>Register as team</h3>

                        <img src="assets/img/reg.gif" class="img-fluid" alt=""/>
                            <ul style={{justifyContent:"right"}}>
                                <li>You can register as a team of maximum 4 members</li>
                                <li>Team lead has to register first</li>
                                <li>After registration, team lead can add the members by the option of 'Add Member'</li>
                                <li>Only team lead can  enter the details of team members</li>
                            </ul>
                            <a href="#" class="btn-buy">Register Now</a>
                    </div>
                </div>

            </div>

        </div>

    </section>);
}

export default Pricing;