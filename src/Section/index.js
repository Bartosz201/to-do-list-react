import "./style.css";

const Section = ({title, extraHeaderContent, body}) => (
    <section className="section">
        <div className="section__container">
            <h2 className="section__header">{title}</h2>
            {extraHeaderContent}
        </div>
        {body}

    </section>
);

export default Section;