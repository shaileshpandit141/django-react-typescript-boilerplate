(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([
  [413],
  {
    1413: (o, e, l) => {
      l.r(e), l.d(e, { default: () => t });
      var i = l(1338),
        n = l(6723);
      const t = (0, i.A)(
        (0, n.jsx)("path", {
          d: "M11.71 17.99C8.53 17.84 6 15.22 6 12c0-3.31 2.69-6 6-6 3.22 0 5.84 2.53 5.99 5.71l-2.1-.63C15.48 9.31 13.89 8 12 8c-2.21 0-4 1.79-4 4 0 1.89 1.31 3.48 3.08 3.89zM22 12c0 .3-.01.6-.04.9l-1.97-.59c.01-.1.01-.21.01-.31 0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8c.1 0 .21 0 .31-.01l.59 1.97c-.3.03-.6.04-.9.04-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10m-3.77 4.26 2.27-.76c.46-.15.45-.81-.01-.95l-7.6-2.28c-.38-.11-.74.24-.62.62l2.28 7.6c.14.47.8.48.95.01l.76-2.27 3.91 3.91c.2.2.51.2.71 0l1.27-1.27c.2-.2.2-.51 0-.71z",
        }),
        "AdsClickRounded",
      );
    },
    1338: (o, e, l) => {
      l.d(e, { A: () => y });
      var i = l(9379),
        n = l(2483),
        t = l(3986),
        r = l(9765),
        c = l(7266),
        s = l(1251),
        a = l(7927),
        d = l(6751),
        v = l(6518),
        u = l(292),
        p = l(1431);
      function f(o) {
        return (0, p.Ay)("MuiSvgIcon", o);
      }
      (0, u.A)("MuiSvgIcon", [
        "root",
        "colorPrimary",
        "colorSecondary",
        "colorAction",
        "colorError",
        "colorDisabled",
        "fontSizeInherit",
        "fontSizeSmall",
        "fontSizeMedium",
        "fontSizeLarge",
      ]);
      var m = l(6723);
      const h = [
          "children",
          "className",
          "color",
          "component",
          "fontSize",
          "htmlColor",
          "inheritViewBox",
          "titleAccess",
          "viewBox",
        ],
        S = (0, a.Ay)("svg", {
          name: "MuiSvgIcon",
          slot: "Root",
          overridesResolver: (o, e) => {
            const { ownerState: l } = o;
            return [
              e.root,
              "inherit" !== l.color && e["color".concat((0, s.A)(l.color))],
              e["fontSize".concat((0, s.A)(l.fontSize))],
            ];
          },
        })(
          (0, d.A)((o) => {
            var e, l, i, n, t, r, c, s, a, d, v, u, p, f, m;
            let { theme: h } = o;
            return {
              userSelect: "none",
              width: "1em",
              height: "1em",
              display: "inline-block",
              flexShrink: 0,
              transition:
                null === (e = h.transitions) ||
                void 0 === e ||
                null === (l = e.create) ||
                void 0 === l
                  ? void 0
                  : l.call(e, "fill", {
                      duration:
                        null ===
                          (i = (null !== (n = h.vars) && void 0 !== n ? n : h)
                            .transitions) ||
                        void 0 === i ||
                        null === (i = i.duration) ||
                        void 0 === i
                          ? void 0
                          : i.shorter,
                    }),
              variants: [
                {
                  props: (o) => !o.hasSvgAsChild,
                  style: { fill: "currentColor" },
                },
                {
                  props: { fontSize: "inherit" },
                  style: { fontSize: "inherit" },
                },
                {
                  props: { fontSize: "small" },
                  style: {
                    fontSize:
                      (null === (t = h.typography) ||
                      void 0 === t ||
                      null === (r = t.pxToRem) ||
                      void 0 === r
                        ? void 0
                        : r.call(t, 20)) || "1.25rem",
                  },
                },
                {
                  props: { fontSize: "medium" },
                  style: {
                    fontSize:
                      (null === (c = h.typography) ||
                      void 0 === c ||
                      null === (s = c.pxToRem) ||
                      void 0 === s
                        ? void 0
                        : s.call(c, 24)) || "1.5rem",
                  },
                },
                {
                  props: { fontSize: "large" },
                  style: {
                    fontSize:
                      (null === (a = h.typography) ||
                      void 0 === a ||
                      null === (d = a.pxToRem) ||
                      void 0 === d
                        ? void 0
                        : d.call(a, 35)) || "2.1875rem",
                  },
                },
                ...Object.entries(
                  (null !== (v = h.vars) && void 0 !== v ? v : h).palette,
                )
                  .filter((o) => {
                    let [, e] = o;
                    return e && e.main;
                  })
                  .map((o) => {
                    var e, l;
                    let [i] = o;
                    return {
                      props: { color: i },
                      style: {
                        color:
                          null ===
                            (e = (null !== (l = h.vars) && void 0 !== l ? l : h)
                              .palette) ||
                          void 0 === e ||
                          null === (e = e[i]) ||
                          void 0 === e
                            ? void 0
                            : e.main,
                      },
                    };
                  }),
                {
                  props: { color: "action" },
                  style: {
                    color:
                      null ===
                        (u = (null !== (p = h.vars) && void 0 !== p ? p : h)
                          .palette) ||
                      void 0 === u ||
                      null === (u = u.action) ||
                      void 0 === u
                        ? void 0
                        : u.active,
                  },
                },
                {
                  props: { color: "disabled" },
                  style: {
                    color:
                      null ===
                        (f = (null !== (m = h.vars) && void 0 !== m ? m : h)
                          .palette) ||
                      void 0 === f ||
                      null === (f = f.action) ||
                      void 0 === f
                        ? void 0
                        : f.disabled,
                  },
                },
                { props: { color: "inherit" }, style: { color: void 0 } },
              ],
            };
          }),
        ),
        A = n.forwardRef(function (o, e) {
          const l = (0, v.b)({ props: o, name: "MuiSvgIcon" }),
            {
              children: a,
              className: d,
              color: u = "inherit",
              component: p = "svg",
              fontSize: A = "medium",
              htmlColor: z,
              inheritViewBox: y = !1,
              titleAccess: g,
              viewBox: x = "0 0 24 24",
            } = l,
            w = (0, t.A)(l, h),
            C = n.isValidElement(a) && "svg" === a.type,
            b = (0, i.A)(
              (0, i.A)({}, l),
              {},
              {
                color: u,
                component: p,
                fontSize: A,
                instanceFontSize: o.fontSize,
                inheritViewBox: y,
                viewBox: x,
                hasSvgAsChild: C,
              },
            ),
            R = {};
          y || (R.viewBox = x);
          const k = ((o) => {
            const { color: e, fontSize: l, classes: i } = o,
              n = {
                root: [
                  "root",
                  "inherit" !== e && "color".concat((0, s.A)(e)),
                  "fontSize".concat((0, s.A)(l)),
                ],
              };
            return (0, c.A)(n, f, i);
          })(b);
          return (0, m.jsxs)(
            S,
            (0, i.A)(
              (0, i.A)(
                (0, i.A)(
                  (0, i.A)(
                    {
                      as: p,
                      className: (0, r.A)(k.root, d),
                      focusable: "false",
                      color: z,
                      "aria-hidden": !g || void 0,
                      role: g ? "img" : void 0,
                      ref: e,
                    },
                    R,
                  ),
                  w,
                ),
                C && a.props,
              ),
              {},
              {
                ownerState: b,
                children: [
                  C ? a.props.children : a,
                  g ? (0, m.jsx)("title", { children: g }) : null,
                ],
              },
            ),
          );
        });
      A.muiName = "SvgIcon";
      const z = A;
      function y(o, e) {
        function l(l, n) {
          return (0, m.jsx)(
            z,
            (0, i.A)(
              (0, i.A)({ "data-testid": "".concat(e, "Icon"), ref: n }, l),
              {},
              { children: o },
            ),
          );
        }
        return (l.muiName = z.muiName), n.memo(n.forwardRef(l));
      }
    },
  },
]);
//# sourceMappingURL=413.7e3ee330.chunk.js.map
