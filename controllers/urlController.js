import crypto from "crypto";
import dotenv from "dotenv";
import { Url } from "../models/urlSchema.js";
import { urlJoi } from "../joi/urlJoi.js";
dotenv.config();
const getUrl = async (req, res) => {
  const { id } = req.params;
  const result = await Url.findOne({ short_url: id });
  if (!result) return res.status(401).json({ message: "no url find" });
  res.redirect(result.long_url);
};
const postUrl = async (req, res) => {
  const { error } = await urlJoi(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  const { long_url } = req.body;
  const result = await Url.create({
    long_url,
    short_url: crypto.randomBytes(3).toString("hex"),
  });
  res.status(200).json({ result });
};
const putUrl = async (req, res) => {
  const { error } = await urlJoi(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  const { long_url } = req.body;
  const { id } = req.params;
  console.log(id);
  let result = await Url.findOne({ short_url: id });
  if (!result) return res.status(401).json({ message: "no url find" });
  result.long_url = long_url;
  const data = await result.save();
  res.status(200).json(data);
};

export { getUrl, postUrl, putUrl };
