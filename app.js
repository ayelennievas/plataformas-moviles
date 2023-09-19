const express = require('express');
const app = express();
const sequelize = require('./config/archivosDatabase');
const userRoutes = require('./routes/userRoutes');

// Configurar la conexión a la base de datos
sequelize.authenticate()

 .then(() => console.log('Conexión establecida con la base de datos'))
  //tomamos el error y luego lo mostramos en consola
 .catch(error => console.error('Error al conectar con la base de datos:', error));

// Configurar las rutas de la API
app.use('/api', userRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));