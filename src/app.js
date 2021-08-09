const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/express_backend", {
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
})

.then( ()=>console.log("Connection is OK...."))
.catch( (error)=>console.log(error))

        //  Creating schemaa of DB
const playlistSchema = new mongoose.Schema({
    name : {
        type :String,
        required : true},
    fathername : String,
    email : String,
    date : {
        type : Date , 
        default : Date.now

    }
})
            //Creating Collections mean tables
    const Playlist = new mongoose.model("Playlist", playlistSchema)


            //Creating Documents or insert tables

      const createData = async ()=>{
          try{
            const TaqiPlaylist = new Playlist({
                name : "Azeem",
                fathername : "Khadim Hussain",
                email : "soomro@gmail.com",
                })

                const AzeemPlaylist = new Playlist({
                    name : "Azeem",
                    fathername : "Khadim Hussain",
                    email : "soomro12@gmail.com",
                    })

                    const AliPlaylist = new Playlist({
                        name : "Ali",
                        fathername : "Khadim Hussain",
                        email : "soomro2@gmail.com",
                        })
                    
        
        const data = await  Playlist.insertMany([TaqiPlaylist, AzeemPlaylist, AliPlaylist]); 
        console.log(data)
          }catch(err){
              console.log(err)
          }
      }
      createData();
 
   