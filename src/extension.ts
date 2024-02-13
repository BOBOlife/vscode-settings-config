import type { ExtensionContext } from "vscode";
import { commands, workspace, ConfigurationTarget, window } from "vscode";
import { vimConfig } from "./vimSettings";
import { gitLenConfig } from "./gitLen";
import { searchExcludeConfig } from "./search.exclude";

export function activate(context: ExtensionContext) {
  console.log(
    'Congratulations, your extension "vscode-settings-config" is now active!'
  );

  let disposable = commands.registerCommand(
    "vscode-settings-config.configActivate",
    () => {
      const config = workspace.getConfiguration();
      const vscodeSettings = {
        ...vimConfig,
        ...gitLenConfig,
        ...searchExcludeConfig,
      };

      for (const [key, value] of Object.entries(vscodeSettings)) {
        config.update(key, value, ConfigurationTarget.Global).then(() => {
          window.showInformationMessage(`Vim setting ${key} has been updated.`);
        });
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
