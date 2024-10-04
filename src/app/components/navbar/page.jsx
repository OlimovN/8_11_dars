import React from "react";
import myImage1 from "../../fonts/01 (1).png";
import myImage2 from "../../fonts/01 (2).png";
import myImage3 from "../../fonts/01.png";
import myImage4 from "../../fonts/BG Content.png";
import Link from "next/link";
import Image from "next/image";

function Page() {
  return (
    <>
      <div className="absolute h-[200vh] w-full bg-[#000]">
      <Image
        className="absolute top-0 left-0 pb-[-20vh]  w-full h-[150vh] object-cover" 
        src="https://avatars.dzeninfra.ru/get-zen_doc/5232843/pub_620e79ebee36c56d78e4db37_620e7cf2b116cb72f0d43926/scale_1200"
        alt="Beautiful flower"
        layout="fill" />
      </div>
      <section id="datas1" className="max-h-[100vh] relative z-10 animate-slideIn div-2 my-auto">
        <div className="text-[#fff] max-w-[1760px] mx-auto pt-[3vh] flex justify-between items-center px-5">
          <div className="text-[32px] div-1">MNTN</div>
          <div className="font-[700] text-[18px] flex gap-[40px]">
            <a href="">Equipment</a>
            <a href="">About us</a>
            <a href="">Blog</a>
          </div>
          <div className="font-[700] text-[20px]">Account</div>
        </div>

        <div className="text-[#fff] mt-[100px] flex px-5 max-w-[1760px] mx-auto justify-between items-center">
          <div>
            <p className="">Follow us</p>
            <p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.8 2.00002H16.2C19.4032 2.00002 22 4.59677 22 7.80002V16.2C22 19.4033 19.4032 22 16.2 22H7.8C4.59675 22 2 19.4033 2 16.2V7.80002C2 4.59677 4.59675 2.00002 7.8 2.00002ZM7.6 4C5.61177 4 4 5.61178 4 7.6V16.4C4 18.3882 5.61177 20 7.6 20H16.4C18.3882 20 20 18.3882 20 16.4V7.6C20 5.61178 18.3882 4 16.4 4H7.6ZM17.25 5.5C17.9404 5.5 18.5 6.05965 18.5 6.75C18.5 7.44036 17.9404 8 17.25 8C16.5596 8 16 7.44036 16 6.75C16 6.05965 16.5596 5.5 17.25 5.5ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23857 17 7 14.7614 7 12C7 9.23858 9.23857 7 12 7ZM12 9C10.3431 9 9 10.3432 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3432 13.6569 9 12 9Z"
                  fill="white"
                />
              </svg>
            </p>
            <p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.4592 6.01238C21.6896 6.35373 20.8624 6.58442 19.9944 6.68815C20.8803 6.15701 21.5609 5.31598 21.8813 4.31378C21.052 4.80564 20.1336 5.16278 19.156 5.3552C18.3732 4.52112 17.2579 4 16.0235 4C13.6534 4 11.7317 5.92147 11.7317 8.29155C11.7317 8.6279 11.7697 8.95546 11.8429 9.2696C8.27609 9.0906 5.11375 7.38203 2.99709 4.78551C2.62765 5.41935 2.41601 6.15656 2.41601 6.94309C2.41601 8.43204 3.17364 9.74563 4.32523 10.5153C3.62179 10.4929 2.95996 10.2999 2.38139 9.97846C2.38098 9.99639 2.38098 10.0143 2.38098 10.0324C2.38098 12.1118 3.86033 13.8463 5.82359 14.2406C5.46349 14.3387 5.08434 14.3912 4.69294 14.3912C4.4164 14.3912 4.14755 14.3642 3.88546 14.3142C4.43161 16.0191 6.01653 17.26 7.89454 17.2945C6.42576 18.4457 4.57527 19.1318 2.56453 19.1318C2.21812 19.1318 1.87651 19.1114 1.54077 19.0717C3.44003 20.2894 5.69591 21 8.1195 21C16.0134 21 20.3302 14.4605 20.3302 8.78918C20.3302 8.60314 20.326 8.41805 20.3177 8.23395C21.1563 7.62886 21.8839 6.87302 22.4592 6.01238Z"
                  fill="white"
                />
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-start gap-[32px]">
            <p className="font-[800] text-[18px] text-[#fbd784]">
              —————— A HIKG GUIDE
            </p>
            <h1 className="text-[80px] font-[600] max-w-[900px] div-1">
              Be prepared for the Mountains and beyond!
            </h1>
            <Link href="#datas5">
            <button className="text-[18px] font-[600]">scroll down ↷</button>
            </Link>
          </div>
          <p></p>
          <div className="flex flex-col">
            <Link href="#datas1">
            <button className="border-r-[1px] text-[18px] font-[600] px-[32px] py-[22px] w-[100px] border-[#fff]">
              Start
            </button>
            </Link>
            <Link href="#datas2">
            <button className="border-r-[1px] text-[18px] font-[600] px-[32px] py-[22px] w-[100px]  border-[#fff]">
              01
            </button>
            </Link>
            <Link href="#datas3">
            <button className="border-r-[1px] text-[18px] font-[600] px-[32px] py-[22px] w-[100px]  border-[#fff]">
              02
            </button>
            </Link>
            <Link href="#datas4">
            <button className="border-r-[1px] text-[18px] font-[600] px-[32px] py-[22px] w-[100px]  border-[#fff]">
              03
            </button>
            </Link>
          </div>
        </div>
      </section>
      <section id="datas2" className="animate-slideIn relative h-[100vh] div-2 mt-[800px] div-2 flex flex-col justify-center">
        <Image className="absolute z-[15] top-[-200px] w-full" src={myImage4} alt="" />
        <div className="max-w-[1462px] relative z-20  mx-auto my-auto flex justify-between items-center ">
          <div className="w-[60%] p-20 tracking-[1px] flex flex-col gap-[30px]">
            <p className="font-[800] text-[18px] text-[#fbd784] tracking-[4px]">
              ———— GEt Started
            </p>
            <h2 className="text-[67px] font-[600] div-1  leading-[80px]">
              What level of hiker are you?
            </h2>
            <p className="font-[700] text-[18px] tracking-[2px]">
              Determining what level of hiker you are can be an important tool
              when planning future hikes. This hiking level guide will help you
              plan hikes according to different hike ratings set by various
              websites like All Trails and Modern Hiker. What type of hiker are
              you – novice, moderate, advanced moderate, expert, or expert
              backpacker?{" "}
            </p>
            <a className="font-[600] text-[18px] text-[#fbd784] " href="">
              read more ⇾
            </a>
          </div>
          <div className="w-[566px] h-[720px] bg-white">
         <Image src={myImage1} alt=""/>
          </div>
        </div>
      </section>
      <section id="datas3" className="animate-slideIn h-[100vh] div-2 flex flex-col justify-center">
        <div className="max-w-[1462px] mx-auto flex justify-between items-center">
          <div className="w-[566px] h-[720px] bg-white">
          <Image src={myImage2} alt=""/>
          </div>
          <div className="w-[60%] p-20 tracking-[1px] flex flex-col gap-[30px]">
            <p className="font-[800] text-[18px] text-[#fbd784] tracking-[4px]">
              ———— Hiking Essentials
            </p>
            <h2 className="text-[67px] font-[600] div-1  leading-[80px]">
              Picking the right Hiking Gear!
            </h2>
            <p className="font-[700] text-[18px] tracking-[2px]">
              Determining what level of hiker you are can be an important tool
              when planning future hikes. This hiking level guide will help you
              plan hikes according to different hike ratings set by various
              websites like All Trails and Modern Hiker. What type of hiker are
              you – novice, moderate, advanced moderate, expert, or expert
              backpacker?{" "}
            </p>
            <a className="font-[600] text-[18px] text-[#fbd784] " href="">
              read more ⇾
            </a>
          </div>
        </div>
      </section>
      <section id="datas4" className="animate-slideIn h-[100vh] div-2 flex flex-col justify-center">
        <div className="max-w-[1462px] mx-auto flex justify-between items-center">
          <div className="w-[60%] p-20 tracking-[1px] flex flex-col gap-[30px]">
            <p className="font-[800] text-[18px] text-[#fbd784] tracking-[4px]">
              ———— where you go is the key
            </p>
            <h2 className="text-[67px] font-[600] div-1  leading-[80px]">
              Understand Your Map & Timing
            </h2>
            <p className="font-[700] text-[18px] tracking-[2px]">
              Determining what level of hiker you are can be an important tool
              when planning future hikes. This hiking level guide will help you
              plan hikes according to different hike ratings set by various
              websites like All Trails and Modern Hiker. What type of hiker are
              you – novice, moderate, advanced moderate, expert, or expert
              backpacker?{" "}
            </p>
            <a className="font-[600] text-[18px] text-[#fbd784] " href="">
              read more ⇾
            </a>
          </div>
          <div className="w-[566px] h-[720px] bg-white">
          <Image src={myImage3} alt=""/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
