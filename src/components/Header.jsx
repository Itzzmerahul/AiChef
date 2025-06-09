import chef from "../chef.png"


export default function Header(){
    return(
        <header className="header">
            <img src={chef} alt="chef" className="chefimg"/> 
            <span className="title">Chef Munusaamy</span>      
        </header>
    )
}