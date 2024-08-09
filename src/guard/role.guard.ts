/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UserService } from "src/user/user.service";

@Injectable()
export class RoleGuard implements CanActivate{
    constructor(private reflector: Reflector, private userService: UserService){}
    //A service that allows access to metadata attached to route handlers (such as the roles allowed to access a route)

    async canActivate(context: ExecutionContext):Promise<boolean> {
        const roles = this.reflector.get<string[]>('roles', context.getHandler()); // The roles variables retrieve the roles
        //meta data attached to the route handler (the function that will handle the request).
        // console.log('roles', roles);

        const request = context.switchToHttp().getRequest();
        // The request object represents the incoming HTTP request. It contains information like headers, the current user and other request-related data.

        if(request?.user){
            const headers: Headers= request.headers;
            const user = this.userService.user(headers);
            // The code fetches the request headers and calls the userService.user(headers) method to retrieve the current user's details, such as their role.

            if(!roles.includes((await user).role)) {
                throw new ForbiddenException(roles.join(' or '))
            }
            return true; // The line checks if the user's role (retrieved from the userService) is included in the list of roles allowed to access this route
        }
        return false;
        // If the user's role is not in the list, it throws a ForbiddenRoleException, effectively denying access to the route
    }
}