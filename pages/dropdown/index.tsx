import styled from "@emotion/styled";
import React, { useRef, useState } from "react";

const LIST_DATA = [
  { id: 0, value: "고용형태" },
  { id: 1, value: "정규직" },
  { id: 2, value: "계약직" },
  { id: 3, value: "단기계약직" },
];

const DropDownCustomPage = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleBtnRef = useRef(!null);

  const onToggleSelectBox = () => {
    if (isOpen) {
      setIsOpen(false);
    } else setIsOpen(true);
  };

  const handleClickValue = (event: any) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Wrapper>
      <SelectBoxOrigin>
        {LIST_DATA.map(e => (
          <option key={e.id}>{e.value}</option>
        ))}
      </SelectBoxOrigin>

      {/* custom */}
      <CustomDropDownWrapper>
        <CustomToggleButton type="button" onClick={onToggleSelectBox}>
          <span>{selectedValue}</span>
          <span>▾</span>
        </CustomToggleButton>
        {isOpen && (
          <DropDown role="menu">
            <ul>
              {LIST_DATA.map(e => (
                <li key={e.id} value={e.value} onClick={handleClickValue}>
                  {e.value}
                </li>
              ))}
            </ul>
          </DropDown>
        )}
      </CustomDropDownWrapper>
    </Wrapper>
  );
};

export default DropDownCustomPage;

//styled
const Wrapper = styled.div`
  width: 100%;
`;

const SelectBoxOrigin = styled.select`
  width: 100px;
`;

const CustomDropDownWrapper = styled.div`
  position: relative;
  width: 120px;
  margin-left: 100px;
`;

const CustomToggleButton = styled.button`
  width: 100px;
  height: 20px;

  border: 1px solid #bdbdbd;
`;
const DropDown = styled.div`
  position: absolute;
  width: 100px;
  border: 1px solid #bdbdbd;
`;
