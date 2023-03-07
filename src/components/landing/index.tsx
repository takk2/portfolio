import theme from "@/src/common/styles/theme";
import styled from "@emotion/styled";
import AboutContainer from "../about";
import ContactContainer from "../contact";
import MainContainer from "../main";
import SkillContainer from "../skill";

const Wrapper = styled.section`
  width: 100%;
  padding: 0 50px;
  /* border: 1px solid blue; */
`;

const LandingContainer = () => {
  return (
    <Wrapper>
      <MainContainer />
      <AboutContainer />
      <SkillContainer />
      <ContactContainer />
    </Wrapper>
  );
};

export default LandingContainer;
