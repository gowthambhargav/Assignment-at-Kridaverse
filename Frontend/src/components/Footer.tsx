import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <footer className="self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-9xl text-black1 font-poppins">
      <div className="h-[1285px] w-[1423px] absolute !m-[0] bottom-[-935px] left-[152px] flex items-center justify-center z-[0]">
        <img
          className="h-full w-full object-contain absolute left-[1px] top-[-503px] [transform:scale(1.782)]"
          loading="lazy"
          alt=""
          src="/group-1.svg"
        />
      </div>
      <div className="flex-1 bg-whitesmoke-300 [backdrop-filter:blur(31.3px)] flex flex-row items-start justify-start pt-[50px] px-12 pb-[52px] box-border max-w-full z-[1] mq1050:pl-6 mq1050:pr-6 mq1050:box-border">
        <div className="h-[299px] w-[1728px] relative bg-whitesmoke-300 [backdrop-filter:blur(31.3px)] hidden max-w-full" />
        <div className="flex-1 overflow-x-auto flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border gap-[20px] max-w-full z-[2]">
          <div className="w-[661px] shrink-0 flex flex-col items-start justify-start gap-[17px] max-w-full text-11xl">
            <h2 className="m-0 relative text-inherit capitalize font-semibold font-inherit inline-block min-w-[93px] mq1050:text-5xl mq450:text-lg">
              About
            </h2>
            <div className="self-stretch relative text-lg capitalize text-gray-1000">
              <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend suscipit semper. Nunc suscipit augue sed suscipit volutpat. `}</p>
              <p className="m-0">
                <b>&nbsp;</b>
              </p>
              <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend suscipit semper. Nunc suscipit augue sed suscipit volutpat. `}</p>
            </div>
          </div>
          <div className="w-[215px] shrink-0 flex flex-col items-start justify-start gap-[17px]">
            <h3 className="m-0 relative text-inherit capitalize font-semibold font-inherit mq450:text-3xl">
              Information
            </h3>
            <div className="self-stretch relative text-lg capitalize text-gray-1000">
              <p className="m-0">Home</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">About us</p>
            </div>
          </div>
          <div className="w-[461px] shrink-0 flex flex-col items-start justify-start gap-[17px] max-w-full">
            <h3 className="m-0 relative text-inherit capitalize font-semibold font-inherit inline-block min-w-[116px] mq450:text-3xl">
              Contact
            </h3>
            <div className="self-stretch h-[115px] relative text-lg capitalize text-gray-1000 flex items-center">
              <span>
                <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend suscipit semper. Nunc suscipit augue sed suscipit volutpat. `}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
