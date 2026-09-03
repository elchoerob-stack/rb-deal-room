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
  lists, cards, labels, due dates, members and checklists

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

## Team sync (optional)

Without `config.js` the app keeps everything on the device it was typed on.
To share a workspace between phones and between team members:

1. Create a Firebase project and add a **Web app** to it.
2. Enable **Authentication → Google** and **Firestore Database**.
3. Copy `config.example.js` to `config.js` and paste the web config in.
   `config.js` is git-ignored; the web config identifies the project and
   grants nothing on its own.
4. Publish `firestore.rules` (Firestore → Rules → paste → Publish).
5. Sign each person in once, then add a document `staff/<their Auth UID>`
   in the console. Only listed staff can read or write anything.

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
