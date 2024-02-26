const express = require('express');
const { Api, JsonRpc, RpcError } = require('eosjs');
const fetch = require('node-fetch');
const { TextEncoder, TextDecoder } = require('util');
const contractABI = require('./notaryABI.json'); // Replace with actual ABI
const EOS_RPC_ENDPOINT = 'EOS_RPC_ENDPOINT'; // Replace with actual EOS RPC endpoint
const app = express();
const port = 3000;

const rpc = new JsonRpc(EOS_RPC_ENDPOINT, { fetch });

app.use(express.json());

app.post('/notarize', async (req, res) => {
    try {
        const { user, documentHash } = req.body;
        const privateKey = req.headers.authorization;
        const api = new Api({ rpc, signatureProvider: privateKey, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
        const result = await api.transact({
            actions: [{
                account: 'notary',
                name: 'notarize',
                authorization: [{ actor: user, permission: 'active' }],
                data: { user, document_hash: documentHash },
            }]
        }, { blocksBehind: 3, expireSeconds: 30 });
        res.json({ transactionId: result.transaction_id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Backend API listening at http://localhost:${port}`);
});
