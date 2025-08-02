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
  ChevronLeft,
  ChevronRight,
  FileArchive, // Add this import
  Folder,
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import QRCode from "react-qr-code";
import { toast, Toaster } from "react-hot-toast";
import Confetti from "react-confetti";

import { sendFile, downloadFile, downloadGroup } from "../services/api";

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
  const [currentQrIndex, setCurrentQrIndex] = useState(0);
  const fileInputRef = useRef(null);
  const qrContainerRef = useRef(null);
  const [receiveMode, setReceiveMode] = useState("single"); // 'single' or 'group'
  const [groupCode, setGroupCode] = useState("");
  const [groupError, setGroupError] = useState("");
  const [isDownloadingGroup, setIsDownloadingGroup] = useState(false);
  const [viewMode, setViewMode] = useState("individual"); // 'individual' or 'group'

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!qrContainerRef.current || !downloadData || downloadData.length <= 1)
      return;

    const container = qrContainerRef.current;
    let startX = 0;
    let isSwiping = false;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      isSwiping = true;
    };

    const handleTouchMove = (e) => {
      if (!isSwiping) return;
      const currentX = e.touches[0].clientX;
      const diff = startX - currentX;

      if (Math.abs(diff) > 50) {
        isSwiping = false;
        if (diff > 0) {
          handleNextQr();
        } else {
          handlePrevQr();
        }
      }
    };

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [downloadData]);

  const handlePrevQr = () => {
    setCurrentQrIndex((prev) =>
      prev === 0 ? downloadData.length - 1 : prev - 1
    );
  };

  const handleNextQr = () => {
    setCurrentQrIndex((prev) =>
      prev === downloadData.length - 1 ? 0 : prev + 1
    );
  };

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
    e.target.value = null;
  };

  const removeFile = (index) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleGroupDownload = async () => {
    setIsDownloadingGroup(true);
    setGroupError("");
    setReceiveFileData(null);

    try {
      const code = groupCode.trim().toUpperCase();

      // This will automatically trigger the download
      await downloadGroup(code);

      // For UI feedback
      setReceiveFileData({
        name: `Transfero-${code}.zip`,
        type: "application/zip",
        url: "#", // Not used since downloadGroup handles the download
      });

      toast.success("Group files downloaded successfully!");
    } catch (error) {
      console.error("Error receiving group files:", error);
      let errorMessage = "Group download failed";

      if (error.message.includes("Network Error")) {
        errorMessage = "Network connection failed";
      } else if (error.response?.status === 404) {
        errorMessage = "Group not found - check the code";
      } else if (error.response?.status === 410) {
        errorMessage = "Group expired or was already downloaded";
      }

      setGroupError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsDownloadingGroup(false);
    }
  };

  const handleSend = async () => {
    if (!selectedFiles.length) return;

    setIsUploading(true);

    try {
      const responseData = await sendFile(selectedFiles);
      console.log("ResponseData from sendFile =>", responseData);

      setDownloadData(responseData);
      setCurrentQrIndex(0);
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

  const handleReceive = async () => {
    setIsFetching(true);
    setReceiveError("");
    setReceiveFileData(null);

    try {
      const code = receiveCode.trim().toUpperCase();

      // Call the single file download API
      const { blob, filename, contentType, originalFileName } =
        await downloadFile(code);

      // Create download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = originalFileName || filename;
      document.body.appendChild(a);
      a.click();

      // Cleanup
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }, 100);

      // Update UI state
      setReceiveFileData({
        name: originalFileName || filename,
        type: contentType,
        url,
      });

      toast.success("File downloaded successfully!");
    } catch (error) {
      console.error("Error receiving file:", error);
      let errorMessage = "File download failed";

      if (error.message.includes("Network Error")) {
        errorMessage = "Network connection failed";
      } else if (error.response?.status === 404) {
        errorMessage = "File not found - check the code";
      } else if (error.response?.status === 410) {
        errorMessage = "File expired or was already downloaded";
      }

      setReceiveError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsFetching(false);
    }
  };

  const handleModeSwitch = (newMode) => {
    setReceiveMode(newMode);
    setReceiveCode("");
    setGroupCode("");
    setReceiveError("");
    setGroupError("");
    setReceiveFileData(null);
  };

  const resetSendModal = () => {
    setIsSendModalOpen(false);
    setTimeout(() => {
      setDownloadData(null);
      setSelectedFiles([]);
    }, 300);
  };

  const resetReceiveModal = () => {
    setIsReceiveModalOpen(false);
    setTimeout(() => {
      setReceiveCode("");
      setReceiveError("");
      setReceiveFileData(null);
      setGroupCode("");
      setGroupError("");
      setReceiveMode("single");
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

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section className="relative min-h-screen lg:min-h-[90vh] w-full bg-[#f5f5fc] overflow-hidden px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
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
                encryption. No accounts needed. Free for files up to 50MB.
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

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0"
            >
              <AnimatedLogo />
            </motion.div>
          </div>

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
                        Max file size: 50MB
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
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-success/10 rounded-full">
                      <CheckCircle2 className="w-10 h-10 text-success" />
                    </div>
                    <h2 className="text-2xl font-bold">
                      Files Sent Successfully!
                    </h2>

                    {/* Add toggle for view mode */}
                    {downloadData.length > 1 && (
                      <div className="tabs tabs-boxed bg-base-200 w-full">
                        <button
                          className={`tab flex-1 ${
                            viewMode === "individual" ? "tab-active" : ""
                          }`}
                          onClick={() => setViewMode("individual")}
                        >
                          <File className="w-4 h-4 mr-2" /> Individual Files
                        </button>
                        <button
                          className={`tab flex-1 ${
                            viewMode === "group" ? "tab-active" : ""
                          }`}
                          onClick={() => setViewMode("group")}
                        >
                          <Folder className="w-4 h-4 mr-2" /> Group View
                        </button>
                      </div>
                    )}

                    <p className="text-base-content/70 -mt-4">
                      {viewMode === "individual"
                        ? "Scan QR codes or share the codes ."
                        : "Share this group code to download all files together."}
                    </p>

                    <div className="relative">
                      <div
                        ref={qrContainerRef}
                        className="overflow-hidden relative"
                      >
                        {viewMode === "individual" ? (
                          <motion.div
                            key={currentQrIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col items-center gap-4"
                          >
                            <h3 className="text-lg font-medium">
                              {downloadData[currentQrIndex].originalFileName ||
                                `File ${currentQrIndex + 1}`}
                            </h3>

                            {downloadData[currentQrIndex].qrCodeBase64 ? (
                              <div className="p-2 bg-white rounded-lg inline-block">
                                <img
                                  src={
                                    downloadData[currentQrIndex].qrCodeBase64
                                  }
                                  alt={`QR Code ${downloadData[currentQrIndex].shortCode}`}
                                  className="w-40 h-40"
                                />
                              </div>
                            ) : (
                              <p className="text-warning">QR not available</p>
                            )}

                            {downloadData[currentQrIndex].shortCode && (
                              <div className="bg-primary/10 text-primary font-mono font-bold text-3xl p-4 rounded-lg tracking-widest flex items-center justify-center gap-4">
                                <span>
                                  {downloadData[currentQrIndex].shortCode}
                                </span>
                                <button
                                  onClick={() =>
                                    handleCopyCode(
                                      downloadData[currentQrIndex].shortCode
                                    )
                                  }
                                  className="btn btn-ghost btn-sm btn-circle"
                                >
                                  <Copy className="w-5 h-5" />
                                </button>
                              </div>
                            )}
                          </motion.div>
                        ) : (
                          <motion.div
                            key="group-view"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center gap-4"
                          >
                            <h3 className="text-lg font-medium">
                              File Group ({downloadData.length} files)
                            </h3>

                            {downloadData[0]?.groupQrCodeBase64 ? (
                              <div className="p-2 bg-white rounded-lg inline-block">
                                <img
                                  src={downloadData[0].groupQrCodeBase64}
                                  alt={`Group QR Code ${downloadData[0].groupCode}`}
                                  className="w-40 h-40"
                                />
                              </div>
                            ) : (
                              <p className="text-warning">
                                Group QR code not available
                              </p>
                            )}

                            {downloadData[0]?.groupCode && (
                              <div className="bg-blue-100 text-blue-800 font-mono font-semibold text-lg p-3 rounded-lg flex items-center justify-between max-w-md mx-auto mt-4 shadow">
                                <span className="tracking-wider">
                                  {downloadData[0].groupCode}
                                </span>
                                <button
                                  onClick={() =>
                                    handleCopyCode(downloadData[0].groupCode)
                                  }
                                  className="btn btn-ghost btn-sm btn-circle tooltip tooltip-left"
                                  data-tip="Copy group code"
                                >
                                  <Copy className="w-5 h-5" />
                                </button>
                              </div>
                            )}

                            <div className="text-sm text-base-content/70 mt-2">
                              <FileArchive className="w-4 h-4 inline-block mr-1" />
                              Files will be downloaded as a ZIP archive
                            </div>
                          </motion.div>
                        )}
                      </div>

                      {viewMode === "individual" && downloadData.length > 1 && (
                        <>
                          <button
                            onClick={handlePrevQr}
                            className="absolute left-0 top-1/2 -translate-y-1/2 btn btn-ghost btn-circle"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button
                            onClick={handleNextQr}
                            className="absolute right-0 top-1/2 -translate-y-1/2 btn btn-ghost btn-circle"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </button>
                          <div className="flex justify-center gap-2 mt-4">
                            {downloadData.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentQrIndex(index)}
                                className={`w-2 h-2 rounded-full ${
                                  index === currentQrIndex
                                    ? "bg-primary"
                                    : "bg-base-300"
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex flex-col gap-3">
                      <button
                        onClick={() =>
                          handleCopyCode(
                            viewMode === "individual"
                              ? downloadData[currentQrIndex].shortCode
                              : downloadData.groupCode
                          )
                        }
                        className="btn btn-outline w-full"
                      >
                        <Copy className="w-5 h-5" />
                        Copy {viewMode === "individual" ? "Code" : "Group Code"}
                      </button>
                      <button
                        onClick={resetSendModal}
                        className="w-full btn btn-primary"
                      >
                        Send More Files
                      </button>
                    </div>
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

              <div className="flex bg-base-200 p-1 rounded-xl mb-6">
                <button
                  className={`flex-1 py-3 rounded-lg flex items-center justify-center transition-all ${
                    receiveMode === "single"
                      ? "bg-primary text-white shadow-sm"
                      : "text-base-content/80 hover:bg-base-300/50"
                  }`}
                  onClick={() => handleModeSwitch("single")}
                >
                  <File className="w-4 h-4 mr-2" />
                  Single File
                </button>
                <button
                  className={`flex-1 py-3 rounded-lg flex items-center justify-center transition-all ${
                    receiveMode === "group"
                      ? "bg-primary text-white shadow-sm"
                      : "text-base-content/80 hover:bg-base-300/50"
                  }`}
                  onClick={() => handleModeSwitch("group")}
                >
                  <Folder className="w-4 h-4 mr-2" />
                  Group Files
                </button>
              </div>

              <AnimatePresence mode="wait">
                {!receiveFileData ? (
                  <motion.div
                    key="input-view"
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={receiveMode}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-base-content/80">
                            Enter the{" "}
                            {receiveMode === "single" ? "file" : "group"} code
                          </label>
                          <input
                            type="text"
                            value={
                              receiveMode === "single" ? receiveCode : groupCode
                            }
                            onChange={(e) => {
                              const value = e.target.value
                                .toUpperCase()
                                .replace(/[^A-Z0-9]/g, "");
                              receiveMode === "single"
                                ? setReceiveCode(value)
                                : setGroupCode(value);
                            }}
                            placeholder={`e.g. ${
                              receiveMode === "single" ? "7S3W3C" : "GRP123"
                            }`}
                            className="input input-bordered w-full text-lg font-mono tracking-widest focus:input-primary focus:ring-2 focus:ring-primary/50"
                          />

                          {/* Improved error message */}
                          {(receiveError || groupError) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              className="flex items-center gap-2 p-3 text-sm text-error"
                            >
                              <X className="w-4 h-4 flex-shrink-0" />
                              <span>
                                {receiveError || groupError} - Please verify the
                                code
                              </span>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <button
                      onClick={
                        receiveMode === "single"
                          ? handleReceive
                          : handleGroupDownload
                      }
                      disabled={
                        (receiveMode === "single" && !receiveCode) ||
                        (receiveMode === "group" && !groupCode) ||
                        isFetching ||
                        isDownloadingGroup
                      }
                      className="w-full btn btn-primary btn-lg shadow-md hover:shadow-lg transition-all"
                    >
                      {isFetching || isDownloadingGroup ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : receiveMode === "single" ? (
                        "Retrieve File"
                      ) : (
                        <span className="flex items-center gap-2">
                          <FileArchive className="w-5 h-5" />
                          Download Group
                        </span>
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
                          {receiveMode === "single" ? "File" : "Group"}{" "}
                          Available!
                        </h3>
                        <p className="text-sm text-success/80">
                          Ready to download.
                        </p>
                      </div>
                    </div>

                    <a
                      href={receiveFileData.url}
                      download={receiveFileData.name}
                      className="w-full btn btn-primary btn-lg"
                    >
                      {receiveMode === "single" ? (
                        "Download Now"
                      ) : (
                        <span className="flex items-center gap-2">
                          <FileArchive className="w-5 h-5" />
                          Download ZIP
                        </span>
                      )}
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
