const router = require("express").Router();
const { google } = require("googleapis");
let REFRESH_TOKEN;
const GOOGLE_CLIENT_ID =
  "341381436381-uf9urn4vvcqa6tg92n8oo6i4fm599f81.apps.googleusercontent.com";
const GOOGLE_SECRET = "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";

const oauth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_SECRET,
  "http://localhost:5173"
);

router.get("/", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

router.post("/create-token", async (req, res, next) => {
  try {
    const { code } = req.body;
    const response=await oauth2Client.getToken(code)
    oauth2Client.setCredentials({refresh_token:response.tokens.refresh_token})
    res.send(response);
  } catch (error) {
    next(error);
  }
});

const refresh_token="1//0gtQQ2mlb0w1NCgYIARAAGBASNwF-L9Ird1OQmUdHv3Jk7zxS16KoBCNJ7Obs_hYvck_Pfq8P0jm2R-b66ftGl3mYAZDHWKLlM8U";

router.get("/get-events", async (req, res, next) => {
  try {
  //   oauth2Client.setCredentials({refresh_token:refresh_token})
   const calendar=google.calendar('v3')
   const response=await calendar.events.list({auth:oauth2Client,calendarId:'primary'})
   res.send(response);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
