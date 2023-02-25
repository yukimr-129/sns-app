type userTransformerType = {
    id: number,
    name: string | null,
    email: string,
    username: string,
    profileImage: string | null
}

// prismaからの戻り値で公開しないpassword以外でデータ成形
export const userTransformer = (user: userTransformerType) => {
  return {
    id: user.id,
    name: user?.name ?? '',
    username: user.username,
    email: user.email,
    profileImage: user?.profileImage ?? ''
  }
}
