import React from 'react'
import {IconBaseProps} from "react-icons";

import {Container} from "./styles";

interface IMenuProps {
  icon?: React.ComponentType<IconBaseProps>;
}
const MenuItem: React.FC<IMenuProps> = ({ icon: Icon }) => {
  return (
    <Container>
      {Icon && <Icon size={32} />}
    </Container>
  )
}

export default MenuItem;