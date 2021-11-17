import React from 'react';
import Pessoa from "./Pessoa";

function TresPessoas() {
    const pessoa1 = { nome: "Pessoa 1", sobrenome: "Pessoa 1", idade: 10 }
    const pessoa2 = { nome: "Pessoa 2", sobrenome: "Pessoa 2", idade: 20 }
    const pessoa3 = { nome: "Pessoa 3", sobrenome: "Pessoa 3", idade: 30 }

    return (
        <>
            <Pessoa nome={pessoa1.nome} sobrenome={pessoa1.sobrenome} idade={pessoa1.idade} />
            <Pessoa nome={pessoa2.nome} sobrenome={pessoa2.sobrenome} idade={pessoa2.idade} />
            <Pessoa nome={pessoa3.nome} sobrenome={pessoa3.sobrenome} idade={pessoa3.idade} />
        </>
    );
}

export default TresPessoas;