import http from 'k6/http';
import { check, sleep, group } from 'k6';

export const options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  vus: 10,
  duration: '30s'
}


const BASE_URL = 'http://localhost:3000';
export default function() {
  group('get product information', function() {
    http.get(`${BASE_URL}/products/1`);
  });
  group('get styles for a product', function() {
    http.get(`${BASE_URL}/products/1/styles`);
  })
}

