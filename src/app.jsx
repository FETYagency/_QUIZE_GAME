import { useContext, useState } from "react";
import { subject as subjectProvider } from "./context/subjectProvider";
import { methods as methodsProvider } from "./context/methodsProvider";
import Index from "./components";
import Quize from "./components/quize";
import Header from "./components/header";

export default function Game() {
  let initialData = useContext(subjectProvider);
  let [step, setStep] = useState("choose");
  let [subject, setSubject] = useState(null);
  return (
    <subjectProvider.Provider value={subject ?? initialData}>
      <methodsProvider.Provider value={{ setStep, setSubject }}>
        <main className="font-design min-h-screen bg-[#313E51] px-[24px] lg:px-0">
          <div className="m-auto max-w-[1110px]">
            <Header />
            {step === "choose" && <Index />}
            {step === "play" && <Quize />}
          </div>
        </main>
      </methodsProvider.Provider>
    </subjectProvider.Provider>
  );
}
