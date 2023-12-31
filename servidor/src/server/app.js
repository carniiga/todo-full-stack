import  express  from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors"
export const server = express()


server.use(express.json())
server.use(cors())


export const prisma =  new PrismaClient()