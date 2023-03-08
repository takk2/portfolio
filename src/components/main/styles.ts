import theme from "@/src/common/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const AvatarWrapper = styled.p`
  width: 600px;
  height: 600px;
  margin: 0 auto;
  background-color: #d9d9d9;
  border-radius: 50%;
`;

export const MainCopy = styled.h1`
  margin-top: 104px;
  font-size: ${theme.fontSize.fs100};
  font-weight: 300;
  line-height: 110%;
  text-align: center;
`;
