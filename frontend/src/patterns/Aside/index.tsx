import React from "react";
import styled from "@emotion/styled";
import { center, centerColumn, greenPrimary600, greenPrimary700, transition200 } from "../../global/variables/variables";
import { Link } from "react-router-dom";
import { MdPayments } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import {FaBoxOpen} from 'react-icons/fa'
import {BsBagHeartFill} from 'react-icons/bs'
const AsideStyled = styled.aside`
  ${center}
  ul {
    ${centerColumn}
    padding: 0px 12px;
    li {
      ${transition200}
      border-bottom:1px solid ${greenPrimary600};
      width: 60px;
      a{
        ${center}
        width:100%;
        height:60px;
      }
      &:hover {
        background: ${greenPrimary600};
        box-shadow: 0px 0px 10px ${greenPrimary700};
      }
      .icon {
        font-size: 24px;
        color: aliceblue;
      }
      &:nth-child(1) {
        border-top: 1px solid ${greenPrimary600};
      }
    }
  }
`;
const Aside = () => {
  return (
    <AsideStyled id="aside">
      <ul>
        <li>
          <Link to="/notification">
            <IoMdNotifications className="icon" />
          </Link>
        </li>
        <li>
          <Link to="/pay">
            <MdPayments className="icon" />
          </Link>
        </li>
        <li>
          <Link to="/delivery">
            <FaBoxOpen className="icon" />
          </Link>
        </li>
        <li>
          <Link to="/favorite">
            <BsBagHeartFill className="icon" />
          </Link>
        </li>
      </ul>
    </AsideStyled>
  );
};

export default Aside;
