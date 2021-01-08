import React from "react";
import {FiAlignLeft, FiPhone, FiMessageSquare,FiUser, FiMail} from "react-icons/fi";

import MenuItem from "./components/menu-item";

import {Container, Containermenu} from './styles';

interface CountdownProps {}

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({}) => {
  return (
    <Container className="teste">
      <Containermenu>
        <MenuItem icon={FiAlignLeft} />
        <MenuItem icon={FiUser} />
        <MenuItem icon={FiMessageSquare} />
        <MenuItem icon={FiPhone} />
        <MenuItem icon={FiMail} />
      </Containermenu>
      <div>
        oi
      </div>
    </Container>
  );
};

Countdown.schema = {
  title: "editor.countdown.title",
  description: "editor.countdown.description",
  type: "object",
  properties: {},
};

export default Countdown;
