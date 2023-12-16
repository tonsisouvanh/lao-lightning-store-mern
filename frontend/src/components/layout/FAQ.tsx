import questionelement from "../../assets/svg/questionelement.svg";
import { mockQuestions } from "../../data/data";
import { headlinetStyle, sublinetStyle } from "../../globalStyle";

const Faq = () => {
  return (
    <div className="relative w-full h-full overflow-hidden my-[1rem] md:my-[4rem] lg:my-[6rem]">
      {/* <img
          src={diamond}
          className="absolute object-cover opacity-10 z-[-1] left-0 top-0 right-0 bottom-0 w-full h-full"
          alt=""
        /> */}
      <div className="container h-fit mx-auto p-[2rem] flex flex-col md:items-start justify-center items-center gap-[4.5rem] md:flex-row">
        <div className="flex w-full flex-col justify-start items-center gap-10">
          {/* headline */}
          <div className="flex flex-col gap-6 items-center">
            <div className="flex-col justify-center items-center gap-5 flex">
              <h1 className={headlinetStyle}>FAQ</h1>
              <p className={sublinetStyle}>
                Find answers to common questions and concerns about using
                Bitcoin for payments.
              </p>
            </div>
            <button className="btn btn-secondary font-normal">
              Sign Up
            </button>
          </div>
          {/* Image */}
          <div className="relative overflow-hidden w-full h-auto max-w-[10rem] md:max-w-sm">
            <img
              className="w-full h-full object-cover"
              src={questionelement}
              alt=""
            />
          </div>
        </div>
        {/* Question list */}
        <div className="flex-col justify-start items-start gap-[18px] flex">
          <div className="join join-vertical w-full">
            {mockQuestions.map((ele, index) => (
              <div
                key={index}
                className="collapse collapse-arrow join-item hover:bg-base-200 transition duration-300"
              >
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-lg font-medium">
                  {ele.title}
                </div>
                <div className="collapse-content">
                  <p className="">{ele.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
