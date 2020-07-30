const Vote = require('../models/Votes');
const familiesData = require('../utils/getFamiliesExcel');

exports.setVote = async (req, res) => {
    const { family } = req.body;
    try {
        if (!family) return res.send('Empty data');
        let vote = new Vote({
            family: family
        });
        await vote.save();
        res.send('Added');
    } catch (error) {
        res.status(400).send('Hubo un error');
    }
}

exports.getFamilies = async (req, res) => {
    try {
        const families = await Vote.find();
        res.status(200).send(families);
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}

exports.batchFamily = async (req, res) => {
    const { set } = req.body;
    if (!set) {
        res.status(400).send('No tiene permiso');
        return;
    }
    if (!familiesData) return;
    try {
        familiesData.forEach(family => {
            const vote = new Vote({
                family: {
                    [family[1]]: family[0]
                }
            })
            vote.save();
        })
        res.status(200).send('Familias cargadas');
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}

exports.deleteFamily = async (req, res) => {
    try {
        if (!req.params.id) return;
        const family = await Vote.findById(req.params.id);
        if (!family) {
            res.status(500).send('Familia no existe');
            return;
        }
        await Vote.findOneAndRemove({ _id: req.params.id })
        res.send('Eliminado');
        console.log(family);
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}