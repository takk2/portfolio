import theme from "@/src/common/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.aside`
  width: 200px;
  height: 80vh;
  background-color: ${theme.colors.main.point};
  opacity: 0.4;

  div {
    text-align: center;
  }
`;
