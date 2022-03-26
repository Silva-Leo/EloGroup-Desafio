import React, { useState, useEffect } from "react";

import { Button, Modal, Form, InputGroup, FormControl } from "react-bootstrap";
import { ContainerModal } from "./style.modal";

export default function ModalNewLead(props) {

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
          <ContainerModal>
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
            <div>
              Oportunidades
              <table>
                <tr>
                  <th>
                    <input onChange={props.all} type="checkbox" id="AllCheckbox" ></input>
                  </th>
                  <th>Selecionar tudo</th>
                </tr>
                <tr>
                  <th>
                    <input
                      onChange={props.RPA}
                      type="checkbox"
                      value="RPA"
                      className="check"
                    ></input>
                  </th>
                  <th>RPA</th>
                </tr>
                <tr>
                  <th>
                    <input
                      onChange={props.product}
                      type="checkbox"
                      value="Produto Digital"
                      className="check"
                    ></input>
                  </th>
                  <th>Produto Digital</th>
                </tr>
                <tr>
                  <th>
                    <input
                      onChange={props.analitycs}
                      type="checkbox"
                      value="Analytics"
                      className="check"
                    ></input>
                  </th>
                  <th>Analytics</th>
                </tr>
                <tr>
                  <th>
                    <input
                      onChange={props.BPM}
                      type="checkbox"
                      value="BPM"
                      className="check"
                    ></input>
                  </th>
                  <th>BPM</th>
                </tr>
              </table>
            </div>
          </ContainerModal>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setLgShow(false)}>
            Fechar
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}> {/*function vai mandar para LocalStorage} */}

            Adicionar Lead
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
