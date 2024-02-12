export const vimConfig = {
  "vim.argumentObjectOpeningDelimiters": ["(", "[", "{"],
  "vim.argumentObjectClosingDelimiters": [")", "]", "}"],
  "vim.easymotion": true,
  "vim.showMarksInGutter": true,
  "vim.leader": "<Space>",
  "vim.foldfix": true,
  "vim.useSystemClipboard": false,
  "vim.easymotionJumpToAnywhereRegex":
    "\\b[A-Za-z0-9]|[A-Za-z0-9]\\b|_.|#.|=.|[a-z][A-Z]|{|\\(|\\[",
  "vim.sneak": false,
  "vim.visualModeKeyBindingsNonRecursive": [
    {
      // 在可视化模式下 y 之后光标停到当前的位置
      before: ["y"],
      after: ["y", "g", "v", "<esc>"],
    },
    {
      before: ["H"],
      after: ["^"],
    },
    {
      before: ["L"],
      after: ["g", "_"],
    },
    {
      before: ["J"],
      after: ["5", "j"],
    },
    {
      before: ["K"],
      after: ["5", "k"],
    },
    {
      // vim-indent-object
      before: ["a", "i"],
      after: ["a", "I"],
    },
    {
      // todo 等会看看还需要不
      before: ["<Leader>", "f"],
      after: ["<leader>", "<leader>", "2s"],
    },
    {
      // 重构手法： 提取函数
      before: ["<Leader>", "r", "f"],
      commands: [
        {
          command: "editor.action.refactor",
          args: {
            kind: "refactor.extract.function",
          },
        },
      ],
    },
    {
      // 重构手法： 提取变量
      before: ["<Leader>", "r", "v"],
      commands: ["abracadabra.extract"],
    },
    {
      // 向右侧跳转 利用的 easymotion
      before: ["<Leader>", "l"],
      after: ["<leader>", "<leader>", "l"],
    },
    {
      // 向左侧跳转 利用的 easymotion
      before: ["<Leader>", "h"],
      after: ["<leader>", "<leader>", "h"],
    },
    {
      // 基于行的向上跳转 利用的 easymotion
      before: ["<Leader>", "k"],
      after: ["<leader>", "<leader>", "k"],
    },
    {
      // 基于行的向下跳转 利用的 easymotion
      before: ["<Leader>", "j"],
      after: ["<leader>", "<leader>", "j"],
    },
    {
      // 基于单词的跳转 单词首 全局向下 基于 easymotion
      before: ["<Leader>", "w"],
      after: ["<leader>", "<leader>", "w"],
    },
    {
      // 基于单词的跳转 单词尾 全局向下 基于 easymotion
      before: ["<Leader>", "e"],
      after: ["<leader>", "<leader>", "e"],
    },
    {
      // 基于单词的跳转 单词首 全局向上 基于 easymotion
      before: ["<Leader>", "b"],
      after: ["<leader>", "<leader>", "b"],
    },
    {
      // 基于单词的跳转 单词尾 全局向上 基于 easymotion
      before: ["<Leader>", "g", "e"],
      after: ["<leader>", "<leader>", "g", "e"],
    },
  ],
  "vim.operatorPendingModeKeyBindings": [
    {
      before: ["H"],
      after: ["^"],
    },
    {
      before: ["L"],
      after: ["g", "_"],
    },
    {
      before: ["a", "i"],
      after: ["a", "I"],
    },
  ],
  "vim.normalModeKeyBindingsNonRecursive": [
    {
      before: ["<Leader>", "u"],
      after: ["~"],
    },
    {
      before: ["<C-h>"],
      after: ["g", "T"],
    },
    {
      before: ["<C-l>"],
      after: ["g", "t"],
    },
    {
      before: ["H"],
      after: ["^"],
    },
    {
      before: ["L"],
      after: ["g", "_"],
    },
    {
      before: ["J"],
      after: ["5", "j"],
    },
    {
      before: ["K"],
      after: ["5", "k"],
    },
    {
      // 选中一个对象/数组
      before: ["<leader>", "s"],
      after: ["V", "$", "%"],
    },
    {
      // 向右侧跳转 利用的 easymotion
      before: ["<Leader>", "l"],
      after: ["<leader>", "<leader>", "l"],
    },
    {
      // 向左侧跳转 利用的 easymotion
      before: ["<Leader>", "h"],
      after: ["<leader>", "<leader>", "h"],
    },
    {
      // 基于行的向上跳转 利用的 easymotion
      before: ["<Leader>", "k"],
      after: ["<leader>", "<leader>", "k"],
    },
    {
      // 基于行的向下跳转 利用的 easymotion
      before: ["<Leader>", "j"],
      after: ["<leader>", "<leader>", "j"],
    },
    {
      // 基于单词的跳转 单词首 全局向下 基于 easymotion
      before: ["<Leader>", "w"],
      after: ["<leader>", "<leader>", "w"],
    },
    {
      // 基于单词的跳转 单词尾 全局向下 基于 easymotion
      before: ["<Leader>", "e"],
      after: ["<leader>", "<leader>", "e"],
    },
    {
      // 基于单词的跳转 单词首 全局向上 基于 easymotion
      before: ["<Leader>", "b"],
      after: ["<leader>", "<leader>", "b"],
    },
    {
      // 基于单词的跳转 单词尾 全局向上 基于 easymotion
      before: ["<Leader>", "g", "e"],
      after: ["<leader>", "<leader>", "g", "e"],
    },
    // 删除一个函数
    {
      before: ["<space>", "d", "j"],
      commands: ["delete-function.deleteFunction"],
    },
    {
      // 创建一个函数 光标需要在要创建的函数上
      before: ["<Leader>", "c", "f"],
      commands: ["hocusPocus.createFunction"],
    },
    {
      // 创建一个变量 光标需要在要创建的函数上
      before: ["<Leader>", "c", "v"],
      commands: ["hocusPocus.createVariable"],
    },
    {
      // 重构手法： 提取变量
      before: ["<Leader>", "r", "v"],
      commands: ["abracadabra.extract"],
    },
    {
      before: ["<Leader>", "g", "g"],
      commands: ["workbench.view.scm"],
    },
    {
      // 创建一个文件夹
      before: ["<Leader>", "n", "d"],
      commands: ["explorer.newFolder"],
    },
    {
      // 创建一个文件
      before: ["<Leader>", "n", "f"],
      commands: ["explorer.newFile"],
    },
    {
      // 全局格式化代码
      before: ["<Leader>", "d", "f"],
      commands: ["editor.action.formatDocument"],
    },
    {
      // 重命名
      before: ["<Leader>", "r", "n"],
      commands: ["abracadabra.renameSymbol"],
    },
    {
      before: ["J"],
      after: ["5", "j"],
    },
    {
      before: ["K"],
      after: ["5", "k"],
    },
  ],
};
