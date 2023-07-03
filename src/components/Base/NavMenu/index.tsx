import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  FunctionComponent,
  DetailedHTMLProps,
  HTMLAttributes
} from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { NavMenutWrap } from "./styles";

type commonProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type listsType = {
  id: number;
  label: string;
  url?: string | null;
};

interface customType {
  lists: listsType[];
  borderColor?: string;
  bgColor?: string;
  fontSize?: string | number;
}

interface IMenuPos {
  [key: string]: number;
}

const NavMenu: FunctionComponent<customType & commonProps> = ({
  lists,
  ...rest
}) => {
  const { pathname } = useLocation();
  const listChildrenRefs = useRef<HTMLElement[]>([]);
  const selectedElRef = useRef<HTMLElement | null>(null);
  const activeRef = useRef<HTMLLIElement | null>(null);

  const Lists = useMemo(() => lists, [lists]);
  const paths = pathname.split("/");
  const searchPathName = paths[paths.length - 1];

  const onSelectedMenu = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      const targetEl = listChildrenRefs.current.find((el) => el === e.target);
      selectedElRef.current = targetEl as HTMLElement;
    },
    []
  );

  const getPathNameIdx = useCallback(
    (lists: listsType[]): number => {
      return lists.findIndex((item) => {
        const urlparts = (item.url as string).split("/");
        const pathLastPart = urlparts[urlparts.length - 1];
        return pathLastPart === searchPathName;
      });
    },
    [searchPathName]
  );

  const pathNameIdx = Lists[0].url && getPathNameIdx(Lists);

  const menuInitPos: IMenuPos = useMemo(
    () => ({
      "0": 0,
      "1": 1,
      "2": 2
    }),
    []
  );

  const activeLiPos =
    menuInitPos[pathNameIdx ?? 0] * Number((100 / lists.length).toFixed(1));

  useEffect(() => {
    if (activeRef.current) {
      const curElementPos = activeLiPos;
      activeRef.current.style.left = `${curElementPos}%`;
    }
  }, [Lists, pathNameIdx, menuInitPos, activeLiPos, selectedElRef]);

  const pushToRefs = useCallback(
    (el?: any) => listChildrenRefs.current.push(el),
    []
  );

  return (
    <NavMenutWrap {...rest}>
      <ul>
        <li
          className="active"
          ref={activeRef}
          style={{ left: `${activeLiPos}%` }}
        ></li>
        {Lists.map((list, idx) => (
          <li key={idx} onClick={onSelectedMenu}>
            {list.url ? (
              <Link to={list.url} ref={pushToRefs}>
                {list.label}
              </Link>
            ) : (
              <span ref={pushToRefs}>{list.label}</span>
            )}
          </li>
        ))}
      </ul>
    </NavMenutWrap>
  );
};

export default React.memo(NavMenu);
