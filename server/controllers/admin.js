exports.verifyAdminHandler = function(req, res) {
    res.send({admin: verifyAdmin(req.params.key)});
}

function verifyAdmin(key) {
    return key === process.env.ADMIN_KEY;
}