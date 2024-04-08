import mongoose from "mongoose";

const Schema_Video =new mongoose.Schema(
    {
        title_video:String,
        content:{
            type:String
        },
        image:{
            type:Array,
            default:["https://picsum.photos/200/300"]
        },
        link_video:{
            type:String,
            require:true
        },
        Source_root:{
            type:String,
            default:""
        },
        type:{
            type:String,
            default:"video"
        },
        mood_type:{
            type:Array,
            default:[]
        },
        author:{
            type:String,
            default:""
        },

        comments_count:Number,
        view_count:Number,
        likes_count:Number,
        share_count:Number,
        dislikes_count:Number,

        name_chanels:{
            type:String,
            default:""
        },
        chanels_ID:{
            type:mongoose.Types.ObjectId,
            ref:"chanel_users",
        }
    },
    {timestamps:true, versionKey:false}
);

export default mongoose.model("video", Schema_Video);