import { Controller, Get, Param, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { UserService } from "./user.service";

@Controller('/user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get("")
    getUsers() {
        return this.userService.getUsers();
    }

    @Get("/:userid")
    getUser(@Param() userId: number) {
        return {
            name: "laslous",
            email: "hallo@gmail.com",
        };
    }

    @Post()
    saveUser(@Req() req: Request) {
        return req;
    }

}