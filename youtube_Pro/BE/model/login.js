import mongose from "mongoose";

const Model_User = new mongose.Schema(
    {
        sub:{
            type:String,
        },
        name:{
            type:String,
            require:true
        },
        picture:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        locale:{
            type:String,
            default:"vi"
        },
        accessToken:{
            type:String
        },
        isNewUser:{
            type:Boolean,
            default:true
        },
        scopes:{
            type:Array,
            default:["user","trial"]
        }
    },{timestamps:true,versionKey:false}
)

export default mongose.model("user_info", Model_User);