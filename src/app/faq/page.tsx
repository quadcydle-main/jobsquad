
import {Container}  from '../../components/Container';
import Compfaq from '../../components/Faq/Compfaq';
import Faqimage from '../../components/Faq/Faqimage';

const Faq = () => {
  return (
      <div className='containbg'>
        <Container>
        
          <Faqimage/>
          <div className="bg-gray-300 h-px lg:mt-10 w-full w-80 lg:w-[70%] mx-auto my-4"></div>
          <Compfaq/>
        
        
        </Container>
      </div>
  );
};

export default Faq;
