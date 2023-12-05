import Form from 'react-bootstrap/Form';
import '../../registration/Registration.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className='container'>
        <div className='form-wrapper'>   
        <Form validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
            required
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
        />
        <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and numbers,
            and must not contain spaces, special characters, or emoji.
        </Form.Text>
        </Form.Group>
        <Button variant="primary">Submit</Button>{' '}
        </Form>
        </div>
    </div>
    
  );
}

export default login;