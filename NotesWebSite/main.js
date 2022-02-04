/*----------------------------------------------------------------------------*/
/*----------------------------- Preparing Classes ----------------------------*/
/*----------------------------------------------------------------------------*/

class Definition {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}
class AdvancedDefinition {
    constructor(definition, subdefs) {
        this.def = definition; //Definition type
        this.subdefs = subdefs; //list of strings
    }
}

/*----------------------------------------------------------------------------*/
/*-------------------------- Preparing DOM elements --------------------------*/
/*----------------------------------------------------------------------------*/

const html_titlesElement = document.getElementById("HTML-ol");
const css_titlesElement = document.getElementById("CSS-ol");
const js_titlesElement = document.getElementById("JS-ol");
const mainContent = document.getElementById("mainContent")

const httpDefinitionsElement = document.getElementById("httpDefinitions");
const cssDefinitionsElement = document.getElementById("cssDefinitions");
const jsDefinitionsElement = document.getElementById("jsDefinitions");

/*----------------------------------------------------------------------------*/
/*---------------------- Preparing HTML notes data ---------------------------*/
/*----------------------------------------------------------------------------*/

var html_definitionsList = [];
var html_notesList = [];

html_definitionsList.push(new Definition("Element", "just the name of the tag it self."));
html_definitionsList.push(new Definition("Tag", "the element surrounded with &lt;&gt; and usually the closing pair as well."));
html_definitionsList.push(new Definition("&lt;!DOCTYPE html&gt;", "informs web browsers which version of HTML is being used"));
html_definitionsList.push(new AdvancedDefinition(
    new Definition("Attributes", "Attributes are properties used to provide additional information about an element."),
    [
        "id : identifies an element",
        "class : classifies an element",
        "src : specifies a source for embeddable content",
        "href : provides a hyperlink reference to a linked resource.",
        "rel : The rel attribute specifies the relationship between the current document and the linked document (only used if the href attribute is present)"
    ]
))
html_definitionsList.push(new Definition("Self-Closing Elements", "&lt;img&gt; &lt;br&gt; &lt;meta&gt; &lt;input&gt; &lt;source&gt; &lt;hr&gt; &lt;wbr&gt; &lt;embed&gt; &lt;link&gt;"));
html_definitionsList.push(new Definition("&lt;html&gt;", "signifies the beginning and end of the document."));
html_definitionsList.push(new Definition("&lt;head&gt;", "identifies the top of the document including any metadata."));
html_definitionsList.push(new Definition("&lt;meta charset=\"utf-8\"&gt;", "defines the character encoding of the page"));
html_definitionsList.push(new Definition("&lt;title&gt;", "defines the title of the document"));
html_definitionsList.push(new Definition("&lt;body&gt;", "All of the visible content within the web page will fall within it"));
html_definitionsList.push(new Definition("&lt;h1&gt;", "includes a heading "));
html_definitionsList.push(new Definition("&lt;p&gt;", "includes a paragraph"));
html_definitionsList.push(new Definition("&lt;span&gt;", "inline-level element"));
html_definitionsList.push(new Definition("&lt;strong&gt; and &lt;b&gt;", "To make text bold and place a strong importance on it (inline-level element) "));
html_definitionsList.push(new Definition("&lt;em&gt; and &lt;i&gt;", "To italicize text (inline-level element)"));
html_definitionsList.push(new Definition("&lt;header&gt;", "used to identify the top of a page"));
html_definitionsList.push(new Definition("&lt;nav&gt;", "element identifies a section of major navigational links on a page."));
html_definitionsList.push(new Definition("&lt;a&gt;", "Miscellaneous one-off links should not be wrapped within "));
html_definitionsList.push(new Definition("&lt;nav&gt;", "they should use the anchor element (inline element)"));
html_definitionsList.push(new Definition("&lt;article&gt;", "used to identify a section of independent, self-contained content that may be independently distributed or reused"));
html_definitionsList.push(new Definition("&lt;section&gt;", "used to identify a thematic grouping of content, which generally, but not always, includes a heading. "));
html_definitionsList.push(new Definition("&lt;aside&gt;", "holds content, such as sidebars, inserts, or brief explanations, that is tangentially related to the content surrounding it. "));
html_definitionsList.push(new Definition("&lt;footer&gt;", "identifies the closing or end of a page, article, section, or other segment of a page. "));
html_definitionsList.push(new Definition("&lt;cite&gt;", "Used to reference a creative work, author, or resource"));
html_definitionsList.push(new Definition("&lt;q&gt;", "Used for short, inline quotations"));
html_definitionsList.push(new Definition("&lt;blockquote&gt;", "Used for longer external quotations"));
html_definitionsList.push(new Definition("&lt;ul&gt;", "unordered list block-level element"));
html_definitionsList.push(new Definition("&lt;li&gt;", "each item in a list is individually marked up using the list item element"));
html_definitionsList.push(new AdvancedDefinition(
    new Definition("&lt;ol&gt;", "The ordered list element"),
    [
        "&lt;ol start=\"30\"&gt; The start attribute defines the number from which an ordered list should start. ",
        "&lt;ol reversed&gt; allows a list to appear in reverse order"
    ]
))
html_definitionsList.push(new AdvancedDefinition(
    new Definition("&lt;img&gt;", "tag is used to embed an image in an HTML page. "),
    [
        "&lt;img src=\"assets/images/myImg.jpg\" alt=\"Short description here\"&gt;"
    ]
))
html_definitionsList.push(new AdvancedDefinition(
    new Definition("&lt;audio&gt;", "used to embed sound content in documents."),
    [
        "&lt;audio src=\"jazz.ogg\" autoplay controls loop preload=\"none\"&gt;&lt;/audio&gt;",
        "When the preload attribute isn’t present on the &lt;audio&gt; element, all information about an audio file is loaded, as if the value was set to auto. For this reason, using the preload attribute with a value of metadata or none is a good idea when an audio file is not essential to a page. It’ll help to conserve bandwidth and allow pages to load faster.",
        "Using a &lt;source&gt; element and src attribute for each file format, we can list one audio file format after the other. We’ll use the type attribute to quickly help the browser identify which audio types are available. When a browser recognizes an audio file format it will load that file and ignore all the others (fallback strategy)."
    ]
))
html_definitionsList.push(new AdvancedDefinition(
    new Definition("&lt;video&gt;", "used to embed video content in documents."),
    [
        "aside of every other proprety existing in the audio tag, u can also add the poster attribute",
        "&lt;video src=\"earth.ogv\" controls poster=\"earth-video-screenshot.jpg\"&gt;&lt;/video&gt;"
    ]
))
html_definitionsList.push(
    new Definition("&lt;iframe&gt;", "a way to add content to a page is to embed another HTML page within the current page. ")
)
html_definitionsList.push(
    new Definition("&lt;figure&gt;", "block-level element is used to identify and wrap self-contained content, often in the form of media. It may surround images, audio clips, videos, blocks of code, diagrams, illustrations, or other self-contained media"),
)
html_definitionsList.push(new AdvancedDefinition(
    new Definition("&lt;form&gt;", "element is used to add a form to a page"),
    [
        "action attribute contains the URL to which information included within the form will be sent for processing by the server.",
        "method attribute is the HTTP method browsers should use to submit the form data."
    ]
))
html_definitionsList.push(new AdvancedDefinition(
    new Definition("&lt;input&gt;", "is one of the primary elements used to obtain text from users"),
    [
        "type attribute to define what type of information is to be captured within the control.",
        "name attribute value is used as the name of the control and is submitted along with the input data to the server."
    ]
))
html_definitionsList.push(
    new Definition("&lt;textarea&gt;", "element differs from the &lt;input&gt; element in that it can accept larger passages of text spanning multiple lines.")
)
html_definitionsList.push(new AdvancedDefinition(
    new Definition("Radio button", "to create a Radio button use the &lt;input&gt; element is used with a type attribute value of radio."),
    [
        "we have to define the input value using the value attribute",
        "Check boxes are very similar to radio buttons. They use the same attributes and patterns, with the exception of checkbox as their type attribute value. The difference between the two is that check boxes allow users to select multiple values and tie them all to one control name, while radio buttons limit users to one value."
    ]
))
html_definitionsList.push(new AdvancedDefinition(
    new Definition("&lt;select&gt;", "element wraps all of the menu options, and each menu option is marked up using the &lt;option&gt; element. The name attribute resides on the &lt;select&gt; element, and the value attribute resides on the &lt;option&gt; elements that are nested within the &lt;select&gt; element. The value attribute on each &lt;option&gt; element then corresponds to the name attribute on the &lt;select&gt; element."),
    [
        "selected Boolean attribute to preselect an option for users."
    ]
))
html_definitionsList.push(new AdvancedDefinition(
    new Definition("Submit Input", "Users click the submit button to process data after filling out a form. "),
    [
        "The submit button is created using the &lt;input&gt; element with a type attribute value of submit.",
        "The value attribute is used to specify the text that appears within the button."
    ]
))
html_definitionsList.push(
    new Definition("File Input", "To allow users to add a file to a form, much like attaching a file to an email, use the file value for the type attribute."),
)
html_definitionsList.push(new AdvancedDefinition(
    new Definition("&lt;label&gt;", "Labels provide captions or headings for form controls"),
    [
        "for attribute should be the same as the value of the id attribute on the form control the label corresponds to. Matching up the for and id attribute values ties the two elements together"
    ]
))
html_definitionsList.push(
    new Definition("&lt;fieldset&gt;", "Much like a &lt;section&gt; or other structural element"),
)
html_definitionsList.push(
    new Definition("&lt;legend&gt;", "element wraps text describing the form controls that fall within the fieldset."),
)
html_definitionsList.push(new AdvancedDefinition(
    new Definition("Form & Input Attributes", ""),
    [
        "disabled turns off an element so that it is not available for interaction or input",
        "placeholder attribute provides a hint or tip within the form control of an &lt;input&gt; or &lt;textarea&gt; element that disappears once the control is clicked in or gains focus",
        "required attribute enforces that an element or form control must contain a value upon being submitted to the server (can be styled using the :optional and :required CSS pseudo-classes.) "
    ]
))
html_definitionsList.push(
    new Definition("&lt;table&gt;", "element used to initialize a table on a page.")
)
html_definitionsList.push(
    new Definition("&lt;tr&gt;", "once a table has been defined in HTML, table rows may be added using the &lt;tr&gt;")
)
html_definitionsList.push(
    new Definition("&lt;td&gt;", " once a table is defined and rows within that table have been set up, data cells may be added to the table via the table data, or &lt;td&gt;, element. ")
)
html_definitionsList.push(
    new Definition("&lt;th&gt;", "table header scope attribute helps to identify exactly what content a table header relates to"),
)
html_definitionsList.push(new AdvancedDefinition(
    new Definition("More about tables", "there are a few additional elements to help us organize the data and structure of a table. These elements include &lt;caption&gt;, &lt;thead&gt;, &lt;tbody&gt;, and &lt;tfoot&gt;."),
    [
        "&lt;caption&gt; element provides a caption or title for a table.",
        "&lt;thead&gt; wraps the heading row or rows of a table to denote the head.",
        "&lt;tfoot&gt; element contains data that outlines the contents of a table.",
        "The colspan attribute is used to span a single cell across multiple columns within a table, while the rowspan attribute is used to span a single cell across multiple rows."
    ]
))
html_definitionsList.push(new AdvancedDefinition(
    new Definition("Semantic code ", "describes the value of content on a page, regardless of the style or appearance of that content"),
    [
        "&lt;div&gt;s and &lt;span&gt;s actually don’t hold any semantic value. They exist for styling purposes only."
    ]
))
html_definitionsList.push(new AdvancedDefinition(
    new Definition("HTML Coding Practices", ""),
    [
       "Make Use of Semantic Elements",
        "Use the Proper Document Structure",
        "Keep the Syntax Organized",
        "Use Practical ID & Class Values",
        "Separate Content from Style",
        "Avoid a Case of “Divitis",
        "Continually Refactor Code"
    ]
))
html_notesList.push("To change text direction and make the text go right-to-left. &lt;bdo dir=\"rtl\"&gt;&lt;/bdo&gt;")
html_notesList.push("To display full abbreviation text : &lt;abbr title=\"World Health Organization\"&gt; WHO&lt;/abbr&gt;")
html_notesList.push("The &lt;button&gt; element performs the same way as the &lt;input&gt; element with the type attribute value of submit")
html_notesList.push("Each encoded character will begin with an ampersand, &, and end with a semicolon, ; What falls between the ampersand and semicolon is a character’s unique encoding, be it a name or numeric encoding.")
html_notesList.push("To create an email link, the href attribute value needs to start with mailto: we can include the subject= parameter after the email addressfirst parameter following the email address must begin with a question mark, ?, to bind it to the hyperlink path. Multiple words within a subject line require that spaces be encoded using %20.Adding body text works in the same way as adding the subject, this time using the body= parameter in the href attribute value. Because we are binding one parameter to another we need to use the ampersand, &, to separate the two. As with the subject, spaces must be encoded using %20, and line breaks must be encoded using %0A. &lt;a href=\"mailto:shay@awesome.com?subject=Reaching%20Out&body=How%20are%20you\"&gt;Email Me&lt;/a&gt;")
html_notesList.push("To trigger the action of opening a link in a new window, use the target attribute with a value of _blank.")
html_notesList.push(" We can create an on-page link by first setting an id attribute on the element we wish to link to, then using the value of that id attribute within an anchor element’s href attribute.")

/*----------------------------------------------------------------------------*/
/*----------------------- Preparing CSS notes data ---------------------------*/
/*----------------------------------------------------------------------------*/

var css_definitionsList = [];
var css_notesList = [];

css_definitionsList.push(new Definition("Selectors", "selector designates exactly which element or elements within our HTML to target and apply styles, Selectors generally target an attribute value, such as an id or class value, or target the type of element common selectors: type, class, and ID selectors."))
css_definitionsList.push(
    new Definition("Properties", "There are numerous properties we can use, such as background, color, font-size, height, and width"))
css_definitionsList.push(
    new Definition("Values", "determine the behavior of that property with a value."))
css_definitionsList.push(
    new Definition("CSS resets", "take every common HTML element with a predefined style and provide one unified style for all browsers (Eric Meyer’s reset)"))
css_definitionsList.push(new AdvancedDefinition(
    new Definition("Specificity Points", ""),
    [
        "The type selector has the lowest specificity weight and holds a point value of 0-0-1.",
        "The class selector has a medium specificity weight and holds a point value of 0-1-0. ",
        "Lastly, the ID selector has a high specificity weight and holds a point value of 1-0-0. ",
        "Using multiple classes, we can layer on as many styles as we wish, keeping our code lean and our specificity weights low",
        "Specificity Within Combined Selectors usually applies in spaces with a simple + operation"
    ]
))
css_definitionsList.push(new AdvancedDefinition(
    new Definition("Lenghts", ""),
    [
        "The \"em\" unit, its length is calculated based on an element’s font size a single em unit is equivalent to an element’s font size",
        "The \"%\" unit, Percentage lengths are defined in relation to the length of another object ( parent object )",
        "The \"rem\" unit, Represents the font-size of the root element (typically &lt;html&gt;).",
        "The \"vh\" unit, Equal to 1% of the height of the viewport's initial containing block.",
        "The \"vw\" unit, Equal to 1% of the width of the viewport's initial containing block."
    ]
))
css_definitionsList.push(new AdvancedDefinition(
    new Definition("Box model", ""),
    [
        "Each part of the box model corresponds to a CSS property: width, height, padding, border, and margin.",
        "total width = margin-right + border-right + padding-right + width + padding-left + border-left + margin-left",
        "total height = margin-top + border-top + padding-top + height + padding-bottom + border-bottom + margin-bottom",
    ]
))
css_definitionsList.push(new AdvancedDefinition(
    new Definition("vendor prefixes", ""),
    [
        "-moz- = used for Mozilla Firefox ",
        "-ms- = used for Microsoft Internet Explorer",
        "-o- = used for Opera",
        "-webkit- = used for Google Chrome and Apple Safari browsers."
    ]
))
css_definitionsList.push(new AdvancedDefinition(
    new Definition("Box Sizing", ""),
    [
        "Content Box : The content-box value is the default value, leaving the box model as an additive design.",
        "Padding Box : As any padding values increase, the content size within an element shrinks proportionately. ( has been deprecated and should not be used. ) border or padding property values are included within the width and height of an element ( but not the margin ! )"
    ]
))
css_definitionsList.push(new AdvancedDefinition(
    new Definition("Combined Selectors", ""),
    [
        "selector1 &gt; selector2 : means this applies to every selector2 which is an immediate child of selector1",
        "selector1 + selector2 : applies to the first selector2 element that is directly after a selector1 element",
        "selector1 ~ selector2 : applies to selector2 elements that are siblings of a selector1 element",
        "a[target] Set the background color to x for &lt;a&gt; elements that have a target attribute.",
        "Spaces Within Selectors : .class1 .class2 =&gt; this applies to all class2 elements inside of a class1",
        "Commas between Selectors : The comma at the end of the first selector signifies that another selector is to follow",
        "last-child and first-child gives u access to different sub-elements",
        ":nth-child pseudo-class selector with an even or odd argument to select every other &lt;tr&gt; element.",
        ":first-of-type pseudo-class selector will select the first element of its type within a parent element",
        ":only-of-type pseudo-class selector will select an element if it’s the only element of its type within a parent element.",
    ]
))
css_definitionsList.push(new AdvancedDefinition(
    new Definition("Float", "The float property accepts a few values; the two most popular values are left and right, which allow elements to be floated to the left or right of their parent element."),
    [
        "When we float an element, we take it out of the normal flow of the HTML document. This causes the width of that element to default to the width of the content within it. Sometimes, such as when we’re creating columns for a reusable layout, this behavior is not desired. It can be corrected by adding a fixed width property value to each column. Additionally, to prevent floated elements from touching one another, causing the content of one to sit directly next to the content of the other, we can use the margin property to create space between elements.",
        "The float property relies on an element having a display value of block, and may alter an element’s default display value if it is not already displayed as a block-level element."
    ]
))
css_definitionsList.push(new Definition("Clearing Floats", "To prevent content from wrapping around floated elements Clearing floats is accomplished using the clear property, which accepts a few different values: the most commonly used values being left, right, and both."));
css_definitionsList.push(new Definition("Position", "By default every element has a position value of static, which means that it exists in the normal flow of a document and it doesn’t accept any box offset properties"));
css_definitionsList.push(new AdvancedDefinition(
    new Definition("Relative (position)", "relatively positioned elements, it’s important to know that the box offset properties identify where an element will be moved from given its original position it appears within the normal flow of a document !"),
    [
        "When we position the element using the box offset properties, the element overlaps the element below it rather than moving that element down as the margin or padding properties would."
    ]
))
css_definitionsList.push(new AdvancedDefinition(
    new Definition("Absolute (position)", "absolute value for the position property is different from the relative value in that an element with a position value of absolute will not appear within the normal flow of a document, and the original space and position of the absolutely positioned element will not be preserved."),
    [
        "Additionally, absolutely positioned elements are moved in relation to their closest relatively positioned parent element. ",
        "if a relatively positioned parent element not exist, the absolutely positioned element will be positioned in relation to the &lt;body&gt; element"
    ]
))
css_definitionsList.push(new Definition("common propreties", "color, font-family, font-weight, font-variant, line-heigh, text-align, text-decoration, text-indent, box-shadow, text-transform, letter-spacing, word-spacing, background, background-color, background-image(with url(\"\")), background-repeat, background-position, background-size, background-clip, background-origin, list-style-type, list-style-position, background-attachment"));
css_definitionsList.push(new Definition("typeface", "is what we see. It is the artistic impression of how text looks, feels, and reads."));
css_definitionsList.push(new Definition("font", "is a file that contains a typeface. Using a font on a computer allows the computer toaccess the typeface."));
css_definitionsList.push(new AdvancedDefinition(
    new Definition("Line height", "The best practice for legibility is to set the line-height to around one and a half times our font-size property value."),
    [
        "Line height may also be used to vertically center a single line of text within an element. Using the same property value for the line-height and height properties will vertically center the text",
    ]
))
css_definitionsList.push(new AdvancedDefinition(
    new Definition("Transition", ""),
    [
        "transition: width 2s;",
        "transition-timing-function: ease-in-out;",
        "transition-delay: 0.5s;"
    ]
))
css_definitionsList.push(new AdvancedDefinition(
    new Definition("Animations", ""),
    [
        "animation-name: example;",
        "animation-duration: 2s;",
        "animation-delay: 1s; (1 second delay before starting.)",
        "animation-iteration-count: infinite; (continue to loop for ever.)",
        "animation-direction: alternate; (alternate between running forwards and backwards.)",
        "animation-timing-function: ease-in-out; (ease-in-out speed curve animation)",
    ]
))
css_definitionsList.push(new Definition("@keyframes", "definies an animation keyframes"));

css_definitionsList.push(new AdvancedDefinition(
    new Definition("CSS Coding Practices", ""),
    [
        "Organize Code with Comments",
        "Write CSS Using Multiple Lines & Spaces",
        "Use Proper Class Names",
        "Use Shorthand Properties & Values",
        "Drop Units from Zero Values",
        "Modularize Styles for Reuse"
    ]
))


css_notesList.push("All styles will cascade from the top of our style sheet to the bottom of our style sheet. There are, however, times where the cascade doesn’t play so nicely. Those times occur when different types of selectors are used and the specificity of those selectors breaks the cascade")
css_notesList.push("Please keep in mind that inline-level elements will not accept the width and height properties or any values tied to them. Block and inline-block elements will, however, accept the width and height properties and their corresponding values. One oddity with the margin property is that vertical margins, top and bottom, are not accepted by inline-level elements. These vertical margins are, however, accepted by block-level and inline-block elements. The padding property, unlike the margin property, works vertically on inline-level elements. This vertical padding may blend into the line above or below the given element, but it will be displayed.")
css_notesList.push("we can use the universal selector, *, along with universal pseudo-elements, *:before and *:after, to select every imaginable element")
css_notesList.push("Using a left and right margin of auto in conjunction with this width lets the browser automatically figure out equal left and right margins for the element, thus centering it on the page")
css_notesList.push("The :before and :after pseudo-elements also mentioned in this step are elements that can be dynamically generated with CSS.")
css_notesList.push("Recall that the inline-block value for the display property will display elements within a line while allowing them to accept all box model properties, including height, width, padding, border, and margin (make sure to Remove Spaces Between Inline-Block Elements !! ( use HTML solutions ))")
css_notesList.push("With relatively positioned elements, the box offset properties identify in which direction an element would be moved in relation to itself. With absolutely positioned elements, the box offset properties identify in which direction an element will be moved in relation to its closest relatively positioned parent element")
css_notesList.push("{background-attachment : fixed} makes the image fixed in its position (doesnt scroll)");
css_notesList.push("the box-shadow property may include an optional inset value at the beginning of the valueto place the shadow inside an element as opposed to outside the element.");
css_notesList.push("use CSS @font-face at-rule to embbed ur own fonts");
css_notesList.push("when dealing with gradients use background or background-image not background-color and make sure to use the following background: linear-gradient(50deg, #648880, #293f50); or radial-gradient(#648880, #293f50); we can also use \"Gradient Color Stops\"");
css_notesList.push("To align text vertically, however, the vertical-align property is used. The vertical-align property works only with inline and table-cell elements—it won’t work for block, inline-block, or any other element levels.");
css_notesList.push("text-overflow:ellipsis; Specify that the overflowed content should be signaled with an ellipsis (...).");
css_notesList.push("word-wrap:break-word; Specify that text should wrap, even if it needs to split in the middle of a word.");

/*----------------------------------------------------------------------------*/
/*------------------------ Preparing JS notes data ---------------------------*/
/*----------------------------------------------------------------------------*/

var js_definitionsList = [];
var js_notesList = [];

js_definitionsList.push(new AdvancedDefinition(
    new Definition("Anonymous function", "anonymous function is simply a function without a name. Anonymous functions can either be used as a parameter for another function, or it can be turned into a function expression."),
    [
        "We can add event listeners using the anonymous function : el.addEventListener(\"click\", function() { alert(\"Alert!\"); } );",
        "When we turn it into a function expression, we assign the anonymous function to a variable. The variable name will then act as the function’s name.",
        "Like anonymous functions, arrow functions can be turned into function expressions."
    ]
))
js_definitionsList.push(new AdvancedDefinition(
    new Definition("addEventListener", "we can set capturing to true"),
    [
        "capturing will handle the outer (parent) elements event first, then the inner(child) elements",
        "bubbling will handle the inner elements first"
    ]
))
js_definitionsList.push(new AdvancedDefinition(
    new Definition("JS async", ""),
    [
        "async : makes a function return a Promise",
        "await : makes a function wait for a Promise"
    ]
))
js_definitionsList.push(new AdvancedDefinition(
    new Definition("JS and HTML", ""),
    [
        "The textContent proprety will return all text, including anything inside a hidden element",
        "The innerText proprety will return all text, excluding anything inside a hidden element",
        "The innerHTML proprety will return both text and any other HTML content inside the element",
        "Js also provides us with getAttribute, setAttribute, hasAttribute"
    ]
))

js_definitionsList.push(new AdvancedDefinition(
    new Definition("Date", ""),
    [
        "d.getFullYear() =&gt; returns the current year in 4 digits",
        "d.getMonth() =&gt; gets the month (0-11) out of a date object.",
        "d.setFullYear(2020) as the methode's name says.",
    ]
))

js_notesList.push("Inline (HTML element embedded) event handlers is considered a bad practice!")
js_notesList.push("the keyword async before a function makes the function return a Promise the await keyword can only be used inside an async function")


/*----------------------------------------------------------------------------*/
/*-------------------- Preparing Common functions ----------------------------*/
/*----------------------------------------------------------------------------*/

function scrollToElement(event) {
    const element = document.getElementById(event.target.href);
    mainContent.scroll({
        top: element.offsetTop - 60,
        behavior: 'smooth'
    });
}
function buildDefinitions(def, section) {
    if (def.constructor.name == "Definition") {
        var div = document.createElement("div");
        div.classList.add("definition");
        var h2 = document.createElement("h2");
        var p = document.createElement("p");
        h2.innerHTML = def.title;
        p.innerHTML = def.description;
        div.appendChild(h2);
        div.appendChild(p);
        div.id = def.title + "HTML";
        var li = document.createElement("li");
        li.innerHTML = def.title;
        li.href = def.title + "HTML";
        li.addEventListener("click", scrollToElement)
        switch (section) {
            case "HTML":
                httpDefinitionsElement.appendChild(div);
                html_titlesElement.appendChild(li);
                break;
            case "CSS":
                cssDefinitionsElement.appendChild(div);
                css_titlesElement.appendChild(li);
                break;
            case "JS":
                jsDefinitionsElement.appendChild(div);
                js_titlesElement.appendChild(li);
                break;
            default:
                break;
        }
    } else {
        var div = document.createElement("div");
        div.classList.add("definition");
        div.id = def.def.title + "HTML";
        var h2 = document.createElement("h2");
        var p = document.createElement("p");
        var ul = document.createElement("ul");
        ul.classList.add("pl-30");
        h2.innerHTML = def.def.title;
        p.innerHTML = def.def.description;
        def.subdefs.forEach(subdef => {
            var li = document.createElement("li");
            li.innerHTML = subdef;
            ul.appendChild(li);
        });
        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(ul);
        var li = document.createElement("li");
        li.innerHTML = def.def.title;
        li.href = def.def.title + "HTML";
        li.addEventListener("click", scrollToElement)
        switch (section) {
            case "HTML":
                httpDefinitionsElement.appendChild(div);
                html_titlesElement.appendChild(li);
                break;
            case "CSS":
                cssDefinitionsElement.appendChild(div);
                css_titlesElement.appendChild(li);
                break;
            case "JS":
                jsDefinitionsElement.appendChild(div);
                js_titlesElement.appendChild(li);
                break;
            default:
                break;
        }
    }
}
function buildNote(note, section) {
    var div = document.createElement("div");
    div.classList.add("Note");
    var h3 = document.createElement("h3");
    var p = document.createElement("p");
    h3.innerHTML = "Note !";
    p.innerHTML = note;
    div.appendChild(h3);
    div.appendChild(p);
    switch (section) {
        case "HTML":
            httpDefinitionsElement.appendChild(div);
            break;
        case "CSS":
            cssDefinitionsElement.appendChild(div);
            break;
        case "JS":
            jsDefinitionsElement.appendChild(div);
            break;
        default:
            break;
    }
}
/*----------------------------------------------------------------------------*/
/*------------------------------- Building UI --------------------------------*/
/*----------------------------------------------------------------------------*/

html_definitionsList.forEach(def => buildDefinitions(def, "HTML"));
html_notesList.forEach(note => buildNote(note, "HTML"));
css_definitionsList.forEach(def => buildDefinitions(def, "CSS"));
css_notesList.forEach(note => buildNote(note, "CSS"));
js_definitionsList.forEach(def => buildDefinitions(def, "JS"));
js_notesList.forEach(note => buildNote(note, "JS"));


buildDefinitions(new Definition("Arrays", ""), "JS");