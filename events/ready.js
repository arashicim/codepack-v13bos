const client = require("../index");

client.on("ready", () => {
    client.user.setActivity(`Coded by arashicim.`)
    console.log(`CodePack V13 altyapısını kullandığınız için teşekkür ederiz.\n ${client.user.tag} adlı botunuz başarıyla Discord üzerinde aktif oldu.`)
    
});
