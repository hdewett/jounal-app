INSERT INTO languages(name)
VALUES
('Javascript'),
('Python'),
('Java'),
('PHP'),
('Ruby'),
('CSS'),
('HTML'),
('TypeScript'),
('C'),
('C++'),
('C#');

INSERT INTO frameworks(name)
VALUES
('React'),
('Angular'),
('Vue'),
('Rails'),
('Nextjs'),
('Express'),
('Laravel'),
('Django'),
('Svelte'),
('Kotlin');

INSERT INTO users (name, email, password, avatar_img)
VALUES
('Nawal Abdi', 'nawal@hotmail.com', '123456', 'https://i.pinimg.com/564x/b7/36/89/b736890303b732584184902570e7feab.jpg'),
('Ethan Steip', 'ethan@hotmail.com', '123456', 'https://i.pinimg.com/564x/67/a6/c9/67a6c9cac55d1a0d5132948aa9f1cf82.jpg' ),
('Hilora Dewitt', 'Hilora@hotmail.com', '123456', 'https://i.pinimg.com/564x/21/4f/d9/214fd92de6c271df2b7386e95f455180.jpg'),
('Tom From Myspace', 'Tom@hotmail.com', '123456', 'https://i.pinimg.com/564x/e0/1a/e7/e01ae709ab94fc47138ab75d79c34c69.jpg'),
('Fred VanVleet', 'freddy@hotmail.com', '123456', 'https://i.pinimg.com/564x/1b/ef/ac/1befacc8fe56021f0257b596acddec14.jpg'),
('Marie Curie', 'curie@hotmail.com', '123456', 'https://i.pinimg.com/564x/0a/08/a8/0a08a81b2524b9e5ef2be3e71993cccf.jpg'),
('Alan Turing', 'turing@hotmail.com', '123456', 'https://i.pinimg.com/564x/95/6e/f6/956ef678452e055ec407e87a34287e6f.jpg' ),
('Margaret Hamilton', 'marg@hotmail.com', '123456', 'https://i.pinimg.com/564x/88/72/2d/88722d7f72e2ca3e54dacf0499b1dd46.jpg'),
('Sergey Brin', 'sergey@hotmail.com', '123456', 'https://i.pinimg.com/564x/4b/b8/55/4bb855f9cdd38792ebfbfb79066811e5.jpg'),
('Ada Lovelace', 'Ada@hotmail.com', '123456', 'https://i.pinimg.com/564x/da/9a/34/da9a346fe6e5276526ccb98a9d6c573e.jpg');

INSERT INTO entries (title, date, entry, private, language_id, framework_id, hours, notes, user_id)
VALUES

  ('Learning to Program', '2023-02-01', '<p>If you are just learning how to <strong>program,&nbsp;</strong>then you should definitely read this entire article.</p>
    <p>To write a quick Javascript program all you need to do is:</p>
    <pre class="language-javascript"><code>// This is a comment

    // This is how you print something to the console.

    console.log("Neat!")

    const getUserData = (data) =&gt; {
      const addTwo - data.map( (x) =&gt; x += 2);
      return addTwo;
    }</code></pre>
    <p>cool right!?</p>', true, 1, 1, 3, 'Some cool Notes', 1),

  ('How do promises work??', '2023-02-02', '<p>Promises work like magic. And im actually still dont fully understand how they work...</p>
    <pre class="language-css"><code>const updateEntry = (key, value) =&gt; {
        setnewEntry((prev) =&gt;{
        console.log("State Updating: ", key, value);
        return {...prev, [key]:value}
        })
        }</code></pre>
    <p><strong>That is all!</strong></p>', true, 2, 2, 1, 'Classes and methods', 1),
  
  ('Asynchronous Programming for Beginners', '2023-02-03', '<p>What the heck is <strong>asynchronous programming</strong> and how does it work!?</p>
    <p>Here is a basic example of some asynchronous code:</p>
    <pre class="language-javascript"><code>const handleDelete = async (id) =&gt; {
        await axios.delete(`/api/entries/` + id);
        navigate("/entriesfeed")
        console.log("Deleting Entry ID: ", id);
      }</code></pre>
    <p>Check out our other articles for more <em>tips!</em></p>', false, 3, 3, 4, 'Cool notes bro', 1),

  ('Practice with ternary operators', '2023-02-03', '<p>The&nbsp;<strong>conditional (ternary) operator</strong>&nbsp;is
     the only JavaScript operator that takes three operands: a condition 
     followed by a question mark (<code>?</code>), then an expression to execute if 
     the condition is&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Glossary/Truthy">truthy</a>&nbsp;followed by a 
     colon (<code>:</code>), and finally the expression to execute if the condition is&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy">falsy</a>. This operator 
     is frequently used as an alternative to an&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else"><code>if...else</code></a>&nbsp;statement.</p> <pre class="language-javascript">
     <code>function getFee(isMember) { return (isMember ? $2.00 : $10.00); } console.log(getFee(true)); // Expected output: "$2.00" console.log(getFee(false)); // Expected output: "$10.00" console.log(getFee(null)); // Expected output:
      "$10.00" </code></pre> <p>&nbsp;</p> <p>The Syntax for the ternary operator is as follows:</p> <pre class="language-javascript"><code>condition ? exprIfTrue : exprIfFalse</code></pre> 
      <p>Hope you enjoyed!</p>', false, 4, 4, 3, 'Once you get to know ternarys and are comfortable working with them, they are a game changer!', 1),

  ('Object Destructuring: The eighth wonder of the world', '2023-02-04', '<h1>Destructuring assignment</h1>
    <div class="section-content">
    <p>The&nbsp;<strong>destructuring assignment</strong>&nbsp;syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.</p>
    <p>&nbsp;</p>
    <pre class="language-javascript"><code>let a, b, rest;
    [a, b] = [10, 20];

    console.log(a);
    // Expected output: 10

    console.log(b);
    // Expected output: 20

    [a, b, ...rest] = [10, 20, 30, 40, 50];

    console.log(rest);
    // Expected output: Array [30, 40, 50]
    </code></pre>
    </div>', false, 5, 5, 3, 'Object destructuring is an amazing tool to add to your skillset. 
        Especially when using it to manage state in React.', 1),

  ('Getting to know CSS', '2023-02-01', '<h1>CSS: Cascading Style Sheets</h1>
    <div class="section-content">
    <p><strong>Cascading Style Sheets</strong>&nbsp;(<strong>CSS</strong>) is a&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet">stylesheet</a>&nbsp;language used to describe the presentation of a document written in&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>&nbsp;or&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction">XML</a>&nbsp;(including XML dialects such as&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/SVG">SVG</a>,&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/MathML">MathML</a>&nbsp;or&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Glossary/XHTML">XHTML</a>). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.</p>
    <p>CSS is among the core languages of the&nbsp;<strong>open web</strong>&nbsp;and is standardized across Web browsers according to&nbsp;<a class="external" href="https://www.w3.org/Style/CSS/#specs" target="_blank" rel="noopener">W3C specifications</a>. Previously, the development of various parts of CSS specification was done synchronously, which allowed the versioning of the latest recommendations. You might have heard about CSS1, CSS2.1, or even CSS3. There will never be a CSS3 or a CSS4; rather, everything is now CSS without a version number.</p>
    <pre class="language-css"><code>.body {
      margin:0;
      padding:0;
      box-sizing: border-box;
      font-family: sans-serif;
    }

    .tiny-mce {
      display: flex;
      width: 800px;
    }</code></pre>
    </div>', false, 6, 6, 3, 'If youre new to web development, be sure to read our CSS basics article to learn what CSS is and how to use it.', 6),

      ('The basics of HTML', '2023-02-02', '<h1>HTML: HyperText Markup Language</h1>
<div class="section-content">
<p><strong>HTML</strong>&nbsp;(HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web pages appearance/presentation (<a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>) or functionality/behavior (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>).</p>
<p>"Hypertext" refers to links that connect web pages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web. By uploading content to the Internet and linking it to pages created by other people, you become an active participant in the World Wide Web.</p>
<p>&nbsp;</p>
<p>Here is a basic example:</p>
<pre class="language-markup"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;

&lt;h1&gt;My First Heading&lt;/h1&gt;
&lt;p&gt;My first paragraph.&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;</code></pre>
</div>', false, 7, 7, 3, 'Think of html as the skeleton of your web pages!', 7),

('How do you use .filter in JS?', '2023-02-7', '<h1>Array.prototype.filter()</h1>
<div class="section-content">
<p>The&nbsp;<strong><code>filter()</code></strong>&nbsp;method creates a&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy">shallow copy</a>&nbsp;of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.</p>
<p>&nbsp;</p>
<pre class="language-javascript"><code>const words = [spray, limit, elite, exuberant, destruction, present];

const result = words.filter(word =&gt; word.length &gt; 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]</code></pre>
</div>', false, 8, 8, 3, 'Think of html as the skeleton of your web pages!', 1),

('How to create classes in Python?', '2023-02-08', '<p>Python uses an <u>init</u> constructor to set up classes!</p>
    <p>&nbsp;</p>
    <pre class="language-python"><code>class Person:
      def init(self, name, age):
        self.name = name
        self.age = age

    p1 = Person("John", 36)

    print(p1.name)
    print(p1.age)</code></pre>', false, 6, 4, 3, 'Think of html as the skeleton of your web pages!', 1),
    
    ('How do I use power functions in Java?', '2023-02-08', '<p>How do I use power functions in Java?</p>
      <p>Here is an example of using <em><strong>powers in Java:</strong></em></p>
      <pre class="language-java"><code>Math.pow(4, 2)</code></pre>
      <p>This is equivalent to typing 4 to the power of 2.</p>', false, 7, 7, 3, 'Think of html as the skeleton of your web pages!', 1),
      
      ('Building Native Apps in React-Native', '2023-02-09', '<p>Python uses an <u>init</u> constructor to set up classes!</p>
    <p>&nbsp;</p>
    <pre class="language-python"><code>class Person:
      def init(self, name, age):
        self.name = name
        self.age = age

    p1 = Person("John", 36)

    print(p1.name)
    print(p1.age)</code></pre>', false, 1, 3, 3, 'Think of html as the skeleton of your web pages!', 1),
    
    ('What is C# Operator Precedence?', '2023-02-10', '<p>Python uses an <u>init</u> constructor to set up classes!</p>
    <p>&nbsp;</p>
    <pre class="language-python"><code>class Person:
      def init(self, name, age):
        self.name = name
        self.age = age

    p1 = Person("John", 36)

    print(p1.name)
    print(p1.age)</code></pre>', false, 1, 2, 3, 'Think of html as the skeleton of your web pages!', 1),
    
    ('How to set up a workspace in Java Eclipse', '2023-02-10', '<p>Python uses an <u>init</u> constructor to set up classes!</p>
    <p>&nbsp;</p>
    <pre class="language-python"><code>class Person:
      def init(self, name, age):
        self.name = name
        self.age = age

    p1 = Person("John", 36)

    print(p1.name)
    print(p1.age)</code></pre>', false, 1, 1, 3, 'Think of html as the skeleton of your web pages!', 1),
    
    ('How to set up a workspace in PyCharm', '2023-02-10', '<p>Python uses an <u>init</u> constructor to set up classes!</p>
    <p>&nbsp;</p>
    <pre class="language-python"><code>class Person:
      def init(self, name, age):
        self.name = name
        self.age = age

    p1 = Person("John", 36)

    print(p1.name)
    print(p1.age)</code></pre>', false, 8, 1, 3, 'Think of html as the skeleton of your web pages!', 1),
    

    ('What is `this` Keyword in JavaScript? Here`s How to Implement It', '2023-02-02', '<p>Python uses an <u>init</u> constructor to set up classes!</p>
    <p>&nbsp;</p>
    <pre class="language-python"><code>class Person:
      def init(self, name, age):
        self.name = name
        self.age = age

    p1 = Person("John", 36)

    print(p1.name)
    print(p1.age)</code></pre>', false, 8, 1, 3, 'Think of html as the skeleton of your web pages!', 5),
    
    ('How to Set Up Unit Testing for Java', '2023-02-01', '<p>Python uses an <u>init</u> constructor to set up classes!</p>
    <p>&nbsp;</p>
    <pre class="language-python"><code>class Person:
      def init(self, name, age):
        self.name = name
        self.age = age

    p1 = Person("John", 36)

    print(p1.name)
    print(p1.age)</code></pre>', false, 5, 5, 3, 'Think of html as the skeleton of your web pages!', 10),
    
    ('What is Cypress testing?', '2023-02-02', '<p>Python uses an <u>init</u> constructor to set up classes!</p>
    <p>&nbsp;</p>
    <pre class="language-python"><code>class Person:
      def init(self, name, age):
        self.name = name
        self.age = age

    p1 = Person("John", 36)

    print(p1.name)
    print(p1.age)</code></pre>', false, 4, 7, 3, 'Think of html as the skeleton of your web pages!', 9),
    
    ('Alternative Methods to Using Nested For Loops in Javascript', '2023-02-10', '<p>Python uses an <u>init</u> constructor to set up classes!</p>
    <p>&nbsp;</p>
    <pre class="language-python"><code>class Person:
      def init(self, name, age):
        self.name = name
        self.age = age

    p1 = Person("John", 36)

    print(p1.name)
    print(p1.age)</code></pre>', false, 1, 3, 3, 'Think of html as the skeleton of your web pages!', 9),
    
    ('What is PostgreSQL?', '2023-02-13', '<p>Python uses an <u>init</u> constructor to set up classes!</p>
    <p>&nbsp;</p>
    <pre class="language-python"><code>class Person:
      def init(self, name, age):
        self.name = name
        self.age = age

    p1 = Person("John", 36)

    print(p1.name)
    print(p1.age)</code></pre>', false, 2, 8, 3, 'Think of html as the skeleton of your web pages!', 8),
    
    ('How to Avoid Infinite Loops in Javascript: Understanding Comparison Operators', '2023-02-14', '<p>Python uses an <u>init</u> constructor to set up classes!</p>
    <p>&nbsp;</p>
    <pre class="language-python"><code>class Person:
      def init(self, name, age):
        self.name = name
        self.age = age

    p1 = Person("John", 36)

    print(p1.name)
    print(p1.age)</code></pre>', false, 2, 8, 3, 'Think of html as the skeleton of your web pages!', 7),
    
    ('How to Set Up a Class in Python', '2023-02-15', '<p>Python uses an <u>init</u> constructor to set up classes!</p>
    <p>&nbsp;</p>
    <pre class="language-python"><code>class Person:
      def init(self, name, age):
        self.name = name
        self.age = age

    p1 = Person("John", 36)

    print(p1.name)
    print(p1.age)</code></pre>', false, 8, 1, 3, 'Python is an object oriented programming language. Almost everything in Python is an object, with its properties and methods. A Class is like an object constructor, or a "blueprint" for creating objects.', 8);




