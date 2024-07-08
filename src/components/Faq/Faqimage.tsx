import Image from "next/image";
import faq from "../../../public/img/faq/faq.png";



const Faq = () => {
    return (


        <div className="relative flex  flex-col lg:flex-row align-center justify-center text-center w-full h-200">
            <div>
                <h1 className="text-3xl pt-10 font-bold lg:p-20 lg:pt-40 lg:text-6xl">Frequently Asked Questioins?</h1>
            </div>
            <div>
                <Image alt="faq" src={faq} className="faqimg"></Image>
            </div>
            <br></br>
        </div>
    );
};

export default Faq;
