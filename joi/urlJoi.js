import Joi from "joi";

const urlJoi = async (long_url) => {
  try {
    const urlSchema = Joi.object({
      long_url: Joi.string().min(3).max(230).required(),
    });
    return urlSchema.validate(long_url);
  } catch (error) {
    console.log(error);
  }
};
export { urlJoi };
