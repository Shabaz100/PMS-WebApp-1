import React, { useContext, useState } from "react";
import {
  Avatar,
  CTAButton,
  InputField,
  PMSHeading,
} from "Components/UI Components/Atoms";
import "./style.scss";
import { GlobalContext } from "Context/context";
import { USER_LOGIN } from "Context/types";
import { useNavigate } from "react-router-dom";

const LoginPageTemplate = () => {
  const navigate = useNavigate();

  let { dispatch } = useContext(GlobalContext);

  const [loading, setLoading] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const loginActionHandler = async () => {
    setLoading("loading");
    if (passwordVal === "Shabaz Mahamood") {
      await dispatch({
        type: USER_LOGIN,
      });
      navigate("/");
    } else {
      setLoading("primary");
      setPasswordError(true);
    }
  };

  return (
    <div className="main">
      <div className="loginSection">
        <PMSHeading color="#ff7700" />
        <div className="formSection ">
          <div className="form">
            
            <Avatar width="80" />
            <img src="https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-6/441550465_1007505204230131_2665013908217380100_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CitlZqtcg3YQ7kNvgFURBZt&_nc_ht=scontent.fcgp17-1.fna&oh=00_AYBht10ZvhnASyDle2Axc_BWT2jCWLgyOF1U4UYlD0pJBQ&oe=66567F05">

            </img>
            <p className="author">@shabazmahamood</p>
            <InputField
              inputValue={passwordVal}
              onChangeHandler={(e) => {
                setPasswordVal(e.target.value);
              }}
              fullWidth
              style={{ marginTop: "60px" }}
              placeHolder="Hint: Shabaz Mahamood"
            />
            {passwordError && (
              <p
                style={{ width: "100%", padding: "5px 0px", color: "#FF6666" }}
              >
                !Please type: Shabaz Mahamood
              </p>
            )}
            <CTAButton
              variant={loading}
              clickHandler={loginActionHandler}
              fullWidth
              buttonLabel="Sign in"
              style={{ marginTop: "10px" }}
            />
          </div>
          <div className="relatedImage">
            <img src={process.env.PUBLIC_URL + "/Assets/Images/security-vector-svg.svg"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPageTemplate;
