import { Module } from "@nestjs/common";
import { SecretDbModuleBase } from "./base/secretDb.module.base";
import { SecretDbService } from "./secretDb.service";
import { SecretDbController } from "./secretDb.controller";
import { SecretDbResolver } from "./secretDb.resolver";

@Module({
  imports: [SecretDbModuleBase],
  controllers: [SecretDbController],
  providers: [SecretDbService, SecretDbResolver],
  exports: [SecretDbService],
})
export class SecretDbModule {}
