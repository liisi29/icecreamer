import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export const texts = {
  terms: "Terms and conditions",
  noIcecream: "No icecream will be served!",
};

export default function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>{texts.noIcecream}</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      <OverlayTrigger placement="right" overlay={popover}>
        <span>
          I agree to <span style={{ color: "blue" }}> {texts.terms}</span>
        </span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tcChecked}>
        Confirm order
      </Button>
    </Form>
  );
}
