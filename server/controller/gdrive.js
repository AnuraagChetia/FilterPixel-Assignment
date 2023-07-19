const { google } = require("googleapis");

exports.getGdrive = async (req, res) => {
  async function main() {
    try {
      const auth = await google.auth.getClient({
        scopes: ["https://www.googleapis.com/auth/drive.readonly"],
      });

      const drive = google.drive({ version: "v3", auth });

      const folderId = "1_qOJ0z3kI_e2IJq4X6HqF0T1ROBESygS"; // Replace with the ID of your Google Drive folder

      const response = await drive.files.list({
        q: `'${folderId}' in parents`,
        fields: "files(name, id)",
      });

      const files = response.data.files;
      console.log("Files:");
      files.forEach((file) => {
        console.log(`${file.name} (${file.id})`);
      });
    } catch (error) {
      console.error("Error accessing folder:", error);
    }
  }

  main();
};
