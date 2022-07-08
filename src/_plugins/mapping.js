! function (t) {
	t.fn.mapping = function (e) {
		var i = t.extend({}, {}, e),
			n = {
				selector: t(this),
				department: "",
				destination: "",
				from: function (e) {
					try {
						return this.department = t(e), this
					} catch (t) {}
				},
				to: function (e) {
					try {
						return this.destination = t(e), this
					} catch (t) {}
				},
				use: function (t) {
					try {
						switch (t) {
							case "appendTo":
								this.department.appendTo(this.destination);
								break;
							case "prependTo":
								this.department.prependTo(this.destination);
								break;
							case "insertAfter":
								this.department.insertAfter(this.destination);
								break;
							case "insertBefore":
								this.department.insertBefore(this.destination)
						}
					} catch (t) {}
				}
			};
		return this.switch = function (t) {
			t.matches ? n.from(n.selector).to(i.mobileWrapper).use(i.mobileMethod) : n.from(n.selector).to(i.desktopWrapper).use(i.desktopMethod)
		}, this.initialize = function () {
			var t = window.matchMedia("(max-width: " + i.breakpoint + "px)");
			return this.switch(t), t.addListener(this.switch), this
		}, this.initialize()
	}
}(jQuery);

// $('selector').mapping({
//     mobileWrapper: '.header .mobile-wrapper',
//     mobileMethod: 'appendTo',
//     desktopWrapper: '.header .desktop-wrapper',
//     desktopMethod: 'appendTo',
//     breakpoint: 1025
// })
! function (e, t) {
	"function" == typeof define && define.amd ? define([], function () {
		return t(e)
	}) : "object" == typeof exports ? module.exports = t(e) : e.MappingListener = t(e)
}("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, function (e) {
	"use strict";
	var t;
	t = {
		breakpoint: 1025
	};
	var n = function () {
		var e = {},
			t = !1,
			o = 0;
		"[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], o++);
		for (var i = function (o) {
				for (var i in o) o.hasOwnProperty(i) && (t && "[object Object]" === Object.prototype.toString.call(o[i]) ? e[i] = n(e[i], o[i]) : e[i] = o[i])
			}; o < arguments.length; o++) i(arguments[o]);
		return e
	};
	return function (o) {
		var i, r = {
			switch: function () {
				e.matchMedia("(min-width:" + i.breakpoint + "px)").matches ? Mapping.mapElements.from(i.selector).to(i.desktopWrapper).use(i.desktopMethod) : Mapping.mapElements.from(i.selector).to(i.mobileWrapper).use(i.mobileMethod)
			},
			watch: function () {
				this.switch(), e.matchMedia("(min-width:" + i.breakpoint + "px)").addListener(r.switch)
			},
			init: function (e) {
				i = function (e) {
					switch (e.breakpoint) {
						case "sm":
							e.breakpoint = 576;
							break;
						case "md":
							e.breakpoint = 768;
							break;
						case "lg":
							e.breakpoint = 1025;
							break;
						case "xl":
							e.breakpoint = 1200
					}
					return e
				}(i = n(t, e || {}))
			}
		};
		return r.init(o), r
	}
});