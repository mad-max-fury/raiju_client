import React, { useState, ChangeEvent } from "react";
import UploadIcon from "../../assets/svg/uploadIcon";
import { Typography } from "../typography";

interface FileUploaderProps {
  onFileUpload?: (file: File) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (
        selectedFile.size <= 5242880 &&
        selectedFile.type.startsWith("image/")
      ) {
        setFile(selectedFile);
        onFileUpload && onFileUpload(selectedFile);

        // Read file and generate preview URL
        const reader = new FileReader();
        reader.onload = () => {
          setPreviewURL(reader.result as string);
        };
        reader.readAsDataURL(selectedFile);
      } else {
        alert("File must be an image and should not exceed 5MB");
      }
    }
  };

  return (
    <div className="w-[160px] h-[160px] border-[#cacaca] border-solid border rounded-md flex justify-center flex-col items-center">
      <label
        htmlFor="file-upload"
        className="cursor-pointer h-full flex items-center justify-center flex-col"
      >
        {previewURL ? (
          <img
            src={previewURL}
            alt="Preview"
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <>
            <div className="flex gap-2 items-center">
              <span>
                <UploadIcon />
              </span>
              <Typography variant="body-s">Upload</Typography>
            </div>
            <Typography
              variant="body-s"
              align="center"
              customClassName="text-[#cacaca]"
            >
              Or Drop file
            </Typography>
          </>
        )}
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUploader;
