import fs from 'fs';
import os from 'os';
import { execSync } from 'child_process';
import path from 'path';

// Detect LAN IP
function getLanIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (
        iface.family === 'IPv4' &&
        !iface.internal &&
        /^(192\.168\.|10\.|172\.)/.test(iface.address)
      ) {
        return iface.address;
      }
    }
  }
  return '127.0.0.1';
}

const LAN_IP = getLanIP();
const DOMAIN = 'myapp.local';
const CERT_DIR = path.resolve('nginx/certs');
const CERT_FILE = `${DOMAIN}.pem`;
const KEY_FILE = `${DOMAIN}-key.pem`;

fs.mkdirSync(CERT_DIR, { recursive: true });

// Generate mkcert certificates
console.log('🔐 Generating mkcert certificates...');
execSync(
  `mkcert -cert-file ${CERT_DIR}/${CERT_FILE} -key-file ${CERT_DIR}/${KEY_FILE} ${DOMAIN} ${LAN_IP}`,
  { stdio: 'inherit' }
);

// Configure Nginx
console.log('⚙️ Configuring Nginx...');
let template = fs.readFileSync('nginx/default.conf.template', 'utf8');
template = template
  .replace(/{{DOMAIN}}/g, DOMAIN)
  .replace(/{{CERT_FILE}}/g, CERT_FILE)
  .replace(/{{KEY_FILE}}/g, KEY_FILE);
fs.writeFileSync('nginx/default.conf', template);

console.log(`✅ Certificates and Nginx configured!`);
console.log(`→ Access your app at https://${DOMAIN} or https://${LAN_IP}`);
