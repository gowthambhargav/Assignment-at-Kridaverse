import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

const NavbarItems: FunctionComponent = () => {
  const navigate = useNavigate()
  return (
    <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border relative max-w-full text-left text-21xl text-black1 font-poppins">
      <div className="w-[205px] h-[1545px] !m-[0] absolute top-[-175px] left-[82px] rounded-29xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.12))] shadow-[7px_4px_106.8px_rgba(0,_0,_0,_0.12)] [backdrop-filter:blur(25.4px)] overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[235px] px-0 pb-[51px] box-border gap-[900px] z-[4]">
        <div className="w-[174px] flex flex-row items-start justify-end py-0 px-[17px] box-border">
          <img
            className="h-[126px] flex-1 relative max-w-full overflow-hidden object-cover z-[5]"
            loading="lazy"
            alt=""
            src="/6ea9d8d5ac75d9c5d7a2a567c1e2bbdfremovebgpreview-3@2x.png"
          />
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[49.3px]">
          <div className="self-stretch h-[0.7px] relative box-border border-t-[0.7px] border-solid border-darkgray-100" />
          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-[73px] pl-[72px]">
            <h2 className="m-0 w-[183px] relative text-inherit font-medium font-inherit inline-block [transform:_rotate(-90deg)] mq450:text-5xl mq850:text-13xl">
              Activities
            </h2>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-[34px] pb-[938.7px] pr-[104px] pl-[313px] box-border relative max-w-full text-45xl mq450:pl-5 mq450:pr-5 mq450:box-border mq850:pt-5 mq850:pb-[396px] mq850:box-border mq1225:pt-[22px] mq1225:pb-[610px] mq1225:pr-[52px] mq1225:pl-[156px] mq1225:box-border">
        <div className="w-[1892px] h-[1264px] absolute !m-[0] top-[-147px] left-[-90px]">
          <div className="absolute top-[95px] left-[274px] rounded-29xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.12))] shadow-[7px_4px_106.8px_rgba(0,_0,_0,_0.12)] [backdrop-filter:blur(25.4px)] w-[173px] h-[1072px] overflow-hidden z-[1]" />
          <div className="absolute top-[0px] left-[0px] w-full h-full z-[2]" />
          <div className="absolute top-[45px] left-[90px] w-[1728px] h-[1219px] z-[3]" />
          <div className="absolute top-[389px] left-[90px] rounded-29xl bg-gray-600 shadow-[7px_4px_106.8px_rgba(0,_0,_0,_0.12)] [backdrop-filter:blur(125.5px)] w-[1184px] h-[592px] z-[5]">
            <h1 className="m-0 absolute top-[84px] left-[150px] text-inherit font-bold font-inherit whitespace-pre-wrap z-[6] mq450:text-19xl mq850:text-32xl">
              About Me
            </h1>
            <div className="absolute top-[194px] left-[150px] text-11xl text-gray-800 inline-block w-[950px] z-[6] mq450:text-lg mq850:text-5xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eleifend suscipit semper. Nunc suscipit augue sed suscipit
              volutpat. Morbi gravida, orci non pellentesque auctor, ipsum nisi
              placerat lectus, at fringilla magna ex a felis. Aenean imperdiet
              semper consequat. Vivamus placerat, orci non interdum efficitur,
              purus nisi dignissim dolor, ac blandit nibh erat sed enim. Nunc
              consectetur elementum dictum.
            </div>
            <div className="absolute top-[180px] left-[150px] box-border w-[594px] h-px z-[7] border-t-[1px] border-dashed border-gray-700" />
            <div className="absolute top-[-242px] left-[-58px] rounded-29xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.12))] shadow-[7px_4px_106.8px_rgba(0,_0,_0,_0.12)] [backdrop-filter:blur(25.4px)] w-[173px] h-[1072px] overflow-hidden z-[6]" />
          </div>
          <img
            className="absolute top-[389px] left-[1274px] w-[544px] h-[778px] object-contain z-[4]"
            loading="lazy"
            alt=""
            src="/doraemon-characterremovebgpreview-1@2x.png"
          />
        </div>
        <b className="w-11 relative text-5xl inline-block z-[4] mq450:text-lgi">
          <p className="m-0">V</p>
          <p className="m-0 text-firebrick">L</p>
          <p className="m-0 text-firebrick">S</p>
          <p className="m-0">S</p>
        </b>
        <div className="self-stretch flex flex-row items-start justify-end max-w-full mt-[-104.7px]">
          <nav className="m-0 h-[109px] w-[1094px] rounded-96xl bg-gray-900 [backdrop-filter:blur(30.4px)] overflow-hidden shrink-0 flex flex-row items-start justify-between py-[36.5px] pr-[163px] pl-[162px] box-border gap-[20px] max-w-full z-[4] text-left text-5xl text-darkslategray-300 font-poppins mq850:pl-10 mq850:pr-10 mq850:box-border mq1225:pl-[81px] mq1225:pr-[81px] mq1225:box-border">
            <div className="w-[188.5px] flex flex-col items-start justify-start py-0 pr-px pl-0 box-border gap-[28.2px] text-maroon-200">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <div onClick={()=>{
                  navigate('/')
                }} className="relative font-semibold inline-block min-w-[73px] mq450:text-lgi cursor-pointer">
                  Home
                </div>
                <div onClick={()=>{
                  navigate('/introduction')
                }} className="relative font-medium text-darkslategray-300 inline-block min-w-[76px] mq450:text-lgi cursor-pointer">
                  Page2
                </div>
              </div>
              <div className="w-[72px] h-4 relative rounded-6xs bg-maroon-100" />
            </div>
            <div
              onClick={()=>{
                navigate('/form')
              }}
              
             className="relative font-medium inline-block min-w-[76px] mq450:text-lgi cursor-pointer">{`Page3 `}</div>
            <div className="relative font-medium inline-block min-w-[78px] mq450:text-lgi">
              Page4
            </div>
            <div className="relative font-medium inline-block min-w-[77px] mq450:text-lgi">
              Page5
            </div>
            <div className="relative font-medium inline-block min-w-[78px] mq450:text-lgi">
              Page6
            </div>
            <div className="relative font-medium inline-block min-w-[76px] mq450:text-lgi">
              Page7
            </div>
          </nav>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-6 pr-6 pl-5">
        <h2 className="m-0 relative text-inherit font-medium font-inherit z-[4] mq450:text-5xl mq850:text-13xl">
          Greeting !
        </h2>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[88px] pr-[21px] pl-5 box-border max-w-full text-center text-29xl">
        <h1 className="m-0 w-[853px] relative text-inherit font-bold font-inherit whitespace-pre-wrap inline-block shrink-0 max-w-full z-[2] mq450:text-10xl mq850:text-19xl">
          Welcome to the website
        </h1>
      </div>
      <div className="self-stretch h-px flex flex-row items-start justify-center py-0 pr-[25px] pl-5 box-border max-w-full">
        <div className="self-stretch w-[594px] relative box-border max-w-full z-[2] border-t-[1px] border-dashed border-gray-700" />
      </div>
    </section>
  );
};

export default NavbarItems;
