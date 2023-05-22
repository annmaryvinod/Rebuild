import details from "./details";
import SCard from "./SCard";


function createSCard(scard){
    return(
        <SCard
        key = {scard.key}
        cln = {scard.cln}
        dc = {scard.dc}
        para = {scard.para}/>
    )
}


const Services = () => {


    return (
        <section id="services" class="services">

            <div class="container" data-aos="fade-up">

                <header class="section-header">
                    <h2>Why Sponsor Us</h2>
                    <p>Why Sponsor Us</p>
                </header>

                <div class="row gy-4 text-center" style={{height: "550px"}}>

                    {details.map(createSCard)}

                   
                </div>

            </div>

        </section>
    );
}

export default Services;