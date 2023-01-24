import "./style.css"

const Conteiner = (props) => (
    <main className="content">
        {props.children}
    </main>
);

export default Conteiner;