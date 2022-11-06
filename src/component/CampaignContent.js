import React from "react";
import { useState } from "react";
import { Modal, Input, Button, Text } from "@nextui-org/react";

export default function CampaignContent({brand, description, setV}) {  
  const [visible, setVisible] = useState(true);

  const closeHandler = () => {
    setV(false);
    setVisible(false);
    console.log("closed");
  };

  const handleAd = async () => {
    closeHandler();
  }

  return (
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            {brand}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text>
            {description}
          </Text>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Ad Name"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="YouTube API Key"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="YouTube Video URL (Must be public)"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto onClick={handleAd}>
            Submit Ad
          </Button>
        </Modal.Footer>
      </Modal>
  );
}
