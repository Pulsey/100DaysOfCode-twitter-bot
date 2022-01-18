/*
 * TWITTER APP CONFIGURATION
 * consumer_key
 * consumer_secret
 * access_token
 * access_token_secret
 */
require('dotenv').config();

module.exports = {
  twitterKeys: {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  },
  query: '#100DaysOfCode, #100daysofcode',
  result_type: 'recent',
  lang: 'en',
  twitterConfig: {
    queryString: process.env.QUERY_STRING,
    username: process.env.TWITTER_USERNAME,
    tweetTimeOutMin: process.env.TWEET_TIME_OUT_MIN,
    tweetTimeOutMax: process.env.TWEET_TIME_OUT_MAX,
    tweetQueueTime: 1000 * 60 * process.env.TWEET_QUEUE_TIME
  }
};
