import React from "react";
import { SIGN_IN_LOGO } from "../../utils/constant";
import { Link } from "react-router-dom";
import { StyledLogo } from './style'

class Logo extends React.PureComponent {
  render() {
    const { size, link } = this.props;
    return (
      <StyledLogo size={size} link={link}>
          {link ? <Link to={link}><b>&lt; StackUI /&gt;</b></Link> : <><b>&lt; StackUI /&gt;</b></>}
      </StyledLogo>
    );
  }
}
export default Logo;
