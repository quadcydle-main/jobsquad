
import { Container } from '../../components/Container';
import {Form} from '../../components/Contact/Form';

const Contact = () => {
  return (
    <div className='containbg'>
      <Container>
        <div className="w-fit border-b border-custom-blue p-5 mx-auto">
          <h1 className="text-custom-blue text-center font-bold text-3xl lg:text-5xl">Were here to help</h1>
        </div>
        <br></br>
        <Form />

       

      </Container>
    </div>
  );
};

export default Contact;
