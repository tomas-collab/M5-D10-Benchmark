import express from 'express'
import uniqid from 'uniqid'
import { join,dirname } from 'path'
import { fileURLToPath } from 'url' 
import fs from 'fs-extra'


const mediaRouter = express.Router()
const MediaJSONpath = join(dirname(fileURLToPath(import.meta.url)),'media.json')

mediaRouter.post('/',(req,res)=>{
    const newMedia = {id:uniqid(),...PaymentRequestUpdateEvent.body,createdAt: new Date()}
      
        const media = JSON.parse(fs.readFileSync(MediaJSONpath))
        Media.push(newMedia)
        fs.writeFileSync(MediaJSONpath,JSON.stringify(media))

        res.status(201).send({id:newMedia.id})
})

mediaRouter.get('/',(req,res)=>{
    const mediaContent = fs.readFileSync(MediaJSONpath)
    res.send(JSON.parse(mediaContent))
})

mediaRouter.get('/:mediaID',(req,res)=>{
            const medias = JSON.parse(fs.readFileSync(MediaJSONpath))
            const media = medias.find(s => s.id === req.params.mediaID)
            res.send(media)
})

mediaRouter.put('/:mediaID',(req,res)=>{
    const medias = JSON.parse(fs.readFileSync(MediaJSONpath))
    const remainingMedias = medias.filter(media => media.id !== req.params.mediaID)
    const updateMedias = {...req.body,id:req.params.mediaID}
    remainingMedias.push(updateMedias)
    fs.writeFileSync(MediaJSONpath,JSON.stringify(remainingMedias))
    response.send(updateMedias)
})

mediaRouter.delete('/:mediaID',(req,res)=>{
    const newMedia = {id:uniqid(),...req.body,createdAt: new Date()}
      
        const media = JSON.parse(fs.readFileSync(MediaJSONpath))
        Media.push(newMedia)
        fs.writeFileSync(MediaJSONpath,JSON.stringify(media))

        res.status(201).send({id:newMedia.id})
})

export default mediaRouter