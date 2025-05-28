import { PrismaClient } from "@prisma/client"
import { Produto } from "../../generated/prisma"
import { IProdutoRepository } from "../../domain/interfaces/IProdutoRepository"

const prisma = new PrismaClient()


