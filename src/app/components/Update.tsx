const Update = () => {
    return (
      <section className="w-full py-20 px-4 flex justify-center bg-white">
        <div className="bg-black text-white rounded-2xl shadow-xl max-w-3xl w-full px-6 py-12 text-center">
          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4">
            Updates
          </h2>
  
          {/* Subtext */}
          <p className="text-base sm:text-lg text-sky-200 mb-8">
            Version 1
          </p>
  
          {/* CTA Button */}
          <a
            className="inline-block"
            href=" https://expo.dev/artifacts/eas/trTP23bqCgpoj7E14MDNxX.apk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
              Download Here
            </button>
          </a>
          <p className="text-base top-30px sm:text-lg text-gray-300 mb-8">
            For IOS : Coming Soon..
          </p>
        </div>
      </section>
    );
  };
  
  export default Update;