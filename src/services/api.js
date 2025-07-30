import axios from "axios";

// Corrected base URL (no /api prefix)
const apiClient = axios.create({
  baseURL: "https://transferobackend.onrender.com/api", // Direct to backend root
});

/**
 * Uploads files to the backend.
 * API Contract: POST /files
 */
// api.js
export const sendFile = async (files) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append("file", file); // multiple files with field "files"
  });

  const response = await apiClient.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data; // this will be the single file metadata object (not array)
};

/**
 * Retrieves file metadata using a short code.
 * API Contract: GET /files/{code}
 */

// export const downloadFile = async (code) => {
//   try {
//     // First fetch file metadata to get originalFileName
//     const metadataResponse = await apiClient.get(`/download/${code}`);

//     console.log("Metadata response:", metadataResponse.data);

//     const { originalFileName } = metadataResponse.data;

//     // Then download the actual file content
//     const fileResponse = await apiClient.get(`/download/${code}`, {
//       responseType: "blob",
//     });

//     // Debug logs
//     console.log("File response headers:", fileResponse.headers);
//     console.log("File response originalFileName:", originalFileName);

//     // Verify we have valid blob data
//     if (!(fileResponse.data instanceof Blob)) {
//       throw new Error("Invalid file data received");
//     }

//     // Use originalFileName from metadata, fallback to header extraction, then code
//     let filename = originalFileName || `file-${code}`;

//     // Only try header parsing if we didn't get originalFileName
//     if (!originalFileName) {
//       try {
//         const contentDisposition =
//           fileResponse.headers["content-disposition"] || "";
//         const filenameMatch =
//           contentDisposition.match(/filename="?([^"]+)"?/i) ||
//           contentDisposition.match(/filename\*=UTF-8''([^;]+)/i);
//         if (filenameMatch?.[1]) {
//           filename = decodeURIComponent(filenameMatch[1]);
//         }
//       } catch (headerError) {
//         console.warn("Could not parse content-disposition:", headerError);
//       }
//     }

//     return {
//       blob: fileResponse.data,
//       filename, // Now guaranteed to use originalFileName if available
//       contentType:
//         fileResponse.headers["content-type"] || "application/octet-stream",
//       originalFileName, // Also return the original for reference
//     };
//   } catch (error) {
//     console.error("Download error:", error);

//     // Enhance error message for metadata fetch failures
//     if (error.response?.config?.url?.includes("/api/files/")) {
//       error.message = "Failed to fetch file metadata: " + error.message;
//     }

//     throw error;
//   }
// };

// src/services/api.js
// src/services/api.js

export const downloadFile = async (code) => {
  try {
    // Step 1: Fetch file metadata to get the original filename.
    // NOTE: We are calling `/files/{code}` here to get the JSON data first.
    // If your metadata endpoint is different (e.g., `/metadata/${code}`), update the path here.
    const metadataResponse = await apiClient.get(`/download/${code}`);

    const { originalFileName } = metadataResponse.data;

    // If the original filename isn't found in the response, throw an error.
    if (!originalFileName) {
      throw new Error(
        "Could not find the original filename in the server response."
      );
    }

    // Step 2: Now that we have the name, download the actual file from the download URL.
    const fileResponse = await apiClient.get(`/download/${code}`, {
      responseType: "blob",
    });

    // Verify the response is a valid file.
    if (!(fileResponse.data instanceof Blob)) {
      throw new Error("Invalid file data received from server.");
    }

    console.log(
      `Success! Filename: "${originalFileName}", Size: ${fileResponse.data.size} bytes`
    );

    // Return the file blob and the correct filename from the metadata.
    return {
      blob: fileResponse.data,
      filename: originalFileName, // ✅ Use the name from the metadata
      contentType:
        fileResponse.headers["content-type"] || "application/octet-stream",
      size: fileResponse.data.size,
    };
  } catch (error) {
    console.error("Download error:", error);
    if (error.response?.status === 404) {
      throw new Error("File not found. The code may be invalid or expired.");
    }
    // Re-throw other errors to be handled by the component.
    throw error;
  }
};
