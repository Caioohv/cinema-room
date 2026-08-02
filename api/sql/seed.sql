insert into room (id, nome) values
  (1, 'Sala 1 — IMAX'),
  (2, 'Sala 2 — Premier'),
  (3, 'Sala 3 — Padrão'),
  (4, 'Sala 4 — Padrão'),
  (5, 'Sala 5 — VIP');

insert into seats (room_id, row, number)
select r.id,
       chr(65 + ((n - 1) / 10)),     -- rows A, B, C
       ((n - 1) % 10) + 1            -- numbers 1..10
from room r
cross join generate_series(1, 30) as n;