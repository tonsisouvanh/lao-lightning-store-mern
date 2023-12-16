import { lightningelement } from "../../assets/images/index";
import walletsignupbg from "../../assets/svg/walletsignupbg.svg";
import { headlinetStyle, sublinetStyle } from "../../globalStyle";

const LightningWalletSignup = () => {
  return (
    <div className="relative my-[1rem] h-full w-full overflow-hidden bg-base-200 md:my-[4rem] lg:my-[6rem]">
      {/* <img
        src={diamond}
        className="absolute object-cover opacity-10 z-[-1] left-0 top-0 right-0 bottom-0 w-full h-full"
        alt=""
      /> */}
      <div className="container mx-auto flex h-fit flex-col items-center justify-center gap-[4.5rem] p-[2rem] md:flex-row">
        <div className="gap-10 md:flex md:flex-col">
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className={headlinetStyle}>
              Experience the Benefits of Bitcoin Transactions
            </h1>
            <p className={sublinetStyle}>
              Bitcoin offers a range of advantages for transactions. With low
              fees, fast transfers, and global acceptance, it's the perfect
              solution for seamless payments.
            </p>
          </div>
          <div className="hidden w-full items-center justify-start gap-6 md:flex">
            <button className="btn btn-secondary min-w-[8rem] font-normal">
              Sign Up
            </button>
            <button className="btn btn-outline btn-secondary min-w-[8rem]">
              Learn More
            </button>
          </div>
        </div>
        <div className="relative h-auto w-full overflow-hidden">
          <img
            className="h-full w-full object-cover opacity-0"
            src={walletsignupbg}
            alt=""
          />
          <div className="absolute bottom-0 right-0 top-0 w-fit">
            <img
              className="h-full w-full object-contain"
              src={lightningelement}
              alt=""
            />
          </div>
          <div className="absolute bottom-0 right-0 top-0 w-fit">
            <img
              className="h-full w-full object-contain"
              src={walletsignupbg}
              alt=""
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-6 md:hidden">
          <button className="btn btn-secondary font-normal">Sign Up</button>
          <button className="btn btn-outline btn-secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default LightningWalletSignup;
