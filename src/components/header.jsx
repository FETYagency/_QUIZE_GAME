import { useContext, useEffect, useState, useSyncExternalStore } from "react";
import { subject as subjectProvider } from "../context/subjectProvider";
import sun from "../../assets/images/icon-sun-dark.svg";
import moon from "../../assets/images/icon-moon-dark.svg";
import { getSnapShot, isDark, subscriber } from "../utils/isDark";

export default function Header() {
  const subject = useContext(subjectProvider);
  let sync = useSyncExternalStore(subscriber, getSnapShot);
  let [theme, setTheme] = useState(sync);
  useEffect(() => {
    isDark(theme ? "toDark" : "toLight");
  }, [theme]);
  useEffect(() => {
    setTheme(sync);
  }, [sync]);
  ////////////////
  //final return//
  ////////////////
  return (
    <header className="flex h-[72px] items-center bg-transparent lg:mb-[75px]">
      {!("quizzes" in subject) && (
        <div className="flex items-center gap-[16px]">
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
      )}
      <div className="ml-auto flex items-center gap-[8px]">
        <span className="aspect-square w-[16px]">
          <img className="h-full w-full object-contain" src={sun} />
        </span>
        <button
          type="button"
          onClick={() => setTheme(!theme)}
          className="rounded-[999px] bg-[#A729F5] p-[4px]"
        >
          <span className="flex h-[12px] w-[24px] dark:justify-end">
            <span className="block aspect-square h-full rounded-[50%] bg-white"></span>
          </span>
        </button>
        <span className="aspect-square w-[16px]">
          <img className="h-full w-full object-contain" src={moon} />
        </span>
      </div>
    </header>
  );
}
