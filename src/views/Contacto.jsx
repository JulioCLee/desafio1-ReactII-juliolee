import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Contacto = () => {
    return (
        <Form className='form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <h2>Cuentanos, ¿en que te podemos ayudar?</h2>
                <Form.Label>Correo:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="danger" type="submit">
                Enviar
            </Button>
        </Form>
    );
}


export default Contacto