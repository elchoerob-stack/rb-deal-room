/* The demonstration copy.

   No firebase block, so the app never reaches for a project: it opens
   straight into the sample data and keeps everything on the device it
   is opened on. The separate storeKey is what matters most — the live
   app and this one are served from the same host, so without it they
   would share one browser store and a demo could overwrite real work.

   demo:true also keeps it from offering to install itself to anybody's
   home screen. A demonstration is something you look at, not something
   you keep. */

window.RB_CONFIG = {
  storeKey: "rb_demo_v1",
  demo: true,
};
