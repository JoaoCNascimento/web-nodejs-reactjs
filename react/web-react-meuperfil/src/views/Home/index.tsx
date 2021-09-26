import React, { Component, useEffect } from 'react';

import foto from '../../assets/img/foto_perfil.png';

class Home extends Component {

    render() {

        return (
            <div className="card p-3 m-3">
                <h2 className="text-center mb-3"><b>Meu Perfil</b></h2>
                <img src={foto} className="w-25 rounded-circle shadow m-auto" alt="Uma foto minha." />
                <hr />
                <h4 className="text-center">João Carlos Silva do Nascimento</h4>
                <p><b>Idade:</b> {new Date().getFullYear() - 2002} </p>
                <p><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/joao-nascimento0576/" target="_blank">https://www.linkedin.com/in/joao-nascimento0576/</a></p>
                <p><b>Github:</b> <a href="https://github.com/JoaoCNascimento/" target="_blank">https://github.com/JoaoCNascimento/</a></p>
            </div>
        );
    }
}

export default Home;