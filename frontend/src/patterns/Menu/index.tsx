import React from "react";
import styled from "@emotion/styled";
import {
  center,
  greenPrimary600,
  greenPrimary700,
  transition200,
} from "../../global/variables/variables";
import logo from "../../assets/imgs/green_loop.png";
import { FaHome, FaCartPlus, FaUserAlt } from "react-icons/fa";
import Link from "../../components/Link";

const MenuStyled = styled.header`
  ${center}
  justify-content: space-between;
  .logo {
    ${center}
    width:60px;
    height: 60px;
    background: white;
    margin: 40px 10px 20px 10px;
    border-radius: 100%;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.347);
  }
  .active {
    background: ${greenPrimary600};
    box-shadow: 0px 0px 10px ${greenPrimary700};
  }
  img {
    width: 40px;
    margin: -5px 0px 0px 0px;
  }
  ul {
    ${center}
    li {
      ${transition200}
      border-right:1px solid ${greenPrimary600};
      &:hover {
        background: ${greenPrimary600};
        box-shadow: 0px 0px 10px ${greenPrimary700};
      }
      a {
        ${center}
        width: 60px;
        height: 60px;
      }
      .icon {
        font-size: 24px;
        color: aliceblue;
      }
      &:nth-child(1) {
        border-left: 1px solid ${greenPrimary600};
      }
    }
  }
`;

const Menu = () => {
  return (
    <MenuStyled id="menu">
      <li className="logo">
        <img src={logo} alt="logo" />
      </li>
      <ul>
        <Link to="/">
          <FaHome className="icon" />
        </Link>

        <Link to="/cart">
          <FaCartPlus className="icon" />
        </Link>

        <Link to="/login">
          <FaUserAlt className="icon" />
        </Link>
      </ul>
    </MenuStyled>
  );
};

export default Menu;
