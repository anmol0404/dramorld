import React from "react";
import { FaExclamationCircle, FaQuestionCircle } from "react-icons/fa";

interface DialogBoxProps {
  type: "alert" | "confirm" | "prompt" | "custom";
  title: string;
  message: string;
  isOpen: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
  customContent?: React.ReactNode;
}

const DialogBox = ({
  type,
  title,
  message,
  isOpen,
  onConfirm,
  onCancel,
  customContent,
}: DialogBoxProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-gray-800 p-6 m-16 rounded-lg shadow-lg w-11/12 md:w-1/2 ">
        <div className="flex items-center mb-4">
          {type === "alert" && (
            <FaExclamationCircle className="text-red-400 mr-2" />
          )}
          {type === "confirm" && (
            <FaQuestionCircle className="text-blue-400 mr-2" />
          )}
          <h2 className="text-xl font-bold text-white">{title}</h2>
        </div>
        <p className="mb-4 text-gray-300">{message}</p>

        {type === "prompt" && (
          <input
            type="text"
            placeholder="Enter your input"
            className="w-full p-2 mb-4 border border-gray-600 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}

        {type === "custom" && customContent}

        <div className="flex justify-end space-x-4 mt-4">
          {type !== "alert" && type !== "custom" && (
            <button
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500 transition duration-200"
              onClick={onCancel}
            >
              Cancel
            </button>
          )}

          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
            onClick={onConfirm}
          >
            {type === "alert" || "custom" ? "OK" : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
