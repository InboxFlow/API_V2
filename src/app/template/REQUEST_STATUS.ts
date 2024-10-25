const REQUEST_STATUS: [number, ...number[]] = [
  100, // continue
  101, // switching protocols
  102, // processing
  103, // early hints
  200, // ok
  201, // created
  202, // accepted
  203, // non-authoritative information
  204, // no content
  205, // reset content
  206, // partial content
  207, // multi-status
  208, // already reported
  226, // im used
  300, // multiple choices
  301, // moved permanently
  302, // found
  303, // see other
  304, // not modified
  305, // use proxy
  306, // switch proxy
  307, // temporary redirect
  308, // permanent redirect
  400, // bad request
  401, // unauthorized
  402, // payment required
  403, // forbidden
  404, // not found
  405, // method not allowed
  406, // not acceptable
  407, // proxy authentication required
  408, // request timeout
  409, // conflict
  410, // gone
  411, // length required
  412, // precondition failed
  413, // payload too large
  414, // uri too long
  415, // unsupported media type
  416, // range not satisfiable
  417, // expectation failed
  418, // i'm a teapot
  421, // misdirected request
  422, // unprocessable entity
  423, // locked
  424, // failed dependency
  425, // too early
  426, // upgrade required
  428, // precondition required
  429, // too many requests
  431, // request header fields too large
  451, // unavailable for legal reasons
  500, // internal server error
  501, // not implemented
  502, // bad gateway
  503, // service unavailable
  504, // gateway timeout
  505, // http version not supported
  506, // variant also negotiates
  507, // insufficient storage
  508, // loop detected
  510, // not extended
  511, // network authentication required
];

const REQUEST_STATUS_OPTIONS = [
  { label: "Continue", value: 100 },
  { label: "Switching Protocols", value: 101 },
  { label: "Processing", value: 102 },
  { label: "Early Hints", value: 103 },
  { label: "OK", value: 200 },
  { label: "Created", value: 201 },
  { label: "Accepted", value: 202 },
  { label: "Non-Authoritative Information", value: 203 },
  { label: "No Content", value: 204 },
  { label: "Reset Content", value: 205 },
  { label: "Partial Content", value: 206 },
  { label: "Multi-Status", value: 207 },
  { label: "Already Reported", value: 208 },
  { label: "IM Used", value: 226 },
  { label: "Multiple Choices", value: 300 },
  { label: "Moved Permanently", value: 301 },
  { label: "Found", value: 302 },
  { label: "See Other", value: 303 },
  { label: "Not Modified", value: 304 },
  { label: "Use Proxy", value: 305 },
  { label: "Switch Proxy", value: 306 },
  { label: "Temporary Redirect", value: 307 },
  { label: "Permanent Redirect", value: 308 },
  { label: "Bad Request", value: 400 },
  { label: "Unauthorized", value: 401 },
  { label: "Payment Required", value: 402 },
  { label: "Forbidden", value: 403 },
  { label: "Not Found", value: 404 },
  { label: "Method Not Allowed", value: 405 },
  { label: "Not Acceptable", value: 406 },
  { label: "Proxy Authentication Required", value: 407 },
  { label: "Request Timeout", value: 408 },
  { label: "Conflict", value: 409 },
  { label: "Gone", value: 410 },
  { label: "Length Required", value: 411 },
  { label: "Precondition Failed", value: 412 },
  { label: "Payload Too Large", value: 413 },
  { label: "URI Too Long", value: 414 },
  { label: "Unsupported Media Type", value: 415 },
  { label: "Range Not Satisfiable", value: 416 },
  { label: "Expectation Failed", value: 417 },
  { label: "I'm a teapot", value: 418 },
  { label: "Misdirected Request", value: 421 },
  { label: "Unprocessable Entity", value: 422 },
  { label: "Locked", value: 423 },
  { label: "Failed Dependency", value: 424 },
  { label: "Too Early", value: 425 },
  { label: "Upgrade Required", value: 426 },
  { label: "Precondition Required", value: 428 },
  { label: "Too Many Requests", value: 429 },
  { label: "Request Header Fields Too Large", value: 431 },
  { label: "Unavailable For Legal Reasons", value: 451 },
  { label: "Internal Server Error", value: 500 },
  { label: "Not Implemented", value: 501 },
  { label: "Bad Gateway", value: 502 },
  { label: "Service Unavailable", value: 503 },
  { label: "Gateway Timeout", value: 504 },
  { label: "HTTP Version Not Supported", value: 505 },
  { label: "Variant Also Negotiates", value: 506 },
  { label: "Insufficient Storage", value: 507 },
  { label: "Loop Detected", value: 508 },
  { label: "Not Extended", value: 510 },
  { label: "Network Authentication Required", value: 511 },
];

export { REQUEST_STATUS, REQUEST_STATUS_OPTIONS };
