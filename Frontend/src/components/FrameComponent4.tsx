import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent4Type = {
  taluk?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  taluk,
  propMinWidth,
}) => {
  const talukStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-left text-base text-darkslategray-100 font-poppins">
      <div
        className="relative font-medium inline-block min-w-[44px] z-[1]"
        style={talukStyle}
      >
        {taluk}
      </div>
      <div className="self-stretch rounded-smi box-border flex flex-row items-start justify-between pt-5 pb-[21px] pr-[31px] pl-[22px] max-w-full gap-[20px] z-[2] border-[1px] border-solid border-black1">
        <input
          className="w-[400px] [border:none] [outline:none] font-medium font-poppins text-lg bg-[transparent] h-[27px] relative capitalize text-darkslategray-200 text-left inline-block p-0 z-[1]"
          placeholder="Lorem ipsum dolor sit "
          type="text"
        />
        <div className="h-[72px] w-[575px] relative rounded-smi box-border hidden max-w-full border-[1px] border-solid border-black1" />
     
      </div>
    </div>
  );
};

export default FrameComponent4;
