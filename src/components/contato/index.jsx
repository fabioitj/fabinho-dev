import { useState } from "react";
import "./style.scss"
import emailjs from "@emailjs/browser";
import { DiscordLogoIcon, EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

function Contato() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        if(name === "" || email === "" || message === "") {
            alert("Preencha todos os campos.");
            return;
        }

        const templateParams = {
            from_name: name,
            email,
            message
        };
        emailjs.send('service_xtmh7ts', 'template_wtaqkre', templateParams, 'AhczHsngSAbIYrMeD')
        setName("");
        setEmail("");
        setMessage("");
        alert("Mensagem enviada com sucesso!"); 
    }
    

    return (
        <section id="contato" className="contato">
            <div className="contato__box">
                <input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)}/>
                <input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <textarea placeholder="Digite sua mensagem..." value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button onClick={sendEmail}>Enviar</button>
            </div>
            <div className="contato__redes-sociais">
                <a href="https://www.github.com/fabioitj" target="_blank" rel="noreferrer"><GitHubLogoIcon/></a>
                <a href="https://www.linkedin.com/in/fabiorsneto/" target="_blank" rel="noreferrer"><LinkedInLogoIcon/></a>
                <a href="" target="_blank"><DiscordLogoIcon/></a>
                <a href="mailto:fabioitj2010@hotmail.com"><EnvelopeClosedIcon/></a>
            </div>
        </section>
    )
}

export default Contato;