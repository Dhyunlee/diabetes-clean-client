import { useState } from "react";
import { ISelectedSlotItem, selectedSlotItem } from "libs/slotItem";
import {
  ButtonGroup,
  FormWrap,
  InputGroup,
  InputWrap,
  LabelWrap,
  Select,
  TextareaGroup,
  UnitTextWrap,
} from "./styles";
import Input from "components/Base/Input";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import dayjs from "dayjs";
import { useMutation, useQueryClient } from "react-query";
import { createDiabetes } from "utils/apis/diabetesApis";
import { iDiabetesRequest } from "models/db";
import { userState } from "store/userState";

const FormDiabetes = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { _id: userId } = useRecoilValue(userState);
  const [sugarLevel, setSugarLevel] = useState<string | number>("");
  const [slot, setSlot] = useState<string>("");
  const [inutMemo, setInutMemo] = useState("");
  const [createdDate, setCreatedDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [createdTime, setCreatedTime] = useState(dayjs().format("HH:mm"));

  const useMutate = useMutation(createDiabetes<iDiabetesRequest>, {
    onSuccess: () => {
      queryClient.invalidateQueries<string>(["diabetes"]);
      navigate("/", { replace: true });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onChangeGI = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSugarLevel(e.target.value);
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
    setSlot(e.target.value);
  };

  const onWriteMemo = (e: React.MouseEvent<HTMLButtonElement>) => {
    const createdAt: string = dayjs(`${createdDate} ${createdTime}`).format(
      "YYYY-MM-DD HH:mm:ss"
    );
    const insertData = {
      writer: userId,
      sugar_level: Number(sugarLevel),
      slot,
      note: inutMemo,
      createdAt,
    };
    useMutate.mutate(insertData);
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
              onChange={onChangeGI}
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
          <button type="reset" onClick={() => navigate(-1)}>
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
