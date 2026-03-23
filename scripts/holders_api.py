#!/usr/bin/env python3
import json
import re
import urllib.request
from http.server import BaseHTTPRequestHandler, HTTPServer

TOKEN_PAGE = 'https://explorer.cronos.org/token/0x025f1575908d85815198390B2e5366FE754F8207'
PORT = 8793

class Handler(BaseHTTPRequestHandler):
    def _send(self, code, payload):
        body = json.dumps(payload).encode('utf-8')
        self.send_response(code)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Cache-Control', 'public, max-age=60')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if self.path == '/health':
            return self._send(200, {'ok': True, 'service': 'inoai-holders-api'})
        if self.path != '/holders':
            return self._send(404, {'ok': False, 'error': 'Not found'})
        try:
            req = urllib.request.Request(TOKEN_PAGE, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=20) as resp:
                html = resp.read().decode('utf-8', errors='ignore')
            m = re.search(r'"holderCount":(\d+)', html)
            if not m:
                raise RuntimeError('holderCount not found')
            holder_count = int(m.group(1))
            return self._send(200, {'ok': True, 'holders': holder_count, 'source': 'explorer-html'})
        except Exception as e:
            return self._send(502, {'ok': False, 'error': str(e)})

    def log_message(self, format, *args):
        return

if __name__ == '__main__':
    server = HTTPServer(('127.0.0.1', PORT), Handler)
    server.serve_forever()
