import { Response, Request } from "express";
import { ProfileUserService } from "../services/ProfileUserService";


class ProfileUserController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;

        const service = new ProfileUserService();

        const result = await service.excute(user_id);

        return response.json(result);
    };
};

export { ProfileUserController }