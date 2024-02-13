export const gitLenConfig = {
  // gitlens
  "gitlens.codeLens.authors.enabled": false,
  "gitlens.codeLens.enabled": false,
  "gitlens.codeLens.recentChange.enabled": false,
  "gitlens.menus": {
    editor: {
      blame: false,
      clipboard: true,
      compare: true,
      history: false,
      remote: false,
    },
    editorGroup: {
      blame: true,
      compare: false,
    },
    editorTab: {
      clipboard: true,
      compare: true,
      history: true,
      remote: true,
    },
    explorer: {
      clipboard: true,
      compare: true,
      history: true,
      remote: true,
    },
    scm: {
      authors: true,
    },
    scmGroup: {
      compare: true,
      openClose: true,
      stash: true,
    },
    scmGroupInline: {
      stash: true,
    },
    scmItem: {
      clipboard: true,
      compare: true,
      history: true,
      remote: false,
      stash: true,
    },
  },
};
