const Log = () => {
    return (
        <section id="contact" class="contact">
            <div class="container" data-aos="fade-up">
                <header class="section-header">
                    <h2>Login</h2>
                    <p>Login</p>
                </header>

                <div class="row gy-4">
                    <div
                        class="col-lg-6 d-flex align-items-center"
                        data-aos="zoom-out"
                        data-aos-delay="200"
                        style={{display: "flex !important", justifyContent: "space-around"}}
                    >
                        <img
                            height="400"
                            width="400"
                            src="assets/img/login.jpg"
                            class="img-fluid"
                            alt=""
                            style={{borderRadius: "5px"}}
                        />
                    </div>

                    <div class="col-lg-6">
                        <form class="php-email-form" id="form">
                            <div class="row gy-4">
                                <div class="col-md-12">
                                    <label for="inputname4" class="form-label">Username</label>
                                    <input
                                        type="email"
                                        id="eemail"
                                        class="form-control"
                                        name="email"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                                <div class="col-md-12">
                                    <label for="inputname4" class="form-label">Password</label>
                                    <input
                                        type="password"
                                        id="lpassword"
                                        class="form-control"
                                        name="email"
                                        placeholder="Password"
                                        required
                                    />
                                </div>



                                <div class="col-md-12 text-center">
                                    <button type="submit" id="btn1">Login</button>
                                </div>


                                <div class="col-md-12 text-center">
                                    <div class="loading">Loading</div>

                                    <div class="error-message1" id="danger">
                                        Incorrect credentials!
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Log;