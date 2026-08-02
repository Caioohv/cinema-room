# Cinema Room

This project does NOT have any AI generated content.

### About the project

Basically, this is a portfolio project that plays with race conditions and concurrency.
The idea is not to be a CRUD, but show how can we protect an app against this conditions (including payment fail).
Dependencies used via docker: PostgreSQL and Redis

### Do not expect

Do not expect serious authentication, real payment methods and anything related.
This is just a sandbox project.

### Tech Stack

**Front-end**: React.js + Shadcn/ui
**Back-end**: Node.js + Nest.js
**Communication**: Http Rest + Websocket
**Data**: PostgreSQL + Kysely
**Cache**: Redis

### Registered decisions

1. PostgreSQL flags:
> `log_lock_waits=on` - the server logs that a transaction waited more then the `deadlock_timeout` for a lock, so it will be easier to identify.
> 1.2: `deadlock_timeout=1s` - just defines when the server suspects about a deadlock, and `log_min_duration_statement`will list every query over 200ms 

2. Database design:
> Seats shouldnt have status, because furniture doesn't change. What changes is the existence of a reserve pointing to it.
> With this design, we can audit past reserves and help dealing with race conditions.

3. Not using an ORM:
> Just to make the project simple and focused. The same reason applies to not having a serious auth or payment integration. Using Kysely brings the ease to create queries without having to sacrificate types and simplicity.

