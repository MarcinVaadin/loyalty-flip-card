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
})(e) : e, { is: v, defineProperty: ee, getOwnPropertyDescriptor: y, getOwnPropertyNames: te, getOwnPropertySymbols: b, getPrototypeOf: x } = Object, ne = globalThis, re = ne.trustedTypes, ie = re ? re.emptyScript : "", ae = ne.reactiveElementPolyfillSupport, S = (e, t) => e, oe = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? ie : null;
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
}, se = (e, t) => !v(e, t), ce = {
	attribute: !0,
	type: String,
	converter: oe,
	reflect: !1,
	useDefault: !1,
	hasChanged: se
};
Symbol.metadata ??= Symbol("metadata"), ne.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var C = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = ce) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && ee(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = y(this.prototype, e) ?? {
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
		return this.elementProperties.get(e) ?? ce;
	}
	static _$Ei() {
		if (this.hasOwnProperty(S("elementProperties"))) return;
		let e = x(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(S("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(S("properties"))) {
			let e = this.properties, t = [...te(e), ...b(e)];
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
			let i = (n.converter?.toAttribute === void 0 ? oe : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? oe : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? se)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
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
C.elementStyles = [], C.shadowRootOptions = { mode: "open" }, C[S("elementProperties")] = /* @__PURE__ */ new Map(), C[S("finalized")] = /* @__PURE__ */ new Map(), ae?.({ ReactiveElement: C }), (ne.reactiveElementVersions ??= []).push("2.1.2");
// node_modules/lit-html/lit-html.js
var le = globalThis, ue = (e) => e, w = le.trustedTypes, de = w ? w.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, fe = "$lit$", T = `lit$${Math.random().toFixed(9).slice(2)}$`, pe = "?" + T, me = `<${pe}>`, E = document, D = () => E.createComment(""), O = (e) => e === null || typeof e != "object" && typeof e != "function", he = Array.isArray, ge = (e) => he(e) || typeof e?.[Symbol.iterator] == "function", _e = "[ 	\n\f\r]", k = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ve = /-->/g, ye = />/g, A = RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), be = /'/g, xe = /"/g, Se = /^(?:script|style|textarea|title)$/i, j = ((e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}))(1), M = Symbol.for("lit-noChange"), N = Symbol.for("lit-nothing"), Ce = /* @__PURE__ */ new WeakMap(), P = E.createTreeWalker(E, 129);
function we(e, t) {
	if (!he(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return de === void 0 ? t : de.createHTML(t);
}
var Te = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = k;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === k ? c[1] === "!--" ? o = ve : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = A) : (Se.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = A) : o = ye : o === A ? c[0] === ">" ? (o = i ?? k, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? A : c[3] === "\"" ? xe : be) : o === xe || o === be ? o = A : o === ve || o === ye ? o = k : (o = A, i = void 0);
		let d = o === A && e[t + 1].startsWith("/>") ? " " : "";
		a += o === k ? n + me : l >= 0 ? (r.push(s), n.slice(0, l) + fe + n.slice(l) + T + d) : n + T + (l === -2 ? t : d);
	}
	return [we(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, Ee = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = Te(t, n);
		if (this.el = e.createElement(l, r), P.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = P.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(fe)) {
					let t = u[o++], n = i.getAttribute(e).split(T), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? Oe : r[1] === "?" ? ke : r[1] === "@" ? Ae : L
					}), i.removeAttribute(e);
				} else e.startsWith(T) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (Se.test(i.tagName)) {
					let e = i.textContent.split(T), t = e.length - 1;
					if (t > 0) {
						i.textContent = w ? w.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], D()), P.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], D());
					}
				}
			} else if (i.nodeType === 8) {
				if (i.data === pe) c.push({
					type: 2,
					index: a
				});
				else {
					let e = -1;
					for (; (e = i.data.indexOf(T, e + 1)) !== -1;) c.push({
						type: 7,
						index: a
					}), e += T.length - 1;
				}
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = E.createElement("template");
		return n.innerHTML = e, n;
	}
};
function F(e, t, n = e, r) {
	if (t === M) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = O(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = F(e, i._$AS(e, t.values), i, r)), t;
}
var De = class {
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
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? E).importNode(t, !0);
		P.currentNode = r;
		let i = P.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new I(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new je(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = P.nextNode(), a++);
		}
		return P.currentNode = E, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, I = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = N, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
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
		e = F(this, e, t), O(e) ? e === N || e == null || e === "" ? (this._$AH !== N && this._$AR(), this._$AH = N) : e !== this._$AH && e !== M && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? ge(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== N && O(this._$AH) ? this._$AA.nextSibling.data = e : this.T(E.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = Ee.createElement(we(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new De(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = Ce.get(e.strings);
		return t === void 0 && Ce.set(e.strings, t = new Ee(e)), t;
	}
	k(t) {
		he(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(D()), this.O(D()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = ue(e).nextSibling;
			ue(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, L = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = N, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = N;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = F(this, e, t, 0), a = !O(e) || e !== this._$AH && e !== M, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = F(this, r[n + o], t, o), s === M && (s = this._$AH[o]), a ||= !O(s) || s !== this._$AH[o], s === N ? e = N : e !== N && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === N ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, Oe = class extends L {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === N ? void 0 : e;
	}
}, ke = class extends L {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== N);
	}
}, Ae = class extends L {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = F(this, e, t, 0) ?? N) === M) return;
		let n = this._$AH, r = e === N && n !== N || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== N && (n === N || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, je = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		F(this, e);
	}
}, Me = {
	M: fe,
	P: T,
	A: pe,
	C: 1,
	L: Te,
	R: De,
	D: ge,
	V: F,
	I,
	H: L,
	N: ke,
	U: Ae,
	B: Oe,
	F: je
}, Ne = le.litHtmlPolyfillSupport;
Ne?.(Ee, I), (le.litHtmlVersions ??= []).push("3.3.3");
var Pe = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new I(t.insertBefore(D(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, Fe = globalThis, R = class extends C {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Pe(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return M;
	}
};
R._$litElement$ = !0, R.finalized = !0, Fe.litElementHydrateSupport?.({ LitElement: R });
var Ie = Fe.litElementPolyfillSupport;
Ie?.({ LitElement: R }), (Fe.litElementVersions ??= []).push("4.2.2");
// node_modules/@lit/reactive-element/decorators/property.js
var Le = {
	attribute: !0,
	type: String,
	converter: oe,
	reflect: !1,
	hasChanged: se
}, Re = (e = Le, t, n) => {
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
function ze(e) {
	return (t, n) => typeof n == "object" ? Re(e, t, n) : ((e, t, n) => {
		let r = t.hasOwnProperty(n);
		return t.constructor.createProperty(n, e), r ? Object.getOwnPropertyDescriptor(t, n) : void 0;
	})(e, t, n);
}
// node_modules/@lit/reactive-element/decorators/state.js
function z(e) {
	return ze({
		...e,
		state: !0,
		attribute: !1
	});
}
// node_modules/lit-html/directive.js
var Be = {
	ATTRIBUTE: 1,
	CHILD: 2,
	PROPERTY: 3,
	BOOLEAN_ATTRIBUTE: 4,
	EVENT: 5,
	ELEMENT: 6
}, Ve = (e) => (...t) => ({
	_$litDirective$: e,
	values: t
}), He = class {
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
}, Ue = Ve(class extends He {
	constructor(e) {
		if (super(e), e.type !== Be.ATTRIBUTE || e.name !== "class" || e.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
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
		return M;
	}
}), { I: We } = Me, Ge = (e) => e.strings === void 0, B = (e, t) => {
	let n = e._$AN;
	if (n === void 0) return !1;
	for (let e of n) e._$AO?.(t, !1), B(e, t);
	return !0;
}, V = (e) => {
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
	this._$AN === void 0 ? this._$AM = e : (V(this), this._$AM = e, Ke(this));
}
function Je(e, t = !1, n = 0) {
	let r = this._$AH, i = this._$AN;
	if (i !== void 0 && i.size !== 0) {
		if (t) {
			if (Array.isArray(r)) for (let e = n; e < r.length; e++) B(r[e], !1), V(r[e]);
			else r != null && (B(r, !1), V(r));
		} else B(this, e);
	}
}
var Ye = (e) => {
	e.type == Be.CHILD && (e._$AP ??= Je, e._$AQ ??= qe);
}, Xe = class extends He {
	constructor() {
		super(...arguments), this._$AN = void 0;
	}
	_$AT(e, t, n) {
		super._$AT(e, t, n), Ke(this), this.isConnected = e._$AU;
	}
	_$AO(e, t = !0) {
		e !== this.isConnected && (this.isConnected = e, e ? this.reconnected?.() : this.disconnected?.()), t && (B(this, e), V(this));
	}
	setValue(e) {
		if (Ge(this._$Ct)) this._$Ct._$AI(e, this);
		else {
			let t = [...this._$Ct._$AH];
			t[this._$Ci] = e, this._$Ct._$AI(t, this, 0);
		}
	}
	disconnected() {}
	reconnected() {}
}, Ze = () => new Qe(), Qe = class {}, $e = /* @__PURE__ */ new WeakMap(), et = Ve(class extends Xe {
	render(e) {
		return N;
	}
	update(e, [t]) {
		let n = t !== this.G;
		return n && this.rt(void 0), (n || this.lt !== this.ct) && (this.G = t, this.ht = e.options?.host, this.rt(this.ct = e.element)), N;
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
}), tt = class extends He {
	constructor(e) {
		if (super(e), this.it = N, e.type !== Be.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
	}
	render(e) {
		if (e === N || e == null) return this._t = void 0, this.it = e;
		if (e === M) return e;
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
var rt = Ve(nt), it = [
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
	"MSI"
], ot = {
	CODE128: "Code 128 (general purpose)",
	EAN13: "EAN-13",
	EAN8: "EAN-8",
	UPC: "UPC-A",
	CODE39: "Code 39",
	ITF14: "ITF-14",
	CODABAR: "Codabar",
	MSI: "MSI"
}, H = {
	code: "",
	format: "qr",
	barcode_format: "CODE128",
	title: "Loyalty Card",
	show_code_text: !0,
	popup_title: "",
	qr_size: 320,
	barcode_height: 96,
	barcode_width: 2,
	fallback_to_qr: !0
}, st = /^(#[0-9a-f]{3,8}|(?:rgb|hsl)a?\([0-9.,%\s/]+\)|[a-z]+|var\(--[a-z0-9-]+\))$/i;
function U(e) {
	if (typeof e != "string") return;
	let t = e.trim();
	return t.length > 0 ? t : void 0;
}
function ct(e) {
	return typeof e == "string" ? e.trim() : typeof e == "number" && Number.isFinite(e) ? String(e) : "";
}
function lt(e, t) {
	return typeof t == "string" && e.includes(t) ? t : void 0;
}
function ut(e, t, n, r) {
	let i = typeof e == "number" ? e : Number(e);
	return Number.isFinite(i) ? Math.min(r, Math.max(n, Math.round(i))) : t;
}
function dt(e) {
	let t = U(e);
	return t && st.test(t) ? t : void 0;
}
function ft(e) {
	if (typeof e != "object" || !e || Array.isArray(e)) throw Error("loyalty-flip-card: configuration must be an object");
	let t = U(e.title) ?? H.title, n = U(e.logo);
	return {
		type: typeof e.type == "string" ? e.type : "custom:loyalty-flip-card",
		code: ct(e.code),
		format: lt(it, e.format) ?? H.format,
		barcode_format: lt(at, e.barcode_format) ?? H.barcode_format,
		title: t,
		subtitle: U(e.subtitle),
		icon: U(e.icon) ?? "mdi:card-account-details",
		logo: n,
		color: dt(e.color),
		show_code_text: e.show_code_text !== !1,
		popup_title: U(e.popup_title) ?? t,
		qr_size: ut(e.qr_size, H.qr_size, 160, 640),
		barcode_height: ut(e.barcode_height, H.barcode_height, 48, 240),
		barcode_width: ut(e.barcode_width, H.barcode_width, 1, 4),
		fallback_to_qr: e.fallback_to_qr !== !1
	};
}
function pt(e) {
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
function mt(e) {
	let t = pt(e);
	if (!t) return "#ffffff";
	let [n, r, i] = t.map((e) => {
		let t = e / 255;
		return t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
	});
	return .2126 * n + .7152 * r + .0722 * i > .45 ? "#111111" : "#ffffff";
}
// node_modules/jsbarcode/bin/barcodes/Barcode.js
var W = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	e.default = function e(n, r) {
		t(this, e), this.data = n, this.text = r.text || n, this.options = r;
	};
})), ht = /* @__PURE__ */ o(((e) => {
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
	}(), n = r(W());
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
})), G = /* @__PURE__ */ o(((e) => {
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
})), K = /* @__PURE__ */ o(((e) => {
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
	}(), n = i(W()), r = G();
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
})), gt = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = G(), n = function(e) {
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
})), _t = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = r(K()), n = r(gt());
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
})), vt = /* @__PURE__ */ o(((e) => {
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
	}(), n = i(K()), r = G();
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
})), yt = /* @__PURE__ */ o(((e) => {
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
	}(), n = i(K()), r = G();
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
})), bt = /* @__PURE__ */ o(((e) => {
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
	}(), n = i(K()), r = G();
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
})), xt = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.CODE128C = e.CODE128B = e.CODE128A = e.CODE128 = void 0;
	var t = a(_t()), n = a(vt()), r = a(yt()), i = a(bt());
	function a(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e.CODE128 = t.default, e.CODE128A = n.default, e.CODE128B = r.default, e.CODE128C = i.default;
})), q = /* @__PURE__ */ o(((e) => {
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
})), J = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = q();
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
})), St = /* @__PURE__ */ o(((e) => {
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
	}(), n = q(), r = a(J()), i = a(W());
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
})), Ct = /* @__PURE__ */ o(((e) => {
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
	}, r = q(), i = a(St());
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
})), wt = /* @__PURE__ */ o(((e) => {
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
	}, r = i(St());
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
})), Tt = /* @__PURE__ */ o(((e) => {
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
	}(), n = q(), r = a(J()), i = a(W());
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
})), Et = /* @__PURE__ */ o(((e) => {
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
	}(), n = q(), r = a(J()), i = a(W());
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
})), Dt = /* @__PURE__ */ o(((e) => {
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
	var n = i(J()), r = i(W());
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
})), Ot = /* @__PURE__ */ o(((e) => {
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
	}(), n = a(J()), r = a(W()), i = Dt();
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
})), kt = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.UPCE = e.UPC = e.EAN2 = e.EAN5 = e.EAN8 = e.EAN13 = void 0;
	var t = s(Ct()), n = s(wt()), r = s(Tt()), i = s(Et()), a = s(Dt()), o = s(Ot());
	function s(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e.EAN13 = t.default, e.EAN8 = n.default, e.EAN5 = r.default, e.EAN2 = i.default, e.UPC = a.default, e.UPCE = o.default;
})), At = /* @__PURE__ */ o(((e) => {
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
})), jt = /* @__PURE__ */ o(((e) => {
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
	}(), n = At(), r = i(W());
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
})), Mt = /* @__PURE__ */ o(((e) => {
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
	}(), n = r(jt());
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
})), Nt = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ITF14 = e.ITF = void 0;
	var t = r(jt()), n = r(Mt());
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e.ITF = t.default, e.ITF14 = n.default;
})), Y = /* @__PURE__ */ o(((e) => {
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
	}(), n = r(W());
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
})), Pt = /* @__PURE__ */ o(((e) => {
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
})), Ft = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = r(Y()), n = Pt();
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
})), It = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = r(Y()), n = Pt();
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
})), Lt = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = r(Y()), n = Pt();
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
})), Rt = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = r(Y()), n = Pt();
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
})), zt = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.MSI1110 = e.MSI1010 = e.MSI11 = e.MSI10 = e.MSI = void 0;
	var t = o(Y()), n = o(Ft()), r = o(It()), i = o(Lt()), a = o(Rt());
	function o(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e.MSI = t.default, e.MSI10 = n.default, e.MSI11 = r.default, e.MSI1010 = i.default, e.MSI1110 = a.default;
})), Bt = /* @__PURE__ */ o(((e) => {
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
	}(), n = r(W());
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
})), Vt = /* @__PURE__ */ o(((e) => {
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
	}(), n = r(W());
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
})), Ht = /* @__PURE__ */ o(((e) => {
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
})), Ut = /* @__PURE__ */ o(((e) => {
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
	}(), n = Ht(), r = i(W());
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
})), Wt = /* @__PURE__ */ o(((e) => {
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
	}(), n = r(Ut());
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
})), Gt = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.CODE93FullASCII = e.CODE93 = void 0;
	var t = r(Ut()), n = r(Wt());
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e.CODE93 = t.default, e.CODE93FullASCII = n.default;
})), Kt = /* @__PURE__ */ o(((e) => {
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
	}(), n = r(W());
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
})), qt = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = ht(), n = xt(), r = kt(), i = Nt(), a = zt(), o = Bt(), s = Vt(), c = Gt(), l = Kt();
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
})), Jt = /* @__PURE__ */ o(((e) => {
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
})), Yt = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = t;
	function t(e) {
		var t = [];
		function n(e) {
			if (Array.isArray(e)) for (var r = 0; r < e.length; r++) n(e[r]);
			else e.text = e.text || "", e.data = e.data || "", t.push(e);
		}
		return n(e), t;
	}
})), Xt = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = t;
	function t(e) {
		return e.marginTop = e.marginTop || e.margin, e.marginBottom = e.marginBottom || e.margin, e.marginRight = e.marginRight || e.margin, e.marginLeft = e.marginLeft || e.margin, e;
	}
})), Zt = /* @__PURE__ */ o(((e) => {
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
})), Qt = /* @__PURE__ */ o(((e) => {
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
})), $t = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = r(Zt()), n = r(Qt());
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function i(e) {
		var r = {};
		for (var i in n.default) n.default.hasOwnProperty(i) && (e.hasAttribute("jsbarcode-" + i.toLowerCase()) && (r[i] = e.getAttribute("jsbarcode-" + i.toLowerCase())), e.hasAttribute("data-" + i.toLowerCase()) && (r[i] = e.getAttribute("data-" + i.toLowerCase())));
		return r.value = e.getAttribute("jsbarcode-value") || e.getAttribute("data-value"), r = (0, t.default)(r), r;
	}
	e.default = i;
})), en = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.getTotalWidthOfEncodings = e.calculateEncodingAttributes = e.getBarcodePadding = e.getEncodingHeight = e.getMaximumHeightOfEncodings = void 0;
	var t = n(Jt());
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
})), tn = /* @__PURE__ */ o(((e) => {
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
	}(), n = i(Jt()), r = en();
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
})), nn = /* @__PURE__ */ o(((e) => {
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
	}(), n = i(Jt()), r = en();
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
})), rn = /* @__PURE__ */ o(((e) => {
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
})), an = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = i(tn()), n = i(nn()), r = i(rn());
	function i(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e.default = {
		CanvasRenderer: t.default,
		SVGRenderer: n.default,
		ObjectRenderer: r.default
	};
})), on = /* @__PURE__ */ o(((e) => {
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
})), sn = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, n = a($t()), r = a(an()), i = on();
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
})), cn = /* @__PURE__ */ o(((e) => {
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
})), ln = /* @__PURE__ */ o(((e, t) => {
	var n = d(qt()), r = d(Jt()), i = d(Yt()), a = d(Xt()), o = d(sn()), s = d(Zt()), c = d(cn()), l = on(), u = d(Qt());
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
})), un = /* @__PURE__ */ o(((e, t) => {
	t.exports = function() {
		return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
	};
})), X = /* @__PURE__ */ o(((e) => {
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
})), dn = /* @__PURE__ */ o(((e) => {
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
})), fn = /* @__PURE__ */ o(((e, t) => {
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
})), pn = /* @__PURE__ */ o(((e, t) => {
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
})), mn = /* @__PURE__ */ o(((e) => {
	var t = X().getSymbolSize;
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
})), hn = /* @__PURE__ */ o(((e) => {
	var t = X().getSymbolSize, n = 7;
	e.getPositions = function(e) {
		let r = t(e);
		return [
			[0, 0],
			[r - n, 0],
			[0, r - n]
		];
	};
})), gn = /* @__PURE__ */ o(((e) => {
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
})), _n = /* @__PURE__ */ o(((e) => {
	var t = dn(), n = [
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
})), vn = /* @__PURE__ */ o(((e) => {
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
})), yn = /* @__PURE__ */ o(((e) => {
	var t = vn();
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
})), bn = /* @__PURE__ */ o(((e, t) => {
	var n = yn();
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
})), xn = /* @__PURE__ */ o(((e) => {
	e.isValid = function(e) {
		return !isNaN(e) && e >= 1 && e <= 40;
	};
})), Sn = /* @__PURE__ */ o(((e) => {
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
})), Z = /* @__PURE__ */ o(((e) => {
	var t = xn(), n = Sn();
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
})), Cn = /* @__PURE__ */ o(((e) => {
	var t = X(), n = _n(), r = dn(), i = Z(), a = xn(), o = 7973, s = t.getBCHDigit(o);
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
})), wn = /* @__PURE__ */ o(((e) => {
	var t = X(), n = 1335, r = 21522, i = t.getBCHDigit(n);
	e.getEncodedBits = function(e, a) {
		let o = e.bit << 3 | a, s = o << 10;
		for (; t.getBCHDigit(s) - i >= 0;) s ^= n << t.getBCHDigit(s) - i;
		return (o << 10 | s) ^ r;
	};
})), Tn = /* @__PURE__ */ o(((e, t) => {
	var n = Z();
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
})), En = /* @__PURE__ */ o(((e, t) => {
	var n = Z(), r = /* @__PURE__ */ "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".split("");
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
})), Dn = /* @__PURE__ */ o(((e, t) => {
	var n = Z();
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
})), On = /* @__PURE__ */ o(((e, t) => {
	var n = Z(), r = X();
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
})), kn = /* @__PURE__ */ o(((e, t) => {
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
})), An = /* @__PURE__ */ o(((e) => {
	var t = Z(), n = Tn(), r = En(), i = Dn(), a = On(), o = Sn(), s = X(), c = kn();
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
})), jn = /* @__PURE__ */ o(((e) => {
	var t = X(), n = dn(), r = fn(), i = pn(), a = mn(), o = hn(), s = gn(), c = _n(), l = bn(), u = Cn(), d = wn(), f = Z(), p = An();
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
	function ee(e, t) {
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
	function y(e, n, i) {
		let a = new r();
		i.forEach(function(t) {
			a.put(t.mode.bit, 4), a.put(t.getLength(), f.getCharCountIndicator(t.mode, e)), t.write(a);
		});
		let o = (t.getSymbolTotalCodewords(e) - c.getTotalCodewordsCount(e, n)) * 8;
		for (a.getLengthInBits() + 4 <= o && a.put(0, 4); a.getLengthInBits() % 8 != 0;) a.putBit(0);
		let s = (o - a.getLengthInBits()) / 8;
		for (let e = 0; e < s; e++) a.put(e % 2 ? 17 : 236, 8);
		return te(a, e, n);
	}
	function te(e, n, r) {
		let i = t.getSymbolTotalCodewords(n), a = i - c.getTotalCodewordsCount(n, r), o = c.getBlocksCount(n, r), s = o - i % o, u = Math.floor(i / o), d = Math.floor(a / o), f = d + 1, p = u - d, m = new l(p), h = 0, g = Array(o), _ = Array(o), v = 0, ee = new Uint8Array(e.buffer);
		for (let e = 0; e < o; e++) {
			let t = e < s ? d : f;
			g[e] = ee.slice(h, h + t), _[e] = m.encode(g[e]), h += t, v = Math.max(v, t);
		}
		let y = new Uint8Array(i), te = 0, b, x;
		for (b = 0; b < v; b++) for (x = 0; x < o; x++) b < g[x].length && (y[te++] = g[x][b]);
		for (b = 0; b < p; b++) for (x = 0; x < o; x++) y[te++] = _[x][b];
		return y;
	}
	function b(e, n, r, a) {
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
		let l = y(n, r, o), d = new i(t.getSymbolSize(n));
		return m(d, n), h(d), g(d, n), v(d, r, 0), n >= 7 && _(d, n), ee(d, l), isNaN(a) && (a = s.getBestMask(d, v.bind(null, d, r))), s.applyMask(a, d), v(d, r, a), {
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
		return r !== void 0 && (i = n.from(r.errorCorrectionLevel, n.M), a = u.from(r.version), o = s.from(r.maskPattern), r.toSJISFunc && t.setToSJISFunction(r.toSJISFunc)), b(e, a, i, o);
	};
})), Mn = /* @__PURE__ */ o(((e) => {
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
})), Nn = /* @__PURE__ */ o(((e) => {
	var t = Mn();
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
})), Pn = /* @__PURE__ */ o(((e) => {
	var t = Mn();
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
})), Fn = /* @__PURE__ */ o(((e) => {
	var t = un(), n = jn(), r = Nn(), i = Pn();
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
})), In = /* @__PURE__ */ c(ln(), 1), Ln = /* @__PURE__ */ c(Fn(), 1), Rn = /* @__PURE__ */ new Set([
	"EAN13",
	"EAN8",
	"UPC",
	"ITF14",
	"MSI"
]);
function zn(e) {
	if (!/^(?:\d{8}|\d{12,14})$/.test(e)) return !1;
	let t = e.split("").map(Number), n = t.pop();
	if (n === void 0) return !1;
	let r = 0;
	for (let e = 0; e < t.length; e += 1) r += t[t.length - 1 - e] * (e % 2 == 0 ? 3 : 1);
	return (10 - r % 10) % 10 === n;
}
function Bn(e) {
	let t = e.replace(/[\s-]/g, "");
	if (/^\d+$/.test(t) && zn(t)) switch (t.length) {
		case 8: return "EAN8";
		case 12: return "UPC";
		case 13: return "EAN13";
		case 14: return "ITF14";
		default: return;
	}
}
function Vn(e, t) {
	let n = t.trim();
	return Rn.has(e) ? n.replace(/[\s-]/g, "") : n;
}
function Hn(e) {
	let { code: t } = e;
	if (!t) return {
		kind: "empty",
		value: ""
	};
	if (e.format === "qr") return {
		kind: "qr",
		value: t
	};
	if (e.format === "barcode") return {
		kind: "barcode",
		value: Vn(e.barcode_format, t),
		barcodeFormat: e.barcode_format
	};
	let n = Bn(t);
	return n ? {
		kind: "barcode",
		value: Vn(n, t),
		barcodeFormat: n,
		note: `Detected ${n} from the code format.`
	} : {
		kind: "qr",
		value: t,
		note: "No supported barcode format detected, showing a QR code instead."
	};
}
function Un(e, t, n) {
	if (!/^\d+$/.test(e)) return `${n} needs digits only.`;
	if (e.length !== t) return e.length === t + 1 ? zn(e) ? void 0 : `${n} check digit is invalid.` : `${n} needs ${t} or ${t + 1} digits, but the code has ${e.length}.`;
}
function Wn(e, t) {
	if (!t) return "The code is empty.";
	switch (e) {
		case "EAN13": return Un(t, 12, "EAN-13");
		case "EAN8": return Un(t, 7, "EAN-8");
		case "UPC": return Un(t, 11, "UPC-A");
		case "ITF14": return /^\d+$/.test(t) ? t.length === 13 ? void 0 : t.length === 14 ? zn(t) ? void 0 : "ITF-14 check digit is invalid." : "ITF-14 needs 13 or 14 digits." : "ITF-14 needs digits only.";
		case "MSI": return /^\d+$/.test(t) ? void 0 : "MSI needs digits only.";
		case "CODE39": return /^[0-9A-Z\-. $/+%]+$/i.test(t) ? void 0 : "Code 39 supports digits, letters and - . space $ / + %.";
		case "CODE128": return /^[\x20-\x7e]+$/.test(t) ? void 0 : "Code 128 supports printable ASCII characters only.";
		case "CODABAR": return /^[A-D]?[0-9\-.$:/+]+[A-D]?$/i.test(t) ? void 0 : "Codabar supports digits and - . $ : / + (optionally wrapped in A-D).";
		default: return "Unsupported barcode format.";
	}
}
async function Gn(e) {
	return Ln.toString(e, {
		type: "svg",
		errorCorrectionLevel: "H",
		margin: 2,
		color: {
			dark: "#000000",
			light: "#ffffff"
		}
	});
}
function Kn(e, t, n, r) {
	(0, In.default)(e, t, {
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
// src/styles.ts
var qn = h`
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
`;
// \0@oxc-project+runtime@0.155.0/helpers/esm/decorate.js
function Q(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
// src/loyalty-flip-card-editor.ts
var Jn = {
	code: "Code",
	format: "Symbol type",
	barcode_format: "Barcode format",
	title: "Title",
	subtitle: "Subtitle",
	icon: "Icon",
	logo: "Logo URL",
	color: "Accent color",
	show_code_text: "Show code as text",
	popup_title: "Popup title",
	qr_size: "QR size (px)",
	barcode_height: "Barcode height (px)",
	barcode_width: "Barcode bar width (px)",
	fallback_to_qr: "Fall back to a QR code"
}, Yn = {
	code: "The value encoded in the symbol. Quote numeric codes in YAML so leading zeros are preserved.",
	format: "Auto-detect uses EAN/UPC for 8, 12, 13 or 14 digit codes with a valid check digit, and a QR code otherwise.",
	fallback_to_qr: "Show a QR code when the value cannot be encoded as the selected barcode format.",
	logo: "Use a URL that Home Assistant can reach, for example /local/my-logo.png."
}, Xn = class extends R {
	constructor(...e) {
		super(...e), this._computeLabel = (e) => Jn[e.name] ?? e.name, this._computeHelper = (e) => Yn[e.name] ?? "";
	}
	setConfig(e) {
		this._config = { ...e };
	}
	render() {
		let e = this._config;
		return e ? j`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${this._buildSchema(e)}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      ></ha-form>
    ` : N;
	}
	_buildSchema(e) {
		let t = e.format ?? "qr";
		return [
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
				name: "title",
				selector: { text: {} }
			},
			{
				name: "subtitle",
				selector: { text: {} }
			},
			{
				name: "icon",
				selector: { icon: {} }
			},
			{
				name: "logo",
				selector: { text: {} }
			},
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
		this._config = { ...e.detail.value }, this.dispatchEvent(new CustomEvent("config-changed", {
			detail: { config: e.detail.value },
			bubbles: !0,
			composed: !0
		}));
	}
};
Q([ze({ attribute: !1 })], Xn.prototype, "hass", void 0), Q([z()], Xn.prototype, "_config", void 0), customElements.get("loyalty-flip-card-editor") || customElements.define("loyalty-flip-card-editor", Xn);
// src/loyalty-flip-card.ts
var $ = class extends R {
	constructor(...e) {
		super(...e), this._open = !1, this._copied = !1, this._logoFailed = !1, this._content = "none", this._dialog = Ze(), this._trigger = Ze(), this._barcode = Ze(), this._renderToken = 0, this._renderKey = "";
	}
	static {
		this.styles = qn;
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
		this._config = ft(e), this._invalidate(), this._open && this._prepareCode();
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
		return e ? j`
      <ha-card style=${e.color ? `--loyalty-accent: ${e.color}; --loyalty-ink: ${mt(e.color)};` : ""}>${this._renderFace(e)}</ha-card>
      ${this._renderDialog(e)}
    ` : N;
	}
	_renderFace(e) {
		return j`
      <button
        class="face"
        type="button"
        ${et(this._trigger)}
        aria-haspopup="dialog"
        aria-expanded=${this._open ? "true" : "false"}
        aria-label=${`Show ${e.title} code`}
        @click=${this._openPopup}
      >
        <div class="face__head">
          <div class="badge">
            ${e.logo && !this._logoFailed ? j`<img src=${e.logo} alt="" @error=${this._onLogoError} />` : e.icon ? j`<ha-icon icon=${e.icon}></ha-icon>` : N}
          </div>
          <div class="face__copy">
            <div class="face__title">${e.title}</div>
            ${e.subtitle ? j`<div class="face__subtitle">${e.subtitle}</div>` : N}
          </div>
        </div>
        <div class="face__hint">
          <ha-icon icon=${e.format === "barcode" ? "mdi:barcode" : "mdi:qrcode"}></ha-icon>
          <span>Tap to show code</span>
          <ha-icon class="face__chevron" icon="mdi:chevron-right"></ha-icon>
        </div>
      </button>
    `;
	}
	_renderDialog(e) {
		return j`
      <dialog
        ${et(this._dialog)}
        aria-labelledby="loyalty-code-title"
        @click=${this._onDialogClick}
        @close=${this._onDialogClose}
      >
        <div class="panel">
          <header class="panel__head">
            <h2 class="panel__title" id="loyalty-code-title">${e.popup_title}</h2>
            <button class="icon-btn" type="button" aria-label="Close" @click=${this._closePopup}>
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </header>
          <div class="code" style=${`--qr-size: ${e.qr_size}px`}>${this._renderContent()}</div>
          ${this._note ? j`<p class="note">${this._note}</p>` : N}
          ${e.code ? j`
                  <footer class="footer">
                    ${e.show_code_text ? j`<code class="value">${e.code}</code>` : N}
                    <button
                      class=${Ue({
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
                ` : N}
        </div>
      </dialog>
    `;
	}
	_renderContent() {
		switch (this._content) {
			case "empty": return j`
          <p class="message">
            No code configured.<br />
            Add a <code>code</code> in the card settings.
          </p>
        `;
			case "error": return j`<p class="message">${this._error ?? "Unable to render this code."}</p>`;
			case "barcode": return j`<svg class="barcode" ${et(this._barcode)} aria-label="Barcode"></svg>`;
			case "qr": return this._error ? j`<p class="message">${this._error}</p>` : this._qrSvg ? j`
          <div class="qr" role="img" aria-label="QR code">${rt(this._qrSvg)}</div>
        ` : j`<div class="loading" role="status">Preparing code…</div>`;
			default: return N;
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
		this._renderToken += 1, this._renderKey = "", this._content = "none", this._qrSvg = void 0, this._error = void 0, this._note = void 0, this._logoFailed = !1;
	}
	async _prepareCode() {
		let e = this._config;
		if (!e) return;
		let t = JSON.stringify([
			e.code,
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
		this._qrSvg = void 0, this._error = void 0, this._note = void 0;
		let r = Hn(e);
		r.kind === "empty" ? this._content = "empty" : r.kind === "qr" ? await this._showQr(r.value, n, r.note) : await this._showBarcode(r, n, e);
	}
	async _showQr(e, t, n) {
		this._content = "qr", this._qrSvg = void 0, n && (this._note = n);
		try {
			let n = await Gn(e);
			if (t !== this._renderToken) return;
			this._qrSvg = n;
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
		let i = Wn(r, e.value);
		if (i) {
			await this._handleBarcodeProblem(i, e.value, n, t);
			return;
		}
		if (this._content = "barcode", this._qrSvg = void 0, await this.updateComplete, t !== this._renderToken) return;
		let a = this._barcode.value;
		if (!a) await this._handleBarcodeProblem("The barcode could not be drawn.", e.value, n, t);
		else try {
			if (Kn(a, e.value, r, {
				height: n.barcode_height,
				width: n.barcode_width
			}), t !== this._renderToken) return;
			this._note = e.note;
		} catch (i) {
			let a = `This value cannot be encoded as ${r}.${i instanceof Error && i.message ? ` ${i.message}` : ""}`;
			await this._handleBarcodeProblem(a, e.value, n, t);
		}
	}
	async _handleBarcodeProblem(e, t, n, r) {
		n.fallback_to_qr ? await this._showQr(t, r, `${e} Showing a QR code instead.`) : (this._content = "error", this._error = e);
	}
};
Q([ze({ attribute: !1 })], $.prototype, "hass", void 0), Q([z()], $.prototype, "_config", void 0), Q([z()], $.prototype, "_open", void 0), Q([z()], $.prototype, "_copied", void 0), Q([z()], $.prototype, "_logoFailed", void 0), Q([z()], $.prototype, "_content", void 0), Q([z()], $.prototype, "_qrSvg", void 0), Q([z()], $.prototype, "_error", void 0), Q([z()], $.prototype, "_note", void 0), customElements.get("loyalty-flip-card") || customElements.define("loyalty-flip-card", $), window.customCards = window.customCards ?? [], window.customCards.some((e) => e.type === "loyalty-flip-card") || window.customCards.push({
	type: "loyalty-flip-card",
	name: "Loyalty Flip Card",
	description: "Displays a loyalty QR code or barcode in a tappable popup.",
	preview: !0
}), console.info("%c LOYALTY-FLIP-CARD %c v0.1.0 ", "color: #fff; background: #1a73e8; font-weight: 600; border-radius: 3px 0 0 3px;", "color: #1a73e8; background: #e8f0fe; border-radius: 0 3px 3px 0;");
export { $ as LoyaltyFlipCard };
