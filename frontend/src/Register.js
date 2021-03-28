import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {api} from './client'

class Register extends Component {
  constructor() {
    super();
    this.state = {
      Username: '',
      Phone: '',
      Email: '',
      Password: '',
      Group: 'admin'
    }
    this.Email = this.Email.bind(this);
    this.Password = this.Password.bind(this);
    this.Username = this.Username.bind(this);
    this.Password = this.Password.bind(this);
    this.Group = this.Group.bind(this);
    this.Phone = this.Phone.bind(this);
    this.register = this.register.bind(this);
  }
  Email(event) {
    this.setState({ Email: event.target.value })
  }
  Group(event) {
    this.setState({ Group: event.target.value })
  }
  Password(event) {
    this.setState({ Password: event.target.value })
  }
  Phone(event) {
    this.setState({ Phone: event.target.value })
  }
  Username(event) {
    this.setState({ Username: event.target.value })
  }
  register(event) {
    const params = {
        username: this.state.Username,
        password: this.state.Password,
        email: this.state.Email,
        phone: this.state.Phone,
        group: this.state.Group
      }
    api(params, 1, 'register').then((Response) => Response.json())
      .then((Result) => {
        if (Result.Status == 'Success')
                this.props.history.push("/Dashboard");
        else
          alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
      })
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <div class="row" className="mb-2 pageheading">
                      <div class="col-sm-12 btn btn-primary">
                        Sign Up
                        </div>
                    </div>
                    <InputGroup className="mb-3">
                      <Input type="text"  onChange={this.Username} placeholder="Enter User Name" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="text"  onChange={this.Email} placeholder="Enter Email" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="password"  onChange={this.Password} placeholder="Enter Password" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <Input type="text"  onChange={this.Phone} placeholder="Enter Phone" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <Input type="text"  onChange={this.Group} placeholder="Enter Group" />
                    </InputGroup>
                    <Button  onClick={this.register}  color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Register;