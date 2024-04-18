import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent2: FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="self-stretch h-[109px] rounded-96xl bg-gray-900 [backdrop-filter:blur(30.4px)] overflow-hidden shrink-0 flex flex-row items-start justify-center py-[36.5px] px-5 box-border gap-[39px] z-[3] text-left text-5xl text-darkslategray-300 font-poppins mq1275:hidden mq450:gap-[19px]">
      <div
      onClick={()=>{
        navigate('/')
      
      }} 
      className="relative font-semibold text-maroon-200 inline-block min-w-[73px] cursor-pointer">
        Home
      </div>
      <div className="w-[191px] flex flex-col items-start justify-start gap-[28.5px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div
          onClick={()=>{
            navigate('/introduction')
          }}
           className="relative font-medium inline-block min-w-[76px] cursor-pointer">
            Page2
          </div>
          <div
          onClick={()=>{
            navigate('/form')
          }} 
          className="relative font-medium inline-block min-w-[76px] whitespace-nowrap cursor-pointer">{`Page3 `}</div>
        </div>
        <div className="w-[79px] flex flex-row items-start justify-start py-0 pr-[3px] pl-[3.5px] box-border">
          <div className="h-4 flex-1 relative rounded-6xs bg-maroon-100" />
        </div>
      </div>
      <div className="relative font-medium inline-block min-w-[78px]">
        Page4
      </div>
      <div className="relative font-medium inline-block min-w-[77px]">
        Page5
      </div>
      <div className="relative font-medium inline-block min-w-[78px]">
        Page6
      </div>
      <div className="relative font-medium inline-block min-w-[76px]">
        Page7
      </div>
    </div>
  );
};

export default FrameComponent2;
