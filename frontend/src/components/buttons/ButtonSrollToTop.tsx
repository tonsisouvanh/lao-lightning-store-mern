import { useEffect, useState } from "react";
import { AiFillCaretUp } from "react-icons/ai";

const ButtonSrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showTopBtn && (
        <button
          onClick={goToTop}
          className="btn btn-square btn-sm btn-outline fixed bottom-10 left-10 z-[10]"
        >
          <AiFillCaretUp size={24}/>
        </button>
      )}
    </>
  );
};

export default ButtonSrollToTop;
