export interface WriteUp {
  slug: string;
  title: string;
  category: string;
  difficulty?: string;
  description: string;
  date: string;
  tags: string[];
}

export const writeups: WriteUp[] = [
  {
    slug: 'jinjacare',
    title: 'JinjaCare',
    category: 'Bug Bounty CTF',
    description: 'A web application vulnerability challenge focusing on SSTI (Server-Side Template Injection) and RCE exploitation techniques.',
    date: '2025-06-27',
    tags: ['SSTI', 'RCE', 'Flask', 'Jinja2', 'Bug Bounty', 'CTF']
  },
  {
    slug: 'neovault',
    title: 'NeoVault',
    category: 'Bug Bounty CTF',
    description: 'A banking web application challenge involving MongoDB Object ID prediction and JWT token exploitation.',
    date: '2025-06-29',
    tags: ['MongoDB', 'JWT', 'IDOR', 'Bug Bounty', 'CTF']
  },
  {
    slug: 'code',
    title: 'Code',
    category: 'HTB Machine',
    difficulty: 'Easy',
    description: 'A Python-based web application with command injection vulnerabilities and privilege escalation challenges.',
    date: '2025-06-28',
    tags: ['Python', 'Command Injection', 'Privilege Escalation', 'SSH']
  },
  {
    slug: 'nocturnal',
    title: 'Nocturnal',
    category: 'HTB Machine',
    description: 'A challenging Hack The Box Linux-based machine involving web exploitation and privilege escalation techniques.',
    date: '2025-06-29',
    tags: ['Web Exploitation', 'Privilege Escalation', 'Linux']
  },
  {
    slug: 'dog',
    title: 'Dog',
    category: 'HTB Machine',
    difficulty: 'Easy',
    description: 'A Linux machine involving git repository dumping, RCE exploitation, and privilege escalation through sudo misconfiguration.',
    date: '2025-07-20',
    tags: ['Git Dumping', 'RCE', 'Privilege Escalation', 'Linux', 'Sudo']
  },
  {
    slug: 'outbound',
    title: 'Outbound',
    category: 'HTB Machine',
    difficulty: 'Easy',
    description: 'A Linux machine featuring Roundcube webmail exploitation, session decryption, and privilege escalation through log symlink vulnerability.',
    date: '2025-07-20',
    tags: ['Roundcube', 'RCE', 'Session Decryption', 'Privilege Escalation', 'Log Symlink']
  }
];

export function getWriteUpBySlug(slug: string): WriteUp | undefined {
  return writeups.find(writeup => writeup.slug === slug);
}

export function getAllWriteUps(): WriteUp[] {
  return writeups;
} 