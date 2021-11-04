import { Card } from "react-bootstrap"

function Vantagens(){
    return(
        <>
        <div className="vantagens-principal mb-5 mt-5">
            <div className="vantagens">
                <div className="texto-vantagens">
                    <h2>Aenean tempus lorem urna <br/> at rutrum ligula hendrerit vel.</h2>
                    <div className="texto-vantagens-foco">
                        <p><ion-icon name="checkmark"></ion-icon> Cras interdum mauris.</p>
                        <p><ion-icon name="checkmark"></ion-icon> Aliquam erat volutpat.</p>
                        <p><ion-icon name="checkmark"></ion-icon> Vestibulum interdum erat ut nisi maximus lobortis.</p>
                        <p><ion-icon name="checkmark"></ion-icon> Donec aliquet eros a mauris finibus egestas.</p>
                        <p><ion-icon name="checkmark"></ion-icon> Duis ullamcorper commodo tincidunt.</p>
                    </div>
                </div>
            </div>
            <div className="area-cards">
                <div className="primeiros-cards">
                    <Card style={{ width: '18rem' }} className="mb-5">
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="segundo-card">
                    <Card style={{ width: '18rem' }} className="mb-5">
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
        </>
    )
}

export default Vantagens