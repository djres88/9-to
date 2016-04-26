# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.

## Note Cycles

### Notes API Request Actions

* `fetchAllReservations`
  0. invoked from `ReservationsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/reservations` is called.
  0. `receiveAllReservations` is set as the callback.

* `createNote`
  0. invoked from new note button `onClick`
  0. `POST /api/reservations` is called.
  0. `receiveSingleNote` is set as the callback.

* `fetchSingleNote`
  0. invoked from `NoteDetail` `didMount`/`willReceiveProps`
  0. `GET /api/notes/:id` is called.
  0. `receiveSingleNote` is set as the callback.

* `updateNote`
  0. invoked from `NoteForm` `onSubmit`
  0. `POST /api/notes` is called.
  0. `receiveSingleNote` is set as the callback.

* `destroyNote`
  0. invoked from delete note button `onClick`
  0. `DELETE /api/notes/:id` is called.
  0. `removeNote` is set as the callback.

### Notes API Response Actions

* `receiveAllNotes`
  0. invoked from an API callback.
  0. `Note` store updates `_notes` and emits change.

* `receiveSingleNote`
  0. invoked from an API callback.
  0. `Note` store updates `_notes[id]` and emits change.

* `removeNote`
  0. invoked from an API callback.
  0. `Note` store removes `_notes[id]` and emits change.

### Store Listeners

* `NotesIndex` component listens to `Note` store.
* `NoteDetail` component listens to `Note` store.


## Notebook Cycles

### Notebooks API Request Actions

* `fetchAllWorkspaces`
  0. invoked from `WorkspaceIndex` `didMount`/`willReceiveProps`
  0. `GET /api/workspaces` is called.
  0. `receiveAllWorkspaces` is set as the callback.


* `fetchSingleWorkspace`
  0. invoked from `WorkspaceDetail` `didMount`/`willReceiveProps`
  0. `GET /api/workspaces/:id` is called.
  0. `receiveSingleWorkspace` is set as the callback.

* Create/update/destroy workspaces as bonus (owner features). Main CRUD = reservations (user feature).
  <!-- * `createWorkspace`
  0. invoked from new notebook button `onClick`
  0. `POST /api/notebooks` is called.
  0. `receiveSingleWorkspace` is set as the callback. -->

<!-- * `updateWorkspace`
  0. invoked from `WorkspaceForm` `onSubmit`
  0. `POST /api/workspaces` is called.
  0. `receiveSingleWorkspace` is set as the callback. -->

<!-- * `destroyWorkspace`
  0. invoked from delete workspace button `onClick`
  0. `DELETE /api/workspaces/:id` is called.
  0. `removeWorkspace` is set as the callback. -->

### Notebooks API Response Actions

* `receiveAllWorkspaces`
  0. invoked from an API callback.
  0. `Notebook` store updates `_notebooks` and emits change.

* `receiveSingleWorkspace`
  0. invoked from an API callback.
  0. `Notebook` store updates `_notebooks[id]` and emits change.

* `removeWorkspace`
  0. invoked from an API callback.
  0. `Notebook` store removes `_notebooks[id]` and emits change.

### Store Listeners

* `Workspaces` component listens to `Workbook` store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `NoteSearchBar` `onChange` when there is text
  0. `GET /api/notes` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `NoteSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
