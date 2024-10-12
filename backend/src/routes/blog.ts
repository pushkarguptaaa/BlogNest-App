import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from "hono/jwt"

export const blogRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string
      JWT_SECRET: string
    }
  }>()

// blogRouter.use('/*', async (c, next) => {
// const header = c.req.header("Authorization") || ""
// const token = header.split(" ")[1]

// const response = await verify(token, c.env.JWT_SECRET)

// if(response.id) {
//     next()
// }
// else {
//     c.status(403)
//     return c.json({error: "unauthorized"})
// }
// })

blogRouter.post('/', async (c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.post.create({
        data:{
            title: body.title,
            content: body.content,
            authorId: "b8170bfa-bd9f-4bed-b1ea-d1c888861461"
        }
    })

    return c.json({
        id: blog.id
    })
  })
  
blogRouter.put('/', async (c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.post.update({
        where:{
            id: body.id
        },
        data:{
            title: body.title,
            content: body.content,
        }
    })

    return c.json({
        id: blog.id
    })
})

blogRouter.get('/', async (c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.post.findFirst({
            where:{
                id: body.id
            }
        })
    
        return c.json({
            blog
        })
    } catch (error) {
        c.status(414)
        return c.json({
            error: "error while fetching blog"
        })
    }
    
})

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany()

    return c.json({
        blogs
    })

})