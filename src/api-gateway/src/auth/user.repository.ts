import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User>{
  async signUp(authCredentialDto: AuthCredentialDto): Promise<void> {
    const {username, password} = authCredentialDto;

    const user = new User();
    user.username = username;
    user.salt = await bcrypt.genSalt();
    user.password = await UserRepository.hashPassword(password, user.salt);

    try {
      await user.save();
    } catch (error) {
      console.log(error);
      if(error.code === 'ER_DUP_ENTRY') { // duplicate username
        throw new ConflictException('Username already exists')
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async validateUserPassword(authCredentialDto: AuthCredentialDto): Promise<string> {
    const {username, password} = authCredentialDto;
    const user = await this.findOne({ username });

    if(user && await user.validatePassword(password)) {
      return user.username;
    }

    return null;
  }

  private static async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}