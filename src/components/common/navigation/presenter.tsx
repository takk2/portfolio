import * as S from "./styles";

const TAB_JSON = [
  { id: "1", tab: "Main" },
  { id: "2", tab: "About Me" },
  { id: "3", tab: "Skill" },
  { id: "4", tab: "Portfolio" },
  { id: "5", tab: "Contact" },
];

const NavigationPresenter = () => {
  return (
    <S.Wrapper>
      <S.ProfileWrapper>
        <div></div>
      </S.ProfileWrapper>
      <ul>
        {TAB_JSON.map(el => (
          <li key={el.id}>
            <a>{el.tab}</a>
          </li>
        ))}
      </ul>
    </S.Wrapper>
  );
};
export default NavigationPresenter;
