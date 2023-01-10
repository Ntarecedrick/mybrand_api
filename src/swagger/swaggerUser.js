// 
/**
 * @swagger
 * components:
 *   schemas:
 *      User:
 *         type: object
 *         properties:
 *           name: 
 *             type: string
 *             example: Ntare Cedrick
 *           email:
 *             type: string
 *             example: ntarecedrick250@gmail.com
 *           password: 
 *              type: string 
 *              example: ntare12345
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - Users
 *     summary: Logging in a user
 *     description: Logging in a user
 *     operationId: userlogin
 *     requestBody:
 *         description: Body for the login request (need email and password to login)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   format: email
 *                   example: ntarecedrick250@gmail.com
 *                 password:
 *                   type: string
 *                   format: password
 *                   example: ntare250
 *               required:
 *                 - email
 *                 - password
 *     responses:
 *       "200":
 *           description: successful operation
 *       '500':
 *        description: Internal server error
 */

// register user

/**
 * @swagger
 * /signup:
 *   post:
 *     tags:
 *       - Users
 *     summary: Signing up a user
 *     description: Signing up a user
 *     operationId: userSignup
 *     requestBody:
 *         description: Body to signup a user (need name,email,password)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: ntare cedrick
 *                 email:
 *                   type: string
 *                   format: email
 *                   example: Ntarecedrick@gmail.com
 *                 password:
 *                   type: string
 *                   format: password
 *                   example: andela
 *               required:
 *                 - name
 *                 - email
 *                 - password
 *     responses:
 *       "200":
 *           description: successful operation
 *       "409":
 *           description: Conflict
 *       '500':
 *         description: Internal server error
 */