import { Module } from '@nestjs/common';
import { InfraModule } from './infra/infra.module'

@module({
  imports: [InfraModule]
});

export class AppModule {}