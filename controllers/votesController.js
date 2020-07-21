const Vote = require('../models/Votes');

exports.setVote = async (req, res) => {

    const { candidates, commissar } = req.body;

    try {
        if(!candidates) return res.send('Empty data');
        let vote = new Vote({
            name: "vote",
            candidates: candidates,
            commissar: commissar
        });
        await vote.save();
        res.send('Added');
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}