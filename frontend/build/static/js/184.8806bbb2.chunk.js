(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([
  [184],
  {
    1184: (o, e, i) => {
      i.r(e), i.d(e, { default: () => t });
      var n = i(1338),
        l = i(6723);
      const t = (0, n.A)(
        (0, l.jsx)("path", {
          d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4",
        }),
        "PersonRounded",
      );
    },
    1338: (o, e, i) => {
      i.d(e, { A: () => z });
      var n = i(9379),
        l = i(2483),
        t = i(3986),
        r = i(9765),
        c = i(7266),
        s = i(1251),
        a = i(7927),
        d = i(6751),
        v = i(6518),
        u = i(292),
        p = i(1431);
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
      var m = i(6723);
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
            const { ownerState: i } = o;
            return [
              e.root,
              "inherit" !== i.color && e["color".concat((0, s.A)(i.color))],
              e["fontSize".concat((0, s.A)(i.fontSize))],
            ];
          },
        })(
          (0, d.A)((o) => {
            var e, i, n, l, t, r, c, s, a, d, v, u, p, f, m;
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
                null === (i = e.create) ||
                void 0 === i
                  ? void 0
                  : i.call(e, "fill", {
                      duration:
                        null ===
                          (n = (null !== (l = h.vars) && void 0 !== l ? l : h)
                            .transitions) ||
                        void 0 === n ||
                        null === (n = n.duration) ||
                        void 0 === n
                          ? void 0
                          : n.shorter,
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
                    var e, i;
                    let [n] = o;
                    return {
                      props: { color: n },
                      style: {
                        color:
                          null ===
                            (e = (null !== (i = h.vars) && void 0 !== i ? i : h)
                              .palette) ||
                          void 0 === e ||
                          null === (e = e[n]) ||
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
        A = l.forwardRef(function (o, e) {
          const i = (0, v.b)({ props: o, name: "MuiSvgIcon" }),
            {
              children: a,
              className: d,
              color: u = "inherit",
              component: p = "svg",
              fontSize: A = "medium",
              htmlColor: y,
              inheritViewBox: z = !1,
              titleAccess: g,
              viewBox: x = "0 0 24 24",
            } = i,
            w = (0, t.A)(i, h),
            b = l.isValidElement(a) && "svg" === a.type,
            R = (0, n.A)(
              (0, n.A)({}, i),
              {},
              {
                color: u,
                component: p,
                fontSize: A,
                instanceFontSize: o.fontSize,
                inheritViewBox: z,
                viewBox: x,
                hasSvgAsChild: b,
              },
            ),
            B = {};
          z || (B.viewBox = x);
          const C = ((o) => {
            const { color: e, fontSize: i, classes: n } = o,
              l = {
                root: [
                  "root",
                  "inherit" !== e && "color".concat((0, s.A)(e)),
                  "fontSize".concat((0, s.A)(i)),
                ],
              };
            return (0, c.A)(l, f, n);
          })(R);
          return (0, m.jsxs)(
            S,
            (0, n.A)(
              (0, n.A)(
                (0, n.A)(
                  (0, n.A)(
                    {
                      as: p,
                      className: (0, r.A)(C.root, d),
                      focusable: "false",
                      color: y,
                      "aria-hidden": !g || void 0,
                      role: g ? "img" : void 0,
                      ref: e,
                    },
                    B,
                  ),
                  w,
                ),
                b && a.props,
              ),
              {},
              {
                ownerState: R,
                children: [
                  b ? a.props.children : a,
                  g ? (0, m.jsx)("title", { children: g }) : null,
                ],
              },
            ),
          );
        });
      A.muiName = "SvgIcon";
      const y = A;
      function z(o, e) {
        function i(i, l) {
          return (0, m.jsx)(
            y,
            (0, n.A)(
              (0, n.A)({ "data-testid": "".concat(e, "Icon"), ref: l }, i),
              {},
              { children: o },
            ),
          );
        }
        return (i.muiName = y.muiName), l.memo(l.forwardRef(i));
      }
    },
  },
]);
//# sourceMappingURL=184.8806bbb2.chunk.js.map
