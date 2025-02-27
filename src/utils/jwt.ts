import jwt from "jsonwebtoken"

export function IssueJwtToken(type: "accessToken" | "refreshToken", payload?: any) {
    const secretKey = process.env.SECRET_KEY as string;

    return jwt.sign(payload ?? {}, secretKey, type === "accessToken" ? { expiresIn: '1h' } : { expiresIn: '1d' });
}
