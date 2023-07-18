import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { useRecoilValue } from "recoil";
import Input from "components/Base/Input";
import { userState } from "store/userState";
import { useModal } from "hooks/common/useModal";
import { useCreateDiabetes } from "hooks/service/mutator";
import { ISelectedSlotItem, selectedSlotItem } from "libs/slotItem";
import alertHandler, { alertMessage } from "utils/functions/alertHandler";
import { ROUTER_PATH } from "constants/router_path";
import {
  ButtonGroup,
  FormWrap,
  InputGroup,
  InputWrap,
  LabelWrap,
  Select,
  TextareaGroup,
  UnitTextWrap
} from "./styles";

const FormDiabetes = () => {
  const { INDEX } = ROUTER_PATH;
  const { closeModal } = useModal();
  const navigate = useNavigate();
  const { _id: userId } = useRecoilValue(userState);
  const [sugarLevel, setSugarLevel] = useState<number | string>("");
  const [slot, setSlot] = useState<string>("");
  const [inutMemo, setInutMemo] = useState("");
  const [createdDate, setCreatedDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [createdTime, setCreatedTime] = useState(dayjs().format("HH:mm"));
  const useMutate = useCreateDiabetes();

  const onChangeSugarLevel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSugarLevel(Number(e.target.value) || "");
  };

  const onChangeMemo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInutMemo(e.target.value);
  };

  const onChangeWrittenDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreatedDate(e.target.value);
    console.log(e.target.value);
  };

  const onChangeWrittenTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreatedTime(e.target.value);
  };

  const onChnageSlot = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log({ slot: e.target.value });
    setSlot(e.target.value);
  };

  const onCancal = () => {
    alertHandler
      .onConfirm({
        icon: "warning",
        innerHtml:
          "<p>페이지를 떠나면 기록한 내용이 모두 없어집니다.<br />그래도 떠나시겠습니까?</p>"
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate(-1);
          closeModal();
        } else if (result.isDismissed) {
          alertHandler.onToast({ msg: alertMessage.cancelMsg });
          closeModal();
        }
      });
  };
  const onWriteMemo = () => {
    const createdAt: string = dayjs(`${createdDate} ${createdTime}`).format(
      "YYYY-MM-DD HH:mm:ss"
    );
    const insertData = {
      writer: userId,
      sugar_level: Number(sugarLevel),
      slot,
      note: inutMemo,
      createdAt
    };

    if (sugarLevel && slot) {
      useMutate.mutate(insertData);
      navigate(INDEX, { replace: true });
    } else {
      const text = !sugarLevel
        ? "당수치를 입력해주세요"
        : "시간대를 입력해주세요";
      alertHandler.onToast({ msg: text, icon: "info" });
    }
  };

  return (
    <>
      <FormWrap>
        <InputGroup>
          <LabelWrap>
            <label>날짜</label>
          </LabelWrap>
          <InputWrap>
            <Input
              style={{ width: 150 }}
              type="date"
              value={createdDate}
              onChange={onChangeWrittenDate}
              required
            />
          </InputWrap>
        </InputGroup>
        <InputGroup>
          <LabelWrap>
            <label>시간</label>
          </LabelWrap>
          <InputWrap>
            <Input
              style={{ width: 150 }}
              type="time"
              value={createdTime}
              onChange={onChangeWrittenTime}
              required
            />
          </InputWrap>
        </InputGroup>
        <InputGroup>
          <LabelWrap>
            <label>시간대</label>
          </LabelWrap>
          <InputWrap>
            <Select style={{ width: 150 }} onChange={onChnageSlot}>
              {selectedSlotItem.map(({ id, slot, dec }: ISelectedSlotItem) => (
                <option key={id} value={slot}>
                  {dec}
                </option>
              ))}
            </Select>
          </InputWrap>
        </InputGroup>
        <InputGroup>
          <LabelWrap>
            <label>당수치</label>
          </LabelWrap>
          <InputWrap>
            <Input
              value={sugarLevel}
              maxLength={3}
              placeholder="당수치를 입력해주세요"
              pattern="[0-9]+"
              onChange={onChangeSugarLevel}
              required
            />
          </InputWrap>
          <UnitTextWrap>
            <span>mg/dl</span>
          </UnitTextWrap>
        </InputGroup>
        <TextareaGroup>
          <textarea
            value={inutMemo}
            placeholder="오늘 당관리는 어떠셨나요?"
            onChange={onChangeMemo}
          />
        </TextareaGroup>
        <ButtonGroup>
          <button type="reset" onClick={onCancal}>
            취소하기
          </button>
          <button type="submit" onClick={onWriteMemo}>
            기록하기
          </button>
        </ButtonGroup>
      </FormWrap>
    </>
  );
};

export default FormDiabetes;
