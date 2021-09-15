module.exports={
    name:"calculator",
    aliases:["calc"],
    category:"utility",
    usage:"calc",
    timeout:"20000", //20 seconds
    execute(message, args, Discord, client){
      const simplydjs= require("simply-djs")
      simplydjs.calculator(message,{
        embedColor:"GREEN"
      })
    }
  }
