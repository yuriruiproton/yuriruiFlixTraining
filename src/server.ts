import express from 'express';
import { adminJs, adminjsRouter } from "./adminjs"
import { sequelize } from "./database"


const app = express()

app.use(express.static('public'))

app.use(adminJs.options.rootPath, adminjsRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  sequelize.authenticate().then(() =>{
    console.log('DB connection Successfull')
  })
  console.log(`Server started successfuly at port ${PORT}`)
})