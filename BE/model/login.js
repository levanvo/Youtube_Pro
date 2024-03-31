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
        personal_cover_photo:{
            type:String,
            default:"https://picsum.photos/200/300"
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
        },
        like_videos:{
            type:Array,
            default:[]
        },
        watch_video_latter:{
            type:Array,
            default:[]
        },
        follow_chanels_ID:{
            type:Array,
            default:[]
        },
        isActive:{
            type:Boolean,
            default:true
        }
    },{timestamps:true,versionKey:false}
)

export default mongose.model("user_info", Model_User);