(self.webpackChunkfrontend = self.webpackChunkfrontend || []).push([
  [535],
  {
    4535: (o, e, i) => {
      i.r(e), i.d(e, { default: () => t });
      var l = i(1338),
        n = i(6723);
      const t = (0, l.A)(
        (0, n.jsx)("path", {
          d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3",
        }),
        "RemoveRedEyeRounded",
      );
    },
    1338: (o, e, i) => {
      i.d(e, { A: () => z });
      var l = i(9379),
        n = i(2483),
        t = i(3986),
        r = i(9765),
        c = i(7266),
        s = i(1251),
        a = i(7927),
        d = i(6751),
        v = i(6518),
        u = i(292),
        p = i(1431);
      function m(o) {
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
      var f = i(6723);
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
            var e, i, l, n, t, r, c, s, a, d, v, u, p, m, f;
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
                          (l = (null !== (n = h.vars) && void 0 !== n ? n : h)
                            .transitions) ||
                        void 0 === l ||
                        null === (l = l.duration) ||
                        void 0 === l
                          ? void 0
                          : l.shorter,
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
                    let [l] = o;
                    return {
                      props: { color: l },
                      style: {
                        color:
                          null ===
                            (e = (null !== (i = h.vars) && void 0 !== i ? i : h)
                              .palette) ||
                          void 0 === e ||
                          null === (e = e[l]) ||
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
                        (m = (null !== (f = h.vars) && void 0 !== f ? f : h)
                          .palette) ||
                      void 0 === m ||
                      null === (m = m.action) ||
                      void 0 === m
                        ? void 0
                        : m.disabled,
                  },
                },
                { props: { color: "inherit" }, style: { color: void 0 } },
              ],
            };
          }),
        ),
        A = n.forwardRef(function (o, e) {
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
            R = n.isValidElement(a) && "svg" === a.type,
            b = (0, l.A)(
              (0, l.A)({}, i),
              {},
              {
                color: u,
                component: p,
                fontSize: A,
                instanceFontSize: o.fontSize,
                inheritViewBox: z,
                viewBox: x,
                hasSvgAsChild: R,
              },
            ),
            C = {};
          z || (C.viewBox = x);
          const B = ((o) => {
            const { color: e, fontSize: i, classes: l } = o,
              n = {
                root: [
                  "root",
                  "inherit" !== e && "color".concat((0, s.A)(e)),
                  "fontSize".concat((0, s.A)(i)),
                ],
              };
            return (0, c.A)(n, m, l);
          })(b);
          return (0, f.jsxs)(
            S,
            (0, l.A)(
              (0, l.A)(
                (0, l.A)(
                  (0, l.A)(
                    {
                      as: p,
                      className: (0, r.A)(B.root, d),
                      focusable: "false",
                      color: y,
                      "aria-hidden": !g || void 0,
                      role: g ? "img" : void 0,
                      ref: e,
                    },
                    C,
                  ),
                  w,
                ),
                R && a.props,
              ),
              {},
              {
                ownerState: b,
                children: [
                  R ? a.props.children : a,
                  g ? (0, f.jsx)("title", { children: g }) : null,
                ],
              },
            ),
          );
        });
      A.muiName = "SvgIcon";
      const y = A;
      function z(o, e) {
        function i(i, n) {
          return (0, f.jsx)(
            y,
            (0, l.A)(
              (0, l.A)({ "data-testid": "".concat(e, "Icon"), ref: n }, i),
              {},
              { children: o },
            ),
          );
        }
        return (i.muiName = y.muiName), n.memo(n.forwardRef(i));
      }
    },
  },
]);
//# sourceMappingURL=535.0c9fde12.chunk.js.map
