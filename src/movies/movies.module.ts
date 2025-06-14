import { Module } from "@nestjs/common";

import { MoviesResolver } from "./movies.resolver";
import { MoviesService } from "./movies.service";

import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  providers: [MoviesResolver, MoviesService],
})
export class MoviesModule {}
