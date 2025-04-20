import Link from 'next/link';

const Contact = () => (
  <section id="contact" className="py-24 px-4 bg-white">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <p className="text-gray-600">Reach us at @  tensorbuilds@gmail.com</p>
      <p className="text-gray-600">Copyright © 2025 TensorBuilds </p>
      <footer className="mt-12 text-sm text-gray-500">
        <div className="flex justify-center space-x-6">
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
        </div>
      </footer>
    </div>
  </section>
);

export default Contact;