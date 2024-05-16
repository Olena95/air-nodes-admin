import { useEffect, useRef, useState } from "react";
import FAQArrow from "../icons/FAQArrow";
import FAQMinus from "../icons/FAQMinus";

const FAQItem = ({ question, isOpen, toggleQuestion }: any) => {
    const [maxHeight, setMaxHeight] = useState("0px");
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            setMaxHeight(`${contentRef.current?.scrollHeight}px`);
        } else {
            setMaxHeight("0px");
        }
    }, [isOpen]);

    return (
        <div
            className="border-b border-white/20 pb-[30px] cursor-pointer"
            onClick={() => toggleQuestion(question.id)}
        >
            <div className="flex items-center ">
                <div className="relative w-[43px] h-7 mr-5">
                    <div
                        className={`absolute transition-opacity duration-500 ${
                            isOpen ? "opacity-0" : "opacity-100"
                        }`}
                    >
                        <FAQArrow />
                    </div>
                    <div
                        className={`absolute transition-opacity duration-500 ${
                            isOpen ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <FAQMinus />
                    </div>
                </div>
                <div className="text-white text-[32px] font-bold leading-[35px]">
                    {question.title}
                </div>
            </div>
            <div
                ref={contentRef}
                style={{ maxHeight }}
                className="transition-max-height duration-700 ease-in-out overflow-hidden"
            >
                <div className="mt-[15px] max-w-[554.62px] ml-[63px] text-zinc-600 text-base font-medium  leading-tight">
                    {question.desc}
                </div>
            </div>
        </div>
    );
};
export default FAQItem;
