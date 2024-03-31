import mongoose from "mongoose";

const Schema_Tiktok_short =new mongoose.Schema(
    {
        title_tiktokShort:String,
        image:{
            type:Array,
            default:["https://picsum.photos/200/300"]
        },
        source:{
            type:String,
            require:true
        },
        Source_root:{
            type:String,
            default:""
        },
        type:String,
        mood_type:String,
        author:String,

        comments_count:Number,
        view_count:Number,
        likes_count:Number,
        share_count:Number,
        dislikes_count:Number,

        name_chanels:String,
        chanels_ID:{
            type:mongoose.Types.ObjectId,
            ref:"chanel_users",
        }
    },
    {timestamps:true, versionKey:false}
);

export default mongoose.model("tiktok_short", Schema_Tiktok_short);