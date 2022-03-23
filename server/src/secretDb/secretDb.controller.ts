import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SecretDbService } from "./secretDb.service";
import { SecretDbControllerBase } from "./base/secretDb.controller.base";

@swagger.ApiTags("secretDbs")
@common.Controller("secretDbs")
export class SecretDbController extends SecretDbControllerBase {
  constructor(
    protected readonly service: SecretDbService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
