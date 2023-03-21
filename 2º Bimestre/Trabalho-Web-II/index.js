const express = require('express')
const app = express()
app.use(express.json())
app.listen(8080)


//Chamando a conxão do banco. 
const { pool } = require('./database')

//Seleciona todos os campos da tabale SESSAO
app.get('/sessao', (req, res) => {
    const selectbanco = async (res) => {
        const query = 'SELECT * FROM sessao';
        await pool.query(query).then((res) => {
            console.table(res.rows)

        })
    }

    return selectbanco()
})
//Seleciona todos os campos da tabale voto
app.get('/voto', (req, res) => {
    const selectbanco = async (res) => {
        const query = 'SELECT * FROM voto';
        await pool.query(query).then((res) => {
            console.table(res.rows)

        })
    }

    return selectbanco()
})

//Seleciona todos os campos da tabale Politico
app.get('/politico', (req, res) => {
    const selectbanco = async (res) => {
        const query = 'SELECT * FROM politico';
        await pool.query(query).then((res) => {
            console.table(res.rows)

        })
    }

    return selectbanco()
})

//Registra na tabela Sessão com Nome, Codigo de ID, Quantidade de Votos. 
app.post('/sessao_regis', (req, res) => {
    const { id_sessao, nome, qtd_votos } = req.body
    const inserirBanco = async (res) => {
        const query = `INSERT INTO "sessao" (id_sessao, nome, qtd_votos)
        VALUES('${id_sessao}', '${nome}', ${qtd_votos})`
        await pool.query(query).then((res) => {
            console.log(res.rows)

        })
    }
    return inserirBanco()
})

//Registra na tabela Voto o Codigo de ID, Sessao e Politico. 
app.post('/voto_regis', (req, res) => {
    const { id_voto, id_sessao, politico } = req.body
    const inserirBanco = async (res) => {
        const query = `INSERT INTO voto (id_voto, sessao, politico)
        VALUES(${id_voto}, '${id_sessao}', '${politico}')`
        await pool.query(query).then((res) => {
            console.log(res.rows)

        })
    }
    return inserirBanco()
})

//Registra na tabela Politico com Nome, Codigo de ID, Quantidade de Votos. 
app.post('/politico_regis', (req, res) => {
    const { id_politico, usuario, login, senha } = req.body
    const inserirBanco = async (res) => {
        const query = `INSERT INTO politico (id_politico, usuario, login, senha)
        VALUES('${id_politico}', '${usuario}', '${login}', '${senha}')`
        await pool.query(query).then((res) => {
            console.log(res.rows)

        })
    }
    return inserirBanco()
})

//Retorna a soma dos votos por nome de sessao. 
app.get("/sessao_soma_votos", async (req, res) => {
    const { nome } = req.body
    try {
        const { rows } = await pool.query(`SELECT SUM (qtd_votos) as SomaTotalVotos from sessao WHERE nome = '${nome}'`);
        console.log(rows);
        return res.status(200).send(rows);
    } catch (err) {
        return res.status(400).send(err);
    }
});

//Apagando um registro do Banco na tabela sessao
app.post('/delete_sessao/:id', (req, res) => {
    const { id } = req.params
    const deleteBanco = async (res) => {
        const query = `DELETE FROM sessao WHERE id_sessao = '${id}'`
        await pool.query(query).then((res) => {
            console.log(res.rows)
        })

    }
    return deleteBanco()
})

//Apagando um registro do Banco na tabela VOTO
app.post('/delete_voto/:id', (req, res) => {
    const { id } = req.params
    const deleteBanco = async (res) => {
        const query = `DELETE FROM voto WHERE id_voto = '${id}'`
        await pool.query(query).then((res) => {
            console.log(res.rows)
        })

    }
    return deleteBanco()
})

//Apagando um registro do Banco na tabela sessao
app.post('/delete_politico/:id', (req, res) => {
    const { id } = req.params
    const deleteBanco = async (res) => {
        const query = `DELETE FROM politico WHERE id_politico = '${id}'`
        await pool.query(query).then((res) => {
            console.log(res.rows)
        })

    }
    return deleteBanco()
})