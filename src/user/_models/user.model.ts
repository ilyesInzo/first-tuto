import { IsEmail, IsString } from 'class-validator'

export class UserView {
    @IsString()
    name: string;
    @IsEmail()
    email: string;
}