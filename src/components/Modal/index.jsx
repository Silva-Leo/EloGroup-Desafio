import React, { useState, useEffect } from "react";

import { Button, Modal, Form, InputGroup, FormControl } from "react-bootstrap";

export default function ModalNewLead(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setLgShow(true)}>
        Novo Lead (+)
      </Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>EloGroup | Adicionar novo Lead </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form onSubmit={props.save}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o nome"
                  onChange={props.Nome}
                  value={props.name}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Telefone</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="+99 (99) 99999-9999 "
                  onChange={props.Tel}
                  value={props.phone}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  onChange={props.Email}
                  value={props.Mail}
                  required
                />
              </Form.Group>
            </Form>
          </div>
          <div>
            Oportunidades
            <table>
              <tr>
                <th>
                  <input
                    // id="AllCheckbox"
                    onChange={props.all}
                    type="checkbox"
                  ></input>
                </th>
                <th>Selecionar tudo</th>
              </tr>
              <tr>
                <th>
                  <input
                    // className="check"
                    onChange={props.RPA}
                    type="checkbox"
                    value="RPA"
                  ></input>
                </th>
                <th>RPA</th>
              </tr>
              <tr>
                <th>
                  <input
                    // className="check"
                    onChange={props.product}
                    type="checkbox"
                    value="Produto Digital"
                  ></input>
                </th>
                <th>Produto Digital</th>
              </tr>
              <tr>
                <th>
                  <input
                    // className="check"
                    onChange={props.analitycs}
                    type="checkbox"
                    value="Analytics"
                  ></input>
                </th>
                <th>Analytics</th>
              </tr>
              <tr>
                <th>
                  <input
                    // className="check"
                    onChange={props.BPM}
                    type="checkbox"
                    value="BPM"
                  ></input>
                </th>
                <th>BPM</th>
              </tr>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setLgShow(false)}>
            Fechar
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Adicionar Lead
          </Button>
          {/*function vai mandar para LocalStorage} */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
