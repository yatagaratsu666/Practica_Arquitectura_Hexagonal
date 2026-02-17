import JsonUserDBC from "../../../shared/infrastructure/dbc/users/UserDBC";
import User from "../../domain/model/user/User";
import NullUser from "../../domain/model/user/NullUser";
import UserRepositoryPort from "../../domain/port/driven/adapter/repository/UserRepositoryPort";

export default class JsonUserRepository implements UserRepositoryPort {
  constructor(private readonly jsonUserDBC: JsonUserDBC) {}

  readonly findById = async (id: string): Promise<User | NullUser> => {
    const userData = await this.jsonUserDBC.findUserById(id);

    if (!userData) {
      return new NullUser();
    }

    return new User({
      id: userData.id,
      names: userData.names,
      surnames: userData.surnames,
      role: userData.role,
      email: userData.email,
      passwordHash: userData.passwordHash,
      createdAt: userData.createdAt,
    });
  };

  readonly findByEmail = async (email: string): Promise<User | NullUser> => {
    const userData = await this.jsonUserDBC.findUserByEmail(email);

    if (!userData) {
      return new NullUser();
    }

    return new User({
      id: userData.id,
      names: userData.names,
      surnames: userData.surnames,
      role: userData.role,
      email: userData.email,
      passwordHash: userData.passwordHash,
      createdAt: userData.createdAt,
    });
  };
}
