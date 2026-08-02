import { Injectable, OnModuleDestroy, Post } from '@nestjs/common';
import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';
import { Database } from './db.interface'

@Injectable()
export class Db extends Kysely<Database> implements OnModuleDestroy {
  private readonly pool: Pool;
  
  constructor() {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: Number(process.env.DB_POOL_MAX ?? 10),
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 5_000,
    });
  
    super({
      dialect: new PostgresDialect({ pool })
    });

    this.pool = pool
  }

  statistics() {
    return {
      total: this.pool.totalCount,
      available: this.pool.idleCount,
      waiting: this.pool.waitingCount
    }
  }

  async onModuleDestroy() {
    await this.destroy()
  }
}

