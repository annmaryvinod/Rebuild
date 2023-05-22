import About from "./main/About";
import Contact from "./main/Contact";
import Faq from "./main/Faq";
import Pricing from "./main/Pricing";
import Prize from "./main/Prize";
import Services from "./main/Services";
import Sponsors from "./main/Sponsors";
import Value from "./main/Value";

const Main = () => {
    return (
        <main id="main">

            <About/>
            <Value/>
            <Prize/>
           
            <Faq/>
            <Sponsors/>
            <Contact/>
            <Services/>

        </main>

    );
}

export default Main;