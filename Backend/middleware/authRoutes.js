const jwt = require('jsonwebtoken');

// Middleware para verificar si el usuario está autenticado
const authenticateUser = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    req.user = decoded; 
    next();
  });
};

// Middleware para verificar roles específicos
const authorizeRole = (role) => (req, res, next) => {
  if (req.user.role !== role) {
    return res.status(403).json({ message: 'Acceso denegado' });
  }
  next();
};

module.exports = { authenticateUser, authorizeRole };
