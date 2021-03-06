/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, SecretDb } from "@prisma/client";

export class SecretDbServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SecretDbFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SecretDbFindManyArgs>
  ): Promise<number> {
    return this.prisma.secretDb.count(args);
  }

  async findMany<T extends Prisma.SecretDbFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SecretDbFindManyArgs>
  ): Promise<SecretDb[]> {
    return this.prisma.secretDb.findMany(args);
  }
  async findOne<T extends Prisma.SecretDbFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SecretDbFindUniqueArgs>
  ): Promise<SecretDb | null> {
    return this.prisma.secretDb.findUnique(args);
  }
  async create<T extends Prisma.SecretDbCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SecretDbCreateArgs>
  ): Promise<SecretDb> {
    return this.prisma.secretDb.create<T>(args);
  }
  async update<T extends Prisma.SecretDbUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SecretDbUpdateArgs>
  ): Promise<SecretDb> {
    return this.prisma.secretDb.update<T>(args);
  }
  async delete<T extends Prisma.SecretDbDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SecretDbDeleteArgs>
  ): Promise<SecretDb> {
    return this.prisma.secretDb.delete(args);
  }
}
