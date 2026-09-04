# RB Brand Deal Room

A working concept for a multi-party South African property transfer portal, built
for review by the RB Brand Real Estate team.

**Live page:** https://elchoerob-stack.github.io/rb-deal-room/

One secure room per sale, shared by the agent, purchaser, seller and transferring
attorney, following the local conveyancing sequence from signed OTP to registration
at the Deeds Office.

- **Deal rooms** — an agent's portfolio of files; each room keeps its own documents,
  tasks, messages and audit log, sealed off from every other room
- **Transfer tracker** — the seven stages, with each task owned by the party
  responsible and gated on the stage before it
- **Document vault** — role-based access under POPIA (Act 4 of 2013, as amended
  April 2025); links to a document expire after 15 minutes
- **Invitations** — a personal join link per party, per room, revocable at any time
- **Team overview** — a principal's view of every agent, the pipeline, and the files
  that have stopped moving
- **Board** — a kanban board shared by the team, where each card *is* a house or a
  transfer and moves as its file moves; alongside cards the team writes themselves
- **Today** — what needs you now: assignments, mentions, due cards, outstanding
  steps, unread messages and offers waiting on an answer
- **Trello import** — an exported board JSON comes across as its own board, keeping
  lists, cards, labels, due dates, members and checklists. Prospecting cards
  (a listing link, an erf and address, the owner's numbers and dated call
  notes pasted in as text) are read back into structure: the owner gets a
  Call and a WhatsApp button per number, the notes stay notes, and a card
  under another agency's mandate carries the date that mandate lapses
- **Mandate watch** — a house under someone else's sole mandate surfaces on Today
  the fortnight before that mandate runs out, with the owner's number ready
- **Prospect → house → deal room** — a card she has won becomes a house on the
  Pipeline with the owner as seller; an offer on it opens a deal room with the
  property and the seller already filled in. The card stays on its board, linked
  both ways
- **Staff & access** — an admin's screen: who is waiting to be let in, who has
  access and at what level, and the roster the app knows as the team

## Commission and paperwork

Commission lives on the mandate, per deal: a percentage or a fixed fee, VAT
inclusive or on top, split by percentage between the agency, the agent, a
partner agency and a referring agent on a buyout. It is visible only to the
principal, the deal's agent, and anyone named in a split — never to a
purchaser, seller or attorney, on any screen or in any document they receive.

Paperwork is filled in on screen, printed or saved as PDF, and signed where
the law allows it. A mandate may be signed on screen; an Offer to Purchase
may not — the ECT Act (s 4(4), Schedule 2) excludes agreements for the
alienation of land from electronic signature — so the app offers signing on
the one and prints hand-signing instructions on the other.

## On a phone

The page installs to the home screen: `manifest.webmanifest`, a service worker
(`sw.js`, network-first for pages) and the icon set. Once installed it opens
without browser chrome, keeps working with no signal, and offers Today and Board
as home-screen shortcuts.

## Running it

`index.html` is entirely self-contained — no build step, no server, no dependencies.
Open the file in any browser, or serve the folder statically.

## Signing in

With a project configured, the app **opens on a sign-in page** and shows
nothing of the agency's work — no navigation, no houses, no names — until
Google says who you are and an admin has approved you. Someone signed in
but not yet approved gets a page explaining that, not a broken app.
Without `config.js` (the artifact preview) it opens on the sample data
instead, which is the only place the sample data can now be reached.

## Getting the team started

- **Getting started** is a checklist on Today (and on Staff & access for
  an admin) that reads real state and ticks itself off: import your board,
  put a house on the books, open a deal room, set the fee, let a client in,
  set your year. Each unfinished step has a button that goes there.
- **How this works** explains every screen in plain language, per role,
  and ends with an honest list of what the app does *not* do.
- Adding someone to the roster **sends them nothing** — the screen says so,
  and each row has a button that writes the invitation and hands it to
  WhatsApp or your mail app for you to send.

## Going live

Everything seeded for the demo carries `demo:true`. It goes two ways: the
first time an approved person signs in on a device, and deliberately from
**Staff & access → Going live**, which also deletes it from the shared
workspace. Anything the team has made stays.

## Team sync

Without `config.js` the app keeps everything on the device it was typed on.
To share a workspace between phones and between team members:

1. Create a Firebase project and add a **Web app** to it.
2. Enable **Authentication → Google** and **Firestore Database**.
3. Put the web config in `config.js` (see `config.example.js`). It is
   committed: the web config identifies the project and grants nothing on
   its own — access is decided by the rules and the staff list.
4. Publish `firestore.rules` (Firestore → Rules → paste → Publish).
5. **The first admin, by hand, once.** Open the live page, sign in with
   Google, and the app leaves a request. In the console, Firestore → Data,
   create collection `staff`, document ID = your Auth UID (Authentication →
   Users), with fields `role: "admin"` and `as: "jacques"`. Reload.
6. **Everyone after that, from inside the app.** Each person signs in once
   and waits. The admin opens **Staff & access**, sees the request, picks
   who they are in the app and their level (agent, principal, admin) and
   approves. Access starts then and ends the moment they are removed.
   To hand over, make the next admin an admin, then remove yourself.

The signed-in person is one identity — the switcher is for the demo only
and locks once a real sign-in is mapped.

Each card, house and transfer is one document, so two people editing
different things never collide; within one document the newer revision
wins. Writes are debounced, and the left rail shows the current state:
on this device / connecting / synced / offline.

## Publishing

GitHub Pages, source: branch `main`, folder `/ (root)`.

## Note

Parties, prices and documents are illustrative. Nothing is uploaded anywhere: the
page keeps its state in the browser's local storage on the viewer's own device, under
a single key (`rb_dealroom_v4`), and never reads or removes anything else.
