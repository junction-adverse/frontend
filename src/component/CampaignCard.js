import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import CampaignContent from "./CampaignContent";
import { useState } from "react";


const CampaignCard = ({tagline, campaignTitle, brand, slogan, img, icon }) => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  let description = "";

    if (brand === "Nocco") {
        description = "Create a 15-30 second Youtube Shorts video of you staying productive with NOCCO and post it on YouTube. It might be you having a NOCCO for your morning workout or a deep study session at night. Feel free to get creative! The video must clearly show the NOCCO brand for at least 3 seconds in the video."
    } else if (brand === "Vitamin Well") {
        description = "This challenge is open to those over the age of 18 as of submission date."
    } else if (brand === "Eigar") {
        description = "This challenge is open to those over the age of 18 as of submission date."
    }
  
  return (
    <>
    <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
            <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
            {tagline}
            </Text>
            <Text h3 color="white">
            {campaignTitle}
            </Text>
        </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
        <Card.Image
            src={img}
            objectFit="cover"
            width="100%"
            height="100%"
            alt="Relaxing app background"
        />
        </Card.Body>
        <Card.Footer
        isBlurred
        css={{
            position: "absolute",
            bgBlur: "#0f111466",
            borderTop: "$borderWeights$light solid $gray800",
            bottom: 0,
            zIndex: 1,
        }}
        >
        <Row>
            <Col>
            <Row>
                <Col span={3}>
                <Card.Image
                    src={icon}
                    css={{ bg: "black", br: "50%" }}
                    height={40}
                    width={40}
                    alt="Breathing app icon"
                />
                </Col>
                <Col>
                <Text color="#d1d1d1" size={12}>
                    {brand}
                </Text>
                <Text color="#d1d1d1" size={12}>
                    {slogan}
                </Text>
                </Col>
            </Row>
            </Col>
            <Col>
            <Row justify="flex-end">
                <Button
                flat
                auto
                rounded
                css={{ color: "#94f9f0", bg: "#94f9f026" }}
                onClick={handler}
                >
                <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                >
                    View Campaign
                </Text>
                </Button>
            </Row>
            </Col>
        </Row>
        </Card.Footer>
    </Card>
    {visible && <CampaignContent brand={brand} description={description} setV={setVisible} />}
    </>
  )
}

export default CampaignCard;
