import SuccessLogo from "./assets/images/icon-success.svg";
import MediaQuery from "react-responsive";

interface ThanksProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
  text: string
}

const Thanks = (props: ThanksProps): React.JSX.Element => {

  return (
    <div className="lg:pt-[280px] lg:pb-[280px] lg:pl-[468px] lg:pr-[468px] lg:bg-[#36384D] lg:h-screen lg:flex lg:justify-center">
      <div className="lg:bg-white lg:rounded-[36px] pl-[24px] lg:pl-[64px] pr-[24px] lg:pr-[64px] pt-[149px] lg:pt-[48px] pb-[40px] lg:pb-[64px] flex flex-col font-Roberto items-start h-screen justify-between lg:w-[504px] lg:h-[520px] lg:justify-normal">
        <div className="">
          <img src={SuccessLogo} alt="Successful submission" className="mb-[40px]" />
          <p className="font-RobertoBold text-[40px] font-bold text-left text-[#242742] mb-[24px] leading-10">Thanks for subscribing!</p>
          <p className="text-base text-left text-[#242742] lg:mb-[40px]">
            A confirmation email has been sent to <span className="font-bold font-RobertoBold">{props.text}</span>.
            Please open it and click the button inside to confirm your subscription
          </p>
        </div>
        <button onClick={props.handleClick} className="rounded-lg bg-[#242742] pt-[18px] pb-[14px] w-[312px] lg:hidden">
          <span className="text-base font-bold text-center text-white font-RobertoBold">Dismiss message</span>
        </button>

        <MediaQuery minWidth={1024}>
          <button onClick={props.handleClick} className="rounded-lg bg-[#242742] pt-[18px] pb-[14px] pl-[125px] pr-[124px] hover:bg-gradient-to-bl from-[#ff6a3a] to-[#ff527b] hover:shadow-[0px 16px 32px 0 rgba(255,97,85,0.5)]">
            <span className="text-base font-bold text-center text-white font-RobertoBold">Dismiss message</span>
          </button>
        </MediaQuery>
      </div>
    </div>
  )
}

export default Thanks