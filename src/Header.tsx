import MobileLogo from "./assets/images/illustration-sign-up-mobile.svg";
import DesktopLogo from "./assets/images/illustration-sign-up-desktop.svg";
import MediaQuery from "react-responsive";

const Header = (): React.JSX.Element => (
  <>
    <img src={MobileLogo} alt="Mobile Banner" className="block lg:hidden" />
    <MediaQuery minWidth={1024}>
      <img src={DesktopLogo} alt="Desktop Banner" className="block lg:pt-[24px] lg:pb-[24px]" />
    </MediaQuery>
  </>
)

export default Header