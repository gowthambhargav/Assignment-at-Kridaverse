import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";

const FrameComponent: FunctionComponent = () => {
  return (
    <header className="h-[146px] flex flex-row items-start justify-start py-0 px-[7px] box-border top-[0] z-[99] sticky max-w-full text-left text-5xl text-black1 font-poppins">
      <div className="self-stretch flex flex-row items-start justify-start gap-[79px] max-w-full mq450:gap-[20px] mq750:gap-[39px]">
        <div className="self-stretch w-[140px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/6ea9d8d5ac75d9c5d7a2a567c1e2bbdfremovebgpreview-3@2x.png"
          />
        </div>
        <div className="w-[61px] flex flex-col items-start justify-start py-0 pr-[17px] pl-0 box-border">
          <b className="self-stretch relative">
            <p className="m-0">V</p>
            <p className="m-0 text-firebrick">L</p>
            <p className="m-0 text-firebrick">S</p>
            <p className="m-0">S</p>
          </b>
        </div>
        <FrameComponent1 />
      </div>
    </header>
  );
};

export default FrameComponent;
