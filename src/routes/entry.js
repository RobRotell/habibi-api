import { Hono } from 'hono'

const entry = new Hono()


// get specific entry
entry.get( '/entry/:id', c => {
	const id = parseInt( c.req.param( 'id' ) )

	return c.text( 'Hi!' )
})


// increment view count for entry
entry.post( '/entry/:id/view', c => {
	console.log( c.req.param( 'id' ) )
	return c.text( 'view' )
})


// increment like count for entry
entry.post( '/entry/:id/like', c => {
	console.log( c.req.param( 'id' ) )
	return c.text( 'like' )
})


// create comment for entry
entry.post( '/entry/:id/comment', c => {
	console.log( c.req.param( 'id' ) )
	return c.text( 'comment' )
})


export { entry }
