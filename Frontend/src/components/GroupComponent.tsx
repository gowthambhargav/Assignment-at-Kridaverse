import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type GroupComponentType = {
  whereAreYouLocated?: string;
  loremIpsumDolorSitAmetCon?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  whereAreYouLocated,
  loremIpsumDolorSitAmetCon,
  propPadding,
  propHeight,
  propDisplay,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const whereAreYouStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div
      className="self-stretch rounded-35xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-10 pb-[41px] pr-5 pl-[58px] box-border gap-[19px] max-w-full text-left text-7xl text-black1 font-poppins mq750:pl-[29px] mq750:box-border"
      style={groupDivStyle}
    >
      <div
        className="w-[820px] h-[199px] relative rounded-35xl bg-whitesmoke-100 hidden max-w-full"
        style={rectangleDivStyle}
      />
      <div
        className="relative font-semibold z-[1] mq450:text-2xl"
        style={whereAreYouStyle}
      >
        {whereAreYouLocated}
      </div>
      <div className="w-[703px] relative text-xl text-gray-800 inline-block max-w-full z-[1] mq450:text-base">
        {loremIpsumDolorSitAmetCon}
      </div>
    </div>
  );
};

export default GroupComponent;
