const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const DeliverySchema = new Schema(
  {
    id: ObjectId,
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "delivered", "cancelled"],
    },
    destination: {
      type: String,
      required: true,
      unique: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const deliveryModel = mongoose.model("Delivery", DeliverySchema);

module.exports = deliveryModel;
// module.exports = mongoose.model("Delivery", DeliverySchema);
