const PROXY_CONFIG = [
  {
    context: [
      "/predict"
    ],
    target: "http://18.118.120.98:5000",
    secure: false
  }
];

module.exports = PROXY_CONFIG;
