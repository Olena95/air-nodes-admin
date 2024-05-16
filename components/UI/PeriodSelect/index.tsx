import React, { useState } from "react";
interface IPeriodSelector {
    onChange: (f: string, value: number | undefined) => void;
}

const PeriodSelector = ({ onChange }: IPeriodSelector) => {
    const [period, setPeriod] = useState<number>();
    const selectPeriod = (number: number) => {
        if (number === period) {
            setPeriod(0);
            onChange("period", undefined);
        } else {
            onChange("period", number);
            setPeriod(number);
        }
    };
    return (
        <div className="flex divide-x border overflow-hidden rounded-[15px]">
            {Array.from([1, 2, 3]).map((item) => (
                <div
                    onClick={() => selectPeriod(item)}
                    key={item}
                    className={`${
                        period === item ? "bg-black text-white" : "text-black "
                    } w-[68px] text-center text-2xl font-medium leading-[31.20px] py-[9.5px] cursor-pointer`}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default PeriodSelector;
