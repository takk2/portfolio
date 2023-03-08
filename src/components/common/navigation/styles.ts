import theme from "@/src/common/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.aside`
  width: 445px;
  height: 100vh;
  border-radius: 0 50px 50px 0;
  background-color: rgba(96, 142, 183, 0.2);

  ul {
    margin-top: 62px;
    margin-left: 50px;
  }
  li {
    margin-bottom: 74px;
  }
  a {
    font-size: ${theme.fontSize.fs40};
    font-weight: 300;
    line-height: 48px;
  }
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  padding: 26px;
  border-bottom: 1px solid #bdbdbd;

  div {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #d9d9d9;
  }
`;
