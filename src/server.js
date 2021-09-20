import express from 'express'
import cors from 'cors'
import mediaRouter from './service/media/index.js'
import listEndpoints from 'express-list-endpoints'



const server = express()
const port = process.env.PORT

const whitelist= [process.env.FE_DEV_URL, process.env.FE_PROD_URL]


const corsOpts = {
    origin: function(origin, next){
      console.log('ORIGIN --> ', origin)
      if(!origin || whitelist.indexOf(origin) !== -1){ 
        next(null, true)
      }else{ 
        next(new Error(`Origin ${origin} not allowed!`))
      }
    }
  }

  
server.use(express.json())
server.use(cors(corsOpts))


server.use('/media',mediaRouter)

console.table(listEndpoints(server))
server.listen(port,()=>{
    console.log('server listening on port ' + port)
})