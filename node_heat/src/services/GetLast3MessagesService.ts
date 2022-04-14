import prismaClient from "../prisma";

class GetLast3MessagesService {
    async excute() {
        const messages = await prismaClient.message.findMany({
            take: 3, //quantidade de registro de retorno
            orderBy: {
                create_at: "desc",
            },
            include: { //trazer tambem os registros da tabela user (parecido com innerjoin)
                user: true
            }
        });
        return messages;
    }
}


export { GetLast3MessagesService }