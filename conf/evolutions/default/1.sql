# --- !Ups

CREATE TABLE events
(
    id uuid PRIMARY KEY,
    json jsonb NOT NULL,
    created_at timestamptz NOT NULL,
    updated_at timestamptz NOT NULL
) ;

# --- !Downs

DROP TABLE events;