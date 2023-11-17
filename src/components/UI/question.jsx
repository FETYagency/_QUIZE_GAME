import { useEffect } from "react";

export default function Questions({ subject, currentQuestion }) {
  const { questions } = subject;
  const { question } = questions[currentQuestion];
  const questionLength = questions.length;
  let barLength = ((currentQuestion + 1) * 100) / questionLength;

  useEffect(() => {
    document.documentElement.style.setProperty("--length", barLength + "%");
  }, [barLength]);

  return (
    <div className="basis-[456px]">
      <article>
        <p className="text-[14px] font-normal italic leading-[150%] text-[#ABC1E1] lg:text-[20px]">{`Question ${
          currentQuestion + 1
        } of ${questionLength}`}</p>
        <h2 className="mt-[12px] text-[20px] font-medium leading-[120%] text-white lg:text-[36px]">
          {question}
        </h2>
      </article>
      <div className="mt-[24px] rounded-[999px] bg-[#3B4D66] p-[4px] lg:mt-[164px]">
        <div className="h-[8px] w-[--length] rounded-[104px] bg-[#A729F5] transition-all"></div>
      </div>
    </div>
  );
}
