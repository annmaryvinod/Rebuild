const SCard = (props) => {
    return (
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class={props.dc}>
                <i class= {props.cln}></i>
                <h3></h3>
                <p>{props.para}</p>
                <a href="#" class="read-more"><span>Read More</span> <i class="bi bi-arrow-right"></i></a>
            </div>
        </div>
    );
}

export default SCard;