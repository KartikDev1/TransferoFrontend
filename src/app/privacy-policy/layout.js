// app/privacy-policy/layout.js
export const metadata = {
  title: "Privacy Policy | Transfero",
  description:
    "Read Transfero's Privacy Policy to learn how we protect your privacy, handle your data, and ensure secure file transfers.",
  keywords:
    "Transfero privacy policy, data protection, file transfer security, user privacy, secure file sharing",
};

export default function PrivacyPolicyLayout({ children }) {
  return <section className="min-h-screen bg-gray-50">{children}</section>;
}
