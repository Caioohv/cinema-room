drop table if exists reserves;
drop table if exists seats;
drop table if exists room;

create table room (
  id    int primary key,
  nome  text not null
);

create table seats (
  id      int generated always as identity primary key,
  room_id int  not null references room(id),
  row     char not null,
  number  int  not null,
  unique (room_id, row, number)
);

create table reserves (
  id          bigint generated always as identity primary key,
  seat_id     int  not null references seats(id),
  owner       text not null,
  status      text not null check (status in ('reserved', 'sold', 'free')),
  expire_at   timestamptz,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index reserves_by_seat on reserves (seat_id);
create index reserves_to_expire  on reserves (expire_at) where status = 'reserved';
