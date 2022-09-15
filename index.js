import { config as dotenvConfig } from 'dotenv'

import ApplyCycles from './cycles.js'

/* Dont worry about this lol */
dotenvConfig()


const items = await ApplyCycles()
console.log(items)