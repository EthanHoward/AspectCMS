import { NextApiRequest } from "next";
import config from "../../../util/admincfg";

export function POST(req: NextApiRequest) {
    const { password } = req.body;

    if (password != config.password) {
        return {
            status: 400,
            body: {
                message: "Password is required"
            }
        }
    } else  if (password == config.password) {
        return {
            status: 200,
            body: {
                message: "Logged in"
            }
        }
    }
}