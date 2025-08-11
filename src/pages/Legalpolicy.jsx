// File: src/pages/LegalPolicy.jsx
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const LegalPolicy = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    });
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      <Helmet>
        <meta name="keywords" content="" />
        <title>
          AI Risezonic Legal Policy | Terms of Use & Data Protection .
        </title>
        <meta
          name="description"
          content="Get to know AI Risezonic's legal policy on platform terms, privacy and the user’s personal data protection.  Stay informed about your rights."
        />
        <link rel="canonical" href="https://ai.risezonic.com/legal-policy" />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6 text-blue-700 sm:pt-32 pt-16">Legal Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p>
          Welcome to <strong>AI.Risezonic</strong>, an intelligent business
          platform designed for individuals and organizations powered by
          artificial intelligence. By accessing our platform at{" "}
          <a
            href="https://ai.risezonic.com"
            className="text-blue-600 underline"
          >
            https://ai.risezonic.com
          </a>
          , you agree to the terms described in this Legal Policy, along with
          our Privacy Policy and other applicable policies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Scope of This Policy</h2>
        <ul className="list-disc ml-6">
          <li>Our website and AI-powered tools</li>
          <li>Collection and processing of user data</li>
          <li>
            Use of third-party AI services (OpenAI, Google Cloud AI, etc.)
          </li>
          <li>User obligations and restrictions</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Use of Our Services</h2>
        <p>
          You are granted a limited, non-exclusive, non-transferable license to
          use AI.Risezonic for personal or commercial purposes. You may not:
        </p>
        <ul className="list-disc ml-6">
          <li>
            Reverse-engineer, reproduce, or redistribute our services without
            permission
          </li>
          <li>Sell or share your account credentials</li>
        </ul>
        <p className="mt-2">
          We reserve the right to restrict or terminate your access at our sole
          discretion for any violation of these terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Data Collection & Privacy
        </h2>
        <p>
          We collect both personal and non-personal data to enhance your
          experience, including:
        </p>
        <ul className="list-disc ml-6">
          <li>Name, email, contact details (if shared)</li>
          <li>Browser/device data</li>
          <li>
            Usage logs, interaction history, and query inputs (AffinityLog)
          </li>
        </ul>
        <p>
          We do not collect sensitive data unless you provide it voluntarily.
          For more, see our <Link to="/privacypolicy" ><strong>Privacy Policy</strong></Link> 
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">AI-Powered Interactions</h2>
        <p>Our AI features utilize third-party services such as:</p>
        <ul className="list-disc ml-6">
          <li>OpenAI (ChatGPT, GPT APIs)</li>
          <li>Google Cloud AI</li>
        </ul>
        <p className="mt-2">
          Input queries and responses may be processed and temporarily cached by
          our AI partners to improve performance. Do not share confidential or
          sensitive data with the AI.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">User Responsibilities</h2>
        <p>By using our services, you agree:</p>
        <ul className="list-disc ml-6">
          <li>Not to engage in illegal or malicious activity</li>
          <li>
            Not to infringe intellectual property or violate privacy rights
          </li>
          <li>Not to submit hate speech, spam, or discriminatory content</li>
          <li>Not to exploit vulnerabilities or attempt unauthorized access</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Intellectual Property</h2>
        <p>
          All content, algorithms, branding, and original features of
          AI.Risezonic are the property of Risezonic LLP and its licensors. You
          may not:
        </p>
        <ul className="list-disc ml-6">
          <li>Reproduce, duplicate, or exploit any part without permission</li>
          <li>Create derivative works without our consent</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Third-Party Services & Links
        </h2>
        <p>
          AI.Risezonic may contain links to third-party platforms. We are not
          responsible for their:
        </p>
        <ul className="list-disc ml-6">
          <li>Content or accuracy</li>
          <li>Privacy practices or policies</li>
          <li>Loss or damages from their use</li>
        </ul>
        <p>
          Use them at your own risk and review their terms before proceeding.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Disclaimers & Limitation of Liability
        </h2>
        <p>
          AI.Risezonic is offered "as is". We do not guarantee complete accuracy
          or suitability for critical use cases.
        </p>
        <p className="mt-2">
          We are not licensed professionals in legal, financial, or medical
          domains. Use outputs from our AI tools responsibly and with
          verification.
        </p>
        <p className="mt-2">
          We are not liable for indirect, consequential, or unforeseen damages.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Modifications & Updates</h2>
        <p>
          This policy may be updated periodically. Updates will be published on
          this page and may be communicated via email or platform notifications
          for significant changes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Governing Law</h2>
        <p>
          This legal policy is governed by Indian law. All disputes are subject
          to the exclusive jurisdiction of the courts in New Delhi, Delhi.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p>
          For legal inquiries, reach out to:
          <br />
          <strong>Email:</strong>{" "}
          <a
            href="mailto:legalcare.lawchamber@gmail.com"
            className="text-blue-600 underline"
          >
            legalcare.lawchamber@gmail.com
          </a>
          <br />
          <strong>Website:</strong>{" "}
          <a
            href="https://ai.risezonic.com"
            className="text-blue-600 underline"
          >
            https://ai.risezonic.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default LegalPolicy;
