import multer from "multer";
import multerS3 from "multer-s3";
import aws, { EnvironmentCredentials } from "aws-sdk";

const AWS_KEY = "AKIAUWY44SLVZNP6L7GI";
const AWS_SECRET = "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";

const s3 = new aws.S3({
    accessKeyId: "AKIAUWY44SLVZNP6L7GI",
    secretAccessKey: "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",
    region: "ap-northeast-2"
  });

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "reactgram",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

export const uploadMiddleware = upload.single("file");

export const uploadController = (res, req) => {
  const {
    file:{location}
  } = req;
  console.log(location);
};
