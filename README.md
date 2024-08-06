# IQMBB API 🔎

Welcome to IQMBB-API. You can access all information about IQMBB from here.

Let's find out what you want to look for here.

### Run this project

```
npm install
npm run dev
```

```
open http://localhost:3000
```

- Production: `https://iqmbb.aan.com`
- Local: `http://localhost:3000`

#### Operator

| Endpoint        | HTTP     | Description                      |
| --------------- | -------- | -------------------------------- |
| `/operator`     | `GET`    | Get all operator                 |
| `/operator/:en` | `GET`    | Get operator by employee number  |
| `/operator`     | `POST`   | Add new operator                 |
| `/operator`     | `DELETE` | Delete all operator              |
| `/operator/:en` | `DELETE` | Delete operator employee number  |
| `/operator/:id` | `PUT`    | Update operator employee number  |

#### Section

| Endpoint        | HTTP     | Description           |
| --------------- | -------- | ----------------------|
| `/section`      | `GET`    | Get all section       |
| `/section/:id`  | `GET`    | Get section by id     |
| `/section`      | `POST`   | Add new section       |
| `/section`      | `DELETE` | Delete all section    |
| `/section/:id`  | `DELETE` | Delete section by id  |
| `/operator/:id` | `PUT`    | Update section by id  |

#### Machine

| Endpoint        | HTTP     | Description           |
| --------------- | -------- | ----------------------|
| `/machine`      | `GET`    | Get all machine       |
| `/machine/:id`  | `GET`    | Get machine by id     |
| `/machine`      | `POST`   | Add new machine       |
| `/machine`      | `DELETE` | Delete all machine    |
| `/machine/:id`  | `DELETE` | Delete machine by id  |
| `/machine/:id`  | `PUT`    | Update machine by id  |

#### Tube

| Endpoint        | HTTP     | Description           |
| --------------- | -------- | ----------------------|
| `/tube`         | `GET`    | Get all tube          |
| `/tube/:id`     | `GET`    | Get tube by id        |
| `/tube`         | `POST`   | Add new tube          |
| `/tube`         | `DELETE` | Delete all tube       |
| `/tube/:id`     | `DELETE` | Delete tube by id     |
| `/tube/:id`     | `PUT`    | Update tube by id     |

#### Scedule

| Endpoint        | HTTP     | Description           |
| --------------- | -------- | ----------------------|
| `/scedule`      | `GET`    | Get all scedule       |
| `/scedule/:id`  | `GET`    | Get scedule by id     |
| `/scedule`      | `POST`   | Add new scedule       |
| `/scedule`      | `DELETE` | Delete all scedule    |
| `/scedule/:id`  | `DELETE` | Delete scedule by id  |
| `/scedule/:id`  | `PUT`    | Update scedule by id  |