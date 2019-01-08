module.exports = {
    greetings(req, res) {
        res.send({ hi : 'there' })
    },
//---------------------------------------------------------------------------------------------------------
// The GET request /\ , The POST request \/ 
//---------------------------------------------------------------------------------------------------------

    create(req, res) {
    console.log(req.body);
    res.send({ hi : 'there'});
    }
};