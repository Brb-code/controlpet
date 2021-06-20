const Express = require('express')
const app = new Express()
const PORT = 3000

app.use(Express.json())
app.use(Express.urlencoded({extended:false}))


app.post('/api/test/:id', (req, res)=>{
  res.status(200).json({
      mensaje:"holaaaaaa", 
      parametros:req.params,
      cuerpo:req.body
    })  
})

//Rutas
let ruta_mascotas = require('./routes/mascotas')
app.use('/mascota', ruta_mascotas)


app.listen(PORT, ()=>{
    console.log('Servidor corriendo en el puerto '+PORT)
})