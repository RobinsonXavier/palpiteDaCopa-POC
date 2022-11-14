# PALPITEDACOPA

Um pequeno projeto feito para poder dar palpites sobre os jogos da copa e salvar a quantidade de vezes que você acertou.

## Paciência

Apesar de ser uma idéia fantástica, calmaa, é só uma POC, então só coloquei o necessário pra essa idéia funcionar atravéz de testes!

## Importante

Dá pra testá-lo pelo thunder client, pra saber mais :[Link](https://www.thunderclient.com/)! E vamos para as observações:

* Não adicionei o Joi nas rotas do betRouter justamente por ser uma POC, queria treinar mais as minhas habilidades de TS.
* Fiz uma entidade "sessions" no bd que iria ficar atualizando os status dos usuários e sairiam da "sessions" os usuários que não estivessem online, porém, por esse projeto não ter um front, evitei de fazer essa função para esse código ser testado sem problemas pelo thunder client.
* Existe uma consulta em authRepository (searchToken) que está com o código menos seguro, por algum motivo não funcionava do jeito mais seguro... porém eu adicionei uma medida extra de segurança no meu código do authMiddleware que deve evitar SQL injection do mesmo jeito.
* Espero que seja um código agradável de ler <3