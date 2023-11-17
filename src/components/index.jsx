import { useContext } from "react";
import { subject as subjectProvider } from "../context/subjectProvider";
import { methods as methodsProvider } from "../context/methodsProvider";
import { v4 as uuidV4 } from "uuid";

export default function Index() {
  const subject = useContext(subjectProvider);
  const { setStep, setSubject } = useContext(methodsProvider);
  const renderedOptions = subject.quizzes.map((per) => {
    const uniqueId = uuidV4();
    return (
      <button
        key={uniqueId}
        type="button"
        value={per.title}
        className="flex items-center gap-[16px] rounded-[12px] bg-[#3B4D66] p-[12px] text-[18px] font-medium capitalize leading-[100%] text-white shadow-[0px_16px_40px_0px_rgba(49,_62,_81,_0.14)]"
        onClick={(e) => {
          const subjectData = subject.quizzes.find(
            (per) => per.title === e.currentTarget.value,
          );
          setSubject(subjectData);
          setStep("play");
        }}
      >
        <span className="grid aspect-square w-[40px] place-items-center rounded-[12px] bg-white">
          <img
            className="aspect-square w-[28px] object-contain"
            src={per.icon}
          />
        </span>
        <span>{per.title}</span>
      </button>
    );
  });
  ////////////////
  //final return//
  ////////////////
  return (
    <section className="justify-between pt-[32px]  lg:flex">
      <article className="text-white">
        <h1 className="text-[40px] font-light leading-[100%] lg:text-[64px]">
          Welcome to the <br />
          <strong className="font-medium">Frontend Quize!</strong>
        </h1>
        <p className="mt-[16px] text-[14px] font-normal leading-[150%] lg:mt-[48px] lg:text-[20px]">
          <em>Pick a subject to get started</em>
        </p>
      </article>
      <div className="mt-[40px] grid basis-[564px] gap-[12px] lg:mt-0">
        {renderedOptions}
      </div>
    </section>
  );
}
