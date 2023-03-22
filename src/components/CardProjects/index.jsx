import './styles.css';

export const CardProjects = (props) => {
    const {img, description, url, urlGit } = props;
    return (
        <div className =  "card-project">
            <div className="img"><img className = "img-stack" src= {img}/></div>
            <p>{description}</p>
            <div className="btn-acess">
                <button className='card-project-button'>
                    <a href={url} target = '_blank'>Ver App</a>
                </button>
                <button className='card-project-button'><a href={urlGit}  target = '_blank'>GitHub</a></button>
            </div>
        </div>
    )
}