import React from "react";
import {FiAlignLeft, FiPhone, FiMessageSquare,FiUser, FiMail} from "react-icons/fi";

import MenuItem from "./components/menu-item";

import {Container, Containerlistitem, Containerchildren} from './styles';

interface CountdownProps {}

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({children}) => {
  return (
    <Container className="teste">
      <Containerlistitem>
        <MenuItem icon={FiAlignLeft} />
        <MenuItem icon={FiUser} />
        <MenuItem icon={FiMessageSquare} />
        <MenuItem icon={FiPhone} />
        <MenuItem icon={FiMail} />
      </Containerlistitem>
      <Containerchildren>
        {children}
      </Containerchildren>
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
