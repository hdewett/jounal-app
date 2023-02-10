INSERT INTO languages(name)
VALUES
('Javascript'),
('Python'),
('Java');

INSERT INTO frameworks(name)
VALUES
('React'),
('Django'),
('Kotlin');

INSERT INTO entries (title, date, entry, language_id, framework_id, hours, notes)
VALUES

  ('Learning to Program', '2022-02-03', '<p>If you are just learning how to <strong>program,&nbsp;</strong>then you should definitely read this entire article.</p>
    <p>To write a quick Javascript program all you need to do is:</p>
    <pre class="language-javascript"><code>// This is a comment

    // This is how you print something to the console.

    console.log("Neat!")

    const getUserData = (data) =&gt; {
      const addTwo - data.map( (x) =&gt; x += 2);
      return addTwo;
    }</code></pre>
    <p>cool right!?</p>', 1, 1, 3, 'Some cool Notes' ),

  ('How do promises work??', '2022-02-02', '<pre class="language-css"><code>const updateEntry = (key, value) =&gt; {
    setnewEntry((prev) =&gt;{
    console.log("State Updating: ", key, value);
    return {...prev, [key]:value}
    })
    }</code></pre>', 2, 2, 1, 'Classes and methods' ),
  
  ('Asynchronous Programming for Beginners', '2022-02-01', '<p>What the heck is <strong>asynchronous programming</strong> and how does it work!?</p>
    <p>Here is a basic example of some asynchronous code:</p>
    <pre class="language-javascript"><code>const handleDelete = async (id) =&gt; {
        await axios.delete(`/api/entries/` + id);
        navigate("/entriesfeed")
        console.log("Deleting Entry ID: ", id);
      }</code></pre>
    <p>Check out our other articles for more <em>tips!</em></p>', 3, 3, 4, 'Cool notes bro' ),

    ('Introduction to React', '2022-02-03', '<p>I <strong>LOVE,&nbsp;</strong> learning about state!</p>
    <p>To write a quick Javascript program all you need to do is:</p>
    <pre class="language-javascript"><code>// This is a comment

    // This is how you print something to the console.

    console.log("Neat!")

    const getUserData = (data) =&gt; {
      const addTwo - data.map( (x) =&gt; x += 2);
      return addTwo;
    }</code></pre>
    <p>cool right!?</p>', 2, 1, 3, 'Some cool Notes' ),
    
    ('Learning to Program', '2022-02-03', '<p>If you are just learning how to <strong>program,&nbsp;</strong>then you should definitely read this entire article.</p>
    <p>To write a quick Javascript program all you need to do is:</p>
    <pre class="language-javascript"><code>// This is a comment

    // This is how you print something to the console.

    console.log("Neat!")

    const getUserData = (data) =&gt; {
      const addTwo - data.map( (x) =&gt; x += 2);
      return addTwo;
    }</code></pre>
    <p>cool right!?</p>', 1, 1, 3, 'Some cool Notes' ),
    
    ('Learning to Program', '2022-02-03', '<p>If you are just learning how to <strong>program,&nbsp;</strong>then you should definitely read this entire article.</p>
    <p>To write a quick Javascript program all you need to do is:</p>
    <pre class="language-javascript"><code>// This is a comment

    // This is how you print something to the console.

    console.log("Neat!")

    const getUserData = (data) =&gt; {
      const addTwo - data.map( (x) =&gt; x += 2);
      return addTwo;
    }</code></pre>
    <p>cool right!?</p>', 3, 1, 3, 'Some cool Notes' ),
    
    ('Learning to Program', '2022-02-03', '<p>If you are just learning how to <strong>program,&nbsp;</strong>then you should definitely read this entire article.</p>
    <p>To write a quick Javascript program all you need to do is:</p>
    <pre class="language-javascript"><code>// This is a comment

    // This is how you print something to the console.

    console.log("Neat!")

    const getUserData = (data) =&gt; {
      const addTwo - data.map( (x) =&gt; x += 2);
      return addTwo;
    }</code></pre>
    <p>cool right!?</p>', 2, 1, 3, 'Some cool Notes' ),
    
    ('Learning to Program', '2022-02-03', '<p>If you are just learning how to <strong>program,&nbsp;</strong>then you should definitely read this entire article.</p>
    <p>To write a quick Javascript program all you need to do is:</p>
    <pre class="language-javascript"><code>// This is a comment

    // This is how you print something to the console.

    console.log("Neat!")

    const getUserData = (data) =&gt; {
      const addTwo - data.map( (x) =&gt; x += 2);
      return addTwo;
    }</code></pre>
    <p>cool right!?</p>', 1, 1, 3, 'Some cool Notes' )
