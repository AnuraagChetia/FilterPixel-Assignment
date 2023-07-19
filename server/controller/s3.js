const { S3Client, ListObjectsCommand } = require("@aws-sdk/client-s3");

// exports.getS3 = async (req, res) => {
//   // Configure the SDK
//   AWS.config.update({
//     region: "ap-south-1", // Replace with your AWS region
//     credentials: new AWS.Credentials({
//       accessKeyId: "AKIA2UOIMILYXZGH75W3",
//       secretAccessKey: "K4q1QbPl1u7q4yUVo/CV8OXz+HxywvmMbc6ZWsDd",
//     }),
//   });

//   const s3 = new AWS.S3();

//   // Specify the bucket name
//   const bucketName = "testbucketfp";

//   // List objects in the bucket
//   s3.listObjects({ Bucket: bucketName }, (err, data) => {
//     let images = [];

//     if (err) {
//       console.log(err, err.stack);
//     } else {
//       data.Contents.forEach((object) => {
//         const objectKey = object.Key;

//         // Retrieve the object data
//         const params = {
//           Bucket: bucketName,
//           Key: objectKey,
//         };
//         s3.getObject(params, (err, data) => {
//           if (err) {
//             console.log(err, err.stack);
//           } else {
//             // Access the object data
//             images.push(data.Body.toString("utf-8"));
//             return console.log(JSON.parse(data.Body.toString("utf-8")));
//           }
//         });
//       });
//       res.json(images);
//     }
//   });
// };

exports.getS3 = async (req, res) => {
  // Set the AWS Region.
  const REGION = "ap-south-1";
  // Create an Amazon S3 service client object.
  const s3Client = new S3Client({
    region: REGION,
    signer: {
      sign: async (request) => request,
    },
  });
  const run = async () => {
    const bucketParams = {
      Bucket: "testbucketfp",
      MaxKeys: 100,
      // Key: objectKey,
    };
    try {
      const data = await s3Client.send(new ListObjectsCommand(bucketParams));
      // console.log("Success", data);
      return data.Contents; // For unit tests.
    } catch (err) {
      console.log("Error", err);
    }
  };
  const response = await run();
  res.status(200).json(response);
};
// https://s3-ap-south-1.amazonaws.com/testbucketfp/Screenshot 2022-02-10 at 4.55.17 PM.jpg
