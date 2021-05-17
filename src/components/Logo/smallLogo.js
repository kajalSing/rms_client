import React from "react";
import { Link } from "react-router-dom";
import { StyledLogo } from './style'

class SmallLogo extends React.PureComponent {
  render() {
    const { size, link } = this.props;
    return (
      <StyledLogo size={size} link={link}>
          {link ? <Link to={link}><b>&lt; StackUI /&gt;</b></Link> : <><b>&lt; S /&gt;</b></>}
      </StyledLogo>
    );
  }
}
export default SmallLogo;
