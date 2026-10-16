require('dotenv').config();
const app = require('../app');
const sequelize = require('../server/config/database');

const PORT = process.env.PORT || 8010;

async function iniciar() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a PostgreSQL  Render establecida correctamente.');

   app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error.message);
  }
}

iniciar();
