import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Avatar, LogoutButton } from "Components/UI Components/Atoms";
import { Navlinks } from "Components/UI Components/Molecules";
import { GlobalContext } from "Context/context";
import {
  MOBILE_SIDEBAR_SLIDE_DEFAULT,
  MOBILE_SIDEBAR_SLIDE_OFF,
  USER_LOGOUT,
} from "Context/types";
import { useNavigate } from "react-router-dom";
const SideBar = () => {
  const navigate = useNavigate();
  let { state, dispatch } = useContext(GlobalContext);
  const {
    ComponentControl: { mobileSideBar },
  } = state;
  const [sideBarShow, setideBarShow] = useState("");

  useEffect(() => {
    dispatch({ type: MOBILE_SIDEBAR_SLIDE_DEFAULT });
  }, []);

  useEffect(() => {
    setideBarShow(mobileSideBar);
  }, [mobileSideBar]);

  return (
    <div className={`sideBar_parent ${sideBarShow}`}>
      <div className={`sidebar`} tabIndex="-1">
        <div className="user_info">
        <img src="https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-6/441550465_1007505204230131_2665013908217380100_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CitlZqtcg3YQ7kNvgFURBZt&_nc_ht=scontent.fcgp17-1.fna&oh=00_AYBht10ZvhnASyDle2Axc_BWT2jCWLgyOF1U4UYlD0pJBQ&oe=66567F05" alt="avatar" width="50" height="50" style="border-radius: 50%; border-width: 4px; border-color: rgb(255, 255, 255); border-style: solid;">
      </img>
      <p class="user_name">@shabazmahamood</p>
        </div>
        <Navlinks />
        <div className="logoutButton">
          <LogoutButton
            onClickHandler={async () => {
              await dispatch({
                type: USER_LOGOUT,
              });
              navigate("/");
            }}
          />
        </div>
      </div>
      <div
        className="side-sibling"
        onClick={() => {
          dispatch({ type: MOBILE_SIDEBAR_SLIDE_OFF });
        }}
      ></div>
    </div>
  );
};

export default SideBar;
