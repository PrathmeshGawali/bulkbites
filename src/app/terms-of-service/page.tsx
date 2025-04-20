import Navbar from '../components/Navbar';

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-3xl font-bold text-white-700 mb-6">Terms of Service</h1>
        <p className="text-white-700 mb-4">
          By using our app, you agree to the following terms and conditions...
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white-700 mb-2">Intellectual Property Rights</h2>
          <p className="text-white-700 mb-2">
            Our website contains intellectual property (including copyright) owned by Tensorbuilds and third parties.
            We and our third parties retain all rights, title and interest in our website and all related content.
            Nothing you do on or in relation to the website will transfer to you:
          </p>
          <ul className="list-disc list-inside text-white-700 mb-2 space-y-1">
            <li>The business name, trading name, domain name, trademark, industrial design, patent, registered design, or copyright;</li>
            <li>The right to use or exploit a business name, trading name, domain name, trademark, or industrial design; or</li>
            <li>A system or process that is the subject of a patent or copyright (or an adaptation or modification of such a system or process), of Tensorbuilds and any third party.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white-700 mb-2">General Information</h2>
          <p className="text-white-700">
            When you come to our website we may collect certain information such as browser type, operating system, websites visited immediately before coming to our site, etc.
            This information is used in an aggregated manner to analyse how people use our site, such that we can improve our service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white-700 mb-2">Links to Third Party Websites</h2>
          <p className="text-white-700 mb-2">
            Our website may contain links to other websites. These links are meant for your convenience only.
            Links to third party websites do not constitute sponsorship or endorsement or approval of these websites.
          </p>
          <p className="text-white-700 mb-2">
            Please be aware that we are not responsible for the privacy practices of such other websites.
            We encourage our users to be aware, when they leave our website, to read the privacy statements of each and every website that collects personally identifiable information.
            This privacy policy applies solely to information collected by this website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white-700 mb-2">Content and Product Descriptions</h2>
          <p className="text-white-700 mb-2">
            We do not warrant that product descriptions or other content of this website is accurate, complete, reliable, current, or error-free.
            We may update any content on our website at any time without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white-700 mb-2">Reviews and Comments</h2>
          <p className="text-white-700 mb-2">
            When visiting our website or social media pages, and subject to your compliance with these terms, you may post reviews and comments.
            If your reviews or comments contain defamatory, misleading, or false statements or is threatening, aggressive or contains obscenities, or is otherwise contrary to the relevant social media platform’s content or other rules,
            we may remove your reviews and comments and remove your access to our website and social media pages.
          </p>
          <p className="text-white-700 mb-2">
            We reserve the right to remove or edit any content that you post on our website.
            You acknowledge that any content posted by you on our website or social media pages becomes our property.
            For this purpose, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, distribute and display such content in any way we see fit, throughout the world and in any media.
          </p>
          <p className="text-white-700 mb-2">
            You agree to indemnify us for all claims made against us resulting from your reviews or comments on our website or social media pages.
            You acknowledge that we are not the author of any reviews or comments on our website or social media pages and that we are not responsible and do not assume any liability for any content posted by you or any third party.
          </p>
          <p className="text-white-700 mb-2">
            If you are concerned about any reviews or comments, please contact us at <a className="text-blue-600 underline" href="mailto:tensorbuilds@gmail.com">tensorbuilds@gmail.com</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white-700 mb-2">Suspending or Terminating Site Access</h2>
          <p className="text-white-700">
            We may suspend or terminate your access to and use of our website, without notice, if you are in breach of these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white-700 mb-2">Viruses</h2>
          <p className="text-white-700">
            We make every attempt to ensure that the website is free of viruses and other malicious code which may affect your computer systems.
            However, your access to and use of the website and App are at your own risk, and you must take your own precautions to avoid and protect your computer systems against any viruses and other malicious code.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white-700 mb-2">Cyber Security</h2>
          <p className="text-white-700">
            If, due to events beyond our reasonable control, you incur any loss or damage arising from a cyber security event in relation to our website, email communications, payment gateway providers or products, you acknowledge that we are not liable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white-700 mb-2">Contact Us</h2>
          <p className="text-white-700 mb-2">
            If you have any questions or concerns regarding our information about registration and accounts, App costs, subscription, our cancellation and refund policy, privacy policy or website terms and conditions, please contact us at <a className="text-blue-600 underline" href="mailto:tensorbuilds@gmail.com">tensorbuilds@gmail.com</a> and we will endeavour to respond within 48 hours.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white-700 mb-2">How Can I Make a Complaint?</h2>
          <p className="text-white-700">
            If you wish to make a complaint, please submit details of your complaint to <a className="text-blue-600 underline" href="mailto:tensorbuilds@gmail.com">tensorbuilds@gmail.com</a>.
            We will investigate and respond as soon as possible after receiving written notice of your complaint.
          </p>
        </section>
      </main>
    </>
  );
};

export default TermsOfService;
