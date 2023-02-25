import { createUser } from '../../db/user'
import { userTransformer } from '../../transformers/user'

export type UserAuthRequestType = {
    id : number
    email: string
    name: string | null
    username : string
    password : string
    repeatPassword: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<UserAuthRequestType>(event)

  const { username, email, password, repeatPassword, name } = body

  if (!username || !email || !password || !repeatPassword || !name) {
    return sendError(event, createError({ statusCode: 400, statusMessage: 'Invalid Prams' }))
  }

  if (password !== repeatPassword) {
    return sendError(event, createError({ statusCode: 400, statusMessage: 'Password do not match' }))
  }

  const userData = {
    username,
    email,
    password,
    name,
    profileImage: 'https://picsum.photos/200/200'
  }

  const user = await createUser(userData)

  return {
    body: userTransformer(user)
  }
})
