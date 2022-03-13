// import dotenv from "dotenv";

// dotenv.config();

export default {
  port: process.env.PORT || 1337,
  dbUri:
    "mongodb+srv://orina:ChlctexrZNHIkvKt@seren.3gujk.mongodb.net/seren?retryWrites=true&w=majority",
  slack_bot_token: "xoxb-3232086857762-3229201535157-MEf0482taTtJT6LQ0bX9LagZ",
  slack_signing_secret: "6a76bb7e29ad432867dd4c5bde388083",
  saltWorkFactor: 10,
  accessTokenTl: "15m",
  refreshTokenTl: "1y",
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCs57pj3i2EHRT7PpgWGU9x892b
3AvE1kNuol7clWFbIV6hY2XFgffzh6Fwt5e8dcil1JaL5LN+kekL6nL5d+zSET7P
Mqm66qjyv+fseG2hdE34aH03aZ0Eqf0FuRObSKommIr0wMArABh2NJy1sMaSkScz
nYYoFsHo1mkFeL4txwIDAQAB
-----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQCs57pj3i2EHRT7PpgWGU9x892b3AvE1kNuol7clWFbIV6hY2XF
gffzh6Fwt5e8dcil1JaL5LN+kekL6nL5d+zSET7PMqm66qjyv+fseG2hdE34aH03
aZ0Eqf0FuRObSKommIr0wMArABh2NJy1sMaSkScznYYoFsHo1mkFeL4txwIDAQAB
AoGAbOPO7YAJmC8cfJHSA/DSqIgVI0f0HXV2qCEXrsFgu5yLVQYdHMKaHcNn922X
4Lcoss7sNJPGOsq3QqrW16cf+66cLTBwYqKKTvyCKV3JpzaWHM/qNJqNF7nVWWa/
ca5gnp02nJq3fD20DfrtarOw4BrU+JMxfXCh2Wf58XTKIoECQQDVhEuwHN37klvb
UKBZSDodIJJS6iQC1gLlXof7B5mDa9WHwF3QjK5jW6wa3JRrnrqNsxaRvnHbJNrm
HsyIkjOHAkEAz07WeN7hK7gSJvU69zBWv0FGj/7DHDyDc9eXQ/ZIYcuUuxavK3j+
TrgjtBf2CyUz6CfLS3F3iUSt9e0JvO9DwQJBAI2IPmulFvhVkhIUpdXI7My19IiF
sA05M347ZUPfS8Ezz71GpGlDd61g7Pp5UODtvJeFKOa/KNWs3nU/4TB+SS0CQHU0
IVVczPkmrDySULAICENA6F/orO591+Pac47c4rdHneLYRFjToxNmT+k10skiU2Jh
fTI+CFL3HVL4nJTQwQECQEQ1QeupphbJ99DWjn9Ei70lMZNzLaP6IzEjFswNPh4F
rCjVFjK60HIg6M/XYDsRXIykF9dLaz/xAsH+/C8wodI=
-----END RSA PRIVATE KEY-----`,
};
