import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SecretDbResolverBase } from "./base/secretDb.resolver.base";
import { SecretDb } from "./base/SecretDb";
import { SecretDbService } from "./secretDb.service";

@graphql.Resolver(() => SecretDb)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SecretDbResolver extends SecretDbResolverBase {
  constructor(
    protected readonly service: SecretDbService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
