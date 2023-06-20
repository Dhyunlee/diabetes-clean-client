import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { NavMenutWrap } from "./styles";

interface Iprops {
  lists: {
    id: number;
    text: string;
    url?: string | null;
  }[];
  bgColor?: string;
  fontSize?: string | number;
}

const NavMenu = ({ lists, bgColor, fontSize }: Iprops) => {
  const listChildrenRefs = useRef<HTMLElement[]>([]);
  const activeRef = useRef<HTMLLIElement | null>(null);
  const selectedElRef = useRef<HTMLElement | null>(null);
  const [selector, setSelector] = useState("");

  const Lists = useMemo(() => lists, [lists]);

  const onSelectedMenu = useCallback(
    (text: string, e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      setSelector(text);
      const targetEl = listChildrenRefs.current.find((el) => {
        return el === e.target;
      });
      selectedElRef.current = targetEl as HTMLElement;
    },
    []
  );

  useEffect(() => {
    if (selectedElRef.current && activeRef.current) {
      activeRef.current.style.left = "15px";
      const curElementWith = selectedElRef.current.parentElement?.offsetWidth;
      const curElementPos = selectedElRef.current.parentElement?.offsetLeft;
      activeRef.current.style.width = `${curElementWith}px`;
      activeRef.current.style.left = `${curElementPos}px`;
    }
  }, [selectedElRef, selector]);

  const pushToRefs = useCallback(
    (el?: any) => listChildrenRefs.current.push(el),
    []
  );

  return (
    <NavMenutWrap bgColor={bgColor} fontSize={fontSize}>
      <ul>
        <li className="active" ref={activeRef}></li>
        {Lists.map((list, idx) => (
          <li
            key={idx}
            onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
              const targetText = list.text;
              onSelectedMenu(targetText, e);
            }}
          >
            {list.url ? (
              <Link to={list.url} ref={pushToRefs}>
                {list.text}
              </Link>
            ) : (
              <span ref={pushToRefs}>{list.text}</span>
            )}
          </li>
        ))}
      </ul>
    </NavMenutWrap>
  );
};

export default React.memo(NavMenu);
