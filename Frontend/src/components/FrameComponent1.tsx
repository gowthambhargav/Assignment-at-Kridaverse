import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className="w-[1094px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border max-w-full text-left text-5xl text-darkslategray-300 font-poppins mq1275:w-0">
      <FrameComponent2 />
    </div>
  );
};

export default FrameComponent1;
