import './styles.css';

export const CardProjects = (props) => {
    const { title, img } = props;
    return (
        <img className = "img-stack" src= {img}/>
    )
}