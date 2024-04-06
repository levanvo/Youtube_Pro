import mongoose from "mongoose";

const SchemaMG_Chanels = new mongoose.Schema(
    {
        name_chanels: {
            type:String,
            require:true
        },
        ID_user_root:{
            type:String,
            require:true
        },
        video_ID:[{
            type:mongoose.Types.ObjectId,
            ref:"videos"
        }],
        tiktok_shorts_ID:[{
            type:mongoose.Types.ObjectId,
            ref:"tiktok_shorts"
        }],
        radio_ID:[{
            type:mongoose.Types.ObjectId,
            ref:"radios"
        }],
        subscribes_User_ID:[{
            type:mongoose.Types.ObjectId,
            ref:"user_infos"
        }],
        is_Active:{
            type:Boolean,
            default:true
        }
    },{timestamps:true,versionKey:false}
);
export default mongoose.model("chanel_user",SchemaMG_Chanels);