import './styles.css';

export const CardProjects = (props) => {
    const { title, img } = props;
    return (
        <img src= {img}/>
    )
}