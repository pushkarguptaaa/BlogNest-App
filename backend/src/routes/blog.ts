import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from "hono/jwt"
import { createBlogInput, updateBlogInput } from "@pushkardps8/blognest-common"

export const blogRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string
      JWT_SECRET: string
    },
    Variables:{
        userId: string
       }
  }>()

blogRouter.use('/*', async (c, next) => {
const header = c.req.header("Authorization") || ""
const token = header.split(" ")[1]

try {
    const response = await verify(token, c.env.JWT_SECRET)

    if(response) {
    c.set("userId", response.id as string)
    await next()
    }
} catch (error) {
    c.status(403)
    return c.json({error: "you are not logged in"})
    }  
})

blogRouter.post('/create', async (c) => {
    const body = await c.req.json()
    const {success} = createBlogInput.safeParse(body)

    if(!success){
        c.status(411)
        return c.json({
            message: "Inputs not correct"
        })
    }

    const authorId = c.get("userId")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const blog = await prisma.post.create({
        data:{
            title: body.title,
            content: body.content,
            authorId: authorId
        }
    })

    return c.json({
        id: blog.id
    })
  })
  
blogRouter.put('/update', async (c) => {
    const body = await c.req.json()
    const {success} = updateBlogInput.safeParse(body)

    if(!success){
        c.status(411)
        return c.json({
            message: "Inputs not correct"
        })
    }

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

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany()

    return c.json({
        blogs
    })

})

blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.post.findFirst({
            where:{
                id: c.req.param("id")
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