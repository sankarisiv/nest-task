import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userservice: UserService) { }

    @Get()
    data(){
        console.log("data getting successfully..")
    }
}
