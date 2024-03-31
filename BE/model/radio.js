import mongoose from "mongoose";

const Schema_Radio =new mongoose.Schema(
    {
        title_radio:String,
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

export default mongoose.model("radio", Schema_Radio);