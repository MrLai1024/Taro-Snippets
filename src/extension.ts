import * as vscode from "vscode";
import { Create } from "./tool/create";
import { template } from "./template/index";

export function activate(context: vscode.ExtensionContext) {
  const createHandler = (e: any, pageType: "vue" | "react") => {
    const uri = e.fsPath;
    try {
      let inputPromise = vscode.window.showInputBox({
        placeHolder: "请输入页面名称",
      });
      inputPromise.then((value: any) => {
        // 用户输入的页面名称
        if (!value) return;
        Create.createMiniPage(value, uri, template[pageType]);
      });
    } catch (e) {
      vscode.window.showErrorMessage(String(e));
    }
  };

  let newPage = vscode.commands.registerCommand("wxMini.newPage", (e) => {
    createHandler(e, "vue");
  });

  let newReactPage = vscode.commands.registerCommand("wxMini.newReactPage", (e) => {
    createHandler(e, "react");
  });

  context.subscriptions.concat([newPage, newReactPage]);
}

export function deactivate() {
  console.log("deactivate");
}
