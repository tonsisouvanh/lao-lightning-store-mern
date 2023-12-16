import howitworks from "../../assets/images/howitworks.png";
import polygonluminary from "../../assets/svg/polygonluminary.svg";
import { headlinetStyle, sublinetStyle } from "../../globalStyle";

const HowItWorks = () => {

  return (
    <div className="relative my-[1rem] h-full w-full overflow-hidden md:my-[4rem] lg:my-[6rem]">
      <img
        src={polygonluminary}
        className="absolute bottom-0 left-0 right-0 top-0 z-[-1] h-full w-full object-cover opacity-5"
        alt=""
      />
      <div className="container mx-auto flex flex-col items-center justify-center gap-[1.8rem] p-[2rem] md:flex-row md:items-center md:justify-center">
        <div className="flex flex-col items-start justify-center gap-5 md:gap-12">
          <h1 className={headlinetStyle}>
            Discover the Simplicity of Bitcoin Payments through Lightning
            Network
          </h1>
          <p className={sublinetStyle}>
            Experience fast and secure transactions with Bitcoin's lightning
            network. Say goodbye to traditional payment methods and embrace the
            future of digital currency.
          </p>
          {/* Desktop */}
          <div className="hidden items-start justify-start gap-4 md:flex">
            <div className="flex flex-col items-center justify-center gap-[18px]">
              <div className={headlinetStyle}>50%</div>
              <p className="text-center text-xs font-light text-secondary lg:text-base">
                Shop at your favorite stores and pay with Bitcoin.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-[18px]">
              <div className={headlinetStyle}>50%</div>
              <p className={"text-center text-xs font-light text-secondary lg:text-base"}>
                Experience the convenience of Bitcoin payments today.
              </p>
            </div>
          </div>
        </div>
        <div className="h-auto w-full">
          <img className="h-full w-full object-cover" src={howitworks} />
        </div>
        {/* Mobile */}
        <div className="flex items-center justify-between gap-4 md:hidden">
          <div className="flex flex-col items-center justify-center gap-[18px]">
            <div className="text-2xl font-bold leading-7">50%</div>
            <div className={sublinetStyle}>
              Shop at your favorite stores and pay with Bitcoin.
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[18px]">
            <div className="text-2xl font-bold leading-7">50%</div>
            <div className={sublinetStyle}>
              Experience the convenience of Bitcoin payments today.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
