
import {Container}  from '../../components/Container';
import Compfaq from '../../components/Faq/Compfaq';
import Faqimage from '../../components/Faq/Faqimage';

const Faq = () => {
  return (
      <div className='containbg'>
        <Container>
        
          <Faqimage/>
          <Compfaq/>
        
        
        </Container>
      </div>
  );
};

export default Faq;
