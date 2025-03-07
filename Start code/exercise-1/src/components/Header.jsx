import PNlogo from '../assets/pn-logo.png';

export default function Header({courses}) {
    return (
        <header id="header">
        <img src={PNlogo} alt="PN Logo" />
        <h1>Students results for {courses}</h1>
        </header>
    );
    }


