DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS professors;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username text UNIQUE NOT NULL,
    password text NOT NULL
);

CREATE TABLE departments (
    id serial PRIMARY KEY,
    name text NOT NULL,
    description text NOT NULL,
    phone integer NOT NULL,
   
)

CREATE TABLE professors (
    id serial PRIMARY KEY,
    bio text NOT NULL,
    email text NOT NULL,
    department_id integer NOT NULL REFERENCES departments(id) ON DELETE CASCADE
)




