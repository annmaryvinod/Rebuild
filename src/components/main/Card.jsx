const Card = (props) => {
    return (
        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="box">
                <img src={props.image} class="img-fluid" alt="" />
                <h3>{props.title} </h3>
                <p>{props.desc}</p>
            </div>
        </div>
    );
}

export default Card;