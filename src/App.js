import './App.css';
import Nav from './component/Nav';

import { useState } from "react";
import { Magic } from "magic-sdk";
import { ConnectExtension } from "@magic-ext/connect";
import Web3 from "web3";
import TeamPicture from './component/TeamPicture';
import CampaignCard from './component/CampaignCard';
import CampaignContent from './component/CampaignContent';

import Topbar from './component/Topbar';
import React from 'react';
import { Grid, Container, Modal } from '@nextui-org/react';

const magic = new Magic("pk_live_73AAE8A5F81B1CF3", {
  network: "goerli",
  locale: "en_US",
  extensions: [new ConnectExtension()]
});
const web3 = new Web3(magic.rpcProvider);

export default function App() {
  const [account, setAccount] = useState(null);

  //Modal State
  const [visible, setVisible] = useState(false);
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");

  const signin = async () => {
    web3.eth
      .getAccounts()
      .then((accounts) => {
        setAccount(accounts?.[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signout = async () => {
    await magic.connect.disconnect().catch((e) => {
      console.log(e);
    });
    setAccount(null);
  };

  const handleCampaignContent = () => {
    setVisible(true);
    setBrand("Nocco");

    if (brand === "Nocco"){
      setDescription("yolo")
    }

    if (brand === "Vitamin Well"){
      setDescription("YOLO")
    }

    if (brand === "Eigar"){
      setDescription("WAGMI")
    }
  }

  return (
    <Container>
      <Topbar account={account} signin={signin} signout={signout} />
      {/* <TeamPicture /> */}
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} sm={4}>
          <CampaignCard tagline="Time to Focus" campaignTitle="Hacker Campaign" brand="Nocco" slogan="No Carbs Company" img="https://mir-s3-cdn-cf.behance.net/project_modules/fs/6a737c49328847.58b16b556dfca.jpg" icon="https://mir-s3-cdn-cf.behance.net/projects/404/9bd641143775165.Y3JvcCwyMTA4LDE2NDgsMCwyMTk.png" click={handleCampaignContent} />
        </Grid>
        <Grid xs={12} sm={4}>
          <CampaignCard tagline="Limitless Harmony" campaignTitle="Running Campaign" brand="Vitamin Well" slogan="Elevate" img="https://trivarga.com/app/uploads/2021/06/Vitamin-Well-Markenbild-1680x840-2.jpg" icon="https://www.vitaminwell.com/wp-content/uploads/2016/06/1465998939.jpg" click={handleCampaignContent} />
        </Grid>
        <Grid xs={12} sm={4}>
          <CampaignCard tagline="LFG" campaignTitle="Time Traveler Campaign" brand="Eigar" slogan="Scale your web3 development" img="https://img.freepik.com/premium-photo/dark-gold-background-abstract-figure-luxurious-golden-shapes-black-background-gold-waves-metal-lines-elegant-background-geometric-design-3d-render-3d-illustration_99433-7421.jpg" icon="https://media-exp1.licdn.com/dms/image/C4D0BAQHlDCeAFV5W3g/company-logo_200_200/0/1650631729000?e=2147483647&v=beta&t=yIiXmyT8g881DHO0Qjalf3XNlH7awZo4QgAfTzQmPgE" click={handleCampaignContent} />
        </Grid>
      </Grid.Container >
      {/* <CampaignContent visible={visible} setVisible={setVisible} brand={brand} description={description} /> */}
    </Container>
  );
}
