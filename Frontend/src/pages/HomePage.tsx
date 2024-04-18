import { FunctionComponent } from "react";
import NavbarItems from "../components/NavbarItems";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent21 from "../components/FrameComponent21";

const HomePage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-whitesmoke-200 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-[427px] leading-[normal] tracking-[normal] mq450:gap-[107px] mq1225:gap-[213px]">
      <img
        className="w-full h-[945px] absolute !m-[0] right-[0px] bottom-[969px] left-[0px] max-w-full overflow-hidden shrink-0 z-[1]"
        alt=""
        src="/rectangle-1328.svg"
      />
      <main className="self-stretch flex flex-col items-start justify-start gap-[45px] max-w-full mq450:gap-[22px]">
        <NavbarItems />
        <FrameComponent11 />
        <FrameComponent21 />
      </main>
      <footer className="self-stretch h-[299px] relative bg-whitesmoke-300 [backdrop-filter:blur(31.3px)]" />
    </div>
  );
};

export default HomePage;
