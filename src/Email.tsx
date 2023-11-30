import MediaQuery from "react-responsive"

const Email =  (props) => {


  return (
    <form className="flex flex-col mt-[40px] font-Roberto">
      <label className="text-xs font-bold text-left text-[#242742] mb-[8px]">Email address</label>
      <div className="rounded-lg border border-[#19182b]/25 mb-[24px]">
        <input className="rounded-lg text-base text-left text-[#242742] pt-[16px] pb-[16px] pl-[24px] w-full" placeholder="email@company.com" />
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