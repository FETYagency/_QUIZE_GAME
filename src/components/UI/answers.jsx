import { useContext, useEffect, useRef, useState } from "react";
import error from "../../../assets/images/icon-error.svg";
import correct from "../../../assets/images/icon-correct.svg";
export default function Answers({
  currentQuestion,
  handleCurrentQuestion,
  handleScore,
  subject,
  currentScore,
}) {
  const { questions } = subject;
  const { options, answer } = questions[currentQuestion];
  const form = useRef(null);
  let [status, setStatus] = useState("idle");
  let [selectedAnswer, setSelectedAnswer] = useState(undefined);

  let answerResult = function (hint) {
    let isChecked = status === "passed" && hint === selectedAnswer;
    let isCorrect = status === "passed" && hint === answer;
    return {
      isChecked,
      isCorrect,
    };
  };
  const renderedOptions = options.map((per, i) => {
    const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"];
    const x = answerResult(per);
    console.log(x);
    return (
      <>
        <input
          className={`absolute h-0 w-0 opacity-0`}
          type="radio"
          name="answer"
          id={`radio_${i}`}
          value={per}
          onChange={(e) => setSelectedAnswer(e.target.value)}
          required
          disabled={status === "passed"}
        />
        <label
          className={`relative flex cursor-pointer items-center gap-[22px] rounded-[14px] border-[3px] bg-[#3B4D66] p-[16px] shadow-[0px_16px_40px_0px_rgba(49,62,81,0.14)] ${
            x.isChecked === true && x.isCorrect === true
              ? "border-[#26D782]"
              : x.isChecked === true && x.isCorrect === false
                ? "border-[#EE5454]"
                : per === selectedAnswer && status !== "passed"
                  ? "border-white"
                  : "border-transparent"
          }`}
          key={i}
          htmlFor={`radio_${i}`}
        >
          <span className="grid aspect-square w-[46px] shrink-0 place-items-center rounded-[16px] bg-white text-[18px] font-medium capitalize leading-[100%] text-[#626C7F]">
            {alphabets[i]}
          </span>
          <span className="text-[18px] font-medium leading-[100%] text-white">
            {per}
          </span>
          {(x.isChecked || x.isCorrect) && (
            <span className="ml-auto grid aspect-square w-[30px] shrink-0 place-items-center [&_img]:object-contain">
              {per === answer ? <img src={correct} /> : <img src={error} />}
            </span>
          )}
        </label>
      </>
    );
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      ref={form}
      className="mt-[64px] basis-[564px] pb-[47px] lg:mt-0"
    >
      <div className="grid gap-[12px]">{renderedOptions}</div>
      <button
        type="submit"
        className="mt-[32px] w-full rounded-[14px] bg-[#A729F5] p-[22px] text-[18px] font-medium leading-[100%] text-white"
        onClick={(e) => {
          if (form.current.reportValidity()) {
            setStatus("passed");
          } else {
            setStatus("invalid");
          }
          if (status === "passed") {
            handleCurrentQuestion(++currentQuestion);
            if (selectedAnswer === answer) {
              handleScore(++currentScore);
            }
          }
        }}
      >
        {status === "passed" ? "Next Question" : "Submit Answer"}
      </button>
      {status === "invalid" && (
        <p className="m-auto mt-[32px] flex w-fit items-center gap-[8px] text-[18px] leading-[100%] text-white">
          <span className="grid aspect-square w-[32px] place-items-center [&_img]:object-contain">
            <img src={error} />
          </span>
          Please select an answer
        </p>
      )}
    </form>
  );
}
