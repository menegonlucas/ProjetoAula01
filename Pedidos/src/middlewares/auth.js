const jsonwebtoken = require("jsonwebtoken");

const validate = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).send({ message: "Acesso negado. Nenhum token recebido." });
    try {
        const payload = jsonwebtoken.verify(token, process.env.SECRET_JWT);
        req.headers['user'] = payload;
        next();
    } catch (err) {
        res.status(403).send({ message: "Token inválido ou expirado." });
    }
};

module.exports = validate;