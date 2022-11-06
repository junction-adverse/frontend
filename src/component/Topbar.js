import React from "react";
import { Navbar, Text } from "@nextui-org/react";

export default function Topbar({ account, signin, signout }) {
  
  return (
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            ADVERSE
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          {!account && <Navbar.Link color="inherit" onClick={signin}>
            Login
          </Navbar.Link>}
          {account && 
            <Navbar.Link color="inherit" onClick={signout}>
              Logout
            </Navbar.Link>
          }
        </Navbar.Content>
      </Navbar>
  )
}
