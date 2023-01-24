import "./style.css";

const Section = (props) => (
    <section className="section section--tasks">
        <div className="section__container">
            <h2 className="section__header section__header-second">{props.title}</h2>
            {props.extraHeaderContent}
        </div>
        {props.body}

    </section>
);

export default Section;