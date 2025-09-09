const express = require('express')   // importar modulo express
const app     = express()            // creando la aplicacion apartir de express
const path    = require('path')      // importado modulo Path

// settings
app.set('port',3000)

// middlewares
app.use(express.static(path.join(__dirname, 'public')))
console.log(__dirname)

//enviar informacion a nuestro navegador trabajando con rutas
//Al tener el Middlewares,  esto ya no lo ejecuta
app.get('/',(req,res)=>{
    res.send('Quetal Bienvenidos')
})

// Routes
app.listen(app.get('port'),()=>{
    console.log(`Aqui esta la comilla para concatenar es el backticks corriendo en el puerto  ${app.get('port')}`)
 }
)

