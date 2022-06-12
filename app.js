let express = require ('express')
let path = require ('path')
let app= express()
let port = 3000

app.use(express.static(path.join(__dirname, 'public')))/* use: va entre la ruta y la parte de las peticiones del cliente. static: toma todas las carpetas que estan dentro de public. solo dirijimos la primera*/

/* app.get('/', (req, res) => res.send("Bienvenidos a nuestra pagina")) */
app.get('/', (req, res) => res.sendFile(path.join(__dirname,'views','home.html')))/* no escribo home xq es la primer pagina, entonces se redirecciona automaticamente */
app.get('/contacto', (req, res) => res.sendFile(path.resolve(__dirname,'views', 'contacto','contacto.html')))
app.get('/login',(req,res)=> res.sendFile(path.resolve(__dirname, 'views', 'login.html')))
app.get('/register',(req,res)=> res.sendFile(path.resolve(__dirname, 'views', 'register.html')))

app.listen(port, ()=>console.log(`Servidor levantado con exito en http://localhost:${port}`))