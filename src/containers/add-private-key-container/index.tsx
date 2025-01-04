import AddPrivateKey from "../../organisms/add-private-key";

const AddPrivateKeyContainer = () => {
  // const uploadJsonFile = async (jsonObject, fileName, accessToken) => {
  //   const metadata = {
  //     name: fileName, // Name of the file on Google Drive
  //     mimeType: "application/json", // JSON file type
  //   };

  //   const fileContent = JSON.stringify(jsonObject); // Convert JSON to string
  //   const formData = new FormData();
  //   formData.append(
  //     "metadata",
  //     new Blob([JSON.stringify(metadata)], { type: "application/json" })
  //   );
  //   formData.append(
  //     "file",
  //     new Blob([fileContent], { type: "application/json" })
  //   );

  //   try {
  //     const response = await fetch(
  //       "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
  //       {
  //         method: "POST",
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //         body: formData,
  //       }
  //     );

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log("JSON File Uploaded Successfully:", data);
  //       return data; // Returns file metadata, including the file ID
  //     } else {
  //       const error = await response.json();
  //       console.error("Error uploading JSON file:", error);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  return <AddPrivateKey />;
};

export default AddPrivateKeyContainer;

// Function to read file from drive
// const readJsonFile = async (fileId, accessToken) => {
//   try {
//     const response = await fetch(
//       `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );

//     if (response.ok) {
//       const content = await response.text(); // Get the file content as a string
//       const jsonObject = JSON.parse(content); // Parse it back into a JSON object
//       console.log("JSON File Content:", jsonObject);
//       return jsonObject;
//     } else {
//       const error = await response.json();
//       console.error("Error reading JSON file:", error);
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };
