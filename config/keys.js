//client id 794828254465-p0vhueotma30svkg388aupgkp2pkfaf6.apps.googleusercontent.com
//client secret J-1DzZCNKA-FOCfNhNac7-eX
//password EJVEA3aP2Tgj9fTl
//keys.js -figure out what set of credentials to return
if (process.env.NODE_ENV==='production'){
    //we are in production -return the prod set of keys
    module.exports=require('./prod');
}else{
    //we are in developments- return the dev keys!!
    module.exports=require('./dev');
}