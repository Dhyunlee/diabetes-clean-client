import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  FunctionComponent,
  DetailedHTMLProps,
  HTMLAttributes
} from "react";
import { Link } from "react-router-dom";
import { NavMenutWrap } from "./styles";

type commonProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface customType {
  lists: {
    id: number;
    text: string;
    url?: string | null;
  }[];
  borderColor?: string;
  bgColor?: string;
  fontSize?: string | number;
}

const NavMenu: FunctionComponent<customType & commonProps> = ({
  lists,
  ...rest
}) => {
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
    <NavMenutWrap {...rest}>
      <ul>
        <li className="active" ref={activeRef} style={{ left: "3%" }}></li>
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
