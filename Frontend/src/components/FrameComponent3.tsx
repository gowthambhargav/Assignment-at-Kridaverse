import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent3Type = {
  dD?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  dD,
  propFlex,
  propMinWidth,
  propWidth,
  propMinWidth1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const dDStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth1,
    };
  }, [propWidth, propMinWidth1]);

  return (

    <>
    
    
   
     
      <div className="self-stretch rounded-smi box-border flex flex-row items-start justify-start pt-5 px-[29px] pb-[21px] max-w-full z-[2] border-[1px] border-solid border-black1">
                        <input
                          className="w-[197px] [border:none] [outline:none] font-medium font-poppins text-lg bg-[transparent] h-[27px] relative capitalize text-darkslategray-300 text-left inline-block p-0 z-[1]"
                          placeholder="Lorem ipsum dolor sit "
                          type="date"
                        />
                        <div className="h-[72px] w-[575px] relative rounded-smi box-border hidden max-w-full border-[1px] border-solid border-black1" />
                      </div>
    
    </>
  );
};

export default FrameComponent3;
