
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";


import { Testimonials } from "@/components/Testimonials";
import { Middlesection } from "@/components/Middlesection";
import { Cta } from "@/components/Cta";
import { Demo }   from '@/components/Demo';
import Pricingtable from "@/components/Pricing";



export default function Home() {
  return (
    <Container>
      <Hero />
      <div className="border border-gray-300 border-opacity-50 w-4/5 mx-auto"></div>

      <SectionTitle
        title=" Automate your job application process"
        
      >
        <div className="pt-2 text-black">
          Focus on what matters most – your skills and experience. Let Job Squad handle
          the repetitive task of filling out application forms, so you can concentrate on
          advancing your career.
        </div>
      </SectionTitle>
      <Demo />
    

      <Middlesection />
      <SectionTitle 
        title="Sit back and relax while jOBSquard does the work for you!"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      



      


      <SectionTitle title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Pricingtable />
      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      <Cta />
    </Container>
  );
}
