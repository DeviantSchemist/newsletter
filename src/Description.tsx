import Icon from "./assets/images/icon-list.svg"

const Description = (): React.JSX.Element => (
  <div className="font-Roberto">
    <p className="w-[327px] left-0 top-0 lg:left-80 lg:top-[316px] text-[40px] lg:text-[53px] font-bold text-left text-[#242742] mb-[24px] font-RobertoBold">
      Stay updated!
    </p>
    <p className="w-[327px] lg:w-[376px] left-0 lg:left-80 top-16 lg:top-[396px] text-base text-left text-[#242742] mb-[24px]">
      Join 60,000+ product managers receiving monthly updates on:
    </p>
    <div className="w-[327px] h-[140px] lg:w-[376px] lg:h-[92px]">
      <div className="w-[327px] lg:w-[376px] h-12 lg:h-6 flex items-start mb-[10px]">
        <img src={Icon} alt="" className="mr-[16px] pt-[4px]" />
        <p className="w-[290px] lg:w-[339px] left-[37px] lg:left-[357px] top-[136px] lg:top-[468px] text-base text-left text-[#242742]">
          Product discovery and building what matters
        </p>
      </div>
      <div className="w-[327px] lg:w-[376px] h-12 lg:h-6 flex items-start mb-[10px]">
        <img src={Icon} alt="" className="mr-[16px] pt-[4px]" />
        <p className="w-[290px] lg:w-[339px] left-[37px] lg:left-[357px] top-[194px] lg:top-[502px] text-base text-left text-[#242742]">
          Measuring to ensure updates are a success
        </p>
      </div>
      <div className="w-[327px] lg:w-[376px] h-6 flex items-center mb-[10px]">
        <img src={Icon} alt="" className="mr-[16px]" />
        <p className="w-[290px] lg:w-[339px] left-[37px] lg:left-[357px] top-[252px] lg:top-[536px] text-base text-left text-[#242742]">
          And much more!
        </p>
      </div>
    </div>
  </div>
)

export default Description