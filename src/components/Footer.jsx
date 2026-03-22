const footerLinks = [
  {
    heading: "Account",
    links: ["Sign In", "Join Now", "Order Status", "Returns"],
  },
  {
    heading: "Company",
    links: ["About Us", "Careers", "Press", "Blog"],
  },
  {
    heading: "Get Help",
    links: ["FAQ", "Shipping Info", "Returns Policy", "Contact Us"],
  },
  {
    heading: "Connect",
    links: ["Instagram", "Pinterest", "Twitter", "Facebook"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-8 pt-12 pb-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        {footerLinks.map((col) => (
          <div key={col.heading}>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4">
              {col.heading}
            </h4>
            {col.links.map((link) => (
              <a
                key={link}
                href="#"
                className="block text-xs text-gray-400 hover:text-white transition-colors mb-2"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="border-t border-gray-700 pt-5 flex flex-col md:flex-row justify-between items-center gap-2 text-[11px] text-gray-500">
        <span>© 2026 Everlane. All rights reserved.</span>
        <span>
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          {" · "}
          <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
