import { FunctionComponent } from "react";
import Title from "../components/Title";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Form: FunctionComponent = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data: any,e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    console.log(data)
   const Response = await axios.post("https://assignment-at-kridaverse.onrender.com/api/v1/application",data)
   localStorage.setItem("Key",Response.data.application.slNumber)
   
    navigate(`/downloadpdf`)
  };
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start gap-[69px] leading-[normal] tracking-[normal] mq1050:gap-[34px] mq450:gap-[17px]">
      <main className="w-[1689px] flex flex-row items-start justify-end py-0 px-[43px] box-border max-w-full lg:pl-[21px] lg:pr-[21px] lg:box-border">
        <section className="h-auto flex-1 flex flex-row items-end justify-start pt-[49px] px-0 pb-0 box-border max-w-full text-left text-base text-darkslategray-100 font-poppins lg:h-auto lg:pt-8 lg:box-border mq750:pt-5 mq750:box-border mq1050:pt-[21px] mq1050:box-border">
          <Title />
        <form  className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[133px] box-border min-h-[1827px] max-w-[calc(100%_-_205px)] shrink-0 lg:pb-[86px] lg:box-border mq1050:pb-14 mq1050:box-border mq1050:max-w-full mq450:pb-9 mq450:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[33.3px] max-w-full mq750:gap-[17px]">
              <div className="self-stretch flex flex-row items-start justify-end max-w-full text-5xl text-black1">
                <div className="w-[1329px] flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap">
                  <b className="w-11 relative inline-block shrink-0 mq450:text-lgi">
                    <p className="m-0">V</p>
                    <p className="m-0 text-firebrick">L</p>
                    <p className="m-0 text-firebrick">S</p>
                    <p className="m-0">S</p>
                  </b>
                  <div className="w-[1094px] flex flex-col items-start justify-start gap-[98px] max-w-full text-7xl lg:gap-[49px] mq750:gap-[24px]">
                    <nav className="m-0 self-stretch h-[109px] rounded-96xl bg-gray-900 [backdrop-filter:blur(30.4px)] overflow-hidden shrink-0 flex flex-row items-start justify-between py-[36.5px] pr-[163px] pl-[162.5px] box-border top-[0] z-[99] sticky gap-[20px] text-left text-5xl text-darkslategray-300 font-poppins lg:pl-[81px] lg:pr-[81px] lg:box-border mq750:hidden mq750:pl-10 mq750:pr-10 mq750:box-border">
                      <div
                      onClick={()=>{
                        navigate(`/`)
                      }}
                      className="relative font-semibold text-maroon-200 inline-block min-w-[73px] cursor-pointer">
                        Home
                      </div>
                      <div onClick={()=>{
                            navigate(`/introduction`)
                          }} className="relative font-medium inline-block min-w-[76px] cursor-pointer">
                        Page2
                      </div>
                      <div className="w-[193px] flex flex-col items-start justify-start gap-[23.5px]">
                        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                          <div onClick={()=>{
                            navigate(`/form`)
                          }} className="relative font-medium inline-block min-w-[76px] whitespace-nowrap cursor-pointer">{`Page3 `}</div>
                          <div className="relative font-medium inline-block min-w-[78px]">
                            Page4
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-1">
                          <img
                            className="h-4 w-[111.5px] relative rounded-6xs"
                            loading="lazy"
                            alt=""
                            src="/rectangle-1325.svg"
                          />
                        </div>
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
                    </nav>
                    <div className="w-[679px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                      <div className="w-[489px] flex flex-col items-start justify-start gap-[18px] max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
                          <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-2xl">
                            Application Form
                          </h3>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[8.5px] text-center text-lg text-gray-1000">
                          <div className="mt-[-9px] self-stretch flex flex-row items-start justify-center py-0 px-5">
                            <img
                              className="h-[0.5px] w-[279px] relative object-contain shrink-0 [debug_commit:1de1738] z-[1]"
                              loading="lazy"
                              alt=""
                              src="/line-10.svg"
                            />
                          </div>
                          <div className="self-stretch relative capitalize shrink-0 [debug_commit:1de1738] z-[1]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend suscipit semper. Nunc suscipit augue sed suscipit volutpat. `}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[1355.7px] h-[0.7px] relative box-border max-w-full z-[1] border-t-[0.7px] border-solid border-darkgray-100" />
              <div className="w-[1315px] flex flex-row items-start justify-start pt-0 px-[41px] pb-[23.7px] box-border max-w-full">
                <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[83px] max-w-full mq750:gap-[41px] mq450:gap-[21px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[34px] min-w-[374px] max-w-full mq750:gap-[17px] mq750:min-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[3px] max-w-full">
                        <div className="relative font-medium inline-block min-w-[95px] z-[1]">
                          <span>Sl number</span>
                          <span className="text-red">*</span>
                        </div>
                        <div className="self-stretch rounded-smi box-border flex flex-row items-start justify-start pt-5 px-[22px] pb-[21px] max-w-full z-[2] border-[1px] border-solid border-black1">
                          <input {...register("slNumber")}
                            className="w-[197px] [border:none] [outline:none] font-medium font-poppins text-lg bg-[transparent] h-[27px] relative capitalize text-darkslategray-200 text-left inline-block p-0 z-[1]"
                            placeholder="Lorem ipsum dolor sit "
                            type="number"
                          />
                          <div className="h-[72px] w-[575px] relative rounded-smi box-border hidden max-w-full border-[1px] border-solid border-black1" />
                        </div>
                      </div>
                      <div className="relative text-[14px] text-gray-100 whitespace-pre-wrap z-[1]">
                        A minimum length of 10 characters is required. Please
                        edit the field. 0 / 10
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[31px] box-border gap-[3px] max-w-full">
                      <div className="relative font-medium z-[1]">
                        <span>Father/ Husband name</span>
                      </div>
                      <div className="self-stretch rounded-smi box-border flex flex-row items-start justify-start pt-5 px-[29px] pb-[21px] max-w-full z-[2] border-[1px] border-solid border-black1">
                        <input {...register("fatherName")}
                          className="w-[197px] [border:none] [outline:none] font-medium font-poppins text-lg bg-[transparent] h-[27px] relative capitalize text-darkslategray-200 text-left inline-block p-0 z-[1]"
                          placeholder="Lorem ipsum dolor sit "
                          type="text"
                        />
                        <div className="h-[72px] w-[575px] relative rounded-smi box-border hidden max-w-full border-[1px] border-solid border-black1" />
                      </div>
                    </div>
                    {/* <FrameComponent5
                      fatherHusbandName="Introducer name and membership number"
                      loremIpsumDolorSiPlacehol="Lorem ipsum dolor sit "
                      propDisplay="inline-block"
                      propMinWidth="unset"
                      propWidth="197px"
                    /> */}
                       <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[31px] box-border gap-[3px] max-w-full">
                      <div className="relative font-medium z-[1]">
                        <span>Introducer name and membership number</span>
                      </div>
                      <div className="self-stretch rounded-smi box-border flex flex-row items-start justify-start pt-5 px-[29px] pb-[21px] max-w-full z-[2] border-[1px] border-solid border-black1">
                        <input {...register("membershipNumber")}
                          className="w-[197px] [border:none] [outline:none] font-medium font-poppins text-lg bg-[transparent] h-[27px] relative capitalize text-darkslategray-200 text-left inline-block p-0 z-[1]"
                          placeholder="Lorem ipsum dolor sit "
                          type="text"
                        />
                        <div className="h-[72px] w-[575px] relative rounded-smi box-border hidden max-w-full border-[1px] border-solid border-black1" />
                      </div>
                    </div>
                    {/* <FrameComponent4 taluk="Taluk" /> */}
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[31px] box-border gap-[3px] max-w-full">
                      <div className="relative font-medium z-[1]">
                        <span>Taluk</span>
                      </div>
                      <div className="self-stretch rounded-smi box-border flex flex-row items-start justify-start pt-5 px-[29px] pb-[21px] max-w-full z-[2] border-[1px] border-solid border-black1">
                        <input {...register("taluk")}
                          className="w-[197px] [border:none] [outline:none] font-medium font-poppins text-lg bg-[transparent] h-[27px] relative capitalize text-darkslategray-200 text-left inline-block p-0 z-[1]"
                          placeholder="Lorem ipsum dolor sit "
                          type="text"
                        />
                        <div className="h-[72px] w-[575px] relative rounded-smi box-border hidden max-w-full border-[1px] border-solid border-black1" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[34px] min-w-[374px] max-w-full mq750:gap-[17px] mq750:min-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[31px] box-border gap-[3px] max-w-full">
                      <div className="relative font-medium z-[1]">
                        <span>Applicant’s Name</span>
                        <span className="text-red">*</span>
                      </div>
                      <div className="self-stretch rounded-smi box-border flex flex-row items-start justify-start pt-5 px-[29px] pb-[21px] max-w-full z-[2] border-[1px] border-solid border-black1">
                        <input {...register("applicantsName")}
                          className="w-[197px] [border:none] [outline:none] font-medium font-poppins text-lg bg-[transparent] h-[27px] relative capitalize text-darkslategray-200 text-left inline-block p-0 z-[1]"
                          placeholder="Lorem ipsum dolor sit "
                          type="text"
                        />
                        <div className="h-[72px] w-[575px] relative rounded-smi box-border hidden max-w-full border-[1px] border-solid border-black1" />
                      </div>
                    </div>
                    <div className="w-[477px] flex flex-col items-start justify-start gap-[3px] max-w-full">
                      <div className="w-[47px] relative font-medium inline-block z-[1]">
                        <span>DOB</span>
                        <span className="text-red">*</span>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[21px] mq750:flex-wrap">
                        {/* <FrameComponent3 dD="DD" /> */}
                        <div className="self-stretch rounded-smi box-border flex flex-row items-start justify-start pt-5 px-[29px] pb-[21px] max-w-full z-[2] border-[1px] border-solid border-black1">
                        <input {...register("DOB")}
                          className="w-[197px] [border:none] [outline:none] font-medium font-poppins text-lg bg-[transparent] h-[27px] relative capitalize text-darkslategray-300 text-left inline-block p-0 z-[1]"
                          placeholder="Lorem ipsum dolor sit "
                          type="date"
                        />
                        <div className="h-[72px] w-[575px] relative rounded-smi box-border hidden max-w-full border-[1px] border-solid border-black1" />
                      </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[31px] box-border gap-[3px] max-w-full">
                      <div className="relative font-medium z-[1]">
                        <span>Member Residential Address</span>
                      </div>
                      <div className="self-stretch rounded-smi box-border flex flex-row items-start justify-start pt-5 px-[29px] pb-[21px] max-w-full z-[2] border-[1px] border-solid border-black1">
                        <input {...register("memberAddress")}
                          className="w-[197px] [border:none] [outline:none] font-medium font-poppins text-lg bg-[transparent] h-[27px] relative capitalize text-darkslategray-200 text-left inline-block p-0 z-[1]"
                          placeholder="Lorem ipsum dolor sit "
                          type="text"
                        />
                        <div className="h-[72px] w-[575px] relative rounded-smi box-border hidden max-w-full border-[1px] border-solid border-black1" />
                      </div>
                    </div>
                       <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[31px] box-border gap-[3px] max-w-full">
                      <div className="relative font-medium z-[1]">
                        <span>District</span>
                      </div>
                      <div className="self-stretch rounded-smi box-border flex flex-row items-start justify-start pt-5 px-[29px] pb-[21px] max-w-full z-[2] border-[1px] border-solid border-black1">
                        <input {...register("District")}
                          className="w-[197px] [border:none] [outline:none] font-medium font-poppins text-lg bg-[transparent] h-[27px] relative capitalize text-darkslategray-200 text-left inline-block p-0 z-[1]"
                          placeholder="Lorem ipsum dolor sit "
                          type="text"
                        />
                        <div className="h-[72px] w-[575px] relative rounded-smi box-border hidden max-w-full border-[1px] border-solid border-black1" />
                      </div>
                    </div>
                    {/* <FrameComponent4 taluk="District" propMinWidth="56px" /> */}
                  </div>
                </div>
              </div>
              <div className="w-[1355px] h-[13.7px] flex flex-row items-start justify-start pt-0 px-0 pb-[13px] box-border max-w-full">
                <div className="self-stretch flex-1 relative box-border max-w-full z-[1] border-t-[0.7px] border-solid border-darkgray-100" />
              </div>
              <div className="w-[1315px] flex flex-row items-start justify-start py-0 px-[41px] box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[83px] max-w-full mq750:gap-[41px] mq450:gap-[21px]">
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[83px] max-w-full mq750:gap-[41px] mq450:gap-[21px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[34px] min-w-[374px] max-w-full mq750:gap-[17px] mq750:min-w-full">
                      {/* <FrameComponent5
                        fatherHusbandName="Member Permanent Address"
                        loremIpsumDolorSiPlacehol="Lorem ipsum dolor sit "
                        propDisplay="unset"
                        propMinWidth="unset"
                        propWidth="197px"
                      /> */}
                         <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[31px] box-border gap-[3px] max-w-full">
                      <div className="relative font-medium z-[1]">
                        <span>Member Permanent Address</span>
                      </div>
                      <div className="self-stretch rounded-smi box-border flex flex-row items-start justify-start pt-5 px-[29px] pb-[21px] max-w-full z-[2] border-[1px] border-solid border-black1">
                        <input {...register("mPermanentAddress")}
                          className="w-[197px] [border:none] [outline:none] font-medium font-poppins text-lg bg-[transparent] h-[27px] relative capitalize text-darkslategray-200 text-left inline-block p-0 z-[1]"
                          placeholder="Lorem ipsum dolor sit "
                          type="text"
                        />
                        <div className="h-[72px] w-[575px] relative rounded-smi box-border hidden max-w-full border-[1px] border-solid border-black1" />
                      </div>
                    </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                        <div className="relative font-medium inline-block min-w-[56px] z-[1]">
                          District
                        </div>
                        <div className="self-stretch rounded-smi box-border flex flex-row items-start justify-start pt-5 px-[29px] pb-[21px] max-w-full z-[2] border-[1px] border-solid border-black1">
                        <input
                        {...register("mDistrict")}
                          className="w-[400px] [border:none] [outline:none] font-medium font-poppins text-lg bg-[transparent] h-[27px] relative capitalize text-darkslategray-300 text-left inline-block p-0 z-[1]"
                          placeholder="Lorem ipsum dolor sit "
                          type="text"
                        />
                        <div className="h-[72px] w-[575px] relative rounded-smi box-border hidden max-w-full border-[1px] border-solid border-black1" />
                      </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[31px] box-border gap-[3px] max-w-full">
                      <div className="relative font-medium z-[1]">
                        <span>Phone Number</span>
                      </div>
                      <div className="self-stretch rounded-smi box-border flex flex-row items-start justify-start pt-5 px-[29px] pb-[21px] max-w-full z-[2] border-[1px] border-solid border-black1">
                        <input {...register("mPhone")}
                          className="w-[197px] [border:none] [outline:none] font-medium font-poppins text-lg bg-[transparent] h-[27px] relative capitalize text-darkslategray-200 text-left inline-block p-0 z-[1]"
                          placeholder="Lorem ipsum dolor sit "
                          type="text"
                        />
                        <div className="h-[72px] w-[575px] relative rounded-smi box-border hidden max-w-full border-[1px] border-solid border-black1" />
                      </div>
                    </div>
                      {/* <FrameComponent5
                        fatherHusbandName="Membership  Fee"
                        loremIpsumDolorSiPlacehol="1000000"
                        propDisplay="unset"
                        propMinWidth="unset"
                        propWidth="76px"
                      /> */}
                           <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[31px] box-border gap-[3px] max-w-full">
                      <div className="relative font-medium z-[1]">
                        <span>Membership  Fee</span>
                      </div>
                      <div className="self-stretch rounded-smi box-border flex flex-row items-start justify-start pt-5 px-[29px] pb-[21px] max-w-full z-[2] border-[1px] border-solid border-black1">
                        <input
                        {...register("mFee")}
                          className="w-[197px] [border:none] [outline:none] font-medium font-poppins text-lg bg-[transparent] h-[27px] relative capitalize text-darkslategray-200 text-left inline-block p-0 z-[1]"
                          placeholder="Lorem ipsum dolor sit "
                          type="text"
                        />
                        <div className="h-[72px] w-[575px] relative rounded-smi box-border hidden max-w-full border-[1px] border-solid border-black1" />
                      </div>
                    </div>
                      
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[110px] min-w-[374px] max-w-full mq750:gap-[55px] mq750:min-w-full mq450:gap-[27px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[34px] max-w-full mq750:gap-[17px]">
                        {/* <FrameComponent4 taluk="Taluk" propMinWidth="44px" />
                        <div className="relative font-medium inline-block min-w-[113px] z-[1]">
                          Family Details
                        </div> */}
                             <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[31px] box-border gap-[3px] max-w-full">
                      <div className="relative font-medium z-[1]">
                        <span>Taluk</span>
                      </div>
                      <div className="self-stretch rounded-smi box-border flex flex-row items-start justify-start pt-5 px-[29px] pb-[21px] max-w-full z-[2] border-[1px] border-solid border-black1">
                        <input {...register("mTaluk")}
                          className="w-[197px] [border:none] [outline:none] font-medium font-poppins text-lg bg-[transparent] h-[27px] relative capitalize text-darkslategray-200 text-left inline-block p-0 z-[1]"
                          placeholder="Lorem ipsum dolor sit "
                          type="text"
                        />
                        <div className="h-[72px] w-[575px] relative rounded-smi box-border hidden max-w-full border-[1px] border-solid border-black1" />
                      </div>
                    </div>
                         
                      <div className="relative font-medium z-[1]">
                        <span>Family Details</span>
                      </div>
                      <div className="self-stretch rounded-smi box-border flex flex-row items-start justify-start pt-5 px-[29px] pb-[21px] max-w-full z-[2] border-[1px] border-solid border-black1">
                        <input {...register("mFamailDetails")}
                          className="w-[197px] [border:none] [outline:none] font-medium font-poppins text-lg bg-[transparent] h-[27px] relative capitalize text-darkslategray-200 text-left inline-block p-0 z-[1]"
                          placeholder="Lorem ipsum dolor sit "
                          type="text"
                        />
                        <div className="h-[72px] w-[575px] relative rounded-smi box-border hidden max-w-full border-[1px] border-solid border-black1" />
                      </div>
                    
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[31px] box-border gap-[3px] max-w-full">
                      <div className="relative font-medium z-[1]">
                        <span>Aadhar Number</span>
                      </div>
                      <div className="self-stretch rounded-smi box-border flex flex-row items-start justify-start pt-5 px-[29px] pb-[21px] max-w-full z-[2] ">
                        <input {...register("mAdharNumber")}
                          className="w-[197px] [border:none] [outline:none] font-medium font-poppins text-lg bg-[transparent] h-[27px] relative capitalize text-darkslategray-200 text-left inline-block p-0 z-[1]"
                          placeholder="Lorem ipsum dolor sit "
                          type="number"
                        />
                        <div className="h-[72px] w-[575px] relative rounded-smi box-border hidden max-w-full border-[1px] border-solid border-black1" />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[31px] box-border gap-[3px] max-w-full">
                      <div className="relative font-medium z-[1]">
                        <span>Amount paid in cash</span>
                      </div>
                      <div className="self-stretch rounded-smi box-border flex flex-row items-start justify-start pt-5 px-[29px] pb-[21px] max-w-full z-[2] border-[1px] border-solid border-black1">
                        <input {...register("mPaidInCash")}
                          className="w-[197px] [border:none] [outline:none] font-medium font-poppins text-lg bg-[transparent] h-[27px] relative capitalize text-darkslategray-200 text-left inline-block p-0 z-[1]"
                          placeholder="Lorem ipsum dolor sit "
                          type="text"
                        />
                        <div className="h-[72px] w-[575px] relative rounded-smi box-border hidden max-w-full border-[1px] border-solid border-black1" />
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="w-[1218px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-xl text-white">
                    <div className="w-[430px] flex flex-row flex-wrap items-start justify-start gap-[34px] max-w-full mq450:gap-[17px]">
                      <button className="cursor-pointer pt-[13px] px-[33px] pb-3 bg-[transparent] flex-1 rounded-[13.11px] shadow-[2.6px_2.6px_57.3px_rgba(0,_0,_0,_0.15)] box-border flex flex-row items-start justify-start min-w-[129px] z-[1] border-[1.5px] border-solid border-darkgray-200 hover:bg-dimgray-300 hover:box-border hover:border-[1.5px] hover:border-solid hover:border-dimgray-100">
                        <div className="h-[59px] w-[198px] relative rounded-[13.11px] shadow-[2.6px_2.6px_57.3px_rgba(0,_0,_0,_0.15)] box-border hidden border-[1.5px] border-solid border-darkgray-200" />
                        <div className="relative text-xl font-poppins text-darkgray-200 text-left inline-block min-w-[126px] z-[1] mq450:text-base">
                          Save in draft
                        </div>
                      </button>
                      <div className="flex flex-row items-start justify-start relative">
                      
                        <button className="cursor-pointer [border:none] pt-[15px] pb-3.5 pr-[63px] pl-[65px] bg-maroon-100 rounded-[13.11px] shadow-[2.6px_2.6px_57.3px_rgba(0,_0,_0,_0.15)] flex flex-row items-start justify-start z-[3] hover:bg-brown">
                          <div className="h-[59px] w-[198px] relative rounded-[13.11px] bg-maroon-100 shadow-[2.6px_2.6px_57.3px_rgba(0,_0,_0,_0.15)] hidden" />
                          <button type="submit" className="relative text-xl font-poppins text-white text-left inline-block min-w-[70px] z-[1] mq450:text-base">
                            submit
                          </button>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Form;
