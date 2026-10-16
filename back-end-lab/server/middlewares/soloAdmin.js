module.exports = (req, res, next) => {
if (req.usuario?.rol_id !== 1)//si el rol del usuario es diferente a 1 (administrador) entonces no tiene permisos para acceder a la ruta
 {
return res.status(403).json({ message: 'Solo administradores' });
}
next();
};