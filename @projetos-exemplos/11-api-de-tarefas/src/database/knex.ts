import {knex as KnexConfig} from 'knex'
import configuracao from '../../knexfile'

export const knex = KnexConfig(configuracao)