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
  console.log(`[1/5] Starting download process for code: ${code}`);
  try {
    // Step 1: Fetch file metadata to get the original filename.
    console.log(`[2/5] Attempting to fetch metadata from: /files/${code}`);
    const metadataResponse = await apiClient.get(`/files/${code}`);

    console.log(
      "[3/5] Metadata request successful. Response object:",
      metadataResponse
    );

    // Make sure we have data to inspect
    if (!metadataResponse.data) {
      console.error('[ERROR] The metadata response has no "data" property.');
      throw new Error("Received an empty metadata response from the server.");
    }

    console.log("[3/5] Raw metadata content:", metadataResponse.data);

    const { originalFileName } = metadataResponse.data;

    if (!originalFileName) {
      console.error(
        '[ERROR] "originalFileName" was not found in the metadata response.',
        metadataResponse.data
      );
      throw new Error(
        "Could not find the original filename in the server response."
      );
    }

    console.log(
      `[4/5] Found filename: "${originalFileName}". Now fetching the file blob from /download/${code}`
    );

    // Step 2: Now that we have the name, download the actual file from the download URL.
    const fileResponse = await apiClient.get(`/download/${code}`, {
      responseType: "blob",
    });

    if (!(fileResponse.data instanceof Blob)) {
      console.error(
        "[ERROR] The response from /download/${code} was not a Blob."
      );
      throw new Error("Invalid file data received from server.");
    }

    console.log(
      `[5/5] Success! Returning blob and filename: "${originalFileName}"`
    );

    // Return the file blob and the correct filename from the metadata.
    return {
      blob: fileResponse.data,
      filename: originalFileName,
      contentType:
        fileResponse.headers["content-type"] || "application/octet-stream",
      size: fileResponse.data.size,
    };
  } catch (error) {
    console.error("[FATAL ERROR] The download process failed.", error);

    // Log detailed Axios error information if available
    if (error.response) {
      console.error("Error Status:", error.response.status);
      console.error("Error Data:", error.response.data);
      console.error("Error Headers:", error.response.headers);
    }

    if (error.response?.status === 404) {
      throw new Error(
        "File not found. The API endpoint might be wrong or the code is invalid."
      );
    }
    // Re-throw other errors to be handled by the component.
    throw error;
  }
};
