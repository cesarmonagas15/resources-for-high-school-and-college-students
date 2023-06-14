let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);


// store buttons
let highSchoolBtn = document.getElementById("high-school-btn");
let collegeBtn = document.getElementById("college-btn");

let resourcesContainer = document.getElementById("resources-container");

function generateHighSchoolSection () {
  highSchoolBtn.classList.toggle('button-active');

  if (highSchoolBtn.className === "button-active"){
    // create title
    let title = document.createElement('h1');
    title.classList.add('title');
    let titleContent = document.createTextNode('High School Students Resources');
    title.appendChild(titleContent);
  

    // create subtitle
    let subtitle = document.createElement('h2');
    subtitle.classList.add('subtitle');
    let subtitleContent = document.createTextNode("AP/IB and Advanced Classes");
    subtitle.appendChild(subtitleContent);


    // create text section
    let textSection = document.createElement('section');
    textSection.classList.add('text');
    
    let p1 = document.createElement('p');
    let apText = document.createTextNode(' (AP), ');
    let ibText = document.createTextNode(' (IB), ');

    // AP link
    let apLink = document.createElement('a');
    apLink.setAttribute("href","https://ap.collegeboard.org/");
    apLink.setAttribute("target", "_blank" );
    let apContent = document.createTextNode('Advanced Placement');
    apLink.appendChild(apContent);

    p1.appendChild(apLink);
    p1.appendChild(apText);

    // IB link
    let ibLink = document.createElement('a');
    ibLink.setAttribute("href","https://ap.collegeboard.org/");
    ibLink.setAttribute("target", "_blank" );
    let ibContent = document.createTextNode('International Baccauleareate');
    ibLink.appendChild(ibContent);

    p1.appendChild(apLink);
    p1.appendChild(apText);
    p1.appendChild(ibLink);
    p1.appendChild(ibText);

    let dualCreditLink = document.createElement('a');
    dualCreditLink.setAttribute('href', 'https://www.savingforcollege.com/article/what-is-dual-enrollment');
    dualCreditLink.setAttribute('target', '_blank');
    let dualCreditContent = document.createTextNode('dual-credit');
    dualCreditLink.appendChild(dualCreditContent);
    p1.appendChild(dualCreditLink);
    p1.appendChild(document.createTextNode(' and advanced courses are some of the most important ways to help students succeed.'));

    let p2 = document.createElement('p');
    let p2Content = document.createTextNode('💡 Did you know Latinos only make up about 20% of all AP test takers? And less than half score a 3 or above');
    p2.appendChild(p2Content);

    let p3 = document.createElement('p');
    let p3Content = document.createTextNode('Advanced classes are ways for high school students to challenge themselves academically and prepare for college-level learning. Failure to matriculate in such classes often results in lower college enrollment percentages and higher dropout rates.');
    p3.appendChild(p3Content);

    let p4 = document.createElement('p');
    let p4Content = document.createTextNode('💡 Did you know that 42% of Latino community college students drop out?');
    p4.appendChild(p4Content);

    let p5 = document.createElement('p');
    let p5Content = document.createTextNode('Matriculation in advanced coursework closely correlates with performance in higher education, and college graduates are more likely to have better salaries and opportunities than their non-college-graduate counterparts. Advanced classes are one of the main ways to ensure that Latino youth are growing intellectually and preparing themselves to succeed in society. If you are a Latino high school student, I would strongly encourage you to take advanced classes! Even if it\'s only a few classes, challenging yourself with topics that are interesting to you will serve you well when it comes to preparing you for college and professional opportunities.');
    p5.appendChild(p5Content);

    let p6 = document.createElement('p');
    let p6Content = document.createTextNode('Below are some resources to explore more about advanced classes:');
    p6.appendChild(p6Content);

    let ul = document.createElement('ul');
    let resources = [
      { text: 'AP Classes: Are They Worth It?', link: 'https://www.bestcolleges.com/blog/ap-classes-are-they-worth-it/' },
      { text: '5 Benefits of Taking AP Classes in High School', link: 'https://www.princetonreview.com/college-advice/ap-classes' },
      { text: 'Which AP Classes Should You Take?', link: 'https://www.bestcolleges.com/blog/which-ap-classes-should-you-take/' },
      { text: 'Connect AP to Majors and Careers', link: 'https://apstudents.collegeboard.org/choosing-courses/by-major-career' },
      { text: 'Why choose IB? 10 reasons to study the IB diploma in High School', link: 'https://www.ef.com/wwen/blog/efacademyblog/why-choose-ib-10-reasons-to-study-the-ib-diploma-in-high-school/' }
    ];

    resources.forEach(resource => {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.setAttribute('href', resource.link);
      a.setAttribute('target', '_blank');
      let linkText = document.createTextNode(resource.text);
      a.appendChild(linkText);
      li.appendChild(a);
      ul.appendChild(li);
    });

    textSection.appendChild(p1);
    textSection.appendChild(p2);
    textSection.appendChild(p3);
    textSection.appendChild(p4);
    textSection.appendChild(p5);
    textSection.appendChild(p6);
    textSection.appendChild(ul);

    resourcesContainer.appendChild(subtitle);
    resourcesContainer.appendChild(textSection);


    resourcesContainer.appendChild(title);
    resourcesContainer.appendChild(subtitle);
    resourcesContainer.appendChild(textSection);
  } else {
    resourcesContainer.innerHTML = '';
  }
  


  
};

// generate high school section
highSchoolBtn.addEventListener('click', generateHighSchoolSection);


// let highSchoolBtn = document.getElementById("high-school-btn");
// let collegeBtn = document.getElementById("college-btn");

// let resourcesContainer = document.getElementById("resources-container");

// function generateHighSchoolSection () {
//   highSchoolBtn.classList.toggle('button-active');

//   if (highSchoolBtn.className === "button-active"){
//     // create title
//     let title = document.createElement('h1');
//     title.classList.add('title');
//     let titleContent = document.createTextNode('High School Students Resources');
//     title.appendChild(titleContent);
  

//     // create subtitle
//     let subtitle = document.createElement('h2');
//     subtitle.classList.add('subtitle');
//     let subtitleContent = document.createTextNode("AP/IB and Advanced Classes");
//     subtitle.appendChild(subtitleContent);


//     // create text section
//     let textSection = document.createElement('section');
//     textSection.classList.add('text');
    
//     let p1 = document.createElement('p');
//     let apText = document.createTextNode(' (AP), ');
//     let ibText = document.createTextNode(' (IB), ');

//     // AP link
//     let apLink = document.createElement('a');
//     apLink.setAttribute("href","https://ap.collegeboard.org/");
//     apLink.setAttribute("target", "_blank" );
//     let apContent = document.createTextNode('Advanced Placement');
//     apLink.appendChild(apContent);

//     p1.appendChild(apLink);
//     p1.appendChild(apText);

//     // IB link
//     let ibLink = document.createElement('a');
//     ibLink.setAttribute("href","https://ap.collegeboard.org/");
//     ibLink.setAttribute("target", "_blank" );
//     let ibContent = document.createTextNode('International Baccauleareate');
//     ibLink.appendChild(ibContent);

//     p1.appendChild(apLink);
//     p1.appendChild(apText);
//     p1.appendChild(ibLink);
//     p1.appendChild(ibText);

//     textSection.appendChild(p1);


//     resourcesContainer.appendChild(title);
//     resourcesContainer.appendChild(subtitle);
//     resourcesContainer.appendChild(textSection);
//   } else {
//     resourcesContainer.innerHTML = '';
//   }
  


  
// };

// // generate high school section
// highSchoolBtn.addEventListener('click', generateHighSchoolSection);