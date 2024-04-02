import nodecrypto from "crypto";

// v86 uses require and process to check whether we're in a Node.js environment, but our dependent may polyfill them in the browser. Override them to undefined
var require = undefined;
var process = undefined;

// Don't polyfill the global object, so pretend we're not in a browser
var window = undefined;

// Pretend we are using CJS modules despite using ESM (our dependent's bundlers may not support CJS)
var module = { exports: {} };
export default module.exports;

// v86 attempts to import Node.js crypto if we're not in a browser, but dynamic imports are bad. Provide a browser-like mock instead
var crypto = {
  getRandomValues: function (array) {
    const view = new Uint8Array(array.buffer);
    nodecrypto.randomFillSync(view);
  },
};


// The following code is taken from v86. https://github.com/copy/v86/releases
//
// Its copyright notice is included below.
//
//
// Copyright (c) 2012, The v86 contributors
// All rights reserved.
// 
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
// 
// 1. Redistributions of source code must retain the above copyright notice, this
//    list of conditions and the following disclaimer.
// 2. Redistributions in binary form must reproduce the above copyright notice,
//    this list of conditions and the following disclaimer in the documentation
//    and/or other materials provided with the distribution.
// 
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
// ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


(function () {
  "use strict";
  function ba(a, b) {
    function c(x) {
      x = x.toString(16);
      return "#" + "0".repeat(6 - x.length) + x;
    }
    function d(x, C, S, P) {
      x.style.width = "";
      x.style.height = "";
      P && (x.style.transform = "");
      var aa = x.getBoundingClientRect();
      P
        ? (x.style.transform =
            (1 === C ? "" : " scaleX(" + C + ")") +
            (1 === S ? "" : " scaleY(" + S + ")"))
        : (0 === C % 1 && 0 === S % 1
            ? ((e.style.imageRendering = "crisp-edges"),
              (e.style.imageRendering = "pixelated"),
              (e.style["-ms-interpolation-mode"] = "nearest-neighbor"))
            : ((e.style.imageRendering = ""),
              (e.style["-ms-interpolation-mode"] = "")),
          (P = window.devicePixelRatio || 1),
          0 !== P % 1 && ((C /= P), (S /= P)));
      1 !== C && (x.style.width = aa.width * C + "px");
      1 !== S && (x.style.height = aa.height * S + "px");
    }
    console.assert(a, "1st argument must be a DOM container");
    var e = a.getElementsByTagName("canvas")[0],
      g = e.getContext("2d", { alpha: !1 }),
      f = a.getElementsByTagName("div")[0],
      k = document.createElement("div"),
      l,
      m,
      n = 1,
      p = 1,
      t = 1,
      q,
      z = !1,
      w,
      u,
      I,
      U = !1,
      ea = this;
    a = new Uint16Array([
      8962, 199, 252, 233, 226, 228, 224, 229, 231, 234, 235, 232, 239, 238,
      236, 196, 197, 201, 230, 198, 244, 246, 242, 251, 249, 255, 214, 220, 162,
      163, 165, 8359, 402, 225, 237, 243, 250, 241, 209, 170, 186, 191, 8976,
      172, 189, 188, 161, 171, 187, 9617, 9618, 9619, 9474, 9508, 9569, 9570,
      9558, 9557, 9571, 9553, 9559, 9565, 9564, 9563, 9488, 9492, 9524, 9516,
      9500, 9472, 9532, 9566, 9567, 9562, 9556, 9577, 9574, 9568, 9552, 9580,
      9575, 9576, 9572, 9573, 9561, 9560, 9554, 9555, 9579, 9578, 9496, 9484,
      9608, 9604, 9612, 9616, 9600, 945, 223, 915, 960, 931, 963, 181, 964, 934,
      920, 937, 948, 8734, 966, 949, 8745, 8801, 177, 8805, 8804, 8992, 8993,
      247, 8776, 176, 8729, 183, 8730, 8319, 178, 9632, 160,
    ]);
    for (
      var Ab = new Uint16Array([
          32, 9786, 9787, 9829, 9830, 9827, 9824, 8226, 9688, 9675, 9689, 9794,
          9792, 9834, 9835, 9788, 9658, 9668, 8597, 8252, 182, 167, 9644, 8616,
          8593, 8595, 8594, 8592, 8735, 8596, 9650, 9660,
        ]),
        Ra = [],
        db,
        sa = 0;
      256 > sa;
      sa++
    )
      (db = 126 < sa ? a[sa - 127] : 32 > sa ? Ab[sa] : sa),
        (Ra[sa] = String.fromCharCode(db));
    g.imageSmoothingEnabled = !1;
    k.style.position = "absolute";
    k.style.backgroundColor = "#ccc";
    k.style.width = "7px";
    k.style.display = "inline-block";
    f.style.display = "block";
    e.style.display = "none";
    this.bus = b;
    b.register(
      "screen-set-mode",
      function (x) {
        this.set_mode(x);
      },
      this
    );
    b.register(
      "screen-fill-buffer-end",
      function (x) {
        this.update_buffer(x);
      },
      this
    );
    b.register(
      "screen-put-char",
      function (x) {
        this.put_char(x[0], x[1], x[2], x[3], x[4]);
      },
      this
    );
    b.register(
      "screen-update-cursor",
      function (x) {
        this.update_cursor(x[0], x[1]);
      },
      this
    );
    b.register(
      "screen-update-cursor-scanline",
      function (x) {
        this.update_cursor_scanline(x[0], x[1]);
      },
      this
    );
    b.register(
      "screen-clear",
      function () {
        this.clear_screen();
      },
      this
    );
    b.register(
      "screen-set-size-text",
      function (x) {
        this.set_size_text(x[0], x[1]);
      },
      this
    );
    b.register(
      "screen-set-size-graphical",
      function (x) {
        this.set_size_graphical(x[0], x[1], x[2], x[3]);
      },
      this
    );
    this.init = function () {
      this.set_size_text(80, 25);
      this.timer();
    };
    this.make_screenshot = function () {
      const x = new Image();
      if (z) x.src = e.toDataURL("image/png");
      else {
        const C = [9, 16],
          S = document.createElement("canvas");
        S.width = u * C[0];
        S.height = I * C[1];
        const P = S.getContext("2d");
        P.imageSmoothingEnabled = !1;
        P.font = window.getComputedStyle(f).font;
        P.textBaseline = "top";
        for (let aa = 0; aa < u; aa++)
          for (let fa = 0; fa < I; fa++) {
            const ta = 3 * (fa * u + aa);
            P.fillStyle = c(w[ta + 1]);
            P.fillRect(aa * C[0], fa * C[1], C[0], C[1]);
            P.fillStyle = c(w[ta + 2]);
            P.fillText(Ra[w[ta]], aa * C[0], fa * C[1]);
          }
        "none" !== k.style.display &&
          ((P.fillStyle = k.style.backgroundColor),
          P.fillRect(
            m * C[0],
            l * C[1] + parseInt(k.style.marginTop, 10) - 1,
            parseInt(k.style.width, 10),
            parseInt(k.style.height, 10)
          ));
        x.src = S.toDataURL("image/png");
      }
      return x;
    };
    this.put_char = function (x, C, S, P, aa) {
      x < I &&
        C < u &&
        ((C = 3 * (x * u + C)),
        (w[C] = S),
        (w[C + 1] = P),
        (w[C + 2] = aa),
        (q[x] = 1));
    };
    this.timer = function () {
      U || requestAnimationFrame(z ? Bb : Cb);
    };
    var Cb = function () {
        for (var x = 0; x < I; x++) q[x] && (ea.text_update_row(x), (q[x] = 0));
        this.timer();
      }.bind(this),
      Bb = function () {
        this.bus.send("screen-fill-buffer");
        this.timer();
      }.bind(this);
    this.destroy = function () {
      U = !0;
    };
    this.set_mode = function (x) {
      (z = x)
        ? ((f.style.display = "none"), (e.style.display = "block"))
        : ((f.style.display = "block"), (e.style.display = "none"));
    };
    this.clear_screen = function () {
      g.fillStyle = "#000";
      g.fillRect(0, 0, e.width, e.height);
    };
    this.set_size_text = function (x, C) {
      if (x !== u || C !== I) {
        q = new Int8Array(C);
        w = new Int32Array(x * C * 3);
        u = x;
        for (I = C; f.childNodes.length > C; ) f.removeChild(f.firstChild);
        for (; f.childNodes.length < C; )
          f.appendChild(document.createElement("div"));
        for (x = 0; x < C; x++) this.text_update_row(x);
        d(f, n, p, !0);
      }
    };
    this.set_size_graphical = function (x, C) {
      e.style.display = "block";
      e.width = x;
      e.height = C;
      t =
        640 >= x &&
        2 * x < window.innerWidth * window.devicePixelRatio &&
        2 * C < window.innerHeight * window.devicePixelRatio
          ? 2
          : 1;
      d(e, n * t, p * t, !1);
    };
    this.set_scale = function (x, C) {
      n = x;
      p = C;
      d(f, n, p, !0);
      d(e, n * t, p * t, !1);
    };
    this.set_scale(n, p);
    this.update_cursor_scanline = function (x, C) {
      x & 32
        ? (k.style.display = "none")
        : ((k.style.display = "inline"),
          (k.style.height = Math.min(15, C - x) + "px"),
          (k.style.marginTop = Math.min(15, x) + "px"));
    };
    this.update_cursor = function (x, C) {
      if (x !== l || C !== m) (q[x] = 1), (q[l] = 1), (l = x), (m = C);
    };
    this.text_update_row = function (x) {
      var C = 3 * x * u,
        S;
      var P = f.childNodes[x];
      var aa = document.createElement("div");
      for (var fa = 0; fa < u; ) {
        var ta = document.createElement("span");
        var eb = w[C + 1];
        var fb = w[C + 2];
        ta.style.backgroundColor = c(eb);
        ta.style.color = c(fb);
        for (S = ""; fa < u && w[C + 1] === eb && w[C + 2] === fb; )
          if (((S += Ra[w[C]]), fa++, (C += 3), x === l))
            if (fa === m) break;
            else if (fa === m + 1) {
              aa.appendChild(k);
              break;
            }
        ta.textContent = S;
        aa.appendChild(ta);
      }
      P.parentNode.replaceChild(aa, P);
    };
    this.update_buffer = function (x) {
      x.forEach((C) => {
        g.putImageData(
          C.image_data,
          C.screen_x - C.buffer_x,
          C.screen_y - C.buffer_y,
          C.buffer_x,
          C.buffer_y,
          C.buffer_width,
          C.buffer_height
        );
      });
    };
    this.init();
  }
  const ca = Object.freeze(["shared", "exclusive", "unlock"]);
  function da(a, b, c) {
    this.fs = a;
    this.bus = c;
    this.configspace_tagname = [104, 111, 115, 116, 57, 112];
    this.configspace_taglen = this.configspace_tagname.length;
    this.VERSION = "9P2000.L";
    this.msize = this.BLOCKSIZE = 8192;
    this.replybuffer = new Uint8Array(2 * this.msize);
    this.replybuffersize = 0;
    this.fids = [];
    this.virtio = new h(b, {
      name: "virtio-9p",
      pci_id: 48,
      device_id: 4169,
      subsystem_device_id: 9,
      common: {
        initial_port: 43008,
        queues: [{ size_supported: 32, notify_offset: 0 }],
        features: [0, 32, 29, 28],
        on_driver_ok: () => {},
      },
      notification: {
        initial_port: 43264,
        single_handler: !1,
        handlers: [
          (d) => {
            if (0 === d) {
              for (; this.virtqueue.has_request(); )
                (d = this.virtqueue.pop_request()), this.ReceiveRequest(d);
              this.virtqueue.notify_me_after(0);
            }
          },
        ],
      },
      isr_status: { initial_port: 42752 },
      device_specific: {
        initial_port: 42496,
        struct: [
          {
            bytes: 2,
            name: "mount tag length",
            read: () => this.configspace_taglen,
            write: () => {},
          },
        ].concat(
          r
            .range(254)
            .map((d) => ({
              bytes: 1,
              name: "mount tag name " + d,
              read: () => this.configspace_tagname[d] || 0,
              write: () => {},
            }))
        ),
      },
    });
    this.virtqueue = this.virtio.queues[0];
  }
  da.prototype.get_state = function () {
    var a = [];
    a[0] = this.configspace_tagname;
    a[1] = this.configspace_taglen;
    a[2] = this.virtio;
    a[3] = this.VERSION;
    a[4] = this.BLOCKSIZE;
    a[5] = this.msize;
    a[6] = this.replybuffer;
    a[7] = this.replybuffersize;
    a[8] = this.fids.map(function (b) {
      return [b.inodeid, b.type, b.uid, b.dbg_name];
    });
    a[9] = this.fs;
    return a;
  };
  da.prototype.set_state = function (a) {
    this.configspace_tagname = a[0];
    this.configspace_taglen = a[1];
    this.virtio.set_state(a[2]);
    this.virtqueue = this.virtio.queues[0];
    this.VERSION = a[3];
    this.BLOCKSIZE = a[4];
    this.msize = a[5];
    this.replybuffer = a[6];
    this.replybuffersize = a[7];
    this.fids = a[8].map(function (b) {
      return { inodeid: b[0], type: b[1], uid: b[2], dbg_name: b[3] };
    });
    this.fs.set_state(a[9]);
  };
  da.prototype.Createfid = function (a, b, c, d) {
    return { inodeid: a, type: b, uid: c, dbg_name: d };
  };
  da.prototype.update_dbg_name = function (a, b) {
    for (const c of this.fids) c.inodeid === a && (c.dbg_name = b);
  };
  da.prototype.Reset = function () {
    this.fids = [];
  };
  da.prototype.BuildReply = function (a, b, c) {
    v.Marshall(["w", "b", "h"], [c + 7, a + 1, b], this.replybuffer, 0);
    c + 7 >= this.replybuffer.length &&
      y.Debug("Error in 9p: payloadsize exceeds maximum length");
    this.replybuffersize = c + 7;
  };
  da.prototype.SendError = function (a, b, c) {
    b = v.Marshall(["w"], [c], this.replybuffer, 7);
    this.BuildReply(6, a, b);
  };
  da.prototype.SendReply = function (a) {
    a.set_next_blob(this.replybuffer.subarray(0, this.replybuffersize));
    this.virtqueue.push_reply(a);
    this.virtqueue.flush_replies();
  };
  da.prototype.ReceiveRequest = async function (a) {
    var b = new Uint8Array(a.length_readable);
    a.get_next_blob(b);
    var c = { offset: 0 },
      d = v.Unmarshall(["w", "b", "h"], b, c),
      e = d[0],
      g = d[1],
      f = d[2];
    switch (g) {
      case 8:
        e = this.fs.GetTotalSize();
        b = this.fs.GetSpace();
        d = [16914839];
        d[1] = this.BLOCKSIZE;
        d[2] = Math.floor(b / d[1]);
        d[3] = d[2] - Math.floor(e / d[1]);
        d[4] = d[2] - Math.floor(e / d[1]);
        d[5] = this.fs.CountUsedInodes();
        d[6] = this.fs.CountFreeInodes();
        d[7] = 0;
        d[8] = 256;
        e = v.Marshall("wwddddddw".split(""), d, this.replybuffer, 7);
        this.BuildReply(g, f, e);
        this.SendReply(a);
        break;
      case 112:
      case 12:
        d = v.Unmarshall(["w", "w"], b, c);
        var k = d[0];
        c = d[1];
        y.Debug("[open] fid=" + k + ", mode=" + c);
        b = this.fids[k].inodeid;
        var l = this.fs.GetInode(b);
        y.Debug("file open " + this.fids[k].dbg_name);
        e = this.fs.OpenInode(b, c);
        this.fs.AddEvent(
          this.fids[k].inodeid,
          function () {
            y.Debug("file opened " + this.fids[k].dbg_name + " tag:" + f);
            var t = [];
            t[0] = l.qid;
            t[1] = this.msize - 24;
            v.Marshall(["Q", "w"], t, this.replybuffer, 7);
            this.BuildReply(g, f, 17);
            this.SendReply(a);
          }.bind(this)
        );
        break;
      case 70:
        d = v.Unmarshall(["w", "w", "s"], b, c);
        b = d[0];
        k = d[1];
        e = d[2];
        y.Debug("[link] dfid=" + b + ", name=" + e);
        e = this.fs.Link(this.fids[b].inodeid, this.fids[k].inodeid, e);
        if (0 > e) {
          this.SendError(
            f,
            -1 === e ? "Operation not permitted" : "Unknown error: " + -e,
            -e
          );
          this.SendReply(a);
          break;
        }
        this.BuildReply(g, f, 0);
        this.SendReply(a);
        break;
      case 16:
        d = v.Unmarshall(["w", "s", "s", "w"], b, c);
        k = d[0];
        e = d[1];
        b = d[2];
        d = d[3];
        y.Debug(
          "[symlink] fid=" + k + ", name=" + e + ", symgt=" + b + ", gid=" + d
        );
        b = this.fs.CreateSymlink(e, this.fids[k].inodeid, b);
        l = this.fs.GetInode(b);
        l.uid = this.fids[k].uid;
        l.gid = d;
        v.Marshall(["Q"], [l.qid], this.replybuffer, 7);
        this.BuildReply(g, f, 13);
        this.SendReply(a);
        break;
      case 18:
        d = v.Unmarshall("wswwww".split(""), b, c);
        k = d[0];
        e = d[1];
        c = d[2];
        b = d[3];
        var m = d[4];
        d = d[5];
        y.Debug(
          "[mknod] fid=" + k + ", name=" + e + ", major=" + b + ", minor=" + m
        );
        b = this.fs.CreateNode(e, this.fids[k].inodeid, b, m);
        l = this.fs.GetInode(b);
        l.mode = c;
        l.uid = this.fids[k].uid;
        l.gid = d;
        v.Marshall(["Q"], [l.qid], this.replybuffer, 7);
        this.BuildReply(g, f, 13);
        this.SendReply(a);
        break;
      case 22:
        d = v.Unmarshall(["w"], b, c);
        k = d[0];
        l = this.fs.GetInode(this.fids[k].inodeid);
        y.Debug(
          "[readlink] fid=" +
            k +
            " name=" +
            this.fids[k].dbg_name +
            " target=" +
            l.symlink
        );
        e = v.Marshall(["s"], [l.symlink], this.replybuffer, 7);
        this.BuildReply(g, f, e);
        this.SendReply(a);
        break;
      case 72:
        d = v.Unmarshall(["w", "s", "w", "w"], b, c);
        k = d[0];
        e = d[1];
        c = d[2];
        d = d[3];
        y.Debug(
          "[mkdir] fid=" + k + ", name=" + e + ", mode=" + c + ", gid=" + d
        );
        b = this.fs.CreateDirectory(e, this.fids[k].inodeid);
        l = this.fs.GetInode(b);
        l.mode = c | ha;
        l.uid = this.fids[k].uid;
        l.gid = d;
        v.Marshall(["Q"], [l.qid], this.replybuffer, 7);
        this.BuildReply(g, f, 13);
        this.SendReply(a);
        break;
      case 14:
        d = v.Unmarshall(["w", "s", "w", "w", "w"], b, c);
        k = d[0];
        e = d[1];
        b = d[2];
        c = d[3];
        d = d[4];
        this.bus.send("9p-create", [e, this.fids[k].inodeid]);
        y.Debug(
          "[create] fid=" +
            k +
            ", name=" +
            e +
            ", flags=" +
            b +
            ", mode=" +
            c +
            ", gid=" +
            d
        );
        b = this.fs.CreateFile(e, this.fids[k].inodeid);
        this.fids[k].inodeid = b;
        this.fids[k].type = 1;
        this.fids[k].dbg_name = e;
        l = this.fs.GetInode(b);
        l.uid = this.fids[k].uid;
        l.gid = d;
        l.mode = c;
        v.Marshall(["Q", "w"], [l.qid, this.msize - 24], this.replybuffer, 7);
        this.BuildReply(g, f, 17);
        this.SendReply(a);
        break;
      case 52:
        d = v.Unmarshall("wbwddws".split(""), b, c);
        k = d[0];
        b = d[2];
        e = 0 === d[4] ? Infinity : d[4];
        d = this.fs.DescribeLock(d[1], d[3], e, d[5], d[6]);
        y.Debug(
          "[lock] fid=" +
            k +
            ", type=" +
            ca[d.type] +
            ", start=" +
            d.start +
            ", length=" +
            d.length +
            ", proc_id=" +
            d.proc_id
        );
        e = this.fs.Lock(this.fids[k].inodeid, d, b);
        v.Marshall(["b"], [e], this.replybuffer, 7);
        this.BuildReply(g, f, 1);
        this.SendReply(a);
        break;
      case 54:
        d = v.Unmarshall("wbddws".split(""), b, c);
        k = d[0];
        e = 0 === d[3] ? Infinity : d[3];
        d = this.fs.DescribeLock(d[1], d[2], e, d[4], d[5]);
        y.Debug(
          "[getlock] fid=" +
            k +
            ", type=" +
            ca[d.type] +
            ", start=" +
            d.start +
            ", length=" +
            d.length +
            ", proc_id=" +
            d.proc_id
        );
        e = this.fs.GetLock(this.fids[k].inodeid, d);
        e || ((e = d), (e.type = 2));
        e = v.Marshall(
          ["b", "d", "d", "w", "s"],
          [
            e.type,
            e.start,
            Infinity === e.length ? 0 : e.length,
            e.proc_id,
            e.client_id,
          ],
          this.replybuffer,
          7
        );
        this.BuildReply(g, f, e);
        this.SendReply(a);
        break;
      case 24:
        d = v.Unmarshall(["w", "d"], b, c);
        k = d[0];
        l = this.fs.GetInode(this.fids[k].inodeid);
        y.Debug(
          "[getattr]: fid=" +
            k +
            " name=" +
            this.fids[k].dbg_name +
            " request mask=" +
            d[1]
        );
        if (!l || l.status === ia) {
          y.Debug("getattr: unlinked");
          this.SendError(f, "No such file or directory", 2);
          this.SendReply(a);
          break;
        }
        d[0] |= 4096;
        d[0] = d[1];
        d[1] = l.qid;
        d[2] = l.mode;
        d[3] = l.uid;
        d[4] = l.gid;
        d[5] = l.nlinks;
        d[6] = (l.major << 8) | l.minor;
        d[7] = l.size;
        d[8] = this.BLOCKSIZE;
        d[9] = Math.floor(l.size / 512 + 1);
        d[10] = l.atime;
        d[11] = 0;
        d[12] = l.mtime;
        d[13] = 0;
        d[14] = l.ctime;
        d[15] = 0;
        d[16] = 0;
        d[17] = 0;
        d[18] = 0;
        d[19] = 0;
        v.Marshall("dQwwwddddddddddddddd".split(""), d, this.replybuffer, 7);
        this.BuildReply(g, f, 153);
        this.SendReply(a);
        break;
      case 26:
        d = v.Unmarshall("wwwwwddddd".split(""), b, c);
        k = d[0];
        l = this.fs.GetInode(this.fids[k].inodeid);
        y.Debug(
          "[setattr]: fid=" +
            k +
            " request mask=" +
            d[1] +
            " name=" +
            this.fids[k].dbg_name
        );
        d[1] & 1 && (l.mode = d[2]);
        d[1] & 2 && (l.uid = d[3]);
        d[1] & 4 && (l.gid = d[4]);
        d[1] & 16 && (l.atime = Math.floor(new Date().getTime() / 1e3));
        d[1] & 32 && (l.mtime = Math.floor(new Date().getTime() / 1e3));
        d[1] & 64 && (l.ctime = Math.floor(new Date().getTime() / 1e3));
        d[1] & 128 && (l.atime = d[6]);
        d[1] & 256 && (l.mtime = d[8]);
        d[1] & 8 && (await this.fs.ChangeSize(this.fids[k].inodeid, d[5]));
        this.BuildReply(g, f, 0);
        this.SendReply(a);
        break;
      case 50:
        d = v.Unmarshall(["w", "d"], b, c);
        k = d[0];
        this.BuildReply(g, f, 0);
        this.SendReply(a);
        break;
      case 40:
      case 116:
        d = v.Unmarshall(["w", "d", "w"], b, c);
        k = d[0];
        e = d[1];
        m = d[2];
        l = this.fs.GetInode(this.fids[k].inodeid);
        40 == g &&
          y.Debug("[treaddir]: fid=" + k + " offset=" + e + " count=" + m);
        116 == g &&
          y.Debug(
            "[read]: fid=" +
              k +
              " (" +
              this.fids[k].dbg_name +
              ") offset=" +
              e +
              " count=" +
              m +
              " fidtype=" +
              this.fids[k].type
          );
        if (!l || l.status === ia) {
          y.Debug("read/treaddir: unlinked");
          this.SendError(f, "No such file or directory", 2);
          this.SendReply(a);
          break;
        }
        if (2 == this.fids[k].type)
          for (
            l.caps.length < e + m && (m = l.caps.length - e), d = 0;
            d < m;
            d++
          )
            this.replybuffer[11 + d] = l.caps[e + d];
        else
          this.fs.OpenInode(this.fids[k].inodeid, void 0),
            (d = this.fids[k].inodeid),
            (m = Math.min(m, this.replybuffer.length - 11)),
            l.size < e + m
              ? (m = l.size - e)
              : 40 == g && (m = this.fs.RoundToDirentry(d, e + m) - e),
            e > l.size && (m = 0),
            this.bus.send("9p-read-start", [this.fids[k].dbg_name]),
            (d = await this.fs.Read(d, e, m)),
            this.bus.send("9p-read-end", [this.fids[k].dbg_name, m]),
            d && this.replybuffer.set(d, 11);
        v.Marshall(["w"], [m], this.replybuffer, 7);
        this.BuildReply(g, f, 4 + m);
        this.SendReply(a);
        break;
      case 118:
        d = v.Unmarshall(["w", "d", "w"], b, c);
        k = d[0];
        e = d[1];
        m = d[2];
        d = this.fids[k].dbg_name;
        y.Debug(
          "[write]: fid=" +
            k +
            " (" +
            d +
            ") offset=" +
            e +
            " count=" +
            m +
            " fidtype=" +
            this.fids[k].type
        );
        if (2 === this.fids[k].type) {
          this.SendError(f, "Setxattr not supported", 95);
          this.SendReply(a);
          break;
        } else
          await this.fs.Write(this.fids[k].inodeid, e, m, b.subarray(c.offset));
        this.bus.send("9p-write-end", [d, m]);
        v.Marshall(["w"], [m], this.replybuffer, 7);
        this.BuildReply(g, f, 4);
        this.SendReply(a);
        break;
      case 74:
        d = v.Unmarshall(["w", "s", "w", "s"], b, c);
        e = d[0];
        b = d[1];
        c = d[2];
        d = d[3];
        y.Debug("[renameat]: oldname=" + b + " newname=" + d);
        e = await this.fs.Rename(
          this.fids[e].inodeid,
          b,
          this.fids[c].inodeid,
          d
        );
        if (0 > e) {
          this.SendError(
            f,
            -2 === e
              ? "No such file or directory"
              : -1 === e
              ? "Operation not permitted"
              : -39 === e
              ? "Directory not empty"
              : "Unknown error: " + -e,
            -e
          );
          this.SendReply(a);
          break;
        }
        this.BuildReply(g, f, 0);
        this.SendReply(a);
        break;
      case 76:
        d = v.Unmarshall(["w", "s", "w"], b, c);
        c = d[0];
        e = d[1];
        b = d[2];
        y.Debug("[unlink]: dirfd=" + c + " name=" + e + " flags=" + b);
        k = this.fs.Search(this.fids[c].inodeid, e);
        if (-1 == k) {
          this.SendError(f, "No such file or directory", 2);
          this.SendReply(a);
          break;
        }
        e = this.fs.Unlink(this.fids[c].inodeid, e);
        if (0 > e) {
          this.SendError(
            f,
            -39 === e
              ? "Directory not empty"
              : -1 === e
              ? "Operation not permitted"
              : "Unknown error: " + -e,
            -e
          );
          this.SendReply(a);
          break;
        }
        this.BuildReply(g, f, 0);
        this.SendReply(a);
        break;
      case 100:
        d = v.Unmarshall(["w", "s"], b, c);
        y.Debug("[version]: msize=" + d[0] + " version=" + d[1]);
        this.msize = d[0];
        e = v.Marshall(
          ["w", "s"],
          [this.msize, this.VERSION],
          this.replybuffer,
          7
        );
        this.BuildReply(g, f, e);
        this.SendReply(a);
        break;
      case 104:
        d = v.Unmarshall(["w", "w", "s", "s", "w"], b, c);
        k = d[0];
        e = d[4];
        y.Debug(
          "[attach]: fid=" +
            k +
            " afid=" +
            A(d[1]) +
            " uname=" +
            d[2] +
            " aname=" +
            d[3]
        );
        this.fids[k] = this.Createfid(0, 1, e, "");
        l = this.fs.GetInode(this.fids[k].inodeid);
        v.Marshall(["Q"], [l.qid], this.replybuffer, 7);
        this.BuildReply(g, f, 13);
        this.SendReply(a);
        this.bus.send("9p-attach");
        break;
      case 108:
        d = v.Unmarshall(["h"], b, c);
        y.Debug("[flush] " + f);
        this.BuildReply(g, f, 0);
        this.SendReply(a);
        break;
      case 110:
        d = v.Unmarshall(["w", "w", "h"], b, c);
        k = d[0];
        m = d[1];
        var n = d[2];
        y.Debug("[walk]: fid=" + d[0] + " nwfid=" + d[1] + " nwname=" + n);
        if (0 == n) {
          this.fids[m] = this.Createfid(
            this.fids[k].inodeid,
            1,
            this.fids[k].uid,
            this.fids[k].dbg_name
          );
          v.Marshall(["h"], [0], this.replybuffer, 7);
          this.BuildReply(g, f, 2);
          this.SendReply(a);
          break;
        }
        e = [];
        for (d = 0; d < n; d++) e.push("s");
        c = v.Unmarshall(e, b, c);
        b = this.fids[k].inodeid;
        e = 9;
        var p = 0;
        y.Debug(
          "walk in dir " + this.fids[k].dbg_name + " to: " + c.toString()
        );
        for (d = 0; d < n; d++) {
          b = this.fs.Search(b, c[d]);
          if (-1 == b) {
            y.Debug("Could not find: " + c[d]);
            break;
          }
          e += v.Marshall(
            ["Q"],
            [this.fs.GetInode(b).qid],
            this.replybuffer,
            e
          );
          p++;
          this.fids[m] = this.Createfid(b, 1, this.fids[k].uid, c[d]);
        }
        v.Marshall(["h"], [p], this.replybuffer, 7);
        this.BuildReply(g, f, e - 7);
        this.SendReply(a);
        break;
      case 120:
        d = v.Unmarshall(["w"], b, c);
        y.Debug("[clunk]: fid=" + d[0]);
        this.fids[d[0]] &&
          0 <= this.fids[d[0]].inodeid &&
          (await this.fs.CloseInode(this.fids[d[0]].inodeid),
          (this.fids[d[0]].inodeid = -1),
          (this.fids[d[0]].type = -1));
        this.BuildReply(g, f, 0);
        this.SendReply(a);
        break;
      case 32:
        d = v.Unmarshall(["w", "s", "d", "w"], b, c);
        k = d[0];
        e = d[1];
        c = d[2];
        b = d[3];
        y.Debug(
          "[txattrcreate]: fid=" +
            k +
            " name=" +
            e +
            " attr_size=" +
            c +
            " flags=" +
            b
        );
        this.fids[k].type = 2;
        this.BuildReply(g, f, 0);
        this.SendReply(a);
        break;
      case 30:
        d = v.Unmarshall(["w", "w", "s"], b, c);
        k = d[0];
        e = d[2];
        y.Debug(
          "[xattrwalk]: fid=" + d[0] + " newfid=" + d[1] + " name=" + d[2]
        );
        this.SendError(f, "Setxattr not supported", 95);
        this.SendReply(a);
        break;
      default:
        y.Debug("Error in Virtio9p: Unknown id " + g + " received"), y.Abort();
    }
  };
  function B(a) {
    this.ports = [];
    this.cpu = a;
    for (var b = 0; 65536 > b; b++) this.ports[b] = this.create_empty_entry();
    var c = a.memory_size[0];
    for (b = 0; b << 17 < c; b++)
      (a.memory_map_read8[b] = a.memory_map_write8[b] = void 0),
        (a.memory_map_read32[b] = a.memory_map_write32[b] = void 0);
    this.mmap_register(
      c,
      4294967296 - c,
      function (d) {
        A(d >>> 0, 8);
        return 255;
      },
      function (d, e) {
        A(d >>> 0, 8);
        A(e, 2);
      },
      function (d) {
        A(d >>> 0, 8);
        return -1;
      },
      function (d, e) {
        A(d >>> 0, 8);
        A(e >>> 0, 8);
      }
    );
  }
  B.prototype.create_empty_entry = function () {
    return {
      read8: this.empty_port_read8,
      read16: this.empty_port_read16,
      read32: this.empty_port_read32,
      write8: this.empty_port_write,
      write16: this.empty_port_write,
      write32: this.empty_port_write,
      device: void 0,
    };
  };
  B.prototype.empty_port_read8 = function () {
    return 255;
  };
  B.prototype.empty_port_read16 = function () {
    return 65535;
  };
  B.prototype.empty_port_read32 = function () {
    return -1;
  };
  B.prototype.empty_port_write = function () {};
  B.prototype.register_read = function (a, b, c, d, e) {
    c && (this.ports[a].read8 = c);
    d && (this.ports[a].read16 = d);
    e && (this.ports[a].read32 = e);
    this.ports[a].device = b;
  };
  B.prototype.register_write = function (a, b, c, d, e) {
    c && (this.ports[a].write8 = c);
    d && (this.ports[a].write16 = d);
    e && (this.ports[a].write32 = e);
    this.ports[a].device = b;
  };
  B.prototype.register_read_consecutive = function (a, b, c, d, e, g) {
    function f() {
      return c.call(this) | (d.call(this) << 8);
    }
    function k() {
      return e.call(this) | (g.call(this) << 8);
    }
    function l() {
      return (
        c.call(this) |
        (d.call(this) << 8) |
        (e.call(this) << 16) |
        (g.call(this) << 24)
      );
    }
    e && g
      ? (this.register_read(a, b, c, f, l),
        this.register_read(a + 1, b, d),
        this.register_read(a + 2, b, e, k),
        this.register_read(a + 3, b, g))
      : (this.register_read(a, b, c, f), this.register_read(a + 1, b, d));
  };
  B.prototype.register_write_consecutive = function (a, b, c, d, e, g) {
    function f(m) {
      c.call(this, m & 255);
      d.call(this, (m >> 8) & 255);
    }
    function k(m) {
      e.call(this, m & 255);
      g.call(this, (m >> 8) & 255);
    }
    function l(m) {
      c.call(this, m & 255);
      d.call(this, (m >> 8) & 255);
      e.call(this, (m >> 16) & 255);
      g.call(this, m >>> 24);
    }
    e && g
      ? (this.register_write(a, b, c, f, l),
        this.register_write(a + 1, b, d),
        this.register_write(a + 2, b, e, k),
        this.register_write(a + 3, b, g))
      : (this.register_write(a, b, c, f), this.register_write(a + 1, b, d));
  };
  B.prototype.mmap_read32_shim = function (a) {
    var b = this.cpu.memory_map_read8[a >>> 17];
    return b(a) | (b(a + 1) << 8) | (b(a + 2) << 16) | (b(a + 3) << 24);
  };
  B.prototype.mmap_write32_shim = function (a, b) {
    var c = this.cpu.memory_map_write8[a >>> 17];
    c(a, b & 255);
    c(a + 1, (b >> 8) & 255);
    c(a + 2, (b >> 16) & 255);
    c(a + 3, b >>> 24);
  };
  B.prototype.mmap_register = function (a, b, c, d, e, g) {
    A(a >>> 0, 8);
    A(b, 8);
    e || (e = this.mmap_read32_shim.bind(this));
    g || (g = this.mmap_write32_shim.bind(this));
    for (a >>>= 17; 0 < b; a++)
      (this.cpu.memory_map_read8[a] = c),
        (this.cpu.memory_map_write8[a] = d),
        (this.cpu.memory_map_read32[a] = e),
        (this.cpu.memory_map_write32[a] = g),
        (b -= 131072);
  };
  B.prototype.port_write8 = function (a, b) {
    var c = this.ports[a];
    c.write8 === this.empty_port_write &&
      (A(a, 4), A(b, 2), this.get_port_description(a));
    return c.write8.call(c.device, b);
  };
  B.prototype.port_write16 = function (a, b) {
    var c = this.ports[a];
    c.write16 === this.empty_port_write &&
      (A(a, 4), A(b, 4), this.get_port_description(a));
    return c.write16.call(c.device, b);
  };
  B.prototype.port_write32 = function (a, b) {
    var c = this.ports[a];
    c.write32 === this.empty_port_write &&
      (A(a, 4), A(b >>> 0, 8), this.get_port_description(a));
    return c.write32.call(c.device, b);
  };
  B.prototype.port_read8 = function (a) {
    var b = this.ports[a];
    b.read8 === this.empty_port_read8 &&
      (A(a, 4), this.get_port_description(a));
    b = b.read8.call(b.device);
    A(a);
    return b;
  };
  B.prototype.port_read16 = function (a) {
    var b = this.ports[a];
    b.read16 === this.empty_port_read16 &&
      (A(a, 4), this.get_port_description(a));
    b = b.read16.call(b.device);
    A(a);
    return b;
  };
  B.prototype.port_read32 = function (a) {
    var b = this.ports[a];
    b.read32 === this.empty_port_read32 &&
      (A(a, 4), this.get_port_description(a));
    return b.read32.call(b.device);
  };
  var ja = {
    4: "PORT_DMA_ADDR_2",
    5: "PORT_DMA_CNT_2",
    10: "PORT_DMA1_MASK_REG",
    11: "PORT_DMA1_MODE_REG",
    12: "PORT_DMA1_CLEAR_FF_REG",
    13: "PORT_DMA1_MASTER_CLEAR",
    32: "PORT_PIC1_CMD",
    33: "PORT_PIC1_DATA",
    64: "PORT_PIT_COUNTER0",
    65: "PORT_PIT_COUNTER1",
    66: "PORT_PIT_COUNTER2",
    67: "PORT_PIT_MODE",
    96: "PORT_PS2_DATA",
    97: "PORT_PS2_CTRLB",
    100: "PORT_PS2_STATUS",
    112: "PORT_CMOS_INDEX",
    113: "PORT_CMOS_DATA",
    128: "PORT_DIAG",
    129: "PORT_DMA_PAGE_2",
    146: "PORT_A20",
    160: "PORT_PIC2_CMD",
    161: "PORT_PIC2_DATA",
    178: "PORT_SMI_CMD",
    179: "PORT_SMI_STATUS",
    212: "PORT_DMA2_MASK_REG",
    214: "PORT_DMA2_MODE_REG",
    218: "PORT_DMA2_MASTER_CLEAR",
    240: "PORT_MATH_CLEAR",
    368: "PORT_ATA2_CMD_BASE",
    496: "PORT_ATA1_CMD_BASE",
    632: "PORT_LPT2",
    744: "PORT_SERIAL4",
    760: "PORT_SERIAL2",
    884: "PORT_ATA2_CTRL_BASE",
    888: "PORT_LPT1",
    1e3: "PORT_SERIAL3",
    1008: "PORT_FD_BASE",
    1010: "PORT_FD_DOR",
    1012: "PORT_FD_STATUS",
    1013: "PORT_FD_DATA",
    1014: "PORT_HD_DATA",
    1015: "PORT_FD_DIR",
    1016: "PORT_SERIAL1",
    3320: "PORT_PCI_CMD",
    3321: "PORT_PCI_REBOOT",
    3324: "PORT_PCI_DATA",
    1026: "PORT_BIOS_DEBUG",
    1296: "PORT_QEMU_CFG_CTL",
    1297: "PORT_QEMU_CFG_DATA",
    45056: "PORT_ACPI_PM_BASE",
    45312: "PORT_SMB_BASE",
    35072: "PORT_BIOS_APM",
  };
  B.prototype.get_port_description = function (a) {
    return ja[a] ? "  (" + ja[a] + ")" : "";
  };
  function D(a, b) {
    this.stopping = this.running = !1;
    this.tick_counter = 0;
    this.worker = null;
    this.cpu = new E(a, b, () => {
      this.idle && this.next_tick(0);
    });
    this.bus = a;
    a.register("cpu-init", this.init, this);
    a.register("cpu-run", this.run, this);
    a.register("cpu-stop", this.stop, this);
    a.register("cpu-restart", this.restart, this);
    this.register_yield();
  }
  D.prototype.run = function () {
    this.stopping = !1;
    this.running || ((this.running = !0), this.bus.send("emulator-started"));
    this.next_tick(0);
  };
  D.prototype.do_tick = function () {
    if (this.stopping || !this.running)
      (this.stopping = this.running = !1), this.bus.send("emulator-stopped");
    else {
      this.idle = !1;
      var a = this.cpu.main_loop();
      this.next_tick(a);
    }
  };
  D.prototype.next_tick = function (a) {
    const b = ++this.tick_counter;
    this.idle = !0;
    this.yield(a, b);
  };
  D.prototype.yield_callback = function (a) {
    a === this.tick_counter && this.do_tick();
  };
  D.prototype.stop = function () {
    this.running && (this.stopping = !0);
  };
  D.prototype.destroy = function () {
    this.unregister_yield();
  };
  D.prototype.restart = function () {
    this.cpu.reset_cpu();
    this.cpu.load_bios();
  };
  D.prototype.init = function (a) {
    this.cpu.init(a, this.bus);
    this.bus.send("emulator-ready");
  };
  if ("undefined" !== typeof process)
    (D.prototype.yield = function (a, b) {
      1 > a
        ? global.setImmediate((c) => this.yield_callback(c), b)
        : setTimeout((c) => this.yield_callback(c), a, b);
    }),
      (D.prototype.register_yield = function () {}),
      (D.prototype.unregister_yield = function () {});
  else if ("undefined" !== typeof Worker) {
    function a() {
      globalThis.onmessage = function (b) {
        const c = b.data.t;
        1 > c
          ? postMessage(b.data.tick)
          : setTimeout(() => postMessage(b.data.tick), c);
      };
    }
    D.prototype.register_yield = function () {
      const b = URL.createObjectURL(
        new Blob(["(" + a.toString() + ")()"], { type: "text/javascript" })
      );
      this.worker = new Worker(b);
      this.worker.onmessage = (c) => this.yield_callback(c.data);
      URL.revokeObjectURL(b);
    };
    D.prototype.yield = function (b, c) {
      this.worker.postMessage({ t: b, tick: c });
    };
    D.prototype.unregister_yield = function () {
      this.worker && this.worker.terminate();
      this.worker = null;
    };
  } else
    (D.prototype.yield = function (a) {
      setTimeout(() => {
        this.do_tick();
      }, a);
    }),
      (D.prototype.register_yield = function () {}),
      (D.prototype.unregister_yield = function () {});
  D.prototype.save_state = function () {
    return this.cpu.save_state();
  };
  D.prototype.restore_state = function (a) {
    return this.cpu.restore_state(a);
  };
  if ("object" === typeof performance && performance.now)
    D.microtick = performance.now.bind(performance);
  else if ("function" === typeof require) {
    const { performance: a } = require("perf_hooks");
    D.microtick = a.now.bind(a);
  } else
    D.microtick =
      "object" === typeof process && process.hrtime
        ? function () {
            var a = process.hrtime();
            return 1e3 * a[0] + a[1] / 1e6;
          }
        : Date.now;
  var F = F || {};
  F.exportSymbol = function () {};
  F.exportProperty = function () {};
  var r = r || {};
  r.pads = function (a, b) {
    return (a || 0 === a ? a + "" : "").padEnd(b, " ");
  };
  r.pad0 = function (a, b) {
    return (a || 0 === a ? a + "" : "").padStart(b, "0");
  };
  r.zeros = function (a) {
    return Array(a).fill(0);
  };
  r.range = function (a) {
    return Array.from(Array(a).keys());
  };
  r.view = function (a, b, c, d) {
    return new Proxy(
      {},
      {
        get: function (e, g) {
          e = new a(b.buffer, c, d);
          const f = e[g];
          if ("function" === typeof f) return f.bind(e);
          /^\d+$/.test(g);
          return f;
        },
        set: function (e, g, f) {
          /^\d+$/.test(g);
          new a(b.buffer, c, d)[g] = f;
          return !0;
        },
      }
    );
  };
  function A(a, b) {
    a = a ? a.toString(16) : "";
    return "0x" + r.pad0(a.toUpperCase(), b || 1);
  }
  if ("undefined" !== typeof crypto && crypto.getRandomValues) {
    let a = new Int32Array(1);
    r.get_rand_int = function () {
      crypto.getRandomValues(a);
      return a[0];
    };
  } else if ("undefined" !== typeof require) {
    const a = require("crypto");
    r.get_rand_int = function () {
      return a.randomBytes(4).readInt32LE(0);
    };
  }
  (function () {
    if ("function" === typeof Math.clz32)
      (r.int_log2_byte = function (d) {
        return 31 - Math.clz32(d);
      }),
        (r.int_log2 = function (d) {
          return 31 - Math.clz32(d);
        });
    else {
      for (var a = new Int8Array(256), b = 0, c = -2; 256 > b; b++)
        b & (b - 1) || c++, (a[b] = c);
      r.int_log2_byte = function (d) {
        return a[d];
      };
      r.int_log2 = function (d) {
        d >>>= 0;
        var e = d >>> 16;
        if (e) {
          var g = e >>> 8;
          return g ? 24 + a[g] : 16 + a[e];
        }
        return (g = d >>> 8) ? 8 + a[g] : a[d];
      };
    }
  })();
  function ka(a) {
    var b = new Uint8Array(a),
      c,
      d;
    this.length = 0;
    this.push = function (e) {
      this.length !== a && this.length++;
      b[d] = e;
      d = (d + 1) & (a - 1);
    };
    this.shift = function () {
      if (this.length) {
        var e = b[c];
        c = (c + 1) & (a - 1);
        this.length--;
        return e;
      }
      return -1;
    };
    this.peek = function () {
      return this.length ? b[c] : -1;
    };
    this.clear = function () {
      this.length = d = c = 0;
    };
    this.clear();
  }
  function la(a) {
    this.size = a;
    this.data = new Float32Array(a);
    this.length = this.end = this.start = 0;
  }
  la.prototype.push = function (a) {
    this.length === this.size
      ? (this.start = (this.start + 1) & (this.size - 1))
      : this.length++;
    this.data[this.end] = a;
    this.end = (this.end + 1) & (this.size - 1);
  };
  la.prototype.shift = function () {
    if (this.length) {
      var a = this.data[this.start];
      this.start = (this.start + 1) & (this.size - 1);
      this.length--;
      return a;
    }
  };
  la.prototype.shift_block = function (a) {
    var b = new Float32Array(a);
    a > this.length && (a = this.length);
    var c = this.start + a,
      d = this.data.subarray(this.start, c);
    b.set(d);
    c >= this.size &&
      ((c -= this.size), b.set(this.data.subarray(0, c), d.length));
    this.start = c;
    this.length -= a;
    return b;
  };
  la.prototype.peek = function () {
    if (this.length) return this.data[this.start];
  };
  la.prototype.clear = function () {
    this.length = this.end = this.start = 0;
  };
  r.Bitmap = function (a) {
    "number" === typeof a
      ? (this.view = new Uint8Array((a + 7) >> 3))
      : a instanceof ArrayBuffer && (this.view = new Uint8Array(a));
  };
  r.Bitmap.prototype.set = function (a, b) {
    const c = a >> 3;
    a = 1 << (a & 7);
    this.view[c] = b ? this.view[c] | a : this.view[c] & ~a;
  };
  r.Bitmap.prototype.get = function (a) {
    return (this.view[a >> 3] >> (a & 7)) & 1;
  };
  r.Bitmap.prototype.get_buffer = function () {
    return this.view.buffer;
  };
  r.load_file = "undefined" === typeof XMLHttpRequest ? ma : na;
  function na(a, b, c) {
    function d() {
      const l = c || 0;
      setTimeout(() => {
        na(a, b, l + 1);
      }, 1e3 * ([1, 1, 2, 3, 5, 8, 13, 21][l] || 34));
    }
    var e = new XMLHttpRequest();
    e.open(b.method || "get", a, !0);
    e.responseType = b.as_json ? "json" : "arraybuffer";
    if (b.headers)
      for (var g = Object.keys(b.headers), f = 0; f < g.length; f++) {
        var k = g[f];
        e.setRequestHeader(k, b.headers[k]);
      }
    b.range &&
      ((g = b.range.start),
      e.setRequestHeader(
        "Range",
        "bytes=" + g + "-" + (g + b.range.length - 1)
      ),
      e.setRequestHeader("X-Accept-Encoding", "identity"),
      (e.onreadystatechange = function () {
        200 === e.status && e.abort();
      }));
    e.onload = function () {
      if (4 === e.readyState)
        if (200 !== e.status && 206 !== e.status)
          console.error(
            "Loading the image " + a + " failed (status %d)",
            e.status
          ),
            500 <= e.status && 600 > e.status && d();
        else if (e.response) {
          if (b.range) {
            let l = e.getResponseHeader("Content-Encoding");
            l &&
              "identity" !== l &&
              console.error(
                "Server sent Content-Encoding in response to ranged request",
                { filename: a, enc: l }
              );
          }
          b.done && b.done(e.response, e);
        }
    };
    e.onerror = function (l) {
      console.error("Loading the image " + a + " failed", l);
      d();
    };
    b.progress &&
      (e.onprogress = function (l) {
        b.progress(l);
      });
    e.send(null);
  }
  function ma(a, b) {
    let c = require("fs");
    b.range
      ? c.open(a, "r", (d, e) => {
          if (d) throw d;
          d = b.range.length;
          var g = Buffer.allocUnsafe(d);
          c.read(e, g, 0, d, b.range.start, (f) => {
            if (f) throw f;
            b.done && b.done(new Uint8Array(g));
            c.close(e, (k) => {
              if (k) throw k;
            });
          });
        })
      : c.readFile(
          a,
          { encoding: b.as_json ? "utf-8" : null },
          function (d, e) {
            d
              ? console.log("Could not read file:", a, d)
              : ((d = e),
                (d = b.as_json ? JSON.parse(d) : new Uint8Array(d).buffer),
                b.done(d));
          }
        );
  }
  r.read_sized_string_from_mem = function (a, b, c) {
    return String.fromCharCode(...new Uint8Array(a.buffer, b >>> 0, c >>> 0));
  };
  (function () {
    function a(f) {
      this.buffer = f;
      this.byteLength = f.byteLength;
      this.onprogress = this.onload = void 0;
    }
    function b(f, k, l) {
      this.filename = f;
      this.byteLength = k;
      this.block_cache = new Map();
      this.block_cache_is_write = new Set();
      this.fixed_chunk_size = l;
      this.cache_reads = !!l;
      this.onprogress = this.onload = void 0;
    }
    function c(f, k, l, m, n) {
      const p = f.match(/\.[^\.]+(\.zst)?$/);
      this.extension = p ? p[0] : "";
      this.basename = f.substring(0, f.length - this.extension.length);
      this.is_zstd = this.extension.endsWith(".zst");
      this.basename.endsWith("/") || (this.basename += "-");
      this.block_cache = new Map();
      this.block_cache_is_write = new Set();
      this.byteLength = k;
      this.fixed_chunk_size = l;
      this.partfile_alt_format = !!m;
      this.zstd_decompress = n;
      this.cache_reads = !!l;
      this.onprogress = this.onload = void 0;
    }
    function d(f) {
      this.file = f;
      this.byteLength = f.size;
      1073741824 < f.size &&
        console.warn(
          "SyncFileBuffer: Allocating buffer of " + (f.size >> 20) + " MB ..."
        );
      this.buffer = new ArrayBuffer(f.size);
      this.onprogress = this.onload = void 0;
    }
    function e(f) {
      this.file = f;
      this.byteLength = f.size;
      this.block_cache = new Map();
      this.block_cache_is_write = new Set();
      this.onprogress = this.onload = void 0;
    }
    r.SyncBuffer = a;
    r.AsyncXHRBuffer = b;
    r.AsyncXHRPartfileBuffer = c;
    r.AsyncFileBuffer = e;
    r.SyncFileBuffer = d;
    r.buffer_from_object = function (f, k) {
      if (f.buffer instanceof ArrayBuffer) return new r.SyncBuffer(f.buffer);
      if ("undefined" !== typeof File && f.buffer instanceof File)
        return (
          (k = f.async),
          void 0 === k && (k = 268435456 <= f.buffer.size),
          k ? new r.AsyncFileBuffer(f.buffer) : new r.SyncFileBuffer(f.buffer)
        );
      if (f.url)
        return f.use_parts
          ? new r.AsyncXHRPartfileBuffer(
              f.url,
              f.size,
              f.fixed_chunk_size,
              !1,
              k
            )
          : new r.AsyncXHRBuffer(f.url, f.size, f.fixed_chunk_size);
    };
    a.prototype.load = function () {
      this.onload && this.onload({ buffer: this.buffer });
    };
    a.prototype.get = function (f, k, l) {
      l(new Uint8Array(this.buffer, f, k));
    };
    a.prototype.set = function (f, k, l) {
      new Uint8Array(this.buffer, f, k.byteLength).set(k);
      l();
    };
    a.prototype.get_buffer = function (f) {
      f(this.buffer);
    };
    a.prototype.get_state = function () {
      const f = [];
      f[0] = this.byteLength;
      f[1] = new Uint8Array(this.buffer);
      return f;
    };
    a.prototype.set_state = function (f) {
      this.byteLength = f[0];
      this.buffer = f[1].slice().buffer;
    };
    b.prototype.load = function () {
      void 0 !== this.byteLength
        ? this.onload && this.onload(Object.create(null))
        : g(this.filename, (f, k) => {
            if (f) throw Error("Cannot use: " + this.filename + ". " + f);
            this.byteLength = k;
            this.onload && this.onload(Object.create(null));
          });
    };
    b.prototype.get_from_cache = function (f, k) {
      var l = k / 256;
      f /= 256;
      for (var m = 0; m < l; m++) if (!this.block_cache.get(f + m)) return;
      if (1 === l) return this.block_cache.get(f);
      k = new Uint8Array(k);
      for (m = 0; m < l; m++) k.set(this.block_cache.get(f + m), 256 * m);
      return k;
    };
    b.prototype.get = function (f, k, l) {
      var m = this.get_from_cache(f, k);
      if (m) l(m);
      else {
        var n = f,
          p = k;
        this.fixed_chunk_size &&
          ((n = f - (f % this.fixed_chunk_size)),
          (p =
            Math.ceil((f - n + k) / this.fixed_chunk_size) *
            this.fixed_chunk_size));
        r.load_file(this.filename, {
          done: function (t) {
            t = new Uint8Array(t);
            this.handle_read(n, p, t);
            n === f && p === k ? l(t) : l(t.subarray(f - n, f - n + k));
          }.bind(this),
          range: { start: n, length: p },
        });
      }
    };
    b.prototype.set = function (f, k, l) {
      f /= 256;
      for (var m = k.length / 256, n = 0; n < m; n++) {
        var p = this.block_cache.get(f + n);
        if (void 0 === p)
          (p = k.slice(256 * n, 256 * (n + 1))), this.block_cache.set(f + n, p);
        else {
          const t = k.subarray(256 * n, 256 * (n + 1));
          p.set(t);
        }
        this.block_cache_is_write.add(f + n);
      }
      l();
    };
    b.prototype.handle_read = function (f, k, l) {
      f /= 256;
      k /= 256;
      for (var m = 0; m < k; m++) {
        const n = this.block_cache.get(f + m);
        n
          ? l.set(n, 256 * m)
          : this.cache_reads &&
            this.block_cache.set(f + m, l.slice(256 * m, 256 * (m + 1)));
      }
    };
    b.prototype.get_buffer = function (f) {
      f();
    };
    b.prototype.get_state = function () {
      const f = [],
        k = [];
      for (let [l, m] of this.block_cache)
        isFinite(l), this.block_cache_is_write.has(l) && k.push([l, m]);
      f[0] = k;
      return f;
    };
    b.prototype.set_state = function (f) {
      f = f[0];
      this.block_cache.clear();
      this.block_cache_is_write.clear();
      for (let [k, l] of f)
        isFinite(k),
          this.block_cache.set(k, l),
          this.block_cache_is_write.add(k);
    };
    c.prototype.load = function () {
      this.onload && this.onload(Object.create(null));
    };
    c.prototype.get = function (f, k, l) {
      var m = this.get_from_cache(f, k);
      if (m) l(m);
      else if (this.fixed_chunk_size) {
        const p = Math.floor(f / this.fixed_chunk_size),
          t = f - p * this.fixed_chunk_size,
          q = Math.ceil((t + k) / this.fixed_chunk_size),
          z = new Uint8Array(q * this.fixed_chunk_size);
        let w = 0;
        for (let u = 0; u < q; u++) {
          var n = (p + u) * this.fixed_chunk_size;
          m = this.partfile_alt_format
            ? this.basename + (p + u + "").padStart(8, "0") + this.extension
            : this.basename +
              n +
              "-" +
              (n + this.fixed_chunk_size) +
              this.extension;
          (n = this.get_from_cache(n, this.fixed_chunk_size))
            ? (z.set(n, u * this.fixed_chunk_size),
              w++,
              w === q && l(z.subarray(t, t + k)))
            : r.load_file(m, {
                done: async function (I) {
                  I = new Uint8Array(I);
                  this.is_zstd &&
                    ((I = await this.zstd_decompress(this.fixed_chunk_size, I)),
                    (I = new Uint8Array(I)));
                  z.set(I, u * this.fixed_chunk_size);
                  this.handle_read(
                    (p + u) * this.fixed_chunk_size,
                    this.fixed_chunk_size | 0,
                    I
                  );
                  w++;
                  w === q && l(z.subarray(t, t + k));
                }.bind(this),
              });
        }
      } else
        r.load_file(this.basename + f + "-" + (f + k) + this.extension, {
          done: function (p) {
            p = new Uint8Array(p);
            this.handle_read(f, k, p);
            l(p);
          }.bind(this),
        });
    };
    c.prototype.get_from_cache = b.prototype.get_from_cache;
    c.prototype.set = b.prototype.set;
    c.prototype.handle_read = b.prototype.handle_read;
    c.prototype.get_state = b.prototype.get_state;
    c.prototype.set_state = b.prototype.set_state;
    d.prototype.load = function () {
      this.load_next(0);
    };
    d.prototype.load_next = function (f) {
      var k = new FileReader();
      k.onload = function (m) {
        m = new Uint8Array(m.target.result);
        new Uint8Array(this.buffer, f).set(m);
        this.load_next(f + 4194304);
      }.bind(this);
      if (this.onprogress)
        this.onprogress({
          loaded: f,
          total: this.byteLength,
          lengthComputable: !0,
        });
      if (f < this.byteLength) {
        var l = this.file.slice(f, Math.min(f + 4194304, this.byteLength));
        k.readAsArrayBuffer(l);
      } else
        (this.file = void 0),
          this.onload && this.onload({ buffer: this.buffer });
    };
    d.prototype.get = a.prototype.get;
    d.prototype.set = a.prototype.set;
    d.prototype.get_buffer = a.prototype.get_buffer;
    d.prototype.get_state = a.prototype.get_state;
    d.prototype.set_state = a.prototype.set_state;
    e.prototype.load = function () {
      this.onload && this.onload(Object.create(null));
    };
    e.prototype.get = function (f, k, l) {
      var m = this.get_from_cache(f, k);
      m
        ? l(m)
        : ((m = new FileReader()),
          (m.onload = function (n) {
            n = new Uint8Array(n.target.result);
            this.handle_read(f, k, n);
            l(n);
          }.bind(this)),
          m.readAsArrayBuffer(this.file.slice(f, f + k)));
    };
    e.prototype.get_from_cache = b.prototype.get_from_cache;
    e.prototype.set = b.prototype.set;
    e.prototype.handle_read = b.prototype.handle_read;
    e.prototype.get_state = b.prototype.get_state;
    e.prototype.set_state = b.prototype.set_state;
    e.prototype.get_buffer = function (f) {
      f();
    };
    e.prototype.get_as_file = function (f) {
      for (
        var k = [],
          l = Array.from(this.block_cache.keys()).sort(function (q, z) {
            return q - z;
          }),
          m = 0,
          n = 0;
        n < l.length;
        n++
      ) {
        var p = l[n],
          t = this.block_cache.get(p);
        p *= 256;
        p !== m && (k.push(this.file.slice(m, p)), (m = p));
        k.push(t);
        m += t.length;
      }
      m !== this.file.size && k.push(this.file.slice(m));
      return new File(k, f);
    };
    var g =
      "undefined" === typeof XMLHttpRequest
        ? function (f, k) {
            require("fs").stat(f, (l, m) => {
              l ? k(l) : k(null, m.size);
            });
          }
        : function (f, k) {
            r.load_file(f, {
              done: (l, m) => {
                l = m.getResponseHeader("Content-Range") || "";
                (m = l.match(/\/(\d+)\s*$/))
                  ? k(null, +m[1])
                  : k(
                      "`Range: bytes=...` header not supported (Got `" +
                        l +
                        "`)"
                    );
              },
              headers: { Range: "bytes=0-0", "X-Accept-Encoding": "identity" },
            });
          };
  })();
  function G(a, b, c, d, e, g) {
    this.master = new H(this, a, b, d, e, 0, g);
    this.slave = new H(this, a, c, !1, e, 1, g);
    this.current_interface = this.master;
    this.cpu = a;
    0 === e
      ? ((this.ata_port = 496), (this.irq = 14), (this.pci_id = 240))
      : 1 === e &&
        ((this.ata_port = 368), (this.irq = 15), (this.pci_id = 248));
    this.ata_port_high = this.ata_port | 516;
    this.master_port = 46080;
    this.pci_space = [
      134,
      128,
      16,
      112,
      5,
      0,
      160,
      2,
      0,
      128,
      1,
      1,
      0,
      0,
      0,
      0,
      (this.ata_port & 255) | 1,
      this.ata_port >> 8,
      0,
      0,
      (this.ata_port_high & 255) | 1,
      this.ata_port_high >> 8,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      (this.master_port & 255) | 1,
      this.master_port >> 8,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      67,
      16,
      212,
      130,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      this.irq,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ];
    this.pci_bars = [{ size: 8 }, { size: 4 }, void 0, void 0, { size: 16 }];
    this.name = "ide" + e;
    this.device_control = 2;
    a.io.register_read(this.ata_port | 7, this, function () {
      this.cpu.device_lower_irq(this.irq);
      return this.read_status();
    });
    a.io.register_read(this.ata_port_high | 2, this, this.read_status);
    a.io.register_write(this.ata_port_high | 2, this, this.write_control);
    a.io.register_read(
      this.ata_port | 0,
      this,
      function () {
        return this.current_interface.read_data(1);
      },
      function () {
        return this.current_interface.read_data(2);
      },
      function () {
        return this.current_interface.read_data(4);
      }
    );
    a.io.register_read(this.ata_port | 1, this, function () {
      A(this.current_interface.error & 255);
      return this.current_interface.error & 255;
    });
    a.io.register_read(this.ata_port | 2, this, function () {
      A(this.current_interface.bytecount & 255);
      return this.current_interface.bytecount & 255;
    });
    a.io.register_read(this.ata_port | 3, this, function () {
      A(this.current_interface.sector & 255);
      return this.current_interface.sector & 255;
    });
    a.io.register_read(this.ata_port | 4, this, function () {
      A(this.current_interface.cylinder_low & 255);
      return this.current_interface.cylinder_low & 255;
    });
    a.io.register_read(this.ata_port | 5, this, function () {
      A(this.current_interface.cylinder_high & 255);
      return this.current_interface.cylinder_high & 255;
    });
    a.io.register_read(this.ata_port | 6, this, function () {
      return this.current_interface.drive_head & 255;
    });
    a.io.register_write(
      this.ata_port | 0,
      this,
      function (f) {
        this.current_interface.write_data_port8(f);
      },
      function (f) {
        this.current_interface.write_data_port16(f);
      },
      function (f) {
        this.current_interface.write_data_port32(f);
      }
    );
    a.io.register_write(this.ata_port | 1, this, function (f) {
      A(f);
      this.master.lba_count = ((this.master.lba_count << 8) | f) & 65535;
      this.slave.lba_count = ((this.slave.lba_count << 8) | f) & 65535;
    });
    a.io.register_write(this.ata_port | 2, this, function (f) {
      A(f);
      this.master.bytecount = ((this.master.bytecount << 8) | f) & 65535;
      this.slave.bytecount = ((this.slave.bytecount << 8) | f) & 65535;
    });
    a.io.register_write(this.ata_port | 3, this, function (f) {
      A(f);
      this.master.sector = ((this.master.sector << 8) | f) & 65535;
      this.slave.sector = ((this.slave.sector << 8) | f) & 65535;
    });
    a.io.register_write(this.ata_port | 4, this, function (f) {
      A(f);
      this.master.cylinder_low = ((this.master.cylinder_low << 8) | f) & 65535;
      this.slave.cylinder_low = ((this.slave.cylinder_low << 8) | f) & 65535;
    });
    a.io.register_write(this.ata_port | 5, this, function (f) {
      A(f);
      this.master.cylinder_high =
        ((this.master.cylinder_high << 8) | f) & 65535;
      this.slave.cylinder_high = ((this.slave.cylinder_high << 8) | f) & 65535;
    });
    a.io.register_write(this.ata_port | 6, this, function (f) {
      var k = f & 16;
      A(f, 2);
      this.current_interface = k ? this.slave : this.master;
      this.master.drive_head = f;
      this.slave.drive_head = f;
      this.master.is_lba = this.slave.is_lba = (f >> 6) & 1;
      this.master.head = this.slave.head = f & 15;
    });
    this.dma_command = this.dma_status = this.prdt_addr = 0;
    a.io.register_write(this.ata_port | 7, this, function (f) {
      this.cpu.device_lower_irq(this.irq);
      this.current_interface.ata_command(f);
    });
    a.io.register_read(
      this.master_port | 4,
      this,
      void 0,
      void 0,
      this.dma_read_addr
    );
    a.io.register_write(
      this.master_port | 4,
      this,
      void 0,
      void 0,
      this.dma_set_addr
    );
    a.io.register_read(
      this.master_port,
      this,
      this.dma_read_command8,
      void 0,
      this.dma_read_command
    );
    a.io.register_write(
      this.master_port,
      this,
      this.dma_write_command8,
      void 0,
      this.dma_write_command
    );
    a.io.register_read(this.master_port | 2, this, this.dma_read_status);
    a.io.register_write(this.master_port | 2, this, this.dma_write_status);
    a.io.register_read(this.master_port | 8, this, function () {
      return 0;
    });
    a.io.register_read(this.master_port | 10, this, function () {
      return 0;
    });
    a.devices.pci.register_device(this);
  }
  G.prototype.read_status = function () {
    if (this.current_interface.buffer) {
      var a = this.current_interface.status;
      A(a, 2);
      return a;
    }
    return 0;
  };
  G.prototype.write_control = function (a) {
    A(a, 2);
    a & 4 &&
      (this.cpu.device_lower_irq(this.irq),
      this.master.device_reset(),
      this.slave.device_reset());
    this.device_control = a;
  };
  G.prototype.dma_read_addr = function () {
    A(this.prdt_addr, 8);
    return this.prdt_addr;
  };
  G.prototype.dma_set_addr = function (a) {
    A(a, 8);
    this.prdt_addr = a;
  };
  G.prototype.dma_read_status = function () {
    A(this.dma_status);
    return this.dma_status;
  };
  G.prototype.dma_write_status = function (a) {
    A(a);
    this.dma_status &= ~(a & 6);
  };
  G.prototype.dma_read_command = function () {
    return this.dma_read_command8() | (this.dma_read_status() << 16);
  };
  G.prototype.dma_read_command8 = function () {
    A(this.dma_command);
    return this.dma_command;
  };
  G.prototype.dma_write_command = function (a) {
    A(a);
    this.dma_write_command8(a & 255);
    this.dma_write_status((a >> 16) & 255);
  };
  G.prototype.dma_write_command8 = function (a) {
    A(a);
    let b = this.dma_command;
    this.dma_command = a & 9;
    if ((b & 1) !== (a & 1))
      if (0 === (a & 1)) this.dma_status &= -2;
      else
        switch (
          ((this.dma_status |= 1), this.current_interface.current_command)
        ) {
          case 37:
          case 200:
            this.current_interface.do_ata_read_sectors_dma();
            break;
          case 202:
          case 53:
            this.current_interface.do_ata_write_sectors_dma();
            break;
          case 160:
            this.current_interface.do_atapi_dma();
            break;
          default:
            A(this.current_interface.current_command);
        }
  };
  G.prototype.push_irq = function () {
    0 === (this.device_control & 2) &&
      ((this.dma_status |= 4), this.cpu.device_raise_irq(this.irq));
  };
  G.prototype.get_state = function () {
    var a = [];
    a[0] = this.master;
    a[1] = this.slave;
    a[2] = this.ata_port;
    a[3] = this.irq;
    a[4] = this.pci_id;
    a[5] = this.ata_port_high;
    a[6] = this.master_port;
    a[7] = this.name;
    a[8] = this.device_control;
    a[9] = this.prdt_addr;
    a[10] = this.dma_status;
    a[11] = this.current_interface === this.master;
    a[12] = this.dma_command;
    return a;
  };
  G.prototype.set_state = function (a) {
    this.master.set_state(a[0]);
    this.slave.set_state(a[1]);
    this.ata_port = a[2];
    this.irq = a[3];
    this.pci_id = a[4];
    this.ata_port_high = a[5];
    this.master_port = a[6];
    this.name = a[7];
    this.device_control = a[8];
    this.prdt_addr = a[9];
    this.dma_status = a[10];
    this.current_interface = a[11] ? this.master : this.slave;
    this.dma_command = a[12];
  };
  function H(a, b, c, d, e, g, f) {
    this.device = a;
    this.bus = f;
    this.nr = e;
    this.cpu = b;
    this.buffer = c;
    this.sector_size = d ? 2048 : 512;
    this.is_atapi = d;
    this.cylinder_count =
      this.sectors_per_track =
      this.head_count =
      this.sector_count =
        0;
    this.buffer &&
      ((this.sector_count = this.buffer.byteLength / this.sector_size),
      this.sector_count !== (this.sector_count | 0) &&
        (this.sector_count = Math.ceil(this.sector_count)),
      d
        ? ((this.head_count = 1), (this.sectors_per_track = 0))
        : ((this.head_count = 16), (this.sectors_per_track = 63)),
      (this.cylinder_count =
        this.sector_count / this.head_count / this.sectors_per_track),
      this.cylinder_count !== (this.cylinder_count | 0) &&
        (this.cylinder_count = Math.floor(this.cylinder_count)),
      (a = b.devices.rtc),
      a.cmos_write(57, a.cmos_read(57) | (1 << (4 * this.nr))),
      a.cmos_write(18, (a.cmos_read(18) & 15) | 240),
      a.cmos_write(27, this.cylinder_count & 255),
      a.cmos_write(28, (this.cylinder_count >> 8) & 255),
      a.cmos_write(29, this.head_count & 255),
      a.cmos_write(30, 255),
      a.cmos_write(31, 255),
      a.cmos_write(32, 200),
      a.cmos_write(33, this.cylinder_count & 255),
      a.cmos_write(34, (this.cylinder_count >> 8) & 255),
      a.cmos_write(35, this.sectors_per_track & 255));
    this.stats = {
      sectors_read: 0,
      sectors_written: 0,
      bytes_read: 0,
      bytes_written: 0,
      loading: !1,
    };
    this.buffer = c;
    this.drive_head =
      this.head =
      this.cylinder_high =
      this.cylinder_low =
      this.lba_count =
      this.sector =
      this.bytecount =
      this.is_lba =
        0;
    this.status = 80;
    this.sectors_per_drq = 128;
    this.data_pointer = this.error = 0;
    this.data = new Uint8Array(65536);
    this.data16 = new Uint16Array(this.data.buffer);
    this.data32 = new Int32Array(this.data.buffer);
    this.data_end = this.data_length = 0;
    this.current_atapi_command = this.current_command = -1;
    this.last_io_id = this.write_dest = 0;
    this.in_progress_io_ids = new Set();
    this.cancelled_io_ids = new Set();
    Object.seal(this);
  }
  H.prototype.device_reset = function () {
    this.is_atapi
      ? ((this.status = 0),
        (this.sector = this.error = this.bytecount = 1),
        (this.cylinder_low = 20),
        (this.cylinder_high = 235))
      : ((this.status = 81),
        (this.sector = this.error = this.bytecount = 1),
        (this.cylinder_high = this.cylinder_low = 0));
    this.cancel_io_operations();
  };
  H.prototype.push_irq = function () {
    this.device.push_irq();
  };
  H.prototype.ata_command = function (a) {
    A(a);
    if (this.buffer)
      switch (((this.current_command = a), (this.error = 0), a)) {
        case 8:
          this.data_length = this.data_end = this.data_pointer = 0;
          this.device_reset();
          this.push_irq();
          break;
        case 16:
          this.status = 80;
          this.cylinder_low = 0;
          this.push_irq();
          break;
        case 248:
          this.status = 80;
          a = this.sector_count - 1;
          this.sector = a & 255;
          this.cylinder_low = (a >> 8) & 255;
          this.cylinder_high = (a >> 16) & 255;
          this.drive_head = (this.drive_head & 240) | ((a >> 24) & 15);
          this.push_irq();
          break;
        case 39:
          this.status = 80;
          a = this.sector_count - 1;
          this.sector = a & 255;
          this.cylinder_low = (a >> 8) & 255;
          this.cylinder_high = (a >> 16) & 255;
          this.sector |= ((a >> 24) << 8) & 65280;
          this.push_irq();
          break;
        case 32:
        case 36:
        case 41:
        case 196:
          this.ata_read_sectors(a);
          break;
        case 48:
        case 52:
        case 57:
        case 197:
          this.ata_write_sectors(a);
          break;
        case 144:
          this.push_irq();
          this.error = 257;
          this.status = 80;
          break;
        case 145:
          this.status = 80;
          this.push_irq();
          break;
        case 160:
          this.is_atapi &&
            ((this.status = 88),
            this.data_allocate(12),
            (this.data_end = 12),
            (this.bytecount = 1),
            this.push_irq());
          break;
        case 161:
          this.is_atapi
            ? (this.create_identify_packet(),
              (this.status = 88),
              (this.cylinder_low = 20),
              (this.cylinder_high = 235))
            : (this.status = 65);
          this.push_irq();
          break;
        case 198:
          A(this.bytecount & 255);
          this.sectors_per_drq = this.bytecount & 255;
          this.status = 80;
          this.push_irq();
          break;
        case 37:
        case 200:
          this.ata_read_sectors_dma(a);
          break;
        case 53:
        case 202:
          this.ata_write_sectors_dma(a);
          break;
        case 64:
          this.status = 80;
          this.push_irq();
          break;
        case 218:
          this.status = 65;
          this.error = 4;
          this.push_irq();
          break;
        case 224:
          this.status = 80;
          this.push_irq();
          break;
        case 225:
          this.status = 80;
          this.push_irq();
          break;
        case 231:
          this.status = 80;
          this.push_irq();
          break;
        case 236:
          if (this.is_atapi) {
            this.status = 65;
            this.error = 4;
            this.push_irq();
            break;
          }
          this.create_identify_packet();
          this.status = 88;
          this.push_irq();
          break;
        case 234:
          this.status = 80;
          this.push_irq();
          break;
        case 239:
          A(this.bytecount & 255);
          this.status = 80;
          this.push_irq();
          break;
        case 222:
          this.status = 80;
          this.push_irq();
          break;
        case 245:
          this.status = 80;
          this.push_irq();
          break;
        case 249:
          this.status = 65;
          this.error = 4;
          break;
        default:
          A(a), (this.status = 65), (this.error = 4);
      }
    else (this.error = 4), (this.status = 65), this.push_irq();
  };
  H.prototype.atapi_handle = function () {
    A(this.data[0]);
    this.data_pointer = 0;
    this.current_atapi_command = this.data[0];
    switch (this.current_atapi_command) {
      case 0:
        this.data_allocate(0);
        this.data_end = this.data_length;
        this.status = 80;
        break;
      case 3:
        this.data_allocate(this.data[4]);
        this.data_end = this.data_length;
        this.status = 88;
        this.data[0] = 240;
        this.data[2] = 5;
        this.data[7] = 8;
        break;
      case 18:
        var a = this.data[4];
        this.status = 88;
        A(this.data[1], 2);
        this.data.set([
          5, 128, 1, 49, 31, 0, 0, 0, 83, 79, 78, 89, 32, 32, 32, 32, 67, 68,
          45, 82, 79, 77, 32, 67, 68, 85, 45, 49, 48, 48, 48, 32, 49, 46, 49,
          97,
        ]);
        this.data_end = this.data_length = Math.min(36, a);
        break;
      case 26:
        this.data_allocate(this.data[4]);
        this.data_end = this.data_length;
        this.status = 88;
        break;
      case 30:
        this.data_allocate(0);
        this.data_end = this.data_length;
        this.status = 80;
        break;
      case 37:
        a = this.sector_count - 1;
        this.data_set(
          new Uint8Array([
            (a >> 24) & 255,
            (a >> 16) & 255,
            (a >> 8) & 255,
            a & 255,
            0,
            0,
            (this.sector_size >> 8) & 255,
            this.sector_size & 255,
          ])
        );
        this.data_end = this.data_length;
        this.status = 88;
        break;
      case 40:
        this.lba_count & 1
          ? this.atapi_read_dma(this.data)
          : this.atapi_read(this.data);
        break;
      case 66:
        a = this.data[8];
        this.data_allocate(Math.min(8, a));
        this.data_end = this.data_length;
        this.status = 88;
        break;
      case 67:
        a = this.data[8] | (this.data[7] << 8);
        var b = this.data[9] >> 6;
        this.data_allocate(a);
        this.data_end = this.data_length;
        A(b, 2);
        A(this.data[6]);
        0 === b
          ? ((a = this.sector_count),
            this.data.set(
              new Uint8Array([
                0,
                18,
                1,
                1,
                0,
                20,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                22,
                170,
                0,
                a >> 24,
                (a >> 16) & 255,
                (a >> 8) & 255,
                a & 255,
              ])
            ))
          : 1 === b &&
            this.data.set(
              new Uint8Array([0, 10, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0])
            );
        this.status = 88;
        break;
      case 70:
        a = this.data[8] | (this.data[7] << 8);
        a = Math.min(a, 32);
        this.data_allocate(a);
        this.data_end = this.data_length;
        this.data[0] = ((a - 4) >> 24) & 255;
        this.data[1] = ((a - 4) >> 16) & 255;
        this.data[2] = ((a - 4) >> 8) & 255;
        this.data[3] = (a - 4) & 255;
        this.data[6] = 8;
        this.data[10] = 3;
        this.status = 88;
        break;
      case 81:
        this.data_allocate(0);
        this.data_end = this.data_length;
        this.status = 80;
        break;
      case 82:
        A(this.data[0]);
        this.status = 81;
        this.data_length = 0;
        this.error = 80;
        break;
      case 90:
        a = this.data[8] | (this.data[7] << 8);
        b = this.data[2];
        A(b);
        42 === b && this.data_allocate(Math.min(30, a));
        this.data_end = this.data_length;
        this.status = 88;
        break;
      case 189:
        this.data_allocate(this.data[9] | (this.data[8] << 8));
        this.data_end = this.data_length;
        this.data[5] = 1;
        this.status = 88;
        break;
      case 74:
        this.status = 81;
        this.data_length = 0;
        this.error = 80;
        A(this.data[0]);
        break;
      case 190:
        A(this.data[0]);
        this.data_allocate(0);
        this.data_end = this.data_length;
        this.status = 80;
        break;
      default:
        (this.status = 81),
          (this.data_length = 0),
          (this.error = 80),
          A(this.data[0]);
    }
    this.bytecount = (this.bytecount & -8) | 2;
    0 === (this.status & 128) && this.push_irq();
    0 === (this.status & 128) &&
      0 === this.data_length &&
      ((this.bytecount |= 1), (this.status &= -9));
  };
  H.prototype.do_write = function () {
    this.status = 80;
    var a = this.data.subarray(0, this.data_length);
    this.ata_advance(this.current_command, this.data_length / 512);
    this.push_irq();
    this.buffer.set(this.write_dest, a, function () {});
    this.report_write(this.data_length);
  };
  H.prototype.atapi_read = function (a) {
    var b = (a[2] << 24) | (a[3] << 16) | (a[4] << 8) | a[5],
      c = (a[7] << 8) | a[8];
    a = a[1];
    var d = c * this.sector_size,
      e = b * this.sector_size;
    J(
      "CD read lba=" +
        A(b) +
        " lbacount=" +
        A(c) +
        " bytecount=" +
        A(d) +
        " flags=" +
        A(a),
      32768
    );
    this.data_length = 0;
    var g = ((this.cylinder_high << 8) & 65280) | (this.cylinder_low & 255);
    J(A(this.cylinder_high, 2) + " " + A(this.cylinder_low, 2), 32768);
    this.cylinder_low = this.cylinder_high = 0;
    65535 === g && g--;
    g > d && (g = d);
    e >= this.buffer.byteLength
      ? (oa(
          !1,
          "CD read: Outside of disk  end=" +
            A(e + d) +
            " size=" +
            A(this.buffer.byteLength),
          32768
        ),
        (this.status = 255),
        this.push_irq())
      : 0 === d
      ? ((this.status = 80), (this.data_pointer = 0))
      : ((d = Math.min(d, this.buffer.byteLength - e)),
        (this.status = 208),
        this.report_read_start(),
        this.read_buffer(e, d, (f) => {
          this.data_set(f);
          this.status = 88;
          this.bytecount = (this.bytecount & -8) | 2;
          this.push_irq();
          this.data_end = g &= -4;
          this.data_end > this.data_length &&
            (this.data_end = this.data_length);
          this.cylinder_low = this.data_end & 255;
          this.cylinder_high = (this.data_end >> 8) & 255;
          this.report_read_end(d);
        }));
  };
  H.prototype.atapi_read_dma = function (a) {
    var b = (a[2] << 24) | (a[3] << 16) | (a[4] << 8) | a[5],
      c = (a[7] << 8) | a[8];
    a = a[1];
    var d = c * this.sector_size,
      e = b * this.sector_size;
    J(
      "CD read DMA lba=" +
        A(b) +
        " lbacount=" +
        A(c) +
        " bytecount=" +
        A(d) +
        " flags=" +
        A(a),
      32768
    );
    e >= this.buffer.byteLength
      ? (oa(
          !1,
          "CD read: Outside of disk  end=" +
            A(e + d) +
            " size=" +
            A(this.buffer.byteLength),
          32768
        ),
        (this.status = 255),
        this.push_irq())
      : ((this.status = 208),
        this.report_read_start(),
        this.read_buffer(e, d, (g) => {
          this.report_read_end(d);
          this.status = 88;
          this.bytecount = (this.bytecount & -8) | 2;
          this.data_set(g);
          this.do_atapi_dma();
        }));
  };
  H.prototype.do_atapi_dma = function () {
    if (0 !== (this.device.dma_status & 1) && 0 !== (this.status & 8)) {
      var a = this.device.prdt_addr,
        b = 0,
        c = this.data;
      do {
        var d = this.cpu.read32s(a),
          e = this.cpu.read16(a + 4),
          g = this.cpu.read8(a + 7) & 128;
        e || (e = 65536);
        A(d);
        A(e);
        A(this.data_length);
        this.cpu.write_blob(
          c.subarray(b, Math.min(b + e, this.data_length)),
          d
        );
        b += e;
        a += 8;
        if (b >= this.data_length && !g) {
          A(b);
          A(this.data_length);
          A(this.current_command);
          break;
        }
      } while (!g);
      this.status = 80;
      this.device.dma_status &= -2;
      this.bytecount = (this.bytecount & -8) | 3;
      this.push_irq();
    }
  };
  H.prototype.read_data = function (a) {
    if (this.data_pointer < this.data_end) {
      A(this.data_pointer);
      var b =
        1 === a
          ? this.data[this.data_pointer]
          : 2 === a
          ? this.data16[this.data_pointer >>> 1]
          : this.data32[this.data_pointer >>> 2];
      this.data_pointer += a;
      0 === (this.data_pointer & (0 === (this.data_end & 4095) ? 4095 : 255)) &&
        (A(this.data[this.data_pointer], 2),
        A(this.data_pointer),
        A(this.data_length));
      this.data_pointer >= this.data_end && this.read_end();
      return b;
    }
    this.data_pointer += a;
    return 0;
  };
  H.prototype.read_end = function () {
    A(this.current_command);
    A(this.data_pointer);
    A(this.data_end);
    A(this.data_length);
    if (160 === this.current_command)
      if (this.data_end === this.data_length)
        (this.status = 80),
          (this.bytecount = (this.bytecount & -8) | 3),
          this.push_irq();
      else {
        this.status = 88;
        this.bytecount = (this.bytecount & -8) | 2;
        this.push_irq();
        var a = ((this.cylinder_high << 8) & 65280) | (this.cylinder_low & 255);
        this.data_end + a > this.data_length
          ? ((this.cylinder_low = (this.data_length - this.data_end) & 255),
            (this.cylinder_high =
              ((this.data_length - this.data_end) >> 8) & 255),
            (this.data_end = this.data_length))
          : (this.data_end += a);
        A(this.data_end);
      }
    else
      (this.error = 0),
        this.data_pointer >= this.data_length
          ? (this.status = 80)
          : ((a =
              196 === this.current_command || 41 === this.current_command
                ? Math.min(
                    this.sectors_per_drq,
                    (this.data_length - this.data_end) / 512
                  )
                : 1),
            this.ata_advance(this.current_command, a),
            (this.data_end += 512 * a),
            (this.status = 88),
            this.push_irq());
  };
  H.prototype.write_data_port = function (a, b) {
    if (this.data_pointer >= this.data_end)
      A(a), A(this.data_end), A(this.data_pointer);
    else {
      if (
        0 ===
          ((this.data_pointer + b) &
            (0 === (this.data_end & 4095) ? 4095 : 255)) ||
        20 > this.data_end
      )
        A(a >>> 0), A(this.data_end), A(this.data_pointer);
      1 === b
        ? (this.data[this.data_pointer++] = a)
        : 2 === b
        ? ((this.data16[this.data_pointer >>> 1] = a), (this.data_pointer += 2))
        : ((this.data32[this.data_pointer >>> 2] = a),
          (this.data_pointer += 4));
      this.data_pointer === this.data_end && this.write_end();
    }
  };
  H.prototype.write_data_port8 = function (a) {
    this.write_data_port(a, 1);
  };
  H.prototype.write_data_port16 = function (a) {
    this.write_data_port(a, 2);
  };
  H.prototype.write_data_port32 = function (a) {
    this.write_data_port(a, 4);
  };
  H.prototype.write_end = function () {
    160 === this.current_command
      ? this.atapi_handle()
      : (A(this.data_pointer),
        A(this.data_length),
        this.data_pointer >= this.data_length
          ? this.do_write()
          : (A(this.current_command),
            (this.status = 88),
            (this.data_end += 512),
            this.push_irq()));
  };
  H.prototype.ata_advance = function (a, b) {
    this.bytecount -= b;
    36 === a || 41 === a || 52 === a || 57 === a || 37 === a || 53 === a
      ? ((a = b + this.get_lba48()),
        (this.sector = (a & 255) | ((a >> 16) & 65280)),
        (this.cylinder_low = (a >> 8) & 255),
        (this.cylinder_high = (a >> 16) & 255))
      : this.is_lba
      ? ((a = b + this.get_lba28()),
        (this.sector = a & 255),
        (this.cylinder_low = (a >> 8) & 255),
        (this.cylinder_high = (a >> 16) & 255),
        (this.head = (this.head & -16) | (a & 15)))
      : ((a = b + this.get_chs()),
        (b = (a / (this.head_count * this.sectors_per_track)) | 0),
        (this.cylinder_low = b & 255),
        (this.cylinder_high = (b >> 8) & 255),
        (this.head = ((a / this.sectors_per_track) | 0) % this.head_count & 15),
        (this.sector = ((a % this.sectors_per_track) + 1) & 255),
        this.get_chs());
  };
  H.prototype.ata_read_sectors = function (a) {
    var b = 36 === a || 41 === a,
      c = this.get_count(b);
    b = this.get_lba(b);
    var d = 32 === a || 36 === a,
      e = c * this.sector_size,
      g = b * this.sector_size;
    J(
      "ATA read cmd=" +
        A(a) +
        " mode=" +
        (this.is_lba ? "lba" : "chs") +
        " lba=" +
        A(b) +
        " lbacount=" +
        A(c) +
        " bytecount=" +
        A(e),
      32768
    );
    g + e > this.buffer.byteLength
      ? ((this.status = 255), this.push_irq())
      : ((this.status = 192),
        this.report_read_start(),
        this.read_buffer(g, e, (f) => {
          this.data_set(f);
          this.status = 88;
          this.data_end = d ? 512 : Math.min(e, 512 * this.sectors_per_drq);
          this.ata_advance(a, d ? 1 : Math.min(c, this.sectors_per_track));
          this.push_irq();
          this.report_read_end(e);
        }));
  };
  H.prototype.ata_read_sectors_dma = function (a) {
    var b = 37 === a;
    a = this.get_count(b);
    b = this.get_lba(b);
    var c = a * this.sector_size,
      d = b * this.sector_size;
    A(b);
    A(a);
    A(c);
    d + c > this.buffer.byteLength
      ? ((this.status = 255), this.push_irq())
      : ((this.status = 88), (this.device.dma_status |= 1));
  };
  H.prototype.do_ata_read_sectors_dma = function () {
    var a = 37 === this.current_command,
      b = this.get_count(a);
    a = this.get_lba(a);
    var c = b * this.sector_size;
    a *= this.sector_size;
    this.report_read_start();
    this.read_buffer(a, c, (d) => {
      var e = this.device.prdt_addr,
        g = 0;
      do {
        var f = this.cpu.read32s(e),
          k = this.cpu.read16(e + 4),
          l = this.cpu.read8(e + 7) & 128;
        k || (k = 65536);
        A(f);
        A(k);
        this.cpu.write_blob(d.subarray(g, g + k), f);
        g += k;
        e += 8;
      } while (!l);
      this.ata_advance(this.current_command, b);
      this.status = 80;
      this.device.dma_status &= -2;
      this.current_command = -1;
      this.push_irq();
      this.report_read_end(c);
    });
  };
  H.prototype.ata_write_sectors = function (a) {
    var b = 52 === a || 57 === a,
      c = this.get_count(b);
    b = this.get_lba(b);
    a = 48 === a || 52 === a;
    var d = c * this.sector_size,
      e = b * this.sector_size;
    A(b);
    A(c);
    A(d);
    e + d > this.buffer.byteLength
      ? ((this.status = 255), this.push_irq())
      : ((this.status = 88),
        this.data_allocate_noclear(d),
        (this.data_end = a ? 512 : Math.min(d, 512 * this.sectors_per_drq)),
        (this.write_dest = e));
  };
  H.prototype.ata_write_sectors_dma = function (a) {
    var b = 53 === a;
    a = this.get_count(b);
    b = this.get_lba(b);
    var c = a * this.sector_size,
      d = b * this.sector_size;
    A(b);
    A(a);
    A(c);
    d + c > this.buffer.byteLength
      ? ((this.status = 255), this.push_irq())
      : ((this.status = 88), (this.device.dma_status |= 1));
  };
  H.prototype.do_ata_write_sectors_dma = function () {
    var a = 53 === this.current_command,
      b = this.get_count(a),
      c = this.get_lba(a);
    a = b * this.sector_size;
    c *= this.sector_size;
    var d = this.device.prdt_addr,
      e = 0;
    J("prdt addr: " + A(d, 8), 32768);
    const g = new Uint8Array(a);
    do {
      var f = this.cpu.read32s(d),
        k = this.cpu.read16(d + 4),
        l = this.cpu.read8(d + 7) & 128;
      k || (k = 65536);
      J("dma write transfer dest=" + A(f) + " prd_count=" + A(k), 32768);
      f = this.cpu.mem8.subarray(f, f + k);
      g.set(f, e);
      e += k;
      d += 8;
    } while (!l);
    this.buffer.set(c, g, () => {
      this.ata_advance(this.current_command, b);
      this.status = 80;
      this.push_irq();
      this.device.dma_status &= -2;
      this.current_command = -1;
    });
    this.report_write(a);
  };
  H.prototype.get_chs = function () {
    return (
      (((this.cylinder_low & 255) | ((this.cylinder_high << 8) & 65280)) *
        this.head_count +
        this.head) *
        this.sectors_per_track +
      (this.sector & 255) -
      1
    );
  };
  H.prototype.get_lba28 = function () {
    return (
      (this.sector & 255) |
      ((this.cylinder_low << 8) & 65280) |
      ((this.cylinder_high << 16) & 16711680) |
      ((this.head & 15) << 24)
    );
  };
  H.prototype.get_lba48 = function () {
    return (
      ((this.sector & 255) |
        ((this.cylinder_low << 8) & 65280) |
        ((this.cylinder_high << 16) & 16711680) |
        (((this.sector >> 8) << 24) & 4278190080)) >>>
      0
    );
  };
  H.prototype.get_lba = function (a) {
    return a
      ? this.get_lba48()
      : this.is_lba
      ? this.get_lba28()
      : this.get_chs();
  };
  H.prototype.get_count = function (a) {
    a
      ? ((a = this.bytecount), 0 === a && (a = 65536))
      : ((a = this.bytecount & 255), 0 === a && (a = 256));
    return a;
  };
  H.prototype.create_identify_packet = function () {
    if (this.drive_head & 16) this.data_allocate(0);
    else {
      for (var a = 0; 512 > a; a++) this.data[a] = 0;
      a = Math.min(16383, this.cylinder_count);
      this.data_set([
        64,
        this.is_atapi ? 133 : 0,
        a,
        a >> 8,
        0,
        0,
        this.head_count,
        this.head_count >> 8,
        this.sectors_per_track / 512,
        (this.sectors_per_track / 512) >> 8,
        0,
        2,
        this.sectors_per_track,
        this.sectors_per_track >> 8,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3,
        0,
        0,
        2,
        4,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        56,
        118,
        32,
        54,
        68,
        72,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        32,
        128,
        0,
        1,
        0,
        0,
        2,
        0,
        0,
        0,
        2,
        0,
        2,
        7,
        0,
        a,
        a >> 8,
        this.head_count,
        this.head_count >> 8,
        this.sectors_per_track,
        0,
        this.sector_count & 255,
        (this.sector_count >> 8) & 255,
        (this.sector_count >> 16) & 255,
        (this.sector_count >> 24) & 255,
        0,
        0,
        this.sector_count & 255,
        (this.sector_count >> 8) & 255,
        (this.sector_count >> 16) & 255,
        (this.sector_count >> 24) & 255,
        0,
        0,
        160 === this.current_command ? 0 : 7,
        160 === this.current_command ? 0 : 4,
        0,
        0,
        30,
        0,
        30,
        0,
        30,
        0,
        30,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        126,
        0,
        0,
        0,
        0,
        0,
        0,
        116,
        0,
        64,
        0,
        64,
        0,
        116,
        0,
        64,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        96,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        this.sector_count & 255,
        (this.sector_count >> 8) & 255,
        (this.sector_count >> 16) & 255,
        (this.sector_count >> 24) & 255,
      ]);
      this.data_end = this.data_length = 512;
    }
  };
  H.prototype.data_allocate = function (a) {
    this.data_allocate_noclear(a);
    for (var b = 0; b < (a + 3) >> 2; b++) this.data32[b] = 0;
  };
  H.prototype.data_allocate_noclear = function (a) {
    this.data.length < a &&
      ((this.data = new Uint8Array((a + 3) & -4)),
      (this.data16 = new Uint16Array(this.data.buffer)),
      (this.data32 = new Int32Array(this.data.buffer)));
    this.data_length = a;
    this.data_pointer = 0;
  };
  H.prototype.data_set = function (a) {
    this.data_allocate_noclear(a.length);
    this.data.set(a);
  };
  H.prototype.report_read_start = function () {
    this.stats.loading = !0;
    this.bus.send("ide-read-start");
  };
  H.prototype.report_read_end = function (a) {
    this.stats.loading = !1;
    var b = (a / this.sector_size) | 0;
    this.stats.sectors_read += b;
    this.stats.bytes_read += a;
    this.bus.send("ide-read-end", [this.nr, a, b]);
  };
  H.prototype.report_write = function (a) {
    var b = (a / this.sector_size) | 0;
    this.stats.sectors_written += b;
    this.stats.bytes_written += a;
    this.bus.send("ide-write-end", [this.nr, a, b]);
  };
  H.prototype.read_buffer = function (a, b, c) {
    const d = this.last_io_id++;
    this.in_progress_io_ids.add(d);
    this.buffer.get(a, b, (e) => {
      this.cancelled_io_ids.delete(d)
        ? this.in_progress_io_ids.has(d)
        : (this.in_progress_io_ids.delete(d), c(e));
    });
  };
  H.prototype.cancel_io_operations = function () {
    for (const a of this.in_progress_io_ids) this.cancelled_io_ids.add(a);
    this.in_progress_io_ids.clear();
  };
  H.prototype.get_state = function () {
    var a = [];
    a[0] = this.bytecount;
    a[1] = this.cylinder_count;
    a[2] = this.cylinder_high;
    a[3] = this.cylinder_low;
    a[4] = this.data_pointer;
    a[5] = 0;
    a[6] = 0;
    a[7] = 0;
    a[8] = 0;
    a[9] = this.drive_head;
    a[10] = this.error;
    a[11] = this.head;
    a[12] = this.head_count;
    a[13] = this.is_atapi;
    a[14] = this.is_lba;
    a[15] = this.lba_count;
    a[16] = this.data;
    a[17] = this.data_length;
    a[18] = this.sector;
    a[19] = this.sector_count;
    a[20] = this.sector_size;
    a[21] = this.sectors_per_drq;
    a[22] = this.sectors_per_track;
    a[23] = this.status;
    a[24] = this.write_dest;
    a[25] = this.current_command;
    a[26] = this.data_end;
    a[27] = this.current_atapi_command;
    a[28] = this.buffer;
    return a;
  };
  H.prototype.set_state = function (a) {
    this.bytecount = a[0];
    this.cylinder_count = a[1];
    this.cylinder_high = a[2];
    this.cylinder_low = a[3];
    this.data_pointer = a[4];
    this.drive_head = a[9];
    this.error = a[10];
    this.head = a[11];
    this.head_count = a[12];
    this.is_atapi = a[13];
    this.is_lba = a[14];
    this.lba_count = a[15];
    this.data = a[16];
    this.data_length = a[17];
    this.sector = a[18];
    this.sector_count = a[19];
    this.sector_size = a[20];
    this.sectors_per_drq = a[21];
    this.sectors_per_track = a[22];
    this.status = a[23];
    this.write_dest = a[24];
    this.current_command = a[25];
    this.data_end = a[26];
    this.current_atapi_command = a[27];
    this.data16 = new Uint16Array(this.data.buffer);
    this.data32 = new Int32Array(this.data.buffer);
    this.buffer && this.buffer.set_state(a[28]);
  };
  function pa(a) {
    this.pci_addr = new Uint8Array(4);
    this.pci_value = new Uint8Array(4);
    this.pci_response = new Uint8Array(4);
    this.pci_status = new Uint8Array(4);
    this.pci_addr32 = new Int32Array(this.pci_addr.buffer);
    this.pci_value32 = new Int32Array(this.pci_value.buffer);
    this.pci_response32 = new Int32Array(this.pci_response.buffer);
    this.pci_status32 = new Int32Array(this.pci_status.buffer);
    this.device_spaces = [];
    this.devices = [];
    this.cpu = a;
    for (var b = 0; 256 > b; b++)
      (this.device_spaces[b] = void 0), (this.devices[b] = void 0);
    this.io = a.io;
    a.io.register_write(
      3324,
      this,
      function (c) {
        this.pci_write8(this.pci_addr32[0], c);
      },
      function (c) {
        this.pci_write16(this.pci_addr32[0], c);
      },
      function (c) {
        this.pci_write32(this.pci_addr32[0], c);
      }
    );
    a.io.register_write(3325, this, function (c) {
      this.pci_write8((this.pci_addr32[0] + 1) | 0, c);
    });
    a.io.register_write(
      3326,
      this,
      function (c) {
        this.pci_write8((this.pci_addr32[0] + 2) | 0, c);
      },
      function (c) {
        this.pci_write16((this.pci_addr32[0] + 2) | 0, c);
      }
    );
    a.io.register_write(3327, this, function (c) {
      this.pci_write8((this.pci_addr32[0] + 3) | 0, c);
    });
    a.io.register_read_consecutive(
      3324,
      this,
      function () {
        return this.pci_response[0];
      },
      function () {
        return this.pci_response[1];
      },
      function () {
        return this.pci_response[2];
      },
      function () {
        return this.pci_response[3];
      }
    );
    a.io.register_read_consecutive(
      3320,
      this,
      function () {
        return this.pci_status[0];
      },
      function () {
        return this.pci_status[1];
      },
      function () {
        return this.pci_status[2];
      },
      function () {
        return this.pci_status[3];
      }
    );
    a.io.register_write_consecutive(
      3320,
      this,
      function (c) {
        this.pci_addr[0] = c & 252;
      },
      function (c) {
        2 === (this.pci_addr[1] & 6) && 6 === (c & 6)
          ? a.reboot_internal()
          : (this.pci_addr[1] = c);
      },
      function (c) {
        this.pci_addr[2] = c;
      },
      function (c) {
        this.pci_addr[3] = c;
        this.pci_query();
      }
    );
    this.register_device({
      pci_id: 0,
      pci_space: [
        134, 128, 55, 18, 0, 0, 0, 0, 2, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0,
        0, 0,
      ],
      pci_bars: [],
      name: "82441FX PMC",
    });
    this.isa_bridge = {
      pci_id: 8,
      pci_space: [
        134, 128, 0, 112, 7, 0, 0, 2, 0, 0, 1, 6, 0, 0, 128, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      pci_bars: [],
      name: "82371SB PIIX3 ISA",
    };
    this.isa_bridge_space = this.register_device(this.isa_bridge);
    this.isa_bridge_space8 = new Uint8Array(this.isa_bridge_space.buffer);
  }
  pa.prototype.get_state = function () {
    for (var a = [], b = 0; 256 > b; b++) a[b] = this.device_spaces[b];
    a[256] = this.pci_addr;
    a[257] = this.pci_value;
    a[258] = this.pci_response;
    a[259] = this.pci_status;
    return a;
  };
  pa.prototype.set_state = function (a) {
    for (var b = 0; 256 > b; b++) {
      var c = this.devices[b],
        d = a[b];
      if (c && d) {
        for (var e = 0; e < c.pci_bars.length; e++) {
          var g = d[4 + e];
          if (g & 1) {
            var f = c.pci_bars[e];
            this.set_io_bars(f, f.original_bar & 65534, g & 65534);
          }
        }
        this.device_spaces[b].set(d);
      } else d && A(b, 2);
    }
    this.pci_addr.set(a[256]);
    this.pci_value.set(a[257]);
    this.pci_response.set(a[258]);
    this.pci_status.set(a[259]);
  };
  pa.prototype.pci_query = function () {
    var a = (this.pci_addr[2] << 8) | this.pci_addr[1],
      b = this.pci_addr[0] & 252,
      c = (a >> 3) & 31;
    var d = "query enabled=" + (this.pci_addr[3] >> 7) + (" bdf=" + A(a, 4));
    d += " dev=" + A(c, 2);
    d += " addr=" + A(b, 2);
    a = this.device_spaces[a];
    void 0 !== a
      ? ((this.pci_status32[0] = -2147483648),
        (this.pci_response32[0] = b < a.byteLength ? a[b >> 2] : 0),
        (d +=
          " " +
          A(this.pci_addr32[0] >>> 0, 8) +
          " -> " +
          A(this.pci_response32[0] >>> 0, 8)))
      : ((this.pci_response32[0] = -1), (this.pci_status32[0] = 0));
  };
  pa.prototype.pci_write8 = function (a, b) {
    var c = (a >> 8) & 65535;
    a &= 255;
    var d = new Uint8Array(this.device_spaces[c].buffer);
    A(a);
    A(c >> 3, 2);
    A(a, 4);
    A(b, 2);
    d[a] = b;
  };
  pa.prototype.pci_write16 = function (a, b) {
    var c = (a >> 8) & 65535;
    a &= 255;
    var d = new Uint16Array(this.device_spaces[c].buffer);
    16 <= a && 44 > a
      ? A(a)
      : (A(a), A(c >> 3, 2), A(a, 4), A(b, 4), (d[a >>> 1] = b));
  };
  pa.prototype.pci_write32 = function (a, b) {
    var c = (a >> 8) & 65535;
    a &= 255;
    var d = this.device_spaces[c],
      e = this.devices[c];
    if (d)
      if (16 <= a && 40 > a) {
        e = e.pci_bars[(a - 16) >> 2];
        A(b >>> 0);
        A(c >> 3, 2);
        if (e) {
          c = a >> 2;
          var g = d[c] & 1;
          -1 === (b | 3 | (e.size - 1))
            ? ((b = ~(e.size - 1) | g), 0 === g && (d[c] = b))
            : 0 === g && (d[c] = e.original_bar);
          if (1 === g) {
            g = d[c] & 65534;
            var f = b & 65534;
            A(g >>> 0, 8);
            A(f >>> 0, 8);
            this.set_io_bars(e, g, f);
            d[c] = b | 1;
          }
        } else d[a >> 2] = 0;
        A(d[a >> 2] >>> 0);
      } else
        48 === a
          ? (A(c >> 3, 2),
            A(b >>> 0, 8),
            (d[a >> 2] = e.pci_rom_size
              ? -1 === (b | 2047)
                ? -e.pci_rom_size | 0
                : e.pci_rom_address | 0
              : 0))
          : 4 === a
          ? (A(c >> 3, 2), A(a, 4), A(b >>> 0, 8))
          : (A(c >> 3, 2), A(a, 4), A(b >>> 0, 8), (d[a >>> 2] = b));
  };
  pa.prototype.register_device = function (a) {
    var b = a.pci_id;
    A(b);
    var c = new Int32Array(64);
    c.set(new Int32Array(new Uint8Array(a.pci_space).buffer));
    this.device_spaces[b] = c;
    this.devices[b] = a;
    b = c.slice(4, 10);
    for (var d = 0; d < a.pci_bars.length; d++) {
      var e = a.pci_bars[d];
      if (e) {
        var g = b[d],
          f = g & 1;
        e.original_bar = g;
        e.entries = [];
        if (0 !== f)
          for (g &= -2, f = 0; f < e.size; f++)
            e.entries[f] = this.io.ports[g + f];
      }
    }
    return c;
  };
  pa.prototype.set_io_bars = function (a, b, c) {
    var d = a.size;
    A(b);
    A(c);
    for (var e = this.io.ports, g = 0; g < d; g++) {
      var f = e[b + g];
      4096 <= b + g && (e[b + g] = this.io.create_empty_entry());
      f.read8 === this.io.empty_port_read8 &&
        f.read16 === this.io.empty_port_read16 &&
        f.read32 === this.io.empty_port_read32 &&
        f.write8 === this.io.empty_port_write &&
        f.write16 === this.io.empty_port_write &&
        f.write32 === this.io.empty_port_write &&
        A(b + g, 4);
      f = a.entries[g];
      var k = e[c + g];
      4096 <= c + g && (e[c + g] = f);
      (k.read8 !== this.io.empty_port_read8 &&
        k.read16 !== this.io.empty_port_read16 &&
        k.read32 !== this.io.empty_port_read32 &&
        k.write8 !== this.io.empty_port_write &&
        k.write16 !== this.io.empty_port_write &&
        k.write32 !== this.io.empty_port_write) ||
        A(c + g, 4);
    }
  };
  pa.prototype.raise_irq = function (a) {
    this.cpu.device_raise_irq(
      this.isa_bridge_space8[
        96 +
          ((((this.device_spaces[a][15] >> 8) & 255) -
            1 +
            (((a >> 3) - 1) & 255)) &
            3)
      ]
    );
  };
  pa.prototype.lower_irq = function (a) {
    this.cpu.device_lower_irq(
      this.isa_bridge_space8[
        96 +
          ((((this.device_spaces[a][15] >> 8) & 255) + ((a >> 3) & 255) - 2) &
            3)
      ]
    );
  };
  function K(a, b) {
    this.io = a.io;
    this.cpu = a;
    this.dma = a.devices.dma;
    this.bytes_expecting = 0;
    this.receiving_command = new Uint8Array(10);
    this.receiving_index = 0;
    this.next_command = null;
    this.response_data = new Uint8Array(10);
    this.last_head =
      this.last_cylinder =
      this.drive =
      this.status_reg2 =
      this.status_reg1 =
      this.status_reg0 =
      this.response_length =
      this.response_index =
        0;
    this.last_sector = 1;
    this.dir = this.dor = 0;
    this.fdb_image = this.fda_image = null;
    b
      ? this.set_fda(b)
      : (this.eject_fda(), this.cpu.devices.rtc.cmos_write(16, 64));
    this.io.register_read(1008, this, this.port3F0_read);
    this.io.register_read(1010, this, this.port3F2_read);
    this.io.register_read(1012, this, this.port3F4_read);
    this.io.register_read(1013, this, this.port3F5_read);
    this.io.register_read(1015, this, this.port3F7_read);
    this.io.register_write(1010, this, this.port3F2_write);
    this.io.register_write(1012, this, this.port3F4_write);
    this.io.register_write(1013, this, this.port3F5_write);
  }
  K.prototype.eject_fda = function () {
    this.fda_image = null;
    this.number_of_cylinders =
      this.number_of_heads =
      this.sectors_per_track =
        0;
    this.dir = 128;
  };
  K.prototype.set_fda = function (a) {
    var b = {
      [163840]: { type: 1, tracks: 40, sectors: 8, heads: 1 },
      [184320]: { type: 1, tracks: 40, sectors: 9, heads: 1 },
      [204800]: { type: 1, tracks: 40, sectors: 10, heads: 1 },
      [327680]: { type: 1, tracks: 40, sectors: 8, heads: 2 },
      [368640]: { type: 1, tracks: 40, sectors: 9, heads: 2 },
      [409600]: { type: 1, tracks: 40, sectors: 10, heads: 2 },
      [737280]: { type: 3, tracks: 80, sectors: 9, heads: 2 },
      [1228800]: { type: 2, tracks: 80, sectors: 15, heads: 2 },
      [1474560]: { type: 4, tracks: 80, sectors: 18, heads: 2 },
      [1763328]: { type: 5, tracks: 82, sectors: 21, heads: 2 },
      [2949120]: { type: 5, tracks: 80, sectors: 36, heads: 2 },
      512: { type: 1, tracks: 1, sectors: 1, heads: 1 },
    };
    let c = a.byteLength,
      d = b[c];
    d ||
      ((c = 1474560 < a.byteLength ? 2949120 : 1474560),
      (d = b[c]),
      (b = new Uint8Array(c)),
      b.set(new Uint8Array(a.buffer)),
      (a = new r.SyncBuffer(b.buffer)));
    this.sectors_per_track = d.sectors;
    this.number_of_heads = d.heads;
    this.number_of_cylinders = d.tracks;
    this.fda_image = a;
    this.dir = 128;
    this.cpu.devices.rtc.cmos_write(16, d.type << 4);
  };
  K.prototype.get_state = function () {
    var a = [];
    a[0] = this.bytes_expecting;
    a[1] = this.receiving_command;
    a[2] = this.receiving_index;
    a[4] = this.response_data;
    a[5] = this.response_index;
    a[6] = this.response_length;
    a[8] = this.status_reg0;
    a[9] = this.status_reg1;
    a[10] = this.status_reg2;
    a[11] = this.drive;
    a[12] = this.last_cylinder;
    a[13] = this.last_head;
    a[14] = this.last_sector;
    a[15] = this.dor;
    a[16] = this.sectors_per_track;
    a[17] = this.number_of_heads;
    a[18] = this.number_of_cylinders;
    return a;
  };
  K.prototype.set_state = function (a) {
    this.bytes_expecting = a[0];
    this.receiving_command = a[1];
    this.receiving_index = a[2];
    this.next_command = a[3];
    this.response_data = a[4];
    this.response_index = a[5];
    this.response_length = a[6];
    this.status_reg0 = a[8];
    this.status_reg1 = a[9];
    this.status_reg2 = a[10];
    this.drive = a[11];
    this.last_cylinder = a[12];
    this.last_head = a[13];
    this.last_sector = a[14];
    this.dor = a[15];
    this.sectors_per_track = a[16];
    this.number_of_heads = a[17];
    this.number_of_cylinders = a[18];
  };
  K.prototype.port3F0_read = function () {
    return 0;
  };
  K.prototype.port3F4_read = function () {
    var a = 128;
    this.response_index < this.response_length && (a |= 80);
    0 === (this.dor & 8) && (a |= 32);
    return a;
  };
  K.prototype.port3F7_read = function () {
    return this.dir;
  };
  K.prototype.port3F5_read = function () {
    return this.response_index < this.response_length
      ? (this.cpu.device_lower_irq(6),
        this.response_data[this.response_index++])
      : 255;
  };
  K.prototype.port3F4_write = function (a) {
    A(a);
    a & 128 && ((this.status_reg0 = 192), this.cpu.device_raise_irq(6));
  };
  K.prototype.port3F5_write = function (a) {
    J("3F5 write " + A(a), 8192);
    if (0 < this.bytes_expecting)
      (this.receiving_command[this.receiving_index++] = a),
        this.bytes_expecting--,
        0 === this.bytes_expecting &&
          this.next_command.call(this, this.receiving_command);
    else {
      switch (a) {
        case 3:
          this.next_command = this.fix_drive_data;
          this.bytes_expecting = 2;
          break;
        case 19:
          this.next_command = this.configure;
          this.bytes_expecting = 3;
          break;
        case 4:
          this.next_command = this.check_drive_status;
          this.bytes_expecting = 1;
          break;
        case 5:
        case 69:
        case 197:
          this.next_command = function (b) {
            this.do_sector(!0, b);
          };
          this.bytes_expecting = 8;
          break;
        case 6:
        case 70:
        case 230:
          this.next_command = function (b) {
            this.do_sector(!1, b);
          };
          this.bytes_expecting = 8;
          break;
        case 7:
          this.next_command = this.calibrate;
          this.bytes_expecting = 1;
          break;
        case 8:
          this.check_interrupt_status();
          break;
        case 74:
          this.next_command = this.read_sector_id;
          this.bytes_expecting = 1;
          break;
        case 15:
          this.bytes_expecting = 2;
          this.next_command = this.seek;
          break;
        case 14:
        case 16:
          this.status_reg0 = 128;
          this.response_data[0] = this.status_reg0;
          this.response_index = 0;
          this.response_length = 1;
          this.bytes_expecting = 0;
          break;
        default:
          oa(!1, "Unimplemented floppy command call " + A(a));
      }
      this.receiving_index = 0;
    }
  };
  K.prototype.port3F2_read = function () {
    return this.dor;
  };
  K.prototype.port3F2_write = function (a) {
    4 === (a & 4) &&
      0 === (this.dor & 4) &&
      ((this.status_reg0 = 192), this.cpu.device_raise_irq(6));
    A(a >> 4);
    A(a);
    this.dor = a;
  };
  K.prototype.check_drive_status = function () {
    this.status_reg1 = this.fda_image ? 0 : 5;
    this.response_index = 0;
    this.response_length = 1;
    this.response_data[0] = 0;
  };
  K.prototype.seek = function (a) {
    if (0 === (a[0] & 3)) {
      var b = a[1];
      a = (a[0] >> 2) & 1;
      b !== this.last_cylinder && (this.dir = 0);
      this.status_reg1 = this.fda_image ? 0 : 5;
      this.status_reg0 = 32;
      this.last_cylinder = b;
      this.last_head = a;
    }
    this.raise_irq();
  };
  K.prototype.calibrate = function (a) {
    this.seek([a[0], 0]);
  };
  K.prototype.check_interrupt_status = function () {
    this.response_index = 0;
    this.response_length = 2;
    this.response_data[0] = this.status_reg0;
    this.response_data[1] = this.last_cylinder;
  };
  K.prototype.do_sector = function (a, b) {
    var c = b[2],
      d = b[1],
      e = b[3],
      g = 128 << b[4],
      f = b[5] - b[3] + 1,
      k = ((c + this.number_of_heads * d) * this.sectors_per_track + e - 1) * g;
    A(k);
    A(f * g);
    this.fda_image
      ? ((this.status_reg1 = 0),
        a
          ? this.dma.do_write(
              this.fda_image,
              k,
              f * g,
              2,
              this.done.bind(this, b, d, c, e)
            )
          : this.dma.do_read(
              this.fda_image,
              k,
              f * g,
              2,
              this.done.bind(this, b, d, c, e)
            ))
      : (this.status_reg1 = 5);
  };
  K.prototype.done = function (a, b, c, d, e) {
    e ||
      (d++,
      d > this.sectors_per_track &&
        ((d = 1), c++, c >= this.number_of_heads && ((c = 0), b++)),
      b !== this.last_cylinder && (this.dir = 0),
      (this.status_reg0 = 32),
      (this.last_cylinder = b),
      (this.last_head = c),
      (this.last_sector = d),
      (this.response_index = 0),
      (this.response_length = 7),
      (this.response_data[0] = (c << 2) | 32),
      (this.response_data[1] = 0),
      (this.response_data[2] = 0),
      (this.response_data[3] = b),
      (this.response_data[4] = c),
      (this.response_data[5] = d),
      (this.response_data[6] = a[4]),
      this.raise_irq());
  };
  K.prototype.fix_drive_data = function (a) {
    a.slice(0, this.bytes_expecting);
  };
  K.prototype.configure = function (a) {
    a.slice(0, this.bytes_expecting);
  };
  K.prototype.read_sector_id = function () {
    this.response_index = 0;
    this.response_length = 7;
    this.response_data[0] = 0;
    this.response_data[1] = 0;
    this.response_data[2] = 0;
    this.response_data[3] = 0;
    this.response_data[4] = 0;
    this.response_data[5] = 0;
    this.response_data[6] = 0;
    this.raise_irq();
  };
  K.prototype.raise_irq = function () {
    this.dor & 8 && this.cpu.device_raise_irq(6);
  };
  E.prototype.mmap_read8 = function (a) {
    return this.memory_map_read8[a >>> 17](a);
  };
  E.prototype.mmap_write8 = function (a, b) {
    this.memory_map_write8[a >>> 17](a, b);
  };
  E.prototype.mmap_read16 = function (a) {
    var b = this.memory_map_read8[a >>> 17];
    return b(a) | (b((a + 1) | 0) << 8);
  };
  E.prototype.mmap_write16 = function (a, b) {
    var c = this.memory_map_write8[a >>> 17];
    c(a, b & 255);
    c((a + 1) | 0, b >> 8);
  };
  E.prototype.mmap_read32 = function (a) {
    return this.memory_map_read32[a >>> 17](a);
  };
  E.prototype.mmap_write32 = function (a, b) {
    this.memory_map_write32[a >>> 17](a, b);
  };
  E.prototype.mmap_write64 = function (a, b, c) {
    var d = this.memory_map_write32[a >>> 17];
    d(a, b);
    d(a + 4, c);
  };
  E.prototype.mmap_write128 = function (a, b, c, d, e) {
    var g = this.memory_map_write32[a >>> 17];
    g(a, b);
    g(a + 4, c);
    g(a + 8, d);
    g(a + 12, e);
  };
  E.prototype.write_blob = function (a, b) {
    a.length &&
      (this.in_mapped_range(b),
      this.in_mapped_range(b + a.length - 1),
      this.jit_dirty_cache(b, b + a.length),
      this.mem8.set(a, b));
  };
  E.prototype.read_blob = function (a, b) {
    b && (this.in_mapped_range(a), this.in_mapped_range(a + b - 1));
    return this.mem8.subarray(a, a + b);
  };
  function L(a) {
    this.cpu = a;
    this.channel_page = new Uint8Array(8);
    this.channel_pagehi = new Uint8Array(8);
    this.channel_addr = new Uint16Array(8);
    this.channel_addr_init = new Uint16Array(8);
    this.channel_count = new Uint16Array(8);
    this.channel_count_init = new Uint16Array(8);
    this.channel_mask = new Uint8Array(8);
    this.channel_mode = new Uint8Array(8);
    this.unmask_listeners = [];
    this.lsb_msb_flipflop = 0;
    a = a.io;
    a.register_write(0, this, this.port_addr_write.bind(this, 0));
    a.register_write(2, this, this.port_addr_write.bind(this, 1));
    a.register_write(4, this, this.port_addr_write.bind(this, 2));
    a.register_write(6, this, this.port_addr_write.bind(this, 3));
    a.register_write(1, this, this.port_count_write.bind(this, 0));
    a.register_write(3, this, this.port_count_write.bind(this, 1));
    a.register_write(5, this, this.port_count_write.bind(this, 2));
    a.register_write(7, this, this.port_count_write.bind(this, 3));
    a.register_read(0, this, this.port_addr_read.bind(this, 0));
    a.register_read(2, this, this.port_addr_read.bind(this, 1));
    a.register_read(4, this, this.port_addr_read.bind(this, 2));
    a.register_read(6, this, this.port_addr_read.bind(this, 3));
    a.register_read(1, this, this.port_count_read.bind(this, 0));
    a.register_read(3, this, this.port_count_read.bind(this, 1));
    a.register_read(5, this, this.port_count_read.bind(this, 2));
    a.register_read(7, this, this.port_count_read.bind(this, 3));
    a.register_write(192, this, this.port_addr_write.bind(this, 4));
    a.register_write(196, this, this.port_addr_write.bind(this, 5));
    a.register_write(200, this, this.port_addr_write.bind(this, 6));
    a.register_write(204, this, this.port_addr_write.bind(this, 7));
    a.register_write(194, this, this.port_count_write.bind(this, 4));
    a.register_write(198, this, this.port_count_write.bind(this, 5));
    a.register_write(202, this, this.port_count_write.bind(this, 6));
    a.register_write(206, this, this.port_count_write.bind(this, 7));
    a.register_read(192, this, this.port_addr_read.bind(this, 4));
    a.register_read(196, this, this.port_addr_read.bind(this, 5));
    a.register_read(200, this, this.port_addr_read.bind(this, 6));
    a.register_read(204, this, this.port_addr_read.bind(this, 7));
    a.register_read(194, this, this.port_count_read.bind(this, 4));
    a.register_read(198, this, this.port_count_read.bind(this, 5));
    a.register_read(202, this, this.port_count_read.bind(this, 6));
    a.register_read(206, this, this.port_count_read.bind(this, 7));
    a.register_write(135, this, this.port_page_write.bind(this, 0));
    a.register_write(131, this, this.port_page_write.bind(this, 1));
    a.register_write(129, this, this.port_page_write.bind(this, 2));
    a.register_write(130, this, this.port_page_write.bind(this, 3));
    a.register_write(143, this, this.port_page_write.bind(this, 4));
    a.register_write(139, this, this.port_page_write.bind(this, 5));
    a.register_write(137, this, this.port_page_write.bind(this, 6));
    a.register_write(138, this, this.port_page_write.bind(this, 7));
    a.register_read(135, this, this.port_page_read.bind(this, 0));
    a.register_read(131, this, this.port_page_read.bind(this, 1));
    a.register_read(129, this, this.port_page_read.bind(this, 2));
    a.register_read(130, this, this.port_page_read.bind(this, 3));
    a.register_read(143, this, this.port_page_read.bind(this, 4));
    a.register_read(139, this, this.port_page_read.bind(this, 5));
    a.register_read(137, this, this.port_page_read.bind(this, 6));
    a.register_read(138, this, this.port_page_read.bind(this, 7));
    a.register_write(1159, this, this.port_pagehi_write.bind(this, 0));
    a.register_write(1155, this, this.port_pagehi_write.bind(this, 1));
    a.register_write(1153, this, this.port_pagehi_write.bind(this, 2));
    a.register_write(1154, this, this.port_pagehi_write.bind(this, 3));
    a.register_write(1163, this, this.port_pagehi_write.bind(this, 5));
    a.register_write(1161, this, this.port_pagehi_write.bind(this, 6));
    a.register_write(1162, this, this.port_pagehi_write.bind(this, 7));
    a.register_read(1159, this, this.port_pagehi_read.bind(this, 0));
    a.register_read(1155, this, this.port_pagehi_read.bind(this, 1));
    a.register_read(1153, this, this.port_pagehi_read.bind(this, 2));
    a.register_read(1154, this, this.port_pagehi_read.bind(this, 3));
    a.register_read(1163, this, this.port_pagehi_read.bind(this, 5));
    a.register_read(1161, this, this.port_pagehi_read.bind(this, 6));
    a.register_read(1162, this, this.port_pagehi_read.bind(this, 7));
    a.register_write(10, this, this.port_singlemask_write.bind(this, 0));
    a.register_write(212, this, this.port_singlemask_write.bind(this, 4));
    a.register_write(15, this, this.port_multimask_write.bind(this, 0));
    a.register_write(222, this, this.port_multimask_write.bind(this, 4));
    a.register_read(15, this, this.port_multimask_read.bind(this, 0));
    a.register_read(222, this, this.port_multimask_read.bind(this, 4));
    a.register_write(11, this, this.port_mode_write.bind(this, 0));
    a.register_write(214, this, this.port_mode_write.bind(this, 4));
    a.register_write(12, this, this.portC_write);
    a.register_write(216, this, this.portC_write);
  }
  L.prototype.get_state = function () {
    return [
      this.channel_page,
      this.channel_pagehi,
      this.channel_addr,
      this.channel_addr_init,
      this.channel_count,
      this.channel_count_init,
      this.channel_mask,
      this.channel_mode,
      this.lsb_msb_flipflop,
    ];
  };
  L.prototype.set_state = function (a) {
    this.channel_page = a[0];
    this.channel_pagehi = a[1];
    this.channel_addr = a[2];
    this.channel_addr_init = a[3];
    this.channel_count = a[4];
    this.channel_count_init = a[5];
    this.channel_mask = a[6];
    this.channel_mode = a[7];
    this.lsb_msb_flipflop = a[8];
  };
  L.prototype.port_count_write = function (a, b) {
    A(b);
    this.channel_count[a] = this.flipflop_get(this.channel_count[a], b, !1);
    this.channel_count_init[a] = this.flipflop_get(
      this.channel_count_init[a],
      b,
      !0
    );
  };
  L.prototype.port_count_read = function (a) {
    A(this.channel_count[a]);
    return this.flipflop_read(this.channel_count[a]);
  };
  L.prototype.port_addr_write = function (a, b) {
    A(b);
    this.channel_addr[a] = this.flipflop_get(this.channel_addr[a], b, !1);
    this.channel_addr_init[a] = this.flipflop_get(
      this.channel_addr_init[a],
      b,
      !0
    );
  };
  L.prototype.port_addr_read = function (a) {
    A(this.channel_addr[a]);
    return this.flipflop_read(this.channel_addr[a]);
  };
  L.prototype.port_pagehi_write = function (a, b) {
    A(b);
    this.channel_pagehi[a] = b;
  };
  L.prototype.port_pagehi_read = function (a) {
    return this.channel_pagehi[a];
  };
  L.prototype.port_page_write = function (a, b) {
    A(b);
    this.channel_page[a] = b;
  };
  L.prototype.port_page_read = function (a) {
    return this.channel_page[a];
  };
  L.prototype.port_singlemask_write = function (a, b) {
    this.update_mask((b & 3) + a, b & 4 ? 1 : 0);
  };
  L.prototype.port_multimask_write = function (a, b) {
    A(b);
    for (var c = 0; 4 > c; c++) this.update_mask(a + c, b & (1 << c));
  };
  L.prototype.port_multimask_read = function (a) {
    var b = 0 | this.channel_mask[a + 0];
    b |= this.channel_mask[a + 1] << 1;
    b |= this.channel_mask[a + 2] << 2;
    b |= this.channel_mask[a + 3] << 3;
    A(b);
    return b;
  };
  L.prototype.port_mode_write = function (a, b) {
    a = (b & 3) + a;
    A(b);
    this.channel_mode[a] = b;
  };
  L.prototype.portC_write = function () {
    this.lsb_msb_flipflop = 0;
  };
  L.prototype.on_unmask = function (a, b) {
    this.unmask_listeners.push({ fn: a, this_value: b });
  };
  L.prototype.update_mask = function (a, b) {
    if (this.channel_mask[a] !== b && ((this.channel_mask[a] = b), !b))
      for (b = 0; b < this.unmask_listeners.length; b++)
        this.unmask_listeners[b].fn.call(
          this.unmask_listeners[b].this_value,
          a
        );
  };
  L.prototype.do_read = function (a, b, c, d, e) {
    var g = this.count_get_8bit(d),
      f = this.address_get_8bit(d);
    J("to " + A(f) + " len " + A(g), 16);
    c < g && J("DMA should read more than provided: " + A(c) + " " + A(g), 16);
    if (b + g > a.byteLength) e(!0);
    else {
      var k = this.cpu;
      this.channel_addr[d] += g;
      a.get(b, g, function (l) {
        k.write_blob(l, f);
        e(!1);
      });
    }
  };
  L.prototype.do_write = function (a, b, c, d, e) {
    var g = (this.channel_count[d] + 1) & 65535,
      f = 5 <= d ? 2 : 1,
      k = g * f,
      l = this.address_get_8bit(d),
      m = !1,
      n = !1,
      p = this.channel_mode[d] & 16;
    J("to " + A(l) + " len " + A(k), 16);
    c < k
      ? ((g = Math.floor(c / f)), (k = g * f), (m = !0))
      : c > k && (n = !0);
    b + k > a.byteLength
      ? e(!0)
      : ((this.channel_addr[d] += g),
        (this.channel_count[d] -= g),
        !m &&
          p &&
          ((this.channel_addr[d] = this.channel_addr_init[d]),
          (this.channel_count[d] = this.channel_count_init[d])),
        a.set(b, this.cpu.mem8.subarray(l, l + k), () => {
          n && p ? this.do_write(a, b + k, c - k, d, e) : e(!1);
        }));
  };
  L.prototype.address_get_8bit = function (a) {
    var b = this.channel_addr[a];
    5 <= a && (b <<= 1);
    b = (b & 65535) | (this.channel_page[a] << 16);
    return (b |= this.channel_pagehi[a] << 24);
  };
  L.prototype.count_get_8bit = function (a) {
    var b = this.channel_count[a] + 1;
    5 <= a && (b *= 2);
    return b;
  };
  L.prototype.flipflop_get = function (a, b, c) {
    c || (this.lsb_msb_flipflop ^= 1);
    return this.lsb_msb_flipflop ? (a & -256) | b : (a & -65281) | (b << 8);
  };
  L.prototype.flipflop_read = function (a) {
    return (this.lsb_msb_flipflop ^= 1) ? a & 255 : (a >> 8) & 255;
  };
  function qa(a, b) {
    this.cpu = a;
    this.bus = b;
    this.counter_start_time = new Float64Array(3);
    this.counter_start_value = new Uint16Array(3);
    this.counter_next_low = new Uint8Array(4);
    this.counter_enabled = new Uint8Array(4);
    this.counter_mode = new Uint8Array(4);
    this.counter_read_mode = new Uint8Array(4);
    this.counter_latch = new Uint8Array(4);
    this.counter_latch_value = new Uint16Array(3);
    this.counter_reload = new Uint16Array(3);
    a.io.register_read(97, this, function () {
      var c = D.microtick(),
        d = (66.66666666666667 * c) & 1;
      c = this.did_rollover(2, c);
      return (d << 4) | (c << 5);
    });
    a.io.register_write(97, this, function (c) {
      c & 1
        ? this.bus.send("pcspeaker-enable")
        : this.bus.send("pcspeaker-disable");
    });
    a.io.register_read(64, this, function () {
      return this.counter_read(0);
    });
    a.io.register_read(65, this, function () {
      return this.counter_read(1);
    });
    a.io.register_read(66, this, function () {
      return this.counter_read(2);
    });
    a.io.register_write(64, this, function (c) {
      this.counter_write(0, c);
    });
    a.io.register_write(65, this, function (c) {
      this.counter_write(1, c);
    });
    a.io.register_write(66, this, function (c) {
      this.counter_write(2, c);
      this.bus.send("pcspeaker-update", [
        this.counter_mode[2],
        this.counter_reload[2],
      ]);
    });
    a.io.register_write(67, this, this.port43_write);
  }
  qa.prototype.get_state = function () {
    var a = [];
    a[0] = this.counter_next_low;
    a[1] = this.counter_enabled;
    a[2] = this.counter_mode;
    a[3] = this.counter_read_mode;
    a[4] = this.counter_latch;
    a[5] = this.counter_latch_value;
    a[6] = this.counter_reload;
    a[7] = this.counter_start_time;
    a[8] = this.counter_start_value;
    return a;
  };
  qa.prototype.set_state = function (a) {
    this.counter_next_low = a[0];
    this.counter_enabled = a[1];
    this.counter_mode = a[2];
    this.counter_read_mode = a[3];
    this.counter_latch = a[4];
    this.counter_latch_value = a[5];
    this.counter_reload = a[6];
    this.counter_start_time = a[7];
    this.counter_start_value = a[8];
  };
  qa.prototype.timer = function (a, b) {
    var c = 100;
    b ||
      (this.counter_enabled[0] && this.did_rollover(0, a)
        ? ((this.counter_start_value[0] = this.get_counter_value(0, a)),
          (this.counter_start_time[0] = a),
          this.cpu.device_lower_irq(0),
          this.cpu.device_raise_irq(0),
          0 === this.counter_mode[0] && (this.counter_enabled[0] = 0))
        : this.cpu.device_lower_irq(0),
      this.counter_enabled[0] &&
        (c =
          (this.counter_start_value[0] -
            Math.floor(1193.1816666 * (a - this.counter_start_time[0]))) /
          1193.1816666));
    return c;
  };
  qa.prototype.get_counter_value = function (a, b) {
    if (!this.counter_enabled[a]) return 0;
    b =
      this.counter_start_value[a] -
      Math.floor(1193.1816666 * (b - this.counter_start_time[a]));
    a = this.counter_reload[a];
    b >= a ? (b %= a) : 0 > b && (b = (b % a) + a);
    return b;
  };
  qa.prototype.did_rollover = function (a, b) {
    b -= this.counter_start_time[a];
    return 0 > b
      ? !0
      : this.counter_start_value[a] < Math.floor(1193.1816666 * b);
  };
  qa.prototype.counter_read = function (a) {
    var b = this.counter_latch[a];
    if (b)
      return (
        this.counter_latch[a]--,
        2 === b
          ? this.counter_latch_value[a] & 255
          : this.counter_latch_value[a] >> 8
      );
    b = this.counter_next_low[a];
    3 === this.counter_mode[a] && (this.counter_next_low[a] ^= 1);
    a = this.get_counter_value(a, D.microtick());
    return b ? a & 255 : a >> 8;
  };
  qa.prototype.counter_write = function (a, b) {
    this.counter_reload[a] = this.counter_next_low[a]
      ? (this.counter_reload[a] & -256) | b
      : (this.counter_reload[a] & 255) | (b << 8);
    (3 === this.counter_read_mode[a] && this.counter_next_low[a]) ||
      (this.counter_reload[a] || (this.counter_reload[a] = 65535),
      (this.counter_start_value[a] = this.counter_reload[a]),
      (this.counter_enabled[a] = !0),
      (this.counter_start_time[a] = D.microtick()),
      A(this.counter_reload[a]));
    3 === this.counter_read_mode[a] && (this.counter_next_low[a] ^= 1);
  };
  qa.prototype.port43_write = function (a) {
    var b = (a >> 1) & 7,
      c = (a >> 6) & 3;
    a = (a >> 4) & 3;
    3 !== c &&
      (0 === a
        ? ((this.counter_latch[c] = 2),
          (b = this.get_counter_value(c, D.microtick())),
          (this.counter_latch_value[c] = b ? b - 1 : 0))
        : (6 <= b && (b &= -5),
          (this.counter_next_low[c] = 1 === a ? 0 : 1),
          0 === c && this.cpu.device_lower_irq(0),
          0 !== b && 3 !== b && 2 !== b && A(b),
          (this.counter_mode[c] = b),
          (this.counter_read_mode[c] = a),
          2 === c &&
            this.bus.send("pcspeaker-update", [
              this.counter_mode[2],
              this.counter_reload[2],
            ])));
  };
  qa.prototype.dump = function () {};
  var ra = Uint32Array.from([655360, 655360, 720896, 753664]),
    ua = Uint32Array.from([131072, 65536, 32768, 32768]);
  function M(a, b, c) {
    this.cpu = a;
    this.bus = b;
    this.vga_memory_size = c;
    this.cursor_address = 0;
    this.cursor_scanline_start = 14;
    this.cursor_scanline_end = 15;
    this.max_cols = 80;
    this.max_rows = 25;
    this.virtual_height =
      this.virtual_width =
      this.screen_height =
      this.screen_width =
        0;
    this.layers = [];
    this.start_address_latched = this.start_address = 0;
    this.crtc = new Uint8Array(25);
    this.line_compare =
      this.offset_register =
      this.preset_row_scan =
      this.underline_location_register =
      this.vertical_blank_start =
      this.vertical_display_enable_end =
      this.horizontal_blank_start =
      this.horizontal_display_enable_end =
      this.crtc_mode =
        0;
    this.graphical_mode_is_linear = !0;
    this.graphical_mode = !1;
    setTimeout(() => {
      b.send("screen-set-mode", this.graphical_mode);
    }, 0);
    this.vga256_palette = new Int32Array(256);
    this.latch_dword = 0;
    this.svga_version = 45253;
    this.svga_height = this.svga_width = 0;
    this.svga_enabled = !1;
    this.svga_bpp = 32;
    this.svga_offset_y = this.svga_offset = this.svga_bank_offset = 0;
    this.pci_space = [
      52, 18, 17, 17, 3, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 8, 14680064, 57344,
      224, 0, 0, 0, 0, 0, 0, 191, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 244, 26, 0, 17, 0, 0, 190, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
    this.pci_id = 144;
    this.pci_bars = [{ size: c }];
    this.pci_rom_size = 65536;
    this.pci_rom_address = 4272947200;
    this.name = "vga";
    this.stats = { is_graphical: !1, res_x: 0, res_y: 0, bpp: 0 };
    this.dac_state =
      this.dac_color_index_read =
      this.dac_color_index_write =
      this.index_crtc =
        0;
    this.dac_mask = 255;
    this.dac_map = new Uint8Array(16);
    this.attribute_controller_index = -1;
    this.palette_source = 32;
    this.color_select =
      this.horizontal_panning =
      this.color_plane_enable =
      this.attribute_mode =
        0;
    this.sequencer_index = -1;
    this.plane_write_bm = 15;
    this.clocking_mode = this.sequencer_memory_mode = 0;
    this.graphics_index = -1;
    this.planar_rotate_reg = this.planar_mode = this.plane_read = 0;
    this.planar_bitmap = 255;
    this.max_scan_line =
      this.color_dont_care =
      this.color_compare =
      this.miscellaneous_graphics_register =
      this.planar_setreset_enable =
      this.planar_setreset =
        0;
    this.port_3DA_value = this.miscellaneous_output_register = 255;
    c = a.io;
    c.register_write(960, this, this.port3C0_write);
    c.register_read(960, this, this.port3C0_read, this.port3C0_read16);
    c.register_read(961, this, this.port3C1_read);
    c.register_write(962, this, this.port3C2_write);
    c.register_write_consecutive(
      964,
      this,
      this.port3C4_write,
      this.port3C5_write
    );
    c.register_read(964, this, this.port3C4_read);
    c.register_read(965, this, this.port3C5_read);
    c.register_write_consecutive(
      974,
      this,
      this.port3CE_write,
      this.port3CF_write
    );
    c.register_read(974, this, this.port3CE_read);
    c.register_read(975, this, this.port3CF_read);
    c.register_read(966, this, this.port3C6_read);
    c.register_write(966, this, this.port3C6_write);
    c.register_write(967, this, this.port3C7_write);
    c.register_read(967, this, this.port3C7_read);
    c.register_write(968, this, this.port3C8_write);
    c.register_read(968, this, this.port3C8_read);
    c.register_write(969, this, this.port3C9_write);
    c.register_read(969, this, this.port3C9_read);
    c.register_read(972, this, this.port3CC_read);
    c.register_write_consecutive(
      980,
      this,
      this.port3D4_write,
      this.port3D5_write
    );
    c.register_read(980, this, this.port3D4_read);
    c.register_read(981, this, this.port3D5_read, () => this.port3D5_read());
    c.register_read(970, this, function () {
      return 0;
    });
    c.register_read(986, this, this.port3DA_read);
    c.register_read(954, this, this.port3DA_read);
    this.dispi_index = -1;
    this.dispi_enable_value = 0;
    c.register_write(462, this, void 0, this.port1CE_write);
    c.register_write(463, this, void 0, this.port1CF_write);
    c.register_read(463, this, void 0, this.port1CF_read);
    void 0 === this.vga_memory_size || 262144 > this.vga_memory_size
      ? (this.vga_memory_size = 262144)
      : 268435456 < this.vga_memory_size
      ? (this.vga_memory_size = 268435456)
      : this.vga_memory_size & 65535 &&
        ((this.vga_memory_size |= 65535), this.vga_memory_size++);
    const d = a.svga_allocate_memory(this.vga_memory_size) >>> 0;
    this.svga_memory = r.view(
      Uint8Array,
      a.wasm_memory,
      d,
      this.vga_memory_size
    );
    this.diff_addr_min = this.vga_memory_size;
    this.diff_addr_max = 0;
    this.diff_plot_min = this.vga_memory_size;
    this.diff_plot_max = 0;
    this.image_data = null;
    b.register(
      "screen-fill-buffer",
      function () {
        this.screen_fill_buffer();
      },
      this
    );
    this.vga_memory = new Uint8Array(262144);
    this.plane0 = new Uint8Array(this.vga_memory.buffer, 0, 65536);
    this.plane1 = new Uint8Array(this.vga_memory.buffer, 65536, 65536);
    this.plane2 = new Uint8Array(this.vga_memory.buffer, 131072, 65536);
    this.plane3 = new Uint8Array(this.vga_memory.buffer, 196608, 65536);
    this.pixel_buffer = new Uint8Array(524288);
    var e = this;
    c.mmap_register(
      655360,
      131072,
      function (g) {
        return e.vga_memory_read(g);
      },
      function (g, f) {
        e.vga_memory_write(g, f);
      }
    );
    a.devices.pci.register_device(this);
  }
  M.prototype.get_state = function () {
    var a = [];
    a[0] = this.vga_memory_size;
    a[1] = this.cursor_address;
    a[2] = this.cursor_scanline_start;
    a[3] = this.cursor_scanline_end;
    a[4] = this.max_cols;
    a[5] = this.max_rows;
    a[6] = this.vga_memory;
    a[7] = this.dac_state;
    a[8] = this.start_address;
    a[9] = this.graphical_mode;
    a[10] = this.vga256_palette;
    a[11] = this.latch_dword;
    a[12] = this.color_compare;
    a[13] = this.color_dont_care;
    a[14] = this.miscellaneous_graphics_register;
    a[15] = this.svga_width;
    a[16] = this.svga_height;
    a[17] = this.crtc_mode;
    a[18] = this.svga_enabled;
    a[19] = this.svga_bpp;
    a[20] = this.svga_bank_offset;
    a[21] = this.svga_offset;
    a[22] = this.index_crtc;
    a[23] = this.dac_color_index_write;
    a[24] = this.dac_color_index_read;
    a[25] = this.dac_map;
    a[26] = this.sequencer_index;
    a[27] = this.plane_write_bm;
    a[28] = this.sequencer_memory_mode;
    a[29] = this.graphics_index;
    a[30] = this.plane_read;
    a[31] = this.planar_mode;
    a[32] = this.planar_rotate_reg;
    a[33] = this.planar_bitmap;
    a[34] = this.max_scan_line;
    a[35] = this.miscellaneous_output_register;
    a[36] = this.port_3DA_value;
    a[37] = this.dispi_index;
    a[38] = this.dispi_enable_value;
    a[39] = this.svga_memory;
    a[40] = this.graphical_mode_is_linear;
    a[41] = this.attribute_controller_index;
    a[42] = this.offset_register;
    a[43] = this.planar_setreset;
    a[44] = this.planar_setreset_enable;
    a[45] = this.start_address_latched;
    a[46] = this.crtc;
    a[47] = this.horizontal_display_enable_end;
    a[48] = this.horizontal_blank_start;
    a[49] = this.vertical_display_enable_end;
    a[50] = this.vertical_blank_start;
    a[51] = this.underline_location_register;
    a[52] = this.preset_row_scan;
    a[53] = this.offset_register;
    a[54] = this.palette_source;
    a[55] = this.attribute_mode;
    a[56] = this.color_plane_enable;
    a[57] = this.horizontal_panning;
    a[58] = this.color_select;
    a[59] = this.clocking_mode;
    a[60] = this.line_compare;
    a[61] = this.pixel_buffer;
    a[62] = this.dac_mask;
    return a;
  };
  M.prototype.set_state = function (a) {
    this.vga_memory_size = a[0];
    this.cursor_address = a[1];
    this.cursor_scanline_start = a[2];
    this.cursor_scanline_end = a[3];
    this.max_cols = a[4];
    this.max_rows = a[5];
    a[6] && this.vga_memory.set(a[6]);
    this.dac_state = a[7];
    this.start_address = a[8];
    this.graphical_mode = a[9];
    this.vga256_palette = a[10];
    this.latch_dword = a[11];
    this.color_compare = a[12];
    this.color_dont_care = a[13];
    this.miscellaneous_graphics_register = a[14];
    this.svga_width = a[15];
    this.svga_height = a[16];
    this.crtc_mode = a[17];
    this.svga_enabled = a[18];
    this.svga_bpp = a[19];
    this.svga_bank_offset = a[20];
    this.svga_offset = a[21];
    this.index_crtc = a[22];
    this.dac_color_index_write = a[23];
    this.dac_color_index_read = a[24];
    this.dac_map = a[25];
    this.sequencer_index = a[26];
    this.plane_write_bm = a[27];
    this.sequencer_memory_mode = a[28];
    this.graphics_index = a[29];
    this.plane_read = a[30];
    this.planar_mode = a[31];
    this.planar_rotate_reg = a[32];
    this.planar_bitmap = a[33];
    this.max_scan_line = a[34];
    this.miscellaneous_output_register = a[35];
    this.port_3DA_value = a[36];
    this.dispi_index = a[37];
    this.dispi_enable_value = a[38];
    this.svga_memory.set(a[39]);
    this.graphical_mode_is_linear = a[40];
    this.attribute_controller_index = a[41];
    this.offset_register = a[42];
    this.planar_setreset = a[43];
    this.planar_setreset_enable = a[44];
    this.start_address_latched = a[45];
    this.crtc.set(a[46]);
    this.horizontal_display_enable_end = a[47];
    this.horizontal_blank_start = a[48];
    this.vertical_display_enable_end = a[49];
    this.vertical_blank_start = a[50];
    this.underline_location_register = a[51];
    this.preset_row_scan = a[52];
    this.offset_register = a[53];
    this.palette_source = a[54];
    this.attribute_mode = a[55];
    this.color_plane_enable = a[56];
    this.horizontal_panning = a[57];
    this.color_select = a[58];
    this.clocking_mode = a[59];
    this.line_compare = a[60];
    a[61] && this.pixel_buffer.set(a[61]);
    this.dac_mask = void 0 === a[62] ? 255 : a[62];
    this.bus.send("screen-set-mode", this.graphical_mode);
    this.graphical_mode
      ? ((this.screen_height = this.screen_width = 0),
        this.svga_enabled
          ? (this.set_size_graphical(
              this.svga_width,
              this.svga_height,
              this.svga_bpp,
              this.svga_width,
              this.svga_height
            ),
            this.update_layers())
          : (this.update_vga_size(),
            this.update_layers(),
            this.complete_replot()))
      : (this.set_size_text(this.max_cols, this.max_rows),
        this.update_cursor_scanline(),
        this.update_cursor());
    this.complete_redraw();
  };
  M.prototype.vga_memory_read = function (a) {
    if (this.svga_enabled && this.graphical_mode_is_linear)
      return this.cpu.read8(
        (((a - 655360) | this.svga_bank_offset) + 3758096384) | 0
      );
    var b = (this.miscellaneous_graphics_register >> 2) & 3;
    a -= ra[b];
    if (0 > a || a >= ua[b]) return A(a), 0;
    this.latch_dword = this.plane0[a];
    this.latch_dword |= this.plane1[a] << 8;
    this.latch_dword |= this.plane2[a] << 16;
    this.latch_dword |= this.plane3[a] << 24;
    if (this.planar_mode & 8)
      return (
        (b = 255),
        this.color_dont_care & 1 &&
          (b &= this.plane0[a] ^ ~(this.color_compare & 1 ? 255 : 0)),
        this.color_dont_care & 2 &&
          (b &= this.plane1[a] ^ ~(this.color_compare & 2 ? 255 : 0)),
        this.color_dont_care & 4 &&
          (b &= this.plane2[a] ^ ~(this.color_compare & 4 ? 255 : 0)),
        this.color_dont_care & 8 &&
          (b &= this.plane3[a] ^ ~(this.color_compare & 8 ? 255 : 0)),
        b
      );
    b = this.plane_read;
    this.graphical_mode
      ? this.sequencer_memory_mode & 8
        ? ((b = a & 3), (a &= -4))
        : this.planar_mode & 16 && ((b = a & 1), (a &= -2))
      : (b = 0);
    return this.vga_memory[(b << 16) | a];
  };
  M.prototype.vga_memory_write = function (a, b) {
    if (
      this.svga_enabled &&
      this.graphical_mode &&
      this.graphical_mode_is_linear
    )
      this.cpu.write8(
        (((a - 655360) | this.svga_bank_offset) + 3758096384) | 0,
        b
      );
    else {
      var c = (this.miscellaneous_graphics_register >> 2) & 3;
      a -= ra[c];
      0 > a || a >= ua[c]
        ? (A(a), A(b))
        : this.graphical_mode
        ? this.vga_memory_write_graphical(a, b)
        : this.plane_write_bm & 3 && this.vga_memory_write_text_mode(a, b);
    }
  };
  M.prototype.vga_memory_write_graphical = function (a, b) {
    var c = this.planar_mode & 3,
      d = this.apply_feed(this.planar_bitmap),
      e = this.apply_expand(this.planar_setreset),
      g = this.apply_expand(this.planar_setreset_enable);
    switch (c) {
      case 0:
        b = this.apply_rotate(b);
        var f = this.apply_feed(b);
        f = this.apply_setreset(f, g);
        f = this.apply_logical(f, this.latch_dword);
        f = this.apply_bitmask(f, d);
        break;
      case 1:
        f = this.latch_dword;
        break;
      case 2:
        f = this.apply_expand(b);
        f = this.apply_logical(f, this.latch_dword);
        f = this.apply_bitmask(f, d);
        break;
      case 3:
        (b = this.apply_rotate(b)),
          (d &= this.apply_feed(b)),
          (f = this.apply_bitmask(e, d));
    }
    b = 15;
    switch (this.sequencer_memory_mode & 12) {
      case 0:
        b = 5 << (a & 1);
        a &= -2;
        break;
      case 8:
      case 12:
        (b = 1 << (a & 3)), (a &= -4);
    }
    b &= this.plane_write_bm;
    b & 1 && (this.plane0[a] = (f >> 0) & 255);
    b & 2 && (this.plane1[a] = (f >> 8) & 255);
    b & 4 && (this.plane2[a] = (f >> 16) & 255);
    b & 8 && (this.plane3[a] = (f >> 24) & 255);
    a = this.vga_addr_to_pixel(a);
    this.partial_replot(a, a + 7);
  };
  M.prototype.apply_feed = function (a) {
    return a | (a << 8) | (a << 16) | (a << 24);
  };
  M.prototype.apply_expand = function (a) {
    return (
      (a & 1 ? 255 : 0) |
      ((a & 2 ? 255 : 0) << 8) |
      ((a & 4 ? 255 : 0) << 16) |
      ((a & 8 ? 255 : 0) << 24)
    );
  };
  M.prototype.apply_rotate = function (a) {
    return ((a | (a << 8)) >>> (this.planar_rotate_reg & 7)) & 255;
  };
  M.prototype.apply_setreset = function (a, b) {
    var c = this.apply_expand(this.planar_setreset);
    return (a | (b & c)) & (~b | c);
  };
  M.prototype.apply_logical = function (a, b) {
    switch (this.planar_rotate_reg & 24) {
      case 8:
        return a & b;
      case 16:
        return a | b;
      case 24:
        return a ^ b;
    }
    return a;
  };
  M.prototype.apply_bitmask = function (a, b) {
    return (b & a) | (~b & this.latch_dword);
  };
  M.prototype.text_mode_redraw = function () {
    var a = this.start_address << 1;
    const b = this.scan_line_to_screen_row(this.line_compare),
      c = Math.max(0, 2 * (2 * this.offset_register - this.max_cols));
    for (var d = 0; d < this.max_rows; d++) {
      d === b && (a = 0);
      for (var e = 0; e < this.max_cols; e++) {
        var g = this.vga_memory[a];
        var f = this.vga_memory[a | 1];
        this.bus.send("screen-put-char", [
          d,
          e,
          g,
          this.vga256_palette[this.dac_mask & this.dac_map[(f >> 4) & 15]],
          this.vga256_palette[this.dac_mask & this.dac_map[f & 15]],
        ]);
        a += 2;
      }
      a += c;
    }
  };
  M.prototype.vga_memory_write_text_mode = function (a, b) {
    var c = Math.max(this.max_cols, 2 * this.offset_register);
    let d;
    if (a >> 1 >= this.start_address) {
      var e = (a >> 1) - this.start_address;
      d = (e / c) | 0;
      c = e % c;
    } else
      (e = a >> 1),
        (d = ((e / c) | 0) + this.scan_line_to_screen_row(this.line_compare)),
        (c = e % c);
    if (!(c >= this.max_cols || d >= this.max_rows)) {
      if (a & 1) {
        var g = b;
        e = this.vga_memory[a & -2];
      } else (e = b), (g = this.vga_memory[a | 1]);
      this.bus.send("screen-put-char", [
        d,
        c,
        e,
        this.vga256_palette[this.dac_mask & this.dac_map[(g >> 4) & 15]],
        this.vga256_palette[this.dac_mask & this.dac_map[g & 15]],
      ]);
      this.vga_memory[a] = b;
    }
  };
  M.prototype.update_cursor = function () {
    var a = Math.max(this.max_cols, 2 * this.offset_register);
    let b;
    this.cursor_address >= this.start_address
      ? ((b = ((this.cursor_address - this.start_address) / a) | 0),
        (a = (this.cursor_address - this.start_address) % a))
      : ((b =
          ((this.cursor_address / a) | 0) +
          this.scan_line_to_screen_row(this.line_compare)),
        (a = this.cursor_address % a));
    b = Math.min(this.max_rows - 1, b);
    a = Math.min(this.max_cols - 1, a);
    this.bus.send("screen-update-cursor", [b, a]);
  };
  M.prototype.complete_redraw = function () {
    this.graphical_mode
      ? this.svga_enabled
        ? this.cpu.svga_mark_dirty()
        : ((this.diff_addr_min = 0), (this.diff_addr_max = 524288))
      : this.text_mode_redraw();
  };
  M.prototype.complete_replot = function () {
    this.graphical_mode &&
      !this.svga_enabled &&
      ((this.diff_plot_min = 0),
      (this.diff_plot_max = 524288),
      this.complete_redraw());
  };
  M.prototype.partial_redraw = function (a, b) {
    a < this.diff_addr_min && (this.diff_addr_min = a);
    b > this.diff_addr_max && (this.diff_addr_max = b);
  };
  M.prototype.partial_replot = function (a, b) {
    a < this.diff_plot_min && (this.diff_plot_min = a);
    b > this.diff_plot_max && (this.diff_plot_max = b);
    this.partial_redraw(a, b);
  };
  M.prototype.reset_diffs = function () {
    this.diff_addr_min = this.vga_memory_size;
    this.diff_addr_max = 0;
    this.diff_plot_min = this.vga_memory_size;
    this.diff_plot_max = 0;
  };
  M.prototype.destroy = function () {};
  M.prototype.vga_bytes_per_line = function () {
    var a = this.offset_register << 2;
    this.underline_location_register & 64
      ? (a <<= 1)
      : this.crtc_mode & 64 && (a >>>= 1);
    return a;
  };
  M.prototype.vga_addr_shift_count = function () {
    var a = 128 + (~this.underline_location_register & this.crtc_mode & 64);
    a -= this.underline_location_register & 64;
    a -= this.attribute_mode & 64;
    return a >>> 6;
  };
  M.prototype.vga_addr_to_pixel = function (a) {
    var b = this.vga_addr_shift_count();
    if (~this.crtc_mode & 3) {
      var c = a - this.start_address;
      c &= (this.crtc_mode << 13) | -24577;
      c <<= b;
      var d = (c / this.virtual_width) | 0;
      c %= this.virtual_width;
      switch (this.crtc_mode & 3) {
        case 2:
          d = (d << 1) | ((a >> 13) & 1);
          break;
        case 1:
          d = (d << 1) | ((a >> 14) & 1);
          break;
        case 0:
          d = (d << 2) | ((a >> 13) & 3);
      }
      return d * this.virtual_width + c + (this.start_address << b);
    }
    return a << b;
  };
  M.prototype.scan_line_to_screen_row = function (a) {
    this.max_scan_line & 128 && (a >>>= 1);
    a = Math.ceil(a / (1 + (this.max_scan_line & 31)));
    this.crtc_mode & 1 || (a <<= 1);
    this.crtc_mode & 2 || (a <<= 1);
    return a;
  };
  M.prototype.set_size_text = function (a, b) {
    this.max_cols = a;
    this.max_rows = b;
    this.bus.send("screen-set-size-text", [a, b]);
  };
  M.prototype.set_size_graphical = function (a, b, c, d, e) {
    if (
      !this.stats.is_graphical ||
      this.stats.bpp !== c ||
      this.screen_width !== a ||
      this.screen_height !== b ||
      this.virtual_width !== d ||
      this.virtual_height !== e
    ) {
      this.screen_width = a;
      this.screen_height = b;
      this.virtual_width = d;
      this.virtual_height = e;
      this.stats.bpp = c;
      this.stats.is_graphical = !0;
      this.stats.res_x = a;
      this.stats.res_y = b;
      if ("undefined" !== typeof ImageData) {
        const g = d * e,
          f = this.cpu.svga_allocate_dest_buffer(g) >>> 0;
        this.dest_buffet_offset = f;
        this.image_data = new ImageData(
          new Uint8ClampedArray(this.cpu.wasm_memory.buffer, f, 4 * g),
          d,
          e
        );
        this.cpu.svga_mark_dirty();
      }
      this.bus.send("screen-set-size-graphical", [a, b, d, e, c]);
    }
  };
  M.prototype.update_vga_size = function () {
    if (!this.svga_enabled) {
      var a = Math.min(
          1 + this.horizontal_display_enable_end,
          this.horizontal_blank_start
        ),
        b = Math.min(
          1 + this.vertical_display_enable_end,
          this.vertical_blank_start
        );
      if (a && b)
        if (this.graphical_mode) {
          a <<= 3;
          var c = this.offset_register << 4;
          this.attribute_mode & 64 && ((a >>>= 1), (c >>>= 1));
          b = this.scan_line_to_screen_row(b);
          var d = Math.ceil(ua[0] / this.vga_bytes_per_line());
          this.set_size_graphical(a, b, 8, c, d);
          this.update_vertical_retrace();
          this.update_layers();
        } else
          this.max_scan_line & 128 && (b >>>= 1),
            (c = (b / (1 + (this.max_scan_line & 31))) | 0),
            a && c && this.set_size_text(a, c);
    }
  };
  M.prototype.update_layers = function () {
    this.graphical_mode || this.text_mode_redraw();
    if (this.svga_enabled) this.layers = [];
    else if (this.virtual_width && this.screen_width)
      if (!this.palette_source || this.clocking_mode & 32)
        (this.layers = []), this.bus.send("screen-clear");
      else {
        var a = this.start_address_latched,
          b = this.horizontal_panning;
        this.attribute_mode & 64 && (b >>>= 1);
        var c = (this.preset_row_scan >> 5) & 3,
          d = this.vga_addr_to_pixel(a + c);
        a = (d / this.virtual_width) | 0;
        var e = (d % this.virtual_width) + b;
        d = this.scan_line_to_screen_row(1 + this.line_compare);
        d = Math.min(d, this.screen_height);
        var g = this.screen_height - d;
        this.layers = [];
        e = -e;
        for (var f = 0; e < this.screen_width; e += this.virtual_width, f++)
          this.layers.push({
            image_data: this.image_data,
            screen_x: e,
            screen_y: 0,
            buffer_x: 0,
            buffer_y: a + f,
            buffer_width: this.virtual_width,
            buffer_height: d,
          });
        a = 0;
        this.attribute_mode & 32 || (a = this.vga_addr_to_pixel(c) + b);
        e = -a;
        for (f = 0; e < this.screen_width; e += this.virtual_width, f++)
          this.layers.push({
            image_data: this.image_data,
            screen_x: e,
            screen_y: d,
            buffer_x: 0,
            buffer_y: f,
            buffer_width: this.virtual_width,
            buffer_height: g,
          });
      }
  };
  M.prototype.update_vertical_retrace = function () {
    this.port_3DA_value |= 8;
    this.start_address_latched !== this.start_address &&
      ((this.start_address_latched = this.start_address), this.update_layers());
  };
  M.prototype.update_cursor_scanline = function () {
    this.bus.send("screen-update-cursor-scanline", [
      this.cursor_scanline_start,
      this.cursor_scanline_end,
    ]);
  };
  M.prototype.port3C0_write = function (a) {
    if (-1 === this.attribute_controller_index)
      A(a),
        (this.attribute_controller_index = a & 31),
        A(this.attribute_controller_index),
        this.palette_source !== (a & 32) &&
          ((this.palette_source = a & 32), this.update_layers());
    else {
      if (16 > this.attribute_controller_index)
        A(this.attribute_controller_index),
          A(a),
          (this.dac_map[this.attribute_controller_index] = a),
          this.attribute_mode & 64 || this.complete_redraw();
      else
        switch (this.attribute_controller_index) {
          case 16:
            A(a);
            if (this.attribute_mode !== a) {
              var b = this.attribute_mode;
              this.attribute_mode = a;
              var c = 0 < (a & 1);
              this.svga_enabled ||
                this.graphical_mode === c ||
                ((this.graphical_mode = c),
                this.bus.send("screen-set-mode", this.graphical_mode));
              (b ^ a) & 64 && this.complete_replot();
              this.update_vga_size();
              this.complete_redraw();
            }
            break;
          case 18:
            A(a);
            this.color_plane_enable !== a &&
              ((this.color_plane_enable = a), this.complete_redraw());
            break;
          case 19:
            A(a);
            this.horizontal_panning !== a &&
              ((this.horizontal_panning = a & 15), this.update_layers());
            break;
          case 20:
            A(a);
            this.color_select !== a &&
              ((this.color_select = a), this.complete_redraw());
            break;
          default:
            A(this.attribute_controller_index), A(a);
        }
      this.attribute_controller_index = -1;
    }
  };
  M.prototype.port3C0_read = function () {
    return (this.attribute_controller_index | this.palette_source) & 255;
  };
  M.prototype.port3C0_read16 = function () {
    return this.port3C0_read() | ((this.port3C1_read() << 8) & 65280);
  };
  M.prototype.port3C1_read = function () {
    if (16 > this.attribute_controller_index)
      return (
        A(this.attribute_controller_index),
        A(this.dac_map[this.attribute_controller_index]),
        this.dac_map[this.attribute_controller_index] & 255
      );
    switch (this.attribute_controller_index) {
      case 16:
        return A(this.attribute_mode), this.attribute_mode;
      case 18:
        return A(this.color_plane_enable), this.color_plane_enable;
      case 19:
        return A(this.horizontal_panning), this.horizontal_panning;
      case 20:
        return A(this.color_select), this.color_select;
      default:
        A(this.attribute_controller_index);
    }
    return 255;
  };
  M.prototype.port3C2_write = function (a) {
    A(a);
    this.miscellaneous_output_register = a;
  };
  M.prototype.port3C4_write = function (a) {
    this.sequencer_index = a;
  };
  M.prototype.port3C4_read = function () {
    return this.sequencer_index;
  };
  M.prototype.port3C5_write = function (a) {
    switch (this.sequencer_index) {
      case 1:
        A(a);
        var b = this.clocking_mode;
        this.clocking_mode = a;
        (b ^ a) & 32 && this.update_layers();
        break;
      case 2:
        A(a);
        this.plane_write_bm = a;
        break;
      case 4:
        A(a);
        this.sequencer_memory_mode = a;
        break;
      default:
        A(this.sequencer_index), A(a);
    }
  };
  M.prototype.port3C5_read = function () {
    A(this.sequencer_index);
    switch (this.sequencer_index) {
      case 1:
        return this.clocking_mode;
      case 2:
        return this.plane_write_bm;
      case 4:
        return this.sequencer_memory_mode;
      case 6:
        return 18;
    }
    return 0;
  };
  M.prototype.port3C6_write = function (a) {
    this.dac_mask = a;
  };
  M.prototype.port3C6_read = function () {
    return this.dac_mask;
  };
  M.prototype.port3C7_write = function (a) {
    A(a);
    this.dac_color_index_read = 3 * a;
    this.dac_state &= 0;
  };
  M.prototype.port3C7_read = function () {
    return this.dac_state;
  };
  M.prototype.port3C8_write = function (a) {
    this.dac_color_index_write = 3 * a;
    this.dac_state |= 3;
  };
  M.prototype.port3C8_read = function () {
    return (this.dac_color_index_write / 3) & 255;
  };
  M.prototype.port3C9_write = function (a) {
    var b = (this.dac_color_index_write / 3) | 0,
      c = this.dac_color_index_write % 3,
      d = this.vga256_palette[b];
    if (0 === (this.dispi_enable_value & 32)) {
      a &= 63;
      const e = a & 1;
      a = (a << 2) | (e << 1) | e;
    }
    0 === c
      ? (d = (d & -16711681) | (a << 16))
      : 1 === c
      ? (d = (d & -65281) | (a << 8))
      : ((d = (d & -256) | a), A(b), A(d));
    this.vga256_palette[b] !== d &&
      ((this.vga256_palette[b] = d), this.complete_redraw());
    this.dac_color_index_write++;
  };
  M.prototype.port3C9_read = function () {
    var a =
      (this.vga256_palette[(this.dac_color_index_read / 3) | 0] >>
        (8 * (2 - (this.dac_color_index_read % 3)))) &
      255;
    this.dac_color_index_read++;
    return this.dispi_enable_value & 32 ? a : a >> 2;
  };
  M.prototype.port3CC_read = function () {
    return this.miscellaneous_output_register;
  };
  M.prototype.port3CE_write = function (a) {
    this.graphics_index = a;
  };
  M.prototype.port3CE_read = function () {
    return this.graphics_index;
  };
  M.prototype.port3CF_write = function (a) {
    switch (this.graphics_index) {
      case 0:
        this.planar_setreset = a;
        A(a);
        break;
      case 1:
        this.planar_setreset_enable = a;
        A(a);
        break;
      case 2:
        this.color_compare = a;
        A(a);
        break;
      case 3:
        this.planar_rotate_reg = a;
        A(a);
        break;
      case 4:
        this.plane_read = a;
        A(a);
        break;
      case 5:
        var b = this.planar_mode;
        this.planar_mode = a;
        A(a);
        (b ^ a) & 96 && this.complete_replot();
        break;
      case 6:
        A(a);
        this.miscellaneous_graphics_register !== a &&
          ((this.miscellaneous_graphics_register = a), this.update_vga_size());
        break;
      case 7:
        this.color_dont_care = a;
        A(a);
        break;
      case 8:
        this.planar_bitmap = a;
        A(a);
        break;
      default:
        A(this.graphics_index), A(a);
    }
  };
  M.prototype.port3CF_read = function () {
    A(this.graphics_index);
    switch (this.graphics_index) {
      case 0:
        return this.planar_setreset;
      case 1:
        return this.planar_setreset_enable;
      case 2:
        return this.color_compare;
      case 3:
        return this.planar_rotate_reg;
      case 4:
        return this.plane_read;
      case 5:
        return this.planar_mode;
      case 6:
        return this.miscellaneous_graphics_register;
      case 7:
        return this.color_dont_care;
      case 8:
        return this.planar_bitmap;
    }
    return 0;
  };
  M.prototype.port3D4_write = function (a) {
    this.index_crtc = a;
  };
  M.prototype.port3D4_read = function () {
    return this.index_crtc;
  };
  M.prototype.port3D5_write = function (a) {
    switch (this.index_crtc) {
      case 1:
        A(a);
        this.horizontal_display_enable_end !== a &&
          ((this.horizontal_display_enable_end = a), this.update_vga_size());
        break;
      case 2:
        this.horizontal_blank_start !== a &&
          ((this.horizontal_blank_start = a), this.update_vga_size());
        break;
      case 7:
        A(a);
        var b = this.vertical_display_enable_end;
        this.vertical_display_enable_end &= 255;
        this.vertical_display_enable_end =
          this.vertical_display_enable_end |
          ((a << 3) & 512) |
          ((a << 7) & 256);
        b != this.vertical_display_enable_end && this.update_vga_size();
        this.line_compare = (this.line_compare & 767) | ((a << 4) & 256);
        b = this.vertical_blank_start;
        this.vertical_blank_start =
          (this.vertical_blank_start & 767) | ((a << 5) & 256);
        b !== this.vertical_blank_start && this.update_vga_size();
        this.update_layers();
        break;
      case 8:
        A(a);
        this.preset_row_scan = a;
        this.update_layers();
        break;
      case 9:
        A(a);
        this.max_scan_line = a;
        this.line_compare = (this.line_compare & 511) | ((a << 3) & 512);
        b = this.vertical_blank_start;
        this.vertical_blank_start =
          (this.vertical_blank_start & 511) | ((a << 4) & 512);
        b !== this.vertical_blank_start && this.update_vga_size();
        this.update_layers();
        break;
      case 10:
        A(a);
        this.cursor_scanline_start = a;
        this.update_cursor_scanline();
        break;
      case 11:
        A(a);
        this.cursor_scanline_end = a;
        this.update_cursor_scanline();
        break;
      case 12:
        ((this.start_address >> 8) & 255) !== a &&
          ((this.start_address = (this.start_address & 255) | (a << 8)),
          this.update_layers(),
          ~this.crtc_mode & 3 && this.complete_replot());
        A(a);
        A(this.start_address, 4);
        break;
      case 13:
        (this.start_address & 255) !== a &&
          ((this.start_address = (this.start_address & 65280) | a),
          this.update_layers(),
          ~this.crtc_mode & 3 && this.complete_replot());
        A(a);
        A(this.start_address, 4);
        break;
      case 14:
        A(a);
        this.cursor_address = (this.cursor_address & 255) | (a << 8);
        this.update_cursor();
        break;
      case 15:
        A(a);
        this.cursor_address = (this.cursor_address & 65280) | a;
        this.update_cursor();
        break;
      case 18:
        A(a);
        (this.vertical_display_enable_end & 255) !== a &&
          ((this.vertical_display_enable_end =
            (this.vertical_display_enable_end & 768) | a),
          this.update_vga_size());
        break;
      case 19:
        A(a);
        this.offset_register !== a &&
          ((this.offset_register = a),
          this.update_vga_size(),
          ~this.crtc_mode & 3 && this.complete_replot());
        break;
      case 20:
        A(a);
        this.underline_location_register !== a &&
          ((b = this.underline_location_register),
          (this.underline_location_register = a),
          this.update_vga_size(),
          (b ^ a) & 64 && this.complete_replot());
        break;
      case 21:
        A(a);
        (this.vertical_blank_start & 255) !== a &&
          ((this.vertical_blank_start = (this.vertical_blank_start & 768) | a),
          this.update_vga_size());
        break;
      case 23:
        A(a);
        this.crtc_mode !== a &&
          ((b = this.crtc_mode),
          (this.crtc_mode = a),
          this.update_vga_size(),
          (b ^ a) & 67 && this.complete_replot());
        break;
      case 24:
        A(a);
        this.line_compare = (this.line_compare & 768) | a;
        this.update_layers();
        break;
      default:
        this.index_crtc < this.crtc.length && (this.crtc[this.index_crtc] = a),
          A(this.index_crtc),
          A(a);
    }
  };
  M.prototype.port3D5_read = function () {
    A(this.index_crtc);
    switch (this.index_crtc) {
      case 1:
        return this.horizontal_display_enable_end;
      case 2:
        return this.horizontal_blank_start;
      case 7:
        return (
          ((this.vertical_display_enable_end >> 7) & 2) |
          ((this.vertical_blank_start >> 5) & 8) |
          ((this.line_compare >> 4) & 16) |
          ((this.vertical_display_enable_end >> 3) & 64)
        );
      case 8:
        return this.preset_row_scan;
      case 9:
        return this.max_scan_line;
      case 10:
        return this.cursor_scanline_start;
      case 11:
        return this.cursor_scanline_end;
      case 12:
        return this.start_address & 255;
      case 13:
        return this.start_address >> 8;
      case 14:
        return this.cursor_address >> 8;
      case 15:
        return this.cursor_address & 255;
      case 18:
        return this.vertical_display_enable_end & 255;
      case 19:
        return this.offset_register;
      case 20:
        return this.underline_location_register;
      case 21:
        return this.vertical_blank_start & 255;
      case 23:
        return this.crtc_mode;
      case 24:
        return this.line_compare & 255;
    }
    return this.index_crtc < this.crtc.length ? this.crtc[this.index_crtc] : 0;
  };
  M.prototype.port3DA_read = function () {
    var a = this.port_3DA_value;
    this.graphical_mode
      ? ((this.port_3DA_value ^= 1), (this.port_3DA_value &= 1))
      : (this.port_3DA_value & 1 && (this.port_3DA_value ^= 8),
        (this.port_3DA_value ^= 1));
    this.attribute_controller_index = -1;
    return a;
  };
  M.prototype.port1CE_write = function (a) {
    this.dispi_index = a;
  };
  M.prototype.port1CF_write = function (a) {
    A(this.dispi_index);
    A(a);
    switch (this.dispi_index) {
      case 0:
        45248 <= a && 45253 >= a ? (this.svga_version = a) : A(a);
        break;
      case 1:
        this.svga_width = a;
        2560 < this.svga_width && (this.svga_width = 2560);
        break;
      case 2:
        this.svga_height = a;
        1600 < this.svga_height && (this.svga_height = 1600);
        break;
      case 3:
        this.svga_bpp = a;
        break;
      case 4:
        this.svga_enabled = 1 === (a & 1);
        this.dispi_enable_value = a;
        break;
      case 5:
        A(a << 16);
        this.svga_bank_offset = a << 16;
        break;
      case 9:
        const b = a * this.svga_width;
        A(b);
        A(a);
        this.svga_offset_y !== a &&
          ((this.svga_offset_y = a),
          (this.svga_offset = b),
          this.complete_redraw());
        break;
      default:
        A(this.dispi_index);
    }
    !this.svga_enabled ||
      (this.svga_width && this.svga_height) ||
      (this.svga_enabled = !1);
    this.svga_enabled &&
      4 === this.dispi_index &&
      (this.set_size_graphical(
        this.svga_width,
        this.svga_height,
        this.svga_bpp,
        this.svga_width,
        this.svga_height
      ),
      this.bus.send("screen-set-mode", !0),
      (this.graphical_mode_is_linear = this.graphical_mode = !0));
    this.svga_enabled || (this.svga_bank_offset = 0);
    this.update_layers();
  };
  M.prototype.port1CF_read = function () {
    A(this.dispi_index);
    return this.svga_register_read(this.dispi_index);
  };
  M.prototype.svga_register_read = function (a) {
    switch (a) {
      case 0:
        return this.svga_version;
      case 1:
        return this.dispi_enable_value & 2 ? 2560 : this.svga_width;
      case 2:
        return this.dispi_enable_value & 2 ? 1600 : this.svga_height;
      case 3:
        return this.dispi_enable_value & 2 ? 32 : this.svga_bpp;
      case 4:
        return this.dispi_enable_value;
      case 5:
        return this.svga_bank_offset >>> 16;
      case 6:
        return this.screen_width ? this.screen_width : 1;
      case 8:
        return 0;
      case 9:
        return this.svga_offset_y;
      case 10:
        return (this.vga_memory_size / 65536) | 0;
      default:
        A(this.dispi_index);
    }
    return 255;
  };
  M.prototype.vga_replot = function () {
    for (
      var a = this.diff_plot_min & -16,
        b = Math.min(this.diff_plot_max | 15, 524287),
        c = this.vga_addr_shift_count(),
        d = ~this.crtc_mode & 3,
        e = this.planar_mode & 96,
        g = this.attribute_mode & 64;
      a <= b;

    ) {
      var f = a >>> c;
      if (d) {
        var k = (a / this.virtual_width) | 0,
          l = a - this.virtual_width * k;
        switch (d) {
          case 1:
            f = (k & 1) << 13;
            k >>>= 1;
            break;
          case 2:
            f = (k & 1) << 14;
            k >>>= 1;
            break;
          case 3:
            (f = (k & 3) << 13), (k >>>= 2);
        }
        f |= ((k * this.virtual_width + l) >>> c) + this.start_address;
      }
      k = this.plane0[f];
      l = this.plane1[f];
      var m = this.plane2[f],
        n = this.plane3[f];
      f = new Uint8Array(8);
      switch (e) {
        case 0:
          k <<= 0;
          l <<= 1;
          m <<= 2;
          n <<= 3;
          for (var p = 7; 0 <= p; p--)
            f[7 - p] =
              ((k >> p) & 1) | ((l >> p) & 2) | ((m >> p) & 4) | ((n >> p) & 8);
          break;
        case 32:
          f[0] = ((k >> 6) & 3) | ((m >> 4) & 12);
          f[1] = ((k >> 4) & 3) | ((m >> 2) & 12);
          f[2] = ((k >> 2) & 3) | ((m >> 0) & 12);
          f[3] = ((k >> 0) & 3) | ((m << 2) & 12);
          f[4] = ((l >> 6) & 3) | ((n >> 4) & 12);
          f[5] = ((l >> 4) & 3) | ((n >> 2) & 12);
          f[6] = ((l >> 2) & 3) | ((n >> 0) & 12);
          f[7] = ((l >> 0) & 3) | ((n << 2) & 12);
          break;
        case 64:
        case 96:
          (f[0] = (k >> 4) & 15),
            (f[1] = (k >> 0) & 15),
            (f[2] = (l >> 4) & 15),
            (f[3] = (l >> 0) & 15),
            (f[4] = (m >> 4) & 15),
            (f[5] = (m >> 0) & 15),
            (f[6] = (n >> 4) & 15),
            (f[7] = (n >> 0) & 15);
      }
      if (g)
        for (k = p = 0; 4 > p; p++, a++, k += 2)
          this.pixel_buffer[a] = (f[k] << 4) | f[k + 1];
      else for (p = 0; 8 > p; p++, a++) this.pixel_buffer[a] = f[p];
    }
  };
  M.prototype.vga_redraw = function () {
    var a = this.diff_addr_min,
      b = Math.min(this.diff_addr_max, 524287);
    const c = new Int32Array(
      this.cpu.wasm_memory.buffer,
      this.dest_buffet_offset,
      this.virtual_width * this.virtual_height
    );
    var d = 255,
      e = 0;
    this.attribute_mode & 128 &&
      ((d &= 207), (e |= (this.color_select << 4) & 48));
    if (this.attribute_mode & 64)
      for (; a <= b; a++) {
        var g = (this.pixel_buffer[a] & d) | e;
        g = this.vga256_palette[g];
        c[a] = (g & 65280) | (g << 16) | (g >> 16) | 4278190080;
      }
    else
      for (d &= 63, e |= (this.color_select << 4) & 192; a <= b; a++)
        (g =
          (this.dac_map[this.pixel_buffer[a] & this.color_plane_enable] & d) |
          e),
          (g = this.vga256_palette[g]),
          (c[a] = (g & 65280) | (g << 16) | (g >> 16) | 4278190080);
  };
  M.prototype.screen_fill_buffer = function () {
    if (this.graphical_mode) {
      if (0 === this.image_data.data.byteLength) {
        var a = new Uint8ClampedArray(
          this.cpu.wasm_memory.buffer,
          this.dest_buffet_offset,
          4 * this.virtual_width * this.virtual_height
        );
        this.image_data = new ImageData(
          a,
          this.virtual_width,
          this.virtual_height
        );
        this.update_layers();
      }
      if (this.svga_enabled) {
        a = 0;
        let d = this.svga_height;
        if (8 === this.svga_bpp) {
          const e = new Int32Array(
              this.cpu.wasm_memory.buffer,
              this.dest_buffet_offset,
              this.screen_width * this.screen_height
            ),
            g = new Uint8Array(
              this.cpu.wasm_memory.buffer,
              this.svga_memory.byteOffset,
              this.vga_memory_size
            );
          for (var b = 0; b < e.length; b++) {
            var c = this.vga256_palette[g[b]];
            e[b] = (c & 65280) | (c << 16) | (c >> 16) | 4278190080;
          }
        } else
          this.cpu.svga_fill_pixel_buffer(this.svga_bpp, this.svga_offset),
            (b = 15 === this.svga_bpp ? 2 : this.svga_bpp / 8),
            (a =
              ((((this.cpu.svga_dirty_bitmap_min_offset[0] / b) | 0) -
                this.svga_offset) /
                this.svga_width) |
              0),
            (d =
              (((((this.cpu.svga_dirty_bitmap_max_offset[0] / b) | 0) -
                this.svga_offset) /
                this.svga_width) |
                0) +
              1);
        a < d &&
          ((a = Math.max(a, 0)),
          (d = Math.min(d, this.svga_height)),
          this.bus.send("screen-fill-buffer-end", [
            {
              image_data: this.image_data,
              screen_x: 0,
              screen_y: a,
              buffer_x: 0,
              buffer_y: a,
              buffer_width: this.svga_width,
              buffer_height: d - a,
            },
          ]));
      } else
        this.vga_replot(),
          this.vga_redraw(),
          this.bus.send("screen-fill-buffer-end", this.layers);
      this.reset_diffs();
    }
    this.update_vertical_retrace();
  };
  function N(a, b) {
    this.cpu = a;
    this.bus = b;
    this.use_mouse = this.enable_mouse_stream = !1;
    this.have_mouse = !0;
    this.mouse_clicks = this.mouse_delta_y = this.mouse_delta_x = 0;
    this.have_keyboard = !0;
    this.next_read_resolution =
      this.next_read_rate =
      this.next_handle_scan_code_set =
      this.next_read_led =
      this.next_read_sample =
      this.next_is_mouse_command =
      this.enable_keyboard_stream =
        !1;
    this.kbd_buffer = new ka(1024);
    this.last_port60_byte = 0;
    this.sample_rate = 100;
    this.mouse_id = this.mouse_detect_state = 0;
    this.mouse_reset_workaround = !1;
    this.wheel_movement = 0;
    this.resolution = 4;
    this.scaling2 = !1;
    this.last_mouse_packet = -1;
    this.mouse_buffer = new ka(1024);
    this.next_byte_is_aux = this.next_byte_is_ready = !1;
    this.bus.register(
      "keyboard-code",
      function (c) {
        this.kbd_send_code(c);
      },
      this
    );
    this.bus.register(
      "mouse-click",
      function (c) {
        this.mouse_send_click(c[0], c[1], c[2]);
      },
      this
    );
    this.bus.register(
      "mouse-delta",
      function (c) {
        this.mouse_send_delta(c[0], c[1]);
      },
      this
    );
    this.bus.register(
      "mouse-wheel",
      function (c) {
        this.wheel_movement -= c[0];
        this.wheel_movement -= 2 * c[1];
        this.wheel_movement = Math.min(7, Math.max(-8, this.wheel_movement));
        this.send_mouse_packet(0, 0);
      },
      this
    );
    this.command_register = 5;
    this.controller_output_port = 0;
    this.read_controller_output_port =
      this.read_command_register =
      this.read_output_register =
        !1;
    a.io.register_read(96, this, this.port60_read);
    a.io.register_read(100, this, this.port64_read);
    a.io.register_write(96, this, this.port60_write);
    a.io.register_write(100, this, this.port64_write);
  }
  N.prototype.get_state = function () {
    var a = [];
    a[0] = this.enable_mouse_stream;
    a[1] = this.use_mouse;
    a[2] = this.have_mouse;
    a[3] = this.mouse_delta_x;
    a[4] = this.mouse_delta_y;
    a[5] = this.mouse_clicks;
    a[6] = this.have_keyboard;
    a[7] = this.enable_keyboard_stream;
    a[8] = this.next_is_mouse_command;
    a[9] = this.next_read_sample;
    a[10] = this.next_read_led;
    a[11] = this.next_handle_scan_code_set;
    a[12] = this.next_read_rate;
    a[13] = this.next_read_resolution;
    a[15] = this.last_port60_byte;
    a[16] = this.sample_rate;
    a[17] = this.resolution;
    a[18] = this.scaling2;
    a[20] = this.command_register;
    a[21] = this.read_output_register;
    a[22] = this.read_command_register;
    a[23] = this.controller_output_port;
    a[24] = this.read_controller_output_port;
    a[25] = this.mouse_id;
    a[26] = this.mouse_detect_state;
    a[27] = this.mouse_reset_workaround;
    return a;
  };
  N.prototype.set_state = function (a) {
    this.enable_mouse_stream = a[0];
    this.use_mouse = a[1];
    this.have_mouse = a[2];
    this.mouse_delta_x = a[3];
    this.mouse_delta_y = a[4];
    this.mouse_clicks = a[5];
    this.have_keyboard = a[6];
    this.enable_keyboard_stream = a[7];
    this.next_is_mouse_command = a[8];
    this.next_read_sample = a[9];
    this.next_read_led = a[10];
    this.next_handle_scan_code_set = a[11];
    this.next_read_rate = a[12];
    this.next_read_resolution = a[13];
    this.last_port60_byte = a[15];
    this.sample_rate = a[16];
    this.resolution = a[17];
    this.scaling2 = a[18];
    this.command_register = a[20];
    this.read_output_register = a[21];
    this.read_command_register = a[22];
    this.controller_output_port = a[23];
    this.read_controller_output_port = a[24];
    this.mouse_id = a[25] || 0;
    this.mouse_detect_state = a[26] || 0;
    this.mouse_reset_workaround = a[27] || !1;
    this.next_byte_is_aux = this.next_byte_is_ready = !1;
    this.kbd_buffer.clear();
    this.mouse_buffer.clear();
    this.bus.send("mouse-enable", this.use_mouse);
  };
  N.prototype.raise_irq = function () {
    this.next_byte_is_ready ||
      (this.kbd_buffer.length
        ? this.kbd_irq()
        : this.mouse_buffer.length && this.mouse_irq());
  };
  N.prototype.mouse_irq = function () {
    this.next_byte_is_aux = this.next_byte_is_ready = !0;
    this.command_register & 2 &&
      (this.cpu.device_lower_irq(12), this.cpu.device_raise_irq(12));
  };
  N.prototype.kbd_irq = function () {
    this.next_byte_is_ready = !0;
    this.next_byte_is_aux = !1;
    this.command_register & 1 &&
      (this.cpu.device_lower_irq(1), this.cpu.device_raise_irq(1));
  };
  N.prototype.kbd_send_code = function (a) {
    this.enable_keyboard_stream &&
      (A(a), this.kbd_buffer.push(a), this.raise_irq());
  };
  N.prototype.mouse_send_delta = function (a, b) {
    if (this.have_mouse && this.use_mouse) {
      var c = (this.resolution * this.sample_rate) / 80;
      this.mouse_delta_x += a * c;
      this.mouse_delta_y += b * c;
      this.enable_mouse_stream &&
        ((a = this.mouse_delta_x | 0), (b = this.mouse_delta_y | 0), a || b) &&
        (Date.now(),
        (this.mouse_delta_x -= a),
        (this.mouse_delta_y -= b),
        this.send_mouse_packet(a, b));
    }
  };
  N.prototype.mouse_send_click = function (a, b, c) {
    this.have_mouse &&
      this.use_mouse &&
      ((this.mouse_clicks = a | (c << 1) | (b << 2)),
      this.enable_mouse_stream && this.send_mouse_packet(0, 0));
  };
  N.prototype.send_mouse_packet = function (a, b) {
    var c = ((0 > b) << 5) | ((0 > a) << 4) | 8 | this.mouse_clicks;
    this.last_mouse_packet = Date.now();
    this.mouse_buffer.push(c);
    this.mouse_buffer.push(a);
    this.mouse_buffer.push(b);
    4 === this.mouse_id
      ? (this.mouse_buffer.push(0 | (this.wheel_movement & 15)),
        (this.wheel_movement = 0))
      : 3 === this.mouse_id &&
        (this.mouse_buffer.push(this.wheel_movement & 255),
        (this.wheel_movement = 0));
    this.raise_irq();
  };
  N.prototype.apply_scaling2 = function (a) {
    var b = a >> 31;
    switch (Math.abs(a)) {
      case 0:
      case 1:
      case 3:
        return a;
      case 2:
        return b;
      case 4:
        return 6 * b;
      case 5:
        return 9 * b;
      default:
        return a << 1;
    }
  };
  N.prototype.port60_read = function () {
    this.next_byte_is_ready = !1;
    if (!this.kbd_buffer.length && !this.mouse_buffer.length)
      return this.last_port60_byte;
    this.next_byte_is_aux
      ? (this.cpu.device_lower_irq(12),
        (this.last_port60_byte = this.mouse_buffer.shift()))
      : (this.cpu.device_lower_irq(1),
        (this.last_port60_byte = this.kbd_buffer.shift()));
    A(this.last_port60_byte);
    (this.kbd_buffer.length || this.mouse_buffer.length) && this.raise_irq();
    return this.last_port60_byte;
  };
  N.prototype.port64_read = function () {
    var a = 16;
    this.next_byte_is_ready && (a |= 1);
    this.next_byte_is_aux && (a |= 32);
    A(a);
    return a;
  };
  N.prototype.port60_write = function (a) {
    A(a);
    if (this.read_command_register)
      (this.command_register = a),
        (this.read_command_register = !1),
        A(this.command_register);
    else if (this.read_output_register)
      (this.read_output_register = !1),
        this.mouse_buffer.clear(),
        this.mouse_buffer.push(a),
        this.mouse_irq();
    else if (this.next_read_sample) {
      this.next_read_sample = !1;
      this.mouse_buffer.clear();
      this.mouse_buffer.push(250);
      this.sample_rate = a;
      switch (this.mouse_detect_state) {
        case -1:
          60 === a
            ? ((this.mouse_reset_workaround = !0),
              (this.mouse_detect_state = 0))
            : ((this.mouse_reset_workaround = !1),
              (this.mouse_detect_state = 200 === a ? 1 : 0));
          break;
        case 0:
          200 === a && (this.mouse_detect_state = 1);
          break;
        case 1:
          this.mouse_detect_state = 100 === a ? 2 : 200 === a ? 3 : 0;
          break;
        case 2:
          80 === a && (this.mouse_id = 3);
          this.mouse_detect_state = -1;
          break;
        case 3:
          80 === a && (this.mouse_id = 4), (this.mouse_detect_state = -1);
      }
      A(a);
      A(this.mouse_id);
      this.sample_rate || (this.sample_rate = 100);
      this.mouse_irq();
    } else if (this.next_read_resolution)
      (this.next_read_resolution = !1),
        this.mouse_buffer.clear(),
        this.mouse_buffer.push(250),
        (this.resolution = 3 < a ? 4 : 1 << a),
        this.mouse_irq();
    else if (this.next_read_led)
      (this.next_read_led = !1), this.kbd_buffer.push(250), this.kbd_irq();
    else if (this.next_handle_scan_code_set)
      (this.next_handle_scan_code_set = !1),
        this.kbd_buffer.push(250),
        this.kbd_irq(),
        a || this.kbd_buffer.push(2);
    else if (this.next_read_rate)
      (this.next_read_rate = !1), this.kbd_buffer.push(250), this.kbd_irq();
    else if (this.next_is_mouse_command) {
      if (((this.next_is_mouse_command = !1), A(a), this.have_mouse)) {
        this.kbd_buffer.clear();
        this.mouse_buffer.clear();
        this.mouse_buffer.push(250);
        switch (a) {
          case 230:
            this.scaling2 = !1;
            break;
          case 231:
            this.scaling2 = !0;
            break;
          case 232:
            this.next_read_resolution = !0;
            break;
          case 233:
            this.send_mouse_packet(0, 0);
            break;
          case 235:
            this.send_mouse_packet(0, 0);
            break;
          case 242:
            A(this.mouse_id);
            this.mouse_buffer.push(this.mouse_id);
            this.mouse_clicks = this.mouse_delta_x = this.mouse_delta_y = 0;
            this.raise_irq();
            break;
          case 243:
            this.next_read_sample = !0;
            break;
          case 244:
            this.use_mouse = this.enable_mouse_stream = !0;
            this.bus.send("mouse-enable", !0);
            this.mouse_clicks = this.mouse_delta_x = this.mouse_delta_y = 0;
            break;
          case 245:
            this.enable_mouse_stream = !1;
            break;
          case 246:
            this.enable_mouse_stream = !1;
            this.sample_rate = 100;
            this.scaling2 = !1;
            this.resolution = 4;
            break;
          case 255:
            this.mouse_buffer.push(170);
            this.mouse_buffer.push(0);
            this.use_mouse = !0;
            this.bus.send("mouse-enable", !0);
            this.enable_mouse_stream = !1;
            this.sample_rate = 100;
            this.scaling2 = !1;
            this.resolution = 4;
            this.mouse_reset_workaround || (this.mouse_id = 0);
            this.mouse_clicks = this.mouse_delta_x = this.mouse_delta_y = 0;
            break;
          default:
            A(a);
        }
        this.mouse_irq();
      }
    } else if (this.read_controller_output_port)
      (this.read_controller_output_port = !1),
        (this.controller_output_port = a);
    else {
      A(a);
      this.mouse_buffer.clear();
      this.kbd_buffer.clear();
      this.kbd_buffer.push(250);
      switch (a) {
        case 237:
          this.next_read_led = !0;
          break;
        case 240:
          this.next_handle_scan_code_set = !0;
          break;
        case 242:
          this.kbd_buffer.push(171);
          this.kbd_buffer.push(83);
          break;
        case 243:
          this.next_read_rate = !0;
          break;
        case 244:
          this.enable_keyboard_stream = !0;
          break;
        case 245:
          this.enable_keyboard_stream = !1;
          break;
        case 246:
          break;
        case 255:
          this.kbd_buffer.clear();
          this.kbd_buffer.push(250);
          this.kbd_buffer.push(170);
          this.kbd_buffer.push(0);
          break;
        default:
          A(a);
      }
      this.kbd_irq();
    }
  };
  N.prototype.port64_write = function (a) {
    A(a);
    switch (a) {
      case 32:
        this.kbd_buffer.clear();
        this.mouse_buffer.clear();
        this.kbd_buffer.push(this.command_register);
        this.kbd_irq();
        break;
      case 96:
        this.read_command_register = !0;
        break;
      case 209:
        this.read_controller_output_port = !0;
        break;
      case 211:
        this.read_output_register = !0;
        break;
      case 212:
        this.next_is_mouse_command = !0;
        break;
      case 167:
        this.command_register |= 32;
        break;
      case 168:
        this.command_register &= -33;
        break;
      case 169:
        this.kbd_buffer.clear();
        this.mouse_buffer.clear();
        this.kbd_buffer.push(0);
        this.kbd_irq();
        break;
      case 170:
        this.kbd_buffer.clear();
        this.mouse_buffer.clear();
        this.kbd_buffer.push(85);
        this.kbd_irq();
        break;
      case 171:
        this.kbd_buffer.clear();
        this.mouse_buffer.clear();
        this.kbd_buffer.push(0);
        this.kbd_irq();
        break;
      case 173:
        this.command_register |= 16;
        break;
      case 174:
        this.command_register &= -17;
        break;
      case 254:
        this.cpu.reboot_internal();
        break;
      default:
        A(a);
    }
  };
  function va(a) {
    this.cpu = a;
    this.cmos_index = 0;
    this.cmos_data = new Uint8Array(128);
    this.last_update = this.rtc_time = Date.now();
    this.next_interrupt_alarm = this.next_interrupt = 0;
    this.periodic_interrupt = !1;
    this.periodic_interrupt_time = 0.9765625;
    this.cmos_a = 38;
    this.cmos_b = 2;
    this.nmi_disabled = this.cmos_c = 0;
    a.io.register_write(112, this, function (b) {
      this.cmos_index = b & 127;
      this.nmi_disabled = b >> 7;
    });
    a.io.register_write(113, this, this.cmos_port_write);
    a.io.register_read(113, this, this.cmos_port_read);
  }
  va.prototype.get_state = function () {
    var a = [];
    a[0] = this.cmos_index;
    a[1] = this.cmos_data;
    a[2] = this.rtc_time;
    a[3] = this.last_update;
    a[4] = this.next_interrupt;
    a[5] = this.next_interrupt_alarm;
    a[6] = this.periodic_interrupt;
    a[7] = this.periodic_interrupt_time;
    a[8] = this.cmos_a;
    a[9] = this.cmos_b;
    a[10] = this.cmos_c;
    a[11] = this.nmi_disabled;
    return a;
  };
  va.prototype.set_state = function (a) {
    this.cmos_index = a[0];
    this.cmos_data = a[1];
    this.rtc_time = a[2];
    this.last_update = a[3];
    this.next_interrupt = a[4];
    this.next_interrupt_alarm = a[5];
    this.periodic_interrupt = a[6];
    this.periodic_interrupt_time = a[7];
    this.cmos_a = a[8];
    this.cmos_b = a[9];
    this.cmos_c = a[10];
    this.nmi_disabled = a[11];
  };
  va.prototype.timer = function (a) {
    a = Date.now();
    this.rtc_time += a - this.last_update;
    this.last_update = a;
    this.periodic_interrupt && this.next_interrupt < a
      ? (this.cpu.device_raise_irq(8),
        (this.cmos_c |= 192),
        (this.next_interrupt +=
          this.periodic_interrupt_time *
          Math.ceil((a - this.next_interrupt) / this.periodic_interrupt_time)))
      : this.next_interrupt_alarm &&
        this.next_interrupt_alarm < a &&
        (this.cpu.device_raise_irq(8),
        (this.cmos_c |= 160),
        (this.next_interrupt_alarm = 0));
    let b = 100;
    this.periodic_interrupt &&
      this.next_interrupt &&
      (b = Math.min(b, Math.max(0, this.next_interrupt - a)));
    this.next_interrupt_alarm &&
      (b = Math.min(b, Math.max(0, this.next_interrupt_alarm - a)));
    return b;
  };
  va.prototype.bcd_pack = function (a) {
    for (var b = 0, c = 0, d; a; )
      (d = a % 10), (c |= d << (4 * b)), b++, (a = (a - d) / 10);
    return c;
  };
  va.prototype.bcd_unpack = function (a) {
    return (a & 15) + 10 * ((a >> 4) & 15);
  };
  va.prototype.encode_time = function (a) {
    return this.cmos_b & 4 ? a : this.bcd_pack(a);
  };
  va.prototype.decode_time = function (a) {
    return this.cmos_b & 4 ? a : this.bcd_unpack(a);
  };
  va.prototype.cmos_port_read = function () {
    var a = this.cmos_index;
    switch (a) {
      case 0:
        return this.encode_time(new Date(this.rtc_time).getUTCSeconds());
      case 2:
        return this.encode_time(new Date(this.rtc_time).getUTCMinutes());
      case 4:
        return this.encode_time(new Date(this.rtc_time).getUTCHours());
      case 7:
        return this.encode_time(new Date(this.rtc_time).getUTCDate());
      case 8:
        return this.encode_time(new Date(this.rtc_time).getUTCMonth() + 1);
      case 9:
        return this.encode_time(new Date(this.rtc_time).getUTCFullYear() % 100);
      case 10:
        return 999 <= D.microtick() % 1e3 ? this.cmos_a | 128 : this.cmos_a;
      case 11:
        return this.cmos_b;
      case 12:
        return (
          this.cpu.device_lower_irq(8),
          (a = this.cmos_c),
          (this.cmos_c &= -241),
          a
        );
      case 13:
        return 0;
      case 50:
        return this.encode_time(
          (new Date(this.rtc_time).getUTCFullYear() / 100) | 0
        );
      default:
        return A(a), this.cmos_data[this.cmos_index];
    }
  };
  va.prototype.cmos_port_write = function (a) {
    switch (this.cmos_index) {
      case 10:
        this.cmos_a = a & 127;
        this.periodic_interrupt_time =
          1e3 / (32768 >> ((this.cmos_a & 15) - 1));
        A(this.cmos_a, 2);
        break;
      case 11:
        this.cmos_b = a;
        this.cmos_b & 64 && (this.next_interrupt = Date.now());
        if (this.cmos_b & 32) {
          a = new Date();
          const b = this.decode_time(this.cmos_data[1]),
            c = this.decode_time(this.cmos_data[3]),
            d = this.decode_time(this.cmos_data[5]);
          this.next_interrupt_alarm = +new Date(
            Date.UTC(
              a.getUTCFullYear(),
              a.getUTCMonth(),
              a.getUTCDate(),
              d,
              c,
              b
            )
          );
        }
        A(this.cmos_b, 2);
        break;
      case 1:
      case 3:
      case 5:
        this.cmos_write(this.cmos_index, a);
        break;
      default:
        A(this.cmos_index), A(a);
    }
    this.periodic_interrupt =
      64 === (this.cmos_b & 64) && 0 < (this.cmos_a & 15);
  };
  va.prototype.cmos_read = function (a) {
    return this.cmos_data[a];
  };
  va.prototype.cmos_write = function (a, b) {
    A(a);
    A(b);
    this.cmos_data[a] = b;
  };
  function wa(a, b, c) {
    this.bus = c;
    this.cpu = a;
    this.ints = 4;
    this.line_control = this.baud_rate = 0;
    this.lsr = 96;
    this.ier = this.fifo_control = 0;
    this.iir = 1;
    this.irq =
      this.scratch_register =
      this.modem_status =
      this.modem_control =
        0;
    this.input = [];
    this.current_line = "";
    switch (b) {
      case 1016:
        this.com = 0;
        this.irq = 4;
        break;
      case 760:
        this.com = 1;
        this.irq = 3;
        break;
      case 1e3:
        this.com = 2;
        this.irq = 4;
        break;
      case 744:
        this.irq = this.com = 3;
        break;
      default:
        J("Invalid serial port: " + A(b), 16384),
          (this.com = 0),
          (this.irq = 4);
    }
    this.bus.register(
      "serial" + this.com + "-input",
      function (d) {
        this.data_received(d);
      },
      this
    );
    this.bus.register(
      "serial" + this.com + "-modem-status-input",
      function (d) {
        this.set_modem_status(d);
      },
      this
    );
    this.bus.register(
      "serial" + this.com + "-carrier-detect-input",
      function (d) {
        this.set_modem_status(
          d ? this.modem_status | 136 : this.modem_status & -137
        );
      },
      this
    );
    this.bus.register(
      "serial" + this.com + "-ring-indicator-input",
      function (d) {
        this.set_modem_status(
          d ? this.modem_status | 68 : this.modem_status & -69
        );
      },
      this
    );
    this.bus.register(
      "serial" + this.com + "-data-set-ready-input",
      function (d) {
        this.set_modem_status(
          d ? this.modem_status | 34 : this.modem_status & -35
        );
      },
      this
    );
    this.bus.register(
      "serial" + this.com + "-clear-to-send-input",
      function (d) {
        this.set_modem_status(
          d ? this.modem_status | 17 : this.modem_status & -18
        );
      },
      this
    );
    a = a.io;
    a.register_write(
      b,
      this,
      function (d) {
        this.write_data(d);
      },
      function (d) {
        this.write_data(d & 255);
        this.write_data(d >> 8);
      }
    );
    a.register_write(b | 1, this, function (d) {
      this.line_control & 128
        ? ((this.baud_rate = (this.baud_rate & 255) | (d << 8)),
          A(this.baud_rate))
        : (0 === (this.ier & 2) && d & 2 && this.ThrowInterrupt(2),
          (this.ier = d & 15),
          A(d),
          this.CheckInterrupt());
    });
    a.register_read(b, this, function () {
      if (this.line_control & 128) return this.baud_rate & 255;
      let d = 0;
      0 !== this.input.length && ((d = this.input.shift()), A(d));
      0 === this.input.length &&
        ((this.lsr &= -2), this.ClearInterrupt(12), this.ClearInterrupt(4));
      return d;
    });
    a.register_read(b | 1, this, function () {
      return this.line_control & 128 ? this.baud_rate >> 8 : this.ier & 15;
    });
    a.register_read(b | 2, this, function () {
      var d = this.iir & 15;
      A(this.iir);
      2 == this.iir && this.ClearInterrupt(2);
      this.fifo_control & 1 && (d |= 192);
      return d;
    });
    a.register_write(b | 2, this, function (d) {
      A(d);
      this.fifo_control = d;
    });
    a.register_read(b | 3, this, function () {
      A(this.line_control);
      return this.line_control;
    });
    a.register_write(b | 3, this, function (d) {
      A(d);
      this.line_control = d;
    });
    a.register_read(b | 4, this, function () {
      return this.modem_control;
    });
    a.register_write(b | 4, this, function (d) {
      A(d);
      this.modem_control = d;
    });
    a.register_read(b | 5, this, function () {
      A(this.lsr);
      return this.lsr;
    });
    a.register_write(b | 5, this, function () {});
    a.register_read(b | 6, this, function () {
      A(this.modem_status);
      return (this.modem_status &= 240);
    });
    a.register_write(b | 6, this, function (d) {
      A(d);
      this.set_modem_status(d);
    });
    a.register_read(b | 7, this, function () {
      return this.scratch_register;
    });
    a.register_write(b | 7, this, function (d) {
      this.scratch_register = d;
    });
  }
  wa.prototype.get_state = function () {
    var a = [];
    a[0] = this.ints;
    a[1] = this.baud_rate;
    a[2] = this.line_control;
    a[3] = this.lsr;
    a[4] = this.fifo_control;
    a[5] = this.ier;
    a[6] = this.iir;
    a[7] = this.modem_control;
    a[8] = this.modem_status;
    a[9] = this.scratch_register;
    a[10] = this.irq;
    return a;
  };
  wa.prototype.set_state = function (a) {
    this.ints = a[0];
    this.baud_rate = a[1];
    this.line_control = a[2];
    this.lsr = a[3];
    this.fifo_control = a[4];
    this.ier = a[5];
    this.iir = a[6];
    this.modem_control = a[7];
    this.modem_status = a[8];
    this.scratch_register = a[9];
    this.irq = a[10];
  };
  wa.prototype.CheckInterrupt = function () {
    this.ints & 4096 && this.ier & 1
      ? ((this.iir = 12), this.cpu.device_raise_irq(this.irq))
      : this.ints & 16 && this.ier & 1
      ? ((this.iir = 4), this.cpu.device_raise_irq(this.irq))
      : this.ints & 4 && this.ier & 2
      ? ((this.iir = 2), this.cpu.device_raise_irq(this.irq))
      : this.ints & 1 && this.ier & 8
      ? ((this.iir = 0), this.cpu.device_raise_irq(this.irq))
      : ((this.iir = 1), this.cpu.device_lower_irq(this.irq));
  };
  wa.prototype.ThrowInterrupt = function (a) {
    this.ints |= 1 << a;
    this.CheckInterrupt();
  };
  wa.prototype.ClearInterrupt = function (a) {
    this.ints &= ~(1 << a);
    this.CheckInterrupt();
  };
  wa.prototype.data_received = function (a) {
    A(a);
    this.input.push(a);
    this.lsr |= 1;
    this.fifo_control & 1 ? this.ThrowInterrupt(12) : this.ThrowInterrupt(4);
  };
  wa.prototype.write_data = function (a) {
    this.line_control & 128
      ? (this.baud_rate = (this.baud_rate & -256) | a)
      : (A(a),
        this.ThrowInterrupt(2),
        this.bus.send("serial" + this.com + "-output-byte", a));
  };
  wa.prototype.set_modem_status = function (a) {
    A(a);
    const b = this.modem_status & 15;
    let c = (this.modem_status ^ a) >> 4;
    this.modem_status = a;
    this.modem_status = this.modem_status | c | b;
  };
  function xa(a) {
    this.cpu = a;
    var b = a.io;
    a.devices.pci.register_device({
      pci_id: 56,
      pci_space: [
        134, 128, 19, 113, 7, 0, 128, 2, 8, 0, 128, 6, 0, 0, 128, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 0, 0,
      ],
      pci_bars: [],
      name: "acpi",
    });
    this.timer_imprecision_offset = this.timer_last_value = 0;
    this.status = 1;
    this.pm1_enable = this.pm1_status = 0;
    this.last_timer = this.get_timer(D.microtick());
    this.gpe = new Uint8Array(4);
    b.register_read(45056, this, void 0, function () {
      return this.pm1_status;
    });
    b.register_write(45056, this, void 0, function (c) {
      A(c, 4);
      this.pm1_status &= ~c;
    });
    b.register_read(45058, this, void 0, function () {
      return this.pm1_enable;
    });
    b.register_write(45058, this, void 0, function (c) {
      A(c);
      this.pm1_enable = c;
    });
    b.register_read(45060, this, void 0, function () {
      return this.status;
    });
    b.register_write(45060, this, void 0, function (c) {
      A(c);
      this.status = c;
    });
    b.register_read(45064, this, void 0, void 0, function () {
      return this.get_timer(D.microtick()) & 16777215;
    });
    b.register_read(45024, this, function () {
      return this.gpe[0];
    });
    b.register_read(45025, this, function () {
      return this.gpe[1];
    });
    b.register_read(45026, this, function () {
      return this.gpe[2];
    });
    b.register_read(45027, this, function () {
      return this.gpe[3];
    });
    b.register_write(45024, this, function (c) {
      A(c);
      this.gpe[0] = c;
    });
    b.register_write(45025, this, function (c) {
      A(c);
      this.gpe[1] = c;
    });
    b.register_write(45026, this, function (c) {
      A(c);
      this.gpe[2] = c;
    });
    b.register_write(45027, this, function (c) {
      A(c);
      this.gpe[3] = c;
    });
  }
  xa.prototype.timer = function (a) {
    a = this.get_timer(a);
    var b = 0 !== ((a ^ this.last_timer) & 8388608);
    this.pm1_enable & 1 && b
      ? ((this.pm1_status |= 1), this.cpu.device_raise_irq(9))
      : this.cpu.device_lower_irq(9);
    this.last_timer = a;
    return 100;
  };
  xa.prototype.get_timer = function (a) {
    a = Math.round(3579.545 * a);
    a === this.timer_last_value
      ? 3579.545 > this.timer_imprecision_offset &&
        this.timer_imprecision_offset++
      : this.timer_last_value + this.timer_imprecision_offset <= a &&
        ((this.timer_imprecision_offset = 0), (this.timer_last_value = a));
    return this.timer_last_value + this.timer_imprecision_offset;
  };
  xa.prototype.get_state = function () {
    var a = [];
    a[0] = this.status;
    a[1] = this.pm1_status;
    a[2] = this.pm1_enable;
    a[3] = this.gpe;
    return a;
  };
  xa.prototype.set_state = function (a) {
    this.status = a[0];
    this.pm1_status = a[1];
    this.pm1_enable = a[2];
    this.gpe = a[3];
  };
  function O(a) {
    this.cpu = a;
    this.timer_divider = this.apic_id = 0;
    this.timer_divider_shift = 1;
    this.timer_current_count = this.timer_initial_count = 0;
    this.next_tick = D.microtick();
    this.lvt_error =
      this.lvt_int1 =
      this.lvt_int0 =
      this.lvt_perf_counter =
      this.lvt_timer =
        65536;
    this.icr1 = this.icr0 = this.tpr = 0;
    this.irr = new Int32Array(8);
    this.isr = new Int32Array(8);
    this.tmr = new Int32Array(8);
    this.spurious_vector = 254;
    this.destination_format = -1;
    this.read_error = this.error = this.local_destination = 0;
    a.io.mmap_register(
      4276092928,
      1048576,
      (b) => {
        A(b >>> 0);
        var c = b & 3;
        return (this.read32(b & -4) >> (8 * c)) & 255;
      },
      (b, c) => {
        A(b);
        A(c);
      },
      (b) => this.read32(b),
      (b, c) => this.write32(b, c)
    );
  }
  O.prototype.read32 = function (a) {
    a = (a - 4276092928) | 0;
    switch (a) {
      case 32:
        return this.apic_id;
      case 48:
        return 327700;
      case 128:
        return this.tpr;
      case 208:
        return this.local_destination;
      case 224:
        return this.destination_format;
      case 240:
        return this.spurious_vector;
      case 256:
      case 272:
      case 288:
      case 304:
      case 320:
      case 336:
      case 352:
      case 368:
        return (a = (a - 256) >> 4), A(this.isr[a] >>> 0, 8), this.isr[a];
      case 384:
      case 400:
      case 416:
      case 432:
      case 448:
      case 464:
      case 480:
      case 496:
        return (a = (a - 384) >> 4), A(this.tmr[a] >>> 0, 8), this.tmr[a];
      case 512:
      case 528:
      case 544:
      case 560:
      case 576:
      case 592:
      case 608:
      case 624:
        return (a = (a - 512) >> 4), A(this.irr[a] >>> 0, 8), this.irr[a];
      case 640:
        return A(this.read_error >>> 0, 8), this.read_error;
      case 768:
        return this.icr0;
      case 784:
        return this.icr1;
      case 800:
        return this.lvt_timer;
      case 832:
        return this.lvt_perf_counter;
      case 848:
        return this.lvt_int0;
      case 864:
        return this.lvt_int1;
      case 880:
        return this.lvt_error;
      case 992:
        return this.timer_divider;
      case 896:
        return this.timer_initial_count;
      case 912:
        return A(this.timer_current_count >>> 0, 8), this.timer_current_count;
      default:
        return A(a), 0;
    }
  };
  O.prototype.write32 = function (a, b) {
    a = (a - 4276092928) | 0;
    switch (a) {
      case 48:
        A(b >>> 0, 8);
        break;
      case 128:
        this.tpr = b & 255;
        this.check_vector();
        break;
      case 176:
        b = this.highest_isr();
        -1 !== b &&
          (this.register_clear_bit(this.isr, b),
          this.register_get_bit(this.tmr, b) &&
            this.cpu.devices.ioapic.remote_eoi(b),
          this.check_vector());
        break;
      case 208:
        A(b >>> 0, 8);
        this.local_destination = b & 4278190080;
        break;
      case 224:
        A(b >>> 0, 8);
        this.destination_format = b | 16777215;
        break;
      case 240:
        A(b >>> 0, 8);
        this.spurious_vector = b;
        break;
      case 640:
        A(b >>> 0, 8);
        this.read_error = this.error;
        this.error = 0;
        break;
      case 768:
        a = b & 255;
        var c = (b >> 8) & 7,
          d = (b >> 11) & 1,
          e = (b >> 15) & 1,
          g = (b >> 18) & 3,
          f = this.icr1 >>> 24;
        A(b, 8);
        A(a, 2);
        this.icr0 = b & -4097;
        0 === g
          ? this.route(a, c, e, f, d)
          : 1 === g
          ? this.deliver(a, 0, e)
          : 2 === g && this.deliver(a, c, e);
        break;
      case 784:
        A(b >>> 0, 8);
        this.icr1 = b;
        break;
      case 800:
        A(b >>> 0, 8);
        this.lvt_timer = b;
        break;
      case 832:
        A(b >>> 0, 8);
        this.lvt_perf_counter = b;
        break;
      case 848:
        A(b >>> 0, 8);
        this.lvt_int0 = b;
        break;
      case 864:
        A(b >>> 0, 8);
        this.lvt_int1 = b;
        break;
      case 880:
        A(b >>> 0, 8);
        this.lvt_error = b;
        break;
      case 992:
        A(b >>> 0, 8);
        this.timer_divider = b;
        b = (b & 3) | ((b & 8) >> 1);
        this.timer_divider_shift = 7 === b ? 0 : b + 1;
        break;
      case 896:
        A(b >>> 0, 8);
        this.timer_initial_count = b >>> 0;
        this.timer_current_count = b >>> 0;
        this.next_tick = D.microtick();
        this.timer_active = !0;
        break;
      case 912:
        A(b >>> 0, 8);
        break;
      default:
        A(a), A(b >>> 0, 8);
    }
  };
  O.prototype.timer = function (a) {
    if (0 === this.timer_current_count) return 100;
    const b = 1e6 / (1 << this.timer_divider_shift);
    a = ((a - this.next_tick) * b) >>> 0;
    this.next_tick += a / b;
    this.timer_current_count -= a;
    0 >= this.timer_current_count &&
      ((a = this.lvt_timer & 393216),
      131072 === a
        ? ((this.timer_current_count %= this.timer_initial_count),
          0 >= this.timer_current_count &&
            (this.timer_current_count += this.timer_initial_count),
          0 === (this.lvt_timer & 65536) &&
            this.deliver(this.lvt_timer & 255, 0, !1))
        : 0 === a &&
          ((this.timer_current_count = 0),
          0 === (this.lvt_timer & 65536) &&
            this.deliver(this.lvt_timer & 255, 0, !1)));
    return Math.max(0, this.timer_current_count / b);
  };
  O.prototype.route = function (a, b, c) {
    this.deliver(a, b, c);
  };
  O.prototype.deliver = function (a, b, c) {
    5 !== b &&
      4 !== b &&
      (this.register_get_bit(this.irr, a)
        ? A(a, 2)
        : (this.register_set_bit(this.irr, a),
          c
            ? this.register_set_bit(this.tmr, a)
            : this.register_clear_bit(this.tmr, a),
          this.check_vector()));
  };
  O.prototype.highest_irr = function () {
    return this.register_get_highest_bit(this.irr);
  };
  O.prototype.highest_isr = function () {
    return this.register_get_highest_bit(this.isr);
  };
  O.prototype.check_vector = function () {
    var a = this.highest_irr();
    -1 !== a &&
      (this.highest_isr() >= a ||
        (a & 240) <= (this.tpr & 240) ||
        this.cpu.handle_irqs());
  };
  O.prototype.acknowledge_irq = function () {
    var a = this.highest_irr();
    if (-1 === a || this.highest_isr() >= a || (a & 240) <= (this.tpr & 240))
      return -1;
    this.register_clear_bit(this.irr, a);
    this.register_set_bit(this.isr, a);
    this.check_vector();
    return a;
  };
  O.prototype.get_state = function () {
    var a = [];
    a[0] = this.apic_id;
    a[1] = this.timer_divider;
    a[2] = this.timer_divider_shift;
    a[3] = this.timer_initial_count;
    a[4] = this.timer_current_count;
    a[5] = this.next_tick;
    a[6] = this.lvt_timer;
    a[7] = this.lvt_perf_counter;
    a[8] = this.lvt_int0;
    a[9] = this.lvt_int1;
    a[10] = this.lvt_error;
    a[11] = this.tpr;
    a[12] = this.icr0;
    a[13] = this.icr1;
    a[14] = this.irr;
    a[15] = this.isr;
    a[16] = this.tmr;
    a[17] = this.spurious_vector;
    a[18] = this.destination_format;
    a[19] = this.local_destination;
    a[20] = this.error;
    a[21] = this.read_error;
    return a;
  };
  O.prototype.set_state = function (a) {
    this.apic_id = a[0];
    this.timer_divider = a[1];
    this.timer_divider_shift = a[2];
    this.timer_initial_count = a[3];
    this.timer_current_count = a[4];
    this.next_tick = a[5];
    this.lvt_timer = a[6];
    this.lvt_perf_counter = a[7];
    this.lvt_int0 = a[8];
    this.lvt_int1 = a[9];
    this.lvt_error = a[10];
    this.tpr = a[11];
    this.icr0 = a[12];
    this.icr1 = a[13];
    this.irr = a[14];
    this.isr = a[15];
    this.tmr = a[16];
    this.spurious_vector = a[17];
    this.destination_format = a[18];
    this.local_destination = a[19];
    this.error = a[20];
    this.read_error = a[21];
  };
  O.prototype.register_get_bit = function (a, b) {
    return (a[b >> 5] >> (b & 31)) & 1;
  };
  O.prototype.register_set_bit = function (a, b) {
    a[b >> 5] |= 1 << (b & 31);
  };
  O.prototype.register_clear_bit = function (a, b) {
    a[b >> 5] &= ~(1 << (b & 31));
  };
  O.prototype.register_get_highest_bit = function (a) {
    for (var b = 7; 0 <= b; b--) {
      var c = a[b];
      if (c) return r.int_log2(c >>> 0) | (b << 5);
    }
    return -1;
  };
  function ya(a) {
    this.cpu = a;
    this.ioredtbl_config = new Int32Array(24);
    this.ioredtbl_destination = new Int32Array(24);
    for (var b = 0; b < this.ioredtbl_config.length; b++)
      this.ioredtbl_config[b] = 65536;
    this.irq_value = this.irr = this.ioapic_id = this.ioregsel = 0;
    a.io.mmap_register(
      4273995776,
      131072,
      (c) => {
        c = (c - 4273995776) | 0;
        if (16 <= c && 20 > c)
          return (
            (c -= 16),
            A(this.ioregsel),
            (this.read(this.ioregsel) >> (8 * c)) & 255
          );
        A(c >>> 0);
        return 0;
      },
      (c) => {
        A(c >>> 0);
      },
      (c) => {
        c = (c - 4273995776) | 0;
        if (0 === c) return this.ioregsel;
        if (16 === c) return this.read(this.ioregsel);
        A(c >>> 0);
        return 0;
      },
      (c, d) => {
        c = (c - 4273995776) | 0;
        0 === c
          ? (this.ioregsel = d)
          : 16 === c
          ? this.write(this.ioregsel, d)
          : (A(c >>> 0), A(d >>> 0, 8));
      }
    );
  }
  ya.prototype.remote_eoi = function (a) {
    for (var b = 0; 24 > b; b++) {
      var c = this.ioredtbl_config[b];
      (c & 255) === a &&
        c & 16384 &&
        (A(b), (this.ioredtbl_config[b] &= -16385), this.check_irq(b));
    }
  };
  ya.prototype.check_irq = function (a) {
    var b = 1 << a;
    if (0 !== (this.irr & b)) {
      var c = this.ioredtbl_config[a];
      if (0 === (c & 65536)) {
        var d = (c >> 8) & 7,
          e = this.ioredtbl_destination[a] >>> 24;
        if (0 === (c & 32768)) this.irr &= ~b;
        else if (((this.ioredtbl_config[a] |= 16384), c & 16384)) return;
        (0 !== d && 1 !== d) ||
          this.cpu.devices.apic.route(
            c & 255,
            d,
            32768 === (c & 32768),
            e,
            (c >> 11) & 1
          );
        this.ioredtbl_config[a] &= -4097;
      }
    }
  };
  ya.prototype.set_irq = function (a) {
    if (!(24 <= a)) {
      var b = 1 << a;
      0 === (this.irq_value & b) &&
        ((this.irq_value |= b),
        65536 !== (this.ioredtbl_config[a] & 98304) &&
          ((this.irr |= b), this.check_irq(a)));
    }
  };
  ya.prototype.clear_irq = function (a) {
    if (!(24 <= a)) {
      var b = 1 << a;
      (this.irq_value & b) === b &&
        ((this.irq_value &= ~b),
        this.ioredtbl_config[a] & 32768 && (this.irr &= ~b));
    }
  };
  ya.prototype.read = function (a) {
    if (0 === a) return this.ioapic_id << 24;
    if (1 === a) return 1507345;
    if (2 === a) return this.ioapic_id << 24;
    if (16 <= a && 64 > a) {
      var b = (a - 16) >> 1;
      a = a & 1 ? this.ioredtbl_destination[b] : this.ioredtbl_config[b];
      A(b);
      A(a, 8);
      return a;
    }
    A(a);
    return 0;
  };
  ya.prototype.write = function (a, b) {
    if (0 === a) this.ioapic_id = (b >>> 24) & 15;
    else if (1 !== a && 2 !== a)
      if (16 <= a && 64 > a) {
        var c = (a - 16) >> 1;
        a & 1
          ? ((this.ioredtbl_destination[c] = b & 4278190080),
            A(b >>> 0, 8),
            A(c),
            A(b >>> 24, 2))
          : ((this.ioredtbl_config[c] =
              (b & 110591) | (this.ioredtbl_config[c] & -110592)),
            (a = b & 255),
            A(b >>> 0, 8),
            A(c),
            A(a, 2),
            this.check_irq(c));
      } else A(a), A(b >>> 0, 8);
  };
  ya.prototype.get_state = function () {
    var a = [];
    a[0] = this.ioredtbl_config;
    a[1] = this.ioredtbl_destination;
    a[2] = this.ioregsel;
    a[3] = this.ioapic_id;
    a[4] = this.irr;
    a[5] = this.irq_value;
    return a;
  };
  ya.prototype.set_state = function (a) {
    this.ioredtbl_config = a[0];
    this.ioredtbl_destination = a[1];
    this.ioregsel = a[2];
    this.ioapic_id = a[3];
    this.irr = a[4];
    this.irq_value = a[5];
  };
  function za(a) {
    this.message = a;
  }
  za.prototype = Error();
  const Aa = {
    Uint8Array,
    Int8Array,
    Uint16Array,
    Int16Array,
    Uint32Array,
    Int32Array,
    Float32Array,
    Float64Array,
  };
  function Ba(a, b) {
    if ("object" !== typeof a || null === a) return a;
    if (a instanceof Array) return a.map((e) => Ba(e, b));
    a.constructor === Object && console.log(a);
    if (a.BYTES_PER_ELEMENT) {
      var c = new Uint8Array(
        a.buffer,
        a.byteOffset,
        a.length * a.BYTES_PER_ELEMENT
      );
      return {
        __state_type__: a.constructor.name.replace("bound ", ""),
        buffer_id: b.push(c) - 1,
      };
    }
    a = a.get_state();
    c = [];
    for (var d = 0; d < a.length; d++) c[d] = Ba(a[d], b);
    return c;
  }
  function Ca(a, b) {
    if ("object" !== typeof a || null === a) return a;
    if (a instanceof Array) {
      for (let c = 0; c < a.length; c++) a[c] = Ca(a[c], b);
      return a;
    }
    return new Aa[a.__state_type__](b[a.buffer_id]);
  }
  E.prototype.save_state = function () {
    for (var a = [], b = Ba(this, a), c = [], d = 0, e = 0; e < a.length; e++) {
      var g = a[e].byteLength;
      c[e] = { offset: d, length: g };
      d += g;
      d = (d + 3) & -4;
    }
    e = JSON.stringify({ buffer_infos: c, state: b });
    e = new TextEncoder().encode(e);
    b = 16 + e.length;
    b = (b + 3) & -4;
    g = b + d;
    d = new ArrayBuffer(g);
    var f = new Int32Array(d, 0, 4);
    new Uint8Array(d, 16, e.length).set(e);
    b = new Uint8Array(d, b);
    f[0] = -2039052682;
    f[1] = 6;
    f[2] = g;
    f[3] = e.length;
    for (e = 0; e < a.length; e++) b.set(a[e], c[e].offset);
    return d;
  };
  E.prototype.restore_state = function (a) {
    function b(p, t) {
      const q = p.length;
      if (16 > q) throw new za("Invalid length: " + q);
      p = new Int32Array(p.buffer, p.byteOffset, 4);
      if (-2039052682 !== p[0])
        throw new za("Invalid header: " + A(p[0] >>> 0));
      if (6 !== p[1]) throw new za("Version mismatch: dump=" + p[1] + " we=6");
      if (t && p[2] !== q)
        throw new za(
          "Length doesn't match header: real=" + q + " header=" + p[2]
        );
      return p[3];
    }
    function c(p) {
      p = new TextDecoder().decode(p);
      return JSON.parse(p);
    }
    a = new Uint8Array(a);
    if (4247762216 === new Uint32Array(a.buffer, 0, 1)[0]) {
      var d = this.zstd_create_ctx(a.length);
      new Uint8Array(
        this.wasm_memory.buffer,
        this.zstd_get_src_ptr(d),
        a.length
      ).set(a);
      var e = this.zstd_read(d, 16),
        g = new Uint8Array(this.wasm_memory.buffer, e, 16),
        f = b(g, !1);
      this.zstd_read_free(e, 16);
      e = this.zstd_read(d, f);
      g = new Uint8Array(this.wasm_memory.buffer, e, f);
      g = c(g);
      this.zstd_read_free(e, f);
      e = g.state;
      var k = g.buffer_infos;
      g = [];
      f = 16 + f;
      for (var l of k) {
        k = ((f + 3) & -4) - f;
        if (1048576 < l.length) {
          var m = this.zstd_read(d, k);
          this.zstd_read_free(m, k);
          m = new Uint8Array(l.length);
          g.push(m.buffer);
          for (var n = 0; n < l.length; ) {
            const p = Math.min(l.length - n, 1048576),
              t = this.zstd_read(d, p);
            m.set(new Uint8Array(this.wasm_memory.buffer, t, p), n);
            this.zstd_read_free(t, p);
            n += p;
          }
        } else
          (m = this.zstd_read(d, k + l.length)),
            (n = m + k),
            g.push(this.wasm_memory.buffer.slice(n, n + l.length)),
            this.zstd_read_free(m, k + l.length);
        f += k + l.length;
      }
      e = Ca(e, g);
      this.set_state(e);
      this.zstd_free_ctx(d);
    } else {
      d = b(a, !0);
      if (0 > d || d + 12 >= a.length)
        throw new za("Invalid info block length: " + d);
      l = a.subarray(16, 16 + d);
      e = c(l);
      l = e.state;
      e = e.buffer_infos;
      let p = 16 + d;
      p = (p + 3) & -4;
      d = e.map((t) => {
        const q = p + t.offset;
        return a.buffer.slice(q, q + t.length);
      });
      l = Ca(l, d);
      this.set_state(l);
    }
  };
  function Da(a, b, c) {
    a[0] === b[0] &&
      a[1] === b[1] &&
      a[2] === b[2] &&
      a[3] === b[3] &&
      a[4] === b[4] &&
      a[5] === b[5] &&
      ((a[0] = c[0]),
      (a[1] = c[1]),
      (a[2] = c[2]),
      (a[3] = c[3]),
      (a[4] = c[4]),
      (a[5] = c[5]));
    a[6] === b[0] &&
      a[7] === b[1] &&
      a[8] === b[2] &&
      a[9] === b[3] &&
      a[10] === b[4] &&
      a[11] === b[5] &&
      ((a[6] = c[0]),
      (a[7] = c[1]),
      (a[8] = c[2]),
      (a[9] = c[3]),
      (a[10] = c[4]),
      (a[11] = c[5]));
    var d = (a[12] << 8) | a[13];
    if (2048 === d) {
      if (((a = a.subarray(14)), 4 === a[0] >> 4 && 17 === a[9])) {
        a = a.subarray(20);
        d = (a[0] << 8) | a[1];
        var e = (a[2] << 8) | a[3];
        A((a[6] << 8) | a[7], 4);
        if (67 === d || 67 === e)
          if (
            ((d = a.subarray(8)),
            (e = (d[236] << 24) | (d[237] << 16) | (d[238] << 8) | d[239]),
            1669485411 !== e)
          )
            A(e, 8);
          else
            for (
              d[28] === b[0] &&
                d[29] === b[1] &&
                d[30] === b[2] &&
                d[31] === b[3] &&
                d[32] === b[4] &&
                d[33] === b[5] &&
                ((d[28] = c[0]),
                (d[29] = c[1]),
                (d[30] = c[2]),
                (d[31] = c[3]),
                (d[32] = c[4]),
                (d[33] = c[5]),
                (a[6] = a[7] = 0)),
                e = 240;
              e < d.length;

            ) {
              const g = d[e++];
              if (255 === g) break;
              const f = d[e++];
              61 === g &&
                1 === d[e + 0] &&
                d[e + 1] === b[0] &&
                d[e + 2] === b[1] &&
                d[e + 3] === b[2] &&
                d[e + 4] === b[3] &&
                d[e + 5] === b[4] &&
                d[e + 6] === b[5] &&
                ((d[e + 1] = c[0]),
                (d[e + 2] = c[1]),
                (d[e + 3] = c[2]),
                (d[e + 4] = c[3]),
                (d[e + 5] = c[4]),
                (d[e + 6] = c[5]),
                (a[6] = a[7] = 0));
              e += f;
            }
      }
    } else
      2054 === d &&
        ((a = a.subarray(14)),
        Ea(a.subarray(8, 14)),
        Ea(a.subarray(18, 24)),
        a[8] === b[0] &&
          a[9] === b[1] &&
          a[10] === b[2] &&
          a[11] === b[3] &&
          a[12] === b[4] &&
          a[13] === b[5] &&
          ((a[8] = c[0]),
          (a[9] = c[1]),
          (a[10] = c[2]),
          (a[11] = c[3]),
          (a[12] = c[4]),
          (a[13] = c[5])));
  }
  function Ea(a) {
    return [
      a[0].toString(16).padStart(2, "0"),
      a[1].toString(16).padStart(2, "0"),
      a[2].toString(16).padStart(2, "0"),
      a[3].toString(16).padStart(2, "0"),
      a[4].toString(16).padStart(2, "0"),
      a[5].toString(16).padStart(2, "0"),
    ].join(":");
  }
  function Fa(a, b, c, d) {
    this.cpu = a;
    this.pci = a.devices.pci;
    this.preserve_mac_from_state_image = c;
    this.mac_address_translation = d;
    this.bus = b;
    this.bus.register(
      "net0-receive",
      function (e) {
        this.receive(e);
      },
      this
    );
    this.port = 768;
    this.name = "ne2k";
    this.pci_space = [
      236,
      16,
      41,
      128,
      3,
      1,
      0,
      0,
      0,
      0,
      0,
      2,
      0,
      0,
      0,
      0,
      (this.port & 255) | 1,
      this.port >> 8,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      244,
      26,
      0,
      17,
      0,
      0,
      184,
      254,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
    ];
    this.pci_id = 40;
    this.pci_bars = [{ size: 32 }];
    this.imr = this.isr = 0;
    this.cr = 1;
    this.tpsr = this.tcnt = this.rcnt = this.dcfg = 0;
    this.memory = new Uint8Array(32768);
    this.txcr = this.rxcr = 0;
    this.tsr = 1;
    this.mac = new Uint8Array([
      0,
      34,
      21,
      (255 * Math.random()) | 0,
      (255 * Math.random()) | 0,
      (255 * Math.random()) | 0,
    ]);
    this.mar = Uint8Array.of(255, 255, 255, 255, 255, 255, 255, 255);
    this.mac_address_in_state = null;
    for (b = 0; 6 > b; b++)
      this.memory[b << 1] = this.memory[(b << 1) | 1] = this.mac[b];
    this.memory[28] = this.memory[29] = 87;
    this.memory[30] = this.memory[31] = 87;
    J("Mac: " + Ea(this.mac), 1048576);
    this.rsar = 0;
    this.pstart = 64;
    this.pstop = 128;
    this.boundary = this.curpg = 76;
    b = a.io;
    b.register_read(this.port | 0, this, function () {
      return this.cr;
    });
    b.register_write(this.port | 0, this, function (e) {
      this.cr = e;
      A(e, 2);
      A(this.txcr, 2);
      this.cr & 1 ||
        (e & 24 && 0 === this.rcnt && this.do_interrupt(64),
        e & 4 &&
          ((e = this.tpsr << 8),
          (e = this.memory.subarray(e, e + this.tcnt)),
          this.mac_address_in_state &&
            ((e = new Uint8Array(e)),
            Da(e, this.mac_address_in_state, this.mac)),
          this.bus.send("net0-send", e),
          this.bus.send("eth-transmit-end", [e.length]),
          (this.cr &= -5),
          this.do_interrupt(2),
          A(e.byteLength)));
    });
    b.register_read(this.port | 13, this, function () {
      return 1 === this.get_page() ? this.mar[5] : 0;
    });
    b.register_read(
      this.port | 14,
      this,
      function () {
        return 1 === this.get_page() ? this.mar[6] : 0;
      },
      function () {
        this.get_page();
        return 0;
      }
    );
    b.register_read(this.port | 15, this, function () {
      return 1 === this.get_page() ? this.mar[7] : 0;
    });
    b.register_read(this.port | 31, this, function () {
      this.get_page();
      this.do_interrupt(128);
      return 0;
    });
    b.register_write(this.port | 31, this, function (e) {
      this.get_page();
      A(e, 2);
    });
    b.register_read(this.port | 1, this, function () {
      var e = this.get_page();
      return 0 === e
        ? this.pstart
        : 1 === e
        ? this.mac[0]
        : 2 === e
        ? this.pstart
        : 0;
    });
    b.register_write(this.port | 1, this, function (e) {
      var g = this.get_page();
      0 === g
        ? (A(e, 2), (this.pstart = e))
        : 1 === g
        ? (A(e), (this.mac[0] = e))
        : A(e);
    });
    b.register_read(this.port | 2, this, function () {
      var e = this.get_page();
      return 0 === e
        ? this.pstop
        : 1 === e
        ? this.mac[1]
        : 2 === e
        ? this.pstop
        : 0;
    });
    b.register_write(this.port | 2, this, function (e) {
      var g = this.get_page();
      0 === g
        ? (A(e, 2),
          e > this.memory.length >> 8 && ((e = this.memory.length >> 8), A(e)),
          (this.pstop = e))
        : 1 === g
        ? (A(e), (this.mac[1] = e))
        : A(e);
    });
    b.register_read(this.port | 7, this, function () {
      var e = this.get_page();
      return 0 === e
        ? (A(this.isr, 2), this.isr)
        : 1 === e
        ? (A(this.curpg, 2), this.curpg)
        : 0;
    });
    b.register_write(this.port | 7, this, function (e) {
      var g = this.get_page();
      0 === g
        ? (A(e, 2), (this.isr &= ~e), this.update_irq())
        : 1 === g && (A(e, 2), (this.curpg = e));
    });
    b.register_write(this.port | 13, this, function (e) {
      0 === this.get_page() && (this.txcr = e);
      A(e, 2);
    });
    b.register_write(this.port | 14, this, function (e) {
      0 === this.get_page() ? (A(e, 2), (this.dcfg = e)) : A(e, 2);
    });
    b.register_read(this.port | 10, this, function () {
      var e = this.get_page();
      return 0 === e ? 80 : 1 === e ? this.mar[2] : 0;
    });
    b.register_write(this.port | 10, this, function (e) {
      0 === this.get_page()
        ? (A(e, 2), (this.rcnt = (this.rcnt & 65280) | (e & 255)))
        : A(e, 2);
    });
    b.register_read(this.port | 11, this, function () {
      var e = this.get_page();
      return 0 === e ? 67 : 1 === e ? this.mar[3] : 0;
    });
    b.register_write(this.port | 11, this, function (e) {
      0 === this.get_page()
        ? (A(e, 2), (this.rcnt = (this.rcnt & 255) | ((e << 8) & 65280)))
        : A(e, 2);
    });
    b.register_read(this.port | 8, this, function () {
      var e = this.get_page();
      return 0 === e ? this.rsar & 255 : 1 === e ? this.mar[0] : 0;
    });
    b.register_write(this.port | 8, this, function (e) {
      0 === this.get_page()
        ? (A(e, 2), (this.rsar = (this.rsar & 65280) | (e & 255)))
        : A(e, 2);
    });
    b.register_read(this.port | 9, this, function () {
      var e = this.get_page();
      return 0 === e ? (this.rsar >> 8) & 255 : 1 === e ? this.mar[1] : 0;
    });
    b.register_write(this.port | 9, this, function (e) {
      0 === this.get_page()
        ? (A(e, 2), (this.rsar = (this.rsar & 255) | ((e << 8) & 65280)))
        : A(e, 2);
    });
    b.register_write(this.port | 15, this, function (e) {
      0 === this.get_page()
        ? (A(e, 2), A(this.isr, 2), (this.imr = e), this.update_irq())
        : A(e, 2);
    });
    b.register_read(this.port | 3, this, function () {
      var e = this.get_page();
      return 0 === e
        ? (A(this.boundary, 2), this.boundary)
        : 1 === e
        ? this.mac[2]
        : 0;
    });
    b.register_write(this.port | 3, this, function (e) {
      var g = this.get_page();
      0 === g
        ? (A(e, 2), (this.boundary = e))
        : 1 === g
        ? (A(e), (this.mac[2] = e))
        : A(e);
    });
    b.register_read(this.port | 4, this, function () {
      var e = this.get_page();
      return 0 === e ? this.tsr : 1 === e ? this.mac[3] : 0;
    });
    b.register_write(this.port | 4, this, function (e) {
      var g = this.get_page();
      0 === g
        ? (A(e, 2), (this.tpsr = e))
        : 1 === g
        ? (A(e), (this.mac[3] = e))
        : A(e);
    });
    b.register_read(this.port | 5, this, function () {
      var e = this.get_page();
      return 0 === e ? 0 : 1 === e ? this.mac[4] : 0;
    });
    b.register_write(this.port | 5, this, function (e) {
      var g = this.get_page();
      0 === g
        ? (A(e, 2), (this.tcnt = (this.tcnt & -256) | e))
        : 1 === g
        ? (A(e), (this.mac[4] = e))
        : A(e);
    });
    b.register_read(this.port | 6, this, function () {
      var e = this.get_page();
      return 0 === e ? 0 : 1 === e ? this.mac[5] : 0;
    });
    b.register_write(this.port | 6, this, function (e) {
      var g = this.get_page();
      0 === g
        ? (A(e, 2), (this.tcnt = (this.tcnt & 255) | (e << 8)))
        : 1 === g
        ? (A(e), (this.mac[5] = e))
        : A(e);
    });
    b.register_read(this.port | 12, this, function () {
      var e = this.get_page();
      return 0 === e ? 9 : 1 === e ? this.mar[4] : 0;
    });
    b.register_write(this.port | 12, this, function (e) {
      0 === this.get_page() ? (A(e, 2), (this.rxcr = e)) : A(e);
    });
    b.register_read(
      this.port | 16,
      this,
      this.data_port_read8,
      this.data_port_read16,
      this.data_port_read32
    );
    b.register_write(
      this.port | 16,
      this,
      this.data_port_write16,
      this.data_port_write16,
      this.data_port_write32
    );
    a.devices.pci.register_device(this);
  }
  Fa.prototype.get_state = function () {
    var a = [];
    a[0] = this.isr;
    a[1] = this.imr;
    a[2] = this.cr;
    a[3] = this.dcfg;
    a[4] = this.rcnt;
    a[5] = this.tcnt;
    a[6] = this.tpsr;
    a[7] = this.rsar;
    a[8] = this.pstart;
    a[9] = this.curpg;
    a[10] = this.boundary;
    a[11] = this.pstop;
    a[12] = this.rxcr;
    a[13] = this.txcr;
    a[14] = this.tsr;
    a[15] = this.mac;
    a[16] = this.memory;
    return a;
  };
  Fa.prototype.set_state = function (a) {
    this.isr = a[0];
    this.imr = a[1];
    this.cr = a[2];
    this.dcfg = a[3];
    this.rcnt = a[4];
    this.tcnt = a[5];
    this.tpsr = a[6];
    this.rsar = a[7];
    this.pstart = a[8];
    this.curpg = a[9];
    this.boundary = a[10];
    this.pstop = a[11];
    this.rxcr = a[12];
    this.txcr = a[13];
    this.tsr = a[14];
    this.preserve_mac_from_state_image
      ? ((this.mac = a[15]), (this.memory = a[16]))
      : this.mac_address_translation &&
        ((this.mac_address_in_state = a[15]),
        (this.memory = a[16]),
        Ea(this.mac_address_in_state),
        Ea(this.mac));
  };
  Fa.prototype.do_interrupt = function (a) {
    A(a, 2);
    this.isr |= a;
    this.update_irq();
  };
  Fa.prototype.update_irq = function () {
    this.imr & this.isr
      ? this.pci.raise_irq(this.pci_id)
      : this.pci.lower_irq(this.pci_id);
  };
  Fa.prototype.data_port_write = function (a) {
    if (16 >= this.rsar || (16384 <= this.rsar && 32768 > this.rsar))
      this.memory[this.rsar] = a;
    this.rsar++;
    this.rcnt--;
    this.rsar >= this.pstop << 8 &&
      (this.rsar += (this.pstart - this.pstop) << 8);
    0 === this.rcnt && this.do_interrupt(64);
  };
  Fa.prototype.data_port_write16 = function (a) {
    this.data_port_write(a);
    this.dcfg & 1 && this.data_port_write(a >> 8);
  };
  Fa.prototype.data_port_write32 = function (a) {
    this.data_port_write(a);
    this.data_port_write(a >> 8);
    this.data_port_write(a >> 16);
    this.data_port_write(a >> 24);
  };
  Fa.prototype.data_port_read = function () {
    let a = 0;
    32768 > this.rsar && (a = this.memory[this.rsar]);
    this.rsar++;
    this.rcnt--;
    this.rsar >= this.pstop << 8 &&
      (this.rsar += (this.pstart - this.pstop) << 8);
    0 === this.rcnt && this.do_interrupt(64);
    return a;
  };
  Fa.prototype.data_port_read8 = function () {
    return this.data_port_read16() & 255;
  };
  Fa.prototype.data_port_read16 = function () {
    return this.dcfg & 1
      ? this.data_port_read() | (this.data_port_read() << 8)
      : this.data_port_read();
  };
  Fa.prototype.data_port_read32 = function () {
    return (
      this.data_port_read() |
      (this.data_port_read() << 8) |
      (this.data_port_read() << 16) |
      (this.data_port_read() << 24)
    );
  };
  Fa.prototype.receive = function (a) {
    if (
      !(this.cr & 1) &&
      (this.bus.send("eth-receive-end", [a.length]),
      this.rxcr & 16 ||
        (this.rxcr & 4 &&
          255 === a[0] &&
          255 === a[1] &&
          255 === a[2] &&
          255 === a[3] &&
          255 === a[4] &&
          255 === a[5]) ||
        !(
          (this.rxcr & 8 && 1 === (a[0] & 1)) ||
          a[0] !== this.mac[0] ||
          a[1] !== this.mac[1] ||
          a[2] !== this.mac[2] ||
          a[3] !== this.mac[3] ||
          a[4] !== this.mac[4] ||
          a[5] !== this.mac[5]
        ))
    ) {
      this.mac_address_in_state &&
        ((a = new Uint8Array(a)), Da(a, this.mac, this.mac_address_in_state));
      var b = this.curpg << 8,
        c = Math.max(60, a.length) + 4,
        d = b + 4,
        e = this.curpg + 1 + (c >> 8),
        g = b + c,
        f = 1 + (c >> 8),
        k =
          this.boundary > this.curpg
            ? this.boundary - this.curpg
            : this.pstop - this.curpg + this.boundary - this.pstart;
      k < f && 0 !== this.boundary
        ? (A(this.pstart),
          A(this.pstop),
          A(this.curpg),
          A(f),
          A(this.boundary),
          A(k))
        : (g > this.pstop << 8
            ? ((g = (this.pstop << 8) - d),
              this.memory.set(a.subarray(0, g), d),
              this.memory.set(a.subarray(g), this.pstart << 8),
              A(g))
            : (this.memory.set(a, d),
              60 > a.length && this.memory.fill(0, d + a.length, d + 60)),
          e >= this.pstop && (e += this.pstart - this.pstop),
          (this.memory[b] = 1),
          (this.memory[b + 1] = e),
          (this.memory[b + 2] = c),
          (this.memory[b + 3] = c >> 8),
          (this.curpg = e),
          A(b),
          A(c),
          A(e),
          this.do_interrupt(1));
    }
  };
  Fa.prototype.get_page = function () {
    return (this.cr >> 6) & 3;
  };
  var Ga = new Uint8Array(256),
    Ha = [],
    Ia = [],
    Ja = [],
    Ka = new Uint8Array(256),
    La = [];
  function Q(a, b) {
    this.cpu = a;
    this.bus = b;
    this.write_buffer = new ka(64);
    this.read_buffer = new ka(64);
    this.mixer_current_address =
      this.command_size =
      this.command =
      this.read_buffer_lastvalue =
        0;
    this.mixer_registers = new Uint8Array(256);
    this.mixer_reset();
    this.dummy_speaker_enabled = !1;
    this.test_register = 0;
    this.dsp_signed =
      this.dsp_16bit =
      this.dsp_stereo =
      this.dsp_highspeed =
        !1;
    this.dac_buffers = [new la(65536), new la(65536)];
    this.dma = a.devices.dma;
    this.dma_channel =
      this.dma_irq =
      this.dma_bytes_block =
      this.dma_bytes_left =
      this.dma_bytes_count =
      this.dma_sample_count =
        0;
    this.dma_channel_8bit = 1;
    this.dma_channel_16bit = 5;
    this.dma_autoinit = !1;
    this.dma_buffer = new ArrayBuffer(65536);
    this.dma_buffer_int8 = new Int8Array(this.dma_buffer);
    this.dma_buffer_uint8 = new Uint8Array(this.dma_buffer);
    this.dma_buffer_int16 = new Int16Array(this.dma_buffer);
    this.dma_buffer_uint16 = new Uint16Array(this.dma_buffer);
    this.dma_syncbuffer = new r.SyncBuffer(this.dma_buffer);
    this.dma_paused = this.dma_waiting_transfer = !1;
    this.sampling_rate = 22050;
    b.send("dac-tell-sampling-rate", this.sampling_rate);
    this.bytes_per_sample = 1;
    this.e2_value = 170;
    this.e2_count = 0;
    this.asp_registers = new Uint8Array(256);
    this.mpu_read_buffer = new ka(64);
    this.fm_current_address1 =
      this.fm_current_address0 =
      this.mpu_read_buffer_lastvalue =
        0;
    this.fm_waveform_select_enable = !1;
    this.irq = 5;
    this.irq_triggered = new Uint8Array(16);
    a.io.register_read_consecutive(
      544,
      this,
      this.port2x0_read,
      this.port2x1_read,
      this.port2x2_read,
      this.port2x3_read
    );
    a.io.register_read_consecutive(
      904,
      this,
      this.port2x0_read,
      this.port2x1_read
    );
    a.io.register_read_consecutive(
      548,
      this,
      this.port2x4_read,
      this.port2x5_read
    );
    a.io.register_read(550, this, this.port2x6_read);
    a.io.register_read(551, this, this.port2x7_read);
    a.io.register_read(552, this, this.port2x8_read);
    a.io.register_read(553, this, this.port2x9_read);
    a.io.register_read(554, this, this.port2xA_read);
    a.io.register_read(555, this, this.port2xB_read);
    a.io.register_read(556, this, this.port2xC_read);
    a.io.register_read(557, this, this.port2xD_read);
    a.io.register_read_consecutive(
      558,
      this,
      this.port2xE_read,
      this.port2xF_read
    );
    a.io.register_write_consecutive(
      544,
      this,
      this.port2x0_write,
      this.port2x1_write,
      this.port2x2_write,
      this.port2x3_write
    );
    a.io.register_write_consecutive(
      904,
      this,
      this.port2x0_write,
      this.port2x1_write
    );
    a.io.register_write_consecutive(
      548,
      this,
      this.port2x4_write,
      this.port2x5_write
    );
    a.io.register_write(550, this, this.port2x6_write);
    a.io.register_write(551, this, this.port2x7_write);
    a.io.register_write_consecutive(
      552,
      this,
      this.port2x8_write,
      this.port2x9_write
    );
    a.io.register_write(554, this, this.port2xA_write);
    a.io.register_write(555, this, this.port2xB_write);
    a.io.register_write(556, this, this.port2xC_write);
    a.io.register_write(557, this, this.port2xD_write);
    a.io.register_write(558, this, this.port2xE_write);
    a.io.register_write(559, this, this.port2xF_write);
    a.io.register_read_consecutive(
      816,
      this,
      this.port3x0_read,
      this.port3x1_read
    );
    a.io.register_write_consecutive(
      816,
      this,
      this.port3x0_write,
      this.port3x1_write
    );
    this.dma.on_unmask(this.dma_on_unmask, this);
    b.register(
      "dac-request-data",
      function () {
        this.dac_handle_request();
      },
      this
    );
    b.register(
      "speaker-has-initialized",
      function () {
        this.mixer_reset();
      },
      this
    );
    b.send("speaker-confirm-initialized");
    this.dsp_reset();
  }
  Q.prototype.dsp_reset = function () {
    this.write_buffer.clear();
    this.read_buffer.clear();
    this.command_size = this.command = 0;
    this.dummy_speaker_enabled = !1;
    this.test_register = 0;
    this.dsp_signed =
      this.dsp_16bit =
      this.dsp_stereo =
      this.dsp_highspeed =
        !1;
    this.dac_buffers[0].clear();
    this.dac_buffers[1].clear();
    this.dma_channel =
      this.dma_irq =
      this.dma_bytes_block =
      this.dma_bytes_left =
      this.dma_bytes_count =
      this.dma_sample_count =
        0;
    this.dma_autoinit = !1;
    this.dma_buffer_uint8.fill(0);
    this.dma_paused = this.dma_waiting_transfer = !1;
    this.e2_value = 170;
    this.e2_count = 0;
    this.sampling_rate = 22050;
    this.bytes_per_sample = 1;
    this.lower_irq(1);
    this.irq_triggered.fill(0);
    this.asp_registers.fill(0);
    this.asp_registers[5] = 1;
    this.asp_registers[9] = 248;
  };
  Q.prototype.get_state = function () {
    var a = [];
    a[2] = this.read_buffer_lastvalue;
    a[3] = this.command;
    a[4] = this.command_size;
    a[5] = this.mixer_current_address;
    a[6] = this.mixer_registers;
    a[7] = this.dummy_speaker_enabled;
    a[8] = this.test_register;
    a[9] = this.dsp_highspeed;
    a[10] = this.dsp_stereo;
    a[11] = this.dsp_16bit;
    a[12] = this.dsp_signed;
    a[15] = this.dma_sample_count;
    a[16] = this.dma_bytes_count;
    a[17] = this.dma_bytes_left;
    a[18] = this.dma_bytes_block;
    a[19] = this.dma_irq;
    a[20] = this.dma_channel;
    a[21] = this.dma_channel_8bit;
    a[22] = this.dma_channel_16bit;
    a[23] = this.dma_autoinit;
    a[24] = this.dma_buffer_uint8;
    a[25] = this.dma_waiting_transfer;
    a[26] = this.dma_paused;
    a[27] = this.sampling_rate;
    a[28] = this.bytes_per_sample;
    a[29] = this.e2_value;
    a[30] = this.e2_count;
    a[31] = this.asp_registers;
    a[33] = this.mpu_read_buffer_last_value;
    a[34] = this.irq;
    a[35] = this.irq_triggered;
    return a;
  };
  Q.prototype.set_state = function (a) {
    this.read_buffer_lastvalue = a[2];
    this.command = a[3];
    this.command_size = a[4];
    this.mixer_current_address = a[5];
    this.mixer_registers = a[6];
    this.mixer_full_update();
    this.dummy_speaker_enabled = a[7];
    this.test_register = a[8];
    this.dsp_highspeed = a[9];
    this.dsp_stereo = a[10];
    this.dsp_16bit = a[11];
    this.dsp_signed = a[12];
    this.dma_sample_count = a[15];
    this.dma_bytes_count = a[16];
    this.dma_bytes_left = a[17];
    this.dma_bytes_block = a[18];
    this.dma_irq = a[19];
    this.dma_channel = a[20];
    this.dma_channel_8bit = a[21];
    this.dma_channel_16bit = a[22];
    this.dma_autoinit = a[23];
    this.dma_buffer_uint8 = a[24];
    this.dma_waiting_transfer = a[25];
    this.dma_paused = a[26];
    this.sampling_rate = a[27];
    this.bytes_per_sample = a[28];
    this.e2_value = a[29];
    this.e2_count = a[30];
    this.asp_registers = a[31];
    this.mpu_read_buffer_last_value = a[33];
    this.irq = a[34];
    this.irq_triggered = a[35];
    this.dma_buffer = this.dma_buffer_uint8.buffer;
    this.dma_buffer_int8 = new Int8Array(this.dma_buffer);
    this.dma_buffer_int16 = new Int16Array(this.dma_buffer);
    this.dma_buffer_uint16 = new Uint16Array(this.dma_buffer);
    this.dma_syncbuffer = new r.SyncBuffer(this.dma_buffer);
    this.dma_paused
      ? this.bus.send("dac-disable")
      : this.bus.send("dac-enable");
  };
  Q.prototype.port2x0_read = function () {
    return 255;
  };
  Q.prototype.port2x1_read = function () {
    return 255;
  };
  Q.prototype.port2x2_read = function () {
    return 255;
  };
  Q.prototype.port2x3_read = function () {
    return 255;
  };
  Q.prototype.port2x4_read = function () {
    return this.mixer_current_address;
  };
  Q.prototype.port2x5_read = function () {
    return this.mixer_read(this.mixer_current_address);
  };
  Q.prototype.port2x6_read = function () {
    return 255;
  };
  Q.prototype.port2x7_read = function () {
    return 255;
  };
  Q.prototype.port2x8_read = function () {
    return 255;
  };
  Q.prototype.port2x9_read = function () {
    return 255;
  };
  Q.prototype.port2xA_read = function () {
    this.read_buffer.length &&
      (this.read_buffer_lastvalue = this.read_buffer.shift());
    A(this.read_buffer_lastvalue);
    String.fromCharCode(this.read_buffer_lastvalue);
    return this.read_buffer_lastvalue;
  };
  Q.prototype.port2xB_read = function () {
    return 255;
  };
  Q.prototype.port2xC_read = function () {
    return 127;
  };
  Q.prototype.port2xD_read = function () {
    return 255;
  };
  Q.prototype.port2xE_read = function () {
    this.irq_triggered[1] && this.lower_irq(1);
    return ((this.read_buffer.length && !this.dsp_highspeed) << 7) | 127;
  };
  Q.prototype.port2xF_read = function () {
    this.lower_irq(2);
    return 0;
  };
  Q.prototype.port2x0_write = function (a) {
    A(a);
    this.fm_current_address0 = 0;
  };
  Q.prototype.port2x1_write = function (a) {
    A(a);
    var b = La[this.fm_current_address0];
    b || (b = this.fm_default_write);
    b.call(this, a, 0, this.fm_current_address0);
  };
  Q.prototype.port2x2_write = function (a) {
    A(a);
    this.fm_current_address1 = 0;
  };
  Q.prototype.port2x3_write = function (a) {
    A(a);
    var b = La[this.fm_current_address1];
    b || (b = this.fm_default_write);
    b.call(this, a, 1, this.fm_current_address1);
  };
  Q.prototype.port2x4_write = function (a) {
    A(a);
    this.mixer_current_address = a;
  };
  Q.prototype.port2x5_write = function (a) {
    A(a);
    this.mixer_write(this.mixer_current_address, a);
  };
  Q.prototype.port2x6_write = function (a) {
    A(a);
    this.dsp_highspeed ? (this.dsp_highspeed = !1) : a && this.dsp_reset();
    this.read_buffer.clear();
    this.read_buffer.push(170);
  };
  Q.prototype.port2x7_write = function () {};
  Q.prototype.port2x8_write = function () {};
  Q.prototype.port2x9_write = function () {};
  Q.prototype.port2xA_write = function () {};
  Q.prototype.port2xB_write = function () {};
  Q.prototype.port2xC_write = function (a) {
    0 === this.command
      ? (A(a),
        (this.command = a),
        this.write_buffer.clear(),
        (this.command_size = Ga[a]))
      : (A(a), this.write_buffer.push(a));
    this.write_buffer.length >= this.command_size && this.command_do();
  };
  Q.prototype.port2xD_write = function () {};
  Q.prototype.port2xE_write = function () {};
  Q.prototype.port2xF_write = function () {};
  Q.prototype.port3x0_read = function () {
    this.mpu_read_buffer.length &&
      (this.mpu_read_buffer_lastvalue = this.mpu_read_buffer.shift());
    A(this.mpu_read_buffer_lastvalue);
    return this.mpu_read_buffer_lastvalue;
  };
  Q.prototype.port3x0_write = function (a) {
    A(a);
  };
  Q.prototype.port3x1_read = function () {
    return 0 | (128 * !this.mpu_read_buffer.length);
  };
  Q.prototype.port3x1_write = function (a) {
    A(a);
    255 == a && (this.mpu_read_buffer.clear(), this.mpu_read_buffer.push(254));
  };
  Q.prototype.command_do = function () {
    var a = Ha[this.command];
    a || (a = this.dsp_default_handler);
    a.call(this);
    this.command_size = this.command = 0;
    this.write_buffer.clear();
  };
  Q.prototype.dsp_default_handler = function () {
    A(this.command);
  };
  function R(a, b, c) {
    c || (c = Q.prototype.dsp_default_handler);
    for (var d = 0; d < a.length; d++) (Ga[a[d]] = b), (Ha[a[d]] = c);
  }
  function Ma(a) {
    for (var b = [], c = 0; 16 > c; c++) b.push(a + c);
    return b;
  }
  R([14], 2, function () {
    this.asp_registers[this.write_buffer.shift()] = this.write_buffer.shift();
  });
  R([15], 1, function () {
    this.read_buffer.clear();
    this.read_buffer.push(this.asp_registers[this.write_buffer.shift()]);
  });
  R([16], 1, function () {
    var a = this.write_buffer.shift();
    a = Na(a / 127.5 + -1, -1, 1);
    this.dac_buffers[0].push(a);
    this.dac_buffers[1].push(a);
    this.bus.send("dac-enable");
  });
  R([20, 21], 2, function () {
    this.dma_irq = 1;
    this.dma_channel = this.dma_channel_8bit;
    this.dsp_highspeed =
      this.dsp_16bit =
      this.dsp_signed =
      this.dma_autoinit =
        !1;
    this.dma_transfer_size_set();
    this.dma_transfer_start();
  });
  R([22], 2);
  R([23], 2);
  R([28], 0, function () {
    this.dma_irq = 1;
    this.dma_channel = this.dma_channel_8bit;
    this.dma_autoinit = !0;
    this.dsp_highspeed = this.dsp_16bit = this.dsp_signed = !1;
    this.dma_transfer_start();
  });
  R([31], 0);
  R([32], 0, function () {
    this.read_buffer.clear();
    this.read_buffer.push(127);
  });
  R([36], 2);
  R([44], 0);
  R([48], 0);
  R([49], 0);
  R([52], 0);
  R([53], 0);
  R([54], 0);
  R([55], 0);
  R([56], 0);
  R([64], 1, function () {
    this.sampling_rate_change(
      1e6 / (256 - this.write_buffer.shift()) / this.get_channel_count()
    );
  });
  R([65, 66], 2, function () {
    this.sampling_rate_change(
      (this.write_buffer.shift() << 8) | this.write_buffer.shift()
    );
  });
  R([72], 2, function () {
    this.dma_transfer_size_set();
  });
  R([116], 2);
  R([117], 2);
  R([118], 2);
  R([119], 2);
  R([125], 0);
  R([127], 0);
  R([128], 2);
  R([144], 0, function () {
    this.dma_irq = 1;
    this.dma_channel = this.dma_channel_8bit;
    this.dma_autoinit = !0;
    this.dsp_signed = !1;
    this.dsp_highspeed = !0;
    this.dsp_16bit = !1;
    this.dma_transfer_start();
  });
  R([145], 0);
  R([152], 0);
  R([153], 0);
  R([160], 0);
  R([168], 0);
  R(Ma(176), 3, function () {
    if (this.command & 8) this.dsp_default_handler();
    else {
      var a = this.write_buffer.shift();
      this.dma_irq = 2;
      this.dma_channel = this.dma_channel_16bit;
      this.dma_autoinit = !!(this.command & 4);
      this.dsp_signed = !!(a & 16);
      this.dsp_stereo = !!(a & 32);
      this.dsp_16bit = !0;
      this.dma_transfer_size_set();
      this.dma_transfer_start();
    }
  });
  R(Ma(192), 3, function () {
    if (this.command & 8) this.dsp_default_handler();
    else {
      var a = this.write_buffer.shift();
      this.dma_irq = 1;
      this.dma_channel = this.dma_channel_8bit;
      this.dma_autoinit = !!(this.command & 4);
      this.dsp_signed = !!(a & 16);
      this.dsp_stereo = !!(a & 32);
      this.dsp_16bit = !1;
      this.dma_transfer_size_set();
      this.dma_transfer_start();
    }
  });
  R([208], 0, function () {
    this.dma_paused = !0;
    this.bus.send("dac-disable");
  });
  R([209], 0, function () {
    this.dummy_speaker_enabled = !0;
  });
  R([211], 0, function () {
    this.dummy_speaker_enabled = !1;
  });
  R([212], 0, function () {
    this.dma_paused = !1;
    this.bus.send("dac-enable");
  });
  R([213], 0, function () {
    this.dma_paused = !0;
    this.bus.send("dac-disable");
  });
  R([214], 0, function () {
    this.dma_paused = !1;
    this.bus.send("dac-enable");
  });
  R([216], 0, function () {
    this.read_buffer.clear();
    this.read_buffer.push(255 * this.dummy_speaker_enabled);
  });
  R([217, 218], 0, function () {
    this.dma_autoinit = !1;
  });
  R([224], 1, function () {
    this.read_buffer.clear();
    this.read_buffer.push(~this.write_buffer.shift());
  });
  R([225], 0, function () {
    this.read_buffer.clear();
    this.read_buffer.push(4);
    this.read_buffer.push(5);
  });
  R([226], 1);
  R([227], 0, function () {
    this.read_buffer.clear();
    for (var a = 0; 44 > a; a++)
      this.read_buffer.push(
        "COPYRIGHT (C) CREATIVE TECHNOLOGY LTD, 1992.".charCodeAt(a)
      );
    this.read_buffer.push(0);
  });
  R([228], 1, function () {
    this.test_register = this.write_buffer.shift();
  });
  R([232], 0, function () {
    this.read_buffer.clear();
    this.read_buffer.push(this.test_register);
  });
  R([242, 243], 0, function () {
    this.raise_irq();
  });
  var Oa = new Uint8Array(256);
  Oa[14] = 255;
  Oa[15] = 7;
  Oa[55] = 56;
  R([249], 1, function () {
    var a = this.write_buffer.shift();
    this.read_buffer.clear();
    this.read_buffer.push(Oa[a]);
  });
  Q.prototype.mixer_read = function (a) {
    var b = Ia[a];
    b ? (b = b.call(this)) : ((b = this.mixer_registers[a]), A(a), A(b));
    return b;
  };
  Q.prototype.mixer_write = function (a, b) {
    var c = Ja[a];
    c ? c.call(this, b) : (A(a), A(b));
  };
  Q.prototype.mixer_default_read = function () {
    A(this.mixer_current_address);
    return this.mixer_registers[this.mixer_current_address];
  };
  Q.prototype.mixer_default_write = function (a) {
    A(this.mixer_current_address);
    A(a);
    this.mixer_registers[this.mixer_current_address] = a;
  };
  Q.prototype.mixer_reset = function () {
    this.mixer_registers[4] = 204;
    this.mixer_registers[34] = 204;
    this.mixer_registers[38] = 204;
    this.mixer_registers[40] = 0;
    this.mixer_registers[46] = 0;
    this.mixer_registers[10] = 0;
    this.mixer_registers[48] = 192;
    this.mixer_registers[49] = 192;
    this.mixer_registers[50] = 192;
    this.mixer_registers[51] = 192;
    this.mixer_registers[52] = 192;
    this.mixer_registers[53] = 192;
    this.mixer_registers[54] = 0;
    this.mixer_registers[55] = 0;
    this.mixer_registers[56] = 0;
    this.mixer_registers[57] = 0;
    this.mixer_registers[59] = 0;
    this.mixer_registers[60] = 31;
    this.mixer_registers[61] = 21;
    this.mixer_registers[62] = 11;
    this.mixer_registers[63] = 0;
    this.mixer_registers[64] = 0;
    this.mixer_registers[65] = 0;
    this.mixer_registers[66] = 0;
    this.mixer_registers[67] = 0;
    this.mixer_registers[68] = 128;
    this.mixer_registers[69] = 128;
    this.mixer_registers[70] = 128;
    this.mixer_registers[71] = 128;
    this.mixer_full_update();
  };
  Q.prototype.mixer_full_update = function () {
    for (var a = 1; a < this.mixer_registers.length; a++)
      Ka[a] || this.mixer_write(a, this.mixer_registers[a]);
  };
  function Pa(a, b) {
    b || (b = Q.prototype.mixer_default_read);
    Ia[a] = b;
  }
  function Qa(a, b) {
    b || (b = Q.prototype.mixer_default_write);
    Ja[a] = b;
  }
  function Sa(a, b, c) {
    Ka[a] = 1;
    Ia[a] = function () {
      return (this.mixer_registers[b] & 240) | (this.mixer_registers[c] >>> 4);
    };
    Ja[a] = function (d) {
      this.mixer_registers[a] = d;
      var e = ((d << 4) & 240) | (this.mixer_registers[c] & 15);
      this.mixer_write(b, (d & 240) | (this.mixer_registers[b] & 15));
      this.mixer_write(c, e);
    };
  }
  function Ta(a, b, c) {
    Ia[a] = Q.prototype.mixer_default_read;
    Ja[a] = function (d) {
      this.mixer_registers[a] = d;
      this.bus.send("mixer-volume", [b, c, (d >>> 2) - 62]);
    };
  }
  Pa(0, function () {
    this.mixer_reset();
    return 0;
  });
  Qa(0);
  Sa(4, 50, 51);
  Sa(34, 48, 49);
  Sa(38, 52, 53);
  Sa(40, 54, 55);
  Sa(46, 56, 57);
  Ta(48, 0, 0);
  Ta(49, 0, 1);
  Ta(50, 2, 0);
  Ta(51, 2, 1);
  Pa(59);
  Qa(59, function (a) {
    this.mixer_registers[59] = a;
    this.bus.send("mixer-volume", [1, 2, 6 * (a >>> 6) - 18]);
  });
  Pa(65);
  Qa(65, function (a) {
    this.mixer_registers[65] = a;
    this.bus.send("mixer-gain-left", 6 * (a >>> 6));
  });
  Pa(66);
  Qa(66, function (a) {
    this.mixer_registers[66] = a;
    this.bus.send("mixer-gain-right", 6 * (a >>> 6));
  });
  Pa(68);
  Qa(68, function (a) {
    this.mixer_registers[68] = a;
    a >>>= 3;
    this.bus.send("mixer-treble-left", a - (16 > a ? 14 : 16));
  });
  Pa(69);
  Qa(69, function (a) {
    this.mixer_registers[69] = a;
    a >>>= 3;
    this.bus.send("mixer-treble-right", a - (16 > a ? 14 : 16));
  });
  Pa(70);
  Qa(70, function (a) {
    this.mixer_registers[70] = a;
    a >>>= 3;
    this.bus.send("mixer-bass-right", a - (16 > a ? 14 : 16));
  });
  Pa(71);
  Qa(71, function (a) {
    this.mixer_registers[71] = a;
    a >>>= 3;
    this.bus.send("mixer-bass-right", a - (16 > a ? 14 : 16));
  });
  Pa(128, function () {
    switch (this.irq) {
      case 2:
        return 1;
      case 5:
        return 2;
      case 7:
        return 4;
      case 10:
        return 8;
      default:
        return 0;
    }
  });
  Qa(128, function (a) {
    a & 1 && (this.irq = 2);
    a & 2 && (this.irq = 5);
    a & 4 && (this.irq = 7);
    a & 8 && (this.irq = 10);
  });
  Pa(129, function () {
    var a = 0;
    switch (this.dma_channel_8bit) {
      case 0:
        a |= 1;
        break;
      case 1:
        a |= 2;
        break;
      case 3:
        a |= 8;
    }
    switch (this.dma_channel_16bit) {
      case 5:
        a |= 32;
        break;
      case 6:
        a |= 64;
        break;
      case 7:
        a |= 128;
    }
    return a;
  });
  Qa(129, function (a) {
    a & 1 && (this.dma_channel_8bit = 0);
    a & 2 && (this.dma_channel_8bit = 1);
    a & 8 && (this.dma_channel_8bit = 3);
    a & 32 && (this.dma_channel_16bit = 5);
    a & 64 && (this.dma_channel_16bit = 6);
    a & 128 && (this.dma_channel_16bit = 7);
  });
  Pa(130, function () {
    for (var a = 32, b = 0; 16 > b; b++) a |= b * this.irq_triggered[b];
    return a;
  });
  Q.prototype.fm_default_write = function (a, b, c) {
    A(c);
    A(a);
  };
  function T(a, b) {
    b || (b = Q.prototype.fm_default_write);
    for (var c = 0; c < a.length; c++) La[a[c]] = b;
  }
  function Ua(a, b) {
    for (var c = []; a <= b; a++) c.push(a);
    return c;
  }
  var V = new Uint8Array(32);
  V[0] = 0;
  V[1] = 1;
  V[2] = 2;
  V[3] = 3;
  V[4] = 4;
  V[5] = 5;
  V[8] = 6;
  V[9] = 7;
  V[10] = 8;
  V[11] = 9;
  V[12] = 10;
  V[13] = 11;
  V[16] = 12;
  V[17] = 13;
  V[18] = 14;
  V[19] = 15;
  V[20] = 16;
  V[21] = 17;
  T([1], function (a, b) {
    this.fm_waveform_select_enable[b] = a & 1;
    this.fm_update_waveforms();
  });
  T([2]);
  T([3]);
  T([4], function () {});
  T([5], function (a, b, c) {
    0 === b && this.fm_default_write(a, b, c);
  });
  T([8], function () {});
  T(Ua(32, 53), function () {});
  T(Ua(64, 85), function () {});
  T(Ua(96, 117), function () {});
  T(Ua(128, 149), function () {});
  T(Ua(160, 168), function () {});
  T(Ua(176, 184), function () {});
  T([189], function () {});
  T(Ua(192, 200), function () {});
  T(Ua(224, 245), function () {});
  Q.prototype.fm_update_waveforms = function () {};
  Q.prototype.sampling_rate_change = function (a) {
    this.sampling_rate = a;
    this.bus.send("dac-tell-sampling-rate", a);
  };
  Q.prototype.get_channel_count = function () {
    return this.dsp_stereo ? 2 : 1;
  };
  Q.prototype.dma_transfer_size_set = function () {
    this.dma_sample_count =
      1 + (this.write_buffer.shift() << 0) + (this.write_buffer.shift() << 8);
  };
  Q.prototype.dma_transfer_start = function () {
    this.bytes_per_sample = 1;
    this.dsp_16bit && (this.bytes_per_sample *= 2);
    this.dma_bytes_count = this.dma_sample_count * this.bytes_per_sample;
    this.dma_bytes_block = 1024 * this.bytes_per_sample;
    this.dma_bytes_block = Math.min(
      Math.max((this.dma_bytes_count >> 2) & -4, 32),
      this.dma_bytes_block
    );
    this.dma_waiting_transfer = !0;
    this.dma.channel_mask[this.dma_channel] ||
      this.dma_on_unmask(this.dma_channel);
  };
  Q.prototype.dma_on_unmask = function (a) {
    a === this.dma_channel &&
      this.dma_waiting_transfer &&
      ((this.dma_waiting_transfer = !1),
      (this.dma_bytes_left = this.dma_bytes_count),
      (this.dma_paused = !1),
      this.bus.send("dac-enable"));
  };
  Q.prototype.dma_transfer_next = function () {
    var a = Math.min(this.dma_bytes_left, this.dma_bytes_block),
      b = Math.floor(a / this.bytes_per_sample);
    this.dma.do_write(this.dma_syncbuffer, 0, a, this.dma_channel, (c) => {
      c ||
        (this.dma_to_dac(b),
        (this.dma_bytes_left -= a),
        this.dma_bytes_left ||
          (this.raise_irq(this.dma_irq),
          this.dma_autoinit && (this.dma_bytes_left = this.dma_bytes_count)));
    });
  };
  Q.prototype.dma_to_dac = function (a) {
    var b = this.dsp_16bit ? 32767.5 : 127.5,
      c = this.dsp_signed ? 0 : -1,
      d = this.dsp_stereo ? 1 : 2;
    var e = this.dsp_16bit
      ? this.dsp_signed
        ? this.dma_buffer_int16
        : this.dma_buffer_uint16
      : this.dsp_signed
      ? this.dma_buffer_int8
      : this.dma_buffer_uint8;
    for (var g = 0, f = 0; f < a; f++)
      for (var k = Na(e[f] / b + c, -1, 1), l = 0; l < d; l++)
        this.dac_buffers[g].push(k), (g ^= 1);
    this.dac_send();
  };
  Q.prototype.dac_handle_request = function () {
    !this.dma_bytes_left || this.dma_paused
      ? this.dac_send()
      : this.dma_transfer_next();
  };
  Q.prototype.dac_send = function () {
    if (this.dac_buffers[0].length) {
      var a = this.dac_buffers[0].shift_block(this.dac_buffers[0].length),
        b = this.dac_buffers[1].shift_block(this.dac_buffers[1].length);
      this.bus.send("dac-send-data", [a, b], [a.buffer, b.buffer]);
    }
  };
  Q.prototype.raise_irq = function (a) {
    this.irq_triggered[a] = 1;
    this.cpu.device_raise_irq(this.irq);
  };
  Q.prototype.lower_irq = function (a) {
    this.irq_triggered[a] = 0;
    this.cpu.device_lower_irq(this.irq);
  };
  function Na(a, b, c) {
    return (a < b) * b + (a > c) * c + (b <= a && a <= c) * a;
  }
  function h(a, b) {
    this.cpu = a;
    this.pci = a.devices.pci;
    this.device_id = b.device_id;
    this.pci_space = [
      244,
      26,
      b.device_id & 255,
      b.device_id >> 8,
      7,
      5,
      16,
      0,
      1,
      0,
      2,
      0,
      0,
      0,
      0,
      0,
      1,
      168,
      0,
      0,
      0,
      16,
      191,
      254,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      244,
      26,
      b.subsystem_device_id & 255,
      b.subsystem_device_id >> 8,
      0,
      0,
      0,
      0,
      64,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
    ];
    this.pci_space = this.pci_space.concat(
      r.zeros(256 - this.pci_space.length)
    );
    this.pci_id = b.pci_id;
    this.pci_bars = [];
    this.name = b.name;
    this.driver_feature_select = this.device_feature_select = 0;
    this.device_feature = new Uint32Array(4);
    this.driver_feature = new Uint32Array(4);
    for (var c of b.common.features)
      (this.device_feature[c >>> 5] |= 1 << (c & 31)),
        (this.driver_feature[c >>> 5] |= 1 << (c & 31));
    b.common.features.includes(32);
    this.features_ok = !0;
    this.device_status = 0;
    this.config_has_changed = !1;
    this.config_generation = 0;
    this.queues = [];
    for (const d of b.common.queues) this.queues.push(new W(a, this, d));
    this.queue_select = 0;
    this.queue_selected = this.queues[0];
    this.isr_status = 0;
    c = [];
    c.push(this.create_common_capability(b.common));
    c.push(this.create_notification_capability(b.notification));
    c.push(this.create_isr_capability(b.isr_status));
    b.device_specific &&
      c.push(this.create_device_specific_capability(b.device_specific));
    this.init_capabilities(c);
    a.devices.pci.register_device(this);
    this.reset();
  }
  h.prototype.create_common_capability = function (a) {
    return {
      type: 1,
      bar: 0,
      port: a.initial_port,
      use_mmio: !1,
      offset: 0,
      extra: new Uint8Array(0),
      struct: [
        {
          bytes: 4,
          name: "device_feature_select",
          read: () => this.device_feature_select,
          write: (b) => {
            this.device_feature_select = b;
          },
        },
        {
          bytes: 4,
          name: "device_feature",
          read: () => this.device_feature[this.device_feature_select] || 0,
          write: () => {},
        },
        {
          bytes: 4,
          name: "driver_feature_select",
          read: () => this.driver_feature_select,
          write: (b) => {
            this.driver_feature_select = b;
          },
        },
        {
          bytes: 4,
          name: "driver_feature",
          read: () => this.driver_feature[this.driver_feature_select] || 0,
          write: (b) => {
            const c = this.device_feature[this.driver_feature_select];
            this.driver_feature_select < this.driver_feature.length &&
              (this.driver_feature[this.driver_feature_select] = b & c);
            this.features_ok = this.features_ok && !(b & ~c);
          },
        },
        { bytes: 2, name: "msix_config", read: () => 65535, write: () => {} },
        {
          bytes: 2,
          name: "num_queues",
          read: () => this.queues.length,
          write: () => {},
        },
        {
          bytes: 1,
          name: "device_status",
          read: () => this.device_status,
          write: (b) => {
            0 === b && this.reset();
            b & ~this.device_status & 4 &&
              this.device_status & 64 &&
              this.notify_config_changes();
            this.features_ok || (b &= -9);
            this.device_status = b;
            if (b & ~this.device_status & 4) a.on_driver_ok();
          },
        },
        {
          bytes: 1,
          name: "config_generation",
          read: () => this.config_generation,
          write: () => {},
        },
        {
          bytes: 2,
          name: "queue_select",
          read: () => this.queue_select,
          write: (b) => {
            this.queue_select = b;
            this.queue_selected =
              this.queue_select < this.queues.length
                ? this.queues[this.queue_select]
                : null;
          },
        },
        {
          bytes: 2,
          name: "queue_size",
          read: () => (this.queue_selected ? this.queue_selected.size : 0),
          write: (b) => {
            this.queue_selected &&
              (b & (b - 1) && (b = 1 << (r.int_log2(b - 1) + 1)),
              b > this.queue_selected.size_supported &&
                (b = this.queue_selected.size_supported),
              this.queue_selected.set_size(b));
          },
        },
        {
          bytes: 2,
          name: "queue_msix_vector",
          read: () => 65535,
          write: () => {},
        },
        {
          bytes: 2,
          name: "queue_enable",
          read: () =>
            this.queue_selected ? this.queue_selected.enabled | 0 : 0,
          write: (b) => {
            this.queue_selected &&
              1 === b &&
              this.queue_selected.is_configured() &&
              this.queue_selected.enable();
          },
        },
        {
          bytes: 2,
          name: "queue_notify_off",
          read: () =>
            this.queue_selected ? this.queue_selected.notify_offset : 0,
          write: () => {},
        },
        {
          bytes: 4,
          name: "queue_desc (low dword)",
          read: () => (this.queue_selected ? this.queue_selected.desc_addr : 0),
          write: (b) => {
            this.queue_selected && (this.queue_selected.desc_addr = b);
          },
        },
        {
          bytes: 4,
          name: "queue_desc (high dword)",
          read: () => 0,
          write: () => {},
        },
        {
          bytes: 4,
          name: "queue_avail (low dword)",
          read: () =>
            this.queue_selected ? this.queue_selected.avail_addr : 0,
          write: (b) => {
            this.queue_selected && (this.queue_selected.avail_addr = b);
          },
        },
        {
          bytes: 4,
          name: "queue_avail (high dword)",
          read: () => 0,
          write: () => {},
        },
        {
          bytes: 4,
          name: "queue_used (low dword)",
          read: () => (this.queue_selected ? this.queue_selected.used_addr : 0),
          write: (b) => {
            this.queue_selected && (this.queue_selected.used_addr = b);
          },
        },
        {
          bytes: 4,
          name: "queue_used (high dword)",
          read: () => 0,
          write: () => {},
        },
      ],
    };
  };
  h.prototype.create_notification_capability = function (a) {
    const b = [];
    let c;
    c = a.single_handler ? 0 : 2;
    for (const [d, e] of a.handlers.entries())
      b.push({
        bytes: 2,
        name: "notify" + d,
        read: () => 65535,
        write: e || (() => {}),
      });
    return {
      type: 2,
      bar: 1,
      port: a.initial_port,
      use_mmio: !1,
      offset: 0,
      extra: new Uint8Array([
        c & 255,
        (c >> 8) & 255,
        (c >> 16) & 255,
        c >> 24,
      ]),
      struct: b,
    };
  };
  h.prototype.create_isr_capability = function (a) {
    return {
      type: 3,
      bar: 2,
      port: a.initial_port,
      use_mmio: !1,
      offset: 0,
      extra: new Uint8Array(0),
      struct: [
        {
          bytes: 1,
          name: "isr_status",
          read: () => {
            const b = this.isr_status;
            this.lower_irq();
            return b;
          },
          write: () => {},
        },
      ],
    };
  };
  h.prototype.create_device_specific_capability = function (a) {
    return {
      type: 4,
      bar: 3,
      port: a.initial_port,
      use_mmio: !1,
      offset: 0,
      extra: new Uint8Array(0),
      struct: a.struct,
    };
  };
  h.prototype.init_capabilities = function (a) {
    let b = (this.pci_space[52] = 64);
    var c = b;
    for (const e of a) {
      a = 16 + e.extra.length;
      c = b;
      b = c + a;
      var d = e.struct.reduce((g, f) => g + f.bytes, 0);
      d += e.offset;
      d = 16 > d ? 16 : 1 << (r.int_log2(d - 1) + 1);
      this.pci_bars[e.bar] = { size: d };
      this.pci_space[c] = 9;
      this.pci_space[c + 1] = b;
      this.pci_space[c + 2] = a;
      this.pci_space[c + 3] = e.type;
      this.pci_space[c + 4] = e.bar;
      this.pci_space[c + 5] = 0;
      this.pci_space[c + 6] = 0;
      this.pci_space[c + 7] = 0;
      this.pci_space[c + 8] = e.offset & 255;
      this.pci_space[c + 9] = (e.offset >>> 8) & 255;
      this.pci_space[c + 10] = (e.offset >>> 16) & 255;
      this.pci_space[c + 11] = e.offset >>> 24;
      this.pci_space[c + 12] = d & 255;
      this.pci_space[c + 13] = (d >>> 8) & 255;
      this.pci_space[c + 14] = (d >>> 16) & 255;
      this.pci_space[c + 15] = d >>> 24;
      for (const [g, f] of e.extra.entries()) this.pci_space[c + 16 + g] = f;
      c = 16 + 4 * e.bar;
      this.pci_space[c] = (e.port & 254) | !e.use_mmio;
      this.pci_space[c + 1] = (e.port >>> 8) & 255;
      this.pci_space[c + 2] = (e.port >>> 16) & 255;
      this.pci_space[c + 3] = (e.port >>> 24) & 255;
      c = e.port + e.offset;
      for (const g of e.struct) {
        let f = g.read;
        a = g.write;
        if (!e.use_mmio) {
          d = function (l) {
            return (f(l & -2) >> ((l & 1) << 3)) & 255;
          };
          const k = function (l) {
            return (f(l & -4) >> ((l & 3) << 3)) & 255;
          };
          switch (g.bytes) {
            case 4:
              this.cpu.io.register_read(c, this, k, void 0, f);
              this.cpu.io.register_write(c, this, void 0, void 0, a);
              break;
            case 2:
              this.cpu.io.register_read(c, this, d, f);
              this.cpu.io.register_write(c, this, void 0, a);
              break;
            case 1:
              this.cpu.io.register_read(c, this, f),
                this.cpu.io.register_write(c, this, a);
          }
        }
        c += g.bytes;
      }
    }
    this.pci_space[b] = 9;
    this.pci_space[b + 1] = 0;
    this.pci_space[b + 2] = 20;
    this.pci_space[b + 3] = 5;
    this.pci_space[b + 4] = 0;
    this.pci_space[b + 5] = 0;
    this.pci_space[b + 6] = 0;
    this.pci_space[b + 7] = 0;
    this.pci_space[b + 8] = 0;
    this.pci_space[b + 9] = 0;
    this.pci_space[b + 10] = 0;
    this.pci_space[b + 11] = 0;
    this.pci_space[b + 12] = 0;
    this.pci_space[b + 13] = 0;
    this.pci_space[b + 14] = 0;
    this.pci_space[b + 15] = 0;
    this.pci_space[b + 16] = 0;
    this.pci_space[b + 17] = 0;
    this.pci_space[b + 18] = 0;
    this.pci_space[b + 19] = 0;
  };
  h.prototype.get_state = function () {
    let a = [];
    a[0] = this.device_feature_select;
    a[1] = this.driver_feature_select;
    a[2] = this.device_feature;
    a[3] = this.driver_feature;
    a[4] = this.features_ok;
    a[5] = this.device_status;
    a[6] = this.config_has_changed;
    a[7] = this.config_generation;
    a[8] = this.isr_status;
    a[9] = this.queue_select;
    return (a = a.concat(this.queues));
  };
  h.prototype.set_state = function (a) {
    this.device_feature_select = a[0];
    this.driver_feature_select = a[1];
    this.device_feature = a[2];
    this.driver_feature = a[3];
    this.features_ok = a[4];
    this.device_status = a[5];
    this.config_has_changed = a[6];
    this.config_generation = a[7];
    this.isr_status = a[8];
    this.queue_select = a[9];
    let b = 0;
    for (let c of a.slice(10)) this.queues[b].set_state(c), b++;
    this.queue_selected = this.queues[this.queue_select] || null;
  };
  h.prototype.reset = function () {
    this.driver_feature_select = this.device_feature_select = 0;
    this.driver_feature.set(this.device_feature);
    this.features_ok = !0;
    this.queue_select = this.device_status = 0;
    this.queue_selected = this.queues[0];
    for (const a of this.queues) a.reset();
    this.config_has_changed = !1;
    this.config_generation = 0;
    this.lower_irq();
  };
  h.prototype.notify_config_changes = function () {
    this.config_has_changed = !0;
    this.device_status & 4 && this.raise_irq(2);
  };
  h.prototype.update_config_generation = function () {
    this.config_has_changed &&
      (this.config_generation++,
      (this.config_generation &= 255),
      (this.config_has_changed = !1));
  };
  h.prototype.is_feature_negotiated = function (a) {
    return 0 < (this.driver_feature[a >>> 5] & (1 << (a & 31)));
  };
  h.prototype.needs_reset = function () {
    this.device_status |= 64;
    this.device_status & 4 && this.notify_config_changes();
  };
  h.prototype.raise_irq = function (a) {
    A(a);
    this.isr_status |= a;
    this.pci.raise_irq(this.pci_id);
  };
  h.prototype.lower_irq = function () {
    this.isr_status = 0;
    this.pci.lower_irq(this.pci_id);
  };
  function W(a, b, c) {
    this.cpu = a;
    this.virtio = b;
    this.size_supported = this.size = c.size_supported;
    this.mask = this.size - 1;
    this.enabled = !1;
    this.notify_offset = c.notify_offset;
    this.num_staged_replies =
      this.used_addr =
      this.avail_last_idx =
      this.avail_addr =
      this.desc_addr =
        0;
    this.reset();
  }
  W.prototype.get_state = function () {
    const a = [];
    a[0] = this.size;
    a[1] = this.size_supported;
    a[2] = this.enabled;
    a[3] = this.notify_offset;
    a[4] = this.desc_addr;
    a[5] = this.avail_addr;
    a[6] = this.avail_last_idx;
    a[7] = this.used_addr;
    a[8] = this.num_staged_replies;
    return a;
  };
  W.prototype.set_state = function (a) {
    this.size = a[0];
    this.size_supported = a[1];
    this.enabled = a[2];
    this.notify_offset = a[3];
    this.desc_addr = a[4];
    this.avail_addr = a[5];
    this.avail_last_idx = a[6];
    this.used_addr = a[7];
    this.num_staged_replies = a[8];
    this.mask = this.size - 1;
  };
  W.prototype.reset = function () {
    this.enabled = !1;
    this.num_staged_replies =
      this.used_addr =
      this.avail_last_idx =
      this.avail_addr =
      this.desc_addr =
        0;
    this.set_size(this.size_supported);
  };
  W.prototype.is_configured = function () {
    return this.desc_addr && this.avail_addr && this.used_addr;
  };
  W.prototype.enable = function () {
    this.is_configured();
    this.enabled = !0;
  };
  W.prototype.set_size = function (a) {
    this.size = a;
    this.mask = a - 1;
  };
  W.prototype.count_requests = function () {
    return (this.avail_get_idx() - this.avail_last_idx) & this.mask;
  };
  W.prototype.has_request = function () {
    return (this.avail_get_idx() & this.mask) !== this.avail_last_idx;
  };
  W.prototype.pop_request = function () {
    this.has_request();
    var a = this.avail_get_entry(this.avail_last_idx);
    a = new Va(this, a);
    this.avail_last_idx = (this.avail_last_idx + 1) & this.mask;
    return a;
  };
  W.prototype.push_reply = function (a) {
    const b = (this.used_get_idx() + this.num_staged_replies) & this.mask;
    this.used_set_entry(b, a.head_idx, a.length_written);
    this.num_staged_replies++;
  };
  W.prototype.flush_replies = function () {
    if (0 !== this.num_staged_replies) {
      var a = (this.used_get_idx() + this.num_staged_replies) & 65535;
      this.used_set_idx(a);
      this.num_staged_replies = 0;
      this.virtio.is_feature_negotiated(29)
        ? (this.avail_get_used_event(), this.virtio.raise_irq(1))
        : ~this.avail_get_flags() & 1 && this.virtio.raise_irq(1);
    }
  };
  W.prototype.notify_me_after = function (a) {
    a = (this.avail_get_idx() + a) & 65535;
    this.used_set_avail_event(a);
  };
  W.prototype.get_descriptor = function (a, b) {
    return {
      addr_low: this.cpu.read32s(a + 16 * b),
      addr_high: this.cpu.read32s(a + 16 * b + 4),
      len: this.cpu.read32s(a + 16 * b + 8),
      flags: this.cpu.read16(a + 16 * b + 12),
      next: this.cpu.read16(a + 16 * b + 14),
    };
  };
  W.prototype.avail_get_flags = function () {
    return this.cpu.read16(this.avail_addr);
  };
  W.prototype.avail_get_idx = function () {
    return this.cpu.read16(this.avail_addr + 2);
  };
  W.prototype.avail_get_entry = function (a) {
    return this.cpu.read16(this.avail_addr + 4 + 2 * a);
  };
  W.prototype.avail_get_used_event = function () {
    return this.cpu.read16(this.avail_addr + 4 + 2 * this.size);
  };
  W.prototype.used_get_flags = function () {
    return this.cpu.read16(this.used_addr);
  };
  W.prototype.used_set_flags = function (a) {
    this.cpu.write16(this.used_addr, a);
  };
  W.prototype.used_get_idx = function () {
    return this.cpu.read16(this.used_addr + 2);
  };
  W.prototype.used_set_idx = function (a) {
    this.cpu.write16(this.used_addr + 2, a);
  };
  W.prototype.used_set_entry = function (a, b, c) {
    this.cpu.write32(this.used_addr + 4 + 8 * a, b);
    this.cpu.write32(this.used_addr + 8 + 8 * a, c);
  };
  W.prototype.used_set_avail_event = function (a) {
    this.cpu.write16(this.used_addr + 4 + 8 * this.size, a);
  };
  function Va(a, b) {
    this.cpu = a.cpu;
    this.virtio = a.virtio;
    this.head_idx = b;
    this.read_buffers = [];
    this.length_readable = this.read_buffer_offset = this.read_buffer_idx = 0;
    this.write_buffers = [];
    this.length_writable =
      this.length_written =
      this.write_buffer_offset =
      this.write_buffer_idx =
        0;
    let c = a.desc_addr,
      d = 0,
      e = a.size,
      g = !1;
    const f = this.virtio.is_feature_negotiated(28);
    do {
      const k = a.get_descriptor(c, b);
      A(k.addr_high, 8);
      A(k.addr_low, 8);
      A(k.len, 8);
      A(k.flags, 4);
      A(k.next, 4);
      if (f && k.flags & 4) (c = k.addr_low), (d = b = 0), (e = k.len / 16);
      else {
        if (k.flags & 2)
          (g = !0), this.write_buffers.push(k), (this.length_writable += k.len);
        else {
          if (g) break;
          this.read_buffers.push(k);
          this.length_readable += k.len;
        }
        d++;
        if (d > e) break;
        if (k.flags & 1) b = k.next;
        else break;
      }
    } while (1);
  }
  Va.prototype.get_next_blob = function (a) {
    let b = 0,
      c = a.length;
    for (; c && this.read_buffer_idx !== this.read_buffers.length; ) {
      var d = this.read_buffers[this.read_buffer_idx];
      const e = d.addr_low + this.read_buffer_offset;
      d = d.len - this.read_buffer_offset;
      d > c
        ? ((d = c), (this.read_buffer_offset += c))
        : (this.read_buffer_idx++, (this.read_buffer_offset = 0));
      a.set(this.cpu.read_blob(e, d), b);
      b += d;
      c -= d;
    }
    return b;
  };
  Va.prototype.set_next_blob = function (a) {
    let b = 0,
      c = a.length;
    for (; c && this.write_buffer_idx !== this.write_buffers.length; ) {
      var d = this.write_buffers[this.write_buffer_idx];
      const e = d.addr_low + this.write_buffer_offset;
      d = d.len - this.write_buffer_offset;
      d > c
        ? ((d = c), (this.write_buffer_offset += c))
        : (this.write_buffer_idx++, (this.write_buffer_offset = 0));
      this.cpu.write_blob(a.subarray(b, b + d), e);
      b += d;
      c -= d;
    }
    this.length_written += b;
    return b;
  };
  function Wa(a, b) {
    this.bus = b;
    this.rows = 25;
    this.cols = 80;
    this.ports = 4;
    b = [
      { size_supported: 16, notify_offset: 0 },
      { size_supported: 16, notify_offset: 1 },
      { size_supported: 16, notify_offset: 2 },
      { size_supported: 16, notify_offset: 3 },
    ];
    for (let c = 1; c < this.ports; ++c)
      b.push({ size_supported: 16, notify_offset: 0 }),
        b.push({ size_supported: 8, notify_offset: 1 });
    this.virtio = new h(a, {
      name: "virtio-console",
      pci_id: 56,
      device_id: 4163,
      subsystem_device_id: 3,
      common: {
        initial_port: 47104,
        queues: b,
        features: [0, 1, 32],
        on_driver_ok: () => {},
      },
      notification: {
        initial_port: 47360,
        single_handler: !1,
        handlers: [
          (c) => {
            for (c = this.virtio.queues[c]; c.count_requests() > c.size - 2; )
              c.pop_request();
          },
          (c) => {
            let d = this.virtio.queues[c],
              e = 3 < c ? (c - 3) >> 1 : 0;
            for (; d.has_request(); ) {
              const g = d.pop_request(),
                f = new Uint8Array(g.length_readable);
              g.get_next_blob(f);
              this.bus.send("virtio-console" + e + "-output-bytes", f);
              this.Ack(c, g);
            }
          },
          (c) => {
            if (2 == c)
              for (c = this.virtio.queues[c]; c.count_requests() > c.size - 2; )
                c.pop_request();
          },
          (c) => {
            if (3 == c)
              for (var d = this.virtio.queues[c]; d.has_request(); ) {
                var e = d.pop_request(),
                  g = new Uint8Array(e.length_readable);
                e.get_next_blob(g);
                var f = v.Unmarshall(["w", "h", "h"], g, { offset: 0 });
                g = f[0];
                f = f[1];
                this.Ack(c, e);
                switch (f) {
                  case 0:
                    for (e = 0; e < this.ports; ++e) this.SendEvent(e, 1, 0);
                    break;
                  case 3:
                    this.Ack(c, e);
                    this.SendEvent(g, 4, 1);
                    this.SendName(g, "virtio-" + g);
                    this.SendEvent(g, 6, 1);
                    break;
                  case 6:
                    this.Ack(c, e);
                    0 == g && this.SendWindowSize(g);
                    break;
                  default:
                    return;
                }
              }
          },
        ],
      },
      isr_status: { initial_port: 46848 },
      device_specific: {
        initial_port: 46592,
        struct: [
          { bytes: 2, name: "cols", read: () => this.cols, write: () => {} },
          { bytes: 2, name: "rows", read: () => this.rows, write: () => {} },
          {
            bytes: 4,
            name: "max_nr_ports",
            read: () => this.ports,
            write: () => {},
          },
          { bytes: 4, name: "emerg_wr", read: () => 0, write: () => {} },
        ],
      },
    });
    for (let c = 0; c < this.ports; ++c) {
      let d = 0 == c ? 0 : 2 * c + 2;
      this.bus.register(
        "virtio-console" + c + "-input-bytes",
        function (e) {
          var g = this.virtio.queues[d];
          g.has_request() &&
            ((g = g.pop_request()), this.Send(d, g, new Uint8Array(e)));
        },
        this
      );
      this.bus.register(
        "virtio-console" + c + "-resize",
        function (e) {
          this.cols = e[0];
          this.rows = e[1];
          this.virtio.queues[2].is_configured() &&
            this.virtio.queues[2].has_request() &&
            this.SendWindowSize(c);
        },
        this
      );
    }
  }
  Wa.prototype.SendWindowSize = function (a) {
    const b = this.virtio.queues[2].pop_request();
    let c = new Uint8Array(12);
    v.Marshall(
      ["w", "h", "h", "h", "h"],
      [a, 5, 0, this.rows, this.cols],
      c,
      0
    );
    this.Send(2, b, c);
  };
  Wa.prototype.SendName = function (a, b) {
    const c = this.virtio.queues[2].pop_request();
    b = new TextEncoder().encode(b);
    let d = new Uint8Array(8 + b.length + 1);
    v.Marshall(["w", "h", "h"], [a, 7, 1], d, 0);
    for (a = 0; a < b.length; ++a) d[a + 8] = b[a];
    d[8 + b.length] = 0;
    this.Send(2, c, d);
  };
  Wa.prototype.get_state = function () {
    let a = [];
    a[0] = this.virtio;
    a[1] = this.rows;
    a[2] = this.cols;
    a[3] = this.ports;
    return a;
  };
  Wa.prototype.set_state = function (a) {
    this.virtio.set_state(a[0]);
    this.rows = a[1];
    this.cols = a[2];
    this.ports = a[3];
  };
  Wa.prototype.Reset = function () {};
  Wa.prototype.SendEvent = function (a, b, c) {
    const d = this.virtio.queues[2].pop_request();
    let e = new Uint8Array(8);
    v.Marshall(["w", "h", "h"], [a, b, c], e, 0);
    this.Send(2, d, e);
  };
  Wa.prototype.Send = function (a, b, c) {
    b.set_next_blob(c);
    this.virtio.queues[a].push_reply(b);
    this.virtio.queues[a].flush_replies();
  };
  Wa.prototype.Ack = function (a, b) {
    b.set_next_blob(new Uint8Array(0));
    this.virtio.queues[a].push_reply(b);
    this.virtio.queues[a].flush_replies();
  };
  var Xa = {};
  function Ya() {
    this.listeners = {};
    this.pair = void 0;
  }
  Ya.prototype.register = function (a, b, c) {
    var d = this.listeners[a];
    void 0 === d && (d = this.listeners[a] = []);
    d.push({ fn: b, this_value: c });
  };
  Ya.prototype.unregister = function (a, b) {
    var c = this.listeners[a];
    void 0 !== c &&
      (this.listeners[a] = c.filter(function (d) {
        return d.fn !== b;
      }));
  };
  Ya.prototype.send = function (a, b) {
    if (this.pair && ((a = this.pair.listeners[a]), void 0 !== a))
      for (var c = 0; c < a.length; c++) {
        var d = a[c];
        d.fn.call(d.this_value, b);
      }
  };
  Ya.prototype.send_async = function (a, b) {
    setTimeout(this.send.bind(this, a, b), 0);
  };
  Xa.create = function () {
    var a = new Ya(),
      b = new Ya();
    a.pair = b;
    b.pair = a;
    return [a, b];
  };
  function J() {}
  function oa() {}
  function E(a, b, c) {
    this.next_tick_immediately = c;
    this.wm = b;
    this.wasm_patch();
    this.create_jit_imports();
    this.wasm_memory = b = this.wm.exports.memory;
    this.memory_size = r.view(Uint32Array, b, 812, 1);
    this.mem8 = new Uint8Array(0);
    this.mem32s = new Int32Array(this.mem8.buffer);
    this.segment_is_null = r.view(Uint8Array, b, 724, 8);
    this.segment_offsets = r.view(Int32Array, b, 736, 8);
    this.segment_limits = r.view(Uint32Array, b, 768, 8);
    this.protected_mode = r.view(Int32Array, b, 800, 1);
    this.idtr_size = r.view(Int32Array, b, 564, 1);
    this.idtr_offset = r.view(Int32Array, b, 568, 1);
    this.gdtr_size = r.view(Int32Array, b, 572, 1);
    this.gdtr_offset = r.view(Int32Array, b, 576, 1);
    this.tss_size_32 = r.view(Int32Array, b, 1128, 1);
    this.page_fault = r.view(Uint32Array, b, 540, 8);
    this.cr = r.view(Int32Array, b, 580, 8);
    this.cpl = r.view(Uint8Array, b, 612, 1);
    this.is_32 = r.view(Int32Array, b, 804, 1);
    this.stack_size_32 = r.view(Int32Array, b, 808, 1);
    this.in_hlt = r.view(Uint8Array, b, 616, 1);
    this.last_virt_eip = r.view(Int32Array, b, 620, 1);
    this.eip_phys = r.view(Int32Array, b, 624, 1);
    this.sysenter_cs = r.view(Int32Array, b, 636, 1);
    this.sysenter_esp = r.view(Int32Array, b, 640, 1);
    this.sysenter_eip = r.view(Int32Array, b, 644, 1);
    this.prefixes = r.view(Int32Array, b, 648, 1);
    this.flags = r.view(Int32Array, b, 120, 1);
    this.flags_changed = r.view(Int32Array, b, 100, 1);
    this.last_op_size = r.view(Int32Array, b, 96, 1);
    this.last_op1 = r.view(Int32Array, b, 104, 1);
    this.last_result = r.view(Int32Array, b, 112, 1);
    this.current_tsc = r.view(Uint32Array, b, 960, 2);
    this.devices = {};
    this.instruction_pointer = r.view(Int32Array, b, 556, 1);
    this.previous_ip = r.view(Int32Array, b, 560, 1);
    this.apic_enabled = r.view(Uint8Array, b, 548, 1);
    this.acpi_enabled = r.view(Uint8Array, b, 552, 1);
    this.memory_map_read8 = [];
    this.memory_map_write8 = [];
    this.memory_map_read32 = [];
    this.memory_map_write32 = [];
    this.bios = { main: null, vga: null };
    this.instruction_counter = r.view(Uint32Array, b, 664, 1);
    this.reg32 = r.view(Int32Array, b, 64, 8);
    this.fpu_st = r.view(Int32Array, b, 1152, 32);
    this.fpu_stack_empty = r.view(Uint8Array, b, 816, 1);
    this.fpu_stack_empty[0] = 255;
    this.fpu_stack_ptr = r.view(Uint8Array, b, 1032, 1);
    this.fpu_stack_ptr[0] = 0;
    this.fpu_control_word = r.view(Uint16Array, b, 1036, 1);
    this.fpu_control_word[0] = 895;
    this.fpu_status_word = r.view(Uint16Array, b, 1040, 1);
    this.fpu_status_word[0] = 0;
    this.fpu_ip = r.view(Int32Array, b, 1048, 1);
    this.fpu_ip[0] = 0;
    this.fpu_ip_selector = r.view(Int32Array, b, 1052, 1);
    this.fpu_ip_selector[0] = 0;
    this.fpu_opcode = r.view(Int32Array, b, 1044, 1);
    this.fpu_opcode[0] = 0;
    this.fpu_dp = r.view(Int32Array, b, 1056, 1);
    this.fpu_dp[0] = 0;
    this.fpu_dp_selector = r.view(Int32Array, b, 1060, 1);
    this.fpu_dp_selector[0] = 0;
    this.reg_xmm32s = r.view(Int32Array, b, 832, 32);
    this.mxcsr = r.view(Int32Array, b, 824, 1);
    this.sreg = r.view(Uint16Array, b, 668, 8);
    this.dreg = r.view(Int32Array, b, 684, 8);
    this.reg_pdpte = r.view(Int32Array, b, 968, 8);
    this.svga_dirty_bitmap_min_offset = r.view(Uint32Array, b, 716, 1);
    this.svga_dirty_bitmap_max_offset = r.view(Uint32Array, b, 720, 1);
    this.fw_value = [];
    this.fw_pointer = 0;
    this.option_roms = [];
    this.io = void 0;
    this.bus = a;
    this.set_tsc(0, 0);
    this.debug_init();
  }
  E.prototype.clear_opstats = function () {
    new Uint8Array(this.wasm_memory.buffer, 32768, 131072).fill(0);
    this.wm.exports.profiler_init();
  };
  E.prototype.create_jit_imports = function () {
    const a = Object.create(null);
    a.m = this.wm.exports.memory;
    for (let b of Object.keys(this.wm.exports))
      b.startsWith("_") ||
        b.startsWith("zstd") ||
        b.endsWith("_js") ||
        (a[b] = this.wm.exports[b]);
    this.jit_imports = a;
  };
  E.prototype.wasm_patch = function () {
    const a = (c) => this.wm.exports[c],
      b = (c) => {
        const d = a(c);
        console.assert(d, "Missing import: " + c);
        return d;
      };
    this.reset_cpu = b("reset_cpu");
    this.getiopl = b("getiopl");
    this.get_eflags = b("get_eflags");
    this.handle_irqs = b("handle_irqs");
    this.main_loop = b("main_loop");
    this.set_jit_config = b("set_jit_config");
    this.read8 = b("read8");
    this.read16 = b("read16");
    this.read32s = b("read32s");
    this.write8 = b("write8");
    this.write16 = b("write16");
    this.write32 = b("write32");
    this.in_mapped_range = b("in_mapped_range");
    this.fpu_load_tag_word = b("fpu_load_tag_word");
    this.fpu_load_status_word = b("fpu_load_status_word");
    this.fpu_get_sti_f64 = b("fpu_get_sti_f64");
    this.translate_address_system_read = b("translate_address_system_read_js");
    this.get_seg_cs = b("get_seg_cs");
    this.get_real_eip = b("get_real_eip");
    this.clear_tlb = b("clear_tlb");
    this.full_clear_tlb = b("full_clear_tlb");
    this.update_state_flags = b("update_state_flags");
    this.set_tsc = b("set_tsc");
    this.store_current_tsc = b("store_current_tsc");
    this.set_cpuid_level = b("set_cpuid_level");
    this.pic_set_irq = b("pic_set_irq");
    this.pic_clear_irq = b("pic_clear_irq");
    this.jit_clear_cache = b("jit_clear_cache_js");
    this.jit_dirty_cache = b("jit_dirty_cache");
    this.codegen_finalize_finished = b("codegen_finalize_finished");
    this.allocate_memory = b("allocate_memory");
    this.zero_memory = b("zero_memory");
    this.svga_allocate_memory = b("svga_allocate_memory");
    this.svga_allocate_dest_buffer = b("svga_allocate_dest_buffer");
    this.svga_fill_pixel_buffer = b("svga_fill_pixel_buffer");
    this.svga_mark_dirty = b("svga_mark_dirty");
    this.get_pic_addr_master = b("get_pic_addr_master");
    this.get_pic_addr_slave = b("get_pic_addr_slave");
    this.zstd_create_ctx = b("zstd_create_ctx");
    this.zstd_get_src_ptr = b("zstd_get_src_ptr");
    this.zstd_free_ctx = b("zstd_free_ctx");
    this.zstd_read = b("zstd_read");
    this.zstd_read_free = b("zstd_read_free");
    this.port20_read = b("port20_read");
    this.port21_read = b("port21_read");
    this.portA0_read = b("portA0_read");
    this.portA1_read = b("portA1_read");
    this.port20_write = b("port20_write");
    this.port21_write = b("port21_write");
    this.portA0_write = b("portA0_write");
    this.portA1_write = b("portA1_write");
    this.port4D0_read = b("port4D0_read");
    this.port4D1_read = b("port4D1_read");
    this.port4D0_write = b("port4D0_write");
    this.port4D1_write = b("port4D1_write");
  };
  E.prototype.jit_force_generate = function (a) {
    this.jit_force_generate_unsafe && this.jit_force_generate_unsafe(a);
  };
  E.prototype.jit_clear_func = function (a) {
    this.wm.wasm_table.set(a + 1024, null);
  };
  E.prototype.jit_clear_all_funcs = function () {
    const a = this.wm.wasm_table;
    for (let b = 0; 900 > b; b++) a.set(1024 + b, null);
  };
  E.prototype.get_state = function () {
    var a = [];
    a[0] = this.memory_size[0];
    a[1] = this.segment_is_null;
    a[2] = this.segment_offsets;
    a[3] = this.segment_limits;
    a[4] = this.protected_mode[0];
    a[5] = this.idtr_offset[0];
    a[6] = this.idtr_size[0];
    a[7] = this.gdtr_offset[0];
    a[8] = this.gdtr_size[0];
    a[9] = this.page_fault[0];
    a[10] = this.cr;
    a[11] = this.cpl[0];
    a[13] = this.is_32[0];
    a[16] = this.stack_size_32[0];
    a[17] = this.in_hlt[0];
    a[18] = this.last_virt_eip[0];
    a[19] = this.eip_phys[0];
    a[22] = this.sysenter_cs[0];
    a[23] = this.sysenter_eip[0];
    a[24] = this.sysenter_esp[0];
    a[25] = this.prefixes[0];
    a[26] = this.flags[0];
    a[27] = this.flags_changed[0];
    a[28] = this.last_op1[0];
    a[30] = this.last_op_size[0];
    a[37] = this.instruction_pointer[0];
    a[38] = this.previous_ip[0];
    a[39] = this.reg32;
    a[40] = this.sreg;
    a[41] = this.dreg;
    a[42] = this.reg_pdpte;
    this.store_current_tsc();
    a[43] = this.current_tsc;
    a[45] = this.devices.virtio_9p;
    a[46] = this.devices.apic;
    a[47] = this.devices.rtc;
    a[48] = this.devices.pci;
    a[49] = this.devices.dma;
    a[50] = this.devices.acpi;
    a[52] = this.devices.vga;
    a[53] = this.devices.ps2;
    a[54] = this.devices.uart0;
    a[55] = this.devices.fdc;
    a[56] = this.devices.cdrom;
    a[57] = this.devices.hda;
    a[58] = this.devices.pit;
    a[59] = this.devices.net;
    a[60] = this.get_state_pic();
    a[61] = this.devices.sb16;
    a[62] = this.fw_value;
    a[63] = this.devices.ioapic;
    a[64] = this.tss_size_32[0];
    a[66] = this.reg_xmm32s;
    a[67] = this.fpu_st;
    a[68] = this.fpu_stack_empty[0];
    a[69] = this.fpu_stack_ptr[0];
    a[70] = this.fpu_control_word[0];
    a[71] = this.fpu_ip[0];
    a[72] = this.fpu_ip_selector[0];
    a[73] = this.fpu_dp[0];
    a[74] = this.fpu_dp_selector[0];
    a[75] = this.fpu_opcode[0];
    const { packed_memory: b, bitmap: c } = this.pack_memory();
    a[77] = b;
    a[78] = new Uint8Array(c.get_buffer());
    a[79] = this.devices.uart1;
    a[80] = this.devices.uart2;
    a[81] = this.devices.uart3;
    a[82] = this.devices.virtio_console;
    return a;
  };
  E.prototype.get_state_pic = function () {
    const a = new Uint8Array(
        this.wasm_memory.buffer,
        this.get_pic_addr_master(),
        13
      ),
      b = new Uint8Array(
        this.wasm_memory.buffer,
        this.get_pic_addr_slave(),
        13
      ),
      c = [],
      d = [];
    c[0] = a[0];
    c[1] = a[1];
    c[2] = a[2];
    c[3] = a[3];
    c[4] = a[4];
    c[5] = d;
    c[6] = a[6];
    c[7] = a[7];
    c[8] = a[8];
    c[9] = a[9];
    c[10] = a[10];
    c[11] = a[11];
    c[12] = a[12];
    d[0] = b[0];
    d[1] = b[1];
    d[2] = b[2];
    d[3] = b[3];
    d[4] = b[4];
    d[5] = null;
    d[6] = b[6];
    d[7] = b[7];
    d[8] = b[8];
    d[9] = b[9];
    d[10] = b[10];
    d[12] = b[12];
    d[12] = b[12];
    return c;
  };
  E.prototype.set_state = function (a) {
    this.memory_size[0] = a[0];
    this.mem8.length !== this.memory_size[0] &&
      console.warn(
        "Note: Memory size mismatch. we=" +
          this.mem8.length +
          " state=" +
          this.memory_size[0]
      );
    this.segment_is_null.set(a[1]);
    this.segment_offsets.set(a[2]);
    this.segment_limits.set(a[3]);
    this.protected_mode[0] = a[4];
    this.idtr_offset[0] = a[5];
    this.idtr_size[0] = a[6];
    this.gdtr_offset[0] = a[7];
    this.gdtr_size[0] = a[8];
    this.page_fault[0] = a[9];
    this.cr.set(a[10]);
    this.cpl[0] = a[11];
    this.is_32[0] = a[13];
    this.stack_size_32[0] = a[16];
    this.in_hlt[0] = a[17];
    this.last_virt_eip[0] = a[18];
    this.eip_phys[0] = a[19];
    this.sysenter_cs[0] = a[22];
    this.sysenter_eip[0] = a[23];
    this.sysenter_esp[0] = a[24];
    this.prefixes[0] = a[25];
    this.flags[0] = a[26];
    this.flags_changed[0] = a[27];
    this.last_op1[0] = a[28];
    this.last_op_size[0] = a[30];
    this.instruction_pointer[0] = a[37];
    this.previous_ip[0] = a[38];
    this.reg32.set(a[39]);
    this.sreg.set(a[40]);
    this.dreg.set(a[41]);
    a[42] && this.reg_pdpte.set(a[42]);
    this.set_tsc(a[43][0], a[43][1]);
    this.devices.virtio_9p && this.devices.virtio_9p.set_state(a[45]);
    this.devices.apic && this.devices.apic.set_state(a[46]);
    this.devices.rtc && this.devices.rtc.set_state(a[47]);
    this.devices.pci && this.devices.pci.set_state(a[48]);
    this.devices.dma && this.devices.dma.set_state(a[49]);
    this.devices.acpi && this.devices.acpi.set_state(a[50]);
    this.devices.vga && this.devices.vga.set_state(a[52]);
    this.devices.ps2 && this.devices.ps2.set_state(a[53]);
    this.devices.uart0 && this.devices.uart0.set_state(a[54]);
    this.devices.fdc && this.devices.fdc.set_state(a[55]);
    this.devices.cdrom && this.devices.cdrom.set_state(a[56]);
    this.devices.hda && this.devices.hda.set_state(a[57]);
    this.devices.pit && this.devices.pit.set_state(a[58]);
    this.devices.net && this.devices.net.set_state(a[59]);
    this.set_state_pic(a[60]);
    this.devices.sb16 && this.devices.sb16.set_state(a[61]);
    this.devices.uart1 && this.devices.uart1.set_state(a[79]);
    this.devices.uart2 && this.devices.uart2.set_state(a[80]);
    this.devices.uart3 && this.devices.uart3.set_state(a[81]);
    this.devices.virtio_console && this.devices.virtio_console.set_state(a[82]);
    this.fw_value = a[62];
    this.devices.ioapic && this.devices.ioapic.set_state(a[63]);
    this.tss_size_32[0] = a[64];
    this.reg_xmm32s.set(a[66]);
    this.fpu_st.set(a[67]);
    this.fpu_stack_empty[0] = a[68];
    this.fpu_stack_ptr[0] = a[69];
    this.fpu_control_word[0] = a[70];
    this.fpu_ip[0] = a[71];
    this.fpu_ip_selector[0] = a[72];
    this.fpu_dp[0] = a[73];
    this.fpu_dp_selector[0] = a[74];
    this.fpu_opcode[0] = a[75];
    const b = new r.Bitmap(a[78].buffer);
    this.unpack_memory(b, a[77]);
    this.update_state_flags();
    this.full_clear_tlb();
    this.jit_clear_cache();
  };
  E.prototype.set_state_pic = function (a) {
    const b = new Uint8Array(
        this.wasm_memory.buffer,
        this.get_pic_addr_master(),
        13
      ),
      c = new Uint8Array(
        this.wasm_memory.buffer,
        this.get_pic_addr_slave(),
        13
      );
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3];
    b[4] = a[4];
    const d = a[5];
    b[6] = a[6];
    b[7] = a[7];
    b[8] = a[8];
    b[9] = a[9];
    b[10] = a[10];
    b[11] = a[11];
    b[12] = a[12];
    c[0] = d[0];
    c[1] = d[1];
    c[2] = d[2];
    c[3] = d[3];
    c[4] = d[4];
    c[6] = d[6];
    c[7] = d[7];
    c[8] = d[8];
    c[9] = d[9];
    c[10] = d[10];
    c[12] = d[12];
    c[12] = d[12];
  };
  E.prototype.pack_memory = function () {
    var a = this.mem8.length >> 12,
      b = [];
    for (var c = 0; c < a; c++) {
      var d = c << 12;
      d = this.mem32s.subarray(d >> 2, (d + 4096) >> 2);
      let e = !0;
      for (let g = 0; g < d.length; g++)
        if (0 !== d[g]) {
          e = !1;
          break;
        }
      e || b.push(c);
    }
    a = new r.Bitmap(a);
    c = new Uint8Array(b.length << 12);
    for (let [e, g] of b.entries())
      a.set(g, 1),
        (b = g << 12),
        (b = this.mem8.subarray(b, b + 4096)),
        c.set(b, e << 12);
    return { bitmap: a, packed_memory: c };
  };
  E.prototype.unpack_memory = function (a, b) {
    this.zero_memory(this.memory_size[0]);
    const c = this.memory_size[0] >> 12;
    let d = 0;
    for (let g = 0; g < c; g++)
      if (a.get(g)) {
        var e = d << 12;
        e = b.subarray(e, e + 4096);
        this.mem8.set(e, g << 12);
        d++;
      }
  };
  E.prototype.reboot_internal = function () {
    this.reset_cpu();
    this.fw_value = [];
    this.devices.virtio_9p && this.devices.virtio_9p.reset();
    this.devices.virtio_console && this.devices.virtio_console.reset();
    this.load_bios();
  };
  E.prototype.reset_memory = function () {
    this.mem8.fill(0);
  };
  E.prototype.create_memory = function (a) {
    1048576 > a ? (a = 1048576) : 0 > (a | 0) && (a = Math.pow(2, 31) - 131072);
    a = (((a - 1) | 131071) + 1) | 0;
    console.assert(0 === this.memory_size[0], "Expected uninitialised memory");
    this.memory_size[0] = a;
    const b = this.allocate_memory(a);
    this.mem8 = r.view(Uint8Array, this.wasm_memory, b, a);
    this.mem32s = r.view(Uint32Array, this.wasm_memory, b, a >> 2);
  };
  F.exportProperty(E.prototype, "create_memory", E.prototype.create_memory);
  E.prototype.init = function (a, b) {
    this.create_memory(
      "number" === typeof a.memory_size ? a.memory_size : 67108864
    );
    a.disable_jit && this.set_jit_config(0, 1);
    a.cpuid_level && this.set_cpuid_level(a.cpuid_level);
    this.acpi_enabled[0] = +a.acpi;
    this.reset_cpu();
    var c = new B(this);
    this.io = c;
    this.bios.main = a.bios;
    this.bios.vga = a.vga_bios;
    this.load_bios();
    if (a.bzimage) {
      const e = Za(this.mem8, a.bzimage, a.initrd, a.cmdline || "");
      e && this.option_roms.push(e);
    }
    c.register_read(179, this, function () {
      return 0;
    });
    var d = 0;
    c.register_read(146, this, function () {
      return d;
    });
    c.register_write(146, this, function (e) {
      d = e;
    });
    c.register_read(1297, this, function () {
      return this.fw_pointer < this.fw_value.length
        ? this.fw_value[this.fw_pointer++]
        : 0;
    });
    c.register_write(1296, this, void 0, function (e) {
      function g(l) {
        return new Uint8Array(Int32Array.of(l).buffer);
      }
      function f(l) {
        return (l >> 8) | ((l << 8) & 65280);
      }
      function k(l) {
        return (
          (l << 24) | ((l << 8) & 16711680) | ((l >> 8) & 65280) | (l >>> 24)
        );
      }
      J("bios config port, index=" + A(e));
      this.fw_pointer = 0;
      if (0 === e) this.fw_value = g(1431127377);
      else if (1 === e) this.fw_value = g(0);
      else if (3 === e) this.fw_value = g(this.memory_size[0]);
      else if (5 === e) this.fw_value = g(1);
      else if (15 === e) this.fw_value = g(1);
      else if (13 === e) this.fw_value = new Uint8Array(16);
      else if (25 === e) {
        e = new Int32Array(4 + 64 * this.option_roms.length);
        const l = new Uint8Array(e.buffer);
        e[0] = k(this.option_roms.length);
        for (let m = 0; m < this.option_roms.length; m++) {
          const { name: n, data: p } = this.option_roms[m],
            t = 4 + 64 * m;
          e[(t + 0) >> 2] = k(p.length);
          e[(t + 4) >> 2] = f(49152 + m);
          for (let q = 0; q < n.length; q++) l[t + 8 + q] = n.charCodeAt(q);
        }
        this.fw_value = l;
      } else
        32768 <= e && 49152 > e
          ? (this.fw_value = g(0))
          : 49152 <= e && e - 49152 < this.option_roms.length
          ? (this.fw_value = this.option_roms[e - 49152].data)
          : (J("Warning: Unimplemented fw index: " + A(e)),
            (this.fw_value = g(0)));
    });
    c.register_read(32, this, this.port20_read);
    c.register_read(33, this, this.port21_read);
    c.register_read(160, this, this.portA0_read);
    c.register_read(161, this, this.portA1_read);
    c.register_write(32, this, this.port20_write);
    c.register_write(33, this, this.port21_write);
    c.register_write(160, this, this.portA0_write);
    c.register_write(161, this, this.portA1_write);
    c.register_read(1232, this, this.port4D0_read);
    c.register_read(1233, this, this.port4D1_read);
    c.register_write(1232, this, this.port4D0_write);
    c.register_write(1233, this, this.port4D1_write);
    this.devices = {};
    a.load_devices &&
      ((this.devices.pci = new pa(this)),
      this.acpi_enabled[0] &&
        ((this.devices.ioapic = new ya(this)),
        (this.devices.apic = new O(this)),
        (this.devices.acpi = new xa(this))),
      (this.devices.rtc = new va(this)),
      this.fill_cmos(this.devices.rtc, a),
      (this.devices.dma = new L(this)),
      (this.devices.vga = new M(this, b, a.vga_memory_size || 8388608)),
      (this.devices.ps2 = new N(this, b)),
      (this.devices.uart0 = new wa(this, 1016, b)),
      a.uart1 && (this.devices.uart1 = new wa(this, 760, b)),
      a.uart2 && (this.devices.uart2 = new wa(this, 1e3, b)),
      a.uart3 && (this.devices.uart3 = new wa(this, 744, b)),
      (this.devices.fdc = new K(this, a.fda, a.fdb)),
      (c = 0),
      a.hda && (this.devices.hda = new G(this, a.hda, a.hdb, !1, c++, b)),
      a.cdrom &&
        (this.devices.cdrom = new G(this, a.cdrom, void 0, !0, c++, b)),
      (this.devices.pit = new qa(this, b)),
      a.enable_ne2k &&
        (this.devices.net = new Fa(
          this,
          b,
          a.preserve_mac_from_state_image,
          a.mac_address_translation
        )),
      a.fs9p && (this.devices.virtio_9p = new da(a.fs9p, this, b)),
      a.virtio_console && (this.devices.virtio_console = new Wa(this, b)),
      (this.devices.sb16 = new Q(this, b)));
    a.multiboot &&
      (a = this.load_multiboot_option_rom(a.multiboot, a.initrd, a.cmdline)) &&
      (this.bios.main
        ? this.option_roms.push(a)
        : (this.reg32[0] = this.io.port_read32(244)));
  };
  E.prototype.load_multiboot = function (a) {
    this.load_multiboot_option_rom(a, void 0, "") &&
      (this.reg32[0] = this.io.port_read32(244));
  };
  E.prototype.load_multiboot_option_rom = function (a, b, c) {
    if (8192 > a.byteLength) {
      var d = new Int32Array(2048);
      new Uint8Array(d.buffer).set(new Uint8Array(a));
    } else d = new Int32Array(a, 0, 2048);
    for (var e = 0; 8192 > e; e += 4) {
      if (464367618 === d[e >> 2]) {
        var g = d[(e + 4) >> 2];
        if ((464367618 + g + d[(e + 8) >> 2]) | 0) continue;
      } else continue;
      J("Multiboot magic found, flags: " + A(g >>> 0, 8), 2);
      var f = this;
      this.io.register_read(
        244,
        this,
        function () {
          return 0;
        },
        function () {
          return 0;
        },
        function () {
          var n = 31860,
            p = 0;
          if (c) {
            p |= 4;
            f.write32(31760, n);
            c += "\x00";
            var t = new TextEncoder().encode(c);
            f.write_blob(t, n);
            n += t.length;
          }
          if (g & 2) {
            p |= 64;
            t = 0;
            f.write32(31788, 0);
            f.write32(31792, n);
            var q = 0;
            var z = !1;
            for (let u = 0; 4294967296 > u; u += 131072)
              z && void 0 !== f.memory_map_read8[u >>> 17]
                ? (f.write32(n, 20),
                  f.write32(n + 4, q),
                  f.write32(n + 8, 0),
                  f.write32(n + 12, u - q),
                  f.write32(n + 16, 0),
                  f.write32(n + 20, 1),
                  (n += 24),
                  (t += 24),
                  (z = !1))
                : z ||
                  void 0 !== f.memory_map_read8[u >>> 17] ||
                  ((q = u), (z = !0));
            f.write32(31788, t);
          }
          f.write32(31744, p);
          t = p = 0;
          if (g & 65536) {
            z = d[(e + 12) >> 2];
            p = d[(e + 16) >> 2];
            var w = d[(e + 20) >> 2];
            t = d[(e + 24) >> 2];
            q = d[(e + 28) >> 2];
            A(z, 8);
            A(p, 8);
            A(w, 8);
            A(t, 8);
            A(q, 8);
            z = new Uint8Array(a, e - (z - p), 0 === w ? void 0 : w - p);
            f.write_blob(z, p);
            p = q | 0;
            t = Math.max(w, t);
          } else if (1179403647 === d[0]) {
            q = new DataView(a);
            let [u, I] = $a(q, ab);
            console.assert(52 === I);
            console.assert(1179403647 === u.magic, "Bad magic");
            console.assert(1 === u.class, "Unimplemented: 64 bit elf");
            console.assert(1 === u.data, "Unimplemented: big endian");
            console.assert(1 === u.version0, "Bad version0");
            console.assert(2 === u.type, "Unimplemented type");
            console.assert(1 === u.version1, "Bad version1");
            console.assert(52 === u.ehsize, "Bad header size");
            console.assert(32 === u.phentsize, "Bad program header size");
            console.assert(40 === u.shentsize, "Bad section header size");
            [p] = bb(
              new DataView(
                q.buffer,
                q.byteOffset + u.phoff,
                u.phentsize * u.phnum
              ),
              cb,
              u.phnum
            );
            bb(
              new DataView(
                q.buffer,
                q.byteOffset + u.shoff,
                u.shentsize * u.shnum
              ),
              gb,
              u.shnum
            );
            q = u;
            z = p;
            p = q.entry;
            for (w of z)
              0 !== w.type &&
                (1 === w.type
                  ? w.paddr + w.memsz < f.memory_size[0]
                    ? (w.filesz &&
                        ((z = new Uint8Array(a, w.offset, w.filesz)),
                        f.write_blob(z, w.paddr)),
                      (t = Math.max(t, w.paddr + w.memsz)),
                      p === q.entry &&
                        w.vaddr <= p &&
                        w.vaddr + w.memsz > p &&
                        (p = p - w.vaddr + w.paddr))
                    : A(w.paddr)
                  : 2 === w.type ||
                    3 === w.type ||
                    4 === w.type ||
                    6 === w.type ||
                    7 === w.type ||
                    1685382480 === w.type ||
                    1685382481 === w.type ||
                    1685382482 === w.type ||
                    1685382483 === w.type ||
                    A(w.type));
          }
          b &&
            (f.write32(31764, 1),
            f.write32(31768, n),
            (w = t),
            0 !== (w & 4095) && (w = (w & -4096) + 4096),
            (t = w + b.byteLength),
            f.write32(n, w),
            f.write32(n + 4, t),
            f.write32(n + 8, 0),
            f.write32(n + 12, 0),
            f.write_blob(new Uint8Array(b), w));
          f.reg32[3] = 31744;
          f.cr[0] = 1;
          f.protected_mode[0] = 1;
          f.flags[0] = 2;
          f.is_32[0] = 1;
          f.stack_size_32[0] = 1;
          for (n = 0; 6 > n; n++)
            (f.segment_is_null[n] = 0),
              (f.segment_offsets[n] = 0),
              (f.segment_limits[n] = 4294967295),
              (f.sreg[n] = 45058);
          f.instruction_pointer[0] = (f.get_seg_cs() + p) | 0;
          f.update_state_flags();
          f.debug.dump_state();
          f.debug.dump_regs();
          return 732803074;
        }
      );
      this.io.register_write_consecutive(
        244,
        this,
        function (n) {
          console.log("Test exited with code " + A(n, 2));
          throw "HALT";
        },
        function () {},
        function () {},
        function () {}
      );
      for (let n = 0; 15 >= n; n++) {
        function p(t) {
          A(n);
          A(t, 2);
          t ? this.device_raise_irq(n) : this.device_lower_irq(n);
        }
        this.io.register_write(8192 + n, this, p, p, p);
      }
      const l = new Uint8Array(512);
      new Uint16Array(l.buffer)[0] = 43605;
      l[2] = 1;
      var k = 3;
      l[k++] = 102;
      l[k++] = 229;
      l[k++] = 244;
      let m = (l[k] = 0);
      for (let n = 0; n < l.length; n++) m += l[n];
      l[k] = -m;
      return { name: "genroms/multiboot.bin", data: l };
    }
  };
  E.prototype.fill_cmos = function (a, b) {
    var c = b.boot_order || 291;
    a.cmos_write(56, 1 | ((c >> 4) & 240));
    a.cmos_write(61, c & 255);
    a.cmos_write(21, 128);
    a.cmos_write(22, 2);
    c = 0;
    1048576 <= this.memory_size[0] &&
      ((c = (this.memory_size[0] - 1048576) >> 10), (c = Math.min(c, 65535)));
    a.cmos_write(23, c & 255);
    a.cmos_write(24, (c >> 8) & 255);
    a.cmos_write(48, c & 255);
    a.cmos_write(49, (c >> 8) & 255);
    c = 0;
    16777216 <= this.memory_size[0] &&
      ((c = (this.memory_size[0] - 16777216) >> 16), (c = Math.min(c, 65535)));
    a.cmos_write(52, c & 255);
    a.cmos_write(53, (c >> 8) & 255);
    a.cmos_write(91, 0);
    a.cmos_write(92, 0);
    a.cmos_write(93, 0);
    a.cmos_write(20, 47);
    a.cmos_write(95, 0);
    b.fastboot && a.cmos_write(63, 1);
  };
  E.prototype.load_bios = function () {
    var a = this.bios.main,
      b = this.bios.vga;
    if (a) {
      var c = new Uint8Array(a);
      this.write_blob(c, 1048576 - a.byteLength);
      if (b) {
        var d = new Uint8Array(b);
        this.write_blob(d, 786432);
        this.io.mmap_register(
          4272947200,
          1048576,
          function (e) {
            e = (e - 4272947200) | 0;
            return e < d.length ? d[e] : 0;
          },
          function () {}
        );
      }
      this.io.mmap_register(
        4293918720,
        1048576,
        function (e) {
          return this.mem8[e & 1048575];
        }.bind(this),
        function (e, g) {
          this.mem8[e & 1048575] = g;
        }.bind(this)
      );
    }
  };
  E.prototype.codegen_finalize = function (a, b, c, d, e) {
    const g = new Uint8Array(this.wasm_memory.buffer, d >>> 0, e >>> 0);
    WebAssembly.instantiate(g, { e: this.jit_imports }).then((f) => {
      this.wm.wasm_table.set(a + 1024, f.instance.exports.f);
      this.codegen_finalize_finished(a, b, c);
      this.test_hook_did_finalize_wasm && this.test_hook_did_finalize_wasm(g);
    });
  };
  E.prototype.log_uncompiled_code = function () {};
  E.prototype.dump_function_code = function () {};
  E.prototype.run_hardware_timers = function (a, b) {
    const c = this.devices.pit.timer(b, !1),
      d = this.devices.rtc.timer(b, !1);
    let e = 100,
      g = 100;
    a && ((e = this.devices.acpi.timer(b)), (g = this.devices.apic.timer(b)));
    return Math.min(c, d, e, g);
  };
  E.prototype.device_raise_irq = function (a) {
    this.pic_set_irq(a);
    this.devices.ioapic && this.devices.ioapic.set_irq(a);
  };
  E.prototype.device_lower_irq = function (a) {
    this.pic_clear_irq(a);
    this.devices.ioapic && this.devices.ioapic.clear_irq(a);
  };
  "undefined" !== typeof window
    ? (window.CPU = E)
    : "undefined" !== typeof module && "undefined" !== typeof module.exports
    ? (module.exports.CPU = E)
    : "function" === typeof importScripts && (self.CPU = E);
  E.prototype.debug_init = function () {
    var a = this,
      b = {};
    this.debug = b;
    b.init = function () {};
    b.get_regs_short = function () {};
    b.dump_regs = function () {};
    b.get_state = function () {};
    b.dump_state = function () {};
    b.dump_stack = function () {};
    b.dump_page_structures = function () {
      if (a.cr[4] & 32) for (var g = 0; 4 > g; g++) a.read32s(a.cr[3] + 8 * g);
    };
    b.dump_gdt_ldt = function () {};
    b.dump_idt = function () {};
    b.get_memory_dump = function () {};
    b.memory_hex_dump = function () {};
    b.used_memory_dump = function () {};
    b.debug_interrupt = function () {};
    let c, d;
    b.dump_code = function (g, f, k) {
      if (!d) {
        if (
          void 0 === c &&
          ((c =
            "function" === typeof require
              ? require("./capstone-x86.min.js")
              : window.cs),
          void 0 === c)
        )
          return;
        d = [
          new c.Capstone(c.ARCH_X86, c.MODE_16),
          new c.Capstone(c.ARCH_X86, c.MODE_32),
        ];
      }
      try {
        d[g].disasm(f, k).forEach(function (l) {
          J(
            A(l.address >>> 0) +
              ": " +
              r.pads(l.bytes.map((m) => A(m, 2).slice(-2)).join(" "), 20) +
              " " +
              l.mnemonic +
              " " +
              l.op_str
          );
        });
      } catch (l) {
        J(
          "Could not disassemble: " +
            Array.from(f)
              .map((m) => A(m, 2))
              .join(" ")
        );
      }
    };
    let e;
    b.dump_wasm = function (g) {
      if (
        void 0 === e &&
        ((e =
          "function" === typeof require
            ? require("./libwabt.js")
            : new window.WabtModule()),
        void 0 === e)
      )
        return;
      g = g.slice();
      try {
        var f = e.readWasm(g, { readDebugNames: !1 });
        f.generateNames();
        f.applyNames();
        f.toText({ foldExprs: !0, inlineExport: !0 });
      } catch (m) {
        var k = new Blob([g]),
          l = document.createElement("a");
        l.download = "failed.wasm";
        l.href = window.URL.createObjectURL(k);
        l.dataset.downloadurl = [
          "application/octet-stream",
          l.download,
          l.href,
        ].join(":");
        l.click();
        window.URL.revokeObjectURL(l.src);
        console.log(m.toString());
      } finally {
        f && f.destroy();
      }
    };
  };
  let hb = DataView.prototype,
    ib = { size: 1, get: hb.getUint8, set: hb.setUint8 },
    jb = { size: 2, get: hb.getUint16, set: hb.setUint16 },
    X = { size: 4, get: hb.getUint32, set: hb.setUint32 },
    ab = kb([
      { magic: X },
      { class: ib },
      { data: ib },
      { version0: ib },
      { osabi: ib },
      { abiversion: ib },
      {
        pad0: (function (a) {
          return { size: a, get: () => -1 };
        })(7),
      },
      { type: jb },
      { machine: jb },
      { version1: X },
      { entry: X },
      { phoff: X },
      { shoff: X },
      { flags: X },
      { ehsize: jb },
      { phentsize: jb },
      { phnum: jb },
      { shentsize: jb },
      { shnum: jb },
      { shstrndx: jb },
    ]);
  console.assert(52 === ab.reduce((a, b) => a + b.size, 0));
  let cb = kb([
    { type: X },
    { offset: X },
    { vaddr: X },
    { paddr: X },
    { filesz: X },
    { memsz: X },
    { flags: X },
    { align: X },
  ]);
  console.assert(32 === cb.reduce((a, b) => a + b.size, 0));
  let gb = kb([
    { name: X },
    { type: X },
    { flags: X },
    { addr: X },
    { offset: X },
    { size: X },
    { link: X },
    { info: X },
    { addralign: X },
    { entsize: X },
  ]);
  console.assert(40 === gb.reduce((a, b) => a + b.size, 0));
  function kb(a) {
    return a.map(function (b) {
      var c = Object.keys(b);
      console.assert(1 === c.length);
      c = c[0];
      b = b[c];
      console.assert(0 < b.size);
      return { name: c, type: b, size: b.size, get: b.get, set: b.set };
    });
  }
  function $a(a, b) {
    let c = {},
      d = 0;
    for (let e of b)
      (b = e.get.call(a, d, !0)),
        console.assert(void 0 === c[e.name]),
        (c[e.name] = b),
        (d += e.size);
    return [c, d];
  }
  function bb(a, b, c) {
    let d = [],
      e = 0;
    for (var g = 0; g < c; g++) {
      let [f, k] = $a(new DataView(a.buffer, a.byteOffset + e, void 0), b);
      d.push(f);
      e += k;
    }
    return [d, e];
  }
  function Za(a, b, c, d) {
    var e = new Uint8Array(b);
    const g = new Uint16Array(b);
    var f = new Uint32Array(b),
      k = e[497] || 4,
      l = g[255];
    if (43605 !== l) A(l);
    else if (((l = g[257] | (g[258] << 16)), 1400005704 !== l)) A(l);
    else {
      l = e[529];
      var m = g[283],
        n = f[139],
        p = f[140],
        t = e[565],
        q = f[142],
        z = f[146],
        w = f[147],
        u = f[150],
        I = f[151],
        U = f[152];
      A(g[259]);
      A(l);
      A(m);
      A(f[133]);
      A(n);
      A(p);
      A(t);
      A(q);
      A(z);
      A(w);
      A(I);
      A(u);
      A(U);
      e[528] = 255;
      e[529] = (l & -97) | 128;
      g[274] = 56832;
      g[253] = 65535;
      A(56832);
      d += "\x00";
      A(581632);
      f[138] = 581632;
      for (e = 0; e < d.length; e++) a[581632 + e] = d.charCodeAt(e);
      k = 512 * (k + 1);
      A(k);
      d = new Uint8Array(b, 0, k);
      b = new Uint8Array(b, k);
      e = k = 0;
      c && ((k = 67108864), (e = c.byteLength), a.set(new Uint8Array(c), k));
      f[134] = k;
      f[135] = e;
      a.set(d, 524288);
      a.set(b, 1048576);
      a = new Uint8Array(512);
      new Uint16Array(a.buffer)[0] = 43605;
      a[2] = 1;
      c = 3;
      a[c++] = 250;
      a[c++] = 184;
      a[c++] = 32768;
      a[c++] = 128;
      a[c++] = 142;
      a[c++] = 192;
      a[c++] = 142;
      a[c++] = 216;
      a[c++] = 142;
      a[c++] = 224;
      a[c++] = 142;
      a[c++] = 232;
      a[c++] = 142;
      a[c++] = 208;
      a[c++] = 188;
      a[c++] = 57344;
      a[c++] = 224;
      a[c++] = 234;
      a[c++] = 0;
      a[c++] = 0;
      a[c++] = 32800;
      a[c++] = 128;
      f = a[c] = 0;
      for (b = 0; b < a.length; b++) f += a[b];
      a[c] = -f;
      return { name: "genroms/kernel.bin", data: a };
    }
  }
  function lb(a) {
    function b(q) {
      !q.altKey && k[56] && g(56, !1);
      return e(q, !1);
    }
    function c(q) {
      !q.altKey && k[56] && g(56, !1);
      return e(q, !0);
    }
    function d() {
      for (var q = Object.keys(k), z, w = 0; w < q.length; w++)
        (z = +q[w]), k[z] && g(z, !1);
      k = {};
    }
    function e(q, z) {
      var w;
      if ((w = l.bus))
        w =
          (q.shiftKey &&
            q.ctrlKey &&
            (73 === q.keyCode || 74 === q.keyCode || 75 === q.keyCode)) ||
          !l.emu_enabled
            ? !1
            : q.target
            ? q.target.classList.contains("phone_keyboard") ||
              ("INPUT" !== q.target.nodeName &&
                "TEXTAREA" !== q.target.nodeName)
            : !0;
      if (w) {
        a: {
          if (void 0 !== q.code && ((w = t[q.code]), void 0 !== w)) break a;
          w = m[q.keyCode];
        }
        if (w)
          return g(w, z, q.repeat), q.preventDefault && q.preventDefault(), !1;
        console.log(
          "Missing char in map: keyCode=" +
            (q.keyCode || -1).toString(16) +
            " code=" +
            q.code
        );
      }
    }
    function g(q, z, w) {
      if (z) k[q] && !w && g(q, !1);
      else if (!k[q]) return;
      (k[q] = z) || (q |= 128);
      255 < q ? (f(q >> 8), f(q & 255)) : f(q);
    }
    function f(q) {
      l.bus.send("keyboard-code", q);
    }
    var k = {},
      l = this;
    this.emu_enabled = !0;
    var m = new Uint16Array([
        0, 0, 0, 0, 0, 0, 0, 0, 14, 15, 0, 0, 0, 28, 0, 0, 42, 29, 56, 0, 58, 0,
        0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 57, 57417, 57425, 57423, 57415, 57419,
        57416, 57421, 80, 0, 0, 0, 0, 82, 83, 0, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        0, 39, 0, 13, 0, 0, 0, 30, 48, 46, 32, 18, 33, 34, 35, 23, 36, 37, 38,
        50, 49, 24, 25, 16, 19, 31, 20, 22, 47, 17, 45, 21, 44, 57435, 57436,
        57437, 0, 0, 82, 79, 80, 81, 75, 76, 77, 71, 72, 73, 0, 0, 0, 0, 0, 0,
        59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 87, 88, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 39, 13, 51, 12, 52, 53, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 43, 27, 40, 0,
        57435, 57400, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ]),
      n = {
        8: 8,
        10: 13,
        32: 32,
        39: 222,
        44: 188,
        45: 189,
        46: 190,
        47: 191,
        48: 48,
        49: 49,
        50: 50,
        51: 51,
        52: 52,
        53: 53,
        54: 54,
        55: 55,
        56: 56,
        57: 57,
        59: 186,
        61: 187,
        91: 219,
        92: 220,
        93: 221,
        96: 192,
        97: 65,
        98: 66,
        99: 67,
        100: 68,
        101: 69,
        102: 70,
        103: 71,
        104: 72,
        105: 73,
        106: 74,
        107: 75,
        108: 76,
        109: 77,
        110: 78,
        111: 79,
        112: 80,
        113: 81,
        114: 82,
        115: 83,
        116: 84,
        117: 85,
        118: 86,
        119: 87,
        120: 88,
        121: 89,
        122: 90,
      },
      p = {
        33: 49,
        34: 222,
        35: 51,
        36: 52,
        37: 53,
        38: 55,
        40: 57,
        41: 48,
        42: 56,
        43: 187,
        58: 186,
        60: 188,
        62: 190,
        63: 191,
        64: 50,
        65: 65,
        66: 66,
        67: 67,
        68: 68,
        69: 69,
        70: 70,
        71: 71,
        72: 72,
        73: 73,
        74: 74,
        75: 75,
        76: 76,
        77: 77,
        78: 78,
        79: 79,
        80: 80,
        81: 81,
        82: 82,
        83: 83,
        84: 84,
        85: 85,
        86: 86,
        87: 87,
        88: 88,
        89: 89,
        90: 90,
        94: 54,
        95: 189,
        123: 219,
        124: 220,
        125: 221,
        126: 192,
      },
      t = {
        Escape: 1,
        Digit1: 2,
        Digit2: 3,
        Digit3: 4,
        Digit4: 5,
        Digit5: 6,
        Digit6: 7,
        Digit7: 8,
        Digit8: 9,
        Digit9: 10,
        Digit0: 11,
        Minus: 12,
        Equal: 13,
        Backspace: 14,
        Tab: 15,
        KeyQ: 16,
        KeyW: 17,
        KeyE: 18,
        KeyR: 19,
        KeyT: 20,
        KeyY: 21,
        KeyU: 22,
        KeyI: 23,
        KeyO: 24,
        KeyP: 25,
        BracketLeft: 26,
        BracketRight: 27,
        Enter: 28,
        ControlLeft: 29,
        KeyA: 30,
        KeyS: 31,
        KeyD: 32,
        KeyF: 33,
        KeyG: 34,
        KeyH: 35,
        KeyJ: 36,
        KeyK: 37,
        KeyL: 38,
        Semicolon: 39,
        Quote: 40,
        Backquote: 41,
        ShiftLeft: 42,
        Backslash: 43,
        KeyZ: 44,
        KeyX: 45,
        KeyC: 46,
        KeyV: 47,
        KeyB: 48,
        KeyN: 49,
        KeyM: 50,
        Comma: 51,
        Period: 52,
        Slash: 53,
        IntlRo: 53,
        ShiftRight: 54,
        NumpadMultiply: 55,
        AltLeft: 56,
        Space: 57,
        CapsLock: 58,
        F1: 59,
        F2: 60,
        F3: 61,
        F4: 62,
        F5: 63,
        F6: 64,
        F7: 65,
        F8: 66,
        F9: 67,
        F10: 68,
        NumLock: 69,
        ScrollLock: 70,
        Numpad7: 71,
        Numpad8: 72,
        Numpad9: 73,
        NumpadSubtract: 74,
        Numpad4: 75,
        Numpad5: 76,
        Numpad6: 77,
        NumpadAdd: 78,
        Numpad1: 79,
        Numpad2: 80,
        Numpad3: 81,
        Numpad0: 82,
        NumpadDecimal: 83,
        IntlBackslash: 86,
        F11: 87,
        F12: 88,
        NumpadEnter: 57372,
        ControlRight: 57373,
        NumpadDivide: 57397,
        AltRight: 57400,
        Home: 57415,
        ArrowUp: 57416,
        PageUp: 57417,
        ArrowLeft: 57419,
        ArrowRight: 57421,
        End: 57423,
        ArrowDown: 57424,
        PageDown: 57425,
        Insert: 57426,
        Delete: 57427,
        OSLeft: 57435,
        OSRight: 57436,
        ContextMenu: 57437,
      };
    this.bus = a;
    this.destroy = function () {
      "undefined" !== typeof window &&
        (window.removeEventListener("keyup", b, !1),
        window.removeEventListener("keydown", c, !1),
        window.removeEventListener("blur", d, !1));
    };
    this.init = function () {
      "undefined" !== typeof window &&
        (this.destroy(),
        window.addEventListener("keyup", b, !1),
        window.addEventListener("keydown", c, !1),
        window.addEventListener("blur", d, !1));
    };
    this.init();
    this.simulate_press = function (q) {
      q = { keyCode: q };
      e(q, !0);
      e(q, !1);
    };
    this.simulate_char = function (q) {
      var z = q.charCodeAt(0);
      z in n
        ? this.simulate_press(n[z])
        : z in p
        ? (f(42), this.simulate_press(p[z]), f(170))
        : console.log("ascii -> keyCode not found: ", z, q);
    };
  }
  function mb(a, b) {
    function c(u) {
      if (!w.enabled || !w.emu_enabled) return !1;
      var I = b || document.body,
        U;
      if (!(U = document.pointerLockElement))
        a: {
          for (u = u.target; u.parentNode; ) {
            if (u === I) {
              U = !0;
              break a;
            }
            u = u.parentNode;
          }
          U = !1;
        }
      return U;
    }
    function d(u) {
      c(u) &&
        (u = u.changedTouches) &&
        u.length &&
        ((u = u[u.length - 1]), (q = u.clientX), (z = u.clientY));
    }
    function e() {
      if (n || t || p)
        w.bus.send("mouse-click", [!1, !1, !1]), (n = t = p = !1);
    }
    function g(u) {
      if (w.bus && c(u) && w.is_running) {
        var I = 0,
          U = 0,
          ea = u.changedTouches;
        ea
          ? ea.length &&
            ((ea = ea[ea.length - 1]),
            (I = ea.clientX - q),
            (U = ea.clientY - z),
            (q = ea.clientX),
            (z = ea.clientY),
            u.preventDefault())
          : "number" === typeof u.movementX
          ? ((I = u.movementX), (U = u.movementY))
          : "number" === typeof u.webkitMovementX
          ? ((I = u.webkitMovementX), (U = u.webkitMovementY))
          : "number" === typeof u.mozMovementX
          ? ((I = u.mozMovementX), (U = u.mozMovementY))
          : ((I = u.clientX - q),
            (U = u.clientY - z),
            (q = u.clientX),
            (z = u.clientY));
        w.bus.send("mouse-delta", [0.15 * I, -(0.15 * U)]);
        b &&
          w.bus.send("mouse-absolute", [
            u.pageX - b.offsetLeft,
            u.pageY - b.offsetTop,
            b.offsetWidth,
            b.offsetHeight,
          ]);
      }
    }
    function f(u) {
      c(u) && l(u, !0);
    }
    function k(u) {
      c(u) && l(u, !1);
    }
    function l(u, I) {
      w.bus &&
        (1 === u.which
          ? (n = I)
          : 2 === u.which
          ? (t = I)
          : 3 === u.which && (p = I),
        w.bus.send("mouse-click", [n, t, p]),
        u.preventDefault());
    }
    function m(u) {
      if (c(u)) {
        var I = u.wheelDelta || -u.detail;
        0 > I ? (I = -1) : 0 < I && (I = 1);
        w.bus.send("mouse-wheel", [I, 0]);
        u.preventDefault();
      }
    }
    var n = !1,
      p = !1,
      t = !1,
      q = 0,
      z = 0,
      w = this;
    this.enabled = !1;
    this.emu_enabled = !0;
    this.bus = a;
    this.bus.register(
      "mouse-enable",
      function (u) {
        this.enabled = u;
      },
      this
    );
    this.is_running = !1;
    this.bus.register(
      "emulator-stopped",
      function () {
        this.is_running = !1;
      },
      this
    );
    this.bus.register(
      "emulator-started",
      function () {
        this.is_running = !0;
      },
      this
    );
    this.destroy = function () {
      "undefined" !== typeof window &&
        (window.removeEventListener("touchstart", d, !1),
        window.removeEventListener("touchend", e, !1),
        window.removeEventListener("touchmove", g, !1),
        window.removeEventListener("mousemove", g, !1),
        window.removeEventListener("mousedown", f, !1),
        window.removeEventListener("mouseup", k, !1),
        window.removeEventListener("wheel", m, { passive: !1 }));
    };
    this.init = function () {
      "undefined" !== typeof window &&
        (this.destroy(),
        window.addEventListener("touchstart", d, !1),
        window.addEventListener("touchend", e, !1),
        window.addEventListener("touchmove", g, !1),
        window.addEventListener("mousemove", g, !1),
        window.addEventListener("mousedown", f, !1),
        window.addEventListener("mouseup", k, !1),
        window.addEventListener("wheel", m, { passive: !1 }));
    };
    this.init();
  }
  function nb(a) {
    if ("undefined" !== typeof window)
      if (window.AudioContext || window.webkitAudioContext) {
        var b = window.AudioWorklet ? ob : pb;
        this.bus = a;
        this.audio_context = window.AudioContext
          ? new AudioContext()
          : new webkitAudioContext();
        this.mixer = new qb(a, this.audio_context);
        this.pcspeaker = new rb(a, this.audio_context, this.mixer);
        this.dac = new b(a, this.audio_context, this.mixer);
        this.pcspeaker.start();
        a.register(
          "emulator-stopped",
          function () {
            this.audio_context.suspend();
          },
          this
        );
        a.register(
          "emulator-started",
          function () {
            this.audio_context.resume();
          },
          this
        );
        a.register(
          "speaker-confirm-initialized",
          function () {
            a.send("speaker-has-initialized");
          },
          this
        );
        a.send("speaker-has-initialized");
      } else console.warn("Web browser doesn't support Web Audio API");
  }
  nb.prototype.destroy = function () {
    this.audio_context && this.audio_context.close();
    this.audio_context = null;
    this.dac && this.dac.node_processor && this.dac.node_processor.port.close();
    this.dac = null;
  };
  function qb(a, b) {
    function c(d) {
      return function (e) {
        d.gain.setValueAtTime(e, this.audio_context.currentTime);
      };
    }
    this.audio_context = b;
    this.sources = new Map();
    this.gain_right =
      this.gain_left =
      this.volume_right =
      this.volume_left =
      this.volume_both =
        1;
    this.node_treble_left = this.audio_context.createBiquadFilter();
    this.node_treble_right = this.audio_context.createBiquadFilter();
    this.node_treble_left.type = "highshelf";
    this.node_treble_right.type = "highshelf";
    this.node_treble_left.frequency.setValueAtTime(
      2e3,
      this.audio_context.currentTime
    );
    this.node_treble_right.frequency.setValueAtTime(
      2e3,
      this.audio_context.currentTime
    );
    this.node_bass_left = this.audio_context.createBiquadFilter();
    this.node_bass_right = this.audio_context.createBiquadFilter();
    this.node_bass_left.type = "lowshelf";
    this.node_bass_right.type = "lowshelf";
    this.node_bass_left.frequency.setValueAtTime(
      200,
      this.audio_context.currentTime
    );
    this.node_bass_right.frequency.setValueAtTime(
      200,
      this.audio_context.currentTime
    );
    this.node_gain_left = this.audio_context.createGain();
    this.node_gain_right = this.audio_context.createGain();
    this.node_merger = this.audio_context.createChannelMerger(2);
    this.input_left = this.node_treble_left;
    this.input_right = this.node_treble_right;
    this.node_treble_left.connect(this.node_bass_left);
    this.node_bass_left.connect(this.node_gain_left);
    this.node_gain_left.connect(this.node_merger, 0, 0);
    this.node_treble_right.connect(this.node_bass_right);
    this.node_bass_right.connect(this.node_gain_right);
    this.node_gain_right.connect(this.node_merger, 0, 1);
    this.node_merger.connect(this.audio_context.destination);
    a.register(
      "mixer-connect",
      function (d) {
        this.connect_source(d[0], d[1]);
      },
      this
    );
    a.register(
      "mixer-disconnect",
      function (d) {
        this.disconnect_source(d[0], d[1]);
      },
      this
    );
    a.register(
      "mixer-volume",
      function (d) {
        var e = d[0],
          g = d[1];
        d = Math.pow(10, d[2] / 20);
        e = 0 === e ? this : this.sources.get(e);
        void 0 === e || e.set_volume(d, g);
      },
      this
    );
    a.register(
      "mixer-gain-left",
      function (d) {
        this.gain_left = Math.pow(10, d / 20);
        this.update();
      },
      this
    );
    a.register(
      "mixer-gain-right",
      function (d) {
        this.gain_right = Math.pow(10, d / 20);
        this.update();
      },
      this
    );
    a.register("mixer-treble-left", c(this.node_treble_left), this);
    a.register("mixer-treble-right", c(this.node_treble_right), this);
    a.register("mixer-bass-left", c(this.node_bass_left), this);
    a.register("mixer-bass-right", c(this.node_bass_right), this);
  }
  qb.prototype.add_source = function (a, b) {
    a = new sb(this.audio_context, a, this.input_left, this.input_right);
    this.sources.has(b);
    this.sources.set(b, a);
    return a;
  };
  qb.prototype.connect_source = function (a, b) {
    a = this.sources.get(a);
    void 0 === a || a.connect(b);
  };
  qb.prototype.disconnect_source = function (a, b) {
    a = this.sources.get(a);
    void 0 === a || a.disconnect(b);
  };
  qb.prototype.set_volume = function (a, b) {
    void 0 === b && (b = 2);
    switch (b) {
      case 0:
        this.volume_left = a;
        break;
      case 1:
        this.volume_right = a;
        break;
      case 2:
        this.volume_both = a;
        break;
      default:
        return;
    }
    this.update();
  };
  qb.prototype.update = function () {
    var a = this.volume_both * this.volume_right * this.gain_right;
    this.node_gain_left.gain.setValueAtTime(
      this.volume_both * this.volume_left * this.gain_left,
      this.audio_context.currentTime
    );
    this.node_gain_right.gain.setValueAtTime(a, this.audio_context.currentTime);
  };
  function sb(a, b, c, d) {
    this.audio_context = a;
    this.connected_right = this.connected_left = !0;
    this.volume_right =
      this.volume_left =
      this.volume_both =
      this.gain_hidden =
        1;
    this.node_splitter = a.createChannelSplitter(2);
    this.node_gain_left = a.createGain();
    this.node_gain_right = a.createGain();
    b.connect(this.node_splitter);
    this.node_splitter.connect(this.node_gain_left, 0);
    this.node_gain_left.connect(c);
    this.node_splitter.connect(this.node_gain_right, 1);
    this.node_gain_right.connect(d);
  }
  sb.prototype.update = function () {
    var a =
      this.connected_right *
      this.gain_hidden *
      this.volume_both *
      this.volume_right;
    this.node_gain_left.gain.setValueAtTime(
      this.connected_left *
        this.gain_hidden *
        this.volume_both *
        this.volume_left,
      this.audio_context.currentTime
    );
    this.node_gain_right.gain.setValueAtTime(a, this.audio_context.currentTime);
  };
  sb.prototype.connect = function (a) {
    var b = !a || 2 === a;
    if (b || 0 === a) this.connected_left = !0;
    if (b || 1 === a) this.connected_right = !0;
    this.update();
  };
  sb.prototype.disconnect = function (a) {
    var b = !a || 2 === a;
    if (b || 0 === a) this.connected_left = !1;
    if (b || 1 === a) this.connected_right = !1;
    this.update();
  };
  sb.prototype.set_volume = function (a, b) {
    void 0 === b && (b = 2);
    switch (b) {
      case 0:
        this.volume_left = a;
        break;
      case 1:
        this.volume_right = a;
        break;
      case 2:
        this.volume_both = a;
        break;
      default:
        return;
    }
    this.update();
  };
  sb.prototype.set_gain_hidden = function (a) {
    this.gain_hidden = a;
  };
  function rb(a, b, c) {
    this.node_oscillator = b.createOscillator();
    this.node_oscillator.type = "square";
    this.node_oscillator.frequency.setValueAtTime(440, b.currentTime);
    this.mixer_connection = c.add_source(this.node_oscillator, 1);
    this.mixer_connection.disconnect();
    a.register(
      "pcspeaker-enable",
      function () {
        c.connect_source(1);
      },
      this
    );
    a.register(
      "pcspeaker-disable",
      function () {
        c.disconnect_source(1);
      },
      this
    );
    a.register(
      "pcspeaker-update",
      function (d) {
        var e = d[1],
          g = 0;
        3 === d[0] &&
          ((g = Math.min(
            1193181.6665999999 / e,
            this.node_oscillator.frequency.maxValue
          )),
          (g = Math.max(g, 0)));
        this.node_oscillator.frequency.setValueAtTime(g, b.currentTime);
      },
      this
    );
  }
  rb.prototype.start = function () {
    this.node_oscillator.start();
  };
  function ob(a, b, c) {
    this.bus = a;
    this.audio_context = b;
    this.enabled = !1;
    this.sampling_rate = 48e3;
    b = function () {
      function f(m) {
        if (0 === m) return 1;
        m *= Math.PI;
        return Math.sin(m) / m;
      }
      function k() {
        var m = Reflect.construct(AudioWorkletProcessor, [], k);
        m.kernel_size = 3;
        m.queue_data = Array(1024);
        m.queue_start = 0;
        m.queue_end = 0;
        m.queue_length = 0;
        m.queue_size = m.queue_data.length;
        m.queued_samples = 0;
        m.source_buffer_previous = l;
        m.source_buffer_current = l;
        m.source_samples_per_destination = 1;
        m.source_block_start = 0;
        m.source_time = 0;
        m.source_offset = 0;
        m.port.onmessage = (n) => {
          switch (n.data.type) {
            case "queue":
              m.queue_push(n.data.value);
              break;
            case "sampling-rate":
              m.source_samples_per_destination = n.data.value / sampleRate;
          }
        };
        return m;
      }
      var l = [new Float32Array(256), new Float32Array(256)];
      Reflect.setPrototypeOf(k.prototype, AudioWorkletProcessor.prototype);
      Reflect.setPrototypeOf(k, AudioWorkletProcessor);
      k.prototype.process = k.prototype.process = function (m, n) {
        for (m = 0; m < n[0][0].length; m++) {
          for (
            var p = 0,
              t = 0,
              q = this.source_offset + this.kernel_size,
              z = this.source_offset - this.kernel_size + 1;
            z <= q;
            z++
          ) {
            var w = this.source_block_start + z;
            p += this.get_sample(w, 0) * this.kernel(this.source_time - z);
            t += this.get_sample(w, 1) * this.kernel(this.source_time - z);
          }
          if (isNaN(p) || isNaN(t))
            (p = t = 0), this.dbg_log("ERROR: NaN values! Ignoring for now.");
          n[0][0][m] = p;
          n[0][1][m] = t;
          this.source_time += this.source_samples_per_destination;
          this.source_offset = Math.floor(this.source_time);
        }
        n = this.source_offset;
        n += this.kernel_size + 2;
        this.source_time -= this.source_offset;
        this.source_block_start += this.source_offset;
        this.source_offset = 0;
        this.ensure_enough_data(n);
        return !0;
      };
      k.prototype.kernel = function (m) {
        return f(m) * f(m / this.kernel_size);
      };
      k.prototype.get_sample = function (m, n) {
        return 0 > m
          ? ((m += this.source_buffer_previous[0].length),
            this.source_buffer_previous[n][m])
          : this.source_buffer_current[n][m];
      };
      k.prototype.ensure_enough_data = function (m) {
        var n = this.source_buffer_current[0].length;
        n - this.source_block_start < m &&
          (this.prepare_next_buffer(), (this.source_block_start -= n));
      };
      k.prototype.prepare_next_buffer = function () {
        256 > this.queued_samples &&
          this.queue_length &&
          this.dbg_log(
            "Not enough samples - should not happen during midway of playback"
          );
        this.source_buffer_previous = this.source_buffer_current;
        this.source_buffer_current = this.queue_shift();
        var m = this.source_buffer_current[0].length;
        if (256 > m) {
          for (
            var n = this.queue_start, p = 0;
            256 > m && p < this.queue_length;

          )
            (m += this.queue_data[n][0].length),
              (n = (n + 1) & (this.queue_size - 1)),
              p++;
          m = Math.max(m, 256);
          m = [new Float32Array(m), new Float32Array(m)];
          m[0].set(this.source_buffer_current[0]);
          m[1].set(this.source_buffer_current[1]);
          n = this.source_buffer_current[0].length;
          for (var t = 0; t < p; t++) {
            var q = this.queue_shift();
            m[0].set(q[0], n);
            m[1].set(q[1], n);
            n += q[0].length;
          }
          this.source_buffer_current = m;
        }
        this.pump();
      };
      k.prototype.pump = function () {
        1024 > this.queued_samples / this.source_samples_per_destination &&
          this.port.postMessage({ type: "pump" });
      };
      k.prototype.queue_push = function (m) {
        this.queue_length < this.queue_size &&
          ((this.queue_data[this.queue_end] = m),
          (this.queue_end = (this.queue_end + 1) & (this.queue_size - 1)),
          this.queue_length++,
          (this.queued_samples += m[0].length),
          this.pump());
      };
      k.prototype.queue_shift = function () {
        if (!this.queue_length) return l;
        var m = this.queue_data[this.queue_start];
        this.queue_data[this.queue_start] = null;
        this.queue_start = (this.queue_start + 1) & (this.queue_size - 1);
        this.queue_length--;
        this.queued_samples -= m[0].length;
        return m;
      };
      k.prototype.dbg_log = function () {};
      registerProcessor("dac-processor", k);
    }.toString();
    var d = b.indexOf("{") + 1,
      e = b.lastIndexOf("}");
    b = b.substring(d, e);
    b = new Blob([b], { type: "application/javascript" });
    var g = URL.createObjectURL(b);
    this.node_processor = null;
    this.node_output = this.audio_context.createGain();
    this.audio_context.audioWorklet.addModule(g).then(() => {
      URL.revokeObjectURL(g);
      this.node_processor = new AudioWorkletNode(
        this.audio_context,
        "dac-processor",
        {
          numberOfInputs: 0,
          numberOfOutputs: 1,
          outputChannelCount: [2],
          parameterData: {},
          processorOptions: {},
        }
      );
      this.node_processor.port.postMessage({
        type: "sampling-rate",
        value: this.sampling_rate,
      });
      this.node_processor.port.onmessage = (f) => {
        switch (f.data.type) {
          case "pump":
            this.pump();
        }
      };
      this.node_processor.connect(this.node_output);
    });
    this.mixer_connection = c.add_source(this.node_output, 2);
    this.mixer_connection.set_gain_hidden(3);
    a.register(
      "dac-send-data",
      function (f) {
        this.queue(f);
      },
      this
    );
    a.register(
      "dac-enable",
      function () {
        this.enabled = !0;
      },
      this
    );
    a.register(
      "dac-disable",
      function () {
        this.enabled = !1;
      },
      this
    );
    a.register(
      "dac-tell-sampling-rate",
      function (f) {
        this.sampling_rate = f;
        this.node_processor &&
          this.node_processor.port.postMessage({
            type: "sampling-rate",
            value: f,
          });
      },
      this
    );
  }
  ob.prototype.queue = function (a) {
    this.node_processor &&
      this.node_processor.port.postMessage({ type: "queue", value: a }, [
        a[0].buffer,
        a[1].buffer,
      ]);
  };
  ob.prototype.pump = function () {
    this.enabled && this.bus.send("dac-request-data");
  };
  function pb(a, b, c) {
    this.bus = a;
    this.audio_context = b;
    this.enabled = !1;
    this.sampling_rate = 22050;
    this.buffered_time = 0;
    this.rate_ratio = 1;
    this.node_lowpass = this.audio_context.createBiquadFilter();
    this.node_lowpass.type = "lowpass";
    this.node_output = this.node_lowpass;
    this.mixer_connection = c.add_source(this.node_output, 2);
    this.mixer_connection.set_gain_hidden(3);
    a.register(
      "dac-send-data",
      function (d) {
        this.queue(d);
      },
      this
    );
    a.register(
      "dac-enable",
      function () {
        this.enabled = !0;
        this.pump();
      },
      this
    );
    a.register(
      "dac-disable",
      function () {
        this.enabled = !1;
      },
      this
    );
    a.register(
      "dac-tell-sampling-rate",
      function (d) {
        this.sampling_rate = d;
        this.rate_ratio = Math.ceil(8e3 / d);
        this.node_lowpass.frequency.setValueAtTime(
          d / 2,
          this.audio_context.currentTime
        );
      },
      this
    );
  }
  pb.prototype.queue = function (a) {
    var b = a[0].length,
      c = b / this.sampling_rate;
    if (1 < this.rate_ratio) {
      var d = this.audio_context.createBuffer(
        2,
        b * this.rate_ratio,
        this.sampling_rate * this.rate_ratio
      );
      for (
        var e = d.getChannelData(0), g = d.getChannelData(1), f = 0, k = 0;
        k < b;
        k++
      )
        for (var l = 0; l < this.rate_ratio; l++, f++)
          (e[f] = a[0][k]), (g[f] = a[1][k]);
    } else
      (d = this.audio_context.createBuffer(2, b, this.sampling_rate)),
        d.copyToChannel
          ? (d.copyToChannel(a[0], 0), d.copyToChannel(a[1], 1))
          : (d.getChannelData(0).set(a[0]), d.getChannelData(1).set(a[1]));
    a = this.audio_context.createBufferSource();
    a.buffer = d;
    a.connect(this.node_lowpass);
    a.addEventListener("ended", this.pump.bind(this));
    d = this.audio_context.currentTime;
    if (this.buffered_time < d)
      for (this.buffered_time = d, d = 0.2 - c, b = 0; b <= d; )
        (b += c),
          (this.buffered_time += c),
          setTimeout(() => this.pump(), 1e3 * b);
    a.start(this.buffered_time);
    this.buffered_time += c;
    setTimeout(() => this.pump(), 0);
  };
  pb.prototype.pump = function () {
    this.enabled &&
      (0.2 < this.buffered_time - this.audio_context.currentTime ||
        this.bus.send("dac-request-data"));
  };
  function tb(a, b) {
    function c(k) {
      f.bus && f.enabled && (f.send_char(k.which), k.preventDefault());
    }
    function d(k) {
      var l = k.which;
      8 === l
        ? (f.send_char(127), k.preventDefault())
        : 9 === l && (f.send_char(9), k.preventDefault());
    }
    function e(k) {
      if (f.enabled) {
        for (
          var l = k.clipboardData.getData("text/plain"), m = 0;
          m < l.length;
          m++
        )
          f.send_char(l.charCodeAt(m));
        k.preventDefault();
      }
    }
    function g(k) {
      k.target !== a && a.blur();
    }
    var f = this;
    this.enabled = !0;
    this.bus = b;
    this.text = "";
    this.text_new_line = !1;
    this.last_update = 0;
    this.bus.register(
      "serial0-output-byte",
      function (k) {
        k = String.fromCharCode(k);
        this.show_char(k);
      },
      this
    );
    this.destroy = function () {
      a.removeEventListener("keypress", c, !1);
      a.removeEventListener("keydown", d, !1);
      a.removeEventListener("paste", e, !1);
      window.removeEventListener("mousedown", g, !1);
    };
    this.init = function () {
      this.destroy();
      a.style.display = "block";
      a.addEventListener("keypress", c, !1);
      a.addEventListener("keydown", d, !1);
      a.addEventListener("paste", e, !1);
      window.addEventListener("mousedown", g, !1);
    };
    this.init();
    this.show_char = function (k) {
      "\b" === k
        ? ((this.text = this.text.slice(0, -1)), this.update())
        : "\r" !== k &&
          ((this.text += k),
          "\n" === k && (this.text_new_line = !0),
          this.update());
    };
    this.update = function () {
      var k = Date.now(),
        l = k - this.last_update;
      16 > l
        ? void 0 === this.update_timer &&
          (this.update_timer = setTimeout(() => {
            this.update_timer = void 0;
            this.last_update = Date.now();
            this.render();
          }, 16 - l))
        : (void 0 !== this.update_timer &&
            (clearTimeout(this.update_timer), (this.update_timer = void 0)),
          (this.last_update = k),
          this.render());
    };
    this.render = function () {
      a.value = this.text;
      this.text_new_line && ((this.text_new_line = !1), (a.scrollTop = 1e9));
    };
    this.send_char = function (k) {
      f.bus && f.bus.send("serial0-input", k);
    };
  }
  function ub(a, b) {
    this.element = a;
    if (window.Terminal) {
      var c = (this.term = new window.Terminal({ logLevel: "off" }));
      c.write(
        "This is the serial console. Whatever you type or paste here will be sent to COM1"
      );
      var d = c.onData(function (e) {
        for (let g = 0; g < e.length; g++)
          b.send("serial0-input", e.charCodeAt(g));
      });
      b.register(
        "serial0-output-byte",
        function (e) {
          c.write(Uint8Array.of(e));
        },
        this
      );
      this.destroy = function () {
        d.dispose();
        c.dispose();
      };
    }
  }
  ub.prototype.show = function () {
    this.term && this.term.open(this.element);
  };
  function vb(a, b) {
    this.bus = b;
    this.socket = void 0;
    this.send_queue = [];
    this.url = a;
    this.reconnect_interval = 1e4;
    this.last_connect_attempt = Date.now() - this.reconnect_interval;
    this.send_queue_limit = 64;
    this.bus.register(
      "net0-send",
      function (c) {
        this.send(c);
      },
      this
    );
  }
  vb.prototype.handle_message = function (a) {
    this.bus && this.bus.send("net0-receive", new Uint8Array(a.data));
  };
  vb.prototype.handle_close = function () {
    this.connect();
    setTimeout(this.connect.bind(this), this.reconnect_interval);
  };
  vb.prototype.handle_open = function () {
    for (var a = 0; a < this.send_queue.length; a++)
      this.send(this.send_queue[a]);
    this.send_queue = [];
  };
  vb.prototype.handle_error = function () {};
  vb.prototype.destroy = function () {
    this.socket && this.socket.close();
  };
  vb.prototype.connect = function () {
    if ("undefined" !== typeof WebSocket) {
      if (this.socket) {
        var a = this.socket.readyState;
        if (0 === a || 1 === a) return;
      }
      a = Date.now();
      this.last_connect_attempt + this.reconnect_interval > a ||
        ((this.last_connect_attempt = Date.now()),
        (this.socket = new WebSocket(this.url)),
        (this.socket.binaryType = "arraybuffer"),
        (this.socket.onopen = this.handle_open.bind(this)),
        (this.socket.onmessage = this.handle_message.bind(this)),
        (this.socket.onclose = this.handle_close.bind(this)),
        (this.socket.onerror = this.handle_error.bind(this)));
    }
  };
  vb.prototype.send = function (a) {
    this.socket && 1 === this.socket.readyState
      ? this.socket.send(a)
      : (this.send_queue.push(a),
        this.send_queue.length > 2 * this.send_queue_limit &&
          (this.send_queue = this.send_queue.slice(-this.send_queue_limit)),
        this.connect());
  };
  vb.prototype.change_proxy = function (a) {
    this.url = a;
    this.socket &&
      ((this.socket.onclose = function () {}),
      (this.socket.onerror = function () {}),
      this.socket.close(),
      (this.socket = void 0));
  };
  function Y(a) {
    this.cpu_is_running = !1;
    this.cpu_exception_hook = function () {};
    var b = Xa.create();
    this.bus = b[0];
    this.emulator_bus = b[1];
    var c, d;
    const e = new WebAssembly.Table({ element: "anyfunc", initial: 1924 });
    b = {
      cpu_exception_hook: (f) => this.cpu_exception_hook(f),
      run_hardware_timers: function (f, k) {
        return c.run_hardware_timers(f, k);
      },
      cpu_event_halt: () => {
        this.emulator_bus.send("cpu-event-halt");
      },
      abort: function () {},
      microtick: D.microtick,
      get_rand_int: function () {
        return r.get_rand_int();
      },
      apic_acknowledge_irq: function () {
        return c.devices.apic.acknowledge_irq();
      },
      io_port_read8: function (f) {
        return c.io.port_read8(f);
      },
      io_port_read16: function (f) {
        return c.io.port_read16(f);
      },
      io_port_read32: function (f) {
        return c.io.port_read32(f);
      },
      io_port_write8: function (f, k) {
        c.io.port_write8(f, k);
      },
      io_port_write16: function (f, k) {
        c.io.port_write16(f, k);
      },
      io_port_write32: function (f, k) {
        c.io.port_write32(f, k);
      },
      mmap_read8: function (f) {
        return c.mmap_read8(f);
      },
      mmap_read16: function (f) {
        return c.mmap_read16(f);
      },
      mmap_read32: function (f) {
        return c.mmap_read32(f);
      },
      mmap_write8: function (f, k) {
        c.mmap_write8(f, k);
      },
      mmap_write16: function (f, k) {
        c.mmap_write16(f, k);
      },
      mmap_write32: function (f, k) {
        c.mmap_write32(f, k);
      },
      mmap_write64: function (f, k, l) {
        c.mmap_write64(f, k, l);
      },
      mmap_write128: function (f, k, l, m, n) {
        c.mmap_write128(f, k, l, m, n);
      },
      log_from_wasm: function (f, k) {
        r.read_sized_string_from_mem(d, f, k);
      },
      console_log_from_wasm: function (f, k) {
        f = r.read_sized_string_from_mem(d, f, k);
        console.error(f);
      },
      dbg_trace_from_wasm: function () {},
      codegen_finalize: (f, k, l, m, n) => {
        c.codegen_finalize(f, k, l, m, n);
      },
      jit_clear_func: (f) => c.jit_clear_func(f),
      jit_clear_all_funcs: () => c.jit_clear_all_funcs(),
      __indirect_function_table: e,
    };
    let g = a.wasm_fn;
    g ||
      (g = (f) =>
        new Promise((k) => {
          let l = "v86.wasm",
            m = "v86-fallback.wasm";
          if (a.wasm_path) {
            l = a.wasm_path;
            const n = l.lastIndexOf("/");
            m = (-1 === n ? "" : l.substr(0, n)) + "/" + m;
          } else
            "undefined" === typeof window && "string" === typeof __dirname
              ? ((l = __dirname + "/" + l), (m = __dirname + "/" + m))
              : ((l = "build/" + l), (m = "build/" + m));
          r.load_file(l, {
            done: async (n) => {
              try {
                const { instance: p } = await WebAssembly.instantiate(n, f);
                this.wasm_source = n;
                k(p.exports);
              } catch (p) {
                r.load_file(m, {
                  done: async (t) => {
                    const { instance: q } = await WebAssembly.instantiate(t, f);
                    this.wasm_source = t;
                    k(q.exports);
                  },
                });
              }
            },
            progress: (n) => {
              this.emulator_bus.send("download-progress", {
                file_index: 0,
                file_count: 1,
                file_name: l,
                lengthComputable: n.lengthComputable,
                total: n.total,
                loaded: n.loaded,
              });
            },
          });
        }));
    g({ env: b }).then((f) => {
      d = f.memory;
      f.rust_init();
      f = this.v86 = new D(this.emulator_bus, { exports: f, wasm_table: e });
      c = f.cpu;
      this.continue_init(f, a);
    });
    this.zstd_worker = null;
    this.zstd_worker_request_id = 0;
  }
  Y.prototype.continue_init = async function (a, b) {
    function c(t, q) {
      switch (t) {
        case "hda":
          e.hda = this.disk_images.hda = q;
          break;
        case "hdb":
          e.hdb = this.disk_images.hdb = q;
          break;
        case "cdrom":
          e.cdrom = this.disk_images.cdrom = q;
          break;
        case "fda":
          e.fda = this.disk_images.fda = q;
          break;
        case "fdb":
          e.fdb = this.disk_images.fdb = q;
          break;
        case "multiboot":
          e.multiboot = this.disk_images.multiboot = q.buffer;
          break;
        case "bzimage":
          e.bzimage = this.disk_images.bzimage = q.buffer;
          break;
        case "initrd":
          e.initrd = this.disk_images.initrd = q.buffer;
          break;
        case "bios":
          e.bios = q.buffer;
          break;
        case "vga_bios":
          e.vga_bios = q.buffer;
          break;
        case "initial_state":
          e.initial_state = q.buffer;
          break;
        case "fs9p_json":
          e.fs9p_json = q;
      }
    }
    async function d() {
      if (
        e.fs9p &&
        e.fs9p_json &&
        (e.initial_state || e.fs9p.load_from_json(e.fs9p_json),
        b.bzimage_initrd_from_filesystem)
      ) {
        const { bzimage_path: t, initrd_path: q } =
            this.get_bzimage_initrd_from_filesystem(e.fs9p),
          [z, w] = await Promise.all([
            e.fs9p.read_file(q),
            e.fs9p.read_file(t),
          ]);
        c.call(this, "initrd", new r.SyncBuffer(z.buffer));
        c.call(this, "bzimage", new r.SyncBuffer(w.buffer));
      }
      this.serial_adapter &&
        this.serial_adapter.show &&
        this.serial_adapter.show();
      this.bus.send("cpu-init", e);
      e.initial_state &&
        (a.restore_state(e.initial_state), (e.initial_state = void 0));
      b.autostart && this.bus.send("cpu-run");
      this.emulator_bus.send("emulator-loaded");
    }
    this.bus.register(
      "emulator-stopped",
      function () {
        this.cpu_is_running = !1;
      },
      this
    );
    this.bus.register(
      "emulator-started",
      function () {
        this.cpu_is_running = !0;
      },
      this
    );
    var e = {};
    this.disk_images = {
      fda: void 0,
      fdb: void 0,
      hda: void 0,
      hdb: void 0,
      cdrom: void 0,
    };
    var g = b.boot_order ? b.boot_order : b.fda ? 801 : b.hda ? 786 : 291;
    e.acpi = b.acpi;
    e.disable_jit = b.disable_jit;
    e.load_devices = !0;
    e.log_level = b.log_level;
    e.memory_size = b.memory_size || 67108864;
    e.vga_memory_size = b.vga_memory_size || 8388608;
    e.boot_order = g;
    e.fastboot = b.fastboot || !1;
    e.fda = void 0;
    e.fdb = void 0;
    e.uart1 = b.uart1;
    e.uart2 = b.uart2;
    e.uart3 = b.uart3;
    e.cmdline = b.cmdline;
    e.preserve_mac_from_state_image = b.preserve_mac_from_state_image;
    e.mac_address_translation = b.mac_address_translation;
    e.cpuid_level = b.cpuid_level;
    e.virtio_console = b.virtio_console;
    b.network_adapter
      ? (this.network_adapter = b.network_adapter(this.bus))
      : b.network_relay_url &&
        (this.network_adapter = new vb(b.network_relay_url, this.bus));
    e.enable_ne2k = !0;
    b.disable_keyboard || (this.keyboard_adapter = new lb(this.bus));
    b.disable_mouse ||
      (this.mouse_adapter = new mb(this.bus, b.screen_container));
    b.screen_container
      ? (this.screen_adapter = new ba(b.screen_container, this.bus))
      : b.screen_dummy && (this.screen_adapter = new wb(this.bus));
    b.serial_container &&
      (this.serial_adapter = new tb(b.serial_container, this.bus));
    b.serial_container_xtermjs &&
      (this.serial_adapter = new ub(b.serial_container_xtermjs, this.bus));
    b.disable_speaker || (this.speaker_adapter = new nb(this.bus));
    var f = [];
    g = (t, q) => {
      if (q)
        if (q.get && q.set && q.load) f.push({ name: t, loadable: q });
        else {
          if (
            "bios" === t ||
            "vga_bios" === t ||
            "initial_state" === t ||
            "multiboot" === t ||
            "bzimage" === t ||
            "initrd" === t
          )
            q.async = !1;
          q.url && !q.async
            ? f.push({ name: t, url: q.url, size: q.size })
            : f.push({
                name: t,
                loadable: r.buffer_from_object(
                  q,
                  this.zstd_decompress_worker.bind(this)
                ),
              });
        }
    };
    b.state &&
      console.warn(
        "Warning: Unknown option 'state'. Did you mean 'initial_state'?"
      );
    g("bios", b.bios);
    g("vga_bios", b.vga_bios);
    g("cdrom", b.cdrom);
    g("hda", b.hda);
    g("hdb", b.hdb);
    g("fda", b.fda);
    g("fdb", b.fdb);
    g("initial_state", b.initial_state);
    g("multiboot", b.multiboot);
    g("bzimage", b.bzimage);
    g("initrd", b.initrd);
    if (b.filesystem) {
      g = b.filesystem.basefs;
      var k = b.filesystem.baseurl;
      let t = new xb();
      k && (t = new yb(t, k));
      e.fs9p = this.fs9p = new Z(t);
      if (g) {
        if ("object" === typeof g) {
          var l = g.size;
          g = g.url;
        }
        f.push({ name: "fs9p_json", url: g, size: l, as_json: !0 });
      }
    }
    var m = this,
      n = f.length,
      p = function (t) {
        if (t === n) setTimeout(d.bind(this), 0);
        else {
          var q = f[t];
          q.loadable
            ? ((q.loadable.onload = function () {
                c.call(this, q.name, q.loadable);
                p(t + 1);
              }.bind(this)),
              q.loadable.load())
            : r.load_file(q.url, {
                done: function (z) {
                  q.url.endsWith(".zst") &&
                    "initial_state" !== q.name &&
                    (z = this.zstd_decompress(q.size, new Uint8Array(z)));
                  c.call(this, q.name, q.as_json ? z : new r.SyncBuffer(z));
                  p(t + 1);
                }.bind(this),
                progress: function (z) {
                  200 === z.target.status
                    ? m.emulator_bus.send("download-progress", {
                        file_index: t,
                        file_count: n,
                        file_name: q.url,
                        lengthComputable: z.lengthComputable,
                        total: z.total || q.size,
                        loaded: z.loaded,
                      })
                    : m.emulator_bus.send("download-error", {
                        file_index: t,
                        file_count: n,
                        file_name: q.url,
                        request: z.target,
                      });
                },
                as_json: q.as_json,
              });
        }
      }.bind(this);
    p(0);
  };
  Y.prototype.zstd_decompress = function (a, b) {
    const c = this.v86.cpu;
    this.zstd_context = c.zstd_create_ctx(b.length);
    new Uint8Array(c.wasm_memory.buffer).set(
      b,
      c.zstd_get_src_ptr(this.zstd_context)
    );
    b = c.zstd_read(this.zstd_context, a);
    const d = c.wasm_memory.buffer.slice(b, b + a);
    c.zstd_read_free(b, a);
    c.zstd_free_ctx(this.zstd_context);
    this.zstd_context = null;
    return d;
  };
  Y.prototype.zstd_decompress_worker = async function (a, b) {
    if (!this.zstd_worker) {
      const c = URL.createObjectURL(
        new Blob(
          [
            "(" +
              function () {
                let d;
                globalThis.onmessage = function (e) {
                  if (d) {
                    var { src: g, decompressed_size: f, id: k } = e.data;
                    e = d.exports;
                    var l = e.zstd_create_ctx(g.length);
                    new Uint8Array(e.memory.buffer).set(
                      g,
                      e.zstd_get_src_ptr(l)
                    );
                    var m = e.zstd_read(l, f),
                      n = e.memory.buffer.slice(m, m + f);
                    e.zstd_read_free(m, f);
                    e.zstd_free_ctx(l);
                    postMessage({ result: n, id: k }, [n]);
                  } else
                    (l = Object.fromEntries(
                      "cpu_exception_hook run_hardware_timers cpu_event_halt microtick get_rand_int apic_acknowledge_irq io_port_read8 io_port_read16 io_port_read32 io_port_write8 io_port_write16 io_port_write32 mmap_read8 mmap_read16 mmap_read32 mmap_write8 mmap_write16 mmap_write32 mmap_write64 mmap_write128 codegen_finalize jit_clear_func jit_clear_all_funcs"
                        .split(" ")
                        .map((p) => [
                          p,
                          () =>
                            console.error(
                              "zstd worker unexpectedly called " + p
                            ),
                        ])
                    )),
                      (l.__indirect_function_table = new WebAssembly.Table({
                        element: "anyfunc",
                        initial: 1024,
                      })),
                      (l.abort = () => {
                        throw Error("zstd worker aborted");
                      }),
                      (l.log_from_wasm = l.console_log_from_wasm =
                        (p, t) => {
                          console.log(
                            String.fromCharCode(
                              ...new Uint8Array(d.exports.memory.buffer, p, t)
                            )
                          );
                        }),
                      (l.dbg_trace_from_wasm = () => console.trace()),
                      (d = new WebAssembly.Instance(
                        new WebAssembly.Module(e.data),
                        { env: l }
                      ));
                };
              }.toString() +
              ")()",
          ],
          { type: "text/javascript" }
        )
      );
      this.zstd_worker = new Worker(c);
      URL.revokeObjectURL(c);
      this.zstd_worker.postMessage(this.wasm_source, [this.wasm_source]);
    }
    return new Promise((c) => {
      const d = this.zstd_worker_request_id++,
        e = async (g) => {
          g.data.id === d &&
            (this.zstd_worker.removeEventListener("message", e),
            c(g.data.result));
        };
      this.zstd_worker.addEventListener("message", e);
      this.zstd_worker.postMessage({ src: b, decompressed_size: a, id: d }, [
        b.buffer,
      ]);
    });
  };
  Y.prototype.get_bzimage_initrd_from_filesystem = function (a) {
    const b = (a.read_dir("/") || []).map((e) => "/" + e);
    a = (a.read_dir("/boot/") || []).map((e) => "/boot/" + e);
    let c, d;
    for (let e of [].concat(b, a)) {
      const g = /old/i.test(e) || /fallback/i.test(e),
        f = /vmlinuz/i.test(e) || /bzimage/i.test(e),
        k = /initrd/i.test(e) || /initramfs/i.test(e);
      !f || (d && g) || (d = e);
      !k || (c && g) || (c = e);
    }
    (c && d) ||
      (console.log("Failed to find bzimage or initrd in filesystem. Files:"),
      console.log(b.join(" ")),
      console.log(a.join(" ")));
    return { initrd_path: c, bzimage_path: d };
  };
  Y.prototype.run = async function () {
    this.bus.send("cpu-run");
  };
  F.exportProperty(Y.prototype, "run", Y.prototype.run);
  Y.prototype.stop = async function () {
    this.cpu_is_running &&
      (await new Promise((a) => {
        const b = () => {
          this.remove_listener("emulator-stopped", b);
          a();
        };
        this.add_listener("emulator-stopped", b);
        this.bus.send("cpu-stop");
      }));
  };
  F.exportProperty(Y.prototype, "stop", Y.prototype.stop);
  Y.prototype.destroy = async function () {
    await this.stop();
    this.v86.destroy();
    this.keyboard_adapter && this.keyboard_adapter.destroy();
    this.network_adapter && this.network_adapter.destroy();
    this.mouse_adapter && this.mouse_adapter.destroy();
    this.screen_adapter && this.screen_adapter.destroy();
    this.serial_adapter && this.serial_adapter.destroy();
    this.speaker_adapter && this.speaker_adapter.destroy();
  };
  F.exportProperty(Y.prototype, "destroy", Y.prototype.destroy);
  Y.prototype.restart = function () {
    this.bus.send("cpu-restart");
  };
  F.exportProperty(Y.prototype, "restart", Y.prototype.restart);
  Y.prototype.add_listener = function (a, b) {
    this.bus.register(a, b, this);
  };
  F.exportProperty(Y.prototype, "add_listener", Y.prototype.add_listener);
  Y.prototype.remove_listener = function (a, b) {
    this.bus.unregister(a, b);
  };
  F.exportProperty(Y.prototype, "remove_listener", Y.prototype.remove_listener);
  Y.prototype.restore_state = async function (a) {
    this.v86.restore_state(a);
  };
  F.exportProperty(Y.prototype, "restore_state", Y.prototype.restore_state);
  Y.prototype.save_state = async function () {
    return this.v86.save_state();
  };
  F.exportProperty(Y.prototype, "save_state", Y.prototype.save_state);
  Y.prototype.get_instruction_counter = function () {
    return this.v86 ? this.v86.cpu.instruction_counter[0] >>> 0 : 0;
  };
  F.exportProperty(
    Y.prototype,
    "get_instruction_counter",
    Y.prototype.get_instruction_counter
  );
  Y.prototype.is_running = function () {
    return this.cpu_is_running;
  };
  F.exportProperty(Y.prototype, "is_running", Y.prototype.is_running);
  Y.prototype.set_fda = async function (a) {
    if (a.url && !a.async)
      r.load_file(a.url, {
        done: (b) => {
          this.v86.cpu.devices.fdc.set_fda(new r.SyncBuffer(b));
        },
      });
    else {
      const b = r.buffer_from_object(a, this.zstd_decompress_worker.bind(this));
      b.onload = () => {
        this.v86.cpu.devices.fdc.set_fda(b);
      };
      await b.load();
    }
  };
  F.exportProperty(Y.prototype, "set_fda", Y.prototype.set_fda);
  Y.prototype.eject_fda = function () {
    this.v86.cpu.devices.fdc.eject_fda();
  };
  F.exportProperty(Y.prototype, "eject_fda", Y.prototype.eject_fda);
  Y.prototype.keyboard_send_scancodes = function (a) {
    for (var b = 0; b < a.length; b++) this.bus.send("keyboard-code", a[b]);
  };
  F.exportProperty(
    Y.prototype,
    "keyboard_send_scancodes",
    Y.prototype.keyboard_send_scancodes
  );
  Y.prototype.keyboard_send_keys = function (a) {
    for (var b = 0; b < a.length; b++)
      this.keyboard_adapter.simulate_press(a[b]);
  };
  F.exportProperty(
    Y.prototype,
    "keyboard_send_keys",
    Y.prototype.keyboard_send_keys
  );
  Y.prototype.keyboard_send_text = function (a) {
    for (var b = 0; b < a.length; b++)
      this.keyboard_adapter.simulate_char(a[b]);
  };
  F.exportProperty(
    Y.prototype,
    "keyboard_send_text",
    Y.prototype.keyboard_send_text
  );
  Y.prototype.screen_make_screenshot = function () {
    return this.screen_adapter ? this.screen_adapter.make_screenshot() : null;
  };
  F.exportProperty(
    Y.prototype,
    "screen_make_screenshot",
    Y.prototype.screen_make_screenshot
  );
  Y.prototype.screen_set_scale = function (a, b) {
    this.screen_adapter && this.screen_adapter.set_scale(a, b);
  };
  F.exportProperty(
    Y.prototype,
    "screen_set_scale",
    Y.prototype.screen_set_scale
  );
  Y.prototype.screen_go_fullscreen = function () {
    if (this.screen_adapter) {
      var a = document.getElementById("screen_container");
      if (a) {
        var b =
          a.requestFullScreen ||
          a.webkitRequestFullscreen ||
          a.mozRequestFullScreen ||
          a.msRequestFullScreen;
        b &&
          (b.call(a),
          (a = document.getElementsByClassName("phone_keyboard")[0]) &&
            a.focus());
        try {
          navigator.keyboard.lock();
        } catch (c) {}
        this.lock_mouse();
      }
    }
  };
  F.exportProperty(
    Y.prototype,
    "screen_go_fullscreen",
    Y.prototype.screen_go_fullscreen
  );
  Y.prototype.lock_mouse = function () {
    var a = document.body,
      b =
        a.requestPointerLock ||
        a.mozRequestPointerLock ||
        a.webkitRequestPointerLock;
    b && b.call(a);
  };
  F.exportProperty(Y.prototype, "lock_mouse", Y.prototype.lock_mouse);
  Y.prototype.mouse_set_status = function (a) {
    this.mouse_adapter && (this.mouse_adapter.emu_enabled = a);
  };
  Y.prototype.keyboard_set_status = function (a) {
    this.keyboard_adapter && (this.keyboard_adapter.emu_enabled = a);
  };
  F.exportProperty(
    Y.prototype,
    "keyboard_set_status",
    Y.prototype.keyboard_set_status
  );
  Y.prototype.serial0_send = function (a) {
    for (var b = 0; b < a.length; b++)
      this.bus.send("serial0-input", a.charCodeAt(b));
  };
  F.exportProperty(Y.prototype, "serial0_send", Y.prototype.serial0_send);
  Y.prototype.serial_send_bytes = function (a, b) {
    for (var c = 0; c < b.length; c++)
      this.bus.send("serial" + a + "-input", b[c]);
  };
  F.exportProperty(
    Y.prototype,
    "serial_send_bytes",
    Y.prototype.serial_send_bytes
  );
  Y.prototype.serial_set_modem_status = function (a, b) {
    this.bus.send("serial" + a + "-modem-status-input", b);
  };
  Y.prototype.serial_set_carrier_detect = function (a, b) {
    this.bus.send("serial" + a + "-carrier-detect-input", b);
  };
  Y.prototype.serial_set_ring_indicator = function (a, b) {
    this.bus.send("serial" + a + "-ring-indicator-input", b);
  };
  Y.prototype.serial_set_data_set_ready = function (a, b) {
    this.bus.send("serial" + a + "-data-set-ready-input", b);
  };
  Y.prototype.serial_set_clear_to_send = function (a, b) {
    this.bus.send("serial" + a + "-clear-to-send-input", b);
  };
  Y.prototype.mount_fs = async function (a, b, c, d) {
    let e = new xb();
    b && (e = new yb(e, b));
    const g = new Z(e, this.fs9p.qidcounter),
      f = () => {
        const k = this.fs9p.Mount(a, g);
        d &&
          (-2 === k
            ? d(new zb())
            : -17 === k
            ? d(new Db())
            : 0 > k
            ? d(Error("Failed to mount. Error number: " + -k))
            : d(null));
      };
    b ? g.load_from_json(c, () => f()) : f();
  };
  F.exportProperty(Y.prototype, "mount_fs", Y.prototype.mount_fs);
  Y.prototype.create_file = async function (a, b) {
    var c = this.fs9p;
    if (c) {
      var d = a.split("/");
      d = d[d.length - 1];
      a = c.SearchPath(a).parentid;
      if ("" !== d && -1 !== a) await c.CreateBinaryFile(d, a, b);
      else return Promise.reject(new zb());
    }
  };
  F.exportProperty(Y.prototype, "create_file", Y.prototype.create_file);
  Y.prototype.read_file = async function (a) {
    var b = this.fs9p;
    if (b) return (a = await b.read_file(a)) ? a : Promise.reject(new zb());
  };
  F.exportProperty(Y.prototype, "read_file", Y.prototype.read_file);
  Y.prototype.automatically = function (a) {
    const b = (c) => {
      const d = c[0];
      if (d) {
        var e = c.slice(1);
        if (d.sleep) setTimeout(() => b(e), 1e3 * d.sleep);
        else if (d.vga_text) {
          const g = this.screen_adapter.get_text_screen();
          for (let f of g)
            if (f.includes(d.vga_text)) {
              b(e);
              return;
            }
          setTimeout(() => b(c), 1e3);
        } else
          d.keyboard_send
            ? (d.keyboard_send instanceof Array
                ? this.keyboard_send_scancodes(d.keyboard_send)
                : this.keyboard_send_text(d.keyboard_send),
              b(e))
            : d.call && (d.call(), b(e));
      }
    };
    b(a);
  };
  Y.prototype.read_memory = function (a, b) {
    return this.v86.cpu.read_blob(a, b);
  };
  Y.prototype.write_memory = function (a, b) {
    this.v86.cpu.write_blob(a, b);
  };
  Y.prototype.set_serial_container_xtermjs = function (a) {
    this.serial_adapter &&
      this.serial_adapter.destroy &&
      this.serial_adapter.destroy();
    this.serial_adapter = new ub(a, this.bus);
    this.serial_adapter.show();
  };
  function Db(a) {
    this.message = a || "File already exists";
  }
  Db.prototype = Error.prototype;
  function zb(a) {
    this.message = a || "File not found";
  }
  zb.prototype = Error.prototype;
  "undefined" !== typeof window
    ? ((window.V86Starter = Y), (window.V86 = Y))
    : "undefined" !== typeof module && "undefined" !== typeof module.exports
    ? ((module.exports.V86Starter = Y), (module.exports.V86 = Y))
    : "function" === typeof importScripts &&
      ((self.V86Starter = Y), (self.V86 = Y));
  var Eb = {
    Connector: function (a) {
      this.listeners = {};
      this.pair = a;
      a.addEventListener(
        "message",
        function (b) {
          b = b.data;
          for (var c = this.listeners[b[0]], d = 0; d < c.length; d++) {
            var e = c[d];
            e.fn.call(e.this_value, b[1]);
          }
        }.bind(this),
        !1
      );
    },
  };
  Eb.Connector.prototype.register = function (a, b, c) {
    var d = this.listeners[a];
    void 0 === d && (d = this.listeners[a] = []);
    d.push({ fn: b, this_value: c });
  };
  Eb.Connector.prototype.send = function (a, b, c) {
    this.pair && this.pair.postMessage([a, b], c);
  };
  Eb.init = function (a) {
    return new Eb.Connector(a);
  };
  function wb(a) {
    var b, c, d, e, g;
    this.bus = a;
    a.register(
      "screen-set-mode",
      function (f) {
        this.set_mode(f);
      },
      this
    );
    a.register(
      "screen-fill-buffer-end",
      function (f) {
        this.update_buffer(f[0], f[1]);
      },
      this
    );
    a.register(
      "screen-put-char",
      function (f) {
        this.put_char(f[0], f[1], f[2], f[3], f[4]);
      },
      this
    );
    a.register(
      "screen-text-scroll",
      function (f) {
        console.log("scroll", f);
      },
      this
    );
    a.register(
      "screen-update-cursor",
      function (f) {
        this.update_cursor(f[0], f[1]);
      },
      this
    );
    a.register(
      "screen-update-cursor-scanline",
      function (f) {
        this.update_cursor_scanline(f[0], f[1]);
      },
      this
    );
    a.register(
      "screen-set-size-text",
      function (f) {
        this.set_size_text(f[0], f[1]);
      },
      this
    );
    a.register(
      "screen-set-size-graphical",
      function (f) {
        this.set_size_graphical(f[0], f[1]);
      },
      this
    );
    this.put_char = function (f, k, l, m, n) {
      f < g &&
        k < e &&
        ((f = 3 * (f * e + k)), (d[f] = l), (d[f + 1] = m), (d[f + 2] = n));
    };
    this.destroy = function () {};
    this.set_mode = function () {};
    this.clear_screen = function () {};
    this.set_size_text = function (f, k) {
      if (f !== e || k !== g) (d = new Int32Array(f * k * 3)), (e = f), (g = k);
    };
    this.set_size_graphical = function () {};
    this.set_scale = function () {};
    this.update_cursor_scanline = function () {};
    this.update_cursor = function (f, k) {
      if (f !== b || k !== c) (b = f), (c = k);
    };
    this.update_buffer = function () {};
    this.get_text_screen = function () {
      for (var f = [], k = 0; k < g; k++) f.push(this.get_text_row(k));
      return f;
    };
    this.get_text_row = function (f) {
      var k = "";
      f = 3 * f * e;
      for (var l = 0; l < e; l++) k += String.fromCharCode(d[f + 3 * l]);
      return k;
    };
  }
  const Fb = {
    stats_to_string: function (a) {
      return Fb.print_misc_stats(a) + Fb.print_instruction_counts(a);
    },
    print_misc_stats: function (a) {
      let b = "";
      var c =
          "COMPILE COMPILE_SKIPPED_NO_NEW_ENTRY_POINTS COMPILE_WRONG_ADDRESS_SPACE COMPILE_CUT_OFF_AT_END_OF_PAGE COMPILE_WITH_LOOP_SAFETY COMPILE_PAGE COMPILE_PAGE/COMPILE COMPILE_BASIC_BLOCK COMPILE_DUPLICATED_BASIC_BLOCK COMPILE_WASM_BLOCK COMPILE_WASM_LOOP COMPILE_DISPATCHER COMPILE_ENTRY_POINT COMPILE_WASM_TOTAL_BYTES COMPILE_WASM_TOTAL_BYTES/COMPILE_PAGE RUN_INTERPRETED RUN_INTERPRETED_NEW_PAGE RUN_INTERPRETED_PAGE_HAS_CODE RUN_INTERPRETED_PAGE_HAS_ENTRY_AFTER_PAGE_WALK RUN_INTERPRETED_NEAR_END_OF_PAGE RUN_INTERPRETED_DIFFERENT_STATE RUN_INTERPRETED_DIFFERENT_STATE_CPL3 RUN_INTERPRETED_DIFFERENT_STATE_FLAT RUN_INTERPRETED_DIFFERENT_STATE_IS32 RUN_INTERPRETED_DIFFERENT_STATE_SS32 RUN_INTERPRETED_MISSED_COMPILED_ENTRY_RUN_INTERPRETED RUN_INTERPRETED_STEPS RUN_FROM_CACHE RUN_FROM_CACHE_STEPS RUN_FROM_CACHE_STEPS/RUN_FROM_CACHE RUN_FROM_CACHE_STEPS/RUN_INTERPRETED_STEPS DIRECT_EXIT INDIRECT_JUMP INDIRECT_JUMP_NO_ENTRY NORMAL_PAGE_CHANGE NORMAL_FALLTHRU NORMAL_FALLTHRU_WITH_TARGET_BLOCK NORMAL_BRANCH NORMAL_BRANCH_WITH_TARGET_BLOCK CONDITIONAL_JUMP CONDITIONAL_JUMP_PAGE_CHANGE CONDITIONAL_JUMP_EXIT CONDITIONAL_JUMP_FALLTHRU CONDITIONAL_JUMP_FALLTHRU_WITH_TARGET_BLOCK CONDITIONAL_JUMP_BRANCH CONDITIONAL_JUMP_BRANCH_WITH_TARGET_BLOCK DISPATCHER_SMALL DISPATCHER_LARGE LOOP LOOP_SAFETY CONDITION_OPTIMISED CONDITION_UNOPTIMISED CONDITION_UNOPTIMISED_PF CONDITION_UNOPTIMISED_UNHANDLED_L CONDITION_UNOPTIMISED_UNHANDLED_LE FAILED_PAGE_CHANGE SAFE_READ_FAST SAFE_READ_SLOW_PAGE_CROSSED SAFE_READ_SLOW_NOT_VALID SAFE_READ_SLOW_NOT_USER SAFE_READ_SLOW_IN_MAPPED_RANGE SAFE_WRITE_FAST SAFE_WRITE_SLOW_PAGE_CROSSED SAFE_WRITE_SLOW_NOT_VALID SAFE_WRITE_SLOW_NOT_USER SAFE_WRITE_SLOW_IN_MAPPED_RANGE SAFE_WRITE_SLOW_READ_ONLY SAFE_WRITE_SLOW_HAS_CODE SAFE_READ_WRITE_FAST SAFE_READ_WRITE_SLOW_PAGE_CROSSED SAFE_READ_WRITE_SLOW_NOT_VALID SAFE_READ_WRITE_SLOW_NOT_USER SAFE_READ_WRITE_SLOW_IN_MAPPED_RANGE SAFE_READ_WRITE_SLOW_READ_ONLY SAFE_READ_WRITE_SLOW_HAS_CODE PAGE_FAULT TLB_MISS MAIN_LOOP MAIN_LOOP_IDLE DO_MANY_CYCLES CYCLE_INTERNAL INVALIDATE_ALL_MODULES_NO_FREE_WASM_INDICES INVALIDATE_MODULE_WRITTEN_WHILE_COMPILED INVALIDATE_MODULE_UNUSED_AFTER_OVERWRITE INVALIDATE_MODULE_DIRTY_PAGE INVALIDATE_PAGE_HAD_CODE INVALIDATE_PAGE_HAD_ENTRY_POINTS DIRTY_PAGE_DID_NOT_HAVE_CODE RUN_FROM_CACHE_EXIT_SAME_PAGE RUN_FROM_CACHE_EXIT_NEAR_END_OF_PAGE RUN_FROM_CACHE_EXIT_DIFFERENT_PAGE CLEAR_TLB FULL_CLEAR_TLB TLB_FULL TLB_GLOBAL_FULL MODRM_SIMPLE_REG MODRM_SIMPLE_REG_WITH_OFFSET MODRM_SIMPLE_CONST_OFFSET MODRM_COMPLEX SEG_OFFSET_OPTIMISED SEG_OFFSET_NOT_OPTIMISED SEG_OFFSET_NOT_OPTIMISED_ES SEG_OFFSET_NOT_OPTIMISED_FS SEG_OFFSET_NOT_OPTIMISED_GS SEG_OFFSET_NOT_OPTIMISED_NOT_FLAT".split(
            " "
          ),
        d = 0;
      const e = {};
      for (let f = 0; f < c.length; f++) {
        const k = c[f];
        var g = void 0;
        if (k.includes("/")) {
          d++;
          const [l, m] = k.split("/");
          g = e[l] / e[m];
        } else
          (g = e[k] = a.wm.exports.profiler_stat_get(f - d)),
            (g =
              1e8 <= g
                ? Math.round(g / 1e6) + "m"
                : 1e5 <= g
                ? Math.round(g / 1e3) + "k"
                : g);
        b += k + "=" + g + "\n";
      }
      b += "\n";
      c = a.wm.exports.get_valid_tlb_entries_count();
      d = a.wm.exports.get_valid_global_tlb_entries_count();
      b =
        b +
        ("TLB_ENTRIES=" +
          c +
          " (" +
          d +
          " global, " +
          (c - d) +
          " non-global)\nWASM_TABLE_FREE=") +
        (a.wm.exports.jit_get_wasm_table_index_free_list_count() + "\n");
      b += "JIT_CACHE_SIZE=" + a.wm.exports.jit_get_cache_size() + "\n";
      b += "FLAT_SEGMENTS=" + a.wm.exports.has_flat_segmentation() + "\n";
      b +=
        "wasm memory size: " + (a.wasm_memory.buffer.byteLength >> 20) + "m\n";
      b =
        b + "Config:\nJIT_DISABLED=" + (a.wm.exports.get_jit_config(0) + "\n");
      b += "MAX_PAGES=" + a.wm.exports.get_jit_config(1) + "\n";
      b += "JIT_USE_LOOP_SAFETY=" + !!a.wm.exports.get_jit_config(2) + "\n";
      return (b +=
        "MAX_EXTRA_BASIC_BLOCKS=" + a.wm.exports.get_jit_config(3) + "\n");
    },
    print_instruction_counts: function (a) {
      return [
        Fb.print_instruction_counts_offset(a, !1, !1, !1, !1),
        Fb.print_instruction_counts_offset(a, !0, !1, !1, !1),
        Fb.print_instruction_counts_offset(a, !1, !0, !1, !1),
        Fb.print_instruction_counts_offset(a, !1, !1, !0, !1),
        Fb.print_instruction_counts_offset(a, !1, !1, !1, !0),
      ].join("\n\n");
    },
    print_instruction_counts_offset: function (a, b, c, d, e) {
      let g = "";
      var f = [],
        k = b
          ? "compiled"
          : c
          ? "jit exit"
          : d
          ? "unguarded register"
          : e
          ? "wasm size"
          : "executed";
      for (let n = 0; 256 > n; n++)
        for (let p = 0; 8 > p; p++)
          for (let t of [!1, !0]) {
            var l = a.wm.exports.get_opstats_buffer(b, c, d, e, n, !1, t, p);
            f.push({ opcode: n, count: l, is_mem: t, fixed_g: p });
            l = a.wm.exports.get_opstats_buffer(b, c, d, e, n, !0, t, p);
            f.push({ opcode: 3840 | n, count: l, is_mem: t, fixed_g: p });
          }
      a = 0;
      b = new Set([38, 46, 54, 62, 100, 101, 102, 103, 240, 242, 243]);
      for (let { count: n, opcode: p } of f) b.has(p) || (a += n);
      if (0 === a) return "";
      c = new Uint32Array(256);
      b = new Uint32Array(256);
      for (let { opcode: n, count: p } of f)
        3840 == (n & 65280) ? (b[n & 255] += p) : (c[n & 255] += p);
      g = g + "------------------\nTotal: " + (a + "\n");
      const m = 1e7 < a ? 1e3 : 1;
      d = Math.max.apply(
        Math,
        f.map(({ count: n }) => Math.round(n / m))
      );
      d = String(d).length;
      g += `Instruction counts ${k} (in ${m}):\n`;
      for (e = 0; 256 > e; e++)
        (g +=
          e.toString(16).padStart(2, "0") +
          ":" +
          r.pads(Math.round(c[e] / m), d)),
          (g = 15 == e % 16 ? g + "\n" : g + " ");
      g = g + "\n" + `Instruction counts ${k} (0f, in ${m}):\n`;
      for (k = 0; 256 > k; k++)
        (g +=
          (k & 255).toString(16).padStart(2, "0") +
          ":" +
          r.pads(Math.round(b[k] / m), d)),
          (g = 15 == k % 16 ? g + "\n" : g + " ");
      g += "\n";
      f = f
        .filter(({ count: n }) => n)
        .sort(({ count: n }, { count: p }) => p - n);
      for (let { opcode: n, is_mem: p, fixed_g: t, count: q } of f.slice(
        0,
        200
      ))
        (f = n.toString(16) + "_" + t + (p ? "_m" : "_r")),
          (g += f + ":" + ((q / a) * 100).toFixed(2) + " ");
      return g + "\n";
    },
  };
  "undefined" !== typeof module &&
    "undefined" !== typeof module.exports &&
    (module.exports.print_stats = Fb);
  function xb() {
    this.filedata = new Map();
  }
  xb.prototype.read = async function (a, b, c) {
    return (a = this.filedata.get(a)) ? a.subarray(b, b + c) : null;
  };
  xb.prototype.cache = async function (a, b) {
    this.filedata.set(a, b);
  };
  xb.prototype.uncache = function (a) {
    this.filedata.delete(a);
  };
  function yb(a, b) {
    this.storage = a;
    this.baseurl = b;
  }
  yb.prototype.load_from_server = function (a) {
    return new Promise((b) => {
      r.load_file(this.baseurl + a, {
        done: async (c) => {
          c = new Uint8Array(c);
          await this.cache(a, c);
          b(c);
        },
      });
    });
  };
  yb.prototype.read = async function (a, b, c) {
    const d = await this.storage.read(a, b, c);
    return d ? d : (await this.load_from_server(a)).subarray(b, b + c);
  };
  yb.prototype.cache = async function (a, b) {
    return await this.storage.cache(a, b);
  };
  yb.prototype.uncache = function (a) {
    this.storage.uncache(a);
  };
  "undefined" !== typeof window
    ? ((window.MemoryFileStorage = xb), (window.ServerFileStorageWrapper = yb))
    : "undefined" !== typeof module && "undefined" !== typeof module.exports
    ? ((module.exports.MemoryFileStorage = xb),
      (module.exports.ServerFileStorageWrapper = yb))
    : "function" === typeof importScripts &&
      ((self.MemoryFileStorage = xb), (self.ServerFileStorageWrapper = yb));
  var ha = 16384,
    ia = 4;
  function Z(a, b) {
    this.inodes = [];
    this.events = [];
    this.storage = a;
    this.qidcounter = b || { last_qidnumber: 0 };
    this.inodedata = {};
    this.total_size = 274877906944;
    this.used_size = 0;
    this.mounts = [];
    this.CreateDirectory("", -1);
  }
  Z.prototype.get_state = function () {
    let a = [];
    a[0] = this.inodes;
    a[1] = this.qidcounter.last_qidnumber;
    a[2] = [];
    for (const [b, c] of Object.entries(this.inodedata))
      0 === (this.inodes[b].mode & ha) && a[2].push([b, c]);
    a[3] = this.total_size;
    a[4] = this.used_size;
    return (a = a.concat(this.mounts));
  };
  Z.prototype.set_state = function (a) {
    this.inodes = a[0].map((b) => {
      const c = new Gb(0);
      c.set_state(b);
      return c;
    });
    this.qidcounter.last_qidnumber = a[1];
    this.inodedata = {};
    for (let [b, c] of a[2])
      c.buffer.byteLength !== c.byteLength && (c = c.slice()),
        (this.inodedata[b] = c);
    this.total_size = a[3];
    this.used_size = a[4];
    this.mounts = a.slice(5);
  };
  Z.prototype.AddEvent = function (a, b) {
    var c = this.inodes[a];
    0 == c.status || 2 == c.status
      ? b()
      : this.is_forwarder(c)
      ? this.follow_fs(c).AddEvent(c.foreign_id, b)
      : this.events.push({ id: a, OnEvent: b });
  };
  Z.prototype.HandleEvent = function (a) {
    var b = this.inodes[a];
    this.is_forwarder(b) && this.follow_fs(b).HandleEvent(b.foreign_id);
    b = [];
    for (var c = 0; c < this.events.length; c++)
      this.events[c].id == a
        ? this.events[c].OnEvent()
        : b.push(this.events[c]);
    this.events = b;
  };
  Z.prototype.load_from_json = function (a, b) {
    if (3 !== a.version)
      throw "The filesystem JSON format has changed. Please update your fs2json (https://github.com/copy/fs2json) and recreate the filesystem JSON.";
    var c = a.fsroot;
    this.used_size = a.size;
    for (a = 0; a < c.length; a++) this.LoadRecursive(c[a], 0);
    b && b();
  };
  Z.prototype.LoadRecursive = function (a, b) {
    var c = this.CreateInode();
    const d = a[0];
    c.size = a[1];
    c.mtime = a[2];
    c.ctime = c.mtime;
    c.atime = c.mtime;
    c.mode = a[3];
    c.uid = a[4];
    c.gid = a[5];
    var e = c.mode & 61440;
    e === ha
      ? (this.PushInode(c, b, d), this.LoadDir(this.inodes.length - 1, a[6]))
      : 32768 === e
      ? ((c.status = 2), (c.sha256sum = a[6]), this.PushInode(c, b, d))
      : 40960 === e
      ? ((c.symlink = a[6]), this.PushInode(c, b, d))
      : 49152 !== e && A(e);
  };
  Z.prototype.LoadDir = function (a, b) {
    for (var c = 0; c < b.length; c++) this.LoadRecursive(b[c], a);
  };
  Z.prototype.should_be_linked = function (a) {
    return !this.is_forwarder(a) || 0 === a.foreign_id;
  };
  Z.prototype.link_under_dir = function (a, b, c) {
    const d = this.inodes[b],
      e = this.inodes[a];
    this.is_forwarder(e);
    this.IsDirectory(a);
    this.should_be_linked(d);
    e.direntries.has(c);
    e.direntries.set(c, b);
    d.nlinks++;
    this.IsDirectory(b) &&
      (d.direntries.has(".."),
      d.direntries.has(".") || d.nlinks++,
      d.direntries.set(".", b),
      d.direntries.set("..", a),
      e.nlinks++);
  };
  Z.prototype.unlink_from_dir = function (a, b) {
    const c = this.Search(a, b),
      d = this.inodes[c],
      e = this.inodes[a];
    this.is_forwarder(e);
    this.IsDirectory(a);
    e.direntries.delete(b) &&
      (d.nlinks--,
      this.IsDirectory(c) &&
        (d.direntries.get(".."), d.direntries.delete(".."), e.nlinks--));
  };
  Z.prototype.PushInode = function (a, b, c) {
    -1 != b
      ? (this.inodes.push(a),
        (a.fid = this.inodes.length - 1),
        this.link_under_dir(b, a.fid, c))
      : 0 == this.inodes.length
      ? (this.inodes.push(a),
        a.direntries.set(".", 0),
        a.direntries.set("..", 0),
        (a.nlinks = 2))
      : (y.Debug(
          "Error in Filesystem: Pushed inode with name = " +
            c +
            " has no parent"
        ),
        y.Abort());
  };
  function Gb(a) {
    this.direntries = new Map();
    this.minor =
      this.major =
      this.mtime =
      this.atime =
      this.ctime =
      this.fid =
      this.gid =
      this.uid =
      this.size =
      this.status =
        0;
    this.symlink = "";
    this.mode = 493;
    this.qid = { type: 0, version: 0, path: a };
    this.caps = void 0;
    this.nlinks = 0;
    this.sha256sum = "";
    this.locks = [];
    this.foreign_id = this.mount_id = -1;
  }
  Gb.prototype.get_state = function () {
    const a = [];
    a[0] = this.mode;
    a[1] =
      (this.mode & 61440) === ha
        ? [...this.direntries]
        : 32768 === (this.mode & 61440)
        ? this.sha256sum
        : 40960 === (this.mode & 61440)
        ? this.symlink
        : 49152 === (this.mode & 61440)
        ? [this.minor, this.major]
        : null;
    a[2] = this.locks;
    a[3] = this.status;
    a[4] = this.size;
    a[5] = this.uid;
    a[6] = this.gid;
    a[7] = this.fid;
    a[8] = this.ctime;
    a[9] = this.atime;
    a[10] = this.mtime;
    a[11] = this.qid.version;
    a[12] = this.qid.path;
    a[13] = this.nlinks;
    return a;
  };
  Gb.prototype.set_state = function (a) {
    this.mode = a[0];
    if ((this.mode & 61440) === ha) {
      this.direntries = new Map();
      for (const [b, c] of a[1]) this.direntries.set(b, c);
    } else
      32768 === (this.mode & 61440)
        ? (this.sha256sum = a[1])
        : 40960 === (this.mode & 61440)
        ? (this.symlink = a[1])
        : 49152 === (this.mode & 61440) && ([this.minor, this.major] = a[1]);
    this.locks = [];
    for (const b of a[2]) {
      const c = new Hb();
      c.set_state(b);
      this.locks.push(c);
    }
    this.status = a[3];
    this.size = a[4];
    this.uid = a[5];
    this.gid = a[6];
    this.fid = a[7];
    this.ctime = a[8];
    this.atime = a[9];
    this.mtime = a[10];
    this.qid.type = (this.mode & 61440) >> 8;
    this.qid.version = a[11];
    this.qid.path = a[12];
    this.nlinks = a[13];
  };
  Z.prototype.divert = function (a, b) {
    const c = this.Search(a, b),
      d = this.inodes[c],
      e = new Gb(-1);
    this.IsDirectory(c);
    Object.assign(e, d);
    const g = this.inodes.length;
    this.inodes.push(e);
    e.fid = g;
    this.is_forwarder(d) &&
      this.mounts[d.mount_id].backtrack.set(d.foreign_id, g);
    this.should_be_linked(d) &&
      (this.unlink_from_dir(a, b), this.link_under_dir(a, g, b));
    if (this.IsDirectory(c) && !this.is_forwarder(d))
      for (const [f, k] of e.direntries)
        "." !== f &&
          ".." !== f &&
          this.IsDirectory(k) &&
          this.inodes[k].direntries.set("..", g);
    this.inodedata[g] = this.inodedata[c];
    delete this.inodedata[c];
    d.direntries = new Map();
    d.nlinks = 0;
    return g;
  };
  Z.prototype.copy_inode = function (a, b) {
    Object.assign(b, a, {
      fid: b.fid,
      direntries: b.direntries,
      nlinks: b.nlinks,
    });
  };
  Z.prototype.CreateInode = function () {
    const a = Math.round(Date.now() / 1e3),
      b = new Gb(++this.qidcounter.last_qidnumber);
    b.atime = b.ctime = b.mtime = a;
    return b;
  };
  Z.prototype.CreateDirectory = function (a, b) {
    var c = this.inodes[b];
    if (0 <= b && this.is_forwarder(c))
      return (
        (b = c.foreign_id),
        (a = this.follow_fs(c).CreateDirectory(a, b)),
        this.create_forwarder(c.mount_id, a)
      );
    c = this.CreateInode();
    c.mode = 511 | ha;
    0 <= b &&
      ((c.uid = this.inodes[b].uid),
      (c.gid = this.inodes[b].gid),
      (c.mode = (this.inodes[b].mode & 511) | ha));
    c.qid.type = ha >> 8;
    this.PushInode(c, b, a);
    this.NotifyListeners(this.inodes.length - 1, "newdir");
    return this.inodes.length - 1;
  };
  Z.prototype.CreateFile = function (a, b) {
    var c = this.inodes[b];
    if (this.is_forwarder(c))
      return (
        (b = c.foreign_id),
        (a = this.follow_fs(c).CreateFile(a, b)),
        this.create_forwarder(c.mount_id, a)
      );
    c = this.CreateInode();
    c.uid = this.inodes[b].uid;
    c.gid = this.inodes[b].gid;
    c.qid.type = 128;
    c.mode = (this.inodes[b].mode & 438) | 32768;
    this.PushInode(c, b, a);
    this.NotifyListeners(this.inodes.length - 1, "newfile");
    return this.inodes.length - 1;
  };
  Z.prototype.CreateNode = function (a, b, c, d) {
    var e = this.inodes[b];
    if (this.is_forwarder(e))
      return (
        (b = e.foreign_id),
        (a = this.follow_fs(e).CreateNode(a, b, c, d)),
        this.create_forwarder(e.mount_id, a)
      );
    e = this.CreateInode();
    e.major = c;
    e.minor = d;
    e.uid = this.inodes[b].uid;
    e.gid = this.inodes[b].gid;
    e.qid.type = 192;
    e.mode = this.inodes[b].mode & 438;
    this.PushInode(e, b, a);
    return this.inodes.length - 1;
  };
  Z.prototype.CreateSymlink = function (a, b, c) {
    var d = this.inodes[b];
    if (this.is_forwarder(d))
      return (
        (b = d.foreign_id),
        (a = this.follow_fs(d).CreateSymlink(a, b, c)),
        this.create_forwarder(d.mount_id, a)
      );
    d = this.CreateInode();
    d.uid = this.inodes[b].uid;
    d.gid = this.inodes[b].gid;
    d.qid.type = 160;
    d.symlink = c;
    d.mode = 40960;
    this.PushInode(d, b, a);
    return this.inodes.length - 1;
  };
  Z.prototype.CreateTextFile = async function (a, b, c) {
    var d = this.inodes[b];
    if (this.is_forwarder(d))
      return (
        (b = d.foreign_id),
        (c = await this.follow_fs(d).CreateTextFile(a, b, c)),
        this.create_forwarder(d.mount_id, c)
      );
    d = this.CreateFile(a, b);
    b = this.inodes[d];
    a = new Uint8Array(c.length);
    b.size = c.length;
    for (b = 0; b < c.length; b++) a[b] = c.charCodeAt(b);
    await this.set_data(d, a);
    return d;
  };
  Z.prototype.CreateBinaryFile = async function (a, b, c) {
    var d = this.inodes[b];
    if (this.is_forwarder(d))
      return (
        (b = d.foreign_id),
        (c = await this.follow_fs(d).CreateBinaryFile(a, b, c)),
        this.create_forwarder(d.mount_id, c)
      );
    d = this.CreateFile(a, b);
    a = this.inodes[d];
    b = new Uint8Array(c.length);
    b.set(c);
    await this.set_data(d, b);
    a.size = c.length;
    return d;
  };
  Z.prototype.OpenInode = function (a, b) {
    var c = this.inodes[a];
    if (this.is_forwarder(c))
      return this.follow_fs(c).OpenInode(c.foreign_id, b);
    (c.mode & 61440) == ha && this.FillDirectory(a);
    return !0;
  };
  Z.prototype.CloseInode = async function (a) {
    var b = this.inodes[a];
    if (this.is_forwarder(b))
      return await this.follow_fs(b).CloseInode(b.foreign_id);
    2 === b.status && this.storage.uncache(b.sha256sum);
    b.status == ia && ((b.status = -1), await this.DeleteData(a));
  };
  Z.prototype.Rename = async function (a, b, c, d) {
    if (a == c && b == d) return 0;
    var e = this.Search(a, b);
    if (-1 === e) return -2;
    var g = this.GetFullPath(a) + "/" + b;
    if (-1 != this.Search(c, d)) {
      var f = this.Unlink(c, d);
      if (0 > f) return f;
    }
    var k = this.inodes[e],
      l = this.inodes[a];
    f = this.inodes[c];
    if (this.is_forwarder(l) || this.is_forwarder(f))
      if (this.is_forwarder(l) && l.mount_id === f.mount_id) {
        if (
          ((a = await this.follow_fs(l).Rename(
            l.foreign_id,
            b,
            f.foreign_id,
            d
          )),
          0 > a)
        )
          return a;
      } else {
        if (
          this.is_a_root(e) ||
          (!this.IsDirectory(e) && 1 < this.GetInode(e).nlinks)
        )
          return -1;
        l = this.divert(a, b);
        const m = this.GetInode(e),
          n = await this.Read(l, 0, m.size);
        this.is_forwarder(f)
          ? ((c = this.follow_fs(f)),
            (d = this.IsDirectory(l)
              ? c.CreateDirectory(d, f.foreign_id)
              : c.CreateFile(d, f.foreign_id)),
            (c = c.GetInode(d)),
            this.copy_inode(m, c),
            this.set_forwarder(e, f.mount_id, d))
          : (this.delete_forwarder(k),
            this.copy_inode(m, k),
            this.link_under_dir(c, e, d));
        await this.ChangeSize(e, m.size);
        n && n.length && (await this.Write(e, 0, n.length, n));
        if (this.IsDirectory(e))
          for (const p of this.GetChildren(l))
            if (((f = await this.Rename(l, p, e, p)), 0 > f)) return f;
        await this.DeleteData(l);
        a = this.Unlink(a, b);
        if (0 > a) return a;
      }
    else
      this.unlink_from_dir(a, b), this.link_under_dir(c, e, d), k.qid.version++;
    this.NotifyListeners(e, "rename", { oldpath: g });
    return 0;
  };
  Z.prototype.Write = async function (a, b, c, d) {
    this.NotifyListeners(a, "write");
    var e = this.inodes[a];
    if (this.is_forwarder(e))
      (a = e.foreign_id), await this.follow_fs(e).Write(a, b, c, d);
    else {
      var g = await this.get_buffer(a);
      !g || g.length < b + c
        ? (await this.ChangeSize(a, Math.floor((3 * (b + c)) / 2)),
          (e.size = b + c),
          (g = await this.get_buffer(a)))
        : e.size < b + c && (e.size = b + c);
      d && g.set(d.subarray(0, c), b);
      await this.set_data(a, g);
    }
  };
  Z.prototype.Read = async function (a, b, c) {
    const d = this.inodes[a];
    return this.is_forwarder(d)
      ? ((a = d.foreign_id), await this.follow_fs(d).Read(a, b, c))
      : await this.get_data(a, b, c);
  };
  Z.prototype.Search = function (a, b) {
    a = this.inodes[a];
    if (this.is_forwarder(a)) {
      const c = a.foreign_id;
      b = this.follow_fs(a).Search(c, b);
      return -1 === b ? -1 : this.get_forwarder(a.mount_id, b);
    }
    b = a.direntries.get(b);
    return void 0 === b ? -1 : b;
  };
  Z.prototype.CountUsedInodes = function () {
    let a = this.inodes.length;
    for (const { fs: b, backtrack: c } of this.mounts)
      (a += b.CountUsedInodes()), (a -= c.size);
    return a;
  };
  Z.prototype.CountFreeInodes = function () {
    let a = 1048576;
    for (const { fs: b } of this.mounts) a += b.CountFreeInodes();
    return a;
  };
  Z.prototype.GetTotalSize = function () {
    let a = this.used_size;
    for (const { fs: b } of this.mounts) a += b.GetTotalSize();
    return a;
  };
  Z.prototype.GetSpace = function () {
    let a = this.total_size;
    for (const { fs: b } of this.mounts) a += b.GetSpace();
    return this.total_size;
  };
  Z.prototype.GetDirectoryName = function (a) {
    const b = this.inodes[this.GetParent(a)];
    if (this.is_forwarder(b))
      return this.follow_fs(b).GetDirectoryName(this.inodes[a].foreign_id);
    if (!b) return "";
    for (const [c, d] of b.direntries) if (d === a) return c;
    return "";
  };
  Z.prototype.GetFullPath = function (a) {
    this.IsDirectory(a);
    for (var b = ""; 0 != a; )
      (b = "/" + this.GetDirectoryName(a) + b), (a = this.GetParent(a));
    return b.substring(1);
  };
  Z.prototype.Link = function (a, b, c) {
    if (this.IsDirectory(b)) return -1;
    const d = this.inodes[a],
      e = this.inodes[b];
    if (this.is_forwarder(d))
      return this.is_forwarder(e) && e.mount_id === d.mount_id
        ? this.follow_fs(d).Link(d.foreign_id, e.foreign_id, c)
        : -1;
    if (this.is_forwarder(e)) return -1;
    this.link_under_dir(a, b, c);
    return 0;
  };
  Z.prototype.Unlink = function (a, b) {
    if ("." === b || ".." === b) return -1;
    const c = this.Search(a, b),
      d = this.inodes[c],
      e = this.inodes[a];
    if (this.is_forwarder(e))
      return (
        this.is_forwarder(d), (a = e.foreign_id), this.follow_fs(e).Unlink(a, b)
      );
    if (this.IsDirectory(c) && !this.IsEmpty(c)) return -39;
    this.unlink_from_dir(a, b);
    0 === d.nlinks && ((d.status = ia), this.NotifyListeners(c, "delete"));
    return 0;
  };
  Z.prototype.DeleteData = async function (a) {
    const b = this.inodes[a];
    this.is_forwarder(b)
      ? await this.follow_fs(b).DeleteData(b.foreign_id)
      : ((b.size = 0), delete this.inodedata[a]);
  };
  Z.prototype.get_buffer = async function (a) {
    const b = this.inodes[a];
    return this.inodedata[a]
      ? this.inodedata[a]
      : 2 === b.status
      ? await this.storage.read(b.sha256sum, 0, b.size)
      : null;
  };
  Z.prototype.get_data = async function (a, b, c) {
    const d = this.inodes[a];
    return this.inodedata[a]
      ? this.inodedata[a].subarray(b, b + c)
      : 2 === d.status
      ? await this.storage.read(d.sha256sum, b, c)
      : null;
  };
  Z.prototype.set_data = async function (a, b) {
    this.inodedata[a] = b;
    2 === this.inodes[a].status &&
      ((this.inodes[a].status = 0),
      this.storage.uncache(this.inodes[a].sha256sum));
  };
  Z.prototype.GetInode = function (a) {
    isNaN(a);
    a = this.inodes[a];
    return this.is_forwarder(a) ? this.follow_fs(a).GetInode(a.foreign_id) : a;
  };
  Z.prototype.ChangeSize = async function (a, b) {
    var c = this.GetInode(a),
      d = await this.get_data(a, 0, c.size);
    if (b != c.size) {
      var e = new Uint8Array(b);
      c.size = b;
      d && e.set(d.subarray(0, Math.min(d.length, c.size)), 0);
      await this.set_data(a, e);
    }
  };
  Z.prototype.SearchPath = function (a) {
    a = a.replace("//", "/");
    a = a.split("/");
    0 < a.length && 0 === a[a.length - 1].length && a.pop();
    0 < a.length && 0 === a[0].length && a.shift();
    const b = a.length;
    var c = -1,
      d = 0;
    let e = null;
    for (var g = 0; g < b; g++)
      if (
        ((c = d),
        (d = this.Search(c, a[g])),
        !e &&
          this.is_forwarder(this.inodes[c]) &&
          (e = "/" + a.slice(g).join("/")),
        -1 == d)
      )
        return g < b - 1
          ? { id: -1, parentid: -1, name: a[g], forward_path: e }
          : { id: -1, parentid: c, name: a[g], forward_path: e };
    return { id: d, parentid: c, name: a[g], forward_path: e };
  };
  Z.prototype.GetRecursiveList = function (a, b) {
    if (this.is_forwarder(this.inodes[a])) {
      const c = this.follow_fs(this.inodes[a]),
        d = this.inodes[a].mount_id,
        e = b.length;
      c.GetRecursiveList(this.inodes[a].foreign_id, b);
      for (a = e; a < b.length; a++)
        b[a].parentid = this.get_forwarder(d, b[a].parentid);
    } else
      for (const [c, d] of this.inodes[a].direntries)
        "." !== c &&
          ".." !== c &&
          (b.push({ parentid: a, name: c }),
          this.IsDirectory(d) && this.GetRecursiveList(d, b));
  };
  Z.prototype.RecursiveDelete = function (a) {
    var b = [];
    a = this.SearchPath(a);
    if (-1 !== a.id)
      for (this.GetRecursiveList(a.id, b), a = b.length - 1; 0 <= a; a--)
        this.Unlink(b[a].parentid, b[a].name);
  };
  Z.prototype.DeleteNode = function (a) {
    var b = this.SearchPath(a);
    -1 != b.id &&
      (32768 == (this.inodes[b.id].mode & 61440)
        ? this.Unlink(b.parentid, b.name)
        : (this.inodes[b.id].mode & 61440) == ha &&
          (this.RecursiveDelete(a), this.Unlink(b.parentid, b.name)));
  };
  Z.prototype.NotifyListeners = function () {};
  Z.prototype.Check = function () {
    for (var a = 1; a < this.inodes.length; a++)
      if (-1 != this.inodes[a].status) {
        var b = this.GetInode(a);
        0 > b.nlinks &&
          y.Debug(
            "Error in filesystem: negative nlinks=" + b.nlinks + " at id =" + a
          );
        if (this.IsDirectory(a)) {
          b = this.GetInode(a);
          this.IsDirectory(a) &&
            0 > this.GetParent(a) &&
            y.Debug("Error in filesystem: negative parent id " + a);
          for (const [c, d] of b.direntries) {
            0 === c.length &&
              y.Debug("Error in filesystem: inode with no name and id " + d);
            for (const e of c)
              32 > e &&
                y.Debug("Error in filesystem: Unallowed char in filename");
          }
        }
      }
  };
  Z.prototype.FillDirectory = function (a) {
    var b = this.inodes[a];
    if (this.is_forwarder(b)) this.follow_fs(b).FillDirectory(b.foreign_id);
    else {
      var c = 0;
      for (const d of b.direntries.keys()) c += 24 + Ib.UTF8Length(d);
      a = this.inodedata[a] = new Uint8Array(c);
      b.size = c;
      c = 0;
      for (const [d, e] of b.direntries)
        (b = this.GetInode(e)),
          (c += v.Marshall(
            ["Q", "d", "b", "s"],
            [b.qid, c + 13 + 8 + 1 + 2 + Ib.UTF8Length(d), b.mode >> 12, d],
            a,
            c
          ));
    }
  };
  Z.prototype.RoundToDirentry = function (a, b) {
    a = this.inodedata[a];
    if (b >= a.length) return a.length;
    let c = 0;
    for (;;) {
      const d = v.Unmarshall(["Q", "d"], a, { offset: c })[1];
      if (d > b) break;
      c = d;
    }
    return c;
  };
  Z.prototype.IsDirectory = function (a) {
    a = this.inodes[a];
    return this.is_forwarder(a)
      ? this.follow_fs(a).IsDirectory(a.foreign_id)
      : (a.mode & 61440) === ha;
  };
  Z.prototype.IsEmpty = function (a) {
    a = this.inodes[a];
    if (this.is_forwarder(a))
      return this.follow_fs(a).IsDirectory(a.foreign_id);
    for (const b of a.direntries.keys()) if ("." !== b && ".." !== b) return !1;
    return !0;
  };
  Z.prototype.GetChildren = function (a) {
    this.IsDirectory(a);
    a = this.inodes[a];
    if (this.is_forwarder(a))
      return this.follow_fs(a).GetChildren(a.foreign_id);
    const b = [];
    for (const c of a.direntries.keys()) "." !== c && ".." !== c && b.push(c);
    return b;
  };
  Z.prototype.GetParent = function (a) {
    this.IsDirectory(a);
    a = this.inodes[a];
    if (this.should_be_linked(a)) return a.direntries.get("..");
    const b = this.follow_fs(a).GetParent(a.foreign_id);
    return this.get_forwarder(a.mount_id, b);
  };
  Z.prototype.PrepareCAPs = function (a) {
    a = this.GetInode(a);
    if (a.caps) return a.caps.length;
    a.caps = new Uint8Array(20);
    a.caps[0] = 0;
    a.caps[1] = 0;
    a.caps[2] = 0;
    a.caps[3] = 2;
    a.caps[4] = 255;
    a.caps[5] = 255;
    a.caps[6] = 255;
    a.caps[7] = 255;
    a.caps[8] = 255;
    a.caps[9] = 255;
    a.caps[10] = 255;
    a.caps[11] = 255;
    a.caps[12] = 63;
    a.caps[13] = 0;
    a.caps[14] = 0;
    a.caps[15] = 0;
    a.caps[16] = 63;
    a.caps[17] = 0;
    a.caps[18] = 0;
    a.caps[19] = 0;
    return a.caps.length;
  };
  function Jb(a) {
    this.fs = a;
    this.backtrack = new Map();
  }
  Jb.prototype.get_state = function () {
    const a = [];
    a[0] = this.fs;
    a[1] = [...this.backtrack];
    return a;
  };
  Jb.prototype.set_state = function (a) {
    this.fs = a[0];
    this.backtrack = new Map(a[1]);
  };
  Z.prototype.set_forwarder = function (a, b, c) {
    const d = this.inodes[a];
    this.is_forwarder(d) &&
      this.mounts[d.mount_id].backtrack.delete(d.foreign_id);
    d.status = 5;
    d.mount_id = b;
    d.foreign_id = c;
    this.mounts[b].backtrack.set(c, a);
  };
  Z.prototype.create_forwarder = function (a, b) {
    const c = this.CreateInode(),
      d = this.inodes.length;
    this.inodes.push(c);
    c.fid = d;
    this.set_forwarder(d, a, b);
    return d;
  };
  Z.prototype.is_forwarder = function (a) {
    return 5 === a.status;
  };
  Z.prototype.is_a_root = function (a) {
    return 0 === this.GetInode(a).fid;
  };
  Z.prototype.get_forwarder = function (a, b) {
    const c = this.mounts[a].backtrack.get(b);
    return void 0 === c ? this.create_forwarder(a, b) : c;
  };
  Z.prototype.delete_forwarder = function (a) {
    this.is_forwarder(a);
    a.status = -1;
    this.mounts[a.mount_id].backtrack.delete(a.foreign_id);
  };
  Z.prototype.follow_fs = function (a) {
    const b = this.mounts[a.mount_id];
    this.is_forwarder(a);
    return b.fs;
  };
  Z.prototype.Mount = function (a, b) {
    a = this.SearchPath(a);
    if (-1 === a.parentid) return -2;
    if (-1 !== a.id) return -17;
    if (a.forward_path) {
      var c = this.inodes[a.parentid];
      b = this.follow_fs(c).Mount(a.forward_path, b);
      return 0 > b ? b : this.get_forwarder(c.mount_id, b);
    }
    c = this.mounts.length;
    this.mounts.push(new Jb(b));
    b = this.create_forwarder(c, 0);
    this.link_under_dir(a.parentid, b, a.name);
    return b;
  };
  function Hb() {
    this.type = 2;
    this.start = 0;
    this.length = Infinity;
    this.proc_id = -1;
    this.client_id = "";
  }
  Hb.prototype.get_state = function () {
    const a = [];
    a[0] = this.type;
    a[1] = this.start;
    a[2] = Infinity === this.length ? 0 : this.length;
    a[3] = this.proc_id;
    a[4] = this.client_id;
    return a;
  };
  Hb.prototype.set_state = function (a) {
    this.type = a[0];
    this.start = a[1];
    this.length = 0 === a[2] ? Infinity : a[2];
    this.proc_id = a[3];
    this.client_id = a[4];
  };
  Hb.prototype.clone = function () {
    const a = new Hb();
    a.set_state(this.get_state());
    return a;
  };
  Hb.prototype.conflicts_with = function (a) {
    return (this.proc_id === a.proc_id && this.client_id === a.client_id) ||
      2 === this.type ||
      2 === a.type ||
      (1 !== this.type && 1 !== a.type) ||
      this.start + this.length <= a.start ||
      a.start + a.length <= this.start
      ? !1
      : !0;
  };
  Hb.prototype.is_alike = function (a) {
    return (
      a.proc_id === this.proc_id &&
      a.client_id === this.client_id &&
      a.type === this.type
    );
  };
  Hb.prototype.may_merge_after = function (a) {
    return this.is_alike(a) && a.start + a.length === this.start;
  };
  Z.prototype.DescribeLock = function (a, b, c, d, e) {
    const g = new Hb();
    g.type = a;
    g.start = b;
    g.length = c;
    g.proc_id = d;
    g.client_id = e;
    return g;
  };
  Z.prototype.GetLock = function (a, b) {
    a = this.inodes[a];
    if (this.is_forwarder(a)) {
      var c = a.foreign_id;
      return this.follow_fs(a).GetLock(c, b);
    }
    for (c of a.locks) if (b.conflicts_with(c)) return c.clone();
    return null;
  };
  Z.prototype.Lock = function (a, b, c) {
    const d = this.inodes[a];
    if (this.is_forwarder(d))
      return (a = d.foreign_id), this.follow_fs(d).Lock(a, b, c);
    b = b.clone();
    if (2 !== b.type && this.GetLock(a, b)) return 1;
    for (c = 0; c < d.locks.length; c++) {
      a = d.locks[c];
      if (a.start + a.length <= b.start) continue;
      if (b.start + b.length <= a.start) break;
      if (a.proc_id !== b.proc_id || a.client_id !== b.client_id) {
        a.conflicts_with(b);
        continue;
      }
      var e = b.start + b.length;
      const g = b.start - a.start,
        f = a.start + a.length - e;
      if (0 < g && 0 < f && a.type === b.type) return 0;
      0 < g && (a.length = g);
      if (0 >= g && 0 < f) (a.start = e), (a.length = f);
      else if (0 < f) {
        for (; c < d.locks.length && d.locks[c].start < e; ) c++;
        d.locks.splice(
          c,
          0,
          this.DescribeLock(a.type, e, f, a.proc_id, a.client_id)
        );
      } else 0 >= g && (d.locks.splice(c, 1), c--);
    }
    if (2 !== b.type) {
      c = b;
      a = !1;
      for (
        e = 0;
        e < d.locks.length &&
        !(c.may_merge_after(d.locks[e]) &&
          ((d.locks[e].length += b.length), (c = d.locks[e]), (a = !0)),
        b.start <= d.locks[e].start);
        e++
      );
      a || (d.locks.splice(e, 0, c), e++);
      for (; e < d.locks.length; e++)
        if (d.locks[e].is_alike(c)) {
          d.locks[e].may_merge_after(c) &&
            ((c.length += d.locks[e].length), d.locks.splice(e, 1));
          break;
        }
    }
    return 0;
  };
  Z.prototype.read_dir = function (a) {
    a = this.SearchPath(a);
    if (-1 !== a.id)
      return (
        (a = this.GetInode(a.id)),
        Array.from(a.direntries.keys()).filter((b) => "." !== b && ".." !== b)
      );
  };
  Z.prototype.read_file = function (a) {
    a = this.SearchPath(a);
    if (-1 === a.id) return Promise.resolve(null);
    const b = this.GetInode(a.id);
    return this.Read(a.id, 0, b.size);
  };
  var y = {
    Debug: function (a) {
      [].slice.apply(arguments).join(" ");
    },
    Abort: function () {},
  };
  var v = {
    Marshall: function (a, b, c, d) {
      for (var e, g = 0, f = 0; f < a.length; f++)
        switch (((e = b[f]), a[f])) {
          case "w":
            c[d++] = e & 255;
            c[d++] = (e >> 8) & 255;
            c[d++] = (e >> 16) & 255;
            c[d++] = (e >> 24) & 255;
            g += 4;
            break;
          case "d":
            c[d++] = e & 255;
            c[d++] = (e >> 8) & 255;
            c[d++] = (e >> 16) & 255;
            c[d++] = (e >> 24) & 255;
            c[d++] = 0;
            c[d++] = 0;
            c[d++] = 0;
            c[d++] = 0;
            g += 8;
            break;
          case "h":
            c[d++] = e & 255;
            c[d++] = e >> 8;
            g += 2;
            break;
          case "b":
            c[d++] = e;
            g += 1;
            break;
          case "s":
            var k = d,
              l = 0;
            c[d++] = 0;
            c[d++] = 0;
            g += 2;
            for (var m of e)
              Kb(m.charCodeAt(0)).forEach(function (n) {
                c[d++] = n;
                g += 1;
                l++;
              });
            c[k + 0] = l & 255;
            c[k + 1] = (l >> 8) & 255;
            break;
          case "Q":
            v.Marshall(["b", "w", "d"], [e.type, e.version, e.path], c, d);
            d += 13;
            g += 13;
            break;
          default:
            y.Debug("Marshall: Unknown type=" + a[f]);
        }
      return g;
    },
    Unmarshall: function (a, b, c) {
      let d = c.offset;
      for (var e = [], g = 0; g < a.length; g++)
        switch (a[g]) {
          case "w":
            var f = b[d++];
            f += b[d++] << 8;
            f += b[d++] << 16;
            f += (b[d++] << 24) >>> 0;
            e.push(f);
            break;
          case "d":
            f = b[d++];
            f += b[d++] << 8;
            f += b[d++] << 16;
            f += (b[d++] << 24) >>> 0;
            d += 4;
            e.push(f);
            break;
          case "h":
            f = b[d++];
            e.push(f + (b[d++] << 8));
            break;
          case "b":
            e.push(b[d++]);
            break;
          case "s":
            f = b[d++];
            f += b[d++] << 8;
            for (var k = "", l = new Lb(), m = 0; m < f; m++) {
              var n = l.Put(b[d++]);
              -1 != n && (k += String.fromCharCode(n));
            }
            e.push(k);
            break;
          case "Q":
            c.offset = d;
            f = v.Unmarshall(["b", "w", "d"], b, c);
            d = c.offset;
            e.push({ type: f[0], version: f[1], path: f[2] });
            break;
          default:
            y.Debug("Error in Unmarshall: Unknown type=" + a[g]);
        }
      c.offset = d;
      return e;
    },
  };
  var Ib = {};
  function Lb() {
    this.stream = new Uint8Array(5);
    this.ofs = 0;
    this.Put = function (a) {
      this.stream[this.ofs] = a;
      this.ofs++;
      switch (this.ofs) {
        case 1:
          if (128 > this.stream[0]) return (this.ofs = 0), this.stream[0];
          break;
        case 2:
          if (192 == (this.stream[0] & 224) && 128 == (this.stream[1] & 192))
            return (
              (this.ofs = 0),
              ((this.stream[0] & 31) << 6) | (this.stream[1] & 63)
            );
      }
      return -1;
    };
  }
  function Kb(a) {
    if (128 > a) return [a];
    if (2048 > a) return [192 | ((a >> 6) & 31), 128 | (a & 63)];
  }
  Ib.UTF8Length = function (a) {
    for (var b = 0, c = 0; c < a.length; c++) {
      var d = a.charCodeAt(c);
      b += 128 > d ? 1 : 2;
    }
    return b;
  };
}).call(this);
