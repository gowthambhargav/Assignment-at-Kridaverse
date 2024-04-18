import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent5Type = {
  fatherHusbandName?: string;
  loremIpsumDolorSiPlacehol?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  fatherHusbandName,
  loremIpsumDolorSiPlacehol,
  propDisplay,
  propMinWidth,
  propWidth,
}) => {
  const fatherHusbandNameStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const loremIpsumDolorStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-left text-base text-darkslategray-100 font-poppins">
      <div
        className="relative font-medium z-[1]"
        style={fatherHusbandNameStyle}
      >
        {fatherHusbandName}
      </div>
      <div className="self-stretch rounded-smi box-border flex flex-row items-start justify-start pt-5 px-[22px] pb-[21px] max-w-full z-[2] border-[1px] border-solid border-black1">
        <input
          className="w-[400px] [border:none] [outline:none] font-medium font-poppins text-lg bg-[transparent] h-[27px] relative capitalize text-darkslategray-200 text-left inline-block p-0 z-[1]"
          placeholder={loremIpsumDolorSiPlacehol}
          type="text"
          style={loremIpsumDolorStyle}
        />
      </div>
    </div>
  );
};

export default FrameComponent5;
