import {Router} from 'express'

const router = new Router()

router.get('/', () => {
    console.log('home')
})

export const homeRouter = router