// middleware/validateToken.js

const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET; // Tu clave secreta

function validateToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; // Almacena la información del usuario en el objeto de solicitud
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token inválido' });
  }
}

module.exports = validateToken;
