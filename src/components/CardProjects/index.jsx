import './styles.css';

export const CardProjects = (props) => {
    const { title, img, description } = props;
    return (
        <div className =  "card-project">
            <div className="img"><img className = "img-stack" src= {img}/></div>
            <p>{description}</p>
            <button className='card-project-button'>Acessar</button>
        </div>
    )
}