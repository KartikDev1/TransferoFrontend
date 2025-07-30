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

// src/services/api.js

export const downloadFile = async (code) => {
  try {
    // --- STEP 1: Get metadata by asking the server for JSON ---
    const metadataResponse = await apiClient.get(`/download/${code}`, {
      headers: {
        Accept: "application/json", // Ask for the details
      },
    });

    // The backend returns an array, so we take the first object.
    const metadata = metadataResponse.data[0];

    if (!metadata || !metadata.originalFileName) {
      throw new Error("Could not get valid file metadata from server.");
    }

    // --- STEP 2: Get the actual file content (the blob) ---
    const fileResponse = await apiClient.get(`/download/${code}`, {
      responseType: "blob", // Ask for the file
    });

    const blob = fileResponse.data;

    if (!(blob instanceof Blob)) {
      throw new Error("Server did not return a valid file.");
    }

    // --- STEP 3: Combine everything and return it ---
    return [
      {
        blob: blob,
        filename: metadata.originalFileName,
        size: metadata.size,
        contentType: metadata.contentType,
      },
    ];
  } catch (error) {
    console.error("[FATAL ERROR] The download process failed.", error);
    throw error;
  }
};
