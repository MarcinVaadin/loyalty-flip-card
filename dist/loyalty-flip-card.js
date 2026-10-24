// \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = (n, r, o) => (o = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), l = globalThis, u = l.ShadowRoot && (l.ShadyCSS === void 0 || l.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, d = Symbol(), f = /* @__PURE__ */ new WeakMap(), p = class {
	constructor(e, t, n) {
		if (this._$cssResult$ = !0, n !== d) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, t = this.t;
		if (u && e === void 0) {
			let n = t !== void 0 && t.length === 1;
			n && (e = f.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && f.set(t, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, m = (e) => new p(typeof e == "string" ? e : e + "", void 0, d), h = (e, ...t) => new p(e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1], e[0]), e, d), g = (e, t) => {
	if (u) e.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let n of t) {
		let t = document.createElement("style"), r = l.litNonce;
		r !== void 0 && t.setAttribute("nonce", r), t.textContent = n.cssText, e.appendChild(t);
	}
}, _ = u ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return m(t);
})(e) : e, { is: v, defineProperty: y, getOwnPropertyDescriptor: b, getOwnPropertyNames: x, getOwnPropertySymbols: S, getPrototypeOf: C } = Object, w = globalThis, T = w.trustedTypes, E = T ? T.emptyScript : "", D = w.reactiveElementPolyfillSupport, O = (e, t) => e, k = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? E : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch {
				n = null;
			}
		}
		return n;
	}
}, A = (e, t) => !v(e, t), j = {
	attribute: !0,
	type: String,
	converter: k,
	reflect: !1,
	useDefault: !1,
	hasChanged: A
};
Symbol.metadata ??= Symbol("metadata"), w.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var M = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = j) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && y(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = b(this.prototype, e) ?? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		};
		return {
			get: r,
			set(t) {
				let a = r?.call(this);
				i?.call(this, t), this.requestUpdate(e, a, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		return this.elementProperties.get(e) ?? j;
	}
	static _$Ei() {
		if (this.hasOwnProperty(O("elementProperties"))) return;
		let e = C(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(O("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(O("properties"))) {
			let e = this.properties, t = [...x(e), ...S(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(1 / 0).reverse());
			for (let e of n) t.unshift(_(e));
		} else e !== void 0 && t.push(_(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
	}
	addController(e) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
	}
	removeController(e) {
		this._$EO?.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return g(e, this.constructor.elementStyles), e;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		this._$EO?.forEach((e) => e.hostDisconnected?.());
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			let i = (n.converter?.toAttribute === void 0 ? k : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? k : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? A)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(e) {
		return !0;
	}
	update(e) {
		this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
M.elementStyles = [], M.shadowRootOptions = { mode: "open" }, M[O("elementProperties")] = /* @__PURE__ */ new Map(), M[O("finalized")] = /* @__PURE__ */ new Map(), D?.({ ReactiveElement: M }), (w.reactiveElementVersions ??= []).push("2.1.2");
// node_modules/lit-html/lit-html.js
var N = globalThis, P = (e) => e, ee = N.trustedTypes, te = ee ? ee.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, F = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, ne = "?" + I, re = `<${ne}>`, ie = document, L = () => ie.createComment(""), ae = (e) => e === null || typeof e != "object" && typeof e != "function", R = Array.isArray, oe = (e) => R(e) || typeof e?.[Symbol.iterator] == "function", se = "[ 	\n\f\r]", ce = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, le = /-->/g, ue = />/g, z = RegExp(`>|${se}(?:([^\\s"'>=/]+)(${se}*=${se}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), de = /'/g, fe = /"/g, pe = /^(?:script|style|textarea|title)$/i, B = ((e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}))(1), me = Symbol.for("lit-noChange"), V = Symbol.for("lit-nothing"), he = /* @__PURE__ */ new WeakMap(), ge = ie.createTreeWalker(ie, 129);
function _e(e, t) {
	if (!R(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return te === void 0 ? t : te.createHTML(t);
}
var ve = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = ce;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === ce ? c[1] === "!--" ? o = le : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = z) : (pe.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = z) : o = ue : o === z ? c[0] === ">" ? (o = i ?? ce, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? z : c[3] === "\"" ? fe : de) : o === fe || o === de ? o = z : o === le || o === ue ? o = ce : (o = z, i = void 0);
		let d = o === z && e[t + 1].startsWith("/>") ? " " : "";
		a += o === ce ? n + re : l >= 0 ? (r.push(s), n.slice(0, l) + F + n.slice(l) + I + d) : n + I + (l === -2 ? t : d);
	}
	return [_e(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, ye = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = ve(t, n);
		if (this.el = e.createElement(l, r), ge.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = ge.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(F)) {
					let t = u[o++], n = i.getAttribute(e).split(I), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? we : r[1] === "?" ? Te : r[1] === "@" ? Ee : Ce
					}), i.removeAttribute(e);
				} else e.startsWith(I) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (pe.test(i.tagName)) {
					let e = i.textContent.split(I), t = e.length - 1;
					if (t > 0) {
						i.textContent = ee ? ee.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], L()), ge.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], L());
					}
				}
			} else if (i.nodeType === 8) {
				if (i.data === ne) c.push({
					type: 2,
					index: a
				});
				else {
					let e = -1;
					for (; (e = i.data.indexOf(I, e + 1)) !== -1;) c.push({
						type: 7,
						index: a
					}), e += I.length - 1;
				}
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = ie.createElement("template");
		return n.innerHTML = e, n;
	}
};
function be(e, t, n = e, r) {
	if (t === me) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = ae(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = be(e, i._$AS(e, t.values), i, r)), t;
}
var xe = class {
	constructor(e, t) {
		this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(e) {
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? ie).importNode(t, !0);
		ge.currentNode = r;
		let i = ge.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new Se(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new De(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = ge.nextNode(), a++);
		}
		return ge.currentNode = ie, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, Se = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = V, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = be(this, e, t), ae(e) ? e === V || e == null || e === "" ? (this._$AH !== V && this._$AR(), this._$AH = V) : e !== this._$AH && e !== me && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? oe(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== V && ae(this._$AH) ? this._$AA.nextSibling.data = e : this.T(ie.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ye.createElement(_e(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new xe(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = he.get(e.strings);
		return t === void 0 && he.set(e.strings, t = new ye(e)), t;
	}
	k(t) {
		R(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(L()), this.O(L()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = P(e).nextSibling;
			P(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, Ce = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = V, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = V;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = be(this, e, t, 0), a = !ae(e) || e !== this._$AH && e !== me, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = be(this, r[n + o], t, o), s === me && (s = this._$AH[o]), a ||= !ae(s) || s !== this._$AH[o], s === V ? e = V : e !== V && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === V ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, we = class extends Ce {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === V ? void 0 : e;
	}
}, Te = class extends Ce {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== V);
	}
}, Ee = class extends Ce {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = be(this, e, t, 0) ?? V) === me) return;
		let n = this._$AH, r = e === V && n !== V || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== V && (n === V || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, De = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		be(this, e);
	}
}, Oe = {
	M: F,
	P: I,
	A: ne,
	C: 1,
	L: ve,
	R: xe,
	D: oe,
	V: be,
	I: Se,
	H: Ce,
	N: Te,
	U: Ee,
	B: we,
	F: De
}, ke = N.litHtmlPolyfillSupport;
ke?.(ye, Se), (N.litHtmlVersions ??= []).push("3.3.3");
var Ae = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new Se(t.insertBefore(L(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, je = globalThis, Me = class extends M {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Ae(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return me;
	}
};
Me._$litElement$ = !0, Me.finalized = !0, je.litElementHydrateSupport?.({ LitElement: Me });
var Ne = je.litElementPolyfillSupport;
Ne?.({ LitElement: Me }), (je.litElementVersions ??= []).push("4.2.2");
// node_modules/@lit/reactive-element/decorators/property.js
var Pe = {
	attribute: !0,
	type: String,
	converter: k,
	reflect: !1,
	hasChanged: A
}, Fe = (e = Pe, t, n) => {
	let { kind: r, metadata: i } = n, a = globalThis.litPropertyMetadata.get(i);
	if (a === void 0 && globalThis.litPropertyMetadata.set(i, a = /* @__PURE__ */ new Map()), r === "setter" && ((e = Object.create(e)).wrapped = !0), a.set(n.name, e), r === "accessor") {
		let { name: r } = n;
		return {
			set(n) {
				let i = t.get.call(this);
				t.set.call(this, n), this.requestUpdate(r, i, e, !0, n);
			},
			init(t) {
				return t !== void 0 && this.C(r, void 0, e, t), t;
			}
		};
	}
	if (r === "setter") {
		let { name: r } = n;
		return function(n) {
			let i = this[r];
			t.call(this, n), this.requestUpdate(r, i, e, !0, n);
		};
	}
	throw Error("Unsupported decorator location: " + r);
};
function Ie(e) {
	return (t, n) => typeof n == "object" ? Fe(e, t, n) : ((e, t, n) => {
		let r = t.hasOwnProperty(n);
		return t.constructor.createProperty(n, e), r ? Object.getOwnPropertyDescriptor(t, n) : void 0;
	})(e, t, n);
}
// node_modules/@lit/reactive-element/decorators/state.js
function Le(e) {
	return Ie({
		...e,
		state: !0,
		attribute: !1
	});
}
// node_modules/lit-html/directive.js
var Re = {
	ATTRIBUTE: 1,
	CHILD: 2,
	PROPERTY: 3,
	BOOLEAN_ATTRIBUTE: 4,
	EVENT: 5,
	ELEMENT: 6
}, ze = (e) => (...t) => ({
	_$litDirective$: e,
	values: t
}), Be = class {
	constructor(e) {}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AT(e, t, n) {
		this._$Ct = e, this._$AM = t, this._$Ci = n;
	}
	_$AS(e, t) {
		return this.update(e, t);
	}
	update(e, t) {
		return this.render(...t);
	}
}, Ve = ze(class extends Be {
	constructor(e) {
		if (super(e), e.type !== Re.ATTRIBUTE || e.name !== "class" || e.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
	}
	render(e) {
		return " " + Object.keys(e).filter((t) => e[t]).join(" ") + " ";
	}
	update(e, [t]) {
		if (this.st === void 0) {
			this.st = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((e) => e !== "")));
			for (let e in t) t[e] && !this.nt?.has(e) && this.st.add(e);
			return this.render(t);
		}
		let n = e.element.classList;
		for (let e of this.st) e in t || (n.remove(e), this.st.delete(e));
		for (let e in t) {
			let r = !!t[e];
			r === this.st.has(e) || this.nt?.has(e) || (r ? (n.add(e), this.st.add(e)) : (n.remove(e), this.st.delete(e)));
		}
		return me;
	}
}), { I: He } = Oe, Ue = (e) => e.strings === void 0, We = (e, t) => {
	let n = e._$AN;
	if (n === void 0) return !1;
	for (let e of n) e._$AO?.(t, !1), We(e, t);
	return !0;
}, Ge = (e) => {
	let t, n;
	do {
		if ((t = e._$AM) === void 0) break;
		n = t._$AN, n.delete(e), e = t;
	} while (n?.size === 0);
}, Ke = (e) => {
	for (let t; t = e._$AM; e = t) {
		let n = t._$AN;
		if (n === void 0) t._$AN = n = /* @__PURE__ */ new Set();
		else if (n.has(e)) break;
		n.add(e), Ye(t);
	}
};
function qe(e) {
	this._$AN === void 0 ? this._$AM = e : (Ge(this), this._$AM = e, Ke(this));
}
function Je(e, t = !1, n = 0) {
	let r = this._$AH, i = this._$AN;
	if (i !== void 0 && i.size !== 0) {
		if (t) {
			if (Array.isArray(r)) for (let e = n; e < r.length; e++) We(r[e], !1), Ge(r[e]);
			else r != null && (We(r, !1), Ge(r));
		} else We(this, e);
	}
}
var Ye = (e) => {
	e.type == Re.CHILD && (e._$AP ??= Je, e._$AQ ??= qe);
}, Xe = class extends Be {
	constructor() {
		super(...arguments), this._$AN = void 0;
	}
	_$AT(e, t, n) {
		super._$AT(e, t, n), Ke(this), this.isConnected = e._$AU;
	}
	_$AO(e, t = !0) {
		e !== this.isConnected && (this.isConnected = e, e ? this.reconnected?.() : this.disconnected?.()), t && (We(this, e), Ge(this));
	}
	setValue(e) {
		if (Ue(this._$Ct)) this._$Ct._$AI(e, this);
		else {
			let t = [...this._$Ct._$AH];
			t[this._$Ci] = e, this._$Ct._$AI(t, this, 0);
		}
	}
	disconnected() {}
	reconnected() {}
}, Ze = () => new Qe(), Qe = class {}, $e = /* @__PURE__ */ new WeakMap(), et = ze(class extends Xe {
	render(e) {
		return V;
	}
	update(e, [t]) {
		let n = t !== this.G;
		return n && this.rt(void 0), (n || this.lt !== this.ct) && (this.G = t, this.ht = e.options?.host, this.rt(this.ct = e.element)), V;
	}
	rt(e) {
		if (this.G !== void 0) {
			if (this.isConnected || (e = void 0), typeof this.G == "function") {
				let t = this.ht ?? globalThis, n = $e.get(t);
				n === void 0 && (n = /* @__PURE__ */ new WeakMap(), $e.set(t, n)), n.get(this.G) !== void 0 && this.G.call(this.ht, void 0), n.set(this.G, e), e !== void 0 && this.G.call(this.ht, e);
			} else this.G.value = e;
		}
	}
	get lt() {
		return typeof this.G == "function" ? $e.get(this.ht ?? globalThis)?.get(this.G) : this.G?.value;
	}
	disconnected() {
		this.lt === this.ct && this.rt(void 0);
	}
	reconnected() {
		this.rt(this.ct);
	}
}), tt = class extends Be {
	constructor(e) {
		if (super(e), this.it = V, e.type !== Re.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
	}
	render(e) {
		if (e === V || e == null) return this._t = void 0, this.it = e;
		if (e === me) return e;
		if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
		if (e === this.it) return this._t;
		this.it = e;
		let t = [e];
		return t.raw = t, this._t = {
			_$litType$: this.constructor.resultType,
			strings: t,
			values: []
		};
	}
};
tt.directiveName = "unsafeHTML", tt.resultType = 1;
// node_modules/lit-html/directives/unsafe-svg.js
var nt = class extends tt {};
nt.directiveName = "unsafeSVG", nt.resultType = 2;
var rt = ze(nt), it = [
	"qr",
	"barcode",
	"auto"
], at = [
	"CODE128",
	"EAN13",
	"EAN8",
	"UPC",
	"CODE39",
	"ITF14",
	"CODABAR",
	"MSI",
	"PDF417"
], ot = {
	CODE128: "Code 128 (general purpose)",
	EAN13: "EAN-13",
	EAN8: "EAN-8",
	UPC: "UPC-A",
	CODE39: "Code 39",
	ITF14: "ITF-14",
	CODABAR: "Codabar",
	MSI: "MSI",
	PDF417: "PDF417 (2D stacked)"
}, st = {
	code: "",
	format: "qr",
	barcode_format: "CODE128",
	show_icon: !0,
	show_code_text: !0,
	qr_size: 320,
	barcode_height: 96,
	barcode_width: 2,
	fallback_to_qr: !0
}, ct = "<CODE>", lt = /^(#[0-9a-f]{3,8}|(?:rgb|hsl)a?\([0-9.,%\s/]+\)|[a-z]+|var\(--[a-z0-9-]+\))$/i;
function ut(e) {
	if (typeof e != "string") return;
	let t = e.trim();
	return t.length > 0 ? t : void 0;
}
function dt(e) {
	return typeof e == "string" ? e.trim() : typeof e == "number" && Number.isFinite(e) ? String(e) : "";
}
function ft(e, t) {
	return typeof t == "string" && e.includes(t) ? t : void 0;
}
function pt(e, t, n, r) {
	let i = typeof e == "number" ? e : Number(e);
	return Number.isFinite(i) ? Math.min(r, Math.max(n, Math.round(i))) : t;
}
function mt(e) {
	return typeof e == "string" && e.includes("<CODE>") ? e : void 0;
}
function ht(e) {
	let t = ut(e);
	return t && lt.test(t) ? t : void 0;
}
function gt(e) {
	if (typeof e != "object" || !e || Array.isArray(e)) throw Error("loyalty-flip-card: configuration must be an object");
	let t = ut(e.title), n = ut(e.logo);
	return {
		type: typeof e.type == "string" ? e.type : "custom:loyalty-flip-card",
		code: dt(e.code),
		format: ft(it, e.format) ?? st.format,
		barcode_format: ft(at, e.barcode_format) ?? st.barcode_format,
		code_pattern: mt(e.code_pattern),
		title: t,
		subtitle: ut(e.subtitle),
		show_icon: e.show_icon !== !1,
		icon: ut(e.icon) ?? "mdi:card-account-details",
		logo: n,
		color: ht(e.color),
		show_code_text: e.show_code_text !== !1,
		popup_title: ut(e.popup_title) ?? t,
		qr_size: pt(e.qr_size, st.qr_size, 160, 640),
		barcode_height: pt(e.barcode_height, st.barcode_height, 48, 240),
		barcode_width: pt(e.barcode_width, st.barcode_width, 1, 4),
		fallback_to_qr: e.fallback_to_qr !== !1
	};
}
function _t(e) {
	let t = /^#([0-9a-f]{3,8})$/i.exec(e)?.[1];
	if (t) return t.length === 3 || t.length === 4 ? [
		Number.parseInt(t[0] + t[0], 16),
		Number.parseInt(t[1] + t[1], 16),
		Number.parseInt(t[2] + t[2], 16)
	] : t.length === 6 || t.length === 8 ? [
		Number.parseInt(t.slice(0, 2), 16),
		Number.parseInt(t.slice(2, 4), 16),
		Number.parseInt(t.slice(4, 6), 16)
	] : void 0;
	let n = /^rgba?\(\s*(\d{1,3})[\s,]+(\d{1,3})[\s,]+(\d{1,3})/i.exec(e);
	if (n) return [
		Number(n[1]),
		Number(n[2]),
		Number(n[3])
	];
}
function vt(e) {
	let t = _t(e);
	if (!t) return "#ffffff";
	let [n, r, i] = t.map((e) => {
		let t = e / 255;
		return t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
	});
	return .2126 * n + .7152 * r + .0722 * i > .45 ? "#111111" : "#ffffff";
}
// node_modules/@bwip-js/browser/dist/bwipp.mjs
var H = null, U = 0, W = [], G = {}, yt = /* @__PURE__ */ new Map(), bt = Math.ceil, xt = Math.floor, St = Math.log, Ct = Math.pow, wt = Math.round, Tt = Math.sqrt;
function K(e) {
	if (!arguments.length) {
		for (var t = U - 1; t >= 0 && W[t] !== Infinity; t--);
		if (t < 0) throw Error("array-marker-not-found");
		e = W.splice(t + 1, U - 1 - t), U = t;
	} else if (!(e instanceof Array)) {
		var n = arguments[0] | 0;
		if (n >= 1 << 24) throw Error("array-size-limit");
		e = Array(n);
		for (var t = 0; t < n; t++) e[t] = null;
	}
	return e.b = e, e.o = 0, e;
}
function Et() {
	for (var e = U - 1; e >= 0 && W[e] !== Infinity; e -= 2) if (W[e - 1] === Infinity) throw Error("dict-malformed-stack");
	if (e < 0) throw Error("dict-marker-not-found");
	for (var t = /* @__PURE__ */ new Map(), n = e + 1; n < U; n += 2) {
		var r = W[n], i = typeof r;
		if (i == "number" || i == "string") t.set(r, W[n + 1]);
		else if (r instanceof Uint8Array) t.set(kt(r), W[n + 1]);
		else throw Error("dict-not-a-valid-key(" + r + ")");
	}
	return U = e, t;
}
function Dt(e) {
	var t = typeof e;
	if (t === "number") return new Uint8Array(e);
	t !== "string" && (e = "" + e);
	for (var n = new Uint8Array(e.length), r = 0, i = e.length; r < i; r++) n[r] = e.charCodeAt(r);
	return n;
}
function Ot(e, t) {
	if (U < e) throw Error("roll: --stack-underflow--");
	if (t) {
		if (t < 0) var n = W.splice(U - e, -t);
		else var n = W.splice(U - e, e - t);
		W.splice.apply(W, [U - n.length, 0].concat(n));
	}
}
function kt(e) {
	return e instanceof Uint8Array ? String.fromCharCode.apply(null, e) : "" + e;
}
function At(e, t) {
	if (typeof e == "string" && (e = Dt(e)), t instanceof Uint8Array) for (var n = 0, r = t.length; n < r; n++) e[n] = t[n];
	else for (var n = 0, r = t.length; n < r; n++) e[n] = t.charCodeAt(n);
	return t.length < e.length ? e.subarray(0, t.length) : e;
}
function jt(e, t) {
	var n = typeof t;
	n == "number" || n == "boolean" || t === null ? t = "" + t : n !== "string" && (t = "--nostringval--");
	for (var r = 0, i = t.length; r < i; r++) e[r] = t.charCodeAt(r);
	return r < e.length ? e.subarray(0, r) : e;
}
function Mt(e) {
	return e instanceof Uint8Array ? xt(String.fromCharCode.apply(null, e).replace(/\0+$/, "")) : xt("" + e);
}
function Nt(e, t, n) {
	return At(e, (~~t).toString(n).toUpperCase());
}
function q(e, t) {
	return e instanceof Uint8Array ? e[t] : typeof e == "string" ? e.charCodeAt(t) : e instanceof Array ? e.b[e.o + t] : (t instanceof Uint8Array && (t = kt(t)), e instanceof Map ? e.get(t) : e[t]);
}
function Pt(e, t) {
	return e instanceof Uint8Array || typeof e == "string" || e instanceof Array ? t < e.length : (t instanceof Uint8Array && (t = kt(t)), e instanceof Map ? e.has(t) : t in e);
}
function Ft(e, t) {
	if (e instanceof Map) t instanceof Uint8Array ? e.delete(kt(t)) : e.delete(t);
	else if (typeof e == "object") t instanceof Uint8Array ? delete e[kt(t)] : delete e[t];
	else throw Error("undef-not-a-dict-" + typeof e);
}
function J(e, t, n) {
	if (e instanceof Uint8Array) e[t] = n;
	else if (e instanceof Array) e.b[e.o + t] = n;
	else if (e instanceof Map) t instanceof Uint8Array ? e.set(kt(t), n) : e.set(t, n);
	else if (typeof e == "object") t instanceof Uint8Array ? e[kt(t)] = n : e[t] = n;
	else throw Error("put-not-writable-" + typeof e);
}
function Y(e, t, n) {
	if (e instanceof Uint8Array) return e.subarray(t, t + n);
	if (e instanceof Array) {
		var r = Array(n);
		return r.b = e.b, r.o = e.o + t, r;
	}
	return e.substr(t, n);
}
function X(e, t, n) {
	if (e instanceof Uint8Array) {
		if (typeof n == "string") for (var r = 0, i = n.length; r < i; r++) e[t + r] = n.charCodeAt(r);
		else for (var r = n.length - 1; r >= 0; r--) e[t + r] = n[r];
	} else if (e instanceof Array) for (var a = e.b, o = t + e.o, s = n.b, c = n.o, r = 0, i = n.length; r < i; r++) a[o + r] = s[c + r];
	else throw Error("putinterval-not-writable-" + typeof e);
}
function It() {
	for (var e = W[--U], t = e.keys(), n = 0, r = e.size; n < r; n++) {
		var i = t.next().value;
		i && typeof i == "string" && (G[i] = e.get(i));
	}
}
function Lt(e) {
	if (e == null) return "nulltype";
	var t = typeof e;
	return t == "number" ? isFinite(e) ? e % 1 ? "realtype" : "integertype" : "marktype" : t == "boolean" ? "booleantype" : t == "string" || e instanceof Uint8Array ? "stringtype" : t == "function" ? "operatortype" : e instanceof Array ? "arraytype" : "dicttype";
}
function Rt(e, t) {
	e instanceof Uint8Array || (e = Dt(e));
	var n = e.length;
	if (t.length == 1) for (var r = 1, i = t instanceof Uint8Array ? t[0] : t.charCodeAt(0), a = 0; a < n && e[a] != i; a++);
	else {
		t instanceof Uint8Array || (t = Dt(t));
		for (var r = t.length, i = t[0], a = 0; a < n && e[a] != i; a++);
		for (; a < n;) {
			for (var o = 1; o < r && e[a + o] === t[o]; o++);
			if (o === r) break;
			for (a++; a < n && e[a] != i; a++);
		}
	}
	a < n ? (W[U++] = e.subarray(a + r), W[U++] = e.subarray(a, a + r), W[U++] = e.subarray(0, a), W[U++] = !0) : (W[U++] = e, W[U++] = !1);
}
function zt(e, t) {
	if (e instanceof Uint8Array) for (var n = 0, r = e.length; n < r && (W[U++] = e[n], !(t && t())); n++);
	else if (e instanceof Array) for (var i = e.b, n = e.o, r = e.o + e.length; n < r && (W[U++] = i[n], !(t && t())); n++);
	else if (typeof e == "string") for (var n = 0, r = e.length; n < r && (W[U++] = e.charCodeAt(n), !(t && t())); n++);
	else if (e instanceof Map) for (var a = e.keys(), n = 0, r = e.size; n < r; n++) {
		var o = a.next().value;
		if (W[U++] = o, W[U++] = e.get(o), t && t()) break;
	}
	else for (var o in e) if (W[U++] = o, W[U++] = e[o], t && t()) break;
}
function Bt() {
	for (var e = U - 1; e >= 0 && W[e] !== Infinity; e--);
	return U - e - 1;
}
function Z(e) {
	for (var t = 0, n = e.length, r = e.b, i = e.o; t < n; t++) W[U++] = r[i + t];
}
function Vt(e) {
	for (var t = 0, n = e.length, r = e.b, i = e.o + n - 1; t < n; t++) r[i - t] = W[--U];
	W[U++] = e;
}
function Ht(e, t) {
	if (typeof e == "string" && typeof t == "string") return e == t;
	if (e instanceof Uint8Array && t instanceof Uint8Array) {
		if (e.length != t.length) return !1;
		for (var n = 0, r = e.length; n < r; n++) if (e[n] != t[n]) return !1;
		return !0;
	}
	return (e instanceof Uint8Array && typeof t == "string" || t instanceof Uint8Array && typeof e == "string") && (e instanceof Uint8Array ? e = kt(e) : t = kt(t)), e == t;
}
function Ut(e, t) {
	return !Ht(e, t);
}
function Wt(e, t) {
	return e instanceof Uint8Array && (e = kt(e)), t instanceof Uint8Array && (t = kt(t)), e < t;
}
var Q = (function(e) {
	return (t) => (t | 0) == t ? t : (e[0] = t, e[0]);
})(/* @__PURE__ */ new Float32Array(1));
function $() {
	var e = W[--U], t = W[--U];
	throw yt.set("errorname", t), yt.set("errorinfo", e), typeof e == "string" || e instanceof Uint8Array ? Error(kt(t) + ": " + kt(e)) : kt(t);
}
var Gt = /* @__PURE__ */ new Map([
	["", ""],
	["subspace", ""],
	["split", ""],
	["linegaps", 1.2],
	["color", "unset"],
	["xalign", "left"],
	["yalign", "above"],
	["direction", "forward"],
	["font", "OCR-B"],
	["size", 10],
	["xoffset", 0],
	["yoffset", 0],
	["gaps", 0]
]);
function Kt() {
	for (var e = 1; e <= 9; e++) for (var t = Gt, n = t.keys(), r = 0, i = t.size; r < i; r++) {
		var a = n.next().value;
		G["text" + e + a] = t.get(a);
	}
}
function qt() {
	for (var e = K(9), t = Gt, n = 1; n <= 9; n++) {
		for (var r = /* @__PURE__ */ new Map(), i = "text" + n, a = t.keys(), o = 0, s = t.size; o < s; o++) {
			var c = a.next().value;
			r.set(c, G[i + c]);
		}
		J(e, n - 1, r);
	}
	W[U++] = e;
}
var Jt = {
	alttext: "text1",
	alttextsubspace: "text1subspace",
	alttextsplit: "text1split",
	textsubspace: "text1subspace",
	textsplit: "text1split",
	textlinegaps: "text1linegaps",
	textcolor: "text1color",
	textxalign: "text1xalign",
	textyalign: "text1yalign",
	textdirection: "text1direction",
	textfont: "text1font",
	textsize: "text1size",
	textxoffset: "text1xoffset",
	textyoffset: "text1yoffset",
	textgaps: "text1gaps",
	extratext: "text2",
	extratextsubspace: "text2subspace",
	extratextsplit: "text2split",
	extratextlinegaps: "text2linegaps",
	extratextcolor: "text2color",
	extratextxalign: "text2xalign",
	extratextyalign: "text2yalign",
	extratextdirection: "text2direction",
	extratextfont: "text2font",
	extratextsize: "text2size",
	extratextxoffset: "text2xoffset",
	extratextyoffset: "text2yoffset",
	extratextgaps: "text2gaps"
};
function Yt() {
	var e = W[--U], t = W[U - 1];
	if (t instanceof Uint8Array && (t = kt(t)), typeof t == "string") {
		let e = t.trim().split(/ +/g);
		W[U - 1] = t = /* @__PURE__ */ new Map();
		for (let n = 0; n < e.length; n++) {
			let r = e[n].split("=");
			r.length === 1 ? t.set(r[0], !0) : t.set(r[0], r[1]);
		}
	}
	if (t.has("alttext") && t.has("text1")) throw Error("bwipp.invalidTextOptions: alttext and text1 are mutually exclusive");
	if (t.has("extratext") && t.has("text2")) throw Error("bwipp.invalidTextOptions: extratext and text2 are mutually exclusive");
	for (var n = t.keys(), r = 0, i = t.size; r < i; r++) {
		var a = n.next().value;
		e && e[a] ? t.set(e[a], t.get(a)) : Jt[a] && (t.set(Jt[a], t.get(a)), /^(?:alt|extra)text/.test(a) && t.delete(a));
	}
	for (var a in G) if (t.has(a)) {
		var o = t.get(a), s = G[a], c = typeof s;
		if (s === null || c == "number") {
			if (!isFinite(+o)) throw Error("bwipp.invalidOptionType: " + a + ": not a realtype: " + o);
			typeof o == "string" && (o = +o, t.set(a, o));
		} else if (c == "boolean") {
			if (o !== !0 && o !== !1) {
				if (o == null || (o | 0) === o) o = !!o;
				else if (o === "true") o = !0;
				else if (o === "false") o = !1;
				else throw Error("bwipp.invalidOptionType: " + a + ": not a booleantype: " + o);
				t.set(a, o);
			}
		} else if (c == "string" || s instanceof Uint8Array) {
			if (typeof o == "number") o = "" + o, t.set(a, o);
			else if (/^text\d$/.test(a) && typeof o == "string") o = Dt(o), t.set(a, o);
			else if (typeof o != "string" && !(o instanceof Uint8Array)) throw Error("bwipp.invalidOptionType: " + a + ": not a stringtype: " + o);
		} else if (Object.prototype.toString.call(o) !== Object.prototype.toString.call(s)) {
			var l = /\[object (\w+)\]/.exec(Object.prototype.toString.call(s)) || [, "unknown"];
			throw Error("bwipp.invalidOptionType: " + a + ": expected " + l[1].toLowerCase() + "type");
		}
		G[a] = o;
	}
}
function Xt() {
	var e = {
		limit: W[--U],
		max: W[--U],
		cache: /* @__PURE__ */ new Map(),
		fifo: [],
		state: {
			head: 0,
			cnt: 0,
			total: 0
		},
		fetch() {
			W[U++] = e, Zt();
		}
	};
	W[U++] = e;
}
function Zt() {
	var e = W[--U], t = W[--U], n = W[--U], r = W[--U];
	r instanceof Uint8Array && (r = String.fromCharCode.apply(null, r));
	var i = e.cache;
	if (i.has(r)) W[U++] = i.get(r);
	else {
		var a = e.fifo, o = e.max, s = e.limit;
		n();
		var c = W[U - 1];
		t();
		var l = W[--U], u = e.state;
		if (l < s) {
			for (; !(u.total + l <= s && u.cnt < o);) {
				var d = a[u.head];
				W[U++] = i.get(d), t(), u.total -= W[--U], i.delete(d), u.head = (u.head + 1) % o, u.cnt--;
			}
			i.set(r, c), a[(u.head + u.cnt) % o] = r, u.cnt++, u.total += l;
		}
		W[U++] = c;
	}
}
function Qt() {
	if (!Qt.globals) {
		var e = G;
		G = Qt.globals = {}, W[U++] = Infinity;
		var t = K(/* @__PURE__ */ "NUL.SOH.STX.ETX.EOT.ENQ.ACK.BEL.BS.TAB.LF.VT.FF.CR...DLE.DC1.DC2.DC3.DC4.NAK.SYN.ETB.CAN.EM.SUB.ESC.FS.GS.RS.US".split("."));
		W[U++] = 0;
		for (var n = 0, r = t.length; n < r; n++) {
			var i = q(t, n), a = W[--U];
			W[U++] = i, W[U++] = a, W[U++] = a + 1;
		}
		U--, G.ctrl = Et(), G = e;
	}
	var e = G;
	G = Object.assign({}, G, Qt.globals);
	var o = W[--U];
	G.fncvals = o;
	var s = W[--U];
	for (G.barcode = s, G.parse = q(G.fncvals, "parse"), Ft(G.fncvals, "parse"), G.parsefnc = q(G.fncvals, "parsefnc"), Ft(G.fncvals, "parsefnc"), G.parseonly = Pt(G.fncvals, "parseonly"), Ft(G.fncvals, "parseonly"), G.eci = Pt(G.fncvals, "eci"), Ft(G.fncvals, "eci"), G.msg = K(G.barcode.length), G.j = 0, W[U++] = G.barcode;;) {
		var c = W[--U];
		Rt(c, "^");
		var l = W[--U], u = W[--U], d = u.length, f = G.msg, p = G.j;
		if (W[U++] = Infinity, zt(u), X(f, p, K()), G.j = Q(d + G.j), l) {
			U--;
			for (var m = 0; m < 1; m++) {
				if (!G.parse && !G.parsefnc) {
					J(G.msg, G.j, 94), G.j += 1;
					break;
				}
				if (J(G.msg, G.j, 94), G.j += 1, G.parse) {
					if (W[U - 1].length >= 3) {
						var h = W[U - 1], g = Y(h, 0, 3), _ = G.ctrl, v = Pt(_, g);
						if (W[U++] = _, W[U++] = g, v) {
							--G.j;
							var y = W[--U], b = W[--U];
							J(G.msg, G.j, q(b, y)), G.j += 1;
							var x = W[--U];
							W[U++] = Y(x, 3, x.length - 3);
							break;
						}
						U -= 2;
					}
					if (W[U - 1].length >= 2) {
						var S = W[U - 1], C = Y(S, 0, 2), w = G.ctrl, T = Pt(w, C);
						if (W[U++] = w, W[U++] = C, T) {
							--G.j;
							var E = W[--U], D = W[--U];
							J(G.msg, G.j, q(D, E)), G.j += 1;
							var O = W[--U];
							W[U++] = Y(O, 2, O.length - 2);
							break;
						}
						U -= 2;
					}
					if (W[U - 1].length >= 3) {
						var k = W[U - 1], A = Y(k, 0, 3);
						W[U++] = !0;
						for (var j = 0, M = A.length; j < M; j++) {
							var N = q(A, j);
							(N < 48 || N > 57) && (W[U - 1] = !1);
						}
						if (W[--U]) {
							var P = W[U - 1], ee = Mt(Y(P, 0, 3));
							W[U++] = ee, ee > 255 && (U -= 2, W[U++] = "bwipp.invalidOrdinal#521", W[U++] = "Ordinal must be 000 to 255", $()), --G.j;
							var te = W[--U];
							J(G.msg, G.j, te), G.j += 1;
							var F = W[--U];
							W[U++] = Y(F, 3, F.length - 3);
						}
					}
				}
				if (G.parseonly || !G.parsefnc || q(G.msg, G.j - 1) != 94) break;
				--G.j, W[U - 1].length < 1 && (W[U - 1] = "bwipp.truncatedCaret#540", W[U++] = "Caret character truncated", $());
				var I = W[U - 1];
				if (q(I, 0) == 94) {
					J(G.msg, G.j, 94), G.j += 1;
					var ne = W[--U];
					W[U++] = Y(ne, 1, ne.length - 1);
					break;
				}
				W[U - 1].length < 3 && (W[U - 1] = "bwipp.truncatedFNC#550", W[U++] = "Function character truncated", $());
				var re = W[U - 1];
				if (Ht(Y(re, 0, 3), "ECI") && G.eci) {
					W[U - 1].length < 9 && (W[U - 1] = "bwipp.truncatedECI#555", W[U++] = "ECI truncated", $());
					var ie = W[U - 1], L = Y(ie, 3, 6);
					W[U++] = L;
					for (var ae = 0, R = L.length; ae < R; ae++) {
						var oe = q(L, ae);
						(oe < 48 || oe > 57) && (U -= 2, W[U++] = "bwipp.invalidECI#561", W[U++] = "ECI must be 000000 to 999999", $());
					}
					var se = W[--U], ce = 0;
					zt(se, function() {
						var e = W[--U];
						ce = Q(ce - (e - 48)) * 10;
					}), J(G.msg, G.j, ~~(ce / 10) - 1e6), G.j += 1;
					var le = W[--U];
					W[U++] = Y(le, 9, le.length - 9);
					break;
				}
				W[U - 1].length < 4 && (W[U - 1] = "bwipp.truncatedFNC#572", W[U++] = "Function character truncated", $());
				var ue = W[U - 1], z = Y(ue, 0, 4), de = Pt(G.fncvals, z);
				if (W[U++] = z, !de) {
					var fe = W[--U], pe = Dt(fe.length + 28);
					X(pe, 28, fe), X(pe, 0, "Unknown function character: "), W[U - 1] = "bwipp.unknownFNC#578", W[U++] = pe, $();
				}
				var B = W[--U];
				J(G.msg, G.j, q(G.fncvals, B)), G.j += 1;
				var me = W[--U];
				W[U++] = Y(me, 4, me.length - 4);
				break;
			}
		} else break;
	}
	if (!G.parseonly) W[U++] = Y(G.msg, 0, G.j);
	else {
		W[U++] = Dt(G.j);
		for (var V = 0, he = G.j - 1; V <= he; V += 1) {
			var ge = W[U - 1];
			J(ge, V, q(G.msg, V));
		}
	}
	G = e;
}
function $t() {
	if (!$t.globals) {
		var e = G;
		G = $t.globals = {}, G = e;
	}
	var e = G;
	G = Object.assign({}, G, $t.globals);
	var t = W[--U];
	G.p = t;
	var n = W[--U];
	G.lfsr = n;
	var r = W[--U];
	G.nc = r;
	var i = W[--U];
	G.coeffs = i;
	var a = W[--U];
	G.nd = a;
	var o = W[--U];
	G.getdata = o;
	for (var s = 0, c = G.nc - 1; s <= c; s += 1) J(G.lfsr, s, 0);
	for (var l = 0, u = G.nd - 1; l <= u && (W[U++] = l, G.getdata() !== !0); l += 1) {
		var d = q(G.lfsr, 0), f = W[--U];
		W[U++] = Q(f - d + G.p) % G.p;
		for (var p = 0, m = G.nc - 2; p <= m; p += 1) {
			var h = G.lfsr, g = q(h, p + 1), _ = q(G.coeffs, Q(G.nc - p) - 1), v = W[U - 1];
			J(h, p, Q(g + _ * v % G.p) % G.p);
		}
		var y = q(G.coeffs, 0), b = W[--U];
		J(G.lfsr, G.nc - 1, y * b % G.p);
	}
	G = e;
}
function en() {
	if (!en.globals) {
		var e = G;
		G = en.globals = {}, G.pharmacode2_base3sub = K([
			3,
			1,
			2
		]), G.pharmacode2_base3map = K([
			2,
			0,
			1
		]), G.pharmacode2_htmult = K([
			1,
			1,
			2
		]), G = e;
	}
	var e = G;
	G = Object.assign({}, G, en.globals), G.dontdraw = !1, G.includetext = !1, G.height = -1, G.width = 0, G.modunit = 1, W[U++] = null, Yt();
	var t = W[--U];
	G.options = t;
	var n = W[--U];
	G.barcode = n, G._render = !(G.dontdraw || G.bwipp_dontdraw), (G.barcode.length < 1 || G.barcode.length > 8) && (W[U++] = "bwipp.pharmacode2BadLength#14329", W[U++] = "Two-track Pharmacode must be 1 to 6 digits", $()), zt(G.barcode, function() {
		var e = W[--U];
		(e < 48 || e > 57) && (W[U++] = "bwipp.pharmacode2badCharacter#14333", W[U++] = "Two-track Pharmacode must contain only digits", $());
	});
	var r = Mt(G.barcode);
	(r < 4 || r > 64570080) && (W[U++] = "bwipp.pharmacode2badValue#14337", W[U++] = "Two-track Pharmacode value must be between 4 and 64570080", $()), G.height == -1 && (G.height = 4), G.txt = K(G.barcode.length);
	for (var i = 0, a = G.barcode.length - 1; i <= a; i += 1) G.i = i, J(G.txt, G.i, K([
		Y(G.barcode, G.i, 1),
		0,
		0,
		"",
		0
	]));
	for (G.encstr = Dt(16), G.sbs = K(32), G.bar = 1 / 25.4 * G.height, G.spc = 1 / 25.4 * 72, G.i = 15, G.val = Mt(G.barcode); G.val != 0;) {
		var o = G.val % 3;
		G.val = ~~(Q(G.val - q(G.pharmacode2_base3sub, o)) / 3), J(G.encstr, G.i, q(G.pharmacode2_base3map, o)), --G.i;
	}
	G.encstr = Y(G.encstr, G.i + 1, 15 - G.i), G.bhs = K(G.encstr.length), G.bbs = K(G.encstr.length);
	for (var s = 0, c = G.encstr.length - 1; s <= c; s += 1) {
		G.i = s;
		var l = q(G.encstr, G.i);
		J(G.bhs, G.i, G.bar * q(G.pharmacode2_htmult, l)), J(G.bbs, G.i, q(K([
			0,
			G.bar,
			0
		]), l));
	}
	W[U++] = Infinity;
	for (var u = G.bhs, d = G.bbs, f = [], p = 0, m = G.encstr.length * 2; p < m; p++) f[p] = G.spc;
	f = K(f), W[U++] = "ren", W[U++] = "renlinear", W[U++] = "bhs", W[U++] = u, W[U++] = "bbs", W[U++] = d, W[U++] = "sbs", W[U++] = f, W[U++] = "txt", W[U++] = G.txt, W[U++] = "text1xalign", W[U++] = "center", W[U++] = "text1yoffset", W[U++] = -4, W[U++] = "opt", W[U++] = G.options;
	var h = Et();
	W[U++] = h, G._render && an(), G = e;
}
function tn() {
	if (!tn.globals) {
		var e = G;
		G = tn.globals = {}, G.pdf417_t = 0, G.pdf417_n = 1, G.pdf417_b = 2, G.pdf417_a = 0, G.pdf417_l = 1, G.pdf417_m = 2, G.pdf417_p = 3, G.pdf417_tl = -1, G.pdf417_nl = -2, G.pdf417_bl = -3, G.pdf417_bl6 = -4, G.pdf417_bs = -5, G.pdf417_al = -6, G.pdf417_ll = -7, G.pdf417_ml = -8, G.pdf417_pl = -9, G.pdf417_as = -10, G.pdf417_ps = -11, G.al = G.pdf417_al, G.ll = G.pdf417_ll, G.ml = G.pdf417_ml, G.pl = G.pdf417_pl, G.as = G.pdf417_as, G.ps = G.pdf417_ps, G.pdf417_textsubmodes = K([
			G.pdf417_a,
			G.pdf417_l,
			G.pdf417_m,
			G.pdf417_p
		]), G.pdf417_charmaps = K([
			K([
				"A",
				"a",
				"0",
				";"
			]),
			K([
				"B",
				"b",
				"1",
				"<"
			]),
			K([
				"C",
				"c",
				"2",
				">"
			]),
			K([
				"D",
				"d",
				"3",
				"@"
			]),
			K([
				"E",
				"e",
				"4",
				"["
			]),
			K([
				"F",
				"f",
				"5",
				92
			]),
			K([
				"G",
				"g",
				"6",
				"]"
			]),
			K([
				"H",
				"h",
				"7",
				"_"
			]),
			K([
				"I",
				"i",
				"8",
				"`"
			]),
			K([
				"J",
				"j",
				"9",
				"~"
			]),
			K([
				"K",
				"k",
				"&",
				"!"
			]),
			K([
				"L",
				"l",
				13,
				13
			]),
			K([
				"M",
				"m",
				9,
				9
			]),
			K([
				"N",
				"n",
				",",
				","
			]),
			K([
				"O",
				"o",
				":",
				":"
			]),
			K([
				"P",
				"p",
				"#",
				10
			]),
			K([
				"Q",
				"q",
				"-",
				"-"
			]),
			K([
				"R",
				"r",
				".",
				"."
			]),
			K([
				"S",
				"s",
				"$",
				"$"
			]),
			K([
				"T",
				"t",
				"/",
				"/"
			]),
			K([
				"U",
				"u",
				"+",
				"\""
			]),
			K([
				"V",
				"v",
				"%",
				"|"
			]),
			K([
				"W",
				"w",
				"*",
				"*"
			]),
			K([
				"X",
				"x",
				"=",
				40
			]),
			K([
				"Y",
				"y",
				"^",
				41
			]),
			K([
				"Z",
				"z",
				G.pl,
				"?"
			]),
			K([
				" ",
				" ",
				" ",
				"{"
			]),
			K([
				G.ll,
				G.as,
				G.ll,
				"}"
			]),
			K([
				G.ml,
				G.ml,
				G.al,
				"'"
			]),
			K([
				G.ps,
				G.ps,
				G.ps,
				G.al
			])
		]), G.pdf417_e = 4e4, G.e = G.pdf417_e, G.pdf417_latlen = K([
			K([
				0,
				1,
				1,
				2
			]),
			K([
				2,
				0,
				1,
				2
			]),
			K([
				1,
				1,
				0,
				1
			]),
			K([
				1,
				2,
				2,
				0
			])
		]), G.pdf417_latseq = K([
			K([
				K([]),
				K([G.ll]),
				K([G.ml]),
				K([G.ml, G.pl])
			]),
			K([
				K([G.ml, G.al]),
				K([]),
				K([G.ml]),
				K([G.ml, G.pl])
			]),
			K([
				K([G.al]),
				K([G.ll]),
				K([]),
				K([G.pl])
			]),
			K([
				K([G.al]),
				K([G.al, G.ll]),
				K([G.al, G.ml]),
				K([])
			])
		]), G.pdf417_shftlen = K([
			K([
				G.e,
				G.e,
				G.e,
				1
			]),
			K([
				1,
				G.e,
				G.e,
				1
			]),
			K([
				G.e,
				G.e,
				G.e,
				1
			]),
			K([
				G.e,
				G.e,
				G.e,
				G.e
			])
		]), W[U++] = Infinity, W[U++] = G.pdf417_tl, W[U++] = 900, W[U++] = G.pdf417_bl, W[U++] = 901, W[U++] = G.pdf417_bl6, W[U++] = 924, W[U++] = G.pdf417_nl, W[U++] = 902, W[U++] = G.pdf417_bs, W[U++] = 913;
		var t = Et();
		G.pdf417_latchcws = t, G.pdf417_textencfuncs = K([
			"enca",
			"encl",
			"encm",
			"encp"
		]), G.pdf417_encfuncs = K([
			"enct",
			"encn",
			"encb"
		]), G.pdf417_clusters = K([
			K([
				120256,
				125680,
				128380,
				120032,
				125560,
				128318,
				108736,
				119920,
				108640,
				86080,
				108592,
				86048,
				110016,
				120560,
				125820,
				109792,
				120440,
				125758,
				88256,
				109680,
				88160,
				89536,
				110320,
				120700,
				89312,
				110200,
				120638,
				89200,
				110140,
				89840,
				110460,
				89720,
				110398,
				89980,
				128506,
				119520,
				125304,
				128190,
				107712,
				119408,
				125244,
				107616,
				119352,
				84032,
				107568,
				119324,
				84e3,
				107544,
				83984,
				108256,
				119672,
				125374,
				85184,
				108144,
				119612,
				85088,
				108088,
				119582,
				85040,
				108060,
				85728,
				108408,
				119742,
				85616,
				108348,
				85560,
				108318,
				85880,
				108478,
				85820,
				85790,
				107200,
				119152,
				125116,
				107104,
				119096,
				125086,
				83008,
				107056,
				119068,
				82976,
				107032,
				82960,
				82952,
				83648,
				107376,
				119228,
				83552,
				107320,
				119198,
				83504,
				107292,
				83480,
				83468,
				83824,
				107452,
				83768,
				107422,
				83740,
				83900,
				106848,
				118968,
				125022,
				82496,
				106800,
				118940,
				82464,
				106776,
				118926,
				82448,
				106764,
				82440,
				106758,
				82784,
				106936,
				119006,
				82736,
				106908,
				82712,
				106894,
				82700,
				82694,
				106974,
				82830,
				82240,
				106672,
				118876,
				82208,
				106648,
				118862,
				82192,
				106636,
				82184,
				106630,
				82180,
				82352,
				82328,
				82316,
				82080,
				118830,
				106572,
				106566,
				82050,
				117472,
				124280,
				127678,
				103616,
				117360,
				124220,
				103520,
				117304,
				124190,
				75840,
				103472,
				75808,
				104160,
				117624,
				124350,
				76992,
				104048,
				117564,
				76896,
				103992,
				76848,
				76824,
				77536,
				104312,
				117694,
				77424,
				104252,
				77368,
				77340,
				77688,
				104382,
				77628,
				77758,
				121536,
				126320,
				128700,
				121440,
				126264,
				128670,
				111680,
				121392,
				126236,
				111648,
				121368,
				126222,
				111632,
				121356,
				103104,
				117104,
				124092,
				112320,
				103008,
				117048,
				124062,
				112224,
				121656,
				126366,
				93248,
				74784,
				102936,
				117006,
				93216,
				112152,
				93200,
				75456,
				103280,
				117180,
				93888,
				75360,
				103224,
				117150,
				93792,
				112440,
				121758,
				93744,
				75288,
				93720,
				75632,
				103356,
				94064,
				75576,
				103326,
				94008,
				112542,
				93980,
				75708,
				94140,
				75678,
				94110,
				121184,
				126136,
				128606,
				111168,
				121136,
				126108,
				111136,
				121112,
				126094,
				111120,
				121100,
				111112,
				111108,
				102752,
				116920,
				123998,
				111456,
				102704,
				116892,
				91712,
				74272,
				121244,
				116878,
				91680,
				74256,
				102668,
				91664,
				111372,
				102662,
				74244,
				74592,
				102840,
				116958,
				92e3,
				74544,
				102812,
				91952,
				111516,
				102798,
				91928,
				74508,
				74502,
				74680,
				102878,
				92088,
				74652,
				92060,
				74638,
				92046,
				92126,
				110912,
				121008,
				126044,
				110880,
				120984,
				126030,
				110864,
				120972,
				110856,
				120966,
				110852,
				110850,
				74048,
				102576,
				116828,
				90944,
				74016,
				102552,
				116814,
				90912,
				111e3,
				121038,
				90896,
				73992,
				102534,
				90888,
				110982,
				90884,
				74160,
				102620,
				91056,
				74136,
				102606,
				91032,
				111054,
				91020,
				74118,
				91014,
				91100,
				91086,
				110752,
				120920,
				125998,
				110736,
				120908,
				110728,
				120902,
				110724,
				110722,
				73888,
				102488,
				116782,
				90528,
				73872,
				102476,
				90512,
				110796,
				102470,
				90504,
				73860,
				90500,
				73858,
				73944,
				90584,
				90572,
				90566,
				120876,
				120870,
				110658,
				102444,
				73800,
				90312,
				90308,
				90306,
				101056,
				116080,
				123580,
				100960,
				116024,
				70720,
				100912,
				115996,
				70688,
				100888,
				70672,
				70664,
				71360,
				101232,
				116156,
				71264,
				101176,
				116126,
				71216,
				101148,
				71192,
				71180,
				71536,
				101308,
				71480,
				101278,
				71452,
				71612,
				71582,
				118112,
				124600,
				127838,
				105024,
				118064,
				124572,
				104992,
				118040,
				124558,
				104976,
				118028,
				104968,
				118022,
				100704,
				115896,
				123486,
				105312,
				100656,
				115868,
				79424,
				70176,
				118172,
				115854,
				79392,
				105240,
				100620,
				79376,
				70152,
				79368,
				70496,
				100792,
				115934,
				79712,
				70448,
				118238,
				79664,
				105372,
				100750,
				79640,
				70412,
				79628,
				70584,
				100830,
				79800,
				70556,
				79772,
				70542,
				70622,
				79838,
				122176,
				126640,
				128860,
				122144,
				126616,
				128846,
				122128,
				126604,
				122120,
				126598,
				122116,
				104768,
				117936,
				124508,
				113472,
				104736,
				126684,
				124494,
				113440,
				122264,
				126670,
				113424,
				104712,
				117894,
				113416,
				122246,
				104706,
				69952,
				100528,
				115804,
				78656,
				69920,
				100504,
				115790,
				96064,
				78624,
				104856,
				117966,
				96032,
				113560,
				122318,
				100486,
				96016,
				78600,
				104838,
				96008,
				69890,
				70064,
				100572,
				78768,
				70040,
				100558,
				96176,
				78744,
				104910,
				96152,
				113614,
				70022,
				78726,
				70108,
				78812,
				70094,
				96220,
				78798,
				122016,
				126552,
				128814,
				122e3,
				126540,
				121992,
				126534,
				121988,
				121986,
				104608,
				117848,
				124462,
				113056,
				104592,
				126574,
				113040,
				122060,
				117830,
				113032,
				104580,
				113028,
				104578,
				113026,
				69792,
				100440,
				115758,
				78240,
				69776,
				100428,
				95136,
				78224,
				104652,
				100422,
				95120,
				113100,
				69764,
				95112,
				78212,
				69762,
				78210,
				69848,
				100462,
				78296,
				69836,
				95192,
				78284,
				69830,
				95180,
				78278,
				69870,
				95214,
				121936,
				126508,
				121928,
				126502,
				121924,
				121922,
				104528,
				117804,
				112848,
				104520,
				117798,
				112840,
				121958,
				112836,
				104514,
				112834,
				69712,
				100396,
				78032,
				69704,
				100390,
				94672,
				78024,
				104550,
				94664,
				112870,
				69698,
				94660,
				78018,
				94658,
				78060,
				94700,
				94694,
				126486,
				121890,
				117782,
				104484,
				104482,
				69672,
				77928,
				94440,
				69666,
				77922,
				99680,
				68160,
				99632,
				68128,
				99608,
				115342,
				68112,
				99596,
				68104,
				99590,
				68448,
				99768,
				115422,
				68400,
				99740,
				68376,
				99726,
				68364,
				68358,
				68536,
				99806,
				68508,
				68494,
				68574,
				101696,
				116400,
				123740,
				101664,
				116376,
				101648,
				116364,
				101640,
				116358,
				101636,
				67904,
				99504,
				115292,
				72512,
				67872,
				116444,
				115278,
				72480,
				101784,
				116430,
				72464,
				67848,
				99462,
				72456,
				101766,
				67842,
				68016,
				99548,
				72624,
				67992,
				99534,
				72600,
				101838,
				72588,
				67974,
				68060,
				72668,
				68046,
				72654,
				118432,
				124760,
				127918,
				118416,
				124748,
				118408,
				124742,
				118404,
				118402,
				101536,
				116312,
				105888,
				101520,
				116300,
				105872,
				118476,
				116294,
				105864,
				101508,
				105860,
				101506,
				105858,
				67744,
				99416,
				72096,
				67728,
				116334,
				80800,
				72080,
				101580,
				99398,
				80784,
				105932,
				67716,
				80776,
				72068,
				67714,
				72066,
				67800,
				99438,
				72152,
				67788,
				80856,
				72140,
				67782,
				80844,
				72134,
				67822,
				72174,
				80878,
				126800,
				128940,
				126792,
				128934,
				126788,
				126786,
				118352,
				124716,
				122576,
				126828,
				124710,
				122568,
				126822,
				122564,
				118338,
				122562,
				101456,
				116268,
				105680,
				101448,
				116262,
				114128,
				105672,
				118374,
				114120,
				122598,
				101442,
				114116,
				105666,
				114114,
				67664,
				99372,
				71888,
				67656,
				99366,
				80336,
				71880,
				101478,
				97232,
				80328,
				105702,
				67650,
				97224,
				114150,
				71874,
				97220,
				67692,
				71916,
				67686,
				80364,
				71910,
				97260,
				80358,
				97254,
				126760,
				128918,
				126756,
				126754,
				118312,
				124694,
				122472,
				126774,
				122468,
				118306,
				122466,
				101416,
				116246,
				105576,
				101412,
				113896,
				105572,
				101410,
				113892,
				105570,
				113890,
				67624,
				99350,
				71784,
				101430,
				80104,
				71780,
				67618,
				96744,
				80100,
				71778,
				96740,
				80098,
				96738,
				71798,
				96758,
				126738,
				122420,
				122418,
				105524,
				113780,
				113778,
				71732,
				79988,
				96500,
				96498,
				66880,
				66848,
				98968,
				66832,
				66824,
				66820,
				66992,
				66968,
				66956,
				66950,
				67036,
				67022,
				1e5,
				99984,
				115532,
				99976,
				115526,
				99972,
				99970,
				66720,
				98904,
				69024,
				100056,
				98892,
				69008,
				100044,
				69e3,
				100038,
				68996,
				66690,
				68994,
				66776,
				98926,
				69080,
				100078,
				69068,
				66758,
				69062,
				66798,
				69102,
				116560,
				116552,
				116548,
				116546,
				99920,
				102096,
				116588,
				115494,
				102088,
				116582,
				102084,
				99906,
				102082,
				66640,
				68816,
				66632,
				98854,
				73168,
				68808,
				66628,
				73160,
				68804,
				66626,
				73156,
				68802,
				66668,
				68844,
				66662,
				73196,
				68838,
				73190,
				124840,
				124836,
				124834,
				116520,
				118632,
				124854,
				118628,
				116514,
				118626,
				99880,
				115478,
				101992,
				116534,
				106216,
				101988,
				99874,
				106212,
				101986,
				106210,
				66600,
				98838,
				68712,
				99894,
				72936,
				68708,
				66594,
				81384,
				72932,
				68706,
				81380,
				72930,
				66614,
				68726,
				72950,
				81398,
				128980,
				128978,
				124820,
				126900,
				124818,
				126898,
				116500,
				118580,
				116498,
				122740,
				118578,
				122738,
				99860,
				101940,
				99858,
				106100,
				101938,
				114420
			]),
			K([
				128352,
				129720,
				125504,
				128304,
				129692,
				125472,
				128280,
				129678,
				125456,
				128268,
				125448,
				128262,
				125444,
				125792,
				128440,
				129758,
				120384,
				125744,
				128412,
				120352,
				125720,
				128398,
				120336,
				125708,
				120328,
				125702,
				120324,
				120672,
				125880,
				128478,
				110144,
				120624,
				125852,
				110112,
				120600,
				125838,
				110096,
				120588,
				110088,
				120582,
				110084,
				110432,
				120760,
				125918,
				89664,
				110384,
				120732,
				89632,
				110360,
				120718,
				89616,
				110348,
				89608,
				110342,
				89952,
				110520,
				120798,
				89904,
				110492,
				89880,
				110478,
				89868,
				90040,
				110558,
				90012,
				89998,
				125248,
				128176,
				129628,
				125216,
				128152,
				129614,
				125200,
				128140,
				125192,
				128134,
				125188,
				125186,
				119616,
				125360,
				128220,
				119584,
				125336,
				128206,
				119568,
				125324,
				119560,
				125318,
				119556,
				119554,
				108352,
				119728,
				125404,
				108320,
				119704,
				125390,
				108304,
				119692,
				108296,
				119686,
				108292,
				108290,
				85824,
				108464,
				119772,
				85792,
				108440,
				119758,
				85776,
				108428,
				85768,
				108422,
				85764,
				85936,
				108508,
				85912,
				108494,
				85900,
				85894,
				85980,
				85966,
				125088,
				128088,
				129582,
				125072,
				128076,
				125064,
				128070,
				125060,
				125058,
				119200,
				125144,
				128110,
				119184,
				125132,
				119176,
				125126,
				119172,
				119170,
				107424,
				119256,
				125166,
				107408,
				119244,
				107400,
				119238,
				107396,
				107394,
				83872,
				107480,
				119278,
				83856,
				107468,
				83848,
				107462,
				83844,
				83842,
				83928,
				107502,
				83916,
				83910,
				83950,
				125008,
				128044,
				125e3,
				128038,
				124996,
				124994,
				118992,
				125036,
				118984,
				125030,
				118980,
				118978,
				106960,
				119020,
				106952,
				119014,
				106948,
				106946,
				82896,
				106988,
				82888,
				106982,
				82884,
				82882,
				82924,
				82918,
				124968,
				128022,
				124964,
				124962,
				118888,
				124982,
				118884,
				118882,
				106728,
				118902,
				106724,
				106722,
				82408,
				106742,
				82404,
				82402,
				124948,
				124946,
				118836,
				118834,
				106612,
				106610,
				124224,
				127664,
				129372,
				124192,
				127640,
				129358,
				124176,
				127628,
				124168,
				127622,
				124164,
				124162,
				117568,
				124336,
				127708,
				117536,
				124312,
				127694,
				117520,
				124300,
				117512,
				124294,
				117508,
				117506,
				104256,
				117680,
				124380,
				104224,
				117656,
				124366,
				104208,
				117644,
				104200,
				117638,
				104196,
				104194,
				77632,
				104368,
				117724,
				77600,
				104344,
				117710,
				77584,
				104332,
				77576,
				104326,
				77572,
				77744,
				104412,
				77720,
				104398,
				77708,
				77702,
				77788,
				77774,
				128672,
				129880,
				93168,
				128656,
				129868,
				92664,
				128648,
				129862,
				92412,
				128644,
				128642,
				124064,
				127576,
				129326,
				126368,
				124048,
				129902,
				126352,
				128716,
				127558,
				126344,
				124036,
				126340,
				124034,
				126338,
				117152,
				124120,
				127598,
				121760,
				117136,
				124108,
				121744,
				126412,
				124102,
				121736,
				117124,
				121732,
				117122,
				121730,
				103328,
				117208,
				124142,
				112544,
				103312,
				117196,
				112528,
				121804,
				117190,
				112520,
				103300,
				112516,
				103298,
				112514,
				75680,
				103384,
				117230,
				94112,
				75664,
				103372,
				94096,
				112588,
				103366,
				94088,
				75652,
				94084,
				75650,
				75736,
				103406,
				94168,
				75724,
				94156,
				75718,
				94150,
				75758,
				128592,
				129836,
				91640,
				128584,
				129830,
				91388,
				128580,
				91262,
				128578,
				123984,
				127532,
				126160,
				123976,
				127526,
				126152,
				128614,
				126148,
				123970,
				126146,
				116944,
				124012,
				121296,
				116936,
				124006,
				121288,
				126182,
				121284,
				116930,
				121282,
				102864,
				116972,
				111568,
				102856,
				116966,
				111560,
				121318,
				111556,
				102850,
				111554,
				74704,
				102892,
				92112,
				74696,
				102886,
				92104,
				111590,
				92100,
				74690,
				92098,
				74732,
				92140,
				74726,
				92134,
				128552,
				129814,
				90876,
				128548,
				90750,
				128546,
				123944,
				127510,
				126056,
				128566,
				126052,
				123938,
				126050,
				116840,
				123958,
				121064,
				116836,
				121060,
				116834,
				121058,
				102632,
				116854,
				111080,
				121078,
				111076,
				102626,
				111074,
				74216,
				102646,
				91112,
				74212,
				91108,
				74210,
				91106,
				74230,
				91126,
				128532,
				90494,
				128530,
				123924,
				126004,
				123922,
				126002,
				116788,
				120948,
				116786,
				120946,
				102516,
				110836,
				102514,
				110834,
				73972,
				90612,
				73970,
				90610,
				128522,
				123914,
				125978,
				116762,
				120890,
				102458,
				110714,
				123552,
				127320,
				129198,
				123536,
				127308,
				123528,
				127302,
				123524,
				123522,
				116128,
				123608,
				127342,
				116112,
				123596,
				116104,
				123590,
				116100,
				116098,
				101280,
				116184,
				123630,
				101264,
				116172,
				101256,
				116166,
				101252,
				101250,
				71584,
				101336,
				116206,
				71568,
				101324,
				71560,
				101318,
				71556,
				71554,
				71640,
				101358,
				71628,
				71622,
				71662,
				127824,
				129452,
				79352,
				127816,
				129446,
				79100,
				127812,
				78974,
				127810,
				123472,
				127276,
				124624,
				123464,
				127270,
				124616,
				127846,
				124612,
				123458,
				124610,
				115920,
				123500,
				118224,
				115912,
				123494,
				118216,
				124646,
				118212,
				115906,
				118210,
				100816,
				115948,
				105424,
				100808,
				115942,
				105416,
				118246,
				105412,
				100802,
				105410,
				70608,
				100844,
				79824,
				70600,
				100838,
				79816,
				105446,
				79812,
				70594,
				79810,
				70636,
				79852,
				70630,
				79846,
				129960,
				95728,
				113404,
				129956,
				95480,
				113278,
				129954,
				95356,
				95294,
				127784,
				129430,
				78588,
				128872,
				129974,
				95996,
				78462,
				128868,
				127778,
				95870,
				128866,
				123432,
				127254,
				124520,
				123428,
				126696,
				128886,
				123426,
				126692,
				124514,
				126690,
				115816,
				123446,
				117992,
				115812,
				122344,
				117988,
				115810,
				122340,
				117986,
				122338,
				100584,
				115830,
				104936,
				100580,
				113640,
				104932,
				100578,
				113636,
				104930,
				113634,
				70120,
				100598,
				78824,
				70116,
				96232,
				78820,
				70114,
				96228,
				78818,
				96226,
				70134,
				78838,
				129940,
				94968,
				113022,
				129938,
				94844,
				94782,
				127764,
				78206,
				128820,
				127762,
				95102,
				128818,
				123412,
				124468,
				123410,
				126580,
				124466,
				126578,
				115764,
				117876,
				115762,
				122100,
				117874,
				122098,
				100468,
				104692,
				100466,
				113140,
				104690,
				113138,
				69876,
				78324,
				69874,
				95220,
				78322,
				95218,
				129930,
				94588,
				94526,
				127754,
				128794,
				123402,
				124442,
				126522,
				115738,
				117818,
				121978,
				100410,
				104570,
				112890,
				69754,
				78074,
				94714,
				94398,
				123216,
				127148,
				123208,
				127142,
				123204,
				123202,
				115408,
				123244,
				115400,
				123238,
				115396,
				115394,
				99792,
				115436,
				99784,
				115430,
				99780,
				99778,
				68560,
				99820,
				68552,
				99814,
				68548,
				68546,
				68588,
				68582,
				127400,
				129238,
				72444,
				127396,
				72318,
				127394,
				123176,
				127126,
				123752,
				123172,
				123748,
				123170,
				123746,
				115304,
				123190,
				116456,
				115300,
				116452,
				115298,
				116450,
				99560,
				115318,
				101864,
				99556,
				101860,
				99554,
				101858,
				68072,
				99574,
				72680,
				68068,
				72676,
				68066,
				72674,
				68086,
				72694,
				129492,
				80632,
				105854,
				129490,
				80508,
				80446,
				127380,
				72062,
				127924,
				127378,
				80766,
				127922,
				123156,
				123700,
				123154,
				124788,
				123698,
				124786,
				115252,
				116340,
				115250,
				118516,
				116338,
				118514,
				99444,
				101620,
				99442,
				105972,
				101618,
				105970,
				67828,
				72180,
				67826,
				80884,
				72178,
				80882,
				97008,
				114044,
				96888,
				113982,
				96828,
				96798,
				129482,
				80252,
				130010,
				97148,
				80190,
				97086,
				127370,
				127898,
				128954,
				123146,
				123674,
				124730,
				126842,
				115226,
				116282,
				118394,
				122618,
				99386,
				101498,
				105722,
				114170,
				67706,
				71930,
				80378,
				96632,
				113854,
				96572,
				96542,
				80062,
				96702,
				96444,
				96414,
				96350,
				123048,
				123044,
				123042,
				115048,
				123062,
				115044,
				115042,
				99048,
				115062,
				99044,
				99042,
				67048,
				99062,
				67044,
				67042,
				67062,
				127188,
				68990,
				127186,
				123028,
				123316,
				123026,
				123314,
				114996,
				115572,
				114994,
				115570,
				98932,
				100084,
				98930,
				100082,
				66804,
				69108,
				66802,
				69106,
				129258,
				73084,
				73022,
				127178,
				127450,
				123018,
				123290,
				123834,
				114970,
				115514,
				116602,
				98874,
				99962,
				102138,
				66682,
				68858,
				73210,
				81272,
				106174,
				81212,
				81182,
				72894,
				81342,
				97648,
				114364,
				97592,
				114334,
				97564,
				97550,
				81084,
				97724,
				81054,
				97694,
				97464,
				114270,
				97436,
				97422,
				80990,
				97502,
				97372,
				97358,
				97326,
				114868,
				114866,
				98676,
				98674,
				66292,
				66290,
				123098,
				114842,
				115130,
				98618,
				99194,
				66170,
				67322,
				69310,
				73404,
				73374,
				81592,
				106334,
				81564,
				81550,
				73310,
				81630,
				97968,
				114524,
				97944,
				114510,
				97932,
				97926,
				81500,
				98012,
				81486,
				97998,
				97880,
				114478,
				97868,
				97862,
				81454,
				97902,
				97836,
				97830,
				69470,
				73564,
				73550,
				81752,
				106414,
				81740,
				81734,
				73518,
				81774,
				81708,
				81702
			]),
			K([
				109536,
				120312,
				86976,
				109040,
				120060,
				86496,
				108792,
				119934,
				86256,
				108668,
				86136,
				129744,
				89056,
				110072,
				129736,
				88560,
				109820,
				129732,
				88312,
				109694,
				129730,
				88188,
				128464,
				129772,
				89592,
				128456,
				129766,
				89340,
				128452,
				89214,
				128450,
				125904,
				128492,
				125896,
				128486,
				125892,
				125890,
				120784,
				125932,
				120776,
				125926,
				120772,
				120770,
				110544,
				120812,
				110536,
				120806,
				110532,
				84928,
				108016,
				119548,
				84448,
				107768,
				119422,
				84208,
				107644,
				84088,
				107582,
				84028,
				129640,
				85488,
				108284,
				129636,
				85240,
				108158,
				129634,
				85116,
				85054,
				128232,
				129654,
				85756,
				128228,
				85630,
				128226,
				125416,
				128246,
				125412,
				125410,
				119784,
				125430,
				119780,
				119778,
				108520,
				119798,
				108516,
				108514,
				83424,
				107256,
				119166,
				83184,
				107132,
				83064,
				107070,
				83004,
				82974,
				129588,
				83704,
				107390,
				129586,
				83580,
				83518,
				128116,
				83838,
				128114,
				125172,
				125170,
				119284,
				119282,
				107508,
				107506,
				82672,
				106876,
				82552,
				106814,
				82492,
				82462,
				129562,
				82812,
				82750,
				128058,
				125050,
				119034,
				82296,
				106686,
				82236,
				82206,
				82366,
				82108,
				82078,
				76736,
				103920,
				117500,
				76256,
				103672,
				117374,
				76016,
				103548,
				75896,
				103486,
				75836,
				129384,
				77296,
				104188,
				129380,
				77048,
				104062,
				129378,
				76924,
				76862,
				127720,
				129398,
				77564,
				127716,
				77438,
				127714,
				124392,
				127734,
				124388,
				124386,
				117736,
				124406,
				117732,
				117730,
				104424,
				117750,
				104420,
				104418,
				112096,
				121592,
				126334,
				92608,
				111856,
				121468,
				92384,
				111736,
				121406,
				92272,
				111676,
				92216,
				111646,
				92188,
				75232,
				103160,
				117118,
				93664,
				74992,
				103036,
				93424,
				112252,
				102974,
				93304,
				74812,
				93244,
				74782,
				93214,
				129332,
				75512,
				103294,
				129908,
				129330,
				93944,
				75388,
				129906,
				93820,
				75326,
				93758,
				127604,
				75646,
				128756,
				127602,
				94078,
				128754,
				124148,
				126452,
				124146,
				126450,
				117236,
				121844,
				117234,
				121842,
				103412,
				103410,
				91584,
				111344,
				121212,
				91360,
				111224,
				121150,
				91248,
				111164,
				91192,
				111134,
				91164,
				91150,
				74480,
				102780,
				91888,
				74360,
				102718,
				91768,
				111422,
				91708,
				74270,
				91678,
				129306,
				74620,
				129850,
				92028,
				74558,
				91966,
				127546,
				128634,
				124026,
				126202,
				116986,
				121338,
				102906,
				90848,
				110968,
				121022,
				90736,
				110908,
				90680,
				110878,
				90652,
				90638,
				74104,
				102590,
				91e3,
				74044,
				90940,
				74014,
				90910,
				74174,
				91070,
				90480,
				110780,
				90424,
				110750,
				90396,
				90382,
				73916,
				90556,
				73886,
				90526,
				90296,
				110686,
				90268,
				90254,
				73822,
				90334,
				90204,
				90190,
				71136,
				101112,
				116094,
				70896,
				100988,
				70776,
				100926,
				70716,
				70686,
				129204,
				71416,
				101246,
				129202,
				71292,
				71230,
				127348,
				71550,
				127346,
				123636,
				123634,
				116212,
				116210,
				101364,
				101362,
				79296,
				105200,
				118140,
				79072,
				105080,
				118078,
				78960,
				105020,
				78904,
				104990,
				78876,
				78862,
				70384,
				100732,
				79600,
				70264,
				100670,
				79480,
				105278,
				79420,
				70174,
				79390,
				129178,
				70524,
				129466,
				79740,
				70462,
				79678,
				127290,
				127866,
				123514,
				124666,
				115962,
				118266,
				100858,
				113376,
				122232,
				126654,
				95424,
				113264,
				122172,
				95328,
				113208,
				122142,
				95280,
				113180,
				95256,
				113166,
				95244,
				78560,
				104824,
				117950,
				95968,
				78448,
				104764,
				95856,
				113468,
				104734,
				95800,
				78364,
				95772,
				78350,
				95758,
				70008,
				100542,
				78712,
				69948,
				96120,
				78652,
				69918,
				96060,
				78622,
				96030,
				70078,
				78782,
				96190,
				94912,
				113008,
				122044,
				94816,
				112952,
				122014,
				94768,
				112924,
				94744,
				112910,
				94732,
				94726,
				78192,
				104636,
				95088,
				78136,
				104606,
				95032,
				113054,
				95004,
				78094,
				94990,
				69820,
				78268,
				69790,
				95164,
				78238,
				95134,
				94560,
				112824,
				121950,
				94512,
				112796,
				94488,
				112782,
				94476,
				94470,
				78008,
				104542,
				94648,
				77980,
				94620,
				77966,
				94606,
				69726,
				78046,
				94686,
				94384,
				112732,
				94360,
				112718,
				94348,
				94342,
				77916,
				94428,
				77902,
				94414,
				94296,
				112686,
				94284,
				94278,
				77870,
				94318,
				94252,
				94246,
				68336,
				99708,
				68216,
				99646,
				68156,
				68126,
				68476,
				68414,
				127162,
				123258,
				115450,
				99834,
				72416,
				101752,
				116414,
				72304,
				101692,
				72248,
				101662,
				72220,
				72206,
				67960,
				99518,
				72568,
				67900,
				72508,
				67870,
				72478,
				68030,
				72638,
				80576,
				105840,
				118460,
				80480,
				105784,
				118430,
				80432,
				105756,
				80408,
				105742,
				80396,
				80390,
				72048,
				101564,
				80752,
				71992,
				101534,
				80696,
				71964,
				80668,
				71950,
				80654,
				67772,
				72124,
				67742,
				80828,
				72094,
				80798,
				114016,
				122552,
				126814,
				96832,
				113968,
				122524,
				96800,
				113944,
				122510,
				96784,
				113932,
				96776,
				113926,
				96772,
				80224,
				105656,
				118366,
				97120,
				80176,
				105628,
				97072,
				114076,
				105614,
				97048,
				80140,
				97036,
				80134,
				97030,
				71864,
				101470,
				80312,
				71836,
				97208,
				80284,
				71822,
				97180,
				80270,
				97166,
				67678,
				71902,
				80350,
				97246,
				96576,
				113840,
				122460,
				96544,
				113816,
				122446,
				96528,
				113804,
				96520,
				113798,
				96516,
				96514,
				80048,
				105564,
				96688,
				80024,
				105550,
				96664,
				113870,
				96652,
				80006,
				96646,
				71772,
				80092,
				71758,
				96732,
				80078,
				96718,
				96416,
				113752,
				122414,
				96400,
				113740,
				96392,
				113734,
				96388,
				96386,
				79960,
				105518,
				96472,
				79948,
				96460,
				79942,
				96454,
				71726,
				79982,
				96494,
				96336,
				113708,
				96328,
				113702,
				96324,
				96322,
				79916,
				96364,
				79910,
				96358,
				96296,
				113686,
				96292,
				96290,
				79894,
				96310,
				66936,
				99006,
				66876,
				66846,
				67006,
				68976,
				100028,
				68920,
				99998,
				68892,
				68878,
				66748,
				69052,
				66718,
				69022,
				73056,
				102072,
				116574,
				73008,
				102044,
				72984,
				102030,
				72972,
				72966,
				68792,
				99934,
				73144,
				68764,
				73116,
				68750,
				73102,
				66654,
				68830,
				73182,
				81216,
				106160,
				118620,
				81184,
				106136,
				118606,
				81168,
				106124,
				81160,
				106118,
				81156,
				81154,
				72880,
				101980,
				81328,
				72856,
				101966,
				81304,
				106190,
				81292,
				72838,
				81286,
				68700,
				72924,
				68686,
				81372,
				72910,
				81358,
				114336,
				122712,
				126894,
				114320,
				122700,
				114312,
				122694,
				114308,
				114306,
				81056,
				106072,
				118574,
				97696,
				81040,
				106060,
				97680,
				114380,
				106054,
				97672,
				81028,
				97668,
				81026,
				97666,
				72792,
				101934,
				81112,
				72780,
				97752,
				81100,
				72774,
				97740,
				81094,
				97734,
				68654,
				72814,
				81134,
				97774,
				114256,
				122668,
				114248,
				122662,
				114244,
				114242,
				80976,
				106028,
				97488,
				80968,
				106022,
				97480,
				114278,
				97476,
				80962,
				97474,
				72748,
				81004,
				72742,
				97516,
				80998,
				97510,
				114216,
				122646,
				114212,
				114210,
				80936,
				106006,
				97384,
				80932,
				97380,
				80930,
				97378,
				72726,
				80950,
				97398,
				114196,
				114194,
				80916,
				97332,
				80914,
				97330,
				66236,
				66206,
				67256,
				99166,
				67228,
				67214,
				66142,
				67294,
				69296,
				100188,
				69272,
				100174,
				69260,
				69254,
				67164,
				69340,
				67150,
				69326,
				73376,
				102232,
				116654,
				73360,
				102220,
				73352,
				102214,
				73348,
				73346,
				69208,
				100142,
				73432,
				102254,
				73420,
				69190,
				73414,
				67118,
				69230,
				73454,
				106320,
				118700,
				106312,
				118694,
				106308,
				106306,
				73296,
				102188,
				81616,
				106348,
				102182,
				81608,
				73284,
				81604,
				73282,
				81602,
				69164,
				73324,
				69158,
				81644,
				73318,
				81638,
				122792,
				126934,
				122788,
				122786,
				106280,
				118678,
				114536,
				106276,
				114532,
				106274,
				114530,
				73256,
				102166,
				81512,
				73252,
				98024,
				81508,
				73250,
				98020,
				81506,
				98018,
				69142,
				73270,
				81526,
				98038,
				122772,
				122770,
				106260,
				114484,
				106258,
				114482,
				73236,
				81460,
				73234,
				97908,
				81458,
				97906,
				122762,
				106250,
				114458,
				73226,
				81434,
				97850,
				66396,
				66382,
				67416,
				99246,
				67404,
				67398,
				66350,
				67438,
				69456,
				100268,
				69448,
				100262,
				69444,
				69442,
				67372,
				69484,
				67366,
				69478,
				102312,
				116694,
				102308,
				102306,
				69416,
				100246,
				73576,
				102326,
				73572,
				69410,
				73570,
				67350,
				69430,
				73590,
				118740,
				118738,
				102292,
				106420,
				102290,
				106418,
				69396,
				73524,
				69394,
				81780,
				73522,
				81778,
				118730,
				102282,
				106394,
				69386,
				73498,
				81722,
				66476,
				66470,
				67496,
				99286,
				67492,
				67490,
				66454,
				67510,
				100308,
				100306,
				67476,
				69556,
				67474,
				69554,
				116714
			])
		]), G.pdf417_rsprod = function() {
			var e = W[U - 1], t = W[U - 2];
			if (e != 0 && t != 0) {
				var n = W[--U], r = q(G.rslog, n), i = W[--U];
				W[U++] = q(G.rsalog, Q(r + q(G.rslog, i)) % 928);
			} else U -= 2, W[U++] = 0;
		}, G.pdf417_gencoeffs = function() {
			W[U++] = Infinity, W[U++] = 1;
			for (var e = 0, t = G.k; e < t; e++) W[U++] = 0;
			G.coeffs = K();
			for (var n = 1, r = G.k; n <= r; n += 1) {
				var i = G.coeffs;
				J(i, n, q(i, n - 1)), W[U++] = q(G.rsalog, n);
				for (var a = n - 1; a >= 1; --a) {
					var o = G.coeffs, s = q(o, a), c = W[U - 1];
					W[U++] = o, W[U++] = a, W[U++] = s, W[U++] = c, G.pdf417_rsprod();
					var l = W[--U], u = W[--U], d = q(G.coeffs, u - 1), f = W[--U];
					J(f, u, Q(l + d) % 929);
				}
				var p = G.coeffs, m = q(p, 0), h = W[U - 1];
				W[U++] = p, W[U++] = 0, W[U++] = m, W[U++] = h, G.pdf417_rsprod();
				var g = W[--U], _ = W[--U], v = W[--U];
				J(v, _, g), U--;
			}
			G.coeffs = Y(G.coeffs, 0, G.k);
			for (var y = G.k - 1; y >= 0; y -= 2) {
				var b = G.coeffs;
				J(b, y, 929 - q(b, y));
			}
			W[U++] = G.coeffs;
		}, G.pdf417_coeffscachemax = 9, G.pdf417_coeffscachelimit = 1022, W[U++] = G.pdf417_coeffscachemax, W[U++] = G.pdf417_coeffscachelimit, Xt();
		var n = W[--U];
		G.pdf417_coeffscache = n, G.pdf417_coeffscachefetch = function() {
			var e = W[--U];
			G.k = e;
			var t = q(G.pdf417_coeffscache, "fetch");
			if (W[U++] = G.k, W[U++] = function() {
				G.pdf417_gencoeffs();
			}, W[U++] = function() {
				var e = W[--U];
				W[U++] = e.length;
			}, t() === !0) return !0;
		}, G.charvals = K([
			/* @__PURE__ */ new Map(),
			/* @__PURE__ */ new Map(),
			/* @__PURE__ */ new Map(),
			/* @__PURE__ */ new Map()
		]), G.alltext = /* @__PURE__ */ new Map();
		for (var r = 0, i = G.pdf417_charmaps.length - 1; r <= i; r += 1) {
			G.i = r, G.encs = q(G.pdf417_charmaps, G.i);
			for (var a = 0; a <= 3; a += 1) {
				G.j = a;
				var o = q(G.encs, G.j);
				Ht(Lt(o), "stringtype") && (o = q(o, 0)), J(q(G.charvals, G.j), o, G.i), J(G.alltext, o, -1);
			}
		}
		G.charvals = G.charvals, G.alltext = G.alltext, W[U++] = Infinity, W[U++] = 1;
		for (var s = 0; s < 928; s++) {
			var c = W[U - 1];
			W[U++] = c * 3 % 929;
		}
		var l = K();
		G.rsalog = l, G.rslog = K(929);
		for (var u = 1; u <= 928; u += 1) J(G.rslog, q(G.rsalog, u), u);
		G.rslog = G.rslog, G = e;
	}
	var e = G;
	G = Object.assign({}, G, tn.globals), G.dontdraw = !1, G.compact = !1, G.eclevel = -1, G.fixedeclevel = !1, G.columns = 0, G.rows = 0, G.rowmult = 3, G.ccc = !1, G.raw = !1, G.parse = !1, G.parsefnc = !1, G.modunit = 1, W[U++] = null, Yt();
	var d = W[--U];
	G.options = d;
	var f = W[--U];
	if (G.barcode = f, G._render = !(G.dontdraw || G.bwipp_dontdraw), G.barcode.length == 0 && (W[U++] = "bwipp.pdf417emptyData#22781", W[U++] = "The data must not be empty", $()), G.barcode.length > 12500 && (W[U++] = "bwipp.pdf417inputTooLong#22785", W[U++] = "The input data is too long", $()), G.eclevel != -1 && (G.eclevel < 0 || G.eclevel > 8) && (W[U++] = "bwipp.pdf417invalidErrorCorrectionLevel#22789", W[U++] = "Valid error correction levels are 0 to 8", $()), G.ccc && G.raw && (W[U++] = "bwipp.pdf417cccAndRaw#22793", W[U++] = "Cannot combine ccc and raw", $()), G.ccc && G.compact && (W[U++] = "bwipp.pdf417cccAndCompact#22797", W[U++] = "Cannot combine ccc and compact", $()), G.rows != 0 && (G.rows < 3 || G.rows > 90) && (W[U++] = "bwipp.pdf417invalidRows#22801", W[U++] = "There must be between 3 and 90 rows", $()), G.columns != 0 && (G.columns < 1 || G.columns > 30) && (W[U++] = "bwipp.pdf417invalidColumns#22805", W[U++] = "There must be between 1 and 30 columns", $()), (G.rowmult <= 0 || G.rowmult > 50) && (W[U++] = "bwipp.pdf417badRowMult#22809", W[U++] = "The row multiplier must be greater than 0 and at most 50", $()), G.raw) {
		for (G.datcws = K(G.barcode.length), G.i = 0, G.j = 0; !(G.i >= G.barcode.length - 3 || q(G.barcode, G.i) != 94);) {
			var p = Y(G.barcode, G.i + 1, 3);
			W[U++] = p, W[U++] = !1;
			for (var m = 0, h = p.length; m < h; m++) {
				var g = q(p, m);
				(g < 48 || g > 57) && (W[U - 1] = !0);
			}
			if (W[--U]) {
				U--;
				break;
			}
			var _ = W[--U];
			G.cw = Mt(_), G.cw > 928 && (W[U++] = "bwipp.pdf417badRawCodeword#22828", W[U++] = "Raw codewords must be 0 to 928", $()), J(G.datcws, G.j, G.cw), G.i += 4, G.j += 1;
		}
		G.i != G.barcode.length && (W[U++] = "bwipp.pdf417badRawFormat#22835", W[U++] = "Raw codewords must be formatted as ^NNN", $()), G.datcws = Y(G.datcws, 0, G.j);
	}
	if (G.encb = function() {
		var e = W[--U];
		G.in = e, G.inlen = G.in.length, G.out = K(~~(G.inlen / 6) * 5 + G.inlen % 6);
		for (var t = 0, n = ~~(G.inlen / 6) - 1; t <= n; t += 1) {
			G.k = t, W[U++] = Infinity, Z(Y(G.in, G.k * 6, 3)), G.msbs = K(), W[U++] = Infinity, Z(G.msbs);
			var r = W[--U], i = W[--U], a = W[--U];
			W[U++] = Q(r + i * 256 + a * 65536);
			for (var o = 0; o < 3; o++) {
				var s = W[--U];
				W[U++] = s % 900, W[U++] = ~~(s / 900);
			}
			G.mscs = K(), W[U++] = Infinity, Z(Y(G.in, G.k * 6 + 3, 3)), G.lsbs = K(), W[U++] = Infinity, Z(G.lsbs);
			var c = W[--U], l = W[--U], u = W[--U];
			W[U++] = Q(c + l * 256 + u * 65536);
			for (var d = 0; d < 3; d++) {
				var f = W[--U];
				W[U++] = f % 900, W[U++] = ~~(f / 900);
			}
			G.lscs = K();
			var p = q(G.lscs, 0), m = q(G.mscs, 0);
			J(G.out, G.k * 5 + 4, Q(p + m * 316) % 900);
			var h = q(G.lscs, 1), g = q(G.mscs, 0), _ = q(G.mscs, 1);
			J(G.out, G.k * 5 + 3, Q(~~((p + m * 316) / 900) + h + g * 641 + _ * 316) % 900);
			var v = q(G.lscs, 2), y = q(G.mscs, 0), b = q(G.mscs, 1), x = q(G.mscs, 2);
			J(G.out, G.k * 5 + 2, Q(~~((~~((p + m * 316) / 900) + h + g * 641 + _ * 316) / 900) + v + y * 20 + b * 641 + x * 316) % 900);
			var S = q(G.lscs, 3), C = q(G.mscs, 1), w = q(G.mscs, 2);
			J(G.out, G.k * 5 + 1, Q(~~((~~((~~((p + m * 316) / 900) + h + g * 641 + _ * 316) / 900) + v + y * 20 + b * 641 + x * 316) / 900) + S + C * 20 + w * 641) % 900), J(G.out, G.k * 5, Q(~~((~~((~~((~~((p + m * 316) / 900) + h + g * 641 + _ * 316) / 900) + v + y * 20 + b * 641 + x * 316) / 900) + S + C * 20 + w * 641) / 900) + q(G.mscs, 2) * 20) % 900);
		}
		if (G.rem = G.inlen % 6, G.rem != 0) {
			var T = G.out, E = G.out.length - G.rem;
			W[U++] = Infinity, Z(Y(G.in, G.inlen - G.rem, G.rem)), X(T, E, K());
		}
		W[U++] = G.out;
	}, G.ccc) {
		G.barlen = G.barcode.length, G.datcws = K(~~(G.barlen / 6) * 5 + G.barlen % 6 + 2), J(G.datcws, 0, 920);
		var v = G.barlen % 6 == 0 ? 924 : 901;
		J(G.datcws, 1, v), W[U++] = G.datcws, W[U++] = 2, W[U++] = Infinity, zt(G.barcode);
		var y = K();
		W[U++] = y, G.encb();
		var b = W[--U], x = W[--U], S = W[--U];
		X(S, x, b);
	}
	if (!G.raw && !G.ccc) {
		G.fncvals = /* @__PURE__ */ new Map([
			["parse", G.parse],
			["parsefnc", G.parsefnc],
			["eci", !0]
		]), W[U++] = G.barcode, W[U++] = G.fncvals, Qt();
		var C = W[--U];
		G.msg = C, G.msglen = G.msg.length, G.msglen > 2713 && (W[U++] = "bwipp.pdf417inputTooLong#22902", W[U++] = "The input data is too long", $()), W[U++] = Infinity;
		for (var w = 0, T = G.msglen; w < T; w++) W[U++] = 0;
		W[U++] = 0, G.numdigits = K(), W[U++] = Infinity;
		for (var E = 0, D = G.msglen; E < D; E++) W[U++] = 0;
		W[U++] = 0, G.numtext = K(), W[U++] = Infinity;
		for (var O = 0, k = G.msglen; O < k; O++) W[U++] = 0;
		W[U++] = 0, G.numbytes = K(), W[U++] = Infinity;
		for (var A = 0, j = G.msglen; A < j; A++) W[U++] = 0;
		W[U++] = 0, G.iseci = K();
		for (var M = G.msglen - 1; M >= 0; --M) {
			G.i = M;
			var N = q(G.msg, G.i);
			N >= 48 && N <= 57 && J(G.numdigits, G.i, q(G.numdigits, G.i + 1) + 1), Pt(G.alltext, q(G.msg, G.i)) && q(G.numdigits, G.i) < 13 && J(G.numtext, G.i, q(G.numtext, G.i + 1) + 1), q(G.msg, G.i) >= 0 && q(G.numtext, G.i) < 5 && q(G.numdigits, G.i) < 13 && J(G.numbytes, G.i, q(G.numbytes, G.i + 1) + 1), J(G.iseci, G.i, q(G.msg, G.i) <= -1e6);
		}
		for (G.numdigits = Y(G.numdigits, 0, G.msglen), G.numtext = Y(G.numtext, 0, G.msglen), G.numbytes = Y(G.numbytes, 0, G.msglen), W[U++] = Infinity, G.seqlen = 0, G.state = G.pdf417_t, G.p = 0; G.p != G.msglen;) if (q(G.iseci, G.p)) {
			G.eci = q(G.msg, G.p);
			var P = K([G.eci]);
			G.p += 1, W[U++] = P;
			var ee = G.seqlen, te = G.eci <= -1810900 ? 2 : G.eci <= -1000900 ? 3 : 2;
			G.seqlen = Q(ee + te);
		} else if (G.n = q(G.numdigits, G.p), G.n >= 13 || G.n == G.msglen && G.n >= 8) {
			W[U++] = G.pdf417_nl, W[U++] = Infinity, Z(Y(G.msg, G.p, G.n));
			var F = K();
			G.state = G.pdf417_n, G.p = Q(G.p + G.n), G.seqlen = Q(G.seqlen + 1 + G.n), W[U++] = F;
		} else if (G.t = q(G.numtext, G.p), G.t >= 5) {
			G.state != G.pdf417_t && (W[U++] = G.pdf417_tl), W[U++] = Infinity, Z(Y(G.msg, G.p, G.t));
			var I = K();
			G.state = G.pdf417_t, G.p = Q(G.p + G.t), G.seqlen = Q(G.seqlen + 1 + G.t), W[U++] = I;
		} else if (G.b = q(G.numbytes, G.p), G.b == 1 && G.state == G.pdf417_t) {
			var ne = K([q(G.msg, G.p)]);
			G.p = Q(G.p + G.b), G.seqlen += 2, W[U++] = G.pdf417_bs, W[U++] = ne;
		} else {
			G.b % 6 == 0 ? W[U++] = G.pdf417_bl6 : W[U++] = G.pdf417_bl, W[U++] = Infinity, Z(Y(G.msg, G.p, G.b));
			var re = K();
			G.state = G.pdf417_b, G.p = Q(G.p + G.b), G.seqlen = Q(G.seqlen + 1 + G.b), W[U++] = re;
		}
		Vt(K(Bt()));
		var ie = W[--U];
		for (U--, G.seq = ie, G.enca = function() {
			var e = q(G.charvals, G.pdf417_a), t = W[--U];
			W[U++] = q(e, t);
		}, G.encl = function() {
			var e = q(G.charvals, G.pdf417_l), t = W[--U];
			W[U++] = q(e, t);
		}, G.encm = function() {
			var e = q(G.charvals, G.pdf417_m), t = W[--U];
			W[U++] = q(e, t);
		}, G.encp = function() {
			var e = q(G.charvals, G.pdf417_p), t = W[--U];
			W[U++] = q(e, t);
		}, G.textencfuncs = G.pdf417_textencfuncs, G.addtotext = function() {
			var e = W[--U];
			J(G.text, G.l, e), G.l += 1;
		}, G.enct = function() {
			var e = W[--U];
			G.in = e, G.maxseqlen = G.in.length * 3 + 4, W[U++] = Infinity;
			for (var t = 0; t < 4; t++) W[U++] = K(G.maxseqlen);
			G.seq0 = K(), W[U++] = Infinity;
			for (var n = 0; n < 4; n++) W[U++] = K(G.maxseqlen);
			G.seq1 = K(), G.len0 = K(4), J(G.len0, 0, 0), J(G.len0, 1, 0), J(G.len0, 2, 0), J(G.len0, 3, 0), G.len1 = K(4), G.curseq = G.seq0, G.curseqlen = G.len0, G.nxtseq = G.seq1, G.nxtseqlen = G.len1, G.curlen = K([
				G.pdf417_e,
				G.pdf417_e,
				G.pdf417_e,
				G.pdf417_e
			]), J(G.curlen, G.submode, 0), zt(G.in, function() {
				var e = W[--U];
				for (G.char = e;;) {
					G.imp = !1;
					for (var t = 0, n = G.pdf417_textsubmodes.length; t < n; t++) {
						G.x = q(G.pdf417_textsubmodes, t);
						for (var r = 0, i = G.pdf417_textsubmodes.length; r < i; r++) G.y = q(G.pdf417_textsubmodes, r), G.cost = Q(q(G.curlen, G.x) + q(q(G.pdf417_latlen, G.x), G.y)), G.cost < q(G.curlen, G.y) && (J(G.curlen, G.y, G.cost), G.srclen = q(G.curseqlen, G.x), G.srclen > 0 && X(q(G.curseq, G.y), 0, Y(q(G.curseq, G.x), 0, G.srclen)), zt(q(q(G.pdf417_latseq, G.x), G.y), function() {
							W[U++] = q(G.curseq, G.y), W[U++] = G.srclen;
							var e = W[U - 3], t = W[U - 1], n = W[U - 2];
							U -= 3, J(n, t, e), G.srclen += 1;
						}), J(G.curseqlen, G.y, G.srclen), G.imp = !0);
					}
					if (!G.imp) break;
				}
				G.nxtlen = K([
					G.pdf417_e,
					G.pdf417_e,
					G.pdf417_e,
					G.pdf417_e
				]), J(G.nxtseqlen, 0, 0), J(G.nxtseqlen, 1, 0), J(G.nxtseqlen, 2, 0), J(G.nxtseqlen, 3, 0);
				for (var a = 0, o = G.pdf417_textsubmodes.length; a < o; a++) for (G.x = q(G.pdf417_textsubmodes, a); Pt(q(G.charvals, G.x), G.char);) {
					G.cost = q(G.curlen, G.x) + 1, G.cost < q(G.nxtlen, G.x) && (J(G.nxtlen, G.x, G.cost), G.srclen = q(G.curseqlen, G.x), G.srclen > 0 && X(q(G.nxtseq, G.x), 0, Y(q(G.curseq, G.x), 0, G.srclen)), J(q(G.nxtseq, G.x), G.srclen, G.char), J(G.nxtseqlen, G.x, G.srclen + 1));
					for (var s = 0, c = G.pdf417_textsubmodes.length; s < c; s++) if (G.y = q(G.pdf417_textsubmodes, s), Ut(G.x, G.y) && (G.cost = Q(q(G.curlen, G.y) + q(q(G.pdf417_shftlen, G.y), G.x)) + 1, G.cost < q(G.nxtlen, G.y))) {
						J(G.nxtlen, G.y, G.cost), G.srclen = q(G.curseqlen, G.y), G.srclen > 0 && X(q(G.nxtseq, G.y), 0, Y(q(G.curseq, G.y), 0, G.srclen));
						var l = q(G.nxtseq, G.y), u = G.srclen;
						J(l, u, G.x == G.pdf417_a ? G.pdf417_as : G.pdf417_ps), J(q(G.nxtseq, G.y), G.srclen + 1, G.char), J(G.nxtseqlen, G.y, G.srclen + 2);
					}
					break;
				}
				G.curlen = G.nxtlen;
				var d = G.curseq;
				G.curseq = G.nxtseq, G.nxtseq = d;
				var f = G.curseqlen;
				G.curseqlen = G.nxtseqlen, G.nxtseqlen = f;
			}), G.minseq = G.pdf417_e;
			for (var r = 0, i = G.pdf417_textsubmodes.length; r < i; r++) G.k = q(G.pdf417_textsubmodes, r), q(G.curlen, G.k) < G.minseq && (G.minseq = q(G.curlen, G.k), G.txtseq = Y(q(G.curseq, G.k), 0, q(G.curseqlen, G.k)));
			for (G.text = K(G.minseq), G.k = 0, G.l = 0; !(G.k >= G.txtseq.length);) {
				G.char = q(G.txtseq, G.k);
				var a = G[q(G.textencfuncs, G.submode)];
				if (W[U++] = G.char, a() === !0) break;
				G.addtotext(), G.k += 1, (G.char == G.pdf417_as || G.char == G.pdf417_ps) && (W[U++] = q(G.txtseq, G.k), G.char == G.pdf417_as ? G.enca() : G.encp(), G.addtotext(), G.k += 1), G.char == G.pdf417_al && (G.submode = G.pdf417_a), G.char == G.pdf417_ll && (G.submode = G.pdf417_l), G.char == G.pdf417_ml && (G.submode = G.pdf417_m), G.char == G.pdf417_pl && (G.submode = G.pdf417_p);
			}
			if (G.text.length % 2 == 1) {
				if (G.submode == G.pdf417_p) {
					W[U++] = "pad", W[U++] = G.pdf417_al, G.encp();
					var o = W[--U], s = W[--U];
					G[s] = o, G.submode = G.pdf417_a;
				} else {
					G.nextecitext = !1;
					for (var c = G.i + 1, l = G.seq.length - 1; c <= l; c += 1) {
						if (G.ti = c, Ut(Lt(q(G.seq, G.ti)), "arraytype")) {
							G.nextecitext = !1;
							break;
						}
						if (q(q(G.seq, G.ti), 0) > -1e6) break;
						G.nextecitext = !0;
					}
					if (G.nextecitext) {
						if (G.submode == G.pdf417_a) {
							if (Pt(q(G.charvals, G.pdf417_l), q(q(G.seq, G.ti), 0))) {
								W[U++] = "pad", W[U++] = G.pdf417_ll, G.enca();
								var u = W[--U], d = W[--U];
								G[d] = u, G.submode = G.pdf417_l;
							} else {
								W[U++] = "pad", W[U++] = G.pdf417_ml, G.enca();
								var f = W[--U], p = W[--U];
								G[p] = f, G.submode = G.pdf417_m;
							}
						} else if (G.submode == G.pdf417_m) {
							if (Pt(q(G.charvals, G.pdf417_l), q(q(G.seq, G.ti), 0))) {
								W[U++] = "pad", W[U++] = G.pdf417_ll, G.encm();
								var m = W[--U], h = W[--U];
								G[h] = m, G.submode = G.pdf417_l;
							} else if (Pt(q(G.charvals, G.pdf417_p), q(q(G.seq, G.ti), 0))) {
								W[U++] = "pad", W[U++] = G.pdf417_pl, G.encm();
								var g = W[--U], _ = W[--U];
								G[_] = g, G.submode = G.pdf417_p;
							} else {
								W[U++] = "pad", W[U++] = G.pdf417_al, G.encm();
								var v = W[--U], y = W[--U];
								G[y] = v, G.submode = G.pdf417_a;
							}
						} else {
							W[U++] = "pad", W[U++] = G.pdf417_ml, G.encl();
							var b = W[--U], x = W[--U];
							G[x] = b, G.submode = G.pdf417_m;
						}
					} else {
						var S = G[q(G.textencfuncs, G.submode)];
						if (W[U++] = "pad", W[U++] = G.pdf417_ps, S() === !0) return !0;
						var C = W[--U], w = W[--U];
						G[w] = C;
					}
				}
				W[U++] = Infinity, Z(G.text), W[U++] = G.pad, G.text = K();
			}
			G.out = K(~~(G.text.length / 2));
			for (var T = 0, E = G.out.length - 1; T <= E; T += 1) G.k = T, J(G.out, G.k, Q(q(G.text, G.k * 2) * 30 + q(G.text, G.k * 2 + 1)));
			W[U++] = G.out;
		}, G.encn = function() {
			var e = W[--U];
			G.in = e, W[U++] = Infinity;
			for (var t = 0, n = G.in.length - 1; t <= n; t += 44) {
				G.k = t, W[U++] = Infinity;
				var r = G.in.length - G.k;
				W[U++] = 1;
				var i = G.in, a = G.k;
				r > 44 && (r = 44);
				for (var o = Y(i, a, r), s = 0, c = o.length; s < c; s++) W[U++] = q(o, s) - 48;
				for (G.gmod = K(), G.cwn = K(15), G.cwi = 15;;) {
					for (G.dv = 900, G.val = 0, G.gmulstart = !0, W[U++] = Infinity; G.gmod.length != 0;) G.val = Q(G.val * 10 + q(G.gmod, 0)), G.gmod = Y(G.gmod, 1, G.gmod.length - 1), G.val < G.dv ? G.gmulstart || (W[U++] = 0) : (G.gmulstart = !1, W[U++] = ~~(G.val / G.dv)), G.val %= G.dv;
					Vt(K(Bt()));
					var l = W[--U];
					if (U--, --G.cwi, J(G.cwn, G.cwi, G.val), G.gmod = l, G.gmod.length == 0) break;
				}
				Z(Y(G.cwn, G.cwi, 15 - G.cwi));
			}
			Vt(K(Bt()));
			var u = W[--U];
			W[U - 1] = u;
		}, G.ence = function() {
			var e = W[--U], t = -q(e, 0) - 1e6;
			if (W[U++] = t, t <= 899) {
				var n = W[--U], r = K(2);
				W[U++] = 927, W[U++] = n, Vt(r);
			} else if (W[U - 1] <= 810899) {
				var i = W[--U], a = K(3);
				W[U++] = 926, W[U++] = ~~(i / 900) - 1, W[U++] = i % 900, Vt(a);
			} else if (W[U - 1] <= 811799) {
				var o = W[--U], s = K(2);
				W[U++] = 925, W[U++] = o - 810900, Vt(s);
			} else W[U - 1] = "bwipp.pdf417badECI#23256", W[U++] = "PDF417 supports ECIs 000000 to 811799", $();
		}, G.encfuncs = G.pdf417_encfuncs, G.addtocws = function() {
			var e = W[--U];
			X(G.datcws, G.j, e), G.j = e.length + G.j;
		}, G.state = G.pdf417_t, G.submode = G.pdf417_a, G.datcws = K(G.seqlen), G.i = 0, G.j = 0; !(G.i >= G.seq.length);) {
			if (G.chars = q(G.seq, G.i), Ht(Lt(G.chars), "arraytype")) {
				if (q(G.chars, 0) <= -1e6) W[U++] = G.chars, G.ence(), G.addtocws();
				else {
					var L = G[q(G.encfuncs, G.state)];
					if (W[U++] = G.chars, L() === !0) break;
					G.addtocws();
				}
			} else W[U++] = K([q(G.pdf417_latchcws, G.chars)]), G.addtocws(), G.chars == G.pdf417_tl && (G.state = G.pdf417_t, G.submode = G.pdf417_a), G.chars == G.pdf417_nl && (G.state = G.pdf417_n), (G.chars == G.pdf417_bl || G.chars == G.pdf417_bl6) && (G.state = G.pdf417_b), G.chars == G.pdf417_bs && (G.i += 1, W[U++] = q(G.seq, G.i), G.encb(), G.addtocws());
			G.i += 1;
		}
		G.datcws = Y(G.datcws, 0, G.j);
	}
	G.m = G.datcws.length, G.m > 926 && (W[U++] = "bwipp.pdf417dataTooLong#23301", W[U++] = "The data is too long", $()), G.eclevel == -1 && (G.m <= 40 && (G.eclevel = 2), G.m >= 41 && G.m <= 160 && (G.eclevel = 3), G.m >= 161 && G.m <= 320 && (G.eclevel = 4), G.m >= 321 && (G.eclevel = 5)), G.fixedeclevel || (G.maxeclevel = ~~(St(927 - G.m) / St(2)) - 1, G.eclevel > G.maxeclevel && (G.eclevel = G.maxeclevel)), G.k = Ct(2, G.eclevel + 1), G.columns == 0 && (G.columns = ~~wt(Tt(Q(G.m + G.k) / 3)));
	var ae = G.columns >= 1 ? G.columns : 1;
	if (G.c = ae, G.r = bt((Q(G.m + G.k) + 1) / G.columns), G.r < G.rows && G.rows <= 90 && (G.r = G.rows), G.r < 3 && (G.r = 3), G.r > 90 && (W[U++] = "bwipp.pdf417insufficientCapacity#23340", W[U++] = "Insufficient capacity in the symbol", $()), !G.fixedeclevel) {
		var R = G.c, oe = G.r, se = G.m, ce = 8, le = ~~(St(Q(R * oe - 1 - se)) / St(2)) - 1;
		if (~~(St(Q(R * oe - 1 - se)) / St(2)) - 1 > 8) {
			var ue = ce;
			ce = le, le = ue;
		}
		G.maxeclevel = le, G.maxeclevel > G.eclevel && (G.eclevel = G.maxeclevel, G.k = Ct(2, G.eclevel + 1));
	}
	W[U++] = "coeffs", W[U++] = G.k, G.pdf417_coeffscachefetch();
	var z = W[--U], de = W[--U];
	G[de] = z, G.n = Q(G.c * G.r - G.k), G.n > 928 && (W[U++] = "bwipp.pdf417insufficientCapacity#23368", W[U++] = "Insufficient capacity in the symbol", $()), G.cws = K(G.c * G.r), J(G.cws, 0, G.n), X(G.cws, 1, G.datcws);
	for (var fe = G.cws, pe = G.m + 1, B = [], me = 0, V = Q(G.n - G.m) - 1; me < V; me++) B[me] = 900;
	if (B = K(B), X(fe, pe, B), Pt(G.options, "debugcws")) {
		var he = Y(G.cws, 0, G.n);
		W[U++] = "bwipp.debugcws#23377", W[U++] = he, $();
	}
	var ge = G.n, _e = G.coeffs, ve = G.k, ye = Y(G.cws, G.n, G.k);
	if (W[U++] = function() {
		var e = W[--U];
		W[U++] = q(G.cws, e);
	}, W[U++] = ge, W[U++] = _e, W[U++] = ve, W[U++] = ye, W[U++] = 929, $t(), Pt(G.options, "debugecc")) {
		var be = Y(G.cws, G.n, G.k);
		W[U++] = "bwipp.debugecc#23386", W[U++] = be, $();
	}
	G.cwtobits = function() {
		var e = W[--U], t = q(G.pdf417_clusters, e), n = W[--U];
		G.v = q(t, n), W[U++] = Infinity;
		for (var r = 0; r < 17; r++) W[U++] = 0;
		for (var i = Nt(Dt(17), G.v, 2), a = 0, o = i.length; a < o; a++) W[U++] = q(i, a) - 48;
		var s = K();
		W[U++] = Y(s, s.length - 17, 17);
	}, G.compact ? G.rwid = 17 * G.c + 17 + 17 + 1 : G.rwid = 17 * G.c + 17 + 17 + 17 + 18, W[U++] = G.rwid * G.r;
	try {
		var xe = W[--U];
		W[U++] = K(xe), W[U++] = !1;
	} catch {
		W[U++] = !0;
	}
	W[--U] && (W[U - 1] = "bwipp.pdf417PixsTooLarge#23410", W[U++] = "The resulting symbol exceeds the implementation maximum array size", $());
	var Se = W[--U];
	G.pixs = Se;
	for (var Ce = 0, we = G.r - 1; Ce <= we; Ce += 1) {
		G.i = Ce, G.i % 3 == 0 && (G.lcw = ~~(G.i / 3) * 30 + ~~((G.r - 1) / 3), G.rcw = Q(~~(G.i / 3) * 30 + G.c) - 1), G.i % 3 == 1 && (G.lcw = ~~(G.i / 3) * 30 + G.eclevel * 3 + (G.r - 1) % 3, G.rcw = ~~(G.i / 3) * 30 + ~~((G.r - 1) / 3)), G.i % 3 == 2 && (G.lcw = Q(~~(G.i / 3) * 30 + G.c) - 1, G.rcw = ~~(G.i / 3) * 30 + G.eclevel * 3 + (G.r - 1) % 3);
		var Te = G.pixs, Ee = G.i * G.rwid;
		W[U++] = Infinity, W[U++] = 1, W[U++] = 1, W[U++] = 1, W[U++] = 1, W[U++] = 1, W[U++] = 1, W[U++] = 1, W[U++] = 1, W[U++] = 0, W[U++] = 1, W[U++] = 0, W[U++] = 1, W[U++] = 0, W[U++] = 1, W[U++] = 0, W[U++] = 0, W[U++] = 0, W[U++] = G.lcw, W[U++] = G.i % 3, G.cwtobits();
		var De = W[--U];
		Z(De);
		for (var Oe = Y(G.cws, G.c * G.i, G.c), ke = 0, Ae = Oe.length; ke < Ae; ke++) {
			W[U++] = q(Oe, ke), W[U++] = G.i % 3, G.cwtobits();
			var je = W[--U];
			Z(je);
		}
		if (G.compact) W[U++] = 1;
		else {
			W[U++] = G.rcw, W[U++] = G.i % 3, G.cwtobits();
			var Me = W[--U];
			Z(Me), W[U++] = 1, W[U++] = 1, W[U++] = 1, W[U++] = 1, W[U++] = 1, W[U++] = 1, W[U++] = 1, W[U++] = 0, W[U++] = 1, W[U++] = 0, W[U++] = 0, W[U++] = 0, W[U++] = 1, W[U++] = 0, W[U++] = 1, W[U++] = 0, W[U++] = 0, W[U++] = 1;
		}
		X(Te, Ee, K());
	}
	W[U++] = Infinity;
	for (var Ne = G.pixs, Pe = G.rwid, Fe = G.r, Ie = G.rowmult, Le = [], Re = 0, ze = G.r; Re < ze; Re++) Le[Re] = G.rowmult;
	Le = K(Le), W[U++] = "ren", W[U++] = "renmatrix", W[U++] = "pixs", W[U++] = Ne, W[U++] = "pixx", W[U++] = Pe, W[U++] = "pixy", W[U++] = Fe * Ie, W[U++] = "rowheights", W[U++] = Le, W[U++] = "height", W[U++] = G.r * G.rowmult / 72, W[U++] = "width", W[U++] = G.rwid / 72, W[U++] = "borderleft", W[U++] = 2, W[U++] = "borderright", W[U++] = 2, W[U++] = "bordertop", W[U++] = 2, W[U++] = "borderbottom", W[U++] = 2, W[U++] = "opt", W[U++] = G.options;
	var Be = Et();
	W[U++] = Be, G._render && on(), G = e;
}
function nn() {
	var e = W[--U];
	G.pixx = e, (G.guardwidth < 0 || G.guardwidth > 20) && (W[U++] = "bwipp.renderBadGuardwidth#41292", W[U++] = "guardwidth must be from 0 to 20", $()), (G.guardheight < 0 || G.guardheight > 20) && (W[U++] = "bwipp.renderBadGuardheight#41296", W[U++] = "guardheight must be from 0 to 20", $()), (G.guardleftpos < -50 || G.guardleftpos > 150) && (W[U++] = "bwipp.renderBadGuardleftpos#41300", W[U++] = "guardleftpos must be from -50 to 150", $()), (G.guardleftypos < -50 || G.guardleftypos > 150) && (W[U++] = "bwipp.renderBadGuardleftypos#41304", W[U++] = "guardleftypos must be from -50 to 150", $()), (G.guardrightpos < -50 || G.guardrightpos > 150) && (W[U++] = "bwipp.renderBadGuardrightpos#41308", W[U++] = "guardrightpos must be from -50 to 150", $()), (G.guardrightypos < -50 || G.guardrightypos > 150) && (W[U++] = "bwipp.renderBadGuardrightypos#41312", W[U++] = "guardrightypos must be from -50 to 150", $()), G.guardwhitespace && (H.selectfont("OCR-B", G.guardheight * 2), G.guardleftpos != 0 && (H.moveto(-G.guardleftpos - 2, Q(G.guardleftypos - G.guardheight / 2 - 1.25)), H.show("<", 0, 0)), G.guardrightpos != 0 && (H.moveto(Q(G.guardrightpos + G.pixx - G.guardwidth) - 1, Q(G.guardrightypos - G.guardheight / 2 - 1.25)), H.show(">", 0, 0)));
}
function rn() {
	if (!rn.globals) {
		var e = G;
		G = rn.globals = {}, G.rendertext_positions = /* @__PURE__ */ new Map([
			["forward", /* @__PURE__ */ new Map([
				["offleft", function() {
					W[U++] = Q(-G.tw - G.nudge);
				}],
				["below", function() {
					W[U++] = Q(-G.th - G.nudge);
				}],
				["left", function() {
					W[U++] = 0;
				}],
				["bottom", function() {
					W[U++] = 0;
				}],
				["xcenter", function() {
					W[U++] = Q(G.pixx - G.tw) / 2;
				}],
				["ycenter", function() {
					W[U++] = Q(G.pixy - G.th) / 2;
				}],
				["right", function() {
					W[U++] = Q(G.pixx - G.tw);
				}],
				["top", function() {
					W[U++] = Q(G.pixy - G.th);
				}],
				["offright", function() {
					W[U++] = Q(G.pixx + G.nudge);
				}],
				["above", function() {
					W[U++] = Q(G.pixy + G.nudge);
				}]
			])],
			["backward", /* @__PURE__ */ new Map([
				["offleft", function() {
					W[U++] = 0 - G.nudge;
				}],
				["below", function() {
					W[U++] = 0 - G.nudge;
				}],
				["left", function() {
					W[U++] = G.tw;
				}],
				["bottom", function() {
					W[U++] = G.th;
				}],
				["xcenter", function() {
					W[U++] = Q(G.pixx + G.tw) / 2;
				}],
				["ycenter", function() {
					W[U++] = Q(G.pixy + G.th) / 2;
				}],
				["right", function() {
					W[U++] = G.pixx;
				}],
				["top", function() {
					W[U++] = G.pixy;
				}],
				["offright", function() {
					W[U++] = Q(G.pixx + G.tw + G.nudge);
				}],
				["above", function() {
					W[U++] = Q(G.pixy + G.th + G.nudge);
				}]
			])],
			["upward", /* @__PURE__ */ new Map([
				["offleft", function() {
					W[U++] = 0 - G.nudge;
				}],
				["below", function() {
					W[U++] = Q(-G.tw - G.nudge);
				}],
				["left", function() {
					W[U++] = G.th;
				}],
				["bottom", function() {
					W[U++] = 0;
				}],
				["xcenter", function() {
					W[U++] = Q(G.pixx + G.th) / 2;
				}],
				["ycenter", function() {
					W[U++] = Q(G.pixy - G.tw) / 2;
				}],
				["right", function() {
					W[U++] = G.pixx;
				}],
				["top", function() {
					W[U++] = Q(G.pixy - G.tw);
				}],
				["offright", function() {
					W[U++] = Q(G.pixx + G.th + G.nudge);
				}],
				["above", function() {
					W[U++] = Q(G.pixy + G.nudge);
				}]
			])],
			["downward", /* @__PURE__ */ new Map([
				["offleft", function() {
					W[U++] = Q(-G.th - G.nudge);
				}],
				["below", function() {
					W[U++] = 0 - G.nudge;
				}],
				["left", function() {
					W[U++] = 0;
				}],
				["bottom", function() {
					W[U++] = G.tw;
				}],
				["xcenter", function() {
					W[U++] = Q(G.pixx - G.th) / 2;
				}],
				["ycenter", function() {
					W[U++] = Q(G.pixy + G.tw) / 2;
				}],
				["right", function() {
					W[U++] = Q(G.pixx - G.th);
				}],
				["top", function() {
					W[U++] = G.pixy;
				}],
				["offright", function() {
					W[U++] = Q(G.pixx + G.nudge);
				}],
				["above", function() {
					W[U++] = Q(G.pixy + G.tw + G.nudge);
				}]
			])]
		]), G = e;
	}
	var e = G;
	G = Object.assign({}, G, rn.globals), It();
	var t = W[--U];
	G.grp = t;
	var n = W[--U];
	G.pixy = n;
	var r = W[--U];
	G.pixx = r, G.makeerr = function() {
		var e = W[--U];
		G.makeerr_msg = e;
		var t = W[--U];
		if (G.makeerr_name = jt(Dt(128), t), G.grp == 1) W[U++] = "text";
		else if (G.grp == 2) W[U++] = "extratext";
		else {
			var n = Dt(5);
			X(n, 0, "text"), J(n, 4, G.grp + 48), W[U++] = n;
		}
		var r = W[--U];
		G.makeerr_pfx = r;
		var i = Dt(G.makeerr_pfx.length + 6 + G.makeerr_name.length);
		X(i, 0, "bwipp."), X(i, 6, G.makeerr_pfx), X(i, G.makeerr_pfx.length + 6, G.makeerr_name);
		var a = Dt(G.makeerr_pfx.length + G.makeerr_msg.length);
		X(a, 0, G.makeerr_pfx), X(a, G.makeerr_pfx.length, G.makeerr_msg), W[U++] = i, W[U++] = a;
	}, G.positiontext = function() {
		var e = W[--U];
		G.th = e;
		var t = W[--U];
		G.tw = t, G.nudge = 1;
		var n = W[--U], r = q(G.rendertext_positions, n);
		W[U++] = r, W[U++] = r, Ot(4, -1);
		var i = W[U - 1];
		Ht(i, "center") && (W[U - 1] = "xcenter");
		var a = W[--U], o = W[--U];
		if (q(o, a)() === !0) return !0;
		var s = W[--U], c = W[--U];
		W[U++] = s, W[U++] = c, Ot(3, -1);
		var l = W[U - 1];
		Ht(l, "center") && (W[U - 1] = "ycenter");
		var u = W[--U], d = W[--U];
		if (q(d, u)() === !0) return !0;
	};
	for (var i = 0; i < 1; i++) {
		if (G.txt.length > 0 && Ht(G.xalign, "unset") && Ht(G.yalign, "unset") && G.content.length == 0) {
			Ut(G.color, "unset") && H.setcolor(G.color), G.s = 0, G.fn = "", G.xoff = 0, G.yoff = 0;
			try {
				zt(G.txt, function() {
					var e = W[--U];
					Z(e);
					var t = W[U - 1], n = W[U - 2];
					if (t != G.s || Ut(n, G.fn)) {
						if (W[U - 1] <= 0) throw U -= 5, Infinity;
						var r = W[--U], i = W[--U];
						G.s = r, G.fn = i, H.selectfont(i, r);
						var a = H.stringwidth("0");
						G.xoff = -(a.w / 2), H.save(), H.newpath(), H.moveto(0, 0), H.charpath("0", !1);
						var o = H.pathbbox();
						H.restore(), W[U++] = o.llx, W[U++] = o.lly, W[U++] = o.ury, W[U++] = o.urx, U--;
						var s = W[--U], c = W[--U];
						G.yoff = -(Q(c + s) / 2), U--;
					} else U -= 2;
					var l = W[--U], u = W[--U];
					H.moveto(u, l), W[U - 1].length == 1 && H.rmoveto(G.xoff, G.yoff);
					var d = W[--U];
					H.show(d, 0, 0);
				}), W[U++] = !1;
			} catch {
				W[U++] = !0;
			}
			if (W[--U]) {
				W[U++] = "bwipp.fontTooSmall#41453", W[U++] = "The font size is too small", W[U++] = !1;
				break;
			}
			W[U++] = !0;
			break;
		}
		if (G.content.length == 0 && G.txt.length > 0) {
			W[U++] = Infinity, zt(G.txt, function() {
				var e = W[--U];
				zt(q(e, 0));
			}), G.txtchars = K(), G.tstr = Dt(G.txtchars.length);
			for (var a = 0, o = G.txtchars.length - 1; a <= o; a += 1) J(G.tstr, a, q(G.txtchars, a));
			G.content = G.tstr;
		}
		if (G.content.length == 0) {
			W[U++] = !0;
			break;
		}
		if (G.subspace.length != 0 && G.subspace.length != 1) {
			W[U++] = "subspaceBad", W[U++] = "subspace option must be a single character", G.makeerr(), W[U++] = !1;
			break;
		}
		if (G.subspace.length != 0) for (var s = 0, c = G.content.length - 1; s <= c; s += 1) {
			var l = Y(G.content, s, 1);
			if (W[U++] = s, Rt(G.subspace, l), W[--U]) {
				U--, U--;
				var u = W[U - 2];
				J(G.content, u, 32);
			}
			U -= 2;
		}
		if (G.split.length != 0 && G.content.length != 0) {
			if (G.split.length != 1) {
				W[U++] = "splitBad", W[U++] = "split option must be a single character", G.makeerr(), W[U++] = !1;
				break;
			}
			for (W[U++] = Infinity, W[U++] = G.content;;) {
				var d = W[--U];
				if (Rt(d, G.split), W[--U]) {
					var f = W[--U];
					U--;
					var p = W[--U];
					W[U++] = f, W[U++] = p;
				} else break;
			}
			G.textlines = K();
		} else G.textlines = K([G.content]);
		if (Ut(G.color, "unset") && H.setcolor(G.color), H.selectfont(G.font, G.size), G.content.length == 0) W[U++] = 0;
		else {
			H.save(), H.newpath(), H.moveto(0, 0), H.charpath("0", !1);
			var m = H.pathbbox();
			H.restore(), W[U++] = m.ury;
		}
		var h = W[--U];
		G.textascent = h;
		var g = G.textlines;
		W[U++] = "textwidth", W[U++] = 0;
		for (var _ = 0, v = g.length; _ < v; _++) {
			var y = H.stringwidth(q(g, _)), b = W[--U], x = y.w;
			if (b < y.w) {
				var S = x;
				x = b, b = S;
			}
			W[U++] = b;
		}
		var C = W[--U], w = W[--U];
		G[w] = Q(C + (G.content.length - 1) * G.gaps);
		var T = G.textlines.length;
		if (G.textheight = Q(T * G.textascent + (T - 1) * G.linegaps), Ht(G.xalign, "unset") && (G.xalign = "center"), Ht(G.yalign, "unset") && (G.yalign = "below"), Ht(G.xalign, "justify")) {
			if (Ut(G.direction, "forward") && Ut(G.direction, "backward")) {
				W[U++] = "xjustify", W[U++] = "xalign=justify requires forward or backward text", G.makeerr(), W[U++] = !1;
				break;
			}
			if (Wt(G.textwidth, G.pixx) && G.content.length > 1) {
				G.gaps = Q(G.pixx - G.textwidth) / (G.content.length - 1);
				var E = Ht(G.direction, "forward") ? "left" : "right";
				G.xalign = E;
			} else G.gaps = 0, G.xalign = "center";
		}
		if (Ht(G.yalign, "justify")) {
			if (Ut(G.direction, "upward") && Ut(G.direction, "downward")) {
				W[U++] = "yjustify", W[U++] = "yalign=justify requires upward or downward text", G.makeerr(), W[U++] = !1;
				break;
			}
			if (Wt(G.textwidth, G.pixy) && G.content.length > 1) {
				G.gaps = Q(G.pixy - G.textwidth) / (G.content.length - 1);
				var D = Ht(G.direction, "upward") ? "bottom" : "top";
				G.yalign = D;
			} else G.gaps = 0, G.yalign = "center";
		}
		W[U++] = G.xalign, W[U++] = G.yalign, W[U++] = G.direction, W[U++] = G.textwidth, W[U++] = G.textheight, G.positiontext();
		var O = W[--U], k = W[--U];
		H.moveto(k, O), H.rmoveto(G.xoffset, G.yoffset), H.save();
		var A = /* @__PURE__ */ new Map([
			["forward", 0],
			["upward", 90],
			["backward", 180],
			["downward", 270]
		]);
		H.rotate(q(A, G.direction));
		var j = H.currpos();
		H.translate(j.x, j.y);
		for (var M = 0, N = G.textlines.length - 1; M <= N; M += 1) {
			G.i = M, H.moveto(0, 0 + Q(G.textascent + G.linegaps) * G.i);
			var P = G.textlines;
			H.show(q(P, P.length - G.i - 1), G.gaps, 0);
		}
		H.restore(), W[U++] = !0;
		break;
	}
	G = e;
}
function an() {
	if (G.bwipjs_rawstack) G.bwipjs_rawstack.push(W[--U]);
	else {
		if (!an.globals) {
			var e = G;
			G = an.globals = {}, G.renlinear_xalignopts = /* @__PURE__ */ new Map([
				["offleft", "offleft"],
				["left", "left"],
				["center", "center"],
				["right", "right"],
				["offright", "offright"],
				["justify", "justify"]
			]), G.renlinear_yalignopts = /* @__PURE__ */ new Map([
				["above", "above"],
				["top", "top"],
				["center", "center"],
				["bottom", "bottom"],
				["below", "below"],
				["justify", "justify"]
			]), G.renlinear_directionoptions = /* @__PURE__ */ new Map([
				["forward", "forward"],
				["backward", "backward"],
				["upward", "upward"],
				["downward", "downward"]
			]), G = e;
		}
		var e = G;
		G = Object.assign({}, G, an.globals), G.sbs = K([]), G.bhs = K([]), G.bbs = K([]), G.txt = K([]), Kt(), G.text1xalign = "unset", G.text1yalign = "unset", G.includetext = !1, G.barcolor = "unset", G.bordercolor = "unset", G.inkspread = null, G.width = 0, G.barratio = 1, G.spaceratio = 1, G.showborder = !1, G.showbearer = !1, G.borderleft = 10, G.borderright = 10, G.bordertop = 1, G.borderbottom = 1, G.borderwidth = .5, G.guardwhitespace = !1, G.guardleftpos = 0, G.guardleftypos = 0, G.guardrightpos = 0, G.guardrightypos = 0, G.guardwidth = 5, G.guardheight = 7;
		var t = W[--U];
		zt(t, function() {
			var e = W[--U], t = W[--U];
			G[t] = e;
		}), W[U++] = G.opt, Ft(G, "opt"), W[U++] = null, Yt(), W[U - 1] = "textopts", qt();
		var n = W[--U], r = W[--U];
		G[r] = n;
		for (var i = 1; i <= 9; i += 1) {
			G.textgrp = i;
			var a = q(G.textopts, G.textgrp - 1);
			W[U++] = G.textgrp, W[U++] = a, sn(), W[--U] || $();
		}
		if ((G.inkspread < -1 || G.inkspread > 1) && (W[U++] = "bwipp.renlinearBadInkspread#41668", W[U++] = "inkspread must be from -1 to 1", $()), (G.borderleft < -1 || G.borderleft > 50) && (W[U++] = "bwipp.renlinearBadBorderleft#41672", W[U++] = "borderleft must be from -1 to 50", $()), (G.borderright < -1 || G.borderright > 50) && (W[U++] = "bwipp.renlinearBadBorderright#41676", W[U++] = "borderright must be from -1 to 50", $()), (G.bordertop < -1 || G.bordertop > 50) && (W[U++] = "bwipp.renlinearBadBordertop#41680", W[U++] = "bordertop must be from -1 to 50", $()), (G.borderbottom < -1 || G.borderbottom > 50) && (W[U++] = "bwipp.renlinearBadBorderbottom#41684", W[U++] = "borderbottom must be from -1 to 50", $()), (G.borderwidth < 0 || G.borderwidth > 10) && (W[U++] = "bwipp.renlinearBadBorderwidth#41688", W[U++] = "borderwidth must be from 0 to 10", $()), (G.barratio < .1 || G.barratio > 5) && (W[U++] = "bwipp.renlinearBadBarratio#41692", W[U++] = "barratio must be from 0.1 to 5", $()), (G.spaceratio < .1 || G.spaceratio > 5) && (W[U++] = "bwipp.renlinearBadSpaceratio#41696", W[U++] = "spaceratio must be from 0.1 to 5", $()), G.width != 0 && (G.width < .01 || G.width > 20) && (W[U++] = "bwipp.renlinearBadWidth#41700", W[U++] = "width must be 0 or from 0.01 to 20", $()), (G.guardwidth < 0 || G.guardwidth > 20) && (W[U++] = "bwipp.renlinearBadGuardwidth#41704", W[U++] = "guardwidth must be from 0 to 20", $()), (G.guardheight < 0 || G.guardheight > 20) && (W[U++] = "bwipp.renlinearBadGuardheight#41708", W[U++] = "guardheight must be from 0 to 20", $()), (G.guardleftpos < -50 || G.guardleftpos > 150) && (W[U++] = "bwipp.renlinearBadGuardleftpos#41712", W[U++] = "guardleftpos must be from -50 to 150", $()), (G.guardleftypos < -50 || G.guardleftypos > 150) && (W[U++] = "bwipp.renlinearBadGuardleftypos#41716", W[U++] = "guardleftypos must be from -50 to 150", $()), (G.guardrightpos < -50 || G.guardrightpos > 150) && (W[U++] = "bwipp.renlinearBadGuardrightpos#41720", W[U++] = "guardrightpos must be from -50 to 150", $()), (G.guardrightypos < -50 || G.guardrightypos > 150) && (W[U++] = "bwipp.renlinearBadGuardrightypos#41724", W[U++] = "guardrightypos must be from -50 to 150", $()), G.sbs.length != 0) {
			var o = G.sbs;
			W[U++] = ~~((o.length + 1) / 2), (G.bhs.length < ~~((o.length + 1) / 2) || G.bbs.length < ~~((o.length + 1) / 2)) && (W[U - 1] = "bwipp.renlinearBadBarHeightArrays#41730", W[U++] = "The bar height and baseline arrays must be at least as long as the number of bars", $()), U--;
		}
		G.bars = K(~~((G.sbs.length + 1) / 2)), G.pixx = 0, G.pixy = 0;
		for (var s = 0, c = ~~((G.sbs.length + 1) / 2) * 2 - 2; s <= c; s += 1) G.i = s, G.i % 2 == 0 ? (G.d = Q(q(G.sbs, G.i) * G.barratio - G.barratio) + 1, q(G.sbs, G.i) == 0 ? J(G.bars, ~~(G.i / 2), -1) : (G.h = q(G.bhs, ~~(G.i / 2)) * 72, G.c = Q(G.d / 2 + G.pixx), G.y = q(G.bbs, ~~(G.i / 2)) * 72, G.w = Q(G.d - G.inkspread), J(G.bars, ~~(G.i / 2), K([
			G.h,
			G.c,
			G.y,
			G.w
		])), Q(G.h + G.y) > G.pixy && (G.pixy = Q(G.h + G.y)))) : G.d = Q(q(G.sbs, G.i) * G.spaceratio - G.spaceratio) + 1, G.pixx = Q(G.pixx + G.d);
		H.save();
		var l = H.currpos();
		if (H.translate(l.x, l.y), G.width != 0 && H.scale(G.width * 72 / G.pixx, 1), G.tl = K([-Q(G.borderleft + G.borderwidth / 2), Q(G.pixy + G.bordertop + G.borderwidth / 2)]), G.tr = K([Q(G.pixx + G.borderright + G.borderwidth / 2), Q(G.pixy + G.bordertop + G.borderwidth / 2)]), G.bl = K([-Q(G.borderleft + G.borderwidth / 2), -Q(G.borderbottom + G.borderwidth / 2)]), G.br = K([Q(G.pixx + G.borderright + G.borderwidth / 2), -Q(G.borderbottom + G.borderwidth / 2)]), G.showbearer) {
			H.save(), H.newpath(), Z(G.bl);
			var u = W[--U], d = W[--U];
			H.moveto(d, u), Z(G.br);
			var f = W[--U], p = W[--U];
			H.lineto(p, f), Z(G.tl);
			var m = W[--U], h = W[--U];
			H.moveto(h, m), Z(G.tr);
			var g = W[--U], _ = W[--U];
			H.lineto(_, g), Ut(G.bordercolor, "unset") && H.setcolor(G.bordercolor), H.setlinewidth(Q(G.borderwidth - G.inkspread * 2)), H.stroke(), H.restore();
		} else if (G.showborder) {
			H.save(), H.newpath(), Z(G.bl);
			var v = W[--U], y = W[--U];
			H.moveto(y, v);
			for (var b = K([
				G.br,
				G.tr,
				G.tl
			]), x = 0, S = b.length; x < S; x++) {
				Z(q(b, x));
				var C = W[--U], w = W[--U];
				H.lineto(w, C);
			}
			H.closepath(), Ut(G.bordercolor, "unset") && H.setcolor(G.bordercolor), H.setlinewidth(G.borderwidth), H.stroke(), H.restore();
		}
		H.save(), Ut(G.barcolor, "unset") && H.setcolor(G.barcolor);
		for (var T = G.bars, E = 0, D = T.length; E < D; E++) {
			var O = q(T, E);
			if (W[U++] = O, O != -1) {
				var k = W[--U];
				Z(k), H.newpath();
				var A = W[--U];
				H.setlinewidth(A);
				var j = W[--U], M = W[--U];
				H.moveto(M, j);
				var N = W[--U];
				H.rlineto(0, N), H.stroke();
			} else U--;
		}
		H.restore();
		for (var P = 1; P <= 9; P += 1) if (G.textgrp = P, q(q(G.textopts, G.textgrp - 1), "").length != 0 || G.textgrp == 1 && G.txt.length > 0 && G.includetext) {
			var ee = q(G.textopts, G.textgrp - 1);
			J(ee, "content", q(ee, "")), W[U++] = ee, J(ee, "txt", G.textgrp == 1 ? G.txt : K([])), W[U++] = G.pixx, W[U++] = G.pixy, W[U++] = G.textgrp, Ot(4, -1), rn(), W[--U] || (H.restore(), $());
		}
		W[U++] = G.pixx, nn(), H.restore(), G = e;
	}
}
function on() {
	if (G.bwipjs_rawstack) G.bwipjs_rawstack.push(W[--U]);
	else {
		if (!on.globals) {
			var e = G;
			G = on.globals = {}, G.renmatrix_xalignopts = /* @__PURE__ */ new Map([
				["offleft", "offleft"],
				["left", "left"],
				["center", "center"],
				["right", "right"],
				["offright", "offright"],
				["justify", "justify"]
			]), G.renmatrix_yalignopts = /* @__PURE__ */ new Map([
				["above", "above"],
				["top", "top"],
				["center", "center"],
				["bottom", "bottom"],
				["below", "below"],
				["justify", "justify"]
			]), G.renmatrix_directionoptions = /* @__PURE__ */ new Map([
				["forward", "forward"],
				["backward", "backward"],
				["upward", "upward"],
				["downward", "downward"]
			]), G = e;
		}
		var e = G;
		G = Object.assign({}, G, on.globals), G.width = 1, G.height = 1, G.barcolor = "unset", G.bordercolor = "unset", G.colormap = "unset", G.dotty = !1, G.inkspread = null, G.inkspreadh = null, G.inkspreadv = null, G.txt = K([]), Kt(), G.text1xalign = "unset", G.text1yalign = "unset", G.includetext = !1, G.showborder = !1, G.borderleft = 0, G.borderright = 0, G.bordertop = 0, G.borderbottom = 0, G.borderwidth = .5, G.guardwhitespace = !1, G.guardleftpos = 0, G.guardleftypos = 0, G.guardrightpos = 0, G.guardrightypos = 0, G.guardwidth = 5, G.guardheight = 7;
		var t = W[--U];
		zt(t, function() {
			var e = W[--U], t = W[--U];
			G[t] = e;
		}), W[U++] = G.opt, Ft(G, "opt"), W[U++] = null, Yt(), W[U - 1] = "textopts", qt();
		var n = W[--U], r = W[--U];
		if (G[r] = n, G.inkspread ?? (G.inkspread = 0), G.inkspreadh ?? (G.inkspreadh = G.inkspread), G.inkspreadv ?? (G.inkspreadv = G.inkspread), !Pt(G, "rowheights")) {
			W[U++] = Infinity;
			for (var i = 0, a = G.pixy; i < a; i++) W[U++] = 1;
			G.rowheights = K();
		}
		G.bufnew = K(G.pixx * G.pixy), G.bufoff = 0, G.pixoff = 0;
		for (var o = G.rowheights, s = 0, c = o.length; s < c; s++) {
			for (var l = 0, u = q(o, s); l < u; l++) X(G.bufnew, G.bufoff, Y(G.pixs, G.pixoff, G.pixx)), G.bufoff += G.pixx;
			G.pixoff += G.pixx;
		}
		G.pixs = G.bufnew;
		for (var d = 1; d <= 9; d += 1) {
			G.textgrp = d;
			var f = q(G.textopts, G.textgrp - 1);
			W[U++] = G.textgrp, W[U++] = f, sn(), W[--U] || $();
		}
		(G.inkspread < -1 || G.inkspread > 1) && (W[U++] = "bwipp.renmatrixBadInkspread#41948", W[U++] = "inkspread must be from -1 to 1", $()), (G.inkspreadh < -1 || G.inkspreadh > 1) && (W[U++] = "bwipp.renmatrixBadInkspreadh#41952", W[U++] = "inkspreadh must be from -1 to 1", $()), (G.inkspreadv < -1 || G.inkspreadv > 1) && (W[U++] = "bwipp.renmatrixBadInkspreadv#41956", W[U++] = "inkspreadv must be from -1 to 1", $()), (G.borderleft < -1 || G.borderleft > 50) && (W[U++] = "bwipp.renmatrixBadBorderleft#41960", W[U++] = "borderleft must be from -1 to 50", $()), (G.borderright < -1 || G.borderright > 50) && (W[U++] = "bwipp.renmatrixBadBorderright#41964", W[U++] = "borderright must be from -1 to 50", $()), (G.bordertop < -1 || G.bordertop > 50) && (W[U++] = "bwipp.renmatrixBadBordertop#41968", W[U++] = "bordertop must be from -1 to 50", $()), (G.borderbottom < -1 || G.borderbottom > 50) && (W[U++] = "bwipp.renmatrixBadBorderbottom#41972", W[U++] = "borderbottom must be from -1 to 50", $()), (G.borderwidth < 0 || G.borderwidth > 10) && (W[U++] = "bwipp.renmatrixBadBorderwidth#41976", W[U++] = "borderwidth must be from 0 to 10", $()), (G.width < .01 || G.width > 50) && (W[U++] = "bwipp.renmatrixBadWidth#41980", W[U++] = "width must be from 0.01 to 50", $()), (G.height < .01 || G.height > 50) && (W[U++] = "bwipp.renmatrixBadHeight#41984", W[U++] = "height must be from 0.01 to 50", $()), (G.pixx <= 0 || G.pixy <= 0) && (W[U++] = "bwipp.renmatrixBadDimensions#41988", W[U++] = "The symbol dimensions must be positive", $()), G.pixs.length < G.pixx * G.pixy && (W[U++] = "bwipp.renmatrixBadPixelData#41992", W[U++] = "The pixel data is shorter than the symbol dimensions require", $()), G.xyget = function() {
			var e = W[--U], t = W[--U];
			W[U++] = q(G.pixs, Q(t + e * G.pixx));
		}, G.drawlayerdots = function() {
			G.pixsorig = G.pixs;
			var e = W[--U];
			G.pixs = e, H.newpath();
			for (var t = 0, n = G.pixs.length - 1; t <= n; t += 1) G.x = t % G.pixx, G.y = ~~(t / G.pixx), W[U++] = G.x, W[U++] = G.y, G.xyget(), W[--U] == 1 && (H.moveto(Q(G.x + .5), Q(G.pixy - G.y - .5)), H.arc(Q(G.x + .5), Q(G.pixy - G.y - .5), Q(.5 - G.inkspread), 0, 360, 1));
			H.fill(), G.pixs = G.pixsorig;
		}, H.save();
		var p = H.currpos();
		if (H.translate(p.x, p.y), G.inkspread /= 2, G.inkspreadh /= 2, G.inkspreadv /= 2, H.save(), H.scale(G.width / G.pixx * 72, G.height / G.pixy * 72), G.showborder ? (G.tl = K([-Q(G.borderleft + G.borderwidth / 2), Q(G.pixy + G.bordertop + G.borderwidth / 2)]), G.tr = K([Q(G.pixx + G.borderright + G.borderwidth / 2), Q(G.pixy + G.bordertop + G.borderwidth / 2)]), G.bl = K([-Q(G.borderleft + G.borderwidth / 2), -Q(G.borderbottom + G.borderwidth / 2)]), G.br = K([Q(G.pixx + G.borderright + G.borderwidth / 2), -Q(G.borderbottom + G.borderwidth / 2)])) : (G.tl = K([Q(-G.borderleft + G.inkspread), Q(G.pixy + G.bordertop - G.inkspread)]), G.tr = K([Q(G.pixx + G.borderright - G.inkspread), Q(G.pixy + G.bordertop - G.inkspread)]), G.bl = K([Q(-G.borderleft + G.inkspread), Q(-G.borderbottom + G.inkspread)]), G.br = K([Q(G.pixx + G.borderright - G.inkspread), Q(-G.borderbottom + G.inkspread)])), G.showborder) {
			H.save(), H.newpath(), Z(G.bl);
			var m = W[--U], h = W[--U];
			H.moveto(h, m);
			for (var g = K([
				G.br,
				G.tr,
				G.tl
			]), _ = 0, v = g.length; _ < v; _++) {
				Z(q(g, _));
				var y = W[--U], b = W[--U];
				H.lineto(b, y);
			}
			H.closepath(), Ut(G.bordercolor, "unset") && H.setcolor(G.bordercolor), H.setlinewidth(Q(G.borderwidth - G.inkspread * 2)), H.stroke(), H.restore();
		}
		Ht(G.colormap, "unset") && (G.colormap = /* @__PURE__ */ new Map([[1, G.barcolor]]));
		for (var x = G.colormap, S = x.size, C = x.keys(), w = 0; w < S; w++) {
			var T = C.next().value, E = x.get(T);
			if (W[U++] = T, W[U++] = E, Ut(E, "unset")) {
				var D = W[--U];
				H.setcolor(D);
			} else U--;
			var O = W[--U];
			G.key = O;
			for (var k = [], A = G.pixs, j = 0, M = A.length; j < M; j++) k[j] = +!!Ht(q(A, j), G.key);
			if (k = K(k), W[U++] = k, G.dotty) G.drawlayerdots();
			else {
				var N = W[--U];
				H.drawlayer(N, G.pixx, G.pixy, G.inkspreadh, G.inkspreadv);
			}
		}
		H.restore();
		for (var P = 1; P <= 9; P += 1) if (G.textgrp = P, q(q(G.textopts, G.textgrp - 1), "").length != 0 || G.textgrp == 1 && G.txt.length > 0 && G.includetext) {
			var ee = q(G.textopts, G.textgrp - 1);
			J(ee, "txt", G.txt), J(ee, "content", q(ee, "")), W[U++] = G.width * 72, W[U++] = G.height * 72, W[U++] = G.textgrp, W[U++] = ee, rn(), W[--U] || (H.restore(), $());
		}
		W[U++] = G.width * 72, nn(), H.restore(), G = e;
	}
}
function sn() {
	if (!sn.globals) {
		var e = G;
		G = sn.globals = {}, G.validatetext_xalignopts = /* @__PURE__ */ new Map([
			["offleft", "offleft"],
			["left", "left"],
			["center", "center"],
			["right", "right"],
			["offright", "offright"],
			["justify", "justify"]
		]), G.validatetext_yalignopts = /* @__PURE__ */ new Map([
			["above", "above"],
			["top", "top"],
			["center", "center"],
			["bottom", "bottom"],
			["below", "below"],
			["justify", "justify"]
		]), G.validatetext_directionoptions = /* @__PURE__ */ new Map([
			["forward", "forward"],
			["backward", "backward"],
			["upward", "upward"],
			["downward", "downward"]
		]), G = e;
	}
	var e = G;
	G = Object.assign({}, G, sn.globals);
	var t = W[--U];
	G.td = t;
	var n = W[--U];
	if (G.grp = n, W[U++] = "pfx", G.grp == 1) W[U++] = "text";
	else if (G.grp == 2) W[U++] = "extratext";
	else {
		var r = Dt(5);
		X(r, 0, "text"), J(r, 4, G.grp + 48), W[U++] = r;
	}
	var i = W[--U], a = W[--U];
	G[a] = i, G.mkerr = function() {
		var e = W[--U];
		G.msgtail = e;
		var t = W[--U];
		G.prop = jt(Dt(128), t);
		var n = Dt(G.pfx.length + 9 + G.prop.length);
		X(n, 0, "bwipp."), X(n, 6, G.pfx), X(n, G.pfx.length + 6, "Bad"), X(n, G.pfx.length + 9, G.prop);
		var r = Dt(G.pfx.length + G.prop.length + G.msgtail.length);
		X(r, 0, G.pfx), X(r, G.pfx.length, G.prop), X(r, G.pfx.length + G.prop.length, G.msgtail), W[U++] = n, W[U++] = r;
	};
	for (var o = 0; o < 1; o++) {
		var s = q(G.td, "xalign");
		if (W[U++] = s, Ut(s, "unset")) {
			var c = W[--U];
			if (!Pt(G.validatetext_xalignopts, c)) {
				W[U++] = "xalign", W[U++] = " must be offleft, left, center, right, offright or justify", G.mkerr(), W[U++] = !1;
				break;
			}
		} else U--;
		var l = q(G.td, "yalign");
		if (W[U++] = l, Ut(l, "unset")) {
			var u = W[--U];
			if (!Pt(G.validatetext_yalignopts, u)) {
				W[U++] = "yalign", W[U++] = " must be above, top, center, bottom, below or justify", G.mkerr(), W[U++] = !1;
				break;
			}
		} else U--;
		if (!Pt(G.validatetext_directionoptions, q(G.td, "direction"))) {
			W[U++] = "direction", W[U++] = " must be forward, backward, upward or downward", G.mkerr(), W[U++] = !1;
			break;
		}
		var d = q(G.td, "size");
		if (d <= 0 || d >= 25) {
			W[U++] = "size", W[U++] = " must be greater than zero and less than 25", G.mkerr(), W[U++] = !1;
			break;
		}
		var f = q(G.td, "xoffset");
		if (f < -150 || f > 150) {
			W[U++] = "xoffset", W[U++] = " must be from -150 to 150", G.mkerr(), W[U++] = !1;
			break;
		}
		var p = q(G.td, "yoffset");
		if (p < -150 || p > 150) {
			W[U++] = "yoffset", W[U++] = " must be from -150 to 150", G.mkerr(), W[U++] = !1;
			break;
		}
		var m = q(G.td, "gaps");
		if (m < -20 || m > 20) {
			W[U++] = "gaps", W[U++] = " must be from -20 to 20", G.mkerr(), W[U++] = !1;
			break;
		}
		var h = q(G.td, "linegaps");
		if (h < 0 || h > 20) {
			W[U++] = "linegaps", W[U++] = " must be from 0 to 20", G.mkerr(), W[U++] = !1;
			break;
		}
		W[U++] = !0;
		break;
	}
	G = e;
}
function cn(e, t, n, r, i) {
	if (typeof n != "string") throw Error("bwipp.typeError: barcode text not a string (" + n + ")");
	if (r ||= {}, typeof r == "string") {
		var a = r.split(" ");
		r = {};
		for (var o = 0; o < a.length; o++) if (a[o]) {
			var s = a[o].indexOf("=");
			s == -1 ? a[o][0] == "!" ? r[a[o].substr(1)] = !1 : r[a[o]] = !0 : r[a[o].substr(0, s)] = a[o].substr(s + 1);
		}
	} else if (typeof r != "object" || r.constructor !== Object) throw Error("bwipp.typeError: options not an object");
	if (r.binarytext) {
		if (/[\u0100-\uffff]/.test(n)) throw Error("bwip-js: 16-bit chars not allowed with binarytext");
	} else /[\u0080-\uffff]/.test(n) && (n = unescape(encodeURIComponent(n)));
	r.dontdraw && (i = !0);
	var c = /* @__PURE__ */ new Map();
	for (var l in r) r.hasOwnProperty(l) && c.set(l, r[l]);
	return H = e, W = [n, c], U = 2, G = { bwipjs_rawstack: i ? [] : !1 }, t(), !G.bwipjs_rawstack || G.bwipjs_rawstack;
}
// node_modules/@bwip-js/browser/dist/bwip-js.mjs
function ln(e) {
	return e && /HTMLCanvasElement|OffscreenCanvas/.test(Object.getPrototypeOf(e).constructor.name);
}
function un(e, t, n) {
	if (typeof t == "string") {
		var r = document.getElementById(t) || document.querySelector(t);
		if (!ln(r)) throw Error("bwipjs: `" + t + "`: not a canvas");
		t = n, n = _n(r);
	} else if (ln(t)) {
		var r = t;
		t = n, n = _n(r);
	} else if (typeof n == "string") {
		var r = document.getElementById(n) || document.querySelector(n);
		if (!ln(r)) throw Error("bwipjs: `" + n + "`: not a canvas");
		n = _n(r);
	} else if (ln(n)) n = _n(n);
	else if (!n || typeof n != "object" || !n.init) throw Error("bwipjs: not a canvas or drawing object");
	return pn(e, t, n);
}
function dn(e) {
	var t = e.scale || 2, n = e.scaleX || t, r = e.scaleY || n;
	if (e.scaleX = n < 1 ? 2 : n, e.scaleY = r < 1 ? e.scaleX : r, e.paddingleft = f(e.paddingleft, e.paddingwidth, e.padding, n), e.paddingright = f(e.paddingright, e.paddingwidth, e.padding, n), e.paddingtop = f(e.paddingtop, e.paddingheight, e.padding, r), e.paddingbottom = f(e.paddingbottom, e.paddingheight, e.padding, r), e.backgroundcolor) {
		var i = "" + e.backgroundcolor;
		if (/^[0-9a-fA-F]{8}$/.test(i)) {
			var a = parseInt(i.substr(0, 2), 16) / 255, o = parseInt(i.substr(2, 2), 16) / 255, s = parseInt(i.substr(4, 2), 16) / 255, c = parseInt(i.substr(6, 2), 16) / 255, l = Math.floor((1 - a) * (1 - c) * 255).toString(16), u = Math.floor((1 - o) * (1 - c) * 255).toString(16), d = Math.floor((1 - s) * (1 - c) * 255).toString(16);
			e.backgroundcolor = (l.length == 1 ? "0" : "") + l + (u.length == 1 ? "0" : "") + u + (d.length == 1 ? "0" : "") + d;
		} else if (i[0] == "#" && (i = i.substr(1)), /^[0-9a-fA-F]{6}$/.test(i)) e.backgroundcolor = i;
		else if (/^[0-9a-fA-F]{3}$/.test(i)) e.backgroundcolor = i[0] + i[0] + i[1] + i[1] + i[2] + i[2];
		else throw Error("bwip-js: invalid backgroundcolor: " + e.backgroundcolor);
	}
	return e;
	function f(e, t, n, r) {
		var i = e == null ? t == null ? n | 0 : t | 0 : e | 0;
		return i = i < 0 ? 0 : i > 999 ? 999 : i, i * r | 0;
	}
}
var fn = {
	bcid: 1,
	text: 1,
	scale: 1,
	scaleX: 1,
	scaleY: 1,
	rotate: 1,
	padding: 1,
	paddingwidth: 1,
	paddingheight: 1,
	paddingtop: 1,
	paddingleft: 1,
	paddingright: 1,
	paddingbottom: 1,
	backgroundcolor: 1
};
function pn(e, t, n) {
	var r = t.text;
	if (!r) throw ReferenceError("bwip-js: bar code text not specified.");
	dn(t), n.setopts && n.setopts(t);
	var i = t.scaleX, a = t.scaleY;
	t.rotate;
	var o = new mn(n), s = {};
	for (var c in t) fn[c] || (s[c] = t[c]);
	return s.alttext && (s.includetext = !0), +s.height && e != en && (s.height = s.height / 25.4 || .5), +s.width && (s.width = s.width / 25.4 || 0), o.scale(i, a), cn(o, e, r, s), o.render();
}
var mn = (function() {
	var e = Math.floor, t = Math.round, n = Math.ceil, r = Math.min, i = Math.max;
	function a(e) {
		if (this.constructor !== a) return new a(e);
		this.gstk = [], this.cmds = [], this.drawing = e, this.reset(), this.minx = this.miny = Infinity, this.maxx = this.maxy = -Infinity;
	}
	return a.prototype.reset = function() {
		this.g_m0 = 1, this.g_m1 = 0, this.g_m2 = 0, this.g_m3 = 1, this.g_m4 = 0, this.g_m5 = 0, this.g_tsx = 1, this.g_tsy = 1, this.g_rot = 0, this.g_posx = 0, this.g_posy = 0, this.g_penw = 1, this.g_path = [], this.g_font = null, this.g_rgb = [
			0,
			0,
			0
		], this.g_clip = !1;
	}, a.prototype.save = function() {
		var e = {};
		for (var t in this) t.indexOf("g_") == 0 && (e[t] = n(this[t]));
		this.gstk.push(e);
		function n(e) {
			if (e instanceof Array) {
				for (var t = [], r = 0; r < e.length; r++) t[r] = n(e[r]);
				return t;
			}
			if (e instanceof Object) {
				var t = {};
				for (var i in e) t[i] = n(e[i]);
				return t;
			}
			return e;
		}
	}, a.prototype.restore = function() {
		if (!this.gstk.length) throw Error("grestore: stack underflow");
		var e = this.gstk.pop(), t = this;
		for (var n in this.g_clip && !e.g_clip && this.cmds.push(function() {
			t.drawing.unclip();
		}), e) this[n] = e[n];
	}, a.prototype.currpos = function() {
		return {
			x: (this.g_posx - this.g_m4) / this.g_tsx,
			y: (this.g_posy - this.g_m5) / this.g_tsy
		};
	}, a.prototype.currfont = function() {
		return this.g_font;
	}, a.prototype.rotate = function(e) {
		this.g_rot += e;
		var n = t(Math.cos(e * Math.PI / 180)), r = t(Math.sin(e * Math.PI / 180)), i = this.g_m0 * n + this.g_m2 * r, a = this.g_m1 * n + this.g_m3 * r, o = this.g_m0 * -r + this.g_m2 * n, s = this.g_m1 * -r + this.g_m3 * n;
		this.g_m0 = i, this.g_m1 = a, this.g_m2 = o, this.g_m3 = s;
	}, a.prototype.translate = function(e, t) {
		this.g_m4 += this.g_tsx * e, this.g_m5 += this.g_tsy * t;
	}, a.prototype.scale = function(e, t) {
		var n = this.g_tsx, r = this.g_tsy;
		this.g_tsx *= e, this.g_tsy *= t;
		var i = this.drawing.scale(this.g_tsx, this.g_tsy);
		i && i[0] && i[1] && (this.g_tsx = i[0], this.g_tsy = i[1]), this.g_m0 *= this.g_tsx / n, this.g_m1 *= this.g_tsx / n, this.g_m2 *= this.g_tsy / r, this.g_m3 *= this.g_tsy / r;
	}, a.prototype.setlinewidth = function(e) {
		this.g_penw = e;
	}, a.prototype.selectfont = function(e, t) {
		this.g_font = {
			FontName: this.jsstring(e),
			FontSize: +t
		};
	}, a.prototype.getfont = function() {
		return this.g_font.FontName;
	}, a.prototype.jsstring = function(e) {
		return e instanceof Uint8Array ? String.fromCharCode.apply(null, e) : "" + e;
	}, a.prototype.setcolor = function(e) {
		if (e instanceof Uint8Array && (e = this.jsstring(e)), e) {
			if (!/^(?:#?[0-9a-fA-F]{3}(?:[0-9a-fA-F]{3})?|[0-9a-fA-F]{8})$/.test(e)) throw Error("bwip-js: invalid color: " + e);
			if (e[0] == "#" && (e = e.substr(1)), e.length == 3) {
				var n = parseInt(e[0], 16), r = parseInt(e[1], 16), i = parseInt(e[2], 16);
				this.g_rgb = [
					n << 4 | n,
					r << 4 | r,
					i << 4 | i
				];
			} else if (e.length == 6) {
				var n = parseInt(e.substr(0, 2), 16), r = parseInt(e.substr(2, 2), 16), i = parseInt(e.substr(4, 2), 16);
				this.g_rgb = [
					n,
					r,
					i
				];
			} else {
				var a = parseInt(e.substr(0, 2), 16) / 255, o = parseInt(e.substr(2, 2), 16) / 255, s = parseInt(e.substr(4, 2), 16) / 255, c = parseInt(e.substr(6, 2), 16) / 255, n = t((1 - a) * (1 - c) * 255), r = t((1 - o) * (1 - c) * 255), i = t((1 - s) * (1 - c) * 255);
				this.g_rgb = [
					n,
					r,
					i
				];
			}
		}
	}, a.prototype.setrgbcolor = function(e, t, n) {
		this.g_rgb = [
			e,
			t,
			n
		];
	}, a.prototype.getRGB = function() {
		var e = this.g_rgb[0].toString(16), t = this.g_rgb[1].toString(16), n = this.g_rgb[2].toString(16);
		return "00".substr(e.length) + e + "00".substr(t.length) + t + "00".substr(n.length) + n;
	}, a.prototype.newpath = function() {
		this.g_path = [];
	}, a.prototype.closepath = function() {
		var e = this.g_path, t = e.length;
		if (t) {
			for (var n = t - 1; n >= 0 && e[n].op == "l"; n--);
			if (n++, n < t - 1) {
				for (var r = [], i = Infinity, a = Infinity, o = -Infinity, s = -Infinity, c = n; c < t; c++) {
					var l = e[c];
					r.push([l.x0, l.y0]), i > l.x0 && (i = l.x0), o < l.x0 && (o = l.x0), a > l.y0 && (a = l.y0), s < l.y0 && (s = l.y0);
				}
				var l = e[t - 1], u = e[n];
				(l.x1 != u.x0 || l.y1 != u.y0) && (r.push([l.x1, l.y1]), i > l.x1 && (i = l.x1), o < l.x1 && (o = l.x1), a > l.y1 && (a = l.y1), s < l.y1 && (s = l.y1)), e.splice(n, t - n, {
					op: "p",
					x0: i,
					y0: a,
					x1: o,
					y1: s,
					poly: r
				});
			} else e.push({ op: "c" });
		}
	}, a.prototype.moveto = function(e, t) {
		this.g_posx = this.g_m0 * e + this.g_m2 * t + this.g_m4, this.g_posy = this.g_m1 * e + this.g_m3 * t + this.g_m5;
	}, a.prototype.rmoveto = function(e, t) {
		this.g_posx += this.g_m0 * e + this.g_m2 * t + this.g_m4, this.g_posy += this.g_m1 * e + this.g_m3 * t + this.g_m5;
	}, a.prototype.lineto = function(e, n) {
		var r = t(this.g_posx), i = t(this.g_posy);
		this.g_posx = this.g_m0 * e + this.g_m2 * n + this.g_m4, this.g_posy = this.g_m1 * e + this.g_m3 * n + this.g_m5;
		var a = t(this.g_posx), o = t(this.g_posy);
		this.g_path.push({
			op: "l",
			x0: r,
			y0: i,
			x1: a,
			y1: o
		});
	}, a.prototype.rlineto = function(e, n) {
		var r = t(this.g_posx), i = t(this.g_posy);
		this.g_posx += this.g_m0 * e + this.g_m2 * n + this.g_m4, this.g_posy += this.g_m1 * e + this.g_m3 * n + this.g_m5;
		var a = t(this.g_posx), o = t(this.g_posy);
		this.g_path.push({
			op: "l",
			x0: r,
			y0: i,
			x1: a,
			y1: o
		});
	}, a.prototype.arc = function(e, t, n, r, i, a) {
		if (r != i) {
			if (r != 0 && r != 360 || i != 0 && i != 360) throw Error("arc: not a full circle (" + r + "," + i + ")");
			var o = this.g_m0 * e + this.g_m2 * t + this.g_m4, s = this.g_m1 * e + this.g_m3 * t + this.g_m5, c = n * this.g_tsx, l = n * this.g_tsy;
			this.g_path.push({
				op: "e",
				x0: o - c,
				y0: s - l,
				x1: o + c,
				y1: s + l,
				x: o,
				y: s,
				rx: c,
				ry: l,
				sa: r,
				ea: i,
				ccw: a
			});
		}
	}, a.prototype.stringwidth = function(e) {
		var t = this.g_tsx, n = this.g_tsy, r = +this.g_font.FontSize || 10;
		e = this.toUCS2(this.jsstring(e));
		var i = this.drawing.measure(e, this.g_font.FontName, r * t, r * n);
		return {
			w: i.width / t,
			h: (i.ascent + i.descent) / n,
			a: i.ascent / n,
			d: i.descent / n
		};
	}, a.prototype.charpath = function(e, t) {
		var n = this.stringwidth(e);
		this.rlineto(0, n.a), this.rlineto(n.w, 0), this.rlineto(0, -n.h);
	}, a.prototype.pathbbox = function() {
		if (!this.g_path.length) throw Error("pathbbox: --nocurrentpoint--");
		for (var e = this.g_path, t = Infinity, n = Infinity, r = -Infinity, i = -Infinity, a = 0; a < e.length; a++) {
			var o = e[a];
			o.op != "c" && (o.x0 < o.x1 ? (t > o.x0 && (t = o.x0), r < o.x1 && (r = o.x1)) : (t > o.x1 && (t = o.x1), r < o.x0 && (r = o.x0)), o.y0 < o.y1 ? (n > o.y0 && (n = o.y0), i < o.y1 && (i = o.y1)) : (n > o.y1 && (n = o.y1), i < o.y0 && (i = o.y0)));
		}
		return {
			llx: (t - this.g_m4) / this.g_tsx,
			lly: (n - this.g_m5) / this.g_tsy,
			urx: (r - this.g_m4) / this.g_tsx,
			ury: (i - this.g_m5) / this.g_tsy
		};
	}, a.prototype.transform = function(e) {
		for (var t = this.minx, n = this.maxy, r = 0; r < e.length; r++) {
			var i = e[r];
			i[0] -= t, i[1] = n - i[1];
		}
	}, a.prototype.stroke = function() {
		var t = this.g_tsx, a = this.g_tsy, o = this.g_path, s = this.getRGB();
		this.g_path = [];
		for (var c = e(this.g_penw * t + .66), l = e(this.g_penw * a + .66), u = 0, d = 0, f = 0; f < o.length; f++) {
			var p = o[f];
			if (p.op == "l") {
				if (p.x0 != p.x1 && p.y0 != p.y1) throw Error("stroke: --not-orthogonal--");
				var m = p.x0, h = p.y0, g = p.x1, _ = p.y1, v = c / 2, y = l / 2;
				if (m > g) {
					var b = m;
					m = g, g = b;
				}
				if (h > _) {
					var b = h;
					h = _, _ = b;
				}
				m == g ? this.bbox(m - v, h, m + c - v - 1, _) : this.bbox(m, h - l + y + 1, g, _ + y), u++;
			} else if (p.op == "p") {
				var x = Infinity, S = Infinity, C = -Infinity, w = -Infinity, T = p.poly;
				if (T.length != 4) throw Error("stroke: --not-a-rect--");
				for (var f = 0, E = T.length - 1; f < T.length; E = f++) {
					var D = T[E][0], O = T[E][1], k = T[f][0], A = T[f][1];
					if (k != D && A != O) throw Error("stroke: --not-orthogonal--");
					k < x && (x = k), k > C && (C = k), A < S && (S = A), A > w && (w = A);
				}
				var v = n(c / 2), y = n(l / 2);
				this.bbox(x - v, S - y, C + v, w + y), d++;
			} else throw Error("stroke: --not-a-line--");
		}
		var j = this;
		this.cmds.push(function() {
			for (var e = n(c / 2), t = n(l / 2), a = c - e, u = l - t, d = 0; d < o.length; d++) {
				var f = o[d];
				if (f.op == "l") {
					var p = [[f.x0, f.y0], [f.x1, f.y1]];
					j.transform(p), j.drawing.line(p[0][0], p[0][1], p[1][0], p[1][1], f.x0 == f.x1 ? c : l, s), j.fill(s);
				} else {
					var p = f.poly;
					j.transform(p);
					var m = r(p[0][0], p[2][0]), h = i(p[0][0], p[2][0]), g = r(p[0][1], p[2][1]), _ = i(p[0][1], p[2][1]);
					j.drawing.polygon([
						[m - e, g - t],
						[m - e, _ + t + 1],
						[h + e + 1, _ + t + 1],
						[h + e + 1, g - t]
					]), j.drawing.polygon([
						[m + a, g + u],
						[h - a + 1, g + u],
						[h - a + 1, _ - u + 1],
						[m + a, _ - u + 1]
					]), j.drawing.fill(s);
				}
			}
		});
	}, a.prototype.fill = function() {
		var e = this.g_path, t = this.getRGB();
		this.g_path = [];
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			if (r.op == "p") {
				for (var i = Infinity, a = Infinity, o = -Infinity, s = -Infinity, c = r.poly, l = 0; l < c.length; l++) {
					var u = c[l][0], d = c[l][1];
					u < i && (i = u), u > o && (o = u), d < a && (a = d), d > s && (s = d);
				}
				this.bbox(i, a + 1, o - 1, s);
			} else if (r.op == "e") this.bbox(r.x - r.rx, r.y - r.ry, r.x + r.rx, r.y + r.ry);
			else throw Error("fill: --not-a-polygon--");
		}
		var f = this;
		this.cmds.push(function() {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (r.op == "p") {
					var i = r.poly;
					f.transform(i), f.drawing.polygon(i);
				} else if (r.op == "e") {
					var i = [[r.x, r.y]];
					f.transform(i), f.drawing.ellipse(i[0][0], i[0][1], r.rx, r.ry, r.ccw);
				}
			}
			f.drawing.fill(t);
		});
	}, a.prototype.clip = function() {
		var e = this.g_path;
		this.g_path = [], this.g_clip = !0;
		var t = this;
		this.cmds.push(function() {
			for (var n = [], r = 0; r < e.length; r++) {
				var i = e[r];
				if (i.op == "p") {
					var a = i.poly;
					t.transform(a), n.push(a);
				} else throw Error("clip: only polygon regions supported");
			}
			t.drawing.clip(n);
		});
	}, a.prototype.drawlayer = function(e, t, n) {
		let r = hn(e, t, n);
		this.newpath();
		for (let e = 0, t = r.length; e < t; e++) {
			let t = r[e];
			this.moveto(t[0][0], t[0][1]);
			for (let e = 1, n = t.length; e < n; e++) {
				let n = t[e];
				this.lineto(n[0], n[1]);
			}
			this.closepath();
		}
		this.fill();
	}, a.prototype.showmaxicode = function(e) {
		var t = this.g_tsx, n = this.g_tsy, r = this.getRGB(), i = 1.04 * t * 100, a = i / 30 | 0;
		i - (a * 30 - 1) > 9 && a++;
		var o, s, c = t / 2 | 0, l = n / 2 | 0;
		o = a - c, o & 1 && o--, s = (4 * n | 0) - l;
		var u = o / 2 - 1, d = (u + 1) / 2 | 0, f = s - 2 - 2 * d;
		this.bbox(0, 0, a * 30 - c, n * 3 * 32 + n * 4 - l);
		var p = this;
		this.cmds.push(function() {
			for (var i = 0; i < e.length; i++) {
				var o = e[i], c = o % 30, l = o / 30 | 0;
				c *= a, c += l & 1 ? a : a / 2, c |= 0, l = 33 - l, l *= n * 3, l += n * 2 - s / 2, l |= 0;
				var m = [[c - .5, l--]];
				l -= d - 1, m.push([c - 1 - u, l--]), l -= f, m.push([c - 1 - u, l--]), l -= d - 1, m.push([c - .5, l++]), l += d - 1, m.push([c + u, l++]), l += f, m.push([c + u, l++]), p.transform(m), p.drawing.hexagon(m, r);
			}
			p.drawing.fill(r);
			var c = 14 * a + a / 2 + .01 | 0, l = 51 * n - d / 2 + .01 | 0;
			p.drawing.ellipse(c, l, 2.0209 * t + .01 | 0, 2.0209 * n + .01 | 0, !0), p.drawing.ellipse(c, l, 4.67565 * t + .01 | 0, 4.67565 * n + .01 | 0, !1), p.drawing.fill(r), p.drawing.ellipse(c, l, 2.1058 * 3.5 * t + .01 | 0, 2.1058 * 3.5 * n + .01 | 0, !0), p.drawing.ellipse(c, l, 10.0254 * t + .01 | 0, 10.0254 * n + .01 | 0, !1), p.drawing.fill(r), p.drawing.ellipse(c, l, 12.68015 * t + .01 | 0, 12.68015 * n + .01 | 0, !0), p.drawing.ellipse(c, l, 4.3814 * 3.5 * t + .01 | 0, 4.3814 * 3.5 * n + .01 | 0, !1), p.drawing.fill(r);
		});
	}, a.prototype.toUCS2 = function(e) {
		return e.replace(/[\xc0-\xdf][\x80-\xbf]|[\xe0-\xff][\x80-\xbf]{2}/g, function(e) {
			var t = e.length == 2 ? (e.charCodeAt(0) & 31) << 6 | e.charCodeAt(1) & 63 : (e.charCodeAt(0) & 15) << 12 | (e.charCodeAt(1) & 63) << 6 | e.charCodeAt(2) & 63;
			return String.fromCharCode(t);
		});
	}, a.prototype.show = function(e, t, n) {
		if (e.length) {
			var r = this.g_rot, i = r == 90 || r == 270 ? this.g_tsy : this.g_tsx, a = r == 90 || r == 270 ? this.g_tsx : this.g_tsy, o = this.g_font.FontName || "OCR-B", s = this.g_font.FontSize || 10, c = s * i, l = s * a, u = this.g_posx, d = this.g_posy, f = this.getRGB();
			t = i * t || 0, n = a * n || 0, e = this.toUCS2(this.jsstring(e));
			var p = this.drawing.measure(e, o, c, l), m = p.width + (e.length - 1) * t;
			r == 90 ? this.bbox(u - n + p.descent - 1, d, u - n - p.ascent, d + m - 1) : r == 180 ? this.bbox(u, d - n + p.descent - 1, u - m + 1, d - n - p.ascent) : r == 270 ? this.bbox(u + n - p.descent + 1, d, u + n + p.ascent, d - m + 1) : (r = 0, this.bbox(u, d + n - p.descent + 1, u + m - 1, d + n + p.ascent), this.g_posx += m);
			var h = this;
			h.cmds.push(function() {
				var n = u - h.minx, i = h.maxy - d;
				h.drawing.text(n, i, e, f, {
					name: o,
					width: c,
					height: l,
					rotate: r,
					dx: t
				});
			});
		}
	}, a.prototype.bbox = function(t, r, i, a) {
		if (t > i) {
			var o = t;
			t = i, i = o;
		}
		if (r > a) {
			var o = r;
			r = a, a = o;
		}
		t = e(t), r = e(r), i = n(i), a = n(a), this.minx > t && (this.minx = t), this.maxx < i && (this.maxx = i), this.miny > r && (this.miny = r), this.maxy < a && (this.maxy = a);
	}, a.prototype.render = function() {
		if (this.minx === Infinity) return !1;
		this.drawing.init(this.maxx - this.minx + 1, this.maxy - this.miny + 1, this.g_tsx, this.g_tsy);
		for (var e = 0, t = this.cmds.length; e < t; e++) this.cmds[e]();
		return this.drawing.end();
	}, a;
})();
function hn(e, t, n, r, i) {
	let a = r || 0, o = i || 0, s = Array(n + 1), c = 0;
	for (let r = n - 1; r >= 0; r--) {
		let n = new Uint8Array(t);
		for (let r = 0; r < t; r++) n[r] = +!!e[c + r];
		s[r] = n, c += t;
	}
	s[-1] = [], s[n] = [];
	let l = [];
	for (let e = 0; e < n; e++) {
		let n = 0;
		for (let r = 0; r < t; r++) !(n & 9) && s[e][r] == 1 ? l.push(u(r, e, [])) : (n & 5) == 1 && s[e][r] == 0 && l.push(d(r, e, [])), n = s[e][r];
	}
	return l;
	function u(e, t, n) {
		n.push([e + a, t + o]);
		let r = 2;
		for (;;) {
			if (s[t][e] & r) return n.pop(), n;
			s[t][e] |= r, r == 2 ? s[t][e + 1] & 1 ? (s[t - 1][e + 1] & 1 && (n.push([
				e + 1 - a,
				t + o,
				"H"
			]), r = 16), e++) : (n.push([
				e + 1 - a,
				t + o,
				"H"
			]), r = 4) : r == 4 ? s[t + 1][e] & 1 ? (s[t + 1][e + 1] & 1 && (n.push([
				e + 1 - a,
				t + 1 - o,
				"V"
			]), r = 2), t++) : (n.push([
				e + 1 - a,
				t + 1 - o,
				"V"
			]), r = 8) : r == 8 ? s[t][e - 1] & 1 ? (s[t + 1][e - 1] & 1 && (n.push([
				e + a,
				t + 1 - o,
				"H"
			]), r = 4), e--) : (n.push([
				e + a,
				t + 1 - o,
				"H"
			]), r = 16) : s[t - 1][e] & 1 ? (s[t - 1][e - 1] & 1 && (n.push([
				e + a,
				t + o,
				"V"
			]), r = 8), t--) : (n.push([
				e + a,
				t + o,
				"V"
			]), r = 2);
		}
	}
	function d(e, t, n) {
		n.push([e - a, t - o]);
		let r = 2;
		for (;;) {
			if (s[t][e] & r) return n.pop(), n;
			s[t][e] |= r, r == 2 ? s[t + 1][e] & 1 ? (n.push([e - a, t + 1 + o]), r = 4) : (s[t + 1][e - 1] & 1 || (n.push([e - a, t + 1 + o]), r = 16), t++) : r == 4 ? s[t][e + 1] & 1 ? (n.push([e + 1 + a, t + 1 + o]), r = 8) : (s[t + 1][e + 1] & 1 || (n.push([e + 1 + a, t + 1 + o]), r = 2), e++) : r == 8 ? s[t - 1][e] & 1 ? (n.push([e + 1 + a, t - o]), r = 16) : (s[t - 1][e + 1] & 1 || (n.push([e + 1 + a, t - o]), r = 4), t--) : s[t][e - 1] & 1 ? (n.push([e - a, t - o]), r = 2) : (s[t - 1][e - 1] & 1 || (n.push([e - a, t - o]), r = 8), e--);
		}
	}
}
function gn() {
	var e = 0, t = 0, n = 0, r = 0, i = 0, a = 0, o, s, c, l, u, d, f, p, m, h, g, _;
	return {
		setopts(e) {
			o = e;
		},
		scale: function(e, t) {
			return o.bcid == "swissqrcode" ? [e, t] : [e | 0 || 1, t | 0 || 1];
		},
		measure: function(e, t, n, r) {
			n |= 0, r |= 0;
			for (var i = yn.lookup(t), a = 0, o = 0, s = 0, c = 0, l = e.length; c < l; c++) {
				var u = e.charCodeAt(c), d = yn.getglyph(i, u, n, r);
				o = Math.max(o, d.top), s = Math.max(s, d.height - d.top), c == l - 1 ? a += d.left + d.width : a += d.advance;
			}
			return {
				width: a,
				ascent: o,
				descent: s
			};
		},
		init: function(v, y) {
			var b = o.paddingleft, x = o.paddingright, S = o.paddingtop, C = o.paddingbottom, w = o.rotate || "N";
			if (v += b + x, y += S + C, +o.sizelimit) {
				if (+o.sizelimit < v * y) throw Error("Image size over limit");
			} else if (v * y > 67108864) throw Error("Image size over default limit");
			switch (w) {
				case "R":
					t = -1, n = 1, r = 1;
					break;
				case "I":
					e = -1, n = 1, i = -1, a = 1;
					break;
				case "L":
					t = 1, r = -1, a = 1;
					break;
				default: e = i = 1;
			}
			var T = w == "L" || w == "R";
			l = T ? y : v, u = T ? v : y, d = b, f = S, g = [], g.min = Infinity, _ = null, p = m = h = 0;
			var E = this.image(l, u);
			s = E.buffer, c = +!!E.ispng;
		},
		line: function(e, t, n, r, i, a) {
			if (e |= 0, t |= 0, n |= 0, r |= 0, i = Math.round(i) || 1, r < t) {
				var o = t;
				t = r, r = o;
			}
			if (n < e) {
				var o = e;
				e = n, n = o;
			}
			p = parseInt(a.substr(0, 2), 16), m = parseInt(a.substr(2, 2), 16), h = parseInt(a.substr(4, 2), 16);
			var s = i / 2 | 0;
			e == n ? (e = e - i + s, n = n + s - 1) : (t -= s, r = r + i - s - 1);
			for (var c = t; c <= r; c++) for (var l = e; l <= n; l++) v(l, c, 255);
		},
		polygon: function(e) {
			for (var t = e.length, n = t - 1, r = 0; r < t; n = r++) if (e[n][0] == e[r][0]) {
				var i = e[n][0] | 0, a = e[n][1] | 0, o = e[r][1] | 0;
				if (a > o) for (var s = o + 1; s < a; s++) y(i, s);
				else for (var s = a + 1; s < o; s++) y(i, s);
			} else {
				var i = e[n][0] | 0, c = e[r][0] | 0, a = e[n][1] | 0;
				if (i < c) {
					var l = e[n == 0 ? t - 1 : n - 1][1], u = e[r == t - 1 ? 0 : r + 1][1];
					l > a && y(i, a), u > a && y(c, a);
				} else {
					var l = e[r == t - 1 ? 0 : r + 1][1], u = e[n == 0 ? t - 1 : n - 1][1];
					l > a && y(c, a), u > a && y(i, a);
				}
			}
		},
		hexagon: function(e, t) {
			var n = e[0][0] | 0, r = e[0][1] | 0, i = e[1][1] - e[0][1] | 0, a = e[2][1] - e[1][1] - 1 | 0, o = e[2][0] | 0, s = e[4][0] | 0;
			p = parseInt(t.substr(0, 2), 16), m = parseInt(t.substr(2, 2), 16), h = parseInt(t.substr(4, 2), 16), b(n, n + 1, r++);
			for (var c = 1; c < i; c++) b(n - 2 * c, n + 1 + 2 * c, r++);
			for (var c = 0; c <= a; c++) b(o, s, r++);
			for (var c = i - 1; c >= 1; c--) b(n - 2 * c, n + 1 + 2 * c, r++);
			b(n, n + 1, r);
		},
		ellipse: function(e, t, n, r, i) {
			S(e - n | 0, t - r | 0, e + n | 0, t + r | 0, i);
		},
		fill: function(e) {
			p = parseInt(e.substr(0, 2), 16), m = parseInt(e.substr(2, 2), 16), h = parseInt(e.substr(4, 2), 16), x(), g = [], g.min = Infinity;
		},
		clip: function(e) {
			_ || (_ = [], _.min = Infinity);
			var t = g;
			g = _;
			for (var n = 0, r = e.length; n < r; n++) this.polygon(e[n]);
			g = t;
		},
		unclip: function() {
			_ = null;
		},
		text: function(e, t, n, r, i) {
			e |= 0, t |= 0, p = parseInt(r.substr(0, 2), 16), m = parseInt(r.substr(2, 2), 16), h = parseInt(r.substr(4, 2), 16);
			var a = yn.lookup(i.name), o = i.width | 0, s = i.height | 0, c = i.dx | 0, l = 0, u = 0, d = 0, f = 0;
			switch (i.rotate) {
				case 90:
					u = 1, d = -1;
					break;
				case 180:
					l = -1, f = -1;
					break;
				case 270:
					u = -1, d = 1;
					break;
				default: l = 1, f = 1;
			}
			for (var g = 0, _ = 0; _ < n.length; _++) {
				for (var y = n.charCodeAt(_), b = yn.getglyph(a, y, o, s), x = -b.top, S = b.left, C = b.width, w = b.height, T = b.bytes, E = b.offset, D = 0; D < C; D++) for (var O = 0; O < w; O++) {
					var k = T[E + O * C + D];
					if (k) {
						var A = g + S + D, j = x + O, M = l * A + u * j, N = d * A + f * j;
						v(e + M, t + N, k);
					}
				}
				g += b.advance + c;
			}
		},
		end: function() {}
	};
	function v(o, g, v) {
		if (!(_ && C(o, g))) {
			o += d, g += f;
			var y = e * o + t * g + n * (l - 1) + 0 * (u - 1), b = r * o + i * g + 0 * (l - 1) + a * (u - 1), x = (b * l + y) * 4 + (b + 1) * c, S = s[x + 3] / 255, w = v / 255, T = (1 - w) * S, E = w + T;
			s[x + 0] = (p * w + s[x + 0] * T) / E | 0, s[x + 1] = (m * w + s[x + 1] * T) / E | 0, s[x + 2] = (h * w + s[x + 2] * T) / E | 0, s[x + 3] = 255 * E | 0;
		}
	}
	function y(e, t) {
		g.min > t && (g.min = t), g[t] ? g[t].push(e) : g[t] = [e];
	}
	function b(e, t, n) {
		for (; e <= t;) v(e++, n, 255);
	}
	function x() {
		for (var e = g.min, t = g.length - 1, n = e; n <= t; n++) {
			var r = g[n];
			if (r) {
				r.sort(function(e, t) {
					return e - t;
				});
				for (var i = !1, a = 0, o = 0, s = r.length; o < s; o++) {
					var c = r[o];
					i ? b(a, c - 1, n) : a = c, i = !i;
				}
			}
		}
	}
	function S(e, t, n, r, i) {
		e |= 0, t |= 0, n |= 0, r |= 0;
		var a = Math.abs(n - e), o = Math.abs(r - t), s = o & 1, c = 4 * (1 - a) * o * o, l = 4 * (s + 1) * a * a, u = c + l + s * a * a, d, f = [], p = [];
		f.min = p.min = Infinity, e > n && (e = n, n += a), t > r && (t = r), t += (o + 1) / 2 | 0, r = t - s, a *= 8 * a, s = 8 * o * o;
		do
			_(p, n, t), g(f, e, t), g(f, e, r), _(p, n, r), d = 2 * u, d >= c && (e++, n--, c += s, u += c), d <= l && (t++, r--, l += a, u += l);
		while (e <= n);
		for (; t - r < o;) _(p, n + 1, t), g(f, e - 1, t++), g(f, e - 1, r), _(p, n + 1, r--);
		for (var m = f.min, h = f.length - 1; m <= h; m++) y(f[m], m);
		for (var m = p.min, h = p.length - 1; m <= h; m++) y(p[m] + 1, m);
		function g(e, t, n) {
			e.min > n && (e.min = n);
			var r = e[n];
			(r == null || r > t) && (e[n] = t);
		}
		function _(e, t, n) {
			e.min > n && (e.min = n);
			var r = e[n];
			(r == null || r < t) && (e[n] = t);
		}
	}
	function C(e, t) {
		var n = _[t];
		if (!n) return !0;
		n.sorted ||= (n.sort(function(e, t) {
			return e - t;
		}), !0);
		for (var r = !1, i = 0, a = n.length; i < a; i++) {
			var o = n[i];
			if (o > e) return !r;
			if (o == e) return r;
			r = !r;
		}
		return !0;
	}
}
function _n(e, t) {
	ln(t) && (e = t);
	var n, r = e.getContext("2d", { willReadFrequently: !0 }), i = gn();
	i.image = s, i.end = c;
	var a, o = i.setopts;
	return i.setopts = function(e) {
		a = e, o && o.call(i, e);
	}, i;
	function s(t, i) {
		return e.width = t, e.height = i, r.setTransform(1, 0, 0, 1, 0, 0), /^[0-9a-fA-F]{6}$/.test("" + a.backgroundcolor) ? (r.fillStyle = "#" + a.backgroundcolor, r.fillRect(0, 0, t, i)) : r.clearRect(0, 0, t, i), n = r.getImageData(0, 0, t, i), {
			buffer: n.data,
			ispng: !1
		};
	}
	function c() {
		return r.putImageData(n, 0, 0), e;
	}
}
function vn() {
	var e = 0, t = 0, n = 0, r = 0, i = 0, a = 0, o, s = "", c, l = "", u = [], d = {}, f, p, m = .55183475, h, g, _, v;
	return {
		setopts(e) {
			o = e;
		},
		scale(e, t) {
			f = e, p = t;
		},
		measure(e, t, n, r) {
			n |= 0, r |= 0;
			for (var i = yn.lookup(t), a = 0, o = 0, s = 0, c = 0, l = e.length; c < l; c++) {
				var u = e.charCodeAt(c), d = yn.getglyph(i, u, n, r);
				d && (o = Math.max(o, d.top), s = Math.max(s, d.height - d.top), c == l - 1 ? a += d.left + d.width : a += d.advance);
			}
			return {
				width: a,
				ascent: o,
				descent: s
			};
		},
		init(s, c) {
			var l = o.paddingleft, u = o.paddingright, d = o.paddingtop, f = o.paddingbottom, p = o.rotate || "N";
			switch (s += l + u, c += d + f, p) {
				case "R":
					t = -1, n = 1, r = 1;
					break;
				case "I":
					e = -1, n = 1, i = -1, a = 1;
					break;
				case "L":
					t = 1, r = -1, a = 1;
					break;
				default: e = i = 1;
			}
			var m = p == "L" || p == "R";
			h = m ? c : s, g = m ? s : c, _ = l, v = d;
		},
		line(e, t, n, r, i, a) {
			if (e |= 0, t |= 0, n |= 0, r |= 0, i = Math.round(i) || 1, i & 1) {
				if (e == n) {
					let t = f & 1 ? -.5 : .5;
					e += t, n += t;
				}
				if (t == r) {
					let e = p & 1 ? -.5 : .5;
					t += e, r += e;
				}
			}
			e == n ? t++ : t == r && e++;
			var o = "" + i + "#" + a;
			d[o] || (d[o] = "<path stroke=\"#" + a + "\" stroke-width=\"" + i + "\" d=\""), d[o] += "M" + y(e, t) + "L" + y(n, r);
		},
		polygon(e) {
			c ||= "<path d=\"", c += "M" + y(e[0][0], e[0][1]);
			for (var t = 1, n = e.length; t < n; t++) {
				var r = e[t];
				c += "L" + y(r[0], r[1]);
			}
			c += "Z";
		},
		hexagon(e, t) {
			this.polygon(e);
		},
		ellipse(e, t, n, r, i) {
			c ||= "<path d=\"";
			var a = n * m, o = r * m;
			c += "M" + y(e - n, t) + "C" + y(e - n, t - o) + " " + y(e - a, t - r) + " " + y(e, t - r) + "C" + y(e + a, t - r) + " " + y(e + n, t - o) + " " + y(e + n, t) + "C" + y(e + n, t + o) + " " + y(e + a, t + r) + " " + y(e, t + r) + "C" + y(e - a, t + r) + " " + y(e - n, t + o) + " " + y(e - n, t) + "Z";
		},
		fill(e) {
			c &&= (s += c + "\" fill-rule=\"evenodd\"" + (o.barcolor ? " fill=\"#" + e + "\"" : "") + (l ? " clip-path=\"url(#" + l + ")\"" : "") + " />\n", null);
		},
		clip: function(e) {
			var t = "<clipPath id=\"clip" + u.length + "\"><path d=\"";
			for (let a = 0; a < e.length; a++) {
				let o = e[a];
				t += "M" + y(o[0][0], o[0][1]);
				for (var n = 1, r = o.length; n < r; n++) {
					var i = o[n];
					t += "L" + y(i[0], i[1]);
				}
				t += "Z";
			}
			t += "\" clip-rule=\"nonzero\" /></clipPath>", l = "clip" + u.length, u.push(t);
		},
		unclip: function() {
			l = "";
		},
		text(e, t, n, r, i) {
			e |= 0, t |= 0;
			for (var a = e, o = t, c = yn.lookup(i.name), l = i.width | 0, u = i.height | 0, d = i.dx | 0, f = "", p = 0; p < n.length; p++) {
				var m = n.charCodeAt(p), h = yn.getpaths(c, m, l, u);
				if (h) {
					if (h.length) {
						for (var g = 0, _ = h.length; g < _; g++) {
							let n = h[g];
							n.type == "M" || n.type == "L" ? f += n.type + y(n.x + e, t - n.y) : n.type == "Q" ? f += n.type + y(n.cx + e, t - n.cy) + " " + y(n.x + e, t - n.y) : n.type == "C" && (f += n.type + y(n.cx1 + e, t - n.cy1) + " " + y(n.cx2 + e, t - n.cy2) + " " + y(n.x + e, t - n.y));
						}
						f += "Z";
					}
					e += yn.getglyph(c, m, l, u).advance + d;
				}
			}
			f && (i.rotate ? s += "<path d=\"" + f + "\" fill=\"#" + r + "\" transform=\"rotate(-" + i.rotate + " " + y(a, o) + ")\" />\n" : s += "<path d=\"" + f + "\" fill=\"#" + r + "\" />\n");
		},
		end() {
			var e = "";
			for (var t in d) e += d[t] + "\" />\n";
			var n = o.backgroundcolor;
			return "<svg viewBox=\"0 0 " + h + " " + g + "\" xmlns=\"http://www.w3.org/2000/svg\">\n" + (u.length ? "<defs>" + u.join("") + "</defs>" : "") + (/^[0-9A-Fa-f]{6}$/.test("" + n) ? "<rect width=\"100%\" height=\"100%\" fill=\"#" + n + "\" />\n" : "") + e + s + "</svg>\n";
		}
	};
	function y(o, s) {
		o += _, s += v;
		var c = e * o + t * s + n * (h - 1) + 0 * (g - 1), l = r * o + i * s + 0 * (h - 1) + a * (g - 1);
		return "" + ((c | 0) == c ? c : c.toFixed(2)) + " " + ((l | 0) == l ? l : l.toFixed(2));
	}
}
var yn = (function() {
	var e = [], t = {}, n = {}, r = {}, i = 0;
	return r.next = r, r.prev = r, {
		lookup: o,
		monochrome: s,
		getglyph: c,
		getpaths: l,
		loadFont: a
	};
	function a(n) {
		var r = 100, i = 100, a = null;
		if (arguments.length == 2) a = arguments[1];
		else if (arguments.length == 3) r = i = +arguments[1] || 100, a = arguments[2];
		else if (arguments.length == 4) i = +arguments[1] || 100, r = +arguments[2] || 100, a = arguments[3];
		else throw Error("bwipjs: loadFont: invalid number of arguments");
		n = n.toUpperCase();
		var o = bn.InitFont(xn(a));
		o.bwipjs_name = n, o.bwipjs_multx = r, o.bwipjs_multy = i;
		var s = t[n];
		return s == null ? t[n] = s = e.push(o) - 1 : e[s] = o, s;
	}
	function o(e) {
		var n = t[e.toUpperCase()];
		return n === void 0 ? 1 : n;
	}
	function s(e) {
		if (e) throw Error("bwipjs: monochrome fonts not implemented");
	}
	function c(t, a, o, s) {
		t |= 0, a |= 0, o = +o, s = +s, (!o || o < 8) && (o = 8), (!s || s < 8) && (s = o), (t < 0 || t >= e.length) && (t = 1), (!a || a < 32) && (a = 32);
		var c = "" + t + "c" + a + "w" + o + "h" + s, l = n[c];
		if (l) {
			l.prev.next = l.next, l.next.prev = l.prev;
			var u = r;
			return u.next.prev = l, l.next = u.next, l.prev = u, u.next = l, l;
		}
		var d = e[t], l = bn.GetGlyph(d, a, o * d.bwipjs_multx / 100, s * d.bwipjs_multy / 100) || bn.GetGlyph(d, 0, o * d.bwipjs_multx / 100, s * d.bwipjs_multy / 100);
		if (l.bytes = l.pixels, l.cachekey = c, l.offset = 0, i > 250) {
			var u = r, f = u.prev;
			f.prev.next = u, u.prev = f.prev, f.next = f.prev = null, delete n[f.cachekey];
		} else i++;
		n[c] = l;
		var u = r;
		return u.next.prev = l, l.next = u.next, l.prev = u, u.next = l, l;
	}
	function l(t, n, r, i) {
		t |= 0, n |= 0, r = +r, i = +i, (!r || r < 8) && (r = 8), (!i || i < 8) && (i = r), (t < 0 || t >= e.length) && (t = 1), (!n || n < 32) && (n = 32);
		var a = e[t];
		return bn.GetPaths(a, n, r * a.bwipjs_multx / 100, i * a.bwipjs_multy / 100);
	}
})(), bn = (function() {
	var e = Math.floor, t = Math.ceil, n = Math.sqrt, r = Math.abs;
	function i(e) {
		for (var t = [], n = 0; n < e; n++) t.push({});
		return t;
	}
	function a(e) {
		return e[e.cursor++] || 0;
	}
	function o(e) {
		return e[e.cursor];
	}
	function s(e, t) {
		e.cursor = t > e.length || t < 0 ? e.length : t;
	}
	function c(e, t) {
		s(e, e.cursor + t);
	}
	function l(e, t) {
		for (var n = 0, r = 0; r < t; r++) n = n << 8 | a(e);
		return n;
	}
	function u() {
		return { length: 0 };
	}
	function d(e, t, n) {
		if (t < 0 || n < 0 || t > e.length || n > e.length - t) return u();
		var r = e.subarray(t, t + n);
		return r.cursor = 0, r;
	}
	function f(e) {
		var t = e.cursor, n = l(e, 2);
		if (n) {
			var r = a(e);
			c(e, r * n), c(e, l(e, r) - 1);
		}
		return d(e, t, e.cursor - t);
	}
	function p(e) {
		var t = a(e);
		return t >= 32 && t <= 246 ? t - 139 : t >= 247 && t <= 250 ? (t - 247) * 256 + a(e) + 108 : t >= 251 && t <= 254 ? -(t - 251) * 256 - a(e) - 108 : t == 28 ? l(e, 2) : t == 29 ? l(e, 4) : 0;
	}
	function m(e) {
		if (o(e) == 30) for (c(e, 1); e.cursor < e.length;) {
			var t = a(e);
			if ((t & 15) == 15 || t >> 4 == 15) break;
		}
		else p(e);
	}
	function h(e, t) {
		for (s(e, 0); e.cursor < e.length;) {
			for (var n = e.cursor, r, i; o(e) >= 28;) m(e);
			if (r = e.cursor, i = a(e), i == 12 && (i = a(e) | 256), i == t) return d(e, n, r - n);
		}
		return d(e, 0, 0);
	}
	function g(e, t, n, r) {
		for (var i = h(e, t), a = 0; a < n && i.cursor < i.length; a++) r[a] = p(i);
	}
	function _(e, t, n) {
		var r = h(e, t);
		return r.cursor < r.length && (n = p(r)), n;
	}
	function v(e) {
		return s(e, 0), l(e, 2);
	}
	function y(e, t) {
		var n, r, i, o;
		return s(e, 0), n = l(e, 2), r = a(e), c(e, t * r), i = l(e, r), o = l(e, r), d(e, 2 + (n + 1) * r + i, o - i);
	}
	function b(e) {
		return e & 32768 ? 4294901760 | e : e;
	}
	function x(e, t) {
		return e[t] * 256 + e[t + 1];
	}
	function S(e, t) {
		var n = e[t] * 256 + e[t + 1];
		return n & 32768 ? 4294901760 | n : n;
	}
	function C(e, t) {
		return (e[t] << 24) + (e[t + 1] << 16) + (e[t + 2] << 8) + e[t + 3];
	}
	function w(e, t, n) {
		for (var r = x(e, t + 4), i = t + 12, a = 0; a < r; ++a) {
			var o = i + 16 * a;
			if (e[o] == n[0] && e[o + 1] == n[1] && e[o + 2] == n[2] && e[o + 3] == n[3]) return C(e, o + 8);
		}
		return 0;
	}
	function T(e, t) {
		var n = [0, 0];
		if (g(t, 18, 2, n), !n[1] || !n[0]) return u();
		var r = _(d(e, n[1], n[0]), 19, 0);
		return r ? (s(e, n[1] + r), f(e)) : u();
	}
	function E(e, t, n) {
		var r, i, o, l;
		if (e.data = t, e.fontstart = n, e.cff = u(), r = w(t, n, [
			99,
			109,
			97,
			112
		]), e.loca = w(t, n, [
			108,
			111,
			99,
			97
		]), e.head = w(t, n, [
			104,
			101,
			97,
			100
		]), e.glyf = w(t, n, [
			103,
			108,
			121,
			102
		]), e.hhea = w(t, n, [
			104,
			104,
			101,
			97
		]), e.hmtx = w(t, n, [
			104,
			109,
			116,
			120
		]), e.kern = w(t, n, [
			107,
			101,
			114,
			110
		]), !r || !e.head || !e.hhea || !e.hmtx) return 0;
		if (e.glyf) {
			if (!e.loca) return 0;
		} else {
			var p, m, h, g, v = 2, b = 0, S = 0, E = 0;
			if (g = w(t, n, [
				67,
				70,
				70,
				32
			]), !g || (e.fontdicts = u(), e.fdselect = u(), e.cff = t.subarray(g), e.cff.cursor = 0, p = e.cff, c(p, 2), s(p, a(p)), f(p), h = f(p), m = y(h, 0), f(p), e.gsubrs = f(p), b = _(m, 17, b), v = _(m, 262, v), S = _(m, 292, S), E = _(m, 293, E), e.subrs = T(p, m), v != 2) || b == 0) return 0;
			if (S) {
				if (!E) return 0;
				s(p, S), e.fontdicts = f(p), e.fdselect = d(p, E, p.length - E);
			}
			s(p, b), e.charstrings = f(p);
		}
		for (i = w(t, n, [
			109,
			97,
			120,
			112
		]), e.numGlyphs = i ? x(t, i + 4) : 65535, l = x(t, r + 2), e.index_map = 0, o = 0; o < l; ++o) {
			var D = r + 4 + 8 * o;
			switch (x(t, D)) {
				case 3:
					switch (x(t, D + 2)) {
						case 1:
						case 10: e.index_map = r + C(t, D + 4);
					}
					break;
				case 0: e.index_map = r + C(t, D + 4);
			}
		}
		return e.index_map == 0 ? 0 : (e.indexToLocFormat = x(t, e.head + 50), 1);
	}
	function D(e, t) {
		var n = e.data, r = e.index_map, i = x(n, r + 0);
		if (i == 0) return t < x(n, r + 2) - 6 ? n[r + 6 + t] : 0;
		if (i == 6) {
			var a = x(n, r + 6), o = x(n, r + 8);
			return t >= a && t < a + o ? x(n, r + 10 + (t - a) * 2) : 0;
		}
		if (i == 2) return 0;
		if (i == 4) {
			var s = x(n, r + 6) >> 1, c = x(n, r + 8) >> 1, l = x(n, r + 10), u = x(n, r + 12) >> 1, d = r + 14, f = d;
			if (t > 65535) return 0;
			for (t >= x(n, f + u * 2) && (f += u * 2), f -= 2; l;) c >>= 1, t > x(n, f + c * 2) && (f += c * 2), --l;
			f += 2;
			var p, m, h = f - d >>> 1;
			return m = x(n, r + 14 + s * 2 + 2 + 2 * h), t < m ? 0 : (p = x(n, r + 14 + s * 6 + 2 + 2 * h), p == 0 ? t + S(n, r + 14 + s * 4 + 2 + 2 * h) : x(n, p + (t - m) * 2 + r + 14 + s * 6 + 2 + 2 * h));
		}
		if (i == 12 || i == 13) {
			for (var g = C(n, r + 12), _ = 0, v = g; _ < v;) {
				var y = _ + (v - _ >> 1), b = C(n, r + 16 + y * 12), w = C(n, r + 16 + y * 12 + 4);
				if (t < b) v = y;
				else if (t > w) _ = y + 1;
				else {
					var T = C(n, r + 16 + y * 12 + 8);
					return i == 12 ? T + t - b : T;
				}
			}
			return 0;
		}
		return 0;
	}
	function O(e, t, n, r, i, a) {
		e.type = t, e.x = n, e.y = r, e.cx = i, e.cy = a;
	}
	function k(e, t) {
		var n, r;
		return t >= e.numGlyphs || e.indexToLocFormat >= 2 ? -1 : (e.indexToLocFormat == 0 ? (n = e.glyf + x(e.data, e.loca + t * 2) * 2, r = e.glyf + x(e.data, e.loca + t * 2 + 2) * 2) : (n = e.glyf + C(e.data, e.loca + t * 4), r = e.glyf + C(e.data, e.loca + t * 4 + 4)), n == r ? -1 : n);
	}
	function A(e, t, n) {
		if (e.cff.length) R(e, t, n);
		else {
			var r = k(e, t);
			if (r < 0) return 0;
			n.x0 = S(e.data, r + 2), n.y0 = S(e.data, r + 4), n.x1 = S(e.data, r + 6), n.y1 = S(e.data, r + 8);
		}
		return 1;
	}
	function j(e, t, n, r, i, a, o, s, c, l) {
		return r ? (n && O(e[t++], 3, c + o >> 1, l + s >> 1, c, l), O(e[t++], 3, i, a, o, s)) : n ? O(e[t++], 3, i, a, c, l) : O(e[t++], 2, i, a, 0, 0), t;
	}
	function M(t, r) {
		var o = t.data, s = k(t, r);
		if (s < 0) return null;
		var c = [], l = S(o, s);
		if (l > 0) {
			var u = 0, d, f, p = 0, m, h, g, _ = 0, v, y = 0, C, w, T, E, D, A, M, N, P = s + 10, ee = x(o, s + 10 + l * 2), te = o.subarray(s + 10 + l * 2 + 2 + ee), F = 0;
			for (h = 1 + x(o, P + l * 2 - 2), m = h + 2 * l, c = i(m), g = 0, d = 0, v = m - h, f = 0; f < h; ++f) d == 0 ? (u = te[F++], u & 8 && (d = te[F++])) : --d, c[v + f].type = u;
			for (C = 0, f = 0; f < h; ++f) {
				if (u = c[v + f].type, u & 2) {
					var I = te[F++];
					C += u & 16 ? I : -I;
				} else u & 16 || (C += b(te[F] * 256 + te[F + 1]), F += 2);
				c[v + f].x = C;
			}
			for (w = 0, f = 0; f < h; ++f) {
				if (u = c[v + f].type, u & 4) {
					var ne = te[F++];
					w += u & 32 ? ne : -ne;
				} else u & 32 || (w += b(te[F] * 256 + te[F + 1]), F += 2);
				c[v + f].y = w;
			}
			var re = 0;
			for (D = A = T = E = M = N = 0, f = 0; f < h; ++f) u = c[v + f].type, C = c[v + f].x, w = c[v + f].y, g == f ? (f != 0 && (re = j(c, re, _, y, D, A, M, N, T, E)), y = !(u & 1), y ? (M = C, N = w, c[v + f + 1].type & 1 ? (D = c[v + f + 1].x, A = c[v + f + 1].y, ++f) : (D = C + c[v + f + 1].x >> 1, A = w + c[v + f + 1].y >> 1)) : (D = C, A = w), O(c[re++], 1, D, A, 0, 0), _ = 0, g = 1 + x(o, P + p * 2), ++p) : u & 1 ? (_ ? O(c[re++], 3, C, w, T, E) : O(c[re++], 2, C, w, 0, 0), _ = 0) : (_ && O(c[re++], 3, T + C >> 1, E + w >> 1, T, E), T = C, E = w, _ = 1);
			c.length = j(c, re, _, y, D, A, M, N, T, E);
		} else if (l == -1) for (var ie = 1, L = s + 10; ie;) {
			var u, ae, R = [
				1,
				0,
				0,
				1,
				0,
				0
			];
			u = S(o, L), L += 2, ae = S(o, L), L += 2, u & 2 && (u & 1 ? (R[4] = S(o, L), L += 2, R[5] = S(o, L), L += 2) : (R[4] = a(o, L), L += 1, R[5] = a(o, L), L += 1)), u & 8 ? (R[0] = R[3] = S(o, L) / 16384, L += 2, R[1] = R[2] = 0) : u & 64 ? (R[0] = S(o, L) / 16384, L += 2, R[1] = R[2] = 0, R[3] = S(o, L) / 16384, L += 2) : u & 128 && (R[0] = S(o, L) / 16384, L += 2, R[1] = S(o, L) / 16384, L += 2, R[2] = S(o, L) / 16384, L += 2, R[3] = S(o, L) / 16384, L += 2);
			var m = n(R[0] * R[0] + R[1] * R[1]), h = n(R[2] * R[2] + R[3] * R[3]), se = oe(t, ae);
			if (se.length > 0) {
				for (var f = 0, ce = se.length; f < ce; ++f) {
					var le = se[f], C = le.x, w = le.y;
					le.x = e(m * (R[0] * C + R[2] * w + R[4])), le.y = e(h * (R[1] * C + R[3] * w + R[5])), C = le.cx, w = le.cy, le.cx = e(m * (R[0] * C + R[2] * w + R[4])), le.cy = e(h * (R[1] * C + R[3] * w + R[5]));
				}
				c = c.concat(se);
			}
			ie = u & 32;
		}
		return c;
	}
	function N(e, t, n) {
		(t > e.max_x || !e.started) && (e.max_x = t), (n > e.max_y || !e.started) && (e.max_y = n), (t < e.min_x || !e.started) && (e.min_x = t), (n < e.min_y || !e.started) && (e.min_y = n), e.started = 1;
	}
	function P(e, t, n, r, i, a, o, s) {
		N(e, n, r), t == 4 && (N(e, i, a), N(e, o, s));
		var c = {};
		O(c, t, n, r, i, a), c.cx1 = o, c.cy1 = s, e.vertices.push(c);
	}
	function ee(e) {
		(e.first_x != e.x || e.first_y != e.y) && P(e, 2, e.first_x, e.first_y, 0, 0, 0, 0);
	}
	function te(e, t, n) {
		ee(e), e.first_x = e.x += t, e.first_y = e.y += n, P(e, 1, e.x, e.y, 0, 0, 0, 0);
	}
	function F(e, t, n) {
		e.x += t, e.y += n, P(e, 2, e.x, e.y, 0, 0, 0, 0);
	}
	function I(e, t, n, r, i, a, o) {
		var s = e.x + t, c = e.y + n, l = s + r, u = c + i;
		e.x = l + a, e.y = u + o, P(e, 4, e.x, e.y, s, c, l, u);
	}
	function ne(e, t) {
		var n = v(e), r = 107;
		return n >= 33900 ? r = 32768 : n >= 1240 && (r = 1131), t += r, t < 0 || t >= n ? u() : y(e, t);
	}
	function re(e, t) {
		var n = e.fdselect, r, i, o, u, d, f = -1, p;
		if (s(n, 0), d = a(n), d == 0) c(n, t), f = a(n);
		else if (d == 3) for (r = l(n, 2), i = l(n, 2), p = 0; p < r; p++) {
			if (u = a(n), o = l(n, 2), t >= i && t < o) {
				f = u;
				break;
			}
			i = o;
		}
		return T(e.cff, y(e.fontdicts, f));
	}
	function ie(e, t, n) {
		for (var i = 1, o = 0, s = 0, u = 0, d, f, m, h = 0, g, _ = [], v = [], b = e.subrs, x = y(e.charstrings, t), S; x.cursor < x.length;) {
			switch (f = 0, g = 1, m = a(x), m) {
				case 19:
				case 20:
					i && (o += u / 2 | 0), i = 0, c(x, (o + 7) / 8 | 0);
					break;
				case 1:
				case 3:
				case 18:
				case 23:
					o += u / 2 | 0;
					break;
				case 21:
					if (i = 0, u < 2) return 0;
					te(n, _[u - 2], _[u - 1]);
					break;
				case 4:
					if (i = 0, u < 1) return 0;
					te(n, 0, _[u - 1]);
					break;
				case 22:
					if (i = 0, u < 1) return 0;
					te(n, _[u - 1], 0);
					break;
				case 5:
					if (u < 2) return 0;
					for (; f + 1 < u; f += 2) F(n, _[f], _[f + 1]);
					break;
				case 7:
					if (u < 1) return 0;
					for (; !(f >= u || (F(n, 0, _[f]), f++, f >= u));) F(n, _[f], 0), f++;
					break;
				case 6:
					if (u < 1) return 0;
					for (; !(f >= u || (F(n, _[f], 0), f++, f >= u));) F(n, 0, _[f]), f++;
					break;
				case 31:
					if (u < 4) return 0;
					for (; !(f + 3 >= u || (I(n, _[f], 0, _[f + 1], _[f + 2], u - f == 5 ? _[f + 4] : 0, _[f + 3]), f += 4, f + 3 >= u));) I(n, 0, _[f], _[f + 1], _[f + 2], _[f + 3], u - f == 5 ? _[f + 4] : 0), f += 4;
					break;
				case 30:
					if (u < 4) return 0;
					for (; !(f + 3 >= u || (I(n, 0, _[f], _[f + 1], _[f + 2], _[f + 3], u - f == 5 ? _[f + 4] : 0), f += 4, f + 3 >= u));) I(n, _[f], 0, _[f + 1], _[f + 2], u - f == 5 ? _[f + 4] : 0, _[f + 3]), f += 4;
					break;
				case 8:
					if (u < 6) return 0;
					for (; f + 5 < u; f += 6) I(n, _[f], _[f + 1], _[f + 2], _[f + 3], _[f + 4], _[f + 5]);
					break;
				case 24:
					if (u < 8) return 0;
					for (; f + 5 < u - 2; f += 6) I(n, _[f], _[f + 1], _[f + 2], _[f + 3], _[f + 4], _[f + 5]);
					if (f + 1 >= u) return 0;
					F(n, _[f], _[f + 1]);
					break;
				case 25:
					if (u < 8) return 0;
					for (; f + 1 < u - 6; f += 2) F(n, _[f], _[f + 1]);
					if (f + 5 >= u) return 0;
					I(n, _[f], _[f + 1], _[f + 2], _[f + 3], _[f + 4], _[f + 5]);
					break;
				case 26:
				case 27:
					if (u < 4) return 0;
					for (S = 0, u & 1 && (S = _[f], f++); f + 3 < u; f += 4) m == 27 ? I(n, _[f], S, _[f + 1], _[f + 2], _[f + 3], 0) : I(n, S, _[f], _[f + 1], _[f + 2], 0, _[f + 3]), S = 0;
					break;
				case 10: h ||= (e.fdselect.length && (b = re(e, t)), 1);
				case 29:
					if (u < 1 || (d = _[--u] | 0, s >= 10) || (v[s++] = x, x = ne(m == 10 ? b : e.gsubrs, d), x.length == 0)) return 0;
					x.cursor = 0, g = 0;
					break;
				case 11:
					if (s <= 0) return 0;
					x = v[--s], g = 0;
					break;
				case 14: return ee(n), 1;
				case 12:
					var C, w, T, E, D, O, k, A, j, M, N, P, ie, L;
					switch (a(x)) {
						case 34:
							if (u < 7) return 0;
							C = _[0], w = _[1], A = _[2], T = _[3], E = _[4], D = _[5], O = _[6], I(n, C, 0, w, A, T, 0), I(n, E, 0, D, -A, O, 0);
							break;
						case 35:
							if (u < 13) return 0;
							C = _[0], k = _[1], w = _[2], A = _[3], T = _[4], j = _[5], E = _[6], M = _[7], D = _[8], N = _[9], O = _[10], P = _[11], I(n, C, k, w, A, T, j), I(n, E, M, D, N, O, P);
							break;
						case 36:
							if (u < 9) return 0;
							C = _[0], k = _[1], w = _[2], A = _[3], T = _[4], E = _[5], D = _[6], N = _[7], O = _[8], I(n, C, k, w, A, T, 0), I(n, E, 0, D, N, O, -(k + A + N));
							break;
						case 37:
							if (u < 11) return 0;
							C = _[0], k = _[1], w = _[2], A = _[3], T = _[4], j = _[5], E = _[6], M = _[7], D = _[8], N = _[9], O = P = _[10], ie = C + w + T + E + D, L = k + A + j + M + N, r(ie) > r(L) ? P = -L : O = -ie, I(n, C, k, w, A, T, j), I(n, E, M, D, N, O, P);
							break;
						default: return 0;
					}
					break;
				default:
					if (m != 255 && m != 28 && (m < 32 || m > 254) || (m == 255 ? S = (l(x, 4) | 0) / 65536 : (c(x, -1), S = p(x) << 16 >> 16), u >= 48)) return 0;
					_[u++] = S, g = 0;
			}
			g && (u = 0);
		}
		return 0;
	}
	function L() {
		return {
			started: 0,
			first_x: 0,
			first_y: 0,
			x: 0,
			y: 0,
			min_x: 0,
			max_x: 0,
			min_y: 0,
			max_y: 0,
			vertices: []
		};
	}
	function ae(e, t) {
		var n = L();
		return ie(e, t, n) ? n.vertices : null;
	}
	function R(e, t, n) {
		var r = L(), i = ie(e, t, r);
		return n.x0 = i ? r.min_x : 0, n.y0 = i ? r.min_y : 0, n.x1 = i ? r.max_x : 0, n.y1 = i ? r.max_y : 0, i && r.vertices ? r.vertices.length : 0;
	}
	function oe(e, t) {
		return e.cff.length ? ae(e, t) : M(e, t);
	}
	function se(e, t) {
		var n = x(e.data, e.hhea + 34);
		return t < n ? {
			advanceWidth: S(e.data, e.hmtx + 4 * t),
			leftSideBearing: S(e.data, e.hmtx + 4 * t + 2)
		} : {
			advanceWidth: S(e.data, e.hmtx + 4 * (n - 1)),
			leftSideBearing: S(e.data, e.hmtx + 4 * n + 2 * (t - n))
		};
	}
	function ce(e) {
		return {
			ascent: S(e.data, e.hhea + 4),
			descent: S(e.data, e.hhea + 6),
			linegap: S(e.data, e.hhea + 8)
		};
	}
	function le(n, r, i, a, o, s) {
		var c = {};
		return A(n, r, c) ? {
			x0: e(c.x0 * i + o),
			y0: e(-c.y1 * a + s),
			x1: t(c.x1 * i + o),
			y1: t(-c.y0 * a + s)
		} : {
			x0: 0,
			y0: 0,
			x1: 0,
			y1: 0
		};
	}
	function ue(e, t, n) {
		var r = (e.x1 - e.x0) / (e.y1 - e.y0);
		return {
			fdx: r,
			fdy: r == 0 ? 0 : 1 / r,
			fx: e.x0 + r * (n - e.y0) - (t | 0),
			direction: e.invert ? 1 : -1,
			sy: e.y0,
			ey: e.y1,
			next: 0
		};
	}
	function z(e, t, n, r, i, a, o) {
		t |= 0, i != o && (i > n.ey || o < n.sy || (i < n.sy && (r += (a - r) * (n.sy - i) / (o - i), i = n.sy), o > n.ey && (a += (a - r) * (n.ey - o) / (o - i), o = n.ey), r <= t && a <= t ? e[t] += n.direction * (o - i) : r >= t + 1 && a >= t + 1 || (e[t] += n.direction * (o - i) * (1 - (r - t + (a - t)) / 2))));
	}
	function de(e, t, n, r, i) {
		for (var a = i + 1; r;) {
			if (r.fdx == 0) {
				var o = r.fx;
				o < n && (o >= 0 ? (z(e, o, r, o, i, o, a), z(t, o + 1, r, o, i, o, a)) : z(t, 0, r, o, i, o, a));
			} else {
				var o = r.fx, s = r.fdx, c = o + s, l, u, d, f, p = r.fdy;
				if (r.sy > i ? (l = o + s * (r.sy - i), d = r.sy) : (l = o, d = i), r.ey < a ? (u = o + s * (r.ey - i), f = r.ey) : (u = c, f = a), l >= 0 && u >= 0 && l < n && u < n) {
					if ((l | 0) == (u | 0)) {
						var m = f - d, h = l | 0;
						e[h] += r.direction * (1 - (l - h + (u - h)) / 2) * m, t[h + 1] += r.direction * m;
					} else {
						var g, h, _, v, y, b, x, S;
						for (l > u && (d = a - (d - i), f = a - (f - i), g = d, d = f, f = g, g = u, u = l, l = g, s = -s, p = -p, g = o, o = c, c = g), _ = l | 0, v = u | 0, y = (_ + 1 - o) * p + i, x = r.direction, S = x * (y - d), e[_] += S * (1 - (l - _ + (_ + 1 - _)) / 2), b = x * p, h = _ + 1; h < v; ++h) e[h] += S + b / 2, S += b;
						y += p * (v - (_ + 1)), e[v] += S + x * (1 - (v - v + (u - v)) / 2) * (f - y), t[v + 1] += x * (f - d);
					}
				} else for (var h = 0; h < n; ++h) {
					var C = i, _ = h, v = h + 1, w = c, T = a, E = (h - o) / s + i, D = (h + 1 - o) / s + i;
					o < _ && w > v ? (z(e, h, r, o, C, _, E), z(e, h, r, _, E, v, D), z(e, h, r, v, D, w, T)) : w < _ && o > v ? (z(e, h, r, o, C, v, D), z(e, h, r, v, D, _, E), z(e, h, r, _, E, w, T)) : o < _ && w > _ || w < _ && o > _ ? (z(e, h, r, o, C, _, E), z(e, h, r, _, E, w, T)) : o < v && w > v || w < v && o > v ? (z(e, h, r, o, C, v, D), z(e, h, r, v, D, w, T)) : z(e, h, r, o, C, w, T);
				}
			}
			r = r.next;
		}
	}
	function fe(e, t, n, i, a, o) {
		i |= 0, a |= 0, o |= 0;
		var s = null, c, l = o, u = 0, d, f = new Float32Array(e.w * 2 + 1), p = f.subarray(e.w), m = 0;
		for (t[n].y0 = o + e.h + 1; u < e.h;) {
			var h = l + 0, g = l + 1, _ = s;
			if (f.fill) f.fill(0);
			else for (var v = 0, y = f.length; v < y; v++) f[v] = 0;
			for (; _;) c = _, _ = c.next, c.ey <= h && (c.direction = 0);
			for (; t[m].y0 <= g;) t[m].y0 != t[m].y1 && (c = ue(t[m], a, h), c.next = s, s = c), ++m;
			s && de(f, p, e.w, s, h);
			for (var d = 0, b = 0; d < e.w; ++d) {
				var x, S;
				b += p[d], x = f[d] + b, x = r(x) * 255 + .5, S = x >>> 0, S > 255 && (S = 255), e.pixels[u * e.stride + d] = S;
			}
			for (_ = s; _;) c = _, c.fx += c.fdx, _ = c.next;
			++l, ++u;
		}
	}
	function pe(e, t) {
		for (var n = 1; n < t; ++n) {
			for (var r = e[n], i = n; i > 0 && r.y0 < e[i - 1].y0;) e[i] = e[i - 1], --i;
			n != i && (e[i] = r);
		}
	}
	function B(e, t, n) {
		for (; n > 12;) {
			var r, i, a, o, s, c = n >> 1, l = e[t].y0 < e[t + c].y0, u = e[t + c].y0 < e[t + n - 1].y0;
			for (l != u && (i = e[t].y0 < e[t + n - 11].y0, s = i == u ? 0 : n - 1, r = e[t + s], e[t + s] = e[t + c], e[t + c] = r), r = e[t], e[t] = e[t + c], e[t + c] = r, a = 1, o = n - 1;;) {
				for (; e[t + a].y0 < e[t].y0; ++a);
				for (; e[t].y0 < e[t + o].y0; --o);
				if (a >= o) break;
				r = e[t + a], e[t + a] = e[t + o], e[t + o] = r, ++a, --o;
			}
			o < n - a ? (B(e, t, o), t += a, n -= a) : (B(e, t + a, n - a), n = o);
		}
	}
	function me(e, t) {
		B(e, 0, t), pe(e, t);
	}
	function V(e, t, n, r, a, o, s, c, l, u) {
		var d = u ? -a : a, f, p, m, h, g, _, v = 1;
		for (p = 0, m = 0; m < n.length; ++m) p += n[m];
		for (f = i(p + 1), p = 0, _ = 0, m = 0; m < n.length; ++m) {
			var y = _;
			for (_ += n[m], h = n[m] - 1, g = 0; g < n[m]; h = g++) {
				var b = g, x = h;
				t[y + h].y != t[y + g].y && (f[p].invert = 0, (u ? t[y + h].y > t[y + g].y : t[y + h].y < t[y + g].y) && (f[p].invert = 1, b = h, x = g), f[p].x0 = t[y + b].x * r + o, f[p].y0 = (t[y + b].y * d + s) * v, f[p].x1 = t[y + x].x * r + o, f[p].y1 = (t[y + x].y * d + s) * v, ++p);
			}
		}
		me(f, p), fe(e, f, p, v, c, l);
	}
	function he(e, t, n, r, i, a, o, s, c) {
		var l = (t + 2 * r + a) / 4, u = (n + 2 * i + o) / 4, d = (t + a) / 2 - l, f = (n + o) / 2 - u;
		return c > 16 || (d * d + f * f > s ? (he(e, t, n, (t + r) / 2, (n + i) / 2, l, u, s, c + 1), he(e, l, u, (r + a) / 2, (i + o) / 2, a, o, s, c + 1)) : e.push({
			x: a,
			y: o
		})), 1;
	}
	function ge(e, t, r, i, a, o, s, c, l, u, d) {
		var f = i - t, p = a - r, m = o - i, h = s - a, g = c - o, _ = l - s, v = c - t, y = l - r, b = n(f * f + p * p) + n(m * m + h * h) + n(g * g + _ * _), x = n(v * v + y * y), S = b * b - x * x;
		if (!(d > 16)) {
			if (S > u) {
				var C = (t + i) / 2, w = (r + a) / 2, T = (i + o) / 2, E = (a + s) / 2, D = (o + c) / 2, O = (s + l) / 2, k = (C + T) / 2, A = (w + E) / 2, j = (T + D) / 2, M = (E + O) / 2, N = (k + j) / 2, P = (A + M) / 2;
				ge(e, t, r, C, w, k, A, N, P, u, d + 1), ge(e, N, P, j, M, D, O, c, l, u, d + 1);
			} else e.push({
				x: c,
				y: l
			});
		}
	}
	function _e(e, t, n) {
		for (var r = [], i = t * t, a = -1, o = 0, s = 0, c = 0, l = 0, u = e.length; l < u; ++l) switch (e[l].type) {
			case 1:
				a >= 0 && (n[a] = r.length - o), ++a, o = r.length, s = e[l].x, c = e[l].y, r.push({
					x: s,
					y: c
				});
				break;
			case 2:
				s = e[l].x, c = e[l].y, r.push({
					x: s,
					y: c
				});
				break;
			case 3:
				he(r, s, c, e[l].cx, e[l].cy, e[l].x, e[l].y, i, 0), s = e[l].x, c = e[l].y;
				break;
			case 4: ge(r, s, c, e[l].cx, e[l].cy, e[l].cx1, e[l].cy1, e[l].x, e[l].y, i, 0), s = e[l].x, c = e[l].y;
		}
		return n[a] = r.length - o, r;
	}
	function ve(e, t, n, r, i, a, o, s, c, l) {
		s |= 0, c |= 0;
		var u = r > i ? i : r, d = [], f = _e(n, t / u, d);
		f && V(e, f, d, r, i, a, o, s, c, l);
	}
	function ye(e) {
		var t = {};
		if (!E(t, e, 0)) return null;
		var n = ce(t);
		return t.ascent = n.ascent, t.descent = n.descent, t.linegap = n.linegap, t;
	}
	function be(t, n, r, i) {
		i ||= r;
		var a = r / t.ascent, o = i / t.ascent, s = D(t, n);
		if (!s && n) return null;
		var c = oe(t, s), l = le(t, s, a, o, 0, 0), u = l.x1 - l.x0, d = l.y1 - l.y0, f = null;
		u && d && ve({
			pixels: f = new Uint8Array(u * d),
			w: u,
			h: d,
			stride: u
		}, .35, c, a, o, 0, 0, l.x0, l.y0, 1);
		var p = se(t, s);
		return {
			glyph: s,
			pixels: f,
			width: u,
			height: d,
			top: -l.y0,
			left: l.x0,
			advance: e(p.advanceWidth * a)
		};
	}
	function xe(e, t, n, r) {
		r ||= n;
		var i = n / e.ascent, a = r / e.ascent, o = D(e, t);
		if (!o && t) return null;
		var s = oe(e, o), c = se(e, o), l = 0, u = 0, d = [];
		if (s) for (var f = 0, p = s.length; f < p; f++) {
			var m = s[f], h;
			if (m.type == 1) h = {
				type: "M",
				x: m.x * i,
				y: m.y * a
			};
			else if (m.type == 2) h = {
				type: "L",
				x: m.x * i,
				y: m.y * a
			};
			else if (m.type == 3) h = {
				type: "Q",
				x: m.x * i,
				y: m.y * a,
				cx: m.cx * i,
				cy: m.cy * a
			};
			else if (m.type == 4) h = {
				type: "C",
				x: m.x * i,
				y: m.y * a,
				cx1: m.cx * i,
				cy1: m.cy * a,
				cx2: m.cx1 * i,
				cy2: m.cy1 * a
			};
			else continue;
			h.y > l && (l = h.y), h.y < u && (u = h.y), d.push(h);
		}
		return d.advance = c.advanceWidth * i, d.ascent = l, d.descent = u, d;
	}
	return {
		InitFont: ye,
		GetGlyph: be,
		GetPaths: xe
	};
})();
function xn(e) {
	if (typeof e == "string") {
		for (var t = /[^A-Za-z0-9+\/=\s]/.test(e) ? e : atob(e), n = t.length, r = new Uint8Array(n), i = 0; i < n; i++) r[i] = t.charCodeAt(i);
		return r;
	}
	if (e instanceof Uint8Array) return e;
	if (e instanceof ArrayBuffer) return new Uint8Array(e);
	throw ReferenceError("data must be a binary or base64 encoded string or Uint8Array");
}
yn.loadFont("OCR-A", 100, 100, "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"), yn.loadFont("OCR-B", 96, 100, "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");
function Sn(e, t) {
	return un(tn, e, t);
}
// node_modules/jsbarcode/bin/barcodes/Barcode.js
var Cn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	e.default = function e(n, r) {
		t(this, e), this.data = n, this.text = r.text || n, this.options = r;
	};
})), wn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.CODE39 = void 0;
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(), n = r(Cn());
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function i(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function a(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function o(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	var s = function(e) {
		o(n, e);
		function n(e, t) {
			return i(this, n), e = e.toUpperCase(), t.mod43 && (e += f(m(e))), a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t));
		}
		return t(n, [{
			key: "encode",
			value: function() {
				for (var e = u("*"), t = 0; t < this.data.length; t++) e += u(this.data[t]) + "0";
				return e += u("*"), {
					data: e,
					text: this.text
				};
			}
		}, {
			key: "valid",
			value: function() {
				return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
			}
		}]), n;
	}(n.default), c = /* @__PURE__ */ "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%*".split(""), l = [
		20957,
		29783,
		23639,
		30485,
		20951,
		29813,
		23669,
		20855,
		29789,
		23645,
		29975,
		23831,
		30533,
		22295,
		30149,
		24005,
		21623,
		29981,
		23837,
		22301,
		30023,
		23879,
		30545,
		22343,
		30161,
		24017,
		21959,
		30065,
		23921,
		22385,
		29015,
		18263,
		29141,
		17879,
		29045,
		18293,
		17783,
		29021,
		18269,
		17477,
		17489,
		17681,
		20753,
		35770
	];
	function u(e) {
		return d(p(e));
	}
	function d(e) {
		return l[e].toString(2);
	}
	function f(e) {
		return c[e];
	}
	function p(e) {
		return c.indexOf(e);
	}
	function m(e) {
		for (var t = 0, n = 0; n < e.length; n++) t += p(e[n]);
		return t %= 43, t;
	}
	e.CODE39 = s;
})), Tn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t;
	function n(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e;
	}
	var r = e.SET_A = 0, i = e.SET_B = 1, a = e.SET_C = 2;
	e.SHIFT = 98;
	var o = e.START_A = 103, s = e.START_B = 104, c = e.START_C = 105;
	e.MODULO = 103, e.STOP = 106, e.FNC1 = 207, e.SET_BY_CODE = (t = {}, n(t, o, r), n(t, s, i), n(t, c, a), t), e.SWAP = {
		101: r,
		100: i,
		99: a
	}, e.A_START_CHAR = "Ð", e.B_START_CHAR = "Ñ", e.C_START_CHAR = "Ò", e.A_CHARS = "[\0-_È-Ï]", e.B_CHARS = "[ -È-Ï]", e.C_CHARS = "(Ï*[0-9]{2}Ï*)", e.BARS = [
		11011001100,
		11001101100,
		11001100110,
		10010011e3,
		10010001100,
		10001001100,
		10011001e3,
		10011000100,
		10001100100,
		11001001e3,
		11001000100,
		11000100100,
		10110011100,
		10011011100,
		10011001110,
		10111001100,
		10011101100,
		10011100110,
		11001110010,
		11001011100,
		11001001110,
		11011100100,
		11001110100,
		11101101110,
		11101001100,
		11100101100,
		11100100110,
		11101100100,
		11100110100,
		11100110010,
		11011011e3,
		11011000110,
		11000110110,
		10100011e3,
		10001011e3,
		10001000110,
		10110001e3,
		10001101e3,
		10001100010,
		11010001e3,
		11000101e3,
		11000100010,
		10110111e3,
		10110001110,
		10001101110,
		10111011e3,
		10111000110,
		10001110110,
		11101110110,
		11010001110,
		11000101110,
		11011101e3,
		11011100010,
		11011101110,
		11101011e3,
		11101000110,
		11100010110,
		11101101e3,
		11101100010,
		11100011010,
		11101111010,
		11001000010,
		11110001010,
		1010011e4,
		10100001100,
		1001011e4,
		10010000110,
		10000101100,
		10000100110,
		1011001e4,
		10110000100,
		1001101e4,
		10011000010,
		10000110100,
		10000110010,
		11000010010,
		1100101e4,
		11110111010,
		11000010100,
		10001111010,
		10100111100,
		10010111100,
		10010011110,
		10111100100,
		10011110100,
		10011110010,
		11110100100,
		11110010100,
		11110010010,
		11011011110,
		11011110110,
		11110110110,
		10101111e3,
		10100011110,
		10001011110,
		10111101e3,
		10111100010,
		11110101e3,
		11110100010,
		10111011110,
		10111101110,
		11101011110,
		11110101110,
		11010000100,
		1101001e4,
		11010011100,
		1100011101011
	];
})), En = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(), n = i(Cn()), r = Tn();
	function i(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function a(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function o(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function s(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	e.default = function(e) {
		s(n, e);
		function n(e, t) {
			a(this, n);
			var r = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e.substring(1), t));
			return r.bytes = e.split("").map(function(e) {
				return e.charCodeAt(0);
			}), r;
		}
		return t(n, [
			{
				key: "valid",
				value: function() {
					return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data);
				}
			},
			{
				key: "encode",
				value: function() {
					var e = this.bytes, t = e.shift() - 105, i = r.SET_BY_CODE[t];
					if (i === void 0) throw RangeError("The encoding does not start with a start character.");
					this.shouldEncodeAsEan128() === !0 && e.unshift(r.FNC1);
					var a = n.next(e, 1, i);
					return {
						text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, "") : this.text,
						data: n.getBar(t) + a.result + n.getBar((a.checksum + t) % r.MODULO) + n.getBar(r.STOP)
					};
				}
			},
			{
				key: "shouldEncodeAsEan128",
				value: function() {
					var e = this.options.ean128 || !1;
					return typeof e == "string" && (e = e.toLowerCase() === "true"), e;
				}
			}
		], [
			{
				key: "getBar",
				value: function(e) {
					return r.BARS[e] ? r.BARS[e].toString() : "";
				}
			},
			{
				key: "correctIndex",
				value: function(e, t) {
					if (t === r.SET_A) {
						var n = e.shift();
						return n < 32 ? n + 64 : n - 32;
					}
					return t === r.SET_B ? e.shift() - 32 : (e.shift() - 48) * 10 + e.shift() - 48;
				}
			},
			{
				key: "next",
				value: function(e, t, i) {
					if (!e.length) return {
						result: "",
						checksum: 0
					};
					var a = void 0, o = void 0;
					if (e[0] >= 200) {
						o = e.shift() - 105;
						var s = r.SWAP[o];
						s === void 0 ? ((i === r.SET_A || i === r.SET_B) && o === r.SHIFT && (e[0] = i === r.SET_A ? e[0] > 95 ? e[0] - 96 : e[0] : e[0] < 32 ? e[0] + 96 : e[0]), a = n.next(e, t + 1, i)) : a = n.next(e, t + 1, s);
					} else o = n.correctIndex(e, i), a = n.next(e, t + 1, i);
					var c = n.getBar(o), l = o * t;
					return {
						result: c + a.result,
						checksum: l + a.checksum
					};
				}
			}
		]), n;
	}(n.default);
})), Dn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Tn(), n = function(e) {
		return e.match(RegExp("^" + t.A_CHARS + "*"))[0].length;
	}, r = function(e) {
		return e.match(RegExp("^" + t.B_CHARS + "*"))[0].length;
	}, i = function(e) {
		return e.match(RegExp("^" + t.C_CHARS + "*"))[0];
	};
	function a(e, n) {
		var r = n ? t.A_CHARS : t.B_CHARS, i = e.match(RegExp("^(" + r + "+?)(([0-9]{2}){2,})([^0-9]|$)"));
		if (i) return i[1] + "Ì" + o(e.substring(i[1].length));
		var s = e.match(RegExp("^" + r + "+"))[0];
		return s.length === e.length ? e : s + String.fromCharCode(n ? 205 : 206) + a(e.substring(s.length), !n);
	}
	function o(e) {
		var t = i(e), o = t.length;
		if (o === e.length) return e;
		e = e.substring(o);
		var s = n(e) >= r(e);
		return t + String.fromCharCode(s ? 206 : 205) + a(e, s);
	}
	e.default = function(e) {
		var s = void 0;
		if (i(e).length >= 2) s = t.C_START_CHAR + o(e);
		else {
			var c = n(e) > r(e);
			s = (c ? t.A_START_CHAR : t.B_START_CHAR) + a(e, c);
		}
		return s.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, function(e, t) {
			return "Ë" + t;
		});
	};
})), On = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = r(En()), n = r(Dn());
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function i(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function a(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function o(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	e.default = function(e) {
		o(t, e);
		function t(e, r) {
			if (i(this, t), /^[\x00-\x7F\xC8-\xD3]+$/.test(e)) var o = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, (0, n.default)(e), r));
			else var o = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r));
			return a(o);
		}
		return t;
	}(t.default);
})), kn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(), n = i(En()), r = Tn();
	function i(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function a(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function o(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function s(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	e.default = function(e) {
		s(n, e);
		function n(e, t) {
			return a(this, n), o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, r.A_START_CHAR + e, t));
		}
		return t(n, [{
			key: "valid",
			value: function() {
				return RegExp("^" + r.A_CHARS + "+$").test(this.data);
			}
		}]), n;
	}(n.default);
})), An = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(), n = i(En()), r = Tn();
	function i(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function a(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function o(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function s(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	e.default = function(e) {
		s(n, e);
		function n(e, t) {
			return a(this, n), o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, r.B_START_CHAR + e, t));
		}
		return t(n, [{
			key: "valid",
			value: function() {
				return RegExp("^" + r.B_CHARS + "+$").test(this.data);
			}
		}]), n;
	}(n.default);
})), jn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(), n = i(En()), r = Tn();
	function i(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function a(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function o(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function s(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	e.default = function(e) {
		s(n, e);
		function n(e, t) {
			return a(this, n), o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, r.C_START_CHAR + e, t));
		}
		return t(n, [{
			key: "valid",
			value: function() {
				return RegExp("^" + r.C_CHARS + "+$").test(this.data);
			}
		}]), n;
	}(n.default);
})), Mn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.CODE128C = e.CODE128B = e.CODE128A = e.CODE128 = void 0;
	var t = a(On()), n = a(kn()), r = a(An()), i = a(jn());
	function a(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e.CODE128 = t.default, e.CODE128A = n.default, e.CODE128B = r.default, e.CODE128C = i.default;
})), Nn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.SIDE_BIN = "101", e.MIDDLE_BIN = "01010", e.BINARIES = {
		L: [
			"0001101",
			"0011001",
			"0010011",
			"0111101",
			"0100011",
			"0110001",
			"0101111",
			"0111011",
			"0110111",
			"0001011"
		],
		G: [
			"0100111",
			"0110011",
			"0011011",
			"0100001",
			"0011101",
			"0111001",
			"0000101",
			"0010001",
			"0001001",
			"0010111"
		],
		R: [
			"1110010",
			"1100110",
			"1101100",
			"1000010",
			"1011100",
			"1001110",
			"1010000",
			"1000100",
			"1001000",
			"1110100"
		],
		O: [
			"0001101",
			"0011001",
			"0010011",
			"0111101",
			"0100011",
			"0110001",
			"0101111",
			"0111011",
			"0110111",
			"0001011"
		],
		E: [
			"0100111",
			"0110011",
			"0011011",
			"0100001",
			"0011101",
			"0111001",
			"0000101",
			"0010001",
			"0001001",
			"0010111"
		]
	}, e.EAN2_STRUCTURE = [
		"LL",
		"LG",
		"GL",
		"GG"
	], e.EAN5_STRUCTURE = [
		"GGLLL",
		"GLGLL",
		"GLLGL",
		"GLLLG",
		"LGGLL",
		"LLGGL",
		"LLLGG",
		"LGLGL",
		"LGLLG",
		"LLGLG"
	], e.EAN13_STRUCTURE = [
		"LLLLLL",
		"LLGLGG",
		"LLGGLG",
		"LLGGGL",
		"LGLLGG",
		"LGGLLG",
		"LGGGLL",
		"LGLGLG",
		"LGLGGL",
		"LGGLGL"
	];
})), Pn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Nn();
	e.default = function(e, n, r) {
		var i = e.split("").map(function(e, r) {
			return t.BINARIES[n[r]];
		}).map(function(t, n) {
			return t ? t[e[n]] : "";
		});
		if (r) {
			var a = e.length - 1;
			i = i.map(function(e, t) {
				return t < a ? e + r : e;
			});
		}
		return i.join("");
	};
})), Fn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(), n = Nn(), r = a(Pn()), i = a(Cn());
	function a(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function o(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function s(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function c(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	e.default = function(e) {
		c(i, e);
		function i(e, t) {
			o(this, i);
			var n = s(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, e, t));
			return n.fontSize = !t.flat && t.fontSize > t.width * 10 ? t.width * 10 : t.fontSize, n.guardHeight = t.height + n.fontSize / 2 + t.textMargin, n;
		}
		return t(i, [
			{
				key: "encode",
				value: function() {
					return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
				}
			},
			{
				key: "leftText",
				value: function(e, t) {
					return this.text.substr(e, t);
				}
			},
			{
				key: "leftEncode",
				value: function(e, t) {
					return (0, r.default)(e, t);
				}
			},
			{
				key: "rightText",
				value: function(e, t) {
					return this.text.substr(e, t);
				}
			},
			{
				key: "rightEncode",
				value: function(e, t) {
					return (0, r.default)(e, t);
				}
			},
			{
				key: "encodeGuarded",
				value: function() {
					var e = { fontSize: this.fontSize }, t = { height: this.guardHeight };
					return [
						{
							data: n.SIDE_BIN,
							options: t
						},
						{
							data: this.leftEncode(),
							text: this.leftText(),
							options: e
						},
						{
							data: n.MIDDLE_BIN,
							options: t
						},
						{
							data: this.rightEncode(),
							text: this.rightText(),
							options: e
						},
						{
							data: n.SIDE_BIN,
							options: t
						}
					];
				}
			},
			{
				key: "encodeFlat",
				value: function() {
					return {
						data: [
							n.SIDE_BIN,
							this.leftEncode(),
							n.MIDDLE_BIN,
							this.rightEncode(),
							n.SIDE_BIN
						].join(""),
						text: this.text
					};
				}
			}
		]), i;
	}(i.default);
})), In = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(), n = function e(t, n, r) {
		t === null && (t = Function.prototype);
		var i = Object.getOwnPropertyDescriptor(t, n);
		if (i === void 0) {
			var a = Object.getPrototypeOf(t);
			return a === null ? void 0 : e(a, n, r);
		}
		if ("value" in i) return i.value;
		var o = i.get;
		return o === void 0 ? void 0 : o.call(r);
	}, r = Nn(), i = a(Fn());
	function a(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function o(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function s(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function c(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	var l = function(e) {
		return (10 - e.substr(0, 12).split("").map(function(e) {
			return +e;
		}).reduce(function(e, t, n) {
			return n % 2 ? e + t * 3 : e + t;
		}, 0) % 10) % 10;
	};
	e.default = function(e) {
		c(i, e);
		function i(e, t) {
			o(this, i), e.search(/^[0-9]{12}$/) !== -1 && (e += l(e));
			var n = s(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, e, t));
			return n.lastChar = t.lastChar, n;
		}
		return t(i, [
			{
				key: "valid",
				value: function() {
					return this.data.search(/^[0-9]{13}$/) !== -1 && +this.data[12] === l(this.data);
				}
			},
			{
				key: "leftText",
				value: function() {
					return n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "leftText", this).call(this, 1, 6);
				}
			},
			{
				key: "leftEncode",
				value: function() {
					var e = this.data.substr(1, 6), t = r.EAN13_STRUCTURE[this.data[0]];
					return n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "leftEncode", this).call(this, e, t);
				}
			},
			{
				key: "rightText",
				value: function() {
					return n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "rightText", this).call(this, 7, 6);
				}
			},
			{
				key: "rightEncode",
				value: function() {
					var e = this.data.substr(7, 6);
					return n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "rightEncode", this).call(this, e, "RRRRRR");
				}
			},
			{
				key: "encodeGuarded",
				value: function() {
					var e = n(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "encodeGuarded", this).call(this);
					return this.options.displayValue && (e.unshift({
						data: "000000000000",
						text: this.text.substr(0, 1),
						options: {
							textAlign: "left",
							fontSize: this.fontSize
						}
					}), this.options.lastChar && (e.push({ data: "00" }), e.push({
						data: "00000",
						text: this.options.lastChar,
						options: { fontSize: this.fontSize }
					}))), e;
				}
			}
		]), i;
	}(i.default);
})), Ln = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(), n = function e(t, n, r) {
		t === null && (t = Function.prototype);
		var i = Object.getOwnPropertyDescriptor(t, n);
		if (i === void 0) {
			var a = Object.getPrototypeOf(t);
			return a === null ? void 0 : e(a, n, r);
		}
		if ("value" in i) return i.value;
		var o = i.get;
		return o === void 0 ? void 0 : o.call(r);
	}, r = i(Fn());
	function i(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function a(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function o(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function s(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	var c = function(e) {
		return (10 - e.substr(0, 7).split("").map(function(e) {
			return +e;
		}).reduce(function(e, t, n) {
			return n % 2 ? e + t : e + t * 3;
		}, 0) % 10) % 10;
	};
	e.default = function(e) {
		s(r, e);
		function r(e, t) {
			return a(this, r), e.search(/^[0-9]{7}$/) !== -1 && (e += c(e)), o(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e, t));
		}
		return t(r, [
			{
				key: "valid",
				value: function() {
					return this.data.search(/^[0-9]{8}$/) !== -1 && +this.data[7] === c(this.data);
				}
			},
			{
				key: "leftText",
				value: function() {
					return n(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "leftText", this).call(this, 0, 4);
				}
			},
			{
				key: "leftEncode",
				value: function() {
					var e = this.data.substr(0, 4);
					return n(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "leftEncode", this).call(this, e, "LLLL");
				}
			},
			{
				key: "rightText",
				value: function() {
					return n(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "rightText", this).call(this, 4, 4);
				}
			},
			{
				key: "rightEncode",
				value: function() {
					var e = this.data.substr(4, 4);
					return n(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "rightEncode", this).call(this, e, "RRRR");
				}
			}
		]), r;
	}(r.default);
})), Rn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(), n = Nn(), r = a(Pn()), i = a(Cn());
	function a(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function o(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function s(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function c(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	var l = function(e) {
		return e.split("").map(function(e) {
			return +e;
		}).reduce(function(e, t, n) {
			return n % 2 ? e + t * 9 : e + t * 3;
		}, 0) % 10;
	};
	e.default = function(e) {
		c(i, e);
		function i(e, t) {
			return o(this, i), s(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, e, t));
		}
		return t(i, [{
			key: "valid",
			value: function() {
				return this.data.search(/^[0-9]{5}$/) !== -1;
			}
		}, {
			key: "encode",
			value: function() {
				var e = n.EAN5_STRUCTURE[l(this.data)];
				return {
					data: "1011" + (0, r.default)(this.data, e, "01"),
					text: this.text
				};
			}
		}]), i;
	}(i.default);
})), zn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(), n = Nn(), r = a(Pn()), i = a(Cn());
	function a(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function o(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function s(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function c(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	e.default = function(e) {
		c(i, e);
		function i(e, t) {
			return o(this, i), s(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, e, t));
		}
		return t(i, [{
			key: "valid",
			value: function() {
				return this.data.search(/^[0-9]{2}$/) !== -1;
			}
		}, {
			key: "encode",
			value: function() {
				var e = n.EAN2_STRUCTURE[parseInt(this.data) % 4];
				return {
					data: "1011" + (0, r.default)(this.data, e, "01"),
					text: this.text
				};
			}
		}]), i;
	}(i.default);
})), Bn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}();
	e.checksum = l;
	var n = i(Pn()), r = i(Cn());
	function i(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function a(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function o(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function s(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	var c = function(e) {
		s(r, e);
		function r(e, t) {
			a(this, r), e.search(/^[0-9]{11}$/) !== -1 && (e += l(e));
			var n = o(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e, t));
			return n.displayValue = t.displayValue, n.fontSize = t.fontSize > t.width * 10 ? t.width * 10 : t.fontSize, n.guardHeight = t.height + n.fontSize / 2 + t.textMargin, n;
		}
		return t(r, [
			{
				key: "valid",
				value: function() {
					return this.data.search(/^[0-9]{12}$/) !== -1 && this.data[11] == l(this.data);
				}
			},
			{
				key: "encode",
				value: function() {
					return this.options.flat ? this.flatEncoding() : this.guardedEncoding();
				}
			},
			{
				key: "flatEncoding",
				value: function() {
					var e = "";
					return e += "101", e += (0, n.default)(this.data.substr(0, 6), "LLLLLL"), e += "01010", e += (0, n.default)(this.data.substr(6, 6), "RRRRRR"), e += "101", {
						data: e,
						text: this.text
					};
				}
			},
			{
				key: "guardedEncoding",
				value: function() {
					var e = [];
					return this.displayValue && e.push({
						data: "00000000",
						text: this.text.substr(0, 1),
						options: {
							textAlign: "left",
							fontSize: this.fontSize
						}
					}), e.push({
						data: "101" + (0, n.default)(this.data[0], "L"),
						options: { height: this.guardHeight }
					}), e.push({
						data: (0, n.default)(this.data.substr(1, 5), "LLLLL"),
						text: this.text.substr(1, 5),
						options: { fontSize: this.fontSize }
					}), e.push({
						data: "01010",
						options: { height: this.guardHeight }
					}), e.push({
						data: (0, n.default)(this.data.substr(6, 5), "RRRRR"),
						text: this.text.substr(6, 5),
						options: { fontSize: this.fontSize }
					}), e.push({
						data: (0, n.default)(this.data[11], "R") + "101",
						options: { height: this.guardHeight }
					}), this.displayValue && e.push({
						data: "00000000",
						text: this.text.substr(11, 1),
						options: {
							textAlign: "right",
							fontSize: this.fontSize
						}
					}), e;
				}
			}
		]), r;
	}(r.default);
	function l(e) {
		for (var t = 0, n = 1; n < 11; n += 2) t += parseInt(e[n]);
		for (n = 0; n < 11; n += 2) t += parseInt(e[n]) * 3;
		return (10 - t % 10) % 10;
	}
	e.default = c;
})), Vn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(), n = a(Pn()), r = a(Cn()), i = Bn();
	function a(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function o(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function s(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function c(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	var l = [
		"XX00000XXX",
		"XX10000XXX",
		"XX20000XXX",
		"XXX00000XX",
		"XXXX00000X",
		"XXXXX00005",
		"XXXXX00006",
		"XXXXX00007",
		"XXXXX00008",
		"XXXXX00009"
	], u = [
		["EEEOOO", "OOOEEE"],
		["EEOEOO", "OOEOEE"],
		["EEOOEO", "OOEEOE"],
		["EEOOOE", "OOEEEO"],
		["EOEEOO", "OEOOEE"],
		["EOOEEO", "OEEOOE"],
		["EOOOEE", "OEEEOO"],
		["EOEOEO", "OEOEOE"],
		["EOEOOE", "OEOEEO"],
		["EOOEOE", "OEEOEO"]
	], d = function(e) {
		c(r, e);
		function r(e, t) {
			o(this, r);
			var n = s(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e, t));
			if (n.isValid = !1, e.search(/^[0-9]{6}$/) !== -1) n.middleDigits = e, n.upcA = f(e, "0"), n.text = t.text || "" + n.upcA[0] + e + n.upcA[n.upcA.length - 1], n.isValid = !0;
			else if (e.search(/^[01][0-9]{7}$/) !== -1) {
				if (n.middleDigits = e.substring(1, e.length - 1), n.upcA = f(n.middleDigits, e[0]), n.upcA[n.upcA.length - 1] === e[e.length - 1]) n.isValid = !0;
				else return s(n);
			} else return s(n);
			return n.displayValue = t.displayValue, n.fontSize = t.fontSize > t.width * 10 ? t.width * 10 : t.fontSize, n.guardHeight = t.height + n.fontSize / 2 + t.textMargin, n;
		}
		return t(r, [
			{
				key: "valid",
				value: function() {
					return this.isValid;
				}
			},
			{
				key: "encode",
				value: function() {
					return this.options.flat ? this.flatEncoding() : this.guardedEncoding();
				}
			},
			{
				key: "flatEncoding",
				value: function() {
					var e = "";
					return e += "101", e += this.encodeMiddleDigits(), e += "010101", {
						data: e,
						text: this.text
					};
				}
			},
			{
				key: "guardedEncoding",
				value: function() {
					var e = [];
					return this.displayValue && e.push({
						data: "00000000",
						text: this.text[0],
						options: {
							textAlign: "left",
							fontSize: this.fontSize
						}
					}), e.push({
						data: "101",
						options: { height: this.guardHeight }
					}), e.push({
						data: this.encodeMiddleDigits(),
						text: this.text.substring(1, 7),
						options: { fontSize: this.fontSize }
					}), e.push({
						data: "010101",
						options: { height: this.guardHeight }
					}), this.displayValue && e.push({
						data: "00000000",
						text: this.text[7],
						options: {
							textAlign: "right",
							fontSize: this.fontSize
						}
					}), e;
				}
			},
			{
				key: "encodeMiddleDigits",
				value: function() {
					var e = this.upcA[0], t = this.upcA[this.upcA.length - 1], r = u[parseInt(t)][parseInt(e)];
					return (0, n.default)(this.middleDigits, r);
				}
			}
		]), r;
	}(r.default);
	function f(e, t) {
		for (var n = l[parseInt(e[e.length - 1])], r = "", a = 0, o = 0; o < n.length; o++) {
			var s = n[o];
			r += s === "X" ? e[a++] : s;
		}
		return r = "" + t + r, "" + r + (0, i.checksum)(r);
	}
	e.default = d;
})), Hn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.UPCE = e.UPC = e.EAN2 = e.EAN5 = e.EAN8 = e.EAN13 = void 0;
	var t = s(In()), n = s(Ln()), r = s(Rn()), i = s(zn()), a = s(Bn()), o = s(Vn());
	function s(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e.EAN13 = t.default, e.EAN8 = n.default, e.EAN5 = r.default, e.EAN2 = i.default, e.UPC = a.default, e.UPCE = o.default;
})), Un = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.START_BIN = "1010", e.END_BIN = "11101", e.BINARIES = [
		"00110",
		"10001",
		"01001",
		"11000",
		"00101",
		"10100",
		"01100",
		"00011",
		"10010",
		"01010"
	];
})), Wn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(), n = Un(), r = i(Cn());
	function i(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function a(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function o(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function s(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	e.default = function(e) {
		s(r, e);
		function r() {
			return a(this, r), o(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
		}
		return t(r, [
			{
				key: "valid",
				value: function() {
					return this.data.search(/^([0-9]{2})+$/) !== -1;
				}
			},
			{
				key: "encode",
				value: function() {
					var e = this, t = this.data.match(/.{2}/g).map(function(t) {
						return e.encodePair(t);
					}).join("");
					return {
						data: n.START_BIN + t + n.END_BIN,
						text: this.text
					};
				}
			},
			{
				key: "encodePair",
				value: function(e) {
					var t = n.BINARIES[e[1]];
					return n.BINARIES[e[0]].split("").map(function(e, n) {
						return (e === "1" ? "111" : "1") + (t[n] === "1" ? "000" : "0");
					}).join("");
				}
			}
		]), r;
	}(r.default);
})), Gn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(), n = r(Wn());
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function i(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function a(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function o(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	var s = function(e) {
		var t = e.substr(0, 13).split("").map(function(e) {
			return parseInt(e, 10);
		}).reduce(function(e, t, n) {
			return e + t * (3 - n % 2 * 2);
		}, 0);
		return Math.ceil(t / 10) * 10 - t;
	};
	e.default = function(e) {
		o(n, e);
		function n(e, t) {
			return i(this, n), e.search(/^[0-9]{13}$/) !== -1 && (e += s(e)), a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t));
		}
		return t(n, [{
			key: "valid",
			value: function() {
				return this.data.search(/^[0-9]{14}$/) !== -1 && +this.data[13] === s(this.data);
			}
		}]), n;
	}(n.default);
})), Kn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ITF14 = e.ITF = void 0;
	var t = r(Wn()), n = r(Gn());
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e.ITF = t.default, e.ITF14 = n.default;
})), qn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(), n = r(Cn());
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function i(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function a(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function o(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	var s = function(e) {
		o(n, e);
		function n(e, t) {
			return i(this, n), a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t));
		}
		return t(n, [{
			key: "encode",
			value: function() {
				for (var e = "110", t = 0; t < this.data.length; t++) {
					var n = parseInt(this.data[t]).toString(2);
					n = c(n, 4 - n.length);
					for (var r = 0; r < n.length; r++) e += n[r] == "0" ? "100" : "110";
				}
				return e += "1001", {
					data: e,
					text: this.text
				};
			}
		}, {
			key: "valid",
			value: function() {
				return this.data.search(/^[0-9]+$/) !== -1;
			}
		}]), n;
	}(n.default);
	function c(e, t) {
		for (var n = 0; n < t; n++) e = "0" + e;
		return e;
	}
	e.default = s;
})), Jn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.mod10 = t, e.mod11 = n;
	function t(e) {
		for (var t = 0, n = 0; n < e.length; n++) {
			var r = parseInt(e[n]);
			(n + e.length) % 2 == 0 ? t += r : t += r * 2 % 10 + Math.floor(r * 2 / 10);
		}
		return (10 - t % 10) % 10;
	}
	function n(e) {
		for (var t = 0, n = [
			2,
			3,
			4,
			5,
			6,
			7
		], r = 0; r < e.length; r++) {
			var i = parseInt(e[e.length - 1 - r]);
			t += n[r % n.length] * i;
		}
		return (11 - t % 11) % 11;
	}
})), Yn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = r(qn()), n = Jn();
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function i(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function a(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function o(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	e.default = function(e) {
		o(t, e);
		function t(e, r) {
			return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e + (0, n.mod10)(e), r));
		}
		return t;
	}(t.default);
})), Xn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = r(qn()), n = Jn();
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function i(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function a(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function o(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	e.default = function(e) {
		o(t, e);
		function t(e, r) {
			return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e + (0, n.mod11)(e), r));
		}
		return t;
	}(t.default);
})), Zn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = r(qn()), n = Jn();
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function i(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function a(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function o(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	e.default = function(e) {
		o(t, e);
		function t(e, r) {
			return i(this, t), e += (0, n.mod10)(e), e += (0, n.mod10)(e), a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r));
		}
		return t;
	}(t.default);
})), Qn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = r(qn()), n = Jn();
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function i(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function a(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function o(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	e.default = function(e) {
		o(t, e);
		function t(e, r) {
			return i(this, t), e += (0, n.mod11)(e), e += (0, n.mod10)(e), a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r));
		}
		return t;
	}(t.default);
})), $n = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.MSI1110 = e.MSI1010 = e.MSI11 = e.MSI10 = e.MSI = void 0;
	var t = o(qn()), n = o(Yn()), r = o(Xn()), i = o(Zn()), a = o(Qn());
	function o(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e.MSI = t.default, e.MSI10 = n.default, e.MSI11 = r.default, e.MSI1010 = i.default, e.MSI1110 = a.default;
})), er = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.pharmacode = void 0;
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(), n = r(Cn());
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function i(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function a(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function o(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	e.pharmacode = function(e) {
		o(n, e);
		function n(e, t) {
			i(this, n);
			var r = a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t));
			return r.number = parseInt(e, 10), r;
		}
		return t(n, [{
			key: "encode",
			value: function() {
				for (var e = this.number, t = ""; !isNaN(e) && e != 0;) e % 2 == 0 ? (t = "11100" + t, e = (e - 2) / 2) : (t = "100" + t, e = (e - 1) / 2);
				return t = t.slice(0, -2), {
					data: t,
					text: this.text
				};
			}
		}, {
			key: "valid",
			value: function() {
				return this.number >= 3 && this.number <= 131070;
			}
		}]), n;
	}(n.default);
})), tr = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.codabar = void 0;
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(), n = r(Cn());
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function i(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function a(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function o(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	e.codabar = function(e) {
		o(n, e);
		function n(e, t) {
			i(this, n), e.search(/^[0-9\-\$\:\.\+\/]+$/) === 0 && (e = "A" + e + "A");
			var r = a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e.toUpperCase(), t));
			return r.text = r.options.text || r.text.replace(/[A-D]/g, ""), r;
		}
		return t(n, [
			{
				key: "valid",
				value: function() {
					return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
				}
			},
			{
				key: "encode",
				value: function() {
					for (var e = [], t = this.getEncodings(), n = 0; n < this.data.length; n++) e.push(t[this.data.charAt(n)]), n !== this.data.length - 1 && e.push("0");
					return {
						text: this.text,
						data: e.join("")
					};
				}
			},
			{
				key: "getEncodings",
				value: function() {
					return {
						0: "101010011",
						1: "101011001",
						2: "101001011",
						3: "110010101",
						4: "101101001",
						5: "110101001",
						6: "100101011",
						7: "100101101",
						8: "100110101",
						9: "110100101",
						"-": "101001101",
						$: "101100101",
						":": "1101011011",
						"/": "1101101011",
						".": "1101101101",
						"+": "1011011011",
						A: "1011001001",
						B: "1001001011",
						C: "1010010011",
						D: "1010011001"
					};
				}
			}
		]), n;
	}(n.default);
})), nr = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.SYMBOLS = /* @__PURE__ */ "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,-,., ,$,/,+,%,($),(%),(/),(+),ÿ".split(","), e.BINARIES = /* @__PURE__ */ "100010100.101001000.101000100.101000010.100101000.100100100.100100010.101010000.100010010.100001010.110101000.110100100.110100010.110010100.110010010.110001010.101101000.101100100.101100010.100110100.100011010.101011000.101001100.101000110.100101100.100010110.110110100.110110010.110101100.110100110.110010110.110011010.101101100.101100110.100110110.100111010.100101110.111010100.111010010.111001010.101101110.101110110.110101110.100100110.111011010.111010110.100110010.101011110".split("."), e.MULTI_SYMBOLS = {
		"\0": ["(%)", "U"],
		"": ["($)", "A"],
		"": ["($)", "B"],
		"": ["($)", "C"],
		"": ["($)", "D"],
		"": ["($)", "E"],
		"": ["($)", "F"],
		"\x07": ["($)", "G"],
		"\b": ["($)", "H"],
		"	": ["($)", "I"],
		"\n": ["($)", "J"],
		"\v": ["($)", "K"],
		"\f": ["($)", "L"],
		"\r": ["($)", "M"],
		"": ["($)", "N"],
		"": ["($)", "O"],
		"": ["($)", "P"],
		"": ["($)", "Q"],
		"": ["($)", "R"],
		"": ["($)", "S"],
		"": ["($)", "T"],
		"": ["($)", "U"],
		"": ["($)", "V"],
		"": ["($)", "W"],
		"": ["($)", "X"],
		"": ["($)", "Y"],
		"": ["($)", "Z"],
		"\x1B": ["(%)", "A"],
		"": ["(%)", "B"],
		"": ["(%)", "C"],
		"": ["(%)", "D"],
		"": ["(%)", "E"],
		"!": ["(/)", "A"],
		"\"": ["(/)", "B"],
		"#": ["(/)", "C"],
		"&": ["(/)", "F"],
		"'": ["(/)", "G"],
		"(": ["(/)", "H"],
		")": ["(/)", "I"],
		"*": ["(/)", "J"],
		",": ["(/)", "L"],
		":": ["(/)", "Z"],
		";": ["(%)", "F"],
		"<": ["(%)", "G"],
		"=": ["(%)", "H"],
		">": ["(%)", "I"],
		"?": ["(%)", "J"],
		"@": ["(%)", "V"],
		"[": ["(%)", "K"],
		"\\": ["(%)", "L"],
		"]": ["(%)", "M"],
		"^": ["(%)", "N"],
		_: ["(%)", "O"],
		"`": ["(%)", "W"],
		a: ["(+)", "A"],
		b: ["(+)", "B"],
		c: ["(+)", "C"],
		d: ["(+)", "D"],
		e: ["(+)", "E"],
		f: ["(+)", "F"],
		g: ["(+)", "G"],
		h: ["(+)", "H"],
		i: ["(+)", "I"],
		j: ["(+)", "J"],
		k: ["(+)", "K"],
		l: ["(+)", "L"],
		m: ["(+)", "M"],
		n: ["(+)", "N"],
		o: ["(+)", "O"],
		p: ["(+)", "P"],
		q: ["(+)", "Q"],
		r: ["(+)", "R"],
		s: ["(+)", "S"],
		t: ["(+)", "T"],
		u: ["(+)", "U"],
		v: ["(+)", "V"],
		w: ["(+)", "W"],
		x: ["(+)", "X"],
		y: ["(+)", "Y"],
		z: ["(+)", "Z"],
		"{": ["(%)", "P"],
		"|": ["(%)", "Q"],
		"}": ["(%)", "R"],
		"~": ["(%)", "S"],
		"": ["(%)", "T"]
	};
})), rr = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(), n = nr(), r = i(Cn());
	function i(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function a(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function o(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function s(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	e.default = function(e) {
		s(r, e);
		function r(e, t) {
			return a(this, r), o(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e, t));
		}
		return t(r, [{
			key: "valid",
			value: function() {
				return /^[0-9A-Z\-. $/+%]+$/.test(this.data);
			}
		}, {
			key: "encode",
			value: function() {
				var e = this.data.split("").flatMap(function(e) {
					return n.MULTI_SYMBOLS[e] || e;
				}), t = e.map(function(e) {
					return r.getEncoding(e);
				}).join(""), i = r.checksum(e, 20), a = r.checksum(e.concat(i), 15);
				return {
					text: this.text,
					data: r.getEncoding("ÿ") + t + r.getEncoding(i) + r.getEncoding(a) + r.getEncoding("ÿ") + "1"
				};
			}
		}], [
			{
				key: "getEncoding",
				value: function(e) {
					return n.BINARIES[r.symbolValue(e)];
				}
			},
			{
				key: "getSymbol",
				value: function(e) {
					return n.SYMBOLS[e];
				}
			},
			{
				key: "symbolValue",
				value: function(e) {
					return n.SYMBOLS.indexOf(e);
				}
			},
			{
				key: "checksum",
				value: function(e, t) {
					var n = e.slice().reverse().reduce(function(e, n, i) {
						var a = i % t + 1;
						return e + r.symbolValue(n) * a;
					}, 0);
					return r.getSymbol(n % 47);
				}
			}
		]), r;
	}(r.default);
})), ir = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(), n = r(rr());
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function i(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function a(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function o(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	e.default = function(e) {
		o(n, e);
		function n(e, t) {
			return i(this, n), a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t));
		}
		return t(n, [{
			key: "valid",
			value: function() {
				return /^[\x00-\x7f]+$/.test(this.data);
			}
		}]), n;
	}(n.default);
})), ar = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.CODE93FullASCII = e.CODE93 = void 0;
	var t = r(rr()), n = r(ir());
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e.CODE93 = t.default, e.CODE93FullASCII = n.default;
})), or = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.GenericBarcode = void 0;
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(), n = r(Cn());
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function i(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function a(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function o(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	e.GenericBarcode = function(e) {
		o(n, e);
		function n(e, t) {
			return i(this, n), a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t));
		}
		return t(n, [{
			key: "encode",
			value: function() {
				return {
					data: "10101010101010101010101010101010101010101",
					text: this.text
				};
			}
		}, {
			key: "valid",
			value: function() {
				return !0;
			}
		}]), n;
	}(n.default);
})), sr = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = wn(), n = Mn(), r = Hn(), i = Kn(), a = $n(), o = er(), s = tr(), c = ar(), l = or();
	e.default = {
		CODE39: t.CODE39,
		CODE128: n.CODE128,
		CODE128A: n.CODE128A,
		CODE128B: n.CODE128B,
		CODE128C: n.CODE128C,
		EAN13: r.EAN13,
		EAN8: r.EAN8,
		EAN5: r.EAN5,
		EAN2: r.EAN2,
		UPC: r.UPC,
		UPCE: r.UPCE,
		ITF14: i.ITF14,
		ITF: i.ITF,
		MSI: a.MSI,
		MSI10: a.MSI10,
		MSI11: a.MSI11,
		MSI1010: a.MSI1010,
		MSI1110: a.MSI1110,
		pharmacode: o.pharmacode,
		codabar: s.codabar,
		CODE93: c.CODE93,
		CODE93FullASCII: c.CODE93FullASCII,
		GenericBarcode: l.GenericBarcode
	};
})), cr = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	};
	e.default = function(e, n) {
		return t({}, e, n);
	};
})), lr = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = t;
	function t(e) {
		var t = [];
		function n(e) {
			if (Array.isArray(e)) for (var r = 0; r < e.length; r++) n(e[r]);
			else e.text = e.text || "", e.data = e.data || "", t.push(e);
		}
		return n(e), t;
	}
})), ur = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = t;
	function t(e) {
		return e.marginTop = e.marginTop || e.margin, e.marginBottom = e.marginBottom || e.margin, e.marginRight = e.marginRight || e.margin, e.marginLeft = e.marginLeft || e.margin, e;
	}
})), dr = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = t;
	function t(e) {
		var t = [
			"width",
			"height",
			"textMargin",
			"fontSize",
			"margin",
			"marginTop",
			"marginBottom",
			"marginLeft",
			"marginRight"
		];
		for (var n in t) t.hasOwnProperty(n) && (n = t[n], typeof e[n] == "string" && (e[n] = parseInt(e[n], 10)));
		return typeof e.displayValue == "string" && (e.displayValue = e.displayValue != "false"), e;
	}
})), fr = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = {
		width: 2,
		height: 100,
		format: "auto",
		displayValue: !0,
		fontOptions: "",
		font: "monospace",
		text: void 0,
		textAlign: "center",
		textPosition: "bottom",
		textMargin: 2,
		fontSize: 20,
		background: "#ffffff",
		lineColor: "#000000",
		margin: 10,
		marginTop: void 0,
		marginBottom: void 0,
		marginLeft: void 0,
		marginRight: void 0,
		valid: function() {}
	};
})), pr = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = r(dr()), n = r(fr());
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function i(e) {
		var r = {};
		for (var i in n.default) n.default.hasOwnProperty(i) && (e.hasAttribute("jsbarcode-" + i.toLowerCase()) && (r[i] = e.getAttribute("jsbarcode-" + i.toLowerCase())), e.hasAttribute("data-" + i.toLowerCase()) && (r[i] = e.getAttribute("data-" + i.toLowerCase())));
		return r.value = e.getAttribute("jsbarcode-value") || e.getAttribute("data-value"), r = (0, t.default)(r), r;
	}
	e.default = i;
})), mr = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.getTotalWidthOfEncodings = e.calculateEncodingAttributes = e.getBarcodePadding = e.getEncodingHeight = e.getMaximumHeightOfEncodings = void 0;
	var t = n(cr());
	function n(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function r(e, t) {
		return t.height + (t.displayValue && e.text.length > 0 ? t.fontSize + t.textMargin : 0) + t.marginTop + t.marginBottom;
	}
	function i(e, t, n) {
		if (n.displayValue && t < e) {
			if (n.textAlign == "center") return Math.floor((e - t) / 2);
			if (n.textAlign == "left") return 0;
			if (n.textAlign == "right") return Math.floor(e - t);
		}
		return 0;
	}
	function a(e, n, a) {
		for (var o = 0; o < e.length; o++) {
			var s = e[o], l = (0, t.default)(n, s.options), u = l.displayValue ? c(s.text, l, a) : 0, d = s.data.length * l.width;
			s.width = Math.ceil(Math.max(u, d)), s.height = r(s, l), s.barcodePadding = i(u, d, l);
		}
	}
	function o(e) {
		for (var t = 0, n = 0; n < e.length; n++) t += e[n].width;
		return t;
	}
	function s(e) {
		for (var t = 0, n = 0; n < e.length; n++) e[n].height > t && (t = e[n].height);
		return t;
	}
	function c(e, t, n) {
		var r;
		if (n) r = n;
		else if (typeof document < "u") r = document.createElement("canvas").getContext("2d");
		else return 0;
		r.font = t.fontOptions + " " + t.fontSize + "px " + t.font;
		var i = r.measureText(e);
		return i ? i.width : 0;
	}
	e.getMaximumHeightOfEncodings = s, e.getEncodingHeight = r, e.getBarcodePadding = i, e.calculateEncodingAttributes = a, e.getTotalWidthOfEncodings = o;
})), hr = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(), n = i(cr()), r = mr();
	function i(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function a(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	e.default = function() {
		function e(t, n, r) {
			a(this, e), this.canvas = t, this.encodings = n, this.options = r;
		}
		return t(e, [
			{
				key: "render",
				value: function() {
					if (!this.canvas.getContext) throw Error("The browser does not support canvas.");
					this.prepareCanvas();
					for (var e = 0; e < this.encodings.length; e++) {
						var t = (0, n.default)(this.options, this.encodings[e].options);
						this.drawCanvasBarcode(t, this.encodings[e]), this.drawCanvasText(t, this.encodings[e]), this.moveCanvasDrawing(this.encodings[e]);
					}
					this.restoreCanvas();
				}
			},
			{
				key: "prepareCanvas",
				value: function() {
					var e = this.canvas.getContext("2d");
					e.save(), (0, r.calculateEncodingAttributes)(this.encodings, this.options, e);
					var t = (0, r.getTotalWidthOfEncodings)(this.encodings), n = (0, r.getMaximumHeightOfEncodings)(this.encodings);
					this.canvas.width = t + this.options.marginLeft + this.options.marginRight, this.canvas.height = n, e.clearRect(0, 0, this.canvas.width, this.canvas.height), this.options.background && (e.fillStyle = this.options.background, e.fillRect(0, 0, this.canvas.width, this.canvas.height)), e.translate(this.options.marginLeft, 0);
				}
			},
			{
				key: "drawCanvasBarcode",
				value: function(e, t) {
					var n = this.canvas.getContext("2d"), r = t.data, i = e.textPosition == "top" ? e.marginTop + e.fontSize + e.textMargin : e.marginTop;
					n.fillStyle = e.lineColor;
					for (var a = 0; a < r.length; a++) {
						var o = a * e.width + t.barcodePadding;
						r[a] === "1" ? n.fillRect(o, i, e.width, e.height) : r[a] && n.fillRect(o, i, e.width, e.height * r[a]);
					}
				}
			},
			{
				key: "drawCanvasText",
				value: function(e, t) {
					var n = this.canvas.getContext("2d"), r = e.fontOptions + " " + e.fontSize + "px " + e.font;
					if (e.displayValue) {
						var i, a = e.textPosition == "top" ? e.marginTop + e.fontSize - e.textMargin : e.height + e.textMargin + e.marginTop + e.fontSize;
						n.font = r, e.textAlign == "left" || t.barcodePadding > 0 ? (i = 0, n.textAlign = "left") : e.textAlign == "right" ? (i = t.width - 1, n.textAlign = "right") : (i = t.width / 2, n.textAlign = "center"), n.fillText(t.text, i, a);
					}
				}
			},
			{
				key: "moveCanvasDrawing",
				value: function(e) {
					this.canvas.getContext("2d").translate(e.width, 0);
				}
			},
			{
				key: "restoreCanvas",
				value: function() {
					this.canvas.getContext("2d").restore();
				}
			}
		]), e;
	}();
})), gr = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(), n = i(cr()), r = mr();
	function i(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function a(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	var o = "http://www.w3.org/2000/svg";
	e.default = function() {
		function e(t, n, r) {
			a(this, e), this.svg = t, this.encodings = n, this.options = r, this.document = r.xmlDocument || document;
		}
		return t(e, [
			{
				key: "render",
				value: function() {
					var e = this.options.marginLeft;
					this.prepareSVG();
					for (var t = 0; t < this.encodings.length; t++) {
						var r = this.encodings[t], i = (0, n.default)(this.options, r.options), a = this.createGroup(e, i.marginTop, this.svg);
						this.setGroupOptions(a, i), this.drawSvgBarcode(a, i, r), this.drawSVGText(a, i, r), e += r.width;
					}
				}
			},
			{
				key: "prepareSVG",
				value: function() {
					for (; this.svg.firstChild;) this.svg.removeChild(this.svg.firstChild);
					(0, r.calculateEncodingAttributes)(this.encodings, this.options);
					var e = (0, r.getTotalWidthOfEncodings)(this.encodings), t = (0, r.getMaximumHeightOfEncodings)(this.encodings), n = e + this.options.marginLeft + this.options.marginRight;
					this.setSvgAttributes(n, t), this.options.background && this.drawRect(0, 0, n, t, this.svg).setAttribute("fill", this.options.background);
				}
			},
			{
				key: "drawSvgBarcode",
				value: function(e, t, n) {
					for (var r = n.data, i = t.textPosition == "top" ? t.fontSize + t.textMargin : 0, a = 0, o = 0, s = 0; s < r.length; s++) o = s * t.width + n.barcodePadding, r[s] === "1" ? a++ : a > 0 && (this.drawRect(o - t.width * a, i, t.width * a, t.height, e), a = 0);
					a > 0 && this.drawRect(o - t.width * (a - 1), i, t.width * a, t.height, e);
				}
			},
			{
				key: "drawSVGText",
				value: function(e, t, n) {
					var r = this.document.createElementNS(o, "text");
					if (t.displayValue) {
						var i, a;
						r.setAttribute("font-family", t.font), r.setAttribute("font-size", t.fontSize), t.fontOptions.includes("bold") && r.setAttribute("font-weight", "bold"), t.fontOptions.includes("italic") && r.setAttribute("font-style", "italic"), a = t.textPosition == "top" ? t.fontSize - t.textMargin : t.height + t.textMargin + t.fontSize, t.textAlign == "left" || n.barcodePadding > 0 ? (i = 0, r.setAttribute("text-anchor", "start")) : t.textAlign == "right" ? (i = n.width - 1, r.setAttribute("text-anchor", "end")) : (i = n.width / 2, r.setAttribute("text-anchor", "middle")), r.setAttribute("x", i), r.setAttribute("y", a), r.appendChild(this.document.createTextNode(n.text)), e.appendChild(r);
					}
				}
			},
			{
				key: "setSvgAttributes",
				value: function(e, t) {
					var n = this.svg;
					n.setAttribute("width", e + "px"), n.setAttribute("height", t + "px"), n.setAttribute("x", "0px"), n.setAttribute("y", "0px"), n.setAttribute("viewBox", "0 0 " + e + " " + t), n.setAttribute("xmlns", o), n.setAttribute("version", "1.1");
				}
			},
			{
				key: "createGroup",
				value: function(e, t, n) {
					var r = this.document.createElementNS(o, "g");
					return r.setAttribute("transform", "translate(" + e + ", " + t + ")"), n.appendChild(r), r;
				}
			},
			{
				key: "setGroupOptions",
				value: function(e, t) {
					e.setAttribute("fill", t.lineColor);
				}
			},
			{
				key: "drawRect",
				value: function(e, t, n, r, i) {
					var a = this.document.createElementNS(o, "rect");
					return a.setAttribute("x", e), a.setAttribute("y", t), a.setAttribute("width", n), a.setAttribute("height", r), i.appendChild(a), a;
				}
			}
		]), e;
	}();
})), _r = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}();
	function n(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	e.default = function() {
		function e(t, r, i) {
			n(this, e), this.object = t, this.encodings = r, this.options = i;
		}
		return t(e, [{
			key: "render",
			value: function() {
				this.object.encodings = this.encodings;
			}
		}]), e;
	}();
})), vr = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = i(hr()), n = i(gr()), r = i(_r());
	function i(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e.default = {
		CanvasRenderer: t.default,
		SVGRenderer: n.default,
		ObjectRenderer: r.default
	};
})), yr = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function n(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function r(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	var i = function(e) {
		r(i, e);
		function i(e, r) {
			t(this, i);
			var a = n(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
			return a.name = "InvalidInputException", a.symbology = e, a.input = r, a.message = "\"" + a.input + "\" is not a valid input for " + a.symbology, a;
		}
		return i;
	}(Error), a = function(e) {
		r(i, e);
		function i() {
			t(this, i);
			var e = n(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
			return e.name = "InvalidElementException", e.message = "Not supported type to render on", e;
		}
		return i;
	}(Error), o = function(e) {
		r(i, e);
		function i() {
			t(this, i);
			var e = n(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
			return e.name = "NoElementException", e.message = "No element to render on.", e;
		}
		return i;
	}(Error);
	e.InvalidInputException = i, e.InvalidElementException = a, e.NoElementException = o;
})), br = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, n = a(pr()), r = a(vr()), i = yr();
	function a(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function o(e) {
		if (typeof e == "string") return s(e);
		if (Array.isArray(e)) {
			for (var a = [], l = 0; l < e.length; l++) a.push(o(e[l]));
			return a;
		}
		if (typeof HTMLCanvasElement < "u" && e instanceof HTMLImageElement) return c(e);
		if (e && e.nodeName && e.nodeName.toLowerCase() === "svg" || typeof SVGElement < "u" && e instanceof SVGElement) return {
			element: e,
			options: (0, n.default)(e),
			renderer: r.default.SVGRenderer
		};
		if (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) return {
			element: e,
			options: (0, n.default)(e),
			renderer: r.default.CanvasRenderer
		};
		if (e && e.getContext) return {
			element: e,
			renderer: r.default.CanvasRenderer
		};
		if (e && (e === void 0 ? "undefined" : t(e)) === "object" && !e.nodeName) return {
			element: e,
			renderer: r.default.ObjectRenderer
		};
		throw new i.InvalidElementException();
	}
	function s(e) {
		var t = document.querySelectorAll(e);
		if (t.length !== 0) {
			for (var n = [], r = 0; r < t.length; r++) n.push(o(t[r]));
			return n;
		}
	}
	function c(e) {
		var t = document.createElement("canvas");
		return {
			element: t,
			options: (0, n.default)(e),
			renderer: r.default.CanvasRenderer,
			afterRender: function() {
				e.setAttribute("src", t.toDataURL());
			}
		};
	}
	e.default = o;
})), xr = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}();
	function n(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	e.default = function() {
		function e(t) {
			n(this, e), this.api = t;
		}
		return t(e, [{
			key: "handleCatch",
			value: function(e) {
				if (e.name === "InvalidInputException") {
					if (this.api._options.valid !== this.api._defaults.valid) this.api._options.valid(!1);
					else throw e.message;
				} else throw e;
				this.api.render = function() {};
			}
		}, {
			key: "wrapBarcodeCall",
			value: function(e) {
				try {
					var t = e.apply(void 0, arguments);
					return this.api._options.valid(!0), t;
				} catch (e) {
					return this.handleCatch(e), this.api;
				}
			}
		}]), e;
	}();
})), Sr = /* @__PURE__ */ o(((e, t) => {
	var n = d(sr()), r = d(cr()), i = d(lr()), a = d(ur()), o = d(br()), s = d(dr()), c = d(xr()), l = yr(), u = d(fr());
	function d(e) {
		return e && e.__esModule ? e : { default: e };
	}
	var f = function() {}, p = function(e, t, n) {
		var r = new f();
		if (e === void 0) throw Error("No element to render on was provided.");
		return r._renderProperties = (0, o.default)(e), r._encodings = [], r._options = u.default, r._errorHandler = new c.default(r), t !== void 0 && (n ||= {}, n.format || (n.format = _()), r.options(n)[n.format](t, n).render()), r;
	};
	for (var m in p.getModule = function(e) {
		return n.default[e];
	}, n.default) n.default.hasOwnProperty(m) && h(n.default, m);
	function h(e, t) {
		f.prototype[t] = f.prototype[t.toUpperCase()] = f.prototype[t.toLowerCase()] = function(n, i) {
			var a = this;
			return a._errorHandler.wrapBarcodeCall(function() {
				i.text = i.text === void 0 ? void 0 : "" + i.text;
				var o = (0, r.default)(a._options, i);
				o = (0, s.default)(o);
				var c = e[t], l = g(n, c, o);
				return a._encodings.push(l), a;
			});
		};
	}
	function g(e, t, n) {
		e = "" + e;
		var a = new t(e, n);
		if (!a.valid()) throw new l.InvalidInputException(a.constructor.name, e);
		var o = a.encode();
		o = (0, i.default)(o);
		for (var s = 0; s < o.length; s++) o[s].options = (0, r.default)(n, o[s].options);
		return o;
	}
	function _() {
		return n.default.CODE128 ? "CODE128" : Object.keys(n.default)[0];
	}
	f.prototype.options = function(e) {
		return this._options = (0, r.default)(this._options, e), this;
	}, f.prototype.blank = function(e) {
		var t = Array(e + 1).join("0");
		return this._encodings.push({ data: t }), this;
	}, f.prototype.init = function() {
		if (this._renderProperties) {
			Array.isArray(this._renderProperties) || (this._renderProperties = [this._renderProperties]);
			var e;
			for (var t in this._renderProperties) {
				e = this._renderProperties[t];
				var i = (0, r.default)(this._options, e.options);
				i.format == "auto" && (i.format = _()), this._errorHandler.wrapBarcodeCall(function() {
					var t = i.value, r = n.default[i.format.toUpperCase()], a = g(t, r, i);
					v(e, a, i);
				});
			}
		}
	}, f.prototype.render = function() {
		if (!this._renderProperties) throw new l.NoElementException();
		if (Array.isArray(this._renderProperties)) for (var e = 0; e < this._renderProperties.length; e++) v(this._renderProperties[e], this._encodings, this._options);
		else v(this._renderProperties, this._encodings, this._options);
		return this;
	}, f.prototype._defaults = u.default;
	function v(e, t, n) {
		t = (0, i.default)(t);
		for (var o = 0; o < t.length; o++) t[o].options = (0, r.default)(n, t[o].options), (0, a.default)(t[o].options);
		(0, a.default)(n);
		var s = e.renderer;
		new s(e.element, t, n).render(), e.afterRender && e.afterRender();
	}
	typeof window < "u" && (window.JsBarcode = p), typeof jQuery < "u" && (jQuery.fn.JsBarcode = function(e, t) {
		var n = [];
		return jQuery(this).each(function() {
			n.push(this);
		}), p(n, e, t);
	}), t.exports = p;
})), Cr = /* @__PURE__ */ o(((e, t) => {
	t.exports = function() {
		return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
	};
})), wr = /* @__PURE__ */ o(((e) => {
	var t, n = [
		0,
		26,
		44,
		70,
		100,
		134,
		172,
		196,
		242,
		292,
		346,
		404,
		466,
		532,
		581,
		655,
		733,
		815,
		901,
		991,
		1085,
		1156,
		1258,
		1364,
		1474,
		1588,
		1706,
		1828,
		1921,
		2051,
		2185,
		2323,
		2465,
		2611,
		2761,
		2876,
		3034,
		3196,
		3362,
		3532,
		3706
	];
	e.getSymbolSize = function(e) {
		if (!e) throw Error("\"version\" cannot be null or undefined");
		if (e < 1 || e > 40) throw Error("\"version\" should be in range from 1 to 40");
		return e * 4 + 17;
	}, e.getSymbolTotalCodewords = function(e) {
		return n[e];
	}, e.getBCHDigit = function(e) {
		let t = 0;
		for (; e !== 0;) t++, e >>>= 1;
		return t;
	}, e.setToSJISFunction = function(e) {
		if (typeof e != "function") throw Error("\"toSJISFunc\" is not a valid function.");
		t = e;
	}, e.isKanjiModeEnabled = function() {
		return t !== void 0;
	}, e.toSJIS = function(e) {
		return t(e);
	};
})), Tr = /* @__PURE__ */ o(((e) => {
	e.L = { bit: 1 }, e.M = { bit: 0 }, e.Q = { bit: 3 }, e.H = { bit: 2 };
	function t(t) {
		if (typeof t != "string") throw Error("Param is not a string");
		switch (t.toLowerCase()) {
			case "l":
			case "low": return e.L;
			case "m":
			case "medium": return e.M;
			case "q":
			case "quartile": return e.Q;
			case "h":
			case "high": return e.H;
			default: throw Error("Unknown EC Level: " + t);
		}
	}
	e.isValid = function(e) {
		return e && e.bit !== void 0 && e.bit >= 0 && e.bit < 4;
	}, e.from = function(n, r) {
		if (e.isValid(n)) return n;
		try {
			return t(n);
		} catch {
			return r;
		}
	};
})), Er = /* @__PURE__ */ o(((e, t) => {
	function n() {
		this.buffer = [], this.length = 0;
	}
	n.prototype = {
		get: function(e) {
			let t = Math.floor(e / 8);
			return (this.buffer[t] >>> 7 - e % 8 & 1) == 1;
		},
		put: function(e, t) {
			for (let n = 0; n < t; n++) this.putBit((e >>> t - n - 1 & 1) == 1);
		},
		getLengthInBits: function() {
			return this.length;
		},
		putBit: function(e) {
			let t = Math.floor(this.length / 8);
			this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++;
		}
	}, t.exports = n;
})), Dr = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		if (!e || e < 1) throw Error("BitMatrix size must be defined and greater than 0");
		this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e);
	}
	n.prototype.set = function(e, t, n, r) {
		let i = e * this.size + t;
		this.data[i] = n, r && (this.reservedBit[i] = !0);
	}, n.prototype.get = function(e, t) {
		return this.data[e * this.size + t];
	}, n.prototype.xor = function(e, t, n) {
		this.data[e * this.size + t] ^= n;
	}, n.prototype.isReserved = function(e, t) {
		return this.reservedBit[e * this.size + t];
	}, t.exports = n;
})), Or = /* @__PURE__ */ o(((e) => {
	var t = wr().getSymbolSize;
	e.getRowColCoords = function(e) {
		if (e === 1) return [];
		let n = Math.floor(e / 7) + 2, r = t(e), i = r === 145 ? 26 : Math.ceil((r - 13) / (2 * n - 2)) * 2, a = [r - 7];
		for (let e = 1; e < n - 1; e++) a[e] = a[e - 1] - i;
		return a.push(6), a.reverse();
	}, e.getPositions = function(t) {
		let n = [], r = e.getRowColCoords(t), i = r.length;
		for (let e = 0; e < i; e++) for (let t = 0; t < i; t++) e === 0 && t === 0 || e === 0 && t === i - 1 || e === i - 1 && t === 0 || n.push([r[e], r[t]]);
		return n;
	};
})), kr = /* @__PURE__ */ o(((e) => {
	var t = wr().getSymbolSize, n = 7;
	e.getPositions = function(e) {
		let r = t(e);
		return [
			[0, 0],
			[r - n, 0],
			[0, r - n]
		];
	};
})), Ar = /* @__PURE__ */ o(((e) => {
	e.Patterns = {
		PATTERN000: 0,
		PATTERN001: 1,
		PATTERN010: 2,
		PATTERN011: 3,
		PATTERN100: 4,
		PATTERN101: 5,
		PATTERN110: 6,
		PATTERN111: 7
	};
	var t = {
		N1: 3,
		N2: 3,
		N3: 40,
		N4: 10
	};
	e.isValid = function(e) {
		return e != null && e !== "" && !isNaN(e) && e >= 0 && e <= 7;
	}, e.from = function(t) {
		return e.isValid(t) ? parseInt(t, 10) : void 0;
	}, e.getPenaltyN1 = function(e) {
		let n = e.size, r = 0, i = 0, a = 0, o = null, s = null;
		for (let c = 0; c < n; c++) {
			i = a = 0, o = s = null;
			for (let l = 0; l < n; l++) {
				let n = e.get(c, l);
				n === o ? i++ : (i >= 5 && (r += t.N1 + (i - 5)), o = n, i = 1), n = e.get(l, c), n === s ? a++ : (a >= 5 && (r += t.N1 + (a - 5)), s = n, a = 1);
			}
			i >= 5 && (r += t.N1 + (i - 5)), a >= 5 && (r += t.N1 + (a - 5));
		}
		return r;
	}, e.getPenaltyN2 = function(e) {
		let n = e.size, r = 0;
		for (let t = 0; t < n - 1; t++) for (let i = 0; i < n - 1; i++) {
			let n = e.get(t, i) + e.get(t, i + 1) + e.get(t + 1, i) + e.get(t + 1, i + 1);
			(n === 4 || n === 0) && r++;
		}
		return r * t.N2;
	}, e.getPenaltyN3 = function(e) {
		let n = e.size, r = 0, i = 0, a = 0;
		for (let t = 0; t < n; t++) {
			i = a = 0;
			for (let o = 0; o < n; o++) i = i << 1 & 2047 | e.get(t, o), o >= 10 && (i === 1488 || i === 93) && r++, a = a << 1 & 2047 | e.get(o, t), o >= 10 && (a === 1488 || a === 93) && r++;
		}
		return r * t.N3;
	}, e.getPenaltyN4 = function(e) {
		let n = 0, r = e.data.length;
		for (let t = 0; t < r; t++) n += e.data[t];
		return Math.abs(Math.ceil(n * 100 / r / 5) - 10) * t.N4;
	};
	function n(t, n, r) {
		switch (t) {
			case e.Patterns.PATTERN000: return (n + r) % 2 == 0;
			case e.Patterns.PATTERN001: return n % 2 == 0;
			case e.Patterns.PATTERN010: return r % 3 == 0;
			case e.Patterns.PATTERN011: return (n + r) % 3 == 0;
			case e.Patterns.PATTERN100: return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
			case e.Patterns.PATTERN101: return n * r % 2 + n * r % 3 == 0;
			case e.Patterns.PATTERN110: return (n * r % 2 + n * r % 3) % 2 == 0;
			case e.Patterns.PATTERN111: return (n * r % 3 + (n + r) % 2) % 2 == 0;
			default: throw Error("bad maskPattern:" + t);
		}
	}
	e.applyMask = function(e, t) {
		let r = t.size;
		for (let i = 0; i < r; i++) for (let a = 0; a < r; a++) t.isReserved(a, i) || t.xor(a, i, n(e, a, i));
	}, e.getBestMask = function(t, n) {
		let r = Object.keys(e.Patterns).length, i = 0, a = Infinity;
		for (let o = 0; o < r; o++) {
			n(o), e.applyMask(o, t);
			let r = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
			e.applyMask(o, t), r < a && (a = r, i = o);
		}
		return i;
	};
})), jr = /* @__PURE__ */ o(((e) => {
	var t = Tr(), n = [
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		2,
		2,
		1,
		2,
		2,
		4,
		1,
		2,
		4,
		4,
		2,
		4,
		4,
		4,
		2,
		4,
		6,
		5,
		2,
		4,
		6,
		6,
		2,
		5,
		8,
		8,
		4,
		5,
		8,
		8,
		4,
		5,
		8,
		11,
		4,
		8,
		10,
		11,
		4,
		9,
		12,
		16,
		4,
		9,
		16,
		16,
		6,
		10,
		12,
		18,
		6,
		10,
		17,
		16,
		6,
		11,
		16,
		19,
		6,
		13,
		18,
		21,
		7,
		14,
		21,
		25,
		8,
		16,
		20,
		25,
		8,
		17,
		23,
		25,
		9,
		17,
		23,
		34,
		9,
		18,
		25,
		30,
		10,
		20,
		27,
		32,
		12,
		21,
		29,
		35,
		12,
		23,
		34,
		37,
		12,
		25,
		34,
		40,
		13,
		26,
		35,
		42,
		14,
		28,
		38,
		45,
		15,
		29,
		40,
		48,
		16,
		31,
		43,
		51,
		17,
		33,
		45,
		54,
		18,
		35,
		48,
		57,
		19,
		37,
		51,
		60,
		19,
		38,
		53,
		63,
		20,
		40,
		56,
		66,
		21,
		43,
		59,
		70,
		22,
		45,
		62,
		74,
		24,
		47,
		65,
		77,
		25,
		49,
		68,
		81
	], r = [
		7,
		10,
		13,
		17,
		10,
		16,
		22,
		28,
		15,
		26,
		36,
		44,
		20,
		36,
		52,
		64,
		26,
		48,
		72,
		88,
		36,
		64,
		96,
		112,
		40,
		72,
		108,
		130,
		48,
		88,
		132,
		156,
		60,
		110,
		160,
		192,
		72,
		130,
		192,
		224,
		80,
		150,
		224,
		264,
		96,
		176,
		260,
		308,
		104,
		198,
		288,
		352,
		120,
		216,
		320,
		384,
		132,
		240,
		360,
		432,
		144,
		280,
		408,
		480,
		168,
		308,
		448,
		532,
		180,
		338,
		504,
		588,
		196,
		364,
		546,
		650,
		224,
		416,
		600,
		700,
		224,
		442,
		644,
		750,
		252,
		476,
		690,
		816,
		270,
		504,
		750,
		900,
		300,
		560,
		810,
		960,
		312,
		588,
		870,
		1050,
		336,
		644,
		952,
		1110,
		360,
		700,
		1020,
		1200,
		390,
		728,
		1050,
		1260,
		420,
		784,
		1140,
		1350,
		450,
		812,
		1200,
		1440,
		480,
		868,
		1290,
		1530,
		510,
		924,
		1350,
		1620,
		540,
		980,
		1440,
		1710,
		570,
		1036,
		1530,
		1800,
		570,
		1064,
		1590,
		1890,
		600,
		1120,
		1680,
		1980,
		630,
		1204,
		1770,
		2100,
		660,
		1260,
		1860,
		2220,
		720,
		1316,
		1950,
		2310,
		750,
		1372,
		2040,
		2430
	];
	e.getBlocksCount = function(e, r) {
		switch (r) {
			case t.L: return n[(e - 1) * 4 + 0];
			case t.M: return n[(e - 1) * 4 + 1];
			case t.Q: return n[(e - 1) * 4 + 2];
			case t.H: return n[(e - 1) * 4 + 3];
			default: return;
		}
	}, e.getTotalCodewordsCount = function(e, n) {
		switch (n) {
			case t.L: return r[(e - 1) * 4 + 0];
			case t.M: return r[(e - 1) * 4 + 1];
			case t.Q: return r[(e - 1) * 4 + 2];
			case t.H: return r[(e - 1) * 4 + 3];
			default: return;
		}
	};
})), Mr = /* @__PURE__ */ o(((e) => {
	var t = /* @__PURE__ */ new Uint8Array(512), n = /* @__PURE__ */ new Uint8Array(256);
	(function() {
		let e = 1;
		for (let r = 0; r < 255; r++) t[r] = e, n[e] = r, e <<= 1, e & 256 && (e ^= 285);
		for (let e = 255; e < 512; e++) t[e] = t[e - 255];
	})(), e.log = function(e) {
		if (e < 1) throw Error("log(" + e + ")");
		return n[e];
	}, e.exp = function(e) {
		return t[e];
	}, e.mul = function(e, r) {
		return e === 0 || r === 0 ? 0 : t[n[e] + n[r]];
	};
})), Nr = /* @__PURE__ */ o(((e) => {
	var t = Mr();
	e.mul = function(e, n) {
		let r = new Uint8Array(e.length + n.length - 1);
		for (let i = 0; i < e.length; i++) for (let a = 0; a < n.length; a++) r[i + a] ^= t.mul(e[i], n[a]);
		return r;
	}, e.mod = function(e, n) {
		let r = new Uint8Array(e);
		for (; r.length - n.length >= 0;) {
			let e = r[0];
			for (let i = 0; i < n.length; i++) r[i] ^= t.mul(n[i], e);
			let i = 0;
			for (; i < r.length && r[i] === 0;) i++;
			r = r.slice(i);
		}
		return r;
	}, e.generateECPolynomial = function(n) {
		let r = new Uint8Array([1]);
		for (let i = 0; i < n; i++) r = e.mul(r, new Uint8Array([1, t.exp(i)]));
		return r;
	};
})), Pr = /* @__PURE__ */ o(((e, t) => {
	var n = Nr();
	function r(e) {
		this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree);
	}
	r.prototype.initialize = function(e) {
		this.degree = e, this.genPoly = n.generateECPolynomial(this.degree);
	}, r.prototype.encode = function(e) {
		if (!this.genPoly) throw Error("Encoder not initialized");
		let t = new Uint8Array(e.length + this.degree);
		t.set(e);
		let r = n.mod(t, this.genPoly), i = this.degree - r.length;
		if (i > 0) {
			let e = new Uint8Array(this.degree);
			return e.set(r, i), e;
		}
		return r;
	}, t.exports = r;
})), Fr = /* @__PURE__ */ o(((e) => {
	e.isValid = function(e) {
		return !isNaN(e) && e >= 1 && e <= 40;
	};
})), Ir = /* @__PURE__ */ o(((e) => {
	var t = "[0-9]+", n = "[A-Z $%*+\\-./:]+", r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
	r = r.replace(/u/g, "\\u");
	var i = "(?:(?![A-Z0-9 $%*+\\-./:]|" + r + ")(?:.|[\r\n]))+";
	e.KANJI = new RegExp(r, "g"), e.BYTE_KANJI = /* @__PURE__ */ RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), e.BYTE = new RegExp(i, "g"), e.NUMERIC = new RegExp(t, "g"), e.ALPHANUMERIC = new RegExp(n, "g");
	var a = RegExp("^" + r + "$"), o = /* @__PURE__ */ RegExp("^[0-9]+$"), s = /* @__PURE__ */ RegExp("^[A-Z0-9 $%*+\\-./:]+$");
	e.testKanji = function(e) {
		return a.test(e);
	}, e.testNumeric = function(e) {
		return o.test(e);
	}, e.testAlphanumeric = function(e) {
		return s.test(e);
	};
})), Lr = /* @__PURE__ */ o(((e) => {
	var t = Fr(), n = Ir();
	e.NUMERIC = {
		id: "Numeric",
		bit: 1,
		ccBits: [
			10,
			12,
			14
		]
	}, e.ALPHANUMERIC = {
		id: "Alphanumeric",
		bit: 2,
		ccBits: [
			9,
			11,
			13
		]
	}, e.BYTE = {
		id: "Byte",
		bit: 4,
		ccBits: [
			8,
			16,
			16
		]
	}, e.KANJI = {
		id: "Kanji",
		bit: 8,
		ccBits: [
			8,
			10,
			12
		]
	}, e.MIXED = { bit: -1 }, e.getCharCountIndicator = function(e, n) {
		if (!e.ccBits) throw Error("Invalid mode: " + e);
		if (!t.isValid(n)) throw Error("Invalid version: " + n);
		return n >= 1 && n < 10 ? e.ccBits[0] : n < 27 ? e.ccBits[1] : e.ccBits[2];
	}, e.getBestModeForData = function(t) {
		return n.testNumeric(t) ? e.NUMERIC : n.testAlphanumeric(t) ? e.ALPHANUMERIC : n.testKanji(t) ? e.KANJI : e.BYTE;
	}, e.toString = function(e) {
		if (e && e.id) return e.id;
		throw Error("Invalid mode");
	}, e.isValid = function(e) {
		return e && e.bit && e.ccBits;
	};
	function r(t) {
		if (typeof t != "string") throw Error("Param is not a string");
		switch (t.toLowerCase()) {
			case "numeric": return e.NUMERIC;
			case "alphanumeric": return e.ALPHANUMERIC;
			case "kanji": return e.KANJI;
			case "byte": return e.BYTE;
			default: throw Error("Unknown mode: " + t);
		}
	}
	e.from = function(t, n) {
		if (e.isValid(t)) return t;
		try {
			return r(t);
		} catch {
			return n;
		}
	};
})), Rr = /* @__PURE__ */ o(((e) => {
	var t = wr(), n = jr(), r = Tr(), i = Lr(), a = Fr(), o = 7973, s = t.getBCHDigit(o);
	function c(t, n, r) {
		for (let i = 1; i <= 40; i++) if (n <= e.getCapacity(i, r, t)) return i;
	}
	function l(e, t) {
		return i.getCharCountIndicator(e, t) + 4;
	}
	function u(e, t) {
		let n = 0;
		return e.forEach(function(e) {
			let r = l(e.mode, t);
			n += r + e.getBitsLength();
		}), n;
	}
	function d(t, n) {
		for (let r = 1; r <= 40; r++) if (u(t, r) <= e.getCapacity(r, n, i.MIXED)) return r;
	}
	e.from = function(e, t) {
		return a.isValid(e) ? parseInt(e, 10) : t;
	}, e.getCapacity = function(e, r, o) {
		if (!a.isValid(e)) throw Error("Invalid QR Code version");
		o === void 0 && (o = i.BYTE);
		let s = (t.getSymbolTotalCodewords(e) - n.getTotalCodewordsCount(e, r)) * 8;
		if (o === i.MIXED) return s;
		let c = s - l(o, e);
		switch (o) {
			case i.NUMERIC: return Math.floor(c / 10 * 3);
			case i.ALPHANUMERIC: return Math.floor(c / 11 * 2);
			case i.KANJI: return Math.floor(c / 13);
			case i.BYTE:
			default: return Math.floor(c / 8);
		}
	}, e.getBestVersionForData = function(e, t) {
		let n, i = r.from(t, r.M);
		if (Array.isArray(e)) {
			if (e.length > 1) return d(e, i);
			if (e.length === 0) return 1;
			n = e[0];
		} else n = e;
		return c(n.mode, n.getLength(), i);
	}, e.getEncodedBits = function(e) {
		if (!a.isValid(e) || e < 7) throw Error("Invalid QR Code version");
		let n = e << 12;
		for (; t.getBCHDigit(n) - s >= 0;) n ^= o << t.getBCHDigit(n) - s;
		return e << 12 | n;
	};
})), zr = /* @__PURE__ */ o(((e) => {
	var t = wr(), n = 1335, r = 21522, i = t.getBCHDigit(n);
	e.getEncodedBits = function(e, a) {
		let o = e.bit << 3 | a, s = o << 10;
		for (; t.getBCHDigit(s) - i >= 0;) s ^= n << t.getBCHDigit(s) - i;
		return (o << 10 | s) ^ r;
	};
})), Br = /* @__PURE__ */ o(((e, t) => {
	var n = Lr();
	function r(e) {
		this.mode = n.NUMERIC, this.data = e.toString();
	}
	r.getBitsLength = function(e) {
		return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
	}, r.prototype.getLength = function() {
		return this.data.length;
	}, r.prototype.getBitsLength = function() {
		return r.getBitsLength(this.data.length);
	}, r.prototype.write = function(e) {
		let t, n, r;
		for (t = 0; t + 3 <= this.data.length; t += 3) n = this.data.substr(t, 3), r = parseInt(n, 10), e.put(r, 10);
		let i = this.data.length - t;
		i > 0 && (n = this.data.substr(t), r = parseInt(n, 10), e.put(r, i * 3 + 1));
	}, t.exports = r;
})), Vr = /* @__PURE__ */ o(((e, t) => {
	var n = Lr(), r = /* @__PURE__ */ "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".split("");
	function i(e) {
		this.mode = n.ALPHANUMERIC, this.data = e;
	}
	i.getBitsLength = function(e) {
		return 11 * Math.floor(e / 2) + e % 2 * 6;
	}, i.prototype.getLength = function() {
		return this.data.length;
	}, i.prototype.getBitsLength = function() {
		return i.getBitsLength(this.data.length);
	}, i.prototype.write = function(e) {
		let t = 0;
		for (; t + 2 <= this.data.length; t += 2) {
			let n = r.indexOf(this.data[t]) * 45;
			n += r.indexOf(this.data[t + 1]), e.put(n, 11);
		}
		this.data.length % 2 && e.put(r.indexOf(this.data[t]), 6);
	}, t.exports = i;
})), Hr = /* @__PURE__ */ o(((e, t) => {
	var n = Lr();
	function r(e) {
		this.mode = n.BYTE, this.data = typeof e == "string" ? new TextEncoder().encode(e) : new Uint8Array(e);
	}
	r.getBitsLength = function(e) {
		return e * 8;
	}, r.prototype.getLength = function() {
		return this.data.length;
	}, r.prototype.getBitsLength = function() {
		return r.getBitsLength(this.data.length);
	}, r.prototype.write = function(e) {
		for (let t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8);
	}, t.exports = r;
})), Ur = /* @__PURE__ */ o(((e, t) => {
	var n = Lr(), r = wr();
	function i(e) {
		this.mode = n.KANJI, this.data = e;
	}
	i.getBitsLength = function(e) {
		return e * 13;
	}, i.prototype.getLength = function() {
		return this.data.length;
	}, i.prototype.getBitsLength = function() {
		return i.getBitsLength(this.data.length);
	}, i.prototype.write = function(e) {
		let t = 0;
		for (; t < this.data.length; t++) {
			let n = r.toSJIS(this.data[t]);
			if (n >= 33088 && n <= 40956) n -= 33088;
			else if (n >= 57408 && n <= 60351) n -= 49472;
			else throw Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
			n = (n >>> 8 & 255) * 192 + (n & 255), e.put(n, 13);
		}
	}, t.exports = i;
})), Wr = /* @__PURE__ */ o(((e, t) => {
	var n = {
		single_source_shortest_paths: function(e, t, r) {
			var i = {}, a = {};
			a[t] = 0;
			var o = n.PriorityQueue.make();
			o.push(t, 0);
			for (var s, c, l, u, d, f, p, m, h; !o.empty();) for (l in s = o.pop(), c = s.value, u = s.cost, d = e[c] || {}, d) d.hasOwnProperty(l) && (f = d[l], p = u + f, m = a[l], h = a[l] === void 0, (h || m > p) && (a[l] = p, o.push(l, p), i[l] = c));
			if (r !== void 0 && a[r] === void 0) {
				var g = [
					"Could not find a path from ",
					t,
					" to ",
					r,
					"."
				].join("");
				throw Error(g);
			}
			return i;
		},
		extract_shortest_path_from_predecessor_list: function(e, t) {
			for (var n = [], r = t; r;) n.push(r), e[r], r = e[r];
			return n.reverse(), n;
		},
		find_path: function(e, t, r) {
			var i = n.single_source_shortest_paths(e, t, r);
			return n.extract_shortest_path_from_predecessor_list(i, r);
		},
		PriorityQueue: {
			make: function(e) {
				var t = n.PriorityQueue, r = {}, i;
				for (i in e ||= {}, t) t.hasOwnProperty(i) && (r[i] = t[i]);
				return r.queue = [], r.sorter = e.sorter || t.default_sorter, r;
			},
			default_sorter: function(e, t) {
				return e.cost - t.cost;
			},
			push: function(e, t) {
				var n = {
					value: e,
					cost: t
				};
				this.queue.push(n), this.queue.sort(this.sorter);
			},
			pop: function() {
				return this.queue.shift();
			},
			empty: function() {
				return this.queue.length === 0;
			}
		}
	};
	t !== void 0 && (t.exports = n);
})), Gr = /* @__PURE__ */ o(((e) => {
	var t = Lr(), n = Br(), r = Vr(), i = Hr(), a = Ur(), o = Ir(), s = wr(), c = Wr();
	function l(e) {
		return unescape(encodeURIComponent(e)).length;
	}
	function u(e, t, n) {
		let r = [], i;
		for (; (i = e.exec(n)) !== null;) r.push({
			data: i[0],
			index: i.index,
			mode: t,
			length: i[0].length
		});
		return r;
	}
	function d(e) {
		let n = u(o.NUMERIC, t.NUMERIC, e), r = u(o.ALPHANUMERIC, t.ALPHANUMERIC, e), i, a;
		return s.isKanjiModeEnabled() ? (i = u(o.BYTE, t.BYTE, e), a = u(o.KANJI, t.KANJI, e)) : (i = u(o.BYTE_KANJI, t.BYTE, e), a = []), n.concat(r, i, a).sort(function(e, t) {
			return e.index - t.index;
		}).map(function(e) {
			return {
				data: e.data,
				mode: e.mode,
				length: e.length
			};
		});
	}
	function f(e, o) {
		switch (o) {
			case t.NUMERIC: return n.getBitsLength(e);
			case t.ALPHANUMERIC: return r.getBitsLength(e);
			case t.KANJI: return a.getBitsLength(e);
			case t.BYTE: return i.getBitsLength(e);
		}
	}
	function p(e) {
		return e.reduce(function(e, t) {
			let n = e.length - 1 >= 0 ? e[e.length - 1] : null;
			return n && n.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e);
		}, []);
	}
	function m(e) {
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			switch (i.mode) {
				case t.NUMERIC:
					n.push([
						i,
						{
							data: i.data,
							mode: t.ALPHANUMERIC,
							length: i.length
						},
						{
							data: i.data,
							mode: t.BYTE,
							length: i.length
						}
					]);
					break;
				case t.ALPHANUMERIC:
					n.push([i, {
						data: i.data,
						mode: t.BYTE,
						length: i.length
					}]);
					break;
				case t.KANJI:
					n.push([i, {
						data: i.data,
						mode: t.BYTE,
						length: l(i.data)
					}]);
					break;
				case t.BYTE: n.push([{
					data: i.data,
					mode: t.BYTE,
					length: l(i.data)
				}]);
			}
		}
		return n;
	}
	function h(e, n) {
		let r = {}, i = { start: {} }, a = ["start"];
		for (let o = 0; o < e.length; o++) {
			let s = e[o], c = [];
			for (let e = 0; e < s.length; e++) {
				let l = s[e], u = "" + o + e;
				c.push(u), r[u] = {
					node: l,
					lastCount: 0
				}, i[u] = {};
				for (let e = 0; e < a.length; e++) {
					let o = a[e];
					r[o] && r[o].node.mode === l.mode ? (i[o][u] = f(r[o].lastCount + l.length, l.mode) - f(r[o].lastCount, l.mode), r[o].lastCount += l.length) : (r[o] && (r[o].lastCount = l.length), i[o][u] = f(l.length, l.mode) + 4 + t.getCharCountIndicator(l.mode, n));
				}
			}
			a = c;
		}
		for (let e = 0; e < a.length; e++) i[a[e]].end = 0;
		return {
			map: i,
			table: r
		};
	}
	function g(e, o) {
		let c, l = t.getBestModeForData(e);
		if (c = t.from(o, l), c !== t.BYTE && c.bit < l.bit) throw Error("\"" + e + "\" cannot be encoded with mode " + t.toString(c) + ".\n Suggested mode is: " + t.toString(l));
		switch (c === t.KANJI && !s.isKanjiModeEnabled() && (c = t.BYTE), c) {
			case t.NUMERIC: return new n(e);
			case t.ALPHANUMERIC: return new r(e);
			case t.KANJI: return new a(e);
			case t.BYTE: return new i(e);
		}
	}
	e.fromArray = function(e) {
		return e.reduce(function(e, t) {
			return typeof t == "string" ? e.push(g(t, null)) : t.data && e.push(g(t.data, t.mode)), e;
		}, []);
	}, e.fromString = function(t, n) {
		let r = h(m(d(t, s.isKanjiModeEnabled())), n), i = c.find_path(r.map, "start", "end"), a = [];
		for (let e = 1; e < i.length - 1; e++) a.push(r.table[i[e]].node);
		return e.fromArray(p(a));
	}, e.rawSplit = function(t) {
		return e.fromArray(d(t, s.isKanjiModeEnabled()));
	};
})), Kr = /* @__PURE__ */ o(((e) => {
	var t = wr(), n = Tr(), r = Er(), i = Dr(), a = Or(), o = kr(), s = Ar(), c = jr(), l = Pr(), u = Rr(), d = zr(), f = Lr(), p = Gr();
	function m(e, t) {
		let n = e.size, r = o.getPositions(t);
		for (let t = 0; t < r.length; t++) {
			let i = r[t][0], a = r[t][1];
			for (let t = -1; t <= 7; t++) if (!(i + t <= -1 || n <= i + t)) for (let r = -1; r <= 7; r++) a + r <= -1 || n <= a + r || (t >= 0 && t <= 6 && (r === 0 || r === 6) || r >= 0 && r <= 6 && (t === 0 || t === 6) || t >= 2 && t <= 4 && r >= 2 && r <= 4 ? e.set(i + t, a + r, !0, !0) : e.set(i + t, a + r, !1, !0));
		}
	}
	function h(e) {
		let t = e.size;
		for (let n = 8; n < t - 8; n++) {
			let t = n % 2 == 0;
			e.set(n, 6, t, !0), e.set(6, n, t, !0);
		}
	}
	function g(e, t) {
		let n = a.getPositions(t);
		for (let t = 0; t < n.length; t++) {
			let r = n[t][0], i = n[t][1];
			for (let t = -2; t <= 2; t++) for (let n = -2; n <= 2; n++) t === -2 || t === 2 || n === -2 || n === 2 || t === 0 && n === 0 ? e.set(r + t, i + n, !0, !0) : e.set(r + t, i + n, !1, !0);
		}
	}
	function _(e, t) {
		let n = e.size, r = u.getEncodedBits(t), i, a, o;
		for (let t = 0; t < 18; t++) i = Math.floor(t / 3), a = t % 3 + n - 8 - 3, o = (r >> t & 1) == 1, e.set(i, a, o, !0), e.set(a, i, o, !0);
	}
	function v(e, t, n) {
		let r = e.size, i = d.getEncodedBits(t, n), a, o;
		for (a = 0; a < 15; a++) o = (i >> a & 1) == 1, a < 6 ? e.set(a, 8, o, !0) : a < 8 ? e.set(a + 1, 8, o, !0) : e.set(r - 15 + a, 8, o, !0), a < 8 ? e.set(8, r - a - 1, o, !0) : a < 9 ? e.set(8, 15 - a - 1 + 1, o, !0) : e.set(8, 15 - a - 1, o, !0);
		e.set(r - 8, 8, 1, !0);
	}
	function y(e, t) {
		let n = e.size, r = -1, i = n - 1, a = 7, o = 0;
		for (let s = n - 1; s > 0; s -= 2) for (s === 6 && s--;;) {
			for (let n = 0; n < 2; n++) if (!e.isReserved(i, s - n)) {
				let r = !1;
				o < t.length && (r = (t[o] >>> a & 1) == 1), e.set(i, s - n, r), a--, a === -1 && (o++, a = 7);
			}
			if (i += r, i < 0 || n <= i) {
				i -= r, r = -r;
				break;
			}
		}
	}
	function b(e, n, i) {
		let a = new r();
		i.forEach(function(t) {
			a.put(t.mode.bit, 4), a.put(t.getLength(), f.getCharCountIndicator(t.mode, e)), t.write(a);
		});
		let o = (t.getSymbolTotalCodewords(e) - c.getTotalCodewordsCount(e, n)) * 8;
		for (a.getLengthInBits() + 4 <= o && a.put(0, 4); a.getLengthInBits() % 8 != 0;) a.putBit(0);
		let s = (o - a.getLengthInBits()) / 8;
		for (let e = 0; e < s; e++) a.put(e % 2 ? 17 : 236, 8);
		return x(a, e, n);
	}
	function x(e, n, r) {
		let i = t.getSymbolTotalCodewords(n), a = i - c.getTotalCodewordsCount(n, r), o = c.getBlocksCount(n, r), s = o - i % o, u = Math.floor(i / o), d = Math.floor(a / o), f = d + 1, p = u - d, m = new l(p), h = 0, g = Array(o), _ = Array(o), v = 0, y = new Uint8Array(e.buffer);
		for (let e = 0; e < o; e++) {
			let t = e < s ? d : f;
			g[e] = y.slice(h, h + t), _[e] = m.encode(g[e]), h += t, v = Math.max(v, t);
		}
		let b = new Uint8Array(i), x = 0, S, C;
		for (S = 0; S < v; S++) for (C = 0; C < o; C++) S < g[C].length && (b[x++] = g[C][S]);
		for (S = 0; S < p; S++) for (C = 0; C < o; C++) b[x++] = _[C][S];
		return b;
	}
	function S(e, n, r, a) {
		let o;
		if (Array.isArray(e)) o = p.fromArray(e);
		else if (typeof e == "string") {
			let t = n;
			if (!t) {
				let n = p.rawSplit(e);
				t = u.getBestVersionForData(n, r);
			}
			o = p.fromString(e, t || 40);
		} else throw Error("Invalid data");
		let c = u.getBestVersionForData(o, r);
		if (!c) throw Error("The amount of data is too big to be stored in a QR Code");
		if (!n) n = c;
		else if (n < c) throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + c + ".\n");
		let l = b(n, r, o), d = new i(t.getSymbolSize(n));
		return m(d, n), h(d), g(d, n), v(d, r, 0), n >= 7 && _(d, n), y(d, l), isNaN(a) && (a = s.getBestMask(d, v.bind(null, d, r))), s.applyMask(a, d), v(d, r, a), {
			modules: d,
			version: n,
			errorCorrectionLevel: r,
			maskPattern: a,
			segments: o
		};
	}
	e.create = function(e, r) {
		if (e === void 0 || e === "") throw Error("No input text");
		let i = n.M, a, o;
		return r !== void 0 && (i = n.from(r.errorCorrectionLevel, n.M), a = u.from(r.version), o = s.from(r.maskPattern), r.toSJISFunc && t.setToSJISFunction(r.toSJISFunc)), S(e, a, i, o);
	};
})), qr = /* @__PURE__ */ o(((e) => {
	function t(e) {
		if (typeof e == "number" && (e = e.toString()), typeof e != "string") throw Error("Color should be defined as hex string");
		let t = e.slice().replace("#", "").split("");
		if (t.length < 3 || t.length === 5 || t.length > 8) throw Error("Invalid hex color: " + e);
		(t.length === 3 || t.length === 4) && (t = Array.prototype.concat.apply([], t.map(function(e) {
			return [e, e];
		}))), t.length === 6 && t.push("F", "F");
		let n = parseInt(t.join(""), 16);
		return {
			r: n >> 24 & 255,
			g: n >> 16 & 255,
			b: n >> 8 & 255,
			a: n & 255,
			hex: "#" + t.slice(0, 6).join("")
		};
	}
	e.getOptions = function(e) {
		e ||= {}, e.color || (e.color = {});
		let n = e.margin === void 0 || e.margin === null || e.margin < 0 ? 4 : e.margin, r = e.width && e.width >= 21 ? e.width : void 0, i = e.scale || 4;
		return {
			width: r,
			scale: r ? 4 : i,
			margin: n,
			color: {
				dark: t(e.color.dark || "#000000ff"),
				light: t(e.color.light || "#ffffffff")
			},
			type: e.type,
			rendererOpts: e.rendererOpts || {}
		};
	}, e.getScale = function(e, t) {
		return t.width && t.width >= e + t.margin * 2 ? t.width / (e + t.margin * 2) : t.scale;
	}, e.getImageWidth = function(t, n) {
		let r = e.getScale(t, n);
		return Math.floor((t + n.margin * 2) * r);
	}, e.qrToImageData = function(t, n, r) {
		let i = n.modules.size, a = n.modules.data, o = e.getScale(i, r), s = Math.floor((i + r.margin * 2) * o), c = r.margin * o, l = [r.color.light, r.color.dark];
		for (let e = 0; e < s; e++) for (let n = 0; n < s; n++) {
			let u = (e * s + n) * 4, d = r.color.light;
			if (e >= c && n >= c && e < s - c && n < s - c) {
				let t = Math.floor((e - c) / o), r = Math.floor((n - c) / o);
				d = l[+!!a[t * i + r]];
			}
			t[u++] = d.r, t[u++] = d.g, t[u++] = d.b, t[u] = d.a;
		}
	};
})), Jr = /* @__PURE__ */ o(((e) => {
	var t = qr();
	function n(e, t, n) {
		e.clearRect(0, 0, t.width, t.height), t.style ||= {}, t.height = n, t.width = n, t.style.height = n + "px", t.style.width = n + "px";
	}
	function r() {
		try {
			return document.createElement("canvas");
		} catch {
			throw Error("You need to specify a canvas element");
		}
	}
	e.render = function(e, i, a) {
		let o = a, s = i;
		o !== void 0 || i && i.getContext || (o = i, i = void 0), i || (s = r()), o = t.getOptions(o);
		let c = t.getImageWidth(e.modules.size, o), l = s.getContext("2d"), u = l.createImageData(c, c);
		return t.qrToImageData(u.data, e, o), n(l, s, c), l.putImageData(u, 0, 0), s;
	}, e.renderToDataURL = function(t, n, r) {
		let i = r;
		i !== void 0 || n && n.getContext || (i = n, n = void 0), i ||= {};
		let a = e.render(t, n, i), o = i.type || "image/png", s = i.rendererOpts || {};
		return a.toDataURL(o, s.quality);
	};
})), Yr = /* @__PURE__ */ o(((e) => {
	var t = qr();
	function n(e, t) {
		let n = e.a / 255, r = t + "=\"" + e.hex + "\"";
		return n < 1 ? r + " " + t + "-opacity=\"" + n.toFixed(2).slice(1) + "\"" : r;
	}
	function r(e, t, n) {
		let r = e + t;
		return n !== void 0 && (r += " " + n), r;
	}
	function i(e, t, n) {
		let i = "", a = 0, o = !1, s = 0;
		for (let c = 0; c < e.length; c++) {
			let l = Math.floor(c % t), u = Math.floor(c / t);
			!l && !o && (o = !0), e[c] ? (s++, c > 0 && l > 0 && e[c - 1] || (i += o ? r("M", l + n, .5 + u + n) : r("m", a, 0), a = 0, o = !1), l + 1 < t && e[c + 1] || (i += r("h", s), s = 0)) : a++;
		}
		return i;
	}
	e.render = function(e, r, a) {
		let o = t.getOptions(r), s = e.modules.size, c = e.modules.data, l = s + o.margin * 2, u = o.color.light.a ? "<path " + n(o.color.light, "fill") + " d=\"M0 0h" + l + "v" + l + "H0z\"/>" : "", d = "<path " + n(o.color.dark, "stroke") + " d=\"" + i(c, s, o.margin) + "\"/>", f = "viewBox=\"0 0 " + l + " " + l + "\"", p = "<svg xmlns=\"http://www.w3.org/2000/svg\" " + (o.width ? "width=\"" + o.width + "\" height=\"" + o.width + "\" " : "") + f + " shape-rendering=\"crispEdges\">" + u + d + "</svg>\n";
		return typeof a == "function" && a(null, p), p;
	};
})), Xr = /* @__PURE__ */ o(((e) => {
	var t = Cr(), n = Kr(), r = Jr(), i = Yr();
	function a(e, r, i, a, o) {
		let s = [].slice.call(arguments, 1), c = s.length, l = typeof s[c - 1] == "function";
		if (!l && !t()) throw Error("Callback required as last argument");
		if (l) {
			if (c < 2) throw Error("Too few arguments provided");
			c === 2 ? (o = i, i = r, r = a = void 0) : c === 3 && (r.getContext && o === void 0 ? (o = a, a = void 0) : (o = a, a = i, i = r, r = void 0));
		} else {
			if (c < 1) throw Error("Too few arguments provided");
			return c === 1 ? (i = r, r = a = void 0) : c === 2 && !r.getContext && (a = i, i = r, r = void 0), new Promise(function(t, o) {
				try {
					t(e(n.create(i, a), r, a));
				} catch (e) {
					o(e);
				}
			});
		}
		try {
			let t = n.create(i, a);
			o(null, e(t, r, a));
		} catch (e) {
			o(e);
		}
	}
	e.create = n.create, e.toCanvas = a.bind(null, r.render), e.toDataURL = a.bind(null, r.renderToDataURL), e.toString = a.bind(null, function(e, t, n) {
		return i.render(e, n);
	});
})), Zr = /* @__PURE__ */ c(Sr(), 1), Qr = /* @__PURE__ */ c(Xr(), 1), $r = /* @__PURE__ */ new Set([
	"EAN13",
	"EAN8",
	"UPC",
	"ITF14",
	"MSI"
]);
function ei(e) {
	if (!/^(?:\d{8}|\d{12,14})$/.test(e)) return !1;
	let t = e.split("").map(Number), n = t.pop();
	if (n === void 0) return !1;
	let r = 0;
	for (let e = 0; e < t.length; e += 1) r += t[t.length - 1 - e] * (e % 2 == 0 ? 3 : 1);
	return (10 - r % 10) % 10 === n;
}
function ti(e) {
	let t = e.replace(/[\s-]/g, "");
	if (/^\d+$/.test(t) && ei(t)) switch (t.length) {
		case 8: return "EAN8";
		case 12: return "UPC";
		case 13: return "EAN13";
		case 14: return "ITF14";
		default: return;
	}
}
function ni(e, t) {
	let n = t.trim();
	return $r.has(e) ? n.replace(/[\s-]/g, "") : n;
}
function ri(e, t) {
	return e ? e.replaceAll(ct, t) : t;
}
function ii(e) {
	if (!e.code) return {
		kind: "empty",
		value: ""
	};
	let t = ri(e.code_pattern, e.code);
	if (e.format === "qr") return {
		kind: "qr",
		value: t
	};
	if (e.format === "barcode") return {
		kind: "barcode",
		value: ni(e.barcode_format, t),
		barcodeFormat: e.barcode_format
	};
	let n = ti(t);
	return n ? {
		kind: "barcode",
		value: ni(n, t),
		barcodeFormat: n,
		note: `Detected ${n} from the code format.`
	} : {
		kind: "qr",
		value: t,
		note: "No supported barcode format detected, showing a QR code instead."
	};
}
function ai(e, t, n) {
	if (!/^\d+$/.test(e)) return `${n} needs digits only.`;
	if (e.length !== t) return e.length === t + 1 ? ei(e) ? void 0 : `${n} check digit is invalid.` : `${n} needs ${t} or ${t + 1} digits, but the code has ${e.length}.`;
}
function oi(e, t) {
	if (!t) return "The code is empty.";
	switch (e) {
		case "EAN13": return ai(t, 12, "EAN-13");
		case "EAN8": return ai(t, 7, "EAN-8");
		case "UPC": return ai(t, 11, "UPC-A");
		case "ITF14": return /^\d+$/.test(t) ? t.length === 13 ? void 0 : t.length === 14 ? ei(t) ? void 0 : "ITF-14 check digit is invalid." : "ITF-14 needs 13 or 14 digits." : "ITF-14 needs digits only.";
		case "MSI": return /^\d+$/.test(t) ? void 0 : "MSI needs digits only.";
		case "CODE39": return /^[0-9A-Z\-. $/+%]+$/i.test(t) ? void 0 : "Code 39 supports digits, letters and - . space $ / + %.";
		case "CODE128": return /^[\x20-\x7e]+$/.test(t) ? void 0 : "Code 128 supports printable ASCII characters only.";
		case "CODABAR": return /^[A-D]?[0-9\-.$:/+]+[A-D]?$/i.test(t) ? void 0 : "Codabar supports digits and - . $ : / + (optionally wrapped in A-D).";
		case "PDF417": return /^[\x00-\xff]+$/.test(t) ? void 0 : "PDF417 supports Latin-1 (ISO-8859-1) characters only.";
		default: return "Unsupported barcode format.";
	}
}
async function si(e) {
	return Qr.toString(e, {
		type: "svg",
		errorCorrectionLevel: "H",
		margin: 2,
		color: {
			dark: "#000000",
			light: "#ffffff"
		}
	});
}
function ci(e, t, n, r) {
	(0, Zr.default)(e, t, {
		format: n,
		width: r.width,
		height: r.height,
		margin: 8,
		background: "#ffffff",
		lineColor: "#000000",
		displayValue: !1
	});
	let i = Number.parseFloat(e.getAttribute("width") ?? "");
	e.removeAttribute("width"), e.removeAttribute("height"), Number.isFinite(i) && i > 0 && (e.style.width = `${i}px`), e.setAttribute("preserveAspectRatio", "xMidYMid meet"), e.setAttribute("role", "img");
}
function li(e, t) {
	let n;
	try {
		n = Sn({
			bcid: "pdf417",
			text: e,
			scale: t,
			padding: 8,
			backgroundcolor: "ffffff",
			barcolor: "000000"
		}, vn());
	} catch (e) {
		let t = e instanceof Error ? e.message : String(e);
		throw Error(t.replace(/^[\w.]+#\d+:\s*/, ""));
	}
	let r = /viewBox="0 0 ([\d.]+) /.exec(n)?.[1];
	return n.replace("<svg ", `<svg class="barcode" role="img" aria-label="PDF417 barcode" preserveAspectRatio="xMidYMid meet"${r ? ` style="width: ${r}px"` : ""} `);
}
// src/styles.ts
var ui = h`
  :host {
    display: block;
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ha-card {
    height: 100%;
    overflow: hidden;
  }

  .face {
    appearance: none;
    -webkit-appearance: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    width: 100%;
    height: 100%;
    min-height: 128px;
    margin: 0;
    padding: 18px 20px;
    border: 0;
    border-radius: inherit;
    text-align: left;
    font-family: var(--ha-font-family-body, Roboto, 'Noto Sans', sans-serif);
    color: var(--loyalty-ink, var(--primary-text-color, #212121));
    background-color: var(
      --loyalty-accent,
      var(--ha-card-background, var(--card-background-color, #fff))
    );
    background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.16), rgba(0, 0, 0, 0.18));
    cursor: pointer;
    transition: filter 150ms ease;
  }

  .face:hover {
    filter: brightness(1.06);
  }

  .face:active {
    filter: brightness(0.95);
  }

  .face:focus-visible {
    outline: 2px solid var(--primary-color, #03a9f4);
    outline-offset: -3px;
  }

  .face__head {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
  }

  .badge {
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    width: 48px;
    height: 48px;
    border-radius: 14px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.22);
  }

  .badge img {
    width: 100%;
    height: 100%;
    padding: 5px;
    object-fit: contain;
  }

  .badge ha-icon {
    --mdc-icon-size: 28px;
    color: inherit;
  }

  .face__copy {
    min-width: 0;
  }

  .face__title {
    overflow: hidden;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.3;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .face__subtitle {
    overflow: hidden;
    margin-top: 2px;
    font-size: 13px;
    line-height: 1.35;
    opacity: 0.82;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* No title: the logo or icon is the whole face, centered and enlarged. The
     hint row is taken out of the flow so it does not push the badge up. */
  .face--centered {
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .face--centered .face__head {
    flex-direction: column;
    gap: 8px;
    max-width: 100%;
  }

  .face--centered .badge {
    width: auto;
    min-width: 64px;
    max-width: 100%;
    height: 64px;
  }

  .face--centered .badge img {
    width: auto;
    max-width: 100%;
  }

  .face--centered .badge ha-icon {
    --mdc-icon-size: 40px;
  }

  .face--centered .face__copy {
    max-width: 100%;
  }

  .face--centered .face__hint {
    position: absolute;
    right: 20px;
    bottom: 14px;
    left: 20px;
  }

  .face__hint {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.02em;
    opacity: 0.88;
  }

  .face__hint ha-icon {
    --mdc-icon-size: 17px;
  }

  .face__chevron {
    margin-left: auto;
    transition: transform 150ms ease;
  }

  .face:hover .face__chevron {
    transform: translateX(2px);
  }

  dialog {
    width: min(92vw, 440px);
    max-width: none;
    max-height: 92dvh;
    margin: auto;
    padding: 0;
    border: 0;
    background: transparent;
    color: #111111;
  }

  dialog::backdrop {
    background: rgba(0, 0, 0, 0.58);
    backdrop-filter: blur(3px);
  }

  dialog[open] {
    animation: loyalty-pop 170ms cubic-bezier(0.2, 0.8, 0.3, 1);
  }

  dialog[open]::backdrop {
    animation: loyalty-fade 170ms ease-out;
  }

  @starting-style {
    dialog[open] {
      opacity: 0;
      transform: scale(0.96) translateY(6px);
    }

    dialog[open]::backdrop {
      opacity: 0;
    }
  }

  .panel {
    width: 100%;
    max-height: 92dvh;
    padding: 18px;
    overflow: auto;
    border-radius: 24px;
    background: #ffffff;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
    font-family: var(--ha-font-family-body, Roboto, 'Noto Sans', sans-serif);
  }

  .panel__head {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
  }

  .panel__title {
    flex: 1;
    min-width: 0;
    margin: 0;
    overflow: hidden;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.3;
    color: #111111;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .icon-btn {
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    width: 38px;
    height: 38px;
    margin-left: auto;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: #f1f3f5;
    color: #333333;
    cursor: pointer;
  }

  .icon-btn:hover {
    background: #e6e9ec;
  }

  .icon-btn:focus-visible,
  .copy:focus-visible {
    outline: 2px solid #1a73e8;
    outline-offset: 2px;
  }

  .icon-btn ha-icon {
    --mdc-icon-size: 20px;
  }

  .code {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    min-height: 80px;
    padding: 8px 0 12px;
  }

  .qr {
    width: min(var(--qr-size, 320px), 74vw);
    border-radius: 10px;
    overflow: hidden;
    background: #ffffff;
  }

  .qr svg {
    display: block;
    width: 100%;
    height: auto;
  }

  .barcode {
    display: block;
    width: auto;
    max-width: 100%;
    height: auto;
  }

  .loading {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 32px 8px;
    font-size: 13px;
    color: #5f6368;
  }

  .loading::before {
    content: '';
    width: 18px;
    height: 18px;
    border: 2px solid #d6dbe0;
    border-top-color: #1a73e8;
    border-radius: 50%;
    animation: loyalty-spin 0.8s linear infinite;
  }

  .message {
    margin: 12px 4px;
    padding: 20px 8px;
    text-align: center;
    font-size: 13px;
    line-height: 1.5;
    color: #b00020;
  }

  .message code {
    padding: 1px 4px;
    border-radius: 4px;
    background: #f1f3f5;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 12px;
  }

  .note {
    margin: -4px 0 10px;
    text-align: center;
    font-size: 11.5px;
    line-height: 1.4;
    color: #5f6368;
  }

  .footer {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-top: 12px;
    border-top: 1px solid #eceff1;
  }

  .value {
    flex: 1;
    min-width: 0;
    overflow-wrap: anywhere;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 13px;
    letter-spacing: 0.05em;
    color: #333333;
    user-select: all;
  }

  .value--muted {
    font-family: inherit;
    font-size: 12px;
    letter-spacing: 0;
    color: #5f6368;
  }

  .copy {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    flex: 0 0 auto;
    margin-left: auto;
    padding: 8px 12px;
    border: 0;
    border-radius: 999px;
    background: #f1f3f5;
    color: #111111;
    font-family: inherit;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
  }

  .copy:hover {
    background: #e6e9ec;
  }

  .copy.copied {
    background: #e6f4ea;
    color: #137333;
  }

  .copy ha-icon {
    --mdc-icon-size: 16px;
  }

  @keyframes loyalty-pop {
    from {
      opacity: 0;
      transform: scale(0.96) translateY(6px);
    }

    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes loyalty-fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes loyalty-spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .face,
    .face__chevron {
      transition: none;
    }

    dialog[open],
    dialog[open]::backdrop {
      animation: none;
    }

    .loading::before {
      animation: none;
    }
  }
`, di = [
	{
		id: "biedronka",
		title: "Biedronka",
		country: "PL",
		color: "#FFED00",
		format: "barcode",
		barcode_format: "PDF417",
		code_pattern: "1,<CODE>,",
		logo: "https://github.com/MarcinVaadin/loyalty-flip-card/blob/main/logo/biedronka.png?raw=true"
	},
	{
		id: "bricomarche",
		title: "Bricomarché",
		country: "PL",
		color: "#E30613",
		format: "barcode",
		barcode_format: "CODE128"
	},
	{
		id: "decathlon",
		title: "Decathlon",
		country: "PL",
		color: "#3643BA",
		format: "barcode",
		barcode_format: "EAN13",
		logo: "https://github.com/MarcinVaadin/loyalty-flip-card/blob/main/logo/decathlon.png?raw=true"
	},
	{
		id: "empik",
		title: "Empik",
		country: "PL",
		color: "#000000",
		format: "barcode",
		barcode_format: "EAN13",
		logo: "https://github.com/MarcinVaadin/loyalty-flip-card/blob/main/logo/empik.png?raw=true"
	},
	{
		id: "ikea",
		title: "IKEA",
		color: "#0051BA",
		format: "qr",
		logo: "https://github.com/MarcinVaadin/loyalty-flip-card/blob/main/logo/ikea.png?raw=true"
	},
	{
		id: "lidl",
		title: "Lidl",
		color: "#0050AA",
		format: "qr",
		logo: "https://github.com/MarcinVaadin/loyalty-flip-card/blob/main/logo/lidl.png?raw=true"
	},
	{
		id: "rossmann",
		title: "Rossmann",
		country: "PL",
		color: "#C3002D",
		format: "barcode",
		barcode_format: "EAN13",
		logo: "https://github.com/MarcinVaadin/loyalty-flip-card/blob/main/logo/rossmann.png?raw=true"
	}
], fi = [
	"title",
	"subtitle",
	"color",
	"icon",
	"logo",
	"format",
	"barcode_format",
	"code_pattern",
	"barcode_width",
	"barcode_height",
	"qr_size",
	"fallback_to_qr"
], pi = [
	"title",
	"icon",
	"logo",
	"color",
	"format",
	"barcode_format",
	"code_pattern"
], mi = [
	"title",
	"format",
	"barcode_format",
	"code_pattern"
], hi = di;
function gi(e) {
	return e.country ? `${e.title} (${e.country})` : e.title;
}
function _i(e) {
	return hi.find((t) => t.id === e);
}
function vi(e) {
	return hi.find((t) => mi.every((n) => t[n] === e[n]))?.id;
}
function yi(e, t) {
	let n = { ...e };
	for (let e of pi) delete n[e];
	for (let e of fi) t[e] !== void 0 && (n[e] = t[e]);
	return n;
}
// \0@oxc-project+runtime@0.155.0/helpers/esm/decorate.js
function bi(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
// src/loyalty-flip-card-editor.ts
var xi = "custom", Si = [{
	value: xi,
	label: "Custom"
}, ...hi.map((e) => ({
	value: e.id,
	label: gi(e)
})).sort((e, t) => e.label.localeCompare(t.label))], Ci = {
	template: "Shop template",
	code: "Code",
	format: "Symbol type",
	barcode_format: "Barcode format",
	code_pattern: "Code pattern",
	title: "Title",
	subtitle: "Subtitle",
	show_icon: "Show icon or logo",
	icon: "Icon",
	logo: "Logo URL",
	color: "Accent color",
	show_code_text: "Show code as text",
	popup_title: "Popup title",
	qr_size: "QR size (px)",
	barcode_height: "Barcode height (px)",
	barcode_width: "Barcode bar width (px)",
	fallback_to_qr: "Fall back to a QR code"
}, wi = {
	template: "Fills in the shop's title, color, logo and barcode settings. You can still change them below.",
	code_pattern: "Optional. <CODE> is replaced with your code before encoding, e.g. 1,<CODE>,",
	code: "The value encoded in the symbol. Quote numeric codes in YAML so leading zeros are preserved.",
	format: "Auto-detect uses EAN/UPC for 8, 12, 13 or 14 digit codes with a valid check digit, and a QR code otherwise.",
	fallback_to_qr: "Show a QR code when the value cannot be encoded as the selected barcode format.",
	barcode_height: "Ignored for PDF417, whose height follows the number of rows.",
	barcode_width: "For PDF417 this sets the size of one module.",
	title: "Leave empty to show only the logo or icon, centered on the card.",
	logo: "Use a URL that Home Assistant can reach, for example /local/my-logo.png."
}, Ti = {
	show_icon: st.show_icon,
	show_code_text: st.show_code_text,
	fallback_to_qr: st.fallback_to_qr
}, Ei = class extends Me {
	constructor(...e) {
		super(...e), this._computeLabel = (e) => Ci[e.name] ?? e.name, this._computeHelper = (e) => wi[e.name] ?? "";
	}
	setConfig(e) {
		this._config = { ...e };
	}
	render() {
		let e = this._config;
		return e ? B`
      <ha-form
        .hass=${this.hass}
        .data=${{
			...Ti,
			...e,
			template: vi(e) ?? xi
		}}
        .schema=${this._buildSchema(e)}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      ></ha-form>
    ` : V;
	}
	_buildSchema(e) {
		let t = e.format ?? "qr";
		return [
			{
				name: "template",
				selector: { select: {
					mode: "dropdown",
					options: Si
				} }
			},
			{
				name: "code",
				required: !0,
				selector: { text: {} }
			},
			{
				name: "format",
				selector: { select: {
					mode: "dropdown",
					options: [
						{
							value: "qr",
							label: "QR code"
						},
						{
							value: "barcode",
							label: "Barcode"
						},
						{
							value: "auto",
							label: "Auto-detect"
						}
					]
				} }
			},
			...t === "barcode" ? [{
				name: "barcode_format",
				selector: { select: {
					mode: "dropdown",
					options: at.map((e) => ({
						value: e,
						label: ot[e]
					}))
				} }
			}] : [],
			{
				name: "code_pattern",
				selector: { text: {} }
			},
			{
				name: "title",
				selector: { text: {} }
			},
			{
				name: "subtitle",
				selector: { text: {} }
			},
			{
				name: "show_icon",
				selector: { boolean: {} }
			},
			...e.show_icon === !1 ? [] : [{
				name: "icon",
				selector: { icon: {} }
			}, {
				name: "logo",
				selector: { text: {} }
			}],
			{
				name: "color",
				selector: { text: {} }
			},
			{
				name: "show_code_text",
				selector: { boolean: {} }
			},
			{
				name: "popup_title",
				selector: { text: {} }
			},
			...t === "barcode" ? [] : [{
				name: "qr_size",
				selector: { number: {
					min: 160,
					max: 640,
					step: 20,
					mode: "box"
				} }
			}],
			...t === "qr" ? [] : [
				{
					name: "barcode_height",
					selector: { number: {
						min: 48,
						max: 240,
						step: 8,
						mode: "box"
					} }
				},
				{
					name: "barcode_width",
					selector: { number: {
						min: 1,
						max: 4,
						step: 1,
						mode: "box"
					} }
				},
				{
					name: "fallback_to_qr",
					selector: { boolean: {} }
				}
			]
		];
	}
	_valueChanged(e) {
		let { template: t, ...n } = e.detail.value, r = this._config ? vi(this._config) : void 0, i = typeof t == "string" && t !== (r ?? xi) ? _i(t) : void 0, a = i ? yi(n, i) : n;
		this._config = a, this.dispatchEvent(new CustomEvent("config-changed", {
			detail: { config: a },
			bubbles: !0,
			composed: !0
		}));
	}
};
bi([Ie({ attribute: !1 })], Ei.prototype, "hass", void 0), bi([Le()], Ei.prototype, "_config", void 0), customElements.get("loyalty-flip-card-editor") || customElements.define("loyalty-flip-card-editor", Ei);
// src/loyalty-flip-card.ts
var Di = class extends Me {
	constructor(...e) {
		super(...e), this._open = !1, this._copied = !1, this._logoFailed = !1, this._content = "none", this._dialog = Ze(), this._trigger = Ze(), this._barcode = Ze(), this._renderToken = 0, this._renderKey = "";
	}
	static {
		this.styles = ui;
	}
	static getStubConfig() {
		return {
			code: "5901234123457",
			format: "auto",
			title: "My Loyalty Card",
			subtitle: "Tap to show your code"
		};
	}
	static getConfigElement() {
		return document.createElement("loyalty-flip-card-editor");
	}
	setConfig(e) {
		this._config = gt(e), this._invalidate(), this._open && this._prepareCode();
	}
	getCardSize() {
		return 2;
	}
	getGridOptions() {
		return {
			columns: 6,
			rows: 3,
			min_columns: 3,
			min_rows: 2
		};
	}
	render() {
		let e = this._config;
		return e ? B`
      <ha-card style=${e.color ? `--loyalty-accent: ${e.color}; --loyalty-ink: ${vt(e.color)};` : ""}>${this._renderFace(e)}</ha-card>
      ${this._renderDialog(e)}
    ` : V;
	}
	_renderFace(e) {
		return B`
      <button
        class=${Ve({
			face: !0,
			"face--centered": !e.title
		})}
        type="button"
        ${et(this._trigger)}
        aria-haspopup="dialog"
        aria-expanded=${this._open ? "true" : "false"}
        aria-label=${e.title ? `Show ${e.title} code` : "Show loyalty code"}
        @click=${this._openPopup}
      >
        <div class="face__head">
          ${e.show_icon ? B`
                  <div class="badge">
                    ${e.logo && !this._logoFailed ? B`<img src=${e.logo} alt="" @error=${this._onLogoError} />` : e.icon ? B`<ha-icon icon=${e.icon}></ha-icon>` : V}
                  </div>
                ` : V}
          ${e.title || e.subtitle ? B`
                  <div class="face__copy">
                    ${e.title ? B`<div class="face__title">${e.title}</div>` : V}
                    ${e.subtitle ? B`<div class="face__subtitle">${e.subtitle}</div>` : V}
                  </div>
                ` : V}
        </div>
        <div class="face__hint">
          <ha-icon icon=${e.format === "barcode" ? "mdi:barcode" : "mdi:qrcode"}></ha-icon>
          <ha-icon class="face__chevron" icon="mdi:chevron-right"></ha-icon>
        </div>
      </button>
    `;
	}
	_renderDialog(e) {
		return B`
      <dialog
        ${et(this._dialog)}
        aria-labelledby=${e.popup_title ? "loyalty-code-title" : V}
        aria-label=${e.popup_title ? V : "Loyalty code"}
        @click=${this._onDialogClick}
        @close=${this._onDialogClose}
      >
        <div class="panel">
          <header class="panel__head">
            ${e.popup_title ? B`<h2 class="panel__title" id="loyalty-code-title">${e.popup_title}</h2>` : V}
            <button class="icon-btn" type="button" aria-label="Close" @click=${this._closePopup}>
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </header>
          <div class="code" style=${`--qr-size: ${e.qr_size}px`}>${this._renderContent()}</div>
          ${this._note ? B`<p class="note">${this._note}</p>` : V}
          ${e.code ? B`
                  <footer class="footer">
                    ${e.show_code_text ? B`<code class="value">${e.code}</code>` : V}
                    <button
                      class=${Ve({
			copy: !0,
			copied: this._copied
		})}
                      type="button"
                      @click=${this._copyCode}
                    >
                      <ha-icon icon=${this._copied ? "mdi:check" : "mdi:content-copy"}></ha-icon>
                      <span>${this._copied ? "Copied" : "Copy"}</span>
                    </button>
                  </footer>
                ` : V}
        </div>
      </dialog>
    `;
	}
	_renderContent() {
		switch (this._content) {
			case "empty": return B`
          <p class="message">
            No code configured.<br />
            Add a <code>code</code> in the card settings.
          </p>
        `;
			case "error": return B`<p class="message">${this._error ?? "Unable to render this code."}</p>`;
			case "barcode": return B`<svg class="barcode" ${et(this._barcode)} aria-label="Barcode"></svg>`;
			case "pdf417": return this._svg ? rt(this._svg) : V;
			case "qr": return this._error ? B`<p class="message">${this._error}</p>` : this._svg ? B`
          <div class="qr" role="img" aria-label="QR code">${rt(this._svg)}</div>
        ` : B`<div class="loading" role="status">Preparing code…</div>`;
			default: return V;
		}
	}
	disconnectedCallback() {
		super.disconnectedCallback(), window.clearTimeout(this._copyTimer), this._renderToken += 1;
		let e = this._dialog.value;
		e?.open && e.close();
	}
	_onLogoError() {
		this._logoFailed = !0;
	}
	_openPopup() {
		let e = this._dialog.value;
		if (e) {
			if (!e.open) try {
				e.showModal();
			} catch {
				return;
			}
			this._open = !0, this._prepareCode();
		}
	}
	_closePopup() {
		this._dialog.value?.close();
	}
	_onDialogClick(e) {
		e.target === e.currentTarget && this._closePopup();
	}
	_onDialogClose() {
		this._open = !1, this._copied = !1, this._trigger.value?.focus();
	}
	async _copyCode() {
		let e = this._config?.code;
		if (e) try {
			await navigator.clipboard.writeText(e), this._copied = !0, window.clearTimeout(this._copyTimer), this._copyTimer = window.setTimeout(() => {
				this._copied = !1;
			}, 1600);
		} catch {
			this._note = "Clipboard access was blocked. Select the code and copy it manually.";
		}
	}
	_invalidate() {
		this._renderToken += 1, this._renderKey = "", this._content = "none", this._svg = void 0, this._error = void 0, this._note = void 0, this._logoFailed = !1;
	}
	async _prepareCode() {
		let e = this._config;
		if (!e) return;
		let t = JSON.stringify([
			e.code,
			e.code_pattern,
			e.format,
			e.barcode_format,
			e.qr_size,
			e.barcode_height,
			e.barcode_width,
			e.fallback_to_qr
		]);
		if (t === this._renderKey && this._content !== "none") return;
		this._renderKey = t, this._renderToken += 1;
		let n = this._renderToken;
		this._svg = void 0, this._error = void 0, this._note = void 0;
		let r = ii(e);
		r.kind === "empty" ? this._content = "empty" : r.kind === "qr" ? await this._showQr(r.value, n, r.note) : await this._showBarcode(r, n, e);
	}
	async _showQr(e, t, n) {
		this._content = "qr", this._svg = void 0, n && (this._note = n);
		try {
			let n = await si(e);
			if (t !== this._renderToken) return;
			this._svg = n;
		} catch {
			if (t !== this._renderToken) return;
			this._content = "error", this._error = "This value is too long to render as a QR code.", this._note = void 0;
		}
	}
	async _showBarcode(e, t, n) {
		let r = e.barcodeFormat;
		if (!r) {
			await this._showQr(e.value, t);
			return;
		}
		let i = oi(r, e.value);
		if (i) {
			await this._handleBarcodeProblem(i, e.value, n, t);
			return;
		}
		if (r === "PDF417") {
			try {
				this._svg = li(e.value, n.barcode_width), this._content = "pdf417", this._note = e.note;
			} catch (i) {
				await this._handleBarcodeProblem(Oi(r, i), e.value, n, t);
			}
			return;
		}
		if (this._content = "barcode", this._svg = void 0, await this.updateComplete, t !== this._renderToken) return;
		let a = this._barcode.value;
		if (!a) await this._handleBarcodeProblem("The barcode could not be drawn.", e.value, n, t);
		else try {
			if (ci(a, e.value, r, {
				height: n.barcode_height,
				width: n.barcode_width
			}), t !== this._renderToken) return;
			this._note = e.note;
		} catch (i) {
			await this._handleBarcodeProblem(Oi(r, i), e.value, n, t);
		}
	}
	async _handleBarcodeProblem(e, t, n, r) {
		n.fallback_to_qr ? await this._showQr(t, r, `${e} Showing a QR code instead.`) : (this._content = "error", this._error = e);
	}
};
bi([Ie({ attribute: !1 })], Di.prototype, "hass", void 0), bi([Le()], Di.prototype, "_config", void 0), bi([Le()], Di.prototype, "_open", void 0), bi([Le()], Di.prototype, "_copied", void 0), bi([Le()], Di.prototype, "_logoFailed", void 0), bi([Le()], Di.prototype, "_content", void 0), bi([Le()], Di.prototype, "_svg", void 0), bi([Le()], Di.prototype, "_error", void 0), bi([Le()], Di.prototype, "_note", void 0);
function Oi(e, t) {
	return `This value cannot be encoded as ${e}.${t instanceof Error && t.message ? ` ${t.message}` : ""}`;
}
customElements.get("loyalty-flip-card") || customElements.define("loyalty-flip-card", Di), window.customCards = window.customCards ?? [], window.customCards.some((e) => e.type === "loyalty-flip-card") || window.customCards.push({
	type: "loyalty-flip-card",
	name: "Loyalty Flip Card",
	description: "Displays a loyalty QR code or barcode in a tappable popup.",
	preview: !0
}), console.info("%c LOYALTY-FLIP-CARD %c v0.1.0 ", "color: #fff; background: #1a73e8; font-weight: 600; border-radius: 3px 0 0 3px;", "color: #1a73e8; background: #e8f0fe; border-radius: 0 3px 3px 0;");
export { Di as LoyaltyFlipCard };
