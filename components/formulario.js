import {Form, FormGroup, FormLabel, FormText, Button, Row, Col, InputGroup} from 'react-bootstrap'
import {useState} from 'react'
import Script from 'next/script';

    function Formulario() {
        const [validated, setValidated] = useState(false);
      
        const handleSubmit = (event) => {
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
      
          setValidated(true);
        }
        

    return(
        <>
            <div className="container mt-5 mb-5 area-form">
                <Form action="https://formsubmit.co/junior@comconteudo.com.br" method="POST" name="mc-embedded-subscribe-form" class="validate" target="_blank" noValidate validated={validated} onSubmit={handleSubmit} className="formulario">
                    <Row className="mb-3">

                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control required type="text" placeholder="Nome" defaultValue="" name="FNAME" />
                            <Form.Control.Feedback>Correto!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Sobrenome</Form.Label>
                            <Form.Control required type="text" placeholder="Sobrenome" defaultValue="" name="FSUBNAME" />
                            <Form.Control.Feedback>Correto!</Form.Control.Feedback>
                        </Form.Group> 
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                            <Form.Label>E-mail</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control type="email" placeholder="E-mail" aria-describedby="inputGroupPrepend" required  name="EMAIL"/>
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, insira um e-mail.
                                    </Form.Control.Feedback>
                                </InputGroup>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Celular</Form.Label>
                            <Form.Control type="text" placeholder="(xx) xxxxx-xxxx" required id="cel" name="PHONE"/>
                            <Form.Control.Feedback type="invalid">
                                Insira o seu número de telefone
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    
                    <Button type="submit" className="btn-enviar">Enviar</Button>
                </Form>
            </div>
            <div>
                <hr className="linha-form"/>
            </div>

            <Script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></Script>
            <Script type='text/javascript' src="../scripts/script-email.js"/>
            
        </>
    )
}

export default Formulario

