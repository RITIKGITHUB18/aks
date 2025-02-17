import {
  AppleIcon,
  //  FacebookIcon,
  GoogleIcon,
} from "../assets/Images";

const OAuthComponentData = [
  {
    id: 1,
    provider: "google",
    logo: GoogleIcon,
    text: "Continue with Google",
    disabled: false,
  },
  {
    id: 2,
    provider: "apple",
    logo: AppleIcon,
    text: "Continue with Apple",
    disabled: true,
  },

  // {
  //   id: 3,
  //   provider: "facebook",
  //   logo: FacebookIcon,
  //   text: "Continue with Facebook",
  // },
];

export { OAuthComponentData };
