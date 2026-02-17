import { SignOptions } from "jsonwebtoken";
import env_json from "../../../../env/.env.json";
import JwtConfigInterface from "../../domain/interfaces/JwtProviderInterface";

export default class JwtProvider {
  readonly secret: string;
  readonly expiresIn: SignOptions["expiresIn"];

  constructor() {
    const config = env_json as JwtConfigInterface;

    if (!config || !config.JWT_SECRET || !config.EXPIRES_IN) {
      throw new Error("❌ Invalid JWT configuration in .env.json");
    }

    this.secret = config.JWT_SECRET;
    this.expiresIn = config.EXPIRES_IN as SignOptions["expiresIn"];
  }
}

