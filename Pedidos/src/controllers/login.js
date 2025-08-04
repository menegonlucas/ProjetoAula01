const jsonwebtoken = require("jsonwebtoken");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const login = async (req, res) => {
    const { email, senha, validade } = req.body;
    try {
        const usuario = await prisma.usuario.findFirst({
            where: { email, senha }
        });
        if (!usuario) {
            return res.status(401).json({ message: 'E-mail ou Senha incorretos!' });
        } else {
            const token = jsonwebtoken.sign(
                { id: usuario.id, nome: usuario.nome, email: usuario.email },
                process.env.SECRET_JWT,
                { expiresIn: validade ? validade + "min" : "60min" }
            );
            res.status(200).json({ token });
        }
    } catch (err) {
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

const validaToken = (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).send({ message: "Acesso negado. Nenhum token recebido." });
    }
    jsonwebtoken.verify(token, process.env.SECRET_JWT, (err, decoded) => {
        if (err) {
            return res.status(403).send({ message: "Token inválido ou expirado." });
        }
        res.status(200).json({ message: decoded });
    });
};

module.exports = { login, validaToken };