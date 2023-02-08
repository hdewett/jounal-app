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
import { useState, useEffect } from 'react';
import axios from  'axios';
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const [newEntry, setnewEntry] = useState({
    title: "",
    date: "",
    entry:"",
    hours: "",
    language:"",
    framework:"",
    notes:"",
    user: 1
  });


  const updateEntry = (key, value) => {
    console.log("saving html!");
    setnewEntry((prev) =>{
  return {...prev, [key]:value}
    })
  }

  // Initializes TipTap text editor
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: ``,
  })

  // Save entry to the db
  const save = () => {
    const html = editor.getHTML();
    updateEntry("entry", html);
    console.log(html);

    axios.post('/api/entries', newEntry)
    .then((response) => {
      navigate("/entriesfeed")
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  // Formats and sets the default value of the date picker to today's date.
  const today = new Date();
  const date = today.setDate(today.getDate()); 
  const defaultValue = new Date(date).toISOString().split('T')[0] // yyyy-mm-dd

  // Get content from the text editor as html
  const getHtml = () => {
    const html = editor.getHTML();
    return html;
  }

  return (
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="mockup-code bg-primary text-primary-content mb-10">
          <pre data-prefix="1"><code>Create A New Journal Entry!</code></pre>
        </div>
        <form 
          className="flex flex-col justify-center items-center w-full" 
          onSubmit={((event) =>{
            event.preventDefault();
            save();})}>
        <div className="flex w-full justify-center gap-x-3 mb-10">
        <input 
          type="text" 
          placeholder="Entry Title"
          value={newEntry.title} 
          onChange={(event) => updateEntry("title", event.target.value)}
          className="input input-bordered w-full max-w-xs" 
        />
        <input 
          type="date" 
          defaultValue={defaultValue}
          value={newEntry.date}  
          onChange={(event) => updateEntry("date", event.target.value)}
          placeholder="Type here" 
          className="input input-bordered w-full max-w-xs" 
        />
        </div>
        {/* Editor ToolBar - bold, italic, code snippet, etc... */}
        <MenuBar editor={editor} className="w-2/3"/>
        {/* Editor */}
        <EditorContent editor={editor} className="textarea textarea-bordered w-2/3 mt-3 text-xl"/>
        <div className="w-2/3 flex gap-x-3 mt-3">
        <select 
          className="select select-bordered w-auto max-w-xs" 
          name="hours" 
          id="hours"  
          value={newEntry.language}  
          onChange={(event) => updateEntry("language", event.target.value)}>
            <option disabled selected>Language</option>
            <option value={1}>Javascript</option>
            <option value={2}>Python</option>
            <option value={3}>Java</option>
        </select>
        <select 
          className="select select-bordered w-auto max-w-xs"
          name="cars" 
          id="cars"  
          value={newEntry.framework}
          onChange={(event) => updateEntry("framework", event.target.value)}>
            <option disabled selected>Framework</option>
            <option value={1}>React</option>
            <option value={2}>Django</option>
            <option value={3}>Kotlin</option>
        </select>
        <select 
          className="select select-bordered w-auto max-w-xs"
          name="hours" 
          id="hours"  
          value={newEntry.hours}  
          onChange={(event) => updateEntry("hours", event.target.value)}>
            <option disabled selected>Hours Spent Studying</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select>
        <input 
        type="text"
        placeholder="Additional Notes" 
        className="input input-bordered w-auto max-w-xs" 
        value={newEntry.notes}
        onChange={(event) => updateEntry("notes", event.target.value)}/>
        </div>
        <div className='flex w-2/3 justify-end mt-3 mb-10'>
          <button type="submit" className="btn btn-primary w-32">Save</button>
        </div>
      </form>
      </div>
  )
}

export default TipTap