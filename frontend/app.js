const STORAGE_KEY = "margin-cornell-notes-v1";

const starterNotes = [
  {
    id: "calculus-derivatives",
    title: "Calculus.md",
    date: "Nov 19, 2026",
    notebook: "Mathematics",
    topic: "Derivatives",
    cues: "•  What is a derivative?\n\n•  Rules of derivatives?\n\n•  When to use chain rule?\n\n•  Applications?",
    body: "1.  What is a Derivative?\n    •  It measures the rate of change of a function.\n\n        f′(x) = limₕ→₀  [ f(x + h) − f(x) ] / h\n\n2.  Basic Rules\n    •  Power Rule:     d/dx (xⁿ) = nxⁿ⁻¹\n    •  Product Rule:   (uv)′ = u′v + uv′\n    •  Quotient Rule:  (u/v)′ = (u′v − uv′) / v²\n\n3.  Chain Rule\n    •  If y = f(g(x)), then dy/dx = (dy/du)(du/dx)\n\n4.  Applications\n    •  Optimization\n    •  Physics (Motion)\n    •  Economics (Max/Min)",
    summary: "Derivatives help us understand how functions change and are essential in optimization and real-world problems.",
    favorite: true,
    updatedAt: Date.now(),
  },
  {
    id: "linear-algebra",
    title: "Linear Algebra.md",
    date: "Nov 18, 2026",
    notebook: "Mathematics",
    topic: "Vectors & matrices",
    cues: "•  What is a vector space?\n\n•  How do matrices transform vectors?\n\n•  What is an eigenvalue?",
    body: "Vectors describe magnitude and direction. A matrix represents a linear transformation between vector spaces.\n\nEigenvectors keep their direction during a transformation. The eigenvalue tells us how much they are stretched or compressed.",
    summary: "Linear algebra studies vectors, spaces, and transformations. Eigenvalues reveal the behavior of a matrix transformation.",
    favorite: false,
    updatedAt: Date.now() - 86400000,
  },
  {
    id: "relational-model",
    title: "Relational Model.md",
    date: "Nov 17, 2026",
    notebook: "Computer Science/DBMS",
    topic: "Database systems",
    cues: "•  What is a relation?\n\n•  How are keys used?",
    body: "A relation is a set of tuples over named attributes. A primary key uniquely identifies each row; foreign keys connect related tables.\n\nNormalization reduces redundancy and protects data integrity.",
    summary: "The relational model organizes data into tables linked by keys, with normalization used to reduce duplication.",
    favorite: false,
    updatedAt: Date.now() - 172800000,
  },
  {
    id: "sql-queries",
    title: "SQL Queries.md",
    date: "Nov 16, 2026",
    notebook: "Computer Science/DBMS",
    topic: "SQL",
    cues: "•  SELECT and WHERE\n\n•  How do joins work?",
    body: "SELECT chooses columns, FROM identifies a table, and WHERE filters rows.\n\nINNER JOIN returns matching rows. LEFT JOIN keeps every row from the left table and adds matching values from the right.",
    summary: "SQL retrieves and combines relational data with declarative queries.",
    favorite: false,
    updatedAt: Date.now() - 259200000,
  },
  {
    id: "react",
    title: "React.md",
    date: "Nov 15, 2026",
    notebook: "Computer Science/Web Development",
    topic: "Components",
    cues: "•  What makes a component?\n\n•  When should state change?",
    body: "A component is a reusable piece of interface. Props pass information in; state stores values that change over time.\n\nKeep state close to where it is used, and derive values instead of duplicating them.",
    summary: "React interfaces are composed from reusable components that respond to changes in state and props.",
    favorite: false,
    updatedAt: Date.now() - 345600000,
  },
  {
    id: "nodejs",
    title: "Node.js.md",
    date: "Nov 14, 2026",
    notebook: "Computer Science/Web Development",
    topic: "Runtime",
    cues: "•  What is the event loop?\n\n•  How does async I/O work?",
    body: "Node.js runs JavaScript outside the browser. Its event loop coordinates asynchronous work without blocking the main thread.\n\nPromises represent eventual results; async/await makes promise-based code easier to follow.",
    summary: "Node.js uses an event loop and asynchronous I/O to build responsive server-side applications.",
    favorite: false,
    updatedAt: Date.now() - 432000000,
  },
  {
    id: "kinematics",
    title: "Kinematics.md",
    date: "Nov 12, 2026",
    notebook: "Physics",
    topic: "Motion",
    cues: "•  Distance vs. displacement?\n\n•  What does acceleration measure?",
    body: "Position describes location relative to an origin. Displacement is the change in position; velocity is the rate of that change.\n\nFor constant acceleration: v = v₀ + at and x = x₀ + v₀t + ½at².",
    summary: "Kinematics describes motion through position, velocity, and acceleration without considering its causes.",
    favorite: false,
    updatedAt: Date.now() - 604800000,
  },
  {
    id: "electromagnetism",
    title: "Electromagnetism.md",
    date: "Nov 11, 2026",
    notebook: "Physics",
    topic: "Electric fields",
    cues: "•  How do charges interact?\n\n•  What creates a magnetic field?",
    body: "Electric charges create electric fields. A moving charge or current also creates a magnetic field.\n\nChanging magnetic fields induce electric fields, connecting the two parts of electromagnetism.",
    summary: "Electric and magnetic fields are linked aspects of one electromagnetic force.",
    favorite: false,
    updatedAt: Date.now() - 691200000,
  },
  {
    id: "health-fitness",
    title: "Health & Fitness.md",
    date: "Nov 9, 2026",
    notebook: "Personal",
    topic: "Wellbeing",
    cues: "•  What habits help me feel energized?",
    body: "Consistency matters more than intensity. Protect sleep, move every day, and leave time to recover.",
    summary: "Small, repeatable habits support long-term wellbeing.",
    favorite: false,
    updatedAt: Date.now() - 864000000,
  },
  {
    id: "life-goals",
    title: "Life Goals.md",
    date: "Nov 8, 2026",
    notebook: "Personal",
    topic: "Reflection",
    cues: "•  What do I want to make time for?",
    body: "Choose a few meaningful priorities. Break each one into a next step that can fit into this week.",
    summary: "Clear priorities become achievable when translated into small next steps.",
    favorite: false,
    updatedAt: Date.now() - 950400000,
  },
];

const fileTree = document.querySelector("#file-tree");
const fileSidebar = document.querySelector("#file-sidebar");
const titleInput = document.querySelector("#note-title");
const dateInput = document.querySelector("#note-date");
const topicInput = document.querySelector("#note-topic");
const cuesInput = document.querySelector("#note-cues");
const bodyInput = document.querySelector("#note-body");
const summaryInput = document.querySelector("#note-summary");
const searchInput = document.querySelector("#search-input");
const fields = [titleInput, dateInput, topicInput, cuesInput, bodyInput, summaryInput];

let notes = loadNotes();
let activeId = notes.find((note) => note.id === "calculus-derivatives")?.id ?? notes[0]?.id ?? null;
let saveTimer;
let toastTimer;
let favoritesOnly = false;
let previewMode = false;
const collapsedFolders = new Set();

function loadNotes() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (error) {
    console.warn("Could not load saved notes.", error);
  }
  return starterNotes.map((note) => ({ ...note }));
}

function activeNote() {
  return notes.find((note) => note.id === activeId);
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2200);
}

function persistNotes(showConfirmation = false) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    if (showConfirmation) showToast("Note saved on this device");
  } catch (error) {
    showToast("Unable to save notes in this browser.");
    console.error("Could not save notes.", error);
  }
}

function getVisibleNotes() {
  const query = searchInput.value.trim().toLowerCase();
  return notes.filter((note) => {
    const matchesSearch = `${note.title} ${note.notebook} ${note.topic} ${note.cues} ${note.body} ${note.summary}`
      .toLowerCase()
      .includes(query);
    return matchesSearch && (!favoritesOnly || note.favorite);
  });
}

function makeFolderIcon() {
  const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  icon.setAttribute("viewBox", "0 0 20 20");
  icon.setAttribute("aria-hidden", "true");
  icon.classList.add("tree-folder-icon");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M1.5 4.5h6l2 2h9v9h-17z");
  icon.append(path);
  return icon;
}

function makeFileIcon() {
  const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  icon.setAttribute("viewBox", "0 0 20 20");
  icon.setAttribute("aria-hidden", "true");
  icon.classList.add("tree-file-icon");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M4 2.5h7l5 5v10H4zM11 2.5v5h5M7 11h6m-6 3h6");
  icon.append(path);
  return icon;
}

function renderTree() {
  fileTree.replaceChildren();
  const tree = new Map();
  for (const note of getVisibleNotes()) {
    const segments = (note.notebook || "Unsorted").split("/");
    let node = tree;
    for (const segment of segments) {
      if (!node.has(segment)) node.set(segment, new Map());
      node = node.get(segment);
    }
    if (!node.has("__notes")) node.set("__notes", []);
    node.get("__notes").push(note);
  }

  if (!tree.size) {
    const empty = document.createElement("div");
    empty.className = "tree-empty";
    empty.textContent = favoritesOnly ? "No favorite notes yet." : "No files match your search.";
    fileTree.append(empty);
    return;
  }

  const renderLevel = (parent, children, path = "") => {
    for (const [name, value] of [...children].sort(([a], [b]) => a.localeCompare(b))) {
      if (name === "__notes") {
        for (const note of value) {
          const file = document.createElement("button");
          file.type = "button";
          file.className = `tree-file${note.id === activeId ? " active" : ""}`;
          file.setAttribute("aria-current", note.id === activeId ? "true" : "false");
          file.append(makeFileIcon());
          const label = document.createElement("span");
          label.textContent = note.title || "Untitled.md";
          file.append(label);
          file.addEventListener("click", () => selectNote(note.id));
          parent.append(file);
        }
        continue;
      }

      const folderPath = path ? `${path}/${name}` : name;
      const folder = document.createElement("div");
      folder.className = `tree-folder${collapsedFolders.has(folderPath) ? " collapsed" : ""}`;
      const row = document.createElement("button");
      row.type = "button";
      row.className = "tree-folder-row";
      const chevron = document.createElement("span");
      chevron.className = "tree-chevron";
      chevron.textContent = "⌄";
      row.append(chevron, makeFolderIcon());
      const label = document.createElement("span");
      label.className = "tree-folder-label";
      label.textContent = name;
      row.append(label);
      row.addEventListener("click", () => {
        if (collapsedFolders.has(folderPath)) collapsedFolders.delete(folderPath);
        else collapsedFolders.add(folderPath);
        renderTree();
      });
      const nested = document.createElement("div");
      nested.className = "tree-children";
      renderLevel(nested, value, folderPath);
      folder.append(row, nested);
      parent.append(folder);
    }
  };
  renderLevel(fileTree, tree);
}

function renderEditor() {
  const note = activeNote();
  for (const field of fields) field.disabled = !note || previewMode;
  if (!note) {
    for (const field of fields) field.value = "";
    document.querySelector("#preview-button span").textContent = "Preview";
    document.querySelector(".cornell-sheet").classList.remove("preview-mode");
    return;
  }

  titleInput.value = note.title || "Untitled.md";
  dateInput.value = note.date || "";
  topicInput.value = note.topic || "";
  cuesInput.value = note.cues || "";
  bodyInput.value = note.body || "";
  summaryInput.value = note.summary || "";
  document.querySelector("#preview-button span").textContent = previewMode ? "Edit" : "Preview";
  document.querySelector(".cornell-sheet").classList.toggle("preview-mode", previewMode);
}

function selectNote(id) {
  activeId = id;
  previewMode = false;
  fileSidebar.classList.remove("mobile-open");
  renderTree();
  renderEditor();
}

function createNote() {
  const note = {
    id: crypto.randomUUID ? crypto.randomUUID() : `note-${Date.now()}`,
    title: "Untitled.md",
    date: new Date().toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }),
    notebook: activeNote()?.notebook || "Mathematics",
    topic: "",
    cues: "",
    body: "",
    summary: "",
    favorite: false,
    updatedAt: Date.now(),
  };
  notes.unshift(note);
  activeId = note.id;
  previewMode = false;
  searchInput.value = "";
  favoritesOnly = false;
  document.querySelector("#favorites-button").classList.remove("active");
  renderTree();
  renderEditor();
  persistNotes();
  titleInput.focus();
  titleInput.select();
}

function saveActiveNote() {
  const note = activeNote();
  if (!note) return;
  note.title = titleInput.value.trim() || "Untitled.md";
  note.date = dateInput.value;
  note.topic = topicInput.value;
  note.cues = cuesInput.value;
  note.body = bodyInput.value;
  note.summary = summaryInput.value;
  note.updatedAt = Date.now();
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    persistNotes();
    renderTree();
  }, 350);
}

for (const field of fields) {
  field.addEventListener("input", () => {
    saveActiveNote();
  });
}

document.querySelector("#new-note-button").addEventListener("click", createNote);
searchInput.addEventListener("input", renderTree);
document.querySelector("#search-button").addEventListener("click", () => {
  fileSidebar.classList.add("search-open");
  fileSidebar.classList.remove("mobile-open");
  searchInput.focus();
});
document.querySelector("#files-button").addEventListener("click", () => {
  favoritesOnly = false;
  document.querySelector("#favorites-button").classList.remove("active");
  fileSidebar.classList.remove("search-open");
  renderTree();
});
document.querySelector("#favorites-button").addEventListener("click", (event) => {
  favoritesOnly = !favoritesOnly;
  event.currentTarget.classList.toggle("active", favoritesOnly);
  renderTree();
});
document.querySelector("#history-button").addEventListener("click", () => {
  notes.sort((a, b) => (b.updatedAt ?? 0) - (a.updatedAt ?? 0));
  renderTree();
  showToast("Showing recently updated notes");
});
document.querySelector("#refresh-button").addEventListener("click", () => {
  renderTree();
  showToast("File explorer refreshed");
});
document.querySelector("#new-folder-button").addEventListener("click", () => showToast("Choose a notebook to organize your notes."));
document.querySelector(".menu-button").addEventListener("click", () => {
  if (window.matchMedia("(max-width: 650px)").matches) {
    fileSidebar.classList.toggle("mobile-open");
  } else {
    document.querySelector(".app-shell").classList.toggle("explorer-hidden");
  }
});
document.querySelector("#theme-button").addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});
document.querySelector("#save-button").addEventListener("click", () => {
  clearTimeout(saveTimer);
  saveActiveNote();
  clearTimeout(saveTimer);
  persistNotes(true);
});
document.querySelector("#preview-button").addEventListener("click", () => {
  previewMode = !previewMode;
  renderEditor();
});
document.querySelector("#more-button").addEventListener("click", () => {
  const note = activeNote();
  if (!note) return;
  note.favorite = !note.favorite;
  renderTree();
  showToast(note.favorite ? "Added to favorites" : "Removed from favorites");
  persistNotes();
});
document.querySelector("#trash-button").addEventListener("click", () => {
  if (!activeNote()) return;
  const deletedTitle = activeNote().title;
  notes = notes.filter((note) => note.id !== activeId);
  activeId = notes[0]?.id ?? null;
  renderTree();
  renderEditor();
  persistNotes();
  showToast(`${deletedTitle} deleted`);
});
document.querySelector("#trash-row").addEventListener("click", () => showToast("Trash is empty"));
document.querySelector("#settings-button").addEventListener("click", () => showToast("Settings are coming soon."));
document.querySelector(".rail-avatar").addEventListener("click", () => showToast("Personal workspace"));

document.querySelectorAll(".format-button").forEach((button) => {
  button.addEventListener("click", () => {
    const marker = button.classList.contains("bold-button") ? "**"
      : button.classList.contains("italic-button") ? "*"
        : button.classList.contains("underline-button") ? "__"
          : button.classList.contains("strike-button") ? "~~"
            : button.classList.contains("code-button") ? "`"
              : null;
    bodyInput.focus();
    const start = bodyInput.selectionStart;
    const end = bodyInput.selectionEnd;
    if (marker && start !== end) {
      const selection = bodyInput.value.slice(start, end);
      bodyInput.setRangeText(`${marker}${selection}${marker}`, start, end, "select");
      saveActiveNote();
    } else if (button.classList.contains("list-format-button") || button.classList.contains("numbered-format-button")) {
      const prefix = button.classList.contains("list-format-button") ? "•  " : "1.  ";
      bodyInput.setRangeText(prefix, start, end, "end");
      saveActiveNote();
    } else if (button.classList.contains("table-button")) {
      bodyInput.setRangeText("| Column 1 | Column 2 |\n| --- | --- |\n|  |  |", start, end, "end");
      saveActiveNote();
    }
  });
});

document.addEventListener("keydown", (event) => {
  const typing = ["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName);
  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    renderTree();
    searchInput.blur();
    fileSidebar.classList.remove("search-open");
    return;
  }
  if (event.key.toLowerCase() === "n" && !typing && !event.metaKey && !event.ctrlKey && !event.altKey) {
    event.preventDefault();
    createNote();
  }
  if (event.key === "/" && !typing) {
    event.preventDefault();
    fileSidebar.classList.add("search-open");
    searchInput.focus();
  }
});

renderTree();
renderEditor();
persistNotes();
