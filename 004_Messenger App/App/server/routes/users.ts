import { FastifyInstance } from "fastify"
import {StreamChat} from "stream-chat"

const streamChat = StreamChat.getInstance(
      process.env.STREAM_API_KEY!, 
      process.env.STREAM_PRIVATE_API_KEY!
   )

const TOKEN_USER_ID_MAP = new Map<string, string>();

export async function userRoutes(fastify: FastifyInstance) {
    app.post<{ Body: { id: string; name: string; image?: string }}>("/signup", 
    async (req, res) => {
          const { id, name, image} = req.body
          if (id ==  null || id === "" || name == null || name === "") {
             return res.status(400).send
          }

          const existingUser = await streamChat.queryUsers({ id })
          if (existingUsers.users.length > 0) {
            return res.status(400).send("User ID taken")
          }

          await streamChat.upsertUser({ id, name, image});
    }
  )

  app.post<{ Body: { token: string} }>("/logout", async (req, res) => {
       const token = req.body.token
       if (token == null || token === "") return res.status(400).send()

       const id = TOKEN_USER_ID_MAP.get(token);
       if (id == null) return res.status(400).send()

       await streamChat.revokeUserToken(id, new Date())
       TOKEN_USER_ID_MAP.delete(token)
  })
}