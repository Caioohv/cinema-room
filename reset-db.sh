docker compose exec -T db psql -U cinema -d cinema < api/sql/setup.sql
docker compose exec -T db psql -U cinema -d cinema < api/sql/seed.sql
wait 1
echo "DB Test:"
docker compose exec db psql -U cinema -d cinema -c \
  "select room_id, count(*), min(row||number::text), max(row||number::text) from seats group by 1 order by 1"