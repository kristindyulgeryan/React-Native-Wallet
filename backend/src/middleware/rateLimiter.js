import ratelimit from "../config/upstash.js";

const ratelimiter = async (req, res, next) => {
  try {
    // Here just kept it simple. In production, use userId or ipAddress as the rate limit key.
    const { success } = await ratelimit.limit("my-rate-limit");

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later.",
      });
    }

    next();
  } catch (error) {
    console.log("rate limit error", error);
    next(error);
  }
};

export default ratelimiter;
