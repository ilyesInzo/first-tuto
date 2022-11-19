import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { Repository } from 'typeorm';
import { User } from './_entities/user.entity';
import { UserView } from './_models/user.model';

@Injectable()
export class UserService {
    async getOne(id: number): Promise<UserView> {
        return this.userRepository.findOne({ where: { id } })
    }

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>) { }

    async getAll(): Promise<UserView[]> {
        return this.userRepository.find();
    }

    create(user: UserView) {
        return this.userRepository.save(user);
    }

    update(userView: UserView, id: number) {
        return this.userRepository.update(id, userView);
    }

}
