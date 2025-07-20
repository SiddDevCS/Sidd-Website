// Removed unused import

export default function CodeWriteUp() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Initial Access</h2>
        <p className="text-neutral-300">
          Starting with a standard nmap scan, I discovered port 5000 was open. Upon accessing <code className="bg-black/50 px-2 py-1 rounded">10.129.49.93:5000</code>, 
          I found a Python editor interface that could be used for command injection.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Python Command Injection</h2>
        <p className="text-neutral-300 mb-4">
          I used the following payload to enumerate the system:
        </p>
        <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`print(''.__class__.__bases__[0].__subclasses__()[80].__init__.__globals__['__buil'+'tins__']['ev'+'al']('__imp'+'ort__("o'+'s").po'+'pen("ls /").re'+'ad()'))`}</code>
        </pre>
        <p className="text-neutral-300 mb-2">This revealed the root directory contents:</p>
        <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
          <code>bin boot dev etc home lib lib32 lib64 libx32 lost+found media mnt opt proc root run sbin srv sys tmp usr var</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Credential Discovery</h2>
        <div className="text-neutral-300 space-y-4">
          <p>
            Through further command execution in the Python editor, I discovered credentials stored in the database. 
            There were two accounts:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>A test account</li>
            <li>An administrator account</li>
          </ul>
          <p>
            The administrator account&apos;s password was stored as an MD5 hash. Using Crackstation, I successfully 
            decrypted the hash and obtained the password.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Gaining Access</h2>
        <div className="text-neutral-300 space-y-4">
          <p>
            To verify the credentials, I first logged into the website successfully. Then, I used SSH to gain system access:
          </p>
          <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
            <code>ssh martin@ip</code>
          </pre>
          <p>
            This gave me access to Martin&apos;s administrator account, which contained:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>The backup of the web application</li>
            <li>The user flag</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">User Flag</h2>
        <p className="text-neutral-300">
          After making some modifications to the task.json file, I successfully accessed the user flag.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Root Access</h2>
        <p className="text-neutral-300">
          While the specific steps weren&apos;t documented, obtaining root access was relatively straightforward 
          after gaining the user flag.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">References</h2>
        <p className="text-neutral-300 mb-2">Write-ups that provided guidance throughout this CTF:</p>
        <ul className="space-y-2">
          <li>
            <a 
              href="https://www.hyhforever.top/htb-code/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              HTB Code Walkthrough by hyhforever
            </a>
          </li>
          <li>
            <a 
              href="https://medium.com/@sekuD/htb-code-experience-takeaways-3487dfa582ef" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              HTB Code Experience & Takeaways by sekuD
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
} 