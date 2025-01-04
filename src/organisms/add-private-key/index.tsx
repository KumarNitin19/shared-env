const AddPrivateKey = () => {
  // const uploadToGoogleDrive = async () => {
  //   const accessToken = await signInWithGoogle();
  //   if (!accessToken) {
  //     alert("Failed to get access token");
  //     return;
  //   }

  //   const metadata = {
  //     name: file.name, // File name on Google Drive
  //     mimeType: file.type, // File type
  //   };

  //   const form = new FormData();
  //   form.append(
  //     "metadata",
  //     new Blob([JSON.stringify(metadata)], { type: "application/json" })
  //   );
  //   form.append("file", file);

  //   try {
  //     const response = await fetch(
  //       "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
  //       {
  //         method: "POST",
  //         headers: new Headers({
  //           Authorization: `Bearer ${accessToken}`,
  //         }),
  //         body: form,
  //       }
  //     );

  //     const data = await response.json();
  //     if (response.ok) {
  //       alert(`File uploaded successfully! File ID: ${data.id}`);
  //     } else {
  //       console.error("Upload failed", data);
  //     }
  //   } catch (error) {
  //     console.error("Error uploading file:", error);
  //   }
  // };
  return <div></div>;
};

export default AddPrivateKey;
