---
layout: page
title: 《Web前端开发最佳实践》第六章 引用7
fullview: false
---

<p>《Web前端开发最佳实践》第六章 引用7：Order of the Day: CSS Properties</p>
<p>来源：<a title="http://fordinteractive.com/2009/02/order-of-the-day-css-properties" href="http://fordinteractive.com/2009/02/order-of-the-day-css-properties">http://fordinteractive.com/2009/02/order-of-the-day-css-properties</a></p>
<p>I’ve posted my preferred way of ordering CSS properties within a declaration block to its own page in the Code section. It’s evolved over time, but what I decided on goes something like this:</p>
<ol>
    <li>Display &amp; Flow</li>
    <li>Positioning</li>
    <li>Dimensions</li>
    <li>Margins, Padding, Borders, Outline</li>
    <li>Typographic Styles</li>
    <li>Backgrounds</li>
    <li>Opacity, Cursors, Generated Content</li>
</ol>
<p><br />Here’s the code example:</p>
<pre class="brush: css; auto-links: true; collapse: false; first-line: 1; gutter: true; html-script: false; light: false; ruler: false; smart-tabs: true; tab-size: 4; toolbar: true;">el {
    display: ;
    visibility: ;
    float: ;
    clear: ;

    position: ;
    top: ;
    right: ;
    bottom: ;
    left: ;
    z-index: ;

    width: ;
    min-width: ;
    max-width: ;
    height: ;
    min-height: ;
    max-height: ;
    overflow: ;

    margin: ;
    margin-top: ;
    margin-right: ;
    margin-bottom: ;
    margin-left: ;

    padding: ;
    padding-top: ;
    padding-right: ;
    padding-bottom: ;
    padding-left: ;

    border: ;
    border-top: ;
    border-right: ;
    border-bottom: ;
    border-left: ;

    border-width: ;
    border-top-width: ;
    border-right-width: ;
    border-bottom-width: ;
    border-left-width: ;

    border-style: ;
    border-top-style: ;
    border-right-style: ;
    border-bottom-style: ;
    border-left-style: ;

    border-color: ;
    border-top-color: ;
    border-right-color: ;
    border-bottom-color: ;
    border-left-color: ;

    outline: ;

    list-style: ;

    table-layout: ;
    caption-side: ;
    border-collapse: ;
    border-spacing: ;
    empty-cells: ;

    font: ;
    font-family: ;
    font-size: ;
    line-height: ;
    font-weight: ;
    text-align: ;
    text-indent: ;
    text-transform: ;
    text-decoration: ;
    letter-spacing: ;
    word-spacing: ;
    white-space: ;
    vertical-align: ;
    color: ;

    background: ;
    background-color: ;
    background-image: ;
    background-repeat: ;
    background-position: ;

    opacity: ;

    cursor: ;

    content: ;
    quotes: ;
    }

</pre>
<p>The somewhat subjective idea is to apply properties in the order that they affect the box model. Did I mention subjective? Perhaps it is, but it makes sense to me and I’m sticking with it. This is more of a self-imposed guideline than it is any kind of outward recommendation.</p>
<p>There is no right or wrong way to order CSS properties, but I’m a strong proponent of picking some kind of method and sticking with it for the sake of consistency.</p>
<p><strong>Why Not Alphabetical?<br /></strong>Let me first say that while I have my own preference, my next choice would be to alphabetize. What I don’t like about alphabetization is that certain properties – in my mind – have inherent logical connections and should not be separated from each other. Probably the best example is width and height (and min-width and min-height). Another example is position, top, right, bottom, and left. To me, these properties are too interdependent to separate.</p>
<p>Typographically, I really like font-family, font-size, and line-height grouped together – and in that order. I also think that other typographic properties like letter-spacing, text-transform, and color all group with each other conceptually and I’d rather not have them separated in the alphabetical shuffle.</p>
<p>class=“advice” rel=“nofollow”<br />If the approach I take doesn’t suit you, then by all means go with what works for you. My only recommendation is to adopt some kind of order rather than none.</p>
<p><strong>What About CSS3?<br /></strong>You may have noticed a lack of CSS3 properties. I’ve only worked on a few projects where it was practical to use CSS3 properties (and/or their browser-specific implementations). And these have mostly been limited to border-radius, text-shadow, and box-shadow. I found myself putting border-radius and box-shadow near the end with the ‘Background’ and ‘Opacity et al’ groups; and I put text-shadow in with the Typographic Styles group. While ‘border-radius’ sounds like it might logically group with ‘border’, I don’t think it does as the box model is not impacted by ‘border-radius’ in the way it is with ‘border’ (increase in overall width and/or height). To me, it’s a visual effect more akin to something like ‘background’.</p>
<p><strong>Further Reading</strong><br />I couldn’t find a lot that has been written on this subject. Perhaps it’s absolute minutiae. Perhaps CSS developers have more important things to worry about.</p>
<p>Doug Bowman spent a paragraph on it 4 years ago. Makes me wonder if his approach has evolved or stayed mostly the same.</p>
<p>CSS Property Order Convention by Neatly Sliced recently advocated alphabetization.</p>
<p>I started this thread on SitePoint a few weeks ago.</p>
<p>A recent article on NETTUTS recommended alphabetization and (as is not uncommon for these types of matters) an all out holy war ensued in the comments.</p>
<p>An article at Perishable Press advocates shares one man’s personal preference for ordering property/value pairs based on their character count from longest to shortest. No seriously, I’m not making that up – check it out.</p>
<p>So How Do You Handle CSS Property Ordering?<br />I’m interested to hear from my fellow CSS developers on this. How do you order CSS properties and what’s your reasoning behind your approach?</p>