# Welcome to Ticket Booking Service

## Project Setup

1. **Clone the project on your local machine**
   - Clone this repository:

2. **Install dependencies**
   - Execute `npm install` in the root directory of each service after cloning them.

3. **Environment Setup**
   - Create a `.env` file in the root directory and add the following environment variable:
     ```plaintext
    PORT=3002
    FLIGHT_SERVICE_PATH='http://localhost:3000'
    MESSAGE_BROKER_URL='amqp://localhost'
    EXCHANGE_NAME=AIRLINE_BOOKING
    REMINDER_BINDING_KEY=REMINDER_SERVICE
     ```
   - Inside the `src/config` folder, create a file `config.json` with the following content:
     ```json
     {
       "development": {
         "username": "<YOUR_USER_NAME>",
         "password": "<YOUR_DB_PASSWORD>",
         "database": "Flights_Serach_DB_DEV",
         "host": "127.0.0.1",
         "dialect": "mysql"
       }
     }
     ```

4. **Database Setup**
   - Once you've added your DB config as listed above, navigate to the `src` folder from your terminal and execute:
     ```bash
     npx sequelize db:create
     ```
   - Then, execute the migration command:
     ```bash
     npx sequelize db:migrate
     ```
5. **Database Design**
    - Booking Model

    - The Booking model is a key component of the Ticket Booking Service. It manages booking information related to
      flights, including the following fields:
      
        ```
        flightId: References the flight associated with the booking.
        userId: References the user making the booking.
        status: Tracks the status of the booking (InProcess, Booked, Cancelled).
        noOfSeats: Indicates the number of seats booked.
        totalCost: Represents the total cost of the booking.

        ```

