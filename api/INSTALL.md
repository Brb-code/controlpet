# Creando modelos

Actualizar config/config.js
Ejecutar 
sequelize db:create

Creando modelos
sequelize model:generate --name mascota --attributes nombre:string,edad:integer,delete:boolean


Creando modelos en Base de datos
sequelize db:migrate


generando seeders( Cargador de informacion en las tablas)

sequelize seed:generate -- name mascota

sequelize db:seed:all