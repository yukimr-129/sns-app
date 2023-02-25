import { compare } from 'bcrypt'
import { getUserByUserName } from '../../db/user'
import { userTransformer } from '../../transformers/user'
import { generateTokens } from '../../utils/jwt'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { username, password } = body

  if (!username || !password) {
    return sendError(event, createError({ statusCode: 400, statusMessage: 'Invalid Prams' }))
  }

  // すでに存在しているユーザーか
  const user = await getUserByUserName(username)

  if (!user) {
    return sendError(event, createError({ statusCode: 400, statusMessage: 'Username or password is Invalid' }))
  }
  // passwordの照合
  const doesThePasswordMaych = await compare(password, user.password)

  //   if (!doesThePasswordMaych) {
  //     return sendError(event, createError({ statusCode: 400, statusMessage: 'Username or password is Invalid' }))
  //   }

  // トークン生成
  const { accessToken } = generateTokens(user)

  return {
    accessToken,
    user: userTransformer(user)
  }
})
