import React, { useState, useEffect, useRef } from "react";

const apps = [
  {
    name: "Account",
    logo: "/images/apps/user.png",
    url: "https://myaccount.google.com/",
  },
  {
    name: "Github",
    logo: "/images/apps/github.png",
    url: "https://github.com/rcd-env",
  },
  {
    name: "X",
    logo: "/images/apps/twitter.png",
    url: "https://x.com/rcd_env",
  },
  {
    name: "LinkedIn",
    logo: "/images/apps/linkedin.png",
    url: "https://linkedin.com/in/rakesh-das001",
  },
  {
    name: "Drive",
    logo: "/images/apps/google-drive.png",
    url: "https://drive.google.com/",
  },
  {
    name: "Gmail",
    logo: "/images/apps/gmail.png",
    url: "https://mail.google.com/",
  },
  {
    name: "YouTube",
    logo: "/images/apps/youtube.png",
    url: "https://www.youtube.com/",
  },
  {
    name: "Gemini",
    logo: "/images/apps/google-gemini-icon.svg",
    url: "https://gemini.google.com/",
  },
  {
    name: "Maps",
    logo: "/images/apps/google-maps.png",
    url: "https://maps.google.com/",
  },
  {
    name: "Search",
    logo: "/images/apps/search.png",
    url: "https://www.google.com/",
  },
  {
    name: "Calendar",
    logo: "/images/apps/google-calendar.png",
    url: "https://calendar.google.com/",
  },
  {
    name: "Photos",
    logo: "/images/apps/google-photos.png",
    url: "https://photos.google.com/",
  },
  {
    name: "Translate",
    logo: "/images/apps/google.png",
    url: "https://translate.google.com/",
  },
];

function AppLauncher({ triggerButton }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Handle keyboard navigation within grid
  const handleKeyDown = (event, index) => {
    const gridColumns = 3;
    const totalApps = apps.length;

    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        if (index < totalApps - 1) {
          document.getElementById(`app-${index + 1}`)?.focus();
        }
        break;
      case "ArrowLeft":
        event.preventDefault();
        if (index > 0) {
          document.getElementById(`app-${index - 1}`)?.focus();
        }
        break;
      case "ArrowDown":
        event.preventDefault();
        if (index + gridColumns < totalApps) {
          document.getElementById(`app-${index + gridColumns}`)?.focus();
        }
        break;
      case "ArrowUp":
        event.preventDefault();
        if (index - gridColumns >= 0) {
          document.getElementById(`app-${index - gridColumns}`)?.focus();
        }
        break;
      case "Home":
        event.preventDefault();
        document.getElementById("app-0")?.focus();
        break;
      case "End":
        event.preventDefault();
        document.getElementById(`app-${totalApps - 1}`)?.focus();
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-colors"
        aria-label="Google apps"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {triggerButton}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          role="dialog"
          aria-label="Google apps menu"
          className="absolute right-0 md:right-0 top-full mt-1 bg-white rounded-2xl shadow-2xl py-3 md:py-4 px-2 md:px-3 z-50 w-[280px] md:w-[340px]"
          style={{
            boxShadow: "0 2px 10px rgba(0,0,0,0.2), 0 0 1px rgba(0,0,0,0.1)",
            transform: "translateX(8px)",
          }}
        >
          {/* Grid of Apps */}
          <div
            className="grid grid-cols-3 gap-0.5 md:gap-1"
            role="menu"
            aria-orientation="vertical"
          >
            {apps.map((app, index) => {
              return (
                <a
                  key={app.name}
                  id={`app-${index}`}
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  tabIndex={0}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="flex flex-col items-center justify-center py-2 md:py-3 px-1 md:px-2 rounded-xl hover:bg-gray-100 transition-colors focus:outline-none focus:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center mb-1 md:mb-1.5">
                    <img
                      src={app.logo}
                      alt={`${app.name} icon`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                  <span className="text-xs md:text-sm text-gray-800 text-center font-normal leading-tight">
                    {app.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default AppLauncher;
