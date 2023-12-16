import {
  diamond,
  globalNetwork,
  priceDown,
  transaction,
} from "../../assets/images/index";
import { headlinetStyle, sublinetStyle } from "../../globalStyle";

const Benefit = () => {
  return (
    <div className="relative my-[1rem] h-full w-full overflow-hidden md:my-[4rem] lg:my-[6rem]">
      <img
        src={diamond}
        className="absolute bottom-0 left-0 right-0 top-0 z-[-1] h-full w-full object-cover opacity-10"
        alt=""
      />
      <div className="container mx-auto flex h-fit flex-col items-center justify-center gap-[4.5rem] p-[2rem]">
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-12">
          <h1 className={headlinetStyle}>
            Experience the Benefits of Bitcoin Transactions
          </h1>
          <p className={sublinetStyle}>
            Bitcoin offers a range of advantages for transactions. With low
            fees, fast transfers, and global acceptance, it's the perfect
            solution for seamless payments.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-[35px] px-[57px] md:flex-row">
          <div className="flex flex-col items-center justify-start gap-3.5 self-stretch">
            <img className="h-[3.5rem] w-[3.5rem]" src={priceDown} />
            <div
              className={`text-center text-xl font-semibold text-secondary lg:text-3xl lg:leading-tight`}
            >
              Low Fees
            </div>
            <div
              className={`lg:text-md text-center text-sm font-light font-normal leading-normal text-secondary md:leading-tight`}
            >
              Enjoy minimal transaction costs with Bitcoin.
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-3.5 self-stretch">
            <img className="h-[3.5rem] w-[3.5rem]" src={transaction} />
            <div
              className={`text-center text-xl font-semibold text-secondary lg:text-3xl lg:leading-tight`}
            >
              Fast transaction
            </div>
            <div
              className={`lg:text-md text-center text-sm font-light leading-normal text-secondary md:leading-tight`}
            >
              Experience quick and efficient transfers with Bitcoin.
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-3.5 self-stretch">
            <img className="h-[3.5rem] w-[3.5rem]" src={globalNetwork} />
            <div
              className={`text-center text-xl font-semibold text-secondary lg:text-3xl lg:leading-tight`}
            >
              Global Acceptance
            </div>
            <div
              className={`lg:text-md text-center text-sm font-light font-normal leading-normal text-secondary md:leading-tight`}
            >
              Use Bitcoin to make payments anywhere in the world.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
