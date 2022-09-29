import express from 'express'
import * as dotenv from 'dotenv'
import { faker } from '@faker-js/faker'
dotenv.config()
import {homeRouter} from './src/routes/home.js'

function createRandomUser() {
    return {
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };
}

const app = new express()
const PORT = process.env.PORT || 1000


app.use(homeRouter)

app.listen(PORT, () => {
    console.log(`Task 6 running on PORT ${PORT}`)})

