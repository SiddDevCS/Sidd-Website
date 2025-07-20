import Image from "next/image";
import { FaYoutube } from "react-icons/fa";

export default function NeoVaultWriteUp() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-neutral-300 mb-6">
          NeoVault is a banking web application in Bug Bounty CTF where you can transfer funds.
        </p>
        
        <div className="rounded-lg overflow-hidden border border-neutral-800 mb-6">
          <Image
            src="/images/nocturnal-screenshot.webp"
            alt="NeoVault banking application interface"
            width={1200}
            height={600}
            className="w-full"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="bg-neutral-900/50 rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold">Challenge Description</h3>
          <p className="text-neutral-300">
            NeoVault is a trusted banking application that allows users to effortlessly transfer funds to one another 
            and conveniently download their transaction history. We invite you to explore the application for any 
            potential vulnerabilities and uncover the flag hidden within its depths.
          </p>
          
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">📝 Related Bug Bounty Reports</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Bug Report #1</strong> - <a href="https://techkranti.com/idor-through-mongodb-object-ids-prediction/" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                  Mongo Object ID Prediction
                </a>
              </li>
              <li>
                <strong>Bug Report #2</strong> - <a href="https://hackerone.com/reports/1464168" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                  IDOR
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <a 
            href="https://www.youtube.com/watch?v=t7_fE4hVah4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors"
          >
            <FaYoutube size={24} />
            <span>Watch the JWT Token Exploitation Demo</span>
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Analysis</h2>
        <p className="text-neutral-300 mb-6">
          I focused on the provided Bug Bounty Reports, as they proved crucial in the previous JinjaCare challenge.
        </p>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Bounty Report #1 Analysis</h3>
          <p className="text-neutral-300">
            The first report provided valuable insights about MongoDB Object Id generation and prediction.
          </p>
          
          <div className="rounded-lg overflow-hidden border border-neutral-800 mb-6">
            <Image
              src="/images/writeups/nocturnal-screenshot-2.webp"
              alt="MongoDB Object ID structure diagram"
              width={1200}
              height={400}
              className="w-full"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="bg-blue-900/20 border border-blue-900/50 rounded-lg p-4">
            <p className="text-blue-200">
              Key insight: The machine identifier remains constant as long as the database runs on the same machine.
              The challenge lies in guessing Object IDs by incrementing counter and timestamp values, as MongoDB 
              generates and assigns Object IDs at a system level.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Exploitation Process</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">API Endpoint Discovery</h3>
            <p className="text-neutral-300 mb-4">
              Using Burp Suite (community edition) intercept at <code className="bg-black/50 px-2 py-1 rounded">/dashboard</code>, 
              I discovered these API endpoints:
            </p>
            <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto mb-4">
              <code>{`/api/v2/transactions/categories-spending 
/api/v2/transactions/balance-history 
/api/v2/auth/me 
/api/v2/transactions`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Transaction Data Analysis</h3>
            <p className="text-neutral-300 mb-4">
              From api/v2/transactions, I retrieved JSON data containing important IDs:
            </p>
            <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto mb-4">
              <code>{`{
  "transactions":[{
    "_id":"685ea6813ac65c4cbc5585be",
    "fromUser":{
      "_id":"685ea4dc3ac65c4cbc558493",
      "username":"testing"
    },
    "toUser":{
      "_id":"685ea41a3ac65c4cbc558485",
      "username":"neo_system"
    },
    "amount":1,
    "description":"{{ 7 * 7 }}",
    "category":"Shopping",
    "date":"2025-06-27T14:11:13.983Z"
  }]
}`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">JWT Token Analysis</h3>
            <div className="rounded-lg overflow-hidden border border-neutral-800 mb-6">
              <Image
                src="/images/NeoVaultCTF1.webp"
                alt="JWT Token in request headers"
                width={1200}
                height={600}
                className="w-full"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
              <code>{`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NWVhNGRjM2FjNjVjNGNiYzU1ODQ5MyIsImlhdCI6MTc1MTAzNjc0OCwiZXhwIjoxNzUxMDQwMzQ4fQ.mlk9XyGxc4lpDIBfswyeqrcNRj5GplORnY_7_1nr3Fw`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Burp Suite Intruder Attack</h3>
            <div className="rounded-lg overflow-hidden border border-neutral-800 mb-6">
              <Image
                src="/images/404-sinburpintrude.webp"
                alt="Burp Suite Intruder showing 404 responses"
                width={1200}
                height={600}
                className="w-full"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Tools and Scripts</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">MongoDB ObjectID Predictor</h3>
            <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto mb-4">
              <code className="text-sm">{`python3 final.py <mongo-object-id-here>`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">JWT Token Converter</h3>
            <p className="text-neutral-300 mb-4">
              Script to convert MongoDB ObjectIDs to JWT tokens:
            </p>
            <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto mb-4">
              <code className="text-sm">{`node convert-ids-to-jwt.js`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">References</h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-2">Hint Sources</h3>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://techkranti.com/idor-through-mongodb-object-ids-prediction/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                MongoDB Object IDs Prediction Article
              </a>
            </li>
            <li>
              <a 
                href="https://hackerone.com/reports/1464168"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                HackerOne IDOR Report
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
} 