(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode("._container_14239_6{padding:10px;border:1px solid #E2E2E2;box-shadow:0 7px 9px #00000008;border-radius:10px;font-family:system-ui;bottom:10px;right:10px;position:fixed;z-index:2147483647;background:white;font-size:14px;line-height:17px;cursor:pointer}._title_14239_22{font-weight:500}._collapsed_14239_26{display:inline-flex;flex-direction:column}._description_14239_31{margin:0}._label_14239_35{font-weight:500}._select_14239_39{height:32px;padding:0 8px;border-radius:6px;border:1px solid #EFF0F1;background-repeat:no-repeat;background-position:right 6px bottom 50%;appearance:none;-moz-appearance:none;-webkit-appearance:none}._option_14239_52{appearance:none;-moz-appearance:none;-webkit-appearance:none}._textarea_14239_58{resize:none;border-radius:6px;border:1px solid #EFF0F1;padding:6px 8px;min-height:57px}._textarea_14239_58::placeholder{color:#00000080;font-size:14px;line-height:17px;font-weight:400;font-family:system-ui}._containerField_14239_74{display:grid;gap:6px;padding:10px 0}._form_14239_80{display:none}._open_14239_84 ._form_14239_80{display:flex;flex-direction:column;width:280px}._open_14239_84 ._collapsed_14239_26{display:none}._submit_14239_94{cursor:pointer;background:#1CADFF;padding:8px 0;border-radius:6px;border:none;color:#fff;font-size:14px;line-height:17px;font-weight:600}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
var te = Object.defineProperty;
var re = (e, r, o) => r in e ? te(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o;
var C = (e, r, o) => (re(e, typeof r != "symbol" ? r + "" : r, o), o);
function f(e, r = "", o = {}) {
  const i = document.createElement(e);
  return Array.isArray(r) ? i.classList.add(...r) : r && i.classList.add(r), Object.keys(o).forEach((u) => {
    const c = u;
    i[c] = o[c];
  }), i;
}
var w = /* @__PURE__ */ ((e) => (e.Select = "select", e.Textarea = "textarea", e.Submit = "submit", e))(w || {});
const oe = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>', ae = '"./tokens/colors.module.css"', ie = '"./tokens/fonts.module.css"', ne = "_container_14239_6", se = "_title_14239_22", le = "_collapsed_14239_26", ue = "_description_14239_31", de = "_label_14239_35", ce = "_select_14239_39", he = "_option_14239_52", pe = "_textarea_14239_58", me = "_containerField_14239_74", be = "_form_14239_80", fe = "_open_14239_84", ye = "_submit_14239_94", h = {
  colors: ae,
  fonts: ie,
  "color-box-shadow": "rgba(0, 0, 0, 0.03)",
  "color-placeholder": "rgba(0, 0, 0, 0.5)",
  "color-text-white": "#FFFFFF",
  "color-submit": "#1CADFF",
  "color-select-border": "#EFF0F1",
  "color-border": "#E2E2E2",
  "color-background-primary": "white",
  "main-font-size": "14px",
  "normal-font-weight": "400",
  "bold-font-weight": "500",
  "main-line-height": "17px",
  "extra-bold-font-weight": "600",
  "main-font-weight": "undefined",
  container: ne,
  title: se,
  collapsed: le,
  description: ue,
  label: de,
  select: ce,
  option: he,
  textarea: pe,
  containerField: me,
  form: be,
  open: fe,
  submit: ye
};
function Pe(e) {
  return f("label", h.label, {
    textContent: e
  });
}
function ve(e) {
  return f("p", h.description, {
    textContent: e
  });
}
function _e() {
  const e = f("div", h.containerField);
  return e.appendChild(
    f("button", h.submit, {
      textContent: "Submit",
      type: "submit"
    })
  ), e;
}
function ge(e) {
  const r = f("select", h.select, {
    name: e.name
  });
  return r.style.backgroundImage = `url(data:image/svg+xml;utf8,${encodeURI(
    oe
  )})`, e.options.forEach((o) => {
    const i = f("option", h.option);
    i.value = o.value, i.text = o.name, r.add(i);
  }), r;
}
function ke(e) {
  return f("textarea", h.textarea, {
    placeholder: e.placeholder || "",
    name: e.name
  });
}
function qe(e) {
  switch (e.type) {
    case w.Select:
      return ge(e);
    case w.Textarea:
      return ke(e);
  }
}
class Ce {
  constructor(r, o) {
    C(this, "form");
    C(this, "container");
    C(this, "collapsedFormConfiguration");
    C(this, "fullFormConfiguration");
    this.fullFormConfiguration = r.form, this.collapsedFormConfiguration = r.collapsedForm, this.container = f("div", h.container), this.form = this.createOpenForm(o), this.createMinimizedForm();
  }
  collapseWidget() {
    this.container.classList.remove(h.open);
  }
  openWidget() {
    this.container.classList.add(h.open);
  }
  createMinimizedForm() {
    const r = f("div", h.collapsed);
    if (this.collapsedFormConfiguration.title) {
      const o = f("span", h.title, {
        textContent: this.collapsedFormConfiguration.title
      });
      r.appendChild(o);
    }
    if (this.collapsedFormConfiguration.description) {
      const o = f("span", h.description, {
        textContent: this.collapsedFormConfiguration.description
      });
      r.appendChild(o);
    }
    this.container.appendChild(r), document.body.appendChild(this.container), r.addEventListener("click", () => {
      this.container.className.includes(h.open) ? this.collapseWidget() : this.openWidget();
    });
  }
  createOpenForm(r) {
    const o = f("form", h.form);
    return this.fullFormConfiguration.description && o.appendChild(
      ve(this.fullFormConfiguration.description)
    ), this.fullFormConfiguration.items.forEach((i) => {
      const u = f("div", h.containerField);
      i.label && u.appendChild(Pe(i.label));
      const c = qe(i.field);
      u.appendChild(c), o.appendChild(u);
    }), o.appendChild(_e()), this.container.appendChild(o), o.addEventListener("submit", (i) => {
      if (i.preventDefault(), r) {
        const u = Object.fromEntries(
          new FormData(this.form || void 0).entries()
        );
        r(u);
      }
      this.collapseWidget();
    }), o;
  }
}
var S = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Q = {}, z = {}, V = {}, v = {};
Object.defineProperty(v, "__esModule", { value: !0 });
v.isObject = v.pick = v.assertNever = void 0;
function we(e) {
  throw new Error(`Unexpected value should never occur: ${e}`);
}
v.assertNever = we;
function Ee(e, r) {
  const o = r.map((i) => [i, e == null ? void 0 : e[i]]);
  return Object.fromEntries(o);
}
v.pick = Ee;
function Fe(e) {
  return typeof e == "object" && e !== null;
}
v.isObject = Fe;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.logLevelSeverity = e.makeConsoleLogger = e.LogLevel = void 0;
  const r = v;
  var o;
  (function(c) {
    c.DEBUG = "debug", c.INFO = "info", c.WARN = "warn", c.ERROR = "error";
  })(o = e.LogLevel || (e.LogLevel = {}));
  function i(c) {
    return (b, y, t) => {
      console[b](`${c} ${b}:`, y, t);
    };
  }
  e.makeConsoleLogger = i;
  function u(c) {
    switch (c) {
      case o.DEBUG:
        return 20;
      case o.INFO:
        return 40;
      case o.WARN:
        return 60;
      case o.ERROR:
        return 80;
      default:
        return (0, r.assertNever)(c);
    }
  }
  e.logLevelSeverity = u;
})(V);
var J = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.buildRequestError = e.APIResponseError = e.UnknownHTTPResponseError = e.isHTTPResponseError = e.RequestTimeoutError = e.isNotionClientError = e.ClientErrorCode = e.APIErrorCode = void 0;
  const r = v;
  var o;
  (function(l) {
    l.Unauthorized = "unauthorized", l.RestrictedResource = "restricted_resource", l.ObjectNotFound = "object_not_found", l.RateLimited = "rate_limited", l.InvalidJSON = "invalid_json", l.InvalidRequestURL = "invalid_request_url", l.InvalidRequest = "invalid_request", l.ValidationError = "validation_error", l.ConflictError = "conflict_error", l.InternalServerError = "internal_server_error", l.ServiceUnavailable = "service_unavailable";
  })(o = e.APIErrorCode || (e.APIErrorCode = {}));
  var i;
  (function(l) {
    l.RequestTimeout = "notionhq_client_request_timeout", l.ResponseError = "notionhq_client_response_error";
  })(i = e.ClientErrorCode || (e.ClientErrorCode = {}));
  class u extends Error {
  }
  function c(l) {
    return (0, r.isObject)(l) && l instanceof u;
  }
  e.isNotionClientError = c;
  function b(l, d) {
    return c(l) && l.code in d;
  }
  class y extends u {
    constructor(d = "Request to Notion API has timed out") {
      super(d), this.code = i.RequestTimeout, this.name = "RequestTimeoutError";
    }
    static isRequestTimeoutError(d) {
      return b(d, {
        [i.RequestTimeout]: !0
      });
    }
    static rejectAfterTimeout(d, P) {
      return new Promise(($, F) => {
        const M = setTimeout(() => {
          F(new y());
        }, P);
        d.then($).catch(F).then(() => clearTimeout(M));
      });
    }
  }
  e.RequestTimeoutError = y;
  class t extends u {
    constructor(d) {
      super(d.message), this.name = "HTTPResponseError";
      const { code: P, status: $, headers: F, rawBodyText: M } = d;
      this.code = P, this.status = $, this.headers = F, this.body = M;
    }
  }
  const m = {
    [i.ResponseError]: !0,
    [o.Unauthorized]: !0,
    [o.RestrictedResource]: !0,
    [o.ObjectNotFound]: !0,
    [o.RateLimited]: !0,
    [o.InvalidJSON]: !0,
    [o.InvalidRequestURL]: !0,
    [o.InvalidRequest]: !0,
    [o.ValidationError]: !0,
    [o.ConflictError]: !0,
    [o.InternalServerError]: !0,
    [o.ServiceUnavailable]: !0
  };
  function q(l) {
    return !!b(l, m);
  }
  e.isHTTPResponseError = q;
  class E extends t {
    constructor(d) {
      var P;
      super({
        ...d,
        code: i.ResponseError,
        message: (P = d.message) !== null && P !== void 0 ? P : `Request to Notion API failed with status: ${d.status}`
      }), this.name = "UnknownHTTPResponseError";
    }
    static isUnknownHTTPResponseError(d) {
      return b(d, {
        [i.ResponseError]: !0
      });
    }
  }
  e.UnknownHTTPResponseError = E;
  const G = {
    [o.Unauthorized]: !0,
    [o.RestrictedResource]: !0,
    [o.ObjectNotFound]: !0,
    [o.RateLimited]: !0,
    [o.InvalidJSON]: !0,
    [o.InvalidRequestURL]: !0,
    [o.InvalidRequest]: !0,
    [o.ValidationError]: !0,
    [o.ConflictError]: !0,
    [o.InternalServerError]: !0,
    [o.ServiceUnavailable]: !0
  };
  class Y extends t {
    constructor() {
      super(...arguments), this.name = "APIResponseError";
    }
    static isAPIResponseError(d) {
      return b(d, G);
    }
  }
  e.APIResponseError = Y;
  function Z(l, d) {
    const P = x(d);
    return P !== void 0 ? new Y({
      code: P.code,
      message: P.message,
      headers: l.headers,
      status: l.status,
      rawBodyText: d
    }) : new E({
      message: void 0,
      headers: l.headers,
      status: l.status,
      rawBodyText: d
    });
  }
  e.buildRequestError = Z;
  function x(l) {
    if (typeof l != "string")
      return;
    let d;
    try {
      d = JSON.parse(l);
    } catch {
      return;
    }
    if (!(!(0, r.isObject)(d) || typeof d.message != "string" || !ee(d.code)))
      return {
        ...d,
        code: d.code,
        message: d.message
      };
  }
  function ee(l) {
    return typeof l == "string" && l in G;
  }
})(J);
var n = {};
Object.defineProperty(n, "__esModule", { value: !0 });
n.listComments = n.createComment = n.search = n.createDatabase = n.listDatabases = n.queryDatabase = n.updateDatabase = n.getDatabase = n.appendBlockChildren = n.listBlockChildren = n.deleteBlock = n.updateBlock = n.getBlock = n.getPageProperty = n.updatePage = n.getPage = n.createPage = n.listUsers = n.getUser = n.getSelf = void 0;
n.getSelf = {
  method: "get",
  pathParams: [],
  queryParams: [],
  bodyParams: [],
  path: () => "users/me"
};
n.getUser = {
  method: "get",
  pathParams: ["user_id"],
  queryParams: [],
  bodyParams: [],
  path: (e) => `users/${e.user_id}`
};
n.listUsers = {
  method: "get",
  pathParams: [],
  queryParams: ["start_cursor", "page_size"],
  bodyParams: [],
  path: () => "users"
};
n.createPage = {
  method: "post",
  pathParams: [],
  queryParams: [],
  bodyParams: ["parent", "properties", "icon", "cover", "content", "children"],
  path: () => "pages"
};
n.getPage = {
  method: "get",
  pathParams: ["page_id"],
  queryParams: [],
  bodyParams: [],
  path: (e) => `pages/${e.page_id}`
};
n.updatePage = {
  method: "patch",
  pathParams: ["page_id"],
  queryParams: [],
  bodyParams: ["properties", "icon", "cover", "archived"],
  path: (e) => `pages/${e.page_id}`
};
n.getPageProperty = {
  method: "get",
  pathParams: ["page_id", "property_id"],
  queryParams: ["start_cursor", "page_size"],
  bodyParams: [],
  path: (e) => `pages/${e.page_id}/properties/${e.property_id}`
};
n.getBlock = {
  method: "get",
  pathParams: ["block_id"],
  queryParams: [],
  bodyParams: [],
  path: (e) => `blocks/${e.block_id}`
};
n.updateBlock = {
  method: "patch",
  pathParams: ["block_id"],
  queryParams: [],
  bodyParams: [
    "embed",
    "type",
    "archived",
    "bookmark",
    "image",
    "video",
    "pdf",
    "file",
    "audio",
    "code",
    "equation",
    "divider",
    "breadcrumb",
    "table_of_contents",
    "link_to_page",
    "table_row",
    "heading_1",
    "heading_2",
    "heading_3",
    "paragraph",
    "bulleted_list_item",
    "numbered_list_item",
    "quote",
    "to_do",
    "toggle",
    "template",
    "callout",
    "synced_block",
    "table"
  ],
  path: (e) => `blocks/${e.block_id}`
};
n.deleteBlock = {
  method: "delete",
  pathParams: ["block_id"],
  queryParams: [],
  bodyParams: [],
  path: (e) => `blocks/${e.block_id}`
};
n.listBlockChildren = {
  method: "get",
  pathParams: ["block_id"],
  queryParams: ["start_cursor", "page_size"],
  bodyParams: [],
  path: (e) => `blocks/${e.block_id}/children`
};
n.appendBlockChildren = {
  method: "patch",
  pathParams: ["block_id"],
  queryParams: [],
  bodyParams: ["children"],
  path: (e) => `blocks/${e.block_id}/children`
};
n.getDatabase = {
  method: "get",
  pathParams: ["database_id"],
  queryParams: [],
  bodyParams: [],
  path: (e) => `databases/${e.database_id}`
};
n.updateDatabase = {
  method: "patch",
  pathParams: ["database_id"],
  queryParams: [],
  bodyParams: [
    "title",
    "description",
    "icon",
    "cover",
    "properties",
    "is_inline",
    "archived"
  ],
  path: (e) => `databases/${e.database_id}`
};
n.queryDatabase = {
  method: "post",
  pathParams: ["database_id"],
  queryParams: [],
  bodyParams: ["sorts", "filter", "start_cursor", "page_size", "archived"],
  path: (e) => `databases/${e.database_id}/query`
};
n.listDatabases = {
  method: "get",
  pathParams: [],
  queryParams: ["start_cursor", "page_size"],
  bodyParams: [],
  path: () => "databases"
};
n.createDatabase = {
  method: "post",
  pathParams: [],
  queryParams: [],
  bodyParams: [
    "parent",
    "properties",
    "icon",
    "cover",
    "title",
    "description",
    "is_inline"
  ],
  path: () => "databases"
};
n.search = {
  method: "post",
  pathParams: [],
  queryParams: [],
  bodyParams: ["sort", "query", "start_cursor", "page_size", "filter"],
  path: () => "search"
};
n.createComment = {
  method: "post",
  pathParams: [],
  queryParams: [],
  bodyParams: ["parent", "rich_text", "discussion_id"],
  path: () => "comments"
};
n.listComments = {
  method: "get",
  pathParams: [],
  queryParams: ["block_id", "start_cursor", "page_size"],
  bodyParams: [],
  path: () => "comments"
};
var H = { exports: {} };
(function(e, r) {
  var o = function() {
    if (typeof self < "u")
      return self;
    if (typeof window < "u")
      return window;
    if (typeof i < "u")
      return i;
    throw new Error("unable to locate global object");
  }, i = o();
  e.exports = r = i.fetch, i.fetch && (r.default = i.fetch.bind(i)), r.Headers = i.Headers, r.Request = i.Request, r.Response = i.Response;
})(H, H.exports);
const Re = "@notionhq/client", je = "2.2.2", Te = "A simple and easy to use client for the Notion API", De = {
  node: ">=12"
}, Oe = "https://developers.notion.com/docs/getting-started", Be = {
  url: "https://github.com/makenotion/notion-sdk-js/issues"
}, Ue = {
  type: "git",
  url: "https://github.com/makenotion/notion-sdk-js/"
}, Le = [
  "notion",
  "notionapi",
  "rest",
  "notion-api"
], Ie = "./build/src", Ae = "./build/src/index.d.ts", Se = {
  prepare: "npm run build",
  prepublishOnly: "npm run checkLoggedIn && npm run lint && npm run test",
  build: "tsc",
  prettier: "prettier --write .",
  lint: "prettier --check . && eslint . --ext .ts && cspell '**/*' ",
  test: "jest ./test",
  "check-links": "git ls-files | grep md$ | xargs -n 1 markdown-link-check",
  prebuild: "npm run clean",
  clean: "rm -rf ./build",
  checkLoggedIn: "./scripts/verifyLoggedIn.sh"
}, Ne = "", $e = "MIT", Me = [
  "build/package.json",
  "build/src/**"
], We = {
  "@types/node-fetch": "^2.5.10",
  "node-fetch": "^2.6.1"
}, He = {
  "@types/jest": "^28.1.4",
  "@typescript-eslint/eslint-plugin": "^5.39.0",
  "@typescript-eslint/parser": "^5.39.0",
  cspell: "^5.4.1",
  eslint: "^7.24.0",
  jest: "^28.1.2",
  "markdown-link-check": "^3.8.7",
  prettier: "^2.3.0",
  "ts-jest": "^28.0.5",
  typescript: "^4.8.4"
}, ze = {
  name: Re,
  version: je,
  description: Te,
  engines: De,
  homepage: Oe,
  bugs: Be,
  repository: Ue,
  keywords: Le,
  main: Ie,
  types: Ae,
  scripts: Se,
  author: Ne,
  license: $e,
  files: Me,
  dependencies: We,
  devDependencies: He
};
var _ = S && S.__classPrivateFieldSet || function(e, r, o, i, u) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !u)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? e !== r || !u : !r.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? u.call(e, o) : u ? u.value = o : r.set(e, o), o;
}, g = S && S.__classPrivateFieldGet || function(e, r, o, i) {
  if (o === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? e !== r || !i : !r.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return o === "m" ? i : o === "a" ? i.call(e) : i ? i.value : r.get(e);
}, j, T, D, O, B, U, L, I, A;
Object.defineProperty(z, "__esModule", { value: !0 });
const k = V, R = J, s = v, a = n, Ve = H.exports, K = ze;
class N {
  constructor(r) {
    var o, i, u, c, b, y;
    j.set(this, void 0), T.set(this, void 0), D.set(this, void 0), O.set(this, void 0), B.set(this, void 0), U.set(this, void 0), L.set(this, void 0), I.set(this, void 0), A.set(this, void 0), this.blocks = {
      retrieve: (t) => this.request({
        path: a.getBlock.path(t),
        method: a.getBlock.method,
        query: (0, s.pick)(t, a.getBlock.queryParams),
        body: (0, s.pick)(t, a.getBlock.bodyParams),
        auth: t == null ? void 0 : t.auth
      }),
      update: (t) => this.request({
        path: a.updateBlock.path(t),
        method: a.updateBlock.method,
        query: (0, s.pick)(t, a.updateBlock.queryParams),
        body: (0, s.pick)(t, a.updateBlock.bodyParams),
        auth: t == null ? void 0 : t.auth
      }),
      delete: (t) => this.request({
        path: a.deleteBlock.path(t),
        method: a.deleteBlock.method,
        query: (0, s.pick)(t, a.deleteBlock.queryParams),
        body: (0, s.pick)(t, a.deleteBlock.bodyParams),
        auth: t == null ? void 0 : t.auth
      }),
      children: {
        append: (t) => this.request({
          path: a.appendBlockChildren.path(t),
          method: a.appendBlockChildren.method,
          query: (0, s.pick)(t, a.appendBlockChildren.queryParams),
          body: (0, s.pick)(t, a.appendBlockChildren.bodyParams),
          auth: t == null ? void 0 : t.auth
        }),
        list: (t) => this.request({
          path: a.listBlockChildren.path(t),
          method: a.listBlockChildren.method,
          query: (0, s.pick)(t, a.listBlockChildren.queryParams),
          body: (0, s.pick)(t, a.listBlockChildren.bodyParams),
          auth: t == null ? void 0 : t.auth
        })
      }
    }, this.databases = {
      list: (t) => this.request({
        path: a.listDatabases.path(),
        method: a.listDatabases.method,
        query: (0, s.pick)(t, a.listDatabases.queryParams),
        body: (0, s.pick)(t, a.listDatabases.bodyParams),
        auth: t == null ? void 0 : t.auth
      }),
      retrieve: (t) => this.request({
        path: a.getDatabase.path(t),
        method: a.getDatabase.method,
        query: (0, s.pick)(t, a.getDatabase.queryParams),
        body: (0, s.pick)(t, a.getDatabase.bodyParams),
        auth: t == null ? void 0 : t.auth
      }),
      query: (t) => this.request({
        path: a.queryDatabase.path(t),
        method: a.queryDatabase.method,
        query: (0, s.pick)(t, a.queryDatabase.queryParams),
        body: (0, s.pick)(t, a.queryDatabase.bodyParams),
        auth: t == null ? void 0 : t.auth
      }),
      create: (t) => this.request({
        path: a.createDatabase.path(),
        method: a.createDatabase.method,
        query: (0, s.pick)(t, a.createDatabase.queryParams),
        body: (0, s.pick)(t, a.createDatabase.bodyParams),
        auth: t == null ? void 0 : t.auth
      }),
      update: (t) => this.request({
        path: a.updateDatabase.path(t),
        method: a.updateDatabase.method,
        query: (0, s.pick)(t, a.updateDatabase.queryParams),
        body: (0, s.pick)(t, a.updateDatabase.bodyParams),
        auth: t == null ? void 0 : t.auth
      })
    }, this.pages = {
      create: (t) => this.request({
        path: a.createPage.path(),
        method: a.createPage.method,
        query: (0, s.pick)(t, a.createPage.queryParams),
        body: (0, s.pick)(t, a.createPage.bodyParams),
        auth: t == null ? void 0 : t.auth
      }),
      retrieve: (t) => this.request({
        path: a.getPage.path(t),
        method: a.getPage.method,
        query: (0, s.pick)(t, a.getPage.queryParams),
        body: (0, s.pick)(t, a.getPage.bodyParams),
        auth: t == null ? void 0 : t.auth
      }),
      update: (t) => this.request({
        path: a.updatePage.path(t),
        method: a.updatePage.method,
        query: (0, s.pick)(t, a.updatePage.queryParams),
        body: (0, s.pick)(t, a.updatePage.bodyParams),
        auth: t == null ? void 0 : t.auth
      }),
      properties: {
        retrieve: (t) => this.request({
          path: a.getPageProperty.path(t),
          method: a.getPageProperty.method,
          query: (0, s.pick)(t, a.getPageProperty.queryParams),
          body: (0, s.pick)(t, a.getPageProperty.bodyParams),
          auth: t == null ? void 0 : t.auth
        })
      }
    }, this.users = {
      retrieve: (t) => this.request({
        path: a.getUser.path(t),
        method: a.getUser.method,
        query: (0, s.pick)(t, a.getUser.queryParams),
        body: (0, s.pick)(t, a.getUser.bodyParams),
        auth: t == null ? void 0 : t.auth
      }),
      list: (t) => this.request({
        path: a.listUsers.path(),
        method: a.listUsers.method,
        query: (0, s.pick)(t, a.listUsers.queryParams),
        body: (0, s.pick)(t, a.listUsers.bodyParams),
        auth: t == null ? void 0 : t.auth
      }),
      me: (t) => this.request({
        path: a.getSelf.path(),
        method: a.getSelf.method,
        query: (0, s.pick)(t, a.getSelf.queryParams),
        body: (0, s.pick)(t, a.getSelf.bodyParams),
        auth: t == null ? void 0 : t.auth
      })
    }, this.comments = {
      create: (t) => this.request({
        path: a.createComment.path(),
        method: a.createComment.method,
        query: (0, s.pick)(t, a.createComment.queryParams),
        body: (0, s.pick)(t, a.createComment.bodyParams),
        auth: t == null ? void 0 : t.auth
      }),
      list: (t) => this.request({
        path: a.listComments.path(),
        method: a.listComments.method,
        query: (0, s.pick)(t, a.listComments.queryParams),
        body: (0, s.pick)(t, a.listComments.bodyParams),
        auth: t == null ? void 0 : t.auth
      })
    }, this.search = (t) => this.request({
      path: a.search.path(),
      method: a.search.method,
      query: (0, s.pick)(t, a.search.queryParams),
      body: (0, s.pick)(t, a.search.bodyParams),
      auth: t == null ? void 0 : t.auth
    }), _(this, j, r == null ? void 0 : r.auth, "f"), _(this, T, (o = r == null ? void 0 : r.logLevel) !== null && o !== void 0 ? o : k.LogLevel.WARN, "f"), _(this, D, (i = r == null ? void 0 : r.logger) !== null && i !== void 0 ? i : (0, k.makeConsoleLogger)(K.name), "f"), _(this, O, ((u = r == null ? void 0 : r.baseUrl) !== null && u !== void 0 ? u : "https://api.notion.com") + "/v1/", "f"), _(this, B, (c = r == null ? void 0 : r.timeoutMs) !== null && c !== void 0 ? c : 6e4, "f"), _(this, U, (b = r == null ? void 0 : r.notionVersion) !== null && b !== void 0 ? b : N.defaultNotionVersion, "f"), _(this, L, (y = r == null ? void 0 : r.fetch) !== null && y !== void 0 ? y : Ve.default, "f"), _(this, I, r == null ? void 0 : r.agent, "f"), _(this, A, `notionhq-client/${K.version}`, "f");
  }
  async request({ path: r, method: o, query: i, body: u, auth: c }) {
    this.log(k.LogLevel.INFO, "request start", { method: o, path: r });
    const b = !u || Object.entries(u).length === 0 ? void 0 : JSON.stringify(u), y = new URL(`${g(this, O, "f")}${r}`);
    if (i)
      for (const [m, q] of Object.entries(i))
        q !== void 0 && y.searchParams.append(m, String(q));
    const t = {
      ...this.authAsHeaders(c),
      "Notion-Version": g(this, U, "f"),
      "user-agent": g(this, A, "f")
    };
    b !== void 0 && (t["content-type"] = "application/json");
    try {
      const m = await R.RequestTimeoutError.rejectAfterTimeout(g(this, L, "f").call(this, y.toString(), {
        method: o.toUpperCase(),
        headers: t,
        body: b,
        agent: g(this, I, "f")
      }), g(this, B, "f")), q = await m.text();
      if (!m.ok)
        throw (0, R.buildRequestError)(m, q);
      const E = JSON.parse(q);
      return this.log(k.LogLevel.INFO, "request success", { method: o, path: r }), E;
    } catch (m) {
      throw (0, R.isNotionClientError)(m) && (this.log(k.LogLevel.WARN, "request fail", {
        code: m.code,
        message: m.message
      }), (0, R.isHTTPResponseError)(m) && this.log(k.LogLevel.DEBUG, "failed response body", {
        body: m.body
      })), m;
    }
  }
  log(r, o, i) {
    (0, k.logLevelSeverity)(r) >= (0, k.logLevelSeverity)(g(this, T, "f")) && g(this, D, "f").call(this, r, o, i);
  }
  authAsHeaders(r) {
    const o = {}, i = r != null ? r : g(this, j, "f");
    return i !== void 0 && (o.authorization = `Bearer ${i}`), o;
  }
}
z.default = N;
j = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakMap(), L = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap();
N.defaultNotionVersion = "2022-06-28";
var p = {};
Object.defineProperty(p, "__esModule", { value: !0 });
p.isFullComment = p.isFullUser = p.isFullDatabase = p.isFullPage = p.isFullBlock = p.collectPaginatedAPI = p.iteratePaginatedAPI = void 0;
async function* X(e, r) {
  let o = r.start_cursor;
  do {
    const i = await e({
      ...r,
      start_cursor: o
    });
    yield* i.results, o = i.next_cursor;
  } while (o);
}
p.iteratePaginatedAPI = X;
async function Je(e, r) {
  const o = [];
  for await (const i of X(e, r))
    o.push(i);
  return o;
}
p.collectPaginatedAPI = Je;
function Ge(e) {
  return "type" in e;
}
p.isFullBlock = Ge;
function Ye(e) {
  return "url" in e;
}
p.isFullPage = Ye;
function Ke(e) {
  return "title" in e;
}
p.isFullDatabase = Ke;
function Qe(e) {
  return "type" in e;
}
p.isFullUser = Qe;
function Xe(e) {
  return "created_by" in e;
}
p.isFullComment = Xe;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isFullComment = e.isFullUser = e.isFullPage = e.isFullDatabase = e.isFullBlock = e.iteratePaginatedAPI = e.collectPaginatedAPI = e.isNotionClientError = e.RequestTimeoutError = e.UnknownHTTPResponseError = e.APIResponseError = e.ClientErrorCode = e.APIErrorCode = e.LogLevel = e.Client = void 0;
  var r = z;
  Object.defineProperty(e, "Client", { enumerable: !0, get: function() {
    return r.default;
  } });
  var o = V;
  Object.defineProperty(e, "LogLevel", { enumerable: !0, get: function() {
    return o.LogLevel;
  } });
  var i = J;
  Object.defineProperty(e, "APIErrorCode", { enumerable: !0, get: function() {
    return i.APIErrorCode;
  } }), Object.defineProperty(e, "ClientErrorCode", { enumerable: !0, get: function() {
    return i.ClientErrorCode;
  } }), Object.defineProperty(e, "APIResponseError", { enumerable: !0, get: function() {
    return i.APIResponseError;
  } }), Object.defineProperty(e, "UnknownHTTPResponseError", { enumerable: !0, get: function() {
    return i.UnknownHTTPResponseError;
  } }), Object.defineProperty(e, "RequestTimeoutError", { enumerable: !0, get: function() {
    return i.RequestTimeoutError;
  } }), Object.defineProperty(e, "isNotionClientError", { enumerable: !0, get: function() {
    return i.isNotionClientError;
  } });
  var u = p;
  Object.defineProperty(e, "collectPaginatedAPI", { enumerable: !0, get: function() {
    return u.collectPaginatedAPI;
  } }), Object.defineProperty(e, "iteratePaginatedAPI", { enumerable: !0, get: function() {
    return u.iteratePaginatedAPI;
  } }), Object.defineProperty(e, "isFullBlock", { enumerable: !0, get: function() {
    return u.isFullBlock;
  } }), Object.defineProperty(e, "isFullDatabase", { enumerable: !0, get: function() {
    return u.isFullDatabase;
  } }), Object.defineProperty(e, "isFullPage", { enumerable: !0, get: function() {
    return u.isFullPage;
  } }), Object.defineProperty(e, "isFullUser", { enumerable: !0, get: function() {
    return u.isFullUser;
  } }), Object.defineProperty(e, "isFullComment", { enumerable: !0, get: function() {
    return u.isFullComment;
  } });
})(Q);
class Ze {
  constructor(r) {
    C(this, "notion", null);
    C(this, "configuration");
    this.configuration = r, this.init();
  }
  async send(r) {
    var o, i;
    if (!this.configuration)
      return Promise.reject();
    await ((i = this.notion) == null ? void 0 : i.pages.create({
      parent: { database_id: ((o = this.configuration) == null ? void 0 : o.databaseId) || "" },
      properties: this.packData(r)
    }));
  }
  packData(r) {
    return Object.keys(r).reduce(
      (o, i) => Object.assign(o, {
        [i]: {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: { content: r[i] }
            }
          ]
        }
      }),
      {}
    );
  }
  init() {
    var r;
    this.notion = new Q.Client({
      auth: (r = this.configuration) == null ? void 0 : r.clientSecret
    });
  }
}
const W = {
  notion: {
    databaseId: "",
    clientSecret: ""
  },
  collapsedForm: {
    title: "Using Editor.js?",
    description: "Take a 2-minutes survey\u{1F64F}"
  },
  form: {
    description: "We want to better understand your goals and requirements. Please, provide us some insights.",
    items: [
      {
        label: "Product type",
        field: {
          name: "product_type",
          type: w.Select,
          options: [
            {
              name: "B2B",
              value: "B2B"
            },
            {
              name: "B2C",
              value: "B2C"
            }
          ]
        }
      },
      {
        label: "Your product size",
        field: {
          type: w.Select,
          name: "product_size",
          options: [
            {
              name: "<100 DAU",
              value: "<100 DAU"
            },
            {
              name: "100 DAU - 1000 DAU",
              value: "100 DAU - 1000 DAU"
            },
            {
              name: "> 1000 DAU",
              value: "> 1000 DAU"
            }
          ]
        }
      },
      {
        label: "Your software license",
        field: {
          name: "software_license",
          type: w.Select,
          options: [
            {
              name: "Freeware / Open-Source",
              value: "Freeware / Open-Source"
            },
            {
              name: "Permissive",
              value: "Permissive"
            },
            {
              name: "Proprietary",
              value: "Proprietary"
            }
          ]
        }
      },
      {
        label: "Your suggestions to the Editor.js",
        field: {
          name: "suggestions",
          type: w.Textarea,
          placeholder: "Enter your ideas, requests or issues"
        }
      }
    ]
  }
};
function et() {
  const e = new Ze(W.notion);
  new Ce(
    {
      form: W.form,
      collapsedForm: W.collapsedForm
    },
    (r) => {
      e.send(r);
    }
  );
}
export {
  et as default
};
