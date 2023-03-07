import './styles.css';

export const CardProjects = (props) => {
    const { title } = props;
    return (
       <div className="card">
            <div className="img-project">
            </div>
            <h5>{title}</h5>
       </div>
    )
}