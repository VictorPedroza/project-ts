import { Router, Request, Response } from "express";
import { StatusCodes } from 'http-status-codes'

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Hello World!")
})

router.post("/", (req: Request, res: Response) => {

    res.status(StatusCodes.ACCEPTED).json({
        message: "Ok!",
    })

})


export { router }