import './styles.css';
import styled from'styled-components'

export const LogoComponent = (props) => {
    const { sizeLogo, sizeSlogan } = props

    const LabelLogo = styled.label `
        font-size: ${props => props.size};
    `
    const LabelSlogan = styled.label `
        font-size: ${props => props.size}
    `
    return (
        <div className = "logo-component-container">
            <LabelLogo className='main-logo' size = {sizeLogo}><strong>JOÃO </strong>SOUZA</LabelLogo>
            <LabelSlogan className = 'slogan-logo' size = {sizeSlogan}>Dev Front-end</LabelSlogan>
        </div>
    )
}