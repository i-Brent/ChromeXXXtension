import React from 'react';
import { Card, CardImg, CardBody, Container,
  CardTitle, CardSubtitle, Row } from 'reactstrap';

class Attachments extends React.Component{
  render(){
    return (
      <Container>
        <Card>
          <Row>
          <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image left" />
          <CardBody>
            <CardTitle>Herbivores, Omnivores and Carnivores of California</CardTitle>
            <CardSubtitle>Google Forms</CardSubtitle>
          </CardBody>
          </Row>
        </Card>
        <Card>
          <Row>
          <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>SpeciesListMay2016.pdf</CardTitle>
            <CardSubtitle>PDF</CardSubtitle>
          </CardBody>
          </Row>
        </Card>
        <Card>
          <Row>
          <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Herbivores, Omnivores and Carnivores of California (Responses)</CardTitle>
            <CardSubtitle>Google Sheets</CardSubtitle>
          </CardBody>
          </Row>
        </Card>
      </Container>
    )
  }
}

export default Attachments
