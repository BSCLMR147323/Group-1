const express = require('express');
const router = express.Router();
const {
  getClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient
} = require('../Handler/clientHandler');

/**
 * @swagger
 * /api/clients:
 *   get:
 *     summary: Get all clients
 *     responses:
 *       200:
 *         description: List of clients
 */
router.get('/clients', getClients);

/**
 * @swagger
 * /api/clients/{id}:
 *   get:
 *     summary: Get client by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single client
 *       404:
 *         description: Client not found
 */
router.get('/clients/:id', getClientById);

/**
 * @swagger
 * /api/clients:
 *   post:
 *     summary: Create a new client
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               age:
 *                 type: integer
 *               job:
 *                 type: string
 *               marital:
 *                 type: string
 *               education:
 *                 type: string
 *               default_status:
 *                 type: string
 *               balance:
 *                 type: integer
 *               housing:
 *                 type: string
 *               loan:
 *                 type: string
 *               contact:
 *                 type: string
 *               day:
 *                 type: integer
 *               month:
 *                 type: string
 *               duration:
 *                 type: integer
 *               campaign:
 *                 type: integer
 *               pdays:
 *                 type: integer
 *               previous:
 *                 type: integer
 *               poutcome:
 *                 type: string
 *               y:
 *                 type: string
 *     responses:
 *       201:
 *         description: Client created
 */
router.post('/clients', createClient);

/**
 * @swagger
 * /api/clients/{id}:
 *   put:
 *     summary: Update a client by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Client'
 *     responses:
 *       200:
 *         description: Client updated
 *       404:
 *         description: Client not found
 */
router.put('/clients/:id', updateClient);

/**
 * @swagger
 * /api/clients/{id}:
 *   delete:
 *     summary: Delete a client
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Client deleted
 *       404:
 *         description: Client not found
 */
router.delete('/clients/:id', deleteClient);

module.exports = router;

