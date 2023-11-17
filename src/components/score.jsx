import { useContext } from "react";
import { methods as methodsProvider } from "../context/methodsProvider";

export default function Score({ score, questionsLength, subject }) {
  const { setStep, setSubject } = useContext(methodsProvider);
  return (
    <>
      <h2 className="text-[44px] font-light leading-[100%] text-white lg:text-[64px]">
        Quiz completed <br />
        <strong className="font-medium">You scored...</strong>
      </h2>
      <div className="mt-[54px] flex basis-[546px] flex-col items-center gap-[40px] rounded-[14px] bg-[#3B4D66] p-[38px] text-center lg:mt-0">
        <div className="flex items-center gap-[14px]">
          <span className="grid aspect-square w-[40px] place-items-center rounded-[12px] bg-white">
            <img
              className="aspect-square w-[28px] object-contain"
              src={subject.icon}
            />
          </span>
          <span className="text-[18px] font-medium capitalize leading-[100%] text-white">
            {subject.title}
          </span>
        </div>
        <p className="leading-[150% text-[14px]] text-[#ABC1E1]">
          <span className="text-[134px] font-medium leading-[100%] text-white">
            {score}
          </span>
          <br /> out of {questionsLength}
        </p>
        <button
          type="button"
          className="mt-[32px] w-full rounded-[14px] bg-[#A729F5] p-[22px] text-[18px] font-medium leading-[100%] text-white"
          onClick={() => {
            setStep("choose");
            setSubject(null);
          }}
        >
          Play Again
        </button>
      </div>
    </>
  );
}
