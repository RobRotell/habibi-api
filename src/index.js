import 'dotenv/config'

// core
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger'

// routes
import { entry } from './routes/entry.js'

const app = new Hono()

// config
if( 'development' === process.env.NODE_ENV ) {
	app.use( logger() )
}

// register routes
app.route( '/', entry )


// kick off server
serve({
	fetch: app.fetch,
	port: process.env.PORT,
})
