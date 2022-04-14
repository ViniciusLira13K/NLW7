import prismaClient from "../prisma";

class ProfileUserService {
    async excute(user_id: string) {
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id,
            },
        });
        return user;
    }
}

export { ProfileUserService }