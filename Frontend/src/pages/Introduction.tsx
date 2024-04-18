import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent6";
import GroupComponent from "../components/GroupComponent";

const Introduction: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[42px] px-2 pb-0 box-border gap-[34px] leading-[normal] tracking-[normal] text-left text-21xl text-black1 font-poppins mq750:gap-[17px]">
      <div className="w-[173px] h-[1251px] !m-[0] absolute top-[-175px] right-[118px] rounded-29xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.12))] shadow-[7px_4px_106.8px_rgba(0,_0,_0,_0.12)] [backdrop-filter:blur(25.4px)] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[1250px] px-14 pb-0 box-border z-[1]">
        {/* <h2 className="m-0 h-[60px] w-[183px] relative text-inherit font-medium font-inherit inline-block [transform:_rotate(-90deg)] shrink-0 mq450:text-5xl mq750:text-13xl">
          Activities
        </h2> */}
      </div>
      <div className="w-[173px] h-[868px] absolute !m-[0] top-[-75px] right-[257px] rounded-29xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.12))] shadow-[7px_4px_106.8px_rgba(0,_0,_0,_0.12)] [backdrop-filter:blur(25.4px)] overflow-hidden shrink-0 z-[2]" />
      <FrameComponent />
      <main className="w-[1682px] h-[895px] flex flex-row items-start justify-start pt-0 pb-[74.5px] pr-5 pl-0 box-border gap-[35px] max-w-full text-left text-7xl text-white font-poppins mq750:gap-[17px] mq750:pb-[31px] mq750:box-border mq1100:pb-12 mq1100:box-border">
        <div className="h-[914px] w-[807px] relative bg-black1 overflow-hidden shrink-0 max-w-[calc(100%_-_855px)] mq1275:hidden mq1275:max-w-full">
          <img
            className="absolute top-[-595px] left-[0px] w-[457px] h-[1656px] object-contain"
            alt=""
            src="/group-2@2x.png"
          />
          <div className="absolute top-[-101px] left-[26px] rounded-47xl bg-gainsboro-200 [backdrop-filter:blur(25.2px)] w-[737px] flex flex-col items-start justify-start pt-[255px] pb-[173px] pr-5 pl-20 box-border gap-[43px] max-w-full z-[1]">
            <div className="w-[737px] h-[825px] relative rounded-47xl bg-gainsboro-200 [backdrop-filter:blur(25.2px)] hidden max-w-full" />
            <div className="relative font-semibold z-[2] mq450:text-2xl">
              Introduction
            </div>
            <div className="w-[615px] relative text-5xl text-gray-500 inline-block max-w-full z-[2] mq450:text-lgi">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eleifend suscipit semper. Nunc suscipit augue sed suscipit
              volutpat. Morbi gravida, orci non pellentesque auctor, ipsum nisi
              placerat lectus, at fringilla magna ex a felis. Aenean imperdiet
              semper consequat. Vivamus placerat, orci non interdum efficitur,
              purus nisi dignissim dolor, ac blandit nibh erat sed enim. Nunc
              consectetur elementum dictum.
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[93.5px] px-0 pb-0 box-border max-w-[calc(100%_-_842px)] shrink-0 mq1275:hidden mq1275:max-w-full mq450:pt-10 mq450:box-border mq1100:pt-[61px] mq1100:box-border">
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
            <div className="h-[868px] w-[173px] absolute !m-[0] top-[-390.5px] right-[-58px] rounded-29xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.12))] shadow-[7px_4px_106.8px_rgba(0,_0,_0,_0.12)] [backdrop-filter:blur(25.4px)] overflow-hidden shrink-0" />
            <div className="flex-1 flex flex-col items-start justify-start gap-[31px] max-w-full z-[3] mq450:gap-[15px]">
              <GroupComponent
                whereAreYouLocated="Where are you located ? "
                loremIpsumDolorSitAmetCon="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend suscipit semper. Nunc suscipit augue sed suscipit volutpat. "
              />
              <GroupComponent
                whereAreYouLocated="Whats your skills"
                loremIpsumDolorSitAmetCon="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend suscipit semper. Nunc suscipit augue sed suscipit volutpat. "
                propPadding="40px 20px 41px 58px"
                propHeight="199px"
                propDisplay="unset"
              />
              <GroupComponent
                whereAreYouLocated="Whats is your knowledge of MERN Stack "
                loremIpsumDolorSitAmetCon="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend suscipit semper. Nunc suscipit augue sed suscipit volutpat. Morbi gravida, orci non pellentesque auctor, ipsum nisi placerat lectus, at fringilla magna ex a felis"
                propPadding="45px 20px 44px 58px"
                propHeight="267px"
                propDisplay="inline-block"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Introduction;
