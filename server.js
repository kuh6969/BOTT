let express = require('express')

let PORT = process.env.PORT || '8080'

function connect(conn) {

    let app = express()

    app.set("json spaces", 2)

    app.use(async (req, res) => {

        if (req.path == '/status') {

        let chats = conn.chats.array.filter(a => !a.jid.includes('status@broadcast'))

    let totalgc = chats.filter(a => a.jid.endsWith("g.us")).length

    let totalpc = chats.length - totalgc

        res.setHeader("User-Agent", "GoogleBot")

        res.send({ status:200, 

        user: conn.user, 

        chats: { 

        all: chats.length, 

       group: totalgc, 

     personal: totalpc 

         }, 

         author: {

         instagram: 'https://instagram.com/ramadhankukuh',

         github: 'https://github.com/kuh6969',

         youtube: 'https://youtube.com/c/KukuhRamadhann',

         website: 'https://ramadhankukuh.github.io'

},

        source_code: 'https://github.com/kuh6969/BOTT'

})

    } else res.redirect("https://github.com/kuh6969/BOTT")

    })

    

 app.listen(PORT, () => console.log('App listened on port', PORT))

}

module.exports = connect
