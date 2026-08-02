import { ColumnType, Generated } from 'kysely';

export interface RoomTable {
  id: number;
  name: string;
}

export interface SeatTable {
  id: Generated<number>;
  room_id: number;
  row: string;
  number: number;
}

export interface ReserveTable {
  id: Generated<string>
  seat_id: number;
  owner: string;
  status: 'reserved' | 'sold' | 'free';
  expire_at: ColumnType<Date | null, string | Date | null, string | Date | null>;
  created_at: ColumnType<Date | null, string | Date | null, string | Date | null>;
  updated_at: ColumnType<Date | null, string | Date | null, string | Date | null>; 
}
export interface Database {
  room: RoomTable,
  seat: SeatTable,
  reserve: ReserveTable
}