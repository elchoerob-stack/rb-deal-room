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

## Running it

`index.html` is entirely self-contained — no build step, no server, no dependencies.
Open the file in any browser, or serve the folder statically.

## Publishing

GitHub Pages, source: branch `main`, folder `/ (root)`.

## Note

Parties, prices and documents are illustrative. Nothing is uploaded anywhere: the
page keeps its state in the browser's local storage on the viewer's own device, under
a single key (`rb_dealroom_v4`), and never reads or removes anything else.
