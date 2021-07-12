import { Request, Response, Router } from 'express';

const userRouter = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - username
 *        - email
 *      properties:
 *        username:
 *          type: string
 *        email:
 *          type: string
 */

/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Returns a user by user id
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The user info
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
userRouter.get('/', (req: Request, res: Response) => {
  res.status(200).send('Route User');
});

export { userRouter };
