import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";
import { EditorView } from "@codemirror/view";
import { dracula } from "@uiw/codemirror-themes-all";

const Editor = () => {
  const [code, setCode] = useState(`import random

def generate_ipv6_address():
    address = ""
    for _ in range(8):
        address += format(random.randint(0, 65535), 'x') + ":"
    return address[:-1]

ipv6_address = generate_ipv6_address()
print(ipv6_address)`);
  return (
    <CodeMirror
      extensions={[langs.python(), EditorView.lineWrapping]}
      value={code}
      theme={dracula}
      height="100vh"
      style={{ width: "100%" }}
      onChange={(val) => {
        setCode(val);
      }}
    />
  );
};

export default Editor;
