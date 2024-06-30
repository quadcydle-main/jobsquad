
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";


import Testimonials from "@/components/Testimonials";
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
      <Pricingtable />
      <SectionTitle
        title="Don’t just take our word for it!"
      > 
      </SectionTitle>
      <Testimonials />
      <Cta />
    </Container>
  );
}
