"use client";

import CookieConsent from "react-cookie-consent";

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Reject"
      enableDeclineButton
      cookieName="transfero_cookie_consent"
      style={{
        background: "#f3f4f6", // Tailwind's gray-100
        color: "#1f2937", // Tailwind's gray-800
        fontSize: "13px",
        padding: "0.5rem 1rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        boxShadow: "0 -1px 4px rgba(0,0,0,0.05)",
      }}
      buttonStyle={{
        background: "#3b82f6", // Tailwind's blue-500
        color: "#fff",
        fontSize: "13px",
        padding: "6px 12px",
        borderRadius: "0.375rem",
      }}
      declineButtonStyle={{
        background: "#e5e7eb", // Tailwind's gray-200
        color: "#1f2937", // Tailwind's gray-800
        fontSize: "13px",
        padding: "6px 12px",
        borderRadius: "0.375rem",
        marginLeft: "8px",
      }}
      expires={365}
    >
      <span role="img" aria-label="cookie">
        🍪
      </span>
      We use cookies only for basic traffic analytics. No personal data is
      stored.
    </CookieConsent>
  );
}
