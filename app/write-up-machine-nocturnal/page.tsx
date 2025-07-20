import Image from "next/image";

export default function NocturnalWriteUp() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Initial Reconnaissance</h2>
        <p className="text-neutral-300 mb-4">
          Started with a basic nmap scan to enumerate open ports and services:
        </p>
        <div className="rounded-lg overflow-hidden border border-neutral-800 mb-6">
          <Image
            src="/images/Image1-noc.webp"
            alt="Nmap scan results showing open ports 22 (SSH) and 80 (HTTP)"
            width={1200}
            height={600}
            className="w-full"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <p className="text-neutral-300">
          The scan revealed two key services:
        </p>
        <ul className="list-disc list-inside pl-4 space-y-2 text-neutral-300 mt-2">
          <li>SSH on port 22 (OpenSSH 8.2p1)</li>
          <li>HTTP on port 80 (nginx 1.18.0)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Web Application Access</h2>
        <div className="text-neutral-300 space-y-4">
          <p>
            Initially, I couldn&apos;t access the website directly due to DNS resolution issues. To resolve this, 
            I had to modify the <code className="bg-black/50 px-2 py-1 rounded">/etc/hosts</code> file by adding:
          </p>
          <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
            <code>10.10.10.X nocturnal.htb</code>
          </pre>
          <div className="bg-yellow-900/20 border border-yellow-900/50 rounded-lg p-4">
            <p className="text-yellow-200">
              ⚠️ Important: You must modify your hosts file to access the website locally!
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Username Enumeration</h2>
        <div className="text-neutral-300 space-y-4">
          <p>
            I created a Python script (test.py) to scan for existing usernames on the web application. 
            To run the script:
          </p>
          <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto mb-4">
            <code>python3 test.py &lt;cookies_here&gt;</code>
          </pre>
          <p className="text-sm italic">
            Note: Replace &lt;cookies_here&gt; with the actual cookies (found in browser inspector under Storage → Local)
          </p>
          <p>
            The scan revealed three usernames:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>admin</li>
            <li>amanda</li>
            <li>tobias</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Initial Access</h2>
        <div className="text-neutral-300 space-y-4">
          <p>
            I discovered that the <code className="bg-black/50 px-2 py-1 rounded">/view.php</code> endpoint accepted 
            user and file parameters. While exploring this, I found a file named &quot;privacy.odt&quot; belonging to 
            amanda, which contained temporary login credentials.
          </p>
          <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
            <code>http://nocturnal.htb/view.php?user=amanda&file=e.pdf</code>
          </pre>
          <p>
            Using these credentials, I successfully logged into amanda&apos;s account and gained access to the admin panel.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Admin Panel Exploitation</h2>
        <div className="text-neutral-300 space-y-4">
          <p>
            The admin panel had a backup feature that required a password. Using amanda&apos;s credentials, 
            I obtained a zip file containing the web application&apos;s source code. Analysis revealed several 
            potential SQL injection points.
          </p>
          <p>
            I exploited the backup files field with the following payload:
          </p>
          <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
            <code>password=test%0Acat%09/etc/passwd%09&gt;%09../uploads/passwd.txt</code>
          </pre>
          <p>
            This gave me access to the system&apos;s user information, including user IDs and MD5 hashes. 
            Using Crackstation, I decrypted the hashes and obtained tobias&apos;s credentials.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">User Access</h2>
        <div className="text-neutral-300 space-y-4">
          <p>
            With tobias&apos;s credentials, I established an SSH connection:
          </p>
          <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
            <code>ssh tobias@ip</code>
          </pre>
          <p>
            This gave me access to the user flag (user.txt).
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Root Access</h2>
        <div className="text-neutral-300 space-y-4">
          <div className="bg-blue-900/20 border border-blue-900/50 rounded-lg p-4">
            <p className="text-blue-200">
              💡 Tip: The path to root involves the ISPConfig panel
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 