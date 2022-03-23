import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SecretDbServiceBase } from "./base/secretDb.service.base";

@Injectable()
export class SecretDbService extends SecretDbServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
