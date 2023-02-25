import { hashSync } from 'bcrypt'
import { prisma } from '.'

export type UserAuthType = {
    email: string
    name: string | null
    username : string
    password : string
    profileImage: string | null
}

export const createUser = (userData: UserAuthType) => {
  const finalUserData = {
    ...userData,
    password: hashSync(userData.password, 10)
  }

  return prisma.user.create({
    data: finalUserData
  })
}

export const getUserByUserName = (username: string) => {
  return prisma.user.findUnique({
    where: {
      username
    }
  })
}
