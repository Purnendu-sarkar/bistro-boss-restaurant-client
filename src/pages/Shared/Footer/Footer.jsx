const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto px-6 py-10 grid gap-8 md:grid-cols-2">
        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
          <p className="text-sm">123 ABS Street, Uni 21, Bangladesh</p>
          <p className="text-sm">Phone: +8801409012843</p>
          <p className="text-sm">Mon - Fri: 08:00 - 22:00</p>
          <p className="text-sm">Sat - Sun: 10:00 - 23:00</p>
        </div>

        {/* Follow Us Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
          <p className="text-sm">Join us on social media:</p>
          <div className="flex space-x-6 mt-4">
            <a
              href="https://www.facebook.com/purnendusarkar4200"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.062 3.736 9.243 8.5 9.878v-7H8v-2h2.5v-1.7c0-2.309 1.4-3.6 3.542-3.6.719 0 1.667.13 1.958.184v2.216h-1.103c-1.055 0-1.897.5-1.897 1.678V12H17l-.5 2h-2.5v7C18.264 21.243 22 17.062 22 12z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/purnendu_sarkar_/"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c1.504.004 2.69.05 3.631.177 1.183.16 2.203.441 3.061 1.3.858.859 1.14 1.878 1.3 3.061.127.941.173 2.127.177 3.631.004 1.504-.05 2.69-.177 3.631-.16 1.183-.441 2.203-1.3 3.061-.859.858-1.878 1.14-3.061 1.3-.941.127-2.127.173-3.631.177-1.504-.004-2.69-.05-3.631-.177-1.183-.16-2.203-.441-3.061-1.3-.858-.859-1.14-1.878-1.3-3.061-.127-.941-.173-2.127-.177-3.631-.004-1.504.05-2.69.177-3.631.16-1.183.441-2.203 1.3-3.061.859-.859 1.878-1.14 3.061-1.3.941-.127 2.127-.173 3.631-.177M12 0C9.988 0 8.167.038 6.579.153c-1.589.116-2.993.436-4.221 1.665C.861 3.444.54 4.847.424 6.436.038 8.024 0 9.844 0 12c0 2.156.038 3.976.153 5.564.116 1.589.436 2.993 1.665 4.221 1.228 1.229 2.632 1.549 4.221 1.665C8.167 23.962 9.988 24 12 24c2.156 0 3.976-.038 5.564-.153 1.589-.116 2.993-.436 4.221-1.665 1.229-1.228 1.549-2.632 1.665-4.221.115-1.588.153-3.408.153-5.564 0-2.156-.038-3.976-.153-5.564-.116-1.589-.436-2.993-1.665-4.221C20.444.861 19.04.54 17.451.424 15.863.038 14.043 0 12 0zm0 5.838a6.163 6.163 0 1 0 0 12.326 6.163 6.163 0 0 0 0-12.326zm0 10.115a3.952 3.952 0 1 1 0-7.905 3.952 3.952 0 0 1 0 7.905zm6.406-10.635a1.44 1.44 0 1 0 0-2.881 1.44 1.44 0 0 0 0 2.881z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/purnendu_sarkar_/"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.569c-.885.39-1.83.654-2.825.775a4.935 4.935 0 0 0 2.163-2.724c-.951.555-2.005.96-3.127 1.184a4.925 4.925 0 0 0-8.39 4.482A13.978 13.978 0 0 1 1.671 3.149a4.935 4.935 0 0 0 1.523 6.573A4.902 4.902 0 0 1 .96 9.383v.06a4.926 4.926 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.224.085 4.927 4.927 0 0 0 4.604 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.009-7.507 14.009-14.009 0-.213-.005-.426-.015-.637A10.025 10.025 0 0 0 24 4.557a9.994 9.994 0 0 1-2.861.784A4.916 4.916 0 0 0 23.953 4.57z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-center text-sm py-4 text-gray-400">
        &copy; {new Date().getFullYear()} CulinaryCloud. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
