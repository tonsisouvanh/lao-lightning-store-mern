import { MdEmail, MdPhone, MdLocationPin } from "react-icons/md";
import contactundraw from "../../assets/svg/contactundraw.svg";
const Contact = () => {
  return (
    <>
      <div className="relative my-[1rem] h-full w-full overflow-hidden md:my-[4rem]  lg:my-[6rem]">
        <div className=" container mx-auto flex h-fit flex-col items-center justify-center gap-[2.5rem] p-[2rem]">
          <div className="flex  items-center justify-between gap-10">
            <div className="flex  w-full flex-col items-center justify-center gap-12">
              <div className="flex w-full flex-col items-center md:items-start justify-center gap-[1px]  md:gap-[3px]">
                <MdEmail className="text-[2rem] md:text-[3rem] text-secondary" />
                <div className="text-[25px] font-semibold leading-[48px]  text-secondary">
                  Email
                </div>
                <div className="text-base font-normal leading-[1.5rem] md:leading-[2rem]  text-base-content">
                  Send us an email
                </div>
                <div className="text-base font-normal leading-[1.5rem] md:leading-[2rem]  text-base-content underline">
                  abc@gmail.com
                </div>
              </div>
              <div className="flex w-full flex-col items-center md:items-start justify-center gap-[1px]  md:gap-[3px]">
                <MdPhone className="text-[2rem] md:text-[3rem] text-secondary" />
                <div className="text-[25px] font-semibold leading-[48px]  text-secondary">
                  Phone
                </div>
                <div className="text-base font-normal leading-[1.5rem] md:leading-[2rem]  text-base-content">
                  Give us a call
                </div>
                <div className="text-base font-normal leading-[1.5rem] md:leading-[2rem]  text-base-content underline">
                  +1 (555) 000-0000
                </div>
              </div>
              <div className="flex w-full flex-col items-center md:items-start justify-center gap-[1px]  md:gap-[3px]">
                <MdLocationPin className="text-[2rem] md:text-[3rem] text-secondary" />
                <div className="text-[25px] font-semibold leading-[48px]  text-secondary">
                  Address
                </div>
                <div className="flex flex-col items-center md:items-start justify-center gap-[1px]  md:gap-[3px]">
                  <div className="text-center text-base font-normal leading-[1.5rem] md:leading-[2rem]  text-base-content">
                    123 Sample St, Sydney NSW 2000 AU
                  </div>
                  <div className="text-base font-normal leading-[1.5rem] md:leading-[2rem]  text-base-content underline">
                    Get Directions
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden h-auto w-full md:flex">
              <img
                className="h-full w-full object-contain"
                src={contactundraw}
                alt="hidden md:flex contact"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
