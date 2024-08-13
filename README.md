# IQMBB API 🔎

Welcome to IQMBB-API. You can access all information about IQMBB from here.

Let's find out what you want to look for here.

### About IQMBB

So what is IQMBB?

Is an industrial company operating in the automotive parts sector and is a branch of INDUSTRIAL QUALITY MANAGEMENT.

This application will contain some information about IQMBB (INDUSTRIAL QUALITY MANAGEMENT BUKIT BERUNTUNG).

**What information?**

#### ``Operators``
The operator is the part of production whose job is to communicate with the machine to make a tube.

You can see all information about operators by accessing the api in the table below.

#### ``Sections``
A section is a place for parts of the production process that have different tasks to produce tubes and the process is sequential.

You can see all information about sections by accessing the api in the table below.

#### ``Machine``
A machine is a critical component in the production line for manufacturing tubes, with each machine performing distinct tasks according to a specified schedule

You can see all information about machines, tubes, and their schedules by accessing the API in the table below.

#### ``Tube``
A tube is a crucial element in the production process, with different stages of manufacturing involving various tasks in a sequential order.

You can see all information about tubes by accessing the API in the table below.


#### ``Scedule``
A schedule is a timeline that organizes the various tasks involved in the production of tubes, ensuring that each section completes its work in a sequential and efficient manner.

You can see all information about schedules by accessing the API in the table below.


### Run this project

```
npm install
npm run dev
```

```
open http://localhost:3000
```

- Production: `https://iqmbb-api.onrender.com`
- Local: `http://localhost:3000`

#### Operator

| Endpoint        | HTTP     | Description         |
| --------------- | -------- | --------------------|
| `/operator`     | `GET`    | Get all operator    |
| `/operator/:id` | `GET`    | Get operator by id  |
| `/operator`     | `POST`   | Add new operator    |
| `/operator`     | `DELETE` | Delete all operator |
| `/operator/:id` | `DELETE` | Delete operator id  |
| `/operator/:id` | `PATCH`  | Update operator id  |

#### Section

| Endpoint        | HTTP     | Description           |
| --------------- | -------- | ----------------------|
| `/section`      | `GET`    | Get all section       |
| `/section/:id`  | `GET`    | Get section by id     |
| `/section`      | `POST`   | Add new section       |
| `/section`      | `DELETE` | Delete all section    |
| `/section/:id`  | `DELETE` | Delete section by id  |
| `/operator/:id` | `PATCH`  | Update section by id  |

#### Machine

| Endpoint        | HTTP     | Description           |
| --------------- | -------- | ----------------------|
| `/machine`      | `GET`    | Get all machine       |
| `/machine/:id`  | `GET`    | Get machine by id     |
| `/machine`      | `POST`   | Add new machine       |
| `/machine`      | `DELETE` | Delete all machine    |
| `/machine/:id`  | `DELETE` | Delete machine by id  |
| `/machine/:id`  | `PATCH`  | Update machine by id  |

#### Tube

| Endpoint        | HTTP     | Description           |
| --------------- | -------- | ----------------------|
| `/tube`         | `GET`    | Get all tube          |
| `/tube/:id`     | `GET`    | Get tube by id        |
| `/tube`         | `POST`   | Add new tube          |
| `/tube`         | `DELETE` | Delete all tube       |
| `/tube/:id`     | `DELETE` | Delete tube by id     |
| `/tube/:id`     | `PATCH`  | Update tube by id     |

#### Scedule

| Endpoint        | HTTP     | Description           |
| --------------- | -------- | ----------------------|
| `/scedule`      | `GET`    | Get all scedule       |
| `/scedule/:id`  | `GET`    | Get scedule by id     |
| `/scedule`      | `POST`   | Add new scedule       |
| `/scedule`      | `DELETE` | Delete all scedule    |
| `/scedule/:id`  | `DELETE` | Delete scedule by id  |
| `/scedule/:id`  | `PATCH`  | Update scedule by id  |