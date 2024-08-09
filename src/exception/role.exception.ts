/* eslint-disable prettier/prettier */
import { ForbiddenException } from "@nestjs/common";

export class ForbiddenRoleException extends ForbiddenException {
    constructor(role: string){
        super(`you don't have the required role ${role}`)
    }
}