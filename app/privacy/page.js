export default function Privacy() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8">
        <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
        
        <p className="text-sm text-white/60 mb-8">Last updated: March 20, 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Introduction</h2>
          <p className="text-white/80 leading-relaxed">
            Get Cooked ("we", "our", or "us") is a web application that generates humorous roasts based on your Spotify listening habits. 
            This Privacy Policy explains how we collect, use, and protect your information when you use our service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            When you connect your Spotify account, we collect:
          </p>
          <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
            <li>Your Spotify profile information (name, email)</li>
            <li>Your top tracks and artists</li>
            <li>Your recently played songs</li>
            <li>Genre and popularity data associated with your music</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            We use your Spotify data solely to:
          </p>
          <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
            <li>Generate personalized humorous roasts about your music taste</li>
            <li>Authenticate your session</li>
            <li>Provide you with the core functionality of our service</li>
          </ul>
          <p className="text-white/80 leading-relaxed mt-4">
            <strong className="text-white">We do NOT:</strong>
          </p>
          <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
            <li>Store your Spotify listening data permanently</li>
            <li>Share your data with third parties</li>
            <li>Use your data to train AI models</li>
            <li>Track your listening habits beyond generating roasts</li>
            <li>Sell or monetize your personal information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Third-Party Services</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-white">Spotify</h3>
          <p className="text-white/80 leading-relaxed mb-4">
            We use the Spotify Web API to access your listening data. Your use of Spotify is governed by 
            Spotify's own <a href="https://www.spotify.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition underline">Privacy Policy</a> and 
            {' '}<a href="https://www.spotify.com/legal/end-user-agreement/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition underline">Terms of Service</a>.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-white">Google Gemini AI</h3>
          <p className="text-white/80 leading-relaxed mb-4">
            We use Google's Gemini AI to generate roasts based on your music data. The data sent to Gemini includes 
            song names, artist names, and genres. Google's use of this data is governed by their 
            {' '}<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition underline">Privacy Policy</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Data Storage and Security</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Your Spotify data is only accessed in real-time when you request a roast. We do not permanently store your:
          </p>
          <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
            <li>Listening history</li>
            <li>Top tracks or artists</li>
            <li>Generated roasts</li>
          </ul>
          <p className="text-white/80 leading-relaxed mt-4">
            We only store your session authentication token temporarily to keep you logged in during your session.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Your Rights</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
            <li>Revoke our access to your Spotify account at any time through your Spotify account settings</li>
            <li>Request deletion of any data we may have stored</li>
            <li>Stop using our service at any time</li>
          </ul>
          <p className="text-white/80 leading-relaxed mt-4">
            To revoke access, visit: <a href="https://www.spotify.com/account/apps/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition underline">Spotify Apps Settings</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Children's Privacy</h2>
          <p className="text-white/80 leading-relaxed">
            Our service is not intended for children under 13 years of age. We do not knowingly collect personal 
            information from children under 13. If you are a parent or guardian and believe your child has provided 
            us with personal information, please contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Cookies and Tracking</h2>
          <p className="text-white/80 leading-relaxed">
            We use minimal cookies solely for authentication purposes (NextAuth.js session cookies). 
            We do not use tracking cookies or analytics that identify individual users.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Changes to This Privacy Policy</h2>
          <p className="text-white/80 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by updating 
            the "Last updated" date at the top of this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Not Affiliated with Spotify</h2>
          <p className="text-white/80 leading-relaxed">
            Get Cooked is an independent application and is not affiliated with, endorsed by, or associated with 
            Spotify AB or any of its affiliates.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
          <p className="text-white/80 leading-relaxed">
            If you have any questions about this Privacy Policy or our practices, please contact us at:
          </p>
          <p className="text-white/80 mt-2">
            Email: <a href="mailto:getcooked.contact@gmail.com" className="text-green-400 hover:text-green-300 transition underline">getcooked.contact@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}