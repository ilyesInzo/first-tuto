import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { UserService } from "./user.service";
import { UserView } from "./_models/user.model";

@Controller('/users')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get()
    getUsers() {
        return this.userService.getAll();
    }

    @Get("/:id")
    async getUser(@Param() id: number): Promise<UserView> {
        return await this.userService.getOne(id);
    }

    @Post()
    saveUser(@Body() userView: UserView) {
        return this.userService.create(userView);
    }

    @Patch('/:id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() userView: UserView) {
        return this.userService.update(userView, id);
    }

}