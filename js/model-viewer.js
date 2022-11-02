/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = (t, e) => "method" === e.kind && e.descriptor && !("value" in e.descriptor) ? {...e, finisher(i) {
		i.createProperty(e.key, t)
	}
} : {
	kind: "field",
	key: Symbol(),
	placement: "own",
	descriptor: {},
	originalKey: e.key,
	initializer() {
		"function" == typeof e.initializer && (this[e.key] = e.initializer.call(this))
	},
	finisher(i) {
		i.createProperty(e.key, t)
	}
};

function e(e) {
	return(i, n) => void 0 !== n ? ((t, e, i) => {
			e.constructor.createProperty(i, t)
		})(e, i, n) : t(e, i)
		/**
		 * @license
		 * Copyright 2021 Google LLC
		 * SPDX-License-Identifier: BSD-3-Clause
		 */
}
var i;
null === (i = window.HTMLSlotElement) || void 0 === i || i.prototype.assignedElements;
class n {
	addEventListener(t, e) {
		void 0 === this._listeners && (this._listeners = {});
		const i = this._listeners;
		void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e)
	}
	hasEventListener(t, e) {
		if(void 0 === this._listeners) return !1;
		const i = this._listeners;
		return void 0 !== i[t] && -1 !== i[t].indexOf(e)
	}
	removeEventListener(t, e) {
		if(void 0 === this._listeners) return;
		const i = this._listeners[t];
		if(void 0 !== i) {
			const t = i.indexOf(e); - 1 !== t && i.splice(t, 1)
		}
	}
	dispatchEvent(t) {
		if(void 0 === this._listeners) return;
		const e = this._listeners[t.type];
		if(void 0 !== e) {
			t.target = this;
			const i = e.slice(0);
			for(let e = 0, n = i.length; e < n; e++) i[e].call(this, t);
			t.target = null
		}
	}
}
const s = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let r = 1234567;
const a = Math.PI / 180,
	o = 180 / Math.PI;

function l() {
	const t = 4294967295 * Math.random() | 0,
		e = 4294967295 * Math.random() | 0,
		i = 4294967295 * Math.random() | 0,
		n = 4294967295 * Math.random() | 0;
	return(s[255 & t] + s[t >> 8 & 255] + s[t >> 16 & 255] + s[t >> 24 & 255] + "-" + s[255 & e] + s[e >> 8 & 255] + "-" + s[e >> 16 & 15 | 64] + s[e >> 24 & 255] + "-" + s[63 & i | 128] + s[i >> 8 & 255] + "-" + s[i >> 16 & 255] + s[i >> 24 & 255] + s[255 & n] + s[n >> 8 & 255] + s[n >> 16 & 255] + s[n >> 24 & 255]).toLowerCase()
}

function c(t, e, i) {
	return Math.max(e, Math.min(i, t))
}

function h(t, e) {
	return(t % e + e) % e
}

function u(t, e, i) {
	return(1 - i) * t + i * e
}

function d(t) {
	return 0 == (t & t - 1) && 0 !== t
}

function A(t) {
	return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
}

function p(t) {
	return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
}

function g(t, e) {
	switch(e.constructor) {
		case Float32Array:
			return t;
		case Uint16Array:
			return t / 65535;
		case Uint8Array:
			return t / 255;
		case Int16Array:
			return Math.max(t / 32767, -1);
		case Int8Array:
			return Math.max(t / 127, -1);
		default:
			throw new Error("Invalid component type.")
	}
}

function m(t, e) {
	switch(e.constructor) {
		case Float32Array:
			return t;
		case Uint16Array:
			return Math.round(65535 * t);
		case Uint8Array:
			return Math.round(255 * t);
		case Int16Array:
			return Math.round(32767 * t);
		case Int8Array:
			return Math.round(127 * t);
		default:
			throw new Error("Invalid component type.")
	}
}
var f = Object.freeze({
	__proto__: null,
	DEG2RAD: a,
	RAD2DEG: o,
	generateUUID: l,
	clamp: c,
	euclideanModulo: h,
	mapLinear: function(t, e, i, n, s) {
		return n + (t - e) * (s - n) / (i - e)
	},
	inverseLerp: function(t, e, i) {
		return t !== e ? (i - t) / (e - t) : 0
	},
	lerp: u,
	damp: function(t, e, i, n) {
		return u(t, e, 1 - Math.exp(-i * n))
	},
	pingpong: function(t, e = 1) {
		return e - Math.abs(h(t, 2 * e) - e)
	},
	smoothstep: function(t, e, i) {
		return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * (3 - 2 * t)
	},
	smootherstep: function(t, e, i) {
		return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * t * (t * (6 * t - 15) + 10)
	},
	randInt: function(t, e) {
		return t + Math.floor(Math.random() * (e - t + 1))
	},
	randFloat: function(t, e) {
		return t + Math.random() * (e - t)
	},
	randFloatSpread: function(t) {
		return t * (.5 - Math.random())
	},
	seededRandom: function(t) {
		void 0 !== t && (r = t);
		let e = r += 1831565813;
		return e = Math.imul(e ^ e >>> 15, 1 | e), e ^= e + Math.imul(e ^ e >>> 7, 61 | e), ((e ^ e >>> 14) >>> 0) / 4294967296
	},
	degToRad: function(t) {
		return t * a
	},
	radToDeg: function(t) {
		return t * o
	},
	isPowerOfTwo: d,
	ceilPowerOfTwo: A,
	floorPowerOfTwo: p,
	setQuaternionFromProperEuler: function(t, e, i, n, s) {
		const r = Math.cos,
			a = Math.sin,
			o = r(i / 2),
			l = a(i / 2),
			c = r((e + n) / 2),
			h = a((e + n) / 2),
			u = r((e - n) / 2),
			d = a((e - n) / 2),
			A = r((n - e) / 2),
			p = a((n - e) / 2);
		switch(s) {
			case "XYX":
				t.set(o * h, l * u, l * d, o * c);
				break;
			case "YZY":
				t.set(l * d, o * h, l * u, o * c);
				break;
			case "ZXZ":
				t.set(l * u, l * d, o * h, o * c);
				break;
			case "XZX":
				t.set(o * h, l * p, l * A, o * c);
				break;
			case "YXY":
				t.set(l * A, o * h, l * p, o * c);
				break;
			case "ZYZ":
				t.set(l * p, l * A, o * h, o * c);
				break;
			default:
				console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + s)
		}
	},
	normalize: m,
	denormalize: g
});
class v {
	constructor(t = 0, e = 0) {
		v.prototype.isVector2 = !0, this.x = t, this.y = e
	}
	get width() {
		return this.x
	}
	set width(t) {
		this.x = t
	}
	get height() {
		return this.y
	}
	set height(t) {
		this.y = t
	}
	set(t, e) {
		return this.x = t, this.y = e, this
	}
	setScalar(t) {
		return this.x = t, this.y = t, this
	}
	setX(t) {
		return this.x = t, this
	}
	setY(t) {
		return this.y = t, this
	}
	setComponent(t, e) {
		switch(t) {
			case 0:
				this.x = e;
				break;
			case 1:
				this.y = e;
				break;
			default:
				throw new Error("index is out of range: " + t)
		}
		return this
	}
	getComponent(t) {
		switch(t) {
			case 0:
				return this.x;
			case 1:
				return this.y;
			default:
				throw new Error("index is out of range: " + t)
		}
	}
	clone() {
		return new this.constructor(this.x, this.y)
	}
	copy(t) {
		return this.x = t.x, this.y = t.y, this
	}
	add(t) {
		return this.x += t.x, this.y += t.y, this
	}
	addScalar(t) {
		return this.x += t, this.y += t, this
	}
	addVectors(t, e) {
		return this.x = t.x + e.x, this.y = t.y + e.y, this
	}
	addScaledVector(t, e) {
		return this.x += t.x * e, this.y += t.y * e, this
	}
	sub(t) {
		return this.x -= t.x, this.y -= t.y, this
	}
	subScalar(t) {
		return this.x -= t, this.y -= t, this
	}
	subVectors(t, e) {
		return this.x = t.x - e.x, this.y = t.y - e.y, this
	}
	multiply(t) {
		return this.x *= t.x, this.y *= t.y, this
	}
	multiplyScalar(t) {
		return this.x *= t, this.y *= t, this
	}
	divide(t) {
		return this.x /= t.x, this.y /= t.y, this
	}
	divideScalar(t) {
		return this.multiplyScalar(1 / t)
	}
	applyMatrix3(t) {
		const e = this.x,
			i = this.y,
			n = t.elements;
		return this.x = n[0] * e + n[3] * i + n[6], this.y = n[1] * e + n[4] * i + n[7], this
	}
	min(t) {
		return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
	}
	max(t) {
		return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
	}
	clamp(t, e) {
		return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
	}
	clampScalar(t, e) {
		return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this
	}
	clampLength(t, e) {
		const i = this.length();
		return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this
	}
	roundToZero() {
		return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this
	}
	dot(t) {
		return this.x * t.x + this.y * t.y
	}
	cross(t) {
		return this.x * t.y - this.y * t.x
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y)
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y)
	}
	normalize() {
		return this.divideScalar(this.length() || 1)
	}
	angle() {
		return Math.atan2(-this.y, -this.x) + Math.PI
	}
	distanceTo(t) {
		return Math.sqrt(this.distanceToSquared(t))
	}
	distanceToSquared(t) {
		const e = this.x - t.x,
			i = this.y - t.y;
		return e * e + i * i
	}
	manhattanDistanceTo(t) {
		return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
	}
	setLength(t) {
		return this.normalize().multiplyScalar(t)
	}
	lerp(t, e) {
		return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
	}
	lerpVectors(t, e, i) {
		return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this
	}
	equals(t) {
		return t.x === this.x && t.y === this.y
	}
	fromArray(t, e = 0) {
		return this.x = t[e], this.y = t[e + 1], this
	}
	toArray(t = [], e = 0) {
		return t[e] = this.x, t[e + 1] = this.y, t
	}
	fromBufferAttribute(t, e) {
		return this.x = t.getX(e), this.y = t.getY(e), this
	}
	rotateAround(t, e) {
		const i = Math.cos(e),
			n = Math.sin(e),
			s = this.x - t.x,
			r = this.y - t.y;
		return this.x = s * i - r * n + t.x, this.y = s * n + r * i + t.y, this
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this
	} * [Symbol.iterator]() {
		yield this.x, yield this.y
	}
}
class y {
	constructor() {
		y.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]
	}
	set(t, e, i, n, s, r, a, o, l) {
		const c = this.elements;
		return c[0] = t, c[1] = n, c[2] = a, c[3] = e, c[4] = s, c[5] = o, c[6] = i, c[7] = r, c[8] = l, this
	}
	identity() {
		return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
	}
	copy(t) {
		const e = this.elements,
			i = t.elements;
		return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this
	}
	extractBasis(t, e, i) {
		return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this
	}
	setFromMatrix4(t) {
		const e = t.elements;
		return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
	}
	multiply(t) {
		return this.multiplyMatrices(this, t)
	}
	premultiply(t) {
		return this.multiplyMatrices(t, this)
	}
	multiplyMatrices(t, e) {
		const i = t.elements,
			n = e.elements,
			s = this.elements,
			r = i[0],
			a = i[3],
			o = i[6],
			l = i[1],
			c = i[4],
			h = i[7],
			u = i[2],
			d = i[5],
			A = i[8],
			p = n[0],
			g = n[3],
			m = n[6],
			f = n[1],
			v = n[4],
			y = n[7],
			x = n[2],
			_ = n[5],
			E = n[8];
		return s[0] = r * p + a * f + o * x, s[3] = r * g + a * v + o * _, s[6] = r * m + a * y + o * E, s[1] = l * p + c * f + h * x, s[4] = l * g + c * v + h * _, s[7] = l * m + c * y + h * E, s[2] = u * p + d * f + A * x, s[5] = u * g + d * v + A * _, s[8] = u * m + d * y + A * E, this
	}
	multiplyScalar(t) {
		const e = this.elements;
		return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
	}
	determinant() {
		const t = this.elements,
			e = t[0],
			i = t[1],
			n = t[2],
			s = t[3],
			r = t[4],
			a = t[5],
			o = t[6],
			l = t[7],
			c = t[8];
		return e * r * c - e * a * l - i * s * c + i * a * o + n * s * l - n * r * o
	}
	invert() {
		const t = this.elements,
			e = t[0],
			i = t[1],
			n = t[2],
			s = t[3],
			r = t[4],
			a = t[5],
			o = t[6],
			l = t[7],
			c = t[8],
			h = c * r - a * l,
			u = a * o - c * s,
			d = l * s - r * o,
			A = e * h + i * u + n * d;
		if(0 === A) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
		const p = 1 / A;
		return t[0] = h * p, t[1] = (n * l - c * i) * p, t[2] = (a * i - n * r) * p, t[3] = u * p, t[4] = (c * e - n * o) * p, t[5] = (n * s - a * e) * p, t[6] = d * p, t[7] = (i * o - l * e) * p, t[8] = (r * e - i * s) * p, this
	}
	transpose() {
		let t;
		const e = this.elements;
		return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
	}
	getNormalMatrix(t) {
		return this.setFromMatrix4(t).invert().transpose()
	}
	transposeIntoArray(t) {
		const e = this.elements;
		return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
	}
	setUvTransform(t, e, i, n, s, r, a) {
		const o = Math.cos(s),
			l = Math.sin(s);
		return this.set(i * o, i * l, -i * (o * r + l * a) + r + t, -n * l, n * o, -n * (-l * r + o * a) + a + e, 0, 0, 1), this
	}
	scale(t, e) {
		const i = this.elements;
		return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= e, i[4] *= e, i[7] *= e, this
	}
	rotate(t) {
		const e = Math.cos(t),
			i = Math.sin(t),
			n = this.elements,
			s = n[0],
			r = n[3],
			a = n[6],
			o = n[1],
			l = n[4],
			c = n[7];
		return n[0] = e * s + i * o, n[3] = e * r + i * l, n[6] = e * a + i * c, n[1] = -i * s + e * o, n[4] = -i * r + e * l, n[7] = -i * a + e * c, this
	}
	translate(t, e) {
		const i = this.elements;
		return i[0] += t * i[2], i[3] += t * i[5], i[6] += t * i[8], i[1] += e * i[2], i[4] += e * i[5], i[7] += e * i[8], this
	}
	equals(t) {
		const e = this.elements,
			i = t.elements;
		for(let t = 0; t < 9; t++)
			if(e[t] !== i[t]) return !1;
		return !0
	}
	fromArray(t, e = 0) {
		for(let i = 0; i < 9; i++) this.elements[i] = t[i + e];
		return this
	}
	toArray(t = [], e = 0) {
		const i = this.elements;
		return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t
	}
	clone() {
		return(new this.constructor).fromArray(this.elements)
	}
}

function x(t) {
	for(let e = t.length - 1; e >= 0; --e)
		if(t[e] >= 65535) return !0;
	return !1
}

function _(t) {
	return document.createElementNS("http://www.w3.org/1999/xhtml", t)
}

function E(t) {
	return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
}

function w(t) {
	return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
}
const b = {
		srgb: {
			"srgb-linear": E
		},
		"srgb-linear": {
			srgb: w
		}
	},
	I = {
		legacyMode: !0,
		get workingColorSpace() {
			return "srgb-linear"
		},
		set workingColorSpace(t) {
			console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")
		},
		convert: function(t, e, i) {
			if(this.legacyMode || e === i || !e || !i) return t;
			if(b[e] && void 0 !== b[e][i]) {
				const n = b[e][i];
				return t.r = n(t.r), t.g = n(t.g), t.b = n(t.b), t
			}
			throw new Error("Unsupported color space conversion.")
		},
		fromWorkingColorSpace: function(t, e) {
			return this.convert(t, this.workingColorSpace, e)
		},
		toWorkingColorSpace: function(t, e) {
			return this.convert(t, e, this.workingColorSpace)
		}
	},
	C = {
		aliceblue: 15792383,
		antiquewhite: 16444375,
		aqua: 65535,
		aquamarine: 8388564,
		azure: 15794175,
		beige: 16119260,
		bisque: 16770244,
		black: 0,
		blanchedalmond: 16772045,
		blue: 255,
		blueviolet: 9055202,
		brown: 10824234,
		burlywood: 14596231,
		cadetblue: 6266528,
		chartreuse: 8388352,
		chocolate: 13789470,
		coral: 16744272,
		cornflowerblue: 6591981,
		cornsilk: 16775388,
		crimson: 14423100,
		cyan: 65535,
		darkblue: 139,
		darkcyan: 35723,
		darkgoldenrod: 12092939,
		darkgray: 11119017,
		darkgreen: 25600,
		darkgrey: 11119017,
		darkkhaki: 12433259,
		darkmagenta: 9109643,
		darkolivegreen: 5597999,
		darkorange: 16747520,
		darkorchid: 10040012,
		darkred: 9109504,
		darksalmon: 15308410,
		darkseagreen: 9419919,
		darkslateblue: 4734347,
		darkslategray: 3100495,
		darkslategrey: 3100495,
		darkturquoise: 52945,
		darkviolet: 9699539,
		deeppink: 16716947,
		deepskyblue: 49151,
		dimgray: 6908265,
		dimgrey: 6908265,
		dodgerblue: 2003199,
		firebrick: 11674146,
		floralwhite: 16775920,
		forestgreen: 2263842,
		fuchsia: 16711935,
		gainsboro: 14474460,
		ghostwhite: 16316671,
		gold: 16766720,
		goldenrod: 14329120,
		gray: 8421504,
		green: 32768,
		greenyellow: 11403055,
		grey: 8421504,
		honeydew: 15794160,
		hotpink: 16738740,
		indianred: 13458524,
		indigo: 4915330,
		ivory: 16777200,
		khaki: 15787660,
		lavender: 15132410,
		lavenderblush: 16773365,
		lawngreen: 8190976,
		lemonchiffon: 16775885,
		lightblue: 11393254,
		lightcoral: 15761536,
		lightcyan: 14745599,
		lightgoldenrodyellow: 16448210,
		lightgray: 13882323,
		lightgreen: 9498256,
		lightgrey: 13882323,
		lightpink: 16758465,
		lightsalmon: 16752762,
		lightseagreen: 2142890,
		lightskyblue: 8900346,
		lightslategray: 7833753,
		lightslategrey: 7833753,
		lightsteelblue: 11584734,
		lightyellow: 16777184,
		lime: 65280,
		limegreen: 3329330,
		linen: 16445670,
		magenta: 16711935,
		maroon: 8388608,
		mediumaquamarine: 6737322,
		mediumblue: 205,
		mediumorchid: 12211667,
		mediumpurple: 9662683,
		mediumseagreen: 3978097,
		mediumslateblue: 8087790,
		mediumspringgreen: 64154,
		mediumturquoise: 4772300,
		mediumvioletred: 13047173,
		midnightblue: 1644912,
		mintcream: 16121850,
		mistyrose: 16770273,
		moccasin: 16770229,
		navajowhite: 16768685,
		navy: 128,
		oldlace: 16643558,
		olive: 8421376,
		olivedrab: 7048739,
		orange: 16753920,
		orangered: 16729344,
		orchid: 14315734,
		palegoldenrod: 15657130,
		palegreen: 10025880,
		paleturquoise: 11529966,
		palevioletred: 14381203,
		papayawhip: 16773077,
		peachpuff: 16767673,
		peru: 13468991,
		pink: 16761035,
		plum: 14524637,
		powderblue: 11591910,
		purple: 8388736,
		rebeccapurple: 6697881,
		red: 16711680,
		rosybrown: 12357519,
		royalblue: 4286945,
		saddlebrown: 9127187,
		salmon: 16416882,
		sandybrown: 16032864,
		seagreen: 3050327,
		seashell: 16774638,
		sienna: 10506797,
		silver: 12632256,
		skyblue: 8900331,
		slateblue: 6970061,
		slategray: 7372944,
		slategrey: 7372944,
		snow: 16775930,
		springgreen: 65407,
		steelblue: 4620980,
		tan: 13808780,
		teal: 32896,
		thistle: 14204888,
		tomato: 16737095,
		turquoise: 4251856,
		violet: 15631086,
		wheat: 16113331,
		white: 16777215,
		whitesmoke: 16119285,
		yellow: 16776960,
		yellowgreen: 10145074
	},
	S = {
		r: 0,
		g: 0,
		b: 0
	},
	M = {
		h: 0,
		s: 0,
		l: 0
	},
	B = {
		h: 0,
		s: 0,
		l: 0
	};

function T(t, e, i) {
	return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - i) : t
}

function R(t, e) {
	return e.r = t.r, e.g = t.g, e.b = t.b, e
}
class D {
	constructor(t, e, i) {
		return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, void 0 === e && void 0 === i ? this.set(t) : this.setRGB(t, e, i)
	}
	set(t) {
		return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
	}
	setScalar(t) {
		return this.r = t, this.g = t, this.b = t, this
	}
	setHex(t, e = "srgb") {
		return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, I.toWorkingColorSpace(this, e), this
	}
	setRGB(t, e, i, n = "srgb-linear") {
		return this.r = t, this.g = e, this.b = i, I.toWorkingColorSpace(this, n), this
	}
	setHSL(t, e, i, n = "srgb-linear") {
		if(t = h(t, 1), e = c(e, 0, 1), i = c(i, 0, 1), 0 === e) this.r = this.g = this.b = i;
		else {
			const n = i <= .5 ? i * (1 + e) : i + e - i * e,
				s = 2 * i - n;
			this.r = T(s, n, t + 1 / 3), this.g = T(s, n, t), this.b = T(s, n, t - 1 / 3)
		}
		return I.toWorkingColorSpace(this, n), this
	}
	setStyle(t, e = "srgb") {
		function i(e) {
			void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
		}
		let n;
		if(n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
			let t;
			const s = n[1],
				r = n[2];
			switch(s) {
				case "rgb":
				case "rgba":
					if(t = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) return this.r = Math.min(255, parseInt(t[1], 10)) / 255, this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, I.toWorkingColorSpace(this, e), i(t[4]), this;
					if(t = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) return this.r = Math.min(100, parseInt(t[1], 10)) / 100, this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, I.toWorkingColorSpace(this, e), i(t[4]), this;
					break;
				case "hsl":
				case "hsla":
					if(t = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) {
						const n = parseFloat(t[1]) / 360,
							s = parseFloat(t[2]) / 100,
							r = parseFloat(t[3]) / 100;
						return i(t[4]), this.setHSL(n, s, r, e)
					}
			}
		} else if(n = /^\#([A-Fa-f\d]+)$/.exec(t)) {
			const t = n[1],
				i = t.length;
			if(3 === i) return this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255, this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255, this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255, I.toWorkingColorSpace(this, e), this;
			if(6 === i) return this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255, this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255, this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255, I.toWorkingColorSpace(this, e), this
		}
		return t && t.length > 0 ? this.setColorName(t, e) : this
	}
	setColorName(t, e = "srgb") {
		const i = C[t.toLowerCase()];
		return void 0 !== i ? this.setHex(i, e) : console.warn("THREE.Color: Unknown color " + t), this
	}
	clone() {
		return new this.constructor(this.r, this.g, this.b)
	}
	copy(t) {
		return this.r = t.r, this.g = t.g, this.b = t.b, this
	}
	copySRGBToLinear(t) {
		return this.r = E(t.r), this.g = E(t.g), this.b = E(t.b), this
	}
	copyLinearToSRGB(t) {
		return this.r = w(t.r), this.g = w(t.g), this.b = w(t.b), this
	}
	convertSRGBToLinear() {
		return this.copySRGBToLinear(this), this
	}
	convertLinearToSRGB() {
		return this.copyLinearToSRGB(this), this
	}
	getHex(t = "srgb") {
		return I.fromWorkingColorSpace(R(this, S), t), c(255 * S.r, 0, 255) << 16 ^ c(255 * S.g, 0, 255) << 8 ^ c(255 * S.b, 0, 255) << 0
	}
	getHexString(t = "srgb") {
		return("000000" + this.getHex(t).toString(16)).slice(-6)
	}
	getHSL(t, e = "srgb-linear") {
		I.fromWorkingColorSpace(R(this, S), e);
		const i = S.r,
			n = S.g,
			s = S.b,
			r = Math.max(i, n, s),
			a = Math.min(i, n, s);
		let o, l;
		const c = (a + r) / 2;
		if(a === r) o = 0, l = 0;
		else {
			const t = r - a;
			switch(l = c <= .5 ? t / (r + a) : t / (2 - r - a), r) {
				case i:
					o = (n - s) / t + (n < s ? 6 : 0);
					break;
				case n:
					o = (s - i) / t + 2;
					break;
				case s:
					o = (i - n) / t + 4
			}
			o /= 6
		}
		return t.h = o, t.s = l, t.l = c, t
	}
	getRGB(t, e = "srgb-linear") {
		return I.fromWorkingColorSpace(R(this, S), e), t.r = S.r, t.g = S.g, t.b = S.b, t
	}
	getStyle(t = "srgb") {
		return I.fromWorkingColorSpace(R(this, S), t), "srgb" !== t ? `color(${t} ${S.r} ${S.g} ${S.b})` : `rgb(${255*S.r|0},${255*S.g|0},${255*S.b|0})`
	}
	offsetHSL(t, e, i) {
		return this.getHSL(M), M.h += t, M.s += e, M.l += i, this.setHSL(M.h, M.s, M.l), this
	}
	add(t) {
		return this.r += t.r, this.g += t.g, this.b += t.b, this
	}
	addColors(t, e) {
		return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
	}
	addScalar(t) {
		return this.r += t, this.g += t, this.b += t, this
	}
	sub(t) {
		return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
	}
	multiply(t) {
		return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
	}
	multiplyScalar(t) {
		return this.r *= t, this.g *= t, this.b *= t, this
	}
	lerp(t, e) {
		return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
	}
	lerpColors(t, e, i) {
		return this.r = t.r + (e.r - t.r) * i, this.g = t.g + (e.g - t.g) * i, this.b = t.b + (e.b - t.b) * i, this
	}
	lerpHSL(t, e) {
		this.getHSL(M), t.getHSL(B);
		const i = u(M.h, B.h, e),
			n = u(M.s, B.s, e),
			s = u(M.l, B.l, e);
		return this.setHSL(i, n, s), this
	}
	equals(t) {
		return t.r === this.r && t.g === this.g && t.b === this.b
	}
	fromArray(t, e = 0) {
		return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
	}
	toArray(t = [], e = 0) {
		return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
	}
	fromBufferAttribute(t, e) {
		return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this
	}
	toJSON() {
		return this.getHex()
	} * [Symbol.iterator]() {
		yield this.r, yield this.g, yield this.b
	}
}
let L;
D.NAMES = C;
class Q {
	static getDataURL(t) {
		if(/^data:/i.test(t.src)) return t.src;
		if("undefined" == typeof HTMLCanvasElement) return t.src;
		let e;
		if(t instanceof HTMLCanvasElement) e = t;
		else {
			void 0 === L && (L = _("canvas")), L.width = t.width, L.height = t.height;
			const i = L.getContext("2d");
			t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height), e = L
		}
		return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png")
	}
	static sRGBToLinear(t) {
		if("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
			const e = _("canvas");
			e.width = t.width, e.height = t.height;
			const i = e.getContext("2d");
			i.drawImage(t, 0, 0, t.width, t.height);
			const n = i.getImageData(0, 0, t.width, t.height),
				s = n.data;
			for(let t = 0; t < s.length; t++) s[t] = 255 * E(s[t] / 255);
			return i.putImageData(n, 0, 0), e
		}
		if(t.data) {
			const e = t.data.slice(0);
			for(let t = 0; t < e.length; t++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[t] = Math.floor(255 * E(e[t] / 255)) : e[t] = E(e[t]);
			return {
				data: e,
				width: t.width,
				height: t.height
			}
		}
		return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t
	}
}
class P {
	constructor(t = null) {
		this.isSource = !0, this.uuid = l(), this.data = t, this.version = 0
	}
	set needsUpdate(t) {
		!0 === t && this.version++
	}
	toJSON(t) {
		const e = void 0 === t || "string" == typeof t;
		if(!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
		const i = {
				uuid: this.uuid,
				url: ""
			},
			n = this.data;
		if(null !== n) {
			let t;
			if(Array.isArray(n)) {
				t = [];
				for(let e = 0, i = n.length; e < i; e++) n[e].isDataTexture ? t.push(F(n[e].image)) : t.push(F(n[e]))
			} else t = F(n);
			i.url = t
		}
		return e || (t.images[this.uuid] = i), i
	}
}

function F(t) {
	return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? Q.getDataURL(t) : t.data ? {
		data: Array.from(t.data),
		width: t.width,
		height: t.height,
		type: t.data.constructor.name
	} : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
}
let U = 0;
class N extends n {
	constructor(t = N.DEFAULT_IMAGE, e = N.DEFAULT_MAPPING, i = 1001, n = 1001, s = 1006, r = 1008, a = 1023, o = 1009, c = 1, h = 3e3) {
		super(), this.isTexture = !0, Object.defineProperty(this, "id", {
			value: U++
		}), this.uuid = l(), this.name = "", this.source = new P(t), this.mipmaps = [], this.mapping = e, this.wrapS = i, this.wrapT = n, this.magFilter = s, this.minFilter = r, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = o, this.offset = new v(0, 0), this.repeat = new v(1, 1), this.center = new v(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new y, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1
	}
	get image() {
		return this.source.data
	}
	set image(t) {
		this.source.data = t
	}
	updateMatrix() {
		this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
	}
	clone() {
		return(new this.constructor).copy(this)
	}
	copy(t) {
		return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this
	}
	toJSON(t) {
		const e = void 0 === t || "string" == typeof t;
		if(!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
		const i = {
			metadata: {
				version: 4.5,
				type: "Texture",
				generator: "Texture.toJSON"
			},
			uuid: this.uuid,
			name: this.name,
			image: this.source.toJSON(t).uuid,
			mapping: this.mapping,
			repeat: [this.repeat.x, this.repeat.y],
			offset: [this.offset.x, this.offset.y],
			center: [this.center.x, this.center.y],
			rotation: this.rotation,
			wrap: [this.wrapS, this.wrapT],
			format: this.format,
			type: this.type,
			encoding: this.encoding,
			minFilter: this.minFilter,
			magFilter: this.magFilter,
			anisotropy: this.anisotropy,
			flipY: this.flipY,
			premultiplyAlpha: this.premultiplyAlpha,
			unpackAlignment: this.unpackAlignment
		};
		return "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), e || (t.textures[this.uuid] = i), i
	}
	dispose() {
		this.dispatchEvent({
			type: "dispose"
		})
	}
	transformUv(t) {
		if(300 !== this.mapping) return t;
		if(t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch(this.wrapS) {
			case 1e3:
				t.x = t.x - Math.floor(t.x);
				break;
			case 1001:
				t.x = t.x < 0 ? 0 : 1;
				break;
			case 1002:
				1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
		}
		if(t.y < 0 || t.y > 1) switch(this.wrapT) {
			case 1e3:
				t.y = t.y - Math.floor(t.y);
				break;
			case 1001:
				t.y = t.y < 0 ? 0 : 1;
				break;
			case 1002:
				1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
		}
		return this.flipY && (t.y = 1 - t.y), t
	}
	set needsUpdate(t) {
		!0 === t && (this.version++, this.source.needsUpdate = !0)
	}
}
N.DEFAULT_IMAGE = null, N.DEFAULT_MAPPING = 300;
class k {
	constructor(t = 0, e = 0, i = 0, n = 1) {
		k.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = i, this.w = n
	}
	get width() {
		return this.z
	}
	set width(t) {
		this.z = t
	}
	get height() {
		return this.w
	}
	set height(t) {
		this.w = t
	}
	set(t, e, i, n) {
		return this.x = t, this.y = e, this.z = i, this.w = n, this
	}
	setScalar(t) {
		return this.x = t, this.y = t, this.z = t, this.w = t, this
	}
	setX(t) {
		return this.x = t, this
	}
	setY(t) {
		return this.y = t, this
	}
	setZ(t) {
		return this.z = t, this
	}
	setW(t) {
		return this.w = t, this
	}
	setComponent(t, e) {
		switch(t) {
			case 0:
				this.x = e;
				break;
			case 1:
				this.y = e;
				break;
			case 2:
				this.z = e;
				break;
			case 3:
				this.w = e;
				break;
			default:
				throw new Error("index is out of range: " + t)
		}
		return this
	}
	getComponent(t) {
		switch(t) {
			case 0:
				return this.x;
			case 1:
				return this.y;
			case 2:
				return this.z;
			case 3:
				return this.w;
			default:
				throw new Error("index is out of range: " + t)
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z, this.w)
	}
	copy(t) {
		return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
	}
	add(t) {
		return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this
	}
	addScalar(t) {
		return this.x += t, this.y += t, this.z += t, this.w += t, this
	}
	addVectors(t, e) {
		return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
	}
	addScaledVector(t, e) {
		return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
	}
	sub(t) {
		return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this
	}
	subScalar(t) {
		return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
	}
	subVectors(t, e) {
		return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
	}
	multiply(t) {
		return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this
	}
	multiplyScalar(t) {
		return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
	}
	applyMatrix4(t) {
		const e = this.x,
			i = this.y,
			n = this.z,
			s = this.w,
			r = t.elements;
		return this.x = r[0] * e + r[4] * i + r[8] * n + r[12] * s, this.y = r[1] * e + r[5] * i + r[9] * n + r[13] * s, this.z = r[2] * e + r[6] * i + r[10] * n + r[14] * s, this.w = r[3] * e + r[7] * i + r[11] * n + r[15] * s, this
	}
	divideScalar(t) {
		return this.multiplyScalar(1 / t)
	}
	setAxisAngleFromQuaternion(t) {
		this.w = 2 * Math.acos(t.w);
		const e = Math.sqrt(1 - t.w * t.w);
		return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
	}
	setAxisAngleFromRotationMatrix(t) {
		let e, i, n, s;
		const r = .01,
			a = .1,
			o = t.elements,
			l = o[0],
			c = o[4],
			h = o[8],
			u = o[1],
			d = o[5],
			A = o[9],
			p = o[2],
			g = o[6],
			m = o[10];
		if(Math.abs(c - u) < r && Math.abs(h - p) < r && Math.abs(A - g) < r) {
			if(Math.abs(c + u) < a && Math.abs(h + p) < a && Math.abs(A + g) < a && Math.abs(l + d + m - 3) < a) return this.set(1, 0, 0, 0), this;
			e = Math.PI;
			const t = (l + 1) / 2,
				o = (d + 1) / 2,
				f = (m + 1) / 2,
				v = (c + u) / 4,
				y = (h + p) / 4,
				x = (A + g) / 4;
			return t > o && t > f ? t < r ? (i = 0, n = .707106781, s = .707106781) : (i = Math.sqrt(t), n = v / i, s = y / i) : o > f ? o < r ? (i = .707106781, n = 0, s = .707106781) : (n = Math.sqrt(o), i = v / n, s = x / n) : f < r ? (i = .707106781, n = .707106781, s = 0) : (s = Math.sqrt(f), i = y / s, n = x / s), this.set(i, n, s, e), this
		}
		let f = Math.sqrt((g - A) * (g - A) + (h - p) * (h - p) + (u - c) * (u - c));
		return Math.abs(f) < .001 && (f = 1), this.x = (g - A) / f, this.y = (h - p) / f, this.z = (u - c) / f, this.w = Math.acos((l + d + m - 1) / 2), this
	}
	min(t) {
		return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
	}
	max(t) {
		return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
	}
	clamp(t, e) {
		return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
	}
	clampScalar(t, e) {
		return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this
	}
	clampLength(t, e) {
		const i = this.length();
		return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
	}
	roundToZero() {
		return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
	}
	dot(t) {
		return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
	}
	normalize() {
		return this.divideScalar(this.length() || 1)
	}
	setLength(t) {
		return this.normalize().multiplyScalar(t)
	}
	lerp(t, e) {
		return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
	}
	lerpVectors(t, e, i) {
		return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this.z = t.z + (e.z - t.z) * i, this.w = t.w + (e.w - t.w) * i, this
	}
	equals(t) {
		return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
	}
	fromArray(t, e = 0) {
		return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
	}
	toArray(t = [], e = 0) {
		return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
	}
	fromBufferAttribute(t, e) {
		return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
	} * [Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z, yield this.w
	}
}
class O extends n {
	constructor(t, e, i = {}) {
		super(), this.isWebGLRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new k(0, 0, t, e), this.scissorTest = !1, this.viewport = new k(0, 0, t, e);
		const n = {
			width: t,
			height: e,
			depth: 1
		};
		this.texture = new N(n, i.mapping, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = void 0 !== i.generateMipmaps && i.generateMipmaps, this.texture.internalFormat = void 0 !== i.internalFormat ? i.internalFormat : null, this.texture.minFilter = void 0 !== i.minFilter ? i.minFilter : 1006, this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 !== i.stencilBuffer && i.stencilBuffer, this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null, this.samples = void 0 !== i.samples ? i.samples : 0
	}
	setSize(t, e, i = 1) {
		this.width === t && this.height === e && this.depth === i || (this.width = t, this.height = e, this.depth = i, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = i, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
	}
	clone() {
		return(new this.constructor).copy(this)
	}
	copy(t) {
		this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.texture.isRenderTargetTexture = !0;
		const e = Object.assign({}, t.texture.image);
		return this.texture.source = new P(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this
	}
	dispose() {
		this.dispatchEvent({
			type: "dispose"
		})
	}
}
class G extends N {
	constructor(t = null, e = 1, i = 1, n = 1) {
		super(null), this.isDataArrayTexture = !0, this.image = {
			data: t,
			width: e,
			height: i,
			depth: n
		}, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
	}
}
class H extends N {
	constructor(t = null, e = 1, i = 1, n = 1) {
		super(null), this.isData3DTexture = !0, this.image = {
			data: t,
			width: e,
			height: i,
			depth: n
		}, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
	}
}
class z {
	constructor(t = 0, e = 0, i = 0, n = 1) {
		this.isQuaternion = !0, this._x = t, this._y = e, this._z = i, this._w = n
	}
	static slerpFlat(t, e, i, n, s, r, a) {
		let o = i[n + 0],
			l = i[n + 1],
			c = i[n + 2],
			h = i[n + 3];
		const u = s[r + 0],
			d = s[r + 1],
			A = s[r + 2],
			p = s[r + 3];
		if(0 === a) return t[e + 0] = o, t[e + 1] = l, t[e + 2] = c, void(t[e + 3] = h);
		if(1 === a) return t[e + 0] = u, t[e + 1] = d, t[e + 2] = A, void(t[e + 3] = p);
		if(h !== p || o !== u || l !== d || c !== A) {
			let t = 1 - a;
			const e = o * u + l * d + c * A + h * p,
				i = e >= 0 ? 1 : -1,
				n = 1 - e * e;
			if(n > Number.EPSILON) {
				const s = Math.sqrt(n),
					r = Math.atan2(s, e * i);
				t = Math.sin(t * r) / s, a = Math.sin(a * r) / s
			}
			const s = a * i;
			if(o = o * t + u * s, l = l * t + d * s, c = c * t + A * s, h = h * t + p * s, t === 1 - a) {
				const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
				o *= t, l *= t, c *= t, h *= t
			}
		}
		t[e] = o, t[e + 1] = l, t[e + 2] = c, t[e + 3] = h
	}
	static multiplyQuaternionsFlat(t, e, i, n, s, r) {
		const a = i[n],
			o = i[n + 1],
			l = i[n + 2],
			c = i[n + 3],
			h = s[r],
			u = s[r + 1],
			d = s[r + 2],
			A = s[r + 3];
		return t[e] = a * A + c * h + o * d - l * u, t[e + 1] = o * A + c * u + l * h - a * d, t[e + 2] = l * A + c * d + a * u - o * h, t[e + 3] = c * A - a * h - o * u - l * d, t
	}
	get x() {
		return this._x
	}
	set x(t) {
		this._x = t, this._onChangeCallback()
	}
	get y() {
		return this._y
	}
	set y(t) {
		this._y = t, this._onChangeCallback()
	}
	get z() {
		return this._z
	}
	set z(t) {
		this._z = t, this._onChangeCallback()
	}
	get w() {
		return this._w
	}
	set w(t) {
		this._w = t, this._onChangeCallback()
	}
	set(t, e, i, n) {
		return this._x = t, this._y = e, this._z = i, this._w = n, this._onChangeCallback(), this
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._w)
	}
	copy(t) {
		return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this
	}
	setFromEuler(t, e) {
		const i = t._x,
			n = t._y,
			s = t._z,
			r = t._order,
			a = Math.cos,
			o = Math.sin,
			l = a(i / 2),
			c = a(n / 2),
			h = a(s / 2),
			u = o(i / 2),
			d = o(n / 2),
			A = o(s / 2);
		switch(r) {
			case "XYZ":
				this._x = u * c * h + l * d * A, this._y = l * d * h - u * c * A, this._z = l * c * A + u * d * h, this._w = l * c * h - u * d * A;
				break;
			case "YXZ":
				this._x = u * c * h + l * d * A, this._y = l * d * h - u * c * A, this._z = l * c * A - u * d * h, this._w = l * c * h + u * d * A;
				break;
			case "ZXY":
				this._x = u * c * h - l * d * A, this._y = l * d * h + u * c * A, this._z = l * c * A + u * d * h, this._w = l * c * h - u * d * A;
				break;
			case "ZYX":
				this._x = u * c * h - l * d * A, this._y = l * d * h + u * c * A, this._z = l * c * A - u * d * h, this._w = l * c * h + u * d * A;
				break;
			case "YZX":
				this._x = u * c * h + l * d * A, this._y = l * d * h + u * c * A, this._z = l * c * A - u * d * h, this._w = l * c * h - u * d * A;
				break;
			case "XZY":
				this._x = u * c * h - l * d * A, this._y = l * d * h - u * c * A, this._z = l * c * A + u * d * h, this._w = l * c * h + u * d * A;
				break;
			default:
				console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + r)
		}
		return !1 !== e && this._onChangeCallback(), this
	}
	setFromAxisAngle(t, e) {
		const i = e / 2,
			n = Math.sin(i);
		return this._x = t.x * n, this._y = t.y * n, this._z = t.z * n, this._w = Math.cos(i), this._onChangeCallback(), this
	}
	setFromRotationMatrix(t) {
		const e = t.elements,
			i = e[0],
			n = e[4],
			s = e[8],
			r = e[1],
			a = e[5],
			o = e[9],
			l = e[2],
			c = e[6],
			h = e[10],
			u = i + a + h;
		if(u > 0) {
			const t = .5 / Math.sqrt(u + 1);
			this._w = .25 / t, this._x = (c - o) * t, this._y = (s - l) * t, this._z = (r - n) * t
		} else if(i > a && i > h) {
			const t = 2 * Math.sqrt(1 + i - a - h);
			this._w = (c - o) / t, this._x = .25 * t, this._y = (n + r) / t, this._z = (s + l) / t
		} else if(a > h) {
			const t = 2 * Math.sqrt(1 + a - i - h);
			this._w = (s - l) / t, this._x = (n + r) / t, this._y = .25 * t, this._z = (o + c) / t
		} else {
			const t = 2 * Math.sqrt(1 + h - i - a);
			this._w = (r - n) / t, this._x = (s + l) / t, this._y = (o + c) / t, this._z = .25 * t
		}
		return this._onChangeCallback(), this
	}
	setFromUnitVectors(t, e) {
		let i = t.dot(e) + 1;
		return i < Number.EPSILON ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = i)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = i), this.normalize()
	}
	angleTo(t) {
		return 2 * Math.acos(Math.abs(c(this.dot(t), -1, 1)))
	}
	rotateTowards(t, e) {
		const i = this.angleTo(t);
		if(0 === i) return this;
		const n = Math.min(1, e / i);
		return this.slerp(t, n), this
	}
	identity() {
		return this.set(0, 0, 0, 1)
	}
	invert() {
		return this.conjugate()
	}
	conjugate() {
		return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
	}
	dot(t) {
		return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
	}
	lengthSq() {
		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
	}
	length() {
		return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
	}
	normalize() {
		let t = this.length();
		return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this
	}
	multiply(t) {
		return this.multiplyQuaternions(this, t)
	}
	premultiply(t) {
		return this.multiplyQuaternions(t, this)
	}
	multiplyQuaternions(t, e) {
		const i = t._x,
			n = t._y,
			s = t._z,
			r = t._w,
			a = e._x,
			o = e._y,
			l = e._z,
			c = e._w;
		return this._x = i * c + r * a + n * l - s * o, this._y = n * c + r * o + s * a - i * l, this._z = s * c + r * l + i * o - n * a, this._w = r * c - i * a - n * o - s * l, this._onChangeCallback(), this
	}
	slerp(t, e) {
		if(0 === e) return this;
		if(1 === e) return this.copy(t);
		const i = this._x,
			n = this._y,
			s = this._z,
			r = this._w;
		let a = r * t._w + i * t._x + n * t._y + s * t._z;
		if(a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = r, this._x = i, this._y = n, this._z = s, this;
		const o = 1 - a * a;
		if(o <= Number.EPSILON) {
			const t = 1 - e;
			return this._w = t * r + e * this._w, this._x = t * i + e * this._x, this._y = t * n + e * this._y, this._z = t * s + e * this._z, this.normalize(), this._onChangeCallback(), this
		}
		const l = Math.sqrt(o),
			c = Math.atan2(l, a),
			h = Math.sin((1 - e) * c) / l,
			u = Math.sin(e * c) / l;
		return this._w = r * h + this._w * u, this._x = i * h + this._x * u, this._y = n * h + this._y * u, this._z = s * h + this._z * u, this._onChangeCallback(), this
	}
	slerpQuaternions(t, e, i) {
		return this.copy(t).slerp(e, i)
	}
	random() {
		const t = Math.random(),
			e = Math.sqrt(1 - t),
			i = Math.sqrt(t),
			n = 2 * Math.PI * Math.random(),
			s = 2 * Math.PI * Math.random();
		return this.set(e * Math.cos(n), i * Math.sin(s), i * Math.cos(s), e * Math.sin(n))
	}
	equals(t) {
		return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
	}
	fromArray(t, e = 0) {
		return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this
	}
	toArray(t = [], e = 0) {
		return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
	}
	fromBufferAttribute(t, e) {
		return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this
	}
	_onChange(t) {
		return this._onChangeCallback = t, this
	}
	_onChangeCallback() {} * [Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._w
	}
}
class V {
	constructor(t = 0, e = 0, i = 0) {
		V.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = i
	}
	set(t, e, i) {
		return void 0 === i && (i = this.z), this.x = t, this.y = e, this.z = i, this
	}
	setScalar(t) {
		return this.x = t, this.y = t, this.z = t, this
	}
	setX(t) {
		return this.x = t, this
	}
	setY(t) {
		return this.y = t, this
	}
	setZ(t) {
		return this.z = t, this
	}
	setComponent(t, e) {
		switch(t) {
			case 0:
				this.x = e;
				break;
			case 1:
				this.y = e;
				break;
			case 2:
				this.z = e;
				break;
			default:
				throw new Error("index is out of range: " + t)
		}
		return this
	}
	getComponent(t) {
		switch(t) {
			case 0:
				return this.x;
			case 1:
				return this.y;
			case 2:
				return this.z;
			default:
				throw new Error("index is out of range: " + t)
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z)
	}
	copy(t) {
		return this.x = t.x, this.y = t.y, this.z = t.z, this
	}
	add(t) {
		return this.x += t.x, this.y += t.y, this.z += t.z, this
	}
	addScalar(t) {
		return this.x += t, this.y += t, this.z += t, this
	}
	addVectors(t, e) {
		return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
	}
	addScaledVector(t, e) {
		return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
	}
	sub(t) {
		return this.x -= t.x, this.y -= t.y, this.z -= t.z, this
	}
	subScalar(t) {
		return this.x -= t, this.y -= t, this.z -= t, this
	}
	subVectors(t, e) {
		return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
	}
	multiply(t) {
		return this.x *= t.x, this.y *= t.y, this.z *= t.z, this
	}
	multiplyScalar(t) {
		return this.x *= t, this.y *= t, this.z *= t, this
	}
	multiplyVectors(t, e) {
		return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
	}
	applyEuler(t) {
		return this.applyQuaternion(q.setFromEuler(t))
	}
	applyAxisAngle(t, e) {
		return this.applyQuaternion(q.setFromAxisAngle(t, e))
	}
	applyMatrix3(t) {
		const e = this.x,
			i = this.y,
			n = this.z,
			s = t.elements;
		return this.x = s[0] * e + s[3] * i + s[6] * n, this.y = s[1] * e + s[4] * i + s[7] * n, this.z = s[2] * e + s[5] * i + s[8] * n, this
	}
	applyNormalMatrix(t) {
		return this.applyMatrix3(t).normalize()
	}
	applyMatrix4(t) {
		const e = this.x,
			i = this.y,
			n = this.z,
			s = t.elements,
			r = 1 / (s[3] * e + s[7] * i + s[11] * n + s[15]);
		return this.x = (s[0] * e + s[4] * i + s[8] * n + s[12]) * r, this.y = (s[1] * e + s[5] * i + s[9] * n + s[13]) * r, this.z = (s[2] * e + s[6] * i + s[10] * n + s[14]) * r, this
	}
	applyQuaternion(t) {
		const e = this.x,
			i = this.y,
			n = this.z,
			s = t.x,
			r = t.y,
			a = t.z,
			o = t.w,
			l = o * e + r * n - a * i,
			c = o * i + a * e - s * n,
			h = o * n + s * i - r * e,
			u = -s * e - r * i - a * n;
		return this.x = l * o + u * -s + c * -a - h * -r, this.y = c * o + u * -r + h * -s - l * -a, this.z = h * o + u * -a + l * -r - c * -s, this
	}
	project(t) {
		return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
	}
	unproject(t) {
		return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
	}
	transformDirection(t) {
		const e = this.x,
			i = this.y,
			n = this.z,
			s = t.elements;
		return this.x = s[0] * e + s[4] * i + s[8] * n, this.y = s[1] * e + s[5] * i + s[9] * n, this.z = s[2] * e + s[6] * i + s[10] * n, this.normalize()
	}
	divide(t) {
		return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
	}
	divideScalar(t) {
		return this.multiplyScalar(1 / t)
	}
	min(t) {
		return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
	}
	max(t) {
		return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
	}
	clamp(t, e) {
		return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
	}
	clampScalar(t, e) {
		return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this
	}
	clampLength(t, e) {
		const i = this.length();
		return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
	}
	roundToZero() {
		return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
	}
	dot(t) {
		return this.x * t.x + this.y * t.y + this.z * t.z
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
	}
	normalize() {
		return this.divideScalar(this.length() || 1)
	}
	setLength(t) {
		return this.normalize().multiplyScalar(t)
	}
	lerp(t, e) {
		return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
	}
	lerpVectors(t, e, i) {
		return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this.z = t.z + (e.z - t.z) * i, this
	}
	cross(t) {
		return this.crossVectors(this, t)
	}
	crossVectors(t, e) {
		const i = t.x,
			n = t.y,
			s = t.z,
			r = e.x,
			a = e.y,
			o = e.z;
		return this.x = n * o - s * a, this.y = s * r - i * o, this.z = i * a - n * r, this
	}
	projectOnVector(t) {
		const e = t.lengthSq();
		if(0 === e) return this.set(0, 0, 0);
		const i = t.dot(this) / e;
		return this.copy(t).multiplyScalar(i)
	}
	projectOnPlane(t) {
		return W.copy(this).projectOnVector(t), this.sub(W)
	}
	reflect(t) {
		return this.sub(W.copy(t).multiplyScalar(2 * this.dot(t)))
	}
	angleTo(t) {
		const e = Math.sqrt(this.lengthSq() * t.lengthSq());
		if(0 === e) return Math.PI / 2;
		const i = this.dot(t) / e;
		return Math.acos(c(i, -1, 1))
	}
	distanceTo(t) {
		return Math.sqrt(this.distanceToSquared(t))
	}
	distanceToSquared(t) {
		const e = this.x - t.x,
			i = this.y - t.y,
			n = this.z - t.z;
		return e * e + i * i + n * n
	}
	manhattanDistanceTo(t) {
		return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
	}
	setFromSpherical(t) {
		return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
	}
	setFromSphericalCoords(t, e, i) {
		const n = Math.sin(e) * t;
		return this.x = n * Math.sin(i), this.y = Math.cos(e) * t, this.z = n * Math.cos(i), this
	}
	setFromCylindrical(t) {
		return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
	}
	setFromCylindricalCoords(t, e, i) {
		return this.x = t * Math.sin(e), this.y = i, this.z = t * Math.cos(e), this
	}
	setFromMatrixPosition(t) {
		const e = t.elements;
		return this.x = e[12], this.y = e[13], this.z = e[14], this
	}
	setFromMatrixScale(t) {
		const e = this.setFromMatrixColumn(t, 0).length(),
			i = this.setFromMatrixColumn(t, 1).length(),
			n = this.setFromMatrixColumn(t, 2).length();
		return this.x = e, this.y = i, this.z = n, this
	}
	setFromMatrixColumn(t, e) {
		return this.fromArray(t.elements, 4 * e)
	}
	setFromMatrix3Column(t, e) {
		return this.fromArray(t.elements, 3 * e)
	}
	setFromEuler(t) {
		return this.x = t._x, this.y = t._y, this.z = t._z, this
	}
	equals(t) {
		return t.x === this.x && t.y === this.y && t.z === this.z
	}
	fromArray(t, e = 0) {
		return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
	}
	toArray(t = [], e = 0) {
		return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
	}
	fromBufferAttribute(t, e) {
		return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
	}
	randomDirection() {
		const t = 2 * (Math.random() - .5),
			e = Math.random() * Math.PI * 2,
			i = Math.sqrt(1 - t * * 2);
		return this.x = i * Math.cos(e), this.y = i * Math.sin(e), this.z = t, this
	} * [Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z
	}
}
const W = new V,
	q = new z;
class j {
	constructor(t = new V(1 / 0, 1 / 0, 1 / 0), e = new V(-1 / 0, -1 / 0, -1 / 0)) {
		this.isBox3 = !0, this.min = t, this.max = e
	}
	set(t, e) {
		return this.min.copy(t), this.max.copy(e), this
	}
	setFromArray(t) {
		let e = 1 / 0,
			i = 1 / 0,
			n = 1 / 0,
			s = -1 / 0,
			r = -1 / 0,
			a = -1 / 0;
		for(let o = 0, l = t.length; o < l; o += 3) {
			const l = t[o],
				c = t[o + 1],
				h = t[o + 2];
			l < e && (e = l), c < i && (i = c), h < n && (n = h), l > s && (s = l), c > r && (r = c), h > a && (a = h)
		}
		return this.min.set(e, i, n), this.max.set(s, r, a), this
	}
	setFromBufferAttribute(t) {
		let e = 1 / 0,
			i = 1 / 0,
			n = 1 / 0,
			s = -1 / 0,
			r = -1 / 0,
			a = -1 / 0;
		for(let o = 0, l = t.count; o < l; o++) {
			const l = t.getX(o),
				c = t.getY(o),
				h = t.getZ(o);
			l < e && (e = l), c < i && (i = c), h < n && (n = h), l > s && (s = l), c > r && (r = c), h > a && (a = h)
		}
		return this.min.set(e, i, n), this.max.set(s, r, a), this
	}
	setFromPoints(t) {
		this.makeEmpty();
		for(let e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
		return this
	}
	setFromCenterAndSize(t, e) {
		const i = J.copy(e).multiplyScalar(.5);
		return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
	}
	setFromObject(t, e = !1) {
		return this.makeEmpty(), this.expandByObject(t, e)
	}
	clone() {
		return(new this.constructor).copy(this)
	}
	copy(t) {
		return this.min.copy(t.min), this.max.copy(t.max), this
	}
	makeEmpty() {
		return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
	}
	isEmpty() {
		return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
	}
	getCenter(t) {
		return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
	}
	getSize(t) {
		return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
	}
	expandByPoint(t) {
		return this.min.min(t), this.max.max(t), this
	}
	expandByVector(t) {
		return this.min.sub(t), this.max.add(t), this
	}
	expandByScalar(t) {
		return this.min.addScalar(-t), this.max.addScalar(t), this
	}
	expandByObject(t, e = !1) {
		t.updateWorldMatrix(!1, !1);
		const i = t.geometry;
		if(void 0 !== i)
			if(e && null != i.attributes && void 0 !== i.attributes.position) {
				const e = i.attributes.position;
				for(let i = 0, n = e.count; i < n; i++) J.fromBufferAttribute(e, i).applyMatrix4(t.matrixWorld), this.expandByPoint(J)
			} else null === i.boundingBox && i.computeBoundingBox(), X.copy(i.boundingBox), X.applyMatrix4(t.matrixWorld), this.union(X);
		const n = t.children;
		for(let t = 0, i = n.length; t < i; t++) this.expandByObject(n[t], e);
		return this
	}
	containsPoint(t) {
		return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
	}
	containsBox(t) {
		return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
	}
	getParameter(t, e) {
		return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
	}
	intersectsBox(t) {
		return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
	}
	intersectsSphere(t) {
		return this.clampPoint(t.center, J), J.distanceToSquared(t.center) <= t.radius * t.radius
	}
	intersectsPlane(t) {
		let e, i;
		return t.normal.x > 0 ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, i = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= -t.constant && i >= -t.constant
	}
	intersectsTriangle(t) {
		if(this.isEmpty()) return !1;
		this.getCenter(nt), st.subVectors(this.max, nt), K.subVectors(t.a, nt), $.subVectors(t.b, nt), Z.subVectors(t.c, nt), tt.subVectors($, K), et.subVectors(Z, $), it.subVectors(K, Z);
		let e = [0, -tt.z, tt.y, 0, -et.z, et.y, 0, -it.z, it.y, tt.z, 0, -tt.x, et.z, 0, -et.x, it.z, 0, -it.x, -tt.y, tt.x, 0, -et.y, et.x, 0, -it.y, it.x, 0];
		return !!ot(e, K, $, Z, st) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!ot(e, K, $, Z, st) && (rt.crossVectors(tt, et), e = [rt.x, rt.y, rt.z], ot(e, K, $, Z, st)))
	}
	clampPoint(t, e) {
		return e.copy(t).clamp(this.min, this.max)
	}
	distanceToPoint(t) {
		return J.copy(t).clamp(this.min, this.max).sub(t).length()
	}
	getBoundingSphere(t) {
		return this.getCenter(t.center), t.radius = .5 * this.getSize(J).length(), t
	}
	intersect(t) {
		return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
	}
	union(t) {
		return this.min.min(t.min), this.max.max(t.max), this
	}
	applyMatrix4(t) {
		return this.isEmpty() || (Y[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Y[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Y[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Y[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Y[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Y[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Y[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Y[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Y)), this
	}
	translate(t) {
		return this.min.add(t), this.max.add(t), this
	}
	equals(t) {
		return t.min.equals(this.min) && t.max.equals(this.max)
	}
}
const Y = [new V, new V, new V, new V, new V, new V, new V, new V],
	J = new V,
	X = new j,
	K = new V,
	$ = new V,
	Z = new V,
	tt = new V,
	et = new V,
	it = new V,
	nt = new V,
	st = new V,
	rt = new V,
	at = new V;

function ot(t, e, i, n, s) {
	for(let r = 0, a = t.length - 3; r <= a; r += 3) {
		at.fromArray(t, r);
		const a = s.x * Math.abs(at.x) + s.y * Math.abs(at.y) + s.z * Math.abs(at.z),
			o = e.dot(at),
			l = i.dot(at),
			c = n.dot(at);
		if(Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a) return !1
	}
	return !0
}
const lt = new j,
	ct = new V,
	ht = new V,
	ut = new V;
class dt {
	constructor(t = new V, e = -1) {
		this.center = t, this.radius = e
	}
	set(t, e) {
		return this.center.copy(t), this.radius = e, this
	}
	setFromPoints(t, e) {
		const i = this.center;
		void 0 !== e ? i.copy(e) : lt.setFromPoints(t).getCenter(i);
		let n = 0;
		for(let e = 0, s = t.length; e < s; e++) n = Math.max(n, i.distanceToSquared(t[e]));
		return this.radius = Math.sqrt(n), this
	}
	copy(t) {
		return this.center.copy(t.center), this.radius = t.radius, this
	}
	isEmpty() {
		return this.radius < 0
	}
	makeEmpty() {
		return this.center.set(0, 0, 0), this.radius = -1, this
	}
	containsPoint(t) {
		return t.distanceToSquared(this.center) <= this.radius * this.radius
	}
	distanceToPoint(t) {
		return t.distanceTo(this.center) - this.radius
	}
	intersectsSphere(t) {
		const e = this.radius + t.radius;
		return t.center.distanceToSquared(this.center) <= e * e
	}
	intersectsBox(t) {
		return t.intersectsSphere(this)
	}
	intersectsPlane(t) {
		return Math.abs(t.distanceToPoint(this.center)) <= this.radius
	}
	clampPoint(t, e) {
		const i = this.center.distanceToSquared(t);
		return e.copy(t), i > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
	}
	getBoundingBox(t) {
		return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t)
	}
	applyMatrix4(t) {
		return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
	}
	translate(t) {
		return this.center.add(t), this
	}
	expandByPoint(t) {
		ut.subVectors(t, this.center);
		const e = ut.lengthSq();
		if(e > this.radius * this.radius) {
			const t = Math.sqrt(e),
				i = .5 * (t - this.radius);
			this.center.add(ut.multiplyScalar(i / t)), this.radius += i
		}
		return this
	}
	union(t) {
		return !0 === this.center.equals(t.center) ? ht.set(0, 0, 1).multiplyScalar(t.radius) : ht.subVectors(t.center, this.center).normalize().multiplyScalar(t.radius), this.expandByPoint(ct.copy(t.center).add(ht)), this.expandByPoint(ct.copy(t.center).sub(ht)), this
	}
	equals(t) {
		return t.center.equals(this.center) && t.radius === this.radius
	}
	clone() {
		return(new this.constructor).copy(this)
	}
}
const At = new V,
	pt = new V,
	gt = new V,
	mt = new V,
	ft = new V,
	vt = new V,
	yt = new V;
class xt {
	constructor(t = new V, e = new V(0, 0, -1)) {
		this.origin = t, this.direction = e
	}
	set(t, e) {
		return this.origin.copy(t), this.direction.copy(e), this
	}
	copy(t) {
		return this.origin.copy(t.origin), this.direction.copy(t.direction), this
	}
	at(t, e) {
		return e.copy(this.direction).multiplyScalar(t).add(this.origin)
	}
	lookAt(t) {
		return this.direction.copy(t).sub(this.origin).normalize(), this
	}
	recast(t) {
		return this.origin.copy(this.at(t, At)), this
	}
	closestPointToPoint(t, e) {
		e.subVectors(t, this.origin);
		const i = e.dot(this.direction);
		return i < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(i).add(this.origin)
	}
	distanceToPoint(t) {
		return Math.sqrt(this.distanceSqToPoint(t))
	}
	distanceSqToPoint(t) {
		const e = At.subVectors(t, this.origin).dot(this.direction);
		return e < 0 ? this.origin.distanceToSquared(t) : (At.copy(this.direction).multiplyScalar(e).add(this.origin), At.distanceToSquared(t))
	}
	distanceSqToSegment(t, e, i, n) {
		pt.copy(t).add(e).multiplyScalar(.5), gt.copy(e).sub(t).normalize(), mt.copy(this.origin).sub(pt);
		const s = .5 * t.distanceTo(e),
			r = -this.direction.dot(gt),
			a = mt.dot(this.direction),
			o = -mt.dot(gt),
			l = mt.lengthSq(),
			c = Math.abs(1 - r * r);
		let h, u, d, A;
		if(c > 0)
			if(h = r * o - a, u = r * a - o, A = s * c, h >= 0)
				if(u >= -A)
					if(u <= A) {
						const t = 1 / c;
						h *= t, u *= t, d = h * (h + r * u + 2 * a) + u * (r * h + u + 2 * o) + l
					} else u = s, h = Math.max(0, -(r * u + a)), d = -h * h + u * (u + 2 * o) + l;
		else u = -s, h = Math.max(0, -(r * u + a)), d = -h * h + u * (u + 2 * o) + l;
		else u <= -A ? (h = Math.max(0, -(-r * s + a)), u = h > 0 ? -s : Math.min(Math.max(-s, -o), s), d = -h * h + u * (u + 2 * o) + l) : u <= A ? (h = 0, u = Math.min(Math.max(-s, -o), s), d = u * (u + 2 * o) + l) : (h = Math.max(0, -(r * s + a)), u = h > 0 ? s : Math.min(Math.max(-s, -o), s), d = -h * h + u * (u + 2 * o) + l);
		else u = r > 0 ? -s : s, h = Math.max(0, -(r * u + a)), d = -h * h + u * (u + 2 * o) + l;
		return i && i.copy(this.direction).multiplyScalar(h).add(this.origin), n && n.copy(gt).multiplyScalar(u).add(pt), d
	}
	intersectSphere(t, e) {
		At.subVectors(t.center, this.origin);
		const i = At.dot(this.direction),
			n = At.dot(At) - i * i,
			s = t.radius * t.radius;
		if(n > s) return null;
		const r = Math.sqrt(s - n),
			a = i - r,
			o = i + r;
		return a < 0 && o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e)
	}
	intersectsSphere(t) {
		return this.distanceSqToPoint(t.center) <= t.radius * t.radius
	}
	distanceToPlane(t) {
		const e = t.normal.dot(this.direction);
		if(0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
		const i = -(this.origin.dot(t.normal) + t.constant) / e;
		return i >= 0 ? i : null
	}
	intersectPlane(t, e) {
		const i = this.distanceToPlane(t);
		return null === i ? null : this.at(i, e)
	}
	intersectsPlane(t) {
		const e = t.distanceToPoint(this.origin);
		if(0 === e) return !0;
		return t.normal.dot(this.direction) * e < 0
	}
	intersectBox(t, e) {
		let i, n, s, r, a, o;
		const l = 1 / this.direction.x,
			c = 1 / this.direction.y,
			h = 1 / this.direction.z,
			u = this.origin;
		return l >= 0 ? (i = (t.min.x - u.x) * l, n = (t.max.x - u.x) * l) : (i = (t.max.x - u.x) * l, n = (t.min.x - u.x) * l), c >= 0 ? (s = (t.min.y - u.y) * c, r = (t.max.y - u.y) * c) : (s = (t.max.y - u.y) * c, r = (t.min.y - u.y) * c), i > r || s > n ? null : ((s > i || i != i) && (i = s), (r < n || n != n) && (n = r), h >= 0 ? (a = (t.min.z - u.z) * h, o = (t.max.z - u.z) * h) : (a = (t.max.z - u.z) * h, o = (t.min.z - u.z) * h), i > o || a > n ? null : ((a > i || i != i) && (i = a), (o < n || n != n) && (n = o), n < 0 ? null : this.at(i >= 0 ? i : n, e)))
	}
	intersectsBox(t) {
		return null !== this.intersectBox(t, At)
	}
	intersectTriangle(t, e, i, n, s) {
		ft.subVectors(e, t), vt.subVectors(i, t), yt.crossVectors(ft, vt);
		let r, a = this.direction.dot(yt);
		if(a > 0) {
			if(n) return null;
			r = 1
		} else {
			if(!(a < 0)) return null;
			r = -1, a = -a
		}
		mt.subVectors(this.origin, t);
		const o = r * this.direction.dot(vt.crossVectors(mt, vt));
		if(o < 0) return null;
		const l = r * this.direction.dot(ft.cross(mt));
		if(l < 0) return null;
		if(o + l > a) return null;
		const c = -r * mt.dot(yt);
		return c < 0 ? null : this.at(c / a, s)
	}
	applyMatrix4(t) {
		return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
	}
	equals(t) {
		return t.origin.equals(this.origin) && t.direction.equals(this.direction)
	}
	clone() {
		return(new this.constructor).copy(this)
	}
}
class _t {
	constructor() {
		_t.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
	}
	set(t, e, i, n, s, r, a, o, l, c, h, u, d, A, p, g) {
		const m = this.elements;
		return m[0] = t, m[4] = e, m[8] = i, m[12] = n, m[1] = s, m[5] = r, m[9] = a, m[13] = o, m[2] = l, m[6] = c, m[10] = h, m[14] = u, m[3] = d, m[7] = A, m[11] = p, m[15] = g, this
	}
	identity() {
		return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
	}
	clone() {
		return(new _t).fromArray(this.elements)
	}
	copy(t) {
		const e = this.elements,
			i = t.elements;
		return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this
	}
	copyPosition(t) {
		const e = this.elements,
			i = t.elements;
		return e[12] = i[12], e[13] = i[13], e[14] = i[14], this
	}
	setFromMatrix3(t) {
		const e = t.elements;
		return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this
	}
	extractBasis(t, e, i) {
		return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this
	}
	makeBasis(t, e, i) {
		return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this
	}
	extractRotation(t) {
		const e = this.elements,
			i = t.elements,
			n = 1 / Et.setFromMatrixColumn(t, 0).length(),
			s = 1 / Et.setFromMatrixColumn(t, 1).length(),
			r = 1 / Et.setFromMatrixColumn(t, 2).length();
		return e[0] = i[0] * n, e[1] = i[1] * n, e[2] = i[2] * n, e[3] = 0, e[4] = i[4] * s, e[5] = i[5] * s, e[6] = i[6] * s, e[7] = 0, e[8] = i[8] * r, e[9] = i[9] * r, e[10] = i[10] * r, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
	}
	makeRotationFromEuler(t) {
		const e = this.elements,
			i = t.x,
			n = t.y,
			s = t.z,
			r = Math.cos(i),
			a = Math.sin(i),
			o = Math.cos(n),
			l = Math.sin(n),
			c = Math.cos(s),
			h = Math.sin(s);
		if("XYZ" === t.order) {
			const t = r * c,
				i = r * h,
				n = a * c,
				s = a * h;
			e[0] = o * c, e[4] = -o * h, e[8] = l, e[1] = i + n * l, e[5] = t - s * l, e[9] = -a * o, e[2] = s - t * l, e[6] = n + i * l, e[10] = r * o
		} else if("YXZ" === t.order) {
			const t = o * c,
				i = o * h,
				n = l * c,
				s = l * h;
			e[0] = t + s * a, e[4] = n * a - i, e[8] = r * l, e[1] = r * h, e[5] = r * c, e[9] = -a, e[2] = i * a - n, e[6] = s + t * a, e[10] = r * o
		} else if("ZXY" === t.order) {
			const t = o * c,
				i = o * h,
				n = l * c,
				s = l * h;
			e[0] = t - s * a, e[4] = -r * h, e[8] = n + i * a, e[1] = i + n * a, e[5] = r * c, e[9] = s - t * a, e[2] = -r * l, e[6] = a, e[10] = r * o
		} else if("ZYX" === t.order) {
			const t = r * c,
				i = r * h,
				n = a * c,
				s = a * h;
			e[0] = o * c, e[4] = n * l - i, e[8] = t * l + s, e[1] = o * h, e[5] = s * l + t, e[9] = i * l - n, e[2] = -l, e[6] = a * o, e[10] = r * o
		} else if("YZX" === t.order) {
			const t = r * o,
				i = r * l,
				n = a * o,
				s = a * l;
			e[0] = o * c, e[4] = s - t * h, e[8] = n * h + i, e[1] = h, e[5] = r * c, e[9] = -a * c, e[2] = -l * c, e[6] = i * h + n, e[10] = t - s * h
		} else if("XZY" === t.order) {
			const t = r * o,
				i = r * l,
				n = a * o,
				s = a * l;
			e[0] = o * c, e[4] = -h, e[8] = l * c, e[1] = t * h + s, e[5] = r * c, e[9] = i * h - n, e[2] = n * h - i, e[6] = a * c, e[10] = s * h + t
		}
		return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
	}
	makeRotationFromQuaternion(t) {
		return this.compose(bt, t, It)
	}
	lookAt(t, e, i) {
		const n = this.elements;
		return Mt.subVectors(t, e), 0 === Mt.lengthSq() && (Mt.z = 1), Mt.normalize(), Ct.crossVectors(i, Mt), 0 === Ct.lengthSq() && (1 === Math.abs(i.z) ? Mt.x += 1e-4 : Mt.z += 1e-4, Mt.normalize(), Ct.crossVectors(i, Mt)), Ct.normalize(), St.crossVectors(Mt, Ct), n[0] = Ct.x, n[4] = St.x, n[8] = Mt.x, n[1] = Ct.y, n[5] = St.y, n[9] = Mt.y, n[2] = Ct.z, n[6] = St.z, n[10] = Mt.z, this
	}
	multiply(t) {
		return this.multiplyMatrices(this, t)
	}
	premultiply(t) {
		return this.multiplyMatrices(t, this)
	}
	multiplyMatrices(t, e) {
		const i = t.elements,
			n = e.elements,
			s = this.elements,
			r = i[0],
			a = i[4],
			o = i[8],
			l = i[12],
			c = i[1],
			h = i[5],
			u = i[9],
			d = i[13],
			A = i[2],
			p = i[6],
			g = i[10],
			m = i[14],
			f = i[3],
			v = i[7],
			y = i[11],
			x = i[15],
			_ = n[0],
			E = n[4],
			w = n[8],
			b = n[12],
			I = n[1],
			C = n[5],
			S = n[9],
			M = n[13],
			B = n[2],
			T = n[6],
			R = n[10],
			D = n[14],
			L = n[3],
			Q = n[7],
			P = n[11],
			F = n[15];
		return s[0] = r * _ + a * I + o * B + l * L, s[4] = r * E + a * C + o * T + l * Q, s[8] = r * w + a * S + o * R + l * P, s[12] = r * b + a * M + o * D + l * F, s[1] = c * _ + h * I + u * B + d * L, s[5] = c * E + h * C + u * T + d * Q, s[9] = c * w + h * S + u * R + d * P, s[13] = c * b + h * M + u * D + d * F, s[2] = A * _ + p * I + g * B + m * L, s[6] = A * E + p * C + g * T + m * Q, s[10] = A * w + p * S + g * R + m * P, s[14] = A * b + p * M + g * D + m * F, s[3] = f * _ + v * I + y * B + x * L, s[7] = f * E + v * C + y * T + x * Q, s[11] = f * w + v * S + y * R + x * P, s[15] = f * b + v * M + y * D + x * F, this
	}
	multiplyScalar(t) {
		const e = this.elements;
		return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
	}
	determinant() {
		const t = this.elements,
			e = t[0],
			i = t[4],
			n = t[8],
			s = t[12],
			r = t[1],
			a = t[5],
			o = t[9],
			l = t[13],
			c = t[2],
			h = t[6],
			u = t[10],
			d = t[14];
		return t[3] * (+s * o * h - n * l * h - s * a * u + i * l * u + n * a * d - i * o * d) + t[7] * (+e * o * d - e * l * u + s * r * u - n * r * d + n * l * c - s * o * c) + t[11] * (+e * l * h - e * a * d - s * r * h + i * r * d + s * a * c - i * l * c) + t[15] * (-n * a * c - e * o * h + e * a * u + n * r * h - i * r * u + i * o * c)
	}
	transpose() {
		const t = this.elements;
		let e;
		return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
	}
	setPosition(t, e, i) {
		const n = this.elements;
		return t.isVector3 ? (n[12] = t.x, n[13] = t.y, n[14] = t.z) : (n[12] = t, n[13] = e, n[14] = i), this
	}
	invert() {
		const t = this.elements,
			e = t[0],
			i = t[1],
			n = t[2],
			s = t[3],
			r = t[4],
			a = t[5],
			o = t[6],
			l = t[7],
			c = t[8],
			h = t[9],
			u = t[10],
			d = t[11],
			A = t[12],
			p = t[13],
			g = t[14],
			m = t[15],
			f = h * g * l - p * u * l + p * o * d - a * g * d - h * o * m + a * u * m,
			v = A * u * l - c * g * l - A * o * d + r * g * d + c * o * m - r * u * m,
			y = c * p * l - A * h * l + A * a * d - r * p * d - c * a * m + r * h * m,
			x = A * h * o - c * p * o - A * a * u + r * p * u + c * a * g - r * h * g,
			_ = e * f + i * v + n * y + s * x;
		if(0 === _) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		const E = 1 / _;
		return t[0] = f * E, t[1] = (p * u * s - h * g * s - p * n * d + i * g * d + h * n * m - i * u * m) * E, t[2] = (a * g * s - p * o * s + p * n * l - i * g * l - a * n * m + i * o * m) * E, t[3] = (h * o * s - a * u * s - h * n * l + i * u * l + a * n * d - i * o * d) * E, t[4] = v * E, t[5] = (c * g * s - A * u * s + A * n * d - e * g * d - c * n * m + e * u * m) * E, t[6] = (A * o * s - r * g * s - A * n * l + e * g * l + r * n * m - e * o * m) * E, t[7] = (r * u * s - c * o * s + c * n * l - e * u * l - r * n * d + e * o * d) * E, t[8] = y * E, t[9] = (A * h * s - c * p * s - A * i * d + e * p * d + c * i * m - e * h * m) * E, t[10] = (r * p * s - A * a * s + A * i * l - e * p * l - r * i * m + e * a * m) * E, t[11] = (c * a * s - r * h * s - c * i * l + e * h * l + r * i * d - e * a * d) * E, t[12] = x * E, t[13] = (c * p * n - A * h * n + A * i * u - e * p * u - c * i * g + e * h * g) * E, t[14] = (A * a * n - r * p * n - A * i * o + e * p * o + r * i * g - e * a * g) * E, t[15] = (r * h * n - c * a * n + c * i * o - e * h * o - r * i * u + e * a * u) * E, this
	}
	scale(t) {
		const e = this.elements,
			i = t.x,
			n = t.y,
			s = t.z;
		return e[0] *= i, e[4] *= n, e[8] *= s, e[1] *= i, e[5] *= n, e[9] *= s, e[2] *= i, e[6] *= n, e[10] *= s, e[3] *= i, e[7] *= n, e[11] *= s, this
	}
	getMaxScaleOnAxis() {
		const t = this.elements,
			e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
			i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
			n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
		return Math.sqrt(Math.max(e, i, n))
	}
	makeTranslation(t, e, i) {
		return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this
	}
	makeRotationX(t) {
		const e = Math.cos(t),
			i = Math.sin(t);
		return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this
	}
	makeRotationY(t) {
		const e = Math.cos(t),
			i = Math.sin(t);
		return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this
	}
	makeRotationZ(t) {
		const e = Math.cos(t),
			i = Math.sin(t);
		return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
	}
	makeRotationAxis(t, e) {
		const i = Math.cos(e),
			n = Math.sin(e),
			s = 1 - i,
			r = t.x,
			a = t.y,
			o = t.z,
			l = s * r,
			c = s * a;
		return this.set(l * r + i, l * a - n * o, l * o + n * a, 0, l * a + n * o, c * a + i, c * o - n * r, 0, l * o - n * a, c * o + n * r, s * o * o + i, 0, 0, 0, 0, 1), this
	}
	makeScale(t, e, i) {
		return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
	}
	makeShear(t, e, i, n, s, r) {
		return this.set(1, i, s, 0, t, 1, r, 0, e, n, 1, 0, 0, 0, 0, 1), this
	}
	compose(t, e, i) {
		const n = this.elements,
			s = e._x,
			r = e._y,
			a = e._z,
			o = e._w,
			l = s + s,
			c = r + r,
			h = a + a,
			u = s * l,
			d = s * c,
			A = s * h,
			p = r * c,
			g = r * h,
			m = a * h,
			f = o * l,
			v = o * c,
			y = o * h,
			x = i.x,
			_ = i.y,
			E = i.z;
		return n[0] = (1 - (p + m)) * x, n[1] = (d + y) * x, n[2] = (A - v) * x, n[3] = 0, n[4] = (d - y) * _, n[5] = (1 - (u + m)) * _, n[6] = (g + f) * _, n[7] = 0, n[8] = (A + v) * E, n[9] = (g - f) * E, n[10] = (1 - (u + p)) * E, n[11] = 0, n[12] = t.x, n[13] = t.y, n[14] = t.z, n[15] = 1, this
	}
	decompose(t, e, i) {
		const n = this.elements;
		let s = Et.set(n[0], n[1], n[2]).length();
		const r = Et.set(n[4], n[5], n[6]).length(),
			a = Et.set(n[8], n[9], n[10]).length();
		this.determinant() < 0 && (s = -s), t.x = n[12], t.y = n[13], t.z = n[14], wt.copy(this);
		const o = 1 / s,
			l = 1 / r,
			c = 1 / a;
		return wt.elements[0] *= o, wt.elements[1] *= o, wt.elements[2] *= o, wt.elements[4] *= l, wt.elements[5] *= l, wt.elements[6] *= l, wt.elements[8] *= c, wt.elements[9] *= c, wt.elements[10] *= c, e.setFromRotationMatrix(wt), i.x = s, i.y = r, i.z = a, this
	}
	makePerspective(t, e, i, n, s, r) {
		const a = this.elements,
			o = 2 * s / (e - t),
			l = 2 * s / (i - n),
			c = (e + t) / (e - t),
			h = (i + n) / (i - n),
			u = -(r + s) / (r - s),
			d = -2 * r * s / (r - s);
		return a[0] = o, a[4] = 0, a[8] = c, a[12] = 0, a[1] = 0, a[5] = l, a[9] = h, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = u, a[14] = d, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this
	}
	makeOrthographic(t, e, i, n, s, r) {
		const a = this.elements,
			o = 1 / (e - t),
			l = 1 / (i - n),
			c = 1 / (r - s),
			h = (e + t) * o,
			u = (i + n) * l,
			d = (r + s) * c;
		return a[0] = 2 * o, a[4] = 0, a[8] = 0, a[12] = -h, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -u, a[2] = 0, a[6] = 0, a[10] = -2 * c, a[14] = -d, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this
	}
	equals(t) {
		const e = this.elements,
			i = t.elements;
		for(let t = 0; t < 16; t++)
			if(e[t] !== i[t]) return !1;
		return !0
	}
	fromArray(t, e = 0) {
		for(let i = 0; i < 16; i++) this.elements[i] = t[i + e];
		return this
	}
	toArray(t = [], e = 0) {
		const i = this.elements;
		return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t
	}
}
const Et = new V,
	wt = new _t,
	bt = new V(0, 0, 0),
	It = new V(1, 1, 1),
	Ct = new V,
	St = new V,
	Mt = new V,
	Bt = new _t,
	Tt = new z;
class Rt {
	constructor(t = 0, e = 0, i = 0, n = Rt.DefaultOrder) {
		this.isEuler = !0, this._x = t, this._y = e, this._z = i, this._order = n
	}
	get x() {
		return this._x
	}
	set x(t) {
		this._x = t, this._onChangeCallback()
	}
	get y() {
		return this._y
	}
	set y(t) {
		this._y = t, this._onChangeCallback()
	}
	get z() {
		return this._z
	}
	set z(t) {
		this._z = t, this._onChangeCallback()
	}
	get order() {
		return this._order
	}
	set order(t) {
		this._order = t, this._onChangeCallback()
	}
	set(t, e, i, n = this._order) {
		return this._x = t, this._y = e, this._z = i, this._order = n, this._onChangeCallback(), this
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._order)
	}
	copy(t) {
		return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this
	}
	setFromRotationMatrix(t, e = this._order, i = !0) {
		const n = t.elements,
			s = n[0],
			r = n[4],
			a = n[8],
			o = n[1],
			l = n[5],
			h = n[9],
			u = n[2],
			d = n[6],
			A = n[10];
		switch(e) {
			case "XYZ":
				this._y = Math.asin(c(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-h, A), this._z = Math.atan2(-r, s)) : (this._x = Math.atan2(d, l), this._z = 0);
				break;
			case "YXZ":
				this._x = Math.asin(-c(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(a, A), this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-u, s), this._z = 0);
				break;
			case "ZXY":
				this._x = Math.asin(c(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, A), this._z = Math.atan2(-r, l)) : (this._y = 0, this._z = Math.atan2(o, s));
				break;
			case "ZYX":
				this._y = Math.asin(-c(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, A), this._z = Math.atan2(o, s)) : (this._x = 0, this._z = Math.atan2(-r, l));
				break;
			case "YZX":
				this._z = Math.asin(c(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(a, A));
				break;
			case "XZY":
				this._z = Math.asin(-c(r, -1, 1)), Math.abs(r) < .9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-h, A), this._y = 0);
				break;
			default:
				console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e)
		}
		return this._order = e, !0 === i && this._onChangeCallback(), this
	}
	setFromQuaternion(t, e, i) {
		return Bt.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Bt, e, i)
	}
	setFromVector3(t, e = this._order) {
		return this.set(t.x, t.y, t.z, e)
	}
	reorder(t) {
		return Tt.setFromEuler(this), this.setFromQuaternion(Tt, t)
	}
	equals(t) {
		return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
	}
	fromArray(t) {
		return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this
	}
	toArray(t = [], e = 0) {
		return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
	}
	_onChange(t) {
		return this._onChangeCallback = t, this
	}
	_onChangeCallback() {} * [Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._order
	}
	toVector3() {
		console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")
	}
}
Rt.DefaultOrder = "XYZ", Rt.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class Dt {
	constructor() {
		this.mask = 1
	}
	set(t) {
		this.mask = (1 << t | 0) >>> 0
	}
	enable(t) {
		this.mask |= 1 << t | 0
	}
	enableAll() {
		this.mask = -1
	}
	toggle(t) {
		this.mask ^= 1 << t | 0
	}
	disable(t) {
		this.mask &= ~(1 << t | 0)
	}
	disableAll() {
		this.mask = 0
	}
	test(t) {
		return 0 != (this.mask & t.mask)
	}
	isEnabled(t) {
		return 0 != (this.mask & (1 << t | 0))
	}
}
let Lt = 0;
const Qt = new V,
	Pt = new z,
	Ft = new _t,
	Ut = new V,
	Nt = new V,
	kt = new V,
	Ot = new z,
	Gt = new V(1, 0, 0),
	Ht = new V(0, 1, 0),
	zt = new V(0, 0, 1),
	Vt = {
		type: "added"
	},
	Wt = {
		type: "removed"
	};
class qt extends n {
	constructor() {
		super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
			value: Lt++
		}), this.uuid = l(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = qt.DefaultUp.clone();
		const t = new V,
			e = new Rt,
			i = new z,
			n = new V(1, 1, 1);
		e._onChange((function() {
			i.setFromEuler(e, !1)
		})), i._onChange((function() {
			e.setFromQuaternion(i, void 0, !1)
		})), Object.defineProperties(this, {
			position: {
				configurable: !0,
				enumerable: !0,
				value: t
			},
			rotation: {
				configurable: !0,
				enumerable: !0,
				value: e
			},
			quaternion: {
				configurable: !0,
				enumerable: !0,
				value: i
			},
			scale: {
				configurable: !0,
				enumerable: !0,
				value: n
			},
			modelViewMatrix: {
				value: new _t
			},
			normalMatrix: {
				value: new y
			}
		}), this.matrix = new _t, this.matrixWorld = new _t, this.matrixAutoUpdate = qt.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = qt.DefaultMatrixWorldAutoUpdate, this.layers = new Dt, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}
	}
	onBeforeRender() {}
	onAfterRender() {}
	applyMatrix4(t) {
		this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale)
	}
	applyQuaternion(t) {
		return this.quaternion.premultiply(t), this
	}
	setRotationFromAxisAngle(t, e) {
		this.quaternion.setFromAxisAngle(t, e)
	}
	setRotationFromEuler(t) {
		this.quaternion.setFromEuler(t, !0)
	}
	setRotationFromMatrix(t) {
		this.quaternion.setFromRotationMatrix(t)
	}
	setRotationFromQuaternion(t) {
		this.quaternion.copy(t)
	}
	rotateOnAxis(t, e) {
		return Pt.setFromAxisAngle(t, e), this.quaternion.multiply(Pt), this
	}
	rotateOnWorldAxis(t, e) {
		return Pt.setFromAxisAngle(t, e), this.quaternion.premultiply(Pt), this
	}
	rotateX(t) {
		return this.rotateOnAxis(Gt, t)
	}
	rotateY(t) {
		return this.rotateOnAxis(Ht, t)
	}
	rotateZ(t) {
		return this.rotateOnAxis(zt, t)
	}
	translateOnAxis(t, e) {
		return Qt.copy(t).applyQuaternion(this.quaternion), this.position.add(Qt.multiplyScalar(e)), this
	}
	translateX(t) {
		return this.translateOnAxis(Gt, t)
	}
	translateY(t) {
		return this.translateOnAxis(Ht, t)
	}
	translateZ(t) {
		return this.translateOnAxis(zt, t)
	}
	localToWorld(t) {
		return t.applyMatrix4(this.matrixWorld)
	}
	worldToLocal(t) {
		return t.applyMatrix4(Ft.copy(this.matrixWorld).invert())
	}
	lookAt(t, e, i) {
		t.isVector3 ? Ut.copy(t) : Ut.set(t, e, i);
		const n = this.parent;
		this.updateWorldMatrix(!0, !1), Nt.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Ft.lookAt(Nt, Ut, this.up) : Ft.lookAt(Ut, Nt, this.up), this.quaternion.setFromRotationMatrix(Ft), n && (Ft.extractRotation(n.matrixWorld), Pt.setFromRotationMatrix(Ft), this.quaternion.premultiply(Pt.invert()))
	}
	add(t) {
		if(arguments.length > 1) {
			for(let t = 0; t < arguments.length; t++) this.add(arguments[t]);
			return this
		}
		return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(Vt)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
	}
	remove(t) {
		if(arguments.length > 1) {
			for(let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
			return this
		}
		const e = this.children.indexOf(t);
		return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Wt)), this
	}
	removeFromParent() {
		const t = this.parent;
		return null !== t && t.remove(this), this
	}
	clear() {
		for(let t = 0; t < this.children.length; t++) {
			const e = this.children[t];
			e.parent = null, e.dispatchEvent(Wt)
		}
		return this.children.length = 0, this
	}
	attach(t) {
		return this.updateWorldMatrix(!0, !1), Ft.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), Ft.multiply(t.parent.matrixWorld)), t.applyMatrix4(Ft), this.add(t), t.updateWorldMatrix(!1, !0), this
	}
	getObjectById(t) {
		return this.getObjectByProperty("id", t)
	}
	getObjectByName(t) {
		return this.getObjectByProperty("name", t)
	}
	getObjectByProperty(t, e) {
		if(this[t] === e) return this;
		for(let i = 0, n = this.children.length; i < n; i++) {
			const n = this.children[i].getObjectByProperty(t, e);
			if(void 0 !== n) return n
		}
	}
	getWorldPosition(t) {
		return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld)
	}
	getWorldQuaternion(t) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Nt, t, kt), t
	}
	getWorldScale(t) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Nt, Ot, t), t
	}
	getWorldDirection(t) {
		this.updateWorldMatrix(!0, !1);
		const e = this.matrixWorld.elements;
		return t.set(e[8], e[9], e[10]).normalize()
	}
	raycast() {}
	traverse(t) {
		t(this);
		const e = this.children;
		for(let i = 0, n = e.length; i < n; i++) e[i].traverse(t)
	}
	traverseVisible(t) {
		if(!1 === this.visible) return;
		t(this);
		const e = this.children;
		for(let i = 0, n = e.length; i < n; i++) e[i].traverseVisible(t)
	}
	traverseAncestors(t) {
		const e = this.parent;
		null !== e && (t(e), e.traverseAncestors(t))
	}
	updateMatrix() {
		this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
	}
	updateMatrixWorld(t) {
		this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
		const e = this.children;
		for(let i = 0, n = e.length; i < n; i++) {
			const n = e[i];
			!0 !== n.matrixWorldAutoUpdate && !0 !== t || n.updateMatrixWorld(t)
		}
	}
	updateWorldMatrix(t, e) {
		const i = this.parent;
		if(!0 === t && null !== i && !0 === i.matrixWorldAutoUpdate && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) {
			const t = this.children;
			for(let e = 0, i = t.length; e < i; e++) {
				const i = t[e];
				!0 === i.matrixWorldAutoUpdate && i.updateWorldMatrix(!1, !0)
			}
		}
	}
	toJSON(t) {
		const e = void 0 === t || "string" == typeof t,
			i = {};
		e && (t = {
			geometries: {},
			materials: {},
			textures: {},
			images: {},
			shapes: {},
			skeletons: {},
			animations: {},
			nodes: {}
		}, i.metadata = {
			version: 4.5,
			type: "Object",
			generator: "Object3D.toJSON"
		});
		const n = {};

		function s(e, i) {
			return void 0 === e[i.uuid] && (e[i.uuid] = i.toJSON(t)), i.uuid
		}
		if(n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), !0 === this.castShadow && (n.castShadow = !0), !0 === this.receiveShadow && (n.receiveShadow = !0), !1 === this.visible && (n.visible = !1), !1 === this.frustumCulled && (n.frustumCulled = !1), 0 !== this.renderOrder && (n.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), n.layers = this.layers.mask, n.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (n.matrixAutoUpdate = !1), this.isInstancedMesh && (n.type = "InstancedMesh", n.count = this.count, n.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (n.instanceColor = this.instanceColor.toJSON())), this.isScene) this.background && (this.background.isColor ? n.background = this.background.toJSON() : this.background.isTexture && (n.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && !0 !== this.environment.isRenderTargetTexture && (n.environment = this.environment.toJSON(t).uuid);
		else if(this.isMesh || this.isLine || this.isPoints) {
			n.geometry = s(t.geometries, this.geometry);
			const e = this.geometry.parameters;
			if(void 0 !== e && void 0 !== e.shapes) {
				const i = e.shapes;
				if(Array.isArray(i))
					for(let e = 0, n = i.length; e < n; e++) {
						const n = i[e];
						s(t.shapes, n)
					} else s(t.shapes, i)
			}
		}
		if(this.isSkinnedMesh && (n.bindMode = this.bindMode, n.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (s(t.skeletons, this.skeleton), n.skeleton = this.skeleton.uuid)), void 0 !== this.material)
			if(Array.isArray(this.material)) {
				const e = [];
				for(let i = 0, n = this.material.length; i < n; i++) e.push(s(t.materials, this.material[i]));
				n.material = e
			} else n.material = s(t.materials, this.material);
		if(this.children.length > 0) {
			n.children = [];
			for(let e = 0; e < this.children.length; e++) n.children.push(this.children[e].toJSON(t).object)
		}
		if(this.animations.length > 0) {
			n.animations = [];
			for(let e = 0; e < this.animations.length; e++) {
				const i = this.animations[e];
				n.animations.push(s(t.animations, i))
			}
		}
		if(e) {
			const e = r(t.geometries),
				n = r(t.materials),
				s = r(t.textures),
				a = r(t.images),
				o = r(t.shapes),
				l = r(t.skeletons),
				c = r(t.animations),
				h = r(t.nodes);
			e.length > 0 && (i.geometries = e), n.length > 0 && (i.materials = n), s.length > 0 && (i.textures = s), a.length > 0 && (i.images = a), o.length > 0 && (i.shapes = o), l.length > 0 && (i.skeletons = l), c.length > 0 && (i.animations = c), h.length > 0 && (i.nodes = h)
		}
		return i.object = n, i;

		function r(t) {
			const e = [];
			for(const i in t) {
				const n = t[i];
				delete n.metadata, e.push(n)
			}
			return e
		}
	}
	clone(t) {
		return(new this.constructor).copy(this, t)
	}
	copy(t, e = !0) {
		if(this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
			for(let e = 0; e < t.children.length; e++) {
				const i = t.children[e];
				this.add(i.clone())
			}
		return this
	}
}
qt.DefaultUp = new V(0, 1, 0), qt.DefaultMatrixAutoUpdate = !0, qt.DefaultMatrixWorldAutoUpdate = !0;
const jt = new V,
	Yt = new V,
	Jt = new V,
	Xt = new V,
	Kt = new V,
	$t = new V,
	Zt = new V,
	te = new V,
	ee = new V,
	ie = new V;
class ne {
	constructor(t = new V, e = new V, i = new V) {
		this.a = t, this.b = e, this.c = i
	}
	static getNormal(t, e, i, n) {
		n.subVectors(i, e), jt.subVectors(t, e), n.cross(jt);
		const s = n.lengthSq();
		return s > 0 ? n.multiplyScalar(1 / Math.sqrt(s)) : n.set(0, 0, 0)
	}
	static getBarycoord(t, e, i, n, s) {
		jt.subVectors(n, e), Yt.subVectors(i, e), Jt.subVectors(t, e);
		const r = jt.dot(jt),
			a = jt.dot(Yt),
			o = jt.dot(Jt),
			l = Yt.dot(Yt),
			c = Yt.dot(Jt),
			h = r * l - a * a;
		if(0 === h) return s.set(-2, -1, -1);
		const u = 1 / h,
			d = (l * o - a * c) * u,
			A = (r * c - a * o) * u;
		return s.set(1 - d - A, A, d)
	}
	static containsPoint(t, e, i, n) {
		return this.getBarycoord(t, e, i, n, Xt), Xt.x >= 0 && Xt.y >= 0 && Xt.x + Xt.y <= 1
	}
	static getUV(t, e, i, n, s, r, a, o) {
		return this.getBarycoord(t, e, i, n, Xt), o.set(0, 0), o.addScaledVector(s, Xt.x), o.addScaledVector(r, Xt.y), o.addScaledVector(a, Xt.z), o
	}
	static isFrontFacing(t, e, i, n) {
		return jt.subVectors(i, e), Yt.subVectors(t, e), jt.cross(Yt).dot(n) < 0
	}
	set(t, e, i) {
		return this.a.copy(t), this.b.copy(e), this.c.copy(i), this
	}
	setFromPointsAndIndices(t, e, i, n) {
		return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[n]), this
	}
	setFromAttributeAndIndices(t, e, i, n) {
		return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, i), this.c.fromBufferAttribute(t, n), this
	}
	clone() {
		return(new this.constructor).copy(this)
	}
	copy(t) {
		return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
	}
	getArea() {
		return jt.subVectors(this.c, this.b), Yt.subVectors(this.a, this.b), .5 * jt.cross(Yt).length()
	}
	getMidpoint(t) {
		return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
	}
	getNormal(t) {
		return ne.getNormal(this.a, this.b, this.c, t)
	}
	getPlane(t) {
		return t.setFromCoplanarPoints(this.a, this.b, this.c)
	}
	getBarycoord(t, e) {
		return ne.getBarycoord(t, this.a, this.b, this.c, e)
	}
	getUV(t, e, i, n, s) {
		return ne.getUV(t, this.a, this.b, this.c, e, i, n, s)
	}
	containsPoint(t) {
		return ne.containsPoint(t, this.a, this.b, this.c)
	}
	isFrontFacing(t) {
		return ne.isFrontFacing(this.a, this.b, this.c, t)
	}
	intersectsBox(t) {
		return t.intersectsTriangle(this)
	}
	closestPointToPoint(t, e) {
		const i = this.a,
			n = this.b,
			s = this.c;
		let r, a;
		Kt.subVectors(n, i), $t.subVectors(s, i), te.subVectors(t, i);
		const o = Kt.dot(te),
			l = $t.dot(te);
		if(o <= 0 && l <= 0) return e.copy(i);
		ee.subVectors(t, n);
		const c = Kt.dot(ee),
			h = $t.dot(ee);
		if(c >= 0 && h <= c) return e.copy(n);
		const u = o * h - c * l;
		if(u <= 0 && o >= 0 && c <= 0) return r = o / (o - c), e.copy(i).addScaledVector(Kt, r);
		ie.subVectors(t, s);
		const d = Kt.dot(ie),
			A = $t.dot(ie);
		if(A >= 0 && d <= A) return e.copy(s);
		const p = d * l - o * A;
		if(p <= 0 && l >= 0 && A <= 0) return a = l / (l - A), e.copy(i).addScaledVector($t, a);
		const g = c * A - d * h;
		if(g <= 0 && h - c >= 0 && d - A >= 0) return Zt.subVectors(s, n), a = (h - c) / (h - c + (d - A)), e.copy(n).addScaledVector(Zt, a);
		const m = 1 / (g + p + u);
		return r = p * m, a = u * m, e.copy(i).addScaledVector(Kt, r).addScaledVector($t, a)
	}
	equals(t) {
		return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
	}
}
let se = 0;
class re extends n {
	constructor() {
		super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
			value: se++
		}), this.uuid = l(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0
	}
	get alphaTest() {
		return this._alphaTest
	}
	set alphaTest(t) {
		this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t
	}
	onBuild() {}
	onBeforeRender() {}
	onBeforeCompile() {}
	customProgramCacheKey() {
		return this.onBeforeCompile.toString()
	}
	setValues(t) {
		if(void 0 !== t)
			for(const e in t) {
				const i = t[e];
				if(void 0 === i) {
					console.warn("THREE.Material: '" + e + "' parameter is undefined.");
					continue
				}
				const n = this[e];
				void 0 !== n ? n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[e] = i : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
			}
	}
	toJSON(t) {
		const e = void 0 === t || "string" == typeof t;
		e && (t = {
			textures: {},
			images: {}
		});
		const i = {
			metadata: {
				version: 4.5,
				type: "Material",
				generator: "Material.toJSON"
			}
		};

		function n(t) {
			const e = [];
			for(const i in t) {
				const n = t[i];
				delete n.metadata, e.push(n)
			}
			return e
		}
		if(i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), void 0 !== this.roughness && (i.roughness = this.roughness), void 0 !== this.metalness && (i.metalness = this.metalness), void 0 !== this.sheen && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (i.shininess = this.shininess), void 0 !== this.clearcoat && (i.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), void 0 !== this.iridescence && (i.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (i.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(t).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t).uuid, void 0 !== this.combine && (i.combine = this.combine)), void 0 !== this.envMapIntensity && (i.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (i.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.transmission && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(t).uuid), void 0 !== this.thickness && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(t).uuid), void 0 !== this.attenuationDistance && (i.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (i.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (i.size = this.size), null !== this.shadowSide && (i.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (i.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (i.blending = this.blending), 0 !== this.side && (i.side = this.side), this.vertexColors && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), !0 === this.transparent && (i.transparent = this.transparent), i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, i.colorWrite = this.colorWrite, i.stencilWrite = this.stencilWrite, i.stencilWriteMask = this.stencilWriteMask, i.stencilFunc = this.stencilFunc, i.stencilRef = this.stencilRef, i.stencilFuncMask = this.stencilFuncMask, i.stencilFail = this.stencilFail, i.stencilZFail = this.stencilZFail, i.stencilZPass = this.stencilZPass, void 0 !== this.rotation && 0 !== this.rotation && (i.rotation = this.rotation), !0 === this.polygonOffset && (i.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (i.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (i.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (i.linewidth = this.linewidth), void 0 !== this.dashSize && (i.dashSize = this.dashSize), void 0 !== this.gapSize && (i.gapSize = this.gapSize), void 0 !== this.scale && (i.scale = this.scale), !0 === this.dithering && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (i.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (i.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (i.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (i.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (i.wireframeLinejoin = this.wireframeLinejoin), !0 === this.flatShading && (i.flatShading = this.flatShading), !1 === this.visible && (i.visible = !1), !1 === this.toneMapped && (i.toneMapped = !1), !1 === this.fog && (i.fog = !1), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), e) {
			const e = n(t.textures),
				s = n(t.images);
			e.length > 0 && (i.textures = e), s.length > 0 && (i.images = s)
		}
		return i
	}
	clone() {
		return(new this.constructor).copy(this)
	}
	copy(t) {
		this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
		const e = t.clippingPlanes;
		let i = null;
		if(null !== e) {
			const t = e.length;
			i = new Array(t);
			for(let n = 0; n !== t; ++n) i[n] = e[n].clone()
		}
		return this.clippingPlanes = i, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this
	}
	dispose() {
		this.dispatchEvent({
			type: "dispose"
		})
	}
	set needsUpdate(t) {
		!0 === t && this.version++
	}
}
class ae extends re {
	constructor(t) {
		super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new D(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t)
	}
	copy(t) {
		return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this
	}
}
const oe = new V,
	le = new v;
class ce {
	constructor(t, e, i) {
		if(Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
		this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === i, this.usage = 35044, this.updateRange = {
			offset: 0,
			count: -1
		}, this.version = 0
	}
	onUploadCallback() {}
	set needsUpdate(t) {
		!0 === t && this.version++
	}
	setUsage(t) {
		return this.usage = t, this
	}
	copy(t) {
		return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this
	}
	copyAt(t, e, i) {
		t *= this.itemSize, i *= e.itemSize;
		for(let n = 0, s = this.itemSize; n < s; n++) this.array[t + n] = e.array[i + n];
		return this
	}
	copyArray(t) {
		return this.array.set(t), this
	}
	applyMatrix3(t) {
		if(2 === this.itemSize)
			for(let e = 0, i = this.count; e < i; e++) le.fromBufferAttribute(this, e), le.applyMatrix3(t), this.setXY(e, le.x, le.y);
		else if(3 === this.itemSize)
			for(let e = 0, i = this.count; e < i; e++) oe.fromBufferAttribute(this, e), oe.applyMatrix3(t), this.setXYZ(e, oe.x, oe.y, oe.z);
		return this
	}
	applyMatrix4(t) {
		for(let e = 0, i = this.count; e < i; e++) oe.fromBufferAttribute(this, e), oe.applyMatrix4(t), this.setXYZ(e, oe.x, oe.y, oe.z);
		return this
	}
	applyNormalMatrix(t) {
		for(let e = 0, i = this.count; e < i; e++) oe.fromBufferAttribute(this, e), oe.applyNormalMatrix(t), this.setXYZ(e, oe.x, oe.y, oe.z);
		return this
	}
	transformDirection(t) {
		for(let e = 0, i = this.count; e < i; e++) oe.fromBufferAttribute(this, e), oe.transformDirection(t), this.setXYZ(e, oe.x, oe.y, oe.z);
		return this
	}
	set(t, e = 0) {
		return this.array.set(t, e), this
	}
	getX(t) {
		let e = this.array[t * this.itemSize];
		return this.normalized && (e = g(e, this.array)), e
	}
	setX(t, e) {
		return this.normalized && (e = m(e, this.array)), this.array[t * this.itemSize] = e, this
	}
	getY(t) {
		let e = this.array[t * this.itemSize + 1];
		return this.normalized && (e = g(e, this.array)), e
	}
	setY(t, e) {
		return this.normalized && (e = m(e, this.array)), this.array[t * this.itemSize + 1] = e, this
	}
	getZ(t) {
		let e = this.array[t * this.itemSize + 2];
		return this.normalized && (e = g(e, this.array)), e
	}
	setZ(t, e) {
		return this.normalized && (e = m(e, this.array)), this.array[t * this.itemSize + 2] = e, this
	}
	getW(t) {
		let e = this.array[t * this.itemSize + 3];
		return this.normalized && (e = g(e, this.array)), e
	}
	setW(t, e) {
		return this.normalized && (e = m(e, this.array)), this.array[t * this.itemSize + 3] = e, this
	}
	setXY(t, e, i) {
		return t *= this.itemSize, this.normalized && (e = m(e, this.array), i = m(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this
	}
	setXYZ(t, e, i, n) {
		return t *= this.itemSize, this.normalized && (e = m(e, this.array), i = m(i, this.array), n = m(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this
	}
	setXYZW(t, e, i, n, s) {
		return t *= this.itemSize, this.normalized && (e = m(e, this.array), i = m(i, this.array), n = m(n, this.array), s = m(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this.array[t + 3] = s, this
	}
	onUpload(t) {
		return this.onUploadCallback = t, this
	}
	clone() {
		return new this.constructor(this.array, this.itemSize).copy(this)
	}
	toJSON() {
		const t = {
			itemSize: this.itemSize,
			type: this.array.constructor.name,
			array: Array.from(this.array),
			normalized: this.normalized
		};
		return "" !== this.name && (t.name = this.name), 35044 !== this.usage && (t.usage = this.usage), 0 === this.updateRange.offset && -1 === this.updateRange.count || (t.updateRange = this.updateRange), t
	}
	copyColorsArray() {
		console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")
	}
	copyVector2sArray() {
		console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")
	}
	copyVector3sArray() {
		console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")
	}
	copyVector4sArray() {
		console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")
	}
}
class he extends ce {
	constructor(t, e, i) {
		super(new Uint16Array(t), e, i)
	}
}
class ue extends ce {
	constructor(t, e, i) {
		super(new Uint32Array(t), e, i)
	}
}
class de extends ce {
	constructor(t, e, i) {
		super(new Float32Array(t), e, i)
	}
}
let Ae = 0;
const pe = new _t,
	ge = new qt,
	me = new V,
	fe = new j,
	ve = new j,
	ye = new V;
class xe extends n {
	constructor() {
		super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", {
			value: Ae++
		}), this.uuid = l(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
			start: 0,
			count: 1 / 0
		}, this.userData = {}
	}
	getIndex() {
		return this.index
	}
	setIndex(t) {
		return Array.isArray(t) ? this.index = new(x(t) ? ue : he)(t, 1) : this.index = t, this
	}
	getAttribute(t) {
		return this.attributes[t]
	}
	setAttribute(t, e) {
		return this.attributes[t] = e, this
	}
	deleteAttribute(t) {
		return delete this.attributes[t], this
	}
	hasAttribute(t) {
		return void 0 !== this.attributes[t]
	}
	addGroup(t, e, i = 0) {
		this.groups.push({
			start: t,
			count: e,
			materialIndex: i
		})
	}
	clearGroups() {
		this.groups = []
	}
	setDrawRange(t, e) {
		this.drawRange.start = t, this.drawRange.count = e
	}
	applyMatrix4(t) {
		const e = this.attributes.position;
		void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0);
		const i = this.attributes.normal;
		if(void 0 !== i) {
			const e = (new y).getNormalMatrix(t);
			i.applyNormalMatrix(e), i.needsUpdate = !0
		}
		const n = this.attributes.tangent;
		return void 0 !== n && (n.transformDirection(t), n.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
	}
	applyQuaternion(t) {
		return pe.makeRotationFromQuaternion(t), this.applyMatrix4(pe), this
	}
	rotateX(t) {
		return pe.makeRotationX(t), this.applyMatrix4(pe), this
	}
	rotateY(t) {
		return pe.makeRotationY(t), this.applyMatrix4(pe), this
	}
	rotateZ(t) {
		return pe.makeRotationZ(t), this.applyMatrix4(pe), this
	}
	translate(t, e, i) {
		return pe.makeTranslation(t, e, i), this.applyMatrix4(pe), this
	}
	scale(t, e, i) {
		return pe.makeScale(t, e, i), this.applyMatrix4(pe), this
	}
	lookAt(t) {
		return ge.lookAt(t), ge.updateMatrix(), this.applyMatrix4(ge.matrix), this
	}
	center() {
		return this.computeBoundingBox(), this.boundingBox.getCenter(me).negate(), this.translate(me.x, me.y, me.z), this
	}
	setFromPoints(t) {
		const e = [];
		for(let i = 0, n = t.length; i < n; i++) {
			const n = t[i];
			e.push(n.x, n.y, n.z || 0)
		}
		return this.setAttribute("position", new de(e, 3)), this
	}
	computeBoundingBox() {
		null === this.boundingBox && (this.boundingBox = new j);
		const t = this.attributes.position,
			e = this.morphAttributes.position;
		if(t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new V(-1 / 0, -1 / 0, -1 / 0), new V(1 / 0, 1 / 0, 1 / 0));
		if(void 0 !== t) {
			if(this.boundingBox.setFromBufferAttribute(t), e)
				for(let t = 0, i = e.length; t < i; t++) {
					const i = e[t];
					fe.setFromBufferAttribute(i), this.morphTargetsRelative ? (ye.addVectors(this.boundingBox.min, fe.min), this.boundingBox.expandByPoint(ye), ye.addVectors(this.boundingBox.max, fe.max), this.boundingBox.expandByPoint(ye)) : (this.boundingBox.expandByPoint(fe.min), this.boundingBox.expandByPoint(fe.max))
				}
		} else this.boundingBox.makeEmpty();
		(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
	}
	computeBoundingSphere() {
		null === this.boundingSphere && (this.boundingSphere = new dt);
		const t = this.attributes.position,
			e = this.morphAttributes.position;
		if(t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new V, 1 / 0);
		if(t) {
			const i = this.boundingSphere.center;
			if(fe.setFromBufferAttribute(t), e)
				for(let t = 0, i = e.length; t < i; t++) {
					const i = e[t];
					ve.setFromBufferAttribute(i), this.morphTargetsRelative ? (ye.addVectors(fe.min, ve.min), fe.expandByPoint(ye), ye.addVectors(fe.max, ve.max), fe.expandByPoint(ye)) : (fe.expandByPoint(ve.min), fe.expandByPoint(ve.max))
				}
			fe.getCenter(i);
			let n = 0;
			for(let e = 0, s = t.count; e < s; e++) ye.fromBufferAttribute(t, e), n = Math.max(n, i.distanceToSquared(ye));
			if(e)
				for(let s = 0, r = e.length; s < r; s++) {
					const r = e[s],
						a = this.morphTargetsRelative;
					for(let e = 0, s = r.count; e < s; e++) ye.fromBufferAttribute(r, e), a && (me.fromBufferAttribute(t, e), ye.add(me)), n = Math.max(n, i.distanceToSquared(ye))
				}
			this.boundingSphere.radius = Math.sqrt(n), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
		}
	}
	computeTangents() {
		const t = this.index,
			e = this.attributes;
		if(null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
		const i = t.array,
			n = e.position.array,
			s = e.normal.array,
			r = e.uv.array,
			a = n.length / 3;
		!1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new ce(new Float32Array(4 * a), 4));
		const o = this.getAttribute("tangent").array,
			l = [],
			c = [];
		for(let t = 0; t < a; t++) l[t] = new V, c[t] = new V;
		const h = new V,
			u = new V,
			d = new V,
			A = new v,
			p = new v,
			g = new v,
			m = new V,
			f = new V;

		function y(t, e, i) {
			h.fromArray(n, 3 * t), u.fromArray(n, 3 * e), d.fromArray(n, 3 * i), A.fromArray(r, 2 * t), p.fromArray(r, 2 * e), g.fromArray(r, 2 * i), u.sub(h), d.sub(h), p.sub(A), g.sub(A);
			const s = 1 / (p.x * g.y - g.x * p.y);
			isFinite(s) && (m.copy(u).multiplyScalar(g.y).addScaledVector(d, -p.y).multiplyScalar(s), f.copy(d).multiplyScalar(p.x).addScaledVector(u, -g.x).multiplyScalar(s), l[t].add(m), l[e].add(m), l[i].add(m), c[t].add(f), c[e].add(f), c[i].add(f))
		}
		let x = this.groups;
		0 === x.length && (x = [{
			start: 0,
			count: i.length
		}]);
		for(let t = 0, e = x.length; t < e; ++t) {
			const e = x[t],
				n = e.start;
			for(let t = n, s = n + e.count; t < s; t += 3) y(i[t + 0], i[t + 1], i[t + 2])
		}
		const _ = new V,
			E = new V,
			w = new V,
			b = new V;

		function I(t) {
			w.fromArray(s, 3 * t), b.copy(w);
			const e = l[t];
			_.copy(e), _.sub(w.multiplyScalar(w.dot(e))).normalize(), E.crossVectors(b, e);
			const i = E.dot(c[t]) < 0 ? -1 : 1;
			o[4 * t] = _.x, o[4 * t + 1] = _.y, o[4 * t + 2] = _.z, o[4 * t + 3] = i
		}
		for(let t = 0, e = x.length; t < e; ++t) {
			const e = x[t],
				n = e.start;
			for(let t = n, s = n + e.count; t < s; t += 3) I(i[t + 0]), I(i[t + 1]), I(i[t + 2])
		}
	}
	computeVertexNormals() {
		const t = this.index,
			e = this.getAttribute("position");
		if(void 0 !== e) {
			let i = this.getAttribute("normal");
			if(void 0 === i) i = new ce(new Float32Array(3 * e.count), 3), this.setAttribute("normal", i);
			else
				for(let t = 0, e = i.count; t < e; t++) i.setXYZ(t, 0, 0, 0);
			const n = new V,
				s = new V,
				r = new V,
				a = new V,
				o = new V,
				l = new V,
				c = new V,
				h = new V;
			if(t)
				for(let u = 0, d = t.count; u < d; u += 3) {
					const d = t.getX(u + 0),
						A = t.getX(u + 1),
						p = t.getX(u + 2);
					n.fromBufferAttribute(e, d), s.fromBufferAttribute(e, A), r.fromBufferAttribute(e, p), c.subVectors(r, s), h.subVectors(n, s), c.cross(h), a.fromBufferAttribute(i, d), o.fromBufferAttribute(i, A), l.fromBufferAttribute(i, p), a.add(c), o.add(c), l.add(c), i.setXYZ(d, a.x, a.y, a.z), i.setXYZ(A, o.x, o.y, o.z), i.setXYZ(p, l.x, l.y, l.z)
				} else
					for(let t = 0, a = e.count; t < a; t += 3) n.fromBufferAttribute(e, t + 0), s.fromBufferAttribute(e, t + 1), r.fromBufferAttribute(e, t + 2), c.subVectors(r, s), h.subVectors(n, s), c.cross(h), i.setXYZ(t + 0, c.x, c.y, c.z), i.setXYZ(t + 1, c.x, c.y, c.z), i.setXYZ(t + 2, c.x, c.y, c.z);
			this.normalizeNormals(), i.needsUpdate = !0
		}
	}
	merge() {
		return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this
	}
	normalizeNormals() {
		const t = this.attributes.normal;
		for(let e = 0, i = t.count; e < i; e++) ye.fromBufferAttribute(t, e), ye.normalize(), t.setXYZ(e, ye.x, ye.y, ye.z)
	}
	toNonIndexed() {
		function t(t, e) {
			const i = t.array,
				n = t.itemSize,
				s = t.normalized,
				r = new i.constructor(e.length * n);
			let a = 0,
				o = 0;
			for(let s = 0, l = e.length; s < l; s++) {
				a = t.isInterleavedBufferAttribute ? e[s] * t.data.stride + t.offset : e[s] * n;
				for(let t = 0; t < n; t++) r[o++] = i[a++]
			}
			return new ce(r, n, s)
		}
		if(null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
		const e = new xe,
			i = this.index.array,
			n = this.attributes;
		for(const s in n) {
			const r = t(n[s], i);
			e.setAttribute(s, r)
		}
		const s = this.morphAttributes;
		for(const n in s) {
			const r = [],
				a = s[n];
			for(let e = 0, n = a.length; e < n; e++) {
				const n = t(a[e], i);
				r.push(n)
			}
			e.morphAttributes[n] = r
		}
		e.morphTargetsRelative = this.morphTargetsRelative;
		const r = this.groups;
		for(let t = 0, i = r.length; t < i; t++) {
			const i = r[t];
			e.addGroup(i.start, i.count, i.materialIndex)
		}
		return e
	}
	toJSON() {
		const t = {
			metadata: {
				version: 4.5,
				type: "BufferGeometry",
				generator: "BufferGeometry.toJSON"
			}
		};
		if(t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
			const e = this.parameters;
			for(const i in e) void 0 !== e[i] && (t[i] = e[i]);
			return t
		}
		t.data = {
			attributes: {}
		};
		const e = this.index;
		null !== e && (t.data.index = {
			type: e.array.constructor.name,
			array: Array.prototype.slice.call(e.array)
		});
		const i = this.attributes;
		for(const e in i) {
			const n = i[e];
			t.data.attributes[e] = n.toJSON(t.data)
		}
		const n = {};
		let s = !1;
		for(const e in this.morphAttributes) {
			const i = this.morphAttributes[e],
				r = [];
			for(let e = 0, n = i.length; e < n; e++) {
				const n = i[e];
				r.push(n.toJSON(t.data))
			}
			r.length > 0 && (n[e] = r, s = !0)
		}
		s && (t.data.morphAttributes = n, t.data.morphTargetsRelative = this.morphTargetsRelative);
		const r = this.groups;
		r.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(r)));
		const a = this.boundingSphere;
		return null !== a && (t.data.boundingSphere = {
			center: a.center.toArray(),
			radius: a.radius
		}), t
	}
	clone() {
		return(new this.constructor).copy(this)
	}
	copy(t) {
		this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
		const e = {};
		this.name = t.name;
		const i = t.index;
		null !== i && this.setIndex(i.clone(e));
		const n = t.attributes;
		for(const t in n) {
			const i = n[t];
			this.setAttribute(t, i.clone(e))
		}
		const s = t.morphAttributes;
		for(const t in s) {
			const i = [],
				n = s[t];
			for(let t = 0, s = n.length; t < s; t++) i.push(n[t].clone(e));
			this.morphAttributes[t] = i
		}
		this.morphTargetsRelative = t.morphTargetsRelative;
		const r = t.groups;
		for(let t = 0, e = r.length; t < e; t++) {
			const e = r[t];
			this.addGroup(e.start, e.count, e.materialIndex)
		}
		const a = t.boundingBox;
		null !== a && (this.boundingBox = a.clone());
		const o = t.boundingSphere;
		return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, void 0 !== t.parameters && (this.parameters = Object.assign({}, t.parameters)), this
	}
	dispose() {
		this.dispatchEvent({
			type: "dispose"
		})
	}
}
const _e = new _t,
	Ee = new xt,
	we = new dt,
	be = new V,
	Ie = new V,
	Ce = new V,
	Se = new V,
	Me = new V,
	Be = new V,
	Te = new V,
	Re = new V,
	De = new V,
	Le = new v,
	Qe = new v,
	Pe = new v,
	Fe = new V,
	Ue = new V;
class Ne extends qt {
	constructor(t = new xe, e = new ae) {
		super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets()
	}
	copy(t, e) {
		return super.copy(t, e), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this
	}
	updateMorphTargets() {
		const t = this.geometry.morphAttributes,
			e = Object.keys(t);
		if(e.length > 0) {
			const i = t[e[0]];
			if(void 0 !== i) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for(let t = 0, e = i.length; t < e; t++) {
					const e = i[t].name || String(t);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t
				}
			}
		}
	}
	raycast(t, e) {
		const i = this.geometry,
			n = this.material,
			s = this.matrixWorld;
		if(void 0 === n) return;
		if(null === i.boundingSphere && i.computeBoundingSphere(), we.copy(i.boundingSphere), we.applyMatrix4(s), !1 === t.ray.intersectsSphere(we)) return;
		if(_e.copy(s).invert(), Ee.copy(t.ray).applyMatrix4(_e), null !== i.boundingBox && !1 === Ee.intersectsBox(i.boundingBox)) return;
		let r;
		const a = i.index,
			o = i.attributes.position,
			l = i.morphAttributes.position,
			c = i.morphTargetsRelative,
			h = i.attributes.uv,
			u = i.attributes.uv2,
			d = i.groups,
			A = i.drawRange;
		if(null !== a)
			if(Array.isArray(n))
				for(let i = 0, s = d.length; i < s; i++) {
					const s = d[i],
						p = n[s.materialIndex];
					for(let i = Math.max(s.start, A.start), n = Math.min(a.count, Math.min(s.start + s.count, A.start + A.count)); i < n; i += 3) {
						const n = a.getX(i),
							d = a.getX(i + 1),
							A = a.getX(i + 2);
						r = ke(this, p, t, Ee, o, l, c, h, u, n, d, A), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = s.materialIndex, e.push(r))
					}
				} else {
					for(let i = Math.max(0, A.start), s = Math.min(a.count, A.start + A.count); i < s; i += 3) {
						const s = a.getX(i),
							d = a.getX(i + 1),
							A = a.getX(i + 2);
						r = ke(this, n, t, Ee, o, l, c, h, u, s, d, A), r && (r.faceIndex = Math.floor(i / 3), e.push(r))
					}
				} else if(void 0 !== o)
					if(Array.isArray(n))
						for(let i = 0, s = d.length; i < s; i++) {
							const s = d[i],
								a = n[s.materialIndex];
							for(let i = Math.max(s.start, A.start), n = Math.min(o.count, Math.min(s.start + s.count, A.start + A.count)); i < n; i += 3) {
								r = ke(this, a, t, Ee, o, l, c, h, u, i, i + 1, i + 2), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = s.materialIndex, e.push(r))
							}
						} else {
							for(let i = Math.max(0, A.start), s = Math.min(o.count, A.start + A.count); i < s; i += 3) {
								r = ke(this, n, t, Ee, o, l, c, h, u, i, i + 1, i + 2), r && (r.faceIndex = Math.floor(i / 3), e.push(r))
							}
						}
	}
}

function ke(t, e, i, n, s, r, a, o, l, c, h, u) {
	be.fromBufferAttribute(s, c), Ie.fromBufferAttribute(s, h), Ce.fromBufferAttribute(s, u);
	const d = t.morphTargetInfluences;
	if(r && d) {
		Te.set(0, 0, 0), Re.set(0, 0, 0), De.set(0, 0, 0);
		for(let t = 0, e = r.length; t < e; t++) {
			const e = d[t],
				i = r[t];
			0 !== e && (Se.fromBufferAttribute(i, c), Me.fromBufferAttribute(i, h), Be.fromBufferAttribute(i, u), a ? (Te.addScaledVector(Se, e), Re.addScaledVector(Me, e), De.addScaledVector(Be, e)) : (Te.addScaledVector(Se.sub(be), e), Re.addScaledVector(Me.sub(Ie), e), De.addScaledVector(Be.sub(Ce), e)))
		}
		be.add(Te), Ie.add(Re), Ce.add(De)
	}
	t.isSkinnedMesh && (t.boneTransform(c, be), t.boneTransform(h, Ie), t.boneTransform(u, Ce));
	const A = function(t, e, i, n, s, r, a, o) {
		let l;
		if(l = 1 === e.side ? n.intersectTriangle(a, r, s, !0, o) : n.intersectTriangle(s, r, a, 2 !== e.side, o), null === l) return null;
		Ue.copy(o), Ue.applyMatrix4(t.matrixWorld);
		const c = i.ray.origin.distanceTo(Ue);
		return c < i.near || c > i.far ? null : {
			distance: c,
			point: Ue.clone(),
			object: t
		}
	}(t, e, i, n, be, Ie, Ce, Fe);
	if(A) {
		o && (Le.fromBufferAttribute(o, c), Qe.fromBufferAttribute(o, h), Pe.fromBufferAttribute(o, u), A.uv = ne.getUV(Fe, be, Ie, Ce, Le, Qe, Pe, new v)), l && (Le.fromBufferAttribute(l, c), Qe.fromBufferAttribute(l, h), Pe.fromBufferAttribute(l, u), A.uv2 = ne.getUV(Fe, be, Ie, Ce, Le, Qe, Pe, new v));
		const t = {
			a: c,
			b: h,
			c: u,
			normal: new V,
			materialIndex: 0
		};
		ne.getNormal(be, Ie, Ce, t.normal), A.face = t
	}
	return A
}
class Oe extends xe {
	constructor(t = 1, e = 1, i = 1, n = 1, s = 1, r = 1) {
		super(), this.type = "BoxGeometry", this.parameters = {
			width: t,
			height: e,
			depth: i,
			widthSegments: n,
			heightSegments: s,
			depthSegments: r
		};
		const a = this;
		n = Math.floor(n), s = Math.floor(s), r = Math.floor(r);
		const o = [],
			l = [],
			c = [],
			h = [];
		let u = 0,
			d = 0;

		function A(t, e, i, n, s, r, A, p, g, m, f) {
			const v = r / g,
				y = A / m,
				x = r / 2,
				_ = A / 2,
				E = p / 2,
				w = g + 1,
				b = m + 1;
			let I = 0,
				C = 0;
			const S = new V;
			for(let r = 0; r < b; r++) {
				const a = r * y - _;
				for(let o = 0; o < w; o++) {
					const u = o * v - x;
					S[t] = u * n, S[e] = a * s, S[i] = E, l.push(S.x, S.y, S.z), S[t] = 0, S[e] = 0, S[i] = p > 0 ? 1 : -1, c.push(S.x, S.y, S.z), h.push(o / g), h.push(1 - r / m), I += 1
				}
			}
			for(let t = 0; t < m; t++)
				for(let e = 0; e < g; e++) {
					const i = u + e + w * t,
						n = u + e + w * (t + 1),
						s = u + (e + 1) + w * (t + 1),
						r = u + (e + 1) + w * t;
					o.push(i, n, r), o.push(n, s, r), C += 6
				}
			a.addGroup(d, C, f), d += C, u += I
		}
		A("z", "y", "x", -1, -1, i, e, t, r, s, 0), A("z", "y", "x", 1, -1, i, e, -t, r, s, 1), A("x", "z", "y", 1, 1, t, i, e, n, r, 2), A("x", "z", "y", 1, -1, t, i, -e, n, r, 3), A("x", "y", "z", 1, -1, t, e, i, n, s, 4), A("x", "y", "z", -1, -1, t, e, -i, n, s, 5), this.setIndex(o), this.setAttribute("position", new de(l, 3)), this.setAttribute("normal", new de(c, 3)), this.setAttribute("uv", new de(h, 2))
	}
	static fromJSON(t) {
		return new Oe(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments)
	}
}

function Ge(t) {
	const e = {};
	for(const i in t) {
		e[i] = {};
		for(const n in t[i]) {
			const s = t[i][n];
			s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? e[i][n] = s.clone() : Array.isArray(s) ? e[i][n] = s.slice() : e[i][n] = s
		}
	}
	return e
}

function He(t) {
	const e = {};
	for(let i = 0; i < t.length; i++) {
		const n = Ge(t[i]);
		for(const t in n) e[t] = n[t]
	}
	return e
}
const ze = {
	clone: Ge,
	merge: He
};
class Ve extends re {
	constructor(t) {
		super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
			derivatives: !1,
			fragDepth: !1,
			drawBuffers: !1,
			shaderTextureLOD: !1
		}, this.defaultAttributeValues = {
			color: [1, 1, 1],
			uv: [0, 0],
			uv2: [0, 0]
		}, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== t && this.setValues(t)
	}
	copy(t) {
		return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Ge(t.uniforms), this.uniformsGroups = function(t) {
			const e = [];
			for(let i = 0; i < t.length; i++) e.push(t[i].clone());
			return e
		}(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this
	}
	toJSON(t) {
		const e = super.toJSON(t);
		e.glslVersion = this.glslVersion, e.uniforms = {};
		for(const i in this.uniforms) {
			const n = this.uniforms[i].value;
			n && n.isTexture ? e.uniforms[i] = {
				type: "t",
				value: n.toJSON(t).uuid
			} : n && n.isColor ? e.uniforms[i] = {
				type: "c",
				value: n.getHex()
			} : n && n.isVector2 ? e.uniforms[i] = {
				type: "v2",
				value: n.toArray()
			} : n && n.isVector3 ? e.uniforms[i] = {
				type: "v3",
				value: n.toArray()
			} : n && n.isVector4 ? e.uniforms[i] = {
				type: "v4",
				value: n.toArray()
			} : n && n.isMatrix3 ? e.uniforms[i] = {
				type: "m3",
				value: n.toArray()
			} : n && n.isMatrix4 ? e.uniforms[i] = {
				type: "m4",
				value: n.toArray()
			} : e.uniforms[i] = {
				value: n
			}
		}
		Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
		const i = {};
		for(const t in this.extensions) !0 === this.extensions[t] && (i[t] = !0);
		return Object.keys(i).length > 0 && (e.extensions = i), e
	}
}
class We extends qt {
	constructor() {
		super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new _t, this.projectionMatrix = new _t, this.projectionMatrixInverse = new _t
	}
	copy(t, e) {
		return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this
	}
	getWorldDirection(t) {
		this.updateWorldMatrix(!0, !1);
		const e = this.matrixWorld.elements;
		return t.set(-e[8], -e[9], -e[10]).normalize()
	}
	updateMatrixWorld(t) {
		super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert()
	}
	updateWorldMatrix(t, e) {
		super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
	}
	clone() {
		return(new this.constructor).copy(this)
	}
}
class qe extends We {
	constructor(t = 50, e = 1, i = .1, n = 2e3) {
		super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = i, this.far = n, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
	}
	copy(t, e) {
		return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
	}
	setFocalLength(t) {
		const e = .5 * this.getFilmHeight() / t;
		this.fov = 2 * o * Math.atan(e), this.updateProjectionMatrix()
	}
	getFocalLength() {
		const t = Math.tan(.5 * a * this.fov);
		return .5 * this.getFilmHeight() / t
	}
	getEffectiveFOV() {
		return 2 * o * Math.atan(Math.tan(.5 * a * this.fov) / this.zoom)
	}
	getFilmWidth() {
		return this.filmGauge * Math.min(this.aspect, 1)
	}
	getFilmHeight() {
		return this.filmGauge / Math.max(this.aspect, 1)
	}
	setViewOffset(t, e, i, n, s, r) {
		this.aspect = t / e, null === this.view && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = s, this.view.height = r, this.updateProjectionMatrix()
	}
	clearViewOffset() {
		null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
	}
	updateProjectionMatrix() {
		const t = this.near;
		let e = t * Math.tan(.5 * a * this.fov) / this.zoom,
			i = 2 * e,
			n = this.aspect * i,
			s = -.5 * n;
		const r = this.view;
		if(null !== this.view && this.view.enabled) {
			const t = r.fullWidth,
				a = r.fullHeight;
			s += r.offsetX * n / t, e -= r.offsetY * i / a, n *= r.width / t, i *= r.height / a
		}
		const o = this.filmOffset;
		0 !== o && (s += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + n, e, e - i, t, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
	}
	toJSON(t) {
		const e = super.toJSON(t);
		return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
	}
}
class je extends qt {
	constructor(t, e, i) {
		super(), this.type = "CubeCamera", this.renderTarget = i;
		const n = new qe(90, 1, t, e);
		n.layers = this.layers, n.up.set(0, -1, 0), n.lookAt(new V(1, 0, 0)), this.add(n);
		const s = new qe(90, 1, t, e);
		s.layers = this.layers, s.up.set(0, -1, 0), s.lookAt(new V(-1, 0, 0)), this.add(s);
		const r = new qe(90, 1, t, e);
		r.layers = this.layers, r.up.set(0, 0, 1), r.lookAt(new V(0, 1, 0)), this.add(r);
		const a = new qe(90, 1, t, e);
		a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(new V(0, -1, 0)), this.add(a);
		const o = new qe(90, 1, t, e);
		o.layers = this.layers, o.up.set(0, -1, 0), o.lookAt(new V(0, 0, 1)), this.add(o);
		const l = new qe(90, 1, t, e);
		l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new V(0, 0, -1)), this.add(l)
	}
	update(t, e) {
		null === this.parent && this.updateMatrixWorld();
		const i = this.renderTarget,
			[n, s, r, a, o, l] = this.children,
			c = t.getRenderTarget(),
			h = t.toneMapping,
			u = t.xr.enabled;
		t.toneMapping = 0, t.xr.enabled = !1;
		const d = i.texture.generateMipmaps;
		i.texture.generateMipmaps = !1, t.setRenderTarget(i, 0), t.render(e, n), t.setRenderTarget(i, 1), t.render(e, s), t.setRenderTarget(i, 2), t.render(e, r), t.setRenderTarget(i, 3), t.render(e, a), t.setRenderTarget(i, 4), t.render(e, o), i.texture.generateMipmaps = d, t.setRenderTarget(i, 5), t.render(e, l), t.setRenderTarget(c), t.toneMapping = h, t.xr.enabled = u, i.texture.needsPMREMUpdate = !0
	}
}
class Ye extends N {
	constructor(t, e, i, n, s, r, a, o, l, c) {
		super(t = void 0 !== t ? t : [], e = void 0 !== e ? e : 301, i, n, s, r, a, o, l, c), this.isCubeTexture = !0, this.flipY = !1
	}
	get images() {
		return this.image
	}
	set images(t) {
		this.image = t
	}
}
class Je extends O {
	constructor(t, e = {}) {
		super(t, t, e), this.isWebGLCubeRenderTarget = !0;
		const i = {
				width: t,
				height: t,
				depth: 1
			},
			n = [i, i, i, i, i, i];
		this.texture = new Ye(n, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : 1006
	}
	fromEquirectangularTexture(t, e) {
		this.texture.type = e.type, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
		const i = {
				uniforms: {
					tEquirect: {
						value: null
					}
				},
				vertexShader: "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
				fragmentShader: "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t"
			},
			n = new Oe(5, 5, 5),
			s = new Ve({
				name: "CubemapFromEquirect",
				uniforms: Ge(i.uniforms),
				vertexShader: i.vertexShader,
				fragmentShader: i.fragmentShader,
				side: 1,
				blending: 0
			});
		s.uniforms.tEquirect.value = e;
		const r = new Ne(n, s),
			a = e.minFilter;
		1008 === e.minFilter && (e.minFilter = 1006);
		return new je(1, 10, this).update(t, r), e.minFilter = a, r.geometry.dispose(), r.material.dispose(), this
	}
	clear(t, e, i, n) {
		const s = t.getRenderTarget();
		for(let s = 0; s < 6; s++) t.setRenderTarget(this, s), t.clear(e, i, n);
		t.setRenderTarget(s)
	}
}
const Xe = new V,
	Ke = new V,
	$e = new y;
class Ze {
	constructor(t = new V(1, 0, 0), e = 0) {
		this.isPlane = !0, this.normal = t, this.constant = e
	}
	set(t, e) {
		return this.normal.copy(t), this.constant = e, this
	}
	setComponents(t, e, i, n) {
		return this.normal.set(t, e, i), this.constant = n, this
	}
	setFromNormalAndCoplanarPoint(t, e) {
		return this.normal.copy(t), this.constant = -e.dot(this.normal), this
	}
	setFromCoplanarPoints(t, e, i) {
		const n = Xe.subVectors(i, e).cross(Ke.subVectors(t, e)).normalize();
		return this.setFromNormalAndCoplanarPoint(n, t), this
	}
	copy(t) {
		return this.normal.copy(t.normal), this.constant = t.constant, this
	}
	normalize() {
		const t = 1 / this.normal.length();
		return this.normal.multiplyScalar(t), this.constant *= t, this
	}
	negate() {
		return this.constant *= -1, this.normal.negate(), this
	}
	distanceToPoint(t) {
		return this.normal.dot(t) + this.constant
	}
	distanceToSphere(t) {
		return this.distanceToPoint(t.center) - t.radius
	}
	projectPoint(t, e) {
		return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
	}
	intersectLine(t, e) {
		const i = t.delta(Xe),
			n = this.normal.dot(i);
		if(0 === n) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
		const s = -(t.start.dot(this.normal) + this.constant) / n;
		return s < 0 || s > 1 ? null : e.copy(i).multiplyScalar(s).add(t.start)
	}
	intersectsLine(t) {
		const e = this.distanceToPoint(t.start),
			i = this.distanceToPoint(t.end);
		return e < 0 && i > 0 || i < 0 && e > 0
	}
	intersectsBox(t) {
		return t.intersectsPlane(this)
	}
	intersectsSphere(t) {
		return t.intersectsPlane(this)
	}
	coplanarPoint(t) {
		return t.copy(this.normal).multiplyScalar(-this.constant)
	}
	applyMatrix4(t, e) {
		const i = e || $e.getNormalMatrix(t),
			n = this.coplanarPoint(Xe).applyMatrix4(t),
			s = this.normal.applyMatrix3(i).normalize();
		return this.constant = -n.dot(s), this
	}
	translate(t) {
		return this.constant -= t.dot(this.normal), this
	}
	equals(t) {
		return t.normal.equals(this.normal) && t.constant === this.constant
	}
	clone() {
		return(new this.constructor).copy(this)
	}
}
const ti = new dt,
	ei = new V;
class ii {
	constructor(t = new Ze, e = new Ze, i = new Ze, n = new Ze, s = new Ze, r = new Ze) {
		this.planes = [t, e, i, n, s, r]
	}
	set(t, e, i, n, s, r) {
		const a = this.planes;
		return a[0].copy(t), a[1].copy(e), a[2].copy(i), a[3].copy(n), a[4].copy(s), a[5].copy(r), this
	}
	copy(t) {
		const e = this.planes;
		for(let i = 0; i < 6; i++) e[i].copy(t.planes[i]);
		return this
	}
	setFromProjectionMatrix(t) {
		const e = this.planes,
			i = t.elements,
			n = i[0],
			s = i[1],
			r = i[2],
			a = i[3],
			o = i[4],
			l = i[5],
			c = i[6],
			h = i[7],
			u = i[8],
			d = i[9],
			A = i[10],
			p = i[11],
			g = i[12],
			m = i[13],
			f = i[14],
			v = i[15];
		return e[0].setComponents(a - n, h - o, p - u, v - g).normalize(), e[1].setComponents(a + n, h + o, p + u, v + g).normalize(), e[2].setComponents(a + s, h + l, p + d, v + m).normalize(), e[3].setComponents(a - s, h - l, p - d, v - m).normalize(), e[4].setComponents(a - r, h - c, p - A, v - f).normalize(), e[5].setComponents(a + r, h + c, p + A, v + f).normalize(), this
	}
	intersectsObject(t) {
		const e = t.geometry;
		return null === e.boundingSphere && e.computeBoundingSphere(), ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(ti)
	}
	intersectsSprite(t) {
		return ti.center.set(0, 0, 0), ti.radius = .7071067811865476, ti.applyMatrix4(t.matrixWorld), this.intersectsSphere(ti)
	}
	intersectsSphere(t) {
		const e = this.planes,
			i = t.center,
			n = -t.radius;
		for(let t = 0; t < 6; t++) {
			if(e[t].distanceToPoint(i) < n) return !1
		}
		return !0
	}
	intersectsBox(t) {
		const e = this.planes;
		for(let i = 0; i < 6; i++) {
			const n = e[i];
			if(ei.x = n.normal.x > 0 ? t.max.x : t.min.x, ei.y = n.normal.y > 0 ? t.max.y : t.min.y, ei.z = n.normal.z > 0 ? t.max.z : t.min.z, n.distanceToPoint(ei) < 0) return !1
		}
		return !0
	}
	containsPoint(t) {
		const e = this.planes;
		for(let i = 0; i < 6; i++)
			if(e[i].distanceToPoint(t) < 0) return !1;
		return !0
	}
	clone() {
		return(new this.constructor).copy(this)
	}
}

function ni() {
	let t = null,
		e = !1,
		i = null,
		n = null;

	function s(e, r) {
		i(e, r), n = t.requestAnimationFrame(s)
	}
	return {
		start: function() {
			!0 !== e && null !== i && (n = t.requestAnimationFrame(s), e = !0)
		},
		stop: function() {
			t.cancelAnimationFrame(n), e = !1
		},
		setAnimationLoop: function(t) {
			i = t
		},
		setContext: function(e) {
			t = e
		}
	}
}

function si(t, e) {
	const i = e.isWebGL2,
		n = new WeakMap;
	return {
		get: function(t) {
			return t.isInterleavedBufferAttribute && (t = t.data), n.get(t)
		},
		remove: function(e) {
			e.isInterleavedBufferAttribute && (e = e.data);
			const i = n.get(e);
			i && (t.deleteBuffer(i.buffer), n.delete(e))
		},
		update: function(e, s) {
			if(e.isGLBufferAttribute) {
				const t = n.get(e);
				return void((!t || t.version < e.version) && n.set(e, {
					buffer: e.buffer,
					type: e.type,
					bytesPerElement: e.elementSize,
					version: e.version
				}))
			}
			e.isInterleavedBufferAttribute && (e = e.data);
			const r = n.get(e);
			void 0 === r ? n.set(e, function(e, n) {
				const s = e.array,
					r = e.usage,
					a = t.createBuffer();
				let o;
				if(t.bindBuffer(n, a), t.bufferData(n, s, r), e.onUploadCallback(), s instanceof Float32Array) o = 5126;
				else if(s instanceof Uint16Array)
					if(e.isFloat16BufferAttribute) {
						if(!i) throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
						o = 5131
					} else o = 5123;
				else if(s instanceof Int16Array) o = 5122;
				else if(s instanceof Uint32Array) o = 5125;
				else if(s instanceof Int32Array) o = 5124;
				else if(s instanceof Int8Array) o = 5120;
				else if(s instanceof Uint8Array) o = 5121;
				else {
					if(!(s instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + s);
					o = 5121
				}
				return {
					buffer: a,
					type: o,
					bytesPerElement: s.BYTES_PER_ELEMENT,
					version: e.version
				}
			}(e, s)) : r.version < e.version && (! function(e, n, s) {
				const r = n.array,
					a = n.updateRange;
				t.bindBuffer(s, e), -1 === a.count ? t.bufferSubData(s, 0, r) : (i ? t.bufferSubData(s, a.offset * r.BYTES_PER_ELEMENT, r, a.offset, a.count) : t.bufferSubData(s, a.offset * r.BYTES_PER_ELEMENT, r.subarray(a.offset, a.offset + a.count)), a.count = -1)
			}(r.buffer, e, s), r.version = e.version)
		}
	}
}
class ri extends xe {
	constructor(t = 1, e = 1, i = 1, n = 1) {
		super(), this.type = "PlaneGeometry", this.parameters = {
			width: t,
			height: e,
			widthSegments: i,
			heightSegments: n
		};
		const s = t / 2,
			r = e / 2,
			a = Math.floor(i),
			o = Math.floor(n),
			l = a + 1,
			c = o + 1,
			h = t / a,
			u = e / o,
			d = [],
			A = [],
			p = [],
			g = [];
		for(let t = 0; t < c; t++) {
			const e = t * u - r;
			for(let i = 0; i < l; i++) {
				const n = i * h - s;
				A.push(n, -e, 0), p.push(0, 0, 1), g.push(i / a), g.push(1 - t / o)
			}
		}
		for(let t = 0; t < o; t++)
			for(let e = 0; e < a; e++) {
				const i = e + l * t,
					n = e + l * (t + 1),
					s = e + 1 + l * (t + 1),
					r = e + 1 + l * t;
				d.push(i, n, r), d.push(n, s, r)
			}
		this.setIndex(d), this.setAttribute("position", new de(A, 3)), this.setAttribute("normal", new de(p, 3)), this.setAttribute("uv", new de(g, 2))
	}
	static fromJSON(t) {
		return new ri(t.width, t.height, t.widthSegments, t.heightSegments)
	}
}
const ai = {
		alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
		alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
		alphatest_fragment: "#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif",
		alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
		aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
		aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
		begin_vertex: "vec3 transformed = vec3( position );",
		beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
		bsdfs: "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( V * D );\n}\n#ifdef USE_IRIDESCENCE\n\tvec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif",
		iridescence_fragment: "#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\t return vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat R21 = R12;\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif",
		bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos.xyz );\n\t\tvec3 vSigmaY = dFdy( surf_pos.xyz );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
		clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
		clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
		clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
		clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
		color_fragment: "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
		color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
		color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
		color_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
		common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\treturn dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
		cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_v0 0.339\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_v1 0.276\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_v4 0.046\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_v5 0.016\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_v6 0.0038\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
		defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
		displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
		displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
		emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
		emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
		encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
		encodings_pars_fragment: "vec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
		envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
		envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
		envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
		envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
		envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n#endif",
		envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
		fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
		fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
		fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
		fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
		gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}",
		lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
		lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
		lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
		lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert\n#define Material_LightProbeLOD( material )\t(0)",
		lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#else\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
		lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
		lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
		lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
		lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
		lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULARINTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n\t\t#endif\n\t\t#ifdef USE_SPECULARCOLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n\t#endif\n#endif",
		lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );\n\t#else\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
		lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometry.viewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
		lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
		lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
		logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
		logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
		logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
		logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
		map_fragment: "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",
		map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
		map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
		map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
		metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
		metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
		morphcolor_vertex: "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",
		morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif",
		morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif",
		morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif",
		normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
		normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
		normal_pars_fragment: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
		normal_pars_vertex: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
		normal_vertex: "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
		normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",
		clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
		clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",
		clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
		iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif",
		output_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
		packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
		premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
		project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
		dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
		dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
		roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
		roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
		shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
		shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
		shadowmap_vertex: "#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
		shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
		skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
		skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tuniform int boneTextureSize;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tfloat j = i * 4.0;\n\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\ty = dy * ( y + 0.5 );\n\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\treturn bone;\n\t}\n#endif",
		skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
		skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
		specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
		specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
		tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
		tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
		transmission_fragment: "#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );\n#endif",
		transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\t#ifdef texture2DLodEXT\n\t\t\treturn texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#else\n\t\t\treturn texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#endif\n\t}\n\tvec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( attenuationDistance == 0.0 ) {\n\t\t\treturn radiance;\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance * radiance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\t}\n#endif",
		uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
		uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
		uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
		uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
		uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
		uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
		worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
		background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
		background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tgl_FragColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tgl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );\n\t#endif\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
		cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
		cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
		depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
		depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
		distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
		distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
		equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
		equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
		linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
		linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
		meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
		meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
		meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
		meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
		meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
		meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
		meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
		meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",
		meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
		meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
		meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
		meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULARINTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n\t#ifdef USE_SPECULARCOLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\t#endif\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
		meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
		meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
		points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
		points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
		shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
		shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
		sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
		sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}"
	},
	oi = {
		common: {
			diffuse: {
				value: new D(16777215)
			},
			opacity: {
				value: 1
			},
			map: {
				value: null
			},
			uvTransform: {
				value: new y
			},
			uv2Transform: {
				value: new y
			},
			alphaMap: {
				value: null
			},
			alphaTest: {
				value: 0
			}
		},
		specularmap: {
			specularMap: {
				value: null
			}
		},
		envmap: {
			envMap: {
				value: null
			},
			flipEnvMap: {
				value: -1
			},
			reflectivity: {
				value: 1
			},
			ior: {
				value: 1.5
			},
			refractionRatio: {
				value: .98
			}
		},
		aomap: {
			aoMap: {
				value: null
			},
			aoMapIntensity: {
				value: 1
			}
		},
		lightmap: {
			lightMap: {
				value: null
			},
			lightMapIntensity: {
				value: 1
			}
		},
		emissivemap: {
			emissiveMap: {
				value: null
			}
		},
		bumpmap: {
			bumpMap: {
				value: null
			},
			bumpScale: {
				value: 1
			}
		},
		normalmap: {
			normalMap: {
				value: null
			},
			normalScale: {
				value: new v(1, 1)
			}
		},
		displacementmap: {
			displacementMap: {
				value: null
			},
			displacementScale: {
				value: 1
			},
			displacementBias: {
				value: 0
			}
		},
		roughnessmap: {
			roughnessMap: {
				value: null
			}
		},
		metalnessmap: {
			metalnessMap: {
				value: null
			}
		},
		gradientmap: {
			gradientMap: {
				value: null
			}
		},
		fog: {
			fogDensity: {
				value: 25e-5
			},
			fogNear: {
				value: 1
			},
			fogFar: {
				value: 2e3
			},
			fogColor: {
				value: new D(16777215)
			}
		},
		lights: {
			ambientLightColor: {
				value: []
			},
			lightProbe: {
				value: []
			},
			directionalLights: {
				value: [],
				properties: {
					direction: {},
					color: {}
				}
			},
			directionalLightShadows: {
				value: [],
				properties: {
					shadowBias: {},
					shadowNormalBias: {},
					shadowRadius: {},
					shadowMapSize: {}
				}
			},
			directionalShadowMap: {
				value: []
			},
			directionalShadowMatrix: {
				value: []
			},
			spotLights: {
				value: [],
				properties: {
					color: {},
					position: {},
					direction: {},
					distance: {},
					coneCos: {},
					penumbraCos: {},
					decay: {}
				}
			},
			spotLightShadows: {
				value: [],
				properties: {
					shadowBias: {},
					shadowNormalBias: {},
					shadowRadius: {},
					shadowMapSize: {}
				}
			},
			spotLightMap: {
				value: []
			},
			spotShadowMap: {
				value: []
			},
			spotLightMatrix: {
				value: []
			},
			pointLights: {
				value: [],
				properties: {
					color: {},
					position: {},
					decay: {},
					distance: {}
				}
			},
			pointLightShadows: {
				value: [],
				properties: {
					shadowBias: {},
					shadowNormalBias: {},
					shadowRadius: {},
					shadowMapSize: {},
					shadowCameraNear: {},
					shadowCameraFar: {}
				}
			},
			pointShadowMap: {
				value: []
			},
			pointShadowMatrix: {
				value: []
			},
			hemisphereLights: {
				value: [],
				properties: {
					direction: {},
					skyColor: {},
					groundColor: {}
				}
			},
			rectAreaLights: {
				value: [],
				properties: {
					color: {},
					position: {},
					width: {},
					height: {}
				}
			},
			ltc_1: {
				value: null
			},
			ltc_2: {
				value: null
			}
		},
		points: {
			diffuse: {
				value: new D(16777215)
			},
			opacity: {
				value: 1
			},
			size: {
				value: 1
			},
			scale: {
				value: 1
			},
			map: {
				value: null
			},
			alphaMap: {
				value: null
			},
			alphaTest: {
				value: 0
			},
			uvTransform: {
				value: new y
			}
		},
		sprite: {
			diffuse: {
				value: new D(16777215)
			},
			opacity: {
				value: 1
			},
			center: {
				value: new v(.5, .5)
			},
			rotation: {
				value: 0
			},
			map: {
				value: null
			},
			alphaMap: {
				value: null
			},
			alphaTest: {
				value: 0
			},
			uvTransform: {
				value: new y
			}
		}
	},
	li = {
		basic: {
			uniforms: He([oi.common, oi.specularmap, oi.envmap, oi.aomap, oi.lightmap, oi.fog]),
			vertexShader: ai.meshbasic_vert,
			fragmentShader: ai.meshbasic_frag
		},
		lambert: {
			uniforms: He([oi.common, oi.specularmap, oi.envmap, oi.aomap, oi.lightmap, oi.emissivemap, oi.bumpmap, oi.normalmap, oi.displacementmap, oi.fog, oi.lights, {
				emissive: {
					value: new D(0)
				}
			}]),
			vertexShader: ai.meshlambert_vert,
			fragmentShader: ai.meshlambert_frag
		},
		phong: {
			uniforms: He([oi.common, oi.specularmap, oi.envmap, oi.aomap, oi.lightmap, oi.emissivemap, oi.bumpmap, oi.normalmap, oi.displacementmap, oi.fog, oi.lights, {
				emissive: {
					value: new D(0)
				},
				specular: {
					value: new D(1118481)
				},
				shininess: {
					value: 30
				}
			}]),
			vertexShader: ai.meshphong_vert,
			fragmentShader: ai.meshphong_frag
		},
		standard: {
			uniforms: He([oi.common, oi.envmap, oi.aomap, oi.lightmap, oi.emissivemap, oi.bumpmap, oi.normalmap, oi.displacementmap, oi.roughnessmap, oi.metalnessmap, oi.fog, oi.lights, {
				emissive: {
					value: new D(0)
				},
				roughness: {
					value: 1
				},
				metalness: {
					value: 0
				},
				envMapIntensity: {
					value: 1
				}
			}]),
			vertexShader: ai.meshphysical_vert,
			fragmentShader: ai.meshphysical_frag
		},
		toon: {
			uniforms: He([oi.common, oi.aomap, oi.lightmap, oi.emissivemap, oi.bumpmap, oi.normalmap, oi.displacementmap, oi.gradientmap, oi.fog, oi.lights, {
				emissive: {
					value: new D(0)
				}
			}]),
			vertexShader: ai.meshtoon_vert,
			fragmentShader: ai.meshtoon_frag
		},
		matcap: {
			uniforms: He([oi.common, oi.bumpmap, oi.normalmap, oi.displacementmap, oi.fog, {
				matcap: {
					value: null
				}
			}]),
			vertexShader: ai.meshmatcap_vert,
			fragmentShader: ai.meshmatcap_frag
		},
		points: {
			uniforms: He([oi.points, oi.fog]),
			vertexShader: ai.points_vert,
			fragmentShader: ai.points_frag
		},
		dashed: {
			uniforms: He([oi.common, oi.fog, {
				scale: {
					value: 1
				},
				dashSize: {
					value: 1
				},
				totalSize: {
					value: 2
				}
			}]),
			vertexShader: ai.linedashed_vert,
			fragmentShader: ai.linedashed_frag
		},
		depth: {
			uniforms: He([oi.common, oi.displacementmap]),
			vertexShader: ai.depth_vert,
			fragmentShader: ai.depth_frag
		},
		normal: {
			uniforms: He([oi.common, oi.bumpmap, oi.normalmap, oi.displacementmap, {
				opacity: {
					value: 1
				}
			}]),
			vertexShader: ai.meshnormal_vert,
			fragmentShader: ai.meshnormal_frag
		},
		sprite: {
			uniforms: He([oi.sprite, oi.fog]),
			vertexShader: ai.sprite_vert,
			fragmentShader: ai.sprite_frag
		},
		background: {
			uniforms: {
				uvTransform: {
					value: new y
				},
				t2D: {
					value: null
				}
			},
			vertexShader: ai.background_vert,
			fragmentShader: ai.background_frag
		},
		cube: {
			uniforms: He([oi.envmap, {
				opacity: {
					value: 1
				}
			}]),
			vertexShader: ai.cube_vert,
			fragmentShader: ai.cube_frag
		},
		equirect: {
			uniforms: {
				tEquirect: {
					value: null
				}
			},
			vertexShader: ai.equirect_vert,
			fragmentShader: ai.equirect_frag
		},
		distanceRGBA: {
			uniforms: He([oi.common, oi.displacementmap, {
				referencePosition: {
					value: new V
				},
				nearDistance: {
					value: 1
				},
				farDistance: {
					value: 1e3
				}
			}]),
			vertexShader: ai.distanceRGBA_vert,
			fragmentShader: ai.distanceRGBA_frag
		},
		shadow: {
			uniforms: He([oi.lights, oi.fog, {
				color: {
					value: new D(0)
				},
				opacity: {
					value: 1
				}
			}]),
			vertexShader: ai.shadow_vert,
			fragmentShader: ai.shadow_frag
		}
	};

function ci(t, e, i, n, s, r) {
	const a = new D(0);
	let o, l, c = !0 === s ? 0 : 1,
		h = null,
		u = 0,
		d = null;

	function A(t, e) {
		i.buffers.color.setClear(t.r, t.g, t.b, e, r)
	}
	return {
		getClearColor: function() {
			return a
		},
		setClearColor: function(t, e = 1) {
			a.set(t), c = e, A(a, c)
		},
		getClearAlpha: function() {
			return c
		},
		setClearAlpha: function(t) {
			c = t, A(a, c)
		},
		render: function(i, s) {
			let r = !1,
				p = !0 === s.isScene ? s.background : null;
			p && p.isTexture && (p = e.get(p));
			const g = t.xr,
				m = g.getSession && g.getSession();
			m && "additive" === m.environmentBlendMode && (p = null), null === p ? A(a, c) : p && p.isColor && (A(p, 1), r = !0), (t.autoClear || r) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), p && (p.isCubeTexture || 306 === p.mapping) ? (void 0 === l && (l = new Ne(new Oe(1, 1, 1), new Ve({
				name: "BackgroundCubeMaterial",
				uniforms: Ge(li.cube.uniforms),
				vertexShader: li.cube.vertexShader,
				fragmentShader: li.cube.fragmentShader,
				side: 1,
				depthTest: !1,
				depthWrite: !1,
				fog: !1
			})), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(t, e, i) {
				this.matrixWorld.copyPosition(i.matrixWorld)
			}, Object.defineProperty(l.material, "envMap", {
				get: function() {
					return this.uniforms.envMap.value
				}
			}), n.update(l)), l.material.uniforms.envMap.value = p, l.material.uniforms.flipEnvMap.value = p.isCubeTexture && !1 === p.isRenderTargetTexture ? -1 : 1, h === p && u === p.version && d === t.toneMapping || (l.material.needsUpdate = !0, h = p, u = p.version, d = t.toneMapping), l.layers.enableAll(), i.unshift(l, l.geometry, l.material, 0, 0, null)) : p && p.isTexture && (void 0 === o && (o = new Ne(new ri(2, 2), new Ve({
				name: "BackgroundMaterial",
				uniforms: Ge(li.background.uniforms),
				vertexShader: li.background.vertexShader,
				fragmentShader: li.background.fragmentShader,
				side: 0,
				depthTest: !1,
				depthWrite: !1,
				fog: !1
			})), o.geometry.deleteAttribute("normal"), Object.defineProperty(o.material, "map", {
				get: function() {
					return this.uniforms.t2D.value
				}
			}), n.update(o)), o.material.uniforms.t2D.value = p, !0 === p.matrixAutoUpdate && p.updateMatrix(), o.material.uniforms.uvTransform.value.copy(p.matrix), h === p && u === p.version && d === t.toneMapping || (o.material.needsUpdate = !0, h = p, u = p.version, d = t.toneMapping), o.layers.enableAll(), i.unshift(o, o.geometry, o.material, 0, 0, null))
		}
	}
}

function hi(t, e, i, n) {
	const s = t.getParameter(34921),
		r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
		a = n.isWebGL2 || null !== r,
		o = {},
		l = A(null);
	let c = l,
		h = !1;

	function u(e) {
		return n.isWebGL2 ? t.bindVertexArray(e) : r.bindVertexArrayOES(e)
	}

	function d(e) {
		return n.isWebGL2 ? t.deleteVertexArray(e) : r.deleteVertexArrayOES(e)
	}

	function A(t) {
		const e = [],
			i = [],
			n = [];
		for(let t = 0; t < s; t++) e[t] = 0, i[t] = 0, n[t] = 0;
		return {
			geometry: null,
			program: null,
			wireframe: !1,
			newAttributes: e,
			enabledAttributes: i,
			attributeDivisors: n,
			object: t,
			attributes: {},
			index: null
		}
	}

	function p() {
		const t = c.newAttributes;
		for(let e = 0, i = t.length; e < i; e++) t[e] = 0
	}

	function g(t) {
		m(t, 0)
	}

	function m(i, s) {
		const r = c.newAttributes,
			a = c.enabledAttributes,
			o = c.attributeDivisors;
		if(r[i] = 1, 0 === a[i] && (t.enableVertexAttribArray(i), a[i] = 1), o[i] !== s) {
			(n.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](i, s), o[i] = s
		}
	}

	function f() {
		const e = c.newAttributes,
			i = c.enabledAttributes;
		for(let n = 0, s = i.length; n < s; n++) i[n] !== e[n] && (t.disableVertexAttribArray(n), i[n] = 0)
	}

	function v(e, i, s, r, a, o) {
		!0 !== n.isWebGL2 || 5124 !== s && 5125 !== s ? t.vertexAttribPointer(e, i, s, r, a, o) : t.vertexAttribIPointer(e, i, s, a, o)
	}

	function y() {
		x(), h = !0, c !== l && (c = l, u(c.object))
	}

	function x() {
		l.geometry = null, l.program = null, l.wireframe = !1
	}
	return {
		setup: function(s, l, d, y, x) {
			let _ = !1;
			if(a) {
				const e = function(e, i, s) {
					const a = !0 === s.wireframe;
					let l = o[e.id];
					void 0 === l && (l = {}, o[e.id] = l);
					let c = l[i.id];
					void 0 === c && (c = {}, l[i.id] = c);
					let h = c[a];
					void 0 === h && (h = A(n.isWebGL2 ? t.createVertexArray() : r.createVertexArrayOES()), c[a] = h);
					return h
				}(y, d, l);
				c !== e && (c = e, u(c.object)), _ = function(t, e, i, n) {
					const s = c.attributes,
						r = e.attributes;
					let a = 0;
					const o = i.getAttributes();
					for(const e in o) {
						if(o[e].location >= 0) {
							const i = s[e];
							let n = r[e];
							if(void 0 === n && ("instanceMatrix" === e && t.instanceMatrix && (n = t.instanceMatrix), "instanceColor" === e && t.instanceColor && (n = t.instanceColor)), void 0 === i) return !0;
							if(i.attribute !== n) return !0;
							if(n && i.data !== n.data) return !0;
							a++
						}
					}
					return c.attributesNum !== a || c.index !== n
				}(s, y, d, x), _ && function(t, e, i, n) {
					const s = {},
						r = e.attributes;
					let a = 0;
					const o = i.getAttributes();
					for(const e in o) {
						if(o[e].location >= 0) {
							let i = r[e];
							void 0 === i && ("instanceMatrix" === e && t.instanceMatrix && (i = t.instanceMatrix), "instanceColor" === e && t.instanceColor && (i = t.instanceColor));
							const n = {};
							n.attribute = i, i && i.data && (n.data = i.data), s[e] = n, a++
						}
					}
					c.attributes = s, c.attributesNum = a, c.index = n
				}(s, y, d, x)
			} else {
				const t = !0 === l.wireframe;
				c.geometry === y.id && c.program === d.id && c.wireframe === t || (c.geometry = y.id, c.program = d.id, c.wireframe = t, _ = !0)
			}
			null !== x && i.update(x, 34963), (_ || h) && (h = !1, function(s, r, a, o) {
				if(!1 === n.isWebGL2 && (s.isInstancedMesh || o.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays")) return;
				p();
				const l = o.attributes,
					c = a.getAttributes(),
					h = r.defaultAttributeValues;
				for(const e in c) {
					const n = c[e];
					if(n.location >= 0) {
						let r = l[e];
						if(void 0 === r && ("instanceMatrix" === e && s.instanceMatrix && (r = s.instanceMatrix), "instanceColor" === e && s.instanceColor && (r = s.instanceColor)), void 0 !== r) {
							const e = r.normalized,
								a = r.itemSize,
								l = i.get(r);
							if(void 0 === l) continue;
							const c = l.buffer,
								h = l.type,
								u = l.bytesPerElement;
							if(r.isInterleavedBufferAttribute) {
								const i = r.data,
									l = i.stride,
									d = r.offset;
								if(i.isInstancedInterleavedBuffer) {
									for(let t = 0; t < n.locationSize; t++) m(n.location + t, i.meshPerAttribute);
									!0 !== s.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = i.meshPerAttribute * i.count)
								} else
									for(let t = 0; t < n.locationSize; t++) g(n.location + t);
								t.bindBuffer(34962, c);
								for(let t = 0; t < n.locationSize; t++) v(n.location + t, a / n.locationSize, h, e, l * u, (d + a / n.locationSize * t) * u)
							} else {
								if(r.isInstancedBufferAttribute) {
									for(let t = 0; t < n.locationSize; t++) m(n.location + t, r.meshPerAttribute);
									!0 !== s.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = r.meshPerAttribute * r.count)
								} else
									for(let t = 0; t < n.locationSize; t++) g(n.location + t);
								t.bindBuffer(34962, c);
								for(let t = 0; t < n.locationSize; t++) v(n.location + t, a / n.locationSize, h, e, a * u, a / n.locationSize * t * u)
							}
						} else if(void 0 !== h) {
							const i = h[e];
							if(void 0 !== i) switch(i.length) {
								case 2:
									t.vertexAttrib2fv(n.location, i);
									break;
								case 3:
									t.vertexAttrib3fv(n.location, i);
									break;
								case 4:
									t.vertexAttrib4fv(n.location, i);
									break;
								default:
									t.vertexAttrib1fv(n.location, i)
							}
						}
					}
				}
				f()
			}(s, l, d, y), null !== x && t.bindBuffer(34963, i.get(x).buffer))
		},
		reset: y,
		resetDefaultState: x,
		dispose: function() {
			y();
			for(const t in o) {
				const e = o[t];
				for(const t in e) {
					const i = e[t];
					for(const t in i) d(i[t].object), delete i[t];
					delete e[t]
				}
				delete o[t]
			}
		},
		releaseStatesOfGeometry: function(t) {
			if(void 0 === o[t.id]) return;
			const e = o[t.id];
			for(const t in e) {
				const i = e[t];
				for(const t in i) d(i[t].object), delete i[t];
				delete e[t]
			}
			delete o[t.id]
		},
		releaseStatesOfProgram: function(t) {
			for(const e in o) {
				const i = o[e];
				if(void 0 === i[t.id]) continue;
				const n = i[t.id];
				for(const t in n) d(n[t].object), delete n[t];
				delete i[t.id]
			}
		},
		initAttributes: p,
		enableAttribute: g,
		disableUnusedAttributes: f
	}
}

function ui(t, e, i, n) {
	const s = n.isWebGL2;
	let r;
	this.setMode = function(t) {
		r = t
	}, this.render = function(e, n) {
		t.drawArrays(r, e, n), i.update(n, r, 1)
	}, this.renderInstances = function(n, a, o) {
		if(0 === o) return;
		let l, c;
		if(s) l = t, c = "drawArraysInstanced";
		else if(l = e.get("ANGLE_instanced_arrays"), c = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
		l[c](r, n, a, o), i.update(a, r, o)
	}
}

function di(t, e, i) {
	let n;

	function s(e) {
		if("highp" === e) {
			if(t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
			e = "mediump"
		}
		return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
	}
	const r = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext;
	let a = void 0 !== i.precision ? i.precision : "highp";
	const o = s(a);
	o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), a = o);
	const l = r || e.has("WEBGL_draw_buffers"),
		c = !0 === i.logarithmicDepthBuffer,
		h = t.getParameter(34930),
		u = t.getParameter(35660),
		d = t.getParameter(3379),
		A = t.getParameter(34076),
		p = t.getParameter(34921),
		g = t.getParameter(36347),
		m = t.getParameter(36348),
		f = t.getParameter(36349),
		v = u > 0,
		y = r || e.has("OES_texture_float");
	return {
		isWebGL2: r,
		drawBuffers: l,
		getMaxAnisotropy: function() {
			if(void 0 !== n) return n;
			if(!0 === e.has("EXT_texture_filter_anisotropic")) {
				const i = e.get("EXT_texture_filter_anisotropic");
				n = t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
			} else n = 0;
			return n
		},
		getMaxPrecision: s,
		precision: a,
		logarithmicDepthBuffer: c,
		maxTextures: h,
		maxVertexTextures: u,
		maxTextureSize: d,
		maxCubemapSize: A,
		maxAttributes: p,
		maxVertexUniforms: g,
		maxVaryings: m,
		maxFragmentUniforms: f,
		vertexTextures: v,
		floatFragmentTextures: y,
		floatVertexTextures: v && y,
		maxSamples: r ? t.getParameter(36183) : 0
	}
}

function Ai(t) {
	const e = this;
	let i = null,
		n = 0,
		s = !1,
		r = !1;
	const a = new Ze,
		o = new y,
		l = {
			value: null,
			needsUpdate: !1
		};

	function c() {
		l.value !== i && (l.value = i, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0
	}

	function h(t, i, n, s) {
		const r = null !== t ? t.length : 0;
		let c = null;
		if(0 !== r) {
			if(c = l.value, !0 !== s || null === c) {
				const e = n + 4 * r,
					s = i.matrixWorldInverse;
				o.getNormalMatrix(s), (null === c || c.length < e) && (c = new Float32Array(e));
				for(let e = 0, i = n; e !== r; ++e, i += 4) a.copy(t[e]).applyMatrix4(s, o), a.normal.toArray(c, i), c[i + 3] = a.constant
			}
			l.value = c, l.needsUpdate = !0
		}
		return e.numPlanes = r, e.numIntersection = 0, c
	}
	this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, e, r) {
		const a = 0 !== t.length || e || 0 !== n || s;
		return s = e, i = h(t, r, 0), n = t.length, a
	}, this.beginShadows = function() {
		r = !0, h(null)
	}, this.endShadows = function() {
		r = !1, c()
	}, this.setState = function(e, a, o) {
		const u = e.clippingPlanes,
			d = e.clipIntersection,
			A = e.clipShadows,
			p = t.get(e);
		if(!s || null === u || 0 === u.length || r && !A) r ? h(null) : c();
		else {
			const t = r ? 0 : n,
				e = 4 * t;
			let s = p.clippingState || null;
			l.value = s, s = h(u, a, e, o);
			for(let t = 0; t !== e; ++t) s[t] = i[t];
			p.clippingState = s, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += t
		}
	}
}

function pi(t) {
	let e = new WeakMap;

	function i(t, e) {
		return 303 === e ? t.mapping = 301 : 304 === e && (t.mapping = 302), t
	}

	function n(t) {
		const i = t.target;
		i.removeEventListener("dispose", n);
		const s = e.get(i);
		void 0 !== s && (e.delete(i), s.dispose())
	}
	return {
		get: function(s) {
			if(s && s.isTexture && !1 === s.isRenderTargetTexture) {
				const r = s.mapping;
				if(303 === r || 304 === r) {
					if(e.has(s)) {
						return i(e.get(s).texture, s.mapping)
					} {
						const r = s.image;
						if(r && r.height > 0) {
							const a = new Je(r.height / 2);
							return a.fromEquirectangularTexture(t, s), e.set(s, a), s.addEventListener("dispose", n), i(a.texture, s.mapping)
						}
						return null
					}
				}
			}
			return s
		},
		dispose: function() {
			e = new WeakMap
		}
	}
}
li.physical = {
	uniforms: He([li.standard.uniforms, {
		clearcoat: {
			value: 0
		},
		clearcoatMap: {
			value: null
		},
		clearcoatRoughness: {
			value: 0
		},
		clearcoatRoughnessMap: {
			value: null
		},
		clearcoatNormalScale: {
			value: new v(1, 1)
		},
		clearcoatNormalMap: {
			value: null
		},
		iridescence: {
			value: 0
		},
		iridescenceMap: {
			value: null
		},
		iridescenceIOR: {
			value: 1.3
		},
		iridescenceThicknessMinimum: {
			value: 100
		},
		iridescenceThicknessMaximum: {
			value: 400
		},
		iridescenceThicknessMap: {
			value: null
		},
		sheen: {
			value: 0
		},
		sheenColor: {
			value: new D(0)
		},
		sheenColorMap: {
			value: null
		},
		sheenRoughness: {
			value: 1
		},
		sheenRoughnessMap: {
			value: null
		},
		transmission: {
			value: 0
		},
		transmissionMap: {
			value: null
		},
		transmissionSamplerSize: {
			value: new v
		},
		transmissionSamplerMap: {
			value: null
		},
		thickness: {
			value: 0
		},
		thicknessMap: {
			value: null
		},
		attenuationDistance: {
			value: 0
		},
		attenuationColor: {
			value: new D(0)
		},
		specularIntensity: {
			value: 1
		},
		specularIntensityMap: {
			value: null
		},
		specularColor: {
			value: new D(1, 1, 1)
		},
		specularColorMap: {
			value: null
		}
	}]),
	vertexShader: ai.meshphysical_vert,
	fragmentShader: ai.meshphysical_frag
};
class gi extends We {
	constructor(t = -1, e = 1, i = 1, n = -1, s = .1, r = 2e3) {
		super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = i, this.bottom = n, this.near = s, this.far = r, this.updateProjectionMatrix()
	}
	copy(t, e) {
		return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
	}
	setViewOffset(t, e, i, n, s, r) {
		null === this.view && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = s, this.view.height = r, this.updateProjectionMatrix()
	}
	clearViewOffset() {
		null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
	}
	updateProjectionMatrix() {
		const t = (this.right - this.left) / (2 * this.zoom),
			e = (this.top - this.bottom) / (2 * this.zoom),
			i = (this.right + this.left) / 2,
			n = (this.top + this.bottom) / 2;
		let s = i - t,
			r = i + t,
			a = n + e,
			o = n - e;
		if(null !== this.view && this.view.enabled) {
			const t = (this.right - this.left) / this.view.fullWidth / this.zoom,
				e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
			s += t * this.view.offsetX, r = s + t * this.view.width, a -= e * this.view.offsetY, o = a - e * this.view.height
		}
		this.projectionMatrix.makeOrthographic(s, r, a, o, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
	}
	toJSON(t) {
		const e = super.toJSON(t);
		return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
	}
}
const mi = [.125, .215, .35, .446, .526, .582],
	fi = new gi,
	vi = new D;
let yi = null;
const xi = (1 + Math.sqrt(5)) / 2,
	_i = 1 / xi,
	Ei = [new V(1, 1, 1), new V(-1, 1, 1), new V(1, 1, -1), new V(-1, 1, -1), new V(0, xi, _i), new V(0, xi, -_i), new V(_i, 0, xi), new V(-_i, 0, xi), new V(xi, _i, 0), new V(-xi, _i, 0)];
class wi {
	constructor(t) {
		this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial)
	}
	fromScene(t, e = 0, i = .1, n = 100) {
		yi = this._renderer.getRenderTarget(), this._setSize(256);
		const s = this._allocateTargets();
		return s.depthBuffer = !0, this._sceneToCubeUV(t, i, n, s), e > 0 && this._blur(s, 0, 0, e), this._applyPMREM(s), this._cleanup(s), s
	}
	fromEquirectangular(t, e = null) {
		return this._fromTexture(t, e)
	}
	fromCubemap(t, e = null) {
		return this._fromTexture(t, e)
	}
	compileCubemapShader() {
		null === this._cubemapMaterial && (this._cubemapMaterial = Si(), this._compileMaterial(this._cubemapMaterial))
	}
	compileEquirectangularShader() {
		null === this._equirectMaterial && (this._equirectMaterial = Ci(), this._compileMaterial(this._equirectMaterial))
	}
	dispose() {
		this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose()
	}
	_setSize(t) {
		this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax)
	}
	_dispose() {
		null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
		for(let t = 0; t < this._lodPlanes.length; t++) this._lodPlanes[t].dispose()
	}
	_cleanup(t) {
		this._renderer.setRenderTarget(yi), t.scissorTest = !1, Ii(t, 0, 0, t.width, t.height)
	}
	_fromTexture(t, e) {
		301 === t.mapping || 302 === t.mapping ? this._setSize(0 === t.image.length ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), yi = this._renderer.getRenderTarget();
		const i = e || this._allocateTargets();
		return this._textureToCubeUV(t, i), this._applyPMREM(i), this._cleanup(i), i
	}
	_allocateTargets() {
		const t = 3 * Math.max(this._cubeSize, 112),
			e = 4 * this._cubeSize,
			i = {
				magFilter: 1006,
				minFilter: 1006,
				generateMipmaps: !1,
				type: 1016,
				format: 1023,
				encoding: 3e3,
				depthBuffer: !1
			},
			n = bi(t, e, i);
		if(null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== t) {
			null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = bi(t, e, i);
			const {
				_lodMax: n
			} = this;
			({
				sizeLods: this._sizeLods,
				lodPlanes: this._lodPlanes,
				sigmas: this._sigmas
			} = function(t) {
				const e = [],
					i = [],
					n = [];
				let s = t;
				const r = t - 4 + 1 + mi.length;
				for(let a = 0; a < r; a++) {
					const r = Math.pow(2, s);
					i.push(r);
					let o = 1 / r;
					a > t - 4 ? o = mi[a - t + 4 - 1] : 0 === a && (o = 0), n.push(o);
					const l = 1 / (r - 2),
						c = -l,
						h = 1 + l,
						u = [c, c, h, c, h, h, c, c, h, h, c, h],
						d = 6,
						A = 6,
						p = 3,
						g = 2,
						m = 1,
						f = new Float32Array(p * A * d),
						v = new Float32Array(g * A * d),
						y = new Float32Array(m * A * d);
					for(let t = 0; t < d; t++) {
						const e = t % 3 * 2 / 3 - 1,
							i = t > 2 ? 0 : -1,
							n = [e, i, 0, e + 2 / 3, i, 0, e + 2 / 3, i + 1, 0, e, i, 0, e + 2 / 3, i + 1, 0, e, i + 1, 0];
						f.set(n, p * A * t), v.set(u, g * A * t);
						const s = [t, t, t, t, t, t];
						y.set(s, m * A * t)
					}
					const x = new xe;
					x.setAttribute("position", new ce(f, p)), x.setAttribute("uv", new ce(v, g)), x.setAttribute("faceIndex", new ce(y, m)), e.push(x), s > 4 && s--
				}
				return {
					lodPlanes: e,
					sizeLods: i,
					sigmas: n
				}
			}(n)), this._blurMaterial = function(t, e, i) {
				const n = new Float32Array(20),
					s = new V(0, 1, 0);
				return new Ve({
					name: "SphericalGaussianBlur",
					defines: {
						n: 20,
						CUBEUV_TEXEL_WIDTH: 1 / e,
						CUBEUV_TEXEL_HEIGHT: 1 / i,
						CUBEUV_MAX_MIP: `${t}.0`
					},
					uniforms: {
						envMap: {
							value: null
						},
						samples: {
							value: 1
						},
						weights: {
							value: n
						},
						latitudinal: {
							value: !1
						},
						dTheta: {
							value: 0
						},
						mipInt: {
							value: 0
						},
						poleAxis: {
							value: s
						}
					},
					vertexShader: Mi(),
					fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
					blending: 0,
					depthTest: !1,
					depthWrite: !1
				})
			}(n, t, e)
		}
		return n
	}
	_compileMaterial(t) {
		const e = new Ne(this._lodPlanes[0], t);
		this._renderer.compile(e, fi)
	}
	_sceneToCubeUV(t, e, i, n) {
		const s = new qe(90, 1, e, i),
			r = [1, -1, 1, 1, 1, 1],
			a = [1, 1, 1, -1, -1, -1],
			o = this._renderer,
			l = o.autoClear,
			c = o.toneMapping;
		o.getClearColor(vi), o.toneMapping = 0, o.autoClear = !1;
		const h = new ae({
				name: "PMREM.Background",
				side: 1,
				depthWrite: !1,
				depthTest: !1
			}),
			u = new Ne(new Oe, h);
		let d = !1;
		const A = t.background;
		A ? A.isColor && (h.color.copy(A), t.background = null, d = !0) : (h.color.copy(vi), d = !0);
		for(let e = 0; e < 6; e++) {
			const i = e % 3;
			0 === i ? (s.up.set(0, r[e], 0), s.lookAt(a[e], 0, 0)) : 1 === i ? (s.up.set(0, 0, r[e]), s.lookAt(0, a[e], 0)) : (s.up.set(0, r[e], 0), s.lookAt(0, 0, a[e]));
			const l = this._cubeSize;
			Ii(n, i * l, e > 2 ? l : 0, l, l), o.setRenderTarget(n), d && o.render(u, s), o.render(t, s)
		}
		u.geometry.dispose(), u.material.dispose(), o.toneMapping = c, o.autoClear = l, t.background = A
	}
	_textureToCubeUV(t, e) {
		const i = this._renderer,
			n = 301 === t.mapping || 302 === t.mapping;
		n ? (null === this._cubemapMaterial && (this._cubemapMaterial = Si()), this._cubemapMaterial.uniforms.flipEnvMap.value = !1 === t.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = Ci());
		const s = n ? this._cubemapMaterial : this._equirectMaterial,
			r = new Ne(this._lodPlanes[0], s);
		s.uniforms.envMap.value = t;
		const a = this._cubeSize;
		Ii(e, 0, 0, 3 * a, 2 * a), i.setRenderTarget(e), i.render(r, fi)
	}
	_applyPMREM(t) {
		const e = this._renderer,
			i = e.autoClear;
		e.autoClear = !1;
		for(let e = 1; e < this._lodPlanes.length; e++) {
			const i = Math.sqrt(this._sigmas[e] * this._sigmas[e] - this._sigmas[e - 1] * this._sigmas[e - 1]),
				n = Ei[(e - 1) % Ei.length];
			this._blur(t, e - 1, e, i, n)
		}
		e.autoClear = i
	}
	_blur(t, e, i, n, s) {
		const r = this._pingPongRenderTarget;
		this._halfBlur(t, r, e, i, n, "latitudinal", s), this._halfBlur(r, t, i, i, n, "longitudinal", s)
	}
	_halfBlur(t, e, i, n, s, r, a) {
		const o = this._renderer,
			l = this._blurMaterial;
		"latitudinal" !== r && "longitudinal" !== r && console.error("blur direction must be either latitudinal or longitudinal!");
		const c = new Ne(this._lodPlanes[n], l),
			h = l.uniforms,
			u = this._sizeLods[i] - 1,
			d = isFinite(s) ? Math.PI / (2 * u) : 2 * Math.PI / 39,
			A = s / d,
			p = isFinite(s) ? 1 + Math.floor(3 * A) : 20;
		p > 20 && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to 20`);
		const g = [];
		let m = 0;
		for(let t = 0; t < 20; ++t) {
			const e = t / A,
				i = Math.exp(-e * e / 2);
			g.push(i), 0 === t ? m += i : t < p && (m += 2 * i)
		}
		for(let t = 0; t < g.length; t++) g[t] = g[t] / m;
		h.envMap.value = t.texture, h.samples.value = p, h.weights.value = g, h.latitudinal.value = "latitudinal" === r, a && (h.poleAxis.value = a);
		const {
			_lodMax: f
		} = this;
		h.dTheta.value = d, h.mipInt.value = f - i;
		const v = this._sizeLods[n];
		Ii(e, 3 * v * (n > f - 4 ? n - f + 4 : 0), 4 * (this._cubeSize - v), 3 * v, 2 * v), o.setRenderTarget(e), o.render(c, fi)
	}
}

function bi(t, e, i) {
	const n = new O(t, e, i);
	return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n
}

function Ii(t, e, i, n, s) {
	t.viewport.set(e, i, n, s), t.scissor.set(e, i, n, s)
}

function Ci() {
	return new Ve({
		name: "EquirectangularToCubeUV",
		uniforms: {
			envMap: {
				value: null
			}
		},
		vertexShader: Mi(),
		fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	})
}

function Si() {
	return new Ve({
		name: "CubemapToCubeUV",
		uniforms: {
			envMap: {
				value: null
			},
			flipEnvMap: {
				value: -1
			}
		},
		vertexShader: Mi(),
		fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	})
}

function Mi() {
	return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t"
}

function Bi(t) {
	let e = new WeakMap,
		i = null;

	function n(t) {
		const i = t.target;
		i.removeEventListener("dispose", n);
		const s = e.get(i);
		void 0 !== s && (e.delete(i), s.dispose())
	}
	return {
		get: function(s) {
			if(s && s.isTexture) {
				const r = s.mapping,
					a = 303 === r || 304 === r,
					o = 301 === r || 302 === r;
				if(a || o) {
					if(s.isRenderTargetTexture && !0 === s.needsPMREMUpdate) {
						s.needsPMREMUpdate = !1;
						let n = e.get(s);
						return null === i && (i = new wi(t)), n = a ? i.fromEquirectangular(s, n) : i.fromCubemap(s, n), e.set(s, n), n.texture
					}
					if(e.has(s)) return e.get(s).texture; {
						const r = s.image;
						if(a && r && r.height > 0 || o && r && function(t) {
								let e = 0;
								const i = 6;
								for(let n = 0; n < i; n++) void 0 !== t[n] && e++;
								return e === i
							}(r)) {
							null === i && (i = new wi(t));
							const r = a ? i.fromEquirectangular(s) : i.fromCubemap(s);
							return e.set(s, r), s.addEventListener("dispose", n), r.texture
						}
						return null
					}
				}
			}
			return s
		},
		dispose: function() {
			e = new WeakMap, null !== i && (i.dispose(), i = null)
		}
	}
}

function Ti(t) {
	const e = {};

	function i(i) {
		if(void 0 !== e[i]) return e[i];
		let n;
		switch(i) {
			case "WEBGL_depth_texture":
				n = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
				break;
			case "EXT_texture_filter_anisotropic":
				n = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
				break;
			case "WEBGL_compressed_texture_s3tc":
				n = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
				break;
			case "WEBGL_compressed_texture_pvrtc":
				n = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
				break;
			default:
				n = t.getExtension(i)
		}
		return e[i] = n, n
	}
	return {
		has: function(t) {
			return null !== i(t)
		},
		init: function(t) {
			t.isWebGL2 ? i("EXT_color_buffer_float") : (i("WEBGL_depth_texture"), i("OES_texture_float"), i("OES_texture_half_float"), i("OES_texture_half_float_linear"), i("OES_standard_derivatives"), i("OES_element_index_uint"), i("OES_vertex_array_object"), i("ANGLE_instanced_arrays")), i("OES_texture_float_linear"), i("EXT_color_buffer_half_float"), i("WEBGL_multisampled_render_to_texture")
		},
		get: function(t) {
			const e = i(t);
			return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."), e
		}
	}
}

function Ri(t, e, i, n) {
	const s = {},
		r = new WeakMap;

	function a(t) {
		const o = t.target;
		null !== o.index && e.remove(o.index);
		for(const t in o.attributes) e.remove(o.attributes[t]);
		o.removeEventListener("dispose", a), delete s[o.id];
		const l = r.get(o);
		l && (e.remove(l), r.delete(o)), n.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, i.memory.geometries--
	}

	function o(t) {
		const i = [],
			n = t.index,
			s = t.attributes.position;
		let a = 0;
		if(null !== n) {
			const t = n.array;
			a = n.version;
			for(let e = 0, n = t.length; e < n; e += 3) {
				const n = t[e + 0],
					s = t[e + 1],
					r = t[e + 2];
				i.push(n, s, s, r, r, n)
			}
		} else {
			const t = s.array;
			a = s.version;
			for(let e = 0, n = t.length / 3 - 1; e < n; e += 3) {
				const t = e + 0,
					n = e + 1,
					s = e + 2;
				i.push(t, n, n, s, s, t)
			}
		}
		const o = new(x(i) ? ue : he)(i, 1);
		o.version = a;
		const l = r.get(t);
		l && e.remove(l), r.set(t, o)
	}
	return {
		get: function(t, e) {
			return !0 === s[e.id] || (e.addEventListener("dispose", a), s[e.id] = !0, i.memory.geometries++), e
		},
		update: function(t) {
			const i = t.attributes;
			for(const t in i) e.update(i[t], 34962);
			const n = t.morphAttributes;
			for(const t in n) {
				const i = n[t];
				for(let t = 0, n = i.length; t < n; t++) e.update(i[t], 34962)
			}
		},
		getWireframeAttribute: function(t) {
			const e = r.get(t);
			if(e) {
				const i = t.index;
				null !== i && e.version < i.version && o(t)
			} else o(t);
			return r.get(t)
		}
	}
}

function Di(t, e, i, n) {
	const s = n.isWebGL2;
	let r, a, o;
	this.setMode = function(t) {
		r = t
	}, this.setIndex = function(t) {
		a = t.type, o = t.bytesPerElement
	}, this.render = function(e, n) {
		t.drawElements(r, n, a, e * o), i.update(n, r, 1)
	}, this.renderInstances = function(n, l, c) {
		if(0 === c) return;
		let h, u;
		if(s) h = t, u = "drawElementsInstanced";
		else if(h = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", null === h) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
		h[u](r, l, a, n * o, c), i.update(l, r, c)
	}
}

function Li(t) {
	const e = {
		frame: 0,
		calls: 0,
		triangles: 0,
		points: 0,
		lines: 0
	};
	return {
		memory: {
			geometries: 0,
			textures: 0
		},
		render: e,
		programs: null,
		autoReset: !0,
		reset: function() {
			e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0
		},
		update: function(t, i, n) {
			switch(e.calls++, i) {
				case 4:
					e.triangles += n * (t / 3);
					break;
				case 1:
					e.lines += n * (t / 2);
					break;
				case 3:
					e.lines += n * (t - 1);
					break;
				case 2:
					e.lines += n * t;
					break;
				case 0:
					e.points += n * t;
					break;
				default:
					console.error("THREE.WebGLInfo: Unknown draw mode:", i)
			}
		}
	}
}

function Qi(t, e) {
	return t[0] - e[0]
}

function Pi(t, e) {
	return Math.abs(e[1]) - Math.abs(t[1])
}

function Fi(t, e, i) {
	const n = {},
		s = new Float32Array(8),
		r = new WeakMap,
		a = new k,
		o = [];
	for(let t = 0; t < 8; t++) o[t] = [t, 0];
	return {
		update: function(l, c, h, u) {
			const d = l.morphTargetInfluences;
			if(!0 === e.isWebGL2) {
				const n = c.morphAttributes.position || c.morphAttributes.normal || c.morphAttributes.color,
					s = void 0 !== n ? n.length : 0;
				let o = r.get(c);
				if(void 0 === o || o.count !== s) {
					void 0 !== o && o.texture.dispose();
					const t = void 0 !== c.morphAttributes.position,
						i = void 0 !== c.morphAttributes.normal,
						n = void 0 !== c.morphAttributes.color,
						l = c.morphAttributes.position || [],
						h = c.morphAttributes.normal || [],
						u = c.morphAttributes.color || [];
					let d = 0;
					!0 === t && (d = 1), !0 === i && (d = 2), !0 === n && (d = 3);
					let A = c.attributes.position.count * d,
						p = 1;
					A > e.maxTextureSize && (p = Math.ceil(A / e.maxTextureSize), A = e.maxTextureSize);
					const g = new Float32Array(A * p * 4 * s),
						m = new G(g, A, p, s);
					m.type = 1015, m.needsUpdate = !0;
					const f = 4 * d;
					for(let e = 0; e < s; e++) {
						const s = l[e],
							r = h[e],
							o = u[e],
							c = A * p * 4 * e;
						for(let e = 0; e < s.count; e++) {
							const l = e * f;
							!0 === t && (a.fromBufferAttribute(s, e), g[c + l + 0] = a.x, g[c + l + 1] = a.y, g[c + l + 2] = a.z, g[c + l + 3] = 0), !0 === i && (a.fromBufferAttribute(r, e), g[c + l + 4] = a.x, g[c + l + 5] = a.y, g[c + l + 6] = a.z, g[c + l + 7] = 0), !0 === n && (a.fromBufferAttribute(o, e), g[c + l + 8] = a.x, g[c + l + 9] = a.y, g[c + l + 10] = a.z, g[c + l + 11] = 4 === o.itemSize ? a.w : 1)
						}
					}
					o = {
						count: s,
						texture: m,
						size: new v(A, p)
					}, r.set(c, o), c.addEventListener("dispose", (function t() {
						m.dispose(), r.delete(c), c.removeEventListener("dispose", t)
					}))
				}
				let l = 0;
				for(let t = 0; t < d.length; t++) l += d[t];
				const h = c.morphTargetsRelative ? 1 : 1 - l;
				u.getUniforms().setValue(t, "morphTargetBaseInfluence", h), u.getUniforms().setValue(t, "morphTargetInfluences", d), u.getUniforms().setValue(t, "morphTargetsTexture", o.texture, i), u.getUniforms().setValue(t, "morphTargetsTextureSize", o.size)
			} else {
				const e = void 0 === d ? 0 : d.length;
				let i = n[c.id];
				if(void 0 === i || i.length !== e) {
					i = [];
					for(let t = 0; t < e; t++) i[t] = [t, 0];
					n[c.id] = i
				}
				for(let t = 0; t < e; t++) {
					const e = i[t];
					e[0] = t, e[1] = d[t]
				}
				i.sort(Pi);
				for(let t = 0; t < 8; t++) t < e && i[t][1] ? (o[t][0] = i[t][0], o[t][1] = i[t][1]) : (o[t][0] = Number.MAX_SAFE_INTEGER, o[t][1] = 0);
				o.sort(Qi);
				const r = c.morphAttributes.position,
					a = c.morphAttributes.normal;
				let l = 0;
				for(let t = 0; t < 8; t++) {
					const e = o[t],
						i = e[0],
						n = e[1];
					i !== Number.MAX_SAFE_INTEGER && n ? (r && c.getAttribute("morphTarget" + t) !== r[i] && c.setAttribute("morphTarget" + t, r[i]), a && c.getAttribute("morphNormal" + t) !== a[i] && c.setAttribute("morphNormal" + t, a[i]), s[t] = n, l += n) : (r && !0 === c.hasAttribute("morphTarget" + t) && c.deleteAttribute("morphTarget" + t), a && !0 === c.hasAttribute("morphNormal" + t) && c.deleteAttribute("morphNormal" + t), s[t] = 0)
				}
				const h = c.morphTargetsRelative ? 1 : 1 - l;
				u.getUniforms().setValue(t, "morphTargetBaseInfluence", h), u.getUniforms().setValue(t, "morphTargetInfluences", s)
			}
		}
	}
}

function Ui(t, e, i, n) {
	let s = new WeakMap;

	function r(t) {
		const e = t.target;
		e.removeEventListener("dispose", r), i.remove(e.instanceMatrix), null !== e.instanceColor && i.remove(e.instanceColor)
	}
	return {
		update: function(t) {
			const a = n.render.frame,
				o = t.geometry,
				l = e.get(t, o);
			return s.get(l) !== a && (e.update(l), s.set(l, a)), t.isInstancedMesh && (!1 === t.hasEventListener("dispose", r) && t.addEventListener("dispose", r), i.update(t.instanceMatrix, 34962), null !== t.instanceColor && i.update(t.instanceColor, 34962)), l
		},
		dispose: function() {
			s = new WeakMap
		}
	}
}
const Ni = new N,
	ki = new G,
	Oi = new H,
	Gi = new Ye,
	Hi = [],
	zi = [],
	Vi = new Float32Array(16),
	Wi = new Float32Array(9),
	qi = new Float32Array(4);

function ji(t, e, i) {
	const n = t[0];
	if(n <= 0 || n > 0) return t;
	const s = e * i;
	let r = Hi[s];
	if(void 0 === r && (r = new Float32Array(s), Hi[s] = r), 0 !== e) {
		n.toArray(r, 0);
		for(let n = 1, s = 0; n !== e; ++n) s += i, t[n].toArray(r, s)
	}
	return r
}

function Yi(t, e) {
	if(t.length !== e.length) return !1;
	for(let i = 0, n = t.length; i < n; i++)
		if(t[i] !== e[i]) return !1;
	return !0
}

function Ji(t, e) {
	for(let i = 0, n = e.length; i < n; i++) t[i] = e[i]
}

function Xi(t, e) {
	let i = zi[e];
	void 0 === i && (i = new Int32Array(e), zi[e] = i);
	for(let n = 0; n !== e; ++n) i[n] = t.allocateTextureUnit();
	return i
}

function Ki(t, e) {
	const i = this.cache;
	i[0] !== e && (t.uniform1f(this.addr, e), i[0] = e)
}

function $i(t, e) {
	const i = this.cache;
	if(void 0 !== e.x) i[0] === e.x && i[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), i[0] = e.x, i[1] = e.y);
	else {
		if(Yi(i, e)) return;
		t.uniform2fv(this.addr, e), Ji(i, e)
	}
}

function Zi(t, e) {
	const i = this.cache;
	if(void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), i[0] = e.x, i[1] = e.y, i[2] = e.z);
	else if(void 0 !== e.r) i[0] === e.r && i[1] === e.g && i[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), i[0] = e.r, i[1] = e.g, i[2] = e.b);
	else {
		if(Yi(i, e)) return;
		t.uniform3fv(this.addr, e), Ji(i, e)
	}
}

function tn(t, e) {
	const i = this.cache;
	if(void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z && i[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), i[0] = e.x, i[1] = e.y, i[2] = e.z, i[3] = e.w);
	else {
		if(Yi(i, e)) return;
		t.uniform4fv(this.addr, e), Ji(i, e)
	}
}

function en(t, e) {
	const i = this.cache,
		n = e.elements;
	if(void 0 === n) {
		if(Yi(i, e)) return;
		t.uniformMatrix2fv(this.addr, !1, e), Ji(i, e)
	} else {
		if(Yi(i, n)) return;
		qi.set(n), t.uniformMatrix2fv(this.addr, !1, qi), Ji(i, n)
	}
}

function nn(t, e) {
	const i = this.cache,
		n = e.elements;
	if(void 0 === n) {
		if(Yi(i, e)) return;
		t.uniformMatrix3fv(this.addr, !1, e), Ji(i, e)
	} else {
		if(Yi(i, n)) return;
		Wi.set(n), t.uniformMatrix3fv(this.addr, !1, Wi), Ji(i, n)
	}
}

function sn(t, e) {
	const i = this.cache,
		n = e.elements;
	if(void 0 === n) {
		if(Yi(i, e)) return;
		t.uniformMatrix4fv(this.addr, !1, e), Ji(i, e)
	} else {
		if(Yi(i, n)) return;
		Vi.set(n), t.uniformMatrix4fv(this.addr, !1, Vi), Ji(i, n)
	}
}

function rn(t, e) {
	const i = this.cache;
	i[0] !== e && (t.uniform1i(this.addr, e), i[0] = e)
}

function an(t, e) {
	const i = this.cache;
	Yi(i, e) || (t.uniform2iv(this.addr, e), Ji(i, e))
}

function on(t, e) {
	const i = this.cache;
	Yi(i, e) || (t.uniform3iv(this.addr, e), Ji(i, e))
}

function ln(t, e) {
	const i = this.cache;
	Yi(i, e) || (t.uniform4iv(this.addr, e), Ji(i, e))
}

function cn(t, e) {
	const i = this.cache;
	i[0] !== e && (t.uniform1ui(this.addr, e), i[0] = e)
}

function hn(t, e) {
	const i = this.cache;
	Yi(i, e) || (t.uniform2uiv(this.addr, e), Ji(i, e))
}

function un(t, e) {
	const i = this.cache;
	Yi(i, e) || (t.uniform3uiv(this.addr, e), Ji(i, e))
}

function dn(t, e) {
	const i = this.cache;
	Yi(i, e) || (t.uniform4uiv(this.addr, e), Ji(i, e))
}

function An(t, e, i) {
	const n = this.cache,
		s = i.allocateTextureUnit();
	n[0] !== s && (t.uniform1i(this.addr, s), n[0] = s), i.setTexture2D(e || Ni, s)
}

function pn(t, e, i) {
	const n = this.cache,
		s = i.allocateTextureUnit();
	n[0] !== s && (t.uniform1i(this.addr, s), n[0] = s), i.setTexture3D(e || Oi, s)
}

function gn(t, e, i) {
	const n = this.cache,
		s = i.allocateTextureUnit();
	n[0] !== s && (t.uniform1i(this.addr, s), n[0] = s), i.setTextureCube(e || Gi, s)
}

function mn(t, e, i) {
	const n = this.cache,
		s = i.allocateTextureUnit();
	n[0] !== s && (t.uniform1i(this.addr, s), n[0] = s), i.setTexture2DArray(e || ki, s)
}

function fn(t, e) {
	t.uniform1fv(this.addr, e)
}

function vn(t, e) {
	const i = ji(e, this.size, 2);
	t.uniform2fv(this.addr, i)
}

function yn(t, e) {
	const i = ji(e, this.size, 3);
	t.uniform3fv(this.addr, i)
}

function xn(t, e) {
	const i = ji(e, this.size, 4);
	t.uniform4fv(this.addr, i)
}

function _n(t, e) {
	const i = ji(e, this.size, 4);
	t.uniformMatrix2fv(this.addr, !1, i)
}

function En(t, e) {
	const i = ji(e, this.size, 9);
	t.uniformMatrix3fv(this.addr, !1, i)
}

function wn(t, e) {
	const i = ji(e, this.size, 16);
	t.uniformMatrix4fv(this.addr, !1, i)
}

function bn(t, e) {
	t.uniform1iv(this.addr, e)
}

function In(t, e) {
	t.uniform2iv(this.addr, e)
}

function Cn(t, e) {
	t.uniform3iv(this.addr, e)
}

function Sn(t, e) {
	t.uniform4iv(this.addr, e)
}

function Mn(t, e) {
	t.uniform1uiv(this.addr, e)
}

function Bn(t, e) {
	t.uniform2uiv(this.addr, e)
}

function Tn(t, e) {
	t.uniform3uiv(this.addr, e)
}

function Rn(t, e) {
	t.uniform4uiv(this.addr, e)
}

function Dn(t, e, i) {
	const n = e.length,
		s = Xi(i, n);
	t.uniform1iv(this.addr, s);
	for(let t = 0; t !== n; ++t) i.setTexture2D(e[t] || Ni, s[t])
}

function Ln(t, e, i) {
	const n = e.length,
		s = Xi(i, n);
	t.uniform1iv(this.addr, s);
	for(let t = 0; t !== n; ++t) i.setTexture3D(e[t] || Oi, s[t])
}

function Qn(t, e, i) {
	const n = e.length,
		s = Xi(i, n);
	t.uniform1iv(this.addr, s);
	for(let t = 0; t !== n; ++t) i.setTextureCube(e[t] || Gi, s[t])
}

function Pn(t, e, i) {
	const n = e.length,
		s = Xi(i, n);
	t.uniform1iv(this.addr, s);
	for(let t = 0; t !== n; ++t) i.setTexture2DArray(e[t] || ki, s[t])
}
class Fn {
	constructor(t, e, i) {
		this.id = t, this.addr = i, this.cache = [], this.setValue = function(t) {
			switch(t) {
				case 5126:
					return Ki;
				case 35664:
					return $i;
				case 35665:
					return Zi;
				case 35666:
					return tn;
				case 35674:
					return en;
				case 35675:
					return nn;
				case 35676:
					return sn;
				case 5124:
				case 35670:
					return rn;
				case 35667:
				case 35671:
					return an;
				case 35668:
				case 35672:
					return on;
				case 35669:
				case 35673:
					return ln;
				case 5125:
					return cn;
				case 36294:
					return hn;
				case 36295:
					return un;
				case 36296:
					return dn;
				case 35678:
				case 36198:
				case 36298:
				case 36306:
				case 35682:
					return An;
				case 35679:
				case 36299:
				case 36307:
					return pn;
				case 35680:
				case 36300:
				case 36308:
				case 36293:
					return gn;
				case 36289:
				case 36303:
				case 36311:
				case 36292:
					return mn
			}
		}(e.type)
	}
}
class Un {
	constructor(t, e, i) {
		this.id = t, this.addr = i, this.cache = [], this.size = e.size, this.setValue = function(t) {
			switch(t) {
				case 5126:
					return fn;
				case 35664:
					return vn;
				case 35665:
					return yn;
				case 35666:
					return xn;
				case 35674:
					return _n;
				case 35675:
					return En;
				case 35676:
					return wn;
				case 5124:
				case 35670:
					return bn;
				case 35667:
				case 35671:
					return In;
				case 35668:
				case 35672:
					return Cn;
				case 35669:
				case 35673:
					return Sn;
				case 5125:
					return Mn;
				case 36294:
					return Bn;
				case 36295:
					return Tn;
				case 36296:
					return Rn;
				case 35678:
				case 36198:
				case 36298:
				case 36306:
				case 35682:
					return Dn;
				case 35679:
				case 36299:
				case 36307:
					return Ln;
				case 35680:
				case 36300:
				case 36308:
				case 36293:
					return Qn;
				case 36289:
				case 36303:
				case 36311:
				case 36292:
					return Pn
			}
		}(e.type)
	}
}
class Nn {
	constructor(t) {
		this.id = t, this.seq = [], this.map = {}
	}
	setValue(t, e, i) {
		const n = this.seq;
		for(let s = 0, r = n.length; s !== r; ++s) {
			const r = n[s];
			r.setValue(t, e[r.id], i)
		}
	}
}
const kn = /(\w+)(\])?(\[|\.)?/g;

function On(t, e) {
	t.seq.push(e), t.map[e.id] = e
}

function Gn(t, e, i) {
	const n = t.name,
		s = n.length;
	for(kn.lastIndex = 0;;) {
		const r = kn.exec(n),
			a = kn.lastIndex;
		let o = r[1];
		const l = "]" === r[2],
			c = r[3];
		if(l && (o |= 0), void 0 === c || "[" === c && a + 2 === s) {
			On(i, void 0 === c ? new Fn(o, t, e) : new Un(o, t, e));
			break
		} {
			let t = i.map[o];
			void 0 === t && (t = new Nn(o), On(i, t)), i = t
		}
	}
}
class Hn {
	constructor(t, e) {
		this.seq = [], this.map = {};
		const i = t.getProgramParameter(e, 35718);
		for(let n = 0; n < i; ++n) {
			const i = t.getActiveUniform(e, n);
			Gn(i, t.getUniformLocation(e, i.name), this)
		}
	}
	setValue(t, e, i, n) {
		const s = this.map[e];
		void 0 !== s && s.setValue(t, i, n)
	}
	setOptional(t, e, i) {
		const n = e[i];
		void 0 !== n && this.setValue(t, i, n)
	}
	static upload(t, e, i, n) {
		for(let s = 0, r = e.length; s !== r; ++s) {
			const r = e[s],
				a = i[r.id];
			!1 !== a.needsUpdate && r.setValue(t, a.value, n)
		}
	}
	static seqWithValue(t, e) {
		const i = [];
		for(let n = 0, s = t.length; n !== s; ++n) {
			const s = t[n];
			s.id in e && i.push(s)
		}
		return i
	}
}

function zn(t, e, i) {
	const n = t.createShader(e);
	return t.shaderSource(n, i), t.compileShader(n), n
}
let Vn = 0;

function Wn(t, e, i) {
	const n = t.getShaderParameter(e, 35713),
		s = t.getShaderInfoLog(e).trim();
	if(n && "" === s) return "";
	const r = /ERROR: 0:(\d+)/.exec(s);
	if(r) {
		const n = parseInt(r[1]);
		return i.toUpperCase() + "\n\n" + s + "\n\n" + function(t, e) {
			const i = t.split("\n"),
				n = [],
				s = Math.max(e - 6, 0),
				r = Math.min(e + 6, i.length);
			for(let t = s; t < r; t++) {
				const s = t + 1;
				n.push(`${s===e?">":" "} ${s}: ${i[t]}`)
			}
			return n.join("\n")
		}(t.getShaderSource(e), n)
	}
	return s
}

function qn(t, e) {
	const i = function(t) {
		switch(t) {
			case 3e3:
				return ["Linear", "( value )"];
			case 3001:
				return ["sRGB", "( value )"];
			default:
				return console.warn("THREE.WebGLProgram: Unsupported encoding:", t), ["Linear", "( value )"]
		}
	}(e);
	return "vec4 " + t + "( vec4 value ) { return LinearTo" + i[0] + i[1] + "; }"
}

function jn(t, e) {
	let i;
	switch(e) {
		case 1:
			i = "Linear";
			break;
		case 2:
			i = "Reinhard";
			break;
		case 3:
			i = "OptimizedCineon";
			break;
		case 4:
			i = "ACESFilmic";
			break;
		case 5:
			i = "Custom";
			break;
		default:
			console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), i = "Linear"
	}
	return "vec3 " + t + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
}

function Yn(t) {
	return "" !== t
}

function Jn(t, e) {
	const i = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
	return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, i).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
}

function Xn(t, e) {
	return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
}
const Kn = /^[ \t]*#include +<([\w\d./]+)>/gm;

function $n(t) {
	return t.replace(Kn, Zn)
}

function Zn(t, e) {
	const i = ai[e];
	if(void 0 === i) throw new Error("Can not resolve #include <" + e + ">");
	return $n(i)
}
const ts = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

function es(t) {
	return t.replace(ts, is)
}

function is(t, e, i, n) {
	let s = "";
	for(let t = parseInt(e); t < parseInt(i); t++) s += n.replace(/\[\s*i\s*\]/g, "[ " + t + " ]").replace(/UNROLLED_LOOP_INDEX/g, t);
	return s
}

function ns(t) {
	let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
	return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e
}

function ss(t, e, i, n) {
	const s = t.getContext(),
		r = i.defines;
	let a = i.vertexShader,
		o = i.fragmentShader;
	const l = function(t) {
			let e = "SHADOWMAP_TYPE_BASIC";
			return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"), e
		}(i),
		c = function(t) {
			let e = "ENVMAP_TYPE_CUBE";
			if(t.envMap) switch(t.envMapMode) {
				case 301:
				case 302:
					e = "ENVMAP_TYPE_CUBE";
					break;
				case 306:
					e = "ENVMAP_TYPE_CUBE_UV"
			}
			return e
		}(i),
		h = function(t) {
			let e = "ENVMAP_MODE_REFLECTION";
			t.envMap && 302 === t.envMapMode && (e = "ENVMAP_MODE_REFRACTION");
			return e
		}(i),
		u = function(t) {
			let e = "ENVMAP_BLENDING_NONE";
			if(t.envMap) switch(t.combine) {
				case 0:
					e = "ENVMAP_BLENDING_MULTIPLY";
					break;
				case 1:
					e = "ENVMAP_BLENDING_MIX";
					break;
				case 2:
					e = "ENVMAP_BLENDING_ADD"
			}
			return e
		}(i),
		d = function(t) {
			const e = t.envMapCubeUVHeight;
			if(null === e) return null;
			const i = Math.log2(e) - 2,
				n = 1 / e;
			return {
				texelWidth: 1 / (3 * Math.max(Math.pow(2, i), 112)),
				texelHeight: n,
				maxMip: i
			}
		}(i),
		A = i.isWebGL2 ? "" : function(t) {
			return [t.extensionDerivatives || t.envMapCubeUVHeight || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap || t.transmission) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Yn).join("\n")
		}(i),
		p = function(t) {
			const e = [];
			for(const i in t) {
				const n = t[i];
				!1 !== n && e.push("#define " + i + " " + n)
			}
			return e.join("\n")
		}(r),
		g = s.createProgram();
	let m, f, v = i.glslVersion ? "#version " + i.glslVersion + "\n" : "";
	i.isRawShaderMaterial ? (m = [p].filter(Yn).join("\n"), m.length > 0 && (m += "\n"), f = [A, p].filter(Yn).join("\n"), f.length > 0 && (f += "\n")) : (m = [ns(i), "#define SHADER_NAME " + i.shaderName, p, i.instancing ? "#define USE_INSTANCING" : "", i.instancingColor ? "#define USE_INSTANCING_COLOR" : "", i.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "", i.map ? "#define USE_MAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.envMap ? "#define " + h : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.aoMap ? "#define USE_AOMAP" : "", i.emissiveMap ? "#define USE_EMISSIVEMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.normalMap && i.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", i.normalMap && i.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", i.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", i.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", i.displacementMap && i.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", i.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", i.metalnessMap ? "#define USE_METALNESSMAP" : "", i.alphaMap ? "#define USE_ALPHAMAP" : "", i.transmission ? "#define USE_TRANSMISSION" : "", i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", i.thicknessMap ? "#define USE_THICKNESSMAP" : "", i.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", i.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", i.vertexTangents ? "#define USE_TANGENT" : "", i.vertexColors ? "#define USE_COLOR" : "", i.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", i.vertexUvs ? "#define USE_UV" : "", i.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", i.flatShading ? "#define FLAT_SHADED" : "", i.skinning ? "#define USE_SKINNING" : "", i.morphTargets ? "#define USE_MORPHTARGETS" : "", i.morphNormals && !1 === i.flatShading ? "#define USE_MORPHNORMALS" : "", i.morphColors && i.isWebGL2 ? "#define USE_MORPHCOLORS" : "", i.morphTargetsCount > 0 && i.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", i.morphTargetsCount > 0 && i.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + i.morphTextureStride : "", i.morphTargetsCount > 0 && i.isWebGL2 ? "#define MORPHTARGETS_COUNT " + i.morphTargetsCount : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + l : "", i.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", i.logarithmicDepthBuffer && i.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Yn).join("\n"), f = [A, ns(i), "#define SHADER_NAME " + i.shaderName, p, i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "", i.map ? "#define USE_MAP" : "", i.matcap ? "#define USE_MATCAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.envMap ? "#define " + c : "", i.envMap ? "#define " + h : "", i.envMap ? "#define " + u : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.aoMap ? "#define USE_AOMAP" : "", i.emissiveMap ? "#define USE_EMISSIVEMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.normalMap && i.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", i.normalMap && i.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", i.clearcoat ? "#define USE_CLEARCOAT" : "", i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", i.iridescence ? "#define USE_IRIDESCENCE" : "", i.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", i.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", i.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", i.metalnessMap ? "#define USE_METALNESSMAP" : "", i.alphaMap ? "#define USE_ALPHAMAP" : "", i.alphaTest ? "#define USE_ALPHATEST" : "", i.sheen ? "#define USE_SHEEN" : "", i.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", i.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", i.transmission ? "#define USE_TRANSMISSION" : "", i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", i.thicknessMap ? "#define USE_THICKNESSMAP" : "", i.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", i.vertexTangents ? "#define USE_TANGENT" : "", i.vertexColors || i.instancingColor ? "#define USE_COLOR" : "", i.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", i.vertexUvs ? "#define USE_UV" : "", i.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", i.gradientMap ? "#define USE_GRADIENTMAP" : "", i.flatShading ? "#define FLAT_SHADED" : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + l : "", i.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", i.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", i.logarithmicDepthBuffer && i.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== i.toneMapping ? "#define TONE_MAPPING" : "", 0 !== i.toneMapping ? ai.tonemapping_pars_fragment : "", 0 !== i.toneMapping ? jn("toneMapping", i.toneMapping) : "", i.dithering ? "#define DITHERING" : "", i.opaque ? "#define OPAQUE" : "", ai.encodings_pars_fragment, qn("linearToOutputTexel", i.outputEncoding), i.useDepthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "", "\n"].filter(Yn).join("\n")), a = $n(a), a = Jn(a, i), a = Xn(a, i), o = $n(o), o = Jn(o, i), o = Xn(o, i), a = es(a), o = es(o), i.isWebGL2 && !0 !== i.isRawShaderMaterial && (v = "#version 300 es\n", m = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + m, f = ["#define varying in", "300 es" === i.glslVersion ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", "300 es" === i.glslVersion ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + f);
	const y = v + f + o,
		x = zn(s, 35633, v + m + a),
		_ = zn(s, 35632, y);
	if(s.attachShader(g, x), s.attachShader(g, _), void 0 !== i.index0AttributeName ? s.bindAttribLocation(g, 0, i.index0AttributeName) : !0 === i.morphTargets && s.bindAttribLocation(g, 0, "position"), s.linkProgram(g), t.debug.checkShaderErrors) {
		const t = s.getProgramInfoLog(g).trim(),
			e = s.getShaderInfoLog(x).trim(),
			i = s.getShaderInfoLog(_).trim();
		let n = !0,
			r = !0;
		if(!1 === s.getProgramParameter(g, 35714)) {
			n = !1;
			const e = Wn(s, x, "vertex"),
				i = Wn(s, _, "fragment");
			console.error("THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(g, 35715) + "\n\nProgram Info Log: " + t + "\n" + e + "\n" + i)
		} else "" !== t ? console.warn("THREE.WebGLProgram: Program Info Log:", t) : "" !== e && "" !== i || (r = !1);
		r && (this.diagnostics = {
			runnable: n,
			programLog: t,
			vertexShader: {
				log: e,
				prefix: m
			},
			fragmentShader: {
				log: i,
				prefix: f
			}
		})
	}
	let E, w;
	return s.deleteShader(x), s.deleteShader(_), this.getUniforms = function() {
		return void 0 === E && (E = new Hn(s, g)), E
	}, this.getAttributes = function() {
		return void 0 === w && (w = function(t, e) {
			const i = {},
				n = t.getProgramParameter(e, 35721);
			for(let s = 0; s < n; s++) {
				const n = t.getActiveAttrib(e, s),
					r = n.name;
				let a = 1;
				35674 === n.type && (a = 2), 35675 === n.type && (a = 3), 35676 === n.type && (a = 4), i[r] = {
					type: n.type,
					location: t.getAttribLocation(e, r),
					locationSize: a
				}
			}
			return i
		}(s, g)), w
	}, this.destroy = function() {
		n.releaseStatesOfProgram(this), s.deleteProgram(g), this.program = void 0
	}, this.name = i.shaderName, this.id = Vn++, this.cacheKey = e, this.usedTimes = 1, this.program = g, this.vertexShader = x, this.fragmentShader = _, this
}
let rs = 0;
class as {
	constructor() {
		this.shaderCache = new Map, this.materialCache = new Map
	}
	update(t) {
		const e = t.vertexShader,
			i = t.fragmentShader,
			n = this._getShaderStage(e),
			s = this._getShaderStage(i),
			r = this._getShaderCacheForMaterial(t);
		return !1 === r.has(n) && (r.add(n), n.usedTimes++), !1 === r.has(s) && (r.add(s), s.usedTimes++), this
	}
	remove(t) {
		const e = this.materialCache.get(t);
		for(const t of e) t.usedTimes--, 0 === t.usedTimes && this.shaderCache.delete(t.code);
		return this.materialCache.delete(t), this
	}
	getVertexShaderID(t) {
		return this._getShaderStage(t.vertexShader).id
	}
	getFragmentShaderID(t) {
		return this._getShaderStage(t.fragmentShader).id
	}
	dispose() {
		this.shaderCache.clear(), this.materialCache.clear()
	}
	_getShaderCacheForMaterial(t) {
		const e = this.materialCache;
		let i = e.get(t);
		return void 0 === i && (i = new Set, e.set(t, i)), i
	}
	_getShaderStage(t) {
		const e = this.shaderCache;
		let i = e.get(t);
		return void 0 === i && (i = new os(t), e.set(t, i)), i
	}
}
class os {
	constructor(t) {
		this.id = rs++, this.code = t, this.usedTimes = 0
	}
}

function ls(t, e, i, n, s, r, a) {
	const o = new Dt,
		l = new as,
		c = [],
		h = s.isWebGL2,
		u = s.logarithmicDepthBuffer,
		d = s.vertexTextures;
	let A = s.precision;
	const p = {
		MeshDepthMaterial: "depth",
		MeshDistanceMaterial: "distanceRGBA",
		MeshNormalMaterial: "normal",
		MeshBasicMaterial: "basic",
		MeshLambertMaterial: "lambert",
		MeshPhongMaterial: "phong",
		MeshToonMaterial: "toon",
		MeshStandardMaterial: "physical",
		MeshPhysicalMaterial: "physical",
		MeshMatcapMaterial: "matcap",
		LineBasicMaterial: "basic",
		LineDashedMaterial: "dashed",
		PointsMaterial: "points",
		ShadowMaterial: "shadow",
		SpriteMaterial: "sprite"
	};
	return {
		getParameters: function(r, o, c, g, m) {
			const f = g.fog,
				v = m.geometry,
				y = r.isMeshStandardMaterial ? g.environment : null,
				x = (r.isMeshStandardMaterial ? i : e).get(r.envMap || y),
				_ = x && 306 === x.mapping ? x.image.height : null,
				E = p[r.type];
			null !== r.precision && (A = s.getMaxPrecision(r.precision), A !== r.precision && console.warn("THREE.WebGLProgram.getParameters:", r.precision, "not supported, using", A, "instead."));
			const w = v.morphAttributes.position || v.morphAttributes.normal || v.morphAttributes.color,
				b = void 0 !== w ? w.length : 0;
			let I, C, S, M, B = 0;
			if(void 0 !== v.morphAttributes.position && (B = 1), void 0 !== v.morphAttributes.normal && (B = 2), void 0 !== v.morphAttributes.color && (B = 3), E) {
				const t = li[E];
				I = t.vertexShader, C = t.fragmentShader
			} else I = r.vertexShader, C = r.fragmentShader, l.update(r), S = l.getVertexShaderID(r), M = l.getFragmentShaderID(r);
			const T = t.getRenderTarget(),
				R = r.alphaTest > 0,
				D = r.clearcoat > 0,
				L = r.iridescence > 0;
			return {
				isWebGL2: h,
				shaderID: E,
				shaderName: r.type,
				vertexShader: I,
				fragmentShader: C,
				defines: r.defines,
				customVertexShaderID: S,
				customFragmentShaderID: M,
				isRawShaderMaterial: !0 === r.isRawShaderMaterial,
				glslVersion: r.glslVersion,
				precision: A,
				instancing: !0 === m.isInstancedMesh,
				instancingColor: !0 === m.isInstancedMesh && null !== m.instanceColor,
				supportsVertexTextures: d,
				outputEncoding: null === T ? t.outputEncoding : !0 === T.isXRRenderTarget ? T.texture.encoding : 3e3,
				map: !!r.map,
				matcap: !!r.matcap,
				envMap: !!x,
				envMapMode: x && x.mapping,
				envMapCubeUVHeight: _,
				lightMap: !!r.lightMap,
				aoMap: !!r.aoMap,
				emissiveMap: !!r.emissiveMap,
				bumpMap: !!r.bumpMap,
				normalMap: !!r.normalMap,
				objectSpaceNormalMap: 1 === r.normalMapType,
				tangentSpaceNormalMap: 0 === r.normalMapType,
				decodeVideoTexture: !!r.map && !0 === r.map.isVideoTexture && 3001 === r.map.encoding,
				clearcoat: D,
				clearcoatMap: D && !!r.clearcoatMap,
				clearcoatRoughnessMap: D && !!r.clearcoatRoughnessMap,
				clearcoatNormalMap: D && !!r.clearcoatNormalMap,
				iridescence: L,
				iridescenceMap: L && !!r.iridescenceMap,
				iridescenceThicknessMap: L && !!r.iridescenceThicknessMap,
				displacementMap: !!r.displacementMap,
				roughnessMap: !!r.roughnessMap,
				metalnessMap: !!r.metalnessMap,
				specularMap: !!r.specularMap,
				specularIntensityMap: !!r.specularIntensityMap,
				specularColorMap: !!r.specularColorMap,
				opaque: !1 === r.transparent && 1 === r.blending,
				alphaMap: !!r.alphaMap,
				alphaTest: R,
				gradientMap: !!r.gradientMap,
				sheen: r.sheen > 0,
				sheenColorMap: !!r.sheenColorMap,
				sheenRoughnessMap: !!r.sheenRoughnessMap,
				transmission: r.transmission > 0,
				transmissionMap: !!r.transmissionMap,
				thicknessMap: !!r.thicknessMap,
				combine: r.combine,
				vertexTangents: !!r.normalMap && !!v.attributes.tangent,
				vertexColors: r.vertexColors,
				vertexAlphas: !0 === r.vertexColors && !!v.attributes.color && 4 === v.attributes.color.itemSize,
				vertexUvs: !!(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatMap || r.clearcoatRoughnessMap || r.clearcoatNormalMap || r.iridescenceMap || r.iridescenceThicknessMap || r.displacementMap || r.transmissionMap || r.thicknessMap || r.specularIntensityMap || r.specularColorMap || r.sheenColorMap || r.sheenRoughnessMap),
				uvsVertexOnly: !(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatNormalMap || r.iridescenceMap || r.iridescenceThicknessMap || r.transmission > 0 || r.transmissionMap || r.thicknessMap || r.specularIntensityMap || r.specularColorMap || r.sheen > 0 || r.sheenColorMap || r.sheenRoughnessMap || !r.displacementMap),
				fog: !!f,
				useFog: !0 === r.fog,
				fogExp2: f && f.isFogExp2,
				flatShading: !!r.flatShading,
				sizeAttenuation: r.sizeAttenuation,
				logarithmicDepthBuffer: u,
				skinning: !0 === m.isSkinnedMesh,
				morphTargets: void 0 !== v.morphAttributes.position,
				morphNormals: void 0 !== v.morphAttributes.normal,
				morphColors: void 0 !== v.morphAttributes.color,
				morphTargetsCount: b,
				morphTextureStride: B,
				numDirLights: o.directional.length,
				numPointLights: o.point.length,
				numSpotLights: o.spot.length,
				numSpotLightMaps: o.spotLightMap.length,
				numRectAreaLights: o.rectArea.length,
				numHemiLights: o.hemi.length,
				numDirLightShadows: o.directionalShadowMap.length,
				numPointLightShadows: o.pointShadowMap.length,
				numSpotLightShadows: o.spotShadowMap.length,
				numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
				numClippingPlanes: a.numPlanes,
				numClipIntersection: a.numIntersection,
				dithering: r.dithering,
				shadowMapEnabled: t.shadowMap.enabled && c.length > 0,
				shadowMapType: t.shadowMap.type,
				toneMapping: r.toneMapped ? t.toneMapping : 0,
				physicallyCorrectLights: t.physicallyCorrectLights,
				premultipliedAlpha: r.premultipliedAlpha,
				doubleSided: 2 === r.side,
				flipSided: 1 === r.side,
				useDepthPacking: !!r.depthPacking,
				depthPacking: r.depthPacking || 0,
				index0AttributeName: r.index0AttributeName,
				extensionDerivatives: r.extensions && r.extensions.derivatives,
				extensionFragDepth: r.extensions && r.extensions.fragDepth,
				extensionDrawBuffers: r.extensions && r.extensions.drawBuffers,
				extensionShaderTextureLOD: r.extensions && r.extensions.shaderTextureLOD,
				rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
				rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
				rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
				customProgramCacheKey: r.customProgramCacheKey()
			}
		},
		getProgramCacheKey: function(e) {
			const i = [];
			if(e.shaderID ? i.push(e.shaderID) : (i.push(e.customVertexShaderID), i.push(e.customFragmentShaderID)), void 0 !== e.defines)
				for(const t in e.defines) i.push(t), i.push(e.defines[t]);
			return !1 === e.isRawShaderMaterial && (! function(t, e) {
				t.push(e.precision), t.push(e.outputEncoding), t.push(e.envMapMode), t.push(e.envMapCubeUVHeight), t.push(e.combine), t.push(e.vertexUvs), t.push(e.fogExp2), t.push(e.sizeAttenuation), t.push(e.morphTargetsCount), t.push(e.morphAttributeCount), t.push(e.numDirLights), t.push(e.numPointLights), t.push(e.numSpotLights), t.push(e.numSpotLightMaps), t.push(e.numHemiLights), t.push(e.numRectAreaLights), t.push(e.numDirLightShadows), t.push(e.numPointLightShadows), t.push(e.numSpotLightShadows), t.push(e.numSpotLightShadowsWithMaps), t.push(e.shadowMapType), t.push(e.toneMapping), t.push(e.numClippingPlanes), t.push(e.numClipIntersection), t.push(e.depthPacking)
			}(i, e), function(t, e) {
				o.disableAll(), e.isWebGL2 && o.enable(0);
				e.supportsVertexTextures && o.enable(1);
				e.instancing && o.enable(2);
				e.instancingColor && o.enable(3);
				e.map && o.enable(4);
				e.matcap && o.enable(5);
				e.envMap && o.enable(6);
				e.lightMap && o.enable(7);
				e.aoMap && o.enable(8);
				e.emissiveMap && o.enable(9);
				e.bumpMap && o.enable(10);
				e.normalMap && o.enable(11);
				e.objectSpaceNormalMap && o.enable(12);
				e.tangentSpaceNormalMap && o.enable(13);
				e.clearcoat && o.enable(14);
				e.clearcoatMap && o.enable(15);
				e.clearcoatRoughnessMap && o.enable(16);
				e.clearcoatNormalMap && o.enable(17);
				e.iridescence && o.enable(18);
				e.iridescenceMap && o.enable(19);
				e.iridescenceThicknessMap && o.enable(20);
				e.displacementMap && o.enable(21);
				e.specularMap && o.enable(22);
				e.roughnessMap && o.enable(23);
				e.metalnessMap && o.enable(24);
				e.gradientMap && o.enable(25);
				e.alphaMap && o.enable(26);
				e.alphaTest && o.enable(27);
				e.vertexColors && o.enable(28);
				e.vertexAlphas && o.enable(29);
				e.vertexUvs && o.enable(30);
				e.vertexTangents && o.enable(31);
				e.uvsVertexOnly && o.enable(32);
				t.push(o.mask), o.disableAll(), e.fog && o.enable(0);
				e.useFog && o.enable(1);
				e.flatShading && o.enable(2);
				e.logarithmicDepthBuffer && o.enable(3);
				e.skinning && o.enable(4);
				e.morphTargets && o.enable(5);
				e.morphNormals && o.enable(6);
				e.morphColors && o.enable(7);
				e.premultipliedAlpha && o.enable(8);
				e.shadowMapEnabled && o.enable(9);
				e.physicallyCorrectLights && o.enable(10);
				e.doubleSided && o.enable(11);
				e.flipSided && o.enable(12);
				e.useDepthPacking && o.enable(13);
				e.dithering && o.enable(14);
				e.specularIntensityMap && o.enable(15);
				e.specularColorMap && o.enable(16);
				e.transmission && o.enable(17);
				e.transmissionMap && o.enable(18);
				e.thicknessMap && o.enable(19);
				e.sheen && o.enable(20);
				e.sheenColorMap && o.enable(21);
				e.sheenRoughnessMap && o.enable(22);
				e.decodeVideoTexture && o.enable(23);
				e.opaque && o.enable(24);
				t.push(o.mask)
			}(i, e), i.push(t.outputEncoding)), i.push(e.customProgramCacheKey), i.join()
		},
		getUniforms: function(t) {
			const e = p[t.type];
			let i;
			if(e) {
				const t = li[e];
				i = ze.clone(t.uniforms)
			} else i = t.uniforms;
			return i
		},
		acquireProgram: function(e, i) {
			let n;
			for(let t = 0, e = c.length; t < e; t++) {
				const e = c[t];
				if(e.cacheKey === i) {
					n = e, ++n.usedTimes;
					break
				}
			}
			return void 0 === n && (n = new ss(t, i, e, r), c.push(n)), n
		},
		releaseProgram: function(t) {
			if(0 == --t.usedTimes) {
				const e = c.indexOf(t);
				c[e] = c[c.length - 1], c.pop(), t.destroy()
			}
		},
		releaseShaderCache: function(t) {
			l.remove(t)
		},
		programs: c,
		dispose: function() {
			l.dispose()
		}
	}
}

function cs() {
	let t = new WeakMap;
	return {
		get: function(e) {
			let i = t.get(e);
			return void 0 === i && (i = {}, t.set(e, i)), i
		},
		remove: function(e) {
			t.delete(e)
		},
		update: function(e, i, n) {
			t.get(e)[i] = n
		},
		dispose: function() {
			t = new WeakMap
		}
	}
}

function hs(t, e) {
	return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
}

function us(t, e) {
	return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
}

function ds() {
	const t = [];
	let e = 0;
	const i = [],
		n = [],
		s = [];

	function r(i, n, s, r, a, o) {
		let l = t[e];
		return void 0 === l ? (l = {
			id: i.id,
			object: i,
			geometry: n,
			material: s,
			groupOrder: r,
			renderOrder: i.renderOrder,
			z: a,
			group: o
		}, t[e] = l) : (l.id = i.id, l.object = i, l.geometry = n, l.material = s, l.groupOrder = r, l.renderOrder = i.renderOrder, l.z = a, l.group = o), e++, l
	}
	return {
		opaque: i,
		transmissive: n,
		transparent: s,
		init: function() {
			e = 0, i.length = 0, n.length = 0, s.length = 0
		},
		push: function(t, e, a, o, l, c) {
			const h = r(t, e, a, o, l, c);
			a.transmission > 0 ? n.push(h) : !0 === a.transparent ? s.push(h) : i.push(h)
		},
		unshift: function(t, e, a, o, l, c) {
			const h = r(t, e, a, o, l, c);
			a.transmission > 0 ? n.unshift(h) : !0 === a.transparent ? s.unshift(h) : i.unshift(h)
		},
		finish: function() {
			for(let i = e, n = t.length; i < n; i++) {
				const e = t[i];
				if(null === e.id) break;
				e.id = null, e.object = null, e.geometry = null, e.material = null, e.group = null
			}
		},
		sort: function(t, e) {
			i.length > 1 && i.sort(t || hs), n.length > 1 && n.sort(e || us), s.length > 1 && s.sort(e || us)
		}
	}
}

function As() {
	let t = new WeakMap;
	return {
		get: function(e, i) {
			const n = t.get(e);
			let s;
			return void 0 === n ? (s = new ds, t.set(e, [s])) : i >= n.length ? (s = new ds, n.push(s)) : s = n[i], s
		},
		dispose: function() {
			t = new WeakMap
		}
	}
}

function ps() {
	const t = {};
	return {
		get: function(e) {
			if(void 0 !== t[e.id]) return t[e.id];
			let i;
			switch(e.type) {
				case "DirectionalLight":
					i = {
						direction: new V,
						color: new D
					};
					break;
				case "SpotLight":
					i = {
						position: new V,
						direction: new V,
						color: new D,
						distance: 0,
						coneCos: 0,
						penumbraCos: 0,
						decay: 0
					};
					break;
				case "PointLight":
					i = {
						position: new V,
						color: new D,
						distance: 0,
						decay: 0
					};
					break;
				case "HemisphereLight":
					i = {
						direction: new V,
						skyColor: new D,
						groundColor: new D
					};
					break;
				case "RectAreaLight":
					i = {
						color: new D,
						position: new V,
						halfWidth: new V,
						halfHeight: new V
					}
			}
			return t[e.id] = i, i
		}
	}
}
let gs = 0;

function ms(t, e) {
	return(e.castShadow ? 2 : 0) - (t.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (t.map ? 1 : 0)
}

function fs(t, e) {
	const i = new ps,
		n = function() {
			const t = {};
			return {
				get: function(e) {
					if(void 0 !== t[e.id]) return t[e.id];
					let i;
					switch(e.type) {
						case "DirectionalLight":
						case "SpotLight":
							i = {
								shadowBias: 0,
								shadowNormalBias: 0,
								shadowRadius: 1,
								shadowMapSize: new v
							};
							break;
						case "PointLight":
							i = {
								shadowBias: 0,
								shadowNormalBias: 0,
								shadowRadius: 1,
								shadowMapSize: new v,
								shadowCameraNear: 1,
								shadowCameraFar: 1e3
							}
					}
					return t[e.id] = i, i
				}
			}
		}(),
		s = {
			version: 0,
			hash: {
				directionalLength: -1,
				pointLength: -1,
				spotLength: -1,
				rectAreaLength: -1,
				hemiLength: -1,
				numDirectionalShadows: -1,
				numPointShadows: -1,
				numSpotShadows: -1,
				numSpotMaps: -1
			},
			ambient: [0, 0, 0],
			probe: [],
			directional: [],
			directionalShadow: [],
			directionalShadowMap: [],
			directionalShadowMatrix: [],
			spot: [],
			spotLightMap: [],
			spotShadow: [],
			spotShadowMap: [],
			spotLightMatrix: [],
			rectArea: [],
			rectAreaLTC1: null,
			rectAreaLTC2: null,
			point: [],
			pointShadow: [],
			pointShadowMap: [],
			pointShadowMatrix: [],
			hemi: [],
			numSpotLightShadowsWithMaps: 0
		};
	for(let t = 0; t < 9; t++) s.probe.push(new V);
	const r = new V,
		a = new _t,
		o = new _t;
	return {
		setup: function(r, a) {
			let o = 0,
				l = 0,
				c = 0;
			for(let t = 0; t < 9; t++) s.probe[t].set(0, 0, 0);
			let h = 0,
				u = 0,
				d = 0,
				A = 0,
				p = 0,
				g = 0,
				m = 0,
				f = 0,
				v = 0,
				y = 0;
			r.sort(ms);
			const x = !0 !== a ? Math.PI : 1;
			for(let t = 0, e = r.length; t < e; t++) {
				const e = r[t],
					a = e.color,
					_ = e.intensity,
					E = e.distance,
					w = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
				if(e.isAmbientLight) o += a.r * _ * x, l += a.g * _ * x, c += a.b * _ * x;
				else if(e.isLightProbe)
					for(let t = 0; t < 9; t++) s.probe[t].addScaledVector(e.sh.coefficients[t], _);
				else if(e.isDirectionalLight) {
					const t = i.get(e);
					if(t.color.copy(e.color).multiplyScalar(e.intensity * x), e.castShadow) {
						const t = e.shadow,
							i = n.get(e);
						i.shadowBias = t.bias, i.shadowNormalBias = t.normalBias, i.shadowRadius = t.radius, i.shadowMapSize = t.mapSize, s.directionalShadow[h] = i, s.directionalShadowMap[h] = w, s.directionalShadowMatrix[h] = e.shadow.matrix, g++
					}
					s.directional[h] = t, h++
				} else if(e.isSpotLight) {
					const t = i.get(e);
					t.position.setFromMatrixPosition(e.matrixWorld), t.color.copy(a).multiplyScalar(_ * x), t.distance = E, t.coneCos = Math.cos(e.angle), t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)), t.decay = e.decay, s.spot[d] = t;
					const r = e.shadow;
					if(e.map && (s.spotLightMap[v] = e.map, v++, r.updateMatrices(e), e.castShadow && y++), s.spotLightMatrix[d] = r.matrix, e.castShadow) {
						const t = n.get(e);
						t.shadowBias = r.bias, t.shadowNormalBias = r.normalBias, t.shadowRadius = r.radius, t.shadowMapSize = r.mapSize, s.spotShadow[d] = t, s.spotShadowMap[d] = w, f++
					}
					d++
				} else if(e.isRectAreaLight) {
					const t = i.get(e);
					t.color.copy(a).multiplyScalar(_), t.halfWidth.set(.5 * e.width, 0, 0), t.halfHeight.set(0, .5 * e.height, 0), s.rectArea[A] = t, A++
				} else if(e.isPointLight) {
					const t = i.get(e);
					if(t.color.copy(e.color).multiplyScalar(e.intensity * x), t.distance = e.distance, t.decay = e.decay, e.castShadow) {
						const t = e.shadow,
							i = n.get(e);
						i.shadowBias = t.bias, i.shadowNormalBias = t.normalBias, i.shadowRadius = t.radius, i.shadowMapSize = t.mapSize, i.shadowCameraNear = t.camera.near, i.shadowCameraFar = t.camera.far, s.pointShadow[u] = i, s.pointShadowMap[u] = w, s.pointShadowMatrix[u] = e.shadow.matrix, m++
					}
					s.point[u] = t, u++
				} else if(e.isHemisphereLight) {
					const t = i.get(e);
					t.skyColor.copy(e.color).multiplyScalar(_ * x), t.groundColor.copy(e.groundColor).multiplyScalar(_ * x), s.hemi[p] = t, p++
				}
			}
			A > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (s.rectAreaLTC1 = oi.LTC_FLOAT_1, s.rectAreaLTC2 = oi.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") ? (s.rectAreaLTC1 = oi.LTC_HALF_1, s.rectAreaLTC2 = oi.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), s.ambient[0] = o, s.ambient[1] = l, s.ambient[2] = c;
			const _ = s.hash;
			_.directionalLength === h && _.pointLength === u && _.spotLength === d && _.rectAreaLength === A && _.hemiLength === p && _.numDirectionalShadows === g && _.numPointShadows === m && _.numSpotShadows === f && _.numSpotMaps === v || (s.directional.length = h, s.spot.length = d, s.rectArea.length = A, s.point.length = u, s.hemi.length = p, s.directionalShadow.length = g, s.directionalShadowMap.length = g, s.pointShadow.length = m, s.pointShadowMap.length = m, s.spotShadow.length = f, s.spotShadowMap.length = f, s.directionalShadowMatrix.length = g, s.pointShadowMatrix.length = m, s.spotLightMatrix.length = f + v - y, s.spotLightMap.length = v, s.numSpotLightShadowsWithMaps = y, _.directionalLength = h, _.pointLength = u, _.spotLength = d, _.rectAreaLength = A, _.hemiLength = p, _.numDirectionalShadows = g, _.numPointShadows = m, _.numSpotShadows = f, _.numSpotMaps = v, s.version = gs++)
		},
		setupView: function(t, e) {
			let i = 0,
				n = 0,
				l = 0,
				c = 0,
				h = 0;
			const u = e.matrixWorldInverse;
			for(let e = 0, d = t.length; e < d; e++) {
				const d = t[e];
				if(d.isDirectionalLight) {
					const t = s.directional[i];
					t.direction.setFromMatrixPosition(d.matrixWorld), r.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(r), t.direction.transformDirection(u), i++
				} else if(d.isSpotLight) {
					const t = s.spot[l];
					t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), t.direction.setFromMatrixPosition(d.matrixWorld), r.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(r), t.direction.transformDirection(u), l++
				} else if(d.isRectAreaLight) {
					const t = s.rectArea[c];
					t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), o.identity(), a.copy(d.matrixWorld), a.premultiply(u), o.extractRotation(a), t.halfWidth.set(.5 * d.width, 0, 0), t.halfHeight.set(0, .5 * d.height, 0), t.halfWidth.applyMatrix4(o), t.halfHeight.applyMatrix4(o), c++
				} else if(d.isPointLight) {
					const t = s.point[n];
					t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), n++
				} else if(d.isHemisphereLight) {
					const t = s.hemi[h];
					t.direction.setFromMatrixPosition(d.matrixWorld), t.direction.transformDirection(u), h++
				}
			}
		},
		state: s
	}
}

function vs(t, e) {
	const i = new fs(t, e),
		n = [],
		s = [];
	return {
		init: function() {
			n.length = 0, s.length = 0
		},
		state: {
			lightsArray: n,
			shadowsArray: s,
			lights: i
		},
		setupLights: function(t) {
			i.setup(n, t)
		},
		setupLightsView: function(t) {
			i.setupView(n, t)
		},
		pushLight: function(t) {
			n.push(t)
		},
		pushShadow: function(t) {
			s.push(t)
		}
	}
}

function ys(t, e) {
	let i = new WeakMap;
	return {
		get: function(n, s = 0) {
			const r = i.get(n);
			let a;
			return void 0 === r ? (a = new vs(t, e), i.set(n, [a])) : s >= r.length ? (a = new vs(t, e), r.push(a)) : a = r[s], a
		},
		dispose: function() {
			i = new WeakMap
		}
	}
}
class xs extends re {
	constructor(t) {
		super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t)
	}
	copy(t) {
		return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
	}
}
class _s extends re {
	constructor(t) {
		super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new V, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t)
	}
	copy(t) {
		return super.copy(t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
	}
}

function Es(t, e, i) {
	let n = new ii;
	const s = new v,
		r = new v,
		a = new k,
		o = new xs({
			depthPacking: 3201
		}),
		l = new _s,
		c = {},
		h = i.maxTextureSize,
		u = {
			0: 1,
			1: 0,
			2: 2
		},
		d = new Ve({
			defines: {
				VSM_SAMPLES: 8
			},
			uniforms: {
				shadow_pass: {
					value: null
				},
				resolution: {
					value: new v
				},
				radius: {
					value: 4
				}
			},
			vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
			fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
		}),
		A = d.clone();
	A.defines.HORIZONTAL_PASS = 1;
	const p = new xe;
	p.setAttribute("position", new ce(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
	const g = new Ne(p, d),
		m = this;

	function f(i, n) {
		const r = e.update(g);
		d.defines.VSM_SAMPLES !== i.blurSamples && (d.defines.VSM_SAMPLES = i.blurSamples, A.defines.VSM_SAMPLES = i.blurSamples, d.needsUpdate = !0, A.needsUpdate = !0), null === i.mapPass && (i.mapPass = new O(s.x, s.y)), d.uniforms.shadow_pass.value = i.map.texture, d.uniforms.resolution.value = i.mapSize, d.uniforms.radius.value = i.radius, t.setRenderTarget(i.mapPass), t.clear(), t.renderBufferDirect(n, null, r, d, g, null), A.uniforms.shadow_pass.value = i.mapPass.texture, A.uniforms.resolution.value = i.mapSize, A.uniforms.radius.value = i.radius, t.setRenderTarget(i.map), t.clear(), t.renderBufferDirect(n, null, r, A, g, null)
	}

	function y(e, i, n, s, r, a) {
		let h = null;
		const d = !0 === n.isPointLight ? e.customDistanceMaterial : e.customDepthMaterial;
		if(h = void 0 !== d ? d : !0 === n.isPointLight ? l : o, t.localClippingEnabled && !0 === i.clipShadows && Array.isArray(i.clippingPlanes) && 0 !== i.clippingPlanes.length || i.displacementMap && 0 !== i.displacementScale || i.alphaMap && i.alphaTest > 0) {
			const t = h.uuid,
				e = i.uuid;
			let n = c[t];
			void 0 === n && (n = {}, c[t] = n);
			let s = n[e];
			void 0 === s && (s = h.clone(), n[e] = s), h = s
		}
		return h.visible = i.visible, h.wireframe = i.wireframe, h.side = 3 === a ? null !== i.shadowSide ? i.shadowSide : i.side : null !== i.shadowSide ? i.shadowSide : u[i.side], h.alphaMap = i.alphaMap, h.alphaTest = i.alphaTest, h.clipShadows = i.clipShadows, h.clippingPlanes = i.clippingPlanes, h.clipIntersection = i.clipIntersection, h.displacementMap = i.displacementMap, h.displacementScale = i.displacementScale, h.displacementBias = i.displacementBias, h.wireframeLinewidth = i.wireframeLinewidth, h.linewidth = i.linewidth, !0 === n.isPointLight && !0 === h.isMeshDistanceMaterial && (h.referencePosition.setFromMatrixPosition(n.matrixWorld), h.nearDistance = s, h.farDistance = r), h
	}

	function x(i, s, r, a, o) {
		if(!1 === i.visible) return;
		if(i.layers.test(s.layers) && (i.isMesh || i.isLine || i.isPoints) && (i.castShadow || i.receiveShadow && 3 === o) && (!i.frustumCulled || n.intersectsObject(i))) {
			i.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse, i.matrixWorld);
			const n = e.update(i),
				s = i.material;
			if(Array.isArray(s)) {
				const e = n.groups;
				for(let l = 0, c = e.length; l < c; l++) {
					const c = e[l],
						h = s[c.materialIndex];
					if(h && h.visible) {
						const e = y(i, h, a, r.near, r.far, o);
						t.renderBufferDirect(r, null, n, e, i, c)
					}
				}
			} else if(s.visible) {
				const e = y(i, s, a, r.near, r.far, o);
				t.renderBufferDirect(r, null, n, e, i, null)
			}
		}
		const l = i.children;
		for(let t = 0, e = l.length; t < e; t++) x(l[t], s, r, a, o)
	}
	this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(e, i, o) {
		if(!1 === m.enabled) return;
		if(!1 === m.autoUpdate && !1 === m.needsUpdate) return;
		if(0 === e.length) return;
		const l = t.getRenderTarget(),
			c = t.getActiveCubeFace(),
			u = t.getActiveMipmapLevel(),
			d = t.state;
		d.setBlending(0), d.buffers.color.setClear(1, 1, 1, 1), d.buffers.depth.setTest(!0), d.setScissorTest(!1);
		for(let l = 0, c = e.length; l < c; l++) {
			const c = e[l],
				u = c.shadow;
			if(void 0 === u) {
				console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
				continue
			}
			if(!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
			s.copy(u.mapSize);
			const A = u.getFrameExtents();
			if(s.multiply(A), r.copy(u.mapSize), (s.x > h || s.y > h) && (s.x > h && (r.x = Math.floor(h / A.x), s.x = r.x * A.x, u.mapSize.x = r.x), s.y > h && (r.y = Math.floor(h / A.y), s.y = r.y * A.y, u.mapSize.y = r.y)), null === u.map) {
				const t = 3 !== this.type ? {
					minFilter: 1003,
					magFilter: 1003
				} : {};
				u.map = new O(s.x, s.y, t), u.map.texture.name = c.name + ".shadowMap", u.camera.updateProjectionMatrix()
			}
			t.setRenderTarget(u.map), t.clear();
			const p = u.getViewportCount();
			for(let t = 0; t < p; t++) {
				const e = u.getViewport(t);
				a.set(r.x * e.x, r.y * e.y, r.x * e.z, r.y * e.w), d.viewport(a), u.updateMatrices(c, t), n = u.getFrustum(), x(i, o, u.camera, c, this.type)
			}!0 !== u.isPointLightShadow && 3 === this.type && f(u, o), u.needsUpdate = !1
		}
		m.needsUpdate = !1, t.setRenderTarget(l, c, u)
	}
}

function ws(t, e, i) {
	const n = i.isWebGL2;
	const s = new function() {
			let e = !1;
			const i = new k;
			let n = null;
			const s = new k(0, 0, 0, 0);
			return {
				setMask: function(i) {
					n === i || e || (t.colorMask(i, i, i, i), n = i)
				},
				setLocked: function(t) {
					e = t
				},
				setClear: function(e, n, r, a, o) {
					!0 === o && (e *= a, n *= a, r *= a), i.set(e, n, r, a), !1 === s.equals(i) && (t.clearColor(e, n, r, a), s.copy(i))
				},
				reset: function() {
					e = !1, n = null, s.set(-1, 0, 0, 0)
				}
			}
		},
		r = new function() {
			let e = !1,
				i = null,
				n = null,
				s = null;
			return {
				setTest: function(t) {
					t ? G(2929) : H(2929)
				},
				setMask: function(n) {
					i === n || e || (t.depthMask(n), i = n)
				},
				setFunc: function(e) {
					if(n !== e) {
						if(e) switch(e) {
							case 0:
								t.depthFunc(512);
								break;
							case 1:
								t.depthFunc(519);
								break;
							case 2:
								t.depthFunc(513);
								break;
							case 3:
							default:
								t.depthFunc(515);
								break;
							case 4:
								t.depthFunc(514);
								break;
							case 5:
								t.depthFunc(518);
								break;
							case 6:
								t.depthFunc(516);
								break;
							case 7:
								t.depthFunc(517)
						} else t.depthFunc(515);
						n = e
					}
				},
				setLocked: function(t) {
					e = t
				},
				setClear: function(e) {
					s !== e && (t.clearDepth(e), s = e)
				},
				reset: function() {
					e = !1, i = null, n = null, s = null
				}
			}
		},
		a = new function() {
			let e = !1,
				i = null,
				n = null,
				s = null,
				r = null,
				a = null,
				o = null,
				l = null,
				c = null;
			return {
				setTest: function(t) {
					e || (t ? G(2960) : H(2960))
				},
				setMask: function(n) {
					i === n || e || (t.stencilMask(n), i = n)
				},
				setFunc: function(e, i, a) {
					n === e && s === i && r === a || (t.stencilFunc(e, i, a), n = e, s = i, r = a)
				},
				setOp: function(e, i, n) {
					a === e && o === i && l === n || (t.stencilOp(e, i, n), a = e, o = i, l = n)
				},
				setLocked: function(t) {
					e = t
				},
				setClear: function(e) {
					c !== e && (t.clearStencil(e), c = e)
				},
				reset: function() {
					e = !1, i = null, n = null, s = null, r = null, a = null, o = null, l = null, c = null
				}
			}
		},
		o = new WeakMap,
		l = new WeakMap;
	let c = {},
		h = {},
		u = new WeakMap,
		d = [],
		A = null,
		p = !1,
		g = null,
		m = null,
		f = null,
		v = null,
		y = null,
		x = null,
		_ = null,
		E = !1,
		w = null,
		b = null,
		I = null,
		C = null,
		S = null;
	const M = t.getParameter(35661);
	let B = !1,
		T = 0;
	const R = t.getParameter(7938); - 1 !== R.indexOf("WebGL") ? (T = parseFloat(/^WebGL (\d)/.exec(R)[1]), B = T >= 1) : -1 !== R.indexOf("OpenGL ES") && (T = parseFloat(/^OpenGL ES (\d)/.exec(R)[1]), B = T >= 2);
	let D = null,
		L = {};
	const Q = t.getParameter(3088),
		P = t.getParameter(2978),
		F = (new k).fromArray(Q),
		U = (new k).fromArray(P);

	function N(e, i, n) {
		const s = new Uint8Array(4),
			r = t.createTexture();
		t.bindTexture(e, r), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728);
		for(let e = 0; e < n; e++) t.texImage2D(i + e, 0, 6408, 1, 1, 0, 6408, 5121, s);
		return r
	}
	const O = {};

	function G(e) {
		!0 !== c[e] && (t.enable(e), c[e] = !0)
	}

	function H(e) {
		!1 !== c[e] && (t.disable(e), c[e] = !1)
	}
	O[3553] = N(3553, 3553, 1), O[34067] = N(34067, 34069, 6), s.setClear(0, 0, 0, 1), r.setClear(1), a.setClear(0), G(2929), r.setFunc(3), q(!1), j(1), G(2884), W(0);
	const z = {
		100: 32774,
		101: 32778,
		102: 32779
	};
	if(n) z[103] = 32775, z[104] = 32776;
	else {
		const t = e.get("EXT_blend_minmax");
		null !== t && (z[103] = t.MIN_EXT, z[104] = t.MAX_EXT)
	}
	const V = {
		200: 0,
		201: 1,
		202: 768,
		204: 770,
		210: 776,
		208: 774,
		206: 772,
		203: 769,
		205: 771,
		209: 775,
		207: 773
	};

	function W(e, i, n, s, r, a, o, l) {
		if(0 !== e) {
			if(!1 === p && (G(3042), p = !0), 5 === e) r = r || i, a = a || n, o = o || s, i === m && r === y || (t.blendEquationSeparate(z[i], z[r]), m = i, y = r), n === f && s === v && a === x && o === _ || (t.blendFuncSeparate(V[n], V[s], V[a], V[o]), f = n, v = s, x = a, _ = o), g = e, E = null;
			else if(e !== g || l !== E) {
				if(100 === m && 100 === y || (t.blendEquation(32774), m = 100, y = 100), l) switch(e) {
					case 1:
						t.blendFuncSeparate(1, 771, 1, 771);
						break;
					case 2:
						t.blendFunc(1, 1);
						break;
					case 3:
						t.blendFuncSeparate(0, 769, 0, 1);
						break;
					case 4:
						t.blendFuncSeparate(0, 768, 0, 770);
						break;
					default:
						console.error("THREE.WebGLState: Invalid blending: ", e)
				} else switch(e) {
					case 1:
						t.blendFuncSeparate(770, 771, 1, 771);
						break;
					case 2:
						t.blendFunc(770, 1);
						break;
					case 3:
						t.blendFuncSeparate(0, 769, 0, 1);
						break;
					case 4:
						t.blendFunc(0, 768);
						break;
					default:
						console.error("THREE.WebGLState: Invalid blending: ", e)
				}
				f = null, v = null, x = null, _ = null, g = e, E = l
			}
		} else !0 === p && (H(3042), p = !1)
	}

	function q(e) {
		w !== e && (e ? t.frontFace(2304) : t.frontFace(2305), w = e)
	}

	function j(e) {
		0 !== e ? (G(2884), e !== b && (1 === e ? t.cullFace(1029) : 2 === e ? t.cullFace(1028) : t.cullFace(1032))) : H(2884), b = e
	}

	function Y(e, i, n) {
		e ? (G(32823), C === i && S === n || (t.polygonOffset(i, n), C = i, S = n)) : H(32823)
	}

	function J(e) {
		void 0 === e && (e = 33984 + M - 1), D !== e && (t.activeTexture(e), D = e)
	}
	return {
		buffers: {
			color: s,
			depth: r,
			stencil: a
		},
		enable: G,
		disable: H,
		bindFramebuffer: function(e, i) {
			return h[e] !== i && (t.bindFramebuffer(e, i), h[e] = i, n && (36009 === e && (h[36160] = i), 36160 === e && (h[36009] = i)), !0)
		},
		drawBuffers: function(n, s) {
			let r = d,
				a = !1;
			if(n)
				if(r = u.get(s), void 0 === r && (r = [], u.set(s, r)), n.isWebGLMultipleRenderTargets) {
					const t = n.texture;
					if(r.length !== t.length || 36064 !== r[0]) {
						for(let e = 0, i = t.length; e < i; e++) r[e] = 36064 + e;
						r.length = t.length, a = !0
					}
				} else 36064 !== r[0] && (r[0] = 36064, a = !0);
			else 1029 !== r[0] && (r[0] = 1029, a = !0);
			a && (i.isWebGL2 ? t.drawBuffers(r) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(r))
		},
		useProgram: function(e) {
			return A !== e && (t.useProgram(e), A = e, !0)
		},
		setBlending: W,
		setMaterial: function(t, e) {
			2 === t.side ? H(2884) : G(2884);
			let i = 1 === t.side;
			e && (i = !i), q(i), 1 === t.blending && !1 === t.transparent ? W(0) : W(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), r.setFunc(t.depthFunc), r.setTest(t.depthTest), r.setMask(t.depthWrite), s.setMask(t.colorWrite);
			const n = t.stencilWrite;
			a.setTest(n), n && (a.setMask(t.stencilWriteMask), a.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), a.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), Y(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), !0 === t.alphaToCoverage ? G(32926) : H(32926)
		},
		setFlipSided: q,
		setCullFace: j,
		setLineWidth: function(e) {
			e !== I && (B && t.lineWidth(e), I = e)
		},
		setPolygonOffset: Y,
		setScissorTest: function(t) {
			t ? G(3089) : H(3089)
		},
		activeTexture: J,
		bindTexture: function(e, i) {
			null === D && J();
			let n = L[D];
			void 0 === n && (n = {
				type: void 0,
				texture: void 0
			}, L[D] = n), n.type === e && n.texture === i || (t.bindTexture(e, i || O[e]), n.type = e, n.texture = i)
		},
		unbindTexture: function() {
			const e = L[D];
			void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null), e.type = void 0, e.texture = void 0)
		},
		compressedTexImage2D: function() {
			try {
				t.compressedTexImage2D.apply(t, arguments)
			} catch(t) {
				console.error("THREE.WebGLState:", t)
			}
		},
		texImage2D: function() {
			try {
				t.texImage2D.apply(t, arguments)
			} catch(t) {
				console.error("THREE.WebGLState:", t)
			}
		},
		texImage3D: function() {
			try {
				t.texImage3D.apply(t, arguments)
			} catch(t) {
				console.error("THREE.WebGLState:", t)
			}
		},
		updateUBOMapping: function(e, i) {
			let n = l.get(i);
			void 0 === n && (n = new WeakMap, l.set(i, n));
			let s = n.get(e);
			void 0 === s && (s = t.getUniformBlockIndex(i, e.name), n.set(e, s))
		},
		uniformBlockBinding: function(e, i) {
			const n = l.get(i).get(e);
			o.get(e) !== n && (t.uniformBlockBinding(i, n, e.__bindingPointIndex), o.set(e, n))
		},
		texStorage2D: function() {
			try {
				t.texStorage2D.apply(t, arguments)
			} catch(t) {
				console.error("THREE.WebGLState:", t)
			}
		},
		texStorage3D: function() {
			try {
				t.texStorage3D.apply(t, arguments)
			} catch(t) {
				console.error("THREE.WebGLState:", t)
			}
		},
		texSubImage2D: function() {
			try {
				t.texSubImage2D.apply(t, arguments)
			} catch(t) {
				console.error("THREE.WebGLState:", t)
			}
		},
		texSubImage3D: function() {
			try {
				t.texSubImage3D.apply(t, arguments)
			} catch(t) {
				console.error("THREE.WebGLState:", t)
			}
		},
		compressedTexSubImage2D: function() {
			try {
				t.compressedTexSubImage2D.apply(t, arguments)
			} catch(t) {
				console.error("THREE.WebGLState:", t)
			}
		},
		scissor: function(e) {
			!1 === F.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), F.copy(e))
		},
		viewport: function(e) {
			!1 === U.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), U.copy(e))
		},
		reset: function() {
			t.disable(3042), t.disable(2884), t.disable(2929), t.disable(32823), t.disable(3089), t.disable(2960), t.disable(32926), t.blendEquation(32774), t.blendFunc(1, 0), t.blendFuncSeparate(1, 0, 1, 0), t.colorMask(!0, !0, !0, !0), t.clearColor(0, 0, 0, 0), t.depthMask(!0), t.depthFunc(513), t.clearDepth(1), t.stencilMask(4294967295), t.stencilFunc(519, 0, 4294967295), t.stencilOp(7680, 7680, 7680), t.clearStencil(0), t.cullFace(1029), t.frontFace(2305), t.polygonOffset(0, 0), t.activeTexture(33984), t.bindFramebuffer(36160, null), !0 === n && (t.bindFramebuffer(36009, null), t.bindFramebuffer(36008, null)), t.useProgram(null), t.lineWidth(1), t.scissor(0, 0, t.canvas.width, t.canvas.height), t.viewport(0, 0, t.canvas.width, t.canvas.height), c = {}, D = null, L = {}, h = {}, u = new WeakMap, d = [], A = null, p = !1, g = null, m = null, f = null, v = null, y = null, x = null, _ = null, E = !1, w = null, b = null, I = null, C = null, S = null, F.set(0, 0, t.canvas.width, t.canvas.height), U.set(0, 0, t.canvas.width, t.canvas.height), s.reset(), r.reset(), a.reset()
		}
	}
}

function bs(t, e, i, n, s, r, a) {
	const o = s.isWebGL2,
		l = s.maxTextures,
		c = s.maxCubemapSize,
		h = s.maxTextureSize,
		u = s.maxSamples,
		A = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null,
		g = /OculusBrowser/g.test(navigator.userAgent),
		m = new WeakMap;
	let f;
	const v = new WeakMap;
	let y = !1;
	try {
		y = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d")
	} catch(t) {}

	function x(t, e) {
		return y ? new OffscreenCanvas(t, e) : _("canvas")
	}

	function E(t, e, i, n) {
		let s = 1;
		if((t.width > n || t.height > n) && (s = n / Math.max(t.width, t.height)), s < 1 || !0 === e) {
			if("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
				const n = e ? p : Math.floor,
					r = n(s * t.width),
					a = n(s * t.height);
				void 0 === f && (f = x(r, a));
				const o = i ? x(r, a) : f;
				o.width = r, o.height = a;
				return o.getContext("2d").drawImage(t, 0, 0, r, a), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + r + "x" + a + ")."), o
			}
			return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t
		}
		return t
	}

	function w(t) {
		return d(t.width) && d(t.height)
	}

	function b(t, e) {
		return t.generateMipmaps && e && 1003 !== t.minFilter && 1006 !== t.minFilter
	}

	function I(e) {
		t.generateMipmap(e)
	}

	function C(i, n, s, r, a = !1) {
		if(!1 === o) return n;
		if(null !== i) {
			if(void 0 !== t[i]) return t[i];
			console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + i + "'")
		}
		let l = n;
		return 6403 === n && (5126 === s && (l = 33326), 5131 === s && (l = 33325), 5121 === s && (l = 33321)), 33319 === n && (5126 === s && (l = 33328), 5131 === s && (l = 33327), 5121 === s && (l = 33323)), 6408 === n && (5126 === s && (l = 34836), 5131 === s && (l = 34842), 5121 === s && (l = 3001 === r && !1 === a ? 35907 : 32856), 32819 === s && (l = 32854), 32820 === s && (l = 32855)), 33325 !== l && 33326 !== l && 33327 !== l && 33328 !== l && 34842 !== l && 34836 !== l || e.get("EXT_color_buffer_float"), l
	}

	function S(t, e, i) {
		return !0 === b(t, i) || t.isFramebufferTexture && 1003 !== t.minFilter && 1006 !== t.minFilter ? Math.log2(Math.max(e.width, e.height)) + 1 : void 0 !== t.mipmaps && t.mipmaps.length > 0 ? t.mipmaps.length : t.isCompressedTexture && Array.isArray(t.image) ? e.mipmaps.length : 1
	}

	function M(t) {
		return 1003 === t || 1004 === t || 1005 === t ? 9728 : 9729
	}

	function B(t) {
		const e = t.target;
		e.removeEventListener("dispose", B),
			function(t) {
				const e = n.get(t);
				if(void 0 === e.__webglInit) return;
				const i = t.source,
					s = v.get(i);
				if(s) {
					const n = s[e.__cacheKey];
					n.usedTimes--, 0 === n.usedTimes && R(t), 0 === Object.keys(s).length && v.delete(i)
				}
				n.remove(t)
			}(e), e.isVideoTexture && m.delete(e)
	}

	function T(e) {
		const i = e.target;
		i.removeEventListener("dispose", T),
			function(e) {
				const i = e.texture,
					s = n.get(e),
					r = n.get(i);
				void 0 !== r.__webglTexture && (t.deleteTexture(r.__webglTexture), a.memory.textures--);
				e.depthTexture && e.depthTexture.dispose();
				if(e.isWebGLCubeRenderTarget)
					for(let e = 0; e < 6; e++) t.deleteFramebuffer(s.__webglFramebuffer[e]), s.__webglDepthbuffer && t.deleteRenderbuffer(s.__webglDepthbuffer[e]);
				else {
					if(t.deleteFramebuffer(s.__webglFramebuffer), s.__webglDepthbuffer && t.deleteRenderbuffer(s.__webglDepthbuffer), s.__webglMultisampledFramebuffer && t.deleteFramebuffer(s.__webglMultisampledFramebuffer), s.__webglColorRenderbuffer)
						for(let e = 0; e < s.__webglColorRenderbuffer.length; e++) s.__webglColorRenderbuffer[e] && t.deleteRenderbuffer(s.__webglColorRenderbuffer[e]);
					s.__webglDepthRenderbuffer && t.deleteRenderbuffer(s.__webglDepthRenderbuffer)
				}
				if(e.isWebGLMultipleRenderTargets)
					for(let e = 0, s = i.length; e < s; e++) {
						const s = n.get(i[e]);
						s.__webglTexture && (t.deleteTexture(s.__webglTexture), a.memory.textures--), n.remove(i[e])
					}
				n.remove(i), n.remove(e)
			}(i)
	}

	function R(e) {
		const i = n.get(e);
		t.deleteTexture(i.__webglTexture);
		const s = e.source;
		delete v.get(s)[i.__cacheKey], a.memory.textures--
	}
	let D = 0;

	function L(t, e) {
		const s = n.get(t);
		if(t.isVideoTexture && function(t) {
				const e = a.render.frame;
				m.get(t) !== e && (m.set(t, e), t.update())
			}(t), !1 === t.isRenderTargetTexture && t.version > 0 && s.__version !== t.version) {
			const i = t.image;
			if(null === i) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
			else {
				if(!1 !== i.complete) return void k(s, t, e);
				console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
			}
		}
		i.activeTexture(33984 + e), i.bindTexture(3553, s.__webglTexture)
	}
	const P = {
			1e3: 10497,
			1001: 33071,
			1002: 33648
		},
		F = {
			1003: 9728,
			1004: 9984,
			1005: 9986,
			1006: 9729,
			1007: 9985,
			1008: 9987
		};

	function U(i, r, a) {
		if(a ? (t.texParameteri(i, 10242, P[r.wrapS]), t.texParameteri(i, 10243, P[r.wrapT]), 32879 !== i && 35866 !== i || t.texParameteri(i, 32882, P[r.wrapR]), t.texParameteri(i, 10240, F[r.magFilter]), t.texParameteri(i, 10241, F[r.minFilter])) : (t.texParameteri(i, 10242, 33071), t.texParameteri(i, 10243, 33071), 32879 !== i && 35866 !== i || t.texParameteri(i, 32882, 33071), 1001 === r.wrapS && 1001 === r.wrapT || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(i, 10240, M(r.magFilter)), t.texParameteri(i, 10241, M(r.minFilter)), 1003 !== r.minFilter && 1006 !== r.minFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), !0 === e.has("EXT_texture_filter_anisotropic")) {
			const a = e.get("EXT_texture_filter_anisotropic");
			if(1015 === r.type && !1 === e.has("OES_texture_float_linear")) return;
			if(!1 === o && 1016 === r.type && !1 === e.has("OES_texture_half_float_linear")) return;
			(r.anisotropy > 1 || n.get(r).__currentAnisotropy) && (t.texParameterf(i, a.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(r.anisotropy, s.getMaxAnisotropy())), n.get(r).__currentAnisotropy = r.anisotropy)
		}
	}

	function N(e, i) {
		let n = !1;
		void 0 === e.__webglInit && (e.__webglInit = !0, i.addEventListener("dispose", B));
		const s = i.source;
		let r = v.get(s);
		void 0 === r && (r = {}, v.set(s, r));
		const o = function(t) {
			const e = [];
			return e.push(t.wrapS), e.push(t.wrapT), e.push(t.magFilter), e.push(t.minFilter), e.push(t.anisotropy), e.push(t.internalFormat), e.push(t.format), e.push(t.type), e.push(t.generateMipmaps), e.push(t.premultiplyAlpha), e.push(t.flipY), e.push(t.unpackAlignment), e.push(t.encoding), e.join()
		}(i);
		if(o !== e.__cacheKey) {
			void 0 === r[o] && (r[o] = {
				texture: t.createTexture(),
				usedTimes: 0
			}, a.memory.textures++, n = !0), r[o].usedTimes++;
			const s = r[e.__cacheKey];
			void 0 !== s && (r[e.__cacheKey].usedTimes--, 0 === s.usedTimes && R(i)), e.__cacheKey = o, e.__webglTexture = r[o].texture
		}
		return n
	}

	function k(e, n, s) {
		let a = 3553;
		n.isDataArrayTexture && (a = 35866), n.isData3DTexture && (a = 32879);
		const l = N(e, n),
			c = n.source;
		if(i.activeTexture(33984 + s), i.bindTexture(a, e.__webglTexture), c.version !== c.__currentVersion || !0 === l) {
			t.pixelStorei(37440, n.flipY), t.pixelStorei(37441, n.premultiplyAlpha), t.pixelStorei(3317, n.unpackAlignment), t.pixelStorei(37443, 0);
			const e = function(t) {
				return !o && (1001 !== t.wrapS || 1001 !== t.wrapT || 1003 !== t.minFilter && 1006 !== t.minFilter)
			}(n) && !1 === w(n.image);
			let s = E(n.image, e, !1, h);
			s = W(n, s);
			const u = w(s) || o,
				d = r.convert(n.format, n.encoding);
			let A, p = r.convert(n.type),
				g = C(n.internalFormat, d, p, n.encoding, n.isVideoTexture);
			U(a, n, u);
			const m = n.mipmaps,
				f = o && !0 !== n.isVideoTexture,
				v = void 0 === c.__currentVersion || !0 === l,
				y = S(n, s, u);
			if(n.isDepthTexture) g = 6402, o ? g = 1015 === n.type ? 36012 : 1014 === n.type ? 33190 : 1020 === n.type ? 35056 : 33189 : 1015 === n.type && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), 1026 === n.format && 6402 === g && 1012 !== n.type && 1014 !== n.type && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), n.type = 1014, p = r.convert(n.type)), 1027 === n.format && 6402 === g && (g = 34041, 1020 !== n.type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), n.type = 1020, p = r.convert(n.type))), v && (f ? i.texStorage2D(3553, 1, g, s.width, s.height) : i.texImage2D(3553, 0, g, s.width, s.height, 0, d, p, null));
			else if(n.isDataTexture)
				if(m.length > 0 && u) {
					f && v && i.texStorage2D(3553, y, g, m[0].width, m[0].height);
					for(let t = 0, e = m.length; t < e; t++) A = m[t], f ? i.texSubImage2D(3553, t, 0, 0, A.width, A.height, d, p, A.data) : i.texImage2D(3553, t, g, A.width, A.height, 0, d, p, A.data);
					n.generateMipmaps = !1
				} else f ? (v && i.texStorage2D(3553, y, g, s.width, s.height), i.texSubImage2D(3553, 0, 0, 0, s.width, s.height, d, p, s.data)) : i.texImage2D(3553, 0, g, s.width, s.height, 0, d, p, s.data);
			else if(n.isCompressedTexture) {
				f && v && i.texStorage2D(3553, y, g, m[0].width, m[0].height);
				for(let t = 0, e = m.length; t < e; t++) A = m[t], 1023 !== n.format ? null !== d ? f ? i.compressedTexSubImage2D(3553, t, 0, 0, A.width, A.height, d, A.data) : i.compressedTexImage2D(3553, t, g, A.width, A.height, 0, A.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : f ? i.texSubImage2D(3553, t, 0, 0, A.width, A.height, d, p, A.data) : i.texImage2D(3553, t, g, A.width, A.height, 0, d, p, A.data)
			} else if(n.isDataArrayTexture) f ? (v && i.texStorage3D(35866, y, g, s.width, s.height, s.depth), i.texSubImage3D(35866, 0, 0, 0, 0, s.width, s.height, s.depth, d, p, s.data)) : i.texImage3D(35866, 0, g, s.width, s.height, s.depth, 0, d, p, s.data);
			else if(n.isData3DTexture) f ? (v && i.texStorage3D(32879, y, g, s.width, s.height, s.depth), i.texSubImage3D(32879, 0, 0, 0, 0, s.width, s.height, s.depth, d, p, s.data)) : i.texImage3D(32879, 0, g, s.width, s.height, s.depth, 0, d, p, s.data);
			else if(n.isFramebufferTexture) {
				if(v)
					if(f) i.texStorage2D(3553, y, g, s.width, s.height);
					else {
						let t = s.width,
							e = s.height;
						for(let n = 0; n < y; n++) i.texImage2D(3553, n, g, t, e, 0, d, p, null), t >>= 1, e >>= 1
					}
			} else if(m.length > 0 && u) {
				f && v && i.texStorage2D(3553, y, g, m[0].width, m[0].height);
				for(let t = 0, e = m.length; t < e; t++) A = m[t], f ? i.texSubImage2D(3553, t, 0, 0, d, p, A) : i.texImage2D(3553, t, g, d, p, A);
				n.generateMipmaps = !1
			} else f ? (v && i.texStorage2D(3553, y, g, s.width, s.height), i.texSubImage2D(3553, 0, 0, 0, d, p, s)) : i.texImage2D(3553, 0, g, d, p, s);
			b(n, u) && I(a), c.__currentVersion = c.version, n.onUpdate && n.onUpdate(n)
		}
		e.__version = n.version
	}

	function O(e, s, a, o, l) {
		const c = r.convert(a.format, a.encoding),
			h = r.convert(a.type),
			u = C(a.internalFormat, c, h, a.encoding);
		n.get(s).__hasExternalTextures || (32879 === l || 35866 === l ? i.texImage3D(l, 0, u, s.width, s.height, s.depth, 0, c, h, null) : i.texImage2D(l, 0, u, s.width, s.height, 0, c, h, null)), i.bindFramebuffer(36160, e), V(s) ? A.framebufferTexture2DMultisampleEXT(36160, o, l, n.get(a).__webglTexture, 0, z(s)) : t.framebufferTexture2D(36160, o, l, n.get(a).__webglTexture, 0), i.bindFramebuffer(36160, null)
	}

	function G(e, i, n) {
		if(t.bindRenderbuffer(36161, e), i.depthBuffer && !i.stencilBuffer) {
			let s = 33189;
			if(n || V(i)) {
				const e = i.depthTexture;
				e && e.isDepthTexture && (1015 === e.type ? s = 36012 : 1014 === e.type && (s = 33190));
				const n = z(i);
				V(i) ? A.renderbufferStorageMultisampleEXT(36161, n, s, i.width, i.height) : t.renderbufferStorageMultisample(36161, n, s, i.width, i.height)
			} else t.renderbufferStorage(36161, s, i.width, i.height);
			t.framebufferRenderbuffer(36160, 36096, 36161, e)
		} else if(i.depthBuffer && i.stencilBuffer) {
			const s = z(i);
			n && !1 === V(i) ? t.renderbufferStorageMultisample(36161, s, 35056, i.width, i.height) : V(i) ? A.renderbufferStorageMultisampleEXT(36161, s, 35056, i.width, i.height) : t.renderbufferStorage(36161, 34041, i.width, i.height), t.framebufferRenderbuffer(36160, 33306, 36161, e)
		} else {
			const e = !0 === i.isWebGLMultipleRenderTargets ? i.texture : [i.texture];
			for(let s = 0; s < e.length; s++) {
				const a = e[s],
					o = r.convert(a.format, a.encoding),
					l = r.convert(a.type),
					c = C(a.internalFormat, o, l, a.encoding),
					h = z(i);
				n && !1 === V(i) ? t.renderbufferStorageMultisample(36161, h, c, i.width, i.height) : V(i) ? A.renderbufferStorageMultisampleEXT(36161, h, c, i.width, i.height) : t.renderbufferStorage(36161, c, i.width, i.height)
			}
		}
		t.bindRenderbuffer(36161, null)
	}

	function H(e) {
		const s = n.get(e),
			r = !0 === e.isWebGLCubeRenderTarget;
		if(e.depthTexture && !s.__autoAllocateDepthBuffer) {
			if(r) throw new Error("target.depthTexture not supported in Cube render targets");
			! function(e, s) {
				if(s && s.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
				if(i.bindFramebuffer(36160, e), !s.depthTexture || !s.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
				n.get(s.depthTexture).__webglTexture && s.depthTexture.image.width === s.width && s.depthTexture.image.height === s.height || (s.depthTexture.image.width = s.width, s.depthTexture.image.height = s.height, s.depthTexture.needsUpdate = !0), L(s.depthTexture, 0);
				const r = n.get(s.depthTexture).__webglTexture,
					a = z(s);
				if(1026 === s.depthTexture.format) V(s) ? A.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, r, 0, a) : t.framebufferTexture2D(36160, 36096, 3553, r, 0);
				else {
					if(1027 !== s.depthTexture.format) throw new Error("Unknown depthTexture format");
					V(s) ? A.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, r, 0, a) : t.framebufferTexture2D(36160, 33306, 3553, r, 0)
				}
			}(s.__webglFramebuffer, e)
		} else if(r) {
			s.__webglDepthbuffer = [];
			for(let n = 0; n < 6; n++) i.bindFramebuffer(36160, s.__webglFramebuffer[n]), s.__webglDepthbuffer[n] = t.createRenderbuffer(), G(s.__webglDepthbuffer[n], e, !1)
		} else i.bindFramebuffer(36160, s.__webglFramebuffer), s.__webglDepthbuffer = t.createRenderbuffer(), G(s.__webglDepthbuffer, e, !1);
		i.bindFramebuffer(36160, null)
	}

	function z(t) {
		return Math.min(u, t.samples)
	}

	function V(t) {
		const i = n.get(t);
		return o && t.samples > 0 && !0 === e.has("WEBGL_multisampled_render_to_texture") && !1 !== i.__useRenderToTexture
	}

	function W(t, i) {
		const n = t.encoding,
			s = t.format,
			r = t.type;
		return !0 === t.isCompressedTexture || !0 === t.isVideoTexture || 1035 === t.format || 3e3 !== n && (3001 === n ? !1 === o ? !0 === e.has("EXT_sRGB") && 1023 === s ? (t.format = 1035, t.minFilter = 1006, t.generateMipmaps = !1) : i = Q.sRGBToLinear(i) : 1023 === s && 1009 === r || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", n)), i
	}
	this.allocateTextureUnit = function() {
		const t = D;
		return t >= l && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + l), D += 1, t
	}, this.resetTextureUnits = function() {
		D = 0
	}, this.setTexture2D = L, this.setTexture2DArray = function(t, e) {
		const s = n.get(t);
		t.version > 0 && s.__version !== t.version ? k(s, t, e) : (i.activeTexture(33984 + e), i.bindTexture(35866, s.__webglTexture))
	}, this.setTexture3D = function(t, e) {
		const s = n.get(t);
		t.version > 0 && s.__version !== t.version ? k(s, t, e) : (i.activeTexture(33984 + e), i.bindTexture(32879, s.__webglTexture))
	}, this.setTextureCube = function(e, s) {
		const a = n.get(e);
		e.version > 0 && a.__version !== e.version ? function(e, n, s) {
			if(6 !== n.image.length) return;
			const a = N(e, n),
				l = n.source;
			if(i.activeTexture(33984 + s), i.bindTexture(34067, e.__webglTexture), l.version !== l.__currentVersion || !0 === a) {
				t.pixelStorei(37440, n.flipY), t.pixelStorei(37441, n.premultiplyAlpha), t.pixelStorei(3317, n.unpackAlignment), t.pixelStorei(37443, 0);
				const e = n.isCompressedTexture || n.image[0].isCompressedTexture,
					s = n.image[0] && n.image[0].isDataTexture,
					h = [];
				for(let t = 0; t < 6; t++) h[t] = e || s ? s ? n.image[t].image : n.image[t] : E(n.image[t], !1, !0, c), h[t] = W(n, h[t]);
				const u = h[0],
					d = w(u) || o,
					A = r.convert(n.format, n.encoding),
					p = r.convert(n.type),
					g = C(n.internalFormat, A, p, n.encoding),
					m = o && !0 !== n.isVideoTexture,
					f = void 0 === l.__currentVersion || !0 === a;
				let v, y = S(n, u, d);
				if(U(34067, n, d), e) {
					m && f && i.texStorage2D(34067, y, g, u.width, u.height);
					for(let t = 0; t < 6; t++) {
						v = h[t].mipmaps;
						for(let e = 0; e < v.length; e++) {
							const s = v[e];
							1023 !== n.format ? null !== A ? m ? i.compressedTexSubImage2D(34069 + t, e, 0, 0, s.width, s.height, A, s.data) : i.compressedTexImage2D(34069 + t, e, g, s.width, s.height, 0, s.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : m ? i.texSubImage2D(34069 + t, e, 0, 0, s.width, s.height, A, p, s.data) : i.texImage2D(34069 + t, e, g, s.width, s.height, 0, A, p, s.data)
						}
					}
				} else {
					v = n.mipmaps, m && f && (v.length > 0 && y++, i.texStorage2D(34067, y, g, h[0].width, h[0].height));
					for(let t = 0; t < 6; t++)
						if(s) {
							m ? i.texSubImage2D(34069 + t, 0, 0, 0, h[t].width, h[t].height, A, p, h[t].data) : i.texImage2D(34069 + t, 0, g, h[t].width, h[t].height, 0, A, p, h[t].data);
							for(let e = 0; e < v.length; e++) {
								const n = v[e].image[t].image;
								m ? i.texSubImage2D(34069 + t, e + 1, 0, 0, n.width, n.height, A, p, n.data) : i.texImage2D(34069 + t, e + 1, g, n.width, n.height, 0, A, p, n.data)
							}
						} else {
							m ? i.texSubImage2D(34069 + t, 0, 0, 0, A, p, h[t]) : i.texImage2D(34069 + t, 0, g, A, p, h[t]);
							for(let e = 0; e < v.length; e++) {
								const n = v[e];
								m ? i.texSubImage2D(34069 + t, e + 1, 0, 0, A, p, n.image[t]) : i.texImage2D(34069 + t, e + 1, g, A, p, n.image[t])
							}
						}
				}
				b(n, d) && I(34067), l.__currentVersion = l.version, n.onUpdate && n.onUpdate(n)
			}
			e.__version = n.version
		}(a, e, s) : (i.activeTexture(33984 + s), i.bindTexture(34067, a.__webglTexture))
	}, this.rebindTextures = function(t, e, i) {
		const s = n.get(t);
		void 0 !== e && O(s.__webglFramebuffer, t, t.texture, 36064, 3553), void 0 !== i && H(t)
	}, this.setupRenderTarget = function(e) {
		const l = e.texture,
			c = n.get(e),
			h = n.get(l);
		e.addEventListener("dispose", T), !0 !== e.isWebGLMultipleRenderTargets && (void 0 === h.__webglTexture && (h.__webglTexture = t.createTexture()), h.__version = l.version, a.memory.textures++);
		const u = !0 === e.isWebGLCubeRenderTarget,
			d = !0 === e.isWebGLMultipleRenderTargets,
			A = w(e) || o;
		if(u) {
			c.__webglFramebuffer = [];
			for(let e = 0; e < 6; e++) c.__webglFramebuffer[e] = t.createFramebuffer()
		} else {
			if(c.__webglFramebuffer = t.createFramebuffer(), d)
				if(s.drawBuffers) {
					const i = e.texture;
					for(let e = 0, s = i.length; e < s; e++) {
						const s = n.get(i[e]);
						void 0 === s.__webglTexture && (s.__webglTexture = t.createTexture(), a.memory.textures++)
					}
				} else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
			if(o && e.samples > 0 && !1 === V(e)) {
				const n = d ? l : [l];
				c.__webglMultisampledFramebuffer = t.createFramebuffer(), c.__webglColorRenderbuffer = [], i.bindFramebuffer(36160, c.__webglMultisampledFramebuffer);
				for(let i = 0; i < n.length; i++) {
					const s = n[i];
					c.__webglColorRenderbuffer[i] = t.createRenderbuffer(), t.bindRenderbuffer(36161, c.__webglColorRenderbuffer[i]);
					const a = r.convert(s.format, s.encoding),
						o = r.convert(s.type),
						l = C(s.internalFormat, a, o, s.encoding),
						h = z(e);
					t.renderbufferStorageMultisample(36161, h, l, e.width, e.height), t.framebufferRenderbuffer(36160, 36064 + i, 36161, c.__webglColorRenderbuffer[i])
				}
				t.bindRenderbuffer(36161, null), e.depthBuffer && (c.__webglDepthRenderbuffer = t.createRenderbuffer(), G(c.__webglDepthRenderbuffer, e, !0)), i.bindFramebuffer(36160, null)
			}
		}
		if(u) {
			i.bindTexture(34067, h.__webglTexture), U(34067, l, A);
			for(let t = 0; t < 6; t++) O(c.__webglFramebuffer[t], e, l, 36064, 34069 + t);
			b(l, A) && I(34067), i.unbindTexture()
		} else if(d) {
			const t = e.texture;
			for(let s = 0, r = t.length; s < r; s++) {
				const r = t[s],
					a = n.get(r);
				i.bindTexture(3553, a.__webglTexture), U(3553, r, A), O(c.__webglFramebuffer, e, r, 36064 + s, 3553), b(r, A) && I(3553)
			}
			i.unbindTexture()
		} else {
			let t = 3553;
			(e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) && (o ? t = e.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), i.bindTexture(t, h.__webglTexture), U(t, l, A), O(c.__webglFramebuffer, e, l, 36064, t), b(l, A) && I(t), i.unbindTexture()
		}
		e.depthBuffer && H(e)
	}, this.updateRenderTargetMipmap = function(t) {
		const e = w(t) || o,
			s = !0 === t.isWebGLMultipleRenderTargets ? t.texture : [t.texture];
		for(let r = 0, a = s.length; r < a; r++) {
			const a = s[r];
			if(b(a, e)) {
				const e = t.isWebGLCubeRenderTarget ? 34067 : 3553,
					s = n.get(a).__webglTexture;
				i.bindTexture(e, s), I(e), i.unbindTexture()
			}
		}
	}, this.updateMultisampleRenderTarget = function(e) {
		if(o && e.samples > 0 && !1 === V(e)) {
			const s = e.isWebGLMultipleRenderTargets ? e.texture : [e.texture],
				r = e.width,
				a = e.height;
			let o = 16384;
			const l = [],
				c = e.stencilBuffer ? 33306 : 36096,
				h = n.get(e),
				u = !0 === e.isWebGLMultipleRenderTargets;
			if(u)
				for(let e = 0; e < s.length; e++) i.bindFramebuffer(36160, h.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064 + e, 36161, null), i.bindFramebuffer(36160, h.__webglFramebuffer), t.framebufferTexture2D(36009, 36064 + e, 3553, null, 0);
			i.bindFramebuffer(36008, h.__webglMultisampledFramebuffer), i.bindFramebuffer(36009, h.__webglFramebuffer);
			for(let i = 0; i < s.length; i++) {
				l.push(36064 + i), e.depthBuffer && l.push(c);
				const d = void 0 !== h.__ignoreDepthValues && h.__ignoreDepthValues;
				if(!1 === d && (e.depthBuffer && (o |= 256), e.stencilBuffer && (o |= 1024)), u && t.framebufferRenderbuffer(36008, 36064, 36161, h.__webglColorRenderbuffer[i]), !0 === d && (t.invalidateFramebuffer(36008, [c]), t.invalidateFramebuffer(36009, [c])), u) {
					const e = n.get(s[i]).__webglTexture;
					t.framebufferTexture2D(36009, 36064, 3553, e, 0)
				}
				t.blitFramebuffer(0, 0, r, a, 0, 0, r, a, o, 9728), g && t.invalidateFramebuffer(36008, l)
			}
			if(i.bindFramebuffer(36008, null), i.bindFramebuffer(36009, null), u)
				for(let e = 0; e < s.length; e++) {
					i.bindFramebuffer(36160, h.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064 + e, 36161, h.__webglColorRenderbuffer[e]);
					const r = n.get(s[e]).__webglTexture;
					i.bindFramebuffer(36160, h.__webglFramebuffer), t.framebufferTexture2D(36009, 36064 + e, 3553, r, 0)
				}
			i.bindFramebuffer(36009, h.__webglMultisampledFramebuffer)
		}
	}, this.setupDepthRenderbuffer = H, this.setupFrameBufferTexture = O, this.useMultisampledRTT = V
}

function Is(t, e, i) {
	const n = i.isWebGL2;
	return {
		convert: function(i, s = null) {
			let r;
			if(1009 === i) return 5121;
			if(1017 === i) return 32819;
			if(1018 === i) return 32820;
			if(1010 === i) return 5120;
			if(1011 === i) return 5122;
			if(1012 === i) return 5123;
			if(1013 === i) return 5124;
			if(1014 === i) return 5125;
			if(1015 === i) return 5126;
			if(1016 === i) return n ? 5131 : (r = e.get("OES_texture_half_float"), null !== r ? r.HALF_FLOAT_OES : null);
			if(1021 === i) return 6406;
			if(1023 === i) return 6408;
			if(1024 === i) return 6409;
			if(1025 === i) return 6410;
			if(1026 === i) return 6402;
			if(1027 === i) return 34041;
			if(1028 === i) return 6403;
			if(1022 === i) return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
			if(1035 === i) return r = e.get("EXT_sRGB"), null !== r ? r.SRGB_ALPHA_EXT : null;
			if(1029 === i) return 36244;
			if(1030 === i) return 33319;
			if(1031 === i) return 33320;
			if(1033 === i) return 36249;
			if(33776 === i || 33777 === i || 33778 === i || 33779 === i)
				if(3001 === s) {
					if(r = e.get("WEBGL_compressed_texture_s3tc_srgb"), null === r) return null;
					if(33776 === i) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
					if(33777 === i) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
					if(33778 === i) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
					if(33779 === i) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
				} else {
					if(r = e.get("WEBGL_compressed_texture_s3tc"), null === r) return null;
					if(33776 === i) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
					if(33777 === i) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
					if(33778 === i) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
					if(33779 === i) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT
				}
			if(35840 === i || 35841 === i || 35842 === i || 35843 === i) {
				if(r = e.get("WEBGL_compressed_texture_pvrtc"), null === r) return null;
				if(35840 === i) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
				if(35841 === i) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
				if(35842 === i) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
				if(35843 === i) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
			}
			if(36196 === i) return r = e.get("WEBGL_compressed_texture_etc1"), null !== r ? r.COMPRESSED_RGB_ETC1_WEBGL : null;
			if(37492 === i || 37496 === i) {
				if(r = e.get("WEBGL_compressed_texture_etc"), null === r) return null;
				if(37492 === i) return 3001 === s ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
				if(37496 === i) return 3001 === s ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC
			}
			if(37808 === i || 37809 === i || 37810 === i || 37811 === i || 37812 === i || 37813 === i || 37814 === i || 37815 === i || 37816 === i || 37817 === i || 37818 === i || 37819 === i || 37820 === i || 37821 === i) {
				if(r = e.get("WEBGL_compressed_texture_astc"), null === r) return null;
				if(37808 === i) return 3001 === s ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
				if(37809 === i) return 3001 === s ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
				if(37810 === i) return 3001 === s ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
				if(37811 === i) return 3001 === s ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
				if(37812 === i) return 3001 === s ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
				if(37813 === i) return 3001 === s ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
				if(37814 === i) return 3001 === s ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
				if(37815 === i) return 3001 === s ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
				if(37816 === i) return 3001 === s ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
				if(37817 === i) return 3001 === s ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
				if(37818 === i) return 3001 === s ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
				if(37819 === i) return 3001 === s ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
				if(37820 === i) return 3001 === s ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
				if(37821 === i) return 3001 === s ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR
			}
			if(36492 === i) {
				if(r = e.get("EXT_texture_compression_bptc"), null === r) return null;
				if(36492 === i) return 3001 === s ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT
			}
			return 1020 === i ? n ? 34042 : (r = e.get("WEBGL_depth_texture"), null !== r ? r.UNSIGNED_INT_24_8_WEBGL : null) : void 0 !== t[i] ? t[i] : null
		}
	}
}
class Cs extends qe {
	constructor(t = []) {
		super(), this.isArrayCamera = !0, this.cameras = t
	}
}
class Ss extends qt {
	constructor() {
		super(), this.isGroup = !0, this.type = "Group"
	}
}
const Ms = {
	type: "move"
};
class Bs {
	constructor() {
		this._targetRay = null, this._grip = null, this._hand = null
	}
	getHandSpace() {
		return null === this._hand && (this._hand = new Ss, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
			pinching: !1
		}), this._hand
	}
	getTargetRaySpace() {
		return null === this._targetRay && (this._targetRay = new Ss, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new V, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new V), this._targetRay
	}
	getGripSpace() {
		return null === this._grip && (this._grip = new Ss, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new V, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new V), this._grip
	}
	dispatchEvent(t) {
		return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), null !== this._hand && this._hand.dispatchEvent(t), this
	}
	disconnect(t) {
		return this.dispatchEvent({
			type: "disconnected",
			data: t
		}), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this
	}
	update(t, e, i) {
		let n = null,
			s = null,
			r = null;
		const a = this._targetRay,
			o = this._grip,
			l = this._hand;
		if(t && "visible-blurred" !== e.session.visibilityState) {
			if(l && t.hand) {
				r = !0;
				for(const n of t.hand.values()) {
					const t = e.getJointPose(n, i);
					if(void 0 === l.joints[n.jointName]) {
						const t = new Ss;
						t.matrixAutoUpdate = !1, t.visible = !1, l.joints[n.jointName] = t, l.add(t)
					}
					const s = l.joints[n.jointName];
					null !== t && (s.matrix.fromArray(t.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), s.jointRadius = t.radius), s.visible = null !== t
				}
				const n = l.joints["index-finger-tip"],
					s = l.joints["thumb-tip"],
					a = n.position.distanceTo(s.position),
					o = .02,
					c = .005;
				l.inputState.pinching && a > o + c ? (l.inputState.pinching = !1, this.dispatchEvent({
					type: "pinchend",
					handedness: t.handedness,
					target: this
				})) : !l.inputState.pinching && a <= o - c && (l.inputState.pinching = !0, this.dispatchEvent({
					type: "pinchstart",
					handedness: t.handedness,
					target: this
				}))
			} else null !== o && t.gripSpace && (s = e.getPose(t.gripSpace, i), null !== s && (o.matrix.fromArray(s.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), s.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(s.linearVelocity)) : o.hasLinearVelocity = !1, s.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(s.angularVelocity)) : o.hasAngularVelocity = !1));
			null !== a && (n = e.getPose(t.targetRaySpace, i), null === n && null !== s && (n = s), null !== n && (a.matrix.fromArray(n.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), n.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(n.linearVelocity)) : a.hasLinearVelocity = !1, n.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(n.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Ms)))
		}
		return null !== a && (a.visible = null !== n), null !== o && (o.visible = null !== s), null !== l && (l.visible = null !== r), this
	}
}
class Ts extends N {
	constructor(t, e, i, n, s, r, a, o, l, c) {
		if(1026 !== (c = void 0 !== c ? c : 1026) && 1027 !== c) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
		void 0 === i && 1026 === c && (i = 1014), void 0 === i && 1027 === c && (i = 1020), super(null, n, s, r, a, o, c, i, l), this.isDepthTexture = !0, this.image = {
			width: t,
			height: e
		}, this.magFilter = void 0 !== a ? a : 1003, this.minFilter = void 0 !== o ? o : 1003, this.flipY = !1, this.generateMipmaps = !1
	}
}
class Rs extends n {
	constructor(t, e) {
		super();
		const i = this;
		let n = null,
			s = 1,
			r = null,
			a = "local-floor",
			o = null,
			l = null,
			c = null,
			h = null,
			u = null,
			d = null;
		const A = e.getContextAttributes();
		let p = null,
			g = null;
		const m = [],
			f = [],
			v = new qe;
		v.layers.enable(1), v.viewport = new k;
		const y = new qe;
		y.layers.enable(2), y.viewport = new k;
		const x = [v, y],
			_ = new Cs;
		_.layers.enable(1), _.layers.enable(2);
		let E = null,
			w = null;

		function b(t) {
			const e = f.indexOf(t.inputSource);
			if(-1 === e) return;
			const i = m[e];
			void 0 !== i && i.dispatchEvent({
				type: t.type,
				data: t.inputSource
			})
		}

		function I() {
			n.removeEventListener("select", b), n.removeEventListener("selectstart", b), n.removeEventListener("selectend", b), n.removeEventListener("squeeze", b), n.removeEventListener("squeezestart", b), n.removeEventListener("squeezeend", b), n.removeEventListener("end", I), n.removeEventListener("inputsourceschange", C);
			for(let t = 0; t < m.length; t++) {
				const e = f[t];
				null !== e && (f[t] = null, m[t].disconnect(e))
			}
			E = null, w = null, t.setRenderTarget(p), u = null, h = null, c = null, n = null, g = null, R.stop(), i.isPresenting = !1, i.dispatchEvent({
				type: "sessionend"
			})
		}

		function C(t) {
			for(let e = 0; e < t.removed.length; e++) {
				const i = t.removed[e],
					n = f.indexOf(i);
				n >= 0 && (f[n] = null, m[n].dispatchEvent({
					type: "disconnected",
					data: i
				}))
			}
			for(let e = 0; e < t.added.length; e++) {
				const i = t.added[e];
				let n = f.indexOf(i);
				if(-1 === n) {
					for(let t = 0; t < m.length; t++) {
						if(t >= f.length) {
							f.push(i), n = t;
							break
						}
						if(null === f[t]) {
							f[t] = i, n = t;
							break
						}
					}
					if(-1 === n) break
				}
				const s = m[n];
				s && s.dispatchEvent({
					type: "connected",
					data: i
				})
			}
		}
		this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(t) {
			let e = m[t];
			return void 0 === e && (e = new Bs, m[t] = e), e.getTargetRaySpace()
		}, this.getControllerGrip = function(t) {
			let e = m[t];
			return void 0 === e && (e = new Bs, m[t] = e), e.getGripSpace()
		}, this.getHand = function(t) {
			let e = m[t];
			return void 0 === e && (e = new Bs, m[t] = e), e.getHandSpace()
		}, this.setFramebufferScaleFactor = function(t) {
			s = t, !0 === i.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
		}, this.setReferenceSpaceType = function(t) {
			a = t, !0 === i.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
		}, this.getReferenceSpace = function() {
			return o || r
		}, this.setReferenceSpace = function(t) {
			o = t
		}, this.getBaseLayer = function() {
			return null !== h ? h : u
		}, this.getBinding = function() {
			return c
		}, this.getFrame = function() {
			return d
		}, this.getSession = function() {
			return n
		}, this.setSession = async function(l) {
			if(n = l, null !== n) {
				if(p = t.getRenderTarget(), n.addEventListener("select", b), n.addEventListener("selectstart", b), n.addEventListener("selectend", b), n.addEventListener("squeeze", b), n.addEventListener("squeezestart", b), n.addEventListener("squeezeend", b), n.addEventListener("end", I), n.addEventListener("inputsourceschange", C), !0 !== A.xrCompatible && await e.makeXRCompatible(), void 0 === n.renderState.layers || !1 === t.capabilities.isWebGL2) {
					const i = {
						antialias: void 0 !== n.renderState.layers || A.antialias,
						alpha: A.alpha,
						depth: A.depth,
						stencil: A.stencil,
						framebufferScaleFactor: s
					};
					u = new XRWebGLLayer(n, e, i), n.updateRenderState({
						baseLayer: u
					}), g = new O(u.framebufferWidth, u.framebufferHeight, {
						format: 1023,
						type: 1009,
						encoding: t.outputEncoding,
						stencilBuffer: A.stencil
					})
				} else {
					let i = null,
						r = null,
						a = null;
					A.depth && (a = A.stencil ? 35056 : 33190, i = A.stencil ? 1027 : 1026, r = A.stencil ? 1020 : 1014);
					const o = {
						colorFormat: 32856,
						depthFormat: a,
						scaleFactor: s
					};
					c = new XRWebGLBinding(n, e), h = c.createProjectionLayer(o), n.updateRenderState({
						layers: [h]
					}), g = new O(h.textureWidth, h.textureHeight, {
						format: 1023,
						type: 1009,
						depthTexture: new Ts(h.textureWidth, h.textureHeight, r, void 0, void 0, void 0, void 0, void 0, void 0, i),
						stencilBuffer: A.stencil,
						encoding: t.outputEncoding,
						samples: A.antialias ? 4 : 0
					});
					t.properties.get(g).__ignoreDepthValues = h.ignoreDepthValues
				}
				g.isXRRenderTarget = !0, this.setFoveation(1), o = null, r = await n.requestReferenceSpace(a), R.setContext(n), R.start(), i.isPresenting = !0, i.dispatchEvent({
					type: "sessionstart"
				})
			}
		};
		const S = new V,
			M = new V;

		function B(t, e) {
			null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.copy(t.matrixWorld).invert()
		}
		this.updateCamera = function(t) {
			if(null === n) return;
			_.near = y.near = v.near = t.near, _.far = y.far = v.far = t.far, E === _.near && w === _.far || (n.updateRenderState({
				depthNear: _.near,
				depthFar: _.far
			}), E = _.near, w = _.far);
			const e = t.parent,
				i = _.cameras;
			B(_, e);
			for(let t = 0; t < i.length; t++) B(i[t], e);
			_.matrixWorld.decompose(_.position, _.quaternion, _.scale), t.matrix.copy(_.matrix), t.matrix.decompose(t.position, t.quaternion, t.scale);
			const s = t.children;
			for(let t = 0, e = s.length; t < e; t++) s[t].updateMatrixWorld(!0);
			2 === i.length ? function(t, e, i) {
				S.setFromMatrixPosition(e.matrixWorld), M.setFromMatrixPosition(i.matrixWorld);
				const n = S.distanceTo(M),
					s = e.projectionMatrix.elements,
					r = i.projectionMatrix.elements,
					a = s[14] / (s[10] - 1),
					o = s[14] / (s[10] + 1),
					l = (s[9] + 1) / s[5],
					c = (s[9] - 1) / s[5],
					h = (s[8] - 1) / s[0],
					u = (r[8] + 1) / r[0],
					d = a * h,
					A = a * u,
					p = n / (-h + u),
					g = p * -h;
				e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(g), t.translateZ(p), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.copy(t.matrixWorld).invert();
				const m = a + p,
					f = o + p,
					v = d - g,
					y = A + (n - g),
					x = l * o / f * m,
					_ = c * o / f * m;
				t.projectionMatrix.makePerspective(v, y, x, _, m, f)
			}(_, v, y) : _.projectionMatrix.copy(v.projectionMatrix)
		}, this.getCamera = function() {
			return _
		}, this.getFoveation = function() {
			return null !== h ? h.fixedFoveation : null !== u ? u.fixedFoveation : void 0
		}, this.setFoveation = function(t) {
			null !== h && (h.fixedFoveation = t), null !== u && void 0 !== u.fixedFoveation && (u.fixedFoveation = t)
		};
		let T = null;
		const R = new ni;
		R.setAnimationLoop((function(e, i) {
			if(l = i.getViewerPose(o || r), d = i, null !== l) {
				const e = l.views;
				null !== u && (t.setRenderTargetFramebuffer(g, u.framebuffer), t.setRenderTarget(g));
				let i = !1;
				e.length !== _.cameras.length && (_.cameras.length = 0, i = !0);
				for(let n = 0; n < e.length; n++) {
					const s = e[n];
					let r = null;
					if(null !== u) r = u.getViewport(s);
					else {
						const e = c.getViewSubImage(h, s);
						r = e.viewport, 0 === n && (t.setRenderTargetTextures(g, e.colorTexture, h.ignoreDepthValues ? void 0 : e.depthStencilTexture), t.setRenderTarget(g))
					}
					let a = x[n];
					void 0 === a && (a = new qe, a.layers.enable(n), a.viewport = new k, x[n] = a), a.matrix.fromArray(s.transform.matrix), a.projectionMatrix.fromArray(s.projectionMatrix), a.viewport.set(r.x, r.y, r.width, r.height), 0 === n && _.matrix.copy(a.matrix), !0 === i && _.cameras.push(a)
				}
			}
			for(let t = 0; t < m.length; t++) {
				const e = f[t],
					n = m[t];
				null !== e && void 0 !== n && n.update(e, i, o || r)
			}
			T && T(e, i), d = null
		})), this.setAnimationLoop = function(t) {
			T = t
		}, this.dispose = function() {}
	}
}

function Ds(t, e) {
	function i(i, n) {
		i.opacity.value = n.opacity, n.color && i.diffuse.value.copy(n.color), n.emissive && i.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity), n.map && (i.map.value = n.map), n.alphaMap && (i.alphaMap.value = n.alphaMap), n.bumpMap && (i.bumpMap.value = n.bumpMap, i.bumpScale.value = n.bumpScale, 1 === n.side && (i.bumpScale.value *= -1)), n.displacementMap && (i.displacementMap.value = n.displacementMap, i.displacementScale.value = n.displacementScale, i.displacementBias.value = n.displacementBias), n.emissiveMap && (i.emissiveMap.value = n.emissiveMap), n.normalMap && (i.normalMap.value = n.normalMap, i.normalScale.value.copy(n.normalScale), 1 === n.side && i.normalScale.value.negate()), n.specularMap && (i.specularMap.value = n.specularMap), n.alphaTest > 0 && (i.alphaTest.value = n.alphaTest);
		const s = e.get(n).envMap;
		if(s && (i.envMap.value = s, i.flipEnvMap.value = s.isCubeTexture && !1 === s.isRenderTargetTexture ? -1 : 1, i.reflectivity.value = n.reflectivity, i.ior.value = n.ior, i.refractionRatio.value = n.refractionRatio), n.lightMap) {
			i.lightMap.value = n.lightMap;
			const e = !0 !== t.physicallyCorrectLights ? Math.PI : 1;
			i.lightMapIntensity.value = n.lightMapIntensity * e
		}
		let r, a;
		n.aoMap && (i.aoMap.value = n.aoMap, i.aoMapIntensity.value = n.aoMapIntensity), n.map ? r = n.map : n.specularMap ? r = n.specularMap : n.displacementMap ? r = n.displacementMap : n.normalMap ? r = n.normalMap : n.bumpMap ? r = n.bumpMap : n.roughnessMap ? r = n.roughnessMap : n.metalnessMap ? r = n.metalnessMap : n.alphaMap ? r = n.alphaMap : n.emissiveMap ? r = n.emissiveMap : n.clearcoatMap ? r = n.clearcoatMap : n.clearcoatNormalMap ? r = n.clearcoatNormalMap : n.clearcoatRoughnessMap ? r = n.clearcoatRoughnessMap : n.iridescenceMap ? r = n.iridescenceMap : n.iridescenceThicknessMap ? r = n.iridescenceThicknessMap : n.specularIntensityMap ? r = n.specularIntensityMap : n.specularColorMap ? r = n.specularColorMap : n.transmissionMap ? r = n.transmissionMap : n.thicknessMap ? r = n.thicknessMap : n.sheenColorMap ? r = n.sheenColorMap : n.sheenRoughnessMap && (r = n.sheenRoughnessMap), void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture), !0 === r.matrixAutoUpdate && r.updateMatrix(), i.uvTransform.value.copy(r.matrix)), n.aoMap ? a = n.aoMap : n.lightMap && (a = n.lightMap), void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture), !0 === a.matrixAutoUpdate && a.updateMatrix(), i.uv2Transform.value.copy(a.matrix))
	}
	return {
		refreshFogUniforms: function(t, e) {
			t.fogColor.value.copy(e.color), e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
		},
		refreshMaterialUniforms: function(t, n, s, r, a) {
			n.isMeshBasicMaterial || n.isMeshLambertMaterial ? i(t, n) : n.isMeshToonMaterial ? (i(t, n), function(t, e) {
				e.gradientMap && (t.gradientMap.value = e.gradientMap)
			}(t, n)) : n.isMeshPhongMaterial ? (i(t, n), function(t, e) {
				t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4)
			}(t, n)) : n.isMeshStandardMaterial ? (i(t, n), function(t, i) {
				t.roughness.value = i.roughness, t.metalness.value = i.metalness, i.roughnessMap && (t.roughnessMap.value = i.roughnessMap);
				i.metalnessMap && (t.metalnessMap.value = i.metalnessMap);
				e.get(i).envMap && (t.envMapIntensity.value = i.envMapIntensity)
			}(t, n), n.isMeshPhysicalMaterial && function(t, e, i) {
				t.ior.value = e.ior, e.sheen > 0 && (t.sheenColor.value.copy(e.sheenColor).multiplyScalar(e.sheen), t.sheenRoughness.value = e.sheenRoughness, e.sheenColorMap && (t.sheenColorMap.value = e.sheenColorMap), e.sheenRoughnessMap && (t.sheenRoughnessMap.value = e.sheenRoughnessMap));
				e.clearcoat > 0 && (t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap), e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap), e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t.clearcoatNormalMap.value = e.clearcoatNormalMap, 1 === e.side && t.clearcoatNormalScale.value.negate()));
				e.iridescence > 0 && (t.iridescence.value = e.iridescence, t.iridescenceIOR.value = e.iridescenceIOR, t.iridescenceThicknessMinimum.value = e.iridescenceThicknessRange[0], t.iridescenceThicknessMaximum.value = e.iridescenceThicknessRange[1], e.iridescenceMap && (t.iridescenceMap.value = e.iridescenceMap), e.iridescenceThicknessMap && (t.iridescenceThicknessMap.value = e.iridescenceThicknessMap));
				e.transmission > 0 && (t.transmission.value = e.transmission, t.transmissionSamplerMap.value = i.texture, t.transmissionSamplerSize.value.set(i.width, i.height), e.transmissionMap && (t.transmissionMap.value = e.transmissionMap), t.thickness.value = e.thickness, e.thicknessMap && (t.thicknessMap.value = e.thicknessMap), t.attenuationDistance.value = e.attenuationDistance, t.attenuationColor.value.copy(e.attenuationColor));
				t.specularIntensity.value = e.specularIntensity, t.specularColor.value.copy(e.specularColor), e.specularIntensityMap && (t.specularIntensityMap.value = e.specularIntensityMap);
				e.specularColorMap && (t.specularColorMap.value = e.specularColorMap)
			}(t, n, a)) : n.isMeshMatcapMaterial ? (i(t, n), function(t, e) {
				e.matcap && (t.matcap.value = e.matcap)
			}(t, n)) : n.isMeshDepthMaterial ? i(t, n) : n.isMeshDistanceMaterial ? (i(t, n), function(t, e) {
				t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance
			}(t, n)) : n.isMeshNormalMaterial ? i(t, n) : n.isLineBasicMaterial ? (function(t, e) {
				t.diffuse.value.copy(e.color), t.opacity.value = e.opacity
			}(t, n), n.isLineDashedMaterial && function(t, e) {
				t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
			}(t, n)) : n.isPointsMaterial ? function(t, e, i, n) {
				t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * i, t.scale.value = .5 * n, e.map && (t.map.value = e.map);
				e.alphaMap && (t.alphaMap.value = e.alphaMap);
				e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
				let s;
				e.map ? s = e.map : e.alphaMap && (s = e.alphaMap);
				void 0 !== s && (!0 === s.matrixAutoUpdate && s.updateMatrix(), t.uvTransform.value.copy(s.matrix))
			}(t, n, s, r) : n.isSpriteMaterial ? function(t, e) {
				t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map);
				e.alphaMap && (t.alphaMap.value = e.alphaMap);
				e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
				let i;
				e.map ? i = e.map : e.alphaMap && (i = e.alphaMap);
				void 0 !== i && (!0 === i.matrixAutoUpdate && i.updateMatrix(), t.uvTransform.value.copy(i.matrix))
			}(t, n) : n.isShadowMaterial ? (t.color.value.copy(n.color), t.opacity.value = n.opacity) : n.isShaderMaterial && (n.uniformsNeedUpdate = !1)
		}
	}
}

function Ls(t, e, i, n) {
	let s = {},
		r = {},
		a = [];
	const o = i.isWebGL2 ? t.getParameter(35375) : 0;

	function l(t, e, i) {
		const n = t.value;
		if(void 0 === i[e]) return i[e] = "number" == typeof n ? n : n.clone(), !0;
		if("number" == typeof n) {
			if(i[e] !== n) return i[e] = n, !0
		} else {
			const t = i[e];
			if(!1 === t.equals(n)) return t.copy(n), !0
		}
		return !1
	}

	function c(t) {
		const e = t.value,
			i = {
				boundary: 0,
				storage: 0
			};
		return "number" == typeof e ? (i.boundary = 4, i.storage = 4) : e.isVector2 ? (i.boundary = 8, i.storage = 8) : e.isVector3 || e.isColor ? (i.boundary = 16, i.storage = 12) : e.isVector4 ? (i.boundary = 16, i.storage = 16) : e.isMatrix3 ? (i.boundary = 48, i.storage = 48) : e.isMatrix4 ? (i.boundary = 64, i.storage = 64) : e.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", e), i
	}

	function h(e) {
		const i = e.target;
		i.removeEventListener("dispose", h);
		const n = a.indexOf(i.__bindingPointIndex);
		a.splice(n, 1), t.deleteBuffer(s[i.id]), delete s[i.id], delete r[i.id]
	}
	return {
		bind: function(t, e) {
			const i = e.program;
			n.uniformBlockBinding(t, i)
		},
		update: function(i, u) {
			let d = s[i.id];
			void 0 === d && (! function(t) {
				const e = t.uniforms;
				let i = 0;
				const n = 16;
				let s = 0;
				for(let t = 0, r = e.length; t < r; t++) {
					const r = e[t],
						a = c(r);
					if(r.__data = new Float32Array(a.storage / Float32Array.BYTES_PER_ELEMENT), r.__offset = i, t > 0) {
						s = i % n;
						const t = n - s;
						0 !== s && t - a.boundary < 0 && (i += n - s, r.__offset = i)
					}
					i += a.storage
				}
				s = i % n, s > 0 && (i += n - s);
				t.__size = i, t.__cache = {}
			}(i), d = function(e) {
				const i = function() {
					for(let t = 0; t < o; t++)
						if(-1 === a.indexOf(t)) return a.push(t), t;
					return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0
				}();
				e.__bindingPointIndex = i;
				const n = t.createBuffer(),
					s = e.__size,
					r = e.usage;
				return t.bindBuffer(35345, n), t.bufferData(35345, s, r), t.bindBuffer(35345, null), t.bindBufferBase(35345, i, n), n
			}(i), s[i.id] = d, i.addEventListener("dispose", h));
			const A = u.program;
			n.updateUBOMapping(i, A);
			const p = e.render.frame;
			r[i.id] !== p && (! function(e) {
				const i = s[e.id],
					n = e.uniforms,
					r = e.__cache;
				t.bindBuffer(35345, i);
				for(let e = 0, i = n.length; e < i; e++) {
					const i = n[e];
					if(!0 === l(i, e, r)) {
						const e = i.value,
							n = i.__offset;
						"number" == typeof e ? (i.__data[0] = e, t.bufferSubData(35345, n, i.__data)) : (i.value.isMatrix3 ? (i.__data[0] = i.value.elements[0], i.__data[1] = i.value.elements[1], i.__data[2] = i.value.elements[2], i.__data[3] = i.value.elements[0], i.__data[4] = i.value.elements[3], i.__data[5] = i.value.elements[4], i.__data[6] = i.value.elements[5], i.__data[7] = i.value.elements[0], i.__data[8] = i.value.elements[6], i.__data[9] = i.value.elements[7], i.__data[10] = i.value.elements[8], i.__data[11] = i.value.elements[0]) : e.toArray(i.__data), t.bufferSubData(35345, n, i.__data))
					}
				}
				t.bindBuffer(35345, null)
			}(i), r[i.id] = p)
		},
		dispose: function() {
			for(const e in s) t.deleteBuffer(s[e]);
			a = [], s = {}, r = {}
		}
	}
}

function Qs(t = {}) {
	this.isWebGLRenderer = !0;
	const e = void 0 !== t.canvas ? t.canvas : function() {
			const t = _("canvas");
			return t.style.display = "block", t
		}(),
		i = void 0 !== t.context ? t.context : null,
		n = void 0 === t.depth || t.depth,
		s = void 0 === t.stencil || t.stencil,
		r = void 0 !== t.antialias && t.antialias,
		a = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
		o = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
		l = void 0 !== t.powerPreference ? t.powerPreference : "default",
		c = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat;
	let h;
	h = null !== i ? i.getContextAttributes().alpha : void 0 !== t.alpha && t.alpha;
	let u = null,
		d = null;
	const A = [],
		g = [];
	this.domElement = e, this.debug = {
		checkShaderErrors: !0
	}, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = 3e3, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1, Object.defineProperties(this, {
		gammaFactor: {
			get: function() {
				return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2
			},
			set: function() {
				console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")
			}
		}
	});
	const m = this;
	let f = !1,
		y = 0,
		x = 0,
		E = null,
		w = -1,
		b = null;
	const I = new k,
		C = new k;
	let S = null,
		M = e.width,
		B = e.height,
		T = 1,
		R = null,
		D = null;
	const L = new k(0, 0, M, B),
		Q = new k(0, 0, M, B);
	let P = !1;
	const F = new ii;
	let U = !1,
		N = !1,
		G = null;
	const H = new _t,
		z = new v,
		W = new V,
		q = {
			background: null,
			fog: null,
			environment: null,
			overrideMaterial: null,
			isScene: !0
		};

	function j() {
		return null === E ? T : 1
	}
	let Y, J, X, K, $, Z, tt, et, it, nt, st, rt, at, ot, lt, ct, ht, ut, dt, At, pt, gt, mt, ft, vt = i;

	function yt(t, i) {
		for(let n = 0; n < t.length; n++) {
			const s = t[n],
				r = e.getContext(s, i);
			if(null !== r) return r
		}
		return null
	}
	try {
		const t = {
			alpha: !0,
			depth: n,
			stencil: s,
			antialias: r,
			premultipliedAlpha: a,
			preserveDrawingBuffer: o,
			powerPreference: l,
			failIfMajorPerformanceCaveat: c
		};
		if("setAttribute" in e && e.setAttribute("data-engine", "three.js r144"), e.addEventListener("webglcontextlost", wt, !1), e.addEventListener("webglcontextrestored", bt, !1), e.addEventListener("webglcontextcreationerror", It, !1), null === vt) {
			const e = ["webgl2", "webgl", "experimental-webgl"];
			if(!0 === m.isWebGL1Renderer && e.shift(), vt = yt(e, t), null === vt) throw yt(e) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
		}
		void 0 === vt.getShaderPrecisionFormat && (vt.getShaderPrecisionFormat = function() {
			return {
				rangeMin: 1,
				rangeMax: 1,
				precision: 1
			}
		})
	} catch(t) {
		throw console.error("THREE.WebGLRenderer: " + t.message), t
	}

	function xt() {
		Y = new Ti(vt), J = new di(vt, Y, t), Y.init(J), gt = new Is(vt, Y, J), X = new ws(vt, Y, J), K = new Li, $ = new cs, Z = new bs(vt, Y, X, $, J, gt, K), tt = new pi(m), et = new Bi(m), it = new si(vt, J), mt = new hi(vt, Y, it, J), nt = new Ri(vt, it, K, mt), st = new Ui(vt, nt, it, K), dt = new Fi(vt, J, Z), ct = new Ai($), rt = new ls(m, tt, et, Y, J, mt, ct), at = new Ds(m, $), ot = new As, lt = new ys(Y, J), ut = new ci(m, tt, X, st, h, a), ht = new Es(m, st, J), ft = new Ls(vt, K, J, X), At = new ui(vt, Y, K, J), pt = new Di(vt, Y, K, J), K.programs = rt.programs, m.capabilities = J, m.extensions = Y, m.properties = $, m.renderLists = ot, m.shadowMap = ht, m.state = X, m.info = K
	}
	xt();
	const Et = new Rs(m, vt);

	function wt(t) {
		t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), f = !0
	}

	function bt() {
		console.log("THREE.WebGLRenderer: Context Restored."), f = !1;
		const t = K.autoReset,
			e = ht.enabled,
			i = ht.autoUpdate,
			n = ht.needsUpdate,
			s = ht.type;
		xt(), K.autoReset = t, ht.enabled = e, ht.autoUpdate = i, ht.needsUpdate = n, ht.type = s
	}

	function It(t) {
		console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", t.statusMessage)
	}

	function Ct(t) {
		const e = t.target;
		e.removeEventListener("dispose", Ct),
			function(t) {
				(function(t) {
					const e = $.get(t).programs;
					void 0 !== e && (e.forEach((function(t) {
						rt.releaseProgram(t)
					})), t.isShaderMaterial && rt.releaseShaderCache(t))
				})(t), $.remove(t)
			}(e)
	}
	this.xr = Et, this.getContext = function() {
		return vt
	}, this.getContextAttributes = function() {
		return vt.getContextAttributes()
	}, this.forceContextLoss = function() {
		const t = Y.get("WEBGL_lose_context");
		t && t.loseContext()
	}, this.forceContextRestore = function() {
		const t = Y.get("WEBGL_lose_context");
		t && t.restoreContext()
	}, this.getPixelRatio = function() {
		return T
	}, this.setPixelRatio = function(t) {
		void 0 !== t && (T = t, this.setSize(M, B, !1))
	}, this.getSize = function(t) {
		return t.set(M, B)
	}, this.setSize = function(t, i, n) {
		Et.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (M = t, B = i, e.width = Math.floor(t * T), e.height = Math.floor(i * T), !1 !== n && (e.style.width = t + "px", e.style.height = i + "px"), this.setViewport(0, 0, t, i))
	}, this.getDrawingBufferSize = function(t) {
		return t.set(M * T, B * T).floor()
	}, this.setDrawingBufferSize = function(t, i, n) {
		M = t, B = i, T = n, e.width = Math.floor(t * n), e.height = Math.floor(i * n), this.setViewport(0, 0, t, i)
	}, this.getCurrentViewport = function(t) {
		return t.copy(I)
	}, this.getViewport = function(t) {
		return t.copy(L)
	}, this.setViewport = function(t, e, i, n) {
		t.isVector4 ? L.set(t.x, t.y, t.z, t.w) : L.set(t, e, i, n), X.viewport(I.copy(L).multiplyScalar(T).floor())
	}, this.getScissor = function(t) {
		return t.copy(Q)
	}, this.setScissor = function(t, e, i, n) {
		t.isVector4 ? Q.set(t.x, t.y, t.z, t.w) : Q.set(t, e, i, n), X.scissor(C.copy(Q).multiplyScalar(T).floor())
	}, this.getScissorTest = function() {
		return P
	}, this.setScissorTest = function(t) {
		X.setScissorTest(P = t)
	}, this.setOpaqueSort = function(t) {
		R = t
	}, this.setTransparentSort = function(t) {
		D = t
	}, this.getClearColor = function(t) {
		return t.copy(ut.getClearColor())
	}, this.setClearColor = function() {
		ut.setClearColor.apply(ut, arguments)
	}, this.getClearAlpha = function() {
		return ut.getClearAlpha()
	}, this.setClearAlpha = function() {
		ut.setClearAlpha.apply(ut, arguments)
	}, this.clear = function(t = !0, e = !0, i = !0) {
		let n = 0;
		t && (n |= 16384), e && (n |= 256), i && (n |= 1024), vt.clear(n)
	}, this.clearColor = function() {
		this.clear(!0, !1, !1)
	}, this.clearDepth = function() {
		this.clear(!1, !0, !1)
	}, this.clearStencil = function() {
		this.clear(!1, !1, !0)
	}, this.dispose = function() {
		e.removeEventListener("webglcontextlost", wt, !1), e.removeEventListener("webglcontextrestored", bt, !1), e.removeEventListener("webglcontextcreationerror", It, !1), ot.dispose(), lt.dispose(), $.dispose(), tt.dispose(), et.dispose(), st.dispose(), mt.dispose(), ft.dispose(), rt.dispose(), Et.dispose(), Et.removeEventListener("sessionstart", Mt), Et.removeEventListener("sessionend", Bt), G && (G.dispose(), G = null), Tt.stop()
	}, this.renderBufferDirect = function(t, e, i, n, s, r) {
		null === e && (e = q);
		const a = s.isMesh && s.matrixWorld.determinant() < 0,
			o = function(t, e, i, n, s) {
				!0 !== e.isScene && (e = q);
				Z.resetTextureUnits();
				const r = e.fog,
					a = n.isMeshStandardMaterial ? e.environment : null,
					o = null === E ? m.outputEncoding : !0 === E.isXRRenderTarget ? E.texture.encoding : 3e3,
					l = (n.isMeshStandardMaterial ? et : tt).get(n.envMap || a),
					c = !0 === n.vertexColors && !!i.attributes.color && 4 === i.attributes.color.itemSize,
					h = !!n.normalMap && !!i.attributes.tangent,
					u = !!i.morphAttributes.position,
					A = !!i.morphAttributes.normal,
					p = !!i.morphAttributes.color,
					g = n.toneMapped ? m.toneMapping : 0,
					f = i.morphAttributes.position || i.morphAttributes.normal || i.morphAttributes.color,
					v = void 0 !== f ? f.length : 0,
					y = $.get(n),
					x = d.state.lights;
				if(!0 === U && (!0 === N || t !== b)) {
					const e = t === b && n.id === w;
					ct.setState(n, t, e)
				}
				let _ = !1;
				n.version === y.__version ? y.needsLights && y.lightsStateVersion !== x.state.version || y.outputEncoding !== o || s.isInstancedMesh && !1 === y.instancing ? _ = !0 : s.isInstancedMesh || !0 !== y.instancing ? s.isSkinnedMesh && !1 === y.skinning ? _ = !0 : s.isSkinnedMesh || !0 !== y.skinning ? y.envMap !== l || !0 === n.fog && y.fog !== r ? _ = !0 : void 0 === y.numClippingPlanes || y.numClippingPlanes === ct.numPlanes && y.numIntersection === ct.numIntersection ? (y.vertexAlphas !== c || y.vertexTangents !== h || y.morphTargets !== u || y.morphNormals !== A || y.morphColors !== p || y.toneMapping !== g || !0 === J.isWebGL2 && y.morphTargetsCount !== v) && (_ = !0) : _ = !0 : _ = !0 : _ = !0 : (_ = !0, y.__version = n.version);
				let I = y.currentProgram;
				!0 === _ && (I = Pt(n, e, s));
				let C = !1,
					S = !1,
					M = !1;
				const R = I.getUniforms(),
					D = y.uniforms;
				X.useProgram(I.program) && (C = !0, S = !0, M = !0);
				n.id !== w && (w = n.id, S = !0);
				if(C || b !== t) {
					if(R.setValue(vt, "projectionMatrix", t.projectionMatrix), J.logarithmicDepthBuffer && R.setValue(vt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), b !== t && (b = t, S = !0, M = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
						const e = R.map.cameraPosition;
						void 0 !== e && e.setValue(vt, W.setFromMatrixPosition(t.matrixWorld))
					}(n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && R.setValue(vt, "isOrthographic", !0 === t.isOrthographicCamera), (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || s.isSkinnedMesh) && R.setValue(vt, "viewMatrix", t.matrixWorldInverse)
				}
				if(s.isSkinnedMesh) {
					R.setOptional(vt, s, "bindMatrix"), R.setOptional(vt, s, "bindMatrixInverse");
					const t = s.skeleton;
					t && (J.floatVertexTextures ? (null === t.boneTexture && t.computeBoneTexture(), R.setValue(vt, "boneTexture", t.boneTexture, Z), R.setValue(vt, "boneTextureSize", t.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))
				}
				const L = i.morphAttributes;
				(void 0 !== L.position || void 0 !== L.normal || void 0 !== L.color && !0 === J.isWebGL2) && dt.update(s, i, n, I);
				(S || y.receiveShadow !== s.receiveShadow) && (y.receiveShadow = s.receiveShadow, R.setValue(vt, "receiveShadow", s.receiveShadow));
				n.isMeshGouraudMaterial && null !== n.envMap && (D.envMap.value = l, D.flipEnvMap.value = l.isCubeTexture && !1 === l.isRenderTargetTexture ? -1 : 1);
				S && (R.setValue(vt, "toneMappingExposure", m.toneMappingExposure), y.needsLights && (P = M, (Q = D).ambientLightColor.needsUpdate = P, Q.lightProbe.needsUpdate = P, Q.directionalLights.needsUpdate = P, Q.directionalLightShadows.needsUpdate = P, Q.pointLights.needsUpdate = P, Q.pointLightShadows.needsUpdate = P, Q.spotLights.needsUpdate = P, Q.spotLightShadows.needsUpdate = P, Q.rectAreaLights.needsUpdate = P, Q.hemisphereLights.needsUpdate = P), r && !0 === n.fog && at.refreshFogUniforms(D, r), at.refreshMaterialUniforms(D, n, T, B, G), Hn.upload(vt, y.uniformsList, D, Z));
				var Q, P;
				n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (Hn.upload(vt, y.uniformsList, D, Z), n.uniformsNeedUpdate = !1);
				n.isSpriteMaterial && R.setValue(vt, "center", s.center);
				if(R.setValue(vt, "modelViewMatrix", s.modelViewMatrix), R.setValue(vt, "normalMatrix", s.normalMatrix), R.setValue(vt, "modelMatrix", s.matrixWorld), n.isShaderMaterial || n.isRawShaderMaterial) {
					const t = n.uniformsGroups;
					for(let e = 0, i = t.length; e < i; e++)
						if(J.isWebGL2) {
							const i = t[e];
							ft.update(i, I), ft.bind(i, I)
						} else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")
				}
				return I
			}(t, e, i, n, s);
		X.setMaterial(n, a);
		let l = i.index;
		const c = i.attributes.position;
		if(null === l) {
			if(void 0 === c || 0 === c.count) return
		} else if(0 === l.count) return;
		let h, u = 1;
		!0 === n.wireframe && (l = nt.getWireframeAttribute(i), u = 2), mt.setup(s, n, o, i, l);
		let A = At;
		null !== l && (h = it.get(l), A = pt, A.setIndex(h));
		const p = null !== l ? l.count : c.count,
			g = i.drawRange.start * u,
			f = i.drawRange.count * u,
			v = null !== r ? r.start * u : 0,
			y = null !== r ? r.count * u : 1 / 0,
			x = Math.max(g, v),
			_ = Math.min(p, g + f, v + y) - 1,
			I = Math.max(0, _ - x + 1);
		if(0 !== I) {
			if(s.isMesh) !0 === n.wireframe ? (X.setLineWidth(n.wireframeLinewidth * j()), A.setMode(1)) : A.setMode(4);
			else if(s.isLine) {
				let t = n.linewidth;
				void 0 === t && (t = 1), X.setLineWidth(t * j()), s.isLineSegments ? A.setMode(1) : s.isLineLoop ? A.setMode(2) : A.setMode(3)
			} else s.isPoints ? A.setMode(0) : s.isSprite && A.setMode(4);
			if(s.isInstancedMesh) A.renderInstances(x, I, s.count);
			else if(i.isInstancedBufferGeometry) {
				const t = Math.min(i.instanceCount, i._maxInstanceCount);
				A.renderInstances(x, I, t)
			} else A.render(x, I)
		}
	}, this.compile = function(t, e) {
		function i(t, e, i) {
			!0 === t.transparent && 2 === t.side ? (t.side = 1, t.needsUpdate = !0, Pt(t, e, i), t.side = 0, t.needsUpdate = !0, Pt(t, e, i), t.side = 2) : Pt(t, e, i)
		}
		d = lt.get(t), d.init(), g.push(d), t.traverseVisible((function(t) {
			t.isLight && t.layers.test(e.layers) && (d.pushLight(t), t.castShadow && d.pushShadow(t))
		})), d.setupLights(m.physicallyCorrectLights), t.traverse((function(e) {
			const n = e.material;
			if(n)
				if(Array.isArray(n))
					for(let s = 0; s < n.length; s++) {
						i(n[s], t, e)
					} else i(n, t, e)
		})), g.pop(), d = null
	};
	let St = null;

	function Mt() {
		Tt.stop()
	}

	function Bt() {
		Tt.start()
	}
	const Tt = new ni;

	function Rt(t, e, i, n) {
		if(!1 === t.visible) return;
		if(t.layers.test(e.layers))
			if(t.isGroup) i = t.renderOrder;
			else if(t.isLOD) !0 === t.autoUpdate && t.update(e);
		else if(t.isLight) d.pushLight(t), t.castShadow && d.pushShadow(t);
		else if(t.isSprite) {
			if(!t.frustumCulled || F.intersectsSprite(t)) {
				n && W.setFromMatrixPosition(t.matrixWorld).applyMatrix4(H);
				const e = st.update(t),
					s = t.material;
				s.visible && u.push(t, e, s, i, W.z, null)
			}
		} else if((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== K.render.frame && (t.skeleton.update(), t.skeleton.frame = K.render.frame), !t.frustumCulled || F.intersectsObject(t))) {
			n && W.setFromMatrixPosition(t.matrixWorld).applyMatrix4(H);
			const e = st.update(t),
				s = t.material;
			if(Array.isArray(s)) {
				const n = e.groups;
				for(let r = 0, a = n.length; r < a; r++) {
					const a = n[r],
						o = s[a.materialIndex];
					o && o.visible && u.push(t, e, o, i, W.z, a)
				}
			} else s.visible && u.push(t, e, s, i, W.z, null)
		}
		const s = t.children;
		for(let t = 0, r = s.length; t < r; t++) Rt(s[t], e, i, n)
	}

	function Dt(t, e, i, n) {
		const s = t.opaque,
			a = t.transmissive,
			o = t.transparent;
		d.setupLightsView(i), a.length > 0 && function(t, e, i) {
			const n = J.isWebGL2;
			null === G && (G = new O(1, 1, {
				generateMipmaps: !0,
				type: Y.has("EXT_color_buffer_half_float") ? 1016 : 1009,
				minFilter: 1008,
				samples: n && !0 === r ? 4 : 0
			}));
			m.getDrawingBufferSize(z), n ? G.setSize(z.x, z.y) : G.setSize(p(z.x), p(z.y));
			const s = m.getRenderTarget();
			m.setRenderTarget(G), m.clear();
			const a = m.toneMapping;
			m.toneMapping = 0, Lt(t, e, i), m.toneMapping = a, Z.updateMultisampleRenderTarget(G), Z.updateRenderTargetMipmap(G), m.setRenderTarget(s)
		}(s, e, i), n && X.viewport(I.copy(n)), s.length > 0 && Lt(s, e, i), a.length > 0 && Lt(a, e, i), o.length > 0 && Lt(o, e, i), X.buffers.depth.setTest(!0), X.buffers.depth.setMask(!0), X.buffers.color.setMask(!0), X.setPolygonOffset(!1)
	}

	function Lt(t, e, i) {
		const n = !0 === e.isScene ? e.overrideMaterial : null;
		for(let s = 0, r = t.length; s < r; s++) {
			const r = t[s],
				a = r.object,
				o = r.geometry,
				l = null === n ? r.material : n,
				c = r.group;
			a.layers.test(i.layers) && Qt(a, e, i, o, l, c)
		}
	}

	function Qt(t, e, i, n, s, r) {
		t.onBeforeRender(m, e, i, n, s, r), t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), s.onBeforeRender(m, e, i, n, t, r), !0 === s.transparent && 2 === s.side ? (s.side = 1, s.needsUpdate = !0, m.renderBufferDirect(i, e, n, s, t, r), s.side = 0, s.needsUpdate = !0, m.renderBufferDirect(i, e, n, s, t, r), s.side = 2) : m.renderBufferDirect(i, e, n, s, t, r), t.onAfterRender(m, e, i, n, s, r)
	}

	function Pt(t, e, i) {
		!0 !== e.isScene && (e = q);
		const n = $.get(t),
			s = d.state.lights,
			r = d.state.shadowsArray,
			a = s.state.version,
			o = rt.getParameters(t, s.state, r, e, i),
			l = rt.getProgramCacheKey(o);
		let c = n.programs;
		n.environment = t.isMeshStandardMaterial ? e.environment : null, n.fog = e.fog, n.envMap = (t.isMeshStandardMaterial ? et : tt).get(t.envMap || n.environment), void 0 === c && (t.addEventListener("dispose", Ct), c = new Map, n.programs = c);
		let h = c.get(l);
		if(void 0 !== h) {
			if(n.currentProgram === h && n.lightsStateVersion === a) return Ft(t, o), h
		} else o.uniforms = rt.getUniforms(t), t.onBuild(i, o, m), t.onBeforeCompile(o, m), h = rt.acquireProgram(o, l), c.set(l, h), n.uniforms = o.uniforms;
		const u = n.uniforms;
		(t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (u.clippingPlanes = ct.uniform), Ft(t, o), n.needsLights = function(t) {
			return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights
		}(t), n.lightsStateVersion = a, n.needsLights && (u.ambientLightColor.value = s.state.ambient, u.lightProbe.value = s.state.probe, u.directionalLights.value = s.state.directional, u.directionalLightShadows.value = s.state.directionalShadow, u.spotLights.value = s.state.spot, u.spotLightShadows.value = s.state.spotShadow, u.rectAreaLights.value = s.state.rectArea, u.ltc_1.value = s.state.rectAreaLTC1, u.ltc_2.value = s.state.rectAreaLTC2, u.pointLights.value = s.state.point, u.pointLightShadows.value = s.state.pointShadow, u.hemisphereLights.value = s.state.hemi, u.directionalShadowMap.value = s.state.directionalShadowMap, u.directionalShadowMatrix.value = s.state.directionalShadowMatrix, u.spotShadowMap.value = s.state.spotShadowMap, u.spotLightMatrix.value = s.state.spotLightMatrix, u.spotLightMap.value = s.state.spotLightMap, u.pointShadowMap.value = s.state.pointShadowMap, u.pointShadowMatrix.value = s.state.pointShadowMatrix);
		const A = h.getUniforms(),
			p = Hn.seqWithValue(A.seq, u);
		return n.currentProgram = h, n.uniformsList = p, h
	}

	function Ft(t, e) {
		const i = $.get(t);
		i.outputEncoding = e.outputEncoding, i.instancing = e.instancing, i.skinning = e.skinning, i.morphTargets = e.morphTargets, i.morphNormals = e.morphNormals, i.morphColors = e.morphColors, i.morphTargetsCount = e.morphTargetsCount, i.numClippingPlanes = e.numClippingPlanes, i.numIntersection = e.numClipIntersection, i.vertexAlphas = e.vertexAlphas, i.vertexTangents = e.vertexTangents, i.toneMapping = e.toneMapping
	}
	Tt.setAnimationLoop((function(t) {
		St && St(t)
	})), "undefined" != typeof self && Tt.setContext(self), this.setAnimationLoop = function(t) {
		St = t, Et.setAnimationLoop(t), null === t ? Tt.stop() : Tt.start()
	}, Et.addEventListener("sessionstart", Mt), Et.addEventListener("sessionend", Bt), this.render = function(t, e) {
		if(void 0 !== e && !0 !== e.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
		if(!0 === f) return;
		!0 === t.matrixWorldAutoUpdate && t.updateMatrixWorld(), null === e.parent && !0 === e.matrixWorldAutoUpdate && e.updateMatrixWorld(), !0 === Et.enabled && !0 === Et.isPresenting && (!0 === Et.cameraAutoUpdate && Et.updateCamera(e), e = Et.getCamera()), !0 === t.isScene && t.onBeforeRender(m, t, e, E), d = lt.get(t, g.length), d.init(), g.push(d), H.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), F.setFromProjectionMatrix(H), N = this.localClippingEnabled, U = ct.init(this.clippingPlanes, N, e), u = ot.get(t, A.length), u.init(), A.push(u), Rt(t, e, 0, m.sortObjects), u.finish(), !0 === m.sortObjects && u.sort(R, D), !0 === U && ct.beginShadows();
		const i = d.state.shadowsArray;
		if(ht.render(i, t, e), !0 === U && ct.endShadows(), !0 === this.info.autoReset && this.info.reset(), ut.render(u, t), d.setupLights(m.physicallyCorrectLights), e.isArrayCamera) {
			const i = e.cameras;
			for(let e = 0, n = i.length; e < n; e++) {
				const n = i[e];
				Dt(u, t, n, n.viewport)
			}
		} else Dt(u, t, e);
		null !== E && (Z.updateMultisampleRenderTarget(E), Z.updateRenderTargetMipmap(E)), !0 === t.isScene && t.onAfterRender(m, t, e), mt.resetDefaultState(), w = -1, b = null, g.pop(), d = g.length > 0 ? g[g.length - 1] : null, A.pop(), u = A.length > 0 ? A[A.length - 1] : null
	}, this.getActiveCubeFace = function() {
		return y
	}, this.getActiveMipmapLevel = function() {
		return x
	}, this.getRenderTarget = function() {
		return E
	}, this.setRenderTargetTextures = function(t, e, i) {
		$.get(t.texture).__webglTexture = e, $.get(t.depthTexture).__webglTexture = i;
		const n = $.get(t);
		n.__hasExternalTextures = !0, n.__hasExternalTextures && (n.__autoAllocateDepthBuffer = void 0 === i, n.__autoAllocateDepthBuffer || !0 === Y.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), n.__useRenderToTexture = !1))
	}, this.setRenderTargetFramebuffer = function(t, e) {
		const i = $.get(t);
		i.__webglFramebuffer = e, i.__useDefaultFramebuffer = void 0 === e
	}, this.setRenderTarget = function(t, e = 0, i = 0) {
		E = t, y = e, x = i;
		let n = !0;
		if(t) {
			const e = $.get(t);
			void 0 !== e.__useDefaultFramebuffer ? (X.bindFramebuffer(36160, null), n = !1) : void 0 === e.__webglFramebuffer ? Z.setupRenderTarget(t) : e.__hasExternalTextures && Z.rebindTextures(t, $.get(t.texture).__webglTexture, $.get(t.depthTexture).__webglTexture)
		}
		let s = null,
			r = !1,
			a = !1;
		if(t) {
			const i = t.texture;
			(i.isData3DTexture || i.isDataArrayTexture) && (a = !0);
			const n = $.get(t).__webglFramebuffer;
			t.isWebGLCubeRenderTarget ? (s = n[e], r = !0) : s = J.isWebGL2 && t.samples > 0 && !1 === Z.useMultisampledRTT(t) ? $.get(t).__webglMultisampledFramebuffer : n, I.copy(t.viewport), C.copy(t.scissor), S = t.scissorTest
		} else I.copy(L).multiplyScalar(T).floor(), C.copy(Q).multiplyScalar(T).floor(), S = P;
		if(X.bindFramebuffer(36160, s) && J.drawBuffers && n && X.drawBuffers(t, s), X.viewport(I), X.scissor(C), X.setScissorTest(S), r) {
			const n = $.get(t.texture);
			vt.framebufferTexture2D(36160, 36064, 34069 + e, n.__webglTexture, i)
		} else if(a) {
			const n = $.get(t.texture),
				s = e || 0;
			vt.framebufferTextureLayer(36160, 36064, n.__webglTexture, i || 0, s)
		}
		w = -1
	}, this.readRenderTargetPixels = function(t, e, i, n, s, r, a) {
		if(!t || !t.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
		let o = $.get(t).__webglFramebuffer;
		if(t.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o) {
			X.bindFramebuffer(36160, o);
			try {
				const a = t.texture,
					o = a.format,
					l = a.type;
				if(1023 !== o && gt.convert(o) !== vt.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
				const c = 1016 === l && (Y.has("EXT_color_buffer_half_float") || J.isWebGL2 && Y.has("EXT_color_buffer_float"));
				if(!(1009 === l || gt.convert(l) === vt.getParameter(35738) || 1015 === l && (J.isWebGL2 || Y.has("OES_texture_float") || Y.has("WEBGL_color_buffer_float")) || c)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
				e >= 0 && e <= t.width - n && i >= 0 && i <= t.height - s && vt.readPixels(e, i, n, s, gt.convert(o), gt.convert(l), r)
			} finally {
				const t = null !== E ? $.get(E).__webglFramebuffer : null;
				X.bindFramebuffer(36160, t)
			}
		}
	}, this.copyFramebufferToTexture = function(t, e, i = 0) {
		const n = Math.pow(2, -i),
			s = Math.floor(e.image.width * n),
			r = Math.floor(e.image.height * n);
		Z.setTexture2D(e, 0), vt.copyTexSubImage2D(3553, i, 0, 0, t.x, t.y, s, r), X.unbindTexture()
	}, this.copyTextureToTexture = function(t, e, i, n = 0) {
		const s = e.image.width,
			r = e.image.height,
			a = gt.convert(i.format),
			o = gt.convert(i.type);
		Z.setTexture2D(i, 0), vt.pixelStorei(37440, i.flipY), vt.pixelStorei(37441, i.premultiplyAlpha), vt.pixelStorei(3317, i.unpackAlignment), e.isDataTexture ? vt.texSubImage2D(3553, n, t.x, t.y, s, r, a, o, e.image.data) : e.isCompressedTexture ? vt.compressedTexSubImage2D(3553, n, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, a, e.mipmaps[0].data) : vt.texSubImage2D(3553, n, t.x, t.y, a, o, e.image), 0 === n && i.generateMipmaps && vt.generateMipmap(3553), X.unbindTexture()
	}, this.copyTextureToTexture3D = function(t, e, i, n, s = 0) {
		if(m.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
		const r = t.max.x - t.min.x + 1,
			a = t.max.y - t.min.y + 1,
			o = t.max.z - t.min.z + 1,
			l = gt.convert(n.format),
			c = gt.convert(n.type);
		let h;
		if(n.isData3DTexture) Z.setTexture3D(n, 0), h = 32879;
		else {
			if(!n.isDataArrayTexture) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
			Z.setTexture2DArray(n, 0), h = 35866
		}
		vt.pixelStorei(37440, n.flipY), vt.pixelStorei(37441, n.premultiplyAlpha), vt.pixelStorei(3317, n.unpackAlignment);
		const u = vt.getParameter(3314),
			d = vt.getParameter(32878),
			A = vt.getParameter(3316),
			p = vt.getParameter(3315),
			g = vt.getParameter(32877),
			f = i.isCompressedTexture ? i.mipmaps[0] : i.image;
		vt.pixelStorei(3314, f.width), vt.pixelStorei(32878, f.height), vt.pixelStorei(3316, t.min.x), vt.pixelStorei(3315, t.min.y), vt.pixelStorei(32877, t.min.z), i.isDataTexture || i.isData3DTexture ? vt.texSubImage3D(h, s, e.x, e.y, e.z, r, a, o, l, c, f.data) : i.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), vt.compressedTexSubImage3D(h, s, e.x, e.y, e.z, r, a, o, l, f.data)) : vt.texSubImage3D(h, s, e.x, e.y, e.z, r, a, o, l, c, f), vt.pixelStorei(3314, u), vt.pixelStorei(32878, d), vt.pixelStorei(3316, A), vt.pixelStorei(3315, p), vt.pixelStorei(32877, g), 0 === s && n.generateMipmaps && vt.generateMipmap(h), X.unbindTexture()
	}, this.initTexture = function(t) {
		t.isCubeTexture ? Z.setTextureCube(t, 0) : t.isData3DTexture ? Z.setTexture3D(t, 0) : t.isDataArrayTexture ? Z.setTexture2DArray(t, 0) : Z.setTexture2D(t, 0), X.unbindTexture()
	}, this.resetState = function() {
		y = 0, x = 0, E = null, X.reset(), mt.reset()
	}, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
		detail: this
	}))
}(class extends Qs {}).prototype.isWebGL1Renderer = !0;
class Ps extends qt {
	constructor() {
		super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
			detail: this
		}))
	}
	copy(t, e) {
		return super.copy(t, e), null !== t.background && (this.background = t.background.clone()), null !== t.environment && (this.environment = t.environment.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this
	}
	toJSON(t) {
		const e = super.toJSON(t);
		return null !== this.fog && (e.object.fog = this.fog.toJSON()), e
	}
	get autoUpdate() {
		return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate
	}
	set autoUpdate(t) {
		console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = t
	}
}
class Fs {
	constructor(t, e) {
		this.isInterleavedBuffer = !0, this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.usage = 35044, this.updateRange = {
			offset: 0,
			count: -1
		}, this.version = 0, this.uuid = l()
	}
	onUploadCallback() {}
	set needsUpdate(t) {
		!0 === t && this.version++
	}
	setUsage(t) {
		return this.usage = t, this
	}
	copy(t) {
		return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this
	}
	copyAt(t, e, i) {
		t *= this.stride, i *= e.stride;
		for(let n = 0, s = this.stride; n < s; n++) this.array[t + n] = e.array[i + n];
		return this
	}
	set(t, e = 0) {
		return this.array.set(t, e), this
	}
	clone(t) {
		void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = l()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
		const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),
			i = new this.constructor(e, this.stride);
		return i.setUsage(this.usage), i
	}
	onUpload(t) {
		return this.onUploadCallback = t, this
	}
	toJSON(t) {
		return void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = l()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
			uuid: this.uuid,
			buffer: this.array.buffer._uuid,
			type: this.array.constructor.name,
			stride: this.stride
		}
	}
}
const Us = new V;
class Ns {
	constructor(t, e, i, n = !1) {
		this.isInterleavedBufferAttribute = !0, this.name = "", this.data = t, this.itemSize = e, this.offset = i, this.normalized = !0 === n
	}
	get count() {
		return this.data.count
	}
	get array() {
		return this.data.array
	}
	set needsUpdate(t) {
		this.data.needsUpdate = t
	}
	applyMatrix4(t) {
		for(let e = 0, i = this.data.count; e < i; e++) Us.fromBufferAttribute(this, e), Us.applyMatrix4(t), this.setXYZ(e, Us.x, Us.y, Us.z);
		return this
	}
	applyNormalMatrix(t) {
		for(let e = 0, i = this.count; e < i; e++) Us.fromBufferAttribute(this, e), Us.applyNormalMatrix(t), this.setXYZ(e, Us.x, Us.y, Us.z);
		return this
	}
	transformDirection(t) {
		for(let e = 0, i = this.count; e < i; e++) Us.fromBufferAttribute(this, e), Us.transformDirection(t), this.setXYZ(e, Us.x, Us.y, Us.z);
		return this
	}
	setX(t, e) {
		return this.normalized && (e = m(e, this.array)), this.data.array[t * this.data.stride + this.offset] = e, this
	}
	setY(t, e) {
		return this.normalized && (e = m(e, this.array)), this.data.array[t * this.data.stride + this.offset + 1] = e, this
	}
	setZ(t, e) {
		return this.normalized && (e = m(e, this.array)), this.data.array[t * this.data.stride + this.offset + 2] = e, this
	}
	setW(t, e) {
		return this.normalized && (e = m(e, this.array)), this.data.array[t * this.data.stride + this.offset + 3] = e, this
	}
	getX(t) {
		let e = this.data.array[t * this.data.stride + this.offset];
		return this.normalized && (e = g(e, this.array)), e
	}
	getY(t) {
		let e = this.data.array[t * this.data.stride + this.offset + 1];
		return this.normalized && (e = g(e, this.array)), e
	}
	getZ(t) {
		let e = this.data.array[t * this.data.stride + this.offset + 2];
		return this.normalized && (e = g(e, this.array)), e
	}
	getW(t) {
		let e = this.data.array[t * this.data.stride + this.offset + 3];
		return this.normalized && (e = g(e, this.array)), e
	}
	setXY(t, e, i) {
		return t = t * this.data.stride + this.offset, this.normalized && (e = m(e, this.array), i = m(i, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = i, this
	}
	setXYZ(t, e, i, n) {
		return t = t * this.data.stride + this.offset, this.normalized && (e = m(e, this.array), i = m(i, this.array), n = m(n, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this
	}
	setXYZW(t, e, i, n, s) {
		return t = t * this.data.stride + this.offset, this.normalized && (e = m(e, this.array), i = m(i, this.array), n = m(n, this.array), s = m(s, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this.data.array[t + 3] = s, this
	}
	clone(t) {
		if(void 0 === t) {
			console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");
			const t = [];
			for(let e = 0; e < this.count; e++) {
				const i = e * this.data.stride + this.offset;
				for(let e = 0; e < this.itemSize; e++) t.push(this.data.array[i + e])
			}
			return new ce(new this.array.constructor(t), this.itemSize, this.normalized)
		}
		return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new Ns(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized)
	}
	toJSON(t) {
		if(void 0 === t) {
			console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");
			const t = [];
			for(let e = 0; e < this.count; e++) {
				const i = e * this.data.stride + this.offset;
				for(let e = 0; e < this.itemSize; e++) t.push(this.data.array[i + e])
			}
			return {
				itemSize: this.itemSize,
				type: this.array.constructor.name,
				array: t,
				normalized: this.normalized
			}
		}
		return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
			isInterleavedBufferAttribute: !0,
			itemSize: this.itemSize,
			data: this.data.uuid,
			offset: this.offset,
			normalized: this.normalized
		}
	}
}
const ks = new V,
	Os = new k,
	Gs = new k,
	Hs = new V,
	zs = new _t;
class Vs extends Ne {
	constructor(t, e) {
		super(t, e), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new _t, this.bindMatrixInverse = new _t
	}
	copy(t, e) {
		return super.copy(t, e), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, this
	}
	bind(t, e) {
		this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert()
	}
	pose() {
		this.skeleton.pose()
	}
	normalizeSkinWeights() {
		const t = new k,
			e = this.geometry.attributes.skinWeight;
		for(let i = 0, n = e.count; i < n; i++) {
			t.fromBufferAttribute(e, i);
			const n = 1 / t.manhattanLength();
			n !== 1 / 0 ? t.multiplyScalar(n) : t.set(1, 0, 0, 0), e.setXYZW(i, t.x, t.y, t.z, t.w)
		}
	}
	updateMatrixWorld(t) {
		super.updateMatrixWorld(t), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
	}
	boneTransform(t, e) {
		const i = this.skeleton,
			n = this.geometry;
		Os.fromBufferAttribute(n.attributes.skinIndex, t), Gs.fromBufferAttribute(n.attributes.skinWeight, t), ks.copy(e).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
		for(let t = 0; t < 4; t++) {
			const n = Gs.getComponent(t);
			if(0 !== n) {
				const s = Os.getComponent(t);
				zs.multiplyMatrices(i.bones[s].matrixWorld, i.boneInverses[s]), e.addScaledVector(Hs.copy(ks).applyMatrix4(zs), n)
			}
		}
		return e.applyMatrix4(this.bindMatrixInverse)
	}
}
class Ws extends qt {
	constructor() {
		super(), this.isBone = !0, this.type = "Bone"
	}
}
class qs extends N {
	constructor(t = null, e = 1, i = 1, n, s, r, a, o, l = 1003, c = 1003, h, u) {
		super(null, r, a, o, l, c, n, s, h, u), this.isDataTexture = !0, this.image = {
			data: t,
			width: e,
			height: i
		}, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
	}
}
const js = new _t,
	Ys = new _t;
class Js {
	constructor(t = [], e = []) {
		this.uuid = l(), this.bones = t.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init()
	}
	init() {
		const t = this.bones,
			e = this.boneInverses;
		if(this.boneMatrices = new Float32Array(16 * t.length), 0 === e.length) this.calculateInverses();
		else if(t.length !== e.length) {
			console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
			for(let t = 0, e = this.bones.length; t < e; t++) this.boneInverses.push(new _t)
		}
	}
	calculateInverses() {
		this.boneInverses.length = 0;
		for(let t = 0, e = this.bones.length; t < e; t++) {
			const e = new _t;
			this.bones[t] && e.copy(this.bones[t].matrixWorld).invert(), this.boneInverses.push(e)
		}
	}
	pose() {
		for(let t = 0, e = this.bones.length; t < e; t++) {
			const e = this.bones[t];
			e && e.matrixWorld.copy(this.boneInverses[t]).invert()
		}
		for(let t = 0, e = this.bones.length; t < e; t++) {
			const e = this.bones[t];
			e && (e.parent && e.parent.isBone ? (e.matrix.copy(e.parent.matrixWorld).invert(), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale))
		}
	}
	update() {
		const t = this.bones,
			e = this.boneInverses,
			i = this.boneMatrices,
			n = this.boneTexture;
		for(let n = 0, s = t.length; n < s; n++) {
			const s = t[n] ? t[n].matrixWorld : Ys;
			js.multiplyMatrices(s, e[n]), js.toArray(i, 16 * n)
		}
		null !== n && (n.needsUpdate = !0)
	}
	clone() {
		return new Js(this.bones, this.boneInverses)
	}
	computeBoneTexture() {
		let t = Math.sqrt(4 * this.bones.length);
		t = A(t), t = Math.max(t, 4);
		const e = new Float32Array(t * t * 4);
		e.set(this.boneMatrices);
		const i = new qs(e, t, t, 1023, 1015);
		return i.needsUpdate = !0, this.boneMatrices = e, this.boneTexture = i, this.boneTextureSize = t, this
	}
	getBoneByName(t) {
		for(let e = 0, i = this.bones.length; e < i; e++) {
			const i = this.bones[e];
			if(i.name === t) return i
		}
	}
	dispose() {
		null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null)
	}
	fromJSON(t, e) {
		this.uuid = t.uuid;
		for(let i = 0, n = t.bones.length; i < n; i++) {
			const n = t.bones[i];
			let s = e[n];
			void 0 === s && (console.warn("THREE.Skeleton: No bone found with UUID:", n), s = new Ws), this.bones.push(s), this.boneInverses.push((new _t).fromArray(t.boneInverses[i]))
		}
		return this.init(), this
	}
	toJSON() {
		const t = {
			metadata: {
				version: 4.5,
				type: "Skeleton",
				generator: "Skeleton.toJSON"
			},
			bones: [],
			boneInverses: []
		};
		t.uuid = this.uuid;
		const e = this.bones,
			i = this.boneInverses;
		for(let n = 0, s = e.length; n < s; n++) {
			const s = e[n];
			t.bones.push(s.uuid);
			const r = i[n];
			t.boneInverses.push(r.toArray())
		}
		return t
	}
}
class Xs extends re {
	constructor(t) {
		super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new D(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t)
	}
	copy(t) {
		return super.copy(t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this
	}
}
const Ks = new V,
	$s = new V,
	Zs = new _t,
	tr = new xt,
	er = new dt;
class ir extends qt {
	constructor(t = new xe, e = new Xs) {
		super(), this.isLine = !0, this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets()
	}
	copy(t, e) {
		return super.copy(t, e), this.material = t.material, this.geometry = t.geometry, this
	}
	computeLineDistances() {
		const t = this.geometry;
		if(null === t.index) {
			const e = t.attributes.position,
				i = [0];
			for(let t = 1, n = e.count; t < n; t++) Ks.fromBufferAttribute(e, t - 1), $s.fromBufferAttribute(e, t), i[t] = i[t - 1], i[t] += Ks.distanceTo($s);
			t.setAttribute("lineDistance", new de(i, 1))
		} else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
		return this
	}
	raycast(t, e) {
		const i = this.geometry,
			n = this.matrixWorld,
			s = t.params.Line.threshold,
			r = i.drawRange;
		if(null === i.boundingSphere && i.computeBoundingSphere(), er.copy(i.boundingSphere), er.applyMatrix4(n), er.radius += s, !1 === t.ray.intersectsSphere(er)) return;
		Zs.copy(n).invert(), tr.copy(t.ray).applyMatrix4(Zs);
		const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
			o = a * a,
			l = new V,
			c = new V,
			h = new V,
			u = new V,
			d = this.isLineSegments ? 2 : 1,
			A = i.index,
			p = i.attributes.position;
		if(null !== A) {
			for(let i = Math.max(0, r.start), n = Math.min(A.count, r.start + r.count) - 1; i < n; i += d) {
				const n = A.getX(i),
					s = A.getX(i + 1);
				l.fromBufferAttribute(p, n), c.fromBufferAttribute(p, s);
				if(tr.distanceSqToSegment(l, c, u, h) > o) continue;
				u.applyMatrix4(this.matrixWorld);
				const r = t.ray.origin.distanceTo(u);
				r < t.near || r > t.far || e.push({
					distance: r,
					point: h.clone().applyMatrix4(this.matrixWorld),
					index: i,
					face: null,
					faceIndex: null,
					object: this
				})
			}
		} else {
			for(let i = Math.max(0, r.start), n = Math.min(p.count, r.start + r.count) - 1; i < n; i += d) {
				l.fromBufferAttribute(p, i), c.fromBufferAttribute(p, i + 1);
				if(tr.distanceSqToSegment(l, c, u, h) > o) continue;
				u.applyMatrix4(this.matrixWorld);
				const n = t.ray.origin.distanceTo(u);
				n < t.near || n > t.far || e.push({
					distance: n,
					point: h.clone().applyMatrix4(this.matrixWorld),
					index: i,
					face: null,
					faceIndex: null,
					object: this
				})
			}
		}
	}
	updateMorphTargets() {
		const t = this.geometry.morphAttributes,
			e = Object.keys(t);
		if(e.length > 0) {
			const i = t[e[0]];
			if(void 0 !== i) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for(let t = 0, e = i.length; t < e; t++) {
					const e = i[t].name || String(t);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t
				}
			}
		}
	}
}
const nr = new V,
	sr = new V;
class rr extends ir {
	constructor(t, e) {
		super(t, e), this.isLineSegments = !0, this.type = "LineSegments"
	}
	computeLineDistances() {
		const t = this.geometry;
		if(null === t.index) {
			const e = t.attributes.position,
				i = [];
			for(let t = 0, n = e.count; t < n; t += 2) nr.fromBufferAttribute(e, t), sr.fromBufferAttribute(e, t + 1), i[t] = 0 === t ? 0 : i[t - 1], i[t + 1] = i[t] + nr.distanceTo(sr);
			t.setAttribute("lineDistance", new de(i, 1))
		} else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
		return this
	}
}
class ar extends ir {
	constructor(t, e) {
		super(t, e), this.isLineLoop = !0, this.type = "LineLoop"
	}
}
class or extends re {
	constructor(t) {
		super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new D(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(t)
	}
	copy(t) {
		return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this
	}
}
const lr = new _t,
	cr = new xt,
	hr = new dt,
	ur = new V;
class dr extends qt {
	constructor(t = new xe, e = new or) {
		super(), this.isPoints = !0, this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets()
	}
	copy(t, e) {
		return super.copy(t, e), this.material = t.material, this.geometry = t.geometry, this
	}
	raycast(t, e) {
		const i = this.geometry,
			n = this.matrixWorld,
			s = t.params.Points.threshold,
			r = i.drawRange;
		if(null === i.boundingSphere && i.computeBoundingSphere(), hr.copy(i.boundingSphere), hr.applyMatrix4(n), hr.radius += s, !1 === t.ray.intersectsSphere(hr)) return;
		lr.copy(n).invert(), cr.copy(t.ray).applyMatrix4(lr);
		const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
			o = a * a,
			l = i.index,
			c = i.attributes.position;
		if(null !== l) {
			for(let i = Math.max(0, r.start), s = Math.min(l.count, r.start + r.count); i < s; i++) {
				const s = l.getX(i);
				ur.fromBufferAttribute(c, s), Ar(ur, s, o, n, t, e, this)
			}
		} else {
			for(let i = Math.max(0, r.start), s = Math.min(c.count, r.start + r.count); i < s; i++) ur.fromBufferAttribute(c, i), Ar(ur, i, o, n, t, e, this)
		}
	}
	updateMorphTargets() {
		const t = this.geometry.morphAttributes,
			e = Object.keys(t);
		if(e.length > 0) {
			const i = t[e[0]];
			if(void 0 !== i) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for(let t = 0, e = i.length; t < e; t++) {
					const e = i[t].name || String(t);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t
				}
			}
		}
	}
}

function Ar(t, e, i, n, s, r, a) {
	const o = cr.distanceSqToPoint(t);
	if(o < i) {
		const i = new V;
		cr.closestPointToPoint(t, i), i.applyMatrix4(n);
		const l = s.ray.origin.distanceTo(i);
		if(l < s.near || l > s.far) return;
		r.push({
			distance: l,
			distanceToRay: Math.sqrt(o),
			point: i,
			index: e,
			face: null,
			object: a
		})
	}
}
class pr extends N {
	constructor(t, e, i, n, s, r, a, o, l, c, h, u) {
		super(null, r, a, o, l, c, n, s, h, u), this.isCompressedTexture = !0, this.image = {
			width: e,
			height: i
		}, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
	}
}
class gr extends re {
	constructor(t) {
		super(), this.isMeshStandardMaterial = !0, this.defines = {
			STANDARD: ""
		}, this.type = "MeshStandardMaterial", this.color = new D(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new D(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new v(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t)
	}
	copy(t) {
		return super.copy(t), this.defines = {
			STANDARD: ""
		}, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this
	}
}
class mr extends gr {
	constructor(t) {
		super(), this.isMeshPhysicalMaterial = !0, this.defines = {
			STANDARD: "",
			PHYSICAL: ""
		}, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new v(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
			get: function() {
				return c(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1)
			},
			set: function(t) {
				this.ior = (1 + .4 * t) / (1 - .4 * t)
			}
		}), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new D(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 0, this.attenuationColor = new D(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new D(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._iridescence = 0, this._transmission = 0, this.setValues(t)
	}
	get sheen() {
		return this._sheen
	}
	set sheen(t) {
		this._sheen > 0 != t > 0 && this.version++, this._sheen = t
	}
	get clearcoat() {
		return this._clearcoat
	}
	set clearcoat(t) {
		this._clearcoat > 0 != t > 0 && this.version++, this._clearcoat = t
	}
	get iridescence() {
		return this._iridescence
	}
	set iridescence(t) {
		this._iridescence > 0 != t > 0 && this.version++, this._iridescence = t
	}
	get transmission() {
		return this._transmission
	}
	set transmission(t) {
		this._transmission > 0 != t > 0 && this.version++, this._transmission = t
	}
	copy(t) {
		return super.copy(t), this.defines = {
			STANDARD: "",
			PHYSICAL: ""
		}, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.ior = t.ior, this.iridescence = t.iridescence, this.iridescenceMap = t.iridescenceMap, this.iridescenceIOR = t.iridescenceIOR, this.iridescenceThicknessRange = [...t.iridescenceThicknessRange], this.iridescenceThicknessMap = t.iridescenceThicknessMap, this.sheen = t.sheen, this.sheenColor.copy(t.sheenColor), this.sheenColorMap = t.sheenColorMap, this.sheenRoughness = t.sheenRoughness, this.sheenRoughnessMap = t.sheenRoughnessMap, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this.thickness = t.thickness, this.thicknessMap = t.thicknessMap, this.attenuationDistance = t.attenuationDistance, this.attenuationColor.copy(t.attenuationColor), this.specularIntensity = t.specularIntensity, this.specularIntensityMap = t.specularIntensityMap, this.specularColor.copy(t.specularColor), this.specularColorMap = t.specularColorMap, this
	}
}

function fr(t, e, i) {
	return yr(t) ? new t.constructor(t.subarray(e, void 0 !== i ? i : t.length)) : t.slice(e, i)
}

function vr(t, e, i) {
	return !t || !i && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
}

function yr(t) {
	return ArrayBuffer.isView(t) && !(t instanceof DataView)
}

function xr(t) {
	const e = t.length,
		i = new Array(e);
	for(let t = 0; t !== e; ++t) i[t] = t;
	return i.sort((function(e, i) {
		return t[e] - t[i]
	})), i
}

function _r(t, e, i) {
	const n = t.length,
		s = new t.constructor(n);
	for(let r = 0, a = 0; a !== n; ++r) {
		const n = i[r] * e;
		for(let i = 0; i !== e; ++i) s[a++] = t[n + i]
	}
	return s
}

function Er(t, e, i, n) {
	let s = 1,
		r = t[0];
	for(; void 0 !== r && void 0 === r[n];) r = t[s++];
	if(void 0 === r) return;
	let a = r[n];
	if(void 0 !== a)
		if(Array.isArray(a))
			do {
				a = r[n], void 0 !== a && (e.push(r.time), i.push.apply(i, a)), r = t[s++]
			} while (void 0 !== r);
		else if(void 0 !== a.toArray)
		do {
			a = r[n], void 0 !== a && (e.push(r.time), a.toArray(i, i.length)), r = t[s++]
		} while (void 0 !== r);
	else
		do {
			a = r[n], void 0 !== a && (e.push(r.time), i.push(a)), r = t[s++]
		} while (void 0 !== r)
}
class wr {
	constructor(t, e, i, n) {
		this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new e.constructor(i), this.sampleValues = e, this.valueSize = i, this.settings = null, this.DefaultSettings_ = {}
	}
	evaluate(t) {
		const e = this.parameterPositions;
		let i = this._cachedIndex,
			n = e[i],
			s = e[i - 1];
		t: {
			e: {
				let r;
				i: {
					n: if(!(t < n)) {
						for(let r = i + 2;;) {
							if(void 0 === n) {
								if(t < s) break n;
								return i = e.length, this._cachedIndex = i, this.copySampleValue_(i - 1)
							}
							if(i === r) break;
							if(s = n, n = e[++i], t < n) break e
						}
						r = e.length;
						break i
					}if(t >= s) break t; {
						const a = e[1];
						t < a && (i = 2, s = a);
						for(let r = i - 2;;) {
							if(void 0 === s) return this._cachedIndex = 0, this.copySampleValue_(0);
							if(i === r) break;
							if(n = s, s = e[--i - 1], t >= s) break e
						}
						r = i, i = 0
					}
				}
				for(; i < r;) {
					const n = i + r >>> 1;
					t < e[n] ? r = n : i = n + 1
				}
				if(n = e[i], s = e[i - 1], void 0 === s) return this._cachedIndex = 0, this.copySampleValue_(0);
				if(void 0 === n) return i = e.length, this._cachedIndex = i, this.copySampleValue_(i - 1)
			}
			this._cachedIndex = i,
			this.intervalChanged_(i, s, n)
		}
		return this.interpolate_(i, s, t, n)
	}
	getSettings_() {
		return this.settings || this.DefaultSettings_
	}
	copySampleValue_(t) {
		const e = this.resultBuffer,
			i = this.sampleValues,
			n = this.valueSize,
			s = t * n;
		for(let t = 0; t !== n; ++t) e[t] = i[s + t];
		return e
	}
	interpolate_() {
		throw new Error("call to abstract method")
	}
	intervalChanged_() {}
}
class br extends wr {
	constructor(t, e, i, n) {
		super(t, e, i, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
			endingStart: 2400,
			endingEnd: 2400
		}
	}
	intervalChanged_(t, e, i) {
		const n = this.parameterPositions;
		let s = t - 2,
			r = t + 1,
			a = n[s],
			o = n[r];
		if(void 0 === a) switch(this.getSettings_().endingStart) {
			case 2401:
				s = t, a = 2 * e - i;
				break;
			case 2402:
				s = n.length - 2, a = e + n[s] - n[s + 1];
				break;
			default:
				s = t, a = i
		}
		if(void 0 === o) switch(this.getSettings_().endingEnd) {
			case 2401:
				r = t, o = 2 * i - e;
				break;
			case 2402:
				r = 1, o = i + n[1] - n[0];
				break;
			default:
				r = t - 1, o = e
		}
		const l = .5 * (i - e),
			c = this.valueSize;
		this._weightPrev = l / (e - a), this._weightNext = l / (o - i), this._offsetPrev = s * c, this._offsetNext = r * c
	}
	interpolate_(t, e, i, n) {
		const s = this.resultBuffer,
			r = this.sampleValues,
			a = this.valueSize,
			o = t * a,
			l = o - a,
			c = this._offsetPrev,
			h = this._offsetNext,
			u = this._weightPrev,
			d = this._weightNext,
			A = (i - e) / (n - e),
			p = A * A,
			g = p * A,
			m = -u * g + 2 * u * p - u * A,
			f = (1 + u) * g + (-1.5 - 2 * u) * p + (-.5 + u) * A + 1,
			v = (-1 - d) * g + (1.5 + d) * p + .5 * A,
			y = d * g - d * p;
		for(let t = 0; t !== a; ++t) s[t] = m * r[c + t] + f * r[l + t] + v * r[o + t] + y * r[h + t];
		return s
	}
}
class Ir extends wr {
	constructor(t, e, i, n) {
		super(t, e, i, n)
	}
	interpolate_(t, e, i, n) {
		const s = this.resultBuffer,
			r = this.sampleValues,
			a = this.valueSize,
			o = t * a,
			l = o - a,
			c = (i - e) / (n - e),
			h = 1 - c;
		for(let t = 0; t !== a; ++t) s[t] = r[l + t] * h + r[o + t] * c;
		return s
	}
}
class Cr extends wr {
	constructor(t, e, i, n) {
		super(t, e, i, n)
	}
	interpolate_(t) {
		return this.copySampleValue_(t - 1)
	}
}
class Sr {
	constructor(t, e, i, n) {
		if(void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
		if(void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
		this.name = t, this.times = vr(e, this.TimeBufferType), this.values = vr(i, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation)
	}
	static toJSON(t) {
		const e = t.constructor;
		let i;
		if(e.toJSON !== this.toJSON) i = e.toJSON(t);
		else {
			i = {
				name: t.name,
				times: vr(t.times, Array),
				values: vr(t.values, Array)
			};
			const e = t.getInterpolation();
			e !== t.DefaultInterpolation && (i.interpolation = e)
		}
		return i.type = t.ValueTypeName, i
	}
	InterpolantFactoryMethodDiscrete(t) {
		return new Cr(this.times, this.values, this.getValueSize(), t)
	}
	InterpolantFactoryMethodLinear(t) {
		return new Ir(this.times, this.values, this.getValueSize(), t)
	}
	InterpolantFactoryMethodSmooth(t) {
		return new br(this.times, this.values, this.getValueSize(), t)
	}
	setInterpolation(t) {
		let e;
		switch(t) {
			case 2300:
				e = this.InterpolantFactoryMethodDiscrete;
				break;
			case 2301:
				e = this.InterpolantFactoryMethodLinear;
				break;
			case 2302:
				e = this.InterpolantFactoryMethodSmooth
		}
		if(void 0 === e) {
			const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
			if(void 0 === this.createInterpolant) {
				if(t === this.DefaultInterpolation) throw new Error(e);
				this.setInterpolation(this.DefaultInterpolation)
			}
			return console.warn("THREE.KeyframeTrack:", e), this
		}
		return this.createInterpolant = e, this
	}
	getInterpolation() {
		switch(this.createInterpolant) {
			case this.InterpolantFactoryMethodDiscrete:
				return 2300;
			case this.InterpolantFactoryMethodLinear:
				return 2301;
			case this.InterpolantFactoryMethodSmooth:
				return 2302
		}
	}
	getValueSize() {
		return this.values.length / this.times.length
	}
	shift(t) {
		if(0 !== t) {
			const e = this.times;
			for(let i = 0, n = e.length; i !== n; ++i) e[i] += t
		}
		return this
	}
	scale(t) {
		if(1 !== t) {
			const e = this.times;
			for(let i = 0, n = e.length; i !== n; ++i) e[i] *= t
		}
		return this
	}
	trim(t, e) {
		const i = this.times,
			n = i.length;
		let s = 0,
			r = n - 1;
		for(; s !== n && i[s] < t;) ++s;
		for(; - 1 !== r && i[r] > e;) --r;
		if(++r, 0 !== s || r !== n) {
			s >= r && (r = Math.max(r, 1), s = r - 1);
			const t = this.getValueSize();
			this.times = fr(i, s, r), this.values = fr(this.values, s * t, r * t)
		}
		return this
	}
	validate() {
		let t = !0;
		const e = this.getValueSize();
		e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
		const i = this.times,
			n = this.values,
			s = i.length;
		0 === s && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
		let r = null;
		for(let e = 0; e !== s; e++) {
			const n = i[e];
			if("number" == typeof n && isNaN(n)) {
				console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e, n), t = !1;
				break
			}
			if(null !== r && r > n) {
				console.error("THREE.KeyframeTrack: Out of order keys.", this, e, n, r), t = !1;
				break
			}
			r = n
		}
		if(void 0 !== n && yr(n))
			for(let e = 0, i = n.length; e !== i; ++e) {
				const i = n[e];
				if(isNaN(i)) {
					console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e, i), t = !1;
					break
				}
			}
		return t
	}
	optimize() {
		const t = fr(this.times),
			e = fr(this.values),
			i = this.getValueSize(),
			n = 2302 === this.getInterpolation(),
			s = t.length - 1;
		let r = 1;
		for(let a = 1; a < s; ++a) {
			let s = !1;
			const o = t[a];
			if(o !== t[a + 1] && (1 !== a || o !== t[0]))
				if(n) s = !0;
				else {
					const t = a * i,
						n = t - i,
						r = t + i;
					for(let a = 0; a !== i; ++a) {
						const i = e[t + a];
						if(i !== e[n + a] || i !== e[r + a]) {
							s = !0;
							break
						}
					}
				}
			if(s) {
				if(a !== r) {
					t[r] = t[a];
					const n = a * i,
						s = r * i;
					for(let t = 0; t !== i; ++t) e[s + t] = e[n + t]
				}++r
			}
		}
		if(s > 0) {
			t[r] = t[s];
			for(let t = s * i, n = r * i, a = 0; a !== i; ++a) e[n + a] = e[t + a];
			++r
		}
		return r !== t.length ? (this.times = fr(t, 0, r), this.values = fr(e, 0, r * i)) : (this.times = t, this.values = e), this
	}
	clone() {
		const t = fr(this.times, 0),
			e = fr(this.values, 0),
			i = new(0, this.constructor)(this.name, t, e);
		return i.createInterpolant = this.createInterpolant, i
	}
}
Sr.prototype.TimeBufferType = Float32Array, Sr.prototype.ValueBufferType = Float32Array, Sr.prototype.DefaultInterpolation = 2301;
class Mr extends Sr {}
Mr.prototype.ValueTypeName = "bool", Mr.prototype.ValueBufferType = Array, Mr.prototype.DefaultInterpolation = 2300, Mr.prototype.InterpolantFactoryMethodLinear = void 0, Mr.prototype.InterpolantFactoryMethodSmooth = void 0;
class Br extends Sr {}
Br.prototype.ValueTypeName = "color";
class Tr extends Sr {}
Tr.prototype.ValueTypeName = "number";
class Rr extends wr {
	constructor(t, e, i, n) {
		super(t, e, i, n)
	}
	interpolate_(t, e, i, n) {
		const s = this.resultBuffer,
			r = this.sampleValues,
			a = this.valueSize,
			o = (i - e) / (n - e);
		let l = t * a;
		for(let t = l + a; l !== t; l += 4) z.slerpFlat(s, 0, r, l - a, r, l, o);
		return s
	}
}
class Dr extends Sr {
	InterpolantFactoryMethodLinear(t) {
		return new Rr(this.times, this.values, this.getValueSize(), t)
	}
}
Dr.prototype.ValueTypeName = "quaternion", Dr.prototype.DefaultInterpolation = 2301, Dr.prototype.InterpolantFactoryMethodSmooth = void 0;
class Lr extends Sr {}
Lr.prototype.ValueTypeName = "string", Lr.prototype.ValueBufferType = Array, Lr.prototype.DefaultInterpolation = 2300, Lr.prototype.InterpolantFactoryMethodLinear = void 0, Lr.prototype.InterpolantFactoryMethodSmooth = void 0;
class Qr extends Sr {}
Qr.prototype.ValueTypeName = "vector";
class Pr {
	constructor(t, e = -1, i, n = 2500) {
		this.name = t, this.tracks = i, this.duration = e, this.blendMode = n, this.uuid = l(), this.duration < 0 && this.resetDuration()
	}
	static parse(t) {
		const e = [],
			i = t.tracks,
			n = 1 / (t.fps || 1);
		for(let t = 0, s = i.length; t !== s; ++t) e.push(Fr(i[t]).scale(n));
		const s = new this(t.name, t.duration, e, t.blendMode);
		return s.uuid = t.uuid, s
	}
	static toJSON(t) {
		const e = [],
			i = t.tracks,
			n = {
				name: t.name,
				duration: t.duration,
				tracks: e,
				uuid: t.uuid,
				blendMode: t.blendMode
			};
		for(let t = 0, n = i.length; t !== n; ++t) e.push(Sr.toJSON(i[t]));
		return n
	}
	static CreateFromMorphTargetSequence(t, e, i, n) {
		const s = e.length,
			r = [];
		for(let t = 0; t < s; t++) {
			let a = [],
				o = [];
			a.push((t + s - 1) % s, t, (t + 1) % s), o.push(0, 1, 0);
			const l = xr(a);
			a = _r(a, 1, l), o = _r(o, 1, l), n || 0 !== a[0] || (a.push(s), o.push(o[0])), r.push(new Tr(".morphTargetInfluences[" + e[t].name + "]", a, o).scale(1 / i))
		}
		return new this(t, -1, r)
	}
	static findByName(t, e) {
		let i = t;
		if(!Array.isArray(t)) {
			const e = t;
			i = e.geometry && e.geometry.animations || e.animations
		}
		for(let t = 0; t < i.length; t++)
			if(i[t].name === e) return i[t];
		return null
	}
	static CreateClipsFromMorphTargetSequences(t, e, i) {
		const n = {},
			s = /^([\w-]*?)([\d]+)$/;
		for(let e = 0, i = t.length; e < i; e++) {
			const i = t[e],
				r = i.name.match(s);
			if(r && r.length > 1) {
				const t = r[1];
				let e = n[t];
				e || (n[t] = e = []), e.push(i)
			}
		}
		const r = [];
		for(const t in n) r.push(this.CreateFromMorphTargetSequence(t, n[t], e, i));
		return r
	}
	static parseAnimation(t, e) {
		if(!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
		const i = function(t, e, i, n, s) {
				if(0 !== i.length) {
					const r = [],
						a = [];
					Er(i, r, a, n), 0 !== r.length && s.push(new t(e, r, a))
				}
			},
			n = [],
			s = t.name || "default",
			r = t.fps || 30,
			a = t.blendMode;
		let o = t.length || -1;
		const l = t.hierarchy || [];
		for(let t = 0; t < l.length; t++) {
			const s = l[t].keys;
			if(s && 0 !== s.length)
				if(s[0].morphTargets) {
					const t = {};
					let e;
					for(e = 0; e < s.length; e++)
						if(s[e].morphTargets)
							for(let i = 0; i < s[e].morphTargets.length; i++) t[s[e].morphTargets[i]] = -1;
					for(const i in t) {
						const t = [],
							r = [];
						for(let n = 0; n !== s[e].morphTargets.length; ++n) {
							const n = s[e];
							t.push(n.time), r.push(n.morphTarget === i ? 1 : 0)
						}
						n.push(new Tr(".morphTargetInfluence[" + i + "]", t, r))
					}
					o = t.length * r
				} else {
					const r = ".bones[" + e[t].name + "]";
					i(Qr, r + ".position", s, "pos", n), i(Dr, r + ".quaternion", s, "rot", n), i(Qr, r + ".scale", s, "scl", n)
				}
		}
		if(0 === n.length) return null;
		return new this(s, o, n, a)
	}
	resetDuration() {
		let t = 0;
		for(let e = 0, i = this.tracks.length; e !== i; ++e) {
			const i = this.tracks[e];
			t = Math.max(t, i.times[i.times.length - 1])
		}
		return this.duration = t, this
	}
	trim() {
		for(let t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
		return this
	}
	validate() {
		let t = !0;
		for(let e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate();
		return t
	}
	optimize() {
		for(let t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
		return this
	}
	clone() {
		const t = [];
		for(let e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone());
		return new this.constructor(this.name, this.duration, t, this.blendMode)
	}
	toJSON() {
		return this.constructor.toJSON(this)
	}
}

function Fr(t) {
	if(void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
	const e = function(t) {
		switch(t.toLowerCase()) {
			case "scalar":
			case "double":
			case "float":
			case "number":
			case "integer":
				return Tr;
			case "vector":
			case "vector2":
			case "vector3":
			case "vector4":
				return Qr;
			case "color":
				return Br;
			case "quaternion":
				return Dr;
			case "bool":
			case "boolean":
				return Mr;
			case "string":
				return Lr
		}
		throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
	}(t.type);
	if(void 0 === t.times) {
		const e = [],
			i = [];
		Er(t.keys, e, i, "value"), t.times = e, t.values = i
	}
	return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
}
const Ur = {
	enabled: !1,
	files: {},
	add: function(t, e) {
		!1 !== this.enabled && (this.files[t] = e)
	},
	get: function(t) {
		if(!1 !== this.enabled) return this.files[t]
	},
	remove: function(t) {
		delete this.files[t]
	},
	clear: function() {
		this.files = {}
	}
};
class Nr {
	constructor(t, e, i) {
		const n = this;
		let s, r = !1,
			a = 0,
			o = 0;
		const l = [];
		this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = i, this.itemStart = function(t) {
			o++, !1 === r && void 0 !== n.onStart && n.onStart(t, a, o), r = !0
		}, this.itemEnd = function(t) {
			a++, void 0 !== n.onProgress && n.onProgress(t, a, o), a === o && (r = !1, void 0 !== n.onLoad && n.onLoad())
		}, this.itemError = function(t) {
			void 0 !== n.onError && n.onError(t)
		}, this.resolveURL = function(t) {
			return s ? s(t) : t
		}, this.setURLModifier = function(t) {
			return s = t, this
		}, this.addHandler = function(t, e) {
			return l.push(t, e), this
		}, this.removeHandler = function(t) {
			const e = l.indexOf(t);
			return -1 !== e && l.splice(e, 2), this
		}, this.getHandler = function(t) {
			for(let e = 0, i = l.length; e < i; e += 2) {
				const i = l[e],
					n = l[e + 1];
				if(i.global && (i.lastIndex = 0), i.test(t)) return n
			}
			return null
		}
	}
}
const kr = new Nr;
class Or {
	constructor(t) {
		this.manager = void 0 !== t ? t : kr, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}
	}
	load() {}
	loadAsync(t, e) {
		const i = this;
		return new Promise((function(n, s) {
			i.load(t, n, e, s)
		}))
	}
	parse() {}
	setCrossOrigin(t) {
		return this.crossOrigin = t, this
	}
	setWithCredentials(t) {
		return this.withCredentials = t, this
	}
	setPath(t) {
		return this.path = t, this
	}
	setResourcePath(t) {
		return this.resourcePath = t, this
	}
	setRequestHeader(t) {
		return this.requestHeader = t, this
	}
}
const Gr = {};
class Hr extends Error {
	constructor(t, e) {
		super(t), this.response = e
	}
}
class zr extends Or {
	constructor(t) {
		super(t)
	}
	load(t, e, i, n) {
		void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
		const s = Ur.get(t);
		if(void 0 !== s) return this.manager.itemStart(t), setTimeout((() => {
			e && e(s), this.manager.itemEnd(t)
		}), 0), s;
		if(void 0 !== Gr[t]) return void Gr[t].push({
			onLoad: e,
			onProgress: i,
			onError: n
		});
		Gr[t] = [], Gr[t].push({
			onLoad: e,
			onProgress: i,
			onError: n
		});
		const r = new Request(t, {
				headers: new Headers(this.requestHeader),
				credentials: this.withCredentials ? "include" : "same-origin"
			}),
			a = this.mimeType,
			o = this.responseType;
		fetch(r).then((e => {
			if(200 === e.status || 0 === e.status) {
				if(0 === e.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), "undefined" == typeof ReadableStream || void 0 === e.body || void 0 === e.body.getReader) return e;
				const i = Gr[t],
					n = e.body.getReader(),
					s = e.headers.get("Content-Length"),
					r = s ? parseInt(s) : 0,
					a = 0 !== r;
				let o = 0;
				const l = new ReadableStream({
					start(t) {
						! function e() {
							n.read().then((({
								done: n,
								value: s
							}) => {
								if(n) t.close();
								else {
									o += s.byteLength;
									const n = new ProgressEvent("progress", {
										lengthComputable: a,
										loaded: o,
										total: r
									});
									for(let t = 0, e = i.length; t < e; t++) {
										const e = i[t];
										e.onProgress && e.onProgress(n)
									}
									t.enqueue(s), e()
								}
							}))
						}()
					}
				});
				return new Response(l)
			}
			throw new Hr(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`, e)
		})).then((t => {
			switch(o) {
				case "arraybuffer":
					return t.arrayBuffer();
				case "blob":
					return t.blob();
				case "document":
					return t.text().then((t => (new DOMParser).parseFromString(t, a)));
				case "json":
					return t.json();
				default:
					if(void 0 === a) return t.text(); {
						const e = /charset="?([^;"\s]*)"?/i.exec(a),
							i = e && e[1] ? e[1].toLowerCase() : void 0,
							n = new TextDecoder(i);
						return t.arrayBuffer().then((t => n.decode(t)))
					}
			}
		})).then((e => {
			Ur.add(t, e);
			const i = Gr[t];
			delete Gr[t];
			for(let t = 0, n = i.length; t < n; t++) {
				const n = i[t];
				n.onLoad && n.onLoad(e)
			}
		})).catch((e => {
			const i = Gr[t];
			if(void 0 === i) throw this.manager.itemError(t), e;
			delete Gr[t];
			for(let t = 0, n = i.length; t < n; t++) {
				const n = i[t];
				n.onError && n.onError(e)
			}
			this.manager.itemError(t)
		})).finally((() => {
			this.manager.itemEnd(t)
		})), this.manager.itemStart(t)
	}
	setResponseType(t) {
		return this.responseType = t, this
	}
	setMimeType(t) {
		return this.mimeType = t, this
	}
}
class Vr extends Or {
	constructor(t) {
		super(t)
	}
	load(t, e, i, n) {
		void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
		const s = this,
			r = Ur.get(t);
		if(void 0 !== r) return s.manager.itemStart(t), setTimeout((function() {
			e && e(r), s.manager.itemEnd(t)
		}), 0), r;
		const a = _("img");

		function o() {
			c(), Ur.add(t, this), e && e(this), s.manager.itemEnd(t)
		}

		function l(e) {
			c(), n && n(e), s.manager.itemError(t), s.manager.itemEnd(t)
		}

		function c() {
			a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1)
		}
		return a.addEventListener("load", o, !1), a.addEventListener("error", l, !1), "data:" !== t.slice(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), s.manager.itemStart(t), a.src = t, a
	}
}
class Wr extends Or {
	constructor(t) {
		super(t)
	}
	load(t, e, i, n) {
		const s = this,
			r = new qs,
			a = new zr(this.manager);
		return a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setPath(this.path), a.setWithCredentials(s.withCredentials), a.load(t, (function(t) {
			const i = s.parse(t);
			i && (void 0 !== i.image ? r.image = i.image : void 0 !== i.data && (r.image.width = i.width, r.image.height = i.height, r.image.data = i.data), r.wrapS = void 0 !== i.wrapS ? i.wrapS : 1001, r.wrapT = void 0 !== i.wrapT ? i.wrapT : 1001, r.magFilter = void 0 !== i.magFilter ? i.magFilter : 1006, r.minFilter = void 0 !== i.minFilter ? i.minFilter : 1006, r.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, void 0 !== i.encoding && (r.encoding = i.encoding), void 0 !== i.flipY && (r.flipY = i.flipY), void 0 !== i.format && (r.format = i.format), void 0 !== i.type && (r.type = i.type), void 0 !== i.mipmaps && (r.mipmaps = i.mipmaps, r.minFilter = 1008), 1 === i.mipmapCount && (r.minFilter = 1006), void 0 !== i.generateMipmaps && (r.generateMipmaps = i.generateMipmaps), r.needsUpdate = !0, e && e(r, i))
		}), i, n), r
	}
}
class qr extends Or {
	constructor(t) {
		super(t)
	}
	load(t, e, i, n) {
		const s = new N,
			r = new Vr(this.manager);
		return r.setCrossOrigin(this.crossOrigin), r.setPath(this.path), r.load(t, (function(t) {
			s.image = t, s.needsUpdate = !0, void 0 !== e && e(s)
		}), i, n), s
	}
}
class jr extends qt {
	constructor(t, e = 1) {
		super(), this.isLight = !0, this.type = "Light", this.color = new D(t), this.intensity = e
	}
	dispose() {}
	copy(t, e) {
		return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, this
	}
	toJSON(t) {
		const e = super.toJSON(t);
		return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e
	}
}
const Yr = new _t,
	Jr = new V,
	Xr = new V;
class Kr {
	constructor(t) {
		this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new v(512, 512), this.map = null, this.mapPass = null, this.matrix = new _t, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new ii, this._frameExtents = new v(1, 1), this._viewportCount = 1, this._viewports = [new k(0, 0, 1, 1)]
	}
	getViewportCount() {
		return this._viewportCount
	}
	getFrustum() {
		return this._frustum
	}
	updateMatrices(t) {
		const e = this.camera,
			i = this.matrix;
		Jr.setFromMatrixPosition(t.matrixWorld), e.position.copy(Jr), Xr.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(Xr), e.updateMatrixWorld(), Yr.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Yr), i.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), i.multiply(e.projectionMatrix), i.multiply(e.matrixWorldInverse)
	}
	getViewport(t) {
		return this._viewports[t]
	}
	getFrameExtents() {
		return this._frameExtents
	}
	dispose() {
		this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose()
	}
	copy(t) {
		return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
	}
	clone() {
		return(new this.constructor).copy(this)
	}
	toJSON() {
		const t = {};
		return 0 !== this.bias && (t.bias = this.bias), 0 !== this.normalBias && (t.normalBias = this.normalBias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t
	}
}
class $r extends Kr {
	constructor() {
		super(new qe(50, 1, .5, 500)), this.isSpotLightShadow = !0, this.focus = 1
	}
	updateMatrices(t) {
		const e = this.camera,
			i = 2 * o * t.angle * this.focus,
			n = this.mapSize.width / this.mapSize.height,
			s = t.distance || e.far;
		i === e.fov && n === e.aspect && s === e.far || (e.fov = i, e.aspect = n, e.far = s, e.updateProjectionMatrix()), super.updateMatrices(t)
	}
	copy(t) {
		return super.copy(t), this.focus = t.focus, this
	}
}
class Zr extends jr {
	constructor(t, e, i = 0, n = Math.PI / 3, s = 0, r = 1) {
		super(t, e), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(qt.DefaultUp), this.updateMatrix(), this.target = new qt, this.distance = i, this.angle = n, this.penumbra = s, this.decay = r, this.map = null, this.shadow = new $r
	}
	get power() {
		return this.intensity * Math.PI
	}
	set power(t) {
		this.intensity = t / Math.PI
	}
	dispose() {
		this.shadow.dispose()
	}
	copy(t, e) {
		return super.copy(t, e), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
	}
}
const ta = new _t,
	ea = new V,
	ia = new V;
class na extends Kr {
	constructor() {
		super(new qe(90, 1, .5, 500)), this.isPointLightShadow = !0, this._frameExtents = new v(4, 2), this._viewportCount = 6, this._viewports = [new k(2, 1, 1, 1), new k(0, 1, 1, 1), new k(3, 1, 1, 1), new k(1, 1, 1, 1), new k(3, 0, 1, 1), new k(1, 0, 1, 1)], this._cubeDirections = [new V(1, 0, 0), new V(-1, 0, 0), new V(0, 0, 1), new V(0, 0, -1), new V(0, 1, 0), new V(0, -1, 0)], this._cubeUps = [new V(0, 1, 0), new V(0, 1, 0), new V(0, 1, 0), new V(0, 1, 0), new V(0, 0, 1), new V(0, 0, -1)]
	}
	updateMatrices(t, e = 0) {
		const i = this.camera,
			n = this.matrix,
			s = t.distance || i.far;
		s !== i.far && (i.far = s, i.updateProjectionMatrix()), ea.setFromMatrixPosition(t.matrixWorld), i.position.copy(ea), ia.copy(i.position), ia.add(this._cubeDirections[e]), i.up.copy(this._cubeUps[e]), i.lookAt(ia), i.updateMatrixWorld(), n.makeTranslation(-ea.x, -ea.y, -ea.z), ta.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ta)
	}
}
class sa extends jr {
	constructor(t, e, i = 0, n = 1) {
		super(t, e), this.isPointLight = !0, this.type = "PointLight", this.distance = i, this.decay = n, this.shadow = new na
	}
	get power() {
		return 4 * this.intensity * Math.PI
	}
	set power(t) {
		this.intensity = t / (4 * Math.PI)
	}
	dispose() {
		this.shadow.dispose()
	}
	copy(t, e) {
		return super.copy(t, e), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
	}
}
class ra extends Kr {
	constructor() {
		super(new gi(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0
	}
}
class aa extends jr {
	constructor(t, e) {
		super(t, e), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(qt.DefaultUp), this.updateMatrix(), this.target = new qt, this.shadow = new ra
	}
	dispose() {
		this.shadow.dispose()
	}
	copy(t) {
		return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
	}
}
class oa {
	constructor() {
		this.isSphericalHarmonics3 = !0, this.coefficients = [];
		for(let t = 0; t < 9; t++) this.coefficients.push(new V)
	}
	set(t) {
		for(let e = 0; e < 9; e++) this.coefficients[e].copy(t[e]);
		return this
	}
	zero() {
		for(let t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0);
		return this
	}
	getAt(t, e) {
		const i = t.x,
			n = t.y,
			s = t.z,
			r = this.coefficients;
		return e.copy(r[0]).multiplyScalar(.282095), e.addScaledVector(r[1], .488603 * n), e.addScaledVector(r[2], .488603 * s), e.addScaledVector(r[3], .488603 * i), e.addScaledVector(r[4], i * n * 1.092548), e.addScaledVector(r[5], n * s * 1.092548), e.addScaledVector(r[6], .315392 * (3 * s * s - 1)), e.addScaledVector(r[7], i * s * 1.092548), e.addScaledVector(r[8], .546274 * (i * i - n * n)), e
	}
	getIrradianceAt(t, e) {
		const i = t.x,
			n = t.y,
			s = t.z,
			r = this.coefficients;
		return e.copy(r[0]).multiplyScalar(.886227), e.addScaledVector(r[1], 1.023328 * n), e.addScaledVector(r[2], 1.023328 * s), e.addScaledVector(r[3], 1.023328 * i), e.addScaledVector(r[4], .858086 * i * n), e.addScaledVector(r[5], .858086 * n * s), e.addScaledVector(r[6], .743125 * s * s - .247708), e.addScaledVector(r[7], .858086 * i * s), e.addScaledVector(r[8], .429043 * (i * i - n * n)), e
	}
	add(t) {
		for(let e = 0; e < 9; e++) this.coefficients[e].add(t.coefficients[e]);
		return this
	}
	addScaledSH(t, e) {
		for(let i = 0; i < 9; i++) this.coefficients[i].addScaledVector(t.coefficients[i], e);
		return this
	}
	scale(t) {
		for(let e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
		return this
	}
	lerp(t, e) {
		for(let i = 0; i < 9; i++) this.coefficients[i].lerp(t.coefficients[i], e);
		return this
	}
	equals(t) {
		for(let e = 0; e < 9; e++)
			if(!this.coefficients[e].equals(t.coefficients[e])) return !1;
		return !0
	}
	copy(t) {
		return this.set(t.coefficients)
	}
	clone() {
		return(new this.constructor).copy(this)
	}
	fromArray(t, e = 0) {
		const i = this.coefficients;
		for(let n = 0; n < 9; n++) i[n].fromArray(t, e + 3 * n);
		return this
	}
	toArray(t = [], e = 0) {
		const i = this.coefficients;
		for(let n = 0; n < 9; n++) i[n].toArray(t, e + 3 * n);
		return t
	}
	static getBasisAt(t, e) {
		const i = t.x,
			n = t.y,
			s = t.z;
		e[0] = .282095, e[1] = .488603 * n, e[2] = .488603 * s, e[3] = .488603 * i, e[4] = 1.092548 * i * n, e[5] = 1.092548 * n * s, e[6] = .315392 * (3 * s * s - 1), e[7] = 1.092548 * i * s, e[8] = .546274 * (i * i - n * n)
	}
}
class la extends jr {
	constructor(t = new oa, e = 1) {
		super(void 0, e), this.isLightProbe = !0, this.sh = t
	}
	copy(t) {
		return super.copy(t), this.sh.copy(t.sh), this
	}
	fromJSON(t) {
		return this.intensity = t.intensity, this.sh.fromArray(t.sh), this
	}
	toJSON(t) {
		const e = super.toJSON(t);
		return e.object.sh = this.sh.toArray(), e
	}
}
class ca {
	static decodeText(t) {
		if("undefined" != typeof TextDecoder) return(new TextDecoder).decode(t);
		let e = "";
		for(let i = 0, n = t.length; i < n; i++) e += String.fromCharCode(t[i]);
		try {
			return decodeURIComponent(escape(e))
		} catch(t) {
			return e
		}
	}
	static extractUrlBase(t) {
		const e = t.lastIndexOf("/");
		return -1 === e ? "./" : t.slice(0, e + 1)
	}
	static resolveURL(t, e) {
		return "string" != typeof t || "" === t ? "" : (/^https?:\/\//i.test(e) && /^\//.test(t) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(t) || /^data:.*,.*$/i.test(t) || /^blob:.*$/i.test(t) ? t : e + t)
	}
}
class ha extends Or {
	constructor(t) {
		super(t), this.isImageBitmapLoader = !0, "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = {
			premultiplyAlpha: "none"
		}
	}
	setOptions(t) {
		return this.options = t, this
	}
	load(t, e, i, n) {
		void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
		const s = this,
			r = Ur.get(t);
		if(void 0 !== r) return s.manager.itemStart(t), setTimeout((function() {
			e && e(r), s.manager.itemEnd(t)
		}), 0), r;
		const a = {};
		a.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", a.headers = this.requestHeader, fetch(t, a).then((function(t) {
			return t.blob()
		})).then((function(t) {
			return createImageBitmap(t, Object.assign(s.options, {
				colorSpaceConversion: "none"
			}))
		})).then((function(i) {
			Ur.add(t, i), e && e(i), s.manager.itemEnd(t)
		})).catch((function(e) {
			n && n(e), s.manager.itemError(t), s.manager.itemEnd(t)
		})), s.manager.itemStart(t)
	}
}
class ua {
	constructor(t, e, i) {
		let n, s, r;
		switch(this.binding = t, this.valueSize = i, e) {
			case "quaternion":
				n = this._slerp, s = this._slerpAdditive, r = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * i), this._workIndex = 5;
				break;
			case "string":
			case "bool":
				n = this._select, s = this._select, r = this._setAdditiveIdentityOther, this.buffer = new Array(5 * i);
				break;
			default:
				n = this._lerp, s = this._lerpAdditive, r = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * i)
		}
		this._mixBufferRegion = n, this._mixBufferRegionAdditive = s, this._setIdentity = r, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0
	}
	accumulate(t, e) {
		const i = this.buffer,
			n = this.valueSize,
			s = t * n + n;
		let r = this.cumulativeWeight;
		if(0 === r) {
			for(let t = 0; t !== n; ++t) i[s + t] = i[t];
			r = e
		} else {
			r += e;
			const t = e / r;
			this._mixBufferRegion(i, s, 0, t, n)
		}
		this.cumulativeWeight = r
	}
	accumulateAdditive(t) {
		const e = this.buffer,
			i = this.valueSize,
			n = i * this._addIndex;
		0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(e, n, 0, t, i), this.cumulativeWeightAdditive += t
	}
	apply(t) {
		const e = this.valueSize,
			i = this.buffer,
			n = t * e + e,
			s = this.cumulativeWeight,
			r = this.cumulativeWeightAdditive,
			a = this.binding;
		if(this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, s < 1) {
			const t = e * this._origIndex;
			this._mixBufferRegion(i, n, t, 1 - s, e)
		}
		r > 0 && this._mixBufferRegionAdditive(i, n, this._addIndex * e, 1, e);
		for(let t = e, s = e + e; t !== s; ++t)
			if(i[t] !== i[t + e]) {
				a.setValue(i, n);
				break
			}
	}
	saveOriginalState() {
		const t = this.binding,
			e = this.buffer,
			i = this.valueSize,
			n = i * this._origIndex;
		t.getValue(e, n);
		for(let t = i, s = n; t !== s; ++t) e[t] = e[n + t % i];
		this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0
	}
	restoreOriginalState() {
		const t = 3 * this.valueSize;
		this.binding.setValue(this.buffer, t)
	}
	_setAdditiveIdentityNumeric() {
		const t = this._addIndex * this.valueSize,
			e = t + this.valueSize;
		for(let i = t; i < e; i++) this.buffer[i] = 0
	}
	_setAdditiveIdentityQuaternion() {
		this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1
	}
	_setAdditiveIdentityOther() {
		const t = this._origIndex * this.valueSize,
			e = this._addIndex * this.valueSize;
		for(let i = 0; i < this.valueSize; i++) this.buffer[e + i] = this.buffer[t + i]
	}
	_select(t, e, i, n, s) {
		if(n >= .5)
			for(let n = 0; n !== s; ++n) t[e + n] = t[i + n]
	}
	_slerp(t, e, i, n) {
		z.slerpFlat(t, e, t, e, t, i, n)
	}
	_slerpAdditive(t, e, i, n, s) {
		const r = this._workIndex * s;
		z.multiplyQuaternionsFlat(t, r, t, e, t, i), z.slerpFlat(t, e, t, e, t, r, n)
	}
	_lerp(t, e, i, n, s) {
		const r = 1 - n;
		for(let a = 0; a !== s; ++a) {
			const s = e + a;
			t[s] = t[s] * r + t[i + a] * n
		}
	}
	_lerpAdditive(t, e, i, n, s) {
		for(let r = 0; r !== s; ++r) {
			const s = e + r;
			t[s] = t[s] + t[i + r] * n
		}
	}
}
const da = new RegExp("[\\[\\]\\.:\\/]", "g"),
	Aa = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
	pa = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]") + /(WCOD+)?/.source.replace("WCOD", Aa) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", "[^\\[\\]\\.:\\/]") + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]") + "$"),
	ga = ["material", "materials", "bones", "map"];
class ma {
	constructor(t, e, i) {
		this.path = e, this.parsedPath = i || ma.parseTrackName(e), this.node = ma.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
	}
	static create(t, e, i) {
		return t && t.isAnimationObjectGroup ? new ma.Composite(t, e, i) : new ma(t, e, i)
	}
	static sanitizeNodeName(t) {
		return t.replace(/\s/g, "_").replace(da, "")
	}
	static parseTrackName(t) {
		const e = pa.exec(t);
		if(null === e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
		const i = {
				nodeName: e[2],
				objectName: e[3],
				objectIndex: e[4],
				propertyName: e[5],
				propertyIndex: e[6]
			},
			n = i.nodeName && i.nodeName.lastIndexOf(".");
		if(void 0 !== n && -1 !== n) {
			const t = i.nodeName.substring(n + 1); - 1 !== ga.indexOf(t) && (i.nodeName = i.nodeName.substring(0, n), i.objectName = t)
		}
		if(null === i.propertyName || 0 === i.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
		return i
	}
	static findNode(t, e) {
		if(void 0 === e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
		if(t.skeleton) {
			const i = t.skeleton.getBoneByName(e);
			if(void 0 !== i) return i
		}
		if(t.children) {
			const i = function(t) {
					for(let n = 0; n < t.length; n++) {
						const s = t[n];
						if(s.name === e || s.uuid === e) return s;
						const r = i(s.children);
						if(r) return r
					}
					return null
				},
				n = i(t.children);
			if(n) return n
		}
		return null
	}
	_getValue_unavailable() {}
	_setValue_unavailable() {}
	_getValue_direct(t, e) {
		t[e] = this.targetObject[this.propertyName]
	}
	_getValue_array(t, e) {
		const i = this.resolvedProperty;
		for(let n = 0, s = i.length; n !== s; ++n) t[e++] = i[n]
	}
	_getValue_arrayElement(t, e) {
		t[e] = this.resolvedProperty[this.propertyIndex]
	}
	_getValue_toArray(t, e) {
		this.resolvedProperty.toArray(t, e)
	}
	_setValue_direct(t, e) {
		this.targetObject[this.propertyName] = t[e]
	}
	_setValue_direct_setNeedsUpdate(t, e) {
		this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
	}
	_setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
		this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
	}
	_setValue_array(t, e) {
		const i = this.resolvedProperty;
		for(let n = 0, s = i.length; n !== s; ++n) i[n] = t[e++]
	}
	_setValue_array_setNeedsUpdate(t, e) {
		const i = this.resolvedProperty;
		for(let n = 0, s = i.length; n !== s; ++n) i[n] = t[e++];
		this.targetObject.needsUpdate = !0
	}
	_setValue_array_setMatrixWorldNeedsUpdate(t, e) {
		const i = this.resolvedProperty;
		for(let n = 0, s = i.length; n !== s; ++n) i[n] = t[e++];
		this.targetObject.matrixWorldNeedsUpdate = !0
	}
	_setValue_arrayElement(t, e) {
		this.resolvedProperty[this.propertyIndex] = t[e]
	}
	_setValue_arrayElement_setNeedsUpdate(t, e) {
		this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
	}
	_setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
		this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
	}
	_setValue_fromArray(t, e) {
		this.resolvedProperty.fromArray(t, e)
	}
	_setValue_fromArray_setNeedsUpdate(t, e) {
		this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
	}
	_setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
		this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
	}
	_getValue_unbound(t, e) {
		this.bind(), this.getValue(t, e)
	}
	_setValue_unbound(t, e) {
		this.bind(), this.setValue(t, e)
	}
	bind() {
		let t = this.node;
		const e = this.parsedPath,
			i = e.objectName,
			n = e.propertyName;
		let s = e.propertyIndex;
		if(t || (t = ma.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
		if(i) {
			let n = e.objectIndex;
			switch(i) {
				case "materials":
					if(!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
					if(!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
					t = t.material.materials;
					break;
				case "bones":
					if(!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
					t = t.skeleton.bones;
					for(let e = 0; e < t.length; e++)
						if(t[e].name === n) {
							n = e;
							break
						}
					break;
				case "map":
					if(!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
					if(!t.material.map) return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
					t = t.material.map;
					break;
				default:
					if(void 0 === t[i]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
					t = t[i]
			}
			if(void 0 !== n) {
				if(void 0 === t[n]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
				t = t[n]
			}
		}
		const r = t[n];
		if(void 0 === r) {
			const i = e.nodeName;
			return void console.error("THREE.PropertyBinding: Trying to update property for track: " + i + "." + n + " but it wasn't found.", t)
		}
		let a = this.Versioning.None;
		this.targetObject = t, void 0 !== t.needsUpdate ? a = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (a = this.Versioning.MatrixWorldNeedsUpdate);
		let o = this.BindingType.Direct;
		if(void 0 !== s) {
			if("morphTargetInfluences" === n) {
				if(!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
				if(!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
				void 0 !== t.morphTargetDictionary[s] && (s = t.morphTargetDictionary[s])
			}
			o = this.BindingType.ArrayElement, this.resolvedProperty = r, this.propertyIndex = s
		} else void 0 !== r.fromArray && void 0 !== r.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = r) : Array.isArray(r) ? (o = this.BindingType.EntireArray, this.resolvedProperty = r) : this.propertyName = n;
		this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][a]
	}
	unbind() {
		this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
	}
}
ma.Composite = class {
	constructor(t, e, i) {
		const n = i || ma.parseTrackName(e);
		this._targetGroup = t, this._bindings = t.subscribe_(e, n)
	}
	getValue(t, e) {
		this.bind();
		const i = this._targetGroup.nCachedObjects_,
			n = this._bindings[i];
		void 0 !== n && n.getValue(t, e)
	}
	setValue(t, e) {
		const i = this._bindings;
		for(let n = this._targetGroup.nCachedObjects_, s = i.length; n !== s; ++n) i[n].setValue(t, e)
	}
	bind() {
		const t = this._bindings;
		for(let e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].bind()
	}
	unbind() {
		const t = this._bindings;
		for(let e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].unbind()
	}
}, ma.prototype.BindingType = {
	Direct: 0,
	EntireArray: 1,
	ArrayElement: 2,
	HasFromToArray: 3
}, ma.prototype.Versioning = {
	None: 0,
	NeedsUpdate: 1,
	MatrixWorldNeedsUpdate: 2
}, ma.prototype.GetterByBindingType = [ma.prototype._getValue_direct, ma.prototype._getValue_array, ma.prototype._getValue_arrayElement, ma.prototype._getValue_toArray], ma.prototype.SetterByBindingTypeAndVersioning = [
	[ma.prototype._setValue_direct, ma.prototype._setValue_direct_setNeedsUpdate, ma.prototype._setValue_direct_setMatrixWorldNeedsUpdate],
	[ma.prototype._setValue_array, ma.prototype._setValue_array_setNeedsUpdate, ma.prototype._setValue_array_setMatrixWorldNeedsUpdate],
	[ma.prototype._setValue_arrayElement, ma.prototype._setValue_arrayElement_setNeedsUpdate, ma.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],
	[ma.prototype._setValue_fromArray, ma.prototype._setValue_fromArray_setNeedsUpdate, ma.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]
];
class fa {
	constructor(t, e, i = null, n = e.blendMode) {
		this._mixer = t, this._clip = e, this._localRoot = i, this.blendMode = n;
		const s = e.tracks,
			r = s.length,
			a = new Array(r),
			o = {
				endingStart: 2400,
				endingEnd: 2400
			};
		for(let t = 0; t !== r; ++t) {
			const e = s[t].createInterpolant(null);
			a[t] = e, e.settings = o
		}
		this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(r), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
	}
	play() {
		return this._mixer._activateAction(this), this
	}
	stop() {
		return this._mixer._deactivateAction(this), this.reset()
	}
	reset() {
		return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
	}
	isRunning() {
		return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
	}
	isScheduled() {
		return this._mixer._isActiveAction(this)
	}
	startAt(t) {
		return this._startTime = t, this
	}
	setLoop(t, e) {
		return this.loop = t, this.repetitions = e, this
	}
	setEffectiveWeight(t) {
		return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
	}
	getEffectiveWeight() {
		return this._effectiveWeight
	}
	fadeIn(t) {
		return this._scheduleFading(t, 0, 1)
	}
	fadeOut(t) {
		return this._scheduleFading(t, 1, 0)
	}
	crossFadeFrom(t, e, i) {
		if(t.fadeOut(e), this.fadeIn(e), i) {
			const i = this._clip.duration,
				n = t._clip.duration,
				s = n / i,
				r = i / n;
			t.warp(1, s, e), this.warp(r, 1, e)
		}
		return this
	}
	crossFadeTo(t, e, i) {
		return t.crossFadeFrom(this, e, i)
	}
	stopFading() {
		const t = this._weightInterpolant;
		return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
	}
	setEffectiveTimeScale(t) {
		return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
	}
	getEffectiveTimeScale() {
		return this._effectiveTimeScale
	}
	setDuration(t) {
		return this.timeScale = this._clip.duration / t, this.stopWarping()
	}
	syncWith(t) {
		return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
	}
	halt(t) {
		return this.warp(this._effectiveTimeScale, 0, t)
	}
	warp(t, e, i) {
		const n = this._mixer,
			s = n.time,
			r = this.timeScale;
		let a = this._timeScaleInterpolant;
		null === a && (a = n._lendControlInterpolant(), this._timeScaleInterpolant = a);
		const o = a.parameterPositions,
			l = a.sampleValues;
		return o[0] = s, o[1] = s + i, l[0] = t / r, l[1] = e / r, this
	}
	stopWarping() {
		const t = this._timeScaleInterpolant;
		return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
	}
	getMixer() {
		return this._mixer
	}
	getClip() {
		return this._clip
	}
	getRoot() {
		return this._localRoot || this._mixer._root
	}
	_update(t, e, i, n) {
		if(!this.enabled) return void this._updateWeight(t);
		const s = this._startTime;
		if(null !== s) {
			const n = (t - s) * i;
			n < 0 || 0 === i ? e = 0 : (this._startTime = null, e = i * n)
		}
		e *= this._updateTimeScale(t);
		const r = this._updateTime(e),
			a = this._updateWeight(t);
		if(a > 0) {
			const t = this._interpolants,
				e = this._propertyBindings;
			if(2501 === this.blendMode)
				for(let i = 0, n = t.length; i !== n; ++i) t[i].evaluate(r), e[i].accumulateAdditive(a);
			else
				for(let i = 0, s = t.length; i !== s; ++i) t[i].evaluate(r), e[i].accumulate(n, a)
		}
	}
	_updateWeight(t) {
		let e = 0;
		if(this.enabled) {
			e = this.weight;
			const i = this._weightInterpolant;
			if(null !== i) {
				const n = i.evaluate(t)[0];
				e *= n, t > i.parameterPositions[1] && (this.stopFading(), 0 === n && (this.enabled = !1))
			}
		}
		return this._effectiveWeight = e, e
	}
	_updateTimeScale(t) {
		let e = 0;
		if(!this.paused) {
			e = this.timeScale;
			const i = this._timeScaleInterpolant;
			if(null !== i) {
				e *= i.evaluate(t)[0], t > i.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e)
			}
		}
		return this._effectiveTimeScale = e, e
	}
	_updateTime(t) {
		const e = this._clip.duration,
			i = this.loop;
		let n = this.time + t,
			s = this._loopCount;
		const r = 2202 === i;
		if(0 === t) return -1 === s ? n : r && 1 == (1 & s) ? e - n : n;
		if(2200 === i) {
			-1 === s && (this._loopCount = 0, this._setEndings(!0, !0, !1));
			t: {
				if(n >= e) n = e;
				else {
					if(!(n < 0)) {
						this.time = n;
						break t
					}
					n = 0
				}
				this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = n, this._mixer.dispatchEvent({
					type: "finished",
					action: this,
					direction: t < 0 ? -1 : 1
				})
			}
		} else {
			if(-1 === s && (t >= 0 ? (s = 0, this._setEndings(!0, 0 === this.repetitions, r)) : this._setEndings(0 === this.repetitions, !0, r)), n >= e || n < 0) {
				const i = Math.floor(n / e);
				n -= e * i, s += Math.abs(i);
				const a = this.repetitions - s;
				if(a <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, n = t > 0 ? e : 0, this.time = n, this._mixer.dispatchEvent({
					type: "finished",
					action: this,
					direction: t > 0 ? 1 : -1
				});
				else {
					if(1 === a) {
						const e = t < 0;
						this._setEndings(e, !e, r)
					} else this._setEndings(!1, !1, r);
					this._loopCount = s, this.time = n, this._mixer.dispatchEvent({
						type: "loop",
						action: this,
						loopDelta: i
					})
				}
			} else this.time = n;
			if(r && 1 == (1 & s)) return e - n
		}
		return n
	}
	_setEndings(t, e, i) {
		const n = this._interpolantSettings;
		i ? (n.endingStart = 2401, n.endingEnd = 2401) : (n.endingStart = t ? this.zeroSlopeAtStart ? 2401 : 2400 : 2402, n.endingEnd = e ? this.zeroSlopeAtEnd ? 2401 : 2400 : 2402)
	}
	_scheduleFading(t, e, i) {
		const n = this._mixer,
			s = n.time;
		let r = this._weightInterpolant;
		null === r && (r = n._lendControlInterpolant(), this._weightInterpolant = r);
		const a = r.parameterPositions,
			o = r.sampleValues;
		return a[0] = s, o[0] = e, a[1] = s + t, o[1] = i, this
	}
}
const va = new Float32Array(1);
class ya extends n {
	constructor(t) {
		super(), this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
	}
	_bindAction(t, e) {
		const i = t._localRoot || this._root,
			n = t._clip.tracks,
			s = n.length,
			r = t._propertyBindings,
			a = t._interpolants,
			o = i.uuid,
			l = this._bindingsByRootAndName;
		let c = l[o];
		void 0 === c && (c = {}, l[o] = c);
		for(let t = 0; t !== s; ++t) {
			const s = n[t],
				l = s.name;
			let h = c[l];
			if(void 0 !== h) ++h.referenceCount, r[t] = h;
			else {
				if(h = r[t], void 0 !== h) {
					null === h._cacheIndex && (++h.referenceCount, this._addInactiveBinding(h, o, l));
					continue
				}
				const n = e && e._propertyBindings[t].binding.parsedPath;
				h = new ua(ma.create(i, l, n), s.ValueTypeName, s.getValueSize()), ++h.referenceCount, this._addInactiveBinding(h, o, l), r[t] = h
			}
			a[t].resultBuffer = h.buffer
		}
	}
	_activateAction(t) {
		if(!this._isActiveAction(t)) {
			if(null === t._cacheIndex) {
				const e = (t._localRoot || this._root).uuid,
					i = t._clip.uuid,
					n = this._actionsByClip[i];
				this._bindAction(t, n && n.knownActions[0]), this._addInactiveAction(t, i, e)
			}
			const e = t._propertyBindings;
			for(let t = 0, i = e.length; t !== i; ++t) {
				const i = e[t];
				0 == i.useCount++ && (this._lendBinding(i), i.saveOriginalState())
			}
			this._lendAction(t)
		}
	}
	_deactivateAction(t) {
		if(this._isActiveAction(t)) {
			const e = t._propertyBindings;
			for(let t = 0, i = e.length; t !== i; ++t) {
				const i = e[t];
				0 == --i.useCount && (i.restoreOriginalState(), this._takeBackBinding(i))
			}
			this._takeBackAction(t)
		}
	}
	_initMemoryManager() {
		this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
		const t = this;
		this.stats = {
			actions: {get total() {
					return t._actions.length
				},
				get inUse() {
					return t._nActiveActions
				}
			},
			bindings: {get total() {
					return t._bindings.length
				},
				get inUse() {
					return t._nActiveBindings
				}
			},
			controlInterpolants: {get total() {
					return t._controlInterpolants.length
				},
				get inUse() {
					return t._nActiveControlInterpolants
				}
			}
		}
	}
	_isActiveAction(t) {
		const e = t._cacheIndex;
		return null !== e && e < this._nActiveActions
	}
	_addInactiveAction(t, e, i) {
		const n = this._actions,
			s = this._actionsByClip;
		let r = s[e];
		if(void 0 === r) r = {
			knownActions: [t],
			actionByRoot: {}
		}, t._byClipCacheIndex = 0, s[e] = r;
		else {
			const e = r.knownActions;
			t._byClipCacheIndex = e.length, e.push(t)
		}
		t._cacheIndex = n.length, n.push(t), r.actionByRoot[i] = t
	}
	_removeInactiveAction(t) {
		const e = this._actions,
			i = e[e.length - 1],
			n = t._cacheIndex;
		i._cacheIndex = n, e[n] = i, e.pop(), t._cacheIndex = null;
		const s = t._clip.uuid,
			r = this._actionsByClip,
			a = r[s],
			o = a.knownActions,
			l = o[o.length - 1],
			c = t._byClipCacheIndex;
		l._byClipCacheIndex = c, o[c] = l, o.pop(), t._byClipCacheIndex = null;
		delete a.actionByRoot[(t._localRoot || this._root).uuid], 0 === o.length && delete r[s], this._removeInactiveBindingsForAction(t)
	}
	_removeInactiveBindingsForAction(t) {
		const e = t._propertyBindings;
		for(let t = 0, i = e.length; t !== i; ++t) {
			const i = e[t];
			0 == --i.referenceCount && this._removeInactiveBinding(i)
		}
	}
	_lendAction(t) {
		const e = this._actions,
			i = t._cacheIndex,
			n = this._nActiveActions++,
			s = e[n];
		t._cacheIndex = n, e[n] = t, s._cacheIndex = i, e[i] = s
	}
	_takeBackAction(t) {
		const e = this._actions,
			i = t._cacheIndex,
			n = --this._nActiveActions,
			s = e[n];
		t._cacheIndex = n, e[n] = t, s._cacheIndex = i, e[i] = s
	}
	_addInactiveBinding(t, e, i) {
		const n = this._bindingsByRootAndName,
			s = this._bindings;
		let r = n[e];
		void 0 === r && (r = {}, n[e] = r), r[i] = t, t._cacheIndex = s.length, s.push(t)
	}
	_removeInactiveBinding(t) {
		const e = this._bindings,
			i = t.binding,
			n = i.rootNode.uuid,
			s = i.path,
			r = this._bindingsByRootAndName,
			a = r[n],
			o = e[e.length - 1],
			l = t._cacheIndex;
		o._cacheIndex = l, e[l] = o, e.pop(), delete a[s], 0 === Object.keys(a).length && delete r[n]
	}
	_lendBinding(t) {
		const e = this._bindings,
			i = t._cacheIndex,
			n = this._nActiveBindings++,
			s = e[n];
		t._cacheIndex = n, e[n] = t, s._cacheIndex = i, e[i] = s
	}
	_takeBackBinding(t) {
		const e = this._bindings,
			i = t._cacheIndex,
			n = --this._nActiveBindings,
			s = e[n];
		t._cacheIndex = n, e[n] = t, s._cacheIndex = i, e[i] = s
	}
	_lendControlInterpolant() {
		const t = this._controlInterpolants,
			e = this._nActiveControlInterpolants++;
		let i = t[e];
		return void 0 === i && (i = new Ir(new Float32Array(2), new Float32Array(2), 1, va), i.__cacheIndex = e, t[e] = i), i
	}
	_takeBackControlInterpolant(t) {
		const e = this._controlInterpolants,
			i = t.__cacheIndex,
			n = --this._nActiveControlInterpolants,
			s = e[n];
		t.__cacheIndex = n, e[n] = t, s.__cacheIndex = i, e[i] = s
	}
	clipAction(t, e, i) {
		const n = e || this._root,
			s = n.uuid;
		let r = "string" == typeof t ? Pr.findByName(n, t) : t;
		const a = null !== r ? r.uuid : t,
			o = this._actionsByClip[a];
		let l = null;
		if(void 0 === i && (i = null !== r ? r.blendMode : 2500), void 0 !== o) {
			const t = o.actionByRoot[s];
			if(void 0 !== t && t.blendMode === i) return t;
			l = o.knownActions[0], null === r && (r = l._clip)
		}
		if(null === r) return null;
		const c = new fa(this, r, e, i);
		return this._bindAction(c, l), this._addInactiveAction(c, a, s), c
	}
	existingAction(t, e) {
		const i = e || this._root,
			n = i.uuid,
			s = "string" == typeof t ? Pr.findByName(i, t) : t,
			r = s ? s.uuid : t,
			a = this._actionsByClip[r];
		return void 0 !== a && a.actionByRoot[n] || null
	}
	stopAllAction() {
		const t = this._actions;
		for(let e = this._nActiveActions - 1; e >= 0; --e) t[e].stop();
		return this
	}
	update(t) {
		t *= this.timeScale;
		const e = this._actions,
			i = this._nActiveActions,
			n = this.time += t,
			s = Math.sign(t),
			r = this._accuIndex ^= 1;
		for(let a = 0; a !== i; ++a) {
			e[a]._update(n, t, s, r)
		}
		const a = this._bindings,
			o = this._nActiveBindings;
		for(let t = 0; t !== o; ++t) a[t].apply(r);
		return this
	}
	setTime(t) {
		this.time = 0;
		for(let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
		return this.update(t)
	}
	getRoot() {
		return this._root
	}
	uncacheClip(t) {
		const e = this._actions,
			i = t.uuid,
			n = this._actionsByClip,
			s = n[i];
		if(void 0 !== s) {
			const t = s.knownActions;
			for(let i = 0, n = t.length; i !== n; ++i) {
				const n = t[i];
				this._deactivateAction(n);
				const s = n._cacheIndex,
					r = e[e.length - 1];
				n._cacheIndex = null, n._byClipCacheIndex = null, r._cacheIndex = s, e[s] = r, e.pop(), this._removeInactiveBindingsForAction(n)
			}
			delete n[i]
		}
	}
	uncacheRoot(t) {
		const e = t.uuid,
			i = this._actionsByClip;
		for(const t in i) {
			const n = i[t].actionByRoot[e];
			void 0 !== n && (this._deactivateAction(n), this._removeInactiveAction(n))
		}
		const n = this._bindingsByRootAndName[e];
		if(void 0 !== n)
			for(const t in n) {
				const e = n[t];
				e.restoreOriginalState(), this._removeInactiveBinding(e)
			}
	}
	uncacheAction(t, e) {
		const i = this.existingAction(t, e);
		null !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
	}
}

function xa(t, e) {
	return t.distance - e.distance
}

function _a(t, e, i, n) {
	if(t.layers.test(e.layers) && t.raycast(e, i), !0 === n) {
		const n = t.children;
		for(let t = 0, s = n.length; t < s; t++) _a(n[t], e, i, !0)
	}
}
class Ea {
	constructor(t = 1, e = 0, i = 0) {
		return this.radius = t, this.phi = e, this.theta = i, this
	}
	set(t, e, i) {
		return this.radius = t, this.phi = e, this.theta = i, this
	}
	copy(t) {
		return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
	}
	makeSafe() {
		const t = 1e-6;
		return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)), this
	}
	setFromVector3(t) {
		return this.setFromCartesianCoords(t.x, t.y, t.z)
	}
	setFromCartesianCoords(t, e, i) {
		return this.radius = Math.sqrt(t * t + e * e + i * i), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, i), this.phi = Math.acos(c(e / this.radius, -1, 1))), this
	}
	clone() {
		return(new this.constructor).copy(this)
	}
}
const wa = ba();

function ba() {
	const t = new ArrayBuffer(4),
		e = new Float32Array(t),
		i = new Uint32Array(t),
		n = new Uint32Array(512),
		s = new Uint32Array(512);
	for(let t = 0; t < 256; ++t) {
		const e = t - 127;
		e < -27 ? (n[t] = 0, n[256 | t] = 32768, s[t] = 24, s[256 | t] = 24) : e < -14 ? (n[t] = 1024 >> -e - 14, n[256 | t] = 1024 >> -e - 14 | 32768, s[t] = -e - 1, s[256 | t] = -e - 1) : e <= 15 ? (n[t] = e + 15 << 10, n[256 | t] = e + 15 << 10 | 32768, s[t] = 13, s[256 | t] = 13) : e < 128 ? (n[t] = 31744, n[256 | t] = 64512, s[t] = 24, s[256 | t] = 24) : (n[t] = 31744, n[256 | t] = 64512, s[t] = 13, s[256 | t] = 13)
	}
	const r = new Uint32Array(2048),
		a = new Uint32Array(64),
		o = new Uint32Array(64);
	for(let t = 1; t < 1024; ++t) {
		let e = t << 13,
			i = 0;
		for(; 0 == (8388608 & e);) e <<= 1, i -= 8388608;
		e &= -8388609, i += 947912704, r[t] = e | i
	}
	for(let t = 1024; t < 2048; ++t) r[t] = 939524096 + (t - 1024 << 13);
	for(let t = 1; t < 31; ++t) a[t] = t << 23;
	a[31] = 1199570944, a[32] = 2147483648;
	for(let t = 33; t < 63; ++t) a[t] = 2147483648 + (t - 32 << 23);
	a[63] = 3347054592;
	for(let t = 1; t < 64; ++t) 32 !== t && (o[t] = 1024);
	return {
		floatView: e,
		uint32View: i,
		baseTable: n,
		shiftTable: s,
		mantissaTable: r,
		exponentTable: a,
		offsetTable: o
	}
}
var Ia = Object.freeze({
	__proto__: null,
	toHalfFloat: function(t) {
		Math.abs(t) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), t = c(t, -65504, 65504), wa.floatView[0] = t;
		const e = wa.uint32View[0],
			i = e >> 23 & 511;
		return wa.baseTable[i] + ((8388607 & e) >> wa.shiftTable[i])
	},
	fromHalfFloat: function(t) {
		const e = t >> 10;
		return wa.uint32View[0] = wa.mantissaTable[wa.offsetTable[e] + (1023 & t)] + wa.exponentTable[e], wa.floatView[0]
	}
});
"undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
		detail: {
			revision: "144"
		}
	})), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "144")
	/**
	 * @license
	 * Copyright 2019 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
;
const Ca = window,
	Sa = Ca.ShadowRoot && (void 0 === Ca.ShadyCSS || Ca.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
	Ma = Symbol(),
	Ba = new WeakMap;
class Ta {
	constructor(t, e, i) {
		if(this._$cssResult$ = !0, i !== Ma) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = t, this.t = e
	}
	get styleSheet() {
		let t = this.o;
		const e = this.t;
		if(Sa && void 0 === t) {
			const i = void 0 !== e && 1 === e.length;
			i && (t = Ba.get(e)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), i && Ba.set(e, t))
		}
		return t
	}
	toString() {
		return this.cssText
	}
}
const Ra = Sa ? t => t : t => t instanceof CSSStyleSheet ? (t => {
		let e = "";
		for(const i of t.cssRules) e += i.cssText;
		return(t => new Ta("string" == typeof t ? t : t + "", void 0, Ma))(e)
	})(t) : t
	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
;
var Da;
const La = window,
	Qa = La.trustedTypes,
	Pa = Qa ? Qa.emptyScript : "",
	Fa = La.reactiveElementPolyfillSupport,
	Ua = {
		toAttribute(t, e) {
			switch(e) {
				case Boolean:
					t = t ? Pa : null;
					break;
				case Object:
				case Array:
					t = null == t ? t : JSON.stringify(t)
			}
			return t
		}, fromAttribute(t, e) {
			let i = t;
			switch(e) {
				case Boolean:
					i = null !== t;
					break;
				case Number:
					i = null === t ? null : Number(t);
					break;
				case Object:
				case Array:
					try {
						i = JSON.parse(t)
					} catch(t) {
						i = null
					}
			}
			return i
		}
	},
	Na = (t, e) => e !== t && (e == e || t == t),
	ka = {
		attribute: !0,
		type: String,
		converter: Ua,
		reflect: !1,
		hasChanged: Na
	};
class Oa extends HTMLElement {
	constructor() {
		super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u()
	}
	static addInitializer(t) {
		var e;
		null !== (e = this.h) && void 0 !== e || (this.h = []), this.h.push(t)
	}
	static get observedAttributes() {
		this.finalize();
		const t = [];
		return this.elementProperties.forEach(((e, i) => {
			const n = this._$Ep(i, e);
			void 0 !== n && (this._$Ev.set(n, i), t.push(n))
		})), t
	}
	static createProperty(t, e = ka) {
		if(e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
			const i = "symbol" == typeof t ? Symbol() : "__" + t,
				n = this.getPropertyDescriptor(t, i, e);
			void 0 !== n && Object.defineProperty(this.prototype, t, n)
		}
	}
	static getPropertyDescriptor(t, e, i) {
		return {
			get() {
				return this[e]
			}, set(n) {
				const s = this[t];
				this[e] = n, this.requestUpdate(t, s, i)
			}, configurable: !0, enumerable: !0
		}
	}
	static getPropertyOptions(t) {
		return this.elementProperties.get(t) || ka
	}
	static finalize() {
		if(this.hasOwnProperty("finalized")) return !1;
		this.finalized = !0;
		const t = Object.getPrototypeOf(this);
		if(t.finalize(), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
			const t = this.properties,
				e = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
			for(const i of e) this.createProperty(i, t[i])
		}
		return this.elementStyles = this.finalizeStyles(this.styles), !0
	}
	static finalizeStyles(t) {
		const e = [];
		if(Array.isArray(t)) {
			const i = new Set(t.flat(1 / 0).reverse());
			for(const t of i) e.unshift(Ra(t))
		} else void 0 !== t && e.push(Ra(t));
		return e
	}
	static _$Ep(t, e) {
		const i = e.attribute;
		return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0
	}
	u() {
		var t;
		this._$E_ = new Promise((t => this.enableUpdating = t)), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach((t => t(this)))
	}
	addController(t) {
		var e, i;
		(null !== (e = this._$ES) && void 0 !== e ? e : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (i = t.hostConnected) || void 0 === i || i.call(t))
	}
	removeController(t) {
		var e;
		null === (e = this._$ES) || void 0 === e || e.splice(this._$ES.indexOf(t) >>> 0, 1)
	}
	_$Eg() {
		this.constructor.elementProperties.forEach(((t, e) => {
			this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e])
		}))
	}
	createRenderRoot() {
		var t;
		const e = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
		return((t, e) => {
			Sa ? t.adoptedStyleSheets = e.map((t => t instanceof CSSStyleSheet ? t : t.styleSheet)) : e.forEach((e => {
				const i = document.createElement("style"),
					n = Ca.litNonce;
				void 0 !== n && i.setAttribute("nonce", n), i.textContent = e.cssText, t.appendChild(i)
			}))
		})(e, this.constructor.elementStyles), e
	}
	connectedCallback() {
		var t;
		void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach((t => {
			var e;
			return null === (e = t.hostConnected) || void 0 === e ? void 0 : e.call(t)
		}))
	}
	enableUpdating(t) {}
	disconnectedCallback() {
		var t;
		null === (t = this._$ES) || void 0 === t || t.forEach((t => {
			var e;
			return null === (e = t.hostDisconnected) || void 0 === e ? void 0 : e.call(t)
		}))
	}
	attributeChangedCallback(t, e, i) {
		this._$AK(t, i)
	}
	_$EO(t, e, i = ka) {
		var n;
		const s = this.constructor._$Ep(t, i);
		if(void 0 !== s && !0 === i.reflect) {
			const r = (void 0 !== (null === (n = i.converter) || void 0 === n ? void 0 : n.toAttribute) ? i.converter : Ua).toAttribute(e, i.type);
			this._$El = t, null == r ? this.removeAttribute(s) : this.setAttribute(s, r), this._$El = null
		}
	}
	_$AK(t, e) {
		var i;
		const n = this.constructor,
			s = n._$Ev.get(t);
		if(void 0 !== s && this._$El !== s) {
			const t = n.getPropertyOptions(s),
				r = "function" == typeof t.converter ? {
					fromAttribute: t.converter
				} : void 0 !== (null === (i = t.converter) || void 0 === i ? void 0 : i.fromAttribute) ? t.converter : Ua;
			this._$El = s, this[s] = r.fromAttribute(e, t.type), this._$El = null
		}
	}
	requestUpdate(t, e, i) {
		let n = !0;
		void 0 !== t && (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || Na)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), !0 === i.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, i))) : n = !1), !this.isUpdatePending && n && (this._$E_ = this._$Ej())
	}
	async _$Ej() {
		this.isUpdatePending = !0;
		try {
			await this._$E_
		} catch(t) {
			Promise.reject(t)
		}
		const t = this.scheduleUpdate();
		return null != t && await t, !this.isUpdatePending
	}
	scheduleUpdate() {
		return this.performUpdate()
	}
	performUpdate() {
		var t;
		if(!this.isUpdatePending) return;
		this.hasUpdated, this._$Ei && (this._$Ei.forEach(((t, e) => this[e] = t)), this._$Ei = void 0);
		let e = !1;
		const i = this._$AL;
		try {
			e = this.shouldUpdate(i), e ? (this.willUpdate(i), null === (t = this._$ES) || void 0 === t || t.forEach((t => {
				var e;
				return null === (e = t.hostUpdate) || void 0 === e ? void 0 : e.call(t)
			})), this.update(i)) : this._$Ek()
		} catch(t) {
			throw e = !1, this._$Ek(), t
		}
		e && this._$AE(i)
	}
	willUpdate(t) {}
	_$AE(t) {
		var e;
		null === (e = this._$ES) || void 0 === e || e.forEach((t => {
			var e;
			return null === (e = t.hostUpdated) || void 0 === e ? void 0 : e.call(t)
		})), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t)
	}
	_$Ek() {
		this._$AL = new Map, this.isUpdatePending = !1
	}
	get updateComplete() {
		return this.getUpdateComplete()
	}
	getUpdateComplete() {
		return this._$E_
	}
	shouldUpdate(t) {
		return !0
	}
	update(t) {
		void 0 !== this._$EC && (this._$EC.forEach(((t, e) => this._$EO(e, this[e], t))), this._$EC = void 0), this._$Ek()
	}
	updated(t) {}
	firstUpdated(t) {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Ga;
Oa.finalized = !0, Oa.elementProperties = new Map, Oa.elementStyles = [], Oa.shadowRootOptions = {
	mode: "open"
}, null == Fa || Fa({
	ReactiveElement: Oa
}), (null !== (Da = La.reactiveElementVersions) && void 0 !== Da ? Da : La.reactiveElementVersions = []).push("1.4.1");
const Ha = window,
	za = Ha.trustedTypes,
	Va = za ? za.createPolicy("lit-html", {
		createHTML: t => t
	}) : void 0,
	Wa = `lit$${(Math.random()+"").slice(9)}$`,
	qa = "?" + Wa,
	ja = `<${qa}>`,
	Ya = document,
	Ja = (t = "") => Ya.createComment(t),
	Xa = t => null === t || "object" != typeof t && "function" != typeof t,
	Ka = Array.isArray,
	$a = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
	Za = /-->/g,
	to = />/g,
	eo = RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)", "g"),
	io = /'/g,
	no = /"/g,
	so = /^(?:script|style|textarea|title)$/i,
	ro = (t => (e, ...i) => ({
		_$litType$: t,
		strings: e,
		values: i
	}))(1),
	ao = Symbol.for("lit-noChange"),
	oo = Symbol.for("lit-nothing"),
	lo = new WeakMap,
	co = (t, e, i) => {
		var n, s;
		const r = null !== (n = null == i ? void 0 : i.renderBefore) && void 0 !== n ? n : e;
		let a = r._$litPart$;
		if(void 0 === a) {
			const t = null !== (s = null == i ? void 0 : i.renderBefore) && void 0 !== s ? s : null;
			r._$litPart$ = a = new mo(e.insertBefore(Ja(), t), t, void 0, null != i ? i : {})
		}
		return a._$AI(t), a
	},
	ho = Ya.createTreeWalker(Ya, 129, null, !1),
	uo = (t, e) => {
		const i = t.length - 1,
			n = [];
		let s, r = 2 === e ? "<svg>" : "",
			a = $a;
		for(let e = 0; e < i; e++) {
			const i = t[e];
			let o, l, c = -1,
				h = 0;
			for(; h < i.length && (a.lastIndex = h, l = a.exec(i), null !== l);) h = a.lastIndex, a === $a ? "!--" === l[1] ? a = Za : void 0 !== l[1] ? a = to : void 0 !== l[2] ? (so.test(l[2]) && (s = RegExp("</" + l[2], "g")), a = eo) : void 0 !== l[3] && (a = eo) : a === eo ? ">" === l[0] ? (a = null != s ? s : $a, c = -1) : void 0 === l[1] ? c = -2 : (c = a.lastIndex - l[2].length, o = l[1], a = void 0 === l[3] ? eo : '"' === l[3] ? no : io) : a === no || a === io ? a = eo : a === Za || a === to ? a = $a : (a = eo, s = void 0);
			const u = a === eo && t[e + 1].startsWith("/>") ? " " : "";
			r += a === $a ? i + ja : c >= 0 ? (n.push(o), i.slice(0, c) + "$lit$" + i.slice(c) + Wa + u) : i + Wa + (-2 === c ? (n.push(void 0), e) : u)
		}
		const o = r + (t[i] || "<?>") + (2 === e ? "</svg>" : "");
		if(!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
		return [void 0 !== Va ? Va.createHTML(o) : o, n]
	};
class Ao {
	constructor({
		strings: t,
		_$litType$: e
	}, i) {
		let n;
		this.parts = [];
		let s = 0,
			r = 0;
		const a = t.length - 1,
			o = this.parts,
			[l, c] = uo(t, e);
		if(this.el = Ao.createElement(l, i), ho.currentNode = this.el.content, 2 === e) {
			const t = this.el.content,
				e = t.firstChild;
			e.remove(), t.append(...e.childNodes)
		}
		for(; null !== (n = ho.nextNode()) && o.length < a;) {
			if(1 === n.nodeType) {
				if(n.hasAttributes()) {
					const t = [];
					for(const e of n.getAttributeNames())
						if(e.endsWith("$lit$") || e.startsWith(Wa)) {
							const i = c[r++];
							if(t.push(e), void 0 !== i) {
								const t = n.getAttribute(i.toLowerCase() + "$lit$").split(Wa),
									e = /([.?@])?(.*)/.exec(i);
								o.push({
									type: 1,
									index: s,
									name: e[2],
									strings: t,
									ctor: "." === e[1] ? vo : "?" === e[1] ? xo : "@" === e[1] ? _o : fo
								})
							} else o.push({
								type: 6,
								index: s
							})
						}
					for(const e of t) n.removeAttribute(e)
				}
				if(so.test(n.tagName)) {
					const t = n.textContent.split(Wa),
						e = t.length - 1;
					if(e > 0) {
						n.textContent = za ? za.emptyScript : "";
						for(let i = 0; i < e; i++) n.append(t[i], Ja()), ho.nextNode(), o.push({
							type: 2,
							index: ++s
						});
						n.append(t[e], Ja())
					}
				}
			} else if(8 === n.nodeType)
				if(n.data === qa) o.push({
					type: 2,
					index: s
				});
				else {
					let t = -1;
					for(; - 1 !== (t = n.data.indexOf(Wa, t + 1));) o.push({
						type: 7,
						index: s
					}), t += Wa.length - 1
				}
			s++
		}
	}
	static createElement(t, e) {
		const i = Ya.createElement("template");
		return i.innerHTML = t, i
	}
}

function po(t, e, i = t, n) {
	var s, r, a, o;
	if(e === ao) return e;
	let l = void 0 !== n ? null === (s = i._$Cl) || void 0 === s ? void 0 : s[n] : i._$Cu;
	const c = Xa(e) ? void 0 : e._$litDirective$;
	return(null == l ? void 0 : l.constructor) !== c && (null === (r = null == l ? void 0 : l._$AO) || void 0 === r || r.call(l, !1), void 0 === c ? l = void 0 : (l = new c(t), l._$AT(t, i, n)), void 0 !== n ? (null !== (a = (o = i)._$Cl) && void 0 !== a ? a : o._$Cl = [])[n] = l : i._$Cu = l), void 0 !== l && (e = po(t, l._$AS(t, e.values), l, n)), e
}
class go {
	constructor(t, e) {
		this.v = [], this._$AN = void 0, this._$AD = t, this._$AM = e
	}
	get parentNode() {
		return this._$AM.parentNode
	}
	get _$AU() {
		return this._$AM._$AU
	}
	p(t) {
		var e;
		const {
			el: {
				content: i
			},
			parts: n
		} = this._$AD, s = (null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e ? e : Ya).importNode(i, !0);
		ho.currentNode = s;
		let r = ho.nextNode(),
			a = 0,
			o = 0,
			l = n[0];
		for(; void 0 !== l;) {
			if(a === l.index) {
				let e;
				2 === l.type ? e = new mo(r, r.nextSibling, this, t) : 1 === l.type ? e = new l.ctor(r, l.name, l.strings, this, t) : 6 === l.type && (e = new Eo(r, this, t)), this.v.push(e), l = n[++o]
			}
			a !== (null == l ? void 0 : l.index) && (r = ho.nextNode(), a++)
		}
		return s
	}
	m(t) {
		let e = 0;
		for(const i of this.v) void 0 !== i && (void 0 !== i.strings ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++
	}
}
class mo {
	constructor(t, e, i, n) {
		var s;
		this.type = 2, this._$AH = oo, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = n, this._$C_ = null === (s = null == n ? void 0 : n.isConnected) || void 0 === s || s
	}
	get _$AU() {
		var t, e;
		return null !== (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== e ? e : this._$C_
	}
	get parentNode() {
		let t = this._$AA.parentNode;
		const e = this._$AM;
		return void 0 !== e && 11 === t.nodeType && (t = e.parentNode), t
	}
	get startNode() {
		return this._$AA
	}
	get endNode() {
		return this._$AB
	}
	_$AI(t, e = this) {
		t = po(this, t, e), Xa(t) ? t === oo || null == t || "" === t ? (this._$AH !== oo && this._$AR(), this._$AH = oo) : t !== this._$AH && t !== ao && this.$(t) : void 0 !== t._$litType$ ? this.T(t) : void 0 !== t.nodeType ? this.k(t) : (t => Ka(t) || "function" == typeof(null == t ? void 0 : t[Symbol.iterator]))(t) ? this.O(t) : this.$(t)
	}
	S(t, e = this._$AB) {
		return this._$AA.parentNode.insertBefore(t, e)
	}
	k(t) {
		this._$AH !== t && (this._$AR(), this._$AH = this.S(t))
	}
	$(t) {
		this._$AH !== oo && Xa(this._$AH) ? this._$AA.nextSibling.data = t : this.k(Ya.createTextNode(t)), this._$AH = t
	}
	T(t) {
		var e;
		const {
			values: i,
			_$litType$: n
		} = t, s = "number" == typeof n ? this._$AC(t) : (void 0 === n.el && (n.el = Ao.createElement(n.h, this.options)), n);
		if((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === s) this._$AH.m(i);
		else {
			const t = new go(s, this),
				e = t.p(this.options);
			t.m(i), this.k(e), this._$AH = t
		}
	}
	_$AC(t) {
		let e = lo.get(t.strings);
		return void 0 === e && lo.set(t.strings, e = new Ao(t)), e
	}
	O(t) {
		Ka(this._$AH) || (this._$AH = [], this._$AR());
		const e = this._$AH;
		let i, n = 0;
		for(const s of t) n === e.length ? e.push(i = new mo(this.S(Ja()), this.S(Ja()), this, this.options)) : i = e[n], i._$AI(s), n++;
		n < e.length && (this._$AR(i && i._$AB.nextSibling, n), e.length = n)
	}
	_$AR(t = this._$AA.nextSibling, e) {
		var i;
		for(null === (i = this._$AP) || void 0 === i || i.call(this, !1, !0, e); t && t !== this._$AB;) {
			const e = t.nextSibling;
			t.remove(), t = e
		}
	}
	setConnected(t) {
		var e;
		void 0 === this._$AM && (this._$C_ = t, null === (e = this._$AP) || void 0 === e || e.call(this, t))
	}
}
class fo {
	constructor(t, e, i, n, s) {
		this.type = 1, this._$AH = oo, this._$AN = void 0, this.element = t, this.name = e, this._$AM = n, this.options = s, i.length > 2 || "" !== i[0] || "" !== i[1] ? (this._$AH = Array(i.length - 1).fill(new String), this.strings = i) : this._$AH = oo
	}
	get tagName() {
		return this.element.tagName
	}
	get _$AU() {
		return this._$AM._$AU
	}
	_$AI(t, e = this, i, n) {
		const s = this.strings;
		let r = !1;
		if(void 0 === s) t = po(this, t, e, 0), r = !Xa(t) || t !== this._$AH && t !== ao, r && (this._$AH = t);
		else {
			const n = t;
			let a, o;
			for(t = s[0], a = 0; a < s.length - 1; a++) o = po(this, n[i + a], e, a), o === ao && (o = this._$AH[a]), r || (r = !Xa(o) || o !== this._$AH[a]), o === oo ? t = oo : t !== oo && (t += (null != o ? o : "") + s[a + 1]), this._$AH[a] = o
		}
		r && !n && this.P(t)
	}
	P(t) {
		t === oo ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "")
	}
}
class vo extends fo {
	constructor() {
		super(...arguments), this.type = 3
	}
	P(t) {
		this.element[this.name] = t === oo ? void 0 : t
	}
}
const yo = za ? za.emptyScript : "";
class xo extends fo {
	constructor() {
		super(...arguments), this.type = 4
	}
	P(t) {
		t && t !== oo ? this.element.setAttribute(this.name, yo) : this.element.removeAttribute(this.name)
	}
}
class _o extends fo {
	constructor(t, e, i, n, s) {
		super(t, e, i, n, s), this.type = 5
	}
	_$AI(t, e = this) {
		var i;
		if((t = null !== (i = po(this, t, e, 0)) && void 0 !== i ? i : oo) === ao) return;
		const n = this._$AH,
			s = t === oo && n !== oo || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive,
			r = t !== oo && (n === oo || s);
		s && this.element.removeEventListener(this.name, this, n), r && this.element.addEventListener(this.name, this, t), this._$AH = t
	}
	handleEvent(t) {
		var e, i;
		"function" == typeof this._$AH ? this._$AH.call(null !== (i = null === (e = this.options) || void 0 === e ? void 0 : e.host) && void 0 !== i ? i : this.element, t) : this._$AH.handleEvent(t)
	}
}
class Eo {
	constructor(t, e, i) {
		this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i
	}
	get _$AU() {
		return this._$AM._$AU
	}
	_$AI(t) {
		po(this, t)
	}
}
const wo = Ha.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var bo, Io;
null == wo || wo(Ao, mo), (null !== (Ga = Ha.litHtmlVersions) && void 0 !== Ga ? Ga : Ha.litHtmlVersions = []).push("2.3.1");
class Co extends Oa {
	constructor() {
		super(...arguments), this.renderOptions = {
			host: this
		}, this._$Do = void 0
	}
	createRenderRoot() {
		var t, e;
		const i = super.createRenderRoot();
		return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i
	}
	update(t) {
		const e = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = co(e, this.renderRoot, this.renderOptions)
	}
	connectedCallback() {
		var t;
		super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0)
	}
	disconnectedCallback() {
		var t;
		super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1)
	}
	render() {
		return ao
	}
}
Co.finalized = !0, Co._$litElement$ = !0, null === (bo = globalThis.litElementHydrateSupport) || void 0 === bo || bo.call(globalThis, {
	LitElement: Co
});
const So = globalThis.litElementPolyfillSupport;
null == So || So({
	LitElement: Co
}), (null !== (Io = globalThis.litElementVersions) && void 0 !== Io ? Io : globalThis.litElementVersions = []).push("3.2.2");
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mo = null != navigator.xr && null != self.XRSession && null != navigator.xr.isSessionSupported,
	Bo = Mo && null != self.XRSession.prototype.requestHitTestSource,
	To = null != self.ResizeObserver,
	Ro = null != self.IntersectionObserver,
	Do = Bo;
(() => {
	const t = navigator.userAgent || navigator.vendor || self.opera;
	let e = !1;
	(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
})(), /\bCrOS\b/.test(navigator.userAgent);
const Lo = /android/i.test(navigator.userAgent),
	Qo = /iPad|iPhone|iPod/.test(navigator.userAgent) && !self.MSStream || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
/Safari\//.test(navigator.userAgent);
const Po = /firefox/i.test(navigator.userAgent),
	Fo = /OculusBrowser/.test(navigator.userAgent);
Qo && /CriOS\//.test(navigator.userAgent);
const Uo = Lo && !Po && !Fo,
	No = Boolean(window.webkit && window.webkit.messageHandlers),
	ko = (() => {
		if(Qo) {
			if(No) return Boolean(/CriOS\/|EdgiOS\/|FxiOS\/|GSA\/|DuckDuckGo\//.test(navigator.userAgent)); {
				const t = document.createElement("a");
				return Boolean(t.relList && t.relList.supports && t.relList.supports("ar"))
			}
		}
		return !1
	})(),
	Oo = t => t && "null" !== t ? Ho(t) : null,
	Go = () => {
		if(Do) return;
		const t = [];
		throw Mo || t.push("WebXR Device API"), Bo || t.push("WebXR Hit Test API"), new Error(`The following APIs are required for AR, but are missing in this browser: ${t.join(", ")}`)
	},
	Ho = t => new URL(t, window.location.toString()).toString(),
	zo = (t, e) => {
		let i = null;
		return(...n) => {
			null != i && self.clearTimeout(i), i = self.setTimeout((() => {
				i = null, t(...n)
			}), e)
		}
	},
	Vo = (t, e, i) => Math.max(e, Math.min(i, t)),
	Wo = (() => {
		const t = (() => {
			var t;
			if(null === (t = document.documentElement.getAttribute("itemtype")) || void 0 === t ? void 0 : t.includes("schema.org/SearchResultsPage")) return !0;
			const e = null != document.head ? Array.from(document.head.querySelectorAll("meta")) : [];
			for(const t of e)
				if("viewport" === t.name) return !0;
			return !1
		})();
		return t || console.warn('No <meta name="viewport"> detected; <model-viewer> will cap pixel density at 1.'), () => t ? window.devicePixelRatio : 1
	})(),
	qo = (() => {
		const t = new RegExp("[?&]model-viewer-debug-mode(&|$)");
		return() => self.ModelViewerElement && self.ModelViewerElement.debugMode || self.location && self.location.search && self.location.search.match(t)
	})();
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var jo = function(t, e, i, n) {
	for(var s, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n, o = t.length - 1; o >= 0; o--)(s = t[o]) && (a = (r < 3 ? s(a) : r > 3 ? s(e, i, a) : s(e, i)) || a);
	return r > 3 && a && Object.defineProperty(e, i, a), a
};
const Yo = Symbol("currentEnvironmentMap"),
	Jo = Symbol("currentBackground"),
	Xo = Symbol("updateEnvironment"),
	Ko = Symbol("cancelEnvironmentUpdate");
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $o = ro `
<style>
:host {
  display: block;
  position: relative;
  contain: strict;
  width: 300px;
  height: 150px;
}

/* NOTE: This rule set is our integration surface area with the
 * :focus-visible polyfill.
 *
 * @see https://github.com/WICG/focus-visible/pull/196 */
:host([data-js-focus-visible]:focus:not(.focus-visible)),
:host([data-js-focus-visible]) :focus:not(.focus-visible) {
  outline: none;
}

.container {
  position: relative;
  overflow: hidden;
}

.userInput {
  width: 100%;
  height: 100%;
  display: none;
  position: relative;
}

canvas {
  position: absolute;
  display: none;
  pointer-events: none;
  /* NOTE(cdata): Chrome 76 and below apparently have a bug
   * that causes our canvas not to display pixels unless it is
   * on its own render layer
   * @see https://github.com/google/model-viewer/pull/755#issuecomment-536597893
   */
  transform: translateZ(0);
}

.show {
  display: block;
}

/* Adapted from HTML5 Boilerplate
 *
 * @see https://github.com/h5bp/html5-boilerplate/blob/ceb4620c78fc82e13534fc44202a3f168754873f/dist/css/main.css#L122-L133 */
.screen-reader-only {
  border: 0;
  left: 0;
  top: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  pointer-events: none;
}

.slot {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slot > * {
  pointer-events: initial;
}

.annotation-wrapper ::slotted(*) {
  opacity: var(--max-hotspot-opacity, 1);
  transition: opacity 0.3s;
}

.pointer-tumbling .annotation-wrapper ::slotted(*) {
  pointer-events: none;
}

.annotation-wrapper ::slotted(*) {
  pointer-events: initial;
}

.annotation-wrapper.hide ::slotted(*) {
  opacity: var(--min-hotspot-opacity, 0.25);
}

.slot.poster {
  display: none;
  background-color: inherit;
}

.slot.poster.show {
  display: inherit;
}

.slot.poster > * {
  pointer-events: initial;
}

.slot.poster:not(.show) > * {
  pointer-events: none;
}

#default-poster {
  width: 100%;
  height: 100%;
  /* The default poster is a <button> so we need to set display
   * to prevent it from being affected by text-align: */
  display: block;
  position: absolute;
  border: none;
  padding: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff0;
}

#default-progress-bar {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

#default-progress-bar > .bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--progress-bar-height, 5px);
  background-color: var(--progress-bar-color, rgba(0, 0, 0, 0.4));
  transition: transform 0.09s;
  transform-origin: top left;
  transform: scaleX(0);
  overflow: hidden;
}

#default-progress-bar > .bar.hide {
  transition: opacity 0.3s 1s;
  opacity: 0;
}

.centered {
  align-items: center;
  justify-content: center;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.slot.interaction-prompt {
  display: var(--interaction-prompt-display, flex);
  overflow: hidden;
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.3s;
}

.slot.interaction-prompt.visible {
  opacity: 1;
}

.animated-container {
  will-change: transform, opacity;
  opacity: 0;
  transition: opacity 0.3s;
}

.slot.interaction-prompt > * {
  pointer-events: none;
}

.slot.ar-button {
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  display: var(--ar-button-display, block);
}

.slot.ar-button:not(.enabled) {
  display: none;
}

.fab {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
}

.fab > * {
  opacity: 0.87;
}

#default-ar-button {
  position: absolute;
  bottom: 16px;
  right: 16px;
  transform: scale(var(--ar-button-scale, 1));
  transform-origin: bottom right;
}

.slot.pan-target {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.3s;
}

#default-pan-target {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  border: 1px solid white;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.8);
}

.slot.default {
  pointer-events: none;
}

.slot.progress-bar {
  pointer-events: none;
}

.slot.exit-webxr-ar-button {
  pointer-events: none;
}

.slot.exit-webxr-ar-button:not(.enabled) {
  display: none;
}

#default-exit-webxr-ar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: env(safe-area-inset-top, 16px);
  right: 16px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
}

#default-exit-webxr-ar-button > svg {
  fill: #fff;
}
</style>
<div class="container">
  <div class="userInput" tabindex="0" role="img"
      aria-label="3D model">
      <div class="slot canvas">
        <slot name="canvas">
          <canvas></canvas>
        </slot>
      </div>

  </div>

  <!-- NOTE(cdata): We need to wrap slots because browsers without ShadowDOM
        will have their <slot> elements removed by ShadyCSS -->
  <div class="slot poster">
    <slot name="poster">
      <button type="button" id="default-poster" aria-hidden="true" aria-label="Loading 3D model"></button>
    </slot>
  </div>

  <div class="slot ar-button">
    <slot name="ar-button">
      <a id="default-ar-button" part="default-ar-button" class="fab"
          tabindex="2"
          aria-label="View in your space">
        ${ro` < svg version = "1.1"
id = "view_x5F_in_x5F_AR_x5F_icon"
xmlns = "http://www.w3.org/2000/svg"
xmlns: xlink = "http://www.w3.org/1999/xlink"
x = "0px"
y = "0px"
width = "24px"
height = "24px"
viewBox = "0 0 24 24"
enable - background = "new 0 0 24 24"
xml: space = "preserve" > < rect id = "Bounding_Box"
x = "0"
y = "0"
fill = "none"
width = "24"
height = "24" / > < g id = "Art_layer" > < path d = "M3,4c0-0.55,0.45-1,1-1h2V1H4C2.35,1,1,2.35,1,4v2h2V4z" / > < path d = "M20,3c0.55,0,1,0.45,1,1v2h2V4c0-1.65-1.35-3-3-3h-2v2H20z" / > < path d = "M4,21c-0.55,0-1-0.45-1-1v-2H1v2c0,1.65,1.35,3,3,3h2v-2H4z" / > < path d = "M20,21c0.55,0,1-0.45,1-1v-2h2v2c0,1.65-1.35,3-3,3h-2v-2H20z" / > < g > < path d = "M18.25,7.6l-5.5-3.18c-0.46-0.27-1.04-0.27-1.5,0L5.75,7.6C5.29,7.87,5,8.36,5,8.9v6.35c0,0.54,0.29,1.03,0.75,1.3
l5.5, 3.18 c0.46, 0.27, 1.04, 0.27, 1.5, 0 l5.5 - 3.18 c0.46 - 0.27, 0.75 - 0.76, 0.75 - 1.3 V8.9 C19, 8.36, 18.71, 7.87, 18.25, 7.6 z M7, 14.96 v - 4.62
l4, 2.32 v4.61 L7, 14.96 z M12, 10.93 L8, 8.61 l4 - 2.31 l4, 2.31 L12, 10.93 z M13, 17.27 v - 4.61 l4 - 2.32 v4.62 L13, 17.27 z "/> < /g> < /g> < /svg>`} < /a> < /slot> < /div> < div class = "slot pan-target" > < slot name = "pan-target" > < div id = "default-pan-target" > < /div> < /slot> < /div> < div class = "slot interaction-prompt cover centered" > < div id = "prompt"
class = "animated-container" > < slot name = "interaction-prompt"
aria - hidden = "true" > $ {
	ro `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="36">
    <defs>
        <path id="A" d="M.001.232h24.997V36H.001z" />
    </defs>
    <g transform="translate(-11 -4)" fill="none" fill-rule="evenodd">
        <path fill-opacity="0" fill="#fff" d="M0 0h44v44H0z" />
        <g transform="translate(11 3)">
            <path d="M8.733 11.165c.04-1.108.766-2.027 1.743-2.307a2.54 2.54 0 0 1 .628-.089c.16 0 .314.017.463.044 1.088.2 1.9 1.092 1.9 2.16v8.88h1.26c2.943-1.39 5-4.45 5-8.025a9.01 9.01 0 0 0-1.9-5.56l-.43-.5c-.765-.838-1.683-1.522-2.712-2-1.057-.49-2.226-.77-3.46-.77s-2.4.278-3.46.77c-1.03.478-1.947 1.162-2.71 2l-.43.5a9.01 9.01 0 0 0-1.9 5.56 9.04 9.04 0 0 0 .094 1.305c.03.21.088.41.13.617l.136.624c.083.286.196.56.305.832l.124.333a8.78 8.78 0 0 0 .509.953l.065.122a8.69 8.69 0 0 0 3.521 3.191l1.11.537v-9.178z" fill-opacity=".5" fill="#e4e4e4" />
            <path d="M22.94 26.218l-2.76 7.74c-.172.485-.676.8-1.253.8H12.24c-1.606 0-3.092-.68-3.98-1.82-1.592-2.048-3.647-3.822-6.11-5.27-.095-.055-.15-.137-.152-.23-.004-.1.046-.196.193-.297.56-.393 1.234-.6 1.926-.6a3.43 3.43 0 0 1 .691.069l4.922.994V10.972c0-.663.615-1.203 1.37-1.203s1.373.54 1.373 1.203v9.882h2.953c.273 0 .533.073.757.21l6.257 3.874c.027.017.045.042.07.06.41.296.586.77.426 1.22M4.1 16.614c-.024-.04-.042-.083-.065-.122a8.69 8.69 0 0 1-.509-.953c-.048-.107-.08-.223-.124-.333l-.305-.832c-.058-.202-.09-.416-.136-.624l-.13-.617a9.03 9.03 0 0 1-.094-1.305c0-2.107.714-4.04 1.9-5.56l.43-.5c.764-.84 1.682-1.523 2.71-2 1.058-.49 2.226-.77 3.46-.77s2.402.28 3.46.77c1.03.477 1.947 1.16 2.712 2l.428.5a9 9 0 0 1 1.901 5.559c0 3.577-2.056 6.636-5 8.026h-1.26v-8.882c0-1.067-.822-1.96-1.9-2.16-.15-.028-.304-.044-.463-.044-.22 0-.427.037-.628.09-.977.28-1.703 1.198-1.743 2.306v9.178l-1.11-.537C6.18 19.098 4.96 18 4.1 16.614M22.97 24.09l-6.256-3.874c-.102-.063-.218-.098-.33-.144 2.683-1.8 4.354-4.855 4.354-8.243 0-.486-.037-.964-.104-1.43a9.97 9.97 0 0 0-1.57-4.128l-.295-.408-.066-.092a10.05 10.05 0 0 0-.949-1.078c-.342-.334-.708-.643-1.094-.922-1.155-.834-2.492-1.412-3.94-1.65l-.732-.088-.748-.03a9.29 9.29 0 0 0-1.482.119c-1.447.238-2.786.816-3.94 1.65a9.33 9.33 0 0 0-.813.686 9.59 9.59 0 0 0-.845.877l-.385.437-.36.5-.288.468-.418.778-.04.09c-.593 1.28-.93 2.71-.93 4.222 0 3.832 2.182 7.342 5.56 8.938l1.437.68v4.946L5 25.64a4.44 4.44 0 0 0-.888-.086c-.017 0-.034.003-.05.003-.252.004-.503.033-.75.08a5.08 5.08 0 0 0-.237.056c-.193.046-.382.107-.568.18-.075.03-.15.057-.225.1-.25.114-.494.244-.723.405a1.31 1.31 0 0 0-.566 1.122 1.28 1.28 0 0 0 .645 1.051C4 29.925 5.96 31.614 7.473 33.563a5.06 5.06 0 0 0 .434.491c1.086 1.082 2.656 1.713 4.326 1.715h6.697c.748-.001 1.43-.333 1.858-.872.142-.18.256-.38.336-.602l2.757-7.74c.094-.26.13-.53.112-.794s-.088-.52-.203-.76a2.19 2.19 0 0 0-.821-.91" fill-opacity=".6" fill="#000" />
            <path d="M22.444 24.94l-6.257-3.874a1.45 1.45 0 0 0-.757-.211h-2.953v-9.88c0-.663-.616-1.203-1.373-1.203s-1.37.54-1.37 1.203v16.643l-4.922-.994a3.44 3.44 0 0 0-.692-.069 3.35 3.35 0 0 0-1.925.598c-.147.102-.198.198-.194.298.004.094.058.176.153.23 2.462 1.448 4.517 3.22 6.11 5.27.887 1.14 2.373 1.82 3.98 1.82h6.686c.577 0 1.08-.326 1.253-.8l2.76-7.74c.16-.448-.017-.923-.426-1.22-.025-.02-.043-.043-.07-.06z" fill="#fff" />
            <g transform="translate(0 .769)">
                <mask id="B" fill="#fff">
                    <use xlink:href="#A" />
                </mask>
                <path d="M23.993 24.992a1.96 1.96 0 0 1-.111.794l-2.758 7.74c-.08.22-.194.423-.336.602-.427.54-1.11.87-1.857.872h-6.698c-1.67-.002-3.24-.633-4.326-1.715-.154-.154-.3-.318-.434-.49C5.96 30.846 4 29.157 1.646 27.773c-.385-.225-.626-.618-.645-1.05a1.31 1.31 0 0 1 .566-1.122 4.56 4.56 0 0 1 .723-.405l.225-.1a4.3 4.3 0 0 1 .568-.18l.237-.056c.248-.046.5-.075.75-.08.018 0 .034-.003.05-.003.303-.001.597.027.89.086l3.722.752V20.68l-1.436-.68c-3.377-1.596-5.56-5.106-5.56-8.938 0-1.51.336-2.94.93-4.222.015-.03.025-.06.04-.09.127-.267.268-.525.418-.778.093-.16.186-.316.288-.468.063-.095.133-.186.2-.277L3.773 5c.118-.155.26-.29.385-.437.266-.3.544-.604.845-.877a9.33 9.33 0 0 1 .813-.686C6.97 2.167 8.31 1.59 9.757 1.35a9.27 9.27 0 0 1 1.481-.119 8.82 8.82 0 0 1 .748.031c.247.02.49.05.733.088 1.448.238 2.786.816 3.94 1.65.387.28.752.588 1.094.922a9.94 9.94 0 0 1 .949 1.078l.066.092c.102.133.203.268.295.408a9.97 9.97 0 0 1 1.571 4.128c.066.467.103.945.103 1.43 0 3.388-1.67 6.453-4.353 8.243.11.046.227.08.33.144l6.256 3.874c.37.23.645.55.82.9.115.24.185.498.203.76m.697-1.195c-.265-.55-.677-1.007-1.194-1.326l-5.323-3.297c2.255-2.037 3.564-4.97 3.564-8.114 0-2.19-.637-4.304-1.84-6.114-.126-.188-.26-.37-.4-.552-.645-.848-1.402-1.6-2.252-2.204C15.472.91 13.393.232 11.238.232A10.21 10.21 0 0 0 5.23 2.19c-.848.614-1.606 1.356-2.253 2.205-.136.18-.272.363-.398.55C1.374 6.756.737 8.87.737 11.06c0 4.218 2.407 8.08 6.133 9.842l.863.41v3.092l-2.525-.51c-.356-.07-.717-.106-1.076-.106a5.45 5.45 0 0 0-3.14.996c-.653.46-1.022 1.202-.99 1.983a2.28 2.28 0 0 0 1.138 1.872c2.24 1.318 4.106 2.923 5.543 4.772 1.26 1.62 3.333 2.59 5.55 2.592h6.698c1.42-.001 2.68-.86 3.134-2.138l2.76-7.74c.272-.757.224-1.584-.134-2.325" fill-opacity=".05" fill="#000" mask="url(#B)" />
            </g>
        </g>
    </g>
</svg>`
		/* @license
		 * Copyright 2019 Google LLC. All Rights Reserved.
		 * Licensed under the Apache License, Version 2.0 (the 'License');
		 * you may not use this file except in compliance with the License.
		 * You may obtain a copy of the License at
		 *
		 *     http://www.apache.org/licenses/LICENSE-2.0
		 *
		 * Unless required by applicable law or agreed to in writing, software
		 * distributed under the License is distributed on an 'AS IS' BASIS,
		 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		 * See the License for the specific language governing permissions and
		 * limitations under the License.
		 */
} < /slot> < /div> < /div> < div id = "finger0"
class = "animated-container cover" > < slot name = "finger0"
aria - hidden = "true" > < /slot> < /div> < div id = "finger1"
class = "animated-container cover" > < slot name = "finger1"
aria - hidden = "true" > < /slot> < /div> < div class = "slot default" > < slot > < /slot> < div class = "slot progress-bar" > < slot name = "progress-bar" > < div id = "default-progress-bar"
aria - hidden = "true" > < div class = "bar"
part = "default-progress-bar" > < /div> < /div> < /slot> < /div> < div class = "slot exit-webxr-ar-button" > < slot name = "exit-webxr-ar-button" > < a id = "default-exit-webxr-ar-button"
part = "default-exit-webxr-ar-button"
tabindex = "3"
aria - label = "Exit AR"
aria - hidden = "true" > $ {
	ro `
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
    <!-- NOTE(cdata): This SVG filter is a stop-gap until we can implement
         support for dynamic re-coloring of UI components -->
    <defs>
      <filter id="drop-shadow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
        <feOffset dx="0" dy="0" result="offsetblur"/>
        <feFlood flood-color="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path filter="url(#drop-shadow)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`
		/* @license
		 * Copyright 2019 Google LLC. All Rights Reserved.
		 * Licensed under the Apache License, Version 2.0 (the 'License');
		 * you may not use this file except in compliance with the License.
		 * You may obtain a copy of the License at
		 *
		 *     http://www.apache.org/licenses/LICENSE-2.0
		 *
		 * Unless required by applicable law or agreed to in writing, software
		 * distributed under the License is distributed on an 'AS IS' BASIS,
		 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		 * See the License for the specific language governing permissions and
		 * limitations under the License.
		 */
} < /a> < /slot> < /div> < /div> < /div> < div class = "screen-reader-only"
role = "region"
aria - label = "Live announcements" > < span id = "status"
role = "status" > < /span> < /div>`,Zo=new WeakMap;function tl(){let t,e;function i(t,e,i,n,s,r){const a=r.num_components(),o=i.num_points()*a,l=o*s.BYTES_PER_ELEMENT,c=function(t,e){switch(e){case Float32Array:return t.DT_FLOAT32;case Int8Array:return t.DT_INT8;case Int16Array:return t.DT_INT16;case Int32Array:return t.DT_INT32;case Uint8Array:return t.DT_UINT8;case Uint16Array:return t.DT_UINT16;case Uint32Array:return t.DT_UINT32}}(t,s),h=t._malloc(l);e.GetAttributeDataArrayForAllPoints(i,r,c,l,h);const u=new s(t.HEAPF32.buffer,h,o).slice();return t._free(h),{name:n,array:u,itemSize:a}}onmessage=function(n){const s=n.data;switch(s.type){case"init":t=s.decoderConfig,e=new Promise((function(e){t.onModuleLoaded=function(t){e({draco:t})},DracoDecoderModule(t)}));break;case"decode":const n=s.buffer,r=s.taskConfig;e.then((t=>{const e=t.draco,a=new e.Decoder,o=new e.DecoderBuffer;o.Init(new Int8Array(n),n.byteLength);try{const t=function(t,e,n,s){const r=s.attributeIDs,a=s.attributeTypes;let o,l;const c=e.GetEncodedGeometryType(n);if(c===t.TRIANGULAR_MESH)o=new t.Mesh,l=e.DecodeBufferToMesh(n,o);else{if(c!==t.POINT_CLOUD)throw new Error("THREE.DRACOLoader: Unexpected geometry type.");o=new t.PointCloud,l=e.DecodeBufferToPointCloud(n,o)}if(!l.ok()||0===o.ptr)throw new Error("THREE.DRACOLoader: Decoding failed: "+l.error_msg());const h={index:null,attributes:[]};for(const n in r){const l=self[a[n]];let c,u;if(s.useUniqueIDs)u=r[n],c=e.GetAttributeByUniqueId(o,u);else{if(u=e.GetAttributeId(o,t[r[n]]),-1===u)continue;c=e.GetAttribute(o,u)}h.attributes.push(i(t,e,o,n,l,c))}c===t.TRIANGULAR_MESH&&(h.index=function(t,e,i){const n=3*i.num_faces(),s=4*n,r=t._malloc(s);e.GetTrianglesUInt32Array(i,s,r);const a=new Uint32Array(t.HEAPF32.buffer,r,n).slice();return t._free(r),{array:a,itemSize:1}}(t,e,o));return t.destroy(o),h}(e,a,o,r),n=t.attributes.map((t=>t.array.buffer));t.index&&n.push(t.index.array.buffer),self.postMessage({type:"decode",id:s.id,geometry:t},n)}catch(t){console.error(t),self.postMessage({type:"error",id:s.id,error:t.message})}finally{e.destroy(o),e.destroy(a)}}))}}}class el extends Or{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register((function(t){return new ol(t)})),this.register((function(t){return new pl(t)})),this.register((function(t){return new gl(t)})),this.register((function(t){return new cl(t)})),this.register((function(t){return new hl(t)})),this.register((function(t){return new ul(t)})),this.register((function(t){return new dl(t)})),this.register((function(t){return new al(t)})),this.register((function(t){return new Al(t)})),this.register((function(t){return new ll(t)})),this.register((function(t){return new sl(t)})),this.register((function(t){return new ml(t)}))}load(t,e,i,n){const s=this;let r;r=""!==this.resourcePath?this.resourcePath:""!==this.path?this.path:ca.extractUrlBase(t),this.manager.itemStart(t);const a=function(e){n?n(e):console.error(e),s.manager.itemError(t),s.manager.itemEnd(t)},o=new zr(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,(function(i){try{s.parse(i,r,(function(i){e(i),s.manager.itemEnd(t)}),a)}catch(t){a(t)}}),i,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return-1===this.pluginCallbacks.indexOf(t)&&this.pluginCallbacks.push(t),this}unregister(t){return-1!==this.pluginCallbacks.indexOf(t)&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,n){let s;const r={},a={};if("string"==typeof t)s=t;else{if(ca.decodeText(new Uint8Array(t,0,4))===fl){try{r[nl.KHR_BINARY_GLTF]=new xl(t)}catch(t){return void(n&&n(t))}s=r[nl.KHR_BINARY_GLTF].content}else s=ca.decodeText(new Uint8Array(t))}const o=JSON.parse(s);if(void 0===o.asset||o.asset.version[0]<2)return void(n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.")));const l=new Zl(o,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let t=0;t<this.pluginCallbacks.length;t++){const e=this.pluginCallbacks[t](l);a[e.name]=e,r[e.name]=!0}if(o.extensionsUsed)for(let t=0;t<o.extensionsUsed.length;++t){const e=o.extensionsUsed[t],i=o.extensionsRequired||[];switch(e){case nl.KHR_MATERIALS_UNLIT:r[e]=new rl;break;case nl.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:r[e]=new bl;break;case nl.KHR_DRACO_MESH_COMPRESSION:r[e]=new _l(o,this.dracoLoader);break;case nl.KHR_TEXTURE_TRANSFORM:r[e]=new El;break;case nl.KHR_MESH_QUANTIZATION:r[e]=new Il;break;default:i.indexOf(e)>=0&&void 0===a[e]&&console.warn('THREE.GLTFLoader: Unknown extension "'+e+'".')}}l.setExtensions(r),l.setPlugins(a),l.parse(i,n)}parseAsync(t,e){const i=this;return new Promise((function(n,s){i.parse(t,e,n,s)}))}}function il(){let t={};return{get:function(e){return t[e]},add:function(e,i){t[e]=i},remove:function(e){delete t[e]},removeAll:function(){t={}}}}const nl={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class sl{constructor(t){this.parser=t,this.name=nl.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let i=0,n=e.length;i<n;i++){const n=e[i];n.extensions&&n.extensions[this.name]&&void 0!==n.extensions[this.name].light&&t._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(t){const e=this.parser,i="light:"+t;let n=e.cache.get(i);if(n)return n;const s=e.json,r=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let a;const o=new D(16777215);void 0!==r.color&&o.fromArray(r.color);const l=void 0!==r.range?r.range:0;switch(r.type){case"directional":a=new aa(o),a.target.position.set(0,0,-1),a.add(a.target);break;case"point":a=new sa(o),a.distance=l;break;case"spot":a=new Zr(o),a.distance=l,r.spot=r.spot||{},r.spot.innerConeAngle=void 0!==r.spot.innerConeAngle?r.spot.innerConeAngle:0,r.spot.outerConeAngle=void 0!==r.spot.outerConeAngle?r.spot.outerConeAngle:Math.PI/
4, a.angle = r.spot.outerConeAngle, a.penumbra = 1 - r.spot.innerConeAngle / r.spot.outerConeAngle, a.target.position.set(0, 0, -1), a.add(a.target);
break;
default: throw new Error("THREE.GLTFLoader: Unexpected light type: " + r.type)
}
return a.position.set(0, 0, 0), a.decay = 2, void 0 !== r.intensity && (a.intensity = r.intensity), a.name = e.createUniqueName(r.name || "light_" + t), n = Promise.resolve(a), e.cache.add(i, n), n
}
createNodeAttachment(t) {
	const e = this,
		i = this.parser,
		n = i.json.nodes[t],
		s = (n.extensions && n.extensions[this.name] || {}).light;
	return void 0 === s ? null : this._loadLight(s).then((function(t) {
		return i._getNodeRef(e.cache, s, t)
	}))
}
}
class rl {
	constructor() {
		this.name = nl.KHR_MATERIALS_UNLIT
	}
	getMaterialType() {
		return ae
	}
	extendParams(t, e, i) {
		const n = [];
		t.color = new D(1, 1, 1), t.opacity = 1;
		const s = e.pbrMetallicRoughness;
		if(s) {
			if(Array.isArray(s.baseColorFactor)) {
				const e = s.baseColorFactor;
				t.color.fromArray(e), t.opacity = e[3]
			}
			void 0 !== s.baseColorTexture && n.push(i.assignTexture(t, "map", s.baseColorTexture, 3001))
		}
		return Promise.all(n)
	}
}
class al {
	constructor(t) {
		this.parser = t, this.name = nl.KHR_MATERIALS_EMISSIVE_STRENGTH
	}
	extendMaterialParams(t, e) {
		const i = this.parser.json.materials[t];
		if(!i.extensions || !i.extensions[this.name]) return Promise.resolve();
		const n = i.extensions[this.name].emissiveStrength;
		return void 0 !== n && (e.emissiveIntensity = n), Promise.resolve()
	}
}
class ol {
	constructor(t) {
		this.parser = t, this.name = nl.KHR_MATERIALS_CLEARCOAT
	}
	getMaterialType(t) {
		const e = this.parser.json.materials[t];
		return e.extensions && e.extensions[this.name] ? mr : null
	}
	extendMaterialParams(t, e) {
		const i = this.parser,
			n = i.json.materials[t];
		if(!n.extensions || !n.extensions[this.name]) return Promise.resolve();
		const s = [],
			r = n.extensions[this.name];
		if(void 0 !== r.clearcoatFactor && (e.clearcoat = r.clearcoatFactor), void 0 !== r.clearcoatTexture && s.push(i.assignTexture(e, "clearcoatMap", r.clearcoatTexture)), void 0 !== r.clearcoatRoughnessFactor && (e.clearcoatRoughness = r.clearcoatRoughnessFactor), void 0 !== r.clearcoatRoughnessTexture && s.push(i.assignTexture(e, "clearcoatRoughnessMap", r.clearcoatRoughnessTexture)), void 0 !== r.clearcoatNormalTexture && (s.push(i.assignTexture(e, "clearcoatNormalMap", r.clearcoatNormalTexture)), void 0 !== r.clearcoatNormalTexture.scale)) {
			const t = r.clearcoatNormalTexture.scale;
			e.clearcoatNormalScale = new v(t, t)
		}
		return Promise.all(s)
	}
}
class ll {
	constructor(t) {
		this.parser = t, this.name = nl.KHR_MATERIALS_IRIDESCENCE
	}
	getMaterialType(t) {
		const e = this.parser.json.materials[t];
		return e.extensions && e.extensions[this.name] ? mr : null
	}
	extendMaterialParams(t, e) {
		const i = this.parser,
			n = i.json.materials[t];
		if(!n.extensions || !n.extensions[this.name]) return Promise.resolve();
		const s = [],
			r = n.extensions[this.name];
		return void 0 !== r.iridescenceFactor && (e.iridescence = r.iridescenceFactor), void 0 !== r.iridescenceTexture && s.push(i.assignTexture(e, "iridescenceMap", r.iridescenceTexture)), void 0 !== r.iridescenceIor && (e.iridescenceIOR = r.iridescenceIor), void 0 === e.iridescenceThicknessRange && (e.iridescenceThicknessRange = [100, 400]), void 0 !== r.iridescenceThicknessMinimum && (e.iridescenceThicknessRange[0] = r.iridescenceThicknessMinimum), void 0 !== r.iridescenceThicknessMaximum && (e.iridescenceThicknessRange[1] = r.iridescenceThicknessMaximum), void 0 !== r.iridescenceThicknessTexture && s.push(i.assignTexture(e, "iridescenceThicknessMap", r.iridescenceThicknessTexture)), Promise.all(s)
	}
}
class cl {
	constructor(t) {
		this.parser = t, this.name = nl.KHR_MATERIALS_SHEEN
	}
	getMaterialType(t) {
		const e = this.parser.json.materials[t];
		return e.extensions && e.extensions[this.name] ? mr : null
	}
	extendMaterialParams(t, e) {
		const i = this.parser,
			n = i.json.materials[t];
		if(!n.extensions || !n.extensions[this.name]) return Promise.resolve();
		const s = [];
		e.sheenColor = new D(0, 0, 0), e.sheenRoughness = 0, e.sheen = 1;
		const r = n.extensions[this.name];
		return void 0 !== r.sheenColorFactor && e.sheenColor.fromArray(r.sheenColorFactor), void 0 !== r.sheenRoughnessFactor && (e.sheenRoughness = r.sheenRoughnessFactor), void 0 !== r.sheenColorTexture && s.push(i.assignTexture(e, "sheenColorMap", r.sheenColorTexture, 3001)), void 0 !== r.sheenRoughnessTexture && s.push(i.assignTexture(e, "sheenRoughnessMap", r.sheenRoughnessTexture)), Promise.all(s)
	}
}
class hl {
	constructor(t) {
		this.parser = t, this.name = nl.KHR_MATERIALS_TRANSMISSION
	}
	getMaterialType(t) {
		const e = this.parser.json.materials[t];
		return e.extensions && e.extensions[this.name] ? mr : null
	}
	extendMaterialParams(t, e) {
		const i = this.parser,
			n = i.json.materials[t];
		if(!n.extensions || !n.extensions[this.name]) return Promise.resolve();
		const s = [],
			r = n.extensions[this.name];
		return void 0 !== r.transmissionFactor && (e.transmission = r.transmissionFactor), void 0 !== r.transmissionTexture && s.push(i.assignTexture(e, "transmissionMap", r.transmissionTexture)), Promise.all(s)
	}
}
class ul {
	constructor(t) {
		this.parser = t, this.name = nl.KHR_MATERIALS_VOLUME
	}
	getMaterialType(t) {
		const e = this.parser.json.materials[t];
		return e.extensions && e.extensions[this.name] ? mr : null
	}
	extendMaterialParams(t, e) {
		const i = this.parser,
			n = i.json.materials[t];
		if(!n.extensions || !n.extensions[this.name]) return Promise.resolve();
		const s = [],
			r = n.extensions[this.name];
		e.thickness = void 0 !== r.thicknessFactor ? r.thicknessFactor : 0, void 0 !== r.thicknessTexture && s.push(i.assignTexture(e, "thicknessMap", r.thicknessTexture)), e.attenuationDistance = r.attenuationDistance || 0;
		const a = r.attenuationColor || [1, 1, 1];
		return e.attenuationColor = new D(a[0], a[1], a[2]), Promise.all(s)
	}
}
class dl {
	constructor(t) {
		this.parser = t, this.name = nl.KHR_MATERIALS_IOR
	}
	getMaterialType(t) {
		const e = this.parser.json.materials[t];
		return e.extensions && e.extensions[this.name] ? mr : null
	}
	extendMaterialParams(t, e) {
		const i = this.parser.json.materials[t];
		if(!i.extensions || !i.extensions[this.name]) return Promise.resolve();
		const n = i.extensions[this.name];
		return e.ior = void 0 !== n.ior ? n.ior : 1.5, Promise.resolve()
	}
}
class Al {
	constructor(t) {
		this.parser = t, this.name = nl.KHR_MATERIALS_SPECULAR
	}
	getMaterialType(t) {
		const e = this.parser.json.materials[t];
		return e.extensions && e.extensions[this.name] ? mr : null
	}
	extendMaterialParams(t, e) {
		const i = this.parser,
			n = i.json.materials[t];
		if(!n.extensions || !n.extensions[this.name]) return Promise.resolve();
		const s = [],
			r = n.extensions[this.name];
		e.specularIntensity = void 0 !== r.specularFactor ? r.specularFactor : 1, void 0 !== r.specularTexture && s.push(i.assignTexture(e, "specularIntensityMap", r.specularTexture));
		const a = r.specularColorFactor || [1, 1, 1];
		return e.specularColor = new D(a[0], a[1], a[2]), void 0 !== r.specularColorTexture && s.push(i.assignTexture(e, "specularColorMap", r.specularColorTexture, 3001)), Promise.all(s)
	}
}
class pl {
	constructor(t) {
		this.parser = t, this.name = nl.KHR_TEXTURE_BASISU
	}
	loadTexture(t) {
		const e = this.parser,
			i = e.json,
			n = i.textures[t];
		if(!n.extensions || !n.extensions[this.name]) return null;
		const s = n.extensions[this.name],
			r = e.options.ktx2Loader;
		if(!r) {
			if(i.extensionsRequired && i.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
			return null
		}
		return e.loadTextureImage(t, s.source, r)
	}
}
class gl {
	constructor(t) {
		this.parser = t, this.name = nl.EXT_TEXTURE_WEBP, this.isSupported = null
	}
	loadTexture(t) {
		const e = this.name,
			i = this.parser,
			n = i.json,
			s = n.textures[t];
		if(!s.extensions || !s.extensions[e]) return null;
		const r = s.extensions[e],
			a = n.images[r.source];
		let o = i.textureLoader;
		if(a.uri) {
			const t = i.options.manager.getHandler(a.uri);
			null !== t && (o = t)
		}
		return this.detectSupport().then((function(s) {
			if(s) return i.loadTextureImage(t, r.source, o);
			if(n.extensionsRequired && n.extensionsRequired.indexOf(e) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
			return i.loadTexture(t)
		}))
	}
	detectSupport() {
		return this.isSupported || (this.isSupported = new Promise((function(t) {
			const e = new Image;
			e.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", e.onload = e.onerror = function() {
				t(1 === e.height)
			}
		}))), this.isSupported
	}
}
class ml {
	constructor(t) {
		this.name = nl.EXT_MESHOPT_COMPRESSION, this.parser = t
	}
	loadBufferView(t) {
		const e = this.parser.json,
			i = e.bufferViews[t];
		if(i.extensions && i.extensions[this.name]) {
			const t = i.extensions[this.name],
				n = this.parser.getDependency("buffer", t.buffer),
				s = this.parser.options.meshoptDecoder;
			if(!s || !s.supported) {
				if(e.extensionsRequired && e.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
				return null
			}
			return n.then((function(e) {
				const i = t.byteOffset || 0,
					n = t.byteLength || 0,
					r = t.count,
					a = t.byteStride,
					o = new Uint8Array(e, i, n);
				return s.decodeGltfBufferAsync ? s.decodeGltfBufferAsync(r, a, o, t.mode, t.filter).then((function(t) {
					return t.buffer
				})) : s.ready.then((function() {
					const e = new ArrayBuffer(r * a);
					return s.decodeGltfBuffer(new Uint8Array(e), r, a, o, t.mode, t.filter), e
				}))
			}))
		}
		return null
	}
}
const fl = "glTF",
	vl = 1313821514,
	yl = 5130562;
class xl {
	constructor(t) {
		this.name = nl.KHR_BINARY_GLTF, this.content = null, this.body = null;
		const e = new DataView(t, 0, 12);
		if(this.header = {
				magic: ca.decodeText(new Uint8Array(t.slice(0, 4))),
				version: e.getUint32(4, !0),
				length: e.getUint32(8, !0)
			}, this.header.magic !== fl) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
		if(this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
		const i = this.header.length - 12,
			n = new DataView(t, 12);
		let s = 0;
		for(; s < i;) {
			const e = n.getUint32(s, !0);
			s += 4;
			const i = n.getUint32(s, !0);
			if(s += 4, i === vl) {
				const i = new Uint8Array(t, 12 + s, e);
				this.content = ca.decodeText(i)
			} else if(i === yl) {
				const i = 12 + s;
				this.body = t.slice(i, i + e)
			}
			s += e
		}
		if(null === this.content) throw new Error("THREE.GLTFLoader: JSON content not found.")
	}
}
class _l {
	constructor(t, e) {
		if(!e) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
		this.name = nl.KHR_DRACO_MESH_COMPRESSION, this.json = t, this.dracoLoader = e, this.dracoLoader.preload()
	}
	decodePrimitive(t, e) {
		const i = this.json,
			n = this.dracoLoader,
			s = t.extensions[this.name].bufferView,
			r = t.extensions[this.name].attributes,
			a = {},
			o = {},
			l = {};
		for(const t in r) {
			const e = Ol[t] || t.toLowerCase();
			a[e] = r[t]
		}
		for(const e in t.attributes) {
			const n = Ol[e] || e.toLowerCase();
			if(void 0 !== r[e]) {
				const s = i.accessors[t.attributes[e]],
					r = Fl[s.componentType];
				l[n] = r.name, o[n] = !0 === s.normalized
			}
		}
		return e.getDependency("bufferView", s).then((function(t) {
			return new Promise((function(e) {
				n.decodeDracoFile(t, (function(t) {
					for(const e in t.attributes) {
						const i = t.attributes[e],
							n = o[e];
						void 0 !== n && (i.normalized = n)
					}
					e(t)
				}), a, l)
			}))
		}))
	}
}
class El {
	constructor() {
		this.name = nl.KHR_TEXTURE_TRANSFORM
	}
	extendTexture(t, e) {
		return void 0 !== e.texCoord && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), void 0 === e.offset && void 0 === e.rotation && void 0 === e.scale || (t = t.clone(), void 0 !== e.offset && t.offset.fromArray(e.offset), void 0 !== e.rotation && (t.rotation = e.rotation), void 0 !== e.scale && t.repeat.fromArray(e.scale), t.needsUpdate = !0), t
	}
}
class wl extends gr {
	constructor(t) {
		super(), this.isGLTFSpecularGlossinessMaterial = !0;
		const e = ["#ifdef USE_SPECULARMAP", "\tuniform sampler2D specularMap;", "#endif"].join("\n"),
			i = ["#ifdef USE_GLOSSINESSMAP", "\tuniform sampler2D glossinessMap;", "#endif"].join("\n"),
			n = ["vec3 specularFactor = specular;", "#ifdef USE_SPECULARMAP", "\tvec4 texelSpecular = texture2D( specularMap, vUv );", "\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tspecularFactor *= texelSpecular.rgb;", "#endif"].join("\n"),
			s = ["float glossinessFactor = glossiness;", "#ifdef USE_GLOSSINESSMAP", "\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );", "\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tglossinessFactor *= texelGlossiness.a;", "#endif"].join("\n"),
			r = ["PhysicalMaterial material;", "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );", "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );", "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );", "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.", "material.roughness += geometryRoughness;", "material.roughness = min( material.roughness, 1.0 );", "material.specularColor = specularFactor;"].join("\n"),
			a = {
				specular: {
					value: (new D).setHex(16777215)
				},
				glossiness: {
					value: 1
				},
				specularMap: {
					value: null
				},
				glossinessMap: {
					value: null
				}
			};
		this._extraUniforms = a, this.onBeforeCompile = function(t) {
			for(const e in a) t.uniforms[e] = a[e];
			t.fragmentShader = t.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", e).replace("#include <metalnessmap_pars_fragment>", i).replace("#include <roughnessmap_fragment>", n).replace("#include <metalnessmap_fragment>", s).replace("#include <lights_physical_fragment>", r)
		}, Object.defineProperties(this, {
			specular: {
				get: function() {
					return a.specular.value
				},
				set: function(t) {
					a.specular.value = t
				}
			},
			specularMap: {
				get: function() {
					return a.specularMap.value
				},
				set: function(t) {
					a.specularMap.value = t, t ? this.defines.USE_SPECULARMAP = "" : delete this.defines.USE_SPECULARMAP
				}
			},
			glossiness: {
				get: function() {
					return a.glossiness.value
				},
				set: function(t) {
					a.glossiness.value = t
				}
			},
			glossinessMap: {
				get: function() {
					return a.glossinessMap.value
				},
				set: function(t) {
					a.glossinessMap.value = t, t ? (this.defines.USE_GLOSSINESSMAP = "", this.defines.USE_UV = "") : (delete this.defines.USE_GLOSSINESSMAP, delete this.defines.USE_UV)
				}
			}
		}), delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this.setValues(t)
	}
	copy(t) {
		return super.copy(t), this.specularMap = t.specularMap, this.specular.copy(t.specular), this.glossinessMap = t.glossinessMap, this.glossiness = t.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this
	}
}
class bl {
	constructor() {
		this.name = nl.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS, this.specularGlossinessParams = ["color", "map", "lightMap", "lightMapIntensity", "aoMap", "aoMapIntensity", "emissive", "emissiveIntensity", "emissiveMap", "bumpMap", "bumpScale", "normalMap", "normalMapType", "displacementMap", "displacementScale", "displacementBias", "specularMap", "specular", "glossinessMap", "glossiness", "alphaMap", "envMap", "envMapIntensity"]
	}
	getMaterialType() {
		return wl
	}
	extendParams(t, e, i) {
		const n = e.extensions[this.name];
		t.color = new D(1, 1, 1), t.opacity = 1;
		const s = [];
		if(Array.isArray(n.diffuseFactor)) {
			const e = n.diffuseFactor;
			t.color.fromArray(e), t.opacity = e[3]
		}
		if(void 0 !== n.diffuseTexture && s.push(i.assignTexture(t, "map", n.diffuseTexture, 3001)), t.emissive = new D(0, 0, 0), t.glossiness = void 0 !== n.glossinessFactor ? n.glossinessFactor : 1, t.specular = new D(1, 1, 1), Array.isArray(n.specularFactor) && t.specular.fromArray(n.specularFactor), void 0 !== n.specularGlossinessTexture) {
			const e = n.specularGlossinessTexture;
			s.push(i.assignTexture(t, "glossinessMap", e)), s.push(i.assignTexture(t, "specularMap", e, 3001))
		}
		return Promise.all(s)
	}
	createMaterial(t) {
		const e = new wl(t);
		return e.fog = !0, e.color = t.color, e.map = void 0 === t.map ? null : t.map, e.lightMap = null, e.lightMapIntensity = 1, e.aoMap = void 0 === t.aoMap ? null : t.aoMap, e.aoMapIntensity = 1, e.emissive = t.emissive, e.emissiveIntensity = void 0 === t.emissiveIntensity ? 1 : t.emissiveIntensity, e.emissiveMap = void 0 === t.emissiveMap ? null : t.emissiveMap, e.bumpMap = void 0 === t.bumpMap ? null : t.bumpMap, e.bumpScale = 1, e.normalMap = void 0 === t.normalMap ? null : t.normalMap, e.normalMapType = 0, t.normalScale && (e.normalScale = t.normalScale), e.displacementMap = null, e.displacementScale = 1, e.displacementBias = 0, e.specularMap = void 0 === t.specularMap ? null : t.specularMap, e.specular = t.specular, e.glossinessMap = void 0 === t.glossinessMap ? null : t.glossinessMap, e.glossiness = t.glossiness, e.alphaMap = null, e.envMap = void 0 === t.envMap ? null : t.envMap, e.envMapIntensity = 1, e
	}
}
class Il {
	constructor() {
		this.name = nl.KHR_MESH_QUANTIZATION
	}
}
class Cl extends wr {
	constructor(t, e, i, n) {
		super(t, e, i, n)
	}
	copySampleValue_(t) {
		const e = this.resultBuffer,
			i = this.sampleValues,
			n = this.valueSize,
			s = t * n * 3 + n;
		for(let t = 0; t !== n; t++) e[t] = i[s + t];
		return e
	}
	interpolate_(t, e, i, n) {
		const s = this.resultBuffer,
			r = this.sampleValues,
			a = this.valueSize,
			o = 2 * a,
			l = 3 * a,
			c = n - e,
			h = (i - e) / c,
			u = h * h,
			d = u * h,
			A = t * l,
			p = A - l,
			g = -2 * d + 3 * u,
			m = d - u,
			f = 1 - g,
			v = m - u + h;
		for(let t = 0; t !== a; t++) {
			const e = r[p + t + a],
				i = r[p + t + o] * c,
				n = r[A + t + a],
				l = r[A + t] * c;
			s[t] = f * e + v * i + g * n + m * l
		}
		return s
	}
}
const Sl = new z;
class Ml extends Cl {
	interpolate_(t, e, i, n) {
		const s = super.interpolate_(t, e, i, n);
		return Sl.fromArray(s).normalize().toArray(s), s
	}
}
const Bl = 0,
	Tl = 1,
	Rl = 2,
	Dl = 3,
	Ll = 4,
	Ql = 5,
	Pl = 6,
	Fl = {
		5120: Int8Array,
		5121: Uint8Array,
		5122: Int16Array,
		5123: Uint16Array,
		5125: Uint32Array,
		5126: Float32Array
	},
	Ul = {
		9728: 1003,
		9729: 1006,
		9984: 1004,
		9985: 1007,
		9986: 1005,
		9987: 1008
	},
	Nl = {
		33071: 1001,
		33648: 1002,
		10497: 1e3
	},
	kl = {
		SCALAR: 1,
		VEC2: 2,
		VEC3: 3,
		VEC4: 4,
		MAT2: 4,
		MAT3: 9,
		MAT4: 16
	},
	Ol = {
		POSITION: "position",
		NORMAL: "normal",
		TANGENT: "tangent",
		TEXCOORD_0: "uv",
		TEXCOORD_1: "uv2",
		COLOR_0: "color",
		WEIGHTS_0: "skinWeight",
		JOINTS_0: "skinIndex"
	},
	Gl = {
		scale: "scale",
		translation: "position",
		rotation: "quaternion",
		weights: "morphTargetInfluences"
	},
	Hl = {
		CUBICSPLINE: void 0,
		LINEAR: 2301,
		STEP: 2300
	},
	zl = "OPAQUE",
	Vl = "MASK",
	Wl = "BLEND";

function ql(t) {
	return void 0 === t.DefaultMaterial && (t.DefaultMaterial = new gr({
		color: 16777215,
		emissive: 0,
		metalness: 1,
		roughness: 1,
		transparent: !1,
		depthTest: !0,
		side: 0
	})), t.DefaultMaterial
}

function jl(t, e, i) {
	for(const n in i.extensions) void 0 === t[n] && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = i.extensions[n])
}

function Yl(t, e) {
	void 0 !== e.extras && ("object" == typeof e.extras ? Object.assign(t.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras))
}

function Jl(t, e) {
	if(t.updateMorphTargets(), void 0 !== e.weights)
		for(let i = 0, n = e.weights.length; i < n; i++) t.morphTargetInfluences[i] = e.weights[i];
	if(e.extras && Array.isArray(e.extras.targetNames)) {
		const i = e.extras.targetNames;
		if(t.morphTargetInfluences.length === i.length) {
			t.morphTargetDictionary = {};
			for(let e = 0, n = i.length; e < n; e++) t.morphTargetDictionary[i[e]] = e
		} else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
	}
}

function Xl(t) {
	const e = t.extensions && t.extensions[nl.KHR_DRACO_MESH_COMPRESSION];
	let i;
	return i = e ? "draco:" + e.bufferView + ":" + e.indices + ":" + Kl(e.attributes) : t.indices + ":" + Kl(t.attributes) + ":" + t.mode, i
}

function Kl(t) {
	let e = "";
	const i = Object.keys(t).sort();
	for(let n = 0, s = i.length; n < s; n++) e += i[n] + ":" + t[i[n]] + ";";
	return e
}

function $l(t) {
	switch(t) {
		case Int8Array:
			return 1 / 127;
		case Uint8Array:
			return 1 / 255;
		case Int16Array:
			return 1 / 32767;
		case Uint16Array:
			return 1 / 65535;
		default:
			throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")
	}
}
class Zl {
	constructor(t = {}, e = {}) {
		this.json = t, this.extensions = {}, this.plugins = {}, this.options = e, this.cache = new il, this.associations = new Map, this.primitiveCache = {}, this.meshCache = {
			refs: {},
			uses: {}
		}, this.cameraCache = {
			refs: {},
			uses: {}
		}, this.lightCache = {
			refs: {},
			uses: {}
		}, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
		const i = !0 === /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
			n = navigator.userAgent.indexOf("Firefox") > -1,
			s = n ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
		"undefined" == typeof createImageBitmap || i || n && s < 98 ? this.textureLoader = new qr(this.options.manager) : this.textureLoader = new ha(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new zr(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0)
	}
	setExtensions(t) {
		this.extensions = t
	}
	setPlugins(t) {
		this.plugins = t
	}
	parse(t, e) {
		const i = this,
			n = this.json,
			s = this.extensions;
		this.cache.removeAll(), this._invokeAll((function(t) {
			return t._markDefs && t._markDefs()
		})), Promise.all(this._invokeAll((function(t) {
			return t.beforeRoot && t.beforeRoot()
		}))).then((function() {
			return Promise.all([i.getDependencies("scene"), i.getDependencies("animation"), i.getDependencies("camera")])
		})).then((function(e) {
			const r = {
				scene: e[0][n.scene || 0],
				scenes: e[0],
				animations: e[1],
				cameras: e[2],
				asset: n.asset,
				parser: i,
				userData: {}
			};
			jl(s, r, n), Yl(r, n), Promise.all(i._invokeAll((function(t) {
				return t.afterRoot && t.afterRoot(r)
			}))).then((function() {
				t(r)
			}))
		})).catch(e)
	}
	_markDefs() {
		const t = this.json.nodes || [],
			e = this.json.skins || [],
			i = this.json.meshes || [];
		for(let i = 0, n = e.length; i < n; i++) {
			const n = e[i].joints;
			for(let e = 0, i = n.length; e < i; e++) t[n[e]].isBone = !0
		}
		for(let e = 0, n = t.length; e < n; e++) {
			const n = t[e];
			void 0 !== n.mesh && (this._addNodeRef(this.meshCache, n.mesh), void 0 !== n.skin && (i[n.mesh].isSkinnedMesh = !0)), void 0 !== n.camera && this._addNodeRef(this.cameraCache, n.camera)
		}
	}
	_addNodeRef(t, e) {
		void 0 !== e && (void 0 === t.refs[e] && (t.refs[e] = t.uses[e] = 0), t.refs[e]++)
	}
	_getNodeRef(t, e, i) {
		if(t.refs[e] <= 1) return i;
		const n = i.clone(),
			s = (t, e) => {
				const i = this.associations.get(t);
				null != i && this.associations.set(e, i);
				for(const [i, n] of t.children.entries()) s(n, e.children[i])
			};
		return s(i, n), n.name += "_instance_" + t.uses[e]++, n
	}
	_invokeOne(t) {
		const e = Object.values(this.plugins);
		e.push(this);
		for(let i = 0; i < e.length; i++) {
			const n = t(e[i]);
			if(n) return n
		}
		return null
	}
	_invokeAll(t) {
		const e = Object.values(this.plugins);
		e.unshift(this);
		const i = [];
		for(let n = 0; n < e.length; n++) {
			const s = t(e[n]);
			s && i.push(s)
		}
		return i
	}
	getDependency(t, e) {
		const i = t + ":" + e;
		let n = this.cache.get(i);
		if(!n) {
			switch(t) {
				case "scene":
					n = this.loadScene(e);
					break;
				case "node":
					n = this.loadNode(e);
					break;
				case "mesh":
					n = this._invokeOne((function(t) {
						return t.loadMesh && t.loadMesh(e)
					}));
					break;
				case "accessor":
					n = this.loadAccessor(e);
					break;
				case "bufferView":
					n = this._invokeOne((function(t) {
						return t.loadBufferView && t.loadBufferView(e)
					}));
					break;
				case "buffer":
					n = this.loadBuffer(e);
					break;
				case "material":
					n = this._invokeOne((function(t) {
						return t.loadMaterial && t.loadMaterial(e)
					}));
					break;
				case "texture":
					n = this._invokeOne((function(t) {
						return t.loadTexture && t.loadTexture(e)
					}));
					break;
				case "skin":
					n = this.loadSkin(e);
					break;
				case "animation":
					n = this._invokeOne((function(t) {
						return t.loadAnimation && t.loadAnimation(e)
					}));
					break;
				case "camera":
					n = this.loadCamera(e);
					break;
				default:
					throw new Error("Unknown type: " + t)
			}
			this.cache.add(i, n)
		}
		return n
	}
	getDependencies(t) {
		let e = this.cache.get(t);
		if(!e) {
			const i = this,
				n = this.json[t + ("mesh" === t ? "es" : "s")] || [];
			e = Promise.all(n.map((function(e, n) {
				return i.getDependency(t, n)
			}))), this.cache.add(t, e)
		}
		return e
	}
	loadBuffer(t) {
		const e = this.json.buffers[t],
			i = this.fileLoader;
		if(e.type && "arraybuffer" !== e.type) throw new Error("THREE.GLTFLoader: " + e.type + " buffer type is not supported.");
		if(void 0 === e.uri && 0 === t) return Promise.resolve(this.extensions[nl.KHR_BINARY_GLTF].body);
		const n = this.options;
		return new Promise((function(t, s) {
			i.load(ca.resolveURL(e.uri, n.path), t, void 0, (function() {
				s(new Error('THREE.GLTFLoader: Failed to load buffer "' + e.uri + '".'))
			}))
		}))
	}
	loadBufferView(t) {
		const e = this.json.bufferViews[t];
		return this.getDependency("buffer", e.buffer).then((function(t) {
			const i = e.byteLength || 0,
				n = e.byteOffset || 0;
			return t.slice(n, n + i)
		}))
	}
	loadAccessor(t) {
		const e = this,
			i = this.json,
			n = this.json.accessors[t];
		if(void 0 === n.bufferView && void 0 === n.sparse) return Promise.resolve(null);
		const s = [];
		return void 0 !== n.bufferView ? s.push(this.getDependency("bufferView", n.bufferView)) : s.push(null), void 0 !== n.sparse && (s.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(s).then((function(t) {
			const s = t[0],
				r = kl[n.type],
				a = Fl[n.componentType],
				o = a.BYTES_PER_ELEMENT,
				l = o * r,
				c = n.byteOffset || 0,
				h = void 0 !== n.bufferView ? i.bufferViews[n.bufferView].byteStride : void 0,
				u = !0 === n.normalized;
			let d, A;
			if(h && h !== l) {
				const t = Math.floor(c / h),
					i = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + t + ":" + n.count;
				let l = e.cache.get(i);
				l || (d = new a(s, t * h, n.count * h / o), l = new Fs(d, h / o), e.cache.add(i, l)), A = new Ns(l, r, c % h / o, u)
			} else d = null === s ? new a(n.count * r) : new a(s, c, n.count * r), A = new ce(d, r, u);
			if(void 0 !== n.sparse) {
				const e = kl.SCALAR,
					i = Fl[n.sparse.indices.componentType],
					o = n.sparse.indices.byteOffset || 0,
					l = n.sparse.values.byteOffset || 0,
					c = new i(t[1], o, n.sparse.count * e),
					h = new a(t[2], l, n.sparse.count * r);
				null !== s && (A = new ce(A.array.slice(), A.itemSize, A.normalized));
				for(let t = 0, e = c.length; t < e; t++) {
					const e = c[t];
					if(A.setX(e, h[t * r]), r >= 2 && A.setY(e, h[t * r + 1]), r >= 3 && A.setZ(e, h[t * r + 2]), r >= 4 && A.setW(e, h[t * r + 3]), r >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
				}
			}
			return A
		}))
	}
	loadTexture(t) {
		const e = this.json,
			i = this.options,
			n = e.textures[t].source,
			s = e.images[n];
		let r = this.textureLoader;
		if(s.uri) {
			const t = i.manager.getHandler(s.uri);
			null !== t && (r = t)
		}
		return this.loadTextureImage(t, n, r)
	}
	loadTextureImage(t, e, i) {
		const n = this,
			s = this.json,
			r = s.textures[t],
			a = s.images[e],
			o = (a.uri || a.bufferView) + ":" + r.sampler;
		if(this.textureCache[o]) return this.textureCache[o];
		const l = this.loadImageSource(e, i).then((function(e) {
			e.flipY = !1, r.name && (e.name = r.name);
			const i = (s.samplers || {})[r.sampler] || {};
			return e.magFilter = Ul[i.magFilter] || 1006, e.minFilter = Ul[i.minFilter] || 1008, e.wrapS = Nl[i.wrapS] || 1e3, e.wrapT = Nl[i.wrapT] || 1e3, n.associations.set(e, {
				textures: t
			}), e
		})).catch((function() {
			return null
		}));
		return this.textureCache[o] = l, l
	}
	loadImageSource(t, e) {
		const i = this,
			n = this.json,
			s = this.options;
		if(void 0 !== this.sourceCache[t]) return this.sourceCache[t].then((t => t.clone()));
		const r = n.images[t],
			a = self.URL || self.webkitURL;
		let o = r.uri || "",
			l = !1;
		if(void 0 !== r.bufferView) o = i.getDependency("bufferView", r.bufferView).then((function(t) {
			l = !0;
			const e = new Blob([t], {
				type: r.mimeType
			});
			return o = a.createObjectURL(e), o
		}));
		else if(void 0 === r.uri) throw new Error("THREE.GLTFLoader: Image " + t + " is missing URI and bufferView");
		const c = Promise.resolve(o).then((function(t) {
			return new Promise((function(i, n) {
				let r = i;
				!0 === e.isImageBitmapLoader && (r = function(t) {
					const e = new N(t);
					e.needsUpdate = !0, i(e)
				}), e.load(ca.resolveURL(t, s.path), r, void 0, n)
			}))
		})).then((function(t) {
			var e;
			return !0 === l && a.revokeObjectURL(o), t.userData.mimeType = r.mimeType || ((e = r.uri).search(/\.jpe?g($|\?)/i) > 0 || 0 === e.search(/^data\:image\/jpeg/) ? "image/jpeg" : e.search(/\.webp($|\?)/i) > 0 || 0 === e.search(/^data\:image\/webp/) ? "image/webp" : "image/png"), t
		})).catch((function(t) {
			throw console.error("THREE.GLTFLoader: Couldn't load texture", o), t
		}));
		return this.sourceCache[t] = c, c
	}
	assignTexture(t, e, i, n) {
		const s = this;
		return this.getDependency("texture", i.index).then((function(r) {
			if(void 0 === i.texCoord || 0 == i.texCoord || "aoMap" === e && 1 == i.texCoord || console.warn("THREE.GLTFLoader: Custom UV set " + i.texCoord + " for texture " + e + " not yet supported."), s.extensions[nl.KHR_TEXTURE_TRANSFORM]) {
				const t = void 0 !== i.extensions ? i.extensions[nl.KHR_TEXTURE_TRANSFORM] : void 0;
				if(t) {
					const e = s.associations.get(r);
					r = s.extensions[nl.KHR_TEXTURE_TRANSFORM].extendTexture(r, t), s.associations.set(r, e)
				}
			}
			return void 0 !== n && (r.encoding = n), t[e] = r, r
		}))
	}
	assignFinalMaterial(t) {
		const e = t.geometry;
		let i = t.material;
		const n = void 0 === e.attributes.tangent,
			s = void 0 !== e.attributes.color,
			r = void 0 === e.attributes.normal;
		if(t.isPoints) {
			const t = "PointsMaterial:" + i.uuid;
			let e = this.cache.get(t);
			e || (e = new or, re.prototype.copy.call(e, i), e.color.copy(i.color), e.map = i.map, e.sizeAttenuation = !1, this.cache.add(t, e)), i = e
		} else if(t.isLine) {
			const t = "LineBasicMaterial:" + i.uuid;
			let e = this.cache.get(t);
			e || (e = new Xs, re.prototype.copy.call(e, i), e.color.copy(i.color), this.cache.add(t, e)), i = e
		}
		if(n || s || r) {
			let t = "ClonedMaterial:" + i.uuid + ":";
			i.isGLTFSpecularGlossinessMaterial && (t += "specular-glossiness:"), n && (t += "derivative-tangents:"), s && (t += "vertex-colors:"), r && (t += "flat-shading:");
			let e = this.cache.get(t);
			e || (e = i.clone(), s && (e.vertexColors = !0), r && (e.flatShading = !0), n && (e.normalScale && (e.normalScale.y *= -1), e.clearcoatNormalScale && (e.clearcoatNormalScale.y *= -1)), this.cache.add(t, e), this.associations.set(e, this.associations.get(i))), i = e
		}
		i.aoMap && void 0 === e.attributes.uv2 && void 0 !== e.attributes.uv && e.setAttribute("uv2", e.attributes.uv), t.material = i
	}
	getMaterialType() {
		return gr
	}
	loadMaterial(t) {
		const e = this,
			i = this.json,
			n = this.extensions,
			s = i.materials[t];
		let r;
		const a = {},
			o = s.extensions || {},
			l = [];
		if(o[nl.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
			const t = n[nl.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
			r = t.getMaterialType(), l.push(t.extendParams(a, s, e))
		} else if(o[nl.KHR_MATERIALS_UNLIT]) {
			const t = n[nl.KHR_MATERIALS_UNLIT];
			r = t.getMaterialType(), l.push(t.extendParams(a, s, e))
		} else {
			const i = s.pbrMetallicRoughness || {};
			if(a.color = new D(1, 1, 1), a.opacity = 1, Array.isArray(i.baseColorFactor)) {
				const t = i.baseColorFactor;
				a.color.fromArray(t), a.opacity = t[3]
			}
			void 0 !== i.baseColorTexture && l.push(e.assignTexture(a, "map", i.baseColorTexture, 3001)), a.metalness = void 0 !== i.metallicFactor ? i.metallicFactor : 1, a.roughness = void 0 !== i.roughnessFactor ? i.roughnessFactor : 1, void 0 !== i.metallicRoughnessTexture && (l.push(e.assignTexture(a, "metalnessMap", i.metallicRoughnessTexture)), l.push(e.assignTexture(a, "roughnessMap", i.metallicRoughnessTexture))), r = this._invokeOne((function(e) {
				return e.getMaterialType && e.getMaterialType(t)
			})), l.push(Promise.all(this._invokeAll((function(e) {
				return e.extendMaterialParams && e.extendMaterialParams(t, a)
			}))))
		}!0 === s.doubleSided && (a.side = 2);
		const c = s.alphaMode || zl;
		if(c === Wl ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, c === Vl && (a.alphaTest = void 0 !== s.alphaCutoff ? s.alphaCutoff : .5)), void 0 !== s.normalTexture && r !== ae && (l.push(e.assignTexture(a, "normalMap", s.normalTexture)), a.normalScale = new v(1, 1), void 0 !== s.normalTexture.scale)) {
			const t = s.normalTexture.scale;
			a.normalScale.set(t, t)
		}
		return void 0 !== s.occlusionTexture && r !== ae && (l.push(e.assignTexture(a, "aoMap", s.occlusionTexture)), void 0 !== s.occlusionTexture.strength && (a.aoMapIntensity = s.occlusionTexture.strength)), void 0 !== s.emissiveFactor && r !== ae && (a.emissive = (new D).fromArray(s.emissiveFactor)), void 0 !== s.emissiveTexture && r !== ae && l.push(e.assignTexture(a, "emissiveMap", s.emissiveTexture, 3001)), Promise.all(l).then((function() {
			let i;
			return i = r === wl ? n[nl.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a) : new r(a), s.name && (i.name = s.name), Yl(i, s), e.associations.set(i, {
				materials: t
			}), s.extensions && jl(n, i, s), i
		}))
	}
	createUniqueName(t) {
		const e = ma.sanitizeNodeName(t || "");
		let i = e;
		for(let t = 1; this.nodeNamesUsed[i]; ++t) i = e + "_" + t;
		return this.nodeNamesUsed[i] = !0, i
	}
	loadGeometries(t) {
		const e = this,
			i = this.extensions,
			n = this.primitiveCache;

		function s(t) {
			return i[nl.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(t, e).then((function(i) {
				return ec(i, t, e)
			}))
		}
		const r = [];
		for(let i = 0, a = t.length; i < a; i++) {
			const a = t[i],
				o = Xl(a),
				l = n[o];
			if(l) r.push(l.promise);
			else {
				let t;
				t = a.extensions && a.extensions[nl.KHR_DRACO_MESH_COMPRESSION] ? s(a) : ec(new xe, a, e), n[o] = {
					primitive: a,
					promise: t
				}, r.push(t)
			}
		}
		return Promise.all(r)
	}
	loadMesh(t) {
		const e = this,
			i = this.json,
			n = this.extensions,
			s = i.meshes[t],
			r = s.primitives,
			a = [];
		for(let t = 0, e = r.length; t < e; t++) {
			const e = void 0 === r[t].material ? ql(this.cache) : this.getDependency("material", r[t].material);
			a.push(e)
		}
		return a.push(e.loadGeometries(r)), Promise.all(a).then((function(i) {
			const a = i.slice(0, i.length - 1),
				o = i[i.length - 1],
				l = [];
			for(let i = 0, c = o.length; i < c; i++) {
				const c = o[i],
					h = r[i];
				let u;
				const d = a[i];
				if(h.mode === Ll || h.mode === Ql || h.mode === Pl || void 0 === h.mode) u = !0 === s.isSkinnedMesh ? new Vs(c, d) : new Ne(c, d), !0 !== u.isSkinnedMesh || u.geometry.attributes.skinWeight.normalized || u.normalizeSkinWeights(), h.mode === Ql ? u.geometry = ic(u.geometry, 1) : h.mode === Pl && (u.geometry = ic(u.geometry, 2));
				else if(h.mode === Tl) u = new rr(c, d);
				else if(h.mode === Dl) u = new ir(c, d);
				else if(h.mode === Rl) u = new ar(c, d);
				else {
					if(h.mode !== Bl) throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + h.mode);
					u = new dr(c, d)
				}
				Object.keys(u.geometry.morphAttributes).length > 0 && Jl(u, s), u.name = e.createUniqueName(s.name || "mesh_" + t), Yl(u, s), h.extensions && jl(n, u, h), e.assignFinalMaterial(u), l.push(u)
			}
			for(let i = 0, n = l.length; i < n; i++) e.associations.set(l[i], {
				meshes: t,
				primitives: i
			});
			if(1 === l.length) return l[0];
			const c = new Ss;
			e.associations.set(c, {
				meshes: t
			});
			for(let t = 0, e = l.length; t < e; t++) c.add(l[t]);
			return c
		}))
	}
	loadCamera(t) {
		let e;
		const i = this.json.cameras[t],
			n = i[i.type];
		if(n) return "perspective" === i.type ? e = new qe(f.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : "orthographic" === i.type && (e = new gi(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), i.name && (e.name = this.createUniqueName(i.name)), Yl(e, i), Promise.resolve(e);
		console.warn("THREE.GLTFLoader: Missing camera parameters.")
	}
	loadSkin(t) {
		const e = this.json.skins[t],
			i = {
				joints: e.joints
			};
		return void 0 === e.inverseBindMatrices ? Promise.resolve(i) : this.getDependency("accessor", e.inverseBindMatrices).then((function(t) {
			return i.inverseBindMatrices = t, i
		}))
	}
	loadAnimation(t) {
		const e = this.json.animations[t],
			i = [],
			n = [],
			s = [],
			r = [],
			a = [];
		for(let t = 0, o = e.channels.length; t < o; t++) {
			const o = e.channels[t],
				l = e.samplers[o.sampler],
				c = o.target,
				h = c.node,
				u = void 0 !== e.parameters ? e.parameters[l.input] : l.input,
				d = void 0 !== e.parameters ? e.parameters[l.output] : l.output;
			i.push(this.getDependency("node", h)), n.push(this.getDependency("accessor", u)), s.push(this.getDependency("accessor", d)), r.push(l), a.push(c)
		}
		return Promise.all([Promise.all(i), Promise.all(n), Promise.all(s), Promise.all(r), Promise.all(a)]).then((function(i) {
			const n = i[0],
				s = i[1],
				r = i[2],
				a = i[3],
				o = i[4],
				l = [];
			for(let t = 0, e = n.length; t < e; t++) {
				const e = n[t],
					i = s[t],
					c = r[t],
					h = a[t],
					u = o[t];
				if(void 0 === e) continue;
				let d;
				switch(e.updateMatrix(), Gl[u.path]) {
					case Gl.weights:
						d = Tr;
						break;
					case Gl.rotation:
						d = Dr;
						break;
					default:
						d = Qr
				}
				const A = e.name ? e.name : e.uuid,
					p = void 0 !== h.interpolation ? Hl[h.interpolation] : 2301,
					g = [];
				Gl[u.path] === Gl.weights ? e.traverse((function(t) {
					t.morphTargetInfluences && g.push(t.name ? t.name : t.uuid)
				})) : g.push(A);
				let m = c.array;
				if(c.normalized) {
					const t = $l(m.constructor),
						e = new Float32Array(m.length);
					for(let i = 0, n = m.length; i < n; i++) e[i] = m[i] * t;
					m = e
				}
				for(let t = 0, e = g.length; t < e; t++) {
					const e = new d(g[t] + "." + Gl[u.path], i.array, m, p);
					"CUBICSPLINE" === h.interpolation && (e.createInterpolant = function(t) {
						return new(this instanceof Dr ? Ml : Cl)(this.times, this.values, this.getValueSize() / 3, t)
					}, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), l.push(e)
				}
			}
			const c = e.name ? e.name : "animation_" + t;
			return new Pr(c, void 0, l)
		}))
	}
	createNodeMesh(t) {
		const e = this.json,
			i = this,
			n = e.nodes[t];
		return void 0 === n.mesh ? null : i.getDependency("mesh", n.mesh).then((function(t) {
			const e = i._getNodeRef(i.meshCache, n.mesh, t);
			return void 0 !== n.weights && e.traverse((function(t) {
				if(t.isMesh)
					for(let e = 0, i = n.weights.length; e < i; e++) t.morphTargetInfluences[e] = n.weights[e]
			})), e
		}))
	}
	loadNode(t) {
		const e = this.json,
			i = this.extensions,
			n = this,
			s = e.nodes[t],
			r = s.name ? n.createUniqueName(s.name) : "";
		return function() {
			const e = [],
				i = n._invokeOne((function(e) {
					return e.createNodeMesh && e.createNodeMesh(t)
				}));
			return i && e.push(i), void 0 !== s.camera && e.push(n.getDependency("camera", s.camera).then((function(t) {
				return n._getNodeRef(n.cameraCache, s.camera, t)
			}))), n._invokeAll((function(e) {
				return e.createNodeAttachment && e.createNodeAttachment(t)
			})).forEach((function(t) {
				e.push(t)
			})), Promise.all(e)
		}().then((function(e) {
			let a;
			if(a = !0 === s.isBone ? new Ws : e.length > 1 ? new Ss : 1 === e.length ? e[0] : new qt, a !== e[0])
				for(let t = 0, i = e.length; t < i; t++) a.add(e[t]);
			if(s.name && (a.userData.name = s.name, a.name = r), Yl(a, s), s.extensions && jl(i, a, s), void 0 !== s.matrix) {
				const t = new _t;
				t.fromArray(s.matrix), a.applyMatrix4(t)
			} else void 0 !== s.translation && a.position.fromArray(s.translation), void 0 !== s.rotation && a.quaternion.fromArray(s.rotation), void 0 !== s.scale && a.scale.fromArray(s.scale);
			return n.associations.has(a) || n.associations.set(a, {}), n.associations.get(a).nodes = t, a
		}))
	}
	loadScene(t) {
		const e = this.json,
			i = this.extensions,
			n = this.json.scenes[t],
			s = this,
			r = new Ss;
		n.name && (r.name = s.createUniqueName(n.name)), Yl(r, n), n.extensions && jl(i, r, n);
		const a = n.nodes || [],
			o = [];
		for(let t = 0, i = a.length; t < i; t++) o.push(tc(a[t], r, e, s));
		return Promise.all(o).then((function() {
			return s.associations = (t => {
				const e = new Map;
				for(const [t, i] of s.associations)(t instanceof re || t instanceof N) && e.set(t, i);
				return t.traverse((t => {
					const i = s.associations.get(t);
					null != i && e.set(t, i)
				})), e
			})(r), r
		}))
	}
}

function tc(t, e, i, n) {
	const s = i.nodes[t];
	return n.getDependency("node", t).then((function(t) {
		if(void 0 === s.skin) return t;
		let e;
		return n.getDependency("skin", s.skin).then((function(t) {
			e = t;
			const i = [];
			for(let t = 0, s = e.joints.length; t < s; t++) i.push(n.getDependency("node", e.joints[t]));
			return Promise.all(i)
		})).then((function(i) {
			return t.traverse((function(t) {
				if(!t.isMesh) return;
				const n = [],
					s = [];
				for(let t = 0, r = i.length; t < r; t++) {
					const r = i[t];
					if(r) {
						n.push(r);
						const i = new _t;
						void 0 !== e.inverseBindMatrices && i.fromArray(e.inverseBindMatrices.array, 16 * t), s.push(i)
					} else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', e.joints[t])
				}
				t.bind(new Js(n, s), t.matrixWorld)
			})), t
		}))
	})).then((function(t) {
		e.add(t);
		const r = [];
		if(s.children) {
			const e = s.children;
			for(let s = 0, a = e.length; s < a; s++) {
				const a = e[s];
				r.push(tc(a, t, i, n))
			}
		}
		return Promise.all(r)
	}))
}

function ec(t, e, i) {
	const n = e.attributes,
		s = [];

	function r(e, n) {
		return i.getDependency("accessor", e).then((function(e) {
			t.setAttribute(n, e)
		}))
	}
	for(const e in n) {
		const i = Ol[e] || e.toLowerCase();
		i in t.attributes || s.push(r(n[e], i))
	}
	if(void 0 !== e.indices && !t.index) {
		const n = i.getDependency("accessor", e.indices).then((function(e) {
			t.setIndex(e)
		}));
		s.push(n)
	}
	return Yl(t, e),
		function(t, e, i) {
			const n = e.attributes,
				s = new j;
			if(void 0 === n.POSITION) return; {
				const t = i.json.accessors[n.POSITION],
					e = t.min,
					r = t.max;
				if(void 0 === e || void 0 === r) return void console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
				if(s.set(new V(e[0], e[1], e[2]), new V(r[0], r[1], r[2])), t.normalized) {
					const e = $l(Fl[t.componentType]);
					s.min.multiplyScalar(e), s.max.multiplyScalar(e)
				}
			}
			const r = e.targets;
			if(void 0 !== r) {
				const t = new V,
					e = new V;
				for(let n = 0, s = r.length; n < s; n++) {
					const s = r[n];
					if(void 0 !== s.POSITION) {
						const n = i.json.accessors[s.POSITION],
							r = n.min,
							a = n.max;
						if(void 0 !== r && void 0 !== a) {
							if(e.setX(Math.max(Math.abs(r[0]), Math.abs(a[0]))), e.setY(Math.max(Math.abs(r[1]), Math.abs(a[1]))), e.setZ(Math.max(Math.abs(r[2]), Math.abs(a[2]))), n.normalized) {
								const t = $l(Fl[n.componentType]);
								e.multiplyScalar(t)
							}
							t.max(e)
						} else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
					}
				}
				s.expandByVector(t)
			}
			t.boundingBox = s;
			const a = new dt;
			s.getCenter(a.center), a.radius = s.min.distanceTo(s.max) / 2, t.boundingSphere = a
		}(t, e, i), Promise.all(s).then((function() {
			return void 0 !== e.targets ? function(t, e, i) {
				let n = !1,
					s = !1,
					r = !1;
				for(let t = 0, i = e.length; t < i; t++) {
					const i = e[t];
					if(void 0 !== i.POSITION && (n = !0), void 0 !== i.NORMAL && (s = !0), void 0 !== i.COLOR_0 && (r = !0), n && s && r) break
				}
				if(!n && !s && !r) return Promise.resolve(t);
				const a = [],
					o = [],
					l = [];
				for(let c = 0, h = e.length; c < h; c++) {
					const h = e[c];
					if(n) {
						const e = void 0 !== h.POSITION ? i.getDependency("accessor", h.POSITION) : t.attributes.position;
						a.push(e)
					}
					if(s) {
						const e = void 0 !== h.NORMAL ? i.getDependency("accessor", h.NORMAL) : t.attributes.normal;
						o.push(e)
					}
					if(r) {
						const e = void 0 !== h.COLOR_0 ? i.getDependency("accessor", h.COLOR_0) : t.attributes.color;
						l.push(e)
					}
				}
				return Promise.all([Promise.all(a), Promise.all(o), Promise.all(l)]).then((function(e) {
					const i = e[0],
						a = e[1],
						o = e[2];
					return n && (t.morphAttributes.position = i), s && (t.morphAttributes.normal = a), r && (t.morphAttributes.color = o), t.morphTargetsRelative = !0, t
				}))
			}(t, e.targets, i) : t
		}))
}

function ic(t, e) {
	let i = t.getIndex();
	if(null === i) {
		const e = [],
			n = t.getAttribute("position");
		if(void 0 === n) return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), t;
		for(let t = 0; t < n.count; t++) e.push(t);
		t.setIndex(e), i = t.getIndex()
	}
	const n = i.count - 2,
		s = [];
	if(2 === e)
		for(let t = 1; t <= n; t++) s.push(i.getX(0)), s.push(i.getX(t)), s.push(i.getX(t + 1));
	else
		for(let t = 0; t < n; t++) t % 2 == 0 ? (s.push(i.getX(t)), s.push(i.getX(t + 1)), s.push(i.getX(t + 2))) : (s.push(i.getX(t + 2)), s.push(i.getX(t + 1)), s.push(i.getX(t)));
	s.length / 3 !== n && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
	const r = t.clone();
	return r.setIndex(s), r
}
class nc {
	constructor(t = 4) {
		this.pool = t, this.queue = [], this.workers = [], this.workersResolve = [], this.workerStatus = 0
	}
	_initWorker(t) {
		if(!this.workers[t]) {
			const e = this.workerCreator();
			e.addEventListener("message", this._onMessage.bind(this, t)), this.workers[t] = e
		}
	}
	_getIdleWorker() {
		for(let t = 0; t < this.pool; t++)
			if(!(this.workerStatus & 1 << t)) return t;
		return -1
	}
	_onMessage(t, e) {
		const i = this.workersResolve[t];
		if(i && i(e), this.queue.length) {
			const {
				resolve: e,
				msg: i,
				transfer: n
			} = this.queue.shift();
			this.workersResolve[t] = e, this.workers[t].postMessage(i, n)
		} else this.workerStatus ^= 1 << t
	}
	setWorkerCreator(t) {
		this.workerCreator = t
	}
	setWorkerLimit(t) {
		this.pool = t
	}
	postMessage(t, e) {
		return new Promise((i => {
			const n = this._getIdleWorker(); - 1 !== n ? (this._initWorker(n), this.workerStatus |= 1 << n, this.workersResolve[n] = i, this.workers[n].postMessage(t, e)) : this.queue.push({
				resolve: i,
				msg: t,
				transfer: e
			})
		}))
	}
	dispose() {
		this.workers.forEach((t => t.terminate())), this.workersResolve.length = 0, this.workers.length = 0, this.queue.length = 0, this.workerStatus = 0
	}
}
class sc {
	constructor() {
		this.vkFormat = 0, this.typeSize = 1, this.pixelWidth = 0, this.pixelHeight = 0, this.pixelDepth = 0, this.layerCount = 0, this.faceCount = 1, this.supercompressionScheme = 0, this.levels = [], this.dataFormatDescriptor = [{
			vendorId: 0,
			descriptorType: 0,
			descriptorBlockSize: 0,
			versionNumber: 2,
			colorModel: 0,
			colorPrimaries: 1,
			transferFunction: 2,
			flags: 0,
			texelBlockDimension: [0, 0, 0, 0],
			bytesPlane: [0, 0, 0, 0, 0, 0, 0, 0],
			samples: []
		}], this.keyValue = {}, this.globalData = null
	}
}
class rc {
	constructor(t, e, i, n) {
		this._dataView = new DataView(t.buffer, t.byteOffset + e, i), this._littleEndian = n, this._offset = 0
	}
	_nextUint8() {
		const t = this._dataView.getUint8(this._offset);
		return this._offset += 1, t
	}
	_nextUint16() {
		const t = this._dataView.getUint16(this._offset, this._littleEndian);
		return this._offset += 2, t
	}
	_nextUint32() {
		const t = this._dataView.getUint32(this._offset, this._littleEndian);
		return this._offset += 4, t
	}
	_nextUint64() {
		const t = this._dataView.getUint32(this._offset, this._littleEndian) + 2 * * 32 * this._dataView.getUint32(this._offset + 4, this._littleEndian);
		return this._offset += 8, t
	}
	_nextInt32() {
		const t = this._dataView.getInt32(this._offset, this._littleEndian);
		return this._offset += 4, t
	}
	_skip(t) {
		return this._offset += t, this
	}
	_scan(t, e = 0) {
		const i = this._offset;
		let n = 0;
		for(; this._dataView.getUint8(this._offset) !== e && n < t;) n++, this._offset++;
		return n < t && this._offset++, new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + i, n)
	}
}
const ac = [171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10];

function oc(t) {
	return "undefined" != typeof TextDecoder ? (new TextDecoder).decode(t) : Buffer.from(t).toString("utf8")
}
let lc, cc, hc;
const uc = {
	env: {
		emscripten_notify_memory_growth: function(t) {
			hc = new Uint8Array(cc.exports.memory.buffer)
		}
	}
};
class dc {
	init() {
		return lc || (lc = "undefined" != typeof fetch ? fetch("data:application/wasm;base64," + Ac).then((t => t.arrayBuffer())).then((t => WebAssembly.instantiate(t, uc))).then(this._init) : WebAssembly.instantiate(Buffer.from(Ac, "base64"), uc).then(this._init), lc)
	}
	_init(t) {
		cc = t.instance, uc.env.emscripten_notify_memory_growth(0)
	}
	decode(t, e = 0) {
		if(!cc) throw new Error("ZSTDDecoder: Await .init() before decoding.");
		const i = t.byteLength,
			n = cc.exports.malloc(i);
		hc.set(t, n), e = e || Number(cc.exports.ZSTD_findDecompressedSize(n, i));
		const s = cc.exports.malloc(e),
			r = cc.exports.ZSTD_decompress(s, e, n, i),
			a = hc.slice(s, s + r);
		return cc.exports.free(n), cc.exports.free(s), a
	}
}
const Ac = "AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",
	pc = new WeakMap;
let gc, mc = 0;
class fc extends Or {
	constructor(t) {
		super(t), this.transcoderPath = "", this.transcoderBinary = null, this.transcoderPending = null, this.workerPool = new nc, this.workerSourceURL = "", this.workerConfig = null, "undefined" != typeof MSC_TRANSCODER && console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')
	}
	setTranscoderPath(t) {
		return this.transcoderPath = t, this
	}
	setWorkerLimit(t) {
		return this.workerPool.setWorkerLimit(t), this
	}
	detectSupport(t) {
		return this.workerConfig = {
			astcSupported: t.extensions.has("WEBGL_compressed_texture_astc"),
			etc1Supported: t.extensions.has("WEBGL_compressed_texture_etc1"),
			etc2Supported: t.extensions.has("WEBGL_compressed_texture_etc"),
			dxtSupported: t.extensions.has("WEBGL_compressed_texture_s3tc"),
			bptcSupported: t.extensions.has("EXT_texture_compression_bptc"),
			pvrtcSupported: t.extensions.has("WEBGL_compressed_texture_pvrtc") || t.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")
		}, t.capabilities.isWebGL2 && (this.workerConfig.etc1Supported = !1), this
	}
	init() {
		if(!this.transcoderPending) {
			const t = new zr(this.manager);
			t.setPath(this.transcoderPath), t.setWithCredentials(this.withCredentials);
			const e = t.loadAsync("basis_transcoder.js"),
				i = new zr(this.manager);
			i.setPath(this.transcoderPath), i.setResponseType("arraybuffer"), i.setWithCredentials(this.withCredentials);
			const n = i.loadAsync("basis_transcoder.wasm");
			this.transcoderPending = Promise.all([e, n]).then((([t, e]) => {
				const i = fc.BasisWorker.toString(),
					n = ["/* constants */", "let _EngineFormat = " + JSON.stringify(fc.EngineFormat), "let _TranscoderFormat = " + JSON.stringify(fc.TranscoderFormat), "let _BasisFormat = " + JSON.stringify(fc.BasisFormat), "/* basis_transcoder.js */", t, "/* worker */", i.substring(i.indexOf("{") + 1, i.lastIndexOf("}"))].join("\n");
				this.workerSourceURL = URL.createObjectURL(new Blob([n])), this.transcoderBinary = e, this.workerPool.setWorkerCreator((() => {
					const t = new Worker(this.workerSourceURL),
						e = this.transcoderBinary.slice(0);
					return t.postMessage({
						type: "init",
						config: this.workerConfig,
						transcoderBinary: e
					}, [e]), t
				}))
			})), mc > 0 && console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."), mc++
		}
		return this.transcoderPending
	}
	load(t, e, i, n) {
		if(null === this.workerConfig) throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");
		const s = new zr(this.manager);
		s.setResponseType("arraybuffer"), s.setWithCredentials(this.withCredentials), s.load(t, (t => {
			if(pc.has(t)) {
				return pc.get(t).promise.then(e).catch(n)
			}
			this._createTexture(t).then((t => e ? e(t) : null)).catch(n)
		}), i, n)
	}
	_createTextureFrom(t) {
		const {
			mipmaps: e,
			width: i,
			height: n,
			format: s,
			type: r,
			error: a,
			dfdTransferFn: o,
			dfdFlags: l
		} = t;
		if("error" === r) return Promise.reject(a);
		const c = new pr(e, i, n, s, 1009);
		return c.minFilter = 1 === e.length ? 1006 : 1008, c.magFilter = 1006, c.generateMipmaps = !1, c.needsUpdate = !0, c.encoding = 2 === o ? 3001 : 3e3, c.premultiplyAlpha = !!(1 & l), c
	}
	_createTexture(t, e = {}) {
		const i = function(t) {
			const e = new Uint8Array(t.buffer, t.byteOffset, ac.length);
			if(e[0] !== ac[0] || e[1] !== ac[1] || e[2] !== ac[2] || e[3] !== ac[3] || e[4] !== ac[4] || e[5] !== ac[5] || e[6] !== ac[6] || e[7] !== ac[7] || e[8] !== ac[8] || e[9] !== ac[9] || e[10] !== ac[10] || e[11] !== ac[11]) throw new Error("Missing KTX 2.0 identifier.");
			const i = new sc,
				n = 17 * Uint32Array.BYTES_PER_ELEMENT,
				s = new rc(t, ac.length, n, !0);
			i.vkFormat = s._nextUint32(), i.typeSize = s._nextUint32(), i.pixelWidth = s._nextUint32(), i.pixelHeight = s._nextUint32(), i.pixelDepth = s._nextUint32(), i.layerCount = s._nextUint32(), i.faceCount = s._nextUint32();
			const r = s._nextUint32();
			i.supercompressionScheme = s._nextUint32();
			const a = s._nextUint32(),
				o = s._nextUint32(),
				l = s._nextUint32(),
				c = s._nextUint32(),
				h = s._nextUint64(),
				u = s._nextUint64(),
				d = new rc(t, ac.length + n, 3 * r * 8, !0);
			for(let e = 0; e < r; e++) i.levels.push({
				levelData: new Uint8Array(t.buffer, t.byteOffset + d._nextUint64(), d._nextUint64()),
				uncompressedByteLength: d._nextUint64()
			});
			const A = new rc(t, a, o, !0),
				p = {
					vendorId: A._skip(4)._nextUint16(),
					descriptorType: A._nextUint16(),
					versionNumber: A._nextUint16(),
					descriptorBlockSize: A._nextUint16(),
					colorModel: A._nextUint8(),
					colorPrimaries: A._nextUint8(),
					transferFunction: A._nextUint8(),
					flags: A._nextUint8(),
					texelBlockDimension: [A._nextUint8(), A._nextUint8(), A._nextUint8(), A._nextUint8()],
					bytesPlane: [A._nextUint8(), A._nextUint8(), A._nextUint8(), A._nextUint8(), A._nextUint8(), A._nextUint8(), A._nextUint8(), A._nextUint8()],
					samples: []
				},
				g = (p.descriptorBlockSize / 4 - 6) / 4;
			for(let t = 0; t < g; t++) {
				const e = {
					bitOffset: A._nextUint16(),
					bitLength: A._nextUint8(),
					channelType: A._nextUint8(),
					samplePosition: [A._nextUint8(), A._nextUint8(), A._nextUint8(), A._nextUint8()],
					sampleLower: -1 / 0,
					sampleUpper: 1 / 0
				};
				64 & e.channelType ? (e.sampleLower = A._nextInt32(), e.sampleUpper = A._nextInt32()) : (e.sampleLower = A._nextUint32(), e.sampleUpper = A._nextUint32()), p.samples[t] = e
			}
			i.dataFormatDescriptor.length = 0, i.dataFormatDescriptor.push(p);
			const m = new rc(t, l, c, !0);
			for(; m._offset < c;) {
				const t = m._nextUint32(),
					e = m._scan(t),
					n = oc(e),
					s = m._scan(t - e.byteLength);
				i.keyValue[n] = n.match(/^ktx/i) ? oc(s) : s, m._offset % 4 && m._skip(4 - m._offset % 4)
			}
			if(u <= 0) return i;
			const f = new rc(t, h, u, !0),
				v = f._nextUint16(),
				y = f._nextUint16(),
				x = f._nextUint32(),
				_ = f._nextUint32(),
				E = f._nextUint32(),
				w = f._nextUint32(),
				b = [];
			for(let t = 0; t < r; t++) b.push({
				imageFlags: f._nextUint32(),
				rgbSliceByteOffset: f._nextUint32(),
				rgbSliceByteLength: f._nextUint32(),
				alphaSliceByteOffset: f._nextUint32(),
				alphaSliceByteLength: f._nextUint32()
			});
			const I = h + f._offset,
				C = I + x,
				S = C + _,
				M = S + E,
				B = new Uint8Array(t.buffer, t.byteOffset + I, x),
				T = new Uint8Array(t.buffer, t.byteOffset + C, _),
				R = new Uint8Array(t.buffer, t.byteOffset + S, E),
				D = new Uint8Array(t.buffer, t.byteOffset + M, w);
			return i.globalData = {
				endpointCount: v,
				selectorCount: y,
				imageDescs: b,
				endpointsData: B,
				selectorsData: T,
				tablesData: R,
				extendedData: D
			}, i
		}(new Uint8Array(t));
		if(0 !== i.vkFormat) return async function(t) {
				const {
					vkFormat: e,
					pixelWidth: i,
					pixelHeight: n,
					pixelDepth: s
				} = t;
				if(void 0 === vc[e]) throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");
				const r = t.levels[0];
				let a, o;
				if(0 === t.supercompressionScheme) a = r.levelData;
				else {
					if(2 !== t.supercompressionScheme) throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");
					gc || (gc = new Promise((async t => {
						const e = new dc;
						await e.init(), t(e)
					}))), a = (await gc).decode(r.levelData, r.uncompressedByteLength)
				}
				o = 1015 === yc[e] ? new Float32Array(a.buffer, a.byteOffset, a.byteLength / Float32Array.BYTES_PER_ELEMENT) : 1016 === yc[e] ? new Uint16Array(a.buffer, a.byteOffset, a.byteLength / Uint16Array.BYTES_PER_ELEMENT) : a;
				const l = 0 === s ? new qs(o, i, n) : new H(o, i, n, s);
				return l.type = yc[e], l.format = vc[e], l.encoding = xc[e] || 3e3, l.needsUpdate = !0, Promise.resolve(l)
			}
			/* @license
			 * Copyright 2019 Google LLC. All Rights Reserved.
			 * Licensed under the Apache License, Version 2.0 (the 'License');
			 * you may not use this file except in compliance with the License.
			 * You may obtain a copy of the License at
			 *
			 *     http://www.apache.org/licenses/LICENSE-2.0
			 *
			 * Unless required by applicable law or agreed to in writing, software
			 * distributed under the License is distributed on an 'AS IS' BASIS,
			 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
			 * See the License for the specific language governing permissions and
			 * limitations under the License.
			 */
			(i);
		const n = e,
			s = this.init().then((() => this.workerPool.postMessage({
				type: "transcode",
				buffer: t,
				taskConfig: n
			}, [t]))).then((t => this._createTextureFrom(t.data)));
		return pc.set(t, {
			promise: s
		}), s
	}
	dispose() {
		return this.workerPool.dispose(), this.workerSourceURL && URL.revokeObjectURL(this.workerSourceURL), mc--, this
	}
}
fc.BasisFormat = {
	ETC1S: 0,
	UASTC_4x4: 1
}, fc.TranscoderFormat = {
	ETC1: 0,
	ETC2: 1,
	BC1: 2,
	BC3: 3,
	BC4: 4,
	BC5: 5,
	BC7_M6_OPAQUE_ONLY: 6,
	BC7_M5: 7,
	PVRTC1_4_RGB: 8,
	PVRTC1_4_RGBA: 9,
	ASTC_4x4: 10,
	ATC_RGB: 11,
	ATC_RGBA_INTERPOLATED_ALPHA: 12,
	RGBA32: 13,
	RGB565: 14,
	BGR565: 15,
	RGBA4444: 16
}, fc.EngineFormat = {
	RGBAFormat: 1023,
	RGBA_ASTC_4x4_Format: 37808,
	RGBA_BPTC_Format: 36492,
	RGBA_ETC2_EAC_Format: 37496,
	RGBA_PVRTC_4BPPV1_Format: 35842,
	RGBA_S3TC_DXT5_Format: 33779,
	RGB_ETC1_Format: 36196,
	RGB_ETC2_Format: 37492,
	RGB_PVRTC_4BPPV1_Format: 35840,
	RGB_S3TC_DXT1_Format: 33776
}, fc.BasisWorker = function() {
	let t, e, i;
	const n = _EngineFormat,
		s = _TranscoderFormat,
		r = _BasisFormat;
	self.addEventListener("message", (function(a) {
		const h = a.data;
		switch(h.type) {
			case "init":
				t = h.config, u = h.transcoderBinary, e = new Promise((t => {
					i = {
						wasmBinary: u,
						onRuntimeInitialized: t
					}, BASIS(i)
				})).then((() => {
					i.initializeBasis(), void 0 === i.KTX2File && console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")
				}));
				break;
			case "transcode":
				e.then((() => {
					try {
						const {
							width: e,
							height: a,
							hasAlpha: u,
							mipmaps: d,
							format: A,
							dfdTransferFn: p,
							dfdFlags: g
						} = function(e) {
							const a = new i.KTX2File(new Uint8Array(e));

							function h() {
								a.close(), a.delete()
							}
							if(!a.isValid()) throw h(), new Error("THREE.KTX2Loader:\tInvalid or unsupported .ktx2 file");
							const u = a.isUASTC() ? r.UASTC_4x4 : r.ETC1S,
								d = a.getWidth(),
								A = a.getHeight(),
								p = a.getLevels(),
								g = a.getHasAlpha(),
								m = a.getDFDTransferFunc(),
								f = a.getDFDFlags(),
								{
									transcoderFormat: v,
									engineFormat: y
								} = function(e, i, a, h) {
									let u, d;
									const A = e === r.ETC1S ? o : l;
									for(let n = 0; n < A.length; n++) {
										const s = A[n];
										if(t[s.if] && (s.basisFormat.includes(e) && !(h && s.transcoderFormat.length < 2) && (!s.needsPowerOfTwo || c(i) && c(a)))) return u = s.transcoderFormat[h ? 1 : 0], d = s.engineFormat[h ? 1 : 0], {
											transcoderFormat: u,
											engineFormat: d
										}
									}
									return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."), u = s.RGBA32, d = n.RGBAFormat, {
										transcoderFormat: u,
										engineFormat: d
									}
								}(u, d, A, g);
							if(!d || !A || !p) throw h(), new Error("THREE.KTX2Loader:\tInvalid texture");
							if(!a.startTranscoding()) throw h(), new Error("THREE.KTX2Loader: .startTranscoding failed");
							const x = [];
							for(let t = 0; t < p; t++) {
								const e = a.getImageLevelInfo(t, 0, 0),
									i = e.origWidth,
									n = e.origHeight,
									s = new Uint8Array(a.getImageTranscodedSizeInBytes(t, 0, 0, v));
								if(!a.transcodeImage(s, t, 0, 0, v, 0, -1, -1)) throw h(), new Error("THREE.KTX2Loader: .transcodeImage failed.");
								x.push({
									data: s,
									width: i,
									height: n
								})
							}
							return h(), {
								width: d,
								height: A,
								hasAlpha: g,
								mipmaps: x,
								format: y,
								dfdTransferFn: m,
								dfdFlags: f
							}
						}(h.buffer), m = [];
						for(let t = 0; t < d.length; ++t) m.push(d[t].data.buffer);
						self.postMessage({
							type: "transcode",
							id: h.id,
							width: e,
							height: a,
							hasAlpha: u,
							mipmaps: d,
							format: A,
							dfdTransferFn: p,
							dfdFlags: g
						}, m)
					} catch(t) {
						console.error(t), self.postMessage({
							type: "error",
							id: h.id,
							error: t.message
						})
					}
				}))
		}
		var u
	}));
	const a = [{
			if: "astcSupported",
			basisFormat: [r.UASTC_4x4],
			transcoderFormat: [s.ASTC_4x4, s.ASTC_4x4],
			engineFormat: [n.RGBA_ASTC_4x4_Format, n.RGBA_ASTC_4x4_Format],
			priorityETC1S: 1 / 0,
			priorityUASTC: 1,
			needsPowerOfTwo: !1
		}, {
			if: "bptcSupported",
			basisFormat: [r.ETC1S, r.UASTC_4x4],
			transcoderFormat: [s.BC7_M5, s.BC7_M5],
			engineFormat: [n.RGBA_BPTC_Format, n.RGBA_BPTC_Format],
			priorityETC1S: 3,
			priorityUASTC: 2,
			needsPowerOfTwo: !1
		}, {
			if: "dxtSupported",
			basisFormat: [r.ETC1S, r.UASTC_4x4],
			transcoderFormat: [s.BC1, s.BC3],
			engineFormat: [n.RGB_S3TC_DXT1_Format, n.RGBA_S3TC_DXT5_Format],
			priorityETC1S: 4,
			priorityUASTC: 5,
			needsPowerOfTwo: !1
		}, {
			if: "etc2Supported",
			basisFormat: [r.ETC1S, r.UASTC_4x4],
			transcoderFormat: [s.ETC1, s.ETC2],
			engineFormat: [n.RGB_ETC2_Format, n.RGBA_ETC2_EAC_Format],
			priorityETC1S: 1,
			priorityUASTC: 3,
			needsPowerOfTwo: !1
		}, {
			if: "etc1Supported",
			basisFormat: [r.ETC1S, r.UASTC_4x4],
			transcoderFormat: [s.ETC1],
			engineFormat: [n.RGB_ETC1_Format],
			priorityETC1S: 2,
			priorityUASTC: 4,
			needsPowerOfTwo: !1
		}, {
			if: "pvrtcSupported",
			basisFormat: [r.ETC1S, r.UASTC_4x4],
			transcoderFormat: [s.PVRTC1_4_RGB, s.PVRTC1_4_RGBA],
			engineFormat: [n.RGB_PVRTC_4BPPV1_Format, n.RGBA_PVRTC_4BPPV1_Format],
			priorityETC1S: 5,
			priorityUASTC: 6,
			needsPowerOfTwo: !0
		}],
		o = a.sort((function(t, e) {
			return t.priorityETC1S - e.priorityETC1S
		})),
		l = a.sort((function(t, e) {
			return t.priorityUASTC - e.priorityUASTC
		}));

	function c(t) {
		return t <= 2 || 0 == (t & t - 1) && 0 !== t
	}
};
const vc = {
		109: 1023,
		97: 1023,
		37: 1023,
		43: 1023,
		103: 1030,
		83: 1030,
		16: 1030,
		22: 1030,
		100: 1028,
		76: 1028,
		15: 1028,
		9: 1028
	},
	yc = {
		109: 1015,
		97: 1016,
		37: 1009,
		43: 1009,
		103: 1015,
		83: 1016,
		16: 1009,
		22: 1009,
		100: 1015,
		76: 1016,
		15: 1009,
		9: 1009
	},
	xc = {
		43: 3001,
		22: 3001,
		15: 3001
	};
var _c, Ec;
const wc = Symbol("retainerCount"),
	bc = Symbol("recentlyUsed"),
	Ic = Symbol("evict"),
	Cc = Symbol("evictionThreshold"),
	Sc = Symbol("cache");
class Mc {
	constructor(t, e = 5) {
		this[_c] = new Map, this[Ec] = [], this[Sc] = t, this[Cc] = e
	}
	set evictionThreshold(t) {
		this[Cc] = t, this[Ic]()
	}
	get evictionThreshold() {
		return this[Cc]
	}
	get cache() {
		return this[Sc]
	}
	retainerCount(t) {
		return this[wc].get(t) || 0
	}
	reset() {
		this[wc].clear(), this[bc] = []
	}
	retain(t) {
		this[wc].has(t) || this[wc].set(t, 0), this[wc].set(t, this[wc].get(t) + 1);
		const e = this[bc].indexOf(t); - 1 !== e && this[bc].splice(e, 1), this[bc].unshift(t), this[Ic]()
	}
	release(t) {
		this[wc].has(t) && this[wc].set(t, Math.max(this[wc].get(t) - 1, 0)), this[Ic]()
	}[(_c = wc, Ec = bc, Ic)]() {
		if(!(this[bc].length < this[Cc]))
			for(let t = this[bc].length - 1; t >= this[Cc]; --t) {
				const e = this[bc][t];
				0 === this[wc].get(e) && (this[Sc].delete(e), this[bc].splice(t, 1))
			}
	}
}
/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bc = t => {
	const e = new Map;
	for(const i of t.mappings)
		for(const t of i.variants) e.set(t, {
			material: null,
			gltfMaterialIndex: i.material
		});
	return e
};
class Tc {
	constructor(t) {
		this.parser = t, this.name = "KHR_materials_variants"
	}
	afterRoot(t) {
		const e = this.parser,
			i = e.json;
		if(void 0 === i.extensions || void 0 === i.extensions[this.name]) return null;
		const n = (t => {
			const e = [],
				i = new Set;
			for(const n of t) {
				let t = n,
					s = 0;
				for(; i.has(t);) t = n + "." + ++s;
				i.add(t), e.push(t)
			}
			return e
		})((i.extensions[this.name].variants || []).map((t => t.name)));
		for(const n of t.scenes) n.traverse((t => {
			const n = t;
			if(!n.isMesh) return;
			const s = e.associations.get(n);
			if(null == s || null == s.meshes || null == s.primitives) return;
			const r = i.meshes[s.meshes].primitives[s.primitives].extensions;
			r && r[this.name] && (n.userData.variantMaterials = Bc(r[this.name]))
		}));
		return t.userData.variants = n, Promise.resolve()
	}
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Rc, Dc;
const Lc = new Map,
	Qc = new Map;
let Pc;
const Fc = new class extends Or {
	constructor(t) {
		super(t), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
			position: "POSITION",
			normal: "NORMAL",
			color: "COLOR",
			uv: "TEX_COORD"
		}, this.defaultAttributeTypes = {
			position: "Float32Array",
			normal: "Float32Array",
			color: "Float32Array",
			uv: "Float32Array"
		}
	}
	setDecoderPath(t) {
		return this.decoderPath = t, this
	}
	setDecoderConfig(t) {
		return this.decoderConfig = t, this
	}
	setWorkerLimit(t) {
		return this.workerLimit = t, this
	}
	load(t, e, i, n) {
		const s = new zr(this.manager);
		s.setPath(this.path), s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t, (t => {
			this.decodeDracoFile(t, e).catch(n)
		}), i, n)
	}
	decodeDracoFile(t, e, i, n) {
		const s = {
			attributeIDs: i || this.defaultAttributeIDs,
			attributeTypes: n || this.defaultAttributeTypes,
			useUniqueIDs: !!i
		};
		return this.decodeGeometry(t, s).then(e)
	}
	decodeGeometry(t, e) {
		const i = JSON.stringify(e);
		if(Zo.has(t)) {
			const e = Zo.get(t);
			if(e.key === i) return e.promise;
			if(0 === t.byteLength) throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")
		}
		let n;
		const s = this.workerNextTaskID++,
			r = t.byteLength,
			a = this._getWorker(s, r).then((i => (n = i, new Promise(((i, r) => {
				n._callbacks[s] = {
					resolve: i,
					reject: r
				}, n.postMessage({
					type: "decode",
					id: s,
					taskConfig: e,
					buffer: t
				}, [t])
			}))))).then((t => this._createGeometry(t.geometry)));
		return a.catch((() => !0)).then((() => {
			n && s && this._releaseTask(n, s)
		})), Zo.set(t, {
			key: i,
			promise: a
		}), a
	}
	_createGeometry(t) {
		const e = new xe;
		t.index && e.setIndex(new ce(t.index.array, 1));
		for(let i = 0; i < t.attributes.length; i++) {
			const n = t.attributes[i],
				s = n.name,
				r = n.array,
				a = n.itemSize;
			e.setAttribute(s, new ce(r, a))
		}
		return e
	}
	_loadLibrary(t, e) {
		const i = new zr(this.manager);
		return i.setPath(this.decoderPath), i.setResponseType(e), i.setWithCredentials(this.withCredentials), new Promise(((e, n) => {
			i.load(t, e, void 0, n)
		}))
	}
	preload() {
		return this._initDecoder(), this
	}
	_initDecoder() {
		if(this.decoderPending) return this.decoderPending;
		const t = "object" != typeof WebAssembly || "js" === this.decoderConfig.type,
			e = [];
		return t ? e.push(this._loadLibrary("draco_decoder.js", "text")) : (e.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), e.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(e).then((e => {
			const i = e[0];
			t || (this.decoderConfig.wasmBinary = e[1]);
			const n = tl.toString(),
				s = ["/* draco decoder */", i, "", "/* worker */", n.substring(n.indexOf("{") + 1, n.lastIndexOf("}"))].join("\n");
			this.workerSourceURL = URL.createObjectURL(new Blob([s]))
		})), this.decoderPending
	}
	_getWorker(t, e) {
		return this._initDecoder().then((() => {
			if(this.workerPool.length < this.workerLimit) {
				const t = new Worker(this.workerSourceURL);
				t._callbacks = {}, t._taskCosts = {}, t._taskLoad = 0, t.postMessage({
					type: "init",
					decoderConfig: this.decoderConfig
				}), t.onmessage = function(e) {
					const i = e.data;
					switch(i.type) {
						case "decode":
							t._callbacks[i.id].resolve(i);
							break;
						case "error":
							t._callbacks[i.id].reject(i);
							break;
						default:
							console.error('THREE.DRACOLoader: Unexpected message, "' + i.type + '"')
					}
				}, this.workerPool.push(t)
			} else this.workerPool.sort((function(t, e) {
				return t._taskLoad > e._taskLoad ? -1 : 1
			}));
			const i = this.workerPool[this.workerPool.length - 1];
			return i._taskCosts[t] = e, i._taskLoad += e, i
		}))
	}
	_releaseTask(t, e) {
		t._taskLoad -= t._taskCosts[e], delete t._callbacks[e], delete t._taskCosts[e]
	}
	debug() {
		console.log("Task load: ", this.workerPool.map((t => t._taskLoad)))
	}
	dispose() {
		for(let t = 0; t < this.workerPool.length; ++t) this.workerPool[t].terminate();
		return this.workerPool.length = 0, this
	}
};
let Uc;
const Nc = new fc;
let kc, Oc;
const Gc = Symbol("loader"),
	Hc = Symbol("evictionPolicy"),
	zc = Symbol("GLTFInstance");
class Vc extends n {
	constructor(t) {
		super(), this[Dc] = (new el).register((t => new Tc(t))), this[zc] = t, this[Gc].setDRACOLoader(Fc), this[Gc].setKTX2Loader(Nc)
	}
	static setDRACODecoderLocation(t) {
		Pc = t, Fc.setDecoderPath(t)
	}
	static getDRACODecoderLocation() {
		return Pc
	}
	static setKTX2TranscoderLocation(t) {
		Uc = t, Nc.setTranscoderPath(t)
	}
	static getKTX2TranscoderLocation() {
		return Uc
	}
	static setMeshoptDecoderLocation(t) {
		var e;
		kc !== t && (kc = t, Oc = (e = t, new Promise(((t, i) => {
			const n = document.createElement("script");
			document.body.appendChild(n), n.onload = t, n.onerror = i, n.async = !0, n.src = e
		}))).then((() => MeshoptDecoder.ready)).then((() => MeshoptDecoder)))
	}
	static getMeshoptDecoderLocation() {
		return kc
	}
	static initializeKTX2Loader(t) {
		Nc.detectSupport(t)
	}
	static get cache() {
		return Lc
	}
	static clearCache() {
		Lc.forEach(((t, e) => {
			this.delete(e)
		})), this[Hc].reset()
	}
	static has(t) {
		return Lc.has(t)
	}
	static async delete(t) {
		if(!this.has(t)) return;
		const e = Lc.get(t);
		Qc.delete(t), Lc.delete(t);
		(await e).dispose()
	}
	static hasFinishedLoading(t) {
		return !!Qc.get(t)
	}
	get[(Rc = Hc, Dc = Gc, Hc)]() {
		return this.constructor[Hc]
	}
	async preload(t, e, i = (() => {})) {
		if(this[Gc].setWithCredentials(Vc.withCredentials), this.dispatchEvent({
				type: "preload",
				element: e,
				src: t
			}), !Lc.has(t)) {
			null != Oc && this[Gc].setMeshoptDecoder(await Oc);
			const e = ((t, e, i = (() => {})) => {
					const n = t => {
						const e = t.loaded / t.total;
						i(Math.max(0, Math.min(1, isFinite(e) ? e : 1)))
					};
					return new Promise(((i, s) => {
						e.load(t, i, n, s)
					}))
				})(t, this[Gc], (t => {
					i(.8 * t)
				})),
				n = this[zc],
				s = e.then((t => n.prepare(t))).then((t => (i(.9), new n(t)))).catch((t => (console.error(t), new n)));
			Lc.set(t, s)
		}
		await Lc.get(t), Qc.set(t, !0), i && i(1)
	}
	async load(t, e, i = (() => {})) {
		await this.preload(t, e, i);
		const n = await Lc.get(t),
			s = await n.clone();
		return this[Hc].retain(t), s.dispose = () => {
			this[Hc].release(t)
		}, s
	}
}
Vc[Rc] = new Mc(Vc);
class Wc extends qt {
	constructor(t = document.createElement("div")) {
		super(), this.isCSS2DObject = !0, this.element = t, this.element.style.position = "absolute", this.element.style.userSelect = "none", this.element.setAttribute("draggable", !1), this.addEventListener("removed", (function() {
			this.traverse((function(t) {
				t.element instanceof Element && null !== t.element.parentNode && t.element.parentNode.removeChild(t.element)
			}))
		}))
	}
	copy(t, e) {
		return super.copy(t, e), this.element = t.element.cloneNode(!0), this
	}
}
const qc = new V,
	jc = new _t,
	Yc = new _t,
	Jc = new V,
	Xc = new V;
class Kc {
	constructor(t = {}) {
		const e = this;
		let i, n, s, r;
		const a = {
				objects: new WeakMap
			},
			o = void 0 !== t.element ? t.element : document.createElement("div");

		function l(t, i, n) {
			if(t.isCSS2DObject) {
				qc.setFromMatrixPosition(t.matrixWorld), qc.applyMatrix4(Yc);
				const l = !0 === t.visible && qc.z >= -1 && qc.z <= 1 && !0 === t.layers.test(n.layers);
				if(t.element.style.display = !0 === l ? "" : "none", !0 === l) {
					t.onBeforeRender(e, i, n);
					const a = t.element;
					a.style.transform = "translate(-50%,-50%) translate(" + (qc.x * s + s) + "px," + (-qc.y * r + r) + "px)", a.parentNode !== o && o.appendChild(a), t.onAfterRender(e, i, n)
				}
				const h = {
					distanceToCameraSquared: c(n, t)
				};
				a.objects.set(t, h)
			}
			for(let e = 0, s = t.children.length; e < s; e++) l(t.children[e], i, n)
		}

		function c(t, e) {
			return Jc.setFromMatrixPosition(t.matrixWorld), Xc.setFromMatrixPosition(e.matrixWorld), Jc.distanceToSquared(Xc)
		}
		o.style.overflow = "hidden", this.domElement = o, this.getSize = function() {
			return {
				width: i,
				height: n
			}
		}, this.render = function(t, e) {
			!0 === t.matrixWorldAutoUpdate && t.updateMatrixWorld(), null === e.parent && !0 === e.matrixWorldAutoUpdate && e.updateMatrixWorld(), jc.copy(e.matrixWorldInverse), Yc.multiplyMatrices(e.projectionMatrix, jc), l(t, t, e),
				function(t) {
					const e = function(t) {
							const e = [];
							return t.traverse((function(t) {
								t.isCSS2DObject && e.push(t)
							})), e
						}(t).sort((function(t, e) {
							if(t.renderOrder !== e.renderOrder) return e.renderOrder - t.renderOrder;
							return a.objects.get(t).distanceToCameraSquared - a.objects.get(e).distanceToCameraSquared
						})),
						i = e.length;
					for(let t = 0, n = e.length; t < n; t++) e[t].element.style.zIndex = i - t
				}(t)
		}, this.setSize = function(t, e) {
			i = t, n = e, s = i / 2, r = n / 2, o.style.width = t + "px", o.style.height = e + "px"
		}
	}
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $c = (t, e) => ({
		type: "number",
		number: t,
		unit: e
	}),
	Zc = (() => {
		const t = {};
		return e => {
			const i = e;
			if(i in t) return t[i];
			const n = [];
			let s = 0;
			for(; e;) {
				if(++s > 1e3) {
					e = "";
					break
				}
				const t = th(e),
					i = t.nodes[0];
				if(null == i || 0 === i.terms.length) break;
				n.push(i), e = t.remainingInput
			}
			return t[i] = n
		}
	})(),
	th = (() => {
		const t = /^(\-\-|[a-z\u0240-\uffff])/i,
			e = /^([\*\+\/]|[\-]\s)/i,
			i = /^[\),]/;
		return n => {
			const s = [];
			for(; n.length && (n = n.trim(), !i.test(n));)
				if("(" === n[0]) {
					const {
						nodes: t,
						remainingInput: e
					} = sh(n);
					n = e, s.push({
						type: "function",
						name: {
							type: "ident",
							value: "calc"
						},
						arguments: t
					})
				} else if(t.test(n)) {
				const t = eh(n),
					e = t.nodes[0];
				if("(" === (n = t.remainingInput)[0]) {
					const {
						nodes: t,
						remainingInput: i
					} = sh(n);
					s.push({
						type: "function",
						name: e,
						arguments: t
					}), n = i
				} else s.push(e)
			} else if(e.test(n)) s.push({
				type: "operator",
				value: n[0]
			}), n = n.slice(1);
			else {
				const {
					nodes: t,
					remainingInput: e
				} = "#" === n[0] ? nh(n) : ih(n);
				if(0 === t.length) break;
				s.push(t[0]), n = e
			}
			return {
				nodes: [{
					type: "expression",
					terms: s
				}],
				remainingInput: n
			}
		}
	})(),
	eh = (() => {
		const t = /[^a-z0-9_\-\u0240-\uffff]/i;
		return e => {
			const i = e.match(t);
			return {
				nodes: [{
					type: "ident",
					value: null == i ? e : e.substr(0, i.index)
				}],
				remainingInput: null == i ? "" : e.substr(i.index)
			}
		}
	})(),
	ih = (() => {
		const t = /[\+\-]?(\d+[\.]\d+|\d+|[\.]\d+)([eE][\+\-]?\d+)?/,
			e = /^[a-z%]+/i,
			i = /^(m|mm|cm|rad|deg|[%])$/;
		return n => {
			const s = n.match(t),
				r = null == s ? "0" : s[0],
				a = (n = null == r ? n : n.slice(r.length)).match(e);
			let o = null != a && "" !== a[0] ? a[0] : null;
			const l = null == a ? n : n.slice(o.length);
			return null == o || i.test(o) || (o = null), {
				nodes: [{
					type: "number",
					number: parseFloat(r) || 0,
					unit: o
				}],
				remainingInput: l
			}
		}
	})(),
	nh = (() => {
		const t = /^[a-f0-9]*/i;
		return e => {
			const i = (e = e.slice(1).trim()).match(t);
			return {
				nodes: null == i ? [] : [{
					type: "hex",
					value: i[0]
				}],
				remainingInput: null == i ? e : e.slice(i[0].length)
			}
		}
	})(),
	sh = t => {
		const e = [];
		for(t = t.slice(1).trim(); t.length;) {
			const i = th(t);
			if(e.push(i.nodes[0]), "," === (t = i.remainingInput.trim())[0]) t = t.slice(1).trim();
			else if(")" === t[0]) {
				t = t.slice(1);
				break
			}
		}
		return {
			nodes: e,
			remainingInput: t
		}
	},
	rh = Symbol("visitedTypes");
class ah {
	constructor(t) {
		this[rh] = t
	}
	walk(t, e) {
		const i = t.slice();
		for(; i.length;) {
			const t = i.shift();
			switch(this[rh].indexOf(t.type) > -1 && e(t), t.type) {
				case "expression":
					i.unshift(...t.terms);
					break;
				case "function":
					i.unshift(t.name, ...t.arguments)
			}
		}
	}
}
const oh = Object.freeze({
		type: "number",
		number: 0,
		unit: null
	}),
	lh = (t, e = 0) => {
		let {
			number: i,
			unit: n
		} = t;
		if(isFinite(i)) {
			if("rad" === t.unit || null == t.unit) return t
		} else i = e, n = "rad";
		return {
			type: "number",
			number: ("deg" === n && null != i ? i : 0) * Math.PI / 180,
			unit: "rad"
		}
	},
	ch = (t, e = 0) => {
		let i, {
			number: n,
			unit: s
		} = t;
		if(isFinite(n)) {
			if("m" === t.unit) return t
		} else n = e, s = "m";
		switch(s) {
			default: i = 1;
			break;
			case "cm":
					i = .01;
				break;
			case "mm":
					i = .001
		}
		return {
			type: "number",
			number: i * n,
			unit: "m"
		}
	},
	hh = (() => {
		const t = t => t,
			e = {
				rad: t,
				deg: lh,
				m: t,
				mm: ch,
				cm: ch
			};
		return(t, i = oh) => {
			isFinite(t.number) || (t.number = i.number, t.unit = i.unit);
			const {
				unit: n
			} = t;
			if(null == n) return t;
			const s = e[n];
			return null == s ? i : s(t)
		}
	})();
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uh {
	constructor(t = 50) {
		this.velocity = 0, this.naturalFrequency = 0, this.setDecayTime(t)
	}
	setDecayTime(t) {
		this.naturalFrequency = 1 / Math.max(.001, t)
	}
	update(t, e, i, n) {
		const s = 2e-4 * this.naturalFrequency;
		if(null == t || 0 === n) return e;
		if(t === e && 0 === this.velocity) return e;
		if(i < 0) return t;
		const r = t - e,
			a = this.velocity + this.naturalFrequency * r,
			o = r + i * a,
			l = Math.exp(-this.naturalFrequency * i),
			c = (a - this.naturalFrequency * o) * l,
			h = -this.naturalFrequency * (c + a * l);
		return Math.abs(c) < s * Math.abs(n) && h * r >= 0 ? (this.velocity = 0, e) : (this.velocity = c, e + o * l)
	}
}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dh extends Wc {
	constructor(t) {
		super(document.createElement("div")), this.normal = new V(0, 1, 0), this.initialized = !1, this.referenceCount = 1, this.pivot = document.createElement("div"), this.slot = document.createElement("slot"), this.element.classList.add("annotation-wrapper"), this.slot.name = t.name, this.element.appendChild(this.pivot), this.pivot.appendChild(this.slot), this.updatePosition(t.position), this.updateNormal(t.normal)
	}
	get facingCamera() {
		return !this.element.classList.contains("hide")
	}
	show() {
		this.facingCamera && this.initialized || this.updateVisibility(!0)
	}
	hide() {
		!this.facingCamera && this.initialized || this.updateVisibility(!1)
	}
	increment() {
		this.referenceCount++
	}
	decrement() {
		return this.referenceCount > 0 && --this.referenceCount, 0 === this.referenceCount
	}
	updatePosition(t) {
		if(null == t) return;
		const e = Zc(t)[0].terms;
		for(let t = 0; t < 3; ++t) this.position.setComponent(t, hh(e[t]).number);
		this.updateMatrixWorld()
	}
	updateNormal(t) {
		if(null == t) return;
		const e = Zc(t)[0].terms;
		for(let t = 0; t < 3; ++t) this.normal.setComponent(t, hh(e[t]).number)
	}
	orient(t) {
		this.pivot.style.transform = `rotate(${t}rad)`
	}
	updateVisibility(t) {
		t ? this.element.classList.remove("hide") : this.element.classList.add("hide"), this.slot.assignedNodes().forEach((e => {
			if(e.nodeType !== Node.ELEMENT_NODE) return;
			const i = e,
				n = i.dataset.visibilityAttribute;
			if(null != n) {
				const e = `data-${n}`;
				t ? i.setAttribute(e, "") : i.removeAttribute(e)
			}
			i.dispatchEvent(new CustomEvent("hotspot-visibility", {
				detail: {
					visible: t
				}
			}))
		})), this.initialized = !0
	}
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ah = (t, e, i) => {
		let n = i;
		const s = new V;
		return t.traverseVisible((t => {
			let i, r;
			t.updateWorldMatrix(!1, !1);
			const a = t.geometry;
			if(void 0 !== a)
				if(a.isGeometry) {
					const o = a.vertices;
					for(i = 0, r = o.length; i < r; i++) s.copy(o[i]), t.isSkinnedMesh ? t.boneTransform(i, s) : s.applyMatrix4(t.matrixWorld), n = e(n, s)
				} else if(a.isBufferGeometry) {
				const {
					position: o
				} = a.attributes;
				if(void 0 !== o)
					for(i = 0, r = o.count; i < r; i++) s.fromBufferAttribute(o, i), t.isSkinnedMesh ? t.boneTransform(i, s) : s.applyMatrix4(t.matrixWorld), n = e(n, s)
			}
		})), n
	},
	ph = {
		uniforms: {
			tDiffuse: {
				value: null
			},
			h: {
				value: 1 / 512
			}
		},
		vertexShader: "\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvUv = uv;\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n\t\t}",
		fragmentShader: "\n\n\t\tuniform sampler2D tDiffuse;\n\t\tuniform float h;\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvec4 sum = vec4( 0.0 );\n\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;\n\n\t\t\tgl_FragColor = sum;\n\n\t\t}"
	},
	gh = {
		uniforms: {
			tDiffuse: {
				value: null
			},
			v: {
				value: 1 / 512
			}
		},
		vertexShader: "\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvUv = uv;\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n\t\t}",
		fragmentShader: "\n\n\t\tuniform sampler2D tDiffuse;\n\t\tuniform float v;\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvec4 sum = vec4( 0.0 );\n\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;\n\n\t\t\tgl_FragColor = sum;\n\n\t\t}"
	};

function mh(t, e, i) {
	return(1 - i) * t + i * e
}
/* @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fh extends qt {
	constructor(t, e, i) {
		super(), this.camera = new gi, this.renderTarget = null, this.renderTargetBlur = null, this.depthMaterial = new xs, this.horizontalBlurMaterial = new Ve(ph), this.verticalBlurMaterial = new Ve(gh), this.intensity = 0, this.softness = 1, this.boundingBox = new j, this.size = new V, this.maxDimension = 0, this.isAnimated = !1, this.needsUpdate = !1;
		const {
			camera: n
		} = this;
		n.rotation.x = Math.PI / 2, n.left = -.5, n.right = .5, n.bottom = -.5, n.top = .5, this.add(n);
		const s = new ri,
			r = new ae({
				opacity: 1,
				transparent: !0,
				side: 1
			});
		this.floor = new Ne(s, r), this.floor.userData.shadow = !0, n.add(this.floor), this.blurPlane = new Ne(s), this.blurPlane.visible = !1, n.add(this.blurPlane), t.target.add(this), this.depthMaterial.onBeforeCompile = function(t) {
			t.fragmentShader = t.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );", "gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * opacity );")
		}, this.horizontalBlurMaterial.depthTest = !1, this.verticalBlurMaterial.depthTest = !1, this.setScene(t, e, i)
	}
	setScene(t, e, i) {
		const {
			boundingBox: n,
			size: s,
			rotation: r,
			position: a
		} = this;
		if(this.isAnimated = t.animationNames.length > 0, this.boundingBox.copy(t.boundingBox), this.size.copy(t.size), this.maxDimension = Math.max(s.x, s.y, s.z) * (this.isAnimated ? 2 : 1), this.boundingBox.getCenter(a), "back" === i) {
			const {
				min: t,
				max: e
			} = n;
			[t.y, t.z] = [t.z, t.y], [e.y, e.z] = [e.z, e.y], [s.y, s.z] = [s.z, s.y], r.x = Math.PI / 2, r.y = Math.PI
		} else r.x = 0, r.y = 0;
		if(this.isAnimated) {
			const t = n.min.y,
				e = n.max.y;
			s.y = this.maxDimension, n.expandByVector(s.subScalar(this.maxDimension).multiplyScalar(-.5)), n.min.y = t, n.max.y = e, s.set(this.maxDimension, e - t, this.maxDimension)
		}
		"bottom" === i ? a.y = n.min.y : a.z = n.min.y, this.setSoftness(e)
	}
	setSoftness(t) {
		this.softness = t;
		const {
			size: e,
			camera: i
		} = this, n = this.isAnimated ? 2 : 1, s = n * Math.pow(2, 9 - 3 * t);
		this.setMapSize(s);
		const r = e.y / 2,
			a = e.y * n;
		i.near = 0, i.far = mh(a, r, t), this.depthMaterial.opacity = 1 / t, i.updateProjectionMatrix(), this.setIntensity(this.intensity), this.setOffset(0)
	}
	setMapSize(t) {
		const {
			size: e
		} = this;
		this.isAnimated && (t *= 2);
		const i = Math.floor(e.x > e.z ? t : t * e.x / e.z),
			n = Math.floor(e.x > e.z ? t * e.z / e.x : t),
			s = 10 + i,
			r = 10 + n;
		if(null == this.renderTarget || this.renderTarget.width === s && this.renderTarget.height === r || (this.renderTarget.dispose(), this.renderTarget = null, this.renderTargetBlur.dispose(), this.renderTargetBlur = null), null == this.renderTarget) {
			const t = {
				format: 1023
			};
			this.renderTarget = new O(s, r, t), this.renderTargetBlur = new O(s, r, t), this.floor.material.map = this.renderTarget.texture
		}
		this.camera.scale.set(e.x * (1 + 10 / i), e.z * (1 + 10 / n), 1), this.needsUpdate = !0
	}
	setIntensity(t) {
		this.intensity = t, t > 0 ? (this.visible = !0, this.floor.visible = !0, this.floor.material.opacity = t * mh(.3, 1, this.softness * this.softness)) : (this.visible = !1, this.floor.visible = !1)
	}
	getIntensity() {
		return this.intensity
	}
	setOffset(t) {
		this.floor.position.z = -t + .001 * this.maxDimension
	}
	render(t, e) {
		e.overrideMaterial = this.depthMaterial;
		const i = t.getClearAlpha();
		t.setClearAlpha(0), this.floor.visible = !1;
		const n = t.xr.enabled;
		t.xr.enabled = !1;
		const s = t.getRenderTarget();
		t.setRenderTarget(this.renderTarget), t.render(e, this.camera), e.overrideMaterial = null, this.floor.visible = !0, this.blurShadow(t), t.xr.enabled = n, t.setRenderTarget(s), t.setClearAlpha(i)
	}
	blurShadow(t) {
		const {
			camera: e,
			horizontalBlurMaterial: i,
			verticalBlurMaterial: n,
			renderTarget: s,
			renderTargetBlur: r,
			blurPlane: a
		} = this;
		a.visible = !0, a.material = i, i.uniforms.h.value = 1 / this.renderTarget.width, i.uniforms.tDiffuse.value = this.renderTarget.texture, t.setRenderTarget(r), t.render(a, e), a.material = n, n.uniforms.v.value = 1 / this.renderTarget.height, n.uniforms.tDiffuse.value = this.renderTargetBlur.texture, t.setRenderTarget(s), t.render(a, e), a.visible = !1
	}
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vh = new V,
	yh = new V,
	xh = new V,
	_h = new class {
		constructor(t, e, i = 0, n = 1 / 0) {
			this.ray = new xt(t, e), this.near = i, this.far = n, this.camera = null, this.layers = new Dt, this.params = {
				Mesh: {},
				Line: {
					threshold: 1
				},
				LOD: {},
				Points: {
					threshold: 1
				},
				Sprite: {}
			}
		}
		set(t, e) {
			this.ray.set(t, e)
		}
		setFromCamera(t, e) {
			e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type)
		}
		intersectObject(t, e = !0, i = []) {
			return _a(t, this, i, e), i.sort(xa), i
		}
		intersectObjects(t, e = !0, i = []) {
			for(let n = 0, s = t.length; n < s; n++) _a(t[n], this, i, e);
			return i.sort(xa), i
		}
	},
	Eh = new V,
	wh = new v;
class bh extends Ps {
	constructor({
		canvas: t,
		element: e,
		width: i,
		height: n
	}) {
		super(), this.context = null, this.annotationRenderer = new Kc, this.schemaElement = document.createElement("script"), this.width = 1, this.height = 1, this.aspect = 1, this.scaleStep = 0, this.renderCount = 0, this.externalRenderer = null, this.camera = new qe(45, 1, .1, 100), this.xrCamera = null, this.url = null, this.target = new qt, this.animationNames = [], this.boundingBox = new j, this.boundingSphere = new dt, this.size = new V, this.idealAspect = 0, this.framedFoVDeg = 0, this.shadow = null, this.shadowIntensity = 0, this.shadowSoftness = 1, this.bakedShadows = new Set, this.exposure = 1, this.canScale = !0, this.isDirty = !1, this.goalTarget = new V, this.targetDamperX = new uh, this.targetDamperY = new uh, this.targetDamperZ = new uh, this._currentGLTF = null, this._model = null, this.cancelPendingSourceChange = null, this.animationsByName = new Map, this.currentAnimationAction = null, this.name = "ModelScene", this.element = e, this.canvas = t, this.camera = new qe(45, 1, .1, 100), this.camera.name = "MainCamera", this.add(this.target), this.setSize(i, n), this.target.name = "Target", this.mixer = new ya(this.target);
		const {
			domElement: s
		} = this.annotationRenderer, {
			style: r
		} = s;
		r.display = "none", r.pointerEvents = "none", r.position = "absolute", r.top = "0", this.element.shadowRoot.querySelector(".default").appendChild(s), this.schemaElement.setAttribute("type", "application/ld+json")
	}
	createContext() {
		this.context = this.canvas.getContext("2d")
	}
	getCamera() {
		return null != this.xrCamera ? this.xrCamera : this.camera
	}
	queueRender() {
		this.isDirty = !0
	}
	shouldRender() {
		return this.isDirty
	}
	hasRendered() {
		this.isDirty = !1
	}
	forceRescale() {
		this.scaleStep = -1, this.queueRender()
	}
	async setObject(t) {
		this.reset(), this._model = t, this.target.add(t), await this.setupScene()
	}
	async setSource(t, e = (() => {})) {
		if(!t || t === this.url) return void e(1);
		if(this.reset(), this.url = t, null != this.externalRenderer) {
			const t = await this.externalRenderer.load(e);
			return this.boundingSphere.radius = t.framedRadius, void(this.idealAspect = t.fieldOfViewAspect)
		}
		let i;
		null != this.cancelPendingSourceChange && (this.cancelPendingSourceChange(), this.cancelPendingSourceChange = null);
		try {
			i = await new Promise((async(i, n) => {
				this.cancelPendingSourceChange = () => n();
				try {
					i(await this.element[ad].loader.load(t, this.element, e))
				} catch(t) {
					n(t)
				}
			}))
		} catch(t) {
			if(null == t) return;
			throw t
		}
		this.reset(), this.url = t, this._currentGLTF = i, null != i && (this._model = i.scene, this.target.add(i.scene));
		const {
			animations: n
		} = i, s = new Map, r = [];
		for(const t of n) s.set(t.name, t), r.push(t.name);
		this.animations = n, this.animationsByName = s, this.animationNames = r, await this.setupScene()
	}
	async setupScene() {
		this.applyTransform(), this.updateBoundingBox(), await this.updateFraming(), this.updateShadow(), this.setShadowIntensity(this.shadowIntensity)
	}
	reset() {
		this.url = null, this.queueRender(), null != this.shadow && this.shadow.setIntensity(0), this.bakedShadows.clear();
		const {
			_model: t
		} = this;
		null != t && (t.removeFromParent(), this._model = null);
		const e = this._currentGLTF;
		null != e && (e.dispose(), this._currentGLTF = null), null != this.currentAnimationAction && (this.currentAnimationAction.stop(), this.currentAnimationAction = null), this.mixer.stopAllAction(), this.mixer.uncacheRoot(this)
	}
	get currentGLTF() {
		return this._currentGLTF
	}
	setSize(t, e) {
		if(this.width !== t || this.height !== e) {
			if(this.width = Math.max(t, 1), this.height = Math.max(e, 1), this.annotationRenderer.setSize(t, e), this.aspect = this.width / this.height, null != this.externalRenderer) {
				const i = Wo();
				this.externalRenderer.resize(t * i, e * i)
			}
			this.queueRender()
		}
	}
	markBakedShadow(t) {
		t.userData.shadow = !0, this.bakedShadows.add(t)
	}
	unmarkBakedShadow(t) {
		t.userData.shadow = !1, t.visible = !0, this.bakedShadows.delete(t), this.boundingBox.expandByObject(t)
	}
	findBakedShadows(t) {
		const e = new j;
		t.traverse((t => {
			const i = t;
			if(!i.isMesh) return;
			if(!i.material.transparent) return;
			e.setFromObject(i);
			const n = e.getSize(Eh),
				s = Math.min(n.x, n.y, n.z);
			Math.max(n.x, n.y, n.z) < 100 * s || this.markBakedShadow(i)
		}))
	}
	checkBakedShadows() {
		const {
			min: t,
			max: e
		} = this.boundingBox, i = new j;
		this.boundingBox.getSize(this.size);
		for(const n of this.bakedShadows) i.setFromObject(n), i.min.y < t.y + this.size.y / 100 && i.min.x <= t.x && i.max.x >= e.x && i.min.z <= t.z && i.max.z >= e.z || i.min.z < t.z + this.size.z / 100 && i.min.x <= t.x && i.max.x >= e.x && i.min.y <= t.y && i.max.y >= e.y || this.unmarkBakedShadow(n)
	}
	applyTransform() {
		const {
			model: t
		} = this;
		if(null == t) return;
		const e = Zc(this.element.orientation)[0].terms,
			i = hh(e[0]).number,
			n = hh(e[1]).number,
			s = hh(e[2]).number;
		t.quaternion.setFromEuler(new Rt(n, s, i, "YXZ"));
		const r = Zc(this.element.scale)[0].terms;
		t.scale.set(r[0].number, r[1].number, r[2].number)
	}
	updateBoundingBox() {
		const {
			model: t
		} = this;
		if(null == t) return;
		this.target.remove(t), this.findBakedShadows(t);
		const e = (t, e) => t.expandByPoint(e);
		this.setBakedShadowVisibility(!1), this.boundingBox = Ah(t, e, new j), this.boundingBox.isEmpty() && (this.setBakedShadowVisibility(!0), this.bakedShadows.forEach((t => this.unmarkBakedShadow(t))), this.boundingBox = Ah(t, e, new j)), this.checkBakedShadows(), this.setBakedShadowVisibility(), this.boundingBox.getSize(this.size), this.target.add(t)
	}
	async updateFraming() {
		const {
			model: t
		} = this;
		if(null == t) return;
		this.target.remove(t), this.setBakedShadowVisibility(!1);
		const {
			center: e
		} = this.boundingSphere;
		this.element.requestUpdate("cameraTarget"), await this.element.updateComplete, e.copy(this.getTarget());
		this.boundingSphere.radius = Math.sqrt(Ah(t, ((t, i) => Math.max(t, e.distanceToSquared(i))), 0));
		this.idealAspect = Ah(t, ((t, i) => {
			i.sub(e);
			const n = Math.sqrt(i.x * i.x + i.z * i.z);
			return Math.max(t, n / (this.idealCameraDistance() - Math.abs(i.y)))
		}), 0) / Math.tan(this.framedFoVDeg / 2 * Math.PI / 180), this.setBakedShadowVisibility(), this.target.add(t)
	}
	setBakedShadowVisibility(t = this.shadowIntensity <= 0) {
		for(const e of this.bakedShadows) e.visible = t
	}
	idealCameraDistance() {
		const t = this.framedFoVDeg / 2 * Math.PI / 180;
		return this.boundingSphere.radius / Math.sin(t)
	}
	adjustedFoV(t) {
		const e = Math.tan(t / 2 * Math.PI / 180) * Math.max(1, this.idealAspect / this.aspect);
		return 2 * Math.atan(e) * 180 / Math.PI
	}
	getNDC(t, e) {
		if(null != this.xrCamera) wh.set(t / window.screen.width, e / window.screen.height);
		else {
			const i = this.element.getBoundingClientRect();
			wh.set((t - i.x) / this.width, (e - i.y) / this.height)
		}
		return wh.multiplyScalar(2).subScalar(1), wh.y *= -1, wh
	}
	getSize() {
		return {
			width: this.width,
			height: this.height
		}
	}
	setEnvironmentAndSkybox(t, e) {
		this.element[ad].arRenderer.presentedScene !== this && (this.environment = t, this.background = e, this.queueRender())
	}
	setTarget(t, e, i) {
		this.goalTarget.set(-t, -e, -i)
	}
	setTargetDamperDecayTime(t) {
		this.targetDamperX.setDecayTime(t), this.targetDamperY.setDecayTime(t), this.targetDamperZ.setDecayTime(t)
	}
	getTarget() {
		return this.goalTarget.clone().multiplyScalar(-1)
	}
	jumpToGoal() {
		this.updateTarget(1e4)
	}
	updateTarget(t) {
		const e = this.goalTarget,
			i = this.target.position;
		if(e.equals(i)) return !1; {
			const n = this.boundingSphere.radius / 10;
			let {
				x: s,
				y: r,
				z: a
			} = i;
			return s = this.targetDamperX.update(s, e.x, t, n), r = this.targetDamperY.update(r, e.y, t, n), a = this.targetDamperZ.update(a, e.z, t, n), this.target.position.set(s, r, a), this.target.updateMatrixWorld(), this.queueRender(), !0
		}
	}
	pointTowards(t, e) {
		const {
			x: i,
			z: n
		} = this.position;
		this.yaw = Math.atan2(t - i, e - n)
	}
	get model() {
		return this._model
	}
	set yaw(t) {
		this.rotation.y = t, this.queueRender()
	}
	get yaw() {
		return this.rotation.y
	}
	set animationTime(t) {
		this.mixer.setTime(t), this.queueShadowRender()
	}
	get animationTime() {
		if(null != this.currentAnimationAction) {
			const t = Math.max(this.currentAnimationAction._loopCount, 0);
			return 2202 === this.currentAnimationAction.loop && 1 == (1 & t) ? this.duration - this.currentAnimationAction.time : this.currentAnimationAction.time
		}
		return 0
	}
	set animationTimeScale(t) {
		this.mixer.timeScale = t
	}
	get animationTimeScale() {
		return this.mixer.timeScale
	}
	get duration() {
		return null != this.currentAnimationAction && this.currentAnimationAction.getClip() ? this.currentAnimationAction.getClip().duration : 0
	}
	get hasActiveAnimation() {
		return null != this.currentAnimationAction
	}
	playAnimation(t = null, e = 0, i = 2201, n = 1 / 0) {
		if(null == this._currentGLTF) return;
		const {
			animations: s
		} = this;
		if(null == s || 0 === s.length) return void console.warn("Cannot play animation (model does not have any animations)");
		let r = null;
		if(null != t && (r = this.animationsByName.get(t), null == r)) {
			const e = parseInt(t);
			!isNaN(e) && e >= 0 && e < s.length && (r = s[e])
		}
		null == r && (r = s[0]);
		try {
			const {
				currentAnimationAction: t
			} = this, s = this.mixer.clipAction(r, this);
			this.currentAnimationAction = s, this.element.paused ? this.mixer.stopAllAction() : (s.paused = !1, null != t && s !== t ? s.crossFadeFrom(t, e, !1) : this.animationTimeScale > 0 && this.animationTime == this.duration && (this.animationTime = 0)), s.setLoop(i, n), s.enabled = !0, s.clampWhenFinished = !0, s.play()
		} catch(t) {
			console.error(t)
		}
	}
	stopAnimation() {
		this.currentAnimationAction = null, this.mixer.stopAllAction()
	}
	updateAnimation(t) {
		this.mixer.update(t), this.queueShadowRender()
	}
	subscribeMixerEvent(t, e) {
		this.mixer.addEventListener(t, e)
	}
	updateShadow() {
		const t = this.shadow;
		if(null != t) {
			const e = "wall" === this.element.arPlacement ? "back" : "bottom";
			t.setScene(this, this.shadowSoftness, e), t.needsUpdate = !0
		}
	}
	renderShadow(t) {
		const e = this.shadow;
		null != e && 1 == e.needsUpdate && (e.render(t, this), e.needsUpdate = !1)
	}
	queueShadowRender() {
		null != this.shadow && (this.shadow.needsUpdate = !0)
	}
	setShadowIntensity(t) {
		if(this.shadowIntensity = t, null != this._currentGLTF && (this.setBakedShadowVisibility(), !(t <= 0 && null == this.shadow))) {
			if(null == this.shadow) {
				const t = "wall" === this.element.arPlacement ? "back" : "bottom";
				this.shadow = new fh(this, this.shadowSoftness, t)
			}
			this.shadow.setIntensity(t)
		}
	}
	setShadowSoftness(t) {
		this.shadowSoftness = t;
		const e = this.shadow;
		null != e && e.setSoftness(t)
	}
	setShadowOffset(t) {
		const e = this.shadow;
		null != e && e.setOffset(t)
	}
	get raycaster() {
		return _h
	}
	positionAndNormalFromPoint(t, e = this) {
		this.raycaster.setFromCamera(t, this.getCamera());
		const i = this.raycaster.intersectObject(e, !0).find((t => t.object.visible && !t.object.userData.shadow));
		return null == i || null == i.face ? null : null == i.uv ? {
			position: i.point,
			normal: i.face.normal,
			uv: null
		} : (i.face.normal.applyNormalMatrix((new y).getNormalMatrix(i.object.matrixWorld)), {
			position: i.point,
			normal: i.face.normal,
			uv: i.uv
		})
	}
	addHotspot(t) {
		this.target.add(t), this.annotationRenderer.domElement.appendChild(t.element)
	}
	removeHotspot(t) {
		this.target.remove(t)
	}
	forHotspots(t) {
		const {
			children: e
		} = this.target;
		for(let i = 0, n = e.length; i < n; i++) {
			const n = e[i];
			n instanceof dh && t(n)
		}
	}
	updateHotspots(t) {
		this.forHotspots((e => {
			vh.copy(t), yh.setFromMatrixPosition(e.matrixWorld), vh.sub(yh), xh.copy(e.normal).transformDirection(this.target.matrixWorld), vh.dot(xh) < 0 ? e.hide() : e.show()
		}))
	}
	orientHotspots(t) {
		this.forHotspots((e => {
			e.orient(t)
		}))
	}
	setHotspotsVisibility(t) {
		this.forHotspots((e => {
			e.visible = t
		}))
	}
	updateSchema(t) {
		var e;
		const {
			schemaElement: i,
			element: n
		} = this, {
			alt: s,
			poster: r,
			iosSrc: a
		} = n;
		if(null != t) {
			const n = [{
				"@type": "MediaObject",
				contentUrl: t,
				encodingFormat: "gltf" === (null === (e = t.split(".").pop()) || void 0 === e ? void 0 : e.toLowerCase()) ? "model/gltf+json" : "model/gltf-binary"
			}];
			a && n.push({
				"@type": "MediaObject",
				contentUrl: a,
				encodingFormat: "model/vnd.usdz+zip"
			});
			const o = {
				"@context": "http://schema.org/",
				"@type": "3DModel",
				image: null != r ? r : void 0,
				name: null != s ? s : void 0,
				encoding: n
			};
			i.textContent = JSON.stringify(o), document.head.appendChild(i)
		} else null != i.parentElement && i.parentElement.removeChild(i)
	}
}
class Ih {
	constructor(t, e, i, n, s) {
		this.xrLight = t, this.renderer = e, this.lightProbe = i, this.xrWebGLBinding = null, this.estimationStartCallback = s, this.frameCallback = this.onXRFrame.bind(this);
		const r = e.xr.getSession();
		if(n && "XRWebGLBinding" in window) {
			const i = new Je(16);
			t.environment = i.texture;
			const n = e.getContext();
			switch(r.preferredReflectionFormat) {
				case "srgba8":
					n.getExtension("EXT_sRGB");
					break;
				case "rgba16f":
					n.getExtension("OES_texture_half_float")
			}
			this.xrWebGLBinding = new XRWebGLBinding(r, n), this.lightProbe.addEventListener("reflectionchange", (() => {
				this.updateReflection()
			}))
		}
		r.requestAnimationFrame(this.frameCallback)
	}
	updateReflection() {
		const t = this.renderer.properties.get(this.xrLight.environment);
		if(t) {
			const e = this.xrWebGLBinding.getReflectionCubeMap(this.lightProbe);
			e && (t.__webglTexture = e, this.xrLight.environment.needsPMREMUpdate = !0)
		}
	}
	onXRFrame(t, e) {
		if(!this.xrLight) return;
		e.session.requestAnimationFrame(this.frameCallback);
		const i = e.getLightEstimate(this.lightProbe);
		if(i) {
			this.xrLight.lightProbe.sh.fromArray(i.sphericalHarmonicsCoefficients), this.xrLight.lightProbe.intensity = 1;
			const t = Math.max(1, Math.max(i.primaryLightIntensity.x, Math.max(i.primaryLightIntensity.y, i.primaryLightIntensity.z)));
			this.xrLight.directionalLight.color.setRGB(i.primaryLightIntensity.x / t, i.primaryLightIntensity.y / t, i.primaryLightIntensity.z / t), this.xrLight.directionalLight.intensity = t, this.xrLight.directionalLight.position.copy(i.primaryLightDirection), this.estimationStartCallback && (this.estimationStartCallback(), this.estimationStartCallback = null)
		}
	}
	dispose() {
		this.xrLight = null, this.renderer = null, this.lightProbe = null, this.xrWebGLBinding = null
	}
}
class Ch extends Ss {
	constructor(t, e = !0) {
		super(), this.lightProbe = new la, this.lightProbe.intensity = 0, this.add(this.lightProbe), this.directionalLight = new aa, this.directionalLight.intensity = 0, this.add(this.directionalLight), this.environment = null;
		let i = null,
			n = !1;
		t.xr.addEventListener("sessionstart", (() => {
			const s = t.xr.getSession();
			"requestLightProbe" in s && s.requestLightProbe({
				reflectionFormat: s.preferredReflectionFormat
			}).then((s => {
				i = new Ih(this, t, s, e, (() => {
					n = !0, this.dispatchEvent({
						type: "estimationstart"
					})
				}))
			}))
		})), t.xr.addEventListener("sessionend", (() => {
			i && (i.dispose(), i = null), n && this.dispatchEvent({
				type: "estimationend"
			})
		})), this.dispose = () => {
			i && (i.dispose(), i = null), this.remove(this.lightProbe), this.lightProbe = null, this.remove(this.directionalLight), this.directionalLight = null, this.environment = null
		}
	}
}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sh = Math.PI / 24,
	Mh = new v,
	Bh = (t, e, i) => {
		let n = e > 0 ? i > 0 ? 0 : -Math.PI / 2 : i > 0 ? Math.PI / 2 : Math.PI;
		for(let s = 0; s <= 12; ++s) t.push(e + .17 * Math.cos(n), i + .17 * Math.sin(n), 0, e + .2 * Math.cos(n), i + .2 * Math.sin(n), 0), n += Sh
	};
class Th extends Ne {
	constructor(t, e) {
		const i = new xe,
			n = [],
			s = [],
			{
				size: r,
				boundingBox: a
			} = t,
			o = r.x / 2,
			l = ("back" === e ? r.y : r.z) / 2;
		Bh(s, o, l), Bh(s, -o, l), Bh(s, -o, -l), Bh(s, o, -l);
		const c = s.length / 3;
		for(let t = 0; t < c - 2; t += 2) n.push(t, t + 1, t + 3, t, t + 3, t + 2);
		const h = c - 2;
		n.push(h, h + 1, 1, h, 1, 0), i.setAttribute("position", new de(s, 3)), i.setIndex(n), super(i), this.side = e;
		const u = this.material;
		switch(u.side = 2, u.transparent = !0, u.opacity = 0, this.goalOpacity = 0, this.opacityDamper = new uh, this.hitPlane = new Ne(new ri(2 * (o + .2), 2 * (l + .2))), this.hitPlane.visible = !1, this.hitPlane.material.side = 2, this.add(this.hitPlane), a.getCenter(this.position), e) {
			case "bottom":
				this.rotateX(-Math.PI / 2), this.shadowHeight = a.min.y, this.position.y = this.shadowHeight;
				break;
			case "back":
				this.shadowHeight = a.min.z, this.position.z = this.shadowHeight
		}
		t.target.add(this), this.offsetHeight = 0
	}
	getHit(t, e, i) {
		Mh.set(e, -i), this.hitPlane.visible = !0;
		const n = t.positionAndNormalFromPoint(Mh, this.hitPlane);
		return this.hitPlane.visible = !1, null == n ? null : n.position
	}
	getExpandedHit(t, e, i) {
		this.hitPlane.scale.set(1e3, 1e3, 1e3), this.hitPlane.updateMatrixWorld();
		const n = this.getHit(t, e, i);
		return this.hitPlane.scale.set(1, 1, 1), n
	}
	set offsetHeight(t) {
		t -= .001, "back" === this.side ? this.position.z = this.shadowHeight + t : this.position.y = this.shadowHeight + t
	}
	get offsetHeight() {
		return "back" === this.side ? this.position.z - this.shadowHeight : this.position.y - this.shadowHeight
	}
	set show(t) {
		this.goalOpacity = t ? .75 : 0
	}
	updateOpacity(t) {
		const e = this.material;
		e.opacity = this.opacityDamper.update(e.opacity, this.goalOpacity, t, 1), this.visible = e.opacity > 0
	}
	dispose() {
		var t;
		const {
			geometry: e,
			material: i
		} = this.hitPlane;
		e.dispose(), i.dispose(), this.geometry.dispose(), this.material.dispose(), null === (t = this.parent) || void 0 === t || t.remove(this)
	}
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rh = "not-presenting",
	Dh = "session-started",
	Lh = "object-placed",
	Qh = "failed",
	Ph = "tracking",
	Fh = "not-tracking",
	Uh = new V,
	Nh = new _t,
	kh = new V,
	Oh = new qe(45, 1, .1, 100);
class Gh extends n {
	constructor(t) {
		super(), this.renderer = t, this.currentSession = null, this.placeOnWall = !1, this.placementBox = null, this.lastTick = null, this.turntableRotation = null, this.oldShadowIntensity = null, this.frame = null, this.initialHitSource = null, this.transientHitTestSource = null, this.inputSource = null, this._presentedScene = null, this.resolveCleanup = null, this.exitWebXRButtonContainer = null, this.overlay = null, this.xrLight = null, this.tracking = !0, this.frames = 0, this.initialized = !1, this.oldTarget = new V, this.placementComplete = !1, this.isTranslating = !1, this.isRotating = !1, this.isTwoFingering = !1, this.lastDragPosition = new V, this.firstRatio = 0, this.lastAngle = 0, this.goalPosition = new V, this.goalYaw = 0, this.goalScale = 1, this.xDamper = new uh, this.yDamper = new uh, this.zDamper = new uh, this.yawDamper = new uh, this.scaleDamper = new uh, this.onExitWebXRButtonContainerClick = () => this.stopPresenting(), this.onUpdateScene = () => {
			null != this.placementBox && this.isPresenting && (this.placementBox.dispose(), this.placementBox = new Th(this.presentedScene, this.placeOnWall ? "back" : "bottom"))
		}, this.onSelectStart = t => {
			const e = this.transientHitTestSource;
			if(null == e) return;
			const i = this.frame.getHitTestResultsForTransientInput(e),
				n = this.presentedScene,
				s = this.placementBox;
			if(1 === i.length) {
				this.inputSource = t.inputSource;
				const {
					axes: e
				} = this.inputSource.gamepad, i = s.getHit(this.presentedScene, e[0], e[1]);
				s.show = !0, null != i ? (this.isTranslating = !0, this.lastDragPosition.copy(i)) : !1 === this.placeOnWall && (this.isRotating = !0, this.lastAngle = 1.5 * e[0])
			} else if(2 === i.length) {
				s.show = !0, this.isTwoFingering = !0;
				const {
					separation: t
				} = this.fingerPolar(i);
				this.firstRatio = t / n.scale.x
			}
		}, this.onSelectEnd = () => {
			this.isTranslating = !1, this.isRotating = !1, this.isTwoFingering = !1, this.inputSource = null, this.goalPosition.y += this.placementBox.offsetHeight * this.presentedScene.scale.x, this.placementBox.show = !1
		}, this.threeRenderer = t.threeRenderer, this.threeRenderer.xr.enabled = !0
	}
	async resolveARSession() {
		Go();
		const t = await navigator.xr.requestSession("immersive-ar", {
			requiredFeatures: ["hit-test"],
			optionalFeatures: ["dom-overlay", "light-estimation"],
			domOverlay: this.overlay ? {
				root: this.overlay
			} : void 0
		});
		return this.threeRenderer.xr.setReferenceSpaceType("local"), await this.threeRenderer.xr.setSession(t), this.threeRenderer.xr.cameraAutoUpdate = !1, t
	}
	get presentedScene() {
		return this._presentedScene
	}
	async supportsPresentation() {
		try {
			return Go(), await navigator.xr.isSessionSupported("immersive-ar")
		} catch(t) {
			return console.warn("Request to present in WebXR denied:"), console.warn(t), console.warn("Falling back to next ar-mode"), !1
		}
	}
	async present(t, e = !1) {
		this.isPresenting && console.warn("Cannot present while a model is already presenting");
		let i = new Promise(((t, e) => {
			requestAnimationFrame((() => t()))
		}));
		t.setHotspotsVisibility(!1), t.queueRender(), await i, this._presentedScene = t, this.overlay = t.element.shadowRoot.querySelector("div.default"), !0 === e && (this.xrLight = new Ch(this.threeRenderer), this.xrLight.addEventListener("estimationstart", (() => {
			if(!this.isPresenting || null == this.xrLight) return;
			const t = this.presentedScene;
			t.add(this.xrLight), t.environment = this.xrLight.environment
		})));
		const n = await this.resolveARSession();
		n.addEventListener("end", (() => {
			this.postSessionCleanup()
		}), {
			once: !0
		});
		const s = t.element.shadowRoot.querySelector(".slot.exit-webxr-ar-button");
		s.classList.add("enabled"), s.addEventListener("click", this.onExitWebXRButtonContainerClick), this.exitWebXRButtonContainer = s;
		const r = await n.requestReferenceSpace("viewer");
		this.tracking = !0, this.frames = 0, this.initialized = !1, this.turntableRotation = t.yaw, this.goalYaw = t.yaw, this.goalScale = 1, t.background = null, this.oldShadowIntensity = t.shadowIntensity, t.setShadowIntensity(.01), this.oldTarget.copy(t.getTarget()), t.element.addEventListener("load", this.onUpdateScene);
		const a = 20 * Math.PI / 180,
			o = !0 === this.placeOnWall ? void 0 : new XRRay(new DOMPoint(0, 0, 0), {
				x: 0,
				y: -Math.sin(a),
				z: -Math.cos(a)
			});
		n.requestHitTestSource({
			space: r,
			offsetRay: o
		}).then((t => {
			this.initialHitSource = t
		})), this.currentSession = n, this.placementBox = new Th(t, this.placeOnWall ? "back" : "bottom"), this.placementComplete = !1, this.lastTick = performance.now(), this.dispatchEvent({
			type: "status",
			status: Dh
		})
	}
	async stopPresenting() {
		if(!this.isPresenting) return;
		const t = new Promise((t => {
			this.resolveCleanup = t
		}));
		try {
			await this.currentSession.end(), await t
		} catch(t) {
			console.warn("Error while trying to end WebXR AR session"), console.warn(t), this.postSessionCleanup()
		}
	}
	get isPresenting() {
		return null != this.presentedScene
	}
	get target() {
		return this.oldTarget
	}
	updateTarget() {
		const t = this.presentedScene;
		if(null != t) {
			const e = t.getTarget();
			this.oldTarget.copy(e), this.placeOnWall ? e.z = t.boundingBox.min.z : e.y = t.boundingBox.min.y, t.setTarget(e.x, e.y, e.z)
		}
	}
	postSessionCleanup() {
		const t = this.currentSession;
		null != t && (t.removeEventListener("selectstart", this.onSelectStart), t.removeEventListener("selectend", this.onSelectEnd), this.currentSession = null);
		const e = this.presentedScene;
		if(this._presentedScene = null, null != e) {
			const {
				element: t
			} = e;
			null != this.xrLight && (e.remove(this.xrLight), this.xrLight.dispose(), this.xrLight = null), e.position.set(0, 0, 0), e.scale.set(1, 1, 1), e.setShadowOffset(0);
			const i = this.turntableRotation;
			null != i && (e.yaw = i);
			const n = this.oldShadowIntensity;
			null != n && e.setShadowIntensity(n), e.setEnvironmentAndSkybox(t[Yo], t[Jo]);
			const s = this.oldTarget;
			e.setTarget(s.x, s.y, s.z), e.xrCamera = null, e.element.removeEventListener("load", this.onUpdateScene), e.orientHotspots(0), t.requestUpdate("cameraTarget"), t.requestUpdate("maxCameraOrbit"), t[rd](t.getBoundingClientRect())
		}
		this.renderer.height = 0;
		const i = this.exitWebXRButtonContainer;
		null != i && (i.classList.remove("enabled"), i.removeEventListener("click", this.onExitWebXRButtonContainerClick), this.exitWebXRButtonContainer = null);
		const n = this.transientHitTestSource;
		null != n && (n.cancel(), this.transientHitTestSource = null);
		const s = this.initialHitSource;
		null != s && (s.cancel(), this.initialHitSource = null), null != this.placementBox && (this.placementBox.dispose(), this.placementBox = null), this.lastTick = null, this.turntableRotation = null, this.oldShadowIntensity = null, this.frame = null, this.inputSource = null, this.overlay = null, null != this.resolveCleanup && this.resolveCleanup(), this.dispatchEvent({
			type: "status",
			status: Rh
		})
	}
	updateView(t) {
		const e = this.presentedScene,
			i = this.threeRenderer.xr;
		i.updateCamera(Oh), e.xrCamera = i.getCamera();
		const {
			elements: n
		} = e.getCamera().matrixWorld;
		if(e.orientHotspots(Math.atan2(n[1], n[5])), this.initialized || (this.placeInitially(), this.initialized = !0), t.requestViewportScale && t.recommendedViewportScale) {
			const e = t.recommendedViewportScale;
			t.requestViewportScale(Math.max(e, .25))
		}
		const s = this.currentSession.renderState.baseLayer.getViewport(t);
		this.threeRenderer.setViewport(s.x, s.y, s.width, s.height)
	}
	placeInitially() {
		const t = this.presentedScene,
			{
				position: e,
				element: i
			} = t,
			n = t.getCamera(),
			{
				width: s,
				height: r
			} = this.overlay.getBoundingClientRect();
		t.setSize(s, r), n.projectionMatrixInverse.copy(n.projectionMatrix).invert();
		const {
			theta: a,
			radius: o
		} = i.getCameraOrbit(), l = n.getWorldDirection(Uh);
		t.yaw = Math.atan2(-l.x, -l.z) - a, this.goalYaw = t.yaw, e.copy(n.position).add(l.multiplyScalar(o)), this.updateTarget();
		const c = t.getTarget();
		e.add(c).sub(this.oldTarget), this.goalPosition.copy(e), t.setHotspotsVisibility(!0);
		const {
			session: h
		} = this.frame;
		h.addEventListener("selectstart", this.onSelectStart), h.addEventListener("selectend", this.onSelectEnd), h.requestHitTestSourceForTransientInput({
			profile: "generic-touchscreen"
		}).then((t => {
			this.transientHitTestSource = t
		}))
	}
	getTouchLocation() {
		const {
			axes: t
		} = this.inputSource.gamepad;
		let e = this.placementBox.getExpandedHit(this.presentedScene, t[0], t[1]);
		return null != e && (Uh.copy(e).sub(this.presentedScene.getCamera().position), Uh.length() > 10) ? null : e
	}
	getHitPoint(t) {
		const e = this.threeRenderer.xr.getReferenceSpace(),
			i = t.getPose(e);
		if(null == i) return null;
		const n = Nh.fromArray(i.transform.matrix);
		return !0 === this.placeOnWall && (this.goalYaw = Math.atan2(n.elements[4], n.elements[6])), n.elements[5] > .75 !== this.placeOnWall ? kh.setFromMatrixPosition(n) : null
	}
	moveToFloor(t) {
		const e = this.initialHitSource;
		if(null == e) return;
		const i = t.getHitTestResults(e);
		if(0 == i.length) return;
		const n = i[0],
			s = this.getHitPoint(n);
		null != s && (this.placementBox.show = !0, this.isTranslating || (this.placeOnWall ? this.goalPosition.copy(s) : this.goalPosition.y = s.y), e.cancel(), this.initialHitSource = null, this.dispatchEvent({
			type: "status",
			status: Lh
		}))
	}
	fingerPolar(t) {
		const e = t[0].inputSource.gamepad.axes,
			i = t[1].inputSource.gamepad.axes,
			n = i[0] - e[0],
			s = i[1] - e[1],
			r = Math.atan2(s, n);
		let a = this.lastAngle - r;
		return a > Math.PI ? a -= 2 * Math.PI : a < -Math.PI && (a += 2 * Math.PI), this.lastAngle = r, {
			separation: Math.sqrt(n * n + s * s),
			deltaYaw: a
		}
	}
	processInput(t) {
		const e = this.transientHitTestSource;
		if(null == e) return;
		if(!this.isTranslating && !this.isTwoFingering && !this.isRotating) return;
		const i = t.getHitTestResultsForTransientInput(e),
			n = this.presentedScene,
			s = n.scale.x;
		if(this.isTwoFingering)
			if(i.length < 2) this.isTwoFingering = !1;
			else {
				const {
					separation: t,
					deltaYaw: e
				} = this.fingerPolar(i);
				if(!1 === this.placeOnWall && (this.goalYaw += e), n.canScale) {
					const e = t / this.firstRatio;
					this.goalScale = e < 1.3 && e > .7692307692307692 ? 1 : e
				}
			} else if(2 !== i.length)
			if(this.isRotating) {
				const t = 1.5 * this.inputSource.gamepad.axes[0];
				this.goalYaw += t - this.lastAngle, this.lastAngle = t
			} else this.isTranslating && i.forEach((t => {
				if(t.inputSource !== this.inputSource) return;
				let e = null;
				if(t.results.length > 0 && (e = this.getHitPoint(t.results[0])), null == e && (e = this.getTouchLocation()), null != e) {
					if(this.goalPosition.sub(this.lastDragPosition), !1 === this.placeOnWall) {
						const t = e.y - this.lastDragPosition.y;
						if(t < 0) {
							this.placementBox.offsetHeight = t / s, this.presentedScene.setShadowOffset(t);
							const i = Uh.copy(n.getCamera().position),
								r = -t / (i.y - e.y);
							i.multiplyScalar(r), e.multiplyScalar(1 - r).add(i)
						}
					}
					this.goalPosition.add(e), this.lastDragPosition.copy(e)
				}
			}));
		else {
			this.isTranslating = !1, this.isRotating = !1, this.isTwoFingering = !0;
			const {
				separation: t
			} = this.fingerPolar(i);
			this.firstRatio = t / s
		}
	}
	moveScene(t) {
		const e = this.presentedScene,
			{
				position: i,
				yaw: n
			} = e,
			s = e.boundingSphere.radius,
			r = this.goalPosition,
			a = e.scale.x,
			o = this.placementBox;
		if(!r.equals(i) || this.goalScale !== a) {
			let {
				x: n,
				y: l,
				z: c
			} = i;
			n = this.xDamper.update(n, r.x, t, s), l = this.yDamper.update(l, r.y, t, s), c = this.zDamper.update(c, r.z, t, s), i.set(n, l, c);
			const h = this.scaleDamper.update(a, this.goalScale, t, 1);
			if(e.scale.set(h, h, h), !this.isTranslating) {
				const t = r.y - l;
				this.placementComplete && !1 === this.placeOnWall ? (o.offsetHeight = t / h, e.setShadowOffset(t)) : 0 === t && (this.placementComplete = !0, o.show = !1, e.setShadowIntensity(.8))
			}
		}
		o.updateOpacity(t), e.updateTarget(t), e.yaw = this.yawDamper.update(n, this.goalYaw, t, Math.PI)
	}
	onWebXRFrame(t, e) {
		this.frame = e, ++this.frames;
		const i = this.threeRenderer.xr.getReferenceSpace(),
			n = e.getViewerPose(i);
		null == n && !0 === this.tracking && this.frames > 30 && (this.tracking = !1, this.dispatchEvent({
			type: "tracking",
			status: Fh
		}));
		const s = this.presentedScene;
		if(null == n || null == s || !s.element.loaded) return void this.threeRenderer.clear();
		!1 === this.tracking && (this.tracking = !0, this.dispatchEvent({
			type: "tracking",
			status: Ph
		}));
		let r = !0;
		for(const i of n.views) {
			if(this.updateView(i), r) {
				this.moveToFloor(e), this.processInput(e);
				const i = t - this.lastTick;
				this.moveScene(i), this.renderer.preRender(s, t, i), this.lastTick = t, s.renderShadow(this.threeRenderer)
			}
			this.threeRenderer.render(s, s.getCamera()), r = !1
		}
	}
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hh {
	constructor(t) {
		t.threeRenderer.debug = {
			checkShaderErrors: !0
		}, Promise.resolve().then((() => {
			self.dispatchEvent(new CustomEvent("model-viewer-renderer-debug", {
				detail: {
					renderer: t,
					THREE: {
						ShaderMaterial: Ve,
						Texture: N,
						Mesh: Ne,
						Scene: Ps,
						PlaneGeometry: ri,
						OrthographicCamera: gi,
						WebGLRenderTarget: O
					}
				}
			}))
		}))
	}
	addScene(t) {
		self.dispatchEvent(new CustomEvent("model-viewer-scene-added-debug", {
			detail: {
				scene: t
			}
		}))
	}
	removeScene(t) {
		self.dispatchEvent(new CustomEvent("model-viewer-scene-removed-debug", {
			detail: {
				scene: t
			}
		}))
	}
}

function zh(t) {
	const e = new Map,
		i = new Map,
		n = t.clone();
	return Vh(t, n, (function(t, n) {
		e.set(n, t), i.set(t, n)
	})), n.traverse((function(t) {
		if(!t.isSkinnedMesh) return;
		const n = t,
			s = e.get(t),
			r = s.skeleton.bones;
		n.skeleton = s.skeleton.clone(), n.bindMatrix.copy(s.bindMatrix), n.skeleton.bones = r.map((function(t) {
			return i.get(t)
		})), n.bind(n.skeleton, n.bindMatrix)
	})), n
}

function Vh(t, e, i) {
	i(t, e);
	for(let n = 0; n < t.children.length; n++) Vh(t.children[n], e.children[n], i)
}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wh = Symbol("prepared"),
	qh = Symbol("prepare"),
	jh = Symbol("preparedGLTF"),
	Yh = Symbol("clone");
class Jh {
	constructor(t) {
		this[jh] = t
	}
	static prepare(t) {
		if(null == t.scene) throw new Error("Model does not have a scene");
		if(t[Wh]) return t;
		const e = this[qh](t);
		return e[Wh] = !0, e
	}
	static[qh](t) {
		const {
			scene: e
		} = t, i = [e];
		return Object.assign(Object.assign({}, t), {
			scene: e,
			scenes: i
		})
	}
	get parser() {
		return this[jh].parser
	}
	get animations() {
		return this[jh].animations
	}
	get scene() {
		return this[jh].scene
	}
	get scenes() {
		return this[jh].scenes
	}
	get cameras() {
		return this[jh].cameras
	}
	get asset() {
		return this[jh].asset
	}
	get userData() {
		return this[jh].userData
	}
	clone() {
		return new(0, this.constructor)(this[Yh]())
	}
	dispose() {
		this.scenes.forEach((t => {
			t.traverse((t => {
				if(!t.isMesh) return;
				const e = t;
				(Array.isArray(e.material) ? e.material : [e.material]).forEach((t => {
					for(const e in t) {
						const i = t[e];
						if(i instanceof N) {
							const t = i.source.data;
							null != t.close && t.close(), i.dispose()
						}
					}
					t.dispose()
				})), e.geometry.dispose()
			}))
		}))
	}[Yh]() {
		const t = this[jh],
			e = zh(this.scene);
		Xh(e, this.scene);
		const i = [e],
			n = t.userData ? Object.assign({}, t.userData) : {};
		return Object.assign(Object.assign({}, t), {
			scene: e,
			scenes: i,
			userData: n
		})
	}
}
const Xh = (t, e) => {
		Kh(t, e, ((t, e) => {
			void 0 !== e.userData.variantMaterials && (t.userData.variantMaterials = new Map(e.userData.variantMaterials)), void 0 !== e.userData.variantData && (t.userData.variantData = e.userData.variantData), void 0 !== e.userData.originalMaterial && (t.userData.originalMaterial = e.userData.originalMaterial)
		}))
	},
	Kh = (t, e, i) => {
		i(t, e);
		for(let n = 0; n < t.children.length; n++) Kh(t.children[n], e.children[n], i)
	},
	$h = Symbol("threeGLTF"),
	Zh = Symbol("gltf"),
	tu = Symbol("gltfElementMap"),
	eu = Symbol("threeObjectMap"),
	iu = Symbol("parallelTraverseThreeScene"),
	nu = Symbol("correlateOriginalThreeGLTF"),
	su = Symbol("correlateCloneThreeGLTF");
class ru {
	constructor(t, e, i, n) {
		this[$h] = t, this[Zh] = e, this[tu] = n, this[eu] = i
	}
	static from(t, e) {
		return null != e ? this[su](t, e) : this[nu](t)
	}
	static[nu](t) {
		const e = t.parser.json,
			i = t.parser.associations,
			n = new Map,
			s = {
				name: "Default"
			},
			r = {
				type: "materials",
				index: -1
			};
		for(const t of i.keys()) t instanceof re && null == i.get(t) && (r.index < 0 && (null == e.materials && (e.materials = []), r.index = e.materials.length, e.materials.push(s)), t.name = s.name, i.set(t, {
			materials: r.index
		}));
		for(const [t, s] of i) {
			if(s) {
				const e = t;
				e.userData = e.userData || {}, e.userData.associations = s
			}
			for(const i in s)
				if(null != i && "primitives" !== i) {
					const r = i,
						a = (e[r] || [])[s[r]];
					if(null == a) continue;
					let o = n.get(a);
					null == o && (o = new Set, n.set(a, o)), o.add(t)
				}
		}
		return new ru(t, e, i, n)
	}
	static[su](t, e) {
		const i = e.threeGLTF,
			n = e.gltf,
			s = JSON.parse(JSON.stringify(n)),
			r = new Map,
			a = new Map;
		for(let n = 0; n < i.scenes.length; n++) this[iu](i.scenes[n], t.scenes[n], ((t, i) => {
			const n = e.threeObjectMap.get(t);
			if(null != n)
				for(const t in n)
					if(null != t && "primitives" !== t) {
						const e = t,
							o = n[e],
							l = s[e][o],
							c = r.get(i) || {};
						c[e] = o, r.set(i, c);
						const h = a.get(l) || new Set;
						h.add(i), a.set(l, h)
					}
		}));
		return new ru(t, s, r, a)
	}
	static[iu](t, e, i) {
		const n = (t, e) => {
			if(i(t, e), t.isObject3D) {
				if(t.isMesh)
					if(Array.isArray(t.material))
						for(let i = 0; i < t.material.length; ++i) n(t.material[i], e.material[i]);
					else n(t.material, e.material);
				for(let i = 0; i < t.children.length; ++i) n(t.children[i], e.children[i])
			}
		};
		n(t, e)
	}
	get threeGLTF() {
		return this[$h]
	}
	get gltf() {
		return this[Zh]
	}
	get gltfElementMap() {
		return this[tu]
	}
	get threeObjectMap() {
		return this[eu]
	}
}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const au = Symbol("correlatedSceneGraph");
class ou extends Jh {
	static[qh](t) {
		const e = super[qh](t);
		null == e[au] && (e[au] = ru.from(e));
		const {
			scene: i
		} = e, n = new dt(void 0, 1 / 0);
		return i.traverse((t => {
			t.renderOrder = 1e3, t.frustumCulled = !1, t.name || (t.name = t.uuid);
			const i = t;
			if(i.isMesh) {
				const {
					geometry: t
				} = i;
				i.castShadow = !0, i.isSkinnedMesh && (t.boundingSphere = n, t.boundingBox = null);
				const s = i.material;
				if(!0 === s.isMeshBasicMaterial && (s.toneMapped = !1), s.shadowSide = 0, s.aoMap) {
					const {
						gltf: i,
						threeObjectMap: n
					} = e[au], r = n.get(s);
					if(null != i.materials && null != r && null != r.materials) {
						const e = i.materials[r.materials];
						e.occlusionTexture && 0 === e.occlusionTexture.texCoord && null != t.attributes.uv && t.setAttribute("uv2", t.attributes.uv)
					}
				}
			}
		})), e
	}
	get correlatedSceneGraph() {
		return this[jh][au]
	}[Yh]() {
		const t = super[Yh](),
			e = new Map;
		return t.scene.traverse((t => {
			if(t.isMesh) {
				const i = t,
					n = i.material;
				if(null != n) {
					if(e.has(n.uuid)) return void(i.material = e.get(n.uuid));
					i.material = n.clone(), e.set(n.uuid, i.material)
				}
			}
		})), t[au] = ru.from(t, this.correlatedSceneGraph), t
	}
}
/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lu extends Ps {
	constructor() {
		super(), this.position.y = -3.5;
		const t = new Oe;
		t.deleteAttribute("uv");
		const e = new gr({
				metalness: 0,
				side: 1
			}),
			i = new gr({
				metalness: 0
			}),
			n = new sa(16777215, 500, 28, 2);
		n.position.set(.418, 16.199, .3), this.add(n);
		const s = new Ne(t, e);
		s.position.set(-.757, 13.219, .717), s.scale.set(31.713, 28.305, 28.591), this.add(s);
		const r = new Ne(t, i);
		r.position.set(-10.906, 2.009, 1.846), r.rotation.set(0, -.195, 0), r.scale.set(2.328, 7.905, 4.651), this.add(r);
		const a = new Ne(t, i);
		a.position.set(-5.607, -.754, -.758), a.rotation.set(0, .994, 0), a.scale.set(1.97, 1.534, 3.955), this.add(a);
		const o = new Ne(t, i);
		o.position.set(6.167, .857, 7.803), o.rotation.set(0, .561, 0), o.scale.set(3.927, 6.285, 3.687), this.add(o);
		const l = new Ne(t, i);
		l.position.set(-2.017, .018, 6.124), l.rotation.set(0, .333, 0), l.scale.set(2.002, 4.566, 2.064), this.add(l);
		const c = new Ne(t, i);
		c.position.set(2.291, -.756, -2.621), c.rotation.set(0, -.286, 0), c.scale.set(1.546, 1.552, 1.496), this.add(c);
		const h = new Ne(t, i);
		h.position.set(-2.193, -.369, -5.547), h.rotation.set(0, .516, 0), h.scale.set(3.875, 3.487, 2.986), this.add(h);
		const u = new Ne(t, this.createAreaLightMaterial(50));
		u.position.set(-16.116, 14.37, 8.208), u.scale.set(.1, 2.428, 2.739), this.add(u);
		const d = new Ne(t, this.createAreaLightMaterial(50));
		d.position.set(-16.109, 18.021, -8.207), d.scale.set(.1, 2.425, 2.751), this.add(d);
		const A = new Ne(t, this.createAreaLightMaterial(17));
		A.position.set(14.904, 12.198, -1.832), A.scale.set(.15, 4.265, 6.331), this.add(A);
		const p = new Ne(t, this.createAreaLightMaterial(43));
		p.position.set(-.462, 8.89, 14.52), p.scale.set(4.38, 5.441, .088), this.add(p);
		const g = new Ne(t, this.createAreaLightMaterial(20));
		g.position.set(3.235, 11.486, -12.541), g.scale.set(2.5, 2, .1), this.add(g);
		const m = new Ne(t, this.createAreaLightMaterial(100));
		m.position.set(0, 20, 0), m.scale.set(1, .1, 1), this.add(m)
	}
	createAreaLightMaterial(t) {
		const e = new ae;
		return e.color.setScalar(t), e
	}
}
/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cu extends Ps {
	constructor() {
		super(), this.position.y = -3.5;
		const t = new Oe;
		t.deleteAttribute("uv");
		const e = new gr({
				metalness: 0,
				side: 1
			}),
			i = new gr({
				metalness: 0
			}),
			n = new sa(16777215, 400, 28, 2);
		n.position.set(.5, 14, .5), this.add(n);
		const s = new Ne(t, e);
		s.position.set(0, 13.2, 0), s.scale.set(31.5, 28.5, 31.5), this.add(s);
		const r = new Ne(t, i);
		r.position.set(-10.906, -1, 1.846), r.rotation.set(0, -.195, 0), r.scale.set(2.328, 7.905, 4.651), this.add(r);
		const a = new Ne(t, i);
		a.position.set(-5.607, -.754, -.758), a.rotation.set(0, .994, 0), a.scale.set(1.97, 1.534, 3.955), this.add(a);
		const o = new Ne(t, i);
		o.position.set(6.167, -.16, 7.803), o.rotation.set(0, .561, 0), o.scale.set(3.927, 6.285, 3.687), this.add(o);
		const l = new Ne(t, i);
		l.position.set(-2.017, .018, 6.124), l.rotation.set(0, .333, 0), l.scale.set(2.002, 4.566, 2.064), this.add(l);
		const c = new Ne(t, i);
		c.position.set(2.291, -.756, -2.621), c.rotation.set(0, -.286, 0), c.scale.set(1.546, 1.552, 1.496), this.add(c);
		const h = new Ne(t, i);
		h.position.set(-2.193, -.369, -5.547), h.rotation.set(0, .516, 0), h.scale.set(3.875, 3.487, 2.986), this.add(h);
		const u = new Ne(t, this.createAreaLightMaterial(80));
		u.position.set(-14, 10, 8), u.scale.set(.1, 2.5, 2.5), this.add(u);
		const d = new Ne(t, this.createAreaLightMaterial(80));
		d.position.set(-14, 14, -4), d.scale.set(.1, 2.5, 2.5), this.add(d);
		const A = new Ne(t, this.createAreaLightMaterial(23));
		A.position.set(14, 12, 0), A.scale.set(.1, 5, 5), this.add(A);
		const p = new Ne(t, this.createAreaLightMaterial(16));
		p.position.set(0, 9, 14), p.scale.set(5, 5, .1), this.add(p);
		const g = new Ne(t, this.createAreaLightMaterial(80));
		g.position.set(7, 8, -14), g.scale.set(2.5, 2.5, .1), this.add(g);
		const m = new Ne(t, this.createAreaLightMaterial(80));
		m.position.set(-7, 16, -14), m.scale.set(2.5, 2.5, .1), this.add(m);
		const f = new Ne(t, this.createAreaLightMaterial(1));
		f.position.set(0, 20, 0), f.scale.set(.1, .1, .1), this.add(f)
	}
	createAreaLightMaterial(t) {
		const e = new ae;
		return e.color.setScalar(t), e
	}
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hu = /\.hdr(\.js)?$/,
	uu = new qr,
	du = new class extends Wr {
		constructor(t) {
			super(t), this.type = 1016
		}
		parse(t) {
			const e = function(t, e) {
					switch(t) {
						case 1:
							console.error("THREE.RGBELoader Read Error: " + (e || ""));
							break;
						case 2:
							console.error("THREE.RGBELoader Write Error: " + (e || ""));
							break;
						case 3:
							console.error("THREE.RGBELoader Bad File Format: " + (e || ""));
							break;
						default:
							console.error("THREE.RGBELoader: Error: " + (e || ""))
					}
					return -1
				},
				i = function(t, e, i) {
					e = e || 1024;
					let n = t.pos,
						s = -1,
						r = 0,
						a = "",
						o = String.fromCharCode.apply(null, new Uint16Array(t.subarray(n, n + 128)));
					for(; 0 > (s = o.indexOf("\n")) && r < e && n < t.byteLength;) a += o, r += o.length, n += 128, o += String.fromCharCode.apply(null, new Uint16Array(t.subarray(n, n + 128)));
					return -1 < s && (!1 !== i && (t.pos += r + s + 1), a + o.slice(0, s))
				},
				n = function(t, e, i, n) {
					const s = t[e + 3],
						r = Math.pow(2, s - 128) / 255;
					i[n + 0] = t[e + 0] * r, i[n + 1] = t[e + 1] * r, i[n + 2] = t[e + 2] * r, i[n + 3] = 1
				},
				s = function(t, e, i, n) {
					const s = t[e + 3],
						r = Math.pow(2, s - 128) / 255;
					i[n + 0] = Ia.toHalfFloat(Math.min(t[e + 0] * r, 65504)), i[n + 1] = Ia.toHalfFloat(Math.min(t[e + 1] * r, 65504)), i[n + 2] = Ia.toHalfFloat(Math.min(t[e + 2] * r, 65504)), i[n + 3] = Ia.toHalfFloat(1)
				},
				r = new Uint8Array(t);
			r.pos = 0;
			const a = function(t) {
				const n = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,
					s = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,
					r = /^\s*FORMAT=(\S+)\s*$/,
					a = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,
					o = {
						valid: 0,
						string: "",
						comments: "",
						programtype: "RGBE",
						format: "",
						gamma: 1,
						exposure: 1,
						width: 0,
						height: 0
					};
				let l, c;
				if(t.pos >= t.byteLength || !(l = i(t))) return e(1, "no header found");
				if(!(c = l.match(/^#\?(\S+)/))) return e(3, "bad initial token");
				for(o.valid |= 1, o.programtype = c[1], o.string += l + "\n"; l = i(t), !1 !== l;)
					if(o.string += l + "\n", "#" !== l.charAt(0)) {
						if((c = l.match(n)) && (o.gamma = parseFloat(c[1])), (c = l.match(s)) && (o.exposure = parseFloat(c[1])), (c = l.match(r)) && (o.valid |= 2, o.format = c[1]), (c = l.match(a)) && (o.valid |= 4, o.height = parseInt(c[1], 10), o.width = parseInt(c[2], 10)), 2 & o.valid && 4 & o.valid) break
					} else o.comments += l + "\n";
				return 2 & o.valid ? 4 & o.valid ? o : e(3, "missing image size specifier") : e(3, "missing format specifier")
			}(r);
			if(-1 !== a) {
				const t = a.width,
					i = a.height,
					o = function(t, i, n) {
						const s = i;
						if(s < 8 || s > 32767 || 2 !== t[0] || 2 !== t[1] || 128 & t[2]) return new Uint8Array(t);
						if(s !== (t[2] << 8 | t[3])) return e(3, "wrong scanline width");
						const r = new Uint8Array(4 * i * n);
						if(!r.length) return e(4, "unable to allocate buffer space");
						let a = 0,
							o = 0;
						const l = 4 * s,
							c = new Uint8Array(4),
							h = new Uint8Array(l);
						let u = n;
						for(; u > 0 && o < t.byteLength;) {
							if(o + 4 > t.byteLength) return e(1);
							if(c[0] = t[o++], c[1] = t[o++], c[2] = t[o++], c[3] = t[o++], 2 != c[0] || 2 != c[1] || (c[2] << 8 | c[3]) != s) return e(3, "bad rgbe scanline format");
							let i, n = 0;
							for(; n < l && o < t.byteLength;) {
								i = t[o++];
								const s = i > 128;
								if(s && (i -= 128), 0 === i || n + i > l) return e(3, "bad scanline data");
								if(s) {
									const e = t[o++];
									for(let t = 0; t < i; t++) h[n++] = e
								} else h.set(t.subarray(o, o + i), n), n += i, o += i
							}
							const d = s;
							for(let t = 0; t < d; t++) {
								let e = 0;
								r[a] = h[t + e], e += s, r[a + 1] = h[t + e], e += s, r[a + 2] = h[t + e], e += s, r[a + 3] = h[t + e], a += 4
							}
							u--
						}
						return r
					}(r.subarray(r.pos), t, i);
				if(-1 !== o) {
					let e, r, l;
					switch(this.type) {
						case 1015:
							l = o.length / 4;
							const t = new Float32Array(4 * l);
							for(let e = 0; e < l; e++) n(o, 4 * e, t, 4 * e);
							e = t, r = 1015;
							break;
						case 1016:
							l = o.length / 4;
							const i = new Uint16Array(4 * l);
							for(let t = 0; t < l; t++) s(o, 4 * t, i, 4 * t);
							e = i, r = 1016;
							break;
						default:
							console.error("THREE.RGBELoader: unsupported type: ", this.type)
					}
					return {
						width: t,
						height: i,
						data: e,
						header: a.string,
						gamma: a.gamma,
						exposure: a.exposure,
						type: r
					}
				}
			}
			return null
		}
		setDataType(t) {
			return this.type = t, this
		}
		load(t, e, i, n) {
			return super.load(t, (function(t, i) {
				switch(t.type) {
					case 1015:
					case 1016:
						t.encoding = 3e3, t.minFilter = 1006, t.magFilter = 1006, t.generateMipmaps = !1, t.flipY = !0
				}
				e && e(t, i)
			}), i, n)
		}
	};
du.setDataType(1016);
class Au extends n {
	constructor(t) {
		super(), this.threeRenderer = t, this.generatedEnvironmentMap = null, this.generatedEnvironmentMapAlt = null, this.skyboxCache = new Map, this.blurMaterial = null, this.blurScene = null
	}
	async load(t, e = (() => {})) {
		try {
			const i = hu.test(t),
				n = i ? du : uu,
				s = await new Promise(((i, s) => n.load(t, i, (t => {
					e(t.loaded / t.total * .9)
				}), s)));
			return e(1), s.name = t, s.mapping = 303, i || (s.encoding = 3001), s
		} finally {
			e && e(1)
		}
	}
	async generateEnvironmentMapAndSkybox(t = null, e = null, i = (() => {})) {
		const n = "legacy" !== e;
		"legacy" !== e && "neutral" !== e || (e = null), e = Oo(e);
		let s, r = Promise.resolve(null);
		t && (r = this.loadEquirectFromUrl(t, i)), s = e ? this.loadEquirectFromUrl(e, i) : t ? this.loadEquirectFromUrl(t, i) : n ? this.loadGeneratedEnvironmentMapAlt() : this.loadGeneratedEnvironmentMap();
		const [a, o] = await Promise.all([s, r]);
		if(null == a) throw new Error("Failed to load environment map.");
		return {
			environmentMap: a,
			skybox: o
		}
	}
	async loadEquirectFromUrl(t, e) {
		if(!this.skyboxCache.has(t)) {
			const i = this.load(t, e);
			this.skyboxCache.set(t, i)
		}
		return this.skyboxCache.get(t)
	}
	async GenerateEnvironmentMap(t, e) {
		await ((t = 0) => new Promise((e => setTimeout(e, t))))();
		const i = this.threeRenderer,
			n = new Je(256, {
				generateMipmaps: !1,
				type: 1016,
				format: 1023,
				encoding: 3e3,
				depthBuffer: !0
			}),
			s = new je(.1, 100, n),
			r = s.renderTarget.texture;
		r.name = e;
		const a = i.outputEncoding,
			o = i.toneMapping;
		return i.toneMapping = 0, i.outputEncoding = 3e3, s.update(i, t), this.blurCubemap(n, .04), i.toneMapping = o, i.outputEncoding = a, r
	}
	async loadGeneratedEnvironmentMap() {
		return null == this.generatedEnvironmentMap && (this.generatedEnvironmentMap = this.GenerateEnvironmentMap(new lu, "legacy")), this.generatedEnvironmentMap
	}
	async loadGeneratedEnvironmentMapAlt() {
		return null == this.generatedEnvironmentMapAlt && (this.generatedEnvironmentMapAlt = this.GenerateEnvironmentMap(new cu, "neutral")), this.generatedEnvironmentMapAlt
	}
	blurCubemap(t, e) {
		if(null == this.blurMaterial) {
			this.blurMaterial = this.getBlurShader(20);
			const t = new Oe,
				e = new Ne(t, this.blurMaterial);
			this.blurScene = new Ps, this.blurScene.add(e)
		}
		const i = t.clone();
		this.halfblur(t, i, e, "latitudinal"), this.halfblur(i, t, e, "longitudinal")
	}
	halfblur(t, e, i, n) {
		const s = t.width,
			r = isFinite(i) ? Math.PI / (2 * s) : 2 * Math.PI / 39,
			a = i / r,
			o = isFinite(i) ? 1 + Math.floor(3 * a) : 20;
		o > 20 && console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${o} samples when the maximum is set to 20`);
		const l = [];
		let c = 0;
		for(let t = 0; t < 20; ++t) {
			const e = t / a,
				i = Math.exp(-e * e / 2);
			l.push(i), 0 == t ? c += i : t < o && (c += 2 * i)
		}
		for(let t = 0; t < l.length; t++) l[t] = l[t] / c;
		const h = this.blurMaterial.uniforms;
		h.envMap.value = t.texture, h.samples.value = o, h.weights.value = l, h.latitudinal.value = "latitudinal" === n, h.dTheta.value = r;
		new je(.1, 100, e).update(this.threeRenderer, this.blurScene)
	}
	getBlurShader(t) {
		const e = new Float32Array(t),
			i = new V(0, 1, 0);
		return new Ve({
			name: "SphericalGaussianBlur",
			defines: {
				n: t
			},
			uniforms: {
				envMap: {
					value: null
				},
				samples: {
					value: 1
				},
				weights: {
					value: e
				},
				latitudinal: {
					value: !1
				},
				dTheta: {
					value: 0
				},
				poleAxis: {
					value: i
				}
			},
			vertexShader: "\n      \n      varying vec3 vOutputDirection;\n  \n      void main() {\n  \n        vOutputDirection = vec3( position );\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  \n      }\n    ",
			fragmentShader: "\n        varying vec3 vOutputDirection;\n  \n        uniform samplerCube envMap;\n        uniform int samples;\n        uniform float weights[ n ];\n        uniform bool latitudinal;\n        uniform float dTheta;\n        uniform vec3 poleAxis;\n  \n        vec3 getSample( float theta, vec3 axis ) {\n  \n          float cosTheta = cos( theta );\n          // Rodrigues' axis-angle rotation\n          vec3 sampleDirection = vOutputDirection * cosTheta\n            + cross( axis, vOutputDirection ) * sin( theta )\n            + axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n  \n          return vec3( textureCube( envMap, sampleDirection ) );\n  \n        }\n  \n        void main() {\n  \n          vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n  \n          if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n  \n            axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n  \n          }\n  \n          axis = normalize( axis );\n  \n          gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n          gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n  \n          for ( int i = 1; i < n; i++ ) {\n  \n            if ( i >= samples ) {\n  \n              break;\n  \n            }\n  \n            float theta = dTheta * float( i );\n            gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n            gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n  \n          }\n        }\n      ",
			blending: 0,
			depthTest: !1,
			depthWrite: !1,
			side: 1
		})
	}
	async dispose() {
		for(const [, t] of this.skyboxCache) {
			(await t).dispose()
		}
		null != this.generatedEnvironmentMap && ((await this.generatedEnvironmentMap).dispose(), this.generatedEnvironmentMap = null), null != this.generatedEnvironmentMapAlt && ((await this.generatedEnvironmentMapAlt).dispose(), this.generatedEnvironmentMapAlt = null), null != this.blurMaterial && this.blurMaterial.dispose()
	}
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pu = [1, .79, .62, .5, .4, .31, .25];
class gu extends n {
	constructor(t) {
		super(), this.loader = new Vc(ou), this.width = 0, this.height = 0, this.dpr = 1, this.debugger = null, this.scenes = new Set, this.multipleScenesVisible = !1, this.lastTick = performance.now(), this.renderedLastFrame = !1, this.scaleStep = 0, this.lastStep = 3, this.avgFrameDuration = 50, this.onWebGLContextLost = t => {
			this.dispatchEvent({
				type: "contextlost",
				sourceEvent: t
			})
		}, this.onWebGLContextRestored = () => {
			var t;
			null === (t = this.textureUtils) || void 0 === t || t.dispose(), this.textureUtils = new Au(this.threeRenderer);
			for(const t of this.scenes) t.element[Xo]()
		}, this.dpr = Wo(), this.canvas3D = document.createElement("canvas"), this.canvas3D.id = "webgl-canvas", this.canvas3D.classList.add("show");
		try {
			this.threeRenderer = new Qs({
				canvas: this.canvas3D,
				alpha: !0,
				antialias: !0,
				powerPreference: t.powerPreference,
				preserveDrawingBuffer: !0
			}), this.threeRenderer.autoClear = !0, this.threeRenderer.outputEncoding = 3001, this.threeRenderer.physicallyCorrectLights = !0, this.threeRenderer.setPixelRatio(1), this.debugger = t.debug ? new Hh(this) : null, this.threeRenderer.debug = {
				checkShaderErrors: !!this.debugger
			}, this.threeRenderer.toneMapping = 4
		} catch(t) {
			console.warn(t)
		}
		this.arRenderer = new Gh(this), this.textureUtils = this.canRender ? new Au(this.threeRenderer) : null, Vc.initializeKTX2Loader(this.threeRenderer), this.canvas3D.addEventListener("webglcontextlost", this.onWebGLContextLost), this.canvas3D.addEventListener("webglcontextrestored", this.onWebGLContextRestored), this.updateRendererSize()
	}
	static get singleton() {
		return this._singleton
	}
	static resetSingleton() {
		const t = this._singleton.dispose();
		for(const e of t) e.disconnectedCallback();
		this._singleton = new gu({
			powerPreference: (self.ModelViewerElement || {}).powerPreference || "high-performance",
			debug: qo()
		});
		for(const e of t) e.connectedCallback()
	}
	get canRender() {
		return null != this.threeRenderer
	}
	get scaleFactor() {
		return pu[this.scaleStep]
	}
	set minScale(t) {
		let e = 1;
		for(; e < pu.length && !(pu[e] < t);) ++e;
		this.lastStep = e - 1
	}
	registerScene(t) {
		this.scenes.add(t), t.forceRescale();
		const e = new v;
		this.threeRenderer.getSize(e), t.canvas.width = e.x, t.canvas.height = e.y, this.canRender && this.scenes.size > 0 && this.threeRenderer.setAnimationLoop(((t, e) => this.render(t, e))), null != this.debugger && this.debugger.addScene(t)
	}
	unregisterScene(t) {
		this.scenes.delete(t), this.canvas3D.parentElement === t.canvas.parentElement && t.canvas.parentElement.removeChild(this.canvas3D), this.canRender && 0 === this.scenes.size && this.threeRenderer.setAnimationLoop(null), null != this.debugger && this.debugger.removeScene(t)
	}
	displayCanvas(t) {
		return this.multipleScenesVisible ? t.element[td] : this.canvas3D
	}
	countVisibleScenes() {
		const {
			canvas3D: t
		} = this;
		let e = 0,
			i = null;
		for(const n of this.scenes) {
			const {
				element: s
			} = n;
			s.modelIsVisible && null == n.externalRenderer && ++e, t.parentElement === n.canvas.parentElement && (i = n)
		}
		const n = e > 1;
		if(null != i) {
			const e = n && !this.multipleScenesVisible,
				s = !i.element.modelIsVisible;
			if(e || s) {
				const {
					width: e,
					height: n
				} = this.sceneSize(i);
				this.copyPixels(i, e, n), t.parentElement.removeChild(t)
			}
		}
		this.multipleScenesVisible = n
	}
	updateRendererSize() {
		const t = Wo();
		if(t !== this.dpr)
			for(const t of this.scenes) {
				const {
					element: e
				} = t;
				e[Gu](e.getBoundingClientRect())
			}
		let e = 0,
			i = 0;
		for(const t of this.scenes) e = Math.max(e, t.width), i = Math.max(i, t.height);
		if(e !== this.width || i !== this.height || t !== this.dpr) {
			this.width = e, this.height = i, this.dpr = t, e = Math.ceil(e * t), i = Math.ceil(i * t), this.canRender && this.threeRenderer.setSize(e, i, !1);
			for(const t of this.scenes) {
				const {
					canvas: n
				} = t;
				n.width = e, n.height = i, t.forceRescale()
			}
		}
	}
	updateRendererScale(t) {
		const e = this.scaleStep;
		this.avgFrameDuration += Vo(.2 * (t - this.avgFrameDuration), -5, 5), this.avgFrameDuration > 60 ? ++this.scaleStep : this.avgFrameDuration < 40 && this.scaleStep > 0 && --this.scaleStep, this.scaleStep = Math.min(this.scaleStep, this.lastStep), e !== this.scaleStep && (this.avgFrameDuration = 50)
	}
	shouldRender(t) {
		if(t.shouldRender()) t.scaleStep != this.scaleStep && (t.scaleStep = this.scaleStep, this.rescaleCanvas(t));
		else {
			if(0 == t.scaleStep) return !1;
			t.scaleStep = 0, this.rescaleCanvas(t)
		}
		return !0
	}
	rescaleCanvas(t) {
		const e = pu[t.scaleStep],
			i = Math.ceil(this.width / e),
			n = Math.ceil(this.height / e),
			{
				style: s
			} = t.canvas;
		s.width = `${i}px`, s.height = `${n}px`, this.canvas3D.style.width = `${i}px`, this.canvas3D.style.height = `${n}px`;
		const r = this.dpr * e,
			a = e < 1 ? "GPU throttling" : this.dpr !== window.devicePixelRatio ? "No meta viewport tag" : "";
		t.element.dispatchEvent(new CustomEvent("render-scale", {
			detail: {
				reportedDpr: window.devicePixelRatio,
				renderedDpr: r,
				minimumDpr: this.dpr * pu[this.lastStep],
				pixelWidth: Math.ceil(t.width * r),
				pixelHeight: Math.ceil(t.height * r),
				reason: a
			}
		}))
	}
	sceneSize(t) {
		const {
			dpr: e
		} = this, i = pu[t.scaleStep];
		return {
			width: Math.min(Math.ceil(t.width * i * e), this.canvas3D.width),
			height: Math.min(Math.ceil(t.height * i * e), this.canvas3D.height)
		}
	}
	copyPixels(t, e, i) {
		null == t.context && t.createContext();
		const n = t.context;
		n.clearRect(0, 0, e, i), n.drawImage(this.canvas3D, 0, 0, e, i, 0, 0, e, i), t.canvas.classList.add("show")
	}
	orderedScenes() {
		const t = [];
		for(const e of[!1, !0])
			for(const i of this.scenes) i.element.modelIsVisible === e && t.push(i);
		return t
	}
	get isPresenting() {
		return this.arRenderer.isPresenting
	}
	preRender(t, e, i) {
		const {
			element: n,
			exposure: s
		} = t;
		n[nd](e, i);
		const r = "number" == typeof s && !Number.isNaN(s);
		this.threeRenderer.toneMappingExposure = r ? s : 1
	}
	render(t, e) {
		if(null != e) return void this.arRenderer.onWebXRFrame(t, e);
		const i = t - this.lastTick;
		if(this.lastTick = t, !this.canRender || this.isPresenting) return;
		this.countVisibleScenes(), this.updateRendererSize(), this.renderedLastFrame && (this.updateRendererScale(i), this.renderedLastFrame = !1);
		const {
			canvas3D: n
		} = this;
		for(const e of this.orderedScenes()) {
			const {
				element: s
			} = e;
			if(!s.loaded || !s.modelIsVisible && e.renderCount > 0) continue;
			if(this.preRender(e, t, i), !this.shouldRender(e)) continue;
			if(null != e.externalRenderer) {
				const t = e.getCamera();
				t.updateMatrix();
				const {
					matrix: i,
					projectionMatrix: n
				} = t, s = i.elements.slice(), r = e.getTarget();
				s[12] += r.x, s[13] += r.y, s[14] += r.z, e.externalRenderer.render({
					viewMatrix: s,
					projectionMatrix: n.elements
				});
				continue
			}
			if(!s.modelIsVisible && !this.multipleScenesVisible)
				for(const t of this.scenes) t.element.modelIsVisible && t.queueRender();
			const {
				width: r,
				height: a
			} = this.sceneSize(e);
			e.renderShadow(this.threeRenderer), this.threeRenderer.setRenderTarget(null), this.threeRenderer.setViewport(0, Math.ceil(this.height * this.dpr) - a, r, a), this.threeRenderer.render(e, e.camera), this.multipleScenesVisible || 0 === e.renderCount ? this.copyPixels(e, r, a) : (e.canvas.parentElement.appendChild(n), e.canvas.classList.remove("show")), e.hasRendered(), ++e.renderCount, this.renderedLastFrame = !0
		}
	}
	dispose() {
		null != this.textureUtils && this.textureUtils.dispose(), null != this.threeRenderer && this.threeRenderer.dispose(), this.textureUtils = null, this.threeRenderer = null;
		const t = [];
		for(const e of this.scenes) t.push(e.element);
		return this.canvas3D.removeEventListener("webglcontextlost", this.onWebGLContextLost), this.canvas3D.removeEventListener("webglcontextrestored", this.onWebGLContextRestored), t
	}
}
gu._singleton = new gu({
	powerPreference: (self.ModelViewerElement || {}).powerPreference || "high-performance",
	debug: qo()
});
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mu extends EventTarget {
	constructor() {
		super(...arguments), this.ongoingActivities = new Set, this.totalProgress = 0
	}
	get ongoingActivityCount() {
		return this.ongoingActivities.size
	}
	beginActivity() {
		const t = {
			progress: 0,
			completed: !1
		};
		return this.ongoingActivities.add(t), 1 === this.ongoingActivityCount && this.announceTotalProgress(t, 0), e => {
			let i;
			return i = Math.max(Vo(e, 0, 1), t.progress), i !== t.progress && this.announceTotalProgress(t, i), t.progress
		}
	}
	announceTotalProgress(t, e) {
		let i = 0,
			n = 0;
		1 == e && (t.completed = !0);
		for(const t of this.ongoingActivities) {
			const {
				progress: e
			} = t;
			i += 1 - e, !0 === t.completed && n++
		}
		const s = t.progress;
		t.progress = e, this.totalProgress += (e - s) * (1 - this.totalProgress) / i;
		const r = n === this.ongoingActivityCount ? 1 : this.totalProgress;
		this.dispatchEvent(new CustomEvent("progress", {
			detail: {
				totalProgress: r
			}
		})), n === this.ongoingActivityCount && (this.totalProgress = 0, this.ongoingActivities.clear())
	}
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fu, vu, yu, xu, _u, Eu, wu, bu, Iu, Cu, Su, Mu, Bu, Tu = function(t, e, i, n) {
	for(var s, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n, o = t.length - 1; o >= 0; o--)(s = t[o]) && (a = (r < 3 ? s(a) : r > 3 ? s(e, i, a) : s(e, i)) || a);
	return r > 3 && a && Object.defineProperty(e, i, a), a
};
const Ru = document.createElement("canvas"),
	Du = Symbol("fallbackResizeHandler"),
	Lu = Symbol("defaultAriaLabel"),
	Qu = Symbol("resizeObserver"),
	Pu = Symbol("clearModelTimeout"),
	Fu = Symbol("onContextLost"),
	Uu = Symbol("loaded"),
	Nu = Symbol("status"),
	ku = Symbol("onFocus"),
	Ou = Symbol("onBlur"),
	Gu = Symbol("updateSize"),
	Hu = Symbol("intersectionObserver"),
	zu = Symbol("isElementInViewport"),
	Vu = Symbol("announceModelVisibility"),
	Wu = Symbol("ariaLabel"),
	qu = Symbol("altDefaulted"),
	ju = Symbol("statusElement"),
	Yu = Symbol("updateStatus"),
	Ju = Symbol("loadedTime"),
	Xu = Symbol("updateSource"),
	Ku = Symbol("markLoaded"),
	$u = Symbol("container"),
	Zu = Symbol("input"),
	td = Symbol("canvas"),
	ed = Symbol("scene"),
	id = Symbol("needsRender"),
	nd = Symbol("tick"),
	sd = Symbol("onModelLoad"),
	rd = Symbol("onResize"),
	ad = Symbol("renderer"),
	od = Symbol("progressTracker"),
	ld = Symbol("getLoaded"),
	cd = Symbol("getModelIsVisible"),
	hd = Symbol("shouldAttemptPreload"),
	ud = t => ({
		x: t.x,
		y: t.y,
		z: t.z,
		toString() {
			return `${this.x}m ${this.y}m ${this.z}m`
		}
	}),
	dd = t => ({
		u: t.x,
		v: t.y,
		toString() {
			return `${this.u} ${this.v}`
		}
	});
class Ad extends Oa {
	constructor() {
		super(), this.alt = null, this.src = null, this.withCredentials = !1, this.generateSchema = !1, this[fu] = !1, this[vu] = !1, this[yu] = 0, this[xu] = "", this[_u] = null, this[Eu] = zo((() => {
			const t = this.getBoundingClientRect();
			this[Gu](t)
		}), 50), this[wu] = zo((t => {
			const e = this.modelIsVisible;
			e !== t && this.dispatchEvent(new CustomEvent("model-visibility", {
				detail: {
					visible: e
				}
			}))
		}), 0), this[bu] = null, this[Iu] = null, this[Cu] = new mu, this[Su] = () => {
			this[ju].textContent = this[Nu]
		}, this[Mu] = () => {
			this[ju].textContent = ""
		}, this[Bu] = t => {
			this.dispatchEvent(new CustomEvent("error", {
				detail: {
					type: "webglcontextlost",
					sourceError: t.sourceEvent
				}
			}))
		}, this.attachShadow({
			mode: "open"
		});
		const t = this.shadowRoot;
		let e, i;
		if((t => {
				co($o, t)
			})(t), this[$u] = t.querySelector(".container"), this[Zu] = t.querySelector(".userInput"), this[td] = t.querySelector("canvas"), this[ju] = t.querySelector("#status"), this[Lu] = this[Zu].getAttribute("aria-label"), this.isConnected) {
			const t = this.getBoundingClientRect();
			e = t.width, i = t.height
		} else e = 300, i = 150;
		this[ed] = new bh({
			canvas: this[td],
			element: this,
			width: e,
			height: i
		}), Promise.resolve().then((() => {
			this[Gu](this.getBoundingClientRect())
		})), To && (this[Qu] = new ResizeObserver((t => {
			if(!this[ad].isPresenting)
				for(let e of t) e.target === this && this[Gu](e.contentRect)
		}))), Ro ? this[Hu] = new IntersectionObserver((t => {
			for(let e of t)
				if(e.target === this) {
					const t = this.modelIsVisible;
					this[zu] = e.isIntersecting, this[Vu](t), this[zu] && !this.loaded && this[Xu]()
				}
		}), {
			root: null,
			rootMargin: "0px",
			threshold: 1e-5
		}) : this[zu] = !0
	}
	static get is() {
		return "model-viewer"
	}
	static set modelCacheSize(t) {
		Vc[Hc].evictionThreshold = t
	}
	static get modelCacheSize() {
		return Vc[Hc].evictionThreshold
	}
	static set minimumRenderScale(t) {
		t > 1 && console.warn("<model-viewer> minimumRenderScale has been clamped to a maximum value of 1."), t <= 0 && console.warn("<model-viewer> minimumRenderScale has been clamped to a minimum value of 0.25."), gu.singleton.minScale = t
	}
	static get minimumRenderScale() {
		return gu.singleton.minScale
	}
	get loaded() {
		return this[ld]()
	}
	get[(fu = zu, vu = Uu, yu = Ju, xu = Nu, _u = Pu, Eu = Du, wu = Vu, bu = Qu, Iu = Hu, Cu = od, ad)]() {
		return gu.singleton
	}
	get modelIsVisible() {
		return this[cd]()
	}
	connectedCallback() {
		super.connectedCallback && super.connectedCallback(), To ? this[Qu].observe(this) : self.addEventListener("resize", this[Du]), Ro && this[Hu].observe(this), this.addEventListener("focus", this[ku]), this.addEventListener("blur", this[Ou]);
		const t = this[ad];
		t.addEventListener("contextlost", this[Fu]), t.registerScene(this[ed]), null != this[Pu] && (self.clearTimeout(this[Pu]), this[Pu] = null, this.requestUpdate("src", null))
	}
	disconnectedCallback() {
		super.disconnectedCallback && super.disconnectedCallback(), To ? this[Qu].unobserve(this) : self.removeEventListener("resize", this[Du]), Ro && this[Hu].unobserve(this), this.removeEventListener("focus", this[ku]), this.removeEventListener("blur", this[Ou]);
		const t = this[ad];
		t.removeEventListener("contextlost", this[Fu]), t.unregisterScene(this[ed]), this[Pu] = self.setTimeout((() => {
			this[ed].reset()
		}), 1e3)
	}
	updated(t) {
		super.updated(t), t.has("src") && (null == this.src ? (this[Uu] = !1, this[Ju] = 0, this[ed].reset()) : this.src !== this[ed].url && (this[Uu] = !1, this[Ju] = 0, this[Xu]())), t.has("alt") && this[Zu].setAttribute("aria-label", this[Wu]), t.has("withCredentials") && (Vc.withCredentials = this.withCredentials), t.has("generateSchema") && (this.generateSchema ? this[ed].updateSchema(this.src) : this[ed].updateSchema(null))
	}
	toDataURL(t, e) {
		return this[ad].displayCanvas(this[ed]).toDataURL(t, e)
	}
	async toBlob(t) {
		const e = t ? t.mimeType : void 0,
			i = t ? t.qualityArgument : void 0,
			n = t ? t.idealAspect : void 0,
			{
				width: s,
				height: r,
				idealAspect: a,
				aspect: o
			} = this[ed],
			{
				dpr: l,
				scaleFactor: c
			} = this[ad];
		let h = s * c * l,
			u = r * c * l,
			d = 0,
			A = 0;
		if(!0 === n)
			if(a > o) {
				const t = u;
				u = Math.round(h / a), A = (t - u) / 2
			} else {
				const t = h;
				h = Math.round(u * a), d = (t - h) / 2
			}
		Ru.width = h, Ru.height = u;
		try {
			return new Promise((async(t, n) => (Ru.getContext("2d").drawImage(this[ad].displayCanvas(this[ed]), d, A, h, u, 0, 0, h, u), !Ru.msToBlob || e && "image/png" !== e ? Ru.toBlob ? void Ru.toBlob((e => {
				if(!e) return n(new Error("Unable to retrieve canvas blob"));
				t(e)
			}), e, i) : t(await (async t => new Promise(((e, i) => {
				const n = t.match(/data:(.*);/);
				if(!n) return i(new Error(`${t} is not a valid data Url`));
				const s = n[1],
					r = t.replace(/data:image\/\w+;base64,/, ""),
					a = atob(r),
					o = [];
				for(let t = 0; t < a.length; t += 512) {
					const e = a.slice(t, t + 512),
						i = new Array(e.length);
					for(let t = 0; t < e.length; t++) i[t] = e.charCodeAt(t);
					const n = new Uint8Array(i);
					o.push(n)
				}
				e(new Blob(o, {
					type: s
				}))
			})))(Ru.toDataURL(e, i))) : t(Ru.msToBlob()))))
		} finally {
			this[Gu]({
				width: s,
				height: r
			})
		}
	}
	registerRenderer(t) {
		this[ed].externalRenderer = t
	}
	unregisterRenderer() {
		this[ed].externalRenderer = null
	}
	get[Wu]() {
		return this[qu]
	}
	get[qu]() {
		return null == this.alt || "null" === this.alt ? this[Lu] : this.alt
	}[ld]() {
		return this[Uu]
	}[cd]() {
		return this.loaded && this[zu]
	}[hd]() {
		return !!this.src && this[zu]
	}[Gu]({
		width: t,
		height: e
	}) {
		this[$u].style.width = `${t}px`, this[$u].style.height = `${e}px`, this[rd]({
			width: parseFloat(t),
			height: parseFloat(e)
		})
	}[nd](t, e) {}[Ku]() {
		this[Uu] || (this[Uu] = !0, this[Ju] = performance.now())
	}[id]() {
		this[ed].queueRender()
	}[sd]() {}[Yu](t) {
		this[Nu] = t;
		const e = this.getRootNode();
		null != e && e.activeElement === this && this[ju].textContent != t && (this[ju].textContent = t)
	}[(Su = ku, Mu = Ou, rd)](t) {
		this[ed].setSize(t.width, t.height)
	}
	async [(Bu = Fu, Xu)]() {
		const t = this[ed];
		if(this.loaded || !this[hd]() || this.src === t.url) return;
		this.generateSchema && t.updateSchema(this.src), this[Yu]("Loading"), t.stopAnimation();
		const e = this[od].beginActivity(),
			i = this.src;
		try {
			const n = t.setSource(i, (t => e(.95 * Vo(t, 0, 1)))),
				s = this[Xo]();
			await Promise.all([n, s]), this[Ku](), this[sd](), await new Promise((t => {
				requestAnimationFrame((() => {
					requestAnimationFrame((() => {
						this.dispatchEvent(new CustomEvent("load", {
							detail: {
								url: i
							}
						})), t()
					}))
				}))
			}))
		} catch(t) {
			this.dispatchEvent(new CustomEvent("error", {
				detail: {
					type: "loadfailure",
					sourceError: t
				}
			}))
		} finally {
			e(1)
		}
	}
}
Tu([e({
	type: String
})], Ad.prototype, "alt", void 0), Tu([e({
	type: String
})], Ad.prototype, "src", void 0), Tu([e({
	type: Boolean,
	attribute: "with-credentials"
})], Ad.prototype, "withCredentials", void 0), Tu([e({
	type: Boolean,
	attribute: "generate-schema"
})], Ad.prototype, "generateSchema", void 0);
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var pd = function(t, e, i, n) {
	for(var s, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n, o = t.length - 1; o >= 0; o--)(s = t[o]) && (a = (r < 3 ? s(a) : r > 3 ? s(e, i, a) : s(e, i)) || a);
	return r > 3 && a && Object.defineProperty(e, i, a), a
};
const gd = Symbol("changeAnimation"),
	md = Symbol("paused"),
	fd = {
		repetitions: 1 / 0,
		pingpong: !1
	},
	vd = Symbol("hotspotMap"),
	yd = Symbol("mutationCallback"),
	xd = Symbol("observer"),
	_d = Symbol("addHotspot"),
	Ed = Symbol("removeHotspot"),
	wd = new _t,
	bd = new y;
/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/
var Id = function(t) {
	return URL.createObjectURL(new Blob([t], {
		type: "text/javascript"
	}))
};
try {
	URL.revokeObjectURL(Id(""))
} catch(Va) {
	Id = function(t) {
		return "data:application/javascript;charset=UTF-8," + encodeURI(t)
	}
}
var Cd = Uint8Array,
	Sd = Uint16Array,
	Md = Uint32Array,
	Bd = new Cd([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
	Td = new Cd([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
	Rd = new Cd([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
	Dd = function(t, e) {
		for(var i = new Sd(31), n = 0; n < 31; ++n) i[n] = e += 1 << t[n - 1];
		var s = new Md(i[30]);
		for(n = 1; n < 30; ++n)
			for(var r = i[n]; r < i[n + 1]; ++r) s[r] = r - i[n] << 5 | n;
		return [i, s]
	},
	Ld = Dd(Bd, 2),
	Qd = Ld[0],
	Pd = Ld[1];
Qd[28] = 258, Pd[258] = 28;
for(var Fd = Dd(Td, 0)[1], Ud = new Sd(32768), Nd = 0; Nd < 32768; ++Nd) {
	var kd = (43690 & Nd) >>> 1 | (21845 & Nd) << 1;
	kd = (61680 & (kd = (52428 & kd) >>> 2 | (13107 & kd) << 2)) >>> 4 | (3855 & kd) << 4, Ud[Nd] = ((65280 & kd) >>> 8 | (255 & kd) << 8) >>> 1
}
var Od = function(t, e, i) {
		for(var n = t.length, s = 0, r = new Sd(e); s < n; ++s) ++r[t[s] - 1];
		var a, o = new Sd(e);
		for(s = 0; s < e; ++s) o[s] = o[s - 1] + r[s - 1] << 1;
		if(i) {
			a = new Sd(1 << e);
			var l = 15 - e;
			for(s = 0; s < n; ++s)
				if(t[s])
					for(var c = s << 4 | t[s], h = e - t[s], u = o[t[s] - 1]++ << h, d = u | (1 << h) - 1; u <= d; ++u) a[Ud[u] >>> l] = c
		} else
			for(a = new Sd(n), s = 0; s < n; ++s) t[s] && (a[s] = Ud[o[t[s] - 1]++] >>> 15 - t[s]);
		return a
	},
	Gd = new Cd(288);
for(Nd = 0; Nd < 144; ++Nd) Gd[Nd] = 8;
for(Nd = 144; Nd < 256; ++Nd) Gd[Nd] = 9;
for(Nd = 256; Nd < 280; ++Nd) Gd[Nd] = 7;
for(Nd = 280; Nd < 288; ++Nd) Gd[Nd] = 8;
var Hd = new Cd(32);
for(Nd = 0; Nd < 32; ++Nd) Hd[Nd] = 5;
var zd = Od(Gd, 9, 0),
	Vd = Od(Hd, 5, 0),
	Wd = function(t) {
		return(t / 8 | 0) + (7 & t && 1)
	},
	qd = function(t, e, i) {
		(null == e || e < 0) && (e = 0), (null == i || i > t.length) && (i = t.length);
		var n = new(t instanceof Sd ? Sd : t instanceof Md ? Md : Cd)(i - e);
		return n.set(t.subarray(e, i)), n
	},
	jd = function(t, e, i) {
		i <<= 7 & e;
		var n = e / 8 | 0;
		t[n] |= i, t[n + 1] |= i >>> 8
	},
	Yd = function(t, e, i) {
		i <<= 7 & e;
		var n = e / 8 | 0;
		t[n] |= i, t[n + 1] |= i >>> 8, t[n + 2] |= i >>> 16
	},
	Jd = function(t, e) {
		for(var i = [], n = 0; n < t.length; ++n) t[n] && i.push({
			s: n,
			f: t[n]
		});
		var s = i.length,
			r = i.slice();
		if(!s) return [iA, 0];
		if(1 == s) {
			var a = new Cd(i[0].s + 1);
			return a[i[0].s] = 1, [a, 1]
		}
		i.sort((function(t, e) {
			return t.f - e.f
		})), i.push({
			s: -1,
			f: 25001
		});
		var o = i[0],
			l = i[1],
			c = 0,
			h = 1,
			u = 2;
		for(i[0] = {
				s: -1,
				f: o.f + l.f,
				l: o,
				r: l
			}; h != s - 1;) o = i[i[c].f < i[u].f ? c++ : u++], l = i[c != h && i[c].f < i[u].f ? c++ : u++], i[h++] = {
			s: -1,
			f: o.f + l.f,
			l: o,
			r: l
		};
		var d = r[0].s;
		for(n = 1; n < s; ++n) r[n].s > d && (d = r[n].s);
		var A = new Sd(d + 1),
			p = Xd(i[h - 1], A, 0);
		if(p > e) {
			n = 0;
			var g = 0,
				m = p - e,
				f = 1 << m;
			for(r.sort((function(t, e) {
					return A[e.s] - A[t.s] || t.f - e.f
				})); n < s; ++n) {
				var v = r[n].s;
				if(!(A[v] > e)) break;
				g += f - (1 << p - A[v]), A[v] = e
			}
			for(g >>>= m; g > 0;) {
				var y = r[n].s;
				A[y] < e ? g -= 1 << e - A[y]++ - 1 : ++n
			}
			for(; n >= 0 && g; --n) {
				var x = r[n].s;
				A[x] == e && (--A[x], ++g)
			}
			p = e
		}
		return [new Cd(A), p]
	},
	Xd = function(t, e, i) {
		return -1 == t.s ? Math.max(Xd(t.l, e, i + 1), Xd(t.r, e, i + 1)) : e[t.s] = i
	},
	Kd = function(t) {
		for(var e = t.length; e && !t[--e];);
		for(var i = new Sd(++e), n = 0, s = t[0], r = 1, a = function(t) {
				i[n++] = t
			}, o = 1; o <= e; ++o)
			if(t[o] == s && o != e) ++r;
			else {
				if(!s && r > 2) {
					for(; r > 138; r -= 138) a(32754);
					r > 2 && (a(r > 10 ? r - 11 << 5 | 28690 : r - 3 << 5 | 12305), r = 0)
				} else if(r > 3) {
					for(a(s), --r; r > 6; r -= 6) a(8304);
					r > 2 && (a(r - 3 << 5 | 8208), r = 0)
				}
				for(; r--;) a(s);
				r = 1, s = t[o]
			}
		return [i.subarray(0, n), e]
	},
	$d = function(t, e) {
		for(var i = 0, n = 0; n < e.length; ++n) i += t[n] * e[n];
		return i
	},
	Zd = function(t, e, i) {
		var n = i.length,
			s = Wd(e + 2);
		t[s] = 255 & n, t[s + 1] = n >>> 8, t[s + 2] = 255 ^ t[s], t[s + 3] = 255 ^ t[s + 1];
		for(var r = 0; r < n; ++r) t[s + r + 4] = i[r];
		return 8 * (s + 4 + n)
	},
	tA = function(t, e, i, n, s, r, a, o, l, c, h) {
		jd(e, h++, i), ++s[256];
		for(var u = Jd(s, 15), d = u[0], A = u[1], p = Jd(r, 15), g = p[0], m = p[1], f = Kd(d), v = f[0], y = f[1], x = Kd(g), _ = x[0], E = x[1], w = new Sd(19), b = 0; b < v.length; ++b) w[31 & v[b]]++;
		for(b = 0; b < _.length; ++b) w[31 & _[b]]++;
		for(var I = Jd(w, 7), C = I[0], S = I[1], M = 19; M > 4 && !C[Rd[M - 1]]; --M);
		var B, T, R, D, L = c + 5 << 3,
			Q = $d(s, Gd) + $d(r, Hd) + a,
			P = $d(s, d) + $d(r, g) + a + 14 + 3 * M + $d(w, C) + (2 * w[16] + 3 * w[17] + 7 * w[18]);
		if(L <= Q && L <= P) return Zd(e, h, t.subarray(l, l + c));
		if(jd(e, h, 1 + (P < Q)), h += 2, P < Q) {
			B = Od(d, A, 0), T = d, R = Od(g, m, 0), D = g;
			var F = Od(C, S, 0);
			jd(e, h, y - 257), jd(e, h + 5, E - 1), jd(e, h + 10, M - 4), h += 14;
			for(b = 0; b < M; ++b) jd(e, h + 3 * b, C[Rd[b]]);
			h += 3 * M;
			for(var U = [v, _], N = 0; N < 2; ++N) {
				var k = U[N];
				for(b = 0; b < k.length; ++b) {
					var O = 31 & k[b];
					jd(e, h, F[O]), h += C[O], O > 15 && (jd(e, h, k[b] >>> 5 & 127), h += k[b] >>> 12)
				}
			}
		} else B = zd, T = Gd, R = Vd, D = Hd;
		for(b = 0; b < o; ++b)
			if(n[b] > 255) {
				O = n[b] >>> 18 & 31;
				Yd(e, h, B[O + 257]), h += T[O + 257], O > 7 && (jd(e, h, n[b] >>> 23 & 31), h += Bd[O]);
				var G = 31 & n[b];
				Yd(e, h, R[G]), h += D[G], G > 3 && (Yd(e, h, n[b] >>> 5 & 8191), h += Td[G])
			} else Yd(e, h, B[n[b]]), h += T[n[b]];
		return Yd(e, h, B[256]), h + T[256]
	},
	eA = new Md([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
	iA = new Cd(0),
	nA = function() {
		for(var t = new Md(256), e = 0; e < 256; ++e) {
			for(var i = e, n = 9; --n;) i = (1 & i && 3988292384) ^ i >>> 1;
			t[e] = i
		}
		return t
	}(),
	sA = function() {
		var t = -1;
		return {
			p: function(e) {
				for(var i = t, n = 0; n < e.length; ++n) i = nA[255 & i ^ e[n]] ^ i >>> 8;
				t = i
			},
			d: function() {
				return ~t
			}
		}
	},
	rA = function(t, e, i, n, s) {
		return function(t, e, i, n, s, r) {
			var a = t.length,
				o = new Cd(n + a + 5 * (1 + Math.ceil(a / 7e3)) + s),
				l = o.subarray(n, o.length - s),
				c = 0;
			if(!e || a < 8)
				for(var h = 0; h <= a; h += 65535) {
					var u = h + 65535;
					u < a ? c = Zd(l, c, t.subarray(h, u)) : (l[h] = r, c = Zd(l, c, t.subarray(h, a)))
				} else {
					for(var d = eA[e - 1], A = d >>> 13, p = 8191 & d, g = (1 << i) - 1, m = new Sd(32768), f = new Sd(g + 1), v = Math.ceil(i / 3), y = 2 * v, x = function(e) {
							return(t[e] ^ t[e + 1] << v ^ t[e + 2] << y) & g
						}, _ = new Md(25e3), E = new Sd(288), w = new Sd(32), b = 0, I = 0, C = (h = 0, 0), S = 0, M = 0; h < a; ++h) {
						var B = x(h),
							T = 32767 & h,
							R = f[B];
						if(m[T] = R, f[B] = T, S <= h) {
							var D = a - h;
							if((b > 7e3 || C > 24576) && D > 423) {
								c = tA(t, l, 0, _, E, w, I, C, M, h - M, c), C = b = I = 0, M = h;
								for(var L = 0; L < 286; ++L) E[L] = 0;
								for(L = 0; L < 30; ++L) w[L] = 0
							}
							var Q = 2,
								P = 0,
								F = p,
								U = T - R & 32767;
							if(D > 2 && B == x(h - U))
								for(var N = Math.min(A, D) - 1, k = Math.min(32767, h), O = Math.min(258, D); U <= k && --F && T != R;) {
									if(t[h + Q] == t[h + Q - U]) {
										for(var G = 0; G < O && t[h + G] == t[h + G - U]; ++G);
										if(G > Q) {
											if(Q = G, P = U, G > N) break;
											var H = Math.min(U, G - 2),
												z = 0;
											for(L = 0; L < H; ++L) {
												var V = h - U + L + 32768 & 32767,
													W = V - m[V] + 32768 & 32767;
												W > z && (z = W, R = V)
											}
										}
									}
									U += (T = R) - (R = m[T]) + 32768 & 32767
								}
							if(P) {
								_[C++] = 268435456 | Pd[Q] << 18 | Fd[P];
								var q = 31 & Pd[Q],
									j = 31 & Fd[P];
								I += Bd[q] + Td[j], ++E[257 + q], ++w[j], S = h + Q, ++b
							} else _[C++] = t[h], ++E[t[h]]
						}
					}
					c = tA(t, l, r, _, E, w, I, C, M, h - M, c), !r && 7 & c && (c = Zd(l, c + 1, iA))
				}
			return qd(o, 0, n + Wd(c) + s)
		}(t, null == e.level ? 6 : e.level, null == e.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(t.length)))) : 12 + e.mem, i, n, !s)
	},
	aA = function(t, e) {
		var i = {};
		for(var n in t) i[n] = t[n];
		for(var n in e) i[n] = e[n];
		return i
	},
	oA = function(t, e, i) {
		for(; i; ++e) t[e] = i, i >>>= 8
	};

function lA(t, e) {
	return rA(t, e || {}, 0, 0)
}
var cA = function(t, e, i, n) {
		for(var s in t) {
			var r = t[s],
				a = e + s;
			r instanceof Cd ? i[a] = [r, n] : Array.isArray(r) ? i[a] = [r[0], aA(n, r[1])] : cA(r, a + "/", i, n)
		}
	},
	hA = "undefined" != typeof TextEncoder && new TextEncoder,
	uA = "undefined" != typeof TextDecoder && new TextDecoder;
try {
	uA.decode(iA, {
		stream: !0
	}), 1
} catch(Va) {}

function dA(t, e) {
	if(e) {
		for(var i = new Cd(t.length), n = 0; n < t.length; ++n) i[n] = t.charCodeAt(n);
		return i
	}
	if(hA) return hA.encode(t);
	var s = t.length,
		r = new Cd(t.length + (t.length >> 1)),
		a = 0,
		o = function(t) {
			r[a++] = t
		};
	for(n = 0; n < s; ++n) {
		if(a + 5 > r.length) {
			var l = new Cd(a + 8 + (s - n << 1));
			l.set(r), r = l
		}
		var c = t.charCodeAt(n);
		c < 128 || e ? o(c) : c < 2048 ? (o(192 | c >> 6), o(128 | 63 & c)) : c > 55295 && c < 57344 ? (o(240 | (c = 65536 + (1047552 & c) | 1023 & t.charCodeAt(++n)) >> 18), o(128 | c >> 12 & 63), o(128 | c >> 6 & 63), o(128 | 63 & c)) : (o(224 | c >> 12), o(128 | c >> 6 & 63), o(128 | 63 & c))
	}
	return qd(r, 0, a)
}
var AA = function(t) {
		var e = 0;
		if(t)
			for(var i in t) {
				var n = t[i].length;
				if(n > 65535) throw "extra field too long";
				e += n + 4
			}
		return e
	},
	pA = function(t, e, i, n, s, r, a, o) {
		var l = n.length,
			c = i.extra,
			h = o && o.length,
			u = AA(c);
		oA(t, e, null != a ? 33639248 : 67324752), e += 4, null != a && (t[e++] = 20, t[e++] = i.os), t[e] = 20, e += 2, t[e++] = i.flag << 1 | (null == r && 8), t[e++] = s && 8, t[e++] = 255 & i.compression, t[e++] = i.compression >> 8;
		var d = new Date(null == i.mtime ? Date.now() : i.mtime),
			A = d.getFullYear() - 1980;
		if(A < 0 || A > 119) throw "date not in range 1980-2099";
		if(oA(t, e, A << 25 | d.getMonth() + 1 << 21 | d.getDate() << 16 | d.getHours() << 11 | d.getMinutes() << 5 | d.getSeconds() >>> 1), e += 4, null != r && (oA(t, e, i.crc), oA(t, e + 4, r), oA(t, e + 8, i.size)), oA(t, e + 12, l), oA(t, e + 14, u), e += 16, null != a && (oA(t, e, h), oA(t, e + 6, i.attrs), oA(t, e + 10, a), e += 14), t.set(n, e), e += l, u)
			for(var p in c) {
				var g = c[p],
					m = g.length;
				oA(t, e, +p), oA(t, e + 2, m), t.set(g, e + 4), e += 4 + m
			}
		return h && (t.set(o, e), e += h), e
	};

function gA(t, e) {
	e || (e = {});
	var i = {},
		n = [];
	cA(t, "", i, e);
	var s = 0,
		r = 0;
	for(var a in i) {
		var o = i[a],
			l = o[0],
			c = o[1],
			h = 0 == c.level ? 0 : 8,
			u = (w = dA(a)).length,
			d = c.comment,
			A = d && dA(d),
			p = A && A.length,
			g = AA(c.extra);
		if(u > 65535) throw "filename too long";
		var m = h ? lA(l, c) : l,
			f = m.length,
			v = sA();
		v.p(l), n.push(aA(c, {
			size: l.length,
			crc: v.d(),
			c: m,
			f: w,
			m: A,
			u: u != a.length || A && d.length != p,
			o: s,
			compression: h
		})), s += 30 + u + g + f, r += 76 + 2 * (u + g) + (p || 0) + f
	}
	for(var y = new Cd(r + 22), x = s, _ = r - s, E = 0; E < n.length; ++E) {
		var w = n[E];
		pA(y, w.o, w, w.f, w.u, w.c.length);
		var b = 30 + w.f.length + AA(w.extra);
		y.set(w.c, w.o + b), pA(y, s, w, w.f, w.u, w.c.length, w.o, w.m), s += 16 + b + (w.m ? w.m.length : 0)
	}
	return function(t, e, i, n, s) {
		oA(t, e, 101010256), oA(t, e + 8, i), oA(t, e + 10, i), oA(t, e + 12, n), oA(t, e + 16, s)
	}(y, s, n.length, _, x), y
}
class mA {
	async parse(t) {
		const e = {};
		e["model.usda"] = null;
		let i = vA();
		const n = {},
			s = {};
		t.traverseVisible((t => {
			if(t.isMesh) {
				const s = t.geometry,
					r = t.material;
				if(r.isMeshStandardMaterial) {
					const a = "geometries/Geometry_" + s.id + ".usd";
					if(!(a in e)) {
						const t = function(t) {
							return `\ndef "Geometry"\n{\n  ${function(t){const e="Geometry",i=t.attributes,n=i.position.count;return`\
							n def Mesh "${e}"\
							n {\
								n int[] faceVertexCounts = [$ {
									function(t) {
										const e = null !== t.index ? t.index.count : t.attributes.position.count;
										return Array(e / 3).fill(3).join(", ")
									}(t)
								}]\ n int[] faceVertexIndices = [$ {
									function(t) {
										const e = t.index,
											i = [];
										if(null !== e)
											for(let t = 0; t < e.count; t++) i.push(e.getX(t));
										else {
											const e = t.attributes.position.count;
											for(let t = 0; t < e; t++) i.push(t)
										}
										return i.join(", ")
									}(t)
								}]\ n normal3f[] normals = [$ {
									xA(i.normal, n)
								}](\n interpolation = "vertex"\
									n)\ n point3f[] points = [$ {
									xA(i.position, n)
								}]\ n float2[] primvars: st = [$ {
									function(t, e) {
										if(void 0 === t) return console.warn("USDZExporter: UVs missing."), Array(e).fill("(0, 0)").join(", ");
										const i = [];
										for(let e = 0; e < t.count; e++) {
											const n = t.getX(e),
												s = t.getY(e);
											i.push(`(${n.toPrecision(7)}, ${1-s.toPrecision(7)})`)
										}
										return i.join(", ")
									}(i.uv, n)
								}](\n interpolation = "vertex"\
									n)\ n uniform token subdivisionScheme = "none"\
								n
							}\
							n `}(t)}\n}\n`
						}(s);
						e[a] = function(t) {
							let e = vA();
							return e += t, dA(e)
						}(t)
					}
					r.uuid in n || (n[r.uuid] = r), i += function(t, e, i) {
						const n = "Object_" + t.id,
							s = function(t) {
								const e = t.elements;
								return `( ${yA(e,0)}, ${yA(e,4)}, ${yA(e,8)}, ${yA(e,12)} )`
							}(t.matrixWorld);
						t.matrixWorld.determinant() < 0 && console.warn("THREE.USDZExporter: USDZ does not support negative scales", t);
						return `def Xform "${n}" (\n    prepend references = @./geometries/Geometry_${e.id}.usd@</Geometry>\n)\n{\n    matrix4d xformOp:transform = ${s}\n    uniform token[] xformOpOrder = ["xformOp:transform"]\n\n    rel material:binding = </Materials/Material_${i.id}>\n}\n\n`
					}(t, s, r)
				} else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)", t)
			}
		})), i += function(t, e) {
			const i = [];
			for(const n in t) {
				const s = t[n];
				i.push(_A(s, e))
			}
			return `def "Materials"\n{\n${i.join("")}\n}\n\n`
		}(n, s), e["model.usda"] = dA(i), i = null;
		for(const t in s) {
			const i = s[t],
				n = t.split("_")[1],
				r = 1023 === i.format,
				a = fA(i.image, n),
				o = await new Promise((t => a.toBlob(t, r ? "image/png" : "image/jpeg", 1)));
			e[`textures/Texture_${t}.${r?"png":"jpg"}`] = new Uint8Array(await o.arrayBuffer())
		}
		let r = 0;
		for(const t in e) {
			const i = e[t];
			r += 34 + t.length;
			const n = 63 & r;
			if(4 !== n) {
				const s = new Uint8Array(64 - n);
				e[t] = [i, {
					extra: {
						12345: s
					}
				}]
			}
			r = i.length
		}
		return gA(e, {
			level: 0
		})
	}
}

function fA(t, e) {
	if("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
		const i = 1024 / Math.max(t.width, t.height),
			n = document.createElement("canvas");
		n.width = t.width * Math.min(1, i), n.height = t.height * Math.min(1, i);
		const s = n.getContext("2d");
		if(s.drawImage(t, 0, 0, n.width, n.height), void 0 !== e) {
			const t = parseInt(e, 16),
				i = (t >> 16 & 255) / 255,
				r = (t >> 8 & 255) / 255,
				a = (255 & t) / 255,
				o = s.getImageData(0, 0, n.width, n.height),
				l = o.data;
			for(let t = 0; t < l.length; t += 4) l[t + 0] = l[t + 0] * i, l[t + 1] = l[t + 1] * r, l[t + 2] = l[t + 2] * a;
			s.putImageData(o, 0, 0)
		}
		return n
	}
}

function vA() {
	return '#usda 1.0\n(\n    customLayerData = {\n        string creator = "Three.js USDZExporter"\n    }\n    metersPerUnit = 1\n    upAxis = "Y"\n)\n\n'
}

function yA(t, e) {
	return `(${t[e+0]}, ${t[e+1]}, ${t[e+2]}, ${t[e+3]})`
}

function xA(t, e) {
	if(void 0 === t) return console.warn("USDZExporter: Normals missing."), Array(e).fill("(0, 0, 0)").join(", ");
	const i = [];
	for(let e = 0; e < t.count; e++) {
		const n = t.getX(e),
			s = t.getY(e),
			r = t.getZ(e);
		i.push(`(${n.toPrecision(7)}, ${s.toPrecision(7)}, ${r.toPrecision(7)})`)
	}
	return i.join(", ")
}

function _A(t, e) {
	const i = "            ",
		n = [],
		s = [];

	function r(i, n, s) {
		const r = i.id + (s ? "_" + s.getHexString() : ""),
			a = 1023 === i.format;
		return e[r] = i, `\n        def Shader "Transform2d_${n}" (\n            sdrMetadata = {\n                string role = "math"\n            }\n        )\n        {\n            uniform token info:id = "UsdTransform2d"\n            float2 inputs:in.connect = </Materials/Material_${t.id}/uvReader_st.outputs:result>\n            float2 inputs:scale = ${wA(i.repeat)}\n            float2 inputs:translation = ${wA(i.offset)}\n            float2 outputs:result\n        }\n\n        def Shader "Texture_${i.id}_${n}"\n        {\n            uniform token info:id = "UsdUVTexture"\n            asset inputs:file = @textures/Texture_${r}.${a?"png":"jpg"}@\n            float2 inputs:st.connect = </Materials/Material_${t.id}/Transform2d_${n}.outputs:result>\n            token inputs:wrapS = "repeat"\n            token inputs:wrapT = "repeat"\n            float outputs:r\n            float outputs:g\n            float outputs:b\n            float3 outputs:rgb\n            ${t.transparent||t.alphaTest>0?"float outputs:a":""}\n        }`
	}
	return 2 === t.side && console.warn("THREE.USDZExporter: USDZ does not support double sided materials", t), null !== t.map ? (n.push(`${i}color3f inputs:diffuseColor.connect = </Materials/Material_${t.id}/Texture_${t.map.id}_diffuse.outputs:rgb>`), t.transparent ? n.push(`${i}float inputs:opacity.connect = </Materials/Material_${t.id}/Texture_${t.map.id}_diffuse.outputs:a>`) : t.alphaTest > 0 && (n.push(`${i}float inputs:opacity.connect = </Materials/Material_${t.id}/Texture_${t.map.id}_diffuse.outputs:a>`), n.push(`${i}float inputs:opacityThreshold = ${t.alphaTest}`)), s.push(r(t.map, "diffuse", t.color))) : n.push(`${i}color3f inputs:diffuseColor = ${EA(t.color)}`), null !== t.emissiveMap ? (n.push(`${i}color3f inputs:emissiveColor.connect = </Materials/Material_${t.id}/Texture_${t.emissiveMap.id}_emissive.outputs:rgb>`), s.push(r(t.emissiveMap, "emissive"))) : t.emissive.getHex() > 0 && n.push(`${i}color3f inputs:emissiveColor = ${EA(t.emissive)}`), null !== t.normalMap && (n.push(`${i}normal3f inputs:normal.connect = </Materials/Material_${t.id}/Texture_${t.normalMap.id}_normal.outputs:rgb>`), s.push(r(t.normalMap, "normal"))), null !== t.aoMap && (n.push(`${i}float inputs:occlusion.connect = </Materials/Material_${t.id}/Texture_${t.aoMap.id}_occlusion.outputs:r>`), s.push(r(t.aoMap, "occlusion"))), null !== t.roughnessMap && 1 === t.roughness ? (n.push(`${i}float inputs:roughness.connect = </Materials/Material_${t.id}/Texture_${t.roughnessMap.id}_roughness.outputs:g>`), s.push(r(t.roughnessMap, "roughness"))) : n.push(`${i}float inputs:roughness = ${t.roughness}`), null !== t.metalnessMap && 1 === t.metalness ? (n.push(`${i}float inputs:metallic.connect = </Materials/Material_${t.id}/Texture_${t.metalnessMap.id}_metallic.outputs:b>`), s.push(r(t.metalnessMap, "metallic"))) : n.push(`${i}float inputs:metallic = ${t.metalness}`), null !== t.alphaMap ? (n.push(`${i}float inputs:opacity.connect = </Materials/Material_${t.id}/Texture_${t.alphaMap.id}_opacity.outputs:r>`), n.push(`${i}float inputs:opacityThreshold = 0.0001`), s.push(r(t.alphaMap, "opacity"))) : n.push(`${i}float inputs:opacity = ${t.opacity}`), t.isMeshPhysicalMaterial && (n.push(`${i}float inputs:clearcoat = ${t.clearcoat}`), n.push(`${i}float inputs:clearcoatRoughness = ${t.clearcoatRoughness}`), n.push(`${i}float inputs:ior = ${t.ior}`)), `\n    def Material "Material_${t.id}"\n    {\n        def Shader "PreviewSurface"\n        {\n            uniform token info:id = "UsdPreviewSurface"\n${n.join("\n")}\n            int inputs:useSpecularWorkflow = 0\n            token outputs:surface\n        }\n\n        token outputs:surface.connect = </Materials/Material_${t.id}/PreviewSurface.outputs:surface>\n        token inputs:frame:stPrimvarName = "st"\n\n        def Shader "uvReader_st"\n        {\n            uniform token info:id = "UsdPrimvarReader_float2"\n            token inputs:varname.connect = </Materials/Material_${t.id}.inputs:frame:stPrimvarName>\n            float2 inputs:fallback = (0.0, 0.0)\n            float2 outputs:result\n        }\n\n${s.join("\n")}\n\n    }\n`
}

function EA(t) {
	return `(${t.r}, ${t.g}, ${t.b})`
}

function wA(t) {
	return `(${t.x}, ${t.y})`
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bA = function(t, e, i, n) {
	for(var s, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n, o = t.length - 1; o >= 0; o--)(s = t[o]) && (a = (r < 3 ? s(a) : r > 3 ? s(e, i, a) : s(e, i)) || a);
	return r > 3 && a && Object.defineProperty(e, i, a), a
};
let IA = !1,
	CA = !1;
const SA = (MA = ["quick-look", "scene-viewer", "webxr", "none"], t => {
	try {
		const e = Zc(t),
			i = (e.length ? e[0].terms : []).filter((t => t && "ident" === t.type)).map((t => t.value)).filter((t => MA.indexOf(t) > -1)),
			n = new Set;
		for(const t of i) n.add(t);
		return n
	} catch(t) {}
	return new Set
});
var MA;
const BA = "quick-look",
	TA = "scene-viewer",
	RA = "webxr",
	DA = "none",
	LA = Symbol("arButtonContainer"),
	QA = Symbol("enterARWithWebXR"),
	PA = Symbol("openSceneViewer"),
	FA = Symbol("openIOSARQuickLook"),
	UA = Symbol("canActivateAR"),
	NA = Symbol("arMode"),
	kA = Symbol("arModes"),
	OA = Symbol("arAnchor"),
	GA = Symbol("preload"),
	HA = Symbol("onARButtonContainerClick"),
	zA = Symbol("onARStatus"),
	VA = Symbol("onARTracking"),
	WA = Symbol("onARTap"),
	qA = Symbol("selectARMode"),
	jA = Symbol("triggerLoad");
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var YA, JA, XA;
const KA = Symbol("evaluate"),
	$A = Symbol("lastValue");
class ZA {
	constructor() {
		this[YA] = null
	}
	static evaluatableFor(t, e = oh) {
		if(t instanceof ZA) return t;
		if("number" === t.type) return "%" === t.unit ? new ip(t, e) : t;
		switch(t.name.value) {
			case "calc":
				return new op(t, e);
			case "env":
				return new sp(t)
		}
		return oh
	}
	static evaluate(t) {
		return t instanceof ZA ? t.evaluate() : t
	}
	static isConstant(t) {
		return !(t instanceof ZA) || t.isConstant
	}
	static applyIntrinsics(t, e) {
		const {
			basis: i,
			keywords: n
		} = e, {
			auto: s
		} = n;
		return i.map(((e, i) => {
			const r = null == s[i] ? e : s[i];
			let a = t[i] ? t[i] : r;
			if("ident" === a.type) {
				const t = a.value;
				t in n && (a = n[t][i])
			}
			return null != a && "ident" !== a.type || (a = r), "%" === a.unit ? $c(a.number / 100 * e.number, e.unit) : (a = hh(a, e), a.unit !== e.unit ? e : a)
		}))
	}
	get isConstant() {
		return !1
	}
	evaluate() {
		return this.isConstant && null != this[$A] || (this[$A] = this[KA]()), this[$A]
	}
}
YA = $A;
const tp = Symbol("percentage"),
	ep = Symbol("basis");
class ip extends ZA {
	constructor(t, e) {
		super(), this[tp] = t, this[ep] = e
	}
	get isConstant() {
		return !0
	}[KA]() {
		return $c(this[tp].number / 100 * this[ep].number, this[ep].unit)
	}
}
const np = Symbol("identNode");
class sp extends ZA {
	constructor(t) {
		super(), this[JA] = null;
		const e = t.arguments.length ? t.arguments[0].terms[0] : null;
		null != e && "ident" === e.type && (this[np] = e)
	}
	get isConstant() {
		return !1
	}[(JA = np, KA)]() {
		if(null != this[np] && "window-scroll-y" === this[np].value) {
			return {
				type: "number",
				number: window.pageYOffset / (Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight) || 0,
				unit: null
			}
		}
		return oh
	}
}
const rp = /[\*\/]/,
	ap = Symbol("evaluator");
class op extends ZA {
	constructor(t, e = oh) {
		if(super(), this[XA] = null, 1 !== t.arguments.length) return;
		const i = t.arguments[0].terms.slice(),
			n = [];
		for(; i.length;) {
			const t = i.shift();
			if(n.length > 0) {
				const i = n[n.length - 1];
				if("operator" === i.type && rp.test(i.value)) {
					const i = n.pop(),
						s = n.pop();
					if(null == s) return;
					n.push(new up(i, ZA.evaluatableFor(s, e), ZA.evaluatableFor(t, e)));
					continue
				}
			}
			n.push("operator" === t.type ? t : ZA.evaluatableFor(t, e))
		}
		for(; n.length > 2;) {
			const [t, i, s] = n.splice(0, 3);
			if("operator" !== i.type) return;
			n.unshift(new up(i, ZA.evaluatableFor(t, e), ZA.evaluatableFor(s, e)))
		}
		1 === n.length && (this[ap] = n[0])
	}
	get isConstant() {
		return null == this[ap] || ZA.isConstant(this[ap])
	}[(XA = ap, KA)]() {
		return null != this[ap] ? ZA.evaluate(this[ap]) : oh
	}
}
const lp = Symbol("operator"),
	cp = Symbol("left"),
	hp = Symbol("right");
class up extends ZA {
	constructor(t, e, i) {
		super(), this[lp] = t, this[cp] = e, this[hp] = i
	}
	get isConstant() {
		return ZA.isConstant(this[cp]) && ZA.isConstant(this[hp])
	}[KA]() {
		const t = hh(ZA.evaluate(this[cp])),
			e = hh(ZA.evaluate(this[hp])),
			{
				number: i,
				unit: n
			} = t,
			{
				number: s,
				unit: r
			} = e;
		if(null != r && null != n && r != n) return oh;
		const a = n || r;
		let o;
		switch(this[lp].value) {
			case "+":
				o = i + s;
				break;
			case "-":
				o = i - s;
				break;
			case "/":
				o = i / s;
				break;
			case "*":
				o = i * s;
				break;
			default:
				return oh
		}
		return {
			type: "number",
			number: o,
			unit: a
		}
	}
}
const dp = Symbol("evaluatables"),
	Ap = Symbol("intrinsics");
class pp extends ZA {
	constructor(t, e) {
		super(), this[Ap] = e;
		const i = t[0],
			n = null != i ? i.terms : [];
		this[dp] = e.basis.map(((t, e) => {
			const i = n[e];
			return null == i ? {
				type: "ident",
				value: "auto"
			} : "ident" === i.type ? i : ZA.evaluatableFor(i, t)
		}))
	}
	get isConstant() {
		for(const t of this[dp])
			if(!ZA.isConstant(t)) return !1;
		return !0
	}[KA]() {
		const t = this[dp].map((t => ZA.evaluate(t)));
		return ZA.applyIntrinsics(t, this[Ap]).map((t => t.number))
	}
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var gp, mp, fp, vp;
const yp = Symbol("instances"),
	xp = Symbol("activateListener"),
	_p = Symbol("deactivateListener"),
	Ep = Symbol("notifyInstances"),
	wp = Symbol("notify"),
	bp = Symbol("callback");
class Ip {
	constructor(t) {
		this[bp] = t
	}
	static[Ep]() {
		for(const t of Ip[yp]) t[wp]()
	}
	static[(gp = yp, xp)]() {
		window.addEventListener("scroll", this[Ep], {
			passive: !0
		})
	}
	static[_p]() {
		window.removeEventListener("scroll", this[Ep])
	}
	observe() {
		0 === Ip[yp].size && Ip[xp](), Ip[yp].add(this)
	}
	disconnect() {
		Ip[yp].delete(this), 0 === Ip[yp].size && Ip[_p]()
	}[wp]() {
		this[bp]()
	}
}
Ip[gp] = new Set;
const Cp = Symbol("computeStyleCallback"),
	Sp = Symbol("astWalker"),
	Mp = Symbol("dependencies"),
	Bp = Symbol("onScroll");
class Tp {
	constructor(t) {
		this[mp] = {}, this[fp] = new ah(["function"]), this[vp] = () => {
			this[Cp]({
				relatedState: "window-scroll"
			})
		}, this[Cp] = t
	}
	observeEffectsFor(t) {
		const e = {},
			i = this[Mp];
		this[Sp].walk(t, (t => {
			const {
				name: n
			} = t, s = t.arguments[0].terms[0];
			if("env" === n.value && null != s && "ident" === s.type && "window-scroll-y" === s.value)
				if(null == e["window-scroll"]) {
					const t = "window-scroll" in i ? i["window-scroll"] : new Ip(this[Bp]);
					t.observe(), delete i["window-scroll"], e["window-scroll"] = t
				}
		}));
		for(const t in i) {
			i[t].disconnect()
		}
		this[Mp] = e
	}
	dispose() {
		for(const t in this[Mp]) {
			this[Mp][t].disconnect()
		}
	}
}
mp = Mp, fp = Sp, vp = Bp;
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rp = t => {
		const e = t.observeEffects || !1,
			i = t.intrinsics instanceof Function ? t.intrinsics : () => t.intrinsics;
		return(n, s) => {
			const r = n.updated,
				a = n.connectedCallback,
				o = n.disconnectedCallback,
				l = Symbol(`${s}StyleEffector`),
				c = Symbol(`${s}StyleEvaluator`),
				h = Symbol(`${s}UpdateEvaluator`),
				u = Symbol(`${s}EvaluateAndSync`);
			Object.defineProperties(n, {
				[l]: {
					value: null,
					writable: !0
				}, [c]: {
					value: null,
					writable: !0
				}, [h]: {
					value: function() {
						const t = Zc(this[s]);
						this[c] = new pp(t, i(this)), null == this[l] && e && (this[l] = new Tp((() => this[u]()))), null != this[l] && this[l].observeEffectsFor(t)
					}
				}, [u]: {
					value: function() {
						if(null == this[c]) return;
						const e = this[c].evaluate();
						this[t.updateHandler](e)
					}
				}, updated: {
					value: function(t) {
						t.has(s) && (this[h](), this[u]()), r.call(this, t)
					}
				}, connectedCallback: {
					value: function() {
						a.call(this), this.requestUpdate(s, this[s])
					}
				}, disconnectedCallback: {
					value: function() {
						o.call(this), null != this[l] && (this[l].dispose(), this[l] = null)
					}
				}
			})
		}
	},
	Dp = new v,
	Lp = new V,
	Qp = Object.freeze({
		minimumRadius: 0,
		maximumRadius: 1 / 0,
		minimumPolarAngle: Math.PI / 8,
		maximumPolarAngle: Math.PI - Math.PI / 8,
		minimumAzimuthalAngle: -1 / 0,
		maximumAzimuthalAngle: 1 / 0,
		minimumFieldOfView: 10,
		maximumFieldOfView: 45,
		touchAction: "none"
	}),
	Pp = Math.PI / 8,
	Fp = "user-interaction",
	Up = "none",
	Np = "automatic";
/* @license
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kp extends n {
	constructor(t, e, i) {
		super(), this.camera = t, this.element = e, this.scene = i, this.orbitSensitivity = 1, this.inputSensitivity = 1, this.changeSource = Up, this._interactionEnabled = !1, this._disableZoom = !1, this.isUserPointing = !1, this.enablePan = !0, this.enableTap = !0, this.panProjection = new y, this.panPerPixel = 0, this.spherical = new Ea, this.goalSpherical = new Ea, this.thetaDamper = new uh, this.phiDamper = new uh, this.radiusDamper = new uh, this.logFov = Math.log(Qp.maximumFieldOfView), this.goalLogFov = this.logFov, this.fovDamper = new uh, this.touchMode = null, this.pointers = [], this.startTime = 0, this.startPointerPosition = {
			clientX: 0,
			clientY: 0
		}, this.lastSeparation = 0, this.touchDecided = !1, this.onContext = t => {
			if(this.enablePan) t.preventDefault();
			else
				for(const t of this.pointers) this.onPointerUp(new PointerEvent("pointercancel", Object.assign(Object.assign({}, this.startPointerPosition), {
					pointerId: t.id
				})))
		}, this.touchModeZoom = (t, e) => {
			if(!this._disableZoom) {
				const t = this.twoTouchDistance(this.pointers[0], this.pointers[1]),
					e = .04 * (this.lastSeparation - t) * 50 / this.scene.height;
				this.lastSeparation = t, this.userAdjustOrbit(0, 0, e)
			}
			this.panPerPixel > 0 && this.movePan(t, e)
		}, this.disableScroll = t => {
			t.preventDefault()
		}, this.touchModeRotate = (t, e) => {
			const {
				touchAction: i
			} = this._options;
			if(!this.touchDecided && "none" !== i) {
				this.touchDecided = !0;
				const n = Math.abs(t),
					s = Math.abs(e);
				if(this.changeSource === Fp && ("pan-y" === i && s > n || "pan-x" === i && n > s)) return void(this.touchMode = null);
				this.element.addEventListener("touchmove", this.disableScroll, {
					passive: !1
				})
			}
			this.handleSinglePointerMove(t, e)
		}, this.onPointerDown = t => {
			if(this.pointers.length > 2) return;
			const {
				element: e
			} = this;
			0 === this.pointers.length && (e.addEventListener("pointermove", this.onPointerMove), e.addEventListener("pointerup", this.onPointerUp), this.touchMode = null, this.touchDecided = !1, this.startPointerPosition.clientX = t.clientX, this.startPointerPosition.clientY = t.clientY, this.startTime = performance.now());
			try {
				e.setPointerCapture(t.pointerId)
			} catch(t) {}
			this.pointers.push({
				clientX: t.clientX,
				clientY: t.clientY,
				id: t.pointerId
			}), this.isUserPointing = !1, "touch" === t.pointerType ? (this.changeSource = t.altKey ? Np : Fp, this.onTouchChange(t)) : (this.changeSource = Fp, this.onMouseDown(t))
		}, this.onPointerMove = t => {
			const e = this.pointers.find((e => e.id === t.pointerId));
			if(null == e) return;
			const i = this.pointers.length,
				n = (t.clientX - e.clientX) / i,
				s = (t.clientY - e.clientY) / i;
			0 === n && 0 === s || (e.clientX = t.clientX, e.clientY = t.clientY, "touch" === t.pointerType ? (this.changeSource = t.altKey ? Np : Fp, null !== this.touchMode && this.touchMode(n, s)) : (this.changeSource = Fp, this.panPerPixel > 0 ? this.movePan(n, s) : this.handleSinglePointerMove(n, s)))
		}, this.onPointerUp = t => {
			const {
				element: e
			} = this, i = this.pointers.findIndex((e => e.id === t.pointerId)); - 1 !== i && this.pointers.splice(i, 1), this.panPerPixel > 0 && !t.altKey && this.resetRadius(), 0 === this.pointers.length ? (e.removeEventListener("pointermove", this.onPointerMove), e.removeEventListener("pointerup", this.onPointerUp), e.removeEventListener("touchmove", this.disableScroll), this.enablePan && this.enableTap && this.recenter(t)) : null !== this.touchMode && this.onTouchChange(t), this.scene.element[og].style.opacity = 0, e.style.cursor = "grab", this.panPerPixel = 0, this.isUserPointing && this.dispatchEvent({
				type: "pointer-change-end"
			})
		}, this.onWheel = t => {
			this.changeSource = Fp;
			const e = t.deltaY * (1 == t.deltaMode ? 18 : 1) * .04 / 30;
			this.userAdjustOrbit(0, 0, e), t.preventDefault()
		}, this.onKeyDown = t => {
			const {
				changeSource: e
			} = this;
			this.changeSource = Fp;
			(t.shiftKey && this.enablePan ? this.panKeyCodeHandler(t) : this.orbitZoomKeyCodeHandler(t)) ? t.preventDefault(): this.changeSource = e
		}, this._options = Object.assign({}, Qp), this.setOrbit(0, Math.PI / 2, 1), this.setFieldOfView(100), this.jumpToGoal()
	}
	get interactionEnabled() {
		return this._interactionEnabled
	}
	enableInteraction() {
		if(!1 === this._interactionEnabled) {
			const {
				element: t
			} = this;
			t.addEventListener("pointerdown", this.onPointerDown), t.addEventListener("pointercancel", this.onPointerUp), this._disableZoom || t.addEventListener("wheel", this.onWheel), t.addEventListener("keydown", this.onKeyDown), t.addEventListener("touchmove", (() => {}), {
				passive: !1
			}), t.addEventListener("contextmenu", this.onContext), this.element.style.cursor = "grab", this._interactionEnabled = !0, this.updateTouchActionStyle()
		}
	}
	disableInteraction() {
		if(!0 === this._interactionEnabled) {
			const {
				element: t
			} = this;
			t.removeEventListener("pointerdown", this.onPointerDown), t.removeEventListener("pointermove", this.onPointerMove), t.removeEventListener("pointerup", this.onPointerUp), t.removeEventListener("pointercancel", this.onPointerUp), t.removeEventListener("wheel", this.onWheel), t.removeEventListener("keydown", this.onKeyDown), t.removeEventListener("contextmenu", this.onContext), t.style.cursor = "", this.touchMode = null, this._interactionEnabled = !1, this.updateTouchActionStyle()
		}
	}
	get options() {
		return this._options
	}
	set disableZoom(t) {
		this._disableZoom != t && (this._disableZoom = t, !0 === t ? this.element.removeEventListener("wheel", this.onWheel) : this.element.addEventListener("wheel", this.onWheel), this.updateTouchActionStyle())
	}
	getCameraSpherical(t = new Ea) {
		return t.copy(this.spherical)
	}
	getFieldOfView() {
		return this.camera.fov
	}
	applyOptions(t) {
		Object.assign(this._options, t), this.setOrbit(), this.setFieldOfView(Math.exp(this.goalLogFov))
	}
	updateNearFar(t, e) {
		this.camera.near = Math.max(t, e / 1e3), this.camera.far = e, this.camera.updateProjectionMatrix()
	}
	updateAspect(t) {
		this.camera.aspect = t, this.camera.updateProjectionMatrix()
	}
	setOrbit(t = this.goalSpherical.theta, e = this.goalSpherical.phi, i = this.goalSpherical.radius) {
		const {
			minimumAzimuthalAngle: n,
			maximumAzimuthalAngle: s,
			minimumPolarAngle: r,
			maximumPolarAngle: a,
			minimumRadius: o,
			maximumRadius: l
		} = this._options, {
			theta: c,
			phi: h,
			radius: u
		} = this.goalSpherical, d = Vo(t, n, s);
		isFinite(n) || isFinite(s) || (this.spherical.theta = this.wrapAngle(this.spherical.theta - d) + d);
		const A = Vo(e, r, a),
			p = Vo(i, o, l);
		return(d !== c || A !== h || p !== u) && (this.goalSpherical.theta = d, this.goalSpherical.phi = A, this.goalSpherical.radius = p, this.goalSpherical.makeSafe(), !0)
	}
	setRadius(t) {
		this.goalSpherical.radius = t, this.setOrbit()
	}
	setFieldOfView(t) {
		const {
			minimumFieldOfView: e,
			maximumFieldOfView: i
		} = this._options;
		t = Vo(t, e, i), this.goalLogFov = Math.log(t)
	}
	setDamperDecayTime(t) {
		this.thetaDamper.setDecayTime(t), this.phiDamper.setDecayTime(t), this.radiusDamper.setDecayTime(t), this.fovDamper.setDecayTime(t)
	}
	adjustOrbit(t, e, i) {
		const {
			theta: n,
			phi: s,
			radius: r
		} = this.goalSpherical, {
			minimumRadius: a,
			maximumRadius: o,
			minimumFieldOfView: l,
			maximumFieldOfView: c
		} = this._options, h = this.spherical.theta - n, u = Math.PI - .001, d = n - Vo(t, -u - h, u - h), A = s - e, p = 0 === i ? 0 : ((i > 0 ? o : a) - r) / (Math.log(i > 0 ? c : l) - this.goalLogFov), g = r + i * (isFinite(p) ? p : 2 * (o - a));
		if(this.setOrbit(d, A, g), 0 !== i) {
			const t = this.goalLogFov + i;
			this.setFieldOfView(Math.exp(t))
		}
	}
	jumpToGoal() {
		this.update(0, 1e4)
	}
	update(t, e) {
		if(this.isStationary()) return;
		const {
			maximumPolarAngle: i,
			maximumRadius: n
		} = this._options, s = this.spherical.theta - this.goalSpherical.theta;
		Math.abs(s) > Math.PI && !isFinite(this._options.minimumAzimuthalAngle) && !isFinite(this._options.maximumAzimuthalAngle) && (this.spherical.theta -= 2 * Math.sign(s) * Math.PI), this.spherical.theta = this.thetaDamper.update(this.spherical.theta, this.goalSpherical.theta, e, Math.PI), this.spherical.phi = this.phiDamper.update(this.spherical.phi, this.goalSpherical.phi, e, i), this.spherical.radius = this.radiusDamper.update(this.spherical.radius, this.goalSpherical.radius, e, n), this.logFov = this.fovDamper.update(this.logFov, this.goalLogFov, e, 1), this.moveCamera()
	}
	updateTouchActionStyle() {
		const {
			style: t
		} = this.element;
		if(this._interactionEnabled) {
			const {
				touchAction: e
			} = this._options;
			this._disableZoom && "none" !== e ? t.touchAction = "manipulation" : t.touchAction = e
		} else t.touchAction = ""
	}
	isStationary() {
		return this.goalSpherical.theta === this.spherical.theta && this.goalSpherical.phi === this.spherical.phi && this.goalSpherical.radius === this.spherical.radius && this.goalLogFov === this.logFov
	}
	dispatchChange() {
		this.dispatchEvent({
			type: "change",
			source: this.changeSource
		})
	}
	moveCamera() {
		this.spherical.makeSafe(), this.camera.position.setFromSpherical(this.spherical), this.camera.setRotationFromEuler(new Rt(this.spherical.phi - Math.PI / 2, this.spherical.theta, 0, "YXZ")), this.camera.fov !== Math.exp(this.logFov) && (this.camera.fov = Math.exp(this.logFov), this.camera.updateProjectionMatrix()), this.dispatchChange()
	}
	userAdjustOrbit(t, e, i) {
		this.adjustOrbit(t * this.orbitSensitivity * this.inputSensitivity, e * this.orbitSensitivity * this.inputSensitivity, i * this.inputSensitivity), this.dispatchChange()
	}
	wrapAngle(t) {
		const e = (t + Math.PI) / (2 * Math.PI);
		return 2 * (e - Math.floor(e)) * Math.PI - Math.PI
	}
	pixelLengthToSphericalAngle(t) {
		return 2 * Math.PI * t / this.element.clientHeight
	}
	twoTouchDistance(t, e) {
		const {
			clientX: i,
			clientY: n
		} = t, {
			clientX: s,
			clientY: r
		} = e, a = s - i, o = r - n;
		return Math.sqrt(a * a + o * o)
	}
	handleSinglePointerMove(t, e) {
		const i = this.pixelLengthToSphericalAngle(t),
			n = this.pixelLengthToSphericalAngle(e);
		!1 === this.isUserPointing && (this.isUserPointing = !0, this.dispatchEvent({
			type: "pointer-change-start"
		})), this.userAdjustOrbit(i, n, 0)
	}
	initializePan() {
		const {
			theta: t,
			phi: e
		} = this.spherical, i = t - this.scene.yaw;
		this.panPerPixel = .018 / this.scene.height, this.panProjection.set(-Math.cos(i), -Math.cos(e) * Math.sin(i), 0, 0, Math.sin(e), 0, Math.sin(i), -Math.cos(e) * Math.cos(i), 0)
	}
	movePan(t, e) {
		const {
			scene: i
		} = this, n = Lp.set(t, e, 0).multiplyScalar(this.inputSensitivity), s = this.spherical.radius * Math.exp(this.logFov) * this.panPerPixel;
		n.multiplyScalar(s);
		const r = i.getTarget();
		r.add(n.applyMatrix3(this.panProjection)), i.boundingSphere.clampPoint(r, r), i.setTarget(r.x, r.y, r.z), this.dispatchChange()
	}
	recenter(t) {
		if(performance.now() > this.startTime + 300 || Math.abs(t.clientX - this.startPointerPosition.clientX) > 2 || Math.abs(t.clientY - this.startPointerPosition.clientY) > 2) return;
		const {
			scene: e
		} = this, i = e.positionAndNormalFromPoint(e.getNDC(t.clientX, t.clientY));
		if(null == i) {
			const {
				cameraTarget: t
			} = e.element;
			e.element.cameraTarget = "", e.element.cameraTarget = t, this.userAdjustOrbit(0, 0, 1)
		} else e.target.worldToLocal(i.position), e.setTarget(i.position.x, i.position.y, i.position.z)
	}
	resetRadius() {
		const {
			scene: t
		} = this, e = t.positionAndNormalFromPoint(Dp.set(0, 0));
		if(null == e) return;
		t.target.worldToLocal(e.position);
		const i = t.getTarget(),
			{
				theta: n,
				phi: s
			} = this.spherical,
			r = n - t.yaw,
			a = Lp.set(Math.sin(s) * Math.sin(r), Math.cos(s), Math.sin(s) * Math.cos(r)),
			o = a.dot(e.position.sub(i));
		i.add(a.multiplyScalar(o)), t.setTarget(i.x, i.y, i.z), this.setOrbit(void 0, void 0, this.goalSpherical.radius - o)
	}
	onTouchChange(t) {
		if(1 === this.pointers.length) this.touchMode = this.touchModeRotate;
		else {
			if(this._disableZoom) return this.touchMode = null, void this.element.removeEventListener("touchmove", this.disableScroll);
			this.touchMode = this.touchDecided && null === this.touchMode ? null : this.touchModeZoom, this.touchDecided = !0, this.element.addEventListener("touchmove", this.disableScroll, {
				passive: !1
			}), this.lastSeparation = this.twoTouchDistance(this.pointers[0], this.pointers[1]), this.enablePan && null != this.touchMode && (this.initializePan(), t.altKey || (this.scene.element[og].style.opacity = 1))
		}
	}
	onMouseDown(t) {
		this.panPerPixel = 0, this.enablePan && (2 === t.button || t.ctrlKey || t.metaKey || t.shiftKey) && (this.initializePan(), this.scene.element[og].style.opacity = 1), this.element.style.cursor = "grabbing"
	}
	orbitZoomKeyCodeHandler(t) {
		let e = !0;
		switch(t.key) {
			case "PageUp":
				this.userAdjustOrbit(0, 0, .04);
				break;
			case "PageDown":
				this.userAdjustOrbit(0, 0, -.04);
				break;
			case "ArrowUp":
				this.userAdjustOrbit(0, -Pp, 0);
				break;
			case "ArrowDown":
				this.userAdjustOrbit(0, Pp, 0);
				break;
			case "ArrowLeft":
				this.userAdjustOrbit(-Pp, 0, 0);
				break;
			case "ArrowRight":
				this.userAdjustOrbit(Pp, 0, 0);
				break;
			default:
				e = !1
		}
		return e
	}
	panKeyCodeHandler(t) {
		this.initializePan();
		let e = !0;
		switch(t.key) {
			case "ArrowUp":
				this.movePan(0, -10);
				break;
			case "ArrowDown":
				this.movePan(0, 10);
				break;
			case "ArrowLeft":
				this.movePan(-10, 0);
				break;
			case "ArrowRight":
				this.movePan(10, 0);
				break;
			default:
				e = !1
		}
		return e
	}
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Op = t => t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1,
	Gp = (t, e, i = Op) => n => t + (e - t) * i(n),
	Hp = t => {
		const e = [],
			i = [];
		let n = t.initialValue;
		for(let s = 0; s < t.keyframes.length; ++s) {
			const r = t.keyframes[s],
				{
					value: a,
					frames: o
				} = r,
				l = r.ease || Op,
				c = Gp(n, a, l);
			e.push(c), i.push(o), n = a
		}
		return((t, e) => {
			const i = e.map((n = 0, t => n += t));
			var n;
			return e => {
				e = Vo(e, 0, 1), e *= i[i.length - 1];
				const n = i.findIndex((t => t >= e)),
					s = n < 1 ? 0 : i[n - 1],
					r = i[n];
				return t[n]((e - s) / (r - s))
			}
		})(e, i)
	};
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var zp = function(t, e, i, n) {
	for(var s, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n, o = t.length - 1; o >= 0; o--)(s = t[o]) && (a = (r < 3 ? s(a) : r > 3 ? s(e, i, a) : s(e, i)) || a);
	return r > 3 && a && Object.defineProperty(e, i, a), a
};
const Vp = Hp({
		initialValue: 0,
		keyframes: [{
			frames: 5,
			value: -1
		}, {
			frames: 1,
			value: -1
		}, {
			frames: 8,
			value: 1
		}, {
			frames: 1,
			value: 1
		}, {
			frames: 5,
			value: 0
		}, {
			frames: 18,
			value: 0
		}]
	}),
	Wp = Hp({
		initialValue: 0,
		keyframes: [{
			frames: 1,
			value: 1
		}, {
			frames: 5,
			value: 1
		}, {
			frames: 1,
			value: 0
		}, {
			frames: 6,
			value: 0
		}]
	}),
	qp = ["front", "right", "back", "left"],
	jp = ["upper-", "", "lower-"],
	Yp = "auto",
	Jp = "none",
	Xp = () => ({
		basis: [lh($c(30, "deg"))],
		keywords: {
			auto: [null]
		}
	}),
	Kp = () => ({
		basis: [lh($c(12, "deg"))],
		keywords: {
			auto: [null]
		}
	}),
	$p = (() => {
		const t = Zc("0deg 75deg 105%")[0].terms,
			e = hh(t[0]),
			i = hh(t[1]);
		return t => {
			const n = t[ed].idealCameraDistance();
			return {
				basis: [e, i, $c(n, "m")],
				keywords: {
					auto: [null, null, $c(105, "%")]
				}
			}
		}
	})(),
	Zp = t => {
		const e = 2.2 * t[ed].boundingSphere.radius;
		return {
			basis: [$c(-1 / 0, "rad"), $c(Math.PI / 8, "rad"), $c(e, "m")],
			keywords: {
				auto: [null, null, null]
			}
		}
	},
	tg = t => {
		const e = $p(t),
			i = new pp([], e).evaluate()[2];
		return {
			basis: [$c(1 / 0, "rad"), $c(Math.PI - Math.PI / 8, "rad"), $c(i, "m")],
			keywords: {
				auto: [null, null, null]
			}
		}
	},
	eg = t => {
		const e = t[ed].boundingBox.getCenter(new V);
		return {
			basis: [$c(e.x, "m"), $c(e.y, "m"), $c(e.z, "m")],
			keywords: {
				auto: [null, null, null]
			}
		}
	},
	ig = Math.PI / 2,
	ng = Math.PI / 3,
	sg = ig / 2,
	rg = 2 * Math.PI,
	ag = Symbol("controls"),
	og = Symbol("panElement"),
	lg = Symbol("promptElement"),
	cg = Symbol("promptAnimatedContainer"),
	hg = Symbol("fingerAnimatedContainers"),
	ug = Symbol("deferInteractionPrompt"),
	dg = Symbol("updateAria"),
	Ag = Symbol("updateCameraForRadius"),
	pg = Symbol("onChange"),
	gg = Symbol("onPointerChange"),
	mg = Symbol("waitingToPromptUser"),
	fg = Symbol("userHasInteracted"),
	vg = Symbol("promptElementVisibleTime"),
	yg = Symbol("lastPromptOffset"),
	xg = Symbol("lastSpherical"),
	_g = Symbol("jumpCamera"),
	Eg = Symbol("initialized"),
	wg = Symbol("maintainThetaPhi"),
	bg = Symbol("syncCameraOrbit"),
	Ig = Symbol("syncFieldOfView"),
	Cg = Symbol("syncCameraTarget"),
	Sg = Symbol("syncMinCameraOrbit"),
	Mg = Symbol("syncMaxCameraOrbit"),
	Bg = Symbol("syncMinFieldOfView"),
	Tg = Symbol("syncMaxFieldOfView");
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Rg = function(t, e, i, n) {
	for(var s, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n, o = t.length - 1; o >= 0; o--)(s = t[o]) && (a = (r < 3 ? s(a) : r > 3 ? s(e, i, a) : s(e, i)) || a);
	return r > 3 && a && Object.defineProperty(e, i, a), a
};
const Dg = "auto",
	Lg = "auto",
	Qg = "eager",
	Pg = Symbol("defaultProgressBarElement"),
	Fg = Symbol("posterContainerElement"),
	Ug = Symbol("defaultPosterElement"),
	Ng = Symbol("shouldDismissPoster"),
	kg = Symbol("hidePoster"),
	Og = Symbol("modelIsRevealed"),
	Gg = Symbol("updateProgressBar"),
	Hg = Symbol("ariaLabelCallToAction"),
	zg = Symbol("onProgress");
class Vg {
	constructor() {
		this.pluginCallbacks = [], this.register((function(t) {
			return new ym(t)
		})), this.register((function(t) {
			return new xm(t)
		})), this.register((function(t) {
			return new _m(t)
		})), this.register((function(t) {
			return new bm(t)
		})), this.register((function(t) {
			return new Im(t)
		})), this.register((function(t) {
			return new Em(t)
		})), this.register((function(t) {
			return new wm(t)
		}))
	}
	register(t) {
		return -1 === this.pluginCallbacks.indexOf(t) && this.pluginCallbacks.push(t), this
	}
	unregister(t) {
		return -1 !== this.pluginCallbacks.indexOf(t) && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t), 1), this
	}
	parse(t, e, i, n) {
		const s = new vm,
			r = [];
		for(let t = 0, e = this.pluginCallbacks.length; t < e; t++) r.push(this.pluginCallbacks[t](s));
		s.setPlugins(r), s.write(t, e, n).catch(i)
	}
	parseAsync(t, e) {
		const i = this;
		return new Promise((function(n, s) {
			i.parse(t, n, s, e)
		}))
	}
}
const Wg = 0,
	qg = 1,
	jg = 2,
	Yg = 3,
	Jg = 4,
	Xg = 5121,
	Kg = 5123,
	$g = 5126,
	Zg = 5125,
	tm = 34962,
	em = 34963,
	im = 9728,
	nm = 9729,
	sm = 9984,
	rm = 9985,
	am = 9986,
	om = 9987,
	lm = 33071,
	cm = 33648,
	hm = 10497,
	um = {};
um[1003] = im, um[1004] = sm, um[1005] = am, um[1006] = nm, um[1007] = rm, um[1008] = om, um[1001] = lm, um[1e3] = hm, um[1002] = cm;
const dm = {
	scale: "scale",
	position: "translation",
	quaternion: "rotation",
	morphTargetInfluences: "weights"
};

function Am(t, e) {
	return t.length === e.length && t.every((function(t, i) {
		return t === e[i]
	}))
}

function pm(t) {
	return 4 * Math.ceil(t / 4)
}

function gm(t, e = 0) {
	const i = pm(t.byteLength);
	if(i !== t.byteLength) {
		const n = new Uint8Array(i);
		if(n.set(new Uint8Array(t)), 0 !== e)
			for(let s = t.byteLength; s < i; s++) n[s] = e;
		return n.buffer
	}
	return t
}

function mm() {
	return "undefined" == typeof document && "undefined" != typeof OffscreenCanvas ? new OffscreenCanvas(1, 1) : document.createElement("canvas")
}

function fm(t, e) {
	if(void 0 !== t.toBlob) return new Promise((i => t.toBlob(i, e)));
	let i;
	return "image/jpeg" === e ? i = .92 : "image/webp" === e && (i = .8), t.convertToBlob({
		type: e,
		quality: i
	})
}
class vm {
	constructor() {
		this.plugins = [], this.options = {}, this.pending = [], this.buffers = [], this.byteOffset = 0, this.buffers = [], this.nodeMap = new Map, this.skins = [], this.extensionsUsed = {}, this.uids = new Map, this.uid = 0, this.json = {
			asset: {
				version: "2.0",
				generator: "THREE.GLTFExporter"
			}
		}, this.cache = {
			meshes: new Map,
			attributes: new Map,
			attributesNormalized: new Map,
			materials: new Map,
			textures: new Map,
			images: new Map
		}
	}
	setPlugins(t) {
		this.plugins = t
	}
	async write(t, e, i) {
		this.options = Object.assign({}, {
			binary: !1,
			trs: !1,
			onlyVisible: !0,
			truncateDrawRange: !0,
			maxTextureSize: 1 / 0,
			animations: [],
			includeCustomExtensions: !1
		}, i), this.options.animations.length > 0 && (this.options.trs = !0), this.processInput(t), await Promise.all(this.pending);
		const n = this,
			s = n.buffers,
			r = n.json;
		i = n.options;
		const a = n.extensionsUsed,
			o = new Blob(s, {
				type: "application/octet-stream"
			}),
			l = Object.keys(a);
		if(l.length > 0 && (r.extensionsUsed = l), r.buffers && r.buffers.length > 0 && (r.buffers[0].byteLength = o.size), !0 === i.binary) {
			const t = new FileReader;
			t.readAsArrayBuffer(o), t.onloadend = function() {
				const i = gm(t.result),
					n = new DataView(new ArrayBuffer(8));
				n.setUint32(0, i.byteLength, !0), n.setUint32(4, 5130562, !0);
				const s = gm((a = JSON.stringify(r), (new TextEncoder).encode(a).buffer), 32);
				var a;
				const o = new DataView(new ArrayBuffer(8));
				o.setUint32(0, s.byteLength, !0), o.setUint32(4, 1313821514, !0);
				const l = new ArrayBuffer(12),
					c = new DataView(l);
				c.setUint32(0, 1179937895, !0), c.setUint32(4, 2, !0);
				const h = 12 + o.byteLength + s.byteLength + n.byteLength + i.byteLength;
				c.setUint32(8, h, !0);
				const u = new Blob([l, o, s, n, i], {
						type: "application/octet-stream"
					}),
					d = new FileReader;
				d.readAsArrayBuffer(u), d.onloadend = function() {
					e(d.result)
				}
			}
		} else if(r.buffers && r.buffers.length > 0) {
			const t = new FileReader;
			t.readAsDataURL(o), t.onloadend = function() {
				const i = t.result;
				r.buffers[0].uri = i, e(r)
			}
		} else e(r)
	}
	serializeUserData(t, e) {
		if(0 === Object.keys(t.userData).length) return;
		const i = this.options,
			n = this.extensionsUsed;
		try {
			const s = JSON.parse(JSON.stringify(t.userData));
			if(i.includeCustomExtensions && s.gltfExtensions) {
				void 0 === e.extensions && (e.extensions = {});
				for(const t in s.gltfExtensions) e.extensions[t] = s.gltfExtensions[t], n[t] = !0;
				delete s.gltfExtensions
			}
			Object.keys(s).length > 0 && (e.extras = s)
		} catch(e) {
			console.warn("THREE.GLTFExporter: userData of '" + t.name + "' won't be serialized because of JSON.stringify error - " + e.message)
		}
	}
	getUID(t, e = !1) {
		if(!1 === this.uids.has(t)) {
			const e = new Map;
			e.set(!0, this.uid++), e.set(!1, this.uid++), this.uids.set(t, e)
		}
		return this.uids.get(t).get(e)
	}
	isNormalizedNormalAttribute(t) {
		if(this.cache.attributesNormalized.has(t)) return !1;
		const e = new V;
		for(let i = 0, n = t.count; i < n; i++)
			if(Math.abs(e.fromBufferAttribute(t, i).length() - 1) > 5e-4) return !1;
		return !0
	}
	createNormalizedNormalAttribute(t) {
		const e = this.cache;
		if(e.attributesNormalized.has(t)) return e.attributesNormalized.get(t);
		const i = t.clone(),
			n = new V;
		for(let t = 0, e = i.count; t < e; t++) n.fromBufferAttribute(i, t), 0 === n.x && 0 === n.y && 0 === n.z ? n.setX(1) : n.normalize(), i.setXYZ(t, n.x, n.y, n.z);
		return e.attributesNormalized.set(t, i), i
	}
	applyTextureTransform(t, e) {
		let i = !1;
		const n = {};
		0 === e.offset.x && 0 === e.offset.y || (n.offset = e.offset.toArray(), i = !0), 0 !== e.rotation && (n.rotation = e.rotation, i = !0), 1 === e.repeat.x && 1 === e.repeat.y || (n.scale = e.repeat.toArray(), i = !0), i && (t.extensions = t.extensions || {}, t.extensions.KHR_texture_transform = n, this.extensionsUsed.KHR_texture_transform = !0)
	}
	buildMetalRoughTexture(t, e) {
		if(t === e) return t;

		function i(t) {
			return 3001 === t.encoding ? function(t) {
				return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
			} : function(t) {
				return t
			}
		}
		console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures.");
		const n = t ? .image,
			s = e ? .image,
			r = Math.max(n ? .width || 0, s ? .width || 0),
			a = Math.max(n ? .height || 0, s ? .height || 0),
			o = mm();
		o.width = r, o.height = a;
		const l = o.getContext("2d");
		l.fillStyle = "#00ffff", l.fillRect(0, 0, r, a);
		const c = l.getImageData(0, 0, r, a);
		if(n) {
			l.drawImage(n, 0, 0, r, a);
			const e = i(t),
				s = l.getImageData(0, 0, r, a).data;
			for(let t = 2; t < s.length; t += 4) c.data[t] = 256 * e(s[t] / 256)
		}
		if(s) {
			l.drawImage(s, 0, 0, r, a);
			const t = i(e),
				n = l.getImageData(0, 0, r, a).data;
			for(let e = 1; e < n.length; e += 4) c.data[e] = 256 * t(n[e] / 256)
		}
		l.putImageData(c, 0, 0);
		const h = (t || e).clone();
		return h.source = new P(o), h.encoding = 3e3, h
	}
	processBuffer(t) {
		const e = this.json,
			i = this.buffers;
		return e.buffers || (e.buffers = [{
			byteLength: 0
		}]), i.push(t), 0
	}
	processBufferView(t, e, i, n, s) {
		const r = this.json;
		let a;
		r.bufferViews || (r.bufferViews = []), a = e === Xg ? 1 : e === Kg ? 2 : 4;
		const o = pm(n * t.itemSize * a),
			l = new DataView(new ArrayBuffer(o));
		let c = 0;
		for(let s = i; s < i + n; s++)
			for(let i = 0; i < t.itemSize; i++) {
				let n;
				t.itemSize > 4 ? n = t.array[s * t.itemSize + i] : 0 === i ? n = t.getX(s) : 1 === i ? n = t.getY(s) : 2 === i ? n = t.getZ(s) : 3 === i && (n = t.getW(s)), e === $g ? l.setFloat32(c, n, !0) : e === Zg ? l.setUint32(c, n, !0) : e === Kg ? l.setUint16(c, n, !0) : e === Xg && l.setUint8(c, n), c += a
			}
		const h = {
			buffer: this.processBuffer(l.buffer),
			byteOffset: this.byteOffset,
			byteLength: o
		};
		void 0 !== s && (h.target = s), s === tm && (h.byteStride = t.itemSize * a), this.byteOffset += o, r.bufferViews.push(h);
		return {
			id: r.bufferViews.length - 1,
			byteLength: 0
		}
	}
	processBufferViewImage(t) {
		const e = this,
			i = e.json;
		return i.bufferViews || (i.bufferViews = []), new Promise((function(n) {
			const s = new FileReader;
			s.readAsArrayBuffer(t), s.onloadend = function() {
				const t = gm(s.result),
					r = {
						buffer: e.processBuffer(t),
						byteOffset: e.byteOffset,
						byteLength: t.byteLength
					};
				e.byteOffset += t.byteLength, n(i.bufferViews.push(r) - 1)
			}
		}))
	}
	processAccessor(t, e, i, n) {
		const s = this.options,
			r = this.json;
		let a;
		if(t.array.constructor === Float32Array) a = $g;
		else if(t.array.constructor === Uint32Array) a = Zg;
		else if(t.array.constructor === Uint16Array) a = Kg;
		else {
			if(t.array.constructor !== Uint8Array) throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type.");
			a = Xg
		}
		if(void 0 === i && (i = 0), void 0 === n && (n = t.count), s.truncateDrawRange && void 0 !== e && null === e.index) {
			const s = i + n,
				r = e.drawRange.count === 1 / 0 ? t.count : e.drawRange.start + e.drawRange.count;
			i = Math.max(i, e.drawRange.start), (n = Math.min(s, r) - i) < 0 && (n = 0)
		}
		if(0 === n) return null;
		const o = function(t, e, i) {
			const n = {
				min: new Array(t.itemSize).fill(Number.POSITIVE_INFINITY),
				max: new Array(t.itemSize).fill(Number.NEGATIVE_INFINITY)
			};
			for(let s = e; s < e + i; s++)
				for(let e = 0; e < t.itemSize; e++) {
					let i;
					t.itemSize > 4 ? i = t.array[s * t.itemSize + e] : 0 === e ? i = t.getX(s) : 1 === e ? i = t.getY(s) : 2 === e ? i = t.getZ(s) : 3 === e && (i = t.getW(s)), n.min[e] = Math.min(n.min[e], i), n.max[e] = Math.max(n.max[e], i)
				}
			return n
		}(t, i, n);
		let l;
		void 0 !== e && (l = t === e.index ? em : tm);
		const c = this.processBufferView(t, a, i, n, l),
			h = {
				bufferView: c.id,
				byteOffset: c.byteOffset,
				componentType: a,
				count: n,
				max: o.max,
				min: o.min,
				type: {
					1: "SCALAR",
					2: "VEC2",
					3: "VEC3",
					4: "VEC4",
					16: "MAT4"
				}[t.itemSize]
			};
		return !0 === t.normalized && (h.normalized = !0), r.accessors || (r.accessors = []), r.accessors.push(h) - 1
	}
	processImage(t, e, i, n = "image/png") {
		const s = this,
			r = s.cache,
			a = s.json,
			o = s.options,
			l = s.pending;
		r.images.has(t) || r.images.set(t, {});
		const c = r.images.get(t),
			h = n + ":flipY/" + i.toString();
		if(void 0 !== c[h]) return c[h];
		a.images || (a.images = []);
		const u = {
				mimeType: n
			},
			d = mm();
		d.width = Math.min(t.width, o.maxTextureSize), d.height = Math.min(t.height, o.maxTextureSize);
		const A = d.getContext("2d");
		if(!0 === i && (A.translate(0, d.height), A.scale(1, -1)), void 0 !== t.data) {
			1023 !== e && console.error("GLTFExporter: Only RGBAFormat is supported."), (t.width > o.maxTextureSize || t.height > o.maxTextureSize) && console.warn("GLTFExporter: Image size is bigger than maxTextureSize", t);
			const i = new Uint8ClampedArray(t.height * t.width * 4);
			for(let e = 0; e < i.length; e += 4) i[e + 0] = t.data[e + 0], i[e + 1] = t.data[e + 1], i[e + 2] = t.data[e + 2], i[e + 3] = t.data[e + 3];
			A.putImageData(new ImageData(i, t.width, t.height), 0, 0)
		} else A.drawImage(t, 0, 0, d.width, d.height);
		!0 === o.binary ? l.push(fm(d, n).then((t => s.processBufferViewImage(t))).then((t => {
			u.bufferView = t
		}))) : void 0 !== d.toDataURL ? u.uri = d.toDataURL(n) : l.push(fm(d, n).then((t => (new FileReader).readAsDataURL(t))).then((t => {
			u.uri = t
		})));
		const p = a.images.push(u) - 1;
		return c[h] = p, p
	}
	processSampler(t) {
		const e = this.json;
		e.samplers || (e.samplers = []);
		const i = {
			magFilter: um[t.magFilter],
			minFilter: um[t.minFilter],
			wrapS: um[t.wrapS],
			wrapT: um[t.wrapT]
		};
		return e.samplers.push(i) - 1
	}
	processTexture(t) {
		const e = this.cache,
			i = this.json;
		if(e.textures.has(t)) return e.textures.get(t);
		i.textures || (i.textures = []);
		let n = t.userData.mimeType;
		"image/webp" === n && (n = "image/png");
		const s = {
			sampler: this.processSampler(t),
			source: this.processImage(t.image, t.format, t.flipY, n)
		};
		t.name && (s.name = t.name), this._invokeAll((function(e) {
			e.writeTexture && e.writeTexture(t, s)
		}));
		const r = i.textures.push(s) - 1;
		return e.textures.set(t, r), r
	}
	processMaterial(t) {
		const e = this.cache,
			i = this.json;
		if(e.materials.has(t)) return e.materials.get(t);
		if(t.isShaderMaterial) return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."), null;
		i.materials || (i.materials = []);
		const n = {
			pbrMetallicRoughness: {}
		};
		!0 !== t.isMeshStandardMaterial && !0 !== t.isMeshBasicMaterial && console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");
		const s = t.color.toArray().concat([t.opacity]);
		if(Am(s, [1, 1, 1, 1]) || (n.pbrMetallicRoughness.baseColorFactor = s), t.isMeshStandardMaterial ? (n.pbrMetallicRoughness.metallicFactor = t.metalness, n.pbrMetallicRoughness.roughnessFactor = t.roughness) : (n.pbrMetallicRoughness.metallicFactor = .5, n.pbrMetallicRoughness.roughnessFactor = .5), t.metalnessMap || t.roughnessMap) {
			const e = this.buildMetalRoughTexture(t.metalnessMap, t.roughnessMap),
				i = {
					index: this.processTexture(e)
				};
			this.applyTextureTransform(i, e), n.pbrMetallicRoughness.metallicRoughnessTexture = i
		}
		if(t.map) {
			const e = {
				index: this.processTexture(t.map)
			};
			this.applyTextureTransform(e, t.map), n.pbrMetallicRoughness.baseColorTexture = e
		}
		if(t.emissive) {
			const e = t.emissive.clone().multiplyScalar(t.emissiveIntensity),
				i = Math.max(e.r, e.g, e.b);
			if(i > 1 && (e.multiplyScalar(1 / i), console.warn("THREE.GLTFExporter: Some emissive components exceed 1; emissive has been limited")), i > 0 && (n.emissiveFactor = e.toArray()), t.emissiveMap) {
				const e = {
					index: this.processTexture(t.emissiveMap)
				};
				this.applyTextureTransform(e, t.emissiveMap), n.emissiveTexture = e
			}
		}
		if(t.normalMap) {
			const e = {
				index: this.processTexture(t.normalMap)
			};
			t.normalScale && 1 !== t.normalScale.x && (e.scale = t.normalScale.x), this.applyTextureTransform(e, t.normalMap), n.normalTexture = e
		}
		if(t.aoMap) {
			const e = {
				index: this.processTexture(t.aoMap),
				texCoord: 1
			};
			1 !== t.aoMapIntensity && (e.strength = t.aoMapIntensity), this.applyTextureTransform(e, t.aoMap), n.occlusionTexture = e
		}
		t.transparent ? n.alphaMode = "BLEND" : t.alphaTest > 0 && (n.alphaMode = "MASK", n.alphaCutoff = t.alphaTest), 2 === t.side && (n.doubleSided = !0), "" !== t.name && (n.name = t.name), this.serializeUserData(t, n), this._invokeAll((function(e) {
			e.writeMaterial && e.writeMaterial(t, n)
		}));
		const r = i.materials.push(n) - 1;
		return e.materials.set(t, r), r
	}
	processMesh(t) {
		const e = this.cache,
			i = this.json,
			n = [t.geometry.uuid];
		if(Array.isArray(t.material))
			for(let e = 0, i = t.material.length; e < i; e++) n.push(t.material[e].uuid);
		else n.push(t.material.uuid);
		const s = n.join(":");
		if(e.meshes.has(s)) return e.meshes.get(s);
		const r = t.geometry;
		let a;
		a = t.isLineSegments ? qg : t.isLineLoop ? jg : t.isLine ? Yg : t.isPoints ? Wg : t.material.wireframe ? qg : Jg;
		const o = {},
			l = {},
			c = [],
			h = [],
			u = {
				uv: "TEXCOORD_0",
				uv2: "TEXCOORD_1",
				color: "COLOR_0",
				skinWeight: "WEIGHTS_0",
				skinIndex: "JOINTS_0"
			},
			d = r.getAttribute("normal");
		void 0 === d || this.isNormalizedNormalAttribute(d) || (console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."), r.setAttribute("normal", this.createNormalizedNormalAttribute(d)));
		let A = null;
		for(let t in r.attributes) {
			if("morph" === t.slice(0, 5)) continue;
			const i = r.attributes[t];
			t = u[t] || t.toUpperCase();
			if(/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(t) || (t = "_" + t), e.attributes.has(this.getUID(i))) {
				l[t] = e.attributes.get(this.getUID(i));
				continue
			}
			A = null;
			const n = i.array;
			"JOINTS_0" !== t || n instanceof Uint16Array || n instanceof Uint8Array || (console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'), A = new ce(new Uint16Array(n), i.itemSize, i.normalized));
			const s = this.processAccessor(A || i, r);
			null !== s && (l[t] = s, e.attributes.set(this.getUID(i), s))
		}
		if(void 0 !== d && r.setAttribute("normal", d), 0 === Object.keys(l).length) return null;
		if(void 0 !== t.morphTargetInfluences && t.morphTargetInfluences.length > 0) {
			const i = [],
				n = [],
				s = {};
			if(void 0 !== t.morphTargetDictionary)
				for(const e in t.morphTargetDictionary) s[t.morphTargetDictionary[e]] = e;
			for(let a = 0; a < t.morphTargetInfluences.length; ++a) {
				const o = {};
				let l = !1;
				for(const t in r.morphAttributes) {
					if("position" !== t && "normal" !== t) {
						l || (console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."), l = !0);
						continue
					}
					const i = r.morphAttributes[t][a],
						n = t.toUpperCase(),
						s = r.attributes[t];
					if(e.attributes.has(this.getUID(i, !0))) {
						o[n] = e.attributes.get(this.getUID(i, !0));
						continue
					}
					const c = i.clone();
					if(!r.morphTargetsRelative)
						for(let t = 0, e = i.count; t < e; t++) c.setXYZ(t, i.getX(t) - s.getX(t), i.getY(t) - s.getY(t), i.getZ(t) - s.getZ(t));
					o[n] = this.processAccessor(c, r), e.attributes.set(this.getUID(s, !0), o[n])
				}
				h.push(o), i.push(t.morphTargetInfluences[a]), void 0 !== t.morphTargetDictionary && n.push(s[a])
			}
			o.weights = i, n.length > 0 && (o.extras = {}, o.extras.targetNames = n)
		}
		const p = Array.isArray(t.material);
		if(p && 0 === r.groups.length) return null;
		const g = p ? t.material : [t.material],
			m = p ? r.groups : [{
				materialIndex: 0,
				start: void 0,
				count: void 0
			}];
		for(let t = 0, i = m.length; t < i; t++) {
			const i = {
				mode: a,
				attributes: l
			};
			if(this.serializeUserData(r, i), h.length > 0 && (i.targets = h), null !== r.index) {
				let n = this.getUID(r.index);
				void 0 === m[t].start && void 0 === m[t].count || (n += ":" + m[t].start + ":" + m[t].count), e.attributes.has(n) ? i.indices = e.attributes.get(n) : (i.indices = this.processAccessor(r.index, r, m[t].start, m[t].count), e.attributes.set(n, i.indices)), null === i.indices && delete i.indices
			}
			const n = this.processMaterial(g[m[t].materialIndex]);
			null !== n && (i.material = n), c.push(i)
		}
		o.primitives = c, i.meshes || (i.meshes = []), this._invokeAll((function(e) {
			e.writeMesh && e.writeMesh(t, o)
		}));
		const f = i.meshes.push(o) - 1;
		return e.meshes.set(s, f), f
	}
	processCamera(t) {
		const e = this.json;
		e.cameras || (e.cameras = []);
		const i = t.isOrthographicCamera,
			n = {
				type: i ? "orthographic" : "perspective"
			};
		return i ? n.orthographic = {
			xmag: 2 * t.right,
			ymag: 2 * t.top,
			zfar: t.far <= 0 ? .001 : t.far,
			znear: t.near < 0 ? 0 : t.near
		} : n.perspective = {
			aspectRatio: t.aspect,
			yfov: f.degToRad(t.fov),
			zfar: t.far <= 0 ? .001 : t.far,
			znear: t.near < 0 ? 0 : t.near
		}, "" !== t.name && (n.name = t.type), e.cameras.push(n) - 1
	}
	processAnimation(t, e) {
		const i = this.json,
			n = this.nodeMap;
		i.animations || (i.animations = []);
		const s = (t = Vg.Utils.mergeMorphTargetTracks(t.clone(), e)).tracks,
			r = [],
			a = [];
		for(let t = 0; t < s.length; ++t) {
			const i = s[t],
				o = ma.parseTrackName(i.name);
			let l = ma.findNode(e, o.nodeName);
			const c = dm[o.propertyName];
			if("bones" === o.objectName && (l = !0 === l.isSkinnedMesh ? l.skeleton.getBoneByName(o.objectIndex) : void 0), !l || !c) return console.warn('THREE.GLTFExporter: Could not export animation track "%s".', i.name), null;
			const h = 1;
			let u, d = i.values.length / i.times.length;
			c === dm.morphTargetInfluences && (d /= l.morphTargetInfluences.length), !0 === i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline ? (u = "CUBICSPLINE", d /= 3) : u = 2300 === i.getInterpolation() ? "STEP" : "LINEAR", a.push({
				input: this.processAccessor(new ce(i.times, h)),
				output: this.processAccessor(new ce(i.values, d)),
				interpolation: u
			}), r.push({
				sampler: a.length - 1,
				target: {
					node: n.get(l),
					path: c
				}
			})
		}
		return i.animations.push({
			name: t.name || "clip_" + i.animations.length,
			samplers: a,
			channels: r
		}), i.animations.length - 1
	}
	processSkin(t) {
		const e = this.json,
			i = this.nodeMap,
			n = e.nodes[i.get(t)],
			s = t.skeleton;
		if(void 0 === s) return null;
		const r = t.skeleton.bones[0];
		if(void 0 === r) return null;
		const a = [],
			o = new Float32Array(16 * s.bones.length),
			l = new _t;
		for(let e = 0; e < s.bones.length; ++e) a.push(i.get(s.bones[e])), l.copy(s.boneInverses[e]), l.multiply(t.bindMatrix).toArray(o, 16 * e);
		void 0 === e.skins && (e.skins = []), e.skins.push({
			inverseBindMatrices: this.processAccessor(new ce(o, 16)),
			joints: a,
			skeleton: i.get(r)
		});
		return n.skin = e.skins.length - 1
	}
	processNode(t) {
		const e = this.json,
			i = this.options,
			n = this.nodeMap;
		e.nodes || (e.nodes = []);
		const s = {};
		if(i.trs) {
			const e = t.quaternion.toArray(),
				i = t.position.toArray(),
				n = t.scale.toArray();
			Am(e, [0, 0, 0, 1]) || (s.rotation = e), Am(i, [0, 0, 0]) || (s.translation = i), Am(n, [1, 1, 1]) || (s.scale = n)
		} else t.matrixAutoUpdate && t.updateMatrix(), !1 === Am(t.matrix.elements, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]) && (s.matrix = t.matrix.elements);
		if("" !== t.name && (s.name = String(t.name)), this.serializeUserData(t, s), t.isMesh || t.isLine || t.isPoints) {
			const e = this.processMesh(t);
			null !== e && (s.mesh = e)
		} else t.isCamera && (s.camera = this.processCamera(t));
		if(t.isSkinnedMesh && this.skins.push(t), t.children.length > 0) {
			const e = [];
			for(let n = 0, s = t.children.length; n < s; n++) {
				const s = t.children[n];
				if(s.visible || !1 === i.onlyVisible) {
					const t = this.processNode(s);
					null !== t && e.push(t)
				}
			}
			e.length > 0 && (s.children = e)
		}
		this._invokeAll((function(e) {
			e.writeNode && e.writeNode(t, s)
		}));
		const r = e.nodes.push(s) - 1;
		return n.set(t, r), r
	}
	processScene(t) {
		const e = this.json,
			i = this.options;
		e.scenes || (e.scenes = [], e.scene = 0);
		const n = {};
		"" !== t.name && (n.name = t.name), e.scenes.push(n);
		const s = [];
		for(let e = 0, n = t.children.length; e < n; e++) {
			const n = t.children[e];
			if(n.visible || !1 === i.onlyVisible) {
				const t = this.processNode(n);
				null !== t && s.push(t)
			}
		}
		s.length > 0 && (n.nodes = s), this.serializeUserData(t, n)
	}
	processObjects(t) {
		const e = new Ps;
		e.name = "AuxScene";
		for(let i = 0; i < t.length; i++) e.children.push(t[i]);
		this.processScene(e)
	}
	processInput(t) {
		const e = this.options;
		t = t instanceof Array ? t : [t], this._invokeAll((function(e) {
			e.beforeParse && e.beforeParse(t)
		}));
		const i = [];
		for(let e = 0; e < t.length; e++) t[e] instanceof Ps ? this.processScene(t[e]) : i.push(t[e]);
		i.length > 0 && this.processObjects(i);
		for(let t = 0; t < this.skins.length; ++t) this.processSkin(this.skins[t]);
		for(let i = 0; i < e.animations.length; ++i) this.processAnimation(e.animations[i], t[0]);
		this._invokeAll((function(e) {
			e.afterParse && e.afterParse(t)
		}))
	}
	_invokeAll(t) {
		for(let e = 0, i = this.plugins.length; e < i; e++) t(this.plugins[e])
	}
}
class ym {
	constructor(t) {
		this.writer = t, this.name = "KHR_lights_punctual"
	}
	writeNode(t, e) {
		if(!t.isLight) return;
		if(!t.isDirectionalLight && !t.isPointLight && !t.isSpotLight) return void console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.", t);
		const i = this.writer,
			n = i.json,
			s = i.extensionsUsed,
			r = {};
		t.name && (r.name = t.name), r.color = t.color.toArray(), r.intensity = t.intensity, t.isDirectionalLight ? r.type = "directional" : t.isPointLight ? (r.type = "point", t.distance > 0 && (r.range = t.distance)) : t.isSpotLight && (r.type = "spot", t.distance > 0 && (r.range = t.distance), r.spot = {}, r.spot.innerConeAngle = (t.penumbra - 1) * t.angle * -1, r.spot.outerConeAngle = t.angle), void 0 !== t.decay && 2 !== t.decay && console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."), !t.target || t.target.parent === t && 0 === t.target.position.x && 0 === t.target.position.y && -1 === t.target.position.z || console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."), s[this.name] || (n.extensions = n.extensions || {}, n.extensions[this.name] = {
			lights: []
		}, s[this.name] = !0);
		const a = n.extensions[this.name].lights;
		a.push(r), e.extensions = e.extensions || {}, e.extensions[this.name] = {
			light: a.length - 1
		}
	}
}
class xm {
	constructor(t) {
		this.writer = t, this.name = "KHR_materials_unlit"
	}
	writeMaterial(t, e) {
		if(!t.isMeshBasicMaterial) return;
		const i = this.writer.extensionsUsed;
		e.extensions = e.extensions || {}, e.extensions[this.name] = {}, i[this.name] = !0, e.pbrMetallicRoughness.metallicFactor = 0, e.pbrMetallicRoughness.roughnessFactor = .9
	}
}
class _m {
	constructor(t) {
		this.writer = t, this.name = "KHR_materials_pbrSpecularGlossiness"
	}
	writeMaterial(t, e) {
		if(!t.isGLTFSpecularGlossinessMaterial) return;
		const i = this.writer,
			n = i.extensionsUsed,
			s = {};
		e.pbrMetallicRoughness.baseColorFactor && (s.diffuseFactor = e.pbrMetallicRoughness.baseColorFactor);
		const r = [1, 1, 1];
		if(t.specular.toArray(r, 0), s.specularFactor = r, s.glossinessFactor = t.glossiness, e.pbrMetallicRoughness.baseColorTexture && (s.diffuseTexture = e.pbrMetallicRoughness.baseColorTexture), t.specularMap) {
			const e = {
				index: i.processTexture(t.specularMap)
			};
			i.applyTextureTransform(e, t.specularMap), s.specularGlossinessTexture = e
		}
		e.extensions = e.extensions || {}, e.extensions[this.name] = s, n[this.name] = !0
	}
}
class Em {
	constructor(t) {
		this.writer = t, this.name = "KHR_materials_clearcoat"
	}
	writeMaterial(t, e) {
		if(!t.isMeshPhysicalMaterial) return;
		const i = this.writer,
			n = i.extensionsUsed,
			s = {};
		if(s.clearcoatFactor = t.clearcoat, t.clearcoatMap) {
			const e = {
				index: i.processTexture(t.clearcoatMap)
			};
			i.applyTextureTransform(e, t.clearcoatMap), s.clearcoatTexture = e
		}
		if(s.clearcoatRoughnessFactor = t.clearcoatRoughness, t.clearcoatRoughnessMap) {
			const e = {
				index: i.processTexture(t.clearcoatRoughnessMap)
			};
			i.applyTextureTransform(e, t.clearcoatRoughnessMap), s.clearcoatRoughnessTexture = e
		}
		if(t.clearcoatNormalMap) {
			const e = {
				index: i.processTexture(t.clearcoatNormalMap)
			};
			i.applyTextureTransform(e, t.clearcoatNormalMap), s.clearcoatNormalTexture = e
		}
		e.extensions = e.extensions || {}, e.extensions[this.name] = s, n[this.name] = !0
	}
}
class wm {
	constructor(t) {
		this.writer = t, this.name = "KHR_materials_iridescence"
	}
	writeMaterial(t, e) {
		if(!t.isMeshPhysicalMaterial) return;
		const i = this.writer,
			n = i.extensionsUsed,
			s = {};
		if(s.iridescenceFactor = t.iridescence, t.iridescenceMap) {
			const e = {
				index: i.processTexture(t.iridescenceMap)
			};
			i.applyTextureTransform(e, t.iridescenceMap), s.iridescenceTexture = e
		}
		if(s.iridescenceIor = t.iridescenceIOR, s.iridescenceThicknessMinimum = t.iridescenceThicknessRange[0], s.iridescenceThicknessMaximum = t.iridescenceThicknessRange[1], t.iridescenceThicknessMap) {
			const e = {
				index: i.processTexture(t.iridescenceThicknessMap)
			};
			i.applyTextureTransform(e, t.iridescenceThicknessMap), s.iridescenceThicknessTexture = e
		}
		e.extensions = e.extensions || {}, e.extensions[this.name] = s, n[this.name] = !0
	}
}
class bm {
	constructor(t) {
		this.writer = t, this.name = "KHR_materials_transmission"
	}
	writeMaterial(t, e) {
		if(!t.isMeshPhysicalMaterial || 0 === t.transmission) return;
		const i = this.writer,
			n = i.extensionsUsed,
			s = {};
		if(s.transmissionFactor = t.transmission, t.transmissionMap) {
			const e = {
				index: i.processTexture(t.transmissionMap)
			};
			i.applyTextureTransform(e, t.transmissionMap), s.transmissionTexture = e
		}
		e.extensions = e.extensions || {}, e.extensions[this.name] = s, n[this.name] = !0
	}
}
class Im {
	constructor(t) {
		this.writer = t, this.name = "KHR_materials_volume"
	}
	writeMaterial(t, e) {
		if(!t.isMeshPhysicalMaterial || 0 === t.transmission) return;
		const i = this.writer,
			n = i.extensionsUsed,
			s = {};
		if(s.thicknessFactor = t.thickness, t.thicknessMap) {
			const e = {
				index: i.processTexture(t.thicknessMap)
			};
			i.applyTextureTransform(e, t.thicknessMap), s.thicknessTexture = e
		}
		s.attenuationDistance = t.attenuationDistance, s.attenuationColor = t.attenuationColor.toArray(), e.extensions = e.extensions || {}, e.extensions[this.name] = s, n[this.name] = !0
	}
}
Vg.Utils = {
	insertKeyframe: function(t, e) {
		const i = .001,
			n = t.getValueSize(),
			s = new t.TimeBufferType(t.times.length + 1),
			r = new t.ValueBufferType(t.values.length + n),
			a = t.createInterpolant(new t.ValueBufferType(n));
		let o;
		if(0 === t.times.length) {
			s[0] = e;
			for(let t = 0; t < n; t++) r[t] = 0;
			o = 0
		} else if(e < t.times[0]) {
			if(Math.abs(t.times[0] - e) < i) return 0;
			s[0] = e, s.set(t.times, 1), r.set(a.evaluate(e), 0), r.set(t.values, n), o = 0
		} else if(e > t.times[t.times.length - 1]) {
			if(Math.abs(t.times[t.times.length - 1] - e) < i) return t.times.length - 1;
			s[s.length - 1] = e, s.set(t.times, 0), r.set(t.values, 0), r.set(a.evaluate(e), t.values.length), o = s.length - 1
		} else
			for(let l = 0; l < t.times.length; l++) {
				if(Math.abs(t.times[l] - e) < i) return l;
				if(t.times[l] < e && t.times[l + 1] > e) {
					s.set(t.times.slice(0, l + 1), 0), s[l + 1] = e, s.set(t.times.slice(l + 1), l + 2), r.set(t.values.slice(0, (l + 1) * n), 0), r.set(a.evaluate(e), (l + 1) * n), r.set(t.values.slice((l + 1) * n), (l + 2) * n), o = l + 1;
					break
				}
			}
		return t.times = s, t.values = r, o
	},
	mergeMorphTargetTracks: function(t, e) {
		const i = [],
			n = {},
			s = t.tracks;
		for(let t = 0; t < s.length; ++t) {
			let r = s[t];
			const a = ma.parseTrackName(r.name),
				o = ma.findNode(e, a.nodeName);
			if("morphTargetInfluences" !== a.propertyName || void 0 === a.propertyIndex) {
				i.push(r);
				continue
			}
			if(r.createInterpolant !== r.InterpolantFactoryMethodDiscrete && r.createInterpolant !== r.InterpolantFactoryMethodLinear) {
				if(r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline) throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");
				console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."), r = r.clone(), r.setInterpolation(2301)
			}
			const l = o.morphTargetInfluences.length,
				c = o.morphTargetDictionary[a.propertyIndex];
			if(void 0 === c) throw new Error("THREE.GLTFExporter: Morph target name not found: " + a.propertyIndex);
			let h;
			if(void 0 === n[o.uuid]) {
				h = r.clone();
				const t = new h.ValueBufferType(l * h.times.length);
				for(let e = 0; e < h.times.length; e++) t[e * l + c] = h.values[e];
				h.name = (a.nodeName || "") + ".morphTargetInfluences", h.values = t, n[o.uuid] = h, i.push(h);
				continue
			}
			const u = r.createInterpolant(new r.ValueBufferType(1));
			h = n[o.uuid];
			for(let t = 0; t < h.times.length; t++) h.values[t * l + c] = u.evaluate(h.times[t]);
			for(let t = 0; t < r.times.length; t++) {
				const e = this.insertKeyframe(h, r.times[t]);
				h.values[e * l + c] = r.values[t]
			}
		}
		return t.tracks = i, t
	}
};
/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cm = t => void 0 !== t.material && t.userData && t.userData.variantMaterials && !!Array.from(t.userData.variantMaterials.values()).filter((t => Sm(t.material))),
	Sm = t => t && t.isMaterial && !Array.isArray(t);
class Mm {
	constructor(t) {
		this.writer = t, this.name = "KHR_materials_variants", this.variantNames = []
	}
	beforeParse(t) {
		const e = new Set;
		for(const i of t) i.traverse((t => {
			if(!Cm(t)) return;
			const i = t.userData.variantMaterials,
				n = t.userData.variantData;
			for(const [t, s] of n) {
				const n = i.get(s.index);
				Sm(n.material) && e.add(t)
			}
		}));
		e.forEach((t => this.variantNames.push(t)))
	}
	writeMesh(t, e) {
		if(!Cm(t)) return;
		const i = t.userData,
			n = i.variantMaterials,
			s = i.variantData,
			r = new Map,
			a = new Map,
			o = Array.from(s.values()).sort(((t, e) => t.index - e.index));
		for(const [t, e] of o.entries()) a.set(e.index, t);
		for(const t of s.values()) {
			const e = n.get(t.index).material;
			if(!Sm(e)) continue;
			const i = this.writer.processMaterial(e);
			r.has(i) || r.set(i, {
				material: i,
				variants: []
			}), r.get(i).variants.push(a.get(t.index))
		}
		const l = Array.from(r.values()).map((t => t.variants.sort(((t, e) => t - e)) && t)).sort(((t, e) => t.material - e.material));
		if(0 === l.length) return;
		const c = Sm(i.originalMaterial) ? this.writer.processMaterial(i.originalMaterial) : -1;
		for(const t of e.primitives) c >= 0 && (t.material = c), t.extensions = t.extensions || {}, t.extensions[this.name] = {
			mappings: l
		}
	}
	afterParse() {
		if(0 === this.variantNames.length) return;
		const t = this.writer.json;
		t.extensions = t.extensions || {};
		const e = this.variantNames.map((t => ({
			name: t
		})));
		t.extensions[this.name] = {
			variants: e
		}, this.writer.extensionsUsed[this.name] = !0
	}
}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bm = Symbol("correlatedObjects"),
	Tm = Symbol("sourceObject"),
	Rm = Symbol("onUpdate");
class Dm {
	constructor(t, e, i = null) {
		this[Rm] = t, this[Tm] = e, this[Bm] = i
	}
}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Lm = new ae,
	Qm = new ri(2, 2);
let Pm = 0;
const Fm = Symbol("threeTexture");
class Um extends Dm {
	get[Fm]() {
		var t;
		return console.assert(null != this[Bm] && this[Bm].size > 0, "Image correlated object is undefined"), null === (t = this[Bm]) || void 0 === t ? void 0 : t.values().next().value
	}
	constructor(t, e, i) {
		super(t, i = null != i ? i : {
			name: e && e.image && e.image.src ? e.image.src.split("/").pop() : "adhoc_image",
			uri: e && e.image && e.image.src ? e.image.src : "adhoc_image" + Pm++
		}, new Set(e ? [e] : []))
	}
	get name() {
		return this[Tm].name || ""
	}
	get uri() {
		return this[Tm].uri
	}
	get bufferView() {
		return this[Tm].bufferView
	}
	get type() {
		return null != this.uri ? "external" : "embedded"
	}
	set name(t) {
		this[Tm].name = t
	}
	async createThumbnail(t, e) {
		const i = new Ps;
		Lm.map = this[Fm];
		const n = new Ne(Qm, Lm);
		i.add(n);
		const s = new gi(-1, 1, 1, -1, 0, 1),
			{
				threeRenderer: r
			} = gu.singleton,
			a = new O(t, e);
		r.setRenderTarget(a), r.render(i, s), r.setRenderTarget(null);
		const o = new Uint8Array(t * e * 4);
		r.readRenderTargetPixels(a, 0, 0, t, e, o), Ru.width = t, Ru.height = e;
		const l = Ru.getContext("2d"),
			c = l.createImageData(t, e);
		return c.data.set(o), l.putImageData(c, 0, 0), new Promise((async(t, e) => {
			Ru.toBlob((i => {
				if(!i) return e("Failed to capture thumbnail.");
				t(URL.createObjectURL(i))
			}), "image/png")
		}))
	}
}
var Nm, km;
! function(t) {
	t[t.Nearest = 9728] = "Nearest", t[t.Linear = 9729] = "Linear", t[t.NearestMipmapNearest = 9984] = "NearestMipmapNearest", t[t.LinearMipmapNearest = 9985] = "LinearMipmapNearest", t[t.NearestMipmapLinear = 9986] = "NearestMipmapLinear", t[t.LinearMipmapLinear = 9987] = "LinearMipmapLinear"
}(Nm || (Nm = {})),
function(t) {
	t[t.ClampToEdge = 33071] = "ClampToEdge", t[t.MirroredRepeat = 33648] = "MirroredRepeat", t[t.Repeat = 10497] = "Repeat"
}(km || (km = {}));
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Om = (() => {
		const t = [Nm.Nearest, Nm.Linear, Nm.NearestMipmapNearest, Nm.LinearMipmapLinear, Nm.NearestMipmapLinear, Nm.LinearMipmapLinear];
		return e => t.indexOf(e) > -1
	})(),
	Gm = (() => {
		const t = [Nm.Nearest, Nm.Linear];
		return e => t.indexOf(e) > -1
	})(),
	Hm = (() => {
		const t = [km.ClampToEdge, km.MirroredRepeat, km.Repeat];
		return e => t.indexOf(e) > -1
	})(),
	zm = Symbol("threeTextures"),
	Vm = Symbol("setProperty"),
	Wm = Symbol("sourceSampler");
class qm extends Dm {
	get[zm]() {
		return console.assert(null != this[Bm] && this[Bm].size > 0, "Sampler correlated object is undefined"), this[Bm]
	}
	get[Wm]() {
		return console.assert(null != this[Tm], "Sampler source is undefined"), this[Tm]
	}
	constructor(t, e, i) {
		null == (i = null != i ? i : {}).minFilter && (i.minFilter = e ? e.minFilter : Nm.LinearMipmapLinear), null == i.magFilter && (i.magFilter = e ? e.magFilter : Nm.Linear), null == i.wrapS && (i.wrapS = e ? e.wrapS : km.Repeat), null == i.wrapT && (i.wrapT = e ? e.wrapT : km.Repeat), super(t, i, new Set(e ? [e] : []))
	}
	get name() {
		return this[Tm].name || ""
	}
	get minFilter() {
		return this[Wm].minFilter
	}
	get magFilter() {
		return this[Wm].magFilter
	}
	get wrapS() {
		return this[Wm].wrapS
	}
	get wrapT() {
		return this[Wm].wrapT
	}
	setMinFilter(t) {
		this[Vm]("minFilter", t)
	}
	setMagFilter(t) {
		this[Vm]("magFilter", t)
	}
	setWrapS(t) {
		this[Vm]("wrapS", t)
	}
	setWrapT(t) {
		this[Vm]("wrapT", t)
	}[Vm](t, e) {
		const i = this[Wm];
		if(null != i) {
			if(((t, e) => {
					switch(t) {
						case "minFilter":
							return Om(e);
						case "magFilter":
							return Gm(e);
						case "wrapS":
						case "wrapT":
							return Hm(e);
						default:
							throw new Error(`Cannot configure property "${t}" on Sampler`)
					}
				})(t, e)) {
				i[t] = e;
				for(const i of this[zm]) i[t] = e, i.needsUpdate = !0
			}
			this[Rm]()
		}
	}
}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jm = Symbol("image"),
	Ym = Symbol("sampler");
class Jm extends Dm {
	constructor(t, e, i = null, n = null, s = null) {
		super(t, i || {}, new Set(e ? [e] : [])), this[Ym] = new qm(t, e, n), this[jm] = new Um(t, e, s)
	}
	get name() {
		return this[Tm].name || ""
	}
	set name(t) {
		this[Tm].name = t
	}
	get sampler() {
		return this[Ym]
	}
	get source() {
		return this[jm]
	}
}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Xm, Km;
const $m = Symbol("texture"),
	Zm = Symbol("transform"),
	tf = Symbol("materials"),
	ef = Symbol("usage");
var nf;
! function(t) {
	t[t.Base = 0] = "Base", t[t.MetallicRoughness = 1] = "MetallicRoughness", t[t.Normal = 2] = "Normal", t[t.Occlusion = 3] = "Occlusion", t[t.Emissive = 4] = "Emissive"
}(nf || (nf = {}));
class sf {
	constructor(t, e, i, n, s, r) {
		if(this[Xm] = null, this[Km] = {
				rotation: 0,
				scale: new v(1, 1),
				offset: new v(0, 0)
			}, r && i) {
			const e = s.textures ? s.textures[r.index] : null,
				n = e && s.samplers ? s.samplers[e.sampler] : null,
				a = e && s.images ? s.images[e.source] : null;
			this[Zm].rotation = i.rotation, this[Zm].scale.copy(i.repeat), this[Zm].offset.copy(i.offset), this[$m] = new Jm(t, i, e, n, a)
		}
		this.onUpdate = t, this[tf] = n, this[ef] = e
	}
	get texture() {
		return this[$m]
	}
	setTexture(t) {
		const e = null != t ? t.source[Fm] : null;
		let i = 3001;
		if(this[$m] = t, this[tf])
			for(const t of this[tf]) {
				switch(this[ef]) {
					case nf.Base:
						t.map = e;
						break;
					case nf.MetallicRoughness:
						i = 3e3, t.metalnessMap = e, t.roughnessMap = e;
						break;
					case nf.Normal:
						i = 3e3, t.normalMap = e;
						break;
					case nf.Occlusion:
						i = 3e3, t.aoMap = e;
						break;
					case nf.Emissive:
						t.emissiveMap = e
				}
				t.needsUpdate = !0
			}
		e && (e.encoding = i, e.rotation = this[Zm].rotation, e.repeat = this[Zm].scale, e.offset = this[Zm].offset), this.onUpdate()
	}
}
Xm = $m, Km = Zm;
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rf = Symbol("threeMaterials"),
	af = Symbol("baseColorTexture"),
	of = Symbol("metallicRoughnessTexture");
class lf extends Dm {
	constructor(t, e, i, n) {
		super(t, i, n), null == i.baseColorFactor && (i.baseColorFactor = [1, 1, 1, 1]), null == i.roughnessFactor && (i.roughnessFactor = 1), null == i.metallicFactor && (i.metallicFactor = 1);
		const {
			baseColorTexture: s,
			metallicRoughnessTexture: r
		} = i, {
			map: a,
			metalnessMap: o
		} = n.values().next().value;
		this[af] = new sf(t, nf.Base, a, n, e, s || null), this[of] = new sf(t, nf.MetallicRoughness, o, n, e, r || null)
	}
	get[rf]() {
		return this[Bm]
	}
	get baseColorFactor() {
		return this[Tm].baseColorFactor
	}
	get metallicFactor() {
		return this[Tm].metallicFactor
	}
	get roughnessFactor() {
		return this[Tm].roughnessFactor
	}
	get baseColorTexture() {
		return this[af]
	}
	get metallicRoughnessTexture() {
		return this[of]
	}
	setBaseColorFactor(t) {
		for(const e of this[rf]) e.color.fromArray(t), e.opacity = t[3];
		this[Tm].baseColorFactor = t, this[Rm]()
	}
	setMetallicFactor(t) {
		for(const e of this[rf]) e.metalness = t;
		this[Tm].metallicFactor = t, this[Rm]()
	}
	setRoughnessFactor(t) {
		for(const e of this[rf]) e.roughness = t;
		this[Tm].roughnessFactor = t, this[Rm]()
	}
}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cf;
const hf = Symbol("pbrMetallicRoughness"),
	uf = Symbol("normalTexture"),
	df = Symbol("occlusionTexture"),
	Af = Symbol("emissiveTexture"),
	pf = Symbol("backingThreeMaterial"),
	gf = Symbol("applyAlphaCutoff"),
	mf = Symbol("lazyLoadGLTFInfo"),
	ff = Symbol("initialize"),
	vf = Symbol("getLoadedMaterial"),
	yf = Symbol("ensureMaterialIsLoaded"),
	xf = Symbol("gltfIndex"),
	_f = Symbol("setActive"),
	Ef = Symbol("variantIndices"),
	wf = Symbol("isActive"),
	bf = Symbol("variantSet"),
	If = Symbol("modelVariants");
class Cf extends Dm {
	constructor(t, e, i, n, s, r, a, o) {
		super(t, i, a), this[cf] = new Set, this[xf] = n, this[wf] = s, this[If] = r, null == o ? this[ff](e) : this[mf] = o
	}
	get[(cf = bf, pf)]() {
		return this[Bm].values().next().value
	}[ff](t) {
		const e = this[Rm],
			i = this[Tm],
			n = this[Bm];
		i.extensions && i.extensions.KHR_materials_pbrSpecularGlossiness && console.warn(`Material ${i.name} uses a deprecated extension\n          "KHR_materials_pbrSpecularGlossiness", please use\n          "pbrMetallicRoughness" instead. Specular Glossiness materials are\n          currently supported for rendering, but not for our scene-graph API,\n          nor for auto-generation of USDZ for Quick Look.`), null == i.pbrMetallicRoughness && (i.pbrMetallicRoughness = {}), this[hf] = new lf(e, t, i.pbrMetallicRoughness, n), null == i.emissiveFactor && (i.emissiveFactor = [0, 0, 0]), null == i.doubleSided && (i.doubleSided = !1), null == i.alphaMode && (i.alphaMode = "OPAQUE"), null == i.alphaCutoff && (i.alphaCutoff = .5);
		const {
			normalTexture: s,
			occlusionTexture: r,
			emissiveTexture: a
		} = i, {
			normalMap: o,
			aoMap: l,
			emissiveMap: c
		} = n.values().next().value;
		this[uf] = new sf(e, nf.Normal, o, n, t, s || null), this[df] = new sf(e, nf.Occlusion, l, n, t, r || null), this[Af] = new sf(e, nf.Emissive, c, n, t, a || null)
	}
	async [vf]() {
		if(null != this[mf]) {
			const {
				set: t,
				material: e
			} = await this[mf].doLazyLoad();
			return this[Bm] = t, this[ff](this[mf].gltf), this[mf] = void 0, this.ensureLoaded = async() => {}, e
		}
		return this[Bm].values().next().value
	}[yf]() {
		if(null != this[mf]) throw new Error(`Material "${this.name}" has not been loaded, call 'await\n    myMaterial.ensureLoaded()' before using an unloaded material.`)
	}
	async ensureLoaded() {
		await this[vf]()
	}
	get isLoaded() {
		return null == this[mf]
	}
	get isActive() {
		return this[wf]
	}[_f](t) {
		this[wf] = t
	}
	get name() {
		return this[Tm].name
	}
	set name(t) {
		const e = this[Tm];
		if(null != e && (e.name = t), null != this[Bm])
			for(const e of this[Bm]) e.name = t
	}
	get pbrMetallicRoughness() {
		return this[yf](), this[hf]
	}
	get normalTexture() {
		return this[yf](), this[uf]
	}
	get occlusionTexture() {
		return this[yf](), this[df]
	}
	get emissiveTexture() {
		return this[yf](), this[Af]
	}
	get emissiveFactor() {
		return this[yf](), this[Tm].emissiveFactor
	}
	get index() {
		return this[xf]
	}[Ef]() {
		return this[bf]
	}
	hasVariant(t) {
		const e = this[If].get(t);
		return null != e && this[bf].has(e.index)
	}
	setEmissiveFactor(t) {
		this[yf]();
		for(const e of this[Bm]) e.emissive.fromArray(t);
		this[Tm].emissiveFactor = t, this[Rm]()
	}[gf]() {
		this[yf]();
		const t = this[Tm];
		for(const e of this[Bm]) "MASK" === this[Tm].alphaMode ? e.alphaTest = t.alphaCutoff : e.alphaTest = void 0, e.needsUpdate = !0
	}
	setAlphaCutoff(t) {
		this[yf](), this[Tm].alphaCutoff = t, this[gf](), this[Rm]()
	}
	getAlphaCutoff() {
		return this[yf](), this[Tm].alphaCutoff
	}
	setDoubleSided(t) {
		this[yf]();
		for(const e of this[Bm]) e.side = t ? 2 : 0, e.needsUpdate = !0;
		this[Tm].doubleSided = t, this[Rm]()
	}
	getDoubleSided() {
		return this[yf](), this[Tm].doubleSided
	}
	setAlphaMode(t) {
		this[yf]();
		const e = (t, e) => {
			t.transparent = e, t.depthWrite = !e
		};
		this[Tm].alphaMode = t;
		for(const i of this[Bm]) e(i, "BLEND" === t), this[gf](), i.needsUpdate = !0;
		this[Rm]()
	}
	getAlphaMode() {
		return this[yf](), this[Tm].alphaMode
	}
}
var Sf, Mf, Bf;
const Tf = Symbol("materials"),
	Rf = Symbol("variantToMaterialMap"),
	Df = Symbol("modelVariants"),
	Lf = Symbol("mesh"),
	Qf = Symbol("children"),
	Pf = Symbol("initialMaterialIdx"),
	Ff = Symbol("activeMaterialIdx");
class Uf {
	constructor(t) {
		this.name = "", this[Sf] = new Array, this.name = t
	}
}
Sf = Qf;
class Nf extends Uf {
	constructor(t, e, i, n) {
		super(t.name), this[Mf] = new Map, this[Bf] = new Map, this[Lf] = t;
		const {
			gltf: s,
			threeGLTF: r,
			threeObjectMap: a
		} = n;
		this[Df] = i, this.mesh.userData.variantData = i;
		const o = a.get(t.material);
		null != o.materials ? this[Pf] = this[Ff] = o.materials : console.error(`Primitive (${t.name}) missing initial material reference.`);
		const l = t.userData.associations || {};
		if(null == l.meshes) return void console.error("Mesh is missing primitive index association");
		const c = ((s.meshes || [])[l.meshes].primitives || [])[l.primitives];
		if(null != c) {
			if(null != c.material) this[Tf].set(c.material, e[c.material]);
			else {
				const t = e.findIndex((t => "Default" === t.name));
				t >= 0 ? this[Tf].set(t, e[t]) : console.warn("gltfPrimitive has no material!")
			}
			if(c.extensions && c.extensions.KHR_materials_variants) {
				const t = c.extensions.KHR_materials_variants,
					n = r.parser.json.extensions.KHR_materials_variants.variants;
				for(const s of t.mappings) {
					const t = e[s.material];
					this[Tf].set(s.material, t);
					for(const e of s.variants) {
						const {
							name: s
						} = n[e];
						this[Rf].set(e, t), t[Ef]().add(e), i.has(s) || i.set(s, {
							name: s,
							index: e
						})
					}
				}
			}
		} else console.error("Mesh primitive definition is missing.")
	}
	get mesh() {
		return this[Lf]
	}
	async setActiveMaterial(t) {
		const e = this[Tf].get(t);
		return null != e && (this.mesh.material = await e[vf](), this[Ff] = t), this.mesh.material
	}
	getActiveMaterial() {
		return this[Tf].get(this[Ff])
	}
	getMaterial(t) {
		return this[Tf].get(t)
	}
	async enableVariant(t) {
		if(null == t) return this.setActiveMaterial(this[Pf]);
		if(null != this[Rf] && this[Df].has(t)) {
			const e = this[Df].get(t);
			return this.enableVariantHelper(e.index)
		}
		return null
	}
	async enableVariantHelper(t) {
		if(null != this[Rf] && null != t) {
			const e = this[Rf].get(t);
			if(null != e) return this.setActiveMaterial(e.index)
		}
		return null
	}
	async instantiateVariants() {
		if(null != this[Rf])
			for(const t of this[Rf].keys()) {
				if(null != this.mesh.userData.variantMaterials.get(t).material) continue;
				const e = await this.enableVariantHelper(t);
				null != e && (this.mesh.userData.variantMaterials.get(t).material = e)
			}
	}
	get variantInfo() {
		return this[Rf]
	}
	addVariant(t, e) {
		if(!this.ensureVariantIsUnused(e)) return !1;
		this[Df].has(e) || this[Df].set(e, {
			name: e,
			index: this[Df].size
		});
		const i = this[Df].get(e).index;
		return t[Ef]().add(i), this[Rf].set(i, t), this[Tf].set(t.index, t), this.updateVariantUserData(i, t), !0
	}
	deleteVariant(t) {
		if(this.variantInfo.has(t)) {
			this.variantInfo.delete(t);
			const e = this.mesh.userData.variantMaterials;
			null != e && e.delete(t)
		}
	}
	updateVariantUserData(t, e) {
		e[Ef]().add(t), this.mesh.userData.variantData = this[Df], this.mesh.userData.variantMaterials = this.mesh.userData.variantMaterials || new Map;
		this.mesh.userData.variantMaterials.set(t, {
			material: e[Bm].values().next().value,
			gltfMaterialIndex: e.index
		})
	}
	ensureVariantIsUnused(t) {
		const e = this[Df].get(t);
		return null == e || !this.variantInfo.has(e.index) || (console.warn(`Primitive cannot add variant '${t}' for this material, it already exists.`), !1)
	}
}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var kf, Of, Gf, Hf, zf, Vf;
Mf = Tf, Bf = Rf;
const Wf = Symbol("materials"),
	qf = Symbol("hierarchy"),
	jf = Symbol("roots"),
	Yf = Symbol("primitives"),
	Jf = Symbol("correlatedSceneGraph"),
	Xf = Symbol("prepareVariantsForExport"),
	Kf = Symbol("switchVariant"),
	$f = Symbol("threeScene"),
	Zf = Symbol("materialsFromPoint"),
	tv = Symbol("materialFromPoint"),
	ev = Symbol("variantData"),
	iv = Symbol("availableVariants"),
	nv = Symbol("modelOnUpdate"),
	sv = Symbol("cloneMaterial");
class rv {
	constructor(t, e, i, n) {
		this.gltf = t, this.gltfElementMap = e, this.mapKey = i, this.doLazyLoad = n
	}
}
class av {
	constructor(t, e = (() => {})) {
		this[kf] = new Array, this[Of] = new Array, this[Gf] = new Array, this[Hf] = new Array, this[zf] = () => {}, this[Vf] = new Map, this[nv] = e, this[Jf] = t;
		const {
			gltf: i,
			threeGLTF: n,
			gltfElementMap: s
		} = t;
		this[$f] = n.scene;
		for(const [t, r] of i.materials.entries()) {
			const a = s.get(r);
			if(null != a) this[Wf].push(new Cf(e, i, r, t, !0, this[ev], a));
			else {
				const r = (i.materials || [])[t],
					o = t,
					l = async() => {
						const t = await n.parser.getDependency("material", o),
							e = new Set;
						return s.set(r, e), e.add(t), {
							set: e,
							material: t
						}
					};
				this[Wf].push(new Cf(e, i, r, t, !1, this[ev], a, new rv(i, s, r, l)))
			}
		}
		const r = new Map,
			a = new Array;
		for(const t of n.scene.children) a.push(t);
		for(; a.length > 0;) {
			const e = a.pop();
			let i = null;
			e instanceof Ne ? (i = new Nf(e, this.materials, this[ev], t), this[Yf].push(i)) : i = new Uf(e.name);
			const n = r.get(e);
			null != n ? n[Qf].push(i) : this[jf].push(i), this[qf].push(i);
			for(const t of e.children) a.push(t), r.set(e, i)
		}
	}
	get materials() {
		return this[Wf]
	}[(kf = Wf, Of = qf, Gf = jf, Hf = Yf, zf = nv, Vf = ev, iv)]() {
		const t = Array.from(this[ev].values());
		return t.sort(((t, e) => t.index - e.index)), t.map((t => t.name))
	}
	getMaterialByName(t) {
		const e = this[Wf].filter((e => e.name === t));
		return e.length > 0 ? e[0] : null
	}[Zf](t) {
		return t.intersectObject(this[$f], !0).map((t => {
			const e = this[qf].find((e => {
				if(e instanceof Nf) {
					if(e.mesh === t.object) return !0
				}
				return !1
			}));
			return null != e ? e.getActiveMaterial() : null
		}))
	}[tv](t) {
		const e = this[Zf](t);
		return e.length > 0 ? e[0] : null
	}
	async [Kf](t) {
		for(const e of this[Yf]) await e.enableVariant(t);
		for(const t of this.materials) t[_f](!1);
		for(const t of this[Yf]) this.materials[t.getActiveMaterial().index][_f](!0)
	}
	async [Xf]() {
		const t = new Array;
		for(const e of this[Yf]) t.push(e.instantiateVariants());
		await Promise.all(t)
	}[sv](t, e) {
		const i = this.materials[t];
		i.isLoaded || console.error("Cloning an unloaded material,\n           call 'material.ensureLoaded() before cloning the material.");
		const n = i[Bm],
			s = JSON.parse(JSON.stringify(i[Tm]));
		s.name = e;
		this[Jf].gltf.materials.push(s);
		const r = new Set;
		for(const [t, i] of n.entries()) {
			const s = i.clone();
			s.name = e + (n.size > 1 ? "_inst" + t : ""), r.add(s)
		}
		const a = new Cf(this[nv], this[Jf].gltf, s, this[Wf].length, !1, this[ev], r);
		return this[Wf].push(a), a
	}
	createMaterialInstanceForVariant(t, e, i, n = !0) {
		let s = null;
		for(const n of this[Yf]) {
			const r = this[ev].get(i);
			null != r && n.variantInfo.has(r.index) || null != n.getMaterial(t) && (this.hasVariant(i) || this.createVariant(i), null == s && (s = this[sv](t, e)), n.addVariant(s, i))
		}
		if(n && null != s) {
			s[_f](!0), this.materials[t][_f](!1);
			for(const t of this[Yf]) t.enableVariant(i)
		}
		return s
	}
	createVariant(t) {
		this[ev].has(t) ? console.warn(`Variant '${t}'' already exists`) : this[ev].set(t, {
			name: t,
			index: this[ev].size
		})
	}
	hasVariant(t) {
		return this[ev].has(t)
	}
	setMaterialToVariant(t, e) {
		if(null != this[iv]().find((t => t === e)))
			if(t < 0 || t >= this.materials.length) console.error("setMaterialToVariant(): materialIndex is out of bounds.");
			else
				for(const i of this[Yf]) {
					const n = i.getMaterial(t);
					null != n && i.addVariant(n, e)
				} else console.warn(`Can't add material to '${e}', the variant does not exist.'`)
	}
	updateVariantName(t, e) {
		const i = this[ev].get(t);
		null != i && (i.name = e, this[ev].set(e, i), this[ev].delete(t))
	}
	deleteVariant(t) {
		const e = this[ev].get(t);
		if(null != e) {
			for(const i of this.materials) i.hasVariant(t) && i[bf].delete(e.index);
			for(const t of this[Yf]) t.deleteVariant(e.index);
			this[ev].delete(t)
		}
	}
}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ov = function(t, e, i, n) {
	for(var s, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n, o = t.length - 1; o >= 0; o--)(s = t[o]) && (a = (r < 3 ? s(a) : r > 3 ? s(e, i, a) : s(e, i)) || a);
	return r > 3 && a && Object.defineProperty(e, i, a), a
};
const lv = Symbol("currentGLTF"),
	cv = Symbol("model"),
	hv = Symbol("getOnUpdateMethod"),
	uv = Symbol("textureLoader"),
	dv = Symbol("originalGltfJson");
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Av = function(t, e, i, n) {
	for(var s, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n, o = t.length - 1; o >= 0; o--)(s = t[o]) && (a = (r < 3 ? s(a) : r > 3 ? s(e, i, a) : s(e, i)) || a);
	return r > 3 && a && Object.defineProperty(e, i, a), a
};
const pv = Math.PI / 32,
	gv = {
		basis: [lh($c(pv, "rad"))],
		keywords: {
			auto: [null]
		}
	},
	mv = Symbol("autoRotateStartTime"),
	fv = Symbol("radiansPerSecond"),
	vv = Symbol("syncRotationRate"),
	yv = Symbol("onCameraChange"),
	xv = (t => {
		var e, i, n;
		class s extends t {
			constructor() {
				super(...arguments), this[e] = new Map, this[i] = t => {
					t.forEach((t => {
						t instanceof MutationRecord && "childList" !== t.type || (t.addedNodes.forEach((t => {
							this[_d](t)
						})), t.removedNodes.forEach((t => {
							this[Ed](t)
						})), this[id]())
					}))
				}, this[n] = new MutationObserver(this[yd])
			}
			connectedCallback() {
				super.connectedCallback();
				for(let t = 0; t < this.children.length; ++t) this[_d](this.children[t]);
				const {
					ShadyDOM: t
				} = self;
				null == t ? this[xd].observe(this, {
					childList: !0
				}) : this[xd] = t.observeChildren(this, this[yd])
			}
			disconnectedCallback() {
				super.disconnectedCallback();
				const {
					ShadyDOM: t
				} = self;
				null == t ? this[xd].disconnect() : t.unobserveChildren(this[xd])
			}[(e = vd, i = yd, n = xd, nd)](t, e) {
				super[nd](t, e);
				const i = this[ed],
					{
						annotationRenderer: n
					} = i,
					s = i.getCamera();
				i.shouldRender() && (i.updateHotspots(s.position), n.domElement.style.display = "", n.render(i, s))
			}
			updateHotspot(t) {
				const e = this[vd].get(t.name);
				null != e && (e.updatePosition(t.position), e.updateNormal(t.normal), this[id]())
			}
			positionAndNormalFromPoint(t, e) {
				const i = this[ed],
					n = i.getNDC(t, e),
					s = i.positionAndNormalFromPoint(n);
				if(null == s) return null;
				wd.copy(i.target.matrixWorld).invert();
				const r = ud(s.position.applyMatrix4(wd));
				bd.getNormalMatrix(wd);
				const a = ud(s.normal.applyNormalMatrix(bd));
				let o = null;
				return null != s.uv && (o = dd(s.uv)), {
					position: r,
					normal: a,
					uv: o
				}
			}[_d](t) {
				if(!(t instanceof HTMLElement && 0 === t.slot.indexOf("hotspot"))) return;
				let e = this[vd].get(t.slot);
				null != e ? e.increment() : (e = new dh({
					name: t.slot,
					position: t.dataset.position,
					normal: t.dataset.normal
				}), this[vd].set(t.slot, e), this[ed].addHotspot(e)), this[ed].queueRender()
			}[Ed](t) {
				if(!(t instanceof HTMLElement)) return;
				const e = this[vd].get(t.slot);
				e && (e.decrement() && (this[ed].removeHotspot(e), this[vd].delete(t.slot)), this[ed].queueRender())
			}
		}
		return s
	})((t => {
		var i, n, s, r;
		class a extends t {
			constructor() {
				super(...arguments), this[i] = void 0, this[n] = null, this[s] = new qr, this[r] = null, this.variantName = null, this.orientation = "0 0 0", this.scale = "1 1 1"
			}
			get model() {
				return this[cv]
			}
			get availableVariants() {
				return this.model ? this.model[iv]() : []
			}
			get originalGltfJson() {
				return this[dv]
			}[(i = cv, n = lv, s = uv, r = dv, hv)]() {
				return() => {
					this[id]()
				}
			}
			async createTexture(t, e = "image/png") {
				const i = this[lv],
					n = await new Promise((e => this[uv].load(t, e)));
				return i && n ? (n.encoding = 3001, n.wrapS = 1e3, n.wrapT = 1e3, n.flipY = !1, n.userData.mimeType = e, new Jm(this[hv](), n)) : null
			}
			async updated(t) {
				if(super.updated(t), t.has("variantName")) {
					const t = this[lv],
						{
							variantName: e
						} = this;
					null != t && (await this[cv][Kf](e), this[id](), this.dispatchEvent(new CustomEvent("variant-applied")))
				}
				if(t.has("orientation") || t.has("scale")) {
					if(!this.loaded) return;
					const t = this[ed];
					t.applyTransform(), t.updateBoundingBox(), t.updateShadow(), this[ad].arRenderer.onUpdateScene(), this[id]()
				}
			}[sd]() {
				super[sd]();
				const {
					currentGLTF: t
				} = this[ed];
				if(null != t) {
					const {
						correlatedSceneGraph: e
					} = t;
					null != e && t !== this[lv] && (this[cv] = new av(e, this[hv]()), this[dv] = JSON.parse(JSON.stringify(e.gltf))), "variants" in t.userData && this.requestUpdate("variantName")
				}
				this[lv] = t
			}
			async exportScene(t) {
				const e = this[ed];
				return new Promise((async(i, n) => {
					const s = {
						binary: !0,
						onlyVisible: !0,
						maxTextureSize: 1 / 0,
						includeCustomExtensions: !1,
						forceIndices: !1
					};
					Object.assign(s, t), s.animations = e.animations, s.truncateDrawRange = !0;
					const r = e.shadow;
					let a = !1;
					null != r && (a = r.visible, r.visible = !1), await this[cv][Xf]();
					(new Vg).register((t => new Mm(t))).parse(e.model, (t => i(new Blob([s.binary ? t : JSON.stringify(t)], {
						type: s.binary ? "application/octet-stream" : "application/json"
					}))), (() => n("glTF export failed")), s), null != r && (r.visible = a)
				}))
			}
			materialFromPoint(t, e) {
				const i = this[ed],
					n = i.getNDC(t, e);
				return i.raycaster.setFromCamera(n, i.getCamera()), this[cv][tv](i.raycaster)
			}
		}
		return ov([e({
			type: String,
			attribute: "variant-name"
		})], a.prototype, "variantName", void 0), ov([e({
			type: String,
			attribute: "orientation"
		})], a.prototype, "orientation", void 0), ov([e({
			type: String,
			attribute: "scale"
		})], a.prototype, "scale", void 0), a
	})((t => {
		var i, n, s;
		class r extends t {
			constructor() {
				super(...arguments), this.autoRotate = !1, this.autoRotateDelay = 3e3, this.rotationPerSecond = "auto", this[i] = performance.now(), this[n] = 0, this[s] = t => {
					this.autoRotate && "user-interaction" === t.detail.source && (this[mv] = performance.now())
				}
			}
			connectedCallback() {
				super.connectedCallback(), this.addEventListener("camera-change", this[yv]), this[mv] = performance.now()
			}
			disconnectedCallback() {
				super.disconnectedCallback(), this.removeEventListener("camera-change", this[yv]), this[mv] = performance.now()
			}
			updated(t) {
				super.updated(t), t.has("autoRotate") && (this[mv] = performance.now())
			}[(i = mv, n = fv, vv)](t) {
				this[fv] = t[0]
			}[nd](t, e) {
				if(super[nd](t, e), !this.autoRotate || !this[cd]() || this[ad].isPresenting) return;
				const i = Math.min(e, t - this[mv] - this.autoRotateDelay);
				i > 0 && (this[ed].yaw = this.turntableRotation + this[fv] * i * .001)
			}
			get turntableRotation() {
				return this[ed].yaw
			}
			resetTurntableRotation(t = 0) {
				this[ed].yaw = t
			}
		}
		return s = yv, Av([e({
			type: Boolean,
			attribute: "auto-rotate"
		})], r.prototype, "autoRotate", void 0), Av([e({
			type: Number,
			attribute: "auto-rotate-delay"
		})], r.prototype, "autoRotateDelay", void 0), Av([Rp({
			intrinsics: gv,
			updateHandler: vv
		}), e({
			type: String,
			attribute: "rotation-per-second"
		})], r.prototype, "rotationPerSecond", void 0), r
	})((t => {
		var i, n, s;
		class r extends t {
			constructor() {
				super(...arguments), this.environmentImage = null, this.skyboxImage = null, this.shadowIntensity = 0, this.shadowSoftness = 1, this.exposure = 1, this[i] = null, this[n] = null, this[s] = null
			}
			updated(t) {
				super.updated(t), t.has("shadowIntensity") && (this[ed].setShadowIntensity(.5 * this.shadowIntensity), this[id]()), t.has("shadowSoftness") && (this[ed].setShadowSoftness(this.shadowSoftness), this[id]()), t.has("exposure") && (this[ed].exposure = this.exposure, this[id]()), (t.has("environmentImage") || t.has("skyboxImage")) && this[hd]() && this[Xo]()
			}
			hasBakedShadow() {
				return this[ed].bakedShadows.size > 0
			}
			async [(i = Yo, n = Jo, s = Ko, Xo)]() {
				const {
					skyboxImage: t,
					environmentImage: e
				} = this;
				null != this[Ko] && (this[Ko](), this[Ko] = null);
				const {
					textureUtils: i
				} = this[ad];
				if(null == i) return;
				const n = this[od].beginActivity();
				try {
					const {
						environmentMap: s,
						skybox: r
					} = await i.generateEnvironmentMapAndSkybox(Oo(t), e, (t => n(Vo(t, 0, 1))));
					this[Yo] !== s && (this[Yo] = s, this.dispatchEvent(new CustomEvent("environment-change"))), this[Jo] = null != r ? r.name === s.name ? s : r : null, this[ed].setEnvironmentAndSkybox(this[Yo], this[Jo]), this[ed].dispatchEvent({
						type: "envmap-update"
					})
				} catch(t) {
					if(t instanceof Error) throw this[ed].setEnvironmentAndSkybox(null, null), t
				} finally {
					n(1)
				}
			}
		}
		return jo([e({
			type: String,
			attribute: "environment-image"
		})], r.prototype, "environmentImage", void 0), jo([e({
			type: String,
			attribute: "skybox-image"
		})], r.prototype, "skyboxImage", void 0), jo([e({
			type: Number,
			attribute: "shadow-intensity"
		})], r.prototype, "shadowIntensity", void 0), jo([e({
			type: Number,
			attribute: "shadow-softness"
		})], r.prototype, "shadowSoftness", void 0), jo([e({
			type: Number
		})], r.prototype, "exposure", void 0), r
	})((t => {
		var i, n, s, r, a, o, l, c, h, u, d, A, p, g, m;
		class f extends t {
			constructor() {
				super(...arguments), this.cameraControls = !1, this.cameraOrbit = "0deg 75deg 105%", this.cameraTarget = "auto auto auto", this.fieldOfView = "auto", this.minCameraOrbit = "auto", this.maxCameraOrbit = "auto", this.minFieldOfView = "auto", this.maxFieldOfView = "auto", this.interactionPromptThreshold = 3e3, this.interactionPrompt = Yp, this.orbitSensitivity = 1, this.touchAction = Jp, this.disableZoom = !1, this.disablePan = !1, this.disableTap = !1, this.interpolationDecay = 50, this[i] = this.shadowRoot.querySelector(".interaction-prompt"), this[n] = this.shadowRoot.querySelector("#prompt"), this[s] = [this.shadowRoot.querySelector("#finger0"), this.shadowRoot.querySelector("#finger1")], this[r] = this.shadowRoot.querySelector(".pan-target"), this[a] = 0, this[o] = 1 / 0, this[l] = !1, this[c] = !1, this[h] = new kp(this[ed].camera, this[Zu], this[ed]), this[u] = new Ea, this[d] = !1, this[A] = !1, this[p] = !1, this[g] = ({
					source: t
				}) => {
					this[dg](), this[id](), t === Fp && (this[fg] = !0, this[ug]()), this.dispatchEvent(new CustomEvent("camera-change", {
						detail: {
							source: t
						}
					}))
				}, this[m] = t => {
					"pointer-change-start" === t.type ? this[$u].classList.add("pointer-tumbling") : this[$u].classList.remove("pointer-tumbling")
				}
			}
			get inputSensitivity() {
				return this[ag].inputSensitivity
			}
			set inputSensitivity(t) {
				this[ag].inputSensitivity = t
			}
			getCameraOrbit() {
				const {
					theta: t,
					phi: e,
					radius: i
				} = this[xg];
				return {
					theta: t,
					phi: e,
					radius: i,
					toString() {
						return `${this.theta}rad ${this.phi}rad ${this.radius}m`
					}
				}
			}
			getCameraTarget() {
				return ud(this[ad].isPresenting ? this[ad].arRenderer.target : this[ed].getTarget())
			}
			getFieldOfView() {
				return this[ag].getFieldOfView()
			}
			getMinimumFieldOfView() {
				return this[ag].options.minimumFieldOfView
			}
			getMaximumFieldOfView() {
				return this[ag].options.maximumFieldOfView
			}
			getIdealAspect() {
				return this[ed].idealAspect
			}
			jumpCameraToGoal() {
				this[_g] = !0, this.requestUpdate(_g, !1)
			}
			resetInteractionPrompt() {
				this[yg] = 0, this[vg] = 1 / 0, this[fg] = !1, this[mg] = this.interactionPrompt === Yp && this.cameraControls
			}
			zoom(t) {
				const e = new WheelEvent("wheel", {
					deltaY: -30 * t
				});
				this[Zu].dispatchEvent(e)
			}
			connectedCallback() {
				super.connectedCallback(), this[ag].addEventListener("change", this[pg]), this[ag].addEventListener("pointer-change-start", this[gg]), this[ag].addEventListener("pointer-change-end", this[gg])
			}
			disconnectedCallback() {
				super.disconnectedCallback(), this[ag].removeEventListener("change", this[pg]), this[ag].removeEventListener("pointer-change-start", this[gg]), this[ag].removeEventListener("pointer-change-end", this[gg])
			}
			updated(t) {
				super.updated(t);
				const e = this[ag],
					i = this[ed];
				if(t.has("cameraControls") && (this.cameraControls ? (e.enableInteraction(), this.interactionPrompt === Yp && (this[mg] = !0)) : (e.disableInteraction(), this[ug]()), this[Zu].setAttribute("aria-label", this[Wu])), t.has("disableZoom") && (e.disableZoom = this.disableZoom), t.has("disablePan") && (e.enablePan = !this.disablePan), t.has("disableTap") && (e.enableTap = !this.disableTap), (t.has("interactionPrompt") || t.has("cameraControls") || t.has("src")) && (this.interactionPrompt === Yp && this.cameraControls && !this[fg] ? this[mg] = !0 : this[ug]()), t.has("touchAction")) {
					const t = this.touchAction;
					e.applyOptions({
						touchAction: t
					}), e.updateTouchActionStyle()
				}
				t.has("orbitSensitivity") && (e.orbitSensitivity = this.orbitSensitivity), t.has("interpolationDecay") && (e.setDamperDecayTime(this.interpolationDecay), i.setTargetDamperDecayTime(this.interpolationDecay)), !0 === this[_g] && Promise.resolve().then((() => {
					e.jumpToGoal(), i.jumpToGoal(), this[_g] = !1
				}))
			}
			async updateFraming() {
				const t = this[ed],
					e = t.adjustedFoV(t.framedFoVDeg);
				await t.updateFraming();
				const i = t.adjustedFoV(t.framedFoVDeg),
					n = this[ag].getFieldOfView() / e;
				this[ag].setFieldOfView(i * n), this[wg] = !0, this.requestUpdate("maxFieldOfView"), this.requestUpdate("fieldOfView"), this.requestUpdate("minCameraOrbit"), this.requestUpdate("maxCameraOrbit"), this.requestUpdate("cameraOrbit"), await this.updateComplete
			}
			interact(t, e, i) {
				const n = this[Zu],
					s = this[hg];
				if("1" === s[0].style.opacity) return void console.warn("interact() failed because an existing interaction is running.");
				const r = new Array;
				r.push({
					x: Hp(e.x),
					y: Hp(e.y)
				});
				const a = [{
					x: r[0].x(0),
					y: r[0].y(0)
				}];
				null != i && (r.push({
					x: Hp(i.x),
					y: Hp(i.y)
				}), a.push({
					x: r[1].x(0),
					y: r[1].y(0)
				}));
				let o = performance.now();
				const {
					width: l,
					height: c
				} = this[ed], h = t => {
					for(const [e, i] of a.entries()) {
						const {
							style: r
						} = s[e];
						r.transform = `translateX(${l*i.x}px) translateY(${c*i.y}px)`, "pointerdown" === t ? r.opacity = "1" : "pointerup" === t && (r.opacity = "0");
						const a = {
							pointerId: e - 5678,
							pointerType: "touch",
							target: n,
							clientX: l * i.x,
							clientY: c * i.y,
							altKey: !0
						};
						n.dispatchEvent(new PointerEvent(t, a))
					}
				}, u = () => {
					const {
						changeSource: e
					} = this[ag];
					if(e !== Np) {
						for(const t of this[hg]) t.style.opacity = "0";
						return h("pointercancel"), void this.dispatchEvent(new CustomEvent("interact-stopped", {
							detail: {
								source: e
							}
						}))
					}
					const i = Math.min(1, (performance.now() - o) / t);
					for(const [t, e] of a.entries()) e.x = r[t].x(i), e.y = r[t].y(i);
					h("pointermove"), i < 1 ? requestAnimationFrame(u) : (h("pointerup"), this.dispatchEvent(new CustomEvent("interact-stopped", {
						detail: {
							source: e
						}
					})), document.removeEventListener("visibilitychange", d))
				}, d = () => {
					let t = 0;
					"hidden" === document.visibilityState ? t = performance.now() - o : o = performance.now() - t
				};
				document.addEventListener("visibilitychange", d), h("pointerdown"), requestAnimationFrame(u)
			}[(i = lg, n = cg, s = hg, r = og, a = yg, o = vg, l = fg, c = mg, h = ag, u = xg, d = _g, A = Eg, p = wg, Ig)](t) {
				const e = this[ed];
				e.framedFoVDeg = 180 * t[0] / Math.PI, this[ag].setFieldOfView(e.adjustedFoV(e.framedFoVDeg))
			}[bg](t) {
				const e = this[ag];
				if(this[wg]) {
					const {
						theta: e,
						phi: i
					} = this.getCameraOrbit();
					t[0] = e, t[1] = i, this[wg] = !1
				}
				e.changeSource = Up, e.setOrbit(t[0], t[1], t[2])
			}[Sg](t) {
				this[ag].applyOptions({
					minimumAzimuthalAngle: t[0],
					minimumPolarAngle: t[1],
					minimumRadius: t[2]
				}), this.jumpCameraToGoal()
			}[Mg](t) {
				this[ag].applyOptions({
					maximumAzimuthalAngle: t[0],
					maximumPolarAngle: t[1],
					maximumRadius: t[2]
				}), this[Ag](t[2]), this.jumpCameraToGoal()
			}[Bg](t) {
				this[ag].applyOptions({
					minimumFieldOfView: 180 * t[0] / Math.PI
				}), this.jumpCameraToGoal()
			}[Tg](t) {
				const e = this[ed].adjustedFoV(180 * t[0] / Math.PI);
				this[ag].applyOptions({
					maximumFieldOfView: e
				}), this.jumpCameraToGoal()
			}[Cg](t) {
				const [e, i, n] = t;
				this[ad].arRenderer.isPresenting || this[ed].setTarget(e, i, n), this[ag].changeSource = Up, this[ad].arRenderer.updateTarget()
			}[nd](t, e) {
				if(super[nd](t, e), this[ad].isPresenting || !this[cd]()) return;
				const i = this[ag],
					n = this[ed],
					s = performance.now();
				if(this[mg] && this.loaded && s > this[Ju] + this.interactionPromptThreshold && (this[mg] = !1, this[vg] = s, this[lg].classList.add("visible")), isFinite(this[vg])) {
					const t = (s - this[vg]) / 5e3 % 1,
						e = Vp(t),
						r = Wp(t);
					if(this[cg].style.opacity = `${r}`, e !== this[yg]) {
						const t = e * n.width * .05,
							s = (e - this[yg]) * Math.PI / 16;
						this[cg].style.transform = `translateX(${t}px)`, i.changeSource = Np, i.adjustOrbit(s, 0, 0), this[yg] = e
					}
				}
				i.update(t, e), n.updateTarget(e) && this[pg]({
					type: "change",
					source: i.changeSource
				})
			}[ug]() {
				this[mg] = !1, this[lg].classList.remove("visible"), this[vg] = 1 / 0
			}[Ag](t) {
				const e = 2 * Math.max(this[ed].boundingSphere.radius, t);
				this[ag].updateNearFar(0, e)
			}[dg]() {
				const {
					theta: t,
					phi: e
				} = this[ag].getCameraSpherical(this[xg]), i = (4 + Math.floor((t % rg + sg) / ig)) % 4, n = Math.floor(e / ng), s = qp[i], r = jp[n];
				this[Yu](`View from stage ${r}${s}`)
			}
			get[Wu]() {
				return super[Wu] + (this.cameraControls ? ". Use mouse, touch or arrow keys to move." : "")
			}
			async [rd](t) {
				const e = this[ag],
					i = this[ed],
					n = i.adjustedFoV(i.framedFoVDeg);
				super[rd](t);
				const s = i.adjustedFoV(i.framedFoVDeg) / n,
					r = e.getFieldOfView() * (isFinite(s) ? s : 1);
				e.updateAspect(this[ed].aspect), this.requestUpdate("maxFieldOfView", this.maxFieldOfView), await this.updateComplete, this[ag].setFieldOfView(r), this.jumpCameraToGoal()
			}[sd]() {
				super[sd](), this[Eg] ? this[wg] = !0 : this[Eg] = !0, this.requestUpdate("maxFieldOfView", this.maxFieldOfView), this.requestUpdate("fieldOfView", this.fieldOfView), this.requestUpdate("minCameraOrbit", this.minCameraOrbit), this.requestUpdate("maxCameraOrbit", this.maxCameraOrbit), this.requestUpdate("cameraOrbit", this.cameraOrbit), this.requestUpdate("cameraTarget", this.cameraTarget), this.jumpCameraToGoal()
			}
		}
		return g = pg, m = gg, zp([e({
			type: Boolean,
			attribute: "camera-controls"
		})], f.prototype, "cameraControls", void 0), zp([Rp({
			intrinsics: $p,
			observeEffects: !0,
			updateHandler: bg
		}), e({
			type: String,
			attribute: "camera-orbit",
			hasChanged: () => !0
		})], f.prototype, "cameraOrbit", void 0), zp([Rp({
			intrinsics: eg,
			observeEffects: !0,
			updateHandler: Cg
		}), e({
			type: String,
			attribute: "camera-target",
			hasChanged: () => !0
		})], f.prototype, "cameraTarget", void 0), zp([Rp({
			intrinsics: Xp,
			observeEffects: !0,
			updateHandler: Ig
		}), e({
			type: String,
			attribute: "field-of-view",
			hasChanged: () => !0
		})], f.prototype, "fieldOfView", void 0), zp([Rp({
			intrinsics: Zp,
			updateHandler: Sg
		}), e({
			type: String,
			attribute: "min-camera-orbit",
			hasChanged: () => !0
		})], f.prototype, "minCameraOrbit", void 0), zp([Rp({
			intrinsics: tg,
			updateHandler: Mg
		}), e({
			type: String,
			attribute: "max-camera-orbit",
			hasChanged: () => !0
		})], f.prototype, "maxCameraOrbit", void 0), zp([Rp({
			intrinsics: Kp,
			updateHandler: Bg
		}), e({
			type: String,
			attribute: "min-field-of-view",
			hasChanged: () => !0
		})], f.prototype, "minFieldOfView", void 0), zp([Rp({
			intrinsics: Xp,
			updateHandler: Tg
		}), e({
			type: String,
			attribute: "max-field-of-view",
			hasChanged: () => !0
		})], f.prototype, "maxFieldOfView", void 0), zp([e({
			type: Number,
			attribute: "interaction-prompt-threshold"
		})], f.prototype, "interactionPromptThreshold", void 0), zp([e({
			type: String,
			attribute: "interaction-prompt"
		})], f.prototype, "interactionPrompt", void 0), zp([e({
			type: Number,
			attribute: "orbit-sensitivity"
		})], f.prototype, "orbitSensitivity", void 0), zp([e({
			type: String,
			attribute: "touch-action"
		})], f.prototype, "touchAction", void 0), zp([e({
			type: Boolean,
			attribute: "disable-zoom"
		})], f.prototype, "disableZoom", void 0), zp([e({
			type: Boolean,
			attribute: "disable-pan"
		})], f.prototype, "disablePan", void 0), zp([e({
			type: Boolean,
			attribute: "disable-tap"
		})], f.prototype, "disableTap", void 0), zp([e({
			type: Number,
			attribute: "interpolation-decay"
		})], f.prototype, "interpolationDecay", void 0), f
	})((t => {
		var i, n, s, r, a, o, l, c, h, u;
		class d extends t {
			constructor() {
				super(...arguments), this.ar = !1, this.arScale = "auto", this.arPlacement = "floor", this.arModes = "webxr scene-viewer quick-look", this.iosSrc = null, this.xrEnvironment = !1, this[i] = !1, this[n] = this.shadowRoot.querySelector(".ar-button"), this[s] = document.createElement("a"), this[r] = new Set, this[a] = DA, this[o] = !1, this[l] = t => {
					t.preventDefault(), this.activateAR()
				}, this[c] = ({
					status: t
				}) => {
					t !== Rh && this[ad].arRenderer.presentedScene !== this[ed] || (this.setAttribute("ar-status", t), this.dispatchEvent(new CustomEvent("ar-status", {
						detail: {
							status: t
						}
					})), t === Rh ? this.removeAttribute("ar-tracking") : t === Dh && this.setAttribute("ar-tracking", Ph))
				}, this[h] = ({
					status: t
				}) => {
					this.setAttribute("ar-tracking", t), this.dispatchEvent(new CustomEvent("ar-tracking", {
						detail: {
							status: t
						}
					}))
				}, this[u] = t => {
					"_apple_ar_quicklook_button_tapped" == t.data && this.dispatchEvent(new CustomEvent("quick-look-button-tapped"))
				}
			}
			get canActivateAR() {
				return this[NA] !== DA
			}
			connectedCallback() {
				super.connectedCallback(), this[ad].arRenderer.addEventListener("status", this[zA]), this.setAttribute("ar-status", Rh), this[ad].arRenderer.addEventListener("tracking", this[VA]), this[OA].addEventListener("message", this[WA])
			}
			disconnectedCallback() {
				super.disconnectedCallback(), this[ad].arRenderer.removeEventListener("status", this[zA]), this[ad].arRenderer.removeEventListener("tracking", this[VA]), this[OA].removeEventListener("message", this[WA])
			}
			update(t) {
				super.update(t), t.has("arScale") && (this[ed].canScale = "fixed" !== this.arScale), t.has("arPlacement") && (this[ed].updateShadow(), this[id]()), t.has("arModes") && (this[kA] = SA(this.arModes)), (t.has("ar") || t.has("arModes") || t.has("src") || t.has("iosSrc")) && this[qA]()
			}
			async activateAR() {
				switch(this[NA]) {
					case BA:
						this[FA]();
						break;
					case RA:
						await this[QA]();
						break;
					case TA:
						this[PA]();
						break;
					default:
						console.warn("No AR Mode can be activated. This is probably due to missing configuration or device capabilities")
				}
			}
			async [(i = UA, n = LA, s = OA, r = kA, a = NA, o = GA, l = HA, c = zA, h = VA, u = WA, qA)]() {
				let t = DA;
				if(this.ar) {
					if(null != this.src)
						for(const e of this[kA]) {
							if("webxr" === e && Do && !IA && await this[ad].arRenderer.supportsPresentation()) {
								t = RA;
								break
							}
							if("scene-viewer" === e && Uo && !CA) {
								t = TA;
								break
							}
							if("quick-look" === e && ko) {
								t = BA;
								break
							}
						}
					t === DA && null != this.iosSrc && ko && (t = BA)
				}
				if(t !== DA) this[LA].classList.add("enabled"), this[LA].addEventListener("click", this[HA]);
				else if(this[LA].classList.contains("enabled")) {
					this[LA].removeEventListener("click", this[HA]), this[LA].classList.remove("enabled");
					const t = Qh;
					this.setAttribute("ar-status", t), this.dispatchEvent(new CustomEvent("ar-status", {
						detail: {
							status: t
						}
					}))
				}
				this[NA] = t
			}
			async [QA]() {
				console.log("Attempting to present in AR with WebXR..."), await this[jA]();
				try {
					this[LA].removeEventListener("click", this[HA]);
					const {
						arRenderer: t
					} = this[ad];
					t.placeOnWall = "wall" === this.arPlacement, await t.present(this[ed], this.xrEnvironment)
				} catch(t) {
					console.warn("Error while trying to present in AR with WebXR"), console.error(t), await this[ad].arRenderer.stopPresenting(), IA = !0, console.warn("Falling back to next ar-mode"), await this[qA](), this.activateAR()
				} finally {
					this[qA]()
				}
			}
			async [jA]() {
				this.loaded || (this[GA] = !0, this[Xu](), await ((t, e, i = null) => new Promise((n => {
					t.addEventListener(e, (function s(r) {
						i && !i(r) || (n(r), t.removeEventListener(e, s))
					}))
				})))(this, "load"), this[GA] = !1)
			}[hd]() {
				return super[hd]() || this[GA]
			}[PA]() {
				const t = self.location.toString(),
					e = new URL(t),
					i = new URL(this.src, t),
					n = new URLSearchParams(i.search);
				if(e.hash = "#model-viewer-no-ar-fallback", n.set("mode", "ar_preferred"), n.has("disable_occlusion") || n.set("disable_occlusion", "true"), "fixed" === this.arScale && n.set("resizable", "false"), "wall" === this.arPlacement && n.set("enable_vertical_placement", "true"), n.has("sound")) {
					const e = new URL(n.get("sound"), t);
					n.set("sound", e.toString())
				}
				if(n.has("link")) {
					const e = new URL(n.get("link"), t);
					n.set("link", e.toString())
				}
				const s = `intent://arvr.google.com/scene-viewer/1.0?${n.toString()+"&file="+encodeURIComponent(i.toString())}#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(e.toString())};end;`;
				self.addEventListener("hashchange", (() => {
					"#model-viewer-no-ar-fallback" === self.location.hash && (CA = !0, self.history.back(), console.warn("Error while trying to present in AR with Scene Viewer"), console.warn("Falling back to next ar-mode"), this[qA]())
				}), {
					once: !0
				}), this[OA].setAttribute("href", s), console.log("Attempting to present in AR with Scene Viewer..."), this[OA].click()
			}
			async [FA]() {
				const t = !this.iosSrc;
				this[LA].classList.remove("enabled");
				const e = t ? await this.prepareUSDZ() : this.iosSrc,
					i = new URL(e, self.location.toString());
				if(t) {
					const t = self.location.toString(),
						e = new URL(t),
						n = new URL(this.src, e);
					n.hash && (i.hash = n.hash)
				}
				"fixed" === this.arScale && (i.hash && (i.hash += "&"), i.hash += "allowsContentScaling=0");
				const n = this[OA];
				n.setAttribute("rel", "ar");
				const s = document.createElement("img");
				n.appendChild(s), n.setAttribute("href", i.toString()), t && n.setAttribute("download", "model.usdz"), console.log("Attempting to present in AR with Quick Look..."), n.click(), n.removeChild(s), t && URL.revokeObjectURL(e), this[LA].classList.add("enabled")
			}
			async prepareUSDZ() {
				const t = this[od].beginActivity();
				await this[jA]();
				const {
					model: e,
					shadow: i
				} = this[ed];
				if(null == e) return "";
				let n = !1;
				null != i && (n = i.visible, i.visible = !1), t(.2);
				const s = new mA,
					r = await s.parse(e),
					a = new Blob([r], {
						type: "model/vnd.usdz+zip"
					}),
					o = URL.createObjectURL(a);
				return t(1), null != i && (i.visible = n), o
			}
		}
		return bA([e({
			type: Boolean,
			attribute: "ar"
		})], d.prototype, "ar", void 0), bA([e({
			type: String,
			attribute: "ar-scale"
		})], d.prototype, "arScale", void 0), bA([e({
			type: String,
			attribute: "ar-placement"
		})], d.prototype, "arPlacement", void 0), bA([e({
			type: String,
			attribute: "ar-modes"
		})], d.prototype, "arModes", void 0), bA([e({
			type: String,
			attribute: "ios-src"
		})], d.prototype, "iosSrc", void 0), bA([e({
			type: Boolean,
			attribute: "xr-environment"
		})], d.prototype, "xrEnvironment", void 0), d
	})((t => {
		var i, n, s, r, a, o, l, c;
		class h extends t {
			constructor(...t) {
				super(...t), this.poster = null, this.reveal = Dg, this.loading = Lg, this[i] = !1, this[n] = !1, this[s] = this.shadowRoot.querySelector(".slot.poster"), this[r] = this.shadowRoot.querySelector("#default-poster"), this[a] = this.shadowRoot.querySelector("#default-progress-bar > .bar"), this[o] = this[Ug].getAttribute("aria-label"), this[l] = ((t, e) => {
					let i = null;
					const n = (...n) => {
						null == i && (t(...n), i = self.setTimeout((() => i = null), e))
					};
					return n.flush = () => {
						null != i && (self.clearTimeout(i), i = null)
					}, n
				})((t => {
					const e = this[Pg].parentNode;
					requestAnimationFrame((() => {
						this[Pg].style.transform = `scaleX(${t})`, 0 === t && (e.removeChild(this[Pg]), e.appendChild(this[Pg])), 1 === t ? this[Pg].classList.add("hide") : this[Pg].classList.remove("hide")
					}))
				}), 100), this[c] = t => {
					const e = t.detail.totalProgress;
					1 === e && (this[Gg].flush(), this.loaded && (this[Ng] || this.reveal === Dg) && this[kg]()), this[Gg](e), this.dispatchEvent(new CustomEvent("progress", {
						detail: {
							totalProgress: e
						}
					}))
				};
				const e = self.ModelViewerElement || {},
					h = e.dracoDecoderLocation || "https://www.gstatic.com/draco/versioned/decoders/1.4.1/";
				Vc.setDRACODecoderLocation(h);
				const u = e.ktx2TranscoderLocation || "https://www.gstatic.com/basis-universal/versioned/2021-04-15-ba1c3e4/";
				Vc.setKTX2TranscoderLocation(u), e.meshoptDecoderLocation && Vc.setMeshoptDecoderLocation(e.meshoptDecoderLocation)
			}
			static set dracoDecoderLocation(t) {
				Vc.setDRACODecoderLocation(t)
			}
			static get dracoDecoderLocation() {
				return Vc.getDRACODecoderLocation()
			}
			static set ktx2TranscoderLocation(t) {
				Vc.setKTX2TranscoderLocation(t)
			}
			static get ktx2TranscoderLocation() {
				return Vc.getKTX2TranscoderLocation()
			}
			static set meshoptDecoderLocation(t) {
				Vc.setMeshoptDecoderLocation(t)
			}
			static get meshoptDecoderLocation() {
				return Vc.getMeshoptDecoderLocation()
			}
			static mapURLs(t) {
				gu.singleton.loader[Gc].manager.setURLModifier(t)
			}
			dismissPoster() {
				this.loaded ? this[kg]() : (this[Ng] = !0, this[Xu]())
			}
			showPoster() {
				const t = this[Fg];
				if(t.classList.contains("show")) return;
				t.classList.add("show"), this[Zu].classList.remove("show");
				const e = this[Ug];
				e.removeAttribute("tabindex"), e.removeAttribute("aria-hidden");
				const i = this.modelIsVisible;
				this[Og] = !1, this[Vu](i)
			}
			getDimensions() {
				return ud(this[ed].size)
			}
			getBoundingBoxCenter() {
				return ud(this[ed].boundingBox.getCenter(new V))
			}
			connectedCallback() {
				super.connectedCallback(), this.showPoster(), this[od].addEventListener("progress", this[zg])
			}
			disconnectedCallback() {
				super.disconnectedCallback(), this[od].removeEventListener("progress", this[zg])
			}
			async updated(t) {
				super.updated(t), t.has("poster") && null != this.poster && (this[Ug].style.backgroundImage = `url(${this.poster})`), t.has("alt") && this[Ug].setAttribute("aria-label", this[qu]), (t.has("reveal") || t.has("loading")) && this[Xu]()
			}[(i = Og, n = Ng, s = Fg, r = Ug, a = Pg, o = Hg, l = Gg, c = zg, hd)]() {
				return !!this.src && (this[Ng] || this.loading === Qg || this.reveal === Dg && this[zu])
			}[kg]() {
				this[Ng] = !1;
				const t = this[Fg];
				if(!t.classList.contains("show")) return;
				t.classList.remove("show"), this[Zu].classList.add("show");
				const e = this.modelIsVisible;
				this[Og] = !0, this[Vu](e);
				const i = this.getRootNode();
				i && i.activeElement === this && this[Zu].focus();
				const n = this[Ug];
				n.setAttribute("aria-hidden", "true"), n.tabIndex = -1, this.dispatchEvent(new CustomEvent("poster-dismissed"))
			}[cd]() {
				return super[cd]() && this[Og]
			}
		}
		return Rg([e({
			type: String
		})], h.prototype, "poster", void 0), Rg([e({
			type: String
		})], h.prototype, "reveal", void 0), Rg([e({
			type: String
		})], h.prototype, "loading", void 0), h
	})((t => {
		var i;
		class n extends t {
			constructor(...t) {
				super(t), this.autoplay = !1, this.animationName = void 0, this.animationCrossfadeDuration = 300, this[i] = !0, this[ed].subscribeMixerEvent("loop", (t => {
					const e = t.action._loopCount;
					this.dispatchEvent(new CustomEvent("loop", {
						detail: {
							count: e
						}
					}))
				})), this[ed].subscribeMixerEvent("finished", (() => {
					this[md] = !0, this.dispatchEvent(new CustomEvent("finished"))
				}))
			}
			get availableAnimations() {
				return this.loaded ? this[ed].animationNames : []
			}
			get duration() {
				return this[ed].duration
			}
			get paused() {
				return this[md]
			}
			get currentTime() {
				return this[ed].animationTime
			}
			set currentTime(t) {
				this[ed].animationTime = t, this[id]()
			}
			get timeScale() {
				return this[ed].animationTimeScale
			}
			set timeScale(t) {
				this[ed].animationTimeScale = t
			}
			pause() {
				this[md] || (this[md] = !0, this.dispatchEvent(new CustomEvent("pause")))
			}
			play(t) {
				this.availableAnimations.length > 0 && (this[md] = !1, this[gd](t), this.dispatchEvent(new CustomEvent("play")))
			}[(i = md, sd)]() {
				super[sd](), this[md] = !0, this.autoplay && this.play()
			}[nd](t, e) {
				super[nd](t, e), this[md] || !this[cd]() && !this[ad].isPresenting || (this[ed].updateAnimation(e / 1e3), this[id]())
			}
			updated(t) {
				super.updated(t), t.has("autoplay") && this.autoplay && this.play(), t.has("animationName") && this[gd]()
			}[gd](t = fd) {
				var e;
				const i = null !== (e = t.repetitions) && void 0 !== e ? e : 1 / 0,
					n = t.pingpong ? 2202 : 1 === i ? 2200 : 2201;
				this[ed].playAnimation(this.animationName, this.animationCrossfadeDuration / 1e3, n, i), this[md] && (this[ed].updateAnimation(0), this[id]())
			}
		}
		return pd([e({
			type: Boolean
		})], n.prototype, "autoplay", void 0), pd([e({
			type: String,
			attribute: "animation-name"
		})], n.prototype, "animationName", void 0), pd([e({
			type: Number,
			attribute: "animation-crossfade-duration"
		})], n.prototype, "animationCrossfadeDuration", void 0), n
	})((t => {
		var e;
		const i = Symbol("endPolyfillCoordination");
		return e = i, class extends t {
			constructor() {
				super(...arguments), this[e] = null
			}
			connectedCallback() {
				super.connectedCallback && super.connectedCallback(), null == this[i] && (this[i] = (t => {
					if(null == t.shadowRoot || t.hasAttribute("data-js-focus-visible")) return() => {};
					if(!self.applyFocusVisiblePolyfill) {
						const e = () => {
							self.applyFocusVisiblePolyfill(t.shadowRoot)
						};
						return self.addEventListener("focus-visible-polyfill-ready", e, {
							once: !0
						}), () => {
							self.removeEventListener("focus-visible-polyfill-ready", e)
						}
					}
					return self.applyFocusVisiblePolyfill(t.shadowRoot), () => {}
				})(this))
			}
			disconnectedCallback() {
				super.disconnectedCallback && super.disconnectedCallback(), null != this[i] && (this[i](), this[i] = null)
			}
		}
	})(Ad)))))))));
customElements.define("model-viewer", xv);
export {
	xv as ModelViewerElement
};
//# sourceMappingURL=model-viewer.min.js.map