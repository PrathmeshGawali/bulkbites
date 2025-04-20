import Navbar from '../components/Navbar';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="text-white-700 mb-4">
          Last updated: April 20, 2025
        </p>

        <p className="text-white-700 mb-4">
          Bulkbites: The Calorie Tracking App (referred to as “Bulkbites”, “App”, or “we”) is developed and managed by TensorBuilds (“Tensorbuilds startup”, “we”, “our” or “us”). We value your privacy and are committed to protecting your personal information while you use our app or visit our website.
        </p>

        <p className="text-white-700 mb-4">
          This Privacy Policy explains:
        </p>

        <ul className="list-disc list-inside text-white-700 mb-4">
          <li>What personal information we collect (if any)</li>
          <li>How we handle that information</li>
          <li>Your rights and choices related to your data</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <p className="text-white-700 mb-4">
          As of the current minimum viable product release, we do not collect, store, or share any user data.
        </p>
        <p className="text-white-700 mb-4">
          This includes:
        </p>
        <ul className="list-disc list-inside text-white-700 mb-4">
          <li>No collection of uploaded images or photos</li>
          <li>No collection of personal details like name, email, or contact information</li>
          <li>No behavioral data or analytics is being stored at this stage</li>
        </ul>
        <p className="text-white-700 mb-4">
          We believe in building trust from day one, so we have kept the app intentionally lightweight and private.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Data</h2>
        <p className="text-white-700 mb-4">
          The information you see in the app such as calorie or macronutrient estimates is collated from reputable third-party sources. While we do our best to ensure the credibility of these sources, we do not claim ownership or guarantee the validity of this data.
        </p>
        <p className="text-white-700 mb-4">
          TensorBuilds is not responsible for changes, inaccuracies, or outdated information provided by these third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Technology Use and Limitations</h2>
        <p className="text-white-700 mb-4">
          The app uses computer vision and machine learning algorithms to provide predictions. These predictions may vary in accuracy depending on input quality or technological limitations.
        </p>
        <p className="text-white-700 mb-4">
          You should not rely solely on the app for medical, dietary, or health-related decisions. We recommend consulting with qualified professionals for important health advice.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Security and Storage</h2>
        <p className="text-white-700 mb-4">
          As no user data is collected or stored by the current version of the app, no personal data is being retained or shared in any form.
        </p>
        <p className="text-white-700 mb-4">
          We still take precautions to prevent cyber threats or malicious code that could affect your devices. However, your usage of the app and website is at your own risk.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Future Updates to Privacy Practices</h2>
        <p className="text-white-700 mb-4">
          We may update this privacy policy as the app evolves, such as when user accounts or analytics are introduced. Any changes will be communicated clearly through:
        </p>
        <ul className="list-disc list-inside text-white-700 mb-4">
          <li>App notifications and updates</li>
          <li>Social media platforms like Instagram and LinkedIn</li>
          <li>Our website 
          </li>
        </ul>
        <p className="text-white-700 mb-4">
          We will always strive to keep you informed and give you control over your privacy settings as features are added.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="text-white-700 mb-4">
          If you have any questions about your privacy or this policy, feel free to contact us at:
        </p>
        <p className="text-white-700 mb-4">
          Email: <a className="text-blue-600 underline" href="mailto:tensorbuilds@gmail.com">tensorbuilds@gmail.com</a>
        </p>
        <p className="text-white-700 mb-4">
          We aim to respond within forty-eight hours.
        </p>
      </main>
    </>
  );
};

export default PrivacyPolicy;
