import avatarImg from "../public/img/avatar.jpg";
import gitHubImg from "../public/img/github.jpg";
import gmailImg from "../public/img/gmail.jpg";
import linkeDin from "../public/img/linkedin.jpg";
import Image from "next/image";
import ExperienceItem from "@/components/experienceItem";
import { experienceData } from "@/data";

export default function Home() {
  return (
    <div className=" h-screen w-full bg-black flex flex-col p-[30px]">
      <div className="h-[calc(100%-80px)] px-[180px] pb-[20px] flex-1">
        <div className=" flex gap-5 text-white h-full">
          <div className=" w-[300px] h-[100%] bg-[#171717] rounded-xl">
            <div className=" flex flex-col items-center pt-[80px]">
              <div className=" rounded-full border border-white">
                <Image
                  src={avatarImg}
                  alt="用户头像"
                  placeholder="blur" // 可选：模糊占位
                  className=" w-[80px] h-[80px] rounded-full"
                ></Image>
              </div>
              <div className=" text-[20px] text-gray-500 pt-[10px]">Jack</div>
              <div className=" text-gray-500">do something I like</div>
              <div className=" w-[calc(100%-30px)] border border-dotted border-gray-400 my-[20px]"></div>
              <div className=" text-gray-500 px-[15px]">
                &nbsp; &nbsp; &nbsp;Hi! Nice to meet you. I am a teacher.
              </div>
              <div className=" w-[calc(100%-30px)] border border-dotted border-gray-400 my-[20px]"></div>
              <div className=" text-gray-500 px-[15px]">English | Chinese</div>
              <div className=" w-[calc(100%-30px)] border border-dotted border-gray-400 my-[20px]"></div>
            </div>
            {/* <div className=" px-[20px] text-gray-500">
              <div className=" flex items-center">
                <Image
                  src={gitHubImg}
                  alt="用户头像"
                  placeholder="blur" // 可选：模糊占位
                  className=" w-[20px] h-[16px]"
                ></Image>
                <div className=" pl-[12px]">https://github.com/123/456</div>
              </div>
              <div className=" flex items-center my-[8px]">
                <Image
                  src={gmailImg}
                  alt="用户头像"
                  placeholder="blur" // 可选：模糊占位
                  className=" w-[20px] h-[14px]"
                ></Image>
                <div className=" pl-[12px]">13682799311@gmail.com</div>
              </div>
              <div className=" flex items-center">
                <Image
                  src={linkeDin}
                  alt="用户头像"
                  placeholder="blur" // 可选：模糊占位
                  className=" w-[20px] h-[16px]"
                ></Image>
                <div className=" pl-[12px]">
                  https://www.linkedin.com/567/897
                </div>
              </div>
            </div> */}
          </div>
          <div className=" flex-1 overflow-y-scroll h-full mb-5">
            <div className=" text-[30px] text-gray-400">Work Experience</div>
            {experienceData.map((item, idx) => {
              return <ExperienceItem item={item} key={idx} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
