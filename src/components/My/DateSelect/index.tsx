import { useState, useCallback, useMemo, useEffect } from "react";
import { DateSelectWrap } from "./styles";

const DateSelect = () => {
  const period = useMemo(() => [{id: 1, text: "오늘", isSelected: false}, {id: 2, text: "한 주", isSelected: false}, {id: 3, text: "한 달", isSelected: false}, {id: 4, text: "3개월", isSelected: false}], []);

  const [selector, setSelector] = useState(period);
  const onSelectedMenu = useCallback(
    (text: string, e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
       console.log(text, e.target)        
    },
    []
  );
  useEffect(() => {
    console.log({ selector });
  }, [selector]);
  return (
    <DateSelectWrap>
      <ul>
        {period.map((date, idx) => (
          <li
            key={idx}
            onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent> ) => {
              const targetText = date.text;
              onSelectedMenu(targetText, e)
            }}
            className={`${date.isSelected ? "selected" : ""}`}
          >
            {date.text}
          </li>
        ))}
      </ul>
    </DateSelectWrap>
  );
};

export default DateSelect;
