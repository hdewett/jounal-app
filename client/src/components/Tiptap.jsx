import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { 
  FaBold, 
  FaItalic, 
  FaCode, 
  FaLaptopCode, 
  FaHeading,
  FaUndo,
  FaRedo,
  FaListOl,
  FaListUl
 } from 'react-icons/fa';
import React from 'react';
import parser from "html-react-parser";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <section className="btn-group flex w-2/3 justify-center">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={editor.isActive('bold') ? 'is-active btn btn-active' : 'btn' }
      >
        <FaBold size={25}/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'is-active btn btn-active' : 'btn'}
      >
        <FaItalic size={25}/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleCode()
            .run()
        }
        className={editor.isActive('code') ? 'is-active btn btn-active' : 'btn'}
      >
        <FaCode size={25}/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active btn btn-active' : 'btn'}
      >
        <FaHeading size={25}/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active btn btn-active' : 'btn'}
      >
        <FaListUl size={25}/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active btn btn-active' : 'btn'}
      >
        <FaListOl size={25} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active btn btn-active' : 'btn'}
      >
        <FaLaptopCode size={25}/>
      </button>
      <button
        className="btn btn-ghost"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
      >
        <FaUndo size={25}/>
      </button>
      <button
        className="btn btn-ghost"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
      >
        <FaRedo size={25}/>
      </button>
    </section>
  )
}

const TipTap = ({setEntryFormData}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: ``,
    onUpdate: ({editor}) => {
      // const html = editor.getHTML();
      // console.log(html);
    }
  })

  const today = new Date();
  const date = today.setDate(today.getDate()); 
  const defaultValue = new Date(date).toISOString().split('T')[0] // yyyy-mm-dd

  const getHtml = () => {
    const html = editor.getHTML();
    console.log(html);
  }

  return (
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="mockup-code bg-primary text-primary-content mb-10">
          <pre data-prefix="1"><code>Create A New Journal Entry!</code></pre>
        </div>
        <div className="flex w-full justify-center gap-x-3 mb-10">
        <input type="text" placeholder="Entry Title" className="input input-bordered w-full max-w-xs" />
        <input type="date" defaultValue={defaultValue} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
        <MenuBar editor={editor} className="w-2/3"/>
        <EditorContent editor={editor} className="textarea textarea-bordered w-2/3 mt-3 text-xl"/>
        <div className="w-2/3 flex gap-x-3 mt-3">
        <select className="select select-bordered w-auto max-w-xs">
          <option disabled selected>Language</option>
          <option>Javascript</option>
          <option>Python</option>
          <option>Java</option>
        </select>
        <select className="select select-bordered w-auto max-w-xs">
          <option disabled selected>Framework</option>
          <option>React</option>
          <option>Django</option>
          <option>Kotlin</option>
        </select>
        <select className="select select-bordered w-auto max-w-xs">
          <option disabled selected>Hours Spent Studying</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <input type="text" placeholder="Additional Notes" className="input input-bordered w-auto max-w-xs" />
        </div>
        <div className='flex w-2/3 justify-end mt-3 mb-10'>
          <button onClick={getHtml} className="btn btn-primary w-32">Save</button>
        </div>
      </div>
  )
}

export default TipTap