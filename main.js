function typeWriter(htmlContent, elementId, index, delay = 5) {
    const element = document.getElementById(elementId);

    // Strip HTML tags and store the text content for comparison
    const strippedText = htmlContent.replace(/(<([^>]+)>)/gi, "");

    if (index < strippedText.length) {
        element.innerHTML = htmlContent.slice(0, index + 1);
        
        // Find the last occurrence of '<' and '>'
        const lastOpenTag = element.innerHTML.lastIndexOf('<');
        const lastCloseTag = element.innerHTML.lastIndexOf('>');

        // If we are currently inside a tag, jump to the end of the tag
        if (lastOpenTag > lastCloseTag) {
            index = htmlContent.indexOf('>', index);
        }

        setTimeout(function() {
            typeWriter(htmlContent, elementId, index + 1, delay);
        }, delay);
    } else {
        // Make sure the entire content is rendered in case of any discrepancies
        element.innerHTML = htmlContent;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('about').addEventListener('click', function() {
        console.log('About Me got clicked')
        document.getElementById('content').innerHTML = '';
        const htmlContent = `Hello, my name is Mark Remmey. I am an AI Cloud Solution Architect at Microsoft. I help companies use Azure AI technologies
        such as Azure OpenAI, Form Recognizer, Cognitive Search, and more to solve problems and meet objectives. 
        Check out my <a href= "https://www.linkedin.com/in/mark-remmey-jr-59b943107/">LinkedIn</a> and <a href= "https://github.com/markremmey">GitHub</a>.`; // Your full HTML content here
        typeWriter(htmlContent, 'content', 0);
    });

    document.getElementById('projects').addEventListener('click', function() {
        document.getElementById('content').HTML = '';
        const htmlContent = `<ul>
        <li>Medici (in progress) - a web application for managing personal finances</li>
        <li>Lyceum (in progress) - an LLM-enabled app to read and understand old books</li>
    </ul>`
        typeWriter(htmlContent, 'content', 0);
    });

    document.getElementById('interesting').addEventListener('click', function() {
        document.getElementById('content').innerHTML = `<a href="https://eugeneyan.com/writing/llm-patterns/">Patterns for Building LLM-Based Systems & Products</a><br>
        <a href="https://arxiv.org/pdf/2307.10169.pdf">Challenges and Applications of LLMs</a><br>
        <a href="https://betterprogramming.pub/you-dont-need-hosted-llms-do-you-1160b2520526">LLM Hosting</a><br>
        <a href="https://www.anyscale.com/blog/tackling-the-cost-and-complexity-of-serving-ai-in-production-ray-serve">Tackling the Cost and Complexity of Model Serving in Production</a><br>
        <a href="https://www.anyscale.com/blog/fine-tuning-llama-2-a-comprehensive-case-study-for-tailoring-models-to-unique-applications">Fine Tuning Llama-2</a>
        <a href=http://www.solipsys.co.uk/new/PaulGrahamEssaysRanking.html>Paul Graham Essay Rankings</a><br>
        <a href="https://slatestarcodex.com/2016/09/12/its-bayes-all-the-way-up/">It's Bayes All the Way Up</a><br>
        <a href="https://www.youtube.com/watch?v=Ah__4g01y_M">Ode to Joy</a><br>
        <a href="https://www.youtube.com/watch?v=v9iQo2BWVb0&t=660s">Napoleon the Man</a><br>`;
    });

    document.getElementById('poem').addEventListener('click', function() {
        document.getElementById('content').HTML = '';
        const htmlContent = "Once upon a midnight dreary, while I pondered, weak and weary,\nOver many a quaint and curious volume of forgotten lore—\n    While I nodded, nearly napping, suddenly there came a tapping,\nAs of some one gently rapping, rapping at my chamber door.\n“’Tis some visitor,” I muttered, “tapping at my chamber door—\n            Only this and nothing more.”\n\n    Ah, distinctly I remember it was in the bleak December;\nAnd each separate dying ember wrought its ghost upon the floor.\n    Eagerly I wished the morrow;—vainly I had sought to borrow\n    From my books surcease of sorrow—sorrow for the lost Lenore—\nFor the rare and radiant maiden whom the angels name Lenore—\n            Nameless here for evermore.\n\n    And the silken, sad, uncertain rustling of each purple curtain\nThrilled me—filled me with fantastic terrors never felt before;\n    So that now, to still the beating of my heart, I stood repeating\n    “’Tis some visitor entreating entrance at my chamber door—\nSome late visitor entreating entrance at my chamber door;—\n            This it is and nothing more.”\n\n    Presently my soul grew stronger; hesitating then no longer,\n“Sir,” said I, “or Madam, truly your forgiveness I implore;\n    But the fact is I was napping, and so gently you came rapping,\n    And so faintly you came tapping, tapping at my chamber door,\nThat I scarce was sure I heard you”—here I opened wide the door;—\n            Darkness there and nothing more.\n\n    Deep into that darkness peering, long I stood there wondering, fearing,\nDoubting, dreaming dreams no mortal ever dared to dream before"
        console.log(htmlContent)
        typeWriter(htmlContent, 'content', 0);
    });

});