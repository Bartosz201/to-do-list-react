import { Header, SectionContainer, StyledSection } from "./styled";

const Section = ({title, extraHeaderContent, body}) => (
    <StyledSection>
        <SectionContainer>
            <Header>{title}</Header>
            {extraHeaderContent}
        </SectionContainer>
        {body}

    </StyledSection>
);

export default Section;