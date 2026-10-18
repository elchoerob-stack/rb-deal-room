# The demonstration

A showcase of the Deal Room for **Ruan Brand**, RB Brand Real Estate, with
made-up houses and made-up people.

- `index.html` — the overview: the problem, the nine screens, what it does not do
- `plan.html` — the rollout plan, six phases over about four weeks
- `proposal.html` — the proposal: scope, two ways of paying, terms
- `app/` — the Deal Room itself, exactly the published build

## Why it cannot touch the live app

`app/config.js` carries **no firebase block**, so `HAS_PROJECT()` is false: the
app never reaches for a project, opens straight into the sample data, and keeps
everything on the device it is opened on. Nothing syncs and nothing is shared.

It also sets `storeKey: "rb_demo_v1"`. That is the part that matters most. Both
sites are served from `elchoerob-stack.github.io`, so they share one browser
origin and would otherwise share one local store — a demonstration could
overwrite the agency's real work on the same phone. The separate key is what
keeps them apart.

`demo: true` stops it offering to install itself to anybody's home screen and
stops it registering a service worker.

## Opening it on a screen

`app/?as=<person>&view=<screen>` opens the demo as that person, already looking
at that screen; `&deal=<id>` or `&listing=<id>` opens a particular file. It works
only where there is no project configured — with one, who you are is Google's to
decide and an admin's to approve, and a link may not override that.

## Keeping it current

`app/index.html` is a copy of the published `index.html` in the parent folder.
After a change to the app:

    cp index.html demo/app/index.html
