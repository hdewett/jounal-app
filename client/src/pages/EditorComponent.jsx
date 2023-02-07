import React from 'react';
import EditorJS from '@editorjs/editorjs';
import Paragraph from '@editorjs/paragraph';

export default function EditorComponent() {
 
 const editor = EditorJS({
   holder: 'editorjs',
   tools: {
     paragraph: {
       class: Paragraph,
       shortcut: 'CMD+SHIFT+H',
      }
   }
  });
 
  return (
    <div>
      <div id="editorjs" />
    </div>
  );
};