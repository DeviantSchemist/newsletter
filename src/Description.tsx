import Icon from "./assets/images/icon-list.svg"

const Description = () => {
  return (
    <div className="w-[327px] h-[276px]">
      <p className="w-[327px] left-0 top-0 text-[40px] font-bold text-left text-[#242742] mb-[24px]">
        Stay updated!
      </p>
      <p className="w-[327px] left-0 top-16 text-base text-left text-[#242742] mb-[24px]">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <div className="w-[327px] h-[140px]">
        <div className="w-[327px] h-12 flex items-start mb-[10px]">
          <img src={Icon} alt="" className="mr-[16px] pt-[4px]" />
          <p className="w-[290px] left-[37px] top-[136px] text-base text-left text-[#242742]">
            Product discovery and building what matters
          </p>
        </div>
        <div className="w-[327px] h-12 flex items-start mb-[10px]">
          <img src={Icon} alt="" className="mr-[16px] pt-[4px]" />
          <p className="w-[290px] left-[37px] top-[194px] text-base text-left text-[#242742]">
            Measuring to ensure updates are a success
          </p>
        </div>
        <div className="w-[327px] h-6 flex items-center mb-[10px]">
          <img src={Icon} alt="" className="mr-[16px]" />
          <p className="w-[290px] left-[37px] top-[252px] text-base text-left text-[#242742]">
            And much more!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Description