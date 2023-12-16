import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTelegram,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="relative my-[1rem] h-full w-full overflow-hidden bg-base-300 md:my-[4rem] lg:my-[6rem]">
      <div className="container mx-auto flex items-center justify-between p-[2rem]">
        <div className="flex w-full flex-col items-center justify-center gap-[63px] ">
          <div className="flex w-full flex-wrap items-start justify-between gap-[72px]">
            <Logo />
            <div className="flex flex-col items-center justify-center gap-3">
              <h1 className="text-md font-normal leading-[30px] text-base-content">
                About Us
              </h1>
              <p className="text-sm font-normal leading-[30px] text-base-content">
                Payment
              </p>
              <p className="text-sm font-normal leading-[30px] text-base-content">
                Stores
              </p>
              <p className="text-sm font-normal leading-[30px] text-base-content">
                Contact
              </p>
              <p className="text-sm font-normal leading-[30px] text-base-content">
                FAQs
              </p>
              <p className="text-sm font-normal leading-[30px] text-base-content">
                Support
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="text-md font-normal leading-[30px] text-base-content">
                Press
              </p>
              <p className="text-sm font-normal leading-[30px] text-base-content">
                Partners
              </p>
              <p className="text-sm font-normal leading-[30px] text-base-content">
                Affiliates
              </p>
              <p className="text-sm font-normal leading-[30px] text-base-content">
                Investors
              </p>
              <p className="text-sm font-normal leading-[30px] text-base-content">
                Terms of Use
              </p>
              <p className="text-sm font-normal leading-[30px] text-base-content">
                Privacy Policy
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="text-md font-normal leading-[30px] text-base-content">
                Terms
              </p>
              <p className="text-sm font-normal leading-[30px] text-base-content">
                Privacy
              </p>
              <p className="text-sm font-normal leading-[30px] text-base-content">
                Cookies
              </p>
              <p className="text-sm font-normal leading-[30px] text-base-content">
                Sitemap
              </p>
              <p className="text-sm font-normal leading-[30px] text-base-content">
                Blog
              </p>
              <p className="text-sm font-normal leading-[30px] text-base-content">
                Jobs
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-3.5 ">
              <div className=" text-md font-normal leading-[30px] text-base-content">
                Subscribe
              </div>
              <div className=" text-center  text-sm font-normal leading-[30px] text-base-content">
                Join our mailing list for the latest updates and promotions.
              </div>
              <div className="flex w-full items-start justify-center gap-[9px]">
                <input
                  className="input input-bordered w-full"
                  type="text"
                  placeholder="Your email address"
                />
                <button className="btn btn-primary">Subscribe</button>
              </div>
              <div className=" text-center  text-sm font-normal leading-[30px] text-base-content">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from us.
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-[30px] border-t border-secondary  pt-11 md:flex-row md:justify-between">
            <div className="flex items-start justify-start gap-[63px] ">
              <div className="flex shrink grow basis-0 items-center justify-start gap-3">
                <div className=" text-md font-normal leading-[30px] text-base-content">
                  © 2023 Idevu. All rights reserved.
                </div>
                <div className=" text-sm font-normal leading-[30px] text-base-content">
                  Terms of Service
                </div>
                <div className=" text-sm font-normal leading-[30px] text-base-content">
                  Cookies Settings
                </div>
                <div className=" text-sm font-normal leading-[30px] text-base-content">
                  Privacy Policy
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-[25px]">
              <FaTelegram size={20} />
              <FaYoutubeSquare size={20} />
              <FaSquareXTwitter size={20} />
              <FaInstagramSquare size={20} />
              <FaFacebookSquare size={20} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
