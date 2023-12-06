import MediaQuery from "react-responsive"
import { useRef } from "react"


interface EmailProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  value: string,
  error: string | null
}

const Email = (props: EmailProps): React.JSX.Element => {

  const yourElement = useRef(null);

  return (
    <form className="flex flex-col mt-[40px] font-Roberto">
      <div className="flex justify-between">
        <label className="text-xs font-bold text-left text-[#242742] mb-[8px]">Email address</label>
        <label className={props.error && yourElement.current !== document.activeElement ? "text-xs font-bold text-right text-[#ff6155]" : "hidden"}>Valid email required</label>
      </div>
      <div className={props.error && yourElement.current !== document.activeElement ? "rounded-lg bg-[#ff6155]/[0.15] border border-[#ff6155] mb-[24px]" : "rounded-lg border border-[#19182b]/25 mb-[24px]"}>
        <input ref={yourElement} value={props.value} onChange={props.handleChange} placeholder="email@company.com" className={props.error && yourElement.current !== document.activeElement ? "rounded-lg text-base text-left text-[#ff6155] pt-[16px] pb-[16px] pl-[24px] w-full bg-[#ff6155]/[0.15]" : "rounded-lg text-base text-left text-[#242742] pt-[16px] pb-[16px] pl-[24px] w-full"} />
      </div>
      <button onClick={props.handleClick} className="rounded-lg bg-[#242742] pt-[18px] pb-[14px] lg:hidden">
        <span className="text-base font-bold text-center text-white font-RobertoBold">Subscribe to monthly newsletter</span>
      </button>
      
      <MediaQuery minWidth={1024}>
        <button onClick={props.handleClick} className="rounded-lg bg-[#242742] pt-[18px] pb-[14px] hover:bg-gradient-to-bl from-[#ff6a3a] to-[#ff527b] hover:shadow-[0px 16px 32px 0 rgba(255,97,85,0.5)]">
          <span className="text-base font-bold text-center text-white font-RobertoBold">Subscribe to monthly newsletter</span>
        </button>
      </MediaQuery>
    </form>
  )
}

export default Email