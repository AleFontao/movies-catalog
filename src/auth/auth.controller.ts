import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private _authService: AuthService){
    }

    @Post('signUp')
    signUp(_){
        return "Hola";
    }

    @Post('signIn')
    signIn(_){
        return "Chau";
    }

}
