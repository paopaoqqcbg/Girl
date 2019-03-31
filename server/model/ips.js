import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ipSchema = new Schema({
  ori: String,
  ip: String,
  address: String,
  type: String,
  speed: { type:String, default: '未知' },
  createTime: { type: Date, default: new Date() },
})

const ips = mongoose.model('ips', ipSchema)

export default ips