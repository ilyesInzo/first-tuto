import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    getUsers() {
        return [{
            name: "laslous",
            email: "hallo@gmail.com"
        }];
    }

}
