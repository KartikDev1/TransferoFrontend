"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  ArrowRight,
  ShieldCheck,
  Zap,
  Smartphone,
  X,
  Download,
  File,
  CheckCircle2,
  Loader2,
  Copy,
  Share2,
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import QRCode from "react-qr-code";
import { toast, Toaster } from "react-hot-toast";
import Confetti from "react-confetti";

import { sendFile, downloadFile } from "../services/api";

// A more dynamic and engaging animated logo
const AnimatedLogo = () => {
  return (
    <motion.div
      className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <DotLottieReact
        src="https://lottie.host/b16c74e5-9135-4292-8380-2e83f4a638e9/LmzCQOEYdo.lottie"
        loop
        autoplay
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/10 blur-3xl -z-10"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

// File Preview with smoother animation
const FilePreviewItem = ({ file, onRemove }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: -10, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="flex items-center justify-between p-3 bg-base-200 rounded-lg"
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <File className="w-5 h-5 text-primary flex-shrink-0" />
        <div className="truncate">
          <p className="font-medium truncate text-sm">{file.name}</p>
          <p className="text-xs text-base-content/60">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      </div>
      <button
        onClick={onRemove}
        className="btn btn-ghost btn-xs text-error/70 hover:text-error hover:bg-error/10"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

// Feature cards with a refined hover effect
const FeatureCard = ({ icon, title, description }) => {
  const IconComponent = icon;
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className="card bg-base-100 shadow-lg hover:shadow-primary/20 transition-all border border-base-200/50"
    >
      <div className="card-body items-center text-center">
        <div className="p-4 rounded-full bg-primary/10 text-primary mb-3">
          <IconComponent className="w-7 h-7" />
        </div>
        <h3 className="card-title text-lg font-bold">{title}</h3>
        <p className="text-base-content/70">{description}</p>
      </div>
    </motion.div>
  );
};

export default function HeroSection() {
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [isReceiveModalOpen, setIsReceiveModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [downloadData, setDownloadData] = useState(null);
  const [receiveCode, setReceiveCode] = useState("");
  const [receiveError, setReceiveError] = useState("");
  const [receiveFileData, setReceiveFileData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const fileInputRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    setSelectedFiles((prev) => [...prev, ...files]);
    toast.success(`${files.length} file(s) added!`);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles((prev) => [...prev, ...files]);
    toast.success(`${files.length} file(s) added!`);
    e.target.value = null; // Reset input value
  };

  const removeFile = (index) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  //Production - handleSend {************YE DEKHNA H TUJE**************}
  const handleSend = async () => {
    if (!selectedFiles.length) return;

    setIsUploading(true);

    try {
      const responseData = await sendFile(selectedFiles);
      console.log("ResponseData from sendFile =>", responseData);

      setDownloadData(responseData[0]);

      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
    } catch (error) {
      console.error("Error sending files:", error);
      toast.error(
        error.response?.data?.message || "An error occurred while uploading."
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };

  //Production - handleReceive {************YE DEKHNA H TUJE**************}
  // const handleReceive = async () => {
  //   setIsFetching(true);
  //   setReceiveError("");
  //   setReceiveFileData(null);

  //   try {
  //     const { blob, filename, contentType, originalFileName, size } = await downloadFile(receiveCode);

  //     // Verify blob before creating URL
  //     if (!blob || !(blob instanceof Blob)) {
  //       throw new Error('Invalid file data');
  //     }

  //     // Create download link
  //     const url = window.URL.createObjectURL(blob);
  //     const a = document.createElement('a');
  //     a.href = url;
  //     a.download = originalFileName; // Use original filename for download
  //     document.body.appendChild(a);
  //     a.click();

  //     // Cleanup
  //     setTimeout(() => {
  //       window.URL.revokeObjectURL(url);
  //       document.body.removeChild(a);
  //     }, 100);

  //     // Update UI state with original filename
  //     setReceiveFileData({
  //       name: originalFileName, // Use original filename here
  //       originalFileName, // Keep original name separate if needed
  //       type: contentType,
  //       size: size,
  //       url // Optional: keep download URL if needed
  //     });

  //     toast.success("File downloaded successfully!");
  //   } catch (error) {
  //     console.error("Error receiving file:", error);
  //     let errorMessage = "Download failed";
  //     if (error.message.includes('Network Error')) {
  //       errorMessage = "Network connection failed";
  //     } else if (error.response?.status === 404) {
  //       errorMessage = "File not found";
  //     }
  //     setReceiveError(errorMessage);
  //     toast.error(errorMessage);
  //   } finally {
  //     setIsFetching(false);
  //   }
  // };

  // const handleReceive = async () => {
  //   setIsFetching(true);
  //   setReceiveError("");
  //   setReceiveFileData(null);

  //   try {
  //     // Destructure 'filename' from the API response
  //     const { blob, filename, size, contentType } = await downloadFile(
  //       receiveCode
  //     );

  //     // Create a temporary URL for the blob
  //     const url = window.URL.createObjectURL(blob);
  //     const a = document.createElement("a");
  //     a.style.display = "none"; // The link doesn't need to be visible
  //     a.href = url;

  //     // **THE FIX**: Use the correct 'filename' variable here
  //     a.download = filename;

  //     document.body.appendChild(a);
  //     a.click(); // Programmatically click the link to trigger the download

  //     // Clean up the temporary URL and link element
  //     window.URL.revokeObjectURL(url);
  //     document.body.removeChild(a);

  //     // Update the UI state to show the download was successful
  //     setReceiveFileData({
  //       name: filename,
  //       type: contentType,
  //       size: size,
  //     });

  //     toast.success("Download started successfully!");
  //   } catch (error) {
  //     console.error("Error receiving file:", error);
  //     // Display the user-friendly error message from the API call
  //     const errorMessage =
  //       error.message ||
  //       "Download failed. Please check the code and try again.";
  //     setReceiveError(errorMessage);
  //     toast.error(errorMessage);
  //   } finally {
  //     setIsFetching(false);
  //   }
  // };

  // src/components/HeroSection.js

  const handleReceive = async () => {
    setIsFetching(true);
    setReceiveError("");
    setReceiveFileData(null);

    try {
      // 1. Call the API function which returns an array.
      const fileDataArray = await downloadFile(receiveCode);

      // 2. Check if we received a valid array with at least one item.
      if (!fileDataArray || fileDataArray.length === 0) {
        throw new Error("Received empty or invalid response from the server.");
      }

      // 3. Get the file object from the first position in the array.
      const fileInfo = fileDataArray[0];

      // 4. Destructure the details from the file object.
      const { blob, filename, size, contentType } = fileInfo;

      // 5. Create a temporary link to trigger the browser download.
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = filename; // Use the correct filename from the object
      document.body.appendChild(a);
      a.click();

      // 6. Clean up the temporary link and URL.
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      // 7. Update the UI state to confirm the download.
      setReceiveFileData({
        name: filename,
        type: contentType,
        size: size,
      });

      toast.success("Download started successfully!");
    } catch (error) {
      // 8. Handle any errors that occur during the process.
      console.error("Error receiving file:", error);
      const errorMessage =
        error.message ||
        "Download failed. Please check the code and try again.";
      setReceiveError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsFetching(false);
    }
  };

  const resetSendModal = () => {
    setIsSendModalOpen(false);
    setTimeout(() => {
      setDownloadData(null);
      setSelectedFiles([]);
    }, 300); // delay to allow exit animation
  };

  const resetReceiveModal = () => {
    setIsReceiveModalOpen(false);
    setTimeout(() => {
      setReceiveCode("");
      setReceiveError("");
      setReceiveFileData(null);
    }, 300);
  };

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Transfer files in seconds with our optimized network.",
    },
    {
      icon: ShieldCheck,
      title: "End-to-End Encryption",
      description: "Military-grade security for your sensitive files.",
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Works seamlessly across all devices and browsers.",
    },
  ];

  console.log("downloadData =>", downloadData);

  return (
    <>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      <section className="relative min-h-screen lg:min-h-[90vh] w-full bg-[#f5f5fc] overflow-hidden px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 space-y-8 text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-base-content"
              >
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Transfer Files
                </span>
                <br />
                Without the Hassle
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-base-content/70 max-w-lg mx-auto lg:mx-0"
              >
                Secure, fast, and simple file sharing with end-to-end
                encryption. No accounts needed. Free for files up to 10GB.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button
                  onClick={() => setIsSendModalOpen(true)}
                  className="btn btn-primary btn-lg rounded-full group shadow-lg shadow-primary/20 hover:shadow-primary/40"
                >
                  <span className="flex items-center gap-2">
                    <Upload className="w-5 h-5" />
                    Send Files
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button
                  onClick={() => setIsReceiveModalOpen(true)}
                  className="btn btn-outline btn-lg rounded-full hover:btn-secondary"
                >
                  <span className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Receive Files
                  </span>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0"
            >
              <AnimatedLogo />
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24"
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Send Modal */}
      <AnimatePresence>
        {isSendModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            onClick={resetSendModal}
          >
            {showConfetti && (
              <Confetti width={windowSize.width} height={windowSize.height} />
            )}
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-base-100 p-6 rounded-2xl shadow-2xl w-full max-w-md relative"
            >
              <button
                onClick={resetSendModal}
                className="absolute top-4 right-4 btn btn-ghost btn-circle btn-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {!downloadData ? (
                  <motion.div key="upload-view" exit={{ opacity: 0, y: -20 }}>
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                      {isUploading ? (
                        <>
                          <Loader2 className="w-6 h-6 animate-spin text-primary" />
                          <span>Sending Files...</span>
                        </>
                      ) : (
                        <>
                          <Upload className="w-6 h-6 text-primary" />
                          <span>Send Your Files</span>
                        </>
                      )}
                    </h2>

                    <div
                      className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300 ${
                        isDragging
                          ? "border-primary bg-primary/10 scale-105"
                          : "border-base-300 hover:border-primary"
                      }`}
                      onClick={() =>
                        !isUploading && fileInputRef.current.click()
                      }
                      onDragEnter={handleDragEnter}
                      onDragLeave={handleDragLeave}
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                    >
                      <motion.div
                        animate={{ scale: isDragging ? 1.2 : 1 }}
                        transition={{ type: "spring" }}
                      >
                        <Upload
                          className={`w-10 h-10 mx-auto mb-3 transition-colors ${
                            isDragging ? "text-primary" : "text-gray-400"
                          }`}
                        />
                      </motion.div>
                      <p className="font-semibold text-base-content">
                        {isDragging
                          ? "Drop them here!"
                          : "Drag & drop files or click to browse"}
                      </p>
                      <p className="text-sm text-base-content/60 mt-1">
                        Max file size: 10GB
                      </p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        className="hidden"
                        onChange={handleFileChange}
                        disabled={isUploading}
                      />
                    </div>

                    <AnimatePresence>
                      {selectedFiles.length > 0 && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            marginTop: "16px",
                          }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          className="overflow-hidden"
                        >
                          <h3 className="font-medium text-sm mb-2">
                            Selected Files ({selectedFiles.length})
                          </h3>
                          <div className="max-h-40 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                            {selectedFiles.map((file, index) => (
                              <FilePreviewItem
                                key={file.name + index}
                                file={file}
                                onRemove={() => removeFile(index)}
                              />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      onClick={handleSend}
                      disabled={!selectedFiles.length || isUploading}
                      className="mt-6 w-full btn btn-primary btn-lg"
                    >
                      {isUploading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        `Send ${selectedFiles.length || ""} File${
                          selectedFiles.length !== 1 ? "s" : ""
                        }`
                      )}
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-view"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-6"
                  >
                    {/* Success icon and header */}
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-success/10 rounded-full">
                      <CheckCircle2 className="w-10 h-10 text-success" />
                    </div>
                    <h2 className="text-2xl font-bold">
                      Files Sent Successfully!
                    </h2>
                    <p className="text-base-content/70 -mt-4">
                      Scan the QR code or share the code below.
                    </p>

                    {downloadData && (
                      <motion.div
                        key="success-view"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center space-y-6"
                      >
                        <h2 className="text-2xl font-bold">
                          Share this code or scan QR
                        </h2>

                        {downloadData.qrCodeBase64 ? (
                          <div className="p-2 bg-white rounded-lg inline-block">
                            <img
                              src={downloadData.qrCodeBase64}
                              alt="Download QR Code"
                              className="w-50 h-50"
                            />
                          </div>
                        ) : (
                          <p className="text-warning">QR code not available</p>
                        )}

                        {downloadData.shortCode && (
                          <div className="bg-primary/10 text-primary font-mono font-bold text-3xl p-4 rounded-lg tracking-widest flex items-center justify-center gap-4">
                            <span>{downloadData.shortCode}</span>
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(
                                  downloadData.shortCode
                                );
                                toast.success("Code copied!");
                              }}
                              className="btn btn-ghost btn-sm btn-circle"
                            >
                              <Copy className="w-5 h-5" />
                            </button>
                          </div>
                        )}
                      </motion.div>
                    )}

                    <button
                      onClick={resetSendModal}
                      className="w-full btn btn-outline"
                    >
                      Send More Files
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Receive Modal */}
      <AnimatePresence>
        {isReceiveModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            onClick={resetReceiveModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-base-100 p-6 rounded-2xl shadow-2xl w-full max-w-md relative"
            >
              <button
                onClick={resetReceiveModal}
                className="absolute top-4 right-4 btn btn-ghost btn-circle btn-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Download className="w-6 h-6 text-primary" />
                Receive Files
              </h2>

              <AnimatePresence mode="wait">
                {!receiveFileData ? (
                  <motion.div
                    key="input-view"
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="label">
                        <span className="label-text">Enter the file code</span>
                      </label>
                      <input
                        type="text"
                        value={receiveCode}
                        onChange={(e) => setReceiveCode(e.target.value)}
                        placeholder="e.g. T1F13G"
                        className="input input-bordered w-full text-lg font-mono uppercase tracking-widest focus:input-primary"
                      />
                      <AnimatePresence>
                        {receiveError && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{
                              opacity: 1,
                              height: "auto",
                              marginTop: "8px",
                            }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            className="alert alert-error text-sm py-2"
                          >
                            <span>{receiveError}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <button
                      onClick={handleReceive}
                      disabled={!receiveCode || isFetching}
                      className="w-full btn btn-primary btn-lg"
                    >
                      {isFetching ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        "Retrieve Files"
                      )}
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="file-view"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-4 p-4 bg-success/10 rounded-xl">
                      <CheckCircle2 className="w-8 h-8 text-success flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-success">
                          File Available!
                        </h3>
                        <p className="text-sm text-success/80">
                          Ready to download.
                        </p>
                      </div>
                    </div>

                    <a
                      href={receiveFileData.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn btn-primary btn-lg"
                    >
                      Download Now
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
