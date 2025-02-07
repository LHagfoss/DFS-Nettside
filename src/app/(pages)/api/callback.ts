import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const { code, state, error } = req.query;

        if (error) {
            return res.status(400).json({ error });
        }

        res.status(200).json({ message: "Callback received", code, state });
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
