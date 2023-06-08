import React from 'react'
import styled from '@emotion/styled'
import { center, greenPrimary600, greenPrimary700, transition200 } from '../../global/variables/variables';
import { Link } from 'react-router-dom';
import logo from '../../assets/imgs/green_loop.png'
import { FaHome, FaCartPlus, FaUserAlt } from "react-icons/fa";

const MenuStyled = styled.header`
  ${center}
  justify-content: space-between;
  img {
    width: 50px;
    margin: 40px 10px 20px 10px;
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
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">
            <FaHome className='icon' />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <FaCartPlus className='icon' />
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FaUserAlt className='icon'/>
          </Link>
        </li>
      </ul>
    </MenuStyled>
  );
}

export default Menu