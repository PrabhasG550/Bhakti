'use client';

import { useState, useRef, useEffect } from 'react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  userAddress: string;
  userImage: string | null;
  onUpdateProfile: (name: string, address: string, image: string | null) => void;
}

export default function ProfileModal({ 
  isOpen, 
  onClose, 
  userName, 
  userAddress, 
  userImage,
  onUpdateProfile 
}: ProfileModalProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(userName);
  const [editedAddress, setEditedAddress] = useState(userAddress);
  const [profileImage, setProfileImage] = useState<string | null>(userImage);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setEditedName(userName);
      setEditedAddress(userAddress);
      setProfileImage(userImage);
    }
  }, [isOpen, userName, userAddress, userImage]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleImageClick = () => {
    if (isEditing && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setProfileImage(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onUpdateProfile(editedName, editedAddress, profileImage);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedName(userName);
    setEditedAddress(userAddress);
    setProfileImage(userImage);
    setIsEditing(false);
  };

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-zinc-200 z-50 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4">
        <div className="flex justify-center mb-3">
          {/* Profile Image */}
          <div className="relative">
            <div
              className={`w-20 h-20 rounded-full bg-white border-4 border-white shadow-lg overflow-hidden ${
                isEditing ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''
              }`}
              onClick={handleImageClick}
            >
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              )}
            </div>
            {isEditing && (
              <div className="absolute bottom-0 right-0 bg-orange-500 rounded-full p-1.5 border-2 border-white shadow-lg">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-zinc-700 mb-2">
            Name
          </label>
          {isEditing ? (
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="w-full px-3 py-2 border-2 border-zinc-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors text-black text-sm"
              placeholder="Enter your name"
            />
          ) : (
            <p className="text-base font-bold text-black">{userName || 'Your Name'}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-semibold text-zinc-700 mb-2">
            Address
          </label>
          {isEditing ? (
            <input
              type="text"
              value={editedAddress}
              onChange={(e) => setEditedAddress(e.target.value)}
              className="w-full px-3 py-2 border-2 border-zinc-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors text-black text-sm"
              placeholder="Enter your address"
            />
          ) : (
            <div className="flex items-start gap-2">
              <svg
                className="w-4 h-4 text-zinc-600 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-sm text-zinc-700">{userAddress || 'No address provided'}</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="flex-1 px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors text-sm"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="flex-1 px-3 py-2 bg-zinc-200 hover:bg-zinc-300 text-zinc-700 rounded-lg font-semibold transition-colors text-sm"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="w-full px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors text-sm"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

