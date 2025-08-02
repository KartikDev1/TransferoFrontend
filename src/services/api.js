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
//PREVIOUS---
// export const sendFile = async (files) => {
//   const formData = new FormData();
//   files.forEach((file) => {
//     formData.append("file", file); // multiple files with field "files"
//   });

//   const response = await apiClient.post("/upload", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });

//   return response.data; // this will be the single file metadata object (not array)
// };

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

  return response.data; // this will be the single file metadata object (not array)
};

/**
 * Retrieves file metadata using a short code.
 * API Contract: GET /files/{code}
 */

export const downloadFile = async (code) => {
  try {
    code = code.trim().toUpperCase();
    // First fetch file metadata to get originalFileName
    const metadataResponse = await apiClient.get(`/download/${code}`);

    const { originalFileName } = metadataResponse.data;

    // Then download the actual file content
    const fileResponse = await apiClient.get(`/download/${code}`, {
      responseType: "blob",
    });

    // Verify we have valid blob data
    if (!(fileResponse.data instanceof Blob)) {
      throw new Error("Invalid file data received");
    }

    // Use originalFileName from metadata, fallback to header extraction, then code
    let filename = originalFileName || `file-${code}`;

    // Only try header parsing if we didn't get originalFileName
    if (!originalFileName) {
      try {
        const contentDisposition =
          fileResponse.headers["content-disposition"] || "";
        const filenameMatch =
          contentDisposition.match(/filename="?([^"]+)"?/i) ||
          contentDisposition.match(/filename\*=UTF-8''([^;]+)/i);
        if (filenameMatch?.[1]) {
          filename = decodeURIComponent(filenameMatch[1]);
        }
      } catch (headerError) {
        console.warn("Could not parse content-disposition:", headerError);
      }
    }

    return {
      blob: fileResponse.data,
      filename, // Now guaranteed to use originalFileName if available
      contentType:
        fileResponse.headers["content-type"] || "application/octet-stream",
      originalFileName, // Also return the original for reference
    };
  } catch (error) {
    console.error("Download error:", error);

    // Enhance error message for metadata fetch failures
    if (error.response?.config?.url?.includes("/api/files/")) {
      error.message = "Failed to fetch file metadata: " + error.message;
    }

    throw error;
  }
};

export const downloadGroup = async (groupCode) => {
  try {
    groupCode = groupCode.trim().toUpperCase();

    const response = await apiClient.get(`/download/group/${groupCode}`, {
      responseType: "blob", // Ensure you get a binary response
    });

    if (!(response.data instanceof Blob)) {
      throw new Error("Invalid zip file data received");
    }

    // Extract filename from content-disposition if available
    let filename = `Transfero-${groupCode}.zip`;
    const contentDisposition = response.headers["content-disposition"] || "";
    const filenameMatch =
      contentDisposition.match(/filename="?([^"]+)"?/) ||
      contentDisposition.match(/filename\*=UTF-8''([^;]+)/i);
    if (filenameMatch?.[1]) {
      filename = decodeURIComponent(filenameMatch[1]);
    }

    // Trigger browser download
    const url = window.URL.createObjectURL(response.data);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.style.display = "none";
    a.rel = "noopener";
    a.target = "_self";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Group download error:", error);
    throw error;
  }
};
